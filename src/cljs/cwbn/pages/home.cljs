(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [cwbn.components.search-bar :as search-bar]))

(defn home-page []
  [:div
   [:h1.tc "Let's build a stronger local economy"]
   [search-bar/component]])
