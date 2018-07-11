(ns cwbn.routes.api
  (:require [compojure.core :refer [defroutes GET context]]
            [ring.util.http-response :as response]
            [taoensso.carmine :as car :refer [wcar]]))

(def server1-conn {:pool {} :spec {:uri "redis://127.0.0.1:6379"}})

(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))

(prn (wcar* (car/ping)))

(defroutes api-routes
           (context "/api" []
             (GET "/foobar" [] '(prn (wcar* (car/ping))))))
