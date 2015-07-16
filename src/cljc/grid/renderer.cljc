(ns grid.renderer
  (require [quil.core :as q #?@(:cljs [:include-macros true])]
           [quil.middleware :as m]
           [grid.hex :as hex]))

(defn setup []
  (do (q/smooth)
      (q/frame-rate 100)
      (q/background 200)
      { :board (hex/circle [0 0] 4) }))

(defn draw-hex []
  (doseq [[[xi yi] [xf yf]] hex/edges]
    (q/line xi yi xf yf)))

(defn fill-hex []
  (doseq [[[xi yi] [xf yf]] hex/edges]
    (q/triangle 0 0 xi yi xf yf)))

(defn draw-coords [i j k]
  (q/text-align :center :center)
  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) hex/x-axis))
  (q/scale 0.025 -0.025)
  (q/text (str i) 0 0)
  (q/pop-matrix)

  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) hex/y-axis))
  (q/scale 0.025 -0.025)
  (q/text (str j) 0 0)
  (q/pop-matrix)

  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) hex/z-axis))
  (q/scale 0.025 -0.025)
  (q/text (str k) 0 0)
  (q/pop-matrix))

(defn draw-axes []
  (q/stroke 255 0 0)
  (q/line 0 0 (hex/x-axis 0) (hex/x-axis 1))
  (q/stroke 0 255 0)
  (q/line 0 0 (hex/y-axis 0) (hex/y-axis 1))
  (q/stroke 0 0 255)
  (q/line 0 0 (hex/z-axis 0) (hex/z-axis 1)))

(defn draw [{ :keys [board selected hovered] }]
  (let [w (q/width)
        h (q/height)
        min-dim (min w h)
        dim 20]
    (do
      (q/background 0 0 0)
      (q/translate (* 0.5 w) (* 0.5 h))
      (q/scale 1 -1)
      (q/scale (/ min-dim dim))
      (q/stroke-weight (/ dim min-dim))

      (when hovered
        (q/fill 255 255 0)
        (q/stroke 255 255 0)
        (q/push-matrix)
        (apply q/translate (apply hex/hex->pixel hovered))
        (fill-hex)
        (q/pop-matrix))

      (when selected
        (q/fill 255 0 0)
        (q/stroke 255 0 0)
        (q/push-matrix)
        (apply q/translate (apply hex/hex->pixel selected))
        (fill-hex)
        (q/pop-matrix))

      (when (and selected hovered)
        (q/fill 255 0 0)
        (q/stroke 255 0 0)
        (doseq [h (hex/line-to selected hovered)]
          (q/push-matrix)
          (apply q/translate (apply hex/hex->pixel h))
          (fill-hex)
          (q/pop-matrix)))

      (q/fill 255)
      (q/stroke 255)
      (doseq [[i j] board :let [k (- (+ i j))]]
        (q/push-matrix)
        (apply q/translate (hex/hex->pixel i j k))
        (draw-coords i j k)
        (draw-hex)
        (q/pop-matrix)))))

(defn do-update [state] state)

(defn mouse-clicked [state {:keys [x y p-x p-y]}]
  (let [w (q/width)
        h (q/height)
        min-dim (min w h)
        dim 20
        i (/ (- x (* w 0.5)) (/ min-dim dim))
        j (/ (- (- y (* h 0.5))) (/ min-dim dim))]
    (into state { :selected (hex/cube-round (hex/pixel->hex i j)) })))

(defn mouse-moved [state {:keys [x y p-x p-y]}]
  (let [w (q/width)
        h (q/height)
        min-dim (min w h)
        dim 20
        i (/ (- x (* w 0.5)) (/ min-dim dim))
        j (/ (- (- y (* h 0.5))) (/ min-dim dim))]
    (into state { :hovered (hex/cube-round (hex/pixel->hex i j)) })))

(defn launch-sketch [{:keys[width height host]}]
  (q/sketch
    :title "Hex Grid Visualizer"
    :setup setup
    :update do-update
    :draw draw
    :mouse-moved mouse-moved
    :mouse-clicked mouse-clicked
    :middleware [m/fun-mode]
    :size [width height]
    #?@(:cljs [:host host])))

#?(:clj (launch-sketch { :width 640 :height 480 }))

#?(:cljs (defn ^:export launch-app[host width height]
           (launch-sketch { :width width :height height :host host})))