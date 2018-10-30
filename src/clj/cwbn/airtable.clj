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

(def server1-conn {:spec {:host "redis" :port 6379}})

(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))

;; TODO
;; - use clojure.spec to validate key in map - explain when key is not in airtable-records map

(def airtable-records "Airtable's Domain model"
  {:organizations "/Organizations"
   :categories    "/Categories"
   :services      "/Services"
   :types         "/Types"
   :tags          "/Tags"})

(defn- table-lookup [table-name]
  (-> (wcar* (car/get (table-name airtable-records)))
      (json/read-value mapper)))

(defn- find-by-id [id coll]
  (some #(when (= id (-> % :id)) (-> % :fields :name)) coll))

(defmulti name-reconciler (fn [{key :key}] key))

(defmethod name-reconciler :services [{tables :tables}]
  (let [{:keys [org-records category-records service-records type-records tag-records]} tables]
    (map (fn [record]
           (let [categories (-> record :fields :categories)
                 orgs (-> record :fields :organizations)
                 types (-> record :fields :type)
                 tags (-> record :fields :tags)]
             (if (or categories orgs types tags)
               (let [org-names (map #(find-by-id % org-records) orgs)
                     category-names (map #(find-by-id % category-records) categories)
                     type-names (map #(find-by-id % type-records) types)
                     tag-names (map #(find-by-id % tag-records) tags)]
                 (-> record
                     (assoc-in [:fields :categories] (vec category-names))
                     (assoc-in [:fields :organizations] (vec org-names))
                     (assoc-in [:fields :type] (vec type-names))
                     (assoc-in [:fields :tags] (vec tag-names))))
               record))) service-records)))

(defmethod name-reconciler :organizations [{tables :tables}]
  (let [{:keys [org-records category-records service-records type-records tag-records]} tables]
    (map (fn [record]
           (let [categories (-> record :fields :categories)
                 services (-> record :fields :services)
                 types (-> record :fields :type)
                 tags (-> record :fields :tags)]
             (if (or categories services types tags)
               (let [service-names (map #(find-by-id % service-records) services)
                     type-names (map #(find-by-id % type-records) types)
                     tag-names (map #(find-by-id % tag-records) tags)
                     category-names (map #(find-by-id % category-records) categories)]
                 (-> record
                     (assoc-in [:fields :categories] (vec category-names))
                     (assoc-in [:fields :services] (vec service-names))
                     (assoc-in [:fields :type] (vec type-names))
                     (assoc-in [:fields :tags] (vec tag-names))))
               record))) org-records)))

(defmethod name-reconciler :categories [{tables :tables}]
  (let [{:keys [org-records category-records service-records type-records tag-records]} tables]
    (map (fn [record]
           (let [organizations (-> record :fields :organizations)
                 services (-> record :fields :services)
                 types (-> record :fields :type)
                 tags (-> record :fields :tags)]
             (if (or organizations services types tags)
               (let [service-names (map #(find-by-id % service-records) services)
                     type-names (map #(find-by-id % type-records) types)
                     tag-names (map #(find-by-id % tag-records) tags)
                     organization-names (map #(find-by-id % org-records) organizations)]
                 (-> record
                     (assoc-in [:fields :organizations] (vec organization-names))
                     (assoc-in [:fields :services] (vec service-names))
                     (assoc-in [:fields :type] (vec type-names))
                     (assoc-in [:fields :tags] (vec tag-names))))
               record))) category-records)))

(defmethod name-reconciler :types [{tables :tables}]
  (let [{:keys [org-records service-records type-records tag-records]} tables]
    (map (fn [record]
           (let [organizations (-> record :fields :organizations)
                 services (-> record :fields :services)
                 categories (-> record :fields :categories)
                 tags (-> record :fields :tags)]
             (if (or organizations services categories tags)
               (let [service-names (map #(find-by-id % service-records) services)
                     category-names (map #(find-by-id % type-records) categories)
                     tag-names (map #(find-by-id % tag-records) tags)
                     organization-names (map #(find-by-id % org-records) organizations)]
                 (-> record
                     (assoc-in [:fields :organizations] (vec organization-names))
                     (assoc-in [:fields :services] (vec service-names))
                     (assoc-in [:fields :categories] (vec category-names))
                     (assoc-in [:fields :tags] (vec tag-names))))
               record))) type-records)))

(defmethod name-reconciler :tags [{tables :tables}]
  (let [{:keys [org-records category-records service-records type-records tag-records]} tables]
    (map (fn [record]
           (let [organizations (-> record :fields :organizations)
                 services (-> record :fields :services)
                 types (-> record :fields :type)
                 categories (-> record :fields :tags)]
             (if (or organizations services types categories)
               (let [service-names (map #(-> (find-by-id % service-records) :fields :name) services)
                     type-names (map #(-> (find-by-id % type-records) :fields :name) types)
                     category-names (map #(-> (find-by-id % category-records) :fields :name) categories)
                     organization-names (map #(-> (find-by-id % org-records) :fields :name) organizations)]
                 (-> record
                     (assoc-in [:fields :organizations] (vec organization-names))
                     (assoc-in [:fields :services] (vec service-names))
                     (assoc-in [:fields :type] (vec type-names))
                     (assoc-in [:fields :categories] (vec category-names))))
               record))) tag-records)))

(defn normalize-records
  "
  Normalizes records before sending them to the client,
  mostly resolves :Categories, :services, :types and :Tags as names

  ['recpldhESTs53VUvE', ...] -> [:category-name, ...] in category airtable"

  [table-name]                                               ;; :Organizations, :tags, etc..
  (let [tables {:org-records      (table-lookup :organizations)
                :category-records (table-lookup :categories)
                :service-records  (table-lookup :services)
                :type-records     (table-lookup :types)
                :tag-records      (table-lookup :tags)}]
    (case table-name
      ;; airtable table record resolver
      :organizations (name-reconciler {:key :organizations :tables tables})
      :services (name-reconciler {:key :services :tables tables})
      :categories (name-reconciler {:key :categories :tables tables})
      :types (name-reconciler {:key :types :tables tables})
      :tags (name-reconciler {:key :tags :tables tables})
      :default '())))

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
