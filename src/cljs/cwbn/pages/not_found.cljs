(ns cwbn.pages.not-found
  (:require [cwbn.components.search-bar :as search-bar]))

(defn not-found-page []
  [:div
   [:h1
    [:p.tc "Wops, resource not found -_-!"]]
   [:h2
    [:p.tc "try a different search ?"]]
   [search-bar/component]])
