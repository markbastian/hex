(defproject
  hex "0.1.0-SNAPSHOT"
  :description "Hexagonal Grid Coordinates in Clojure"
  :url "https://github.com/markbastian/hex"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  
  :dependencies [[org.clojure/clojure "1.9.0-alpha8"]
                 [org.clojure/clojurescript "1.9.93"]
                 [numerics "0.1.0-SNAPSHOT"]
                 [reagent "0.5.1"]
                 [quil "2.4.0"]]

  :plugins [[lein-figwheel "0.5.2"]
            [lein-cljsbuild "1.1.3" :exclusions [[org.clojure/clojure]]]]

  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.3"]
                             [org.clojure/clojurescript "1.9.93"]]
                   :dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.4-5"]]
                   :repl-options
                   {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}
             :cljs {:plugins [[lein-cljsbuild "1.1.2"]] }}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]}

  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src/cljs" "src/cljc"]

             :figwheel {:on-jsload "grid.core/on-js-reload"}

             :compiler {:main grid.core
                        :asset-path "js/compiled/out"
                        :output-to "resources/public/js/compiled/grid.js"
                        :output-dir "resources/public/js/compiled/out"
                        :source-map-timestamp true}}

            {:id "min"
             :source-paths ["src/cljs" "src/cljc"]
             :compiler {:output-to "resources/public/js/compiled/grid.js"
                        :main grid.core
                        :optimizations :advanced
                        :pretty-print false}}]}
  
  :figwheel {:css-dirs ["resources/public/css"]})
