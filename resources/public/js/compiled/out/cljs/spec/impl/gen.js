// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80336 = arguments.length;
var i__42603__auto___80337 = (0);
while(true){
if((i__42603__auto___80337 < len__42602__auto___80336)){
args__42609__auto__.push((arguments[i__42603__auto___80337]));

var G__80338 = (i__42603__auto___80337 + (1));
i__42603__auto___80337 = G__80338;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq80335){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80335));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80340 = arguments.length;
var i__42603__auto___80341 = (0);
while(true){
if((i__42603__auto___80341 < len__42602__auto___80340)){
args__42609__auto__.push((arguments[i__42603__auto___80341]));

var G__80342 = (i__42603__auto___80341 + (1));
i__42603__auto___80341 = G__80342;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq80339){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80339));
});

var g_QMARK__80343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_80344 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__80343){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__80343))
,null));
var mkg_80345 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__80343,g_80344){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__80343,g_80344))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__80343,g_80344,mkg_80345){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__80343).call(null,x);
});})(g_QMARK__80343,g_80344,mkg_80345))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__80343,g_80344,mkg_80345){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_80345).call(null,gfn);
});})(g_QMARK__80343,g_80344,mkg_80345))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__80343,g_80344,mkg_80345){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_80344).call(null,generator);
});})(g_QMARK__80343,g_80344,mkg_80345))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50100__auto___80363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50100__auto___80363){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80364 = arguments.length;
var i__42603__auto___80365 = (0);
while(true){
if((i__42603__auto___80365 < len__42602__auto___80364)){
args__42609__auto__.push((arguments[i__42603__auto___80365]));

var G__80366 = (i__42603__auto___80365 + (1));
i__42603__auto___80365 = G__80366;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80363))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80363){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80363),args);
});})(g__50100__auto___80363))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50100__auto___80363){
return (function (seq80346){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80346));
});})(g__50100__auto___80363))
;


var g__50100__auto___80367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50100__auto___80367){
return (function cljs$spec$impl$gen$list(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80368 = arguments.length;
var i__42603__auto___80369 = (0);
while(true){
if((i__42603__auto___80369 < len__42602__auto___80368)){
args__42609__auto__.push((arguments[i__42603__auto___80369]));

var G__80370 = (i__42603__auto___80369 + (1));
i__42603__auto___80369 = G__80370;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80367))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80367){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80367),args);
});})(g__50100__auto___80367))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50100__auto___80367){
return (function (seq80347){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80347));
});})(g__50100__auto___80367))
;


var g__50100__auto___80371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50100__auto___80371){
return (function cljs$spec$impl$gen$map(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80372 = arguments.length;
var i__42603__auto___80373 = (0);
while(true){
if((i__42603__auto___80373 < len__42602__auto___80372)){
args__42609__auto__.push((arguments[i__42603__auto___80373]));

var G__80374 = (i__42603__auto___80373 + (1));
i__42603__auto___80373 = G__80374;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80371))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80371){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80371),args);
});})(g__50100__auto___80371))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50100__auto___80371){
return (function (seq80348){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80348));
});})(g__50100__auto___80371))
;


var g__50100__auto___80375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50100__auto___80375){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80376 = arguments.length;
var i__42603__auto___80377 = (0);
while(true){
if((i__42603__auto___80377 < len__42602__auto___80376)){
args__42609__auto__.push((arguments[i__42603__auto___80377]));

var G__80378 = (i__42603__auto___80377 + (1));
i__42603__auto___80377 = G__80378;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80375))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80375){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80375),args);
});})(g__50100__auto___80375))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50100__auto___80375){
return (function (seq80349){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80349));
});})(g__50100__auto___80375))
;


var g__50100__auto___80379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50100__auto___80379){
return (function cljs$spec$impl$gen$set(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80380 = arguments.length;
var i__42603__auto___80381 = (0);
while(true){
if((i__42603__auto___80381 < len__42602__auto___80380)){
args__42609__auto__.push((arguments[i__42603__auto___80381]));

var G__80382 = (i__42603__auto___80381 + (1));
i__42603__auto___80381 = G__80382;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80379))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80379){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80379),args);
});})(g__50100__auto___80379))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50100__auto___80379){
return (function (seq80350){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80350));
});})(g__50100__auto___80379))
;


