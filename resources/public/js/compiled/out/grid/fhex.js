// Compiled by ClojureScript 1.9.93 {}
goog.provide('grid.fhex');
goog.require('cljs.core');
goog.require('vecmath.vec');
grid.fhex.ortho_axes = (function grid$fhex$ortho_axes(orientation){
var ortho_z = vecmath.vec.normalize.call(null,cljs.core.reduce.call(null,vecmath.vec.add,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vecmath.vec.x_axis,vecmath.vec.y_axis,vecmath.vec.z_axis], null)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pointy-topped","pointy-topped",1140939637),orientation)){
var ortho_x = vecmath.vec.normalize.call(null,vecmath.vec.cross.call(null,vecmath.vec.y_axis,ortho_z));
var ortho_y = vecmath.vec.normalize.call(null,vecmath.vec.cross.call(null,ortho_z,ortho_x));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ortho-x","ortho-x",-2085403496),ortho_x,new cljs.core.Keyword(null,"ortho-y","ortho-y",-1513050578),ortho_y,new cljs.core.Keyword(null,"ortho-z","ortho-z",-1079451956),ortho_z], null);
} else {
var ortho_y = vecmath.vec.normalize.call(null,vecmath.vec.cross.call(null,ortho_z,vecmath.vec.y_axis));
var ortho_x = vecmath.vec.normalize.call(null,vecmath.vec.cross.call(null,ortho_y,ortho_z));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ortho-x","ortho-x",-2085403496),ortho_x,new cljs.core.Keyword(null,"ortho-y","ortho-y",-1513050578),ortho_y,new cljs.core.Keyword(null,"ortho-z","ortho-z",-1079451956),ortho_z], null);
}
});
grid.fhex.hex_axes = (function grid$fhex$hex_axes(p__75701){
var map__75704 = p__75701;
var map__75704__$1 = ((((!((map__75704 == null)))?((((map__75704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75704):map__75704);
var ortho_x = cljs.core.get.call(null,map__75704__$1,new cljs.core.Keyword(null,"ortho-x","ortho-x",-2085403496));
var ortho_y = cljs.core.get.call(null,map__75704__$1,new cljs.core.Keyword(null,"ortho-y","ortho-y",-1513050578));
var xy = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ortho_x,ortho_y], null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hex-x","hex-x",1444391425),vecmath.vec.dcos.call(null,vecmath.vec.x_axis,xy),new cljs.core.Keyword(null,"hex-y","hex-y",1712110241),vecmath.vec.dcos.call(null,vecmath.vec.y_axis,xy),new cljs.core.Keyword(null,"hex-z","hex-z",1722492730),vecmath.vec.dcos.call(null,vecmath.vec.z_axis,xy)], null);
});
grid.fhex.hex_geometry = (function grid$fhex$hex_geometry(p__75706){
var map__75709 = p__75706;
var map__75709__$1 = ((((!((map__75709 == null)))?((((map__75709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75709):map__75709);
var hex_x = cljs.core.get.call(null,map__75709__$1,new cljs.core.Keyword(null,"hex-x","hex-x",1444391425));
var hex_y = cljs.core.get.call(null,map__75709__$1,new cljs.core.Keyword(null,"hex-y","hex-y",1712110241));
var hex_z = cljs.core.get.call(null,map__75709__$1,new cljs.core.Keyword(null,"hex-z","hex-z",1722492730));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hex-corners","hex-corners",-825985243),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hex_x,vecmath.vec.negate.call(null,hex_z),hex_y,vecmath.vec.negate.call(null,hex_x),hex_z,vecmath.vec.negate.call(null,hex_y)], null)], null);
});
grid.fhex.define_geometry = (function grid$fhex$define_geometry(orientation){
return (function (p1__75712_SHARP_){
return cljs.core.into.call(null,p1__75712_SHARP_,grid.fhex.hex_geometry.call(null,p1__75712_SHARP_));
}).call(null,(function (p1__75711_SHARP_){
return cljs.core.into.call(null,p1__75711_SHARP_,grid.fhex.hex_axes.call(null,p1__75711_SHARP_));
}).call(null,grid.fhex.ortho_axes.call(null,orientation)));
});
grid.fhex.orientations = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointy-topped","pointy-topped",1140939637),new cljs.core.Keyword(null,"flat-topped","flat-topped",2098946246)], null);
grid.fhex.orientations_map = cljs.core.zipmap.call(null,grid.fhex.orientations,cljs.core.map.call(null,grid.fhex.define_geometry,grid.fhex.orientations));
grid.fhex.ortho_scale = (function grid$fhex$ortho_scale(p__75713,p__75714){
var vec__75721 = p__75713;
var ox = cljs.core.nth.call(null,vec__75721,(0),null);
var oy = cljs.core.nth.call(null,vec__75721,(1),null);
var oz = cljs.core.nth.call(null,vec__75721,(2),null);
var vec__75724 = p__75714;
var vx = cljs.core.nth.call(null,vec__75724,(0),null);
var vy = cljs.core.nth.call(null,vec__75724,(1),null);
return (((ox - oz) * vx) + ((oy - oz) * vy));
});
grid.fhex.cube__GT_hex = (function grid$fhex$cube__GT_hex(v,orientation){
var map__75729 = grid.fhex.orientations_map.call(null,orientation);
var map__75729__$1 = ((((!((map__75729 == null)))?((((map__75729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75729):map__75729);
var ortho_x = cljs.core.get.call(null,map__75729__$1,new cljs.core.Keyword(null,"ortho-x","ortho-x",-2085403496));
var ortho_y = cljs.core.get.call(null,map__75729__$1,new cljs.core.Keyword(null,"ortho-y","ortho-y",-1513050578));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid.fhex.ortho_scale.call(null,ortho_x,v),grid.fhex.ortho_scale.call(null,ortho_y,v)], null);
});
/**
 * Convert from hex (2-d) coordinates to cube
 */
grid.fhex.hex__GT_cube = (function grid$fhex$hex__GT_cube(v,orientation){
var map__75733 = grid.fhex.orientations_map.call(null,orientation);
var map__75733__$1 = ((((!((map__75733 == null)))?((((map__75733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75733):map__75733);
var ortho_x = cljs.core.get.call(null,map__75733__$1,new cljs.core.Keyword(null,"ortho-x","ortho-x",-2085403496));
var ortho_y = cljs.core.get.call(null,map__75733__$1,new cljs.core.Keyword(null,"ortho-y","ortho-y",-1513050578));
var a = (ortho_x.call(null,(0)) - ortho_x.call(null,(2)));
var b = (ortho_x.call(null,(2)) - ortho_x.call(null,(1)));
var c = (ortho_y.call(null,(2)) - ortho_y.call(null,(0)));
var d = (ortho_y.call(null,(1)) - ortho_y.call(null,(2)));
var det = (1.0 / ((a * d) - (b * c)));
return vecmath.vec.scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vecmath.vec.dot.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,b], null),v),vecmath.vec.dot.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,a], null),v)], null),det);
});

//# sourceMappingURL=fhex.js.map?rel=1467866137045