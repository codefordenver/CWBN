(ns cwbn.components.search-bar
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! timeout]]
            [cuerdas.core :as cuerdas])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def c-results (reagent/atom []))
(def o-results (reagent/atom []))

(def search
  (fn [term show-suggestions?]
    (go
      (let [response-channel (http/get "/api/search" {:query-params {"q" term}})
            response (<! response-channel)
            category-results (map #(-> % :fields) (get-in response [:body :category-results]))
            organization-results (map #(-> % :fields) (get-in response [:body :organization-results]))]
        (if show-suggestions?
          (do
            (reset! c-results category-results)
            (reset! o-results organization-results))
          (do
            (reset! c-results nil)
            (reset! o-results nil)
            (rf/dispatch [:update-search-term term])
            (rf/dispatch [:update-search-results {:category-results category-results
                                                  :organization-results organization-results}])
            (rf/dispatch [:set-active-page :search ""])))))))

(defn css-classes [name]
  {:wrapper-classes    (str "suggestion-wrapper" " " "suggestion-wrapper-" name)
   :suggestion-classes (str "suggestion" " " "suggestion-" name)})

(defn render-suggestion [name type]
  (let [classes (css-classes name)]
    ^{:key (gensym "suggestion-")}
    [:div {:class (classes :wrapper-classes)
           :on-mouse-down (fn []
                            (if (= type :organization)
                              (do
                                (search name false)
                                (set! (.-value (js/document.getElementById "search-input")) name))
                              (set! (.-hash js/window.location) (str "/category/" (cuerdas/kebab name)))))}
     [:i {:class (classes :suggestion-classes)} name]]))

(defn search-fn [e]
  (let [text (-> e .-target .-value)]
    (search text true)))

(defn search-bar [text]
  [:div
   [:input#search-input {:type      "text"
                         :placeholder "Search community"
                         :default-value text
                         :class (when-not (and (empty? @c-results)
                                               (empty? @o-results))
                                  "active")
                         :on-change search-fn
                         :on-key-press (fn [e]
                                         (when (= (.-key e) "Enter")
                                           (search (-> e .-target .-value) false)
                                           (.preventDefault e)))
                         :on-key-up (fn [e]
                                      (when (= (.-key e) "Escape")
                                        (.blur (.-target e))))
                         :on-blur (fn [e]
                                     (when (.-target e)
                                       (reset! c-results nil)
                                       (reset! o-results nil)))
                         :on-focus (fn [e]
                                     (search-fn e)
                                     (.select (.-target e)))}]

   [:div#search-suggestions
    (when-not (empty? @c-results)
      [:div
       [:div.suggestion-header-wrapper
        [:b "Categories"]]
       (for [result (take 10 @c-results)]
         (render-suggestion (:name result) :category))])
    (when-not (empty? @o-results)
      [:div
        [:div.suggestion-header-wrapper
         [:b "Organizations"]]
        (for [result (take 10 @o-results)]
          (render-suggestion (:name result) :organization))])]])

(defn component [text]
  [:section.search-bar-wrapper
   [search-bar text]])
