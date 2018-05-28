(ns cwbn.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [ajax.core :refer [GET POST]]
            [cwbn.ajax :refer [load-interceptors!]]
            [cwbn.events]
            [cwbn.routes :as routes]
            [cwbn.client :refer [client-content]]
            [cwbn.pages.about :refer [about-page]]
            [cwbn.pages.contact :refer [contact-page]]
            [cwbn.pages.home :refer [home-page]]
            [cwbn.pages.not-found :refer [not-found-page]]
            [cwbn.components.footer :refer [footer-component]]
            [cwbn.components.top-bar :refer [top-bar-component]]))

(defn- show-page [page-name]
  (case page-name
        :home [home-page]
        :about [about-page]
        :contact [contact-page]
        :not-found [not-found-page]
        [:div]))

(defn page []
  [:div.page-wrapper
   [top-bar-component]
   [:div.content.container.mv4.pv1
    (show-page @(rf/subscribe [:active-page]))]
   [footer-component]])

;; -------------------------
;; Initialize app

(defn mount-components []
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:initialize-db])
  (load-interceptors!)
  (routes/app-routes)
  (mount-components))
