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
  :get-api-tags
  (fn [{db :db}]
    (when-not (seq (:tags db))
      {:http-xhrio {:method          :get
                    :uri             "/api/Tags"
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:get-api-tags-success]
                    :on-failure      [:get-api-tags-failure]}}
      ;;{:dispatch [route-dispatch route-param]}
      )))

(rf/reg-event-fx
  :get-api-tags-success
  (fn [{db :db} [_ tags]]
    (prn tags)))

(rf/reg-event-fx
  :get-api-tags-failure
  (fn [_]
    (prn "Failed to fetch tags")))