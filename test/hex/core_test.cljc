(ns hex.core-test
  (:require [grid.hex :refer :all]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as props]
            #?(:clj  [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [async deftest is testing]])))

(deftest line-to-test
  (testing "Ensure that line-to-test works."
    (is (= (line-to [0 0] [4 7])
           [[0 0] [0 1] [1 1] [1 2] [1 3] [2 3] [2 4] [3 4] [3 5] [3 6] [4 6] [4 7]]))))

(deftest hex-ray-seq-test
  (testing "Ensure that hex-ray-seq works."
    (is (= (take 12 (hex-ray-seq [0 0] [4 2]))
           [[0 0] [1 0] [1 1] [2 1] [3 1] [3 2] [4 2] [5 2] [5 3] [6 3] [7 3] [7 4]]))))

;(deftest to-eq-to2
;  (testing "implementations are equal"
;    (is
;      (->> (gen/sample
;             (props/for-all
;               [from (gen/vector gen/large-integer 2)
;                to (gen/vector gen/large-integer 2)]
;               (= (line-to from to)
;                  (line-to2 from to))))
;           (remove :result)
;           empty?))))
;
;(deftest to-eq-to2
;  (testing "implementations are equal"
;    (is
;      (->> (gen/sample
;             (props/for-all
;               [from (gen/vector gen/large-integer 2)
;                to (gen/vector gen/large-integer 2)]
;               (= (line-until from to)
;                  (line-until2 from to)
;                  (line-until3 from to))))
;           (remove :result)
;           empty?))))

