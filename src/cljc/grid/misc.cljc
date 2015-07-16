(ns grid.misc
  (:require [vecmath.core :as vc]
            [quil.core :as q #?@(:cljs [:include-macros true])]
            [quil.middleware :as m]))

(def x-axis [1 0 0])
(def y-axis [0 1 0])
(def z-axis [0 0 1])

(def ortho-z (vc/normalize (reduce vc/add [x-axis y-axis z-axis])))
(def ortho-x (vc/normalize (vc/cross y-axis ortho-z)))
(def ortho-y (vc/normalize (vc/cross ortho-z ortho-x)))

(def hex-x (vc/dcos x-axis [ortho-x ortho-y]))
(def hex-y (vc/dcos y-axis [ortho-x ortho-y]))
(def hex-z (vc/dcos z-axis [ortho-x ortho-y]))

(def hex-corners [hex-x (vc/negate hex-z)
                  hex-y (vc/negate hex-x)
                  hex-z (vc/negate hex-y)])

(defn cube [[i j k :as c]] (if k c [i j (- (+ i j))]))

(def hex-edges (->> hex-corners cycle (partition 2 1) (take 6) vec))

(defn cube->hex [v] (vc/dcos v [ortho-x ortho-y]))

;(defn cube->hex [[vx vy]]
;  (let[]
;    [(+ (* (- (ortho-x 0) (ortho-x 2)) vx) (* (- (ortho-x 1) (ortho-x 2)) vy))
;     (+ (* (- (ortho-y 0) (ortho-y 2)) vx) (* (- (ortho-y 1) (ortho-y 2)) vy))]))

(defn hex->cube[v]
  (let[a (- (ortho-x 0) (ortho-x 2))
       b (- (ortho-x 2) (ortho-x 1))
       c (- (ortho-y 2) (ortho-y 0))
       d (- (ortho-y 1) (ortho-y 2))
       det (/ 1.0 (- (* a d) (* b c)))]
    (vc/scale [(vc/dot [d b] v) (vc/dot [c a] v)] det)))

(defn cube-round [[hx hy]]
  (let [h [hx hy (- (+ hx hy))]
        r (vec (map #(Math/round (double %)) h))
        df (map #(Math/abs (- %1 %2)) r h)
        i (first (apply max-key second (map-indexed vector df)))
        fix (- (- (reduce + r) (r i)))]
    (assoc r i fix)))

(defn cube-dist [a b]
  (apply max (map #(Math/abs (- %1 %2)) (cube a) (cube b))))

(defn line-until [f t]
  (let [n (cube-dist f t)]
    (loop [i 1 coords [f]]
      (if (<= n i)
        coords
        (recur
          (inc i)
          (->> (/ i n) double (vc/lerp f t) cube-round (conj coords)))))))

(defn line-to [f t] (conj (line-until f t) t))

(defn grid [minx maxx miny maxy]
  (for [i (range minx (inc maxx)) j (range miny (inc maxy))] [i j]))

(defn neighbors [[i j]]
  (let [x ((juxt inc inc identity dec dec identity) i)
        y ((juxt dec identity inc inc identity dec) j)]
    (map vector x y)))

(defn radial-corners[v r]
  (->> [0 0] neighbors (map #(vc/scale % r)) (map #(vc/add % v))))

(defn ring [center radius]
  (if (= radius 0)
    [center]
    (->> (radial-corners center radius) cycle
         (partition 2 1)
         (take 6)
         (map #(apply line-until %))
         (reduce into []))))

(defn circle [center radius]
  (reduce into [] (for [i (range (inc radius))] (ring center i))))

;;;Example below
(def hex-dim 10)

(defn setup []
  (do (q/smooth)
      (q/frame-rate 100)
      (q/background 200)
      { :board (ring [0 0] 4) }))

(defn draw-hex []
  (doseq [[[xi yi] [xf yf]] hex-edges]
    (q/line xi yi xf yf)))

(defn fill-hex []
  (doseq [[[xi yi] [xf yf]] hex-edges]
    (q/triangle 0 0 xi yi xf yf)))

(defn draw-coords [i j k]
  (q/text-align :center :center)
  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) hex-x))
  (q/scale 0.025 -0.025)
  (q/text (str i) 0 0)
  (q/pop-matrix)

  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) hex-y))
  (q/scale 0.025 -0.025)
  (q/text (str j) 0 0)
  (q/pop-matrix)

  (q/push-matrix)
  (apply q/translate (map #(* 0.7 %) hex-z))
  (q/scale 0.025 -0.025)
  (q/text (str k) 0 0)
  (q/pop-matrix))

(defn draw [{ :keys [board selected hovered] }]
  (let [w (q/width)
        h (q/height)
        min-dim (min w h)
        dim hex-dim]
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
        (apply q/translate (cube->hex hovered))
        (fill-hex)
        (q/pop-matrix))

      (when selected
        (q/fill 255 0 0)
        (q/stroke 255 0 0)
        (q/push-matrix)
        (apply q/translate (cube->hex selected))
        (fill-hex)
        (q/pop-matrix))

      (when (and selected hovered)
        (q/fill 255 0 0)
        (q/stroke 255 0 0)
        (doseq [h (line-to selected hovered)]
          (q/push-matrix)
          (apply q/translate (cube->hex h))
          (fill-hex)
          (q/pop-matrix)))

      (q/fill 255)
      (q/stroke 255)
      (doseq [[i j] board :let [k (- (+ i j))]]
        (q/push-matrix)
        (apply q/translate (cube->hex [i j k]))
        (draw-coords i j k)
        (draw-hex)
        (q/pop-matrix)))))

(defn do-update [state] state)

(defn mouse-clicked [state {:keys [x y p-x p-y]}]
  (let [w (q/width)
        h (q/height)
        min-dim (min w h)
        dim hex-dim
        i (/ (- x (* w 0.5)) (/ min-dim dim))
        j (/ (- (- y (* h 0.5))) (/ min-dim dim))]
    (into state { :selected (-> [i j] hex->cube cube-round) })))

(defn mouse-moved [state {:keys [x y p-x p-y]}]
  (let [w (q/width)
        h (q/height)
        min-dim (min w h)
        dim hex-dim
        i (/ (- x (* w 0.5)) (/ min-dim dim))
        j (/ (- (- y (* h 0.5))) (/ min-dim dim))]
    (into state { :hovered (-> [i j] hex->cube cube-round) })))

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