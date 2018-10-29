(ns cwbn.pages.search-results
  (:require reagent.core
            [re-frame.core :as rf]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.details :as details]
            [cwbn.components.sorted-list :as sorted-list]
            [clojure.string :refer [lower-case]]))

(defn search-results-page []
  (let [search-results @(rf/subscribe [:search-results])
        {category-results :category-results
         organization-results :organization-results} search-results
        all-search-results (concat category-results organization-results)
        search-term @(rf/subscribe [:search-term])
        exact-match (first (filter #(= (lower-case (:name %)) (lower-case search-term)) all-search-results))
        category-results (remove #(= % exact-match) category-results)
        organization-results (remove #(= % exact-match) organization-results)
        exact-match-org? (= (count category-results) (count (:category-results search-results)))]
    [:div
     [search-bar/component search-term]
     (when exact-match
       [:div.ph4
        [:h2 "Exact match"]
        [details/component exact-match exact-match-org?]])
     (when-not (empty? category-results)
       [:div
        [:h2.ph4 "Categories"]
        [sorted-list/component category-results false]])
     (when-not (empty? organization-results)
       [:div
        [:h2.ph4 "Organizations"]
        [sorted-list/component organization-results true]])]))
