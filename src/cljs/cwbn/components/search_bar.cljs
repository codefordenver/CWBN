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
  (fn [s]
    (go
      (let [response-channel (http/get "/api/search" {:query-params {"q" s}})
            response (<! response-channel)
            results (map #(-> % :fields) (:body response))]
        (rf/dispatch [:update-search-results results])
        (reset! r results)))))
;; important! return value must be falsey for an async :data-source))

(defn css-classes [name]
  {:wrapper-classes    (str "suggestion-wrapper" " " "suggestion-wrapper-" name)
   :suggestion-classes (str "suggestion" " " "suggestion-" name)})

(defn render-suggestion [{:keys [name]}]
  (let [classes (css-classes name)]
    ^{:key (gensym "suggestion-")}
    [:div {:class (classes :wrapper-classes)
           :on-click (fn []
                       (data-source-async name)
                       (reset! r nil))}
     [:i {:class (classes :suggestion-classes)} name]]))

(defn search-fn [e]
  (let [text (-> e .-target .-value)]
    (data-source-async text)))

(defn search-bar []
  [:div
   [:input {:type      "text"
            :on-change search-fn
            :on-key-press (fn [e]
                            (when (= (.-key e) "Enter")
                              (reset! r nil)
                              (rf/dispatch [:set-active-page :search ""])
                              (.preventDefault e)))}]

   (for [result (take 10 @r)]
     (render-suggestion result))])


(defn component []
  (fn []
    [:section.search-bar-wrapper
     [search-bar]]))
