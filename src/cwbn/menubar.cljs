(ns cwbn.menubar
  (:require [reagent.core :as r]))

(def logged-in-status (r/atom "false"))

(defn logged-in-selection []
  [:select {:value @logged-in-status
            :on-change #(reset! logged-in-status (-> % .-target .-value))}
   [:option {:value true} "logged-in"]
   [:option {:value false} "logged-out"]])

(defn generic-menubar []
  [:div "<--Logo Here-->" "<--About Component Link Here-->"])

(defn logged-in-menubar []
  [:div [generic-menubar] "<--Button to Edit Here (admin access)-->" [logged-in-selection]])

(defn logged-out-menubar []
  [:div [generic-menubar] [logged-in-selection]])

(defn what-menubar-to-show [logged-in-status]
  (if (= logged-in-status "true")
    (logged-in-menubar)
    (logged-out-menubar)))

(defn menubar []
  [:div 
   [:p [what-menubar-to-show @logged-in-status]]])
