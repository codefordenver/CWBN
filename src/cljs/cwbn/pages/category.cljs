(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cwbn.components.details :as details]
            [cwbn.components.search-bar :as search-bar]
            [cuerdas.core :as cuerdas]))

(defn category-page []
  (let [services-by-category @(rf/subscribe [:services-by-category])
        category-route @(rf/subscribe [:category-route])
        category-name (s/replace category-route "-" " ")
        category-img (str (first (s/split category-route #"-")) ".png")
        category-key (keyword category-route)
        category-services (services-by-category category-key)
        all-orgs @(rf/subscribe [:Organizations])
        filtered (filter (fn [org]
                           (some #(when (= category-key (-> % cuerdas/kebab cuerdas/keyword))
                                    %) (:categories org))) all-orgs)
        orgs (sort-by :name filtered)
        org-letters (distinct (map #(first (:name %)) orgs))
        orgs-by-letter (as-> '{} os
                             (map (fn [l]
                                    (assoc os (keyword l) (filter #(= l (first (:name %))) orgs)))
                                  org-letters)
                             (apply merge os)
                             (into (sorted-map) os))]
    [:div.category-page
     [search-bar/component]
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
              [details/component org])]]))]]))
