(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [reagent.core :as rg]
            [clojure.string :as s]
            [re-com.core :as re-com :refer-macros [handler-fn]]
            [re-com.popover]
            [cwbn.components.search-bar :as search-bar]))

(defn category-link [{:keys [label slug image]}]
  (let [showing? (rg/atom false)]
    [:div {:class "category-link w-20-l w-30-m tc mv3"}
     [re-com/popover-anchor-wrapper
      :showing? showing?
      :position :below-right
      :anchor
        [:a {:href (str "/#/category/" slug)
             :on-mouse-over (handler-fn (reset! showing? true))
             :on-mouse-out (handler-fn (reset! showing? false))}
         [:img {:src (str "img/category-icons/" image)
                :alt label
                :class "w-40 w-30-ns mb2"}]
         [:p {:class "fw7 ttu f6 lh-solid mt1"} label]]
      :popover
        [re-com/popover-content-wrapper
         :close-button? false
         :body "Click for more info"]]]))

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
