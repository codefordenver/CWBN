(ns cwbn.submit
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r])
  (:import goog.net.XhrIo))

; stores the entities
(def entities (r/atom []))

; gets the entities list
(defn get-entities []
  (.send XhrIo
    "/entities"
    (fn [e]
      (reset! entities
        (-> e .-target .getResponseText read-string)))
    "GET"))

; runs when the form is submitted
(defn on-submit [e]
  (.preventDefault e)
  (let [input (.querySelector js/document "#input")
        name (.querySelector js/document "#name")
        type (.querySelector js/document "#type")
        address (.querySelector js/document "#address")
        support_type (.querySelector js/document "#support_type")]
    
    (.send XhrIo
      "/entities"
      (fn [e]
        (set! (.-value name) "")
        (set! (.-value type) "")
        (set! (.-value address) "")
        (set! (.-value support_type) "")
        (get-entities))
      "POST"
      (pr-str {:name (if (> (count (.-value name)) 0) (.-value name) nil)
               :type (.-value type)
               :address (.-value address)
               :support_type (.-value support_type)}))))
               

; reagent component to be rendered
(defn submit-content []
  [:form {:on-submit on-submit
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
    [:input {:id "pre_idea"
             :type "checkbox"
             :placeholder "pre_idea"
             :style {:flex 1}}]
    [:button {:type "submit"}
     "Submit"]]
   [:table {:style {:overflow "auto"}}
    (into [:tbody]
      (for [entity @entities]
        [:tr
         [:td (:name entity)]
         [:td (:type entity)]
         [:td (:address entity)]
         [:td (:support_type entity)]]))]])
         ;;[:td (:pre_idea cooperative)]]))]])

;; runs the initial query
(set! (.-onload js/window)
  (get-entities))
