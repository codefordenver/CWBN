(ns cwbn.components.search-bar
  (:require [re-com.core :as re-com]
            [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def r (reagent/atom []))

;;TODO implement using core.async library
(def data-source-async
  (fn [s show-suggestions?]
    (go
      (let [response-channel (http/get "/api/search" {:query-params {"q" s}})
            response (<! response-channel)
            results (map #(-> % :fields) (:body response))]
        (rf/dispatch [:update-search-results results])
        (if show-suggestions?
          (reset! r results)
          (reset! r nil))))))
;; important! return value must be falsey for an async :data-source))

(defn css-classes [name]
  {:wrapper-classes    (str "suggestion-wrapper" " " "suggestion-wrapper-" name)
   :suggestion-classes (str "suggestion" " " "suggestion-" name)})

(defn render-suggestion [{:keys [name]}]
  (let [classes (css-classes name)]
    ^{:key (gensym "suggestion-")}
    [:div {:class (classes :wrapper-classes)
           :on-click (fn [e]
                       (prn name)
                       (data-source-async name false)
                       (set! (.-value (js/document.getElementById "search-input")) name)
                       (rf/dispatch [:set-active-page :search ""]))}
     [:i {:class (classes :suggestion-classes)} name]]))

(defn search-fn [e]
  (let [text (-> e .-target .-value)]
    (data-source-async text true)))

(defn search-bar []
  [:div
   [:input#search-input {:type      "text"
                         :on-change search-fn
                         :on-key-press (fn [e]
                                         (when (= (.-key e) "Enter")
                                           (data-source-async (-> e .-target .-value) false)
                                           (rf/dispatch [:set-active-page :search ""])
                                           (.preventDefault e)))}]
   [:div#search-suggestions
    (for [result (take 10 @r)]
      (render-suggestion result))]])


(defn component []
  (fn []
    [:section.search-bar-wrapper
     [search-bar]]))
