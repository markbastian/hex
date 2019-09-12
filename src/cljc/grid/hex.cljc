(ns grid.hex
  "Hexagonal coordinate functions and math. These are all integer coordinate functions."
  (:require [vecmath.vec :as v]))

(defn axial "Conform input to axial (2 element) representation of hex coords."
  [[i j]] [i j])

(defn cube "Conform input to cube (3 element) representation of hex coords."
  [[i j k :as c]]
  (if k c [i j (- (+ i j))]))

(defn cube-round [coords]
  (let [r (vec (map #(Math/round (double %)) (cube coords)))
        df (map #(Math/abs (- %1 %2)) r (cube coords))
        i (first (apply max-key second (map-indexed vector df)))
        fix (- (- (reduce + r) (r i)))]
    (axial (assoc r i fix))))

(defn cube-dist [hex-a hex-b]
  (apply max (map #(Math/abs (- %1 %2)) (cube hex-a) (cube hex-b))))

(defn lerp [hex-a hex-b d]
  (cube-round (v/lerp hex-a hex-b d)))

(defn hex-ray-seq [hex-from hex-to]
  (let [d (cube-dist hex-from hex-to)]
    (cons
      hex-from
      (when (pos? d)
        (map #(lerp hex-from hex-to (double (/ % d))) (map inc (range)))))))

(defn line-until [hex-from hex-to]
  (let [n (cube-dist hex-from hex-to)
        f #(lerp hex-from hex-to (double (/ % n)))]
    (loop [i 1 coords [hex-from]]
      (if (<= n i)
        coords
        (recur (inc i) (conj coords (f i)))))))

(defn line-to [hex-from hex-to]
  (conj (line-until hex-from hex-to) hex-to))

(defn grid [minx maxx miny maxy]
  (for [i (range minx (inc maxx)) j (range miny (inc maxy))] [i j]))

(defn neighbors [[i j]]
  (let [x ((juxt inc inc identity dec dec identity) i)
        y ((juxt dec identity inc inc identity dec) j)]
    (map vector x y)))

(defn radial-corners [v r]
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
