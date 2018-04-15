(ns cwbn.out
  (:require [cwbn.search :as search]))


(defn out-component []
  [:div [search/search-component]])
