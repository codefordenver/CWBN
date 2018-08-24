(ns cwbn.graphql
  (:require [artemis.core :as a]
            [artemis.network-steps.http :as http]
            [artemis.stores.mapgraph.core :as mgs]))

(def graphql-url "/api/graphql")

(def network-chain (http/create-network-step graphql-url))

(def store (mgs/create-store))

(def client (a/create-client :network-chain network-chain
                             :store         store))
