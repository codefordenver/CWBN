(ns cwbn.core
  (:require [cwbn.handler :as handler]
            [luminus.repl-server :as repl]
            [org.httpkit.server :as http-kit]
            [luminus-migrations.core :as migrations]
            [cwbn.config :refer [env]]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.tools.logging :as log]
            [mount.core :as mount])
  (:gen-class))

(def cli-options
  [["-p" "--port PORT" "Port number"
    :parse-fn #(Integer/parseInt %)]])

(mount/defstate ^{:on-reload :noop} http-server
  :start
  ;;
  ;; Here, we inline luminus.http-server/start so we can replace
  ;; dependency [luminus-http-kit "0.1.6"] with
  ;; [http-kit "2.3.0-beta2"], which contains a necessary fix
  ;; (https://github.com/http-kit/http-kit/issues/356),
  ;; but does not contain luminus.http-server.
  (let [{:keys [handler host port] :as opts}
        (-> env
            (assoc :handler #'handler/app)
            (update :io-threads
              #(or % (* 2 (.availableProcessors (Runtime/getRuntime)))))
            (update :port #(or (-> env :options :port) %)))]
    (try
      (log/info "starting HTTP server on port" port)
      (http-kit/run-server
        handler
        (dissoc opts :handler :init))
      (catch Throwable t
        (log/error t (str "server failed to start on" host "port" port))
        (throw t))))
  :stop
  ;;
  ;; Here, we inline luminus.http-server/stop as above for start.
  (do
    (http-server :timeout 100)
    (log/info "HTTP server stopped")))


(mount/defstate ^{:on-reload :noop} repl-server
  :start
  (when-let [nrepl-port (env :nrepl-port)]
    (repl/start {:port nrepl-port}))
  :stop
  (when repl-server
    (repl/stop repl-server)))


(defn stop-app []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents))

(defn start-app [args]
  (doseq [component (-> args
                        (parse-opts cli-options)
                        mount/start-with-args
                        :started)]
    (log/info component "started"))
  (cwbn.search/setup)
  (cwbn.airtable/reset-or-init-redis-cache)
  ;; begin indexing
  (let [orgs (cwbn.airtable/normalize-records :organizations)]
    (cwbn.search/index orgs))
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))

(defn -main [& args]
  (mount/start #'cwbn.config/env)
  (cond
    (nil? (:database-url env))
    (do
      (log/error "Database configurtion not found, :database-url environment variable must be set before running")
      (System/exit 1))
    (some #{"init"} args)
    (do
      (migrations/init (select-keys env [:database-url :init-script]))
      (System/exit 0))
    (migrations/migration? args)
    (do
      (migrations/migrate args (select-keys env [:database-url]))
      (System/exit 0))
    :else
    (start-app args)))

