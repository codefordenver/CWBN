(ns cwbn.routes.api
  (:require [compojure.core :refer [defroutes GET context]]
            [ring.util.http-response :as response]
            [org.httpkit.client :as http]
            [taoensso.carmine :as car :refer [wcar]]))

(def AIRTABLE_API_KEY (System/getenv "AIRTABLE_API_KEY"))

(def airtable-records "Airtable's Domain model"
  {::root          "https://api.airtable.com/v0/appIy3ycDv8Xf4dR3" ;; root api domain
   ::organizations "/Organizations"
   ::categories    "/Categories"
   ::services      "/Services"
   ::types         "/Types"
   ::tags          "/Tags"})

(def server1-conn {:pool {} :spec {:uri "redis://127.0.0.1:6379"}})

(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))

(defn- get-airtable-data [endpoint]
  (let [headers {:headers {"Authorization" (str "Bearer " AIRTABLE_API_KEY)}}
        {:keys [status headers body error] :as resp}
        @(http/get (str (::tags airtable-records) endpoint) headers)]
    (if error
      (println "Failed, exception: " error)
      (do
        (println "HTTP GET success: " status)
        (clojure.pprint/pprint body)))))

(defn redis-handler [_]
  (let [ping (wcar*
               (car/ping)
               (car/set "foo" "bar")
               (car/get "foo"))]
    (prn ping)
    ; => ["PONG" "OK" "bar"] (3 commands -> 3 replies)
    ;(get-airtable-data airtable-endpoint)
    (response/ok {:ok ping})))

(defroutes api-routes
           (context "/api" []
             (GET "/foobar" {} redis-handler)))
