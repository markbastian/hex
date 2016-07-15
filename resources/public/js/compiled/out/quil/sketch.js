// Compiled by ClojureScript 1.9.93 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('quil.util');
goog.require('goog.events.EventType');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args74987 = [];
var len__42602__auto___74990 = arguments.length;
var i__42603__auto___74991 = (0);
while(true){
if((i__42603__auto___74991 < len__42602__auto___74990)){
args74987.push((arguments[i__42603__auto___74991]));

var G__74992 = (i__42603__auto___74991 + (1));
i__42603__auto___74991 = G__74992;
continue;
} else {
}
break;
}

var G__74989 = args74987.length;
switch (G__74989) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74987.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__75006 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__75007 = null;
var count__75008 = (0);
var i__75009 = (0);
while(true){
if((i__75009 < count__75008)){
var vec__75010 = cljs.core._nth.call(null,chunk__75007,i__75009);
var processing_name = cljs.core.nth.call(null,vec__75010,(0),null);
var quil_name = cljs.core.nth.call(null,vec__75010,(1),null);
var temp__6477__auto___75018 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__6477__auto___75018)){
var handler_75019 = temp__6477__auto___75018;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__75006,chunk__75007,count__75008,i__75009,handler_75019,temp__6477__auto___75018,vec__75010,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_75013 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_75019.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_75013;
}});})(seq__75006,chunk__75007,count__75008,i__75009,handler_75019,temp__6477__auto___75018,vec__75010,processing_name,quil_name))
);
} else {
}

var G__75020 = seq__75006;
var G__75021 = chunk__75007;
var G__75022 = count__75008;
var G__75023 = (i__75009 + (1));
seq__75006 = G__75020;
chunk__75007 = G__75021;
count__75008 = G__75022;
i__75009 = G__75023;
continue;
} else {
var temp__6477__auto__ = cljs.core.seq.call(null,seq__75006);
if(temp__6477__auto__){
var seq__75006__$1 = temp__6477__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75006__$1)){
var c__42322__auto__ = cljs.core.chunk_first.call(null,seq__75006__$1);
var G__75024 = cljs.core.chunk_rest.call(null,seq__75006__$1);
var G__75025 = c__42322__auto__;
var G__75026 = cljs.core.count.call(null,c__42322__auto__);
var G__75027 = (0);
seq__75006 = G__75024;
chunk__75007 = G__75025;
count__75008 = G__75026;
i__75009 = G__75027;
continue;
} else {
var vec__75014 = cljs.core.first.call(null,seq__75006__$1);
var processing_name = cljs.core.nth.call(null,vec__75014,(0),null);
var quil_name = cljs.core.nth.call(null,vec__75014,(1),null);
var temp__6477__auto___75028__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__6477__auto___75028__$1)){
var handler_75029 = temp__6477__auto___75028__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__75006,chunk__75007,count__75008,i__75009,handler_75029,temp__6477__auto___75028__$1,vec__75014,processing_name,quil_name,seq__75006__$1,temp__6477__auto__){
return (function (){
var _STAR_applet_STAR_75017 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_75029.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_75017;
}});})(seq__75006,chunk__75007,count__75008,i__75009,handler_75029,temp__6477__auto___75028__$1,vec__75014,processing_name,quil_name,seq__75006__$1,temp__6477__auto__))
);
} else {
}

var G__75030 = cljs.core.next.call(null,seq__75006__$1);
var G__75031 = null;
var G__75032 = (0);
var G__75033 = (0);
seq__75006 = G__75030;
chunk__75007 = G__75031;
count__75008 = G__75032;
i__75009 = G__75033;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__75034_SHARP_){
return p1__75034_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__41419__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__6477__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__6477__auto__)){
var proc_obj = temp__6477__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__42609__auto__ = [];
var len__42602__auto___75036 = arguments.length;
var i__42603__auto___75037 = (0);
while(true){
if((i__42603__auto___75037 < len__42602__auto___75036)){
args__42609__auto__.push((arguments[i__42603__auto___75037]));

var G__75038 = (i__42603__auto___75037 + (1));
i__42603__auto___75037 = G__75038;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__41419__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq75035){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75035));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__75047 = quil.sketch.empty_body_QMARK_.call(null);
var seq__75043_75048 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__75044_75049 = null;
var count__75045_75050 = (0);
var i__75046_75051 = (0);
while(true){
if((i__75046_75051 < count__75045_75050)){
var sk_75052 = cljs.core._nth.call(null,chunk__75044_75049,i__75046_75051);
if(cljs.core.truth_(add_elem_QMARK__75047)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_75052));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_75052).call(null);

var G__75053 = seq__75043_75048;
var G__75054 = chunk__75044_75049;
var G__75055 = count__75045_75050;
var G__75056 = (i__75046_75051 + (1));
seq__75043_75048 = G__75053;
chunk__75044_75049 = G__75054;
count__75045_75050 = G__75055;
i__75046_75051 = G__75056;
continue;
} else {
var temp__6477__auto___75057 = cljs.core.seq.call(null,seq__75043_75048);
if(temp__6477__auto___75057){
var seq__75043_75058__$1 = temp__6477__auto___75057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75043_75058__$1)){
var c__42322__auto___75059 = cljs.core.chunk_first.call(null,seq__75043_75058__$1);
var G__75060 = cljs.core.chunk_rest.call(null,seq__75043_75058__$1);
var G__75061 = c__42322__auto___75059;
var G__75062 = cljs.core.count.call(null,c__42322__auto___75059);
var G__75063 = (0);
seq__75043_75048 = G__75060;
chunk__75044_75049 = G__75061;
count__75045_75050 = G__75062;
i__75046_75051 = G__75063;
continue;
} else {
var sk_75064 = cljs.core.first.call(null,seq__75043_75058__$1);
if(cljs.core.truth_(add_elem_QMARK__75047)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_75064));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_75064).call(null);

var G__75065 = cljs.core.next.call(null,seq__75043_75058__$1);
var G__75066 = null;
var G__75067 = (0);
var G__75068 = (0);
seq__75043_75048 = G__75065;
chunk__75044_75049 = G__75066;
count__75045_75050 = G__75067;
i__75046_75051 = G__75068;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1467866135818