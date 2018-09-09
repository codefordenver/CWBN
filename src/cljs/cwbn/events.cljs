(ns cwbn.events
  (:require [cwbn.db :as db]
            [re-frame.core :refer [dispatch reg-event-db reg-sub] :as rf]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax :refer [GET POST PUT]]))

;;dispatchers

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(reg-event-db
  :set-active-page
  (fn [db [_ page & [params]]]
    (if-let [category-route (:category params)]
      (assoc db :active-page page
                :category-route category-route)
      (assoc db :active-page page))))


;;subscriptions

(reg-sub
  :active-page
  (fn [db _]
    (:active-page db)))

(reg-sub
  :category-route
  (fn [db _]
    (:category-route db)))

(reg-sub
  :services-by-category
  (fn [db _]
    (:services-by-category db)))

(reg-sub
  :orgs
  (fn [db _]
    (:orgs db)))

;; something

(rf/reg-event-fx
  :get-api-data
  (fn [{db :db} [_ [k v]]]
    (when-not (seq (k db))
      {:http-xhrio {:method          :get
                    :uri             (str "/api" v)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:get-api-data-success k]
                    :on-failure      [:get-api-data-failure k]}})))
    
      ;;{:dispatch [route-dispatch route-param]}
      

(rf/reg-event-db
  :get-api-data-success
  (fn [db [_ key data]]
    (assoc db key data)))

(rf/reg-event-db
  :get-api-data-failure
  (fn [db [_ k]]
    (prn (str "Failed to fetch " k))
    db))
