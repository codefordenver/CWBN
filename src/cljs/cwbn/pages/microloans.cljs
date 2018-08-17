(ns cwbn.pages.microloans)

(defn microloans-display []
      [:div
        [:div {:class "float"}  ;; defined in screen.css file
          [:img {:src (str "img/category-icons/financial.png")}]
          [:h3 "Companies providing small loans for your business success"]]
        [:div "Organization information is pulled here"]])

;; TODO
;;  Fix float
;;    Problem 1: pic and h3 title does not show side-by-side
;;    Problem 2: 3rd div moved to top center of the page
;;  Utilize dynamic name for image file
;;  Need functions to get org info.
;;  Put these in waffle
