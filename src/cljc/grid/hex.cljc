(ns grid.hex)

;http://www.redblobgames.com/grids/hexagons/
;http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/

(defn axial->cube [[x y z :as v]] (if z v [x y (- (+ x y))]))

(defn angle->vec [deg]
  ((comp (juxt #(Math/cos %) #(Math/sin %)) #(/ % 180) #(* % Math/PI)) deg))

(def corners (map angle->vec (range 30 390 60)))

(def edges (->> corners cycle (partition 2 1) (take 6) vec))

(def x-axis (angle->vec -30))
(def y-axis (angle->vec 90))
(def z-axis (angle->vec 210))

(defn scale [s v] (mapv #(* % s) v))

;http://www.redblobgames.com/grids/hexagons/#hex-to-pixel
(defn hex->pixel [i _ k]
  [(* (Math/sqrt 3) (+ i (* 0.5 k))) (* 1.5 k)])

(defn pixel->hex [x y]
  (let [i (- (/ (* x (Math/sqrt 3)) 3) (/ y 3.0))
        k (/ (* y 2.0) 3.0)]
    [i (- (+ i k)) k]))

(defn neighbors [[i j]]
  (let [x ((juxt inc inc identity dec dec identity) i)
        y ((juxt dec identity inc inc identity dec) j)]
    (map vector x y)))

(defn radial-corners [v radius]
  (if (zero? radius)
    [v]
    (->> [0 0] neighbors (map (partial scale radius)) (map #(map + v %)))))

(defn cube-dist [a b]
  (apply max (map #(Math/abs (- %1 %2)) (axial->cube a) (axial->cube b))))

(defn cube-lerp [a b t]
  (vec (map (fn [ax bx] (+ ax (* t (- bx ax)))) (axial->cube a) (axial->cube b))))

(defn cube-round [h]
  (let [r (vec (map #(Math/round %) h))
        df (map #(Math/abs (- %1 %2)) r h)
        i (first (apply max-key second (map-indexed vector df)))
        fix (- (- (reduce + r) (r i)))]
   (assoc r i fix)))

(defn line-until [f t]
  (let [n (cube-dist f t)]
    (loop [i 1 coords [f]]
      (if (<= n i)
        coords
        (recur
          (inc i)
          (->> (/ i n) double (cube-lerp f t) cube-round (conj coords)))))))

(defn line-to [f t] (conj (line-until f t) t))

(defn grid [minx maxx miny maxy]
  (for [i (range minx (inc maxx)) j (range miny (inc maxy))] [i j]))

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