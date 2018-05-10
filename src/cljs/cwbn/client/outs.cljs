(ns cwbn.client.outs
  (:require [cwbn.client.search :as search]))

(defn logged-out-component []
  [:div [search/search-component]])
