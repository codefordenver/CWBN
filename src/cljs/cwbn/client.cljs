(ns cwbn.client
  (:require [cwbn.client.list-all :as list-all]
            [cwbn.client.menubar :as menubar]
            [cwbn.client.menubar :refer [logged-in-status]]
            [cwbn.client.ins :as ins]
            [cwbn.client.outs :as outs]))


(defn conditional-component []
  (if (= @logged-in-status "true")
    [ins/logged-in-component]
    [outs/logged-out-component]))


; reagent component to be rendered
(defn client-content []
  [:div
   [:div "hello" [list-all/list-all-orgs]]
   [menubar/menubar]
   [conditional-component]])
