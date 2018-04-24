(ns cwbn.search
  (:require [reagent.core :as r]))

(def search-term (r/atom ""))

(defn search-input[]
  [:div 
   [:input {:type "text"
            :placeholder "Search ..."
            :value @search-term
            :on-change #(reset! search-term (-> % .-target .-value))}]])

(defn search-result []
  [:div "search results"])

(defn search-component []
  [:div [search-input]
   [:div @search-term]
   [:div [search-result]]])
