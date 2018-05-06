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

(deftest test-org
  (jdbc/with-db-transaction [t-conn *db*]
    (jdbc/db-set-rollback-only! t-conn)
    (is (= 1 (db/create-org!
              t-conn
              {:id 1
               :name "Org"
               :type  "Type"
               :address  "123 Address"
               :support_type "Support"})))

    (is (= {:id  1
            :name "Org"
            :type  "Type"
            :address  "123 Address"
            :support_type "Support"}
            ;:admin      nil
            ;:last_login nil
            ;:is_active  nil}
           (db/get-org t-conn {:id 1})))))