var g__50100__auto___80383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50100__auto___80383){
return (function cljs$spec$impl$gen$vector(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80384 = arguments.length;
var i__42603__auto___80385 = (0);
while(true){
if((i__42603__auto___80385 < len__42602__auto___80384)){
args__42609__auto__.push((arguments[i__42603__auto___80385]));

var G__80386 = (i__42603__auto___80385 + (1));
i__42603__auto___80385 = G__80386;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80383))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80383){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80383),args);
});})(g__50100__auto___80383))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50100__auto___80383){
return (function (seq80351){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80351));
});})(g__50100__auto___80383))
;


var g__50100__auto___80387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50100__auto___80387){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80388 = arguments.length;
var i__42603__auto___80389 = (0);
while(true){
if((i__42603__auto___80389 < len__42602__auto___80388)){
args__42609__auto__.push((arguments[i__42603__auto___80389]));

var G__80390 = (i__42603__auto___80389 + (1));
i__42603__auto___80389 = G__80390;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80387))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80387){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80387),args);
});})(g__50100__auto___80387))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50100__auto___80387){
return (function (seq80352){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80352));
});})(g__50100__auto___80387))
;


var g__50100__auto___80391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50100__auto___80391){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80392 = arguments.length;
var i__42603__auto___80393 = (0);
while(true){
if((i__42603__auto___80393 < len__42602__auto___80392)){
args__42609__auto__.push((arguments[i__42603__auto___80393]));

var G__80394 = (i__42603__auto___80393 + (1));
i__42603__auto___80393 = G__80394;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80391))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80391){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80391),args);
});})(g__50100__auto___80391))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50100__auto___80391){
return (function (seq80353){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80353));
});})(g__50100__auto___80391))
;


var g__50100__auto___80395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50100__auto___80395){
return (function cljs$spec$impl$gen$elements(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80396 = arguments.length;
var i__42603__auto___80397 = (0);
while(true){
if((i__42603__auto___80397 < len__42602__auto___80396)){
args__42609__auto__.push((arguments[i__42603__auto___80397]));

var G__80398 = (i__42603__auto___80397 + (1));
i__42603__auto___80397 = G__80398;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80395))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80395){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80395),args);
});})(g__50100__auto___80395))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50100__auto___80395){
return (function (seq80354){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80354));
});})(g__50100__auto___80395))
;


var g__50100__auto___80399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50100__auto___80399){
return (function cljs$spec$impl$gen$bind(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80400 = arguments.length;
var i__42603__auto___80401 = (0);
while(true){
if((i__42603__auto___80401 < len__42602__auto___80400)){
args__42609__auto__.push((arguments[i__42603__auto___80401]));

var G__80402 = (i__42603__auto___80401 + (1));
i__42603__auto___80401 = G__80402;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80399))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80399){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80399),args);
});})(g__50100__auto___80399))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50100__auto___80399){
return (function (seq80355){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80355));
});})(g__50100__auto___80399))
;


var g__50100__auto___80403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50100__auto___80403){
return (function cljs$spec$impl$gen$choose(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80404 = arguments.length;
var i__42603__auto___80405 = (0);
while(true){
if((i__42603__auto___80405 < len__42602__auto___80404)){
args__42609__auto__.push((arguments[i__42603__auto___80405]));

var G__80406 = (i__42603__auto___80405 + (1));
i__42603__auto___80405 = G__80406;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80403))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80403){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80403),args);
});})(g__50100__auto___80403))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50100__auto___80403){
return (function (seq80356){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80356));
});})(g__50100__auto___80403))
;


