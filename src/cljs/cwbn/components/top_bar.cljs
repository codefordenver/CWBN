(ns cwbn.components.top-bar
  (:require [re-frame.core :as rf]))

(defn nav-link [uri title page]
  [:span
   {:class (when (= page @(rf/subscribe [:active-page])) "active")}
   [:a.nav-link {:href uri} title]])

(defn top-bar-component []
  [:div#top-bar {:class "flex flex-wrap items-center justify-between ml1"}
   [:a {:href "#/"}
    [:img#logo {:src "img/logo.png"
                :alt "Community Wealth Building logo"}]]
   [:div#nav
    [nav-link "#/" "Home" :home]
    [nav-link "#/about" "About" :about]
    [nav-link "#/contact" "Contact" :contact]]])
