(ns cwbn.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [cwbn.layout :refer [error-page]]
            [cwbn.routes.home :refer [home-routes]]
            [cwbn.routes.services :refer [service-routes]]
            [cwbn.routes.api :refer [api-routes]]
            [compojure.route :as route]
            [cwbn.env :refer [defaults]]
            [mount.core :as mount]
            [cwbn.middleware :as middleware]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(mount/defstate app
  :start
  (middleware/wrap-base
    (routes
      (-> #'home-routes
          (wrap-routes middleware/wrap-csrf)
          (wrap-routes middleware/wrap-formats))
      (-> #'api-routes
          (wrap-routes middleware/wrap-formats))
      #'service-routes
      (route/not-found
        (:body
          (error-page {:status 404
                       :title "page not found"}))))))
