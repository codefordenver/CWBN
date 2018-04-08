(ns cljlightmod2.logged-in
  (:require [reagent.core :as r]
            [cljlightmod2.submit :as submit]
            
            [cljs.reader :refer [read-string]]))


(defn add-entity []
  [:div [submit/submit-content]])

(defn update-entity[]
  [:div "Update-one"])

(defn delete-entity[]
  [:div "Delete-one"])

(defn view-all []
  [:div "view"]) 

(defn edit-component []
  [:div 
   [:div [add-entity]]
   [:div [update-entity]]
   [:div [delete-entity]]
   [:div [view-all]]])
   


(defn logged-in-component[]
  [:div "logged-in-component"
   [:div [edit-component]]])
