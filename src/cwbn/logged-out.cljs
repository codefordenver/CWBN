(ns cwbn.logged-out
  (:require [reagent.core :as r]
            [cwbn.search :as search]))


(defn logged-out-component []
  [:div [search/search-component]])
