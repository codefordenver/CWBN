(ns cwbn.components.search-bar
  (:require [re-com.core :refer [typeahead]]))


(defn component []
  (let []
    (fn []
      [:section.search-bar-wrapper
         [typeahead
           :class "search"
           :width "100%"
           ;:on-change change-handler
           ;:suggestion-to-string suggestion-renderer
           :debounce-delay 100
           :change-on-blur? true
           :rigid? true
           ;:data-source suggestions-for-search
           ;:model search-model
           :placeholder "What would you like to learn today? How about HTML, or LED circuits?"
           :render-suggestion (fn [])]])))