var g__50100__auto___80407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50100__auto___80407){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80408 = arguments.length;
var i__42603__auto___80409 = (0);
while(true){
if((i__42603__auto___80409 < len__42602__auto___80408)){
args__42609__auto__.push((arguments[i__42603__auto___80409]));

var G__80410 = (i__42603__auto___80409 + (1));
i__42603__auto___80409 = G__80410;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80407))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80407){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80407),args);
});})(g__50100__auto___80407))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50100__auto___80407){
return (function (seq80357){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80357));
});})(g__50100__auto___80407))
;


var g__50100__auto___80411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50100__auto___80411){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80412 = arguments.length;
var i__42603__auto___80413 = (0);
while(true){
if((i__42603__auto___80413 < len__42602__auto___80412)){
args__42609__auto__.push((arguments[i__42603__auto___80413]));

var G__80414 = (i__42603__auto___80413 + (1));
i__42603__auto___80413 = G__80414;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80411))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80411){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80411),args);
});})(g__50100__auto___80411))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50100__auto___80411){
return (function (seq80358){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80358));
});})(g__50100__auto___80411))
;


var g__50100__auto___80415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50100__auto___80415){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80416 = arguments.length;
var i__42603__auto___80417 = (0);
while(true){
if((i__42603__auto___80417 < len__42602__auto___80416)){
args__42609__auto__.push((arguments[i__42603__auto___80417]));

var G__80418 = (i__42603__auto___80417 + (1));
i__42603__auto___80417 = G__80418;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80415))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80415){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80415),args);
});})(g__50100__auto___80415))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50100__auto___80415){
return (function (seq80359){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80359));
});})(g__50100__auto___80415))
;


var g__50100__auto___80419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50100__auto___80419){
return (function cljs$spec$impl$gen$sample(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80420 = arguments.length;
var i__42603__auto___80421 = (0);
while(true){
if((i__42603__auto___80421 < len__42602__auto___80420)){
args__42609__auto__.push((arguments[i__42603__auto___80421]));

var G__80422 = (i__42603__auto___80421 + (1));
i__42603__auto___80421 = G__80422;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80419))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80419){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80419),args);
});})(g__50100__auto___80419))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50100__auto___80419){
return (function (seq80360){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80360));
});})(g__50100__auto___80419))
;


var g__50100__auto___80423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50100__auto___80423){
return (function cljs$spec$impl$gen$return(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80424 = arguments.length;
var i__42603__auto___80425 = (0);
while(true){
if((i__42603__auto___80425 < len__42602__auto___80424)){
args__42609__auto__.push((arguments[i__42603__auto___80425]));

var G__80426 = (i__42603__auto___80425 + (1));
i__42603__auto___80425 = G__80426;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80423))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80423){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80423),args);
});})(g__50100__auto___80423))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50100__auto___80423){
return (function (seq80361){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80361));
});})(g__50100__auto___80423))
;


var g__50100__auto___80427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50100__auto___80427){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80428 = arguments.length;
var i__42603__auto___80429 = (0);
while(true){
if((i__42603__auto___80429 < len__42602__auto___80428)){
args__42609__auto__.push((arguments[i__42603__auto___80429]));

var G__80430 = (i__42603__auto___80429 + (1));
i__42603__auto___80429 = G__80430;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50100__auto___80427))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50100__auto___80427){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50100__auto___80427),args);
});})(g__50100__auto___80427))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50100__auto___80427){
return (function (seq80362){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80362));
});})(g__50100__auto___80427))
;

var g__50113__auto___80452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__50113__auto___80452){
return (function cljs$spec$impl$gen$any(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80453 = arguments.length;
var i__42603__auto___80454 = (0);
while(true){
if((i__42603__auto___80454 < len__42602__auto___80453)){
args__42609__auto__.push((arguments[i__42603__auto___80454]));

var G__80455 = (i__42603__auto___80454 + (1));
i__42603__auto___80454 = G__80455;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80452))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80452){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80452);
});})(g__50113__auto___80452))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__50113__auto___80452){
return (function (seq80431){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80431));
});})(g__50113__auto___80452))
;


