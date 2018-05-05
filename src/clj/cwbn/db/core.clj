(ns cwbn.db.core
  (:require
    [clj-time.jdbc]
    [conman.core :as conman]
    [mount.core :refer [defstate]]
    [cwbn.config :refer [env]]))

(defstate ^:dynamic *db*
          :start(conman/connect!)
            {:datasource
              (doto (org.h2.jdbcx.JdbcDataSource.)
                    (.setURL (env :database-url))
                    (.setUser "")
                    (.setPassoword ""))}
          :stop (conman/disconnect! *db*))


(comment
  (defstate ^:dynamic *db*
            :start (conman/connect! {:jdbc-url (env :database-url)})
            :stop (conman/disconnect! *db*)))

(conman/bind-connection *db* "sql/queries.sql")
