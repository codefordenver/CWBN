(ns cwbn.ins
  (:require [reagent.core :as r]
            [cwbn.submit :as submit]
            [cwbn.search :as search]
            [cwbn.menubar :refer [edit-mode]]
            [cljs.reader :refer [read-string]]
            [cwbn.list-all :as list-all]))


(defn add-entity []
  [:div [submit/submit-content]])

(defn update-entity[]
  [:div "Update-one"])

(defn delete-entity[]
  [:div "Delete-one"])


(def button-selection (r/atom 0))

(defn component-selection []  
  [:div    
   [:button {:on-click (fn [] (reset! button-selection 1))} "View All"]   
   [:button {:on-click (fn [] (reset! button-selection 2))} "Update"]   
   [:button {:on-click (fn [] (reset! button-selection 3))} "Add"]   
   [:button {:on-click (fn [] (reset! button-selection 4))} "Delete"]])
   ;[:button {:on-click (fn [] (reset! clicks 1);"value"

(defn edit-component [button-selection]  
  (if (= button-selection 1)    
    [list-all/list-all]    
    (if (= button-selection 2)      
      [update-entity]      
      (if (= button-selection 3)        
        [add-entity]        
        [delete-entity]))))

(defn what-component-to-show [edit-mode]  
  (if (= edit-mode "true")    
    [:div [component-selection] [edit-component @button-selection]]    
    [search/search-component]))

(defn ins-component[]  
  [:div "logged-in-component"   
   [:div [what-component-to-show @edit-mode]]])
