(ns ^:figwheel-no-load cwbn.app
  (:require [cwbn.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
