// Compiled by ClojureScript 1.8.51 {}
goog.provide('grid.renderer');
goog.require('cljs.core');
goog.require('grid.quil_hex');
goog.require('grid.fhex');
goog.require('quil.core');
goog.require('grid.hex');
goog.require('quil.middleware');
grid.renderer.setup = (function grid$renderer$setup(){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(100));

quil.core.background.call(null,(200));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,grid.hex.circle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(4))),new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"flat-topped","flat-topped",2098946246),new cljs.core.Keyword(null,"world-radius","world-radius",-819958889),(10)], null);
});
grid.renderer.draw = (function grid$renderer$draw(p__21113){
var map__21128 = p__21113;
var map__21128__$1 = ((((!((map__21128 == null)))?((((map__21128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21128):map__21128);
var board = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var selected = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var hovered = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
var world_radius = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword(null,"world-radius","world-radius",-819958889));
var orientation = cljs.core.get.call(null,map__21128__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var w = quil.core.width.call(null);
var h = quil.core.height.call(null);
var aspect = (w / h);
var half_dim = (0.5 * world_radius);
var dw = ((((1) < aspect))?(aspect * half_dim):half_dim);
var dh = ((((1) > aspect))?(aspect * half_dim):half_dim);
var min_dim = (function (){var x__18770__auto__ = w;
var y__18771__auto__ = h;
return ((x__18770__auto__ < y__18771__auto__) ? x__18770__auto__ : y__18771__auto__);
})();
quil.core.background.call(null,(0),(0),(0));

quil.core.translate.call(null,(0.5 * w),(0.5 * h));

quil.core.scale.call(null,(1),(-1));

quil.core.scale.call(null,(min_dim / world_radius));

quil.core.stroke_weight.call(null,(world_radius / min_dim));

if(cljs.core.truth_(hovered)){
quil.core.fill.call(null,(255),(255),(0));

grid.quil_hex.draw_hex.call(null,hovered,orientation);
} else {
}

if(cljs.core.truth_(selected)){
quil.core.fill.call(null,(255),(0),(0));

grid.quil_hex.draw_hex.call(null,selected,orientation);
} else {
}

if(cljs.core.truth_((function (){var and__18420__auto__ = selected;
if(cljs.core.truth_(and__18420__auto__)){
return hovered;
} else {
return and__18420__auto__;
}
})())){
quil.core.fill.call(null,(255),(0),(0));

var seq__21130_21142 = cljs.core.seq.call(null,grid.hex.line_until.call(null,selected,hovered));
var chunk__21131_21143 = null;
var count__21132_21144 = (0);
var i__21133_21145 = (0);
while(true){
if((i__21133_21145 < count__21132_21144)){
var h_21146__$1 = cljs.core._nth.call(null,chunk__21131_21143,i__21133_21145);
grid.quil_hex.draw_hex.call(null,h_21146__$1,orientation);

var G__21147 = seq__21130_21142;
var G__21148 = chunk__21131_21143;
var G__21149 = count__21132_21144;
var G__21150 = (i__21133_21145 + (1));
seq__21130_21142 = G__21147;
chunk__21131_21143 = G__21148;
count__21132_21144 = G__21149;
i__21133_21145 = G__21150;
continue;
} else {
var temp__4657__auto___21151 = cljs.core.seq.call(null,seq__21130_21142);
if(temp__4657__auto___21151){
var seq__21130_21152__$1 = temp__4657__auto___21151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21130_21152__$1)){
var c__19243__auto___21153 = cljs.core.chunk_first.call(null,seq__21130_21152__$1);
var G__21154 = cljs.core.chunk_rest.call(null,seq__21130_21152__$1);
var G__21155 = c__19243__auto___21153;
var G__21156 = cljs.core.count.call(null,c__19243__auto___21153);
var G__21157 = (0);
seq__21130_21142 = G__21154;
chunk__21131_21143 = G__21155;
count__21132_21144 = G__21156;
i__21133_21145 = G__21157;
continue;
} else {
var h_21158__$1 = cljs.core.first.call(null,seq__21130_21152__$1);
grid.quil_hex.draw_hex.call(null,h_21158__$1,orientation);

var G__21159 = cljs.core.next.call(null,seq__21130_21152__$1);
var G__21160 = null;
var G__21161 = (0);
var G__21162 = (0);
seq__21130_21142 = G__21159;
chunk__21131_21143 = G__21160;
count__21132_21144 = G__21161;
i__21133_21145 = G__21162;
continue;
}
} else {
}
}
break;
}
} else {
}

quil.core.stroke_int.call(null,(255));

quil.core.fill.call(null,(255));

quil.core.no_fill.call(null);

var seq__21134 = cljs.core.seq.call(null,board);
var chunk__21137 = null;
var count__21138 = (0);
var i__21139 = (0);
while(true){
if((i__21139 < count__21138)){
var c = cljs.core._nth.call(null,chunk__21137,i__21139);
var sc = grid.fhex.cube__GT_hex.call(null,c,orientation);
if(((Math.abs(sc.call(null,(0))) <= dw)) && ((Math.abs(sc.call(null,(1))) <= dh))){
var tr__21034__auto___21163 = sc;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21034__auto___21163);

cljs.core.apply.call(null,((function (seq__21134,chunk__21137,count__21138,i__21139,tr__21034__auto___21163,sc,c,w,h,aspect,half_dim,dw,dh,min_dim,map__21128,map__21128__$1,board,selected,hovered,world_radius,orientation){
return (function (p1__21110_SHARP_,p2__21111_SHARP_,p3__21112_SHARP_){
return grid.quil_hex.draw_coords.call(null,p1__21110_SHARP_,p2__21111_SHARP_,p3__21112_SHARP_,orientation);
});})(seq__21134,chunk__21137,count__21138,i__21139,tr__21034__auto___21163,sc,c,w,h,aspect,half_dim,dw,dh,min_dim,map__21128,map__21128__$1,board,selected,hovered,world_radius,orientation))
,grid.hex.cube.call(null,c));

grid.quil_hex.draw_hex_shape.call(null,orientation);
}finally {quil.core.pop_matrix.call(null);
}
var G__21164 = seq__21134;
var G__21165 = chunk__21137;
var G__21166 = count__21138;
var G__21167 = (i__21139 + (1));
seq__21134 = G__21164;
chunk__21137 = G__21165;
count__21138 = G__21166;
i__21139 = G__21167;
continue;
} else {
var G__21168 = seq__21134;
var G__21169 = chunk__21137;
var G__21170 = count__21138;
var G__21171 = (i__21139 + (1));
seq__21134 = G__21168;
chunk__21137 = G__21169;
count__21138 = G__21170;
i__21139 = G__21171;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21134);
if(temp__4657__auto__){
var seq__21134__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21134__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__21134__$1);
var G__21172 = cljs.core.chunk_rest.call(null,seq__21134__$1);
var G__21173 = c__19243__auto__;
var G__21174 = cljs.core.count.call(null,c__19243__auto__);
var G__21175 = (0);
seq__21134 = G__21172;
chunk__21137 = G__21173;
count__21138 = G__21174;
i__21139 = G__21175;
continue;
} else {
var c = cljs.core.first.call(null,seq__21134__$1);
var sc = grid.fhex.cube__GT_hex.call(null,c,orientation);
if(((Math.abs(sc.call(null,(0))) <= dw)) && ((Math.abs(sc.call(null,(1))) <= dh))){
var tr__21034__auto___21176 = sc;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21034__auto___21176);

cljs.core.apply.call(null,((function (seq__21134,chunk__21137,count__21138,i__21139,tr__21034__auto___21176,sc,c,seq__21134__$1,temp__4657__auto__,w,h,aspect,half_dim,dw,dh,min_dim,map__21128,map__21128__$1,board,selected,hovered,world_radius,orientation){
return (function (p1__21110_SHARP_,p2__21111_SHARP_,p3__21112_SHARP_){
return grid.quil_hex.draw_coords.call(null,p1__21110_SHARP_,p2__21111_SHARP_,p3__21112_SHARP_,orientation);
});})(seq__21134,chunk__21137,count__21138,i__21139,tr__21034__auto___21176,sc,c,seq__21134__$1,temp__4657__auto__,w,h,aspect,half_dim,dw,dh,min_dim,map__21128,map__21128__$1,board,selected,hovered,world_radius,orientation))
,grid.hex.cube.call(null,c));

grid.quil_hex.draw_hex_shape.call(null,orientation);
}finally {quil.core.pop_matrix.call(null);
}
var G__21177 = cljs.core.next.call(null,seq__21134__$1);
var G__21178 = null;
var G__21179 = (0);
var G__21180 = (0);
seq__21134 = G__21177;
chunk__21137 = G__21178;
count__21138 = G__21179;
i__21139 = G__21180;
continue;
} else {
var G__21181 = cljs.core.next.call(null,seq__21134__$1);
var G__21182 = null;
var G__21183 = (0);
var G__21184 = (0);
seq__21134 = G__21181;
chunk__21137 = G__21182;
count__21138 = G__21183;
i__21139 = G__21184;
continue;
}
}
} else {
return null;
}
}
break;
}
});
grid.renderer.do_update = (function grid$renderer$do_update(state){
return state;
});
grid.renderer.screen__GT_axial = (function grid$renderer$screen__GT_axial(px,py,dim,orientation){
var w = quil.core.width.call(null);
var h = quil.core.height.call(null);
var min_dim = (function (){var x__18770__auto__ = w;
var y__18771__auto__ = h;
return ((x__18770__auto__ < y__18771__auto__) ? x__18770__auto__ : y__18771__auto__);
})();
var i = ((px - (w * 0.5)) / (min_dim / dim));
var j = ((- (py - (h * 0.5))) / (min_dim / dim));
return grid.hex.cube_round.call(null,grid.fhex.hex__GT_cube.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),orientation));
});
grid.renderer.mouse_clicked = (function grid$renderer$mouse_clicked(p__21185,p__21186){
var map__21191 = p__21185;
var map__21191__$1 = ((((!((map__21191 == null)))?((((map__21191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21191):map__21191);
var state = map__21191__$1;
var board = cljs.core.get.call(null,map__21191__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var world_radius = cljs.core.get.call(null,map__21191__$1,new cljs.core.Keyword(null,"world-radius","world-radius",-819958889));
var orientation = cljs.core.get.call(null,map__21191__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var map__21192 = p__21186;
var map__21192__$1 = ((((!((map__21192 == null)))?((((map__21192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21192):map__21192);
var x = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21192__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__4655__auto__ = board.call(null,grid.renderer.screen__GT_axial.call(null,x,y,world_radius,orientation));
if(cljs.core.truth_(temp__4655__auto__)){
var hex = temp__4655__auto__;
return cljs.core.into.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),hex], null));
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"selected","selected",574897764));
}
});
grid.renderer.mouse_moved = (function grid$renderer$mouse_moved(p__21195,p__21196){
var map__21201 = p__21195;
var map__21201__$1 = ((((!((map__21201 == null)))?((((map__21201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21201):map__21201);
var state = map__21201__$1;
var board = cljs.core.get.call(null,map__21201__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var world_radius = cljs.core.get.call(null,map__21201__$1,new cljs.core.Keyword(null,"world-radius","world-radius",-819958889));
var orientation = cljs.core.get.call(null,map__21201__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var map__21202 = p__21196;
var map__21202__$1 = ((((!((map__21202 == null)))?((((map__21202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21202):map__21202);
var x = cljs.core.get.call(null,map__21202__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21202__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__4655__auto__ = board.call(null,grid.renderer.screen__GT_axial.call(null,x,y,world_radius,orientation));
if(cljs.core.truth_(temp__4655__auto__)){
var hex = temp__4655__auto__;
return cljs.core.into.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hovered","hovered",399068143),hex], null));
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"hovered","hovered",399068143));
}
});
grid.renderer.launch_sketch = (function grid$renderer$launch_sketch(p__21205){
var map__21208 = p__21205;
var map__21208__$1 = ((((!((map__21208 == null)))?((((map__21208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21208):map__21208);
var width = cljs.core.get.call(null,map__21208__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21208__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var host = cljs.core.get.call(null,map__21208__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Hex Grid Visualizer",new cljs.core.Keyword(null,"setup","setup",1987730512),grid.renderer.setup,new cljs.core.Keyword(null,"update","update",1045576396),grid.renderer.do_update,new cljs.core.Keyword(null,"draw","draw",1358331674),grid.renderer.draw,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),grid.renderer.mouse_moved,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),grid.renderer.mouse_clicked,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"host","host",-1558485167),host);
});
grid.renderer.launch_app = (function grid$renderer$launch_app(host,width,height){
return grid.renderer.launch_sketch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"host","host",-1558485167),host], null));
});
goog.exportSymbol('grid.renderer.launch_app', grid.renderer.launch_app);

//# sourceMappingURL=renderer.js.map?rel=1462424838208