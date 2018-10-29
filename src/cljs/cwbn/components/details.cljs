(ns cwbn.components.details
  (:require [cuerdas.core :as cuerdas]))

(defn component [{:keys [name
                         type
                         services
                         population
                         categories
                         area
                         status
                         website
                         contact-name
                         email
                         phone-number]}
                 org?]
  [:div {:class "org mb4 pt2"}
   [:h2 {:class "f4 fw6 ttc underline"}
    (if website
      [:a {:href website :target "_blank"} name]
      (if-not org?
        [:a {:href (str "/#/category/" (cuerdas/kebab name))} name]
        name))]
   (for [t type]
     ^{:key (gensym)}
     [:h3.f6 [:i t]])
   (when-not (empty? services)
     [:h3.f6.mb0
      [:b "Services: "]
      (for [s services
            :let [i (.indexOf services s)
                  comma? (when (> (count services) (+ 1 i)) ", ")]]
        (if-not org?
          ^{:key (gensym)}
          [:span [:a {:href (str "/#/category/" (cuerdas/kebab name) "?selected-services=" (cuerdas/kebab s))} s] comma?]
          ^{:key (gensym)}
          [:span (str s comma?)]))])
   (when status
     [:h3.f6.mb0.pv1 [:b "Status: "] status])
   (when population
     [:h3.f6.mb0.pv1 [:b "Target Population: "] population])
   (when area
     [:h3.f6.mb0.pv1 [:b "Area Served: "] area])
   (when website
     [:h3.f6 [:b "Website: "]
      [:a {:href website :target "_blank"} website]])
   (when categories
     [:h3.f6.mb0.pv1 [:b "categories:"]]
     (for [c categories
           :let [l (-> c
                     (cuerdas/kebab)
                     (clojure.string/lower-case))]]
       ^{:key (gensym)}
       [:a.f7.link.dim.br-pill.ba.ph1.pv0.mb2.mr1.dib.mid-gray
        {:href (str "/#/category/" l)} c]))
   (when contact-name
    [:h3.f6.mb0.pv1 [:b "Contact: "] contact-name])
   (when email
     [:h3.f6.mb0.pv1 [:a {:href (str "mailto:" email)} email]])
   (when phone-number
     [:h3.f6.mb0.pv1
      [:a {:href (str "tel:" phone-number)} phone-number]])])
