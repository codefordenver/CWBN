(ns cwbn.components.sorted-list
  (:require [cwbn.components.details :as details]))

(defn component [items org?]
  (let [items (sort-by :name items)
        item-letters (distinct (map #(first (:name %)) items))
        items-by-letter (as-> '{} os
                              (map (fn [l]
                                     (assoc os (keyword l) (filter #(= l (first (:name %))) items)))
                                   item-letters)
                              (apply merge os)
                              (into (sorted-map) os))]
    [:div.category-page
     [:div {:class "category-listings mt4 pt1 flex"}
      (doall
        (for [letter items-by-letter]
          ^{:key (gensym "letter-")}
          [:div {:class "items-by-letter flex"}
           [:div {:class "letter-parent"}
            [:div {:class "letter f3 b tl tc-ns w-20 w-10-l"} (first letter)]]
           [:div {:class "items w-80 w-90-l"}
            (for [item (second letter)]
              ^{:key (gensym "item-")}
              [details/component item org?])]]))]]))
