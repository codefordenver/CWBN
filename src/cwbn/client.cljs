(ns cwbn.client
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]
            [cwbn.db-access :as dba]
            [cwbn.list-all :as list-all]
            [cwbn.menubar :as menu]
            [cwbn.menubar :refer [logged-in-status]]
            [cwbn.lg-out :as logout-comp]
            [cwbn.ins :as login-comp]))

            

; conditional component depending on log-in status
(defn conditional-component []
  (if (= @logged-in-status "true")
    [login-comp/logged-in-component]
    [logout-comp/logged-out-component]))
  

; reagent component to be rendered
(defn content []
  [:div 
   [:div "hello" [list-all/list-all-component]]
   [menu/menubar]
   [conditional-component]])
  


; tells reagent to begin rendering
(r/render-component [content]
  (.querySelector js/document "#app"))

;(set! (.-onload js/window)
;  (get-entities))

