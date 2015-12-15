(ns grid.renderer
  (:require [quil.core :as q #?@(:cljs [:include-macros true])]
           [quil.middleware :as m]
            [grid.quil-hex :as qh]
            [grid.hex :as hex]))

(defn setup []
  (do (q/smooth)
      (q/frame-rate 100)
      (q/background 200)
      { :board (into #{} (hex/circle [0 0] 4))
       :world-radius 10 }))

(defn draw [{ :keys [board selected hovered world-radius] }]
  (let [w (q/width)
        h (q/height)
        aspect (double (/ w h))
        half-dim (* 0.5 world-radius)
        dw (if (< 1 aspect) (* aspect half-dim) half-dim)
        dh (if (> 1 aspect) (* aspect half-dim) half-dim)
        min-dim (min w h)]
    (do
      (q/background 0 0 0)
      (q/translate (* 0.5 w) (* 0.5 h))
      (q/scale 1 -1)
      (q/scale (/ min-dim world-radius))
      (q/stroke-weight (/ world-radius min-dim))

      (when hovered
        (q/fill 255 255 0)
        (qh/draw-hex hovered))

      (when selected
        (q/fill 255 0 0)
        (qh/draw-hex selected))

      (when (and selected hovered)
        (q/fill 255 0 0)
        (doseq [h (hex/line-until selected hovered)]
          (qh/draw-hex h)))

      (q/stroke-int 255)
      (q/fill 255)
      (q/no-fill)
      (doseq [c board
              :let [sc (hex/cube->hex c)]
              :when (and (<= (Math/abs (sc 0)) dw)
                         (<= (Math/abs (sc 1)) dh))]
        (q/with-translation sc
          (apply qh/draw-coords (hex/cube c))
          (qh/draw-hex-shape))))))

(defn do-update [state] state)

(defn screen->axial [px py dim]
  (let [w (q/width) h (q/height)
        min-dim (min w h)
        i (/ (- px (* w 0.5)) (/ min-dim dim))
        j (/ (- (- py (* h 0.5))) (/ min-dim dim))]
    (-> [i j] hex/hex->cube hex/cube-round)))

(defn mouse-clicked [{ :keys [board world-radius] :as state} {:keys [x y]}]
  (if-let [hex (board (screen->axial x y world-radius))]
    (into state { :selected hex })
    (dissoc state :selected)))

(defn mouse-moved [{ :keys [board world-radius] :as state} {:keys [x y]}]
  (if-let [hex (board (screen->axial x y world-radius))]
    (into state { :hovered hex })
    (dissoc state :hovered)))

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