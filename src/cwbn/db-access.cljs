(ns cwbn.db-access
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r])
  (:import goog.net.XhrIo))

(def orgs (r/atom []))

(defn get-orgs []
  (js/console.log "here")
  (.send XhrIo
    "/orgs"
    (fn [e]
      (reset! orgs
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
      "/orgs"
      (fn [e]
        (set! (.-value name) "")
        (set! (.-value type) "")
        (set! (.-value address) "")
        (set! (.-value support_type) "")
        (get-orgs))
      "POST"
      (pr-str {;:name (if (> (count (.-value name)) 0) (.-value name) nil)
               :name (.-value name)
               :type (.-value type)
               :address (.-value address)
               :support_type (.-value support_type)}))))
               
(set! (.-onload js/window)
  (get-orgs))
