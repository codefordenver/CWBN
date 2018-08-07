(ns cwbn.routes.api
  (:require [compojure.core :refer [defroutes GET context]]
            [ring.util.http-response :as response]
            [org.httpkit.client :as http]
            [clojure.tools.logging :as log]
            [jsonista.core :as json]
            [taoensso.carmine :as car :refer [wcar]]
            [clojure.core.async :as async :refer [<! timeout chan go]]))

(declare init-cache)

(declare mapper)

(declare fetch-airtable-records)

(def condition (atom true))

(defn hours
  "Converts hours -> milliseconds"
  [n] (* n 36e5))

(def run-every (hours 1/2))

(defn schedule-work []
  (log/info "_*_ Airtable Cache: FETCHING DATA _*_")
  (init-cache))

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

(defn init-cache []
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

(defn redis-handler [{path-info :path-info}]
  (let [[resource _] (filter (comp #{path-info} airtable-records) (keys airtable-records))
        redis-data (wcar* (car/get path-info))]
    ;; filter :draft orgs
    (if (= :organizations resource)
      (let [records (remove #(= (-> % :fields :Status) "Draft") (json/read-value redis-data mapper))]
        (response/ok {:records records}))
      (response/ok (json/read-value redis-data mapper)))))

(defroutes api-routes
           (context "/api" []
             (GET "/Organizations" {params :params} redis-handler)
             (GET "/Categories" {params :params} redis-handler)
             (GET "/Services" {params :params} redis-handler)
             (GET "/Types" {params :params} redis-handler)
             (GET "/Tags" {params :params} redis-handler)))
