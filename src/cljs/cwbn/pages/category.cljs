(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]))

(defn category-page []
  (let [services-by-category @(rf/subscribe [:services-by-category])
        category-route @(rf/subscribe [:category-route])
        category-name (s/replace category-route "-" " ")
        category-img (str (first (s/split category-route #"-")) ".png")
        category-services (services-by-category (keyword category-route))]
    [:div.category-page
     [:div {:class "category-header flex"}
      [:img {:class "category-icon"
             :src (str "img/category-icons/" category-img)}]
      [:div {:class "category-services flex flex-column"}
       [:h1 {:class "f3 b ttc mt1"} category-name]
       [:div
        (for [service category-services]
          ^{:key (gensym "service-")}
          [:span {:class "service-link"}
           [:a {:href category-route} service]])]]]
     [:div {:class "category-listings mt4"}
      (when (= category-route "business-development")
        [:div {:class "flex"}
         [:div {:class "letter f3 b mr4 mr5-ns"} "M"]
         [:div
          [:h2 {:class "f5 b ttc mt1"}
           "Mi Casa Resource Center"]
          [:h3.f6 [:i "Non-Profit"]]
          [:h3.f6 [:b "Services: "]
                  "Business Technical Assistance, Lending"]
          [:h3.f6 [:b "Target Population: "]
                  "Entrepreneurs, women, Latinos"]
          [:h3.f6 [:b "Area Served: "]
                  "Denver Metro"]
          [:h3.f6 [:b "Website: "]
                  [:a {:href "micasaresourcecenter.org"}
                   "micasaresourcecenter.org"]]
          [:h3.f6.mt3 [:b "Contact: "]
                      "Elena Vasconez"]
          [:h3.f6 [:a {:href (str "mailto:" "evasconez@MiCasaResourceCenter.org")}
                      "evasconez@MiCasaResourceCenter.org"]]
          [:h3.f6 "(303) 573-1302"]]])]]))
