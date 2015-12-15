(ns grid.quil-hex
  (:require [quil.core :as q #?@(:cljs [:include-macros true])]
            [grid.fhex :as fhex]))

(defn draw-hex-shape [orientation]
  (let [{:keys [hex-corners]} (fhex/orientations-map orientation)]
    (q/begin-shape)
  (doseq [c (take 7 (cycle hex-corners))]
    (apply q/vertex c))
  (q/end-shape)))

(defn draw-coord [c axis]
  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) axis))
  (q/scale 0.025 -0.025)
  (q/text (str c) 0 0)
  (q/pop-matrix))

(defn draw-coords [i j k orientation]
  (let [{:keys [hex-x hex-y hex-z]} (fhex/orientations-map orientation)]
    (do (q/text-align :center :center)
        (draw-coord i hex-x)
        (draw-coord j hex-y)
        (draw-coord k hex-z))))

(defn draw-hex [h orientation]
  (q/with-translation
    (fhex/cube->hex h orientation)
    (draw-hex-shape orientation)))
