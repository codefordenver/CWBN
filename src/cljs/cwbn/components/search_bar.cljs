(ns cwbn.components.search-bar
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! timeout]]
            [cuerdas.core :as cuerdas])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def category-suggestions (reagent/atom []))
(def organization-suggestions (reagent/atom []))

(def search
  (fn [term show-suggestions?]
    (let [term (clojure.string/trim term)]
      (go
        (let [response-channel (http/get "/api/search" {:query-params {"q" term}})
              response (<! response-channel)
              category-results (map #(-> % :fields) (get-in response [:body :category-results]))
              organization-results (map #(-> % :fields) (get-in response [:body :organization-results]))]
          (if show-suggestions?
            (do
              (reset! category-suggestions category-results)
              (reset! organization-suggestions organization-results))
            (do
              (reset! category-suggestions nil)
              (reset! organization-suggestions nil)
              (rf/dispatch [:update-search-term term])
              (rf/dispatch [:update-search-results {:category-results category-results
                                                    :organization-results organization-results}])
              (set! (.-hash js/window.location) (str "/search/" term))
              (rf/dispatch [:set-active-page :search]))))))))

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

(defn search-fn [value-atom e]
  (let [text (-> e .-target .-value)]
    (reset! value-atom text)
    (search text true)))

(defn search-bar []
  (let [search-value (reagent/atom nil)]
    (reagent/create-class
      {:component-did-mount          #(reset! search-value @(rf/subscribe [:search-term]))
       :component-will-receive-props #(reset! search-value @(rf/subscribe [:search-term]))
       :key                          @(rf/subscribe [:search-term])
       :reagent-render
       (fn []
         [:div
          [:input#search-input {:type         "text"
                                :placeholder  "Search community"
                                :value        @search-value
                                :class        (when-not (and (empty? @category-suggestions)
                                                             (empty? @organization-suggestions))
                                                "active")
                                :on-change    #(search-fn search-value %)
                                :on-key-press (fn [e]
                                                (when (and (= (.-key e) "Enter")
                                                           (> (count (-> e .-target .-value)) 0))
                                                  (search (-> e .-target .-value) false)
                                                  (.preventDefault e)))
                                :on-key-up    (fn [e]
                                                (when (= (.-key e) "Escape")
                                                  (.blur (.-target e))))
                                :on-blur      (fn [e]
                                                (when (.-target e)
                                                  (reset! category-suggestions nil)
                                                  (reset! organization-suggestions nil)))
                                :on-focus     (fn [e]
                                                (search-fn search-value e)
                                                (.select (.-target e)))}]

          [:div#search-suggestions
           (when-not (empty? @category-suggestions)
             [:div
              [:div.suggestion-header-wrapper
               [:b "Categories"]]
              (for [result (take 10 @category-suggestions)]
                (render-suggestion (:name result) :category))])
           (when-not (empty? @organization-suggestions)
             [:div
              [:div.suggestion-header-wrapper
               [:b "Organizations"]]
              (for [result (take 10 @organization-suggestions)]
                (render-suggestion (:name result) :organization))])]])})))

(defn component []
  [:section.search-bar-wrapper
   [search-bar]])
