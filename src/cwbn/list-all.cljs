(ns cwbn.list-all
  (:require [reagent.core :as r]
            [cljs.reader :refer [read-string]])
  (:import goog.net.XhrIo))

; gets the entities list
(defn get-entities [entities]
  (js/console.log "here")
  (.send XhrIo
    "/entities"
    (fn [e]
      (reset! entities
        (-> e .-target .getResponseText read-string)))
    "GET"))

(defn list-all []
  (let [entities (r/atom [])] 
    (fn [] 
      (r/create-class 
        {:component-did-mount 
         (fn [] 
           (get-entities entities))
         :reagent-render 
         (fn []
           [:div 
            [:table {:style {:overflow "auto"}}
             (into [:tbody]
               (for [entity @entities]
                 [:tr
                  [:td (:name entity)]
                  [:td (:type entity)]
                  [:td (:address entity)]
                  [:td (:support_type entity)]]))]])}))))