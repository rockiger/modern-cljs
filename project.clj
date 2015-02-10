(defproject modern-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  ;; CLJ AND CLJS source code path
  :source-paths ["src/clj" "src/cljs" "src/brepl"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2755"]
                 [compojure "1.3.1"]
                 [domina "1.0.3"]]

  ;; lein-cljsbuild plugin to build a CLJS project
  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-ring "0.9.1"]]

  :ring {:handler modern-cljs.core/handler}

  ;;cljsbuild options configuration
  :cljsbuild {:builds
              {:dev
               {;; clojurescript source code path
                :source-paths ["src/cljs" "src/brepl"]

                :compiler {;;the name of the emmited JS script file
                           :output-to "resources/public/js/modern_dbg.js"

                           ;; minimum :optimization
                           :optimizations :whitespace

                           ;; prettyfying emitted  JS
                           :pretty-print true}}
               :pre-prod
               {;; clojurescript source code path
                :source-paths ["src/cljs" "src/brepl"]

                :compiler {;; different output name
                           :output-to "resources/public/js/modern_pre.js"

                           ;;simple optimization
                           :optimizations :simple

                           ;; no need to prettyfying
                           :pretty-print false}}
               :prod
               {;; clojurescript source code path
                :source-paths ["src/cljs"]

                :compiler {;; another output name
                           :output-to "resources/public/js/modern.js"

                           ;;advanced :optimizations
                           :optimizations :advanced

                           ;; still no prettyfying
                           :pretty-print false}}}})
