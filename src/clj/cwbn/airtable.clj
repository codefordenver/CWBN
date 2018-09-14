(ns cwbn.airtable
  (:require [org.httpkit.client :as http]
            [clojure.tools.logging :as log]
            [jsonista.core :as json]
            [taoensso.carmine :as car :refer [wcar]]
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

(defn- reconcile-orgs [table-key]
  (let [org-records (table-lookup table-key)
        category-records (table-lookup :categories)
        service-records (table-lookup :services)
        type-records (table-lookup :types)
        tag-records (table-lookup :tags)]
    (map (fn [record]
           (let [categories (-> record :fields :Categories)
                 services (-> record :fields :Services)
                 types (-> record :fields :Types)
                 tags (-> record :fields :Tags)]
             (if (or categories services types tags)
               (let [org-names (map #(-> (find-by-id % category-records) :fields :Name) categories)
                     service-names (map #(-> (find-by-id % service-records) :fields :Name) services)
                     type-names (map #(-> (find-by-id % type-records) :fields :Name) types)
                     tag-names (map #(-> (find-by-id % tag-records) :fields :Name) tags)]
                 (-> record
                     (assoc-in [:fields :Categories] (vec org-names))
                     (assoc-in [:fields :Services] (vec service-names))
                     (assoc-in [:fields :Type] (vec type-names))
                     (assoc-in [:fields :Tags] (vec tag-names))))
               record))) org-records)))

(defn normalize-records
  "
  Normalizes records before sending them to the client,
  mostly resolves :Categories, :Services, :Types and :Tags as names

  ['recpldhESTs53VUvE', ...] -> [:category-name, ...] in category airtable"

  [table-key] ;; :Organizations, :tags, etc..
  (case table-key
    ;; airtable table record resolver
    :organizations (reconcile-orgs table-key)
    ;:services service-records
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
    {:decode-key-fn keyword
     :encode-key-fn name}))

(defn fetch-airtable-records
  "retrieve all items available for given resource table based on :offset"
  [resource & [offset]]
  (let [endpoint "https://api.airtable.com/v0/appIy3ycDv8Xf4dR3" ;; root api domain
        options {:query-params (when offset {:offset offset})
                 :headers      {"Authorization" (str "Bearer " AIRTABLE_API_KEY)}}
        endpoint (str endpoint (get airtable-records resource))]
    (let [{:keys [error body]} @(http/get endpoint options)]
      (if-not error
        (let [{:keys [offset records]} (json/read-value body mapper)]
          (if offset
            (let [offset-records (:body (fetch-airtable-records resource offset))
                  json-records (json/read-value offset-records mapper)
                  body (json/write-value-as-string (concat records json-records))]
              {:body body})
            {:body (json/write-value-as-string records)}))
        {:error error}))))
