(ns adzerk.boot-reload.cwbn.main (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:4435" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})