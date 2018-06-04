(ns cwbn.pages.service
  (:require [re-frame.core :as rf]
            [clojure.string :as s]))

(defn service-page []
  (let [service-route @(rf/subscribe [:service-route])
        service-name (s/replace service-route "-" " ")]
    [:div.service-page
     [:h1 {:class "f3 b ttc"} service-name]]))
