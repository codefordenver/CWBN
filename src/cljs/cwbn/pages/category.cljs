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
  (let [orgs @(rf/subscribe [:organizations-in-current-category])
        selected-services @(rf/subscribe [:selected-services-filtered])
        {category-name :label
         category-image :image
         category-route :slug} @(rf/subscribe [:current-category])
        services @(rf/subscribe [:services-in-current-category])]
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
