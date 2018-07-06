(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]))

(defn org [{:keys [name
                   type
                   services
                   population
                   area
                   website
                   contact-name
                   email
                   phone]}]
  [:div {:class "org mb4"}
   [:h2 {:class "f4 fw6 ttc mt1"} name]
   [:h3.f6 [:i type]]
   [:h3.f6.mb0 [:b "Services: "]
               services]
   (when-not (nil? population)
     [:h3.f6.mb0 [:b "Target Population: "]
                 population])
   (when-not (nil? area)
     [:h3.f6.mb0 [:b "Area Served: "]
                 area])
   (when-not (nil? website)
     [:h3.f6 [:b "Website: "]
             [:a {:href website}
                 website]])
   (when-not (nil? contact-name)
     [:h3.f6.mb0 [:b "Contact: "]
                 contact-name])
   (when-not (nil? email)
     [:h3.f6.mb0 [:a {:href (str "mailto:" email)} email]])
   (when-not (nil? population)
     [:h3.f6.mb0 phone])])


(defn category-page []
  (let [services-by-category @(rf/subscribe [:services-by-category])
        category-route @(rf/subscribe [:category-route])
        category-name (s/replace category-route "-" " ")
        category-img (str (first (s/split category-route #"-")) ".png")
        category-services (services-by-category (keyword category-route))]
    [:div.category-page
     [:div {:class "category-header flex items-center"}
      [:img {:class "category-icon"
             :src (str "img/category-icons/" category-img)}]
      [:div {:class "category-services flex flex-column"}
       [:h1 {:class "f3 b ttc"} category-name]
       [:div
        (for [service category-services]
          ^{:key (gensym "service-")}
          [:span {:class "service-link fw6"}
           [:a {:href category-route} service]])]]]

     ; hard-coded for demo purposes
     (when (= category-route "business-development")
       [:div {:class "category-listings mt4 pt1"}
        [:div {:class "orgs-by-letter flex"}
         [:div {:class "letter f3 b tl tc-ns w-20 w-10-l"} "A"]
         [:div {:class "orgs w-80 w-90-l"}
          [org {:name "Accion"
                :type "Non-Profit"
                :services "Business Technical Assistance, Lending"}]]]
        [:div {:class "orgs-by-letter flex"}
         [:div {:class "letter f3 b tl tc-ns w-20 w-10-l"} "C"]
         [:div {:class "orgs w-80 w-90-l"}
          [org {:name "Colorado Enterprise Fund"
                :type "Non-Profit"
                :services "Business Lending"}]
          [org {:name "Colorado Lending Source"
                :type "Non-Profit"
                :services "Business Lending"}]
          [org {:name "Community Enterprise Development Services (CEDS)"
                :type "Non-Profit"
                :services "Technical Assistance, Microloans, IDAs"
                :population "Refugees, entrepreneurs, consumers"
                :area "Metro Area"
                :website "https://scorecard.prosperitynow.org/2016"
                :contact-name "Bishal Kafle"
                :email "bkafle@cedsfinance.org"
                :phone "(303) 569-8165"}]]]
        [:div {:class "orgs-by-letter flex"}
         [:div {:class "letter f3 b tl tc-ns w-20 w-10-l"} "M"]
         [:div {:class "orgs w-80 w-90-l"}
          [org {:name "Mi Casa Resource Center"
                :type "Non-Profit"
                :services "Business Technical Assistance, Lending"
                :population "Entrepreneurs, women, Latinos"
                :area "Denver Metro"
                :website "https://micasaresourcecenter.org"
                :contact-name "Elena Vasconez"
                :email "evasconez@MiCasaResourceCenter.org"
                :phone "(303) 573-1302"}]]]
        [:div {:class "orgs-by-letter flex"}
         [:div {:class "letter f3 b tl tc-ns w-20 w-10-l"} "R"]
         [:div {:class "orgs w-80 w-90-l"}
          [org {:name "Rocky Mountain Employee Ownership Center"
                :type "Non-Profit"
                :services "Technical Assistance"
                :population "Business seeking to transition into an employee-owned business model"
                :area "Colorado"
                :website "https://rmeoc.org"
                :contact-name "Halisi Vinson"
                :email "halisi@rmeoc.org"}]
          [org {:name "Rocky Mountain Farmers Union - Cooperative Development Center"
                :type "Non-Profit"
                :services "Technical Assistance for Coop Development"
                :population "Urban areas"
                :area "Denver"
                :website "https://rmfu.org"
                :contact-name "Bill Stevenson"
                :email "bill.stevenson@rmfu.org"}]
          [org {:name "Rocky Mountain Microfinance Institute"
                :type "Non-Profit"
                :services "Microloans, Technical Assistance"
                :population "Entrepreneurs"}]]]])]))
