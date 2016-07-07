// Compiled by ClojureScript 1.8.51 {}
goog.provide('vecmath.vec');
goog.require('cljs.core');
vecmath.vec.dot = (function vecmath$vec$dot(u,v){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,u,v));
});
vecmath.vec.cross = (function vecmath$vec$cross(p__39024,p__39025){
var vec__39028 = p__39024;
var ux = cljs.core.nth.call(null,vec__39028,(0),null);
var uy = cljs.core.nth.call(null,vec__39028,(1),null);
var uz = cljs.core.nth.call(null,vec__39028,(2),null);
var vec__39029 = p__39025;
var vx = cljs.core.nth.call(null,vec__39029,(0),null);
var vy = cljs.core.nth.call(null,vec__39029,(1),null);
var vz = cljs.core.nth.call(null,vec__39029,(2),null);
if(cljs.core.truth_((function (){var and__37690__auto__ = uz;
if(cljs.core.truth_(and__37690__auto__)){
return vz;
} else {
return and__37690__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((uy * vz) - (uz * vy)),((uz * vx) - (ux * vz)),((ux * vy) - (uy * vx))], null);
} else {
return ((ux * vy) - (uy * vx));
}
});
vecmath.vec.add = (function vecmath$vec$add(u,v){
return cljs.core.mapv.call(null,cljs.core._PLUS_,u,v);
});
vecmath.vec.sub = (function vecmath$vec$sub(u,v){
return cljs.core.mapv.call(null,cljs.core._,u,v);
});
vecmath.vec.scale = (function vecmath$vec$scale(u,s){
return cljs.core.mapv.call(null,(function (p1__39030_SHARP_){
return (s * p1__39030_SHARP_);
}),u);
});
vecmath.vec.mag = (function vecmath$vec$mag(u){
return Math.sqrt(vecmath.vec.dot.call(null,u,u));
});
vecmath.vec.normalize = (function vecmath$vec$normalize(u){
return vecmath.vec.scale.call(null,u,(1.0 / vecmath.vec.mag.call(null,u)));
});
vecmath.vec.negate = (function vecmath$vec$negate(u){
return vecmath.vec.scale.call(null,u,(-1));
});
vecmath.vec.dcos = (function vecmath$vec$dcos(v,directions){
return cljs.core.mapv.call(null,(function (p1__39031_SHARP_){
return vecmath.vec.dot.call(null,v,p1__39031_SHARP_);
}),directions);
});
vecmath.vec.lerp = (function vecmath$vec$lerp(u,v,t){
return vecmath.vec.add.call(null,u,vecmath.vec.scale.call(null,vecmath.vec.sub.call(null,v,u),t));
});
vecmath.vec.origin = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
vecmath.vec.x_axis = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null);
vecmath.vec.y_axis = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null);
vecmath.vec.z_axis = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null);

//# sourceMappingURL=vec.js.map?rel=1462424037248