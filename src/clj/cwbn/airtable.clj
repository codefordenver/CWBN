(ns cwbn.airtable
  (:require [org.httpkit.client :as http]
            [clojure.tools.logging :as log]
            [jsonista.core :as json]
            [taoensso.carmine :as car :refer [wcar]]
            [cuerdas.core :as cuerdas]
            [clojure.core.async :as async :refer [<! timeout chan go]]))

(declare reset-or-init-redis-cache)

(declare mapper)

(declare fetch-airtable-records)

(def condition (atom true))

(defn hours
  "Converts hours -> milliseconds"
  [n] (* n 36e5))

(def run-every (hours 1/2))

(defn schedule-work []
  (log/info "_*_ Airtable Cache: FETCHING DATA _*_")
  (reset-or-init-redis-cache))

(defn evaluating-condition []
  @condition)

(defn stop-periodic-function []
  (reset! condition false))

(go
  (while (evaluating-condition)
    (<! (timeout run-every))
    (schedule-work)))

(declare get-airtable-data)

(def AIRTABLE_API_KEY (System/getenv "AIRTABLE_API_KEY"))

(def server1-conn {:pool {} :spec {:uri "redis://127.0.0.1:6379"}})

(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))

;; TODO
;; - use clojure.spec to validate key in map - explain when key is not in airtable-records map

(def airtable-records "Airtable's Domain model"
  {:organizations "/Organizations"
   :categories    "/Categories"
   :services      "/Services"
   :types         "/Types"
   :tags          "/Tags"})

(defn- table-lookup [table-key]
  (-> (wcar* (car/get (table-key airtable-records)))
      (json/read-value mapper)))

(defn- find-by-id [id coll]
  (some #(when (= id (-> % :id)) %) coll))

(defmulti name-reconciler
          (fn [table-name]
            (prn table-name)
            table-name))

(defmethod name-reconciler :services
  [table]
  (let [orgs (table-lookup :organizations)
        categories (table-lookup :categories)
        services (table-lookup :services)
        types (table-lookup :types)
        tags (table-lookup :tags)]
    (map (fn [record]
           (let [_categories (-> record :fields :categories)
                 _orgs (-> record :fields :organizations)
                 _types (-> record :fields :type)
                 _tags (-> record :fields :tags)]
             (let [categories (map #(-> (find-by-id % categories) :fields :name) _categories)
                   org-names (map #(-> (find-by-id % orgs) :fields :name) _orgs)
                   type-names (map #(-> (find-by-id % types) :fields :name) _types)
                   tag-names (map #(-> (find-by-id % tags) :fields :name) tags)]
               (-> record
                   (assoc-in [:fields :categories] (vec categories))
                   (assoc-in [:fields :organizations] (vec org-names))
                   (assoc-in [:fields :type] (vec type-names))
                   (assoc-in [:fields :tags] (vec tag-names)))))) services)))

(defmethod name-reconciler :organizations
  [table]
  (let [orgs (table-lookup :organizations)
        categories (table-lookup :categories)
        services (table-lookup :services)
        types (table-lookup :types)
        tags (table-lookup :tags)]
    (map (fn [record]
           (let [_categories (-> record :fields :categories)
                 _services (-> record :fields :services)
                 _types (-> record :fields :type)
                 _tags (-> record :fields :tags)]
             (let [category-names (map #(-> (find-by-id % categories) :fields :name) _categories)
                   service-names (map #(-> (find-by-id % services) :fields :name) _services)
                   type-names (map #(-> (find-by-id % types) :fields :name) _types)
                   tag-names (map #(-> (find-by-id % tags) :fields :name) tags)]
               (-> record
                   (assoc-in [:fields :categories] (vec category-names))
                   (assoc-in [:fields :services] (vec service-names))
                   (assoc-in [:fields :type] (vec type-names))
                   (assoc-in [:fields :tags] (vec tag-names)))))) orgs)))

(defn normalize-records
  "
  Normalizes records before sending them to the client,
  mostly resolves :Categories, :services, :types and :Tags as names

  ['recpldhESTs53VUvE', ...] -> [:category-name, ...] in category airtable"

  [table-key]                                               ;; :Organizations, :tags, etc..
  (case table-key
    ;; airtable table record resolver
    :organizations (name-reconciler :organizations)
    :services (name-reconciler :services)
    ;:categories category-records
    ;:types type-records
    ;:tags tag-records
    :default '()))

(defn reset-or-init-redis-cache []
  (log/info "_*_ Airtable Cache: STARTED _*_")
  (doseq [r airtable-records
          :let [[k v] r]]
    (let [{:keys [error body]} (fetch-airtable-records k)]
      (if-not error
        (wcar* (car/set v body))
        (log/info "_*_ Airtable Cache: Failed to fetch: \n" error))))
  (log/info "_*_ Airtable Cache: COMPLETED _*_"))

(def mapper
  (json/object-mapper
    {:decode-key-fn (comp keyword cuerdas/kebab)
     :encode-key-fn name}))

(defn fetch-airtable-records
  "retrieve all items available for given resource table based on :offset"
  [resource & [offset]]
  (let [endpoint "https://api.airtable.com/v0/appIy3ycDv8Xf4dR3" ;; root api domain
        options {:query-params (when offset {:offset offset})
                 :headers      {"Authorization" (str "Bearer " AIRTABLE_API_KEY)}}
        endpoint (str endpoint (get airtable-records resource))]
    (let [{:keys [error body]} @(http/get endpoint options)
          body (clojure.string/replace body "\\n " "")]
      (if-not error
        (let [{:keys [offset records]} (json/read-value body mapper)]
          (if offset
            (let [offset-records (:body (fetch-airtable-records resource offset))
                  json-records (json/read-value offset-records mapper)
                  body (json/write-value-as-string (concat records json-records))]
              {:body body})
            {:body (json/write-value-as-string records)}))
        {:error error}))))
