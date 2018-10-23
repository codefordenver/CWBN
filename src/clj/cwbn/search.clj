(ns cwbn.search
  (:require [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.index :as idx]
            [clojurewerkz.elastisch.rest.document :as doc]
            [clojurewerkz.elastisch.query :as q]))

(def index-name "cwbn")

(def _type "organizations")

(def elastic-search-endpoint "http://127.0.0.1:9200")

(defn setup []
  (try
    (let [conn (esr/connect elastic-search-endpoint)]
      (idx/delete conn index-name)
      (idx/create conn index-name))
    (catch Exception e
      (throw e))))

(defn search [query]
  (let [conn (esr/connect elastic-search-endpoint)]
    ((comp (partial map :_source) :hits :hits)
     ;(doc/search conn index-name _type {:query (q/match "fields.categories" query)})
     (doc/search conn index-name _type {:query (q/match "fields.name" query)}))))

(defn index [data]
  (let [conn (esr/connect elastic-search-endpoint)]
    (doall
      (for [d data]
        (doc/create conn index-name _type d)))))
