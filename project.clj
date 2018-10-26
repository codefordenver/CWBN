(defproject cwbn "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[ch.qos.logback/logback-classic "1.2.3"]
                 [clj-time "0.14.3"]
                 [cljs-ajax "0.7.3"]
                 [com.h2database/h2 "1.4.196"]
                 [com.walmartlabs/lacinia "0.29.0-rc-1"]
                 [com.workframe/artemis "0.1.0-SNAPSHOT"]
                 [compojure "1.6.1"]
                 [conman "0.7.8"]
                 [cprop "0.1.11"]
                 [funcool/struct "1.2.0"]
                 [http-kit "2.3.0-beta2"]
                 [luminus-migrations "0.5.0"]
                 [luminus-nrepl "0.1.4"]
                 [luminus/ring-ttl-session "0.3.2"]
                 [markdown-clj "1.0.2"]
                 [metosin/compojure-api "1.1.12"]
                 [metosin/muuntaja "0.5.0"]
                 [metosin/ring-http-response "0.9.0"]
                 [mount "0.1.12"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238" :scope "provided"]
                 [org.clojure/tools.cli "0.3.6"]
                 [org.clojure/tools.logging "0.4.0"]
                 [org.webjars.bower/tether "1.4.3"]
                 [org.webjars/bootstrap "4.1.0"]
                 [org.webjars/font-awesome "5.0.10"]
                 [re-frame "0.10.5"]
                 [re-frisk "0.5.3"]
                 [reagent "0.8.0"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-defaults "0.3.1"]
                 [secretary "1.2.3"]
                 [selmer "1.11.7"]
                 [migratus "1.0.6"]
                 [re-com "0.9.0"]
                 [com.taoensso/carmine "2.18.1"]
                 [metosin/jsonista "0.2.1"]
                 [org.clojure/core.async "0.4.474"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [funcool/cuerdas "2.0.5"]
                 [camel-snake-kebab "0.4.0"]
                 [org.clojars.sergeyminaev/elastisch "6.0.0"]]

  :min-lein-version "2.0.0"

  :source-paths ["src/clj" "src/cljs" "src/cljc"]
  :test-paths ["test/clj"]
  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s/"
  :main ^:skip-aot cwbn.core

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-sassc "0.10.4"]
            [lein-auto "0.1.2"]
            [migratus-lein "0.4.1"]
            [lein-ring "0.12.4"]]

  :sassc
  [{:src         "resources/scss/screen.scss"
    :output-to   "resources/public/css/screen.css"
    :style       "nested"
    :import-path "resources/scss"}]

  :auto {"sassc" {:file-pattern #"\.(scss|sass)$" :paths ["resources/scss"]}}

  :clean-targets ^{:protect false}
  [:target-path [:cljsbuild :builds :app :compiler :output-dir] [:cljsbuild :builds :app :compiler :output-to]]
  :figwheel
  {:http-server-root "public"
   :nrepl-port 7002
   :css-dirs ["resources/public/css"]
   :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}


  :profiles
  {:uberjar {:omit-source true
             :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
             :cljsbuild
             {:builds
              {:min
               {:source-paths ["src/cljc" "src/cljs" "env/prod/cljs"]
                :compiler
                {:output-dir "target/cljsbuild/public/js"
                 :output-to "target/cljsbuild/public/js/app.js"
                 :source-map "target/cljsbuild/public/js/app.js.map"
                 :optimizations :advanced
                 :pretty-print false
                 :closure-warnings
                 {:externs-validation :off :non-standard-jsdoc :off}
                 :externs ["react/externs/react.js"]}}}}


             :aot :all
             :uberjar-name "cwbn.jar"
             :source-paths ["env/prod/clj"]
             :resource-paths ["env/prod/resources"]}

   :dev           [:project/dev :profiles/dev]
   :test          [:project/dev :project/test :profiles/test]

   :project/dev  {:jvm-opts ["-Dconf=dev-config.edn"]
                  :dependencies [[binaryage/devtools "0.9.10"]
                                 [com.cemerick/piggieback "0.2.2"]
                                 [day8.re-frame/re-frame-10x "0.3.3"]
                                 [doo "0.1.10"]
                                 [figwheel-sidecar "0.5.15"]
                                 [pjstadig/humane-test-output "0.8.3"]
                                 [prone "1.5.2"]
                                 [ring/ring-devel "1.6.3"]
                                 [ring/ring-mock "0.3.2"]]
                  :plugins      [[com.jakemccrary/lein-test-refresh "0.19.0"]
                                 [lein-doo "0.1.10"]
                                 [lein-figwheel "0.5.15"]
                                 [org.clojure/clojurescript "1.10.238"]]
                  :cljsbuild
                  {:builds
                   {:app
                    {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                     :figwheel {:on-jsload "cwbn.core/mount-components"}
                     :compiler
                     {:main "cwbn.app"
                      :asset-path "/js/out"
                      :output-to "target/cljsbuild/public/js/app.js"
                      :output-dir "target/cljsbuild/public/js/out"
                      :source-map true
                      :optimizations :none
                      :pretty-print true
                      :closure-defines {"re_frame.trace.trace_enabled_QMARK_" true}}}}}
                      ;;:preloads [day8.re-frame-10x.preload]}}}}



                  :doo {:build "test"}
                  :source-paths ["env/dev/clj"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user
                                 :timeout 120000}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}
   :project/test {:jvm-opts ["-Dconf=test-config.edn"]
                  :resource-paths ["env/test/resources"]
                  :cljsbuild
                  {:builds
                   {:test
                    {:source-paths ["src/cljc" "src/cljs" "test/cljs"]
                     :compiler
                     {:output-to "target/test.js"
                      :main "cwbn.doo-runner"
                      :optimizations :whitespace
                      :pretty-print true}}}}}


   :profiles/dev {:env {:database-url "jdbc:h2:./cwbn_dev.db"}}
   :profiles/test {:env {:database-url "jdbc:h2:./cwbn_test.db"}}})
