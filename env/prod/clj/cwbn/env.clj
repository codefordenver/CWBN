(ns cwbn.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[cwbn started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[cwbn has shut down successfully]=-"))
   :middleware identity})
