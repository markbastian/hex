// Compiled by ClojureScript 1.8.51 {}
goog.provide('grid.quil_hex');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('grid.fhex');
grid.quil_hex.draw_hex_shape = (function grid$quil_hex$draw_hex_shape(orientation){
var map__8337 = grid.fhex.orientations_map.call(null,orientation);
var map__8337__$1 = ((((!((map__8337 == null)))?((((map__8337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8337):map__8337);
var hex_corners = cljs.core.get.call(null,map__8337__$1,new cljs.core.Keyword(null,"hex-corners","hex-corners",-825985243));
quil.core.begin_shape.call(null);

var seq__8339_8343 = cljs.core.seq.call(null,cljs.core.take.call(null,(7),cljs.core.cycle.call(null,hex_corners)));
var chunk__8340_8344 = null;
var count__8341_8345 = (0);
var i__8342_8346 = (0);
while(true){
if((i__8342_8346 < count__8341_8345)){
var c_8347 = cljs.core._nth.call(null,chunk__8340_8344,i__8342_8346);
cljs.core.apply.call(null,quil.core.vertex,c_8347);

var G__8348 = seq__8339_8343;
var G__8349 = chunk__8340_8344;
var G__8350 = count__8341_8345;
var G__8351 = (i__8342_8346 + (1));
seq__8339_8343 = G__8348;
chunk__8340_8344 = G__8349;
count__8341_8345 = G__8350;
i__8342_8346 = G__8351;
continue;
} else {
var temp__4657__auto___8352 = cljs.core.seq.call(null,seq__8339_8343);
if(temp__4657__auto___8352){
var seq__8339_8353__$1 = temp__4657__auto___8352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339_8353__$1)){
var c__7021__auto___8354 = cljs.core.chunk_first.call(null,seq__8339_8353__$1);
var G__8355 = cljs.core.chunk_rest.call(null,seq__8339_8353__$1);
var G__8356 = c__7021__auto___8354;
var G__8357 = cljs.core.count.call(null,c__7021__auto___8354);
var G__8358 = (0);
seq__8339_8343 = G__8355;
chunk__8340_8344 = G__8356;
count__8341_8345 = G__8357;
i__8342_8346 = G__8358;
continue;
} else {
var c_8359 = cljs.core.first.call(null,seq__8339_8353__$1);
cljs.core.apply.call(null,quil.core.vertex,c_8359);

var G__8360 = cljs.core.next.call(null,seq__8339_8353__$1);
var G__8361 = null;
var G__8362 = (0);
var G__8363 = (0);
seq__8339_8343 = G__8360;
chunk__8340_8344 = G__8361;
count__8341_8345 = G__8362;
i__8342_8346 = G__8363;
continue;
}
} else {
}
}
break;
}

return quil.core.end_shape.call(null);
});
grid.quil_hex.draw_coord = (function grid$quil_hex$draw_coord(c,axis){
quil.core.push_matrix.call(null);

cljs.core.apply.call(null,quil.core.translate,cljs.core.map.call(null,(function (p1__8364_SHARP_){
return (0.7 * p1__8364_SHARP_);
}),axis));

quil.core.scale.call(null,0.025,-0.025);

quil.core.text.call(null,[cljs.core.str(c)].join(''),(0),(0));

return quil.core.pop_matrix.call(null);
});
grid.quil_hex.draw_coords = (function grid$quil_hex$draw_coords(i,j,k,orientation){
var map__8367 = grid.fhex.orientations_map.call(null,orientation);
var map__8367__$1 = ((((!((map__8367 == null)))?((((map__8367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8367):map__8367);
var hex_x = cljs.core.get.call(null,map__8367__$1,new cljs.core.Keyword(null,"hex-x","hex-x",1444391425));
var hex_y = cljs.core.get.call(null,map__8367__$1,new cljs.core.Keyword(null,"hex-y","hex-y",1712110241));
var hex_z = cljs.core.get.call(null,map__8367__$1,new cljs.core.Keyword(null,"hex-z","hex-z",1722492730));
quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

grid.quil_hex.draw_coord.call(null,i,hex_x);

grid.quil_hex.draw_coord.call(null,j,hex_y);

return grid.quil_hex.draw_coord.call(null,k,hex_z);
});
grid.quil_hex.draw_hex = (function grid$quil_hex$draw_hex(h,orientation){
var tr__7915__auto__ = grid.fhex.cube__GT_hex.call(null,h,orientation);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__7915__auto__);

return grid.quil_hex.draw_hex_shape.call(null,orientation);
}finally {quil.core.pop_matrix.call(null);
}});

//# sourceMappingURL=quil_hex.js.map?rel=1462424428320