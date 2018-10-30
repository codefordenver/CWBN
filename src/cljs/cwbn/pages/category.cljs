(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cuerdas.core :as cuerdas]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.sorted-list :as sorted-list]))

(defn sub-category-link [category service selected-services]
  (let [active? (some #{(cuerdas/kebab service)} selected-services)
        next-query (if active?
                     (remove #{(cuerdas/kebab service)} selected-services)
                     (conj selected-services (cuerdas/kebab service)))
        query-string (if-not (empty? next-query)
                       (str "?selected-services=" (s/join "+" next-query))
                       "")
        class (if (or active? (empty? selected-services))
                "service-selected"
                "service-not-selected")]
    [:a {:class class :href (str "/#/category/" category query-string)} service]))

(defn category-page []
  (let [all-orgs (rf/subscribe [:Organizations])
        category-route @(rf/subscribe [:category-route])
        selected-services @(rf/subscribe [:selected-services])
        categories @(rf/subscribe [:categories])
        category-key (keyword category-route)
        {category-name :label
         category-image :image} (category-key categories)
        orgs-with-services (if (empty? selected-services)
                             orgs-in-category
                             (filter (fn [org]
                                       (some (set selected-services) (map cuerdas/kebab (:services org))))
                                     orgs-in-category))
        orgs (sort-by :name orgs-with-services)]
    [:div
     [search-bar/component]
     [:div.category-page
      [:div {:class "category-header flex items-center"}
       [:img {:class "category-icon"
              :src   (str "img/category-icons/" category-image)}]
       [:div {:class "category-services flex flex-column"}
        [:h1 {:class "f3 b ttc"} category-name]
        [:div
         (for [service (sort services)]
           ^{:key (gensym "service-")}
           [:span {:class "service-link fw6"}
            [sub-category-link category-route service selected-services]])
         (when-not (empty? selected-services)
           [:span {:class "service-link fw6 reset"}
            [:a {:class "service-selected" :href (str "/#/category/" category-route)} "Reset"]])]]]
      [sorted-list/component orgs]]]))
