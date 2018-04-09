(ns cwbn.client
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]
            [cwbn.submit :as submit]
            [cwbn.menubar :as menu]
            [cwbn.menubar :refer [logged-in-status]]
            [cwbn.logged-out :as logout-comp]
            [cwbn.logged-in :as login-comp]))

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



