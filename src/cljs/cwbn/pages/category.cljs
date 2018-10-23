(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cuerdas.core :as cuerdas]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.sorted-list :as sorted-list]
            [cwbn.routes :as routes]))

(declare services-by-category)

(defn sub-category-link [category service selected-services]
  (let [active? (some #{service} selected-services)
        next-query (if active?
                     (remove #{service} selected-services)
                     (conj selected-services service))
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
         category-slug :slug
         category-image :image} (category-key categories)
        category-services (services-by-category category-key)
        orgs-in-category (filter (fn [org]
                                (some #(= category-key (-> % cuerdas/kebab cuerdas/keyword))
                                      (:categories org)))
                              @all-orgs)
        services (reduce #(clojure.set.union %1 (set (:services %2))) #{} orgs-in-category)
        orgs-with-services (if (empty? selected-services)
                             orgs-in-category
                             (filter (fn [org]
                                       (some (set selected-services) (:services org)))
                                     orgs-in-category))
        orgs (sort-by :name orgs-with-services)]
    (js/console.log services)
    [:div
     [search-bar/component]
     [:div.category-page
      [:div {:class "category-header flex items-center"}
       [:img {:class "category-icon"
              :src   (str "img/category-icons/" category-image)}]
       [:div {:class "category-services flex flex-column"}
        [:h1 {:class "f3 b ttc"} category-name]
        [:div
         (for [service services]
           ^{:key (gensym "service-")}
           [:span {:class "service-link fw6"}
            [sub-category-link category-route service selected-services]])
         (when-not (empty? selected-services)
           [:span {:class "service-link fw6 reset"}
            [:a {:class "service-selected" :href (str "/#/category/" category-route)} "Reset"]])]]]
      [sorted-list/component orgs]]]))

(def services-by-category
  {:business-development  ["Pre-Idea",
                           "Business Plan",
                           "Launch",
                           "Support",
                           "Growth",
                           "Business Exit",
                           "Business Lending"]
   :cooperatives          ["Principles Education/Pre-Idea",
                           "Business Plan",
                           "Launch",
                           "Business Support",
                           "Legal Support",
                           "Growth",
                           "Cooperative Lending"]
   :housing               ["Affordable Housing",
                           "Community Land Trusts",
                           "Down-Payment Assistance"],
   :workforce-development ["Skill Development",
                           "Apprenticeship",
                           "On-the-job Training"]
   :organizing            ["Economic Justice",
                           "Education",
                           "Environmental Justice",
                           "Food Justice",
                           "Health Justice",
                           "Immigration",
                           "Labor",
                           "Racial Justice"]
   :advocacy              ["Advocacy",
                           "Policy"]
   :education             ["Arts",
                           "Computer Classes",
                           "Financial Education",
                           "GED Classes",
                           "Youth Development",
                           "Citizenship Classes"]
   :social-enterprise     ["Food Bank",
                           "Healthy Food Access",
                           "Shared Space",
                           "Transit/Transportation",
                           "Volunteer Service",
                           "Health Care"]
   :anchor-institution    ["Local Hire Program",
                           "Local Procurement",
                           "Local Investment"]
   :financial-investment  ["Micro-Loans",
                           "Capital Investment",
                           "Individual Development Accounts",
                           "Community Loans",
                           "Lending Circles"]})
