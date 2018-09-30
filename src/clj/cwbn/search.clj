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
      (idx/create conn index-name)
      (doc/create conn index-name _type {:fields  {:name "Article 1"}
                                         :date    "2015-12-13T14:11:19"
                                         :message "Testing"})
      (doc/create conn index-name _type {:fields  {:name "Article 1"}
                                         :date    "2015-04-13T14:11:19"
                                         :message "Test"})
      (doc/create conn index-name _type {:fields  {:name "Third"}
                                         :date    "2015-11-13T14:12:19"
                                         :message "Other"}))
    (catch Exception e
      (throw e))))

(defn search [query]
  (let [conn (esr/connect elastic-search-endpoint)]
    ((comp (partial map :_source) :hits :hits)
     (doc/search conn index-name _type
                 {:query (q/match "fields.name" query)}))))
