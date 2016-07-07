// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45282_45296 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45283_45297 = null;
var count__45284_45298 = (0);
var i__45285_45299 = (0);
while(true){
if((i__45285_45299 < count__45284_45298)){
var f_45300 = cljs.core._nth.call(null,chunk__45283_45297,i__45285_45299);
cljs.core.println.call(null,"  ",f_45300);

var G__45301 = seq__45282_45296;
var G__45302 = chunk__45283_45297;
var G__45303 = count__45284_45298;
var G__45304 = (i__45285_45299 + (1));
seq__45282_45296 = G__45301;
chunk__45283_45297 = G__45302;
count__45284_45298 = G__45303;
i__45285_45299 = G__45304;
continue;
} else {
var temp__4657__auto___45305 = cljs.core.seq.call(null,seq__45282_45296);
if(temp__4657__auto___45305){
var seq__45282_45306__$1 = temp__4657__auto___45305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45282_45306__$1)){
var c__38513__auto___45307 = cljs.core.chunk_first.call(null,seq__45282_45306__$1);
var G__45308 = cljs.core.chunk_rest.call(null,seq__45282_45306__$1);
var G__45309 = c__38513__auto___45307;
var G__45310 = cljs.core.count.call(null,c__38513__auto___45307);
var G__45311 = (0);
seq__45282_45296 = G__45308;
chunk__45283_45297 = G__45309;
count__45284_45298 = G__45310;
i__45285_45299 = G__45311;
continue;
} else {
var f_45312 = cljs.core.first.call(null,seq__45282_45306__$1);
cljs.core.println.call(null,"  ",f_45312);

var G__45313 = cljs.core.next.call(null,seq__45282_45306__$1);
var G__45314 = null;
var G__45315 = (0);
var G__45316 = (0);
seq__45282_45296 = G__45313;
chunk__45283_45297 = G__45314;
count__45284_45298 = G__45315;
i__45285_45299 = G__45316;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37702__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45317);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45317)))?cljs.core.second.call(null,arglists_45317):arglists_45317));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45286 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45287 = null;
var count__45288 = (0);
var i__45289 = (0);
while(true){
if((i__45289 < count__45288)){
var vec__45290 = cljs.core._nth.call(null,chunk__45287,i__45289);
var name = cljs.core.nth.call(null,vec__45290,(0),null);
var map__45291 = cljs.core.nth.call(null,vec__45290,(1),null);
var map__45291__$1 = ((((!((map__45291 == null)))?((((map__45291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45291):map__45291);
var doc = cljs.core.get.call(null,map__45291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45318 = seq__45286;
var G__45319 = chunk__45287;
var G__45320 = count__45288;
var G__45321 = (i__45289 + (1));
seq__45286 = G__45318;
chunk__45287 = G__45319;
count__45288 = G__45320;
i__45289 = G__45321;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45286);
if(temp__4657__auto__){
var seq__45286__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45286__$1)){
var c__38513__auto__ = cljs.core.chunk_first.call(null,seq__45286__$1);
var G__45322 = cljs.core.chunk_rest.call(null,seq__45286__$1);
var G__45323 = c__38513__auto__;
var G__45324 = cljs.core.count.call(null,c__38513__auto__);
var G__45325 = (0);
seq__45286 = G__45322;
chunk__45287 = G__45323;
count__45288 = G__45324;
i__45289 = G__45325;
continue;
} else {
var vec__45293 = cljs.core.first.call(null,seq__45286__$1);
var name = cljs.core.nth.call(null,vec__45293,(0),null);
var map__45294 = cljs.core.nth.call(null,vec__45293,(1),null);
var map__45294__$1 = ((((!((map__45294 == null)))?((((map__45294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45294):map__45294);
var doc = cljs.core.get.call(null,map__45294__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45294__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45326 = cljs.core.next.call(null,seq__45286__$1);
var G__45327 = null;
var G__45328 = (0);
var G__45329 = (0);
seq__45286 = G__45326;
chunk__45287 = G__45327;
count__45288 = G__45328;
i__45289 = G__45329;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1462424042018