(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [markdown.core :refer [md->html]]
            [cwbn.components.search-bar :as search-bar]))

(defn home-page []
  [:div
   [:h1 "Home"]
   [search-bar/component]])
