(ns cwbn.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [cwbn.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[cwbn started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[cwbn has shut down successfully]=-"))
   :middleware wrap-dev})
