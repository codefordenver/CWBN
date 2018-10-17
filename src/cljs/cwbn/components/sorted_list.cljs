(ns cwbn.components.sorted-list
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [cwbn.components.details :as details]))

(defn component [orgs]
  (let [orgs (sort-by :name orgs)
        org-letters (distinct (map #(first (:name %)) orgs))
        orgs-by-letter (as-> '{} os
                             (map (fn [l]
                                    (assoc os (keyword l) (filter #(= l (first (:name %))) orgs)))
                                  org-letters)
                             (apply merge os)
                             (into (sorted-map) os))]
    (fn []
      [:div.category-page
       [:div {:class "category-listings mt4 pt1 flex"}
        (doall
          (for [letter orgs-by-letter]
            ^{:key (gensym "letter-")}
            [:div {:class "orgs-by-letter flex"}
             [:div {:class "letter-parent"}
              [:div {:class "letter f3 b tl tc-ns w-20 w-10-l"} (first letter)]]
             [:div {:class "orgs w-80 w-90-l"}
              (for [org (nth letter 1)]
                ^{:key (gensym "org-")}
                [details/component org])]]))]])))
