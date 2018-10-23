(ns cwbn.components.footer
  (:require [goog.string :as s]))

(defn footer-component []
  [:div#footer
   [:div.footer-row
    [:div#about
     [:div
      [:a {:href ""}
       "FAQ"]
      [:br]
      [:a {:href "#/about"}
       "About Us"]
      [:br]
      [:a {:href ""}
       "Terms & Conditions"]]]
    [:div#social "Stay in Touch"
     [:div#icons
      [:a {:href "https://www.facebook.com/cwbndenver/" :target "_blank"}
       [:i.fab.fa-facebook-f]]
      [:a {:href "https://twitter.com/cwbnetwork" :target "_blank"}
       [:i.fab.fa-twitter]]
      [:a {:href "mailto:connect@communitywealthbuilding.org" :target "_blank"}
       [:i.fa.fa-envelope]]]]]
   [:div.footer-row {:style {:text-transform "none"}}
    [:div#copyright (str (s/unescapeEntities "&copy;") " 2018 Community Wealth Building")]
    [:div#cfd
     "Made with ( "
     [:i.fas.fa-heart]
     " ) by "
     [:a {:href "https://www.codefordenver.org"
          :target "_blank"
          :rel "noopener noreferrer"}
      "Code for Denver"]]]])
