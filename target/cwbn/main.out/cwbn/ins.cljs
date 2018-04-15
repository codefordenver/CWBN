(ns cwbn.ins
  (:require [reagent.core :as r]
            [cwbn.submit :as submit]
            [cwbn.search :as search]
            [cwbn.menubar :refer [edit-mode]]
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
   
(defn what-component-to-show [edit-mode]
  (if (= edit-mode "true")
    (edit-component)
    (search/search-component)))


(defn ins-component[]
  [:div "logged-in-component"
   [:div [what-component-to-show @edit-mode]]])
