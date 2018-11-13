(ns cwbn.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [cwbn.components.search-bar :refer [search]])
  (:import goog.History))

;; History

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; Routes

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
            (rf/dispatch [:update-search-term nil])
            (rf/dispatch [:set-active-page :home]))

  (defroute "/about" []
            (rf/dispatch [:set-active-page :about]))

  (defroute "/contact" []
            (rf/dispatch [:set-active-page :contact]))

  (defroute "/category/:category" {:as params}
            (rf/dispatch [:set-category-page-as-active params]))

  (defroute "/search/:search" {:as params}
            (search (:search params) false))

  (defroute "*" []
            (rf/dispatch [:set-active-page :not-found]))

  ;; --------------------
  (hook-browser-navigation!))
