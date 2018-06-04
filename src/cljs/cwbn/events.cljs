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
  (fn [db [_ page & [params]]]
    (if-let [service-route (:service params)]
      (assoc db :active-page page
                :service-route service-route)
      (assoc db :active-page page))))


;;subscriptions

(reg-sub
  :active-page
  (fn [db _]
    (:active-page db)))

(reg-sub
  :service-route
  (fn [db _]
    (:service-route db)))
