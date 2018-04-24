(ns user
  (:require [cwbn.config :refer [env]]
            [mount.core :as mount]
            [cwbn.figwheel :refer [start-fw stop-fw cljs]]
            [cwbn.core :refer [start-app]]
            [conman.core :as conman]
            [luminus-migrations.core :as migrations]))

(defn start []
  (mount/start-without #'cwbn.core/repl-server))

(defn stop []
  (mount/stop-except #'cwbn.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn restart-db []
  (mount/stop #'cwbn.db.core/*db*)
  (mount/start #'cwbn.db.core/*db*)
  (binding [*ns* 'cwbn.db.core]
    (conman/bind-connection cwbn.db.core/*db* "sql/queries.sql")))

(defn reset-db []
  (migrations/migrate ["reset"] (select-keys env [:database-url])))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:database-url])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:database-url])))

(defn create-migration [name]
  (migrations/create name (select-keys env [:database-url])))


