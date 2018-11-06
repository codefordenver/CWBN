(ns cwbn.search
  (:require [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.index :as idx]
            [clojurewerkz.elastisch.rest.document :as doc]
            [clojurewerkz.elastisch.query :as q]))

(def elastic-search-endpoint "http://elasticsearch:9200")

(defn setup []
  (try
    (let [conn (esr/connect elastic-search-endpoint)]
      (idx/delete conn "cwbn-organizations")
      (idx/create conn "cwbn-organizations")
      (idx/delete conn "cwbn-categories")
      (idx/create conn "cwbn-categories"))
    (catch Exception e
      (throw e))))

(defn normalize-query [conn index type query]
  ((comp (partial map :_source) :hits :hits)
   (doc/search conn index type {:query (q/match "fields.name" query)})))

(defn search [query]
  (let [conn (esr/connect elastic-search-endpoint)
        results {:organization-results (normalize-query conn "cwbn-organizations" "organizations" query)
                 :category-results (normalize-query conn "cwbn-categories" "categories" query)}]
    results))


(defn index [data index-name]
  (let [conn (esr/connect elastic-search-endpoint)]
    (doall
      (for [d data]
        (doc/create conn index-name (subs index-name 5) d)))))
