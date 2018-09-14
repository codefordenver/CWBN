(ns cwbn.routes.api
  (:require [compojure.core :refer [defroutes GET context]]
            [ring.util.http-response :as response]
            [jsonista.core :as json]
            [cwbn.airtable :as airtable :refer [mapper airtable-records wcar*]]
            [taoensso.carmine :as car :refer [wcar]]))

;; TODO: add error handler to this function
(defn redis-handler [{path-info :path-info}]
  (let [[resource _] (filter (comp #{path-info} airtable-records) (keys airtable-records))
        ;redis-data (wcar* (car/get path-info))
        ;json-records (json/read-value redis-data mapper)
        records (airtable/normalize-records resource)]
    ;; filter :draft orgs
    (if (= :organizations resource)
      (let [records (remove #(= (-> % :fields :Status) "Draft") records)]
        (response/ok records))
      (response/ok records))))

(defroutes api-routes
           (context "/api" []
             (GET "/Organizations" [] redis-handler)
             (GET "/Categories" [] redis-handler)
             (GET "/Services" [] redis-handler)
             (GET "/Types" [] redis-handler)
             (GET "/Tags" [] redis-handler)))
