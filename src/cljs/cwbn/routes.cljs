(ns cwbn.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType])
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
            (rf/dispatch [:set-active-page :home]))

  (defroute "/about" []
            (rf/dispatch [:set-active-page :about]))

  (defroute "/contact" []
            (rf/dispatch [:set-active-page :contact]))

  (defroute "/services/:category" {:as params} []
            (rf/dispatch [:set-active-page :category params]))

  (defroute "/404" []
            (rf/dispatch [:set-active-page :not-found]))

  (defroute "/microloans" []
            (rf/dispatch [:set-active-page :microloans]))
  ;; --------------------
  (hook-browser-navigation!))