var g__50113__auto___80456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__50113__auto___80456){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80457 = arguments.length;
var i__42603__auto___80458 = (0);
while(true){
if((i__42603__auto___80458 < len__42602__auto___80457)){
args__42609__auto__.push((arguments[i__42603__auto___80458]));

var G__80459 = (i__42603__auto___80458 + (1));
i__42603__auto___80458 = G__80459;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80456))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80456){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80456);
});})(g__50113__auto___80456))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__50113__auto___80456){
return (function (seq80432){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80432));
});})(g__50113__auto___80456))
;


var g__50113__auto___80460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__50113__auto___80460){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80461 = arguments.length;
var i__42603__auto___80462 = (0);
while(true){
if((i__42603__auto___80462 < len__42602__auto___80461)){
args__42609__auto__.push((arguments[i__42603__auto___80462]));

var G__80463 = (i__42603__auto___80462 + (1));
i__42603__auto___80462 = G__80463;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80460))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80460){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80460);
});})(g__50113__auto___80460))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__50113__auto___80460){
return (function (seq80433){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80433));
});})(g__50113__auto___80460))
;


var g__50113__auto___80464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__50113__auto___80464){
return (function cljs$spec$impl$gen$char(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80465 = arguments.length;
var i__42603__auto___80466 = (0);
while(true){
if((i__42603__auto___80466 < len__42602__auto___80465)){
args__42609__auto__.push((arguments[i__42603__auto___80466]));

var G__80467 = (i__42603__auto___80466 + (1));
i__42603__auto___80466 = G__80467;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80464))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80464){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80464);
});})(g__50113__auto___80464))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__50113__auto___80464){
return (function (seq80434){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80434));
});})(g__50113__auto___80464))
;


var g__50113__auto___80468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__50113__auto___80468){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80469 = arguments.length;
var i__42603__auto___80470 = (0);
while(true){
if((i__42603__auto___80470 < len__42602__auto___80469)){
args__42609__auto__.push((arguments[i__42603__auto___80470]));

var G__80471 = (i__42603__auto___80470 + (1));
i__42603__auto___80470 = G__80471;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80468))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80468){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80468);
});})(g__50113__auto___80468))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__50113__auto___80468){
return (function (seq80435){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80435));
});})(g__50113__auto___80468))
;


var g__50113__auto___80472 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__50113__auto___80472){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80473 = arguments.length;
var i__42603__auto___80474 = (0);
while(true){
if((i__42603__auto___80474 < len__42602__auto___80473)){
args__42609__auto__.push((arguments[i__42603__auto___80474]));

var G__80475 = (i__42603__auto___80474 + (1));
i__42603__auto___80474 = G__80475;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80472))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80472){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80472);
});})(g__50113__auto___80472))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__50113__auto___80472){
return (function (seq80436){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80436));
});})(g__50113__auto___80472))
;


var g__50113__auto___80476 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__50113__auto___80476){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80477 = arguments.length;
var i__42603__auto___80478 = (0);
while(true){
if((i__42603__auto___80478 < len__42602__auto___80477)){
args__42609__auto__.push((arguments[i__42603__auto___80478]));

var G__80479 = (i__42603__auto___80478 + (1));
i__42603__auto___80478 = G__80479;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80476))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80476){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80476);
});})(g__50113__auto___80476))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__50113__auto___80476){
return (function (seq80437){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80437));
});})(g__50113__auto___80476))
;


var g__50113__auto___80480 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__50113__auto___80480){
return (function cljs$spec$impl$gen$double(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80481 = arguments.length;
var i__42603__auto___80482 = (0);
while(true){
if((i__42603__auto___80482 < len__42602__auto___80481)){
args__42609__auto__.push((arguments[i__42603__auto___80482]));

var G__80483 = (i__42603__auto___80482 + (1));
i__42603__auto___80482 = G__80483;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80480))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80480){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80480);
});})(g__50113__auto___80480))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__50113__auto___80480){
return (function (seq80438){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80438));
});})(g__50113__auto___80480))
;


