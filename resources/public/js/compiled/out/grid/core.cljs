(ns grid.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent :refer [atom]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [grid.renderer :as gr]))

(enable-console-print!)

; run sketch
#_(q/defsketch hexgrids
  :host "app"
  :title "Hex Grid Visualizer"
  :setup gr/setup
  :update gr/do-update
  :draw gr/draw
  :mouse-moved gr/mouse-moved
  :mouse-clicked gr/mouse-clicked
  :middleware [m/fun-mode]
  :size [300 300])

#_(defn render [state]
  (let [{:keys [foo]} @state]
    [:div
     [:h1 foo]
     [:svg {:width (* cell-dim 10) :height (* cell-dim 22)}
      (doall (for [i (range 10) j (range 22)]
        [:rect { :key (str i ":" j) :x (* i cell-dim) :y (* j cell-dim)
                :width cell-dim :height cell-dim
                :stroke :red :fill (cond
                                     (locked [i j]) :blue
                                     (sc [i j]) :yellow
                                     :default :black) }]))]
     ]))


#_(when-let [app-context (. js/document (getElementById "app"))]
  (let [state (atom {:foo "bar"})]
    (reagent/render-component
     [render state]
     app-context)))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
