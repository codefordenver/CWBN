(ns cwbn.client
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]
            [cwbn.submit :as submit]
            [cwbn.menubar :as menu]
            [cwbn.out :as out-comp]
            [cwbn.ins :as in-comp]
            [cwbn.menubar :refer [logged-in-status]]))
            

; conditional component depending on log-in status
(defn conditional-component []
  (if (= @logged-in-status "true")
    [in-comp/ins-component]
    [out-comp/out-component]))
  

; reagent component to be rendered
(defn content []
  [:div 
   [:div [menu/menubar]]
   [:div [conditional-component]]])
  


; tells reagent to begin rendering
; (r/render-component [content]
;   (.querySelector js/document "#app"))



