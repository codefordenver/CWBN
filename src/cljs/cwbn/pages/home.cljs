(ns cwbn.pages.home
  (:require [re-frame.core :as rf]
            [markdown.core :refer [md->html]]))

(defn home-page []
  [:div
   [:h1 "Home"]])
