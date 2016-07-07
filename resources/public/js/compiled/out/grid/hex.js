// Compiled by ClojureScript 1.8.51 {}
goog.provide('grid.hex');
goog.require('cljs.core');
goog.require('vecmath.vec');
grid.hex.axial = (function grid$hex$axial(p__8636){
var vec__8638 = p__8636;
var i = cljs.core.nth.call(null,vec__8638,(0),null);
var j = cljs.core.nth.call(null,vec__8638,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null);
});
grid.hex.cube = (function grid$hex$cube(p__8639){
var vec__8641 = p__8639;
var i = cljs.core.nth.call(null,vec__8641,(0),null);
var j = cljs.core.nth.call(null,vec__8641,(1),null);
var k = cljs.core.nth.call(null,vec__8641,(2),null);
var c = vec__8641;
if(cljs.core.truth_(k)){
return c;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,(- (i + j))], null);
}
});
grid.hex.cube_round = (function grid$hex$cube_round(h){
var r = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__8642_SHARP_){
return Math.round(p1__8642_SHARP_);
}),grid.hex.cube.call(null,h)));
var df = cljs.core.map.call(null,((function (r){
return (function (p1__8643_SHARP_,p2__8644_SHARP_){
return Math.abs((p1__8643_SHARP_ - p2__8644_SHARP_));
});})(r))
,r,grid.hex.cube.call(null,h));
var i = cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.second,cljs.core.map_indexed.call(null,cljs.core.vector,df)));
var fix = (- (cljs.core.reduce.call(null,cljs.core._PLUS_,r) - r.call(null,i)));
return grid.hex.axial.call(null,cljs.core.assoc.call(null,r,i,fix));
});
grid.hex.cube_dist = (function grid$hex$cube_dist(a,b){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__8645_SHARP_,p2__8646_SHARP_){
return Math.abs((p1__8645_SHARP_ - p2__8646_SHARP_));
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
var G__8647 = (i + (1));
var G__8648 = cljs.core.conj.call(null,coords,grid.hex.cube_round.call(null,vecmath.vec.lerp.call(null,f,t,(i / n))));
i = G__8647;
coords = G__8648;
continue;
}
break;
}
});
grid.hex.line_to = (function grid$hex$line_to(f,t){
return cljs.core.conj.call(null,grid.hex.line_until.call(null,f,t),t);
});
grid.hex.grid = (function grid$hex$grid(minx,maxx,miny,maxy){
var iter__6990__auto__ = (function grid$hex$grid_$_iter__8655(s__8656){
return (new cljs.core.LazySeq(null,(function (){
var s__8656__$1 = s__8656;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8656__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6986__auto__ = ((function (s__8656__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function grid$hex$grid_$_iter__8655_$_iter__8657(s__8658){
return (new cljs.core.LazySeq(null,((function (s__8656__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__8658__$1 = s__8658;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__8658__$1);
if(temp__4657__auto____$1){
var s__8658__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8658__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__8658__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__8660 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__8659 = (0);
while(true){
if((i__8659 < size__6989__auto__)){
var j = cljs.core._nth.call(null,c__6988__auto__,i__8659);
cljs.core.chunk_append.call(null,b__8660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__8661 = (i__8659 + (1));
i__8659 = G__8661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8660),grid$hex$grid_$_iter__8655_$_iter__8657.call(null,cljs.core.chunk_rest.call(null,s__8658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8660),null);
}
} else {
var j = cljs.core.first.call(null,s__8658__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),grid$hex$grid_$_iter__8655_$_iter__8657.call(null,cljs.core.rest.call(null,s__8658__$2)));
}
} else {
return null;
}
break;
}
});})(s__8656__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__8656__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__6987__auto__ = cljs.core.seq.call(null,iterys__6986__auto__.call(null,cljs.core.range.call(null,miny,(maxy + (1)))));
if(fs__6987__auto__){
return cljs.core.concat.call(null,fs__6987__auto__,grid$hex$grid_$_iter__8655.call(null,cljs.core.rest.call(null,s__8656__$1)));
} else {
var G__8662 = cljs.core.rest.call(null,s__8656__$1);
s__8656__$1 = G__8662;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.range.call(null,minx,(maxx + (1))));
});
grid.hex.neighbors = (function grid$hex$neighbors(p__8663){
var vec__8665 = p__8663;
var i = cljs.core.nth.call(null,vec__8665,(0),null);
var j = cljs.core.nth.call(null,vec__8665,(1),null);
var x = cljs.core.juxt.call(null,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.dec,cljs.core.identity).call(null,i);
var y = cljs.core.juxt.call(null,cljs.core.dec,cljs.core.identity,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec).call(null,j);
return cljs.core.map.call(null,cljs.core.vector,x,y);
});
grid.hex.radial_corners = (function grid$hex$radial_corners(v,r){
return cljs.core.map.call(null,(function (p1__8667_SHARP_){
return vecmath.vec.add.call(null,p1__8667_SHARP_,v);
}),cljs.core.map.call(null,(function (p1__8666_SHARP_){
return vecmath.vec.scale.call(null,p1__8666_SHARP_,r);
}),grid.hex.neighbors.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))));
});
grid.hex.ring = (function grid$hex$ring(center,radius){
if(cljs.core._EQ_.call(null,radius,(0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [center], null);
} else {
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8668_SHARP_){
return cljs.core.apply.call(null,grid.hex.line_until,p1__8668_SHARP_);
}),cljs.core.take.call(null,(6),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,grid.hex.radial_corners.call(null,center,radius))))));
}
});
grid.hex.circle = (function grid$hex$circle(center,radius){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,(function (){var iter__6990__auto__ = (function grid$hex$circle_$_iter__8673(s__8674){
return (new cljs.core.LazySeq(null,(function (){
var s__8674__$1 = s__8674;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8674__$1);
if(temp__4657__auto__){
var s__8674__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8674__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__8674__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__8676 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__8675 = (0);
while(true){
if((i__8675 < size__6989__auto__)){
var i = cljs.core._nth.call(null,c__6988__auto__,i__8675);
cljs.core.chunk_append.call(null,b__8676,grid.hex.ring.call(null,center,i));

var G__8677 = (i__8675 + (1));
i__8675 = G__8677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8676),grid$hex$circle_$_iter__8673.call(null,cljs.core.chunk_rest.call(null,s__8674__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8676),null);
}
} else {
var i = cljs.core.first.call(null,s__8674__$2);
return cljs.core.cons.call(null,grid.hex.ring.call(null,center,i),grid$hex$circle_$_iter__8673.call(null,cljs.core.rest.call(null,s__8674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.range.call(null,(radius + (1))));
})());
});
grid.hex.same_axis_QMARK_ = (function grid$hex$same_axis_QMARK_(a,b){
return (cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.map.call(null,cljs.core._,grid.hex.cube.call(null,a),grid.hex.cube.call(null,b))) === (0));
});
grid.hex.step_PLUS_x = (function grid$hex$step_PLUS_x(p__8678){
var vec__8680 = p__8678;
var i = cljs.core.nth.call(null,vec__8680,(0),null);
var j = cljs.core.nth.call(null,vec__8680,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),(j - (1))], null);
});
grid.hex.step_x = (function grid$hex$step_x(p__8681){
var vec__8683 = p__8681;
var i = cljs.core.nth.call(null,vec__8683,(0),null);
var j = cljs.core.nth.call(null,vec__8683,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - (1)),(j + (1))], null);
});
grid.hex.step_PLUS_y = (function grid$hex$step_PLUS_y(p__8684){
var vec__8686 = p__8684;
var i = cljs.core.nth.call(null,vec__8686,(0),null);
var j = cljs.core.nth.call(null,vec__8686,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null);
});
grid.hex.step_y = (function grid$hex$step_y(p__8687){
var vec__8689 = p__8687;
var i = cljs.core.nth.call(null,vec__8689,(0),null);
var j = cljs.core.nth.call(null,vec__8689,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j - (1))], null);
});
grid.hex.step_PLUS_z = (function grid$hex$step_PLUS_z(p__8690){
var vec__8692 = p__8690;
var i = cljs.core.nth.call(null,vec__8692,(0),null);
var j = cljs.core.nth.call(null,vec__8692,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - (1)),j], null);
});
grid.hex.step_z = (function grid$hex$step_z(p__8693){
var vec__8695 = p__8693;
var i = cljs.core.nth.call(null,vec__8695,(0),null);
var j = cljs.core.nth.call(null,vec__8695,(1),null);
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

//# sourceMappingURL=hex.js.map?rel=1462424428804