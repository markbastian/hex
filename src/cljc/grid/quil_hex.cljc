(ns grid.quil-hex
  (:require [quil.core :as q #?@(:cljs [:include-macros true])]
            [grid.hex :as hex]))

(defn draw-hex-shape []
  (q/begin-shape)
  (doseq [c (take 7 (cycle hex/hex-corners))]
    (apply q/vertex c))
  (q/end-shape))

(defn draw-coord [c axis]
  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) axis))
  (q/scale 0.025 -0.025)
  (q/text (str c) 0 0)
  (q/pop-matrix))

(defn draw-coords [i j k]
  (q/text-align :center :center)
  (draw-coord i hex/hex-x)
  (draw-coord j hex/hex-y)
  (draw-coord k hex/hex-z))

(defn draw-hex [h]
  (q/with-translation
    (hex/cube->hex h)
    (draw-hex-shape)))
