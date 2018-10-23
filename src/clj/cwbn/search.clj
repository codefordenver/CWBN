(ns cwbn.search
  (:require [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.index :as idx]
            [clojurewerkz.elastisch.rest.document :as doc]
            [clojurewerkz.elastisch.query :as q]))

(def elastic-search-endpoint "http://127.0.0.1:9200")

(defn setup []
  (try
    (let [conn (esr/connect elastic-search-endpoint)]
      (idx/delete conn "cwbn-organizations")
      (idx/create conn "cwbn-organizations")
      (idx/delete conn "cwbn-categories")
      (idx/create conn "cwbn-categories"))
    (catch Exception e
      (throw e))))

(defn search [query]
  (let [conn (esr/connect elastic-search-endpoint)
        results {:organization-results ((comp (partial map :_source) :hits :hits)
                                        (doc/search conn "cwbn-organizations" "organizations" {:query (q/match "fields.name" query)}))
                 :category-results ((comp (partial map :_source) :hits :hits)
                                    (doc/search conn "cwbn-categories" "categories" {:query (q/match "fields.name" query)}))}]
    results))


(defn index [data index-name]
  (let [conn (esr/connect elastic-search-endpoint)]
    (doall
      (for [d data]
        (doc/create conn index-name (subs index-name 5) d)))))
