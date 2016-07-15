// Compiled by ClojureScript 1.9.93 {}
goog.provide('grid.hex');
goog.require('cljs.core');
goog.require('vecmath.vec');
grid.hex.axial = (function grid$hex$axial(p__85881){
var vec__85885 = p__85881;
var i = cljs.core.nth.call(null,vec__85885,(0),null);
var j = cljs.core.nth.call(null,vec__85885,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
});
grid.hex.cube = (function grid$hex$cube(p__85888){
var vec__85892 = p__85888;
var i = cljs.core.nth.call(null,vec__85892,(0),null);
var j = cljs.core.nth.call(null,vec__85892,(1),null);
var k = cljs.core.nth.call(null,vec__85892,(2),null);
var c = vec__85892;
if(cljs.core.truth_(k)){
return c;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,(- (i + j))], null);
}
});
grid.hex.cube_round = (function grid$hex$cube_round(h){
var r = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__85895_SHARP_){
return Math.round(p1__85895_SHARP_);
}),grid.hex.cube.call(null,h)));
var df = cljs.core.map.call(null,((function (r){
return (function (p1__85896_SHARP_,p2__85897_SHARP_){
return Math.abs((p1__85896_SHARP_ - p2__85897_SHARP_));
});})(r))
,r,grid.hex.cube.call(null,h));
var i = cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.second,cljs.core.map_indexed.call(null,cljs.core.vector,df)));
var fix = (- (cljs.core.reduce.call(null,cljs.core._PLUS_,r) - r.call(null,i)));
return grid.hex.axial.call(null,cljs.core.assoc.call(null,r,i,fix));
});
grid.hex.cube_dist = (function grid$hex$cube_dist(a,b){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__85898_SHARP_,p2__85899_SHARP_){
return Math.abs((p1__85898_SHARP_ - p2__85899_SHARP_));
}),grid.hex.cube.call(null,a),grid.hex.cube.call(null,b)));
});
grid.hex.line_until = (function grid$hex$line_until(f,t){
var n = grid.hex.cube_dist.call(null,f,t);
var i = (1);
var coords = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
while(true){
if((n <= i)){
return coords;
} else {
var G__85900 = (i + (1));
var G__85901 = cljs.core.conj.call(null,coords,grid.hex.cube_round.call(null,vecmath.vec.lerp.call(null,f,t,(i / n))));
i = G__85900;
coords = G__85901;
continue;
}
break;
}
});
grid.hex.line_to = (function grid$hex$line_to(f,t){
return cljs.core.conj.call(null,grid.hex.line_until.call(null,f,t),t);
});
grid.hex.line_til = (function grid$hex$line_til(f,t){
var n = grid.hex.cube_dist.call(null,f,t);
return cljs.core.mapv.call(null,((function (n){
return (function (p1__85902_SHARP_){
return grid.hex.cube_round.call(null,vecmath.vec.lerp.call(null,f,t,(p1__85902_SHARP_ / n)));
});})(n))
,cljs.core.range.call(null,(0),(n + (1))));
});
grid.hex.cube_dist.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
cljs.core._EQ_.call(null,grid.hex.line_to.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null)),grid.hex.line_til.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null)));
grid.hex.cube_dist.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null));
grid.hex.grid = (function grid$hex$grid(minx,maxx,miny,maxy){
var iter__42273__auto__ = (function grid$hex$grid_$_iter__85909(s__85910){
return (new cljs.core.LazySeq(null,(function (){
var s__85910__$1 = s__85910;
while(true){
var temp__6477__auto__ = cljs.core.seq.call(null,s__85910__$1);
if(temp__6477__auto__){
var xs__7033__auto__ = temp__6477__auto__;
var i = cljs.core.first.call(null,xs__7033__auto__);
var iterys__42269__auto__ = ((function (s__85910__$1,i,xs__7033__auto__,temp__6477__auto__){
return (function grid$hex$grid_$_iter__85909_$_iter__85911(s__85912){
return (new cljs.core.LazySeq(null,((function (s__85910__$1,i,xs__7033__auto__,temp__6477__auto__){
return (function (){
var s__85912__$1 = s__85912;
while(true){
var temp__6477__auto____$1 = cljs.core.seq.call(null,s__85912__$1);
if(temp__6477__auto____$1){
var s__85912__$2 = temp__6477__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85912__$2)){
var c__42271__auto__ = cljs.core.chunk_first.call(null,s__85912__$2);
var size__42272__auto__ = cljs.core.count.call(null,c__42271__auto__);
var b__85914 = cljs.core.chunk_buffer.call(null,size__42272__auto__);
if((function (){var i__85913 = (0);
while(true){
if((i__85913 < size__42272__auto__)){
var j = cljs.core._nth.call(null,c__42271__auto__,i__85913);
cljs.core.chunk_append.call(null,b__85914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__85915 = (i__85913 + (1));
i__85913 = G__85915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85914),grid$hex$grid_$_iter__85909_$_iter__85911.call(null,cljs.core.chunk_rest.call(null,s__85912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85914),null);
}
} else {
var j = cljs.core.first.call(null,s__85912__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),grid$hex$grid_$_iter__85909_$_iter__85911.call(null,cljs.core.rest.call(null,s__85912__$2)));
}
} else {
return null;
}
break;
}
});})(s__85910__$1,i,xs__7033__auto__,temp__6477__auto__))
,null,null));
});})(s__85910__$1,i,xs__7033__auto__,temp__6477__auto__))
;
var fs__42270__auto__ = cljs.core.seq.call(null,iterys__42269__auto__.call(null,cljs.core.range.call(null,miny,(maxy + (1)))));
if(fs__42270__auto__){
return cljs.core.concat.call(null,fs__42270__auto__,grid$hex$grid_$_iter__85909.call(null,cljs.core.rest.call(null,s__85910__$1)));
} else {
var G__85916 = cljs.core.rest.call(null,s__85910__$1);
s__85910__$1 = G__85916;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__42273__auto__.call(null,cljs.core.range.call(null,minx,(maxx + (1))));
});
grid.hex.neighbors = (function grid$hex$neighbors(p__85917){
var vec__85921 = p__85917;
var i = cljs.core.nth.call(null,vec__85921,(0),null);
var j = cljs.core.nth.call(null,vec__85921,(1),null);
var x = cljs.core.juxt.call(null,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.dec,cljs.core.identity).call(null,i);
var y = cljs.core.juxt.call(null,cljs.core.dec,cljs.core.identity,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec).call(null,j);
return cljs.core.map.call(null,cljs.core.vector,x,y);
});
grid.hex.radial_corners = (function grid$hex$radial_corners(v,r){
return cljs.core.map.call(null,(function (p1__85925_SHARP_){
return vecmath.vec.add.call(null,p1__85925_SHARP_,v);
}),cljs.core.map.call(null,(function (p1__85924_SHARP_){
return vecmath.vec.scale.call(null,p1__85924_SHARP_,r);
}),grid.hex.neighbors.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))));
});
grid.hex.ring = (function grid$hex$ring(center,radius){
if(cljs.core._EQ_.call(null,radius,(0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [center], null);
} else {
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__85926_SHARP_){
return cljs.core.apply.call(null,grid.hex.line_until,p1__85926_SHARP_);
}),cljs.core.take.call(null,(6),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,grid.hex.radial_corners.call(null,center,radius))))));
}
});
grid.hex.circle = (function grid$hex$circle(center,radius){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,(function (){var iter__42273__auto__ = (function grid$hex$circle_$_iter__85931(s__85932){
return (new cljs.core.LazySeq(null,(function (){
var s__85932__$1 = s__85932;
while(true){
var temp__6477__auto__ = cljs.core.seq.call(null,s__85932__$1);
if(temp__6477__auto__){
var s__85932__$2 = temp__6477__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85932__$2)){
var c__42271__auto__ = cljs.core.chunk_first.call(null,s__85932__$2);
var size__42272__auto__ = cljs.core.count.call(null,c__42271__auto__);
var b__85934 = cljs.core.chunk_buffer.call(null,size__42272__auto__);
if((function (){var i__85933 = (0);
while(true){
if((i__85933 < size__42272__auto__)){
var i = cljs.core._nth.call(null,c__42271__auto__,i__85933);
cljs.core.chunk_append.call(null,b__85934,grid.hex.ring.call(null,center,i));

var G__85935 = (i__85933 + (1));
i__85933 = G__85935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85934),grid$hex$circle_$_iter__85931.call(null,cljs.core.chunk_rest.call(null,s__85932__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85934),null);
}
} else {
var i = cljs.core.first.call(null,s__85932__$2);
return cljs.core.cons.call(null,grid.hex.ring.call(null,center,i),grid$hex$circle_$_iter__85931.call(null,cljs.core.rest.call(null,s__85932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__42273__auto__.call(null,cljs.core.range.call(null,(radius + (1))));
})());
});
grid.hex.same_axis_QMARK_ = (function grid$hex$same_axis_QMARK_(a,b){
return (cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.map.call(null,cljs.core._,grid.hex.cube.call(null,a),grid.hex.cube.call(null,b))) === (0));
});
grid.hex.step_PLUS_x = (function grid$hex$step_PLUS_x(p__85936){
var vec__85940 = p__85936;
var i = cljs.core.nth.call(null,vec__85940,(0),null);
var j = cljs.core.nth.call(null,vec__85940,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),(j - (1))], null);
});
grid.hex.step_x = (function grid$hex$step_x(p__85943){
var vec__85947 = p__85943;
var i = cljs.core.nth.call(null,vec__85947,(0),null);
var j = cljs.core.nth.call(null,vec__85947,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - (1)),(j + (1))], null);
});
grid.hex.step_PLUS_y = (function grid$hex$step_PLUS_y(p__85950){
var vec__85954 = p__85950;
var i = cljs.core.nth.call(null,vec__85954,(0),null);
var j = cljs.core.nth.call(null,vec__85954,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null);
});
grid.hex.step_y = (function grid$hex$step_y(p__85957){
var vec__85961 = p__85957;
var i = cljs.core.nth.call(null,vec__85961,(0),null);
var j = cljs.core.nth.call(null,vec__85961,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j - (1))], null);
});
grid.hex.step_PLUS_z = (function grid$hex$step_PLUS_z(p__85964){
var vec__85968 = p__85964;
var i = cljs.core.nth.call(null,vec__85968,(0),null);
var j = cljs.core.nth.call(null,vec__85968,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - (1)),j], null);
});
grid.hex.step_z = (function grid$hex$step_z(p__85971){
var vec__85975 = p__85971;
var i = cljs.core.nth.call(null,vec__85975,(0),null);
var j = cljs.core.nth.call(null,vec__85975,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),j], null);
});
grid.hex.walk_PLUS_x = (function grid$hex$walk_PLUS_x(hex){
return cljs.core.iterate.call(null,grid.hex.step_PLUS_x,hex);
});
grid.hex.walk_x = (function grid$hex$walk_x(hex){
return cljs.core.iterate.call(null,grid.hex.step_x,hex);
});
grid.hex.walk_PLUS_y = (function grid$hex$walk_PLUS_y(hex){
return cljs.core.iterate.call(null,grid.hex.step_PLUS_y,hex);
});
grid.hex.walk_y = (function grid$hex$walk_y(hex){
return cljs.core.iterate.call(null,grid.hex.step_y,hex);
});
grid.hex.walk_PLUS_z = (function grid$hex$walk_PLUS_z(hex){
return cljs.core.iterate.call(null,grid.hex.step_PLUS_z,hex);
});
grid.hex.walk_z = (function grid$hex$walk_z(hex){
return cljs.core.iterate.call(null,grid.hex.step_z,hex);
});

//# sourceMappingURL=hex.js.map?rel=1467868408532