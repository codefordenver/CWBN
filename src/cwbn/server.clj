(ns cwbn.server
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.java.jdbc :as jdbc]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [not-found]])
  (:gen-class))

; defines basic parameters for the database
(def db-spec
  {:dbtype "h2"
   :dbname "./cwbn/main"
   :user "admin"
   :password ""})

; creates the people table
(defn create-tables []
  (jdbc/db-do-commands db-spec
    (jdbc/create-table-ddl :entity
      [[:id :identity]
       [:name :varchar "NOT NULL"]
       [:type :varchar]
       [:address :varchar]
       [:support_type :varchar]]
      {:conditional? true}))
  (jdbc/db-do-commands db-spec
    (jdbc/create-table-ddl :cooperative
      [[:id :identity]
       [:ref :int] ;; this is a reference to an entity entry 
       [:pre_idea :Boolean]
       [:plan :Boolean]
       [:launch :Boolean]
       [:business :Boolean]
       [:legal :Boolean]
       [:growth :Boolean]
       [:lending :Boolean]]
      {:conditional? true}))
  (jdbc/db-do-commands db-spec
    (jdbc/create-table-ddl :fin_investment
      [[:id :identity]
       [:microloan :Boolean]
       [:cap_investment :Boolean]
       [:dev_account :Boolean]
       [:community_loan :Boolean]
       [:lending_circle :Boolean]]
      {:conditional? true}))
  (jdbc/db-do-commands db-spec
    (jdbc/create-table-ddl :housing
      [[:id :identity]
       [:affordable_housing :Boolean]
       [:land_trust :Boolean]
       [:downpay_assist :Boolean]
       [:co_housing :Boolean]]
      {:conditional? true})))

; selects all entities from the table
(defn get-entities []
  (jdbc/with-db-connection [db-conn db-spec]
    (jdbc/query db-conn "SELECT * FROM entity")))

; adds an entry to the entity table
(defn insert-entity [entity]
  (jdbc/with-db-connection [db-conn db-spec]
    (jdbc/insert! db-conn :entity entity)))

; runs when any request is received
(defn handler [{:keys [uri request-method] :as request}]
  (or ; if the request is for the entity API
      (when (= uri "/entities")
        (case request-method
          :get {:status 200
                :body (pr-str (get-entities))}
          :post (do
                  (-> request :body .bytes slurp
                      edn/read-string insert-entity)
                  {:status 200})))
      ; if the request is a static file
      (let [file (io/file (System/getProperty "user.dir") (str "." uri))]
        (when (.isFile file)
          {:status 200
           :body file}))
      ; otherwise, send a 404
      (not-found "Page not found")))

; runs when the server starts
(defn -main [& args]
  (create-tables)
  (-> #'handler
      (wrap-content-type)
      (wrap-keyword-params)
      (wrap-params)
      (wrap-reload)
      (wrap-resource "cwbn")
      (run-server {:port 0})))

