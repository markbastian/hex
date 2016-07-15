// Compiled by ClojureScript 1.9.93 {}
goog.provide('grid.quil_hex');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('grid.fhex');
grid.quil_hex.draw_hex_shape = (function grid$quil_hex$draw_hex_shape(orientation){
var map__75743 = grid.fhex.orientations_map.call(null,orientation);
var map__75743__$1 = ((((!((map__75743 == null)))?((((map__75743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75743):map__75743);
var hex_corners = cljs.core.get.call(null,map__75743__$1,new cljs.core.Keyword(null,"hex-corners","hex-corners",-825985243));
quil.core.begin_shape.call(null);

var seq__75745_75749 = cljs.core.seq.call(null,cljs.core.take.call(null,(7),cljs.core.cycle.call(null,hex_corners)));
var chunk__75746_75750 = null;
var count__75747_75751 = (0);
var i__75748_75752 = (0);
while(true){
if((i__75748_75752 < count__75747_75751)){
var c_75753 = cljs.core._nth.call(null,chunk__75746_75750,i__75748_75752);
cljs.core.apply.call(null,quil.core.vertex,c_75753);

var G__75754 = seq__75745_75749;
var G__75755 = chunk__75746_75750;
var G__75756 = count__75747_75751;
var G__75757 = (i__75748_75752 + (1));
seq__75745_75749 = G__75754;
chunk__75746_75750 = G__75755;
count__75747_75751 = G__75756;
i__75748_75752 = G__75757;
continue;
} else {
var temp__6477__auto___75758 = cljs.core.seq.call(null,seq__75745_75749);
if(temp__6477__auto___75758){
var seq__75745_75759__$1 = temp__6477__auto___75758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75745_75759__$1)){
var c__42322__auto___75760 = cljs.core.chunk_first.call(null,seq__75745_75759__$1);
var G__75761 = cljs.core.chunk_rest.call(null,seq__75745_75759__$1);
var G__75762 = c__42322__auto___75760;
var G__75763 = cljs.core.count.call(null,c__42322__auto___75760);
var G__75764 = (0);
seq__75745_75749 = G__75761;
chunk__75746_75750 = G__75762;
count__75747_75751 = G__75763;
i__75748_75752 = G__75764;
continue;
} else {
var c_75765 = cljs.core.first.call(null,seq__75745_75759__$1);
cljs.core.apply.call(null,quil.core.vertex,c_75765);

var G__75766 = cljs.core.next.call(null,seq__75745_75759__$1);
var G__75767 = null;
var G__75768 = (0);
var G__75769 = (0);
seq__75745_75749 = G__75766;
chunk__75746_75750 = G__75767;
count__75747_75751 = G__75768;
i__75748_75752 = G__75769;
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

cljs.core.apply.call(null,quil.core.translate,cljs.core.map.call(null,(function (p1__75770_SHARP_){
return (0.7 * p1__75770_SHARP_);
}),axis));

quil.core.scale.call(null,0.025,-0.025);

quil.core.text.call(null,[cljs.core.str(c)].join(''),(0),(0));

return quil.core.pop_matrix.call(null);
});
grid.quil_hex.draw_coords = (function grid$quil_hex$draw_coords(i,j,k,orientation){
var map__75773 = grid.fhex.orientations_map.call(null,orientation);
var map__75773__$1 = ((((!((map__75773 == null)))?((((map__75773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75773):map__75773);
var hex_x = cljs.core.get.call(null,map__75773__$1,new cljs.core.Keyword(null,"hex-x","hex-x",1444391425));
var hex_y = cljs.core.get.call(null,map__75773__$1,new cljs.core.Keyword(null,"hex-y","hex-y",1712110241));
var hex_z = cljs.core.get.call(null,map__75773__$1,new cljs.core.Keyword(null,"hex-z","hex-z",1722492730));
quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368));

grid.quil_hex.draw_coord.call(null,i,hex_x);

grid.quil_hex.draw_coord.call(null,j,hex_y);

return grid.quil_hex.draw_coord.call(null,k,hex_z);
});
grid.quil_hex.draw_hex = (function grid$quil_hex$draw_hex(h,orientation){
var tr__43989__auto__ = grid.fhex.cube__GT_hex.call(null,h,orientation);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__43989__auto__);

return grid.quil_hex.draw_hex_shape.call(null,orientation);
}finally {quil.core.pop_matrix.call(null);
}});

//# sourceMappingURL=quil_hex.js.map?rel=1467866137074