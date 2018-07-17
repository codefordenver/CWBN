(ns cwbn.routes.api
  (:require [compojure.core :refer [defroutes GET context]]
            [ring.util.http-response :as response]
            [org.httpkit.client :as http]
            [clojure.spec.alpha :as spec]
            [clojure.tools.logging :as log]
            [jsonista.core :as json]
            [taoensso.carmine :as car :refer [wcar]]))

(declare get-airtable-data)

(def AIRTABLE_API_KEY (System/getenv "AIRTABLE_API_KEY"))

(def server1-conn {:pool {} :spec {:uri "redis://127.0.0.1:6379"}})

(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))

;; TODO
;; - use clojure.spec to validarete key in map - explain when key is not in airtable-records map
;; - re-download cache

(def airtable-records "Airtable's Domain model"
  {:organizations "/Organizations"
   :categories    "/Categories"
   :services      "/Services"
   :types         "/Types"
   :tags          "/Tags"})

(defn init-cache []
  (log/info "_*_ Airtable Cache _*_ " "started")
  (doseq [r airtable-records
          :let [[k v] r]]
    (let [op (get-airtable-data k)]
      (wcar* (car/set v op))))
  (log/info "_*_ Airtable Cache _*_ " "completed"))

(defn get-airtable-data [resource]
  (let [airtable-api-endpoint "https://api.airtable.com/v0/appIy3ycDv8Xf4dR3" ;; root api domain
        headers {:headers {"Authorization" (str "Bearer " AIRTABLE_API_KEY)}}
        endpoint (str airtable-api-endpoint (get airtable-records resource))
        {:keys [status headers body error] :as resp} @(http/get endpoint headers)]
    (if error
      (do
        (println "Failed, exception: " error)
        error)
      body)))

(defn redis-handler [_]
  (let []
    (response/ok {:ok (json/read-value (get-airtable-data :tags))})))

(defroutes api-routes
           (context "/api" []
             (GET "/foobar" {} redis-handler)))
