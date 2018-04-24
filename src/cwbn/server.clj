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
    (jdbc/create-table-ddl :orgs
      [[:id :identity]
       [:name :varchar "NOT NULL"]
       [:type :varchar]
       [:address :varchar]
       [:support_type :varchar]]
      {:conditional? true})))


; selects all entities from the table
(defn get-orgs []
  (jdbc/with-db-connection [db-conn db-spec]
    [(jdbc/query db-conn "SELECT * FROM orgs")]))
     ;(jdbc/query db-conn "SELECT * FROM cooperative")]))

; select one entity from the table
(defn get-org [search-term]
  (jdbc/with-db-connection [db-conn db-spec]
    (jdbc/query db-conn (str "SELECT * FROM orgs WHERE NAME='" search-term "'")))) 

; update one entity from the table
(defn update-org [search-term new-term]
  (jdbc/with-db-connection [db-conn db-spec]
    (jdbc/update! db-conn :orgs {:name new-term} ["NAME = ?" search-term])))

; delete one entity from the table
(defn delete-org [name]
  (jdbc/with-db-connection [db-conn db-spec]
    (jdbc/delete! db-conn :orgs ["NAME = ?" name])))

; adds an entry to the entity table
(defn insert-org [org]
  (jdbc/with-db-connection [db-conn db-spec]
    (jdbc/insert! db-conn :orgs org)))

; runs when any request is received
(defn handler [{:keys [uri request-method] :as request}]
  (or ; if the request is for the entity API
      (when (= uri "/orgs")
        (case request-method
          :get {:status 200
                :body (pr-str (get-orgs))}
          :post (do
                  (-> request :body .bytes slurp
                      edn/read-string insert-org)
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

