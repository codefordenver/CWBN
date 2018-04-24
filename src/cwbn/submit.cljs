(ns cwbn.submit
  (:require [reagent.core :as r]
            [cwbn.db-access :as dba]))


; reagent component to be rendered
(defn submit-content []
  [:form {:on-submit dba/on-submit
          :style {:margin "10px"}}
   [:div 
    [:input {:id "name"
             :type "text"
             :placeholder "name"
             :style {:flex 1}}]
    [:input {:id "type"
             :type "text"
             :placeholder "type"
             :style {:flex 1}}]
    [:input {:id "address"
             :type "text"
             :placeholder "address"
             :style {:flex 1}}]
    [:input {:id "support_type"
             :type "text"
             :placeholder "support_type"
             :style {:flex 1}}]
    [:button {:type "submit"}
     "Submit"]]])


