(ns cwbn.pages.search-results
  (:require [re-frame.core :as rf]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.sorted-list :as sorted-list]))

(defn search-results-page []
  (let [search-results (rf/subscribe [:search-results])]
    (fn []
      [:div
       (prn search-results)
       [search-bar/component]
       [:h2 "Search Results"]
       [sorted-list/component @search-results]])))
