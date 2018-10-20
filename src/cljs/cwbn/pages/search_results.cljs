(ns cwbn.pages.search-results
  (:require reagent.core
            [re-frame.core :as rf]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.details :as details]))

(defn search-results-page []
  (let [search-results (rf/subscribe [:search-results])]
    [:div
     [search-bar/component]
     [:h2.ph4 "Search Results"]
     [:div.ph4
      (for [result @search-results]
        ^{:key (gensym "result-")}
        [details/component result])]]))
