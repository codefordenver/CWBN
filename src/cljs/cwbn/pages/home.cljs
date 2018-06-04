(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [cwbn.components.search-bar :as search-bar]))

(defn service-link [label img-name href]
  [:div {:class "service-link w-20-l w-30-m tc mv3"}
   [:a {:href href}
    [:img {:src (str "img/service-icons/" img-name ".png")
           :class "w-40 mb2"}]
    [:p {:class "fw7 ttu f6 lh-solid"} label]]])

(defn home-page []
  [:div
   [:h1.tc.f2.fw7 "Let's build a stronger local economy"]
   [search-bar/component]
   [:div {:class "service-links flex flex-wrap justify-between"}
    [service-link "Financial Investment" "financial" ""]
    [service-link "Cooperatives" "cooperatives" ""]
    [service-link "Business Development" "business" ""]
    [service-link "Housing" "housing" ""]
    [service-link "Advocacy" "advocacy" ""]
    [service-link "Anchor Institution" "anchor" ""]
    [service-link "Organizing" "organizing" ""]
    [service-link "Workforce Development" "Workforce" ""]
    [service-link "Education" "education" ""]
    [service-link "Direct Service" "direct" ""]]])
