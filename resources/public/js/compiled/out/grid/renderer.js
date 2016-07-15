// Compiled by ClojureScript 1.9.93 {}
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
grid.renderer.draw = (function grid$renderer$draw(p__85983){
var map__85998 = p__85983;
var map__85998__$1 = ((((!((map__85998 == null)))?((((map__85998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85998):map__85998);
var board = cljs.core.get.call(null,map__85998__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var selected = cljs.core.get.call(null,map__85998__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var hovered = cljs.core.get.call(null,map__85998__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
var world_radius = cljs.core.get.call(null,map__85998__$1,new cljs.core.Keyword(null,"world-radius","world-radius",-819958889));
var orientation = cljs.core.get.call(null,map__85998__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var w = quil.core.width.call(null);
var h = quil.core.height.call(null);
var aspect = (w / h);
var half_dim = (0.5 * world_radius);
var dw = ((((1) < aspect))?(aspect * half_dim):half_dim);
var dh = ((((1) > aspect))?(aspect * half_dim):half_dim);
var min_dim = (function (){var x__41759__auto__ = w;
var y__41760__auto__ = h;
return ((x__41759__auto__ < y__41760__auto__) ? x__41759__auto__ : y__41760__auto__);
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

if(cljs.core.truth_((function (){var and__41407__auto__ = selected;
if(cljs.core.truth_(and__41407__auto__)){
return hovered;
} else {
return and__41407__auto__;
}
})())){
quil.core.fill.call(null,(255),(0),(0));

var seq__86000_86012 = cljs.core.seq.call(null,grid.hex.line_until.call(null,selected,hovered));
var chunk__86001_86013 = null;
var count__86002_86014 = (0);
var i__86003_86015 = (0);
while(true){
if((i__86003_86015 < count__86002_86014)){
var h_86016__$1 = cljs.core._nth.call(null,chunk__86001_86013,i__86003_86015);
grid.quil_hex.draw_hex.call(null,h_86016__$1,orientation);

var G__86017 = seq__86000_86012;
var G__86018 = chunk__86001_86013;
var G__86019 = count__86002_86014;
var G__86020 = (i__86003_86015 + (1));
seq__86000_86012 = G__86017;
chunk__86001_86013 = G__86018;
count__86002_86014 = G__86019;
i__86003_86015 = G__86020;
continue;
} else {
var temp__6477__auto___86021 = cljs.core.seq.call(null,seq__86000_86012);
if(temp__6477__auto___86021){
var seq__86000_86022__$1 = temp__6477__auto___86021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86000_86022__$1)){
var c__42322__auto___86023 = cljs.core.chunk_first.call(null,seq__86000_86022__$1);
var G__86024 = cljs.core.chunk_rest.call(null,seq__86000_86022__$1);
var G__86025 = c__42322__auto___86023;
var G__86026 = cljs.core.count.call(null,c__42322__auto___86023);
var G__86027 = (0);
seq__86000_86012 = G__86024;
chunk__86001_86013 = G__86025;
count__86002_86014 = G__86026;
i__86003_86015 = G__86027;
continue;
} else {
var h_86028__$1 = cljs.core.first.call(null,seq__86000_86022__$1);
grid.quil_hex.draw_hex.call(null,h_86028__$1,orientation);

var G__86029 = cljs.core.next.call(null,seq__86000_86022__$1);
var G__86030 = null;
var G__86031 = (0);
var G__86032 = (0);
seq__86000_86012 = G__86029;
chunk__86001_86013 = G__86030;
count__86002_86014 = G__86031;
i__86003_86015 = G__86032;
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

var seq__86004 = cljs.core.seq.call(null,board);
var chunk__86007 = null;
var count__86008 = (0);
var i__86009 = (0);
while(true){
if((i__86009 < count__86008)){
var c = cljs.core._nth.call(null,chunk__86007,i__86009);
var sc = grid.fhex.cube__GT_hex.call(null,c,orientation);
if(((Math.abs(sc.call(null,(0))) <= dw)) && ((Math.abs(sc.call(null,(1))) <= dh))){
var tr__43989__auto___86033 = sc;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__43989__auto___86033);

cljs.core.apply.call(null,((function (seq__86004,chunk__86007,count__86008,i__86009,tr__43989__auto___86033,sc,c,w,h,aspect,half_dim,dw,dh,min_dim,map__85998,map__85998__$1,board,selected,hovered,world_radius,orientation){
return (function (p1__85980_SHARP_,p2__85981_SHARP_,p3__85982_SHARP_){
return grid.quil_hex.draw_coords.call(null,p1__85980_SHARP_,p2__85981_SHARP_,p3__85982_SHARP_,orientation);
});})(seq__86004,chunk__86007,count__86008,i__86009,tr__43989__auto___86033,sc,c,w,h,aspect,half_dim,dw,dh,min_dim,map__85998,map__85998__$1,board,selected,hovered,world_radius,orientation))
,grid.hex.cube.call(null,c));

grid.quil_hex.draw_hex_shape.call(null,orientation);
}finally {quil.core.pop_matrix.call(null);
}
var G__86034 = seq__86004;
var G__86035 = chunk__86007;
var G__86036 = count__86008;
var G__86037 = (i__86009 + (1));
seq__86004 = G__86034;
chunk__86007 = G__86035;
count__86008 = G__86036;
i__86009 = G__86037;
continue;
} else {
var G__86038 = seq__86004;
var G__86039 = chunk__86007;
var G__86040 = count__86008;
var G__86041 = (i__86009 + (1));
seq__86004 = G__86038;
chunk__86007 = G__86039;
count__86008 = G__86040;
i__86009 = G__86041;
continue;
}
} else {
var temp__6477__auto__ = cljs.core.seq.call(null,seq__86004);
if(temp__6477__auto__){
var seq__86004__$1 = temp__6477__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86004__$1)){
var c__42322__auto__ = cljs.core.chunk_first.call(null,seq__86004__$1);
var G__86042 = cljs.core.chunk_rest.call(null,seq__86004__$1);
var G__86043 = c__42322__auto__;
var G__86044 = cljs.core.count.call(null,c__42322__auto__);
var G__86045 = (0);
seq__86004 = G__86042;
chunk__86007 = G__86043;
count__86008 = G__86044;
i__86009 = G__86045;
continue;
} else {
var c = cljs.core.first.call(null,seq__86004__$1);
var sc = grid.fhex.cube__GT_hex.call(null,c,orientation);
if(((Math.abs(sc.call(null,(0))) <= dw)) && ((Math.abs(sc.call(null,(1))) <= dh))){
var tr__43989__auto___86046 = sc;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__43989__auto___86046);

cljs.core.apply.call(null,((function (seq__86004,chunk__86007,count__86008,i__86009,tr__43989__auto___86046,sc,c,seq__86004__$1,temp__6477__auto__,w,h,aspect,half_dim,dw,dh,min_dim,map__85998,map__85998__$1,board,selected,hovered,world_radius,orientation){
return (function (p1__85980_SHARP_,p2__85981_SHARP_,p3__85982_SHARP_){
return grid.quil_hex.draw_coords.call(null,p1__85980_SHARP_,p2__85981_SHARP_,p3__85982_SHARP_,orientation);
});})(seq__86004,chunk__86007,count__86008,i__86009,tr__43989__auto___86046,sc,c,seq__86004__$1,temp__6477__auto__,w,h,aspect,half_dim,dw,dh,min_dim,map__85998,map__85998__$1,board,selected,hovered,world_radius,orientation))
,grid.hex.cube.call(null,c));

grid.quil_hex.draw_hex_shape.call(null,orientation);
}finally {quil.core.pop_matrix.call(null);
}
var G__86047 = cljs.core.next.call(null,seq__86004__$1);
var G__86048 = null;
var G__86049 = (0);
var G__86050 = (0);
seq__86004 = G__86047;
chunk__86007 = G__86048;
count__86008 = G__86049;
i__86009 = G__86050;
continue;
} else {
var G__86051 = cljs.core.next.call(null,seq__86004__$1);
var G__86052 = null;
var G__86053 = (0);
var G__86054 = (0);
seq__86004 = G__86051;
chunk__86007 = G__86052;
count__86008 = G__86053;
i__86009 = G__86054;
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
var min_dim = (function (){var x__41759__auto__ = w;
var y__41760__auto__ = h;
return ((x__41759__auto__ < y__41760__auto__) ? x__41759__auto__ : y__41760__auto__);
})();
var i = ((px - (w * 0.5)) / (min_dim / dim));
var j = ((- (py - (h * 0.5))) / (min_dim / dim));
return grid.hex.cube_round.call(null,grid.fhex.hex__GT_cube.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),orientation));
});
grid.renderer.mouse_clicked = (function grid$renderer$mouse_clicked(p__86055,p__86056){
var map__86061 = p__86055;
var map__86061__$1 = ((((!((map__86061 == null)))?((((map__86061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86061):map__86061);
var state = map__86061__$1;
var board = cljs.core.get.call(null,map__86061__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var world_radius = cljs.core.get.call(null,map__86061__$1,new cljs.core.Keyword(null,"world-radius","world-radius",-819958889));
var orientation = cljs.core.get.call(null,map__86061__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var map__86062 = p__86056;
var map__86062__$1 = ((((!((map__86062 == null)))?((((map__86062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86062):map__86062);
var x = cljs.core.get.call(null,map__86062__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__86062__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__6475__auto__ = board.call(null,grid.renderer.screen__GT_axial.call(null,x,y,world_radius,orientation));
if(cljs.core.truth_(temp__6475__auto__)){
var hex = temp__6475__auto__;
return cljs.core.into.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),hex], null));
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"selected","selected",574897764));
}
});
grid.renderer.mouse_moved = (function grid$renderer$mouse_moved(p__86065,p__86066){
var map__86071 = p__86065;
var map__86071__$1 = ((((!((map__86071 == null)))?((((map__86071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86071):map__86071);
var state = map__86071__$1;
var board = cljs.core.get.call(null,map__86071__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var world_radius = cljs.core.get.call(null,map__86071__$1,new cljs.core.Keyword(null,"world-radius","world-radius",-819958889));
var orientation = cljs.core.get.call(null,map__86071__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var map__86072 = p__86066;
var map__86072__$1 = ((((!((map__86072 == null)))?((((map__86072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86072):map__86072);
var x = cljs.core.get.call(null,map__86072__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__86072__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var temp__6475__auto__ = board.call(null,grid.renderer.screen__GT_axial.call(null,x,y,world_radius,orientation));
if(cljs.core.truth_(temp__6475__auto__)){
var hex = temp__6475__auto__;
return cljs.core.into.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hovered","hovered",399068143),hex], null));
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"hovered","hovered",399068143));
}
});
grid.renderer.launch_sketch = (function grid$renderer$launch_sketch(p__86075){
var map__86078 = p__86075;
var map__86078__$1 = ((((!((map__86078 == null)))?((((map__86078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86078):map__86078);
var width = cljs.core.get.call(null,map__86078__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__86078__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var host = cljs.core.get.call(null,map__86078__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Hex Grid Visualizer",new cljs.core.Keyword(null,"setup","setup",1987730512),grid.renderer.setup,new cljs.core.Keyword(null,"update","update",1045576396),grid.renderer.do_update,new cljs.core.Keyword(null,"draw","draw",1358331674),grid.renderer.draw,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),grid.renderer.mouse_moved,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),grid.renderer.mouse_clicked,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"host","host",-1558485167),host);
});
grid.renderer.launch_app = (function grid$renderer$launch_app(host,width,height){
return grid.renderer.launch_sketch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"host","host",-1558485167),host], null));
});
goog.exportSymbol('grid.renderer.launch_app', grid.renderer.launch_app);

//# sourceMappingURL=renderer.js.map?rel=1467868408672