var g__50113__auto___80484 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__50113__auto___80484){
return (function cljs$spec$impl$gen$int(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80485 = arguments.length;
var i__42603__auto___80486 = (0);
while(true){
if((i__42603__auto___80486 < len__42602__auto___80485)){
args__42609__auto__.push((arguments[i__42603__auto___80486]));

var G__80487 = (i__42603__auto___80486 + (1));
i__42603__auto___80486 = G__80487;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80484))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80484){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80484);
});})(g__50113__auto___80484))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__50113__auto___80484){
return (function (seq80439){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80439));
});})(g__50113__auto___80484))
;


var g__50113__auto___80488 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__50113__auto___80488){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80489 = arguments.length;
var i__42603__auto___80490 = (0);
while(true){
if((i__42603__auto___80490 < len__42602__auto___80489)){
args__42609__auto__.push((arguments[i__42603__auto___80490]));

var G__80491 = (i__42603__auto___80490 + (1));
i__42603__auto___80490 = G__80491;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80488))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80488){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80488);
});})(g__50113__auto___80488))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__50113__auto___80488){
return (function (seq80440){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80440));
});})(g__50113__auto___80488))
;


var g__50113__auto___80492 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__50113__auto___80492){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80493 = arguments.length;
var i__42603__auto___80494 = (0);
while(true){
if((i__42603__auto___80494 < len__42602__auto___80493)){
args__42609__auto__.push((arguments[i__42603__auto___80494]));

var G__80495 = (i__42603__auto___80494 + (1));
i__42603__auto___80494 = G__80495;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80492))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80492){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80492);
});})(g__50113__auto___80492))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__50113__auto___80492){
return (function (seq80441){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80441));
});})(g__50113__auto___80492))
;


var g__50113__auto___80496 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__50113__auto___80496){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80497 = arguments.length;
var i__42603__auto___80498 = (0);
while(true){
if((i__42603__auto___80498 < len__42602__auto___80497)){
args__42609__auto__.push((arguments[i__42603__auto___80498]));

var G__80499 = (i__42603__auto___80498 + (1));
i__42603__auto___80498 = G__80499;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80496))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80496){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80496);
});})(g__50113__auto___80496))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__50113__auto___80496){
return (function (seq80442){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80442));
});})(g__50113__auto___80496))
;


var g__50113__auto___80500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__50113__auto___80500){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80501 = arguments.length;
var i__42603__auto___80502 = (0);
while(true){
if((i__42603__auto___80502 < len__42602__auto___80501)){
args__42609__auto__.push((arguments[i__42603__auto___80502]));

var G__80503 = (i__42603__auto___80502 + (1));
i__42603__auto___80502 = G__80503;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80500))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80500){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80500);
});})(g__50113__auto___80500))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__50113__auto___80500){
return (function (seq80443){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80443));
});})(g__50113__auto___80500))
;


var g__50113__auto___80504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__50113__auto___80504){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80505 = arguments.length;
var i__42603__auto___80506 = (0);
while(true){
if((i__42603__auto___80506 < len__42602__auto___80505)){
args__42609__auto__.push((arguments[i__42603__auto___80506]));

var G__80507 = (i__42603__auto___80506 + (1));
i__42603__auto___80506 = G__80507;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80504))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80504){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80504);
});})(g__50113__auto___80504))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__50113__auto___80504){
return (function (seq80444){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80444));
});})(g__50113__auto___80504))
;


var g__50113__auto___80508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__50113__auto___80508){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80509 = arguments.length;
var i__42603__auto___80510 = (0);
while(true){
if((i__42603__auto___80510 < len__42602__auto___80509)){
args__42609__auto__.push((arguments[i__42603__auto___80510]));

var G__80511 = (i__42603__auto___80510 + (1));
i__42603__auto___80510 = G__80511;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80508))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80508){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80508);
});})(g__50113__auto___80508))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__50113__auto___80508){
return (function (seq80445){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80445));
});})(g__50113__auto___80508))
;


