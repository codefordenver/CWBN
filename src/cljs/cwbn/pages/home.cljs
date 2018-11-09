(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cwbn.components.search-bar :as search-bar]))

(defn category-link [{:keys [label slug image]}]
  [:div {:class "category-link w-20-l w-30-m tc mv3"}
   [:a {:href (str "/#/category/" slug)}
    [:img {:src (str "img/category-icons/" image)
           :alt label
           :class "w-40 w-30-ns mb2"}]
    [:p {:class "fw7 ttu f6 lh-solid mt1"} label]]])

(defn home-page []
  (let [categories (rf/subscribe [:categories])
        category-order (rf/subscribe [:category-order])]
    (fn []
      [:div
       [:h1.tc.f2.fw6.mt4.mb3 "Let's build a stronger local economy"]
       [search-bar/component]
       [:div {:class "category-links flex flex-wrap justify-between"}
        (for [category (map @categories @category-order)]
          ^{:key (:slug category)}
          [category-link category])]])))
