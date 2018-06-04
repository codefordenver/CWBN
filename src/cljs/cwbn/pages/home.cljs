(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cwbn.components.search-bar :as search-bar]))

(defn service-link [label]
  (let [slug (s/replace (s/lower-case label) " " "-")
        img-name (first (s/split slug #"-"))]
    [:div {:class "service-link w-20-l w-30-m tc mv3"}
     [:a {:href (str "/#/services/" slug)}
      [:img {:src (str "img/service-icons/" img-name ".png")
             :class "w-40 mb2"}]
      [:p {:class "fw7 ttu f6 lh-solid"} label]]]))

(defn home-page []
  [:div
   [:h1.tc.f2.fw7 "Let's build a stronger local economy"]
   [search-bar/component]
   [:div {:class "service-links flex flex-wrap justify-between"}
    [service-link "Financial Investment"]
    [service-link "Cooperatives"]
    [service-link "Business Development"]
    [service-link "Housing"]
    [service-link "Advocacy"]
    [service-link "Anchor Institution"]
    [service-link "Organizing"]
    [service-link "Workforce Development"]
    [service-link "Education"]
    [service-link "Direct Service"]]])
