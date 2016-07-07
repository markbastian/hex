// Compiled by ClojureScript 1.8.51 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args39142 = [];
var len__38772__auto___39145 = arguments.length;
var i__38773__auto___39146 = (0);
while(true){
if((i__38773__auto___39146 < len__38772__auto___39145)){
args39142.push((arguments[i__38773__auto___39146]));

var G__39147 = (i__38773__auto___39146 + (1));
i__38773__auto___39146 = G__39147;
continue;
} else {
}
break;
}

var G__39144 = args39142.length;
switch (G__39144) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39142.length)].join('')));

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
var seq__39157 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__39158 = null;
var count__39159 = (0);
var i__39160 = (0);
while(true){
if((i__39160 < count__39159)){
var vec__39161 = cljs.core._nth.call(null,chunk__39158,i__39160);
var processing_name = cljs.core.nth.call(null,vec__39161,(0),null);
var quil_name = cljs.core.nth.call(null,vec__39161,(1),null);
var temp__4657__auto___39165 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___39165)){
var handler_39166 = temp__4657__auto___39165;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__39157,chunk__39158,count__39159,i__39160,handler_39166,temp__4657__auto___39165,vec__39161,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_39162 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_39166.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_39162;
}});})(seq__39157,chunk__39158,count__39159,i__39160,handler_39166,temp__4657__auto___39165,vec__39161,processing_name,quil_name))
);
} else {
}

var G__39167 = seq__39157;
var G__39168 = chunk__39158;
var G__39169 = count__39159;
var G__39170 = (i__39160 + (1));
seq__39157 = G__39167;
chunk__39158 = G__39168;
count__39159 = G__39169;
i__39160 = G__39170;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39157);
if(temp__4657__auto__){
var seq__39157__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39157__$1)){
var c__38513__auto__ = cljs.core.chunk_first.call(null,seq__39157__$1);
var G__39171 = cljs.core.chunk_rest.call(null,seq__39157__$1);
var G__39172 = c__38513__auto__;
var G__39173 = cljs.core.count.call(null,c__38513__auto__);
var G__39174 = (0);
seq__39157 = G__39171;
chunk__39158 = G__39172;
count__39159 = G__39173;
i__39160 = G__39174;
continue;
} else {
var vec__39163 = cljs.core.first.call(null,seq__39157__$1);
var processing_name = cljs.core.nth.call(null,vec__39163,(0),null);
var quil_name = cljs.core.nth.call(null,vec__39163,(1),null);
var temp__4657__auto___39175__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4657__auto___39175__$1)){
var handler_39176 = temp__4657__auto___39175__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__39157,chunk__39158,count__39159,i__39160,handler_39176,temp__4657__auto___39175__$1,vec__39163,processing_name,quil_name,seq__39157__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_39164 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_39176.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_39164;
}});})(seq__39157,chunk__39158,count__39159,i__39160,handler_39176,temp__4657__auto___39175__$1,vec__39163,processing_name,quil_name,seq__39157__$1,temp__4657__auto__))
);
} else {
}

var G__39177 = cljs.core.next.call(null,seq__39157__$1);
var G__39178 = null;
var G__39179 = (0);
var G__39180 = (0);
seq__39157 = G__39177;
chunk__39158 = G__39178;
count__39159 = G__39179;
i__39160 = G__39180;
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
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__39181_SHARP_){
return p1__39181_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__37702__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__39182_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__39182_SHARP_)){
return p1__39182_SHARP_.call(null);
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__39183_SHARP_){
if(cljs.core.truth_(p1__39183_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
return p1__39183_SHARP_.call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__38779__auto__ = [];
var len__38772__auto___39185 = arguments.length;
var i__38773__auto___39186 = (0);
while(true){
if((i__38773__auto___39186 < len__38772__auto___39185)){
args__38779__auto__.push((arguments[i__38773__auto___39186]));

var G__39187 = (i__38773__auto___39186 + (1));
i__38773__auto___39186 = G__39187;
continue;
} else {
}
break;
}

var argseq__38780__auto__ = ((((0) < args__38779__auto__.length))?(new cljs.core.IndexedSeq(args__38779__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__38780__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__37702__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
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

return (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq39184){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39184));
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
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_.call(null);
var seq__39192 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__39193 = null;
var count__39194 = (0);
var i__39195 = (0);
while(true){
if((i__39195 < count__39194)){
var sk = cljs.core._nth.call(null,chunk__39193,i__39195);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__39196 = seq__39192;
var G__39197 = chunk__39193;
var G__39198 = count__39194;
var G__39199 = (i__39195 + (1));
seq__39192 = G__39196;
chunk__39193 = G__39197;
count__39194 = G__39198;
i__39195 = G__39199;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39192);
if(temp__4657__auto__){
var seq__39192__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39192__$1)){
var c__38513__auto__ = cljs.core.chunk_first.call(null,seq__39192__$1);
var G__39200 = cljs.core.chunk_rest.call(null,seq__39192__$1);
var G__39201 = c__38513__auto__;
var G__39202 = cljs.core.count.call(null,c__38513__auto__);
var G__39203 = (0);
seq__39192 = G__39200;
chunk__39193 = G__39201;
count__39194 = G__39202;
i__39195 = G__39203;
continue;
} else {
var sk = cljs.core.first.call(null,seq__39192__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__39204 = cljs.core.next.call(null,seq__39192__$1);
var G__39205 = null;
var G__39206 = (0);
var G__39207 = (0);
seq__39192 = G__39204;
chunk__39193 = G__39205;
count__39194 = G__39206;
i__39195 = G__39207;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1462424037488