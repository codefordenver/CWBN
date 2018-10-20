(ns cwbn.pages.search-results
  (:require reagent.core
            [re-frame.core :as rf]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.details :as details]
            [cwbn.components.sorted-list :as sorted-list]
            [clojure.string :refer [lower-case]]))

(defn search-results-page []
  (let [search-results @(rf/subscribe [:search-results])
        search-term @(rf/subscribe [:search-term])
        exact-match? (> (count (filter #(= (lower-case (:name %)) (lower-case search-term)) search-results)) 0)
        _ (prn exact-match?)]
    [:div
     [search-bar/component]
     (when exact-match?
       [:div.ph4
        [:h2 "Exact match"]
        [details/component (first search-results)]])
     (when (or (> (count search-results) 1)
               (not exact-match?))
       [:div
        [:h2.ph4 "Search results"]
        [sorted-list/component (if exact-match?
                                 (drop 1 search-results)
                                 search-results)]])]))
