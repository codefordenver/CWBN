(ns cwbn.pages.category
  (:require [re-frame.core :as rf]
            [clojure.string :as s]))



(defn category-page []
  (let [category-route @(rf/subscribe [:category-route])
        category-name (s/replace category-route "-" " ")
        category-img (str (first (s/split category-route #"-")) ".png")]
    [:div.category-page
     [:div {:class "flex"}
      [:img {:src (str "img/category-icons/" category-img)}]
      [:div {:class "flex flex-column ml3"}
       [:h1 {:class "f3 b ttc"} category-name]
       [:div {:class "ml2"}
        [:a]]]]]))
