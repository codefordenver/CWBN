(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cuerdas.core :as cuerdas]
            [cwbn.components.search-bar :as search-bar]
            [cwbn.components.sorted-list :as sorted-list]))

(declare services-by-category)

(defn category-page []
  (let [all-orgs (rf/subscribe [:Organizations])
        category-route @(rf/subscribe [:category-route])
        category-name (when category-route (s/replace category-route "-" " "))
        category-img (str (first (s/split category-route #"-")) ".png")
        category-key (keyword category-route)
        category-services (services-by-category category-key)
        filtered-orgs (filter (fn [org]
                                (some #(when
                                         (= category-key (-> % cuerdas/kebab cuerdas/keyword))
                                         %)
                                      (:categories org)))
                              @all-orgs)
        orgs (sort-by :name filtered-orgs)]
    (fn []
      [:div
       [search-bar/component]
       [:div.category-page
        [:div {:class "category-header flex items-center"}
         [:img {:class "category-icon"
                :src   (str "img/category-icons/" category-img)}]
         [:div {:class "category-services flex flex-column"}
          [:h1 {:class "f3 b ttc"} category-name]
          [:div
           (for [service category-services]
             ^{:key (gensym "service-")}
             [:span {:class "service-link fw6"}
              [:a {:href category-route} service]])]]]
        [sorted-list/component orgs]]])))

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