var g__50113__auto___80512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__50113__auto___80512){
return (function cljs$spec$impl$gen$string(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80513 = arguments.length;
var i__42603__auto___80514 = (0);
while(true){
if((i__42603__auto___80514 < len__42602__auto___80513)){
args__42609__auto__.push((arguments[i__42603__auto___80514]));

var G__80515 = (i__42603__auto___80514 + (1));
i__42603__auto___80514 = G__80515;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80512))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80512){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80512);
});})(g__50113__auto___80512))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__50113__auto___80512){
return (function (seq80446){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80446));
});})(g__50113__auto___80512))
;


var g__50113__auto___80516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__50113__auto___80516){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80517 = arguments.length;
var i__42603__auto___80518 = (0);
while(true){
if((i__42603__auto___80518 < len__42602__auto___80517)){
args__42609__auto__.push((arguments[i__42603__auto___80518]));

var G__80519 = (i__42603__auto___80518 + (1));
i__42603__auto___80518 = G__80519;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80516))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80516){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80516);
});})(g__50113__auto___80516))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__50113__auto___80516){
return (function (seq80447){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80447));
});})(g__50113__auto___80516))
;


var g__50113__auto___80520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__50113__auto___80520){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80521 = arguments.length;
var i__42603__auto___80522 = (0);
while(true){
if((i__42603__auto___80522 < len__42602__auto___80521)){
args__42609__auto__.push((arguments[i__42603__auto___80522]));

var G__80523 = (i__42603__auto___80522 + (1));
i__42603__auto___80522 = G__80523;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80520))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80520){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80520);
});})(g__50113__auto___80520))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__50113__auto___80520){
return (function (seq80448){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80448));
});})(g__50113__auto___80520))
;


var g__50113__auto___80524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__50113__auto___80524){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80525 = arguments.length;
var i__42603__auto___80526 = (0);
while(true){
if((i__42603__auto___80526 < len__42602__auto___80525)){
args__42609__auto__.push((arguments[i__42603__auto___80526]));

var G__80527 = (i__42603__auto___80526 + (1));
i__42603__auto___80526 = G__80527;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80524))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80524){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80524);
});})(g__50113__auto___80524))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__50113__auto___80524){
return (function (seq80449){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80449));
});})(g__50113__auto___80524))
;


var g__50113__auto___80528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__50113__auto___80528){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80529 = arguments.length;
var i__42603__auto___80530 = (0);
while(true){
if((i__42603__auto___80530 < len__42602__auto___80529)){
args__42609__auto__.push((arguments[i__42603__auto___80530]));

var G__80531 = (i__42603__auto___80530 + (1));
i__42603__auto___80530 = G__80531;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80528))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80528){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80528);
});})(g__50113__auto___80528))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__50113__auto___80528){
return (function (seq80450){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80450));
});})(g__50113__auto___80528))
;


var g__50113__auto___80532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__50113__auto___80532){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80533 = arguments.length;
var i__42603__auto___80534 = (0);
while(true){
if((i__42603__auto___80534 < len__42602__auto___80533)){
args__42609__auto__.push((arguments[i__42603__auto___80534]));

var G__80535 = (i__42603__auto___80534 + (1));
i__42603__auto___80534 = G__80535;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});})(g__50113__auto___80532))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50113__auto___80532){
return (function (args){
return cljs.core.deref.call(null,g__50113__auto___80532);
});})(g__50113__auto___80532))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__50113__auto___80532){
return (function (seq80451){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80451));
});})(g__50113__auto___80532))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__42609__auto__ = [];
var len__42602__auto___80538 = arguments.length;
var i__42603__auto___80539 = (0);
while(true){
if((i__42603__auto___80539 < len__42602__auto___80538)){
args__42609__auto__.push((arguments[i__42603__auto___80539]));

var G__80540 = (i__42603__auto___80539 + (1));
i__42603__auto___80539 = G__80540;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__80536_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__80536_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq80537){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq80537));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__80541_SHARP_){
return (new Date(p1__80541_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1467866141543