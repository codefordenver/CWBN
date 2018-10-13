(ns cwbn.components.search-bar
  (:require [re-com.core :as re-com]
            [reagent.core :as reagent]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def typeahead-on-change-value (reagent/atom nil))

(def change-on-blur? (reagent/atom true))

(def status (reagent/atom nil))

(def rigid? (reagent/atom true))

;;TODO implement using core.async library
(def data-source-async
   (fn [s callback]
    (go
      (let [response-channel (http/get "/api/search" {:query-params {"q" s}})
            response (<! response-channel)
            names (map #(-> % :fields) (:body response))]
        (prn names)
        (callback names)))
    ;; important! return value must be falsey for an async :data-source
    nil))

(defn css-classes [name]
  {:wrapper-classes (str "suggestion-wrapper" " " "suggestion-wrapper-" name)
   :suggestion-classes (str "suggestion" " " "suggestion-" name)})

(defn render-suggestion [{:keys [name]}]
  (let [classes (css-classes name)]
    [:div {:class (classes :wrapper-classes)}
     [:i {:class (classes :suggestion-classes)} name]]))

(defn typeahead []
  (fn []
    [re-com/typeahead
     :data-source data-source-async
     :suggestion-to-string #(:name %)
     :render-suggestion render-suggestion
     :width "100%"
     :placeholder "Search Community"
     :on-change #(reset! typeahead-on-change-value %)
     :change-on-blur? change-on-blur?
     :rigid? rigid?
     :status @status]))
     ;;:debounce-delay 500]))

(defn component []
  (fn []
    [:section.search-bar-wrapper
     [typeahead]]))
