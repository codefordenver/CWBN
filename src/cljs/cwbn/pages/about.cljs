(ns cwbn.pages.about
  (:require [ajax.core :refer [GET]]
            [reagent.core :as reagent]
            [markdown.core :refer [md->html]]))

(defn about-page []
  (let [content (reagent/atom "")]
    (GET "https://raw.githubusercontent.com/wiki/codefordenver/cwbn/About-Page.md" {:handler #(reset! content %)})
    (fn []
      [:div {"dangerouslySetInnerHTML"
             #js{:__html (md->html @content)}}])))
