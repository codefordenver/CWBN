(ns cwbn.list-all)
;  (:require [reagent.core :as r]
;            [cwbn.db.core :as db])

(defn list-all-component []
  [:div "list all here"
   (comment [:table {:style {:overflow "auto"}}]
    (into [:tbody]
      (for [org @orgs]
        [:tr
         [:td (:name org)]
         [:td (:type org)]
         [:td (:address org)]
         [:td (:support_type org)]])))])
