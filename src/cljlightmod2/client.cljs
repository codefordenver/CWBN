(ns cljlightmod2.client
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]
            [cljlightmod2.submit :as submit]
            [cljlightmod2.menubar :as menu]
            [cljlightmod2.menubar :refer [logged-in-status]]
            [cljlightmod2.logged-out :as logout-comp]
            [cljlightmod2.logged-in :as login-comp]))

; conditional component depending on log-in status
(defn conditional-component []
  (if (= @logged-in-status "true")
    [login-comp/logged-in-component]
    [logout-comp/logged-out-component]))
  

; reagent component to be rendered
(defn content []
  [:div 
   [:div [menu/menubar]]
   [:div [conditional-component]]])
  


; tells reagent to begin rendering
(r/render-component [content]
  (.querySelector js/document "#app"))



