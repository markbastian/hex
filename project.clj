(defproject
  hex "0.1.0-SNAPSHOT"
  :description "Hexagonal Grid Coordinates in Clojure"
  :url "https://github.com/markbastian/hex"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [numerics "0.1.0-SNAPSHOT"]
                 [quil "3.0.0"]
                 [org.clojure/test.check "0.10.0"]]

  :profiles {:dev {:plugins [[lein-cljsbuild "1.1.3"]
                             [org.clojure/clojurescript "1.10.520"]]}}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]})
