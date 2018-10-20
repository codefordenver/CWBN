(ns cwbn.pages.search-results
  (:require reagent.core
            [re-frame.core :as rf]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.details :as details]
            [cwbn.components.sorted-list :as sorted-list]))

(defn search-results-page []
  (let [search-results @(rf/subscribe [:search-results])]
    [:div
     [search-bar/component]
     [:h2.ph4 "Top result"]
     [:div.ph4
      [details/component (first search-results)]]
     (when (> (count search-results) 1)
       [:div
        [:h2.ph4 "Other results"]
        [sorted-list/component (drop 1 search-results)]])]))
