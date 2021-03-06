(ns cwbn.routes.api
  (:require [compojure.core :refer [defroutes GET context]]
            [ring.util.http-response :as response]
            [jsonista.core :as json]
            [cwbn.airtable :as airtable :refer [mapper airtable-records wcar*]]
            [taoensso.carmine :as car :refer [wcar]]
            [cwbn.search :refer [search]]))

(defn resource-lookup [path-info]
  (let [[resource _] (filter (comp #{path-info} airtable-records) (keys airtable-records))]
    resource))

;; TODO: add error handler to this function
(defn redis-handler [{path-info :path-info}]
  (let [resource (resource-lookup path-info)]
    ;; filter :draft orgs
    (if (= :organizations resource)
      (let [records (airtable/normalize-records resource)
            filtered-records (remove #(= (-> % :fields :status) "Draft") records)]
        (response/ok filtered-records))
      (response/ok (airtable/normalize-records resource)))))

(defn search-handler [{params :params}]
  (when-let [q (:q params)]
    (response/ok (search q))))

(defroutes api-routes
           (context "/api" []
             (GET "/search" [] search-handler)
             ;; Airtable
             (GET "/Organizations" [] redis-handler)
             (GET "/Categories" [] redis-handler)
             (GET "/Services" [] redis-handler)
             (GET "/Types" [] redis-handler)
             (GET "/Tags" [] redis-handler)))
