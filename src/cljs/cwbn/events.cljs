(ns cwbn.events
  (:require [cwbn.db :as db]
            [re-frame.core :refer [dispatch reg-event-db reg-sub subscribe] :as rf]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax :refer [GET POST PUT]]
            [clojure.string :as s]
            [cuerdas.core :as cuerdas]
            [clojure.string :as str]))

;;dispatchers

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(reg-event-db
  :set-active-page
  (fn [db [_ page & [params]]]
    (assoc db :active-page page)))

(reg-event-db
 :set-catogory-page-as-active
 (fn [db [_ {:keys [category query-params]}]]
   (assoc db
          :active-page :category
          :category-route (keyword category)
          :selected-services
          (if (nil? (:selected-services query-params))
            []
            (map cuerdas/kebab (s/split (:selected-services query-params) "+"))))))

(defn- make-api-call [resource on-success on-failure]
  {:http-xhrio {:method :get
                :uri (str "/api" resource)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success on-success
                :on-failure on-failure}})

(rf/reg-event-fx
  :get-api-data
  (fn [{db :db} [_ key resource]]
    (when-not (seq (key db))
      (make-api-call resource [:get-api-data-success key] [:get-api-data-failure key]))))

(rf/reg-event-db
  :get-api-data-success
  (fn [db [_ key data]]
    (let [fields (map :fields data)]
      (assoc db key fields))))

(rf/reg-event-db
  :get-api-data-failure
  (fn [db [_ k]]
    (prn (str "Failed to fetch " k))
    db))

(rf/reg-event-db
  :update-search-term
  (fn [db [_ t]]
    (assoc db :search-term t)))

(rf/reg-event-db
  :update-search-results
  (fn [db [_ r]]
    (assoc db :search-results r)))

;;subscriptions --Level 2

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
  :organizations
  (fn [db _]
    (:organizations db)))

(reg-sub
  :search-term
  (fn [db _]
    (:search-term db)))

(reg-sub
  :search-results
  (fn [db _]
    (:search-results db)))

(reg-sub
 :categories
 (fn [db _]
   (:categories db)))

(reg-sub
 :category-order
 (fn [db _]
   (:category-order db)))

(reg-sub
 :category-meta-data
 (fn [db _]
   (:category-meta-data db)))

(reg-sub
 :selected-services
 (fn [db _]
   (:selected-services db)))

;;subscriptions --Level 3

(reg-sub
 :current-category
 (fn[_ _]
   [(subscribe [:category-meta-data])
    (subscribe [:category-route])])
 (fn[[category-meta-data current-category] _]
   (current-category category-meta-data)))

(reg-sub
 :organizations-in-current-category
 (fn[_ _]
   [(subscribe [:current-category])
    (subscribe [:organizations])])
 (fn[[category organizations] _]
   (let [category-name (:label category)
         org-has-category (fn [org]
                            (some #(= category-name %)
                                  (:categories org)))]
     (filter org-has-category organizations))))

(reg-sub
 :services-in-current-category
 (fn[_ _]
   (subscribe [:organizations-in-current-category]))
 (fn[organizations _]
   (reduce clojure.set.union
           (map (comp set :services)
                organizations))))


(reg-sub
 :selected-services-filtered
 (fn[_ _]
   [(subscribe [:services-in-current-category])
    (subscribe [:selected-services])])
 (fn[[services selected-services] _]
   (let [kebab-services (into #{} (map cuerdas/kebab services))
         valid-selections (clojure.set/intersection kebab-services selected-services)]
     (if (= (count valid-selections) (count kebab-services))
       #{}
       valid-selections))))

