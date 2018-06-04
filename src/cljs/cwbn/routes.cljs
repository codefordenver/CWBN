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

  (defroute "/services/:service" {:as params} []
            (rf/dispatch [:set-active-page :service params]))

  (defroute "/404" []
            (rf/dispatch [:set-active-page :not-found]))

  ;; --------------------
  (hook-browser-navigation!))
