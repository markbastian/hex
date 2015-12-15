(ns grid.fhex
  (:require [vecmath.vec :as v]))

;http://www.redblobgames.com/grids/hexagons/
;http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/

(defn ortho-axes [orientation]
  (let [ortho-z (v/normalize (reduce v/add [v/x-axis v/y-axis v/z-axis]))]
    (if (= :pointy-topped orientation)
      (let [ortho-x (v/normalize (v/cross v/y-axis ortho-z))
            ortho-y (v/normalize (v/cross ortho-z ortho-x))]
        {:ortho-x ortho-x :ortho-y ortho-y :ortho-z ortho-z })
      (let [ortho-y (v/normalize (v/cross ortho-z v/y-axis))
            ortho-x (v/normalize (v/cross ortho-y ortho-z))]
        {:ortho-x ortho-x :ortho-y ortho-y :ortho-z ortho-z }))))

(defn hex-axes [{:keys [ortho-x ortho-y]}]
  (let [xy [ortho-x ortho-y]]
    {:hex-x (v/dcos v/x-axis xy)
     :hex-y (v/dcos v/y-axis xy)
     :hex-z (v/dcos v/z-axis xy)}))

(defn hex-geometry [{:keys [hex-x hex-y hex-z]}]
  {:hex-corners [hex-x (v/negate hex-z)
                 hex-y (v/negate hex-x)
                 hex-z (v/negate hex-y)]})

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
    (v/scale [(v/dot [d b] v) (v/dot [c a] v)] det)))
