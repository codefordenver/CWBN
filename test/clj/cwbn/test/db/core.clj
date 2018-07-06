(ns cwbn.test.db.core
  (:require [cwbn.db.core :refer [*db*] :as db]
            [luminus-migrations.core :as migrations]
            [clojure.test :refer :all]
            [clojure.java.jdbc :as jdbc]
            [cwbn.config :refer [env]]
            [mount.core :as mount]))

(use-fixtures
  :once
  (fn [f]
    (mount/start
      #'cwbn.config/env
      #'cwbn.db.core/*db*)
    (migrations/migrate ["migrate"] (select-keys env [:database-url]))
    (f)))

(deftest test-orgs
  (jdbc/with-db-transaction [t-conn *db*]
    (jdbc/db-set-rollback-only! t-conn)
    (is (map? (db/get-org t-conn {:org_id "1"})))
    (is (let [orgs (db/get-active-orgs t-conn)]
          (and (true? (every? #(= (:org_status %) "A") orgs))
               (not (empty? orgs)))))))
