(ns hex.fhex
  (:require [clojure.core.matrix :refer [normalise add dot cross negate scale]]))

;http://www.redblobgames.com/grids/hexagons/
;http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/

(def x-axis [1 0 0])
(def y-axis [0 1 0])
(def z-axis [0 0 1])

(defn ortho-axes [orientation]
  (let [ortho-z (normalise (add x-axis y-axis z-axis))]
    (if (= :pointy-topped orientation)
      (let [ortho-x (normalise (cross y-axis ortho-z))
            ortho-y (normalise (cross ortho-z ortho-x))]
        {:ortho-x ortho-x :ortho-y ortho-y :ortho-z ortho-z })
      (let [ortho-y (normalise (cross ortho-z y-axis))
            ortho-x (normalise (cross ortho-y ortho-z))]
        {:ortho-x ortho-x :ortho-y ortho-y :ortho-z ortho-z }))))

(defn hex-axes [{:keys [ortho-x ortho-y]}]
  (letfn [(dcos [v] (mapv #(dot v %) [ortho-x ortho-y]))]
    {:hex-x (dcos x-axis)
     :hex-y (dcos y-axis)
     :hex-z (dcos z-axis)}))

(defn hex-geometry [{:keys [hex-x hex-y hex-z]}]
  {:hex-corners [hex-x (negate hex-z)
                 hex-y (negate hex-x)
                 hex-z (negate hex-y)]})

(defn define-geometry [orientation]
  (-> (ortho-axes orientation)
      (#(into % (hex-axes %)))
      (#(into % (hex-geometry %)))))

(def orientations [:pointy-topped :flat-topped])
(def orientations-map (zipmap orientations (map define-geometry orientations)))

(defn ortho-scale [[ox oy oz] [vx vy]] (+ (* (- ox oz) vx) (* (- oy oz) vy)))

(defn cube->hex [v orientation]
  (let [{:keys [ortho-x ortho-y]} (orientations-map orientation)]
    [(ortho-scale ortho-x v) (ortho-scale ortho-y v)]))

(defn hex->cube "Convert from hex (2-d) coordinates to cube"
  [v orientation]
  (let[{:keys [ortho-x ortho-y]} (orientations-map orientation)
       a (- (ortho-x 0) (ortho-x 2))
       b (- (ortho-x 2) (ortho-x 1))
       c (- (ortho-y 2) (ortho-y 0))
       d (- (ortho-y 1) (ortho-y 2))
       det (/ 1.0 (- (* a d) (* b c)))]
    (scale [(dot [d b] v) (dot [c a] v)] det)))
