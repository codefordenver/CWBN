(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [reagent.core :as reagent]))

(defn org-details [{:keys [name
                           type
                           services
                           population
                           area
                           website
                           contact-name
                           email
                           phone]}]
  [:div {:class "org mb4"}
   [:h2 {:class "f4 fw6 ttc"} name]
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

(def current-letter (reagent/atom nil))

(defn category-page []
  (let [services-by-category @(rf/subscribe [:services-by-category])
        category-route @(rf/subscribe [:category-route])
        category-name (s/replace category-route "-" " ")
        category-img (str (first (s/split category-route #"-")) ".png")
        category-key (keyword category-route)
        category-services (services-by-category category-key)
        all-orgs @(rf/subscribe [:orgs])
        orgs (sort-by :name (filter (fn [org]
                                      (some (fn [cat]
                                              (when (= category-key cat)
                                                    cat))
                                            (:categories org)))
                                   all-orgs))
        org-letters (distinct (map #(first (:name %)) orgs))
        orgs-by-letter (as-> '{} os
                         (map (fn [l]
                                (assoc os (keyword l) (filter #(= l (first (:name %))) orgs)))
                              org-letters)
                         (apply merge os))]
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
     [:div {:class "category-listings mt4 pt1 flex"}
      (doall
        (for [letter orgs-by-letter]
          ^{:key (gensym "letter-")}
          [:div {:class "orgs-by-letter flex"}
           [:div {:class "letter-parent"}
            [:div {:class "letter f3 b tl tc-ns w-20 w-10-l"} (first letter)]]
           [:div {:class "orgs w-80 w-90-l"}
            (for [org (nth letter 1)]
              ^{:key (gensym "org-")}
              [org-details org])]]))]]))
