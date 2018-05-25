(ns cwbn.components.footer
  (:require [goog.string :as s]))

(defn footer-component []
  [:div#footer
   [:div#contact
    [:div "Contact"]
    [:span
     "+1 234 567 8910"
     [:br]
     "community-wealth@gmail.com"]]
   [:div#map]
   [:div#social "Stay in Touch"
    [:div#icons
     [:a {:href ""}
      [:i.fab.fa-facebook-f]]
     [:a {:href ""}
      [:i.fab.fa-twitter]]
     [:a {:href ""}
      [:i.fab.fa-instagram]]]]
   [:div#about
    [:div
     [:a {:href ""}
      "FAQ"]
     [:br]
     [:a {:href ""}
      "About Us"]
     [:br]
     [:a {:href ""}
      "Privacy Policy"]
     [:br]
     [:a {:href ""}
      "Terms & Conditions"]
     [:br]
     [:div#copyright (str (s/unescapeEntities "&copy;") " Community Wealth Building, 2018")]]]])
