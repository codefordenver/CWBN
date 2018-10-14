(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.sorted-list :as sorted-list]))

(defn category-page []
  (let [all-orgs (rf/subscribe [:Organizations])]
    (fn []
      [:div
       [search-bar/component]
       [sorted-list/component @all-orgs]])))
