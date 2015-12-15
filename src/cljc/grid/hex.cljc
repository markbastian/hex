(ns grid.hex
  (:require [vecmath.vec :as v]))

(defn basis [b]
  (let [ortho-z (v/normalize (reduce v/add [v/x-axis v/y-axis v/z-axis]))]
    (if b
      (let [ortho-x (v/normalize (v/cross v/y-axis ortho-z))
            ortho-y (v/normalize (v/cross ortho-z ortho-x))]
        {:ortho-x ortho-x :ortho-y ortho-y :ortho-z ortho-z })
      (let [ortho-y (v/normalize (v/cross ortho-z v/y-axis))
            ortho-x (v/normalize (v/cross ortho-y ortho-z))]
        {:ortho-x ortho-x :ortho-y ortho-y :ortho-z ortho-z }))))

;http://www.redblobgames.com/grids/hexagons/
;http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/
(def ortho-z (v/normalize (reduce v/add [v/x-axis v/y-axis v/z-axis])))
(def ortho-x (v/normalize (v/cross v/y-axis ortho-z)))
(def ortho-y (v/normalize (v/cross ortho-z ortho-x)))
;(def ortho-y (v/normalize (v/cross ortho-z v/y-axis)))
;(def ortho-x (v/normalize (v/cross ortho-y ortho-z)))

(def hex-x (v/dcos v/x-axis [ortho-x ortho-y]))
(def hex-y (v/dcos v/y-axis [ortho-x ortho-y]))
(def hex-z (v/dcos v/z-axis [ortho-x ortho-y]))

(def hex-corners [hex-x (v/negate hex-z)
                  hex-y (v/negate hex-x)
                  hex-z (v/negate hex-y)])

(def hex-edges (->> hex-corners cycle (partition 2 1) (take 6) vec))

(defn cube [[i j k :as c]] (if k c [i j (- (+ i j))]))
(defn axial [[i j]] [i j])

(defn ortho-scale [[ox oy oz] [vx vy]] (+ (* (- ox oz) vx) (* (- oy oz) vy)))

(defn cube->hex [v] [(ortho-scale ortho-x v) (ortho-scale ortho-y v)])

(defn hex->cube[v]
  (let[a (- (ortho-x 0) (ortho-x 2))
       b (- (ortho-x 2) (ortho-x 1))
       c (- (ortho-y 2) (ortho-y 0))
       d (- (ortho-y 1) (ortho-y 2))
       det (/ 1.0 (- (* a d) (* b c)))]
    (v/scale [(v/dot [d b] v) (v/dot [c a] v)] det)))

(defn cube-round [h]
  (let [r (vec (map #(Math/round (double %)) (cube h)))
        df (map #(Math/abs (- %1 %2)) r (cube h))
        i (first (apply max-key second (map-indexed vector df)))
        fix (- (- (reduce + r) (r i)))]
    (axial (assoc r i fix))))

(defn cube-dist [a b]
  (apply max (map #(Math/abs (- %1 %2)) (cube a) (cube b))))

(defn line-until [f t]
  (let [n (cube-dist f t)]
    (loop [i 1 coords [f]]
      (if (<= n i)
        coords
        (recur
          (inc i)
          (->> (/ i n) double (v/lerp f t) cube-round (conj coords)))))))

(defn line-to [f t] (conj (line-until f t) t))

(defn grid [minx maxx miny maxy]
  (for [i (range minx (inc maxx)) j (range miny (inc maxy))] [i j]))

(defn neighbors [[i j]]
  (let [x ((juxt inc inc identity dec dec identity) i)
        y ((juxt dec identity inc inc identity dec) j)]
    (map vector x y)))

(defn radial-corners[v r]
  (->> [0 0] neighbors (map #(v/scale % r)) (map #(v/add % v))))

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

(defn same-axis? [a b] (zero? (reduce * (map - (cube a) (cube b)))))

(defn step+x [[i j]] [(inc i) (dec j)])
(defn step-x [[i j]] [(dec i) (inc j)])
(defn step+y [[i j]] [i (inc j)])
(defn step-y [[i j]] [i (dec j)])
(defn step+z [[i j]] [(dec i) j])
(defn step-z [[i j]] [(inc i) j])

(defn walk+x [hex] (iterate step+x hex))
(defn walk-x [hex] (iterate step-x hex))
(defn walk+y [hex] (iterate step+y hex))
(defn walk-y [hex] (iterate step-y hex))
(defn walk+z [hex] (iterate step+z hex))
(defn walk-z [hex] (iterate step-z hex))