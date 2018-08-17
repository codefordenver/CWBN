(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cwbn.components.search-bar :as search-bar]))

(defn category-link [label]
  (let [slug (s/replace (s/lower-case label) " " "-")
        img-name (first (s/split slug #"-"))]
    [:div {:class "category-link w-20-l w-30-m tc mv3"}
     [:a {:href (str "/#/services/" slug)}
      [:img {:src (str "img/category-icons/" img-name ".png")
             :class "w-40 w-30-ns mb2"}]
      [:p {:class "fw7 ttu f6 lh-solid mt1"} label]]]))

(defn home-page []
  [:div
   [:h1.tc.f2.fw6.mt4.mb3 "Let's build a stronger local economy"]
   [search-bar/component]
   [:div {:class "category-links flex flex-wrap justify-between"}
    [category-link "Financial Investment"]
    [category-link "Cooperatives"]
    [category-link "Business Development"]
    [category-link "Housing"]
    [category-link "Advocacy"]
    [category-link "Anchor Institution"]
    [category-link "Organizing"]
    [category-link "Workforce Development"]
    [category-link "Education"]
    [category-link "Social Enterprise"]]])
