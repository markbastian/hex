(ns grid.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defn render [state]
  (let []
    [:div
     [:h1 "Tetris Clone"]
     #_[:svg {:width (* cell-dim 10) :height (* cell-dim 22)}
      (doall (for [i (range 10) j (range 22)]
        [:rect { :key (str i ":" j) :x (* i cell-dim) :y (* j cell-dim)
                :width cell-dim :height cell-dim
                :stroke :red :fill (cond
                                     (locked [i j]) :blue
                                     (sc [i j]) :yellow
                                     :default :black) }]))]
     ]))


(when-let [app-context (. js/document (getElementById "app"))]
  (let []
  (reagent/render-component
    [render state])))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
