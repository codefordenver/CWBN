(ns cwbn.events
  (:require [cwbn.db :as db]
            [re-frame.core :refer [dispatch reg-event-db reg-sub]]))

;;dispatchers

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(reg-event-db
  :set-active-page
  (fn [db [_ page]]
    (assoc db :active-page page)))

;;subscriptions

(reg-sub
  :active-page
  (fn [db _]
    (:active-page db)))
