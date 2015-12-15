(defproject
  hex "0.1.0-SNAPSHOT"
  :description "Hexagonal Grid Coordinates in Clojure"
  :url "https://github.com/markbastian/hex"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [numerics "0.1.0-SNAPSHOT"]
                 [quil "2.2.6"]]

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.0.6"]
                             [org.clojure/clojurescript "1.7.170"]]}
             :cljs {:plugins [[lein-cljsbuild "1.0.6"]] }}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]}

  :repl-options {:init-ns grid.hex}

  :cljsbuild {:builds [{ :source-paths ["src/cljs" "src/cljc"]
                        :compiler { :output-to "resources/public/js/hex.js"
                                   :optimizations :advanced
                                   :pretty-print true}}]})
