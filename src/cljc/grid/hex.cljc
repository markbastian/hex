(ns grid.hex
  "Hexagonal coordinate functions and math. These are all integer
  coordinate functions."
  (:require [vecmath.vec :as v]))

(defn axial [[i j]] [i j])
(defn cube [[i j k :as c]] (if k c [i j (- (+ i j))]))

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

(defn line-til [f t]
  (let [n (cube-dist f t)]
    (mapv
     #(cube-round (v/lerp f t (double (/ % n))))
     (range 0 (inc n)))))

(cube-dist [0 0] [0 0])
(= (line-to [0 0] [4 7])
   (line-til [0 0] [4 7]))
(= (line-to [0 0] [0 1])
   (line-til [0 0] [0 1]))
(= (line-to [0 0] [0 0])
   (line-til [0 0] [0 0]))
(cube-dist [0 0] [4 7])

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
