// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args76355 = [];
var len__42602__auto___76361 = arguments.length;
var i__42603__auto___76362 = (0);
while(true){
if((i__42603__auto___76362 < len__42602__auto___76361)){
args76355.push((arguments[i__42603__auto___76362]));

var G__76363 = (i__42603__auto___76362 + (1));
i__42603__auto___76362 = G__76363;
continue;
} else {
}
break;
}

var G__76357 = args76355.length;
switch (G__76357) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76355.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async76358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76358 = (function (f,blockable,meta76359){
this.f = f;
this.blockable = blockable;
this.meta76359 = meta76359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async76358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76360,meta76359__$1){
var self__ = this;
var _76360__$1 = this;
return (new cljs.core.async.t_cljs$core$async76358(self__.f,self__.blockable,meta76359__$1));
});

cljs.core.async.t_cljs$core$async76358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76360){
var self__ = this;
var _76360__$1 = this;
return self__.meta76359;
});

cljs.core.async.t_cljs$core$async76358.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async76358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async76358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async76358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async76358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta76359","meta76359",569449594,null)], null);
});

cljs.core.async.t_cljs$core$async76358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76358";

cljs.core.async.t_cljs$core$async76358.cljs$lang$ctorPrWriter = (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async76358");
});

cljs.core.async.__GT_t_cljs$core$async76358 = (function cljs$core$async$__GT_t_cljs$core$async76358(f__$1,blockable__$1,meta76359){
return (new cljs.core.async.t_cljs$core$async76358(f__$1,blockable__$1,meta76359));
});

}

return (new cljs.core.async.t_cljs$core$async76358(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args76367 = [];
var len__42602__auto___76370 = arguments.length;
var i__42603__auto___76371 = (0);
while(true){
if((i__42603__auto___76371 < len__42602__auto___76370)){
args76367.push((arguments[i__42603__auto___76371]));

var G__76372 = (i__42603__auto___76371 + (1));
i__42603__auto___76371 = G__76372;
continue;
} else {
}
break;
}

var G__76369 = args76367.length;
switch (G__76369) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76367.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args76374 = [];
var len__42602__auto___76377 = arguments.length;
var i__42603__auto___76378 = (0);
while(true){
if((i__42603__auto___76378 < len__42602__auto___76377)){
args76374.push((arguments[i__42603__auto___76378]));

var G__76379 = (i__42603__auto___76378 + (1));
i__42603__auto___76378 = G__76379;
continue;
} else {
}
break;
}

var G__76376 = args76374.length;
switch (G__76376) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76374.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args76381 = [];
var len__42602__auto___76384 = arguments.length;
var i__42603__auto___76385 = (0);
while(true){
if((i__42603__auto___76385 < len__42602__auto___76384)){
args76381.push((arguments[i__42603__auto___76385]));

var G__76386 = (i__42603__auto___76385 + (1));
i__42603__auto___76385 = G__76386;
continue;
} else {
}
break;
}

var G__76383 = args76381.length;
switch (G__76383) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76381.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_76388 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_76388);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_76388,ret){
return (function (){
return fn1.call(null,val_76388);
});})(val_76388,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args76389 = [];
var len__42602__auto___76392 = arguments.length;
var i__42603__auto___76393 = (0);
while(true){
if((i__42603__auto___76393 < len__42602__auto___76392)){
args76389.push((arguments[i__42603__auto___76393]));

var G__76394 = (i__42603__auto___76393 + (1));
i__42603__auto___76393 = G__76394;
continue;
} else {
}
break;
}

var G__76391 = args76389.length;
switch (G__76391) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76389.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6475__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6475__auto__)){
var ret = temp__6475__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6475__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6475__auto__)){
var retb = temp__6475__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6475__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6475__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__42432__auto___76396 = n;
var x_76397 = (0);
while(true){
if((x_76397 < n__42432__auto___76396)){
(a[x_76397] = (0));

var G__76398 = (x_76397 + (1));
x_76397 = G__76398;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__76399 = (i + (1));
i = G__76399;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async76403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76403 = (function (alt_flag,flag,meta76404){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta76404 = meta76404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async76403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_76405,meta76404__$1){
var self__ = this;
var _76405__$1 = this;
return (new cljs.core.async.t_cljs$core$async76403(self__.alt_flag,self__.flag,meta76404__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async76403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_76405){
var self__ = this;
var _76405__$1 = this;
return self__.meta76404;
});})(flag))
;

cljs.core.async.t_cljs$core$async76403.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async76403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async76403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async76403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async76403.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta76404","meta76404",-1547627803,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async76403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76403";

cljs.core.async.t_cljs$core$async76403.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async76403");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async76403 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async76403(alt_flag__$1,flag__$1,meta76404){
return (new cljs.core.async.t_cljs$core$async76403(alt_flag__$1,flag__$1,meta76404));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async76403(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async76409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76409 = (function (alt_handler,flag,cb,meta76410){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta76410 = meta76410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async76409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76411,meta76410__$1){
var self__ = this;
var _76411__$1 = this;
return (new cljs.core.async.t_cljs$core$async76409(self__.alt_handler,self__.flag,self__.cb,meta76410__$1));
});

cljs.core.async.t_cljs$core$async76409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76411){
var self__ = this;
var _76411__$1 = this;
return self__.meta76410;
});

cljs.core.async.t_cljs$core$async76409.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async76409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async76409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async76409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async76409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta76410","meta76410",1795896206,null)], null);
});

cljs.core.async.t_cljs$core$async76409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async76409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76409";

cljs.core.async.t_cljs$core$async76409.cljs$lang$ctorPrWriter = (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async76409");
});

cljs.core.async.__GT_t_cljs$core$async76409 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async76409(alt_handler__$1,flag__$1,cb__$1,meta76410){
return (new cljs.core.async.t_cljs$core$async76409(alt_handler__$1,flag__$1,cb__$1,meta76410));
});

}

return (new cljs.core.async.t_cljs$core$async76409(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__76412_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__76412_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__76413_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__76413_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41419__auto__ = wport;
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return port;
}
})()], null));
} else {
var G__76414 = (i + (1));
i = G__76414;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41419__auto__ = ret;
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6477__auto__ = (function (){var and__41407__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41407__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41407__auto__;
}
})();
if(cljs.core.truth_(temp__6477__auto__)){
var got = temp__6477__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__42609__auto__ = [];
var len__42602__auto___76420 = arguments.length;
var i__42603__auto___76421 = (0);
while(true){
if((i__42603__auto___76421 < len__42602__auto___76420)){
args__42609__auto__.push((arguments[i__42603__auto___76421]));

var G__76422 = (i__42603__auto___76421 + (1));
i__42603__auto___76421 = G__76422;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((1) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42610__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__76417){
var map__76418 = p__76417;
var map__76418__$1 = ((((!((map__76418 == null)))?((((map__76418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76418):map__76418);
var opts = map__76418__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq76415){
var G__76416 = cljs.core.first.call(null,seq76415);
var seq76415__$1 = cljs.core.next.call(null,seq76415);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__76416,seq76415__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args76423 = [];
var len__42602__auto___76473 = arguments.length;
var i__42603__auto___76474 = (0);
while(true){
if((i__42603__auto___76474 < len__42602__auto___76473)){
args76423.push((arguments[i__42603__auto___76474]));

var G__76475 = (i__42603__auto___76474 + (1));
i__42603__auto___76474 = G__76475;
continue;
} else {
}
break;
}

var G__76425 = args76423.length;
switch (G__76425) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76423.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46004__auto___76477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___76477){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___76477){
return (function (state_76449){
var state_val_76450 = (state_76449[(1)]);
if((state_val_76450 === (7))){
var inst_76445 = (state_76449[(2)]);
var state_76449__$1 = state_76449;
var statearr_76451_76478 = state_76449__$1;
(statearr_76451_76478[(2)] = inst_76445);

(statearr_76451_76478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (1))){
var state_76449__$1 = state_76449;
var statearr_76452_76479 = state_76449__$1;
(statearr_76452_76479[(2)] = null);

(statearr_76452_76479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (4))){
var inst_76428 = (state_76449[(7)]);
var inst_76428__$1 = (state_76449[(2)]);
var inst_76429 = (inst_76428__$1 == null);
var state_76449__$1 = (function (){var statearr_76453 = state_76449;
(statearr_76453[(7)] = inst_76428__$1);

return statearr_76453;
})();
if(cljs.core.truth_(inst_76429)){
var statearr_76454_76480 = state_76449__$1;
(statearr_76454_76480[(1)] = (5));

} else {
var statearr_76455_76481 = state_76449__$1;
(statearr_76455_76481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (13))){
var state_76449__$1 = state_76449;
var statearr_76456_76482 = state_76449__$1;
(statearr_76456_76482[(2)] = null);

(statearr_76456_76482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (6))){
var inst_76428 = (state_76449[(7)]);
var state_76449__$1 = state_76449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76449__$1,(11),to,inst_76428);
} else {
if((state_val_76450 === (3))){
var inst_76447 = (state_76449[(2)]);
var state_76449__$1 = state_76449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76449__$1,inst_76447);
} else {
if((state_val_76450 === (12))){
var state_76449__$1 = state_76449;
var statearr_76457_76483 = state_76449__$1;
(statearr_76457_76483[(2)] = null);

(statearr_76457_76483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (2))){
var state_76449__$1 = state_76449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76449__$1,(4),from);
} else {
if((state_val_76450 === (11))){
var inst_76438 = (state_76449[(2)]);
var state_76449__$1 = state_76449;
if(cljs.core.truth_(inst_76438)){
var statearr_76458_76484 = state_76449__$1;
(statearr_76458_76484[(1)] = (12));

} else {
var statearr_76459_76485 = state_76449__$1;
(statearr_76459_76485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (9))){
var state_76449__$1 = state_76449;
var statearr_76460_76486 = state_76449__$1;
(statearr_76460_76486[(2)] = null);

(statearr_76460_76486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (5))){
var state_76449__$1 = state_76449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_76461_76487 = state_76449__$1;
(statearr_76461_76487[(1)] = (8));

} else {
var statearr_76462_76488 = state_76449__$1;
(statearr_76462_76488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (14))){
var inst_76443 = (state_76449[(2)]);
var state_76449__$1 = state_76449;
var statearr_76463_76489 = state_76449__$1;
(statearr_76463_76489[(2)] = inst_76443);

(statearr_76463_76489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (10))){
var inst_76435 = (state_76449[(2)]);
var state_76449__$1 = state_76449;
var statearr_76464_76490 = state_76449__$1;
(statearr_76464_76490[(2)] = inst_76435);

(statearr_76464_76490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76450 === (8))){
var inst_76432 = cljs.core.async.close_BANG_.call(null,to);
var state_76449__$1 = state_76449;
var statearr_76465_76491 = state_76449__$1;
(statearr_76465_76491[(2)] = inst_76432);

(statearr_76465_76491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___76477))
;
return ((function (switch__45890__auto__,c__46004__auto___76477){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_76469 = [null,null,null,null,null,null,null,null];
(statearr_76469[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_76469[(1)] = (1));

return statearr_76469;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_76449){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_76449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e76470){if((e76470 instanceof Object)){
var ex__45894__auto__ = e76470;
var statearr_76471_76492 = state_76449;
(statearr_76471_76492[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76493 = state_76449;
state_76449 = G__76493;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_76449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_76449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___76477))
})();
var state__46006__auto__ = (function (){var statearr_76472 = f__46005__auto__.call(null);
(statearr_76472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___76477);

return statearr_76472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___76477))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__76681){
var vec__76682 = p__76681;
var v = cljs.core.nth.call(null,vec__76682,(0),null);
var p = cljs.core.nth.call(null,vec__76682,(1),null);
var job = vec__76682;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46004__auto___76868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___76868,res,vec__76682,v,p,job,jobs,results){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___76868,res,vec__76682,v,p,job,jobs,results){
return (function (state_76689){
var state_val_76690 = (state_76689[(1)]);
if((state_val_76690 === (1))){
var state_76689__$1 = state_76689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76689__$1,(2),res,v);
} else {
if((state_val_76690 === (2))){
var inst_76686 = (state_76689[(2)]);
var inst_76687 = cljs.core.async.close_BANG_.call(null,res);
var state_76689__$1 = (function (){var statearr_76691 = state_76689;
(statearr_76691[(7)] = inst_76686);

return statearr_76691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76689__$1,inst_76687);
} else {
return null;
}
}
});})(c__46004__auto___76868,res,vec__76682,v,p,job,jobs,results))
;
return ((function (switch__45890__auto__,c__46004__auto___76868,res,vec__76682,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0 = (function (){
var statearr_76695 = [null,null,null,null,null,null,null,null];
(statearr_76695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__);

(statearr_76695[(1)] = (1));

return statearr_76695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1 = (function (state_76689){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_76689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e76696){if((e76696 instanceof Object)){
var ex__45894__auto__ = e76696;
var statearr_76697_76869 = state_76689;
(statearr_76697_76869[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76870 = state_76689;
state_76689 = G__76870;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = function(state_76689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1.call(this,state_76689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___76868,res,vec__76682,v,p,job,jobs,results))
})();
var state__46006__auto__ = (function (){var statearr_76698 = f__46005__auto__.call(null);
(statearr_76698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___76868);

return statearr_76698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___76868,res,vec__76682,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__76699){
var vec__76700 = p__76699;
var v = cljs.core.nth.call(null,vec__76700,(0),null);
var p = cljs.core.nth.call(null,vec__76700,(1),null);
var job = vec__76700;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__42432__auto___76871 = n;
var __76872 = (0);
while(true){
if((__76872 < n__42432__auto___76871)){
var G__76703_76873 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__76703_76873) {
case "compute":
var c__46004__auto___76875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__76872,c__46004__auto___76875,G__76703_76873,n__42432__auto___76871,jobs,results,process,async){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (__76872,c__46004__auto___76875,G__76703_76873,n__42432__auto___76871,jobs,results,process,async){
return (function (state_76716){
var state_val_76717 = (state_76716[(1)]);
if((state_val_76717 === (1))){
var state_76716__$1 = state_76716;
var statearr_76718_76876 = state_76716__$1;
(statearr_76718_76876[(2)] = null);

(statearr_76718_76876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76717 === (2))){
var state_76716__$1 = state_76716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76716__$1,(4),jobs);
} else {
if((state_val_76717 === (3))){
var inst_76714 = (state_76716[(2)]);
var state_76716__$1 = state_76716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76716__$1,inst_76714);
} else {
if((state_val_76717 === (4))){
var inst_76706 = (state_76716[(2)]);
var inst_76707 = process.call(null,inst_76706);
var state_76716__$1 = state_76716;
if(cljs.core.truth_(inst_76707)){
var statearr_76719_76877 = state_76716__$1;
(statearr_76719_76877[(1)] = (5));

} else {
var statearr_76720_76878 = state_76716__$1;
(statearr_76720_76878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76717 === (5))){
var state_76716__$1 = state_76716;
var statearr_76721_76879 = state_76716__$1;
(statearr_76721_76879[(2)] = null);

(statearr_76721_76879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76717 === (6))){
var state_76716__$1 = state_76716;
var statearr_76722_76880 = state_76716__$1;
(statearr_76722_76880[(2)] = null);

(statearr_76722_76880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76717 === (7))){
var inst_76712 = (state_76716[(2)]);
var state_76716__$1 = state_76716;
var statearr_76723_76881 = state_76716__$1;
(statearr_76723_76881[(2)] = inst_76712);

(statearr_76723_76881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__76872,c__46004__auto___76875,G__76703_76873,n__42432__auto___76871,jobs,results,process,async))
;
return ((function (__76872,switch__45890__auto__,c__46004__auto___76875,G__76703_76873,n__42432__auto___76871,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0 = (function (){
var statearr_76727 = [null,null,null,null,null,null,null];
(statearr_76727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__);

(statearr_76727[(1)] = (1));

return statearr_76727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1 = (function (state_76716){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_76716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e76728){if((e76728 instanceof Object)){
var ex__45894__auto__ = e76728;
var statearr_76729_76882 = state_76716;
(statearr_76729_76882[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76883 = state_76716;
state_76716 = G__76883;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = function(state_76716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1.call(this,state_76716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__;
})()
;})(__76872,switch__45890__auto__,c__46004__auto___76875,G__76703_76873,n__42432__auto___76871,jobs,results,process,async))
})();
var state__46006__auto__ = (function (){var statearr_76730 = f__46005__auto__.call(null);
(statearr_76730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___76875);

return statearr_76730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(__76872,c__46004__auto___76875,G__76703_76873,n__42432__auto___76871,jobs,results,process,async))
);


break;
case "async":
var c__46004__auto___76884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__76872,c__46004__auto___76884,G__76703_76873,n__42432__auto___76871,jobs,results,process,async){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (__76872,c__46004__auto___76884,G__76703_76873,n__42432__auto___76871,jobs,results,process,async){
return (function (state_76743){
var state_val_76744 = (state_76743[(1)]);
if((state_val_76744 === (1))){
var state_76743__$1 = state_76743;
var statearr_76745_76885 = state_76743__$1;
(statearr_76745_76885[(2)] = null);

(statearr_76745_76885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (2))){
var state_76743__$1 = state_76743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76743__$1,(4),jobs);
} else {
if((state_val_76744 === (3))){
var inst_76741 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76743__$1,inst_76741);
} else {
if((state_val_76744 === (4))){
var inst_76733 = (state_76743[(2)]);
var inst_76734 = async.call(null,inst_76733);
var state_76743__$1 = state_76743;
if(cljs.core.truth_(inst_76734)){
var statearr_76746_76886 = state_76743__$1;
(statearr_76746_76886[(1)] = (5));

} else {
var statearr_76747_76887 = state_76743__$1;
(statearr_76747_76887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (5))){
var state_76743__$1 = state_76743;
var statearr_76748_76888 = state_76743__$1;
(statearr_76748_76888[(2)] = null);

(statearr_76748_76888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (6))){
var state_76743__$1 = state_76743;
var statearr_76749_76889 = state_76743__$1;
(statearr_76749_76889[(2)] = null);

(statearr_76749_76889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76744 === (7))){
var inst_76739 = (state_76743[(2)]);
var state_76743__$1 = state_76743;
var statearr_76750_76890 = state_76743__$1;
(statearr_76750_76890[(2)] = inst_76739);

(statearr_76750_76890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__76872,c__46004__auto___76884,G__76703_76873,n__42432__auto___76871,jobs,results,process,async))
;
return ((function (__76872,switch__45890__auto__,c__46004__auto___76884,G__76703_76873,n__42432__auto___76871,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0 = (function (){
var statearr_76754 = [null,null,null,null,null,null,null];
(statearr_76754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__);

(statearr_76754[(1)] = (1));

return statearr_76754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1 = (function (state_76743){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_76743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e76755){if((e76755 instanceof Object)){
var ex__45894__auto__ = e76755;
var statearr_76756_76891 = state_76743;
(statearr_76756_76891[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76892 = state_76743;
state_76743 = G__76892;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = function(state_76743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1.call(this,state_76743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__;
})()
;})(__76872,switch__45890__auto__,c__46004__auto___76884,G__76703_76873,n__42432__auto___76871,jobs,results,process,async))
})();
var state__46006__auto__ = (function (){var statearr_76757 = f__46005__auto__.call(null);
(statearr_76757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___76884);

return statearr_76757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(__76872,c__46004__auto___76884,G__76703_76873,n__42432__auto___76871,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__76893 = (__76872 + (1));
__76872 = G__76893;
continue;
} else {
}
break;
}

var c__46004__auto___76894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___76894,jobs,results,process,async){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___76894,jobs,results,process,async){
return (function (state_76779){
var state_val_76780 = (state_76779[(1)]);
if((state_val_76780 === (1))){
var state_76779__$1 = state_76779;
var statearr_76781_76895 = state_76779__$1;
(statearr_76781_76895[(2)] = null);

(statearr_76781_76895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76780 === (2))){
var state_76779__$1 = state_76779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76779__$1,(4),from);
} else {
if((state_val_76780 === (3))){
var inst_76777 = (state_76779[(2)]);
var state_76779__$1 = state_76779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76779__$1,inst_76777);
} else {
if((state_val_76780 === (4))){
var inst_76760 = (state_76779[(7)]);
var inst_76760__$1 = (state_76779[(2)]);
var inst_76761 = (inst_76760__$1 == null);
var state_76779__$1 = (function (){var statearr_76782 = state_76779;
(statearr_76782[(7)] = inst_76760__$1);

return statearr_76782;
})();
if(cljs.core.truth_(inst_76761)){
var statearr_76783_76896 = state_76779__$1;
(statearr_76783_76896[(1)] = (5));

} else {
var statearr_76784_76897 = state_76779__$1;
(statearr_76784_76897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76780 === (5))){
var inst_76763 = cljs.core.async.close_BANG_.call(null,jobs);
var state_76779__$1 = state_76779;
var statearr_76785_76898 = state_76779__$1;
(statearr_76785_76898[(2)] = inst_76763);

(statearr_76785_76898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76780 === (6))){
var inst_76760 = (state_76779[(7)]);
var inst_76765 = (state_76779[(8)]);
var inst_76765__$1 = cljs.core.async.chan.call(null,(1));
var inst_76766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_76767 = [inst_76760,inst_76765__$1];
var inst_76768 = (new cljs.core.PersistentVector(null,2,(5),inst_76766,inst_76767,null));
var state_76779__$1 = (function (){var statearr_76786 = state_76779;
(statearr_76786[(8)] = inst_76765__$1);

return statearr_76786;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76779__$1,(8),jobs,inst_76768);
} else {
if((state_val_76780 === (7))){
var inst_76775 = (state_76779[(2)]);
var state_76779__$1 = state_76779;
var statearr_76787_76899 = state_76779__$1;
(statearr_76787_76899[(2)] = inst_76775);

(statearr_76787_76899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76780 === (8))){
var inst_76765 = (state_76779[(8)]);
var inst_76770 = (state_76779[(2)]);
var state_76779__$1 = (function (){var statearr_76788 = state_76779;
(statearr_76788[(9)] = inst_76770);

return statearr_76788;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76779__$1,(9),results,inst_76765);
} else {
if((state_val_76780 === (9))){
var inst_76772 = (state_76779[(2)]);
var state_76779__$1 = (function (){var statearr_76789 = state_76779;
(statearr_76789[(10)] = inst_76772);

return statearr_76789;
})();
var statearr_76790_76900 = state_76779__$1;
(statearr_76790_76900[(2)] = null);

(statearr_76790_76900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___76894,jobs,results,process,async))
;
return ((function (switch__45890__auto__,c__46004__auto___76894,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0 = (function (){
var statearr_76794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__);

(statearr_76794[(1)] = (1));

return statearr_76794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1 = (function (state_76779){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_76779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e76795){if((e76795 instanceof Object)){
var ex__45894__auto__ = e76795;
var statearr_76796_76901 = state_76779;
(statearr_76796_76901[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76902 = state_76779;
state_76779 = G__76902;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = function(state_76779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1.call(this,state_76779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___76894,jobs,results,process,async))
})();
var state__46006__auto__ = (function (){var statearr_76797 = f__46005__auto__.call(null);
(statearr_76797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___76894);

return statearr_76797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___76894,jobs,results,process,async))
);


var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__,jobs,results,process,async){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__,jobs,results,process,async){
return (function (state_76835){
var state_val_76836 = (state_76835[(1)]);
if((state_val_76836 === (7))){
var inst_76831 = (state_76835[(2)]);
var state_76835__$1 = state_76835;
var statearr_76837_76903 = state_76835__$1;
(statearr_76837_76903[(2)] = inst_76831);

(statearr_76837_76903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (20))){
var state_76835__$1 = state_76835;
var statearr_76838_76904 = state_76835__$1;
(statearr_76838_76904[(2)] = null);

(statearr_76838_76904[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (1))){
var state_76835__$1 = state_76835;
var statearr_76839_76905 = state_76835__$1;
(statearr_76839_76905[(2)] = null);

(statearr_76839_76905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (4))){
var inst_76800 = (state_76835[(7)]);
var inst_76800__$1 = (state_76835[(2)]);
var inst_76801 = (inst_76800__$1 == null);
var state_76835__$1 = (function (){var statearr_76840 = state_76835;
(statearr_76840[(7)] = inst_76800__$1);

return statearr_76840;
})();
if(cljs.core.truth_(inst_76801)){
var statearr_76841_76906 = state_76835__$1;
(statearr_76841_76906[(1)] = (5));

} else {
var statearr_76842_76907 = state_76835__$1;
(statearr_76842_76907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (15))){
var inst_76813 = (state_76835[(8)]);
var state_76835__$1 = state_76835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76835__$1,(18),to,inst_76813);
} else {
if((state_val_76836 === (21))){
var inst_76826 = (state_76835[(2)]);
var state_76835__$1 = state_76835;
var statearr_76843_76908 = state_76835__$1;
(statearr_76843_76908[(2)] = inst_76826);

(statearr_76843_76908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (13))){
var inst_76828 = (state_76835[(2)]);
var state_76835__$1 = (function (){var statearr_76844 = state_76835;
(statearr_76844[(9)] = inst_76828);

return statearr_76844;
})();
var statearr_76845_76909 = state_76835__$1;
(statearr_76845_76909[(2)] = null);

(statearr_76845_76909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (6))){
var inst_76800 = (state_76835[(7)]);
var state_76835__$1 = state_76835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76835__$1,(11),inst_76800);
} else {
if((state_val_76836 === (17))){
var inst_76821 = (state_76835[(2)]);
var state_76835__$1 = state_76835;
if(cljs.core.truth_(inst_76821)){
var statearr_76846_76910 = state_76835__$1;
(statearr_76846_76910[(1)] = (19));

} else {
var statearr_76847_76911 = state_76835__$1;
(statearr_76847_76911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (3))){
var inst_76833 = (state_76835[(2)]);
var state_76835__$1 = state_76835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76835__$1,inst_76833);
} else {
if((state_val_76836 === (12))){
var inst_76810 = (state_76835[(10)]);
var state_76835__$1 = state_76835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76835__$1,(14),inst_76810);
} else {
if((state_val_76836 === (2))){
var state_76835__$1 = state_76835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76835__$1,(4),results);
} else {
if((state_val_76836 === (19))){
var state_76835__$1 = state_76835;
var statearr_76848_76912 = state_76835__$1;
(statearr_76848_76912[(2)] = null);

(statearr_76848_76912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (11))){
var inst_76810 = (state_76835[(2)]);
var state_76835__$1 = (function (){var statearr_76849 = state_76835;
(statearr_76849[(10)] = inst_76810);

return statearr_76849;
})();
var statearr_76850_76913 = state_76835__$1;
(statearr_76850_76913[(2)] = null);

(statearr_76850_76913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (9))){
var state_76835__$1 = state_76835;
var statearr_76851_76914 = state_76835__$1;
(statearr_76851_76914[(2)] = null);

(statearr_76851_76914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (5))){
var state_76835__$1 = state_76835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_76852_76915 = state_76835__$1;
(statearr_76852_76915[(1)] = (8));

} else {
var statearr_76853_76916 = state_76835__$1;
(statearr_76853_76916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (14))){
var inst_76813 = (state_76835[(8)]);
var inst_76815 = (state_76835[(11)]);
var inst_76813__$1 = (state_76835[(2)]);
var inst_76814 = (inst_76813__$1 == null);
var inst_76815__$1 = cljs.core.not.call(null,inst_76814);
var state_76835__$1 = (function (){var statearr_76854 = state_76835;
(statearr_76854[(8)] = inst_76813__$1);

(statearr_76854[(11)] = inst_76815__$1);

return statearr_76854;
})();
if(inst_76815__$1){
var statearr_76855_76917 = state_76835__$1;
(statearr_76855_76917[(1)] = (15));

} else {
var statearr_76856_76918 = state_76835__$1;
(statearr_76856_76918[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (16))){
var inst_76815 = (state_76835[(11)]);
var state_76835__$1 = state_76835;
var statearr_76857_76919 = state_76835__$1;
(statearr_76857_76919[(2)] = inst_76815);

(statearr_76857_76919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (10))){
var inst_76807 = (state_76835[(2)]);
var state_76835__$1 = state_76835;
var statearr_76858_76920 = state_76835__$1;
(statearr_76858_76920[(2)] = inst_76807);

(statearr_76858_76920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (18))){
var inst_76818 = (state_76835[(2)]);
var state_76835__$1 = state_76835;
var statearr_76859_76921 = state_76835__$1;
(statearr_76859_76921[(2)] = inst_76818);

(statearr_76859_76921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76836 === (8))){
var inst_76804 = cljs.core.async.close_BANG_.call(null,to);
var state_76835__$1 = state_76835;
var statearr_76860_76922 = state_76835__$1;
(statearr_76860_76922[(2)] = inst_76804);

(statearr_76860_76922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto__,jobs,results,process,async))
;
return ((function (switch__45890__auto__,c__46004__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0 = (function (){
var statearr_76864 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__);

(statearr_76864[(1)] = (1));

return statearr_76864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1 = (function (state_76835){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_76835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e76865){if((e76865 instanceof Object)){
var ex__45894__auto__ = e76865;
var statearr_76866_76923 = state_76835;
(statearr_76866_76923[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76924 = state_76835;
state_76835 = G__76924;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__ = function(state_76835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1.call(this,state_76835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__,jobs,results,process,async))
})();
var state__46006__auto__ = (function (){var statearr_76867 = f__46005__auto__.call(null);
(statearr_76867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_76867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__,jobs,results,process,async))
);

return c__46004__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args76925 = [];
var len__42602__auto___76928 = arguments.length;
var i__42603__auto___76929 = (0);
while(true){
if((i__42603__auto___76929 < len__42602__auto___76928)){
args76925.push((arguments[i__42603__auto___76929]));

var G__76930 = (i__42603__auto___76929 + (1));
i__42603__auto___76929 = G__76930;
continue;
} else {
}
break;
}

var G__76927 = args76925.length;
switch (G__76927) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76925.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args76932 = [];
var len__42602__auto___76935 = arguments.length;
var i__42603__auto___76936 = (0);
while(true){
if((i__42603__auto___76936 < len__42602__auto___76935)){
args76932.push((arguments[i__42603__auto___76936]));

var G__76937 = (i__42603__auto___76936 + (1));
i__42603__auto___76936 = G__76937;
continue;
} else {
}
break;
}

var G__76934 = args76932.length;
switch (G__76934) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76932.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args76939 = [];
var len__42602__auto___76992 = arguments.length;
var i__42603__auto___76993 = (0);
while(true){
if((i__42603__auto___76993 < len__42602__auto___76992)){
args76939.push((arguments[i__42603__auto___76993]));

var G__76994 = (i__42603__auto___76993 + (1));
i__42603__auto___76993 = G__76994;
continue;
} else {
}
break;
}

var G__76941 = args76939.length;
switch (G__76941) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76939.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__46004__auto___76996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___76996,tc,fc){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___76996,tc,fc){
return (function (state_76967){
var state_val_76968 = (state_76967[(1)]);
if((state_val_76968 === (7))){
var inst_76963 = (state_76967[(2)]);
var state_76967__$1 = state_76967;
var statearr_76969_76997 = state_76967__$1;
(statearr_76969_76997[(2)] = inst_76963);

(statearr_76969_76997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (1))){
var state_76967__$1 = state_76967;
var statearr_76970_76998 = state_76967__$1;
(statearr_76970_76998[(2)] = null);

(statearr_76970_76998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (4))){
var inst_76944 = (state_76967[(7)]);
var inst_76944__$1 = (state_76967[(2)]);
var inst_76945 = (inst_76944__$1 == null);
var state_76967__$1 = (function (){var statearr_76971 = state_76967;
(statearr_76971[(7)] = inst_76944__$1);

return statearr_76971;
})();
if(cljs.core.truth_(inst_76945)){
var statearr_76972_76999 = state_76967__$1;
(statearr_76972_76999[(1)] = (5));

} else {
var statearr_76973_77000 = state_76967__$1;
(statearr_76973_77000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (13))){
var state_76967__$1 = state_76967;
var statearr_76974_77001 = state_76967__$1;
(statearr_76974_77001[(2)] = null);

(statearr_76974_77001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (6))){
var inst_76944 = (state_76967[(7)]);
var inst_76950 = p.call(null,inst_76944);
var state_76967__$1 = state_76967;
if(cljs.core.truth_(inst_76950)){
var statearr_76975_77002 = state_76967__$1;
(statearr_76975_77002[(1)] = (9));

} else {
var statearr_76976_77003 = state_76967__$1;
(statearr_76976_77003[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (3))){
var inst_76965 = (state_76967[(2)]);
var state_76967__$1 = state_76967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76967__$1,inst_76965);
} else {
if((state_val_76968 === (12))){
var state_76967__$1 = state_76967;
var statearr_76977_77004 = state_76967__$1;
(statearr_76977_77004[(2)] = null);

(statearr_76977_77004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (2))){
var state_76967__$1 = state_76967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76967__$1,(4),ch);
} else {
if((state_val_76968 === (11))){
var inst_76944 = (state_76967[(7)]);
var inst_76954 = (state_76967[(2)]);
var state_76967__$1 = state_76967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76967__$1,(8),inst_76954,inst_76944);
} else {
if((state_val_76968 === (9))){
var state_76967__$1 = state_76967;
var statearr_76978_77005 = state_76967__$1;
(statearr_76978_77005[(2)] = tc);

(statearr_76978_77005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (5))){
var inst_76947 = cljs.core.async.close_BANG_.call(null,tc);
var inst_76948 = cljs.core.async.close_BANG_.call(null,fc);
var state_76967__$1 = (function (){var statearr_76979 = state_76967;
(statearr_76979[(8)] = inst_76947);

return statearr_76979;
})();
var statearr_76980_77006 = state_76967__$1;
(statearr_76980_77006[(2)] = inst_76948);

(statearr_76980_77006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (14))){
var inst_76961 = (state_76967[(2)]);
var state_76967__$1 = state_76967;
var statearr_76981_77007 = state_76967__$1;
(statearr_76981_77007[(2)] = inst_76961);

(statearr_76981_77007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (10))){
var state_76967__$1 = state_76967;
var statearr_76982_77008 = state_76967__$1;
(statearr_76982_77008[(2)] = fc);

(statearr_76982_77008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76968 === (8))){
var inst_76956 = (state_76967[(2)]);
var state_76967__$1 = state_76967;
if(cljs.core.truth_(inst_76956)){
var statearr_76983_77009 = state_76967__$1;
(statearr_76983_77009[(1)] = (12));

} else {
var statearr_76984_77010 = state_76967__$1;
(statearr_76984_77010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___76996,tc,fc))
;
return ((function (switch__45890__auto__,c__46004__auto___76996,tc,fc){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_76988 = [null,null,null,null,null,null,null,null,null];
(statearr_76988[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_76988[(1)] = (1));

return statearr_76988;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_76967){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_76967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e76989){if((e76989 instanceof Object)){
var ex__45894__auto__ = e76989;
var statearr_76990_77011 = state_76967;
(statearr_76990_77011[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77012 = state_76967;
state_76967 = G__77012;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_76967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_76967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___76996,tc,fc))
})();
var state__46006__auto__ = (function (){var statearr_76991 = f__46005__auto__.call(null);
(statearr_76991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___76996);

return statearr_76991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___76996,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__){
return (function (state_77076){
var state_val_77077 = (state_77076[(1)]);
if((state_val_77077 === (7))){
var inst_77072 = (state_77076[(2)]);
var state_77076__$1 = state_77076;
var statearr_77078_77099 = state_77076__$1;
(statearr_77078_77099[(2)] = inst_77072);

(statearr_77078_77099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77077 === (1))){
var inst_77056 = init;
var state_77076__$1 = (function (){var statearr_77079 = state_77076;
(statearr_77079[(7)] = inst_77056);

return statearr_77079;
})();
var statearr_77080_77100 = state_77076__$1;
(statearr_77080_77100[(2)] = null);

(statearr_77080_77100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77077 === (4))){
var inst_77059 = (state_77076[(8)]);
var inst_77059__$1 = (state_77076[(2)]);
var inst_77060 = (inst_77059__$1 == null);
var state_77076__$1 = (function (){var statearr_77081 = state_77076;
(statearr_77081[(8)] = inst_77059__$1);

return statearr_77081;
})();
if(cljs.core.truth_(inst_77060)){
var statearr_77082_77101 = state_77076__$1;
(statearr_77082_77101[(1)] = (5));

} else {
var statearr_77083_77102 = state_77076__$1;
(statearr_77083_77102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77077 === (6))){
var inst_77063 = (state_77076[(9)]);
var inst_77059 = (state_77076[(8)]);
var inst_77056 = (state_77076[(7)]);
var inst_77063__$1 = f.call(null,inst_77056,inst_77059);
var inst_77064 = cljs.core.reduced_QMARK_.call(null,inst_77063__$1);
var state_77076__$1 = (function (){var statearr_77084 = state_77076;
(statearr_77084[(9)] = inst_77063__$1);

return statearr_77084;
})();
if(inst_77064){
var statearr_77085_77103 = state_77076__$1;
(statearr_77085_77103[(1)] = (8));

} else {
var statearr_77086_77104 = state_77076__$1;
(statearr_77086_77104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77077 === (3))){
var inst_77074 = (state_77076[(2)]);
var state_77076__$1 = state_77076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77076__$1,inst_77074);
} else {
if((state_val_77077 === (2))){
var state_77076__$1 = state_77076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77076__$1,(4),ch);
} else {
if((state_val_77077 === (9))){
var inst_77063 = (state_77076[(9)]);
var inst_77056 = inst_77063;
var state_77076__$1 = (function (){var statearr_77087 = state_77076;
(statearr_77087[(7)] = inst_77056);

return statearr_77087;
})();
var statearr_77088_77105 = state_77076__$1;
(statearr_77088_77105[(2)] = null);

(statearr_77088_77105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77077 === (5))){
var inst_77056 = (state_77076[(7)]);
var state_77076__$1 = state_77076;
var statearr_77089_77106 = state_77076__$1;
(statearr_77089_77106[(2)] = inst_77056);

(statearr_77089_77106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77077 === (10))){
var inst_77070 = (state_77076[(2)]);
var state_77076__$1 = state_77076;
var statearr_77090_77107 = state_77076__$1;
(statearr_77090_77107[(2)] = inst_77070);

(statearr_77090_77107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77077 === (8))){
var inst_77063 = (state_77076[(9)]);
var inst_77066 = cljs.core.deref.call(null,inst_77063);
var state_77076__$1 = state_77076;
var statearr_77091_77108 = state_77076__$1;
(statearr_77091_77108[(2)] = inst_77066);

(statearr_77091_77108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto__))
;
return ((function (switch__45890__auto__,c__46004__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45891__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45891__auto____0 = (function (){
var statearr_77095 = [null,null,null,null,null,null,null,null,null,null];
(statearr_77095[(0)] = cljs$core$async$reduce_$_state_machine__45891__auto__);

(statearr_77095[(1)] = (1));

return statearr_77095;
});
var cljs$core$async$reduce_$_state_machine__45891__auto____1 = (function (state_77076){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_77076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e77096){if((e77096 instanceof Object)){
var ex__45894__auto__ = e77096;
var statearr_77097_77109 = state_77076;
(statearr_77097_77109[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77110 = state_77076;
state_77076 = G__77110;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45891__auto__ = function(state_77076){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45891__auto____1.call(this,state_77076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45891__auto____0;
cljs$core$async$reduce_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45891__auto____1;
return cljs$core$async$reduce_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__))
})();
var state__46006__auto__ = (function (){var statearr_77098 = f__46005__auto__.call(null);
(statearr_77098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_77098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__))
);

return c__46004__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args77111 = [];
var len__42602__auto___77163 = arguments.length;
var i__42603__auto___77164 = (0);
while(true){
if((i__42603__auto___77164 < len__42602__auto___77163)){
args77111.push((arguments[i__42603__auto___77164]));

var G__77165 = (i__42603__auto___77164 + (1));
i__42603__auto___77164 = G__77165;
continue;
} else {
}
break;
}

var G__77113 = args77111.length;
switch (G__77113) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args77111.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__){
return (function (state_77138){
var state_val_77139 = (state_77138[(1)]);
if((state_val_77139 === (7))){
var inst_77120 = (state_77138[(2)]);
var state_77138__$1 = state_77138;
var statearr_77140_77167 = state_77138__$1;
(statearr_77140_77167[(2)] = inst_77120);

(statearr_77140_77167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (1))){
var inst_77114 = cljs.core.seq.call(null,coll);
var inst_77115 = inst_77114;
var state_77138__$1 = (function (){var statearr_77141 = state_77138;
(statearr_77141[(7)] = inst_77115);

return statearr_77141;
})();
var statearr_77142_77168 = state_77138__$1;
(statearr_77142_77168[(2)] = null);

(statearr_77142_77168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (4))){
var inst_77115 = (state_77138[(7)]);
var inst_77118 = cljs.core.first.call(null,inst_77115);
var state_77138__$1 = state_77138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77138__$1,(7),ch,inst_77118);
} else {
if((state_val_77139 === (13))){
var inst_77132 = (state_77138[(2)]);
var state_77138__$1 = state_77138;
var statearr_77143_77169 = state_77138__$1;
(statearr_77143_77169[(2)] = inst_77132);

(statearr_77143_77169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (6))){
var inst_77123 = (state_77138[(2)]);
var state_77138__$1 = state_77138;
if(cljs.core.truth_(inst_77123)){
var statearr_77144_77170 = state_77138__$1;
(statearr_77144_77170[(1)] = (8));

} else {
var statearr_77145_77171 = state_77138__$1;
(statearr_77145_77171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (3))){
var inst_77136 = (state_77138[(2)]);
var state_77138__$1 = state_77138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77138__$1,inst_77136);
} else {
if((state_val_77139 === (12))){
var state_77138__$1 = state_77138;
var statearr_77146_77172 = state_77138__$1;
(statearr_77146_77172[(2)] = null);

(statearr_77146_77172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (2))){
var inst_77115 = (state_77138[(7)]);
var state_77138__$1 = state_77138;
if(cljs.core.truth_(inst_77115)){
var statearr_77147_77173 = state_77138__$1;
(statearr_77147_77173[(1)] = (4));

} else {
var statearr_77148_77174 = state_77138__$1;
(statearr_77148_77174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (11))){
var inst_77129 = cljs.core.async.close_BANG_.call(null,ch);
var state_77138__$1 = state_77138;
var statearr_77149_77175 = state_77138__$1;
(statearr_77149_77175[(2)] = inst_77129);

(statearr_77149_77175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (9))){
var state_77138__$1 = state_77138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_77150_77176 = state_77138__$1;
(statearr_77150_77176[(1)] = (11));

} else {
var statearr_77151_77177 = state_77138__$1;
(statearr_77151_77177[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (5))){
var inst_77115 = (state_77138[(7)]);
var state_77138__$1 = state_77138;
var statearr_77152_77178 = state_77138__$1;
(statearr_77152_77178[(2)] = inst_77115);

(statearr_77152_77178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (10))){
var inst_77134 = (state_77138[(2)]);
var state_77138__$1 = state_77138;
var statearr_77153_77179 = state_77138__$1;
(statearr_77153_77179[(2)] = inst_77134);

(statearr_77153_77179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77139 === (8))){
var inst_77115 = (state_77138[(7)]);
var inst_77125 = cljs.core.next.call(null,inst_77115);
var inst_77115__$1 = inst_77125;
var state_77138__$1 = (function (){var statearr_77154 = state_77138;
(statearr_77154[(7)] = inst_77115__$1);

return statearr_77154;
})();
var statearr_77155_77180 = state_77138__$1;
(statearr_77155_77180[(2)] = null);

(statearr_77155_77180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto__))
;
return ((function (switch__45890__auto__,c__46004__auto__){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_77159 = [null,null,null,null,null,null,null,null];
(statearr_77159[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_77159[(1)] = (1));

return statearr_77159;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_77138){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_77138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e77160){if((e77160 instanceof Object)){
var ex__45894__auto__ = e77160;
var statearr_77161_77181 = state_77138;
(statearr_77161_77181[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77182 = state_77138;
state_77138 = G__77182;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_77138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_77138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__))
})();
var state__46006__auto__ = (function (){var statearr_77162 = f__46005__auto__.call(null);
(statearr_77162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_77162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__))
);

return c__46004__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__42132__auto__ = (((_ == null))?null:_);
var m__42133__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,_);
} else {
var m__42133__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__42133__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m,ch);
} else {
var m__42133__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m);
} else {
var m__42133__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async77408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77408 = (function (mult,ch,cs,meta77409){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta77409 = meta77409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_77410,meta77409__$1){
var self__ = this;
var _77410__$1 = this;
return (new cljs.core.async.t_cljs$core$async77408(self__.mult,self__.ch,self__.cs,meta77409__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_77410){
var self__ = this;
var _77410__$1 = this;
return self__.meta77409;
});})(cs))
;

cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async77408.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async77408.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta77409","meta77409",-893568922,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async77408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async77408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77408";

cljs.core.async.t_cljs$core$async77408.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async77408");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async77408 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async77408(mult__$1,ch__$1,cs__$1,meta77409){
return (new cljs.core.async.t_cljs$core$async77408(mult__$1,ch__$1,cs__$1,meta77409));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async77408(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46004__auto___77633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___77633,cs,m,dchan,dctr,done){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___77633,cs,m,dchan,dctr,done){
return (function (state_77545){
var state_val_77546 = (state_77545[(1)]);
if((state_val_77546 === (7))){
var inst_77541 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77547_77634 = state_77545__$1;
(statearr_77547_77634[(2)] = inst_77541);

(statearr_77547_77634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (20))){
var inst_77444 = (state_77545[(7)]);
var inst_77456 = cljs.core.first.call(null,inst_77444);
var inst_77457 = cljs.core.nth.call(null,inst_77456,(0),null);
var inst_77458 = cljs.core.nth.call(null,inst_77456,(1),null);
var state_77545__$1 = (function (){var statearr_77548 = state_77545;
(statearr_77548[(8)] = inst_77457);

return statearr_77548;
})();
if(cljs.core.truth_(inst_77458)){
var statearr_77549_77635 = state_77545__$1;
(statearr_77549_77635[(1)] = (22));

} else {
var statearr_77550_77636 = state_77545__$1;
(statearr_77550_77636[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (27))){
var inst_77493 = (state_77545[(9)]);
var inst_77488 = (state_77545[(10)]);
var inst_77486 = (state_77545[(11)]);
var inst_77413 = (state_77545[(12)]);
var inst_77493__$1 = cljs.core._nth.call(null,inst_77486,inst_77488);
var inst_77494 = cljs.core.async.put_BANG_.call(null,inst_77493__$1,inst_77413,done);
var state_77545__$1 = (function (){var statearr_77551 = state_77545;
(statearr_77551[(9)] = inst_77493__$1);

return statearr_77551;
})();
if(cljs.core.truth_(inst_77494)){
var statearr_77552_77637 = state_77545__$1;
(statearr_77552_77637[(1)] = (30));

} else {
var statearr_77553_77638 = state_77545__$1;
(statearr_77553_77638[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (1))){
var state_77545__$1 = state_77545;
var statearr_77554_77639 = state_77545__$1;
(statearr_77554_77639[(2)] = null);

(statearr_77554_77639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (24))){
var inst_77444 = (state_77545[(7)]);
var inst_77463 = (state_77545[(2)]);
var inst_77464 = cljs.core.next.call(null,inst_77444);
var inst_77422 = inst_77464;
var inst_77423 = null;
var inst_77424 = (0);
var inst_77425 = (0);
var state_77545__$1 = (function (){var statearr_77555 = state_77545;
(statearr_77555[(13)] = inst_77424);

(statearr_77555[(14)] = inst_77463);

(statearr_77555[(15)] = inst_77423);

(statearr_77555[(16)] = inst_77425);

(statearr_77555[(17)] = inst_77422);

return statearr_77555;
})();
var statearr_77556_77640 = state_77545__$1;
(statearr_77556_77640[(2)] = null);

(statearr_77556_77640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (39))){
var state_77545__$1 = state_77545;
var statearr_77560_77641 = state_77545__$1;
(statearr_77560_77641[(2)] = null);

(statearr_77560_77641[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (4))){
var inst_77413 = (state_77545[(12)]);
var inst_77413__$1 = (state_77545[(2)]);
var inst_77414 = (inst_77413__$1 == null);
var state_77545__$1 = (function (){var statearr_77561 = state_77545;
(statearr_77561[(12)] = inst_77413__$1);

return statearr_77561;
})();
if(cljs.core.truth_(inst_77414)){
var statearr_77562_77642 = state_77545__$1;
(statearr_77562_77642[(1)] = (5));

} else {
var statearr_77563_77643 = state_77545__$1;
(statearr_77563_77643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (15))){
var inst_77424 = (state_77545[(13)]);
var inst_77423 = (state_77545[(15)]);
var inst_77425 = (state_77545[(16)]);
var inst_77422 = (state_77545[(17)]);
var inst_77440 = (state_77545[(2)]);
var inst_77441 = (inst_77425 + (1));
var tmp77557 = inst_77424;
var tmp77558 = inst_77423;
var tmp77559 = inst_77422;
var inst_77422__$1 = tmp77559;
var inst_77423__$1 = tmp77558;
var inst_77424__$1 = tmp77557;
var inst_77425__$1 = inst_77441;
var state_77545__$1 = (function (){var statearr_77564 = state_77545;
(statearr_77564[(13)] = inst_77424__$1);

(statearr_77564[(18)] = inst_77440);

(statearr_77564[(15)] = inst_77423__$1);

(statearr_77564[(16)] = inst_77425__$1);

(statearr_77564[(17)] = inst_77422__$1);

return statearr_77564;
})();
var statearr_77565_77644 = state_77545__$1;
(statearr_77565_77644[(2)] = null);

(statearr_77565_77644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (21))){
var inst_77467 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77569_77645 = state_77545__$1;
(statearr_77569_77645[(2)] = inst_77467);

(statearr_77569_77645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (31))){
var inst_77493 = (state_77545[(9)]);
var inst_77497 = done.call(null,null);
var inst_77498 = cljs.core.async.untap_STAR_.call(null,m,inst_77493);
var state_77545__$1 = (function (){var statearr_77570 = state_77545;
(statearr_77570[(19)] = inst_77497);

return statearr_77570;
})();
var statearr_77571_77646 = state_77545__$1;
(statearr_77571_77646[(2)] = inst_77498);

(statearr_77571_77646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (32))){
var inst_77487 = (state_77545[(20)]);
var inst_77488 = (state_77545[(10)]);
var inst_77486 = (state_77545[(11)]);
var inst_77485 = (state_77545[(21)]);
var inst_77500 = (state_77545[(2)]);
var inst_77501 = (inst_77488 + (1));
var tmp77566 = inst_77487;
var tmp77567 = inst_77486;
var tmp77568 = inst_77485;
var inst_77485__$1 = tmp77568;
var inst_77486__$1 = tmp77567;
var inst_77487__$1 = tmp77566;
var inst_77488__$1 = inst_77501;
var state_77545__$1 = (function (){var statearr_77572 = state_77545;
(statearr_77572[(20)] = inst_77487__$1);

(statearr_77572[(10)] = inst_77488__$1);

(statearr_77572[(11)] = inst_77486__$1);

(statearr_77572[(21)] = inst_77485__$1);

(statearr_77572[(22)] = inst_77500);

return statearr_77572;
})();
var statearr_77573_77647 = state_77545__$1;
(statearr_77573_77647[(2)] = null);

(statearr_77573_77647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (40))){
var inst_77513 = (state_77545[(23)]);
var inst_77517 = done.call(null,null);
var inst_77518 = cljs.core.async.untap_STAR_.call(null,m,inst_77513);
var state_77545__$1 = (function (){var statearr_77574 = state_77545;
(statearr_77574[(24)] = inst_77517);

return statearr_77574;
})();
var statearr_77575_77648 = state_77545__$1;
(statearr_77575_77648[(2)] = inst_77518);

(statearr_77575_77648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (33))){
var inst_77504 = (state_77545[(25)]);
var inst_77506 = cljs.core.chunked_seq_QMARK_.call(null,inst_77504);
var state_77545__$1 = state_77545;
if(inst_77506){
var statearr_77576_77649 = state_77545__$1;
(statearr_77576_77649[(1)] = (36));

} else {
var statearr_77577_77650 = state_77545__$1;
(statearr_77577_77650[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (13))){
var inst_77434 = (state_77545[(26)]);
var inst_77437 = cljs.core.async.close_BANG_.call(null,inst_77434);
var state_77545__$1 = state_77545;
var statearr_77578_77651 = state_77545__$1;
(statearr_77578_77651[(2)] = inst_77437);

(statearr_77578_77651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (22))){
var inst_77457 = (state_77545[(8)]);
var inst_77460 = cljs.core.async.close_BANG_.call(null,inst_77457);
var state_77545__$1 = state_77545;
var statearr_77579_77652 = state_77545__$1;
(statearr_77579_77652[(2)] = inst_77460);

(statearr_77579_77652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (36))){
var inst_77504 = (state_77545[(25)]);
var inst_77508 = cljs.core.chunk_first.call(null,inst_77504);
var inst_77509 = cljs.core.chunk_rest.call(null,inst_77504);
var inst_77510 = cljs.core.count.call(null,inst_77508);
var inst_77485 = inst_77509;
var inst_77486 = inst_77508;
var inst_77487 = inst_77510;
var inst_77488 = (0);
var state_77545__$1 = (function (){var statearr_77580 = state_77545;
(statearr_77580[(20)] = inst_77487);

(statearr_77580[(10)] = inst_77488);

(statearr_77580[(11)] = inst_77486);

(statearr_77580[(21)] = inst_77485);

return statearr_77580;
})();
var statearr_77581_77653 = state_77545__$1;
(statearr_77581_77653[(2)] = null);

(statearr_77581_77653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (41))){
var inst_77504 = (state_77545[(25)]);
var inst_77520 = (state_77545[(2)]);
var inst_77521 = cljs.core.next.call(null,inst_77504);
var inst_77485 = inst_77521;
var inst_77486 = null;
var inst_77487 = (0);
var inst_77488 = (0);
var state_77545__$1 = (function (){var statearr_77582 = state_77545;
(statearr_77582[(20)] = inst_77487);

(statearr_77582[(27)] = inst_77520);

(statearr_77582[(10)] = inst_77488);

(statearr_77582[(11)] = inst_77486);

(statearr_77582[(21)] = inst_77485);

return statearr_77582;
})();
var statearr_77583_77654 = state_77545__$1;
(statearr_77583_77654[(2)] = null);

(statearr_77583_77654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (43))){
var state_77545__$1 = state_77545;
var statearr_77584_77655 = state_77545__$1;
(statearr_77584_77655[(2)] = null);

(statearr_77584_77655[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (29))){
var inst_77529 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77585_77656 = state_77545__$1;
(statearr_77585_77656[(2)] = inst_77529);

(statearr_77585_77656[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (44))){
var inst_77538 = (state_77545[(2)]);
var state_77545__$1 = (function (){var statearr_77586 = state_77545;
(statearr_77586[(28)] = inst_77538);

return statearr_77586;
})();
var statearr_77587_77657 = state_77545__$1;
(statearr_77587_77657[(2)] = null);

(statearr_77587_77657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (6))){
var inst_77477 = (state_77545[(29)]);
var inst_77476 = cljs.core.deref.call(null,cs);
var inst_77477__$1 = cljs.core.keys.call(null,inst_77476);
var inst_77478 = cljs.core.count.call(null,inst_77477__$1);
var inst_77479 = cljs.core.reset_BANG_.call(null,dctr,inst_77478);
var inst_77484 = cljs.core.seq.call(null,inst_77477__$1);
var inst_77485 = inst_77484;
var inst_77486 = null;
var inst_77487 = (0);
var inst_77488 = (0);
var state_77545__$1 = (function (){var statearr_77588 = state_77545;
(statearr_77588[(30)] = inst_77479);

(statearr_77588[(29)] = inst_77477__$1);

(statearr_77588[(20)] = inst_77487);

(statearr_77588[(10)] = inst_77488);

(statearr_77588[(11)] = inst_77486);

(statearr_77588[(21)] = inst_77485);

return statearr_77588;
})();
var statearr_77589_77658 = state_77545__$1;
(statearr_77589_77658[(2)] = null);

(statearr_77589_77658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (28))){
var inst_77504 = (state_77545[(25)]);
var inst_77485 = (state_77545[(21)]);
var inst_77504__$1 = cljs.core.seq.call(null,inst_77485);
var state_77545__$1 = (function (){var statearr_77590 = state_77545;
(statearr_77590[(25)] = inst_77504__$1);

return statearr_77590;
})();
if(inst_77504__$1){
var statearr_77591_77659 = state_77545__$1;
(statearr_77591_77659[(1)] = (33));

} else {
var statearr_77592_77660 = state_77545__$1;
(statearr_77592_77660[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (25))){
var inst_77487 = (state_77545[(20)]);
var inst_77488 = (state_77545[(10)]);
var inst_77490 = (inst_77488 < inst_77487);
var inst_77491 = inst_77490;
var state_77545__$1 = state_77545;
if(cljs.core.truth_(inst_77491)){
var statearr_77593_77661 = state_77545__$1;
(statearr_77593_77661[(1)] = (27));

} else {
var statearr_77594_77662 = state_77545__$1;
(statearr_77594_77662[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (34))){
var state_77545__$1 = state_77545;
var statearr_77595_77663 = state_77545__$1;
(statearr_77595_77663[(2)] = null);

(statearr_77595_77663[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (17))){
var state_77545__$1 = state_77545;
var statearr_77596_77664 = state_77545__$1;
(statearr_77596_77664[(2)] = null);

(statearr_77596_77664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (3))){
var inst_77543 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77545__$1,inst_77543);
} else {
if((state_val_77546 === (12))){
var inst_77472 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77597_77665 = state_77545__$1;
(statearr_77597_77665[(2)] = inst_77472);

(statearr_77597_77665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (2))){
var state_77545__$1 = state_77545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77545__$1,(4),ch);
} else {
if((state_val_77546 === (23))){
var state_77545__$1 = state_77545;
var statearr_77598_77666 = state_77545__$1;
(statearr_77598_77666[(2)] = null);

(statearr_77598_77666[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (35))){
var inst_77527 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77599_77667 = state_77545__$1;
(statearr_77599_77667[(2)] = inst_77527);

(statearr_77599_77667[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (19))){
var inst_77444 = (state_77545[(7)]);
var inst_77448 = cljs.core.chunk_first.call(null,inst_77444);
var inst_77449 = cljs.core.chunk_rest.call(null,inst_77444);
var inst_77450 = cljs.core.count.call(null,inst_77448);
var inst_77422 = inst_77449;
var inst_77423 = inst_77448;
var inst_77424 = inst_77450;
var inst_77425 = (0);
var state_77545__$1 = (function (){var statearr_77600 = state_77545;
(statearr_77600[(13)] = inst_77424);

(statearr_77600[(15)] = inst_77423);

(statearr_77600[(16)] = inst_77425);

(statearr_77600[(17)] = inst_77422);

return statearr_77600;
})();
var statearr_77601_77668 = state_77545__$1;
(statearr_77601_77668[(2)] = null);

(statearr_77601_77668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (11))){
var inst_77444 = (state_77545[(7)]);
var inst_77422 = (state_77545[(17)]);
var inst_77444__$1 = cljs.core.seq.call(null,inst_77422);
var state_77545__$1 = (function (){var statearr_77602 = state_77545;
(statearr_77602[(7)] = inst_77444__$1);

return statearr_77602;
})();
if(inst_77444__$1){
var statearr_77603_77669 = state_77545__$1;
(statearr_77603_77669[(1)] = (16));

} else {
var statearr_77604_77670 = state_77545__$1;
(statearr_77604_77670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (9))){
var inst_77474 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77605_77671 = state_77545__$1;
(statearr_77605_77671[(2)] = inst_77474);

(statearr_77605_77671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (5))){
var inst_77420 = cljs.core.deref.call(null,cs);
var inst_77421 = cljs.core.seq.call(null,inst_77420);
var inst_77422 = inst_77421;
var inst_77423 = null;
var inst_77424 = (0);
var inst_77425 = (0);
var state_77545__$1 = (function (){var statearr_77606 = state_77545;
(statearr_77606[(13)] = inst_77424);

(statearr_77606[(15)] = inst_77423);

(statearr_77606[(16)] = inst_77425);

(statearr_77606[(17)] = inst_77422);

return statearr_77606;
})();
var statearr_77607_77672 = state_77545__$1;
(statearr_77607_77672[(2)] = null);

(statearr_77607_77672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (14))){
var state_77545__$1 = state_77545;
var statearr_77608_77673 = state_77545__$1;
(statearr_77608_77673[(2)] = null);

(statearr_77608_77673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (45))){
var inst_77535 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77609_77674 = state_77545__$1;
(statearr_77609_77674[(2)] = inst_77535);

(statearr_77609_77674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (26))){
var inst_77477 = (state_77545[(29)]);
var inst_77531 = (state_77545[(2)]);
var inst_77532 = cljs.core.seq.call(null,inst_77477);
var state_77545__$1 = (function (){var statearr_77610 = state_77545;
(statearr_77610[(31)] = inst_77531);

return statearr_77610;
})();
if(inst_77532){
var statearr_77611_77675 = state_77545__$1;
(statearr_77611_77675[(1)] = (42));

} else {
var statearr_77612_77676 = state_77545__$1;
(statearr_77612_77676[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (16))){
var inst_77444 = (state_77545[(7)]);
var inst_77446 = cljs.core.chunked_seq_QMARK_.call(null,inst_77444);
var state_77545__$1 = state_77545;
if(inst_77446){
var statearr_77613_77677 = state_77545__$1;
(statearr_77613_77677[(1)] = (19));

} else {
var statearr_77614_77678 = state_77545__$1;
(statearr_77614_77678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (38))){
var inst_77524 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77615_77679 = state_77545__$1;
(statearr_77615_77679[(2)] = inst_77524);

(statearr_77615_77679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (30))){
var state_77545__$1 = state_77545;
var statearr_77616_77680 = state_77545__$1;
(statearr_77616_77680[(2)] = null);

(statearr_77616_77680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (10))){
var inst_77423 = (state_77545[(15)]);
var inst_77425 = (state_77545[(16)]);
var inst_77433 = cljs.core._nth.call(null,inst_77423,inst_77425);
var inst_77434 = cljs.core.nth.call(null,inst_77433,(0),null);
var inst_77435 = cljs.core.nth.call(null,inst_77433,(1),null);
var state_77545__$1 = (function (){var statearr_77617 = state_77545;
(statearr_77617[(26)] = inst_77434);

return statearr_77617;
})();
if(cljs.core.truth_(inst_77435)){
var statearr_77618_77681 = state_77545__$1;
(statearr_77618_77681[(1)] = (13));

} else {
var statearr_77619_77682 = state_77545__$1;
(statearr_77619_77682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (18))){
var inst_77470 = (state_77545[(2)]);
var state_77545__$1 = state_77545;
var statearr_77620_77683 = state_77545__$1;
(statearr_77620_77683[(2)] = inst_77470);

(statearr_77620_77683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (42))){
var state_77545__$1 = state_77545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77545__$1,(45),dchan);
} else {
if((state_val_77546 === (37))){
var inst_77504 = (state_77545[(25)]);
var inst_77513 = (state_77545[(23)]);
var inst_77413 = (state_77545[(12)]);
var inst_77513__$1 = cljs.core.first.call(null,inst_77504);
var inst_77514 = cljs.core.async.put_BANG_.call(null,inst_77513__$1,inst_77413,done);
var state_77545__$1 = (function (){var statearr_77621 = state_77545;
(statearr_77621[(23)] = inst_77513__$1);

return statearr_77621;
})();
if(cljs.core.truth_(inst_77514)){
var statearr_77622_77684 = state_77545__$1;
(statearr_77622_77684[(1)] = (39));

} else {
var statearr_77623_77685 = state_77545__$1;
(statearr_77623_77685[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77546 === (8))){
var inst_77424 = (state_77545[(13)]);
var inst_77425 = (state_77545[(16)]);
var inst_77427 = (inst_77425 < inst_77424);
var inst_77428 = inst_77427;
var state_77545__$1 = state_77545;
if(cljs.core.truth_(inst_77428)){
var statearr_77624_77686 = state_77545__$1;
(statearr_77624_77686[(1)] = (10));

} else {
var statearr_77625_77687 = state_77545__$1;
(statearr_77625_77687[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___77633,cs,m,dchan,dctr,done))
;
return ((function (switch__45890__auto__,c__46004__auto___77633,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45891__auto__ = null;
var cljs$core$async$mult_$_state_machine__45891__auto____0 = (function (){
var statearr_77629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77629[(0)] = cljs$core$async$mult_$_state_machine__45891__auto__);

(statearr_77629[(1)] = (1));

return statearr_77629;
});
var cljs$core$async$mult_$_state_machine__45891__auto____1 = (function (state_77545){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_77545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e77630){if((e77630 instanceof Object)){
var ex__45894__auto__ = e77630;
var statearr_77631_77688 = state_77545;
(statearr_77631_77688[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77689 = state_77545;
state_77545 = G__77689;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45891__auto__ = function(state_77545){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45891__auto____1.call(this,state_77545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45891__auto____0;
cljs$core$async$mult_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45891__auto____1;
return cljs$core$async$mult_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___77633,cs,m,dchan,dctr,done))
})();
var state__46006__auto__ = (function (){var statearr_77632 = f__46005__auto__.call(null);
(statearr_77632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___77633);

return statearr_77632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___77633,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args77690 = [];
var len__42602__auto___77693 = arguments.length;
var i__42603__auto___77694 = (0);
while(true){
if((i__42603__auto___77694 < len__42602__auto___77693)){
args77690.push((arguments[i__42603__auto___77694]));

var G__77695 = (i__42603__auto___77694 + (1));
i__42603__auto___77694 = G__77695;
continue;
} else {
}
break;
}

var G__77692 = args77690.length;
switch (G__77692) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args77690.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m,ch);
} else {
var m__42133__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m,ch);
} else {
var m__42133__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m);
} else {
var m__42133__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m,state_map);
} else {
var m__42133__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__42132__auto__ = (((m == null))?null:m);
var m__42133__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,m,mode);
} else {
var m__42133__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42609__auto__ = [];
var len__42602__auto___77707 = arguments.length;
var i__42603__auto___77708 = (0);
while(true){
if((i__42603__auto___77708 < len__42602__auto___77707)){
args__42609__auto__.push((arguments[i__42603__auto___77708]));

var G__77709 = (i__42603__auto___77708 + (1));
i__42603__auto___77708 = G__77709;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((3) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42610__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__77701){
var map__77702 = p__77701;
var map__77702__$1 = ((((!((map__77702 == null)))?((((map__77702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77702):map__77702);
var opts = map__77702__$1;
var statearr_77704_77710 = state;
(statearr_77704_77710[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6477__auto__ = cljs.core.async.do_alts.call(null,((function (map__77702,map__77702__$1,opts){
return (function (val){
var statearr_77705_77711 = state;
(statearr_77705_77711[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__77702,map__77702__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6477__auto__)){
var cb = temp__6477__auto__;
var statearr_77706_77712 = state;
(statearr_77706_77712[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq77697){
var G__77698 = cljs.core.first.call(null,seq77697);
var seq77697__$1 = cljs.core.next.call(null,seq77697);
var G__77699 = cljs.core.first.call(null,seq77697__$1);
var seq77697__$2 = cljs.core.next.call(null,seq77697__$1);
var G__77700 = cljs.core.first.call(null,seq77697__$2);
var seq77697__$3 = cljs.core.next.call(null,seq77697__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__77698,G__77699,G__77700,seq77697__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async77878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async77878 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta77879){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta77879 = meta77879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_77880,meta77879__$1){
var self__ = this;
var _77880__$1 = this;
return (new cljs.core.async.t_cljs$core$async77878(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta77879__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_77880){
var self__ = this;
var _77880__$1 = this;
return self__.meta77879;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta77879","meta77879",-869045546,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async77878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async77878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async77878";

cljs.core.async.t_cljs$core$async77878.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async77878");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async77878 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async77878(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta77879){
return (new cljs.core.async.t_cljs$core$async77878(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta77879));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async77878(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46004__auto___78043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78043,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78043,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_77980){
var state_val_77981 = (state_77980[(1)]);
if((state_val_77981 === (7))){
var inst_77896 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
var statearr_77982_78044 = state_77980__$1;
(statearr_77982_78044[(2)] = inst_77896);

(statearr_77982_78044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (20))){
var inst_77908 = (state_77980[(7)]);
var state_77980__$1 = state_77980;
var statearr_77983_78045 = state_77980__$1;
(statearr_77983_78045[(2)] = inst_77908);

(statearr_77983_78045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (27))){
var state_77980__$1 = state_77980;
var statearr_77984_78046 = state_77980__$1;
(statearr_77984_78046[(2)] = null);

(statearr_77984_78046[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (1))){
var inst_77884 = (state_77980[(8)]);
var inst_77884__$1 = calc_state.call(null);
var inst_77886 = (inst_77884__$1 == null);
var inst_77887 = cljs.core.not.call(null,inst_77886);
var state_77980__$1 = (function (){var statearr_77985 = state_77980;
(statearr_77985[(8)] = inst_77884__$1);

return statearr_77985;
})();
if(inst_77887){
var statearr_77986_78047 = state_77980__$1;
(statearr_77986_78047[(1)] = (2));

} else {
var statearr_77987_78048 = state_77980__$1;
(statearr_77987_78048[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (24))){
var inst_77940 = (state_77980[(9)]);
var inst_77931 = (state_77980[(10)]);
var inst_77954 = (state_77980[(11)]);
var inst_77954__$1 = inst_77931.call(null,inst_77940);
var state_77980__$1 = (function (){var statearr_77988 = state_77980;
(statearr_77988[(11)] = inst_77954__$1);

return statearr_77988;
})();
if(cljs.core.truth_(inst_77954__$1)){
var statearr_77989_78049 = state_77980__$1;
(statearr_77989_78049[(1)] = (29));

} else {
var statearr_77990_78050 = state_77980__$1;
(statearr_77990_78050[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (4))){
var inst_77899 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
if(cljs.core.truth_(inst_77899)){
var statearr_77991_78051 = state_77980__$1;
(statearr_77991_78051[(1)] = (8));

} else {
var statearr_77992_78052 = state_77980__$1;
(statearr_77992_78052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (15))){
var inst_77925 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
if(cljs.core.truth_(inst_77925)){
var statearr_77993_78053 = state_77980__$1;
(statearr_77993_78053[(1)] = (19));

} else {
var statearr_77994_78054 = state_77980__$1;
(statearr_77994_78054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (21))){
var inst_77930 = (state_77980[(12)]);
var inst_77930__$1 = (state_77980[(2)]);
var inst_77931 = cljs.core.get.call(null,inst_77930__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_77932 = cljs.core.get.call(null,inst_77930__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_77933 = cljs.core.get.call(null,inst_77930__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_77980__$1 = (function (){var statearr_77995 = state_77980;
(statearr_77995[(12)] = inst_77930__$1);

(statearr_77995[(13)] = inst_77932);

(statearr_77995[(10)] = inst_77931);

return statearr_77995;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_77980__$1,(22),inst_77933);
} else {
if((state_val_77981 === (31))){
var inst_77962 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
if(cljs.core.truth_(inst_77962)){
var statearr_77996_78055 = state_77980__$1;
(statearr_77996_78055[(1)] = (32));

} else {
var statearr_77997_78056 = state_77980__$1;
(statearr_77997_78056[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (32))){
var inst_77939 = (state_77980[(14)]);
var state_77980__$1 = state_77980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77980__$1,(35),out,inst_77939);
} else {
if((state_val_77981 === (33))){
var inst_77930 = (state_77980[(12)]);
var inst_77908 = inst_77930;
var state_77980__$1 = (function (){var statearr_77998 = state_77980;
(statearr_77998[(7)] = inst_77908);

return statearr_77998;
})();
var statearr_77999_78057 = state_77980__$1;
(statearr_77999_78057[(2)] = null);

(statearr_77999_78057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (13))){
var inst_77908 = (state_77980[(7)]);
var inst_77915 = inst_77908.cljs$lang$protocol_mask$partition0$;
var inst_77916 = (inst_77915 & (64));
var inst_77917 = inst_77908.cljs$core$ISeq$;
var inst_77918 = (inst_77916) || (inst_77917);
var state_77980__$1 = state_77980;
if(cljs.core.truth_(inst_77918)){
var statearr_78000_78058 = state_77980__$1;
(statearr_78000_78058[(1)] = (16));

} else {
var statearr_78001_78059 = state_77980__$1;
(statearr_78001_78059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (22))){
var inst_77940 = (state_77980[(9)]);
var inst_77939 = (state_77980[(14)]);
var inst_77938 = (state_77980[(2)]);
var inst_77939__$1 = cljs.core.nth.call(null,inst_77938,(0),null);
var inst_77940__$1 = cljs.core.nth.call(null,inst_77938,(1),null);
var inst_77941 = (inst_77939__$1 == null);
var inst_77942 = cljs.core._EQ_.call(null,inst_77940__$1,change);
var inst_77943 = (inst_77941) || (inst_77942);
var state_77980__$1 = (function (){var statearr_78002 = state_77980;
(statearr_78002[(9)] = inst_77940__$1);

(statearr_78002[(14)] = inst_77939__$1);

return statearr_78002;
})();
if(cljs.core.truth_(inst_77943)){
var statearr_78003_78060 = state_77980__$1;
(statearr_78003_78060[(1)] = (23));

} else {
var statearr_78004_78061 = state_77980__$1;
(statearr_78004_78061[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (36))){
var inst_77930 = (state_77980[(12)]);
var inst_77908 = inst_77930;
var state_77980__$1 = (function (){var statearr_78005 = state_77980;
(statearr_78005[(7)] = inst_77908);

return statearr_78005;
})();
var statearr_78006_78062 = state_77980__$1;
(statearr_78006_78062[(2)] = null);

(statearr_78006_78062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (29))){
var inst_77954 = (state_77980[(11)]);
var state_77980__$1 = state_77980;
var statearr_78007_78063 = state_77980__$1;
(statearr_78007_78063[(2)] = inst_77954);

(statearr_78007_78063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (6))){
var state_77980__$1 = state_77980;
var statearr_78008_78064 = state_77980__$1;
(statearr_78008_78064[(2)] = false);

(statearr_78008_78064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (28))){
var inst_77950 = (state_77980[(2)]);
var inst_77951 = calc_state.call(null);
var inst_77908 = inst_77951;
var state_77980__$1 = (function (){var statearr_78009 = state_77980;
(statearr_78009[(15)] = inst_77950);

(statearr_78009[(7)] = inst_77908);

return statearr_78009;
})();
var statearr_78010_78065 = state_77980__$1;
(statearr_78010_78065[(2)] = null);

(statearr_78010_78065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (25))){
var inst_77976 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
var statearr_78011_78066 = state_77980__$1;
(statearr_78011_78066[(2)] = inst_77976);

(statearr_78011_78066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (34))){
var inst_77974 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
var statearr_78012_78067 = state_77980__$1;
(statearr_78012_78067[(2)] = inst_77974);

(statearr_78012_78067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (17))){
var state_77980__$1 = state_77980;
var statearr_78013_78068 = state_77980__$1;
(statearr_78013_78068[(2)] = false);

(statearr_78013_78068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (3))){
var state_77980__$1 = state_77980;
var statearr_78014_78069 = state_77980__$1;
(statearr_78014_78069[(2)] = false);

(statearr_78014_78069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (12))){
var inst_77978 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77980__$1,inst_77978);
} else {
if((state_val_77981 === (2))){
var inst_77884 = (state_77980[(8)]);
var inst_77889 = inst_77884.cljs$lang$protocol_mask$partition0$;
var inst_77890 = (inst_77889 & (64));
var inst_77891 = inst_77884.cljs$core$ISeq$;
var inst_77892 = (inst_77890) || (inst_77891);
var state_77980__$1 = state_77980;
if(cljs.core.truth_(inst_77892)){
var statearr_78015_78070 = state_77980__$1;
(statearr_78015_78070[(1)] = (5));

} else {
var statearr_78016_78071 = state_77980__$1;
(statearr_78016_78071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (23))){
var inst_77939 = (state_77980[(14)]);
var inst_77945 = (inst_77939 == null);
var state_77980__$1 = state_77980;
if(cljs.core.truth_(inst_77945)){
var statearr_78017_78072 = state_77980__$1;
(statearr_78017_78072[(1)] = (26));

} else {
var statearr_78018_78073 = state_77980__$1;
(statearr_78018_78073[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (35))){
var inst_77965 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
if(cljs.core.truth_(inst_77965)){
var statearr_78019_78074 = state_77980__$1;
(statearr_78019_78074[(1)] = (36));

} else {
var statearr_78020_78075 = state_77980__$1;
(statearr_78020_78075[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (19))){
var inst_77908 = (state_77980[(7)]);
var inst_77927 = cljs.core.apply.call(null,cljs.core.hash_map,inst_77908);
var state_77980__$1 = state_77980;
var statearr_78021_78076 = state_77980__$1;
(statearr_78021_78076[(2)] = inst_77927);

(statearr_78021_78076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (11))){
var inst_77908 = (state_77980[(7)]);
var inst_77912 = (inst_77908 == null);
var inst_77913 = cljs.core.not.call(null,inst_77912);
var state_77980__$1 = state_77980;
if(inst_77913){
var statearr_78022_78077 = state_77980__$1;
(statearr_78022_78077[(1)] = (13));

} else {
var statearr_78023_78078 = state_77980__$1;
(statearr_78023_78078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (9))){
var inst_77884 = (state_77980[(8)]);
var state_77980__$1 = state_77980;
var statearr_78024_78079 = state_77980__$1;
(statearr_78024_78079[(2)] = inst_77884);

(statearr_78024_78079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (5))){
var state_77980__$1 = state_77980;
var statearr_78025_78080 = state_77980__$1;
(statearr_78025_78080[(2)] = true);

(statearr_78025_78080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (14))){
var state_77980__$1 = state_77980;
var statearr_78026_78081 = state_77980__$1;
(statearr_78026_78081[(2)] = false);

(statearr_78026_78081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (26))){
var inst_77940 = (state_77980[(9)]);
var inst_77947 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_77940);
var state_77980__$1 = state_77980;
var statearr_78027_78082 = state_77980__$1;
(statearr_78027_78082[(2)] = inst_77947);

(statearr_78027_78082[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (16))){
var state_77980__$1 = state_77980;
var statearr_78028_78083 = state_77980__$1;
(statearr_78028_78083[(2)] = true);

(statearr_78028_78083[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (38))){
var inst_77970 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
var statearr_78029_78084 = state_77980__$1;
(statearr_78029_78084[(2)] = inst_77970);

(statearr_78029_78084[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (30))){
var inst_77940 = (state_77980[(9)]);
var inst_77932 = (state_77980[(13)]);
var inst_77931 = (state_77980[(10)]);
var inst_77957 = cljs.core.empty_QMARK_.call(null,inst_77931);
var inst_77958 = inst_77932.call(null,inst_77940);
var inst_77959 = cljs.core.not.call(null,inst_77958);
var inst_77960 = (inst_77957) && (inst_77959);
var state_77980__$1 = state_77980;
var statearr_78030_78085 = state_77980__$1;
(statearr_78030_78085[(2)] = inst_77960);

(statearr_78030_78085[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (10))){
var inst_77884 = (state_77980[(8)]);
var inst_77904 = (state_77980[(2)]);
var inst_77905 = cljs.core.get.call(null,inst_77904,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_77906 = cljs.core.get.call(null,inst_77904,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_77907 = cljs.core.get.call(null,inst_77904,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_77908 = inst_77884;
var state_77980__$1 = (function (){var statearr_78031 = state_77980;
(statearr_78031[(16)] = inst_77905);

(statearr_78031[(17)] = inst_77906);

(statearr_78031[(7)] = inst_77908);

(statearr_78031[(18)] = inst_77907);

return statearr_78031;
})();
var statearr_78032_78086 = state_77980__$1;
(statearr_78032_78086[(2)] = null);

(statearr_78032_78086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (18))){
var inst_77922 = (state_77980[(2)]);
var state_77980__$1 = state_77980;
var statearr_78033_78087 = state_77980__$1;
(statearr_78033_78087[(2)] = inst_77922);

(statearr_78033_78087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (37))){
var state_77980__$1 = state_77980;
var statearr_78034_78088 = state_77980__$1;
(statearr_78034_78088[(2)] = null);

(statearr_78034_78088[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77981 === (8))){
var inst_77884 = (state_77980[(8)]);
var inst_77901 = cljs.core.apply.call(null,cljs.core.hash_map,inst_77884);
var state_77980__$1 = state_77980;
var statearr_78035_78089 = state_77980__$1;
(statearr_78035_78089[(2)] = inst_77901);

(statearr_78035_78089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78043,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45890__auto__,c__46004__auto___78043,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45891__auto__ = null;
var cljs$core$async$mix_$_state_machine__45891__auto____0 = (function (){
var statearr_78039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78039[(0)] = cljs$core$async$mix_$_state_machine__45891__auto__);

(statearr_78039[(1)] = (1));

return statearr_78039;
});
var cljs$core$async$mix_$_state_machine__45891__auto____1 = (function (state_77980){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_77980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78040){if((e78040 instanceof Object)){
var ex__45894__auto__ = e78040;
var statearr_78041_78090 = state_77980;
(statearr_78041_78090[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78091 = state_77980;
state_77980 = G__78091;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45891__auto__ = function(state_77980){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45891__auto____1.call(this,state_77980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45891__auto____0;
cljs$core$async$mix_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45891__auto____1;
return cljs$core$async$mix_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78043,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46006__auto__ = (function (){var statearr_78042 = f__46005__auto__.call(null);
(statearr_78042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78043);

return statearr_78042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78043,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__42132__auto__ = (((p == null))?null:p);
var m__42133__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__42133__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__42132__auto__ = (((p == null))?null:p);
var m__42133__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,p,v,ch);
} else {
var m__42133__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args78092 = [];
var len__42602__auto___78095 = arguments.length;
var i__42603__auto___78096 = (0);
while(true){
if((i__42603__auto___78096 < len__42602__auto___78095)){
args78092.push((arguments[i__42603__auto___78096]));

var G__78097 = (i__42603__auto___78096 + (1));
i__42603__auto___78096 = G__78097;
continue;
} else {
}
break;
}

var G__78094 = args78092.length;
switch (G__78094) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78092.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__42132__auto__ = (((p == null))?null:p);
var m__42133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,p);
} else {
var m__42133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__42132__auto__ = (((p == null))?null:p);
var m__42133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42132__auto__)]);
if(!((m__42133__auto__ == null))){
return m__42133__auto__.call(null,p,v);
} else {
var m__42133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42133__auto____$1 == null))){
return m__42133__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args78100 = [];
var len__42602__auto___78225 = arguments.length;
var i__42603__auto___78226 = (0);
while(true){
if((i__42603__auto___78226 < len__42602__auto___78225)){
args78100.push((arguments[i__42603__auto___78226]));

var G__78227 = (i__42603__auto___78226 + (1));
i__42603__auto___78226 = G__78227;
continue;
} else {
}
break;
}

var G__78102 = args78100.length;
switch (G__78102) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78100.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41419__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41419__auto__,mults){
return (function (p1__78099_SHARP_){
if(cljs.core.truth_(p1__78099_SHARP_.call(null,topic))){
return p1__78099_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__78099_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41419__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async78103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78103 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta78104){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta78104 = meta78104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_78105,meta78104__$1){
var self__ = this;
var _78105__$1 = this;
return (new cljs.core.async.t_cljs$core$async78103(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta78104__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_78105){
var self__ = this;
var _78105__$1 = this;
return self__.meta78104;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6477__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6477__auto__)){
var m = temp__6477__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta78104","meta78104",-212354138,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async78103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78103";

cljs.core.async.t_cljs$core$async78103.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async78103");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async78103 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async78103(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta78104){
return (new cljs.core.async.t_cljs$core$async78103(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta78104));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async78103(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46004__auto___78229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78229,mults,ensure_mult,p){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78229,mults,ensure_mult,p){
return (function (state_78177){
var state_val_78178 = (state_78177[(1)]);
if((state_val_78178 === (7))){
var inst_78173 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
var statearr_78179_78230 = state_78177__$1;
(statearr_78179_78230[(2)] = inst_78173);

(statearr_78179_78230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (20))){
var state_78177__$1 = state_78177;
var statearr_78180_78231 = state_78177__$1;
(statearr_78180_78231[(2)] = null);

(statearr_78180_78231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (1))){
var state_78177__$1 = state_78177;
var statearr_78181_78232 = state_78177__$1;
(statearr_78181_78232[(2)] = null);

(statearr_78181_78232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (24))){
var inst_78156 = (state_78177[(7)]);
var inst_78165 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_78156);
var state_78177__$1 = state_78177;
var statearr_78182_78233 = state_78177__$1;
(statearr_78182_78233[(2)] = inst_78165);

(statearr_78182_78233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (4))){
var inst_78108 = (state_78177[(8)]);
var inst_78108__$1 = (state_78177[(2)]);
var inst_78109 = (inst_78108__$1 == null);
var state_78177__$1 = (function (){var statearr_78183 = state_78177;
(statearr_78183[(8)] = inst_78108__$1);

return statearr_78183;
})();
if(cljs.core.truth_(inst_78109)){
var statearr_78184_78234 = state_78177__$1;
(statearr_78184_78234[(1)] = (5));

} else {
var statearr_78185_78235 = state_78177__$1;
(statearr_78185_78235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (15))){
var inst_78150 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
var statearr_78186_78236 = state_78177__$1;
(statearr_78186_78236[(2)] = inst_78150);

(statearr_78186_78236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (21))){
var inst_78170 = (state_78177[(2)]);
var state_78177__$1 = (function (){var statearr_78187 = state_78177;
(statearr_78187[(9)] = inst_78170);

return statearr_78187;
})();
var statearr_78188_78237 = state_78177__$1;
(statearr_78188_78237[(2)] = null);

(statearr_78188_78237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (13))){
var inst_78132 = (state_78177[(10)]);
var inst_78134 = cljs.core.chunked_seq_QMARK_.call(null,inst_78132);
var state_78177__$1 = state_78177;
if(inst_78134){
var statearr_78189_78238 = state_78177__$1;
(statearr_78189_78238[(1)] = (16));

} else {
var statearr_78190_78239 = state_78177__$1;
(statearr_78190_78239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (22))){
var inst_78162 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
if(cljs.core.truth_(inst_78162)){
var statearr_78191_78240 = state_78177__$1;
(statearr_78191_78240[(1)] = (23));

} else {
var statearr_78192_78241 = state_78177__$1;
(statearr_78192_78241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (6))){
var inst_78156 = (state_78177[(7)]);
var inst_78158 = (state_78177[(11)]);
var inst_78108 = (state_78177[(8)]);
var inst_78156__$1 = topic_fn.call(null,inst_78108);
var inst_78157 = cljs.core.deref.call(null,mults);
var inst_78158__$1 = cljs.core.get.call(null,inst_78157,inst_78156__$1);
var state_78177__$1 = (function (){var statearr_78193 = state_78177;
(statearr_78193[(7)] = inst_78156__$1);

(statearr_78193[(11)] = inst_78158__$1);

return statearr_78193;
})();
if(cljs.core.truth_(inst_78158__$1)){
var statearr_78194_78242 = state_78177__$1;
(statearr_78194_78242[(1)] = (19));

} else {
var statearr_78195_78243 = state_78177__$1;
(statearr_78195_78243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (25))){
var inst_78167 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
var statearr_78196_78244 = state_78177__$1;
(statearr_78196_78244[(2)] = inst_78167);

(statearr_78196_78244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (17))){
var inst_78132 = (state_78177[(10)]);
var inst_78141 = cljs.core.first.call(null,inst_78132);
var inst_78142 = cljs.core.async.muxch_STAR_.call(null,inst_78141);
var inst_78143 = cljs.core.async.close_BANG_.call(null,inst_78142);
var inst_78144 = cljs.core.next.call(null,inst_78132);
var inst_78118 = inst_78144;
var inst_78119 = null;
var inst_78120 = (0);
var inst_78121 = (0);
var state_78177__$1 = (function (){var statearr_78197 = state_78177;
(statearr_78197[(12)] = inst_78119);

(statearr_78197[(13)] = inst_78118);

(statearr_78197[(14)] = inst_78143);

(statearr_78197[(15)] = inst_78121);

(statearr_78197[(16)] = inst_78120);

return statearr_78197;
})();
var statearr_78198_78245 = state_78177__$1;
(statearr_78198_78245[(2)] = null);

(statearr_78198_78245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (3))){
var inst_78175 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78177__$1,inst_78175);
} else {
if((state_val_78178 === (12))){
var inst_78152 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
var statearr_78199_78246 = state_78177__$1;
(statearr_78199_78246[(2)] = inst_78152);

(statearr_78199_78246[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (2))){
var state_78177__$1 = state_78177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78177__$1,(4),ch);
} else {
if((state_val_78178 === (23))){
var state_78177__$1 = state_78177;
var statearr_78200_78247 = state_78177__$1;
(statearr_78200_78247[(2)] = null);

(statearr_78200_78247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (19))){
var inst_78158 = (state_78177[(11)]);
var inst_78108 = (state_78177[(8)]);
var inst_78160 = cljs.core.async.muxch_STAR_.call(null,inst_78158);
var state_78177__$1 = state_78177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78177__$1,(22),inst_78160,inst_78108);
} else {
if((state_val_78178 === (11))){
var inst_78118 = (state_78177[(13)]);
var inst_78132 = (state_78177[(10)]);
var inst_78132__$1 = cljs.core.seq.call(null,inst_78118);
var state_78177__$1 = (function (){var statearr_78201 = state_78177;
(statearr_78201[(10)] = inst_78132__$1);

return statearr_78201;
})();
if(inst_78132__$1){
var statearr_78202_78248 = state_78177__$1;
(statearr_78202_78248[(1)] = (13));

} else {
var statearr_78203_78249 = state_78177__$1;
(statearr_78203_78249[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (9))){
var inst_78154 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
var statearr_78204_78250 = state_78177__$1;
(statearr_78204_78250[(2)] = inst_78154);

(statearr_78204_78250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (5))){
var inst_78115 = cljs.core.deref.call(null,mults);
var inst_78116 = cljs.core.vals.call(null,inst_78115);
var inst_78117 = cljs.core.seq.call(null,inst_78116);
var inst_78118 = inst_78117;
var inst_78119 = null;
var inst_78120 = (0);
var inst_78121 = (0);
var state_78177__$1 = (function (){var statearr_78205 = state_78177;
(statearr_78205[(12)] = inst_78119);

(statearr_78205[(13)] = inst_78118);

(statearr_78205[(15)] = inst_78121);

(statearr_78205[(16)] = inst_78120);

return statearr_78205;
})();
var statearr_78206_78251 = state_78177__$1;
(statearr_78206_78251[(2)] = null);

(statearr_78206_78251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (14))){
var state_78177__$1 = state_78177;
var statearr_78210_78252 = state_78177__$1;
(statearr_78210_78252[(2)] = null);

(statearr_78210_78252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (16))){
var inst_78132 = (state_78177[(10)]);
var inst_78136 = cljs.core.chunk_first.call(null,inst_78132);
var inst_78137 = cljs.core.chunk_rest.call(null,inst_78132);
var inst_78138 = cljs.core.count.call(null,inst_78136);
var inst_78118 = inst_78137;
var inst_78119 = inst_78136;
var inst_78120 = inst_78138;
var inst_78121 = (0);
var state_78177__$1 = (function (){var statearr_78211 = state_78177;
(statearr_78211[(12)] = inst_78119);

(statearr_78211[(13)] = inst_78118);

(statearr_78211[(15)] = inst_78121);

(statearr_78211[(16)] = inst_78120);

return statearr_78211;
})();
var statearr_78212_78253 = state_78177__$1;
(statearr_78212_78253[(2)] = null);

(statearr_78212_78253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (10))){
var inst_78119 = (state_78177[(12)]);
var inst_78118 = (state_78177[(13)]);
var inst_78121 = (state_78177[(15)]);
var inst_78120 = (state_78177[(16)]);
var inst_78126 = cljs.core._nth.call(null,inst_78119,inst_78121);
var inst_78127 = cljs.core.async.muxch_STAR_.call(null,inst_78126);
var inst_78128 = cljs.core.async.close_BANG_.call(null,inst_78127);
var inst_78129 = (inst_78121 + (1));
var tmp78207 = inst_78119;
var tmp78208 = inst_78118;
var tmp78209 = inst_78120;
var inst_78118__$1 = tmp78208;
var inst_78119__$1 = tmp78207;
var inst_78120__$1 = tmp78209;
var inst_78121__$1 = inst_78129;
var state_78177__$1 = (function (){var statearr_78213 = state_78177;
(statearr_78213[(12)] = inst_78119__$1);

(statearr_78213[(13)] = inst_78118__$1);

(statearr_78213[(17)] = inst_78128);

(statearr_78213[(15)] = inst_78121__$1);

(statearr_78213[(16)] = inst_78120__$1);

return statearr_78213;
})();
var statearr_78214_78254 = state_78177__$1;
(statearr_78214_78254[(2)] = null);

(statearr_78214_78254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (18))){
var inst_78147 = (state_78177[(2)]);
var state_78177__$1 = state_78177;
var statearr_78215_78255 = state_78177__$1;
(statearr_78215_78255[(2)] = inst_78147);

(statearr_78215_78255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78178 === (8))){
var inst_78121 = (state_78177[(15)]);
var inst_78120 = (state_78177[(16)]);
var inst_78123 = (inst_78121 < inst_78120);
var inst_78124 = inst_78123;
var state_78177__$1 = state_78177;
if(cljs.core.truth_(inst_78124)){
var statearr_78216_78256 = state_78177__$1;
(statearr_78216_78256[(1)] = (10));

} else {
var statearr_78217_78257 = state_78177__$1;
(statearr_78217_78257[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78229,mults,ensure_mult,p))
;
return ((function (switch__45890__auto__,c__46004__auto___78229,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_78221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78221[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_78221[(1)] = (1));

return statearr_78221;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_78177){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78222){if((e78222 instanceof Object)){
var ex__45894__auto__ = e78222;
var statearr_78223_78258 = state_78177;
(statearr_78223_78258[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78259 = state_78177;
state_78177 = G__78259;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_78177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_78177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78229,mults,ensure_mult,p))
})();
var state__46006__auto__ = (function (){var statearr_78224 = f__46005__auto__.call(null);
(statearr_78224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78229);

return statearr_78224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78229,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args78260 = [];
var len__42602__auto___78263 = arguments.length;
var i__42603__auto___78264 = (0);
while(true){
if((i__42603__auto___78264 < len__42602__auto___78263)){
args78260.push((arguments[i__42603__auto___78264]));

var G__78265 = (i__42603__auto___78264 + (1));
i__42603__auto___78264 = G__78265;
continue;
} else {
}
break;
}

var G__78262 = args78260.length;
switch (G__78262) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78260.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args78267 = [];
var len__42602__auto___78270 = arguments.length;
var i__42603__auto___78271 = (0);
while(true){
if((i__42603__auto___78271 < len__42602__auto___78270)){
args78267.push((arguments[i__42603__auto___78271]));

var G__78272 = (i__42603__auto___78271 + (1));
i__42603__auto___78271 = G__78272;
continue;
} else {
}
break;
}

var G__78269 = args78267.length;
switch (G__78269) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78267.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args78274 = [];
var len__42602__auto___78345 = arguments.length;
var i__42603__auto___78346 = (0);
while(true){
if((i__42603__auto___78346 < len__42602__auto___78345)){
args78274.push((arguments[i__42603__auto___78346]));

var G__78347 = (i__42603__auto___78346 + (1));
i__42603__auto___78346 = G__78347;
continue;
} else {
}
break;
}

var G__78276 = args78274.length;
switch (G__78276) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78274.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__46004__auto___78349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78349,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78349,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_78315){
var state_val_78316 = (state_78315[(1)]);
if((state_val_78316 === (7))){
var state_78315__$1 = state_78315;
var statearr_78317_78350 = state_78315__$1;
(statearr_78317_78350[(2)] = null);

(statearr_78317_78350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (1))){
var state_78315__$1 = state_78315;
var statearr_78318_78351 = state_78315__$1;
(statearr_78318_78351[(2)] = null);

(statearr_78318_78351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (4))){
var inst_78279 = (state_78315[(7)]);
var inst_78281 = (inst_78279 < cnt);
var state_78315__$1 = state_78315;
if(cljs.core.truth_(inst_78281)){
var statearr_78319_78352 = state_78315__$1;
(statearr_78319_78352[(1)] = (6));

} else {
var statearr_78320_78353 = state_78315__$1;
(statearr_78320_78353[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (15))){
var inst_78311 = (state_78315[(2)]);
var state_78315__$1 = state_78315;
var statearr_78321_78354 = state_78315__$1;
(statearr_78321_78354[(2)] = inst_78311);

(statearr_78321_78354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (13))){
var inst_78304 = cljs.core.async.close_BANG_.call(null,out);
var state_78315__$1 = state_78315;
var statearr_78322_78355 = state_78315__$1;
(statearr_78322_78355[(2)] = inst_78304);

(statearr_78322_78355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (6))){
var state_78315__$1 = state_78315;
var statearr_78323_78356 = state_78315__$1;
(statearr_78323_78356[(2)] = null);

(statearr_78323_78356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (3))){
var inst_78313 = (state_78315[(2)]);
var state_78315__$1 = state_78315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78315__$1,inst_78313);
} else {
if((state_val_78316 === (12))){
var inst_78301 = (state_78315[(8)]);
var inst_78301__$1 = (state_78315[(2)]);
var inst_78302 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_78301__$1);
var state_78315__$1 = (function (){var statearr_78324 = state_78315;
(statearr_78324[(8)] = inst_78301__$1);

return statearr_78324;
})();
if(cljs.core.truth_(inst_78302)){
var statearr_78325_78357 = state_78315__$1;
(statearr_78325_78357[(1)] = (13));

} else {
var statearr_78326_78358 = state_78315__$1;
(statearr_78326_78358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (2))){
var inst_78278 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_78279 = (0);
var state_78315__$1 = (function (){var statearr_78327 = state_78315;
(statearr_78327[(9)] = inst_78278);

(statearr_78327[(7)] = inst_78279);

return statearr_78327;
})();
var statearr_78328_78359 = state_78315__$1;
(statearr_78328_78359[(2)] = null);

(statearr_78328_78359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (11))){
var inst_78279 = (state_78315[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_78315,(10),Object,null,(9));
var inst_78288 = chs__$1.call(null,inst_78279);
var inst_78289 = done.call(null,inst_78279);
var inst_78290 = cljs.core.async.take_BANG_.call(null,inst_78288,inst_78289);
var state_78315__$1 = state_78315;
var statearr_78329_78360 = state_78315__$1;
(statearr_78329_78360[(2)] = inst_78290);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78315__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (9))){
var inst_78279 = (state_78315[(7)]);
var inst_78292 = (state_78315[(2)]);
var inst_78293 = (inst_78279 + (1));
var inst_78279__$1 = inst_78293;
var state_78315__$1 = (function (){var statearr_78330 = state_78315;
(statearr_78330[(7)] = inst_78279__$1);

(statearr_78330[(10)] = inst_78292);

return statearr_78330;
})();
var statearr_78331_78361 = state_78315__$1;
(statearr_78331_78361[(2)] = null);

(statearr_78331_78361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (5))){
var inst_78299 = (state_78315[(2)]);
var state_78315__$1 = (function (){var statearr_78332 = state_78315;
(statearr_78332[(11)] = inst_78299);

return statearr_78332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78315__$1,(12),dchan);
} else {
if((state_val_78316 === (14))){
var inst_78301 = (state_78315[(8)]);
var inst_78306 = cljs.core.apply.call(null,f,inst_78301);
var state_78315__$1 = state_78315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78315__$1,(16),out,inst_78306);
} else {
if((state_val_78316 === (16))){
var inst_78308 = (state_78315[(2)]);
var state_78315__$1 = (function (){var statearr_78333 = state_78315;
(statearr_78333[(12)] = inst_78308);

return statearr_78333;
})();
var statearr_78334_78362 = state_78315__$1;
(statearr_78334_78362[(2)] = null);

(statearr_78334_78362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (10))){
var inst_78283 = (state_78315[(2)]);
var inst_78284 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_78315__$1 = (function (){var statearr_78335 = state_78315;
(statearr_78335[(13)] = inst_78283);

return statearr_78335;
})();
var statearr_78336_78363 = state_78315__$1;
(statearr_78336_78363[(2)] = inst_78284);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78315__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78316 === (8))){
var inst_78297 = (state_78315[(2)]);
var state_78315__$1 = state_78315;
var statearr_78337_78364 = state_78315__$1;
(statearr_78337_78364[(2)] = inst_78297);

(statearr_78337_78364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78349,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45890__auto__,c__46004__auto___78349,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_78341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78341[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_78341[(1)] = (1));

return statearr_78341;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_78315){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78342){if((e78342 instanceof Object)){
var ex__45894__auto__ = e78342;
var statearr_78343_78365 = state_78315;
(statearr_78343_78365[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78366 = state_78315;
state_78315 = G__78366;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_78315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_78315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78349,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46006__auto__ = (function (){var statearr_78344 = f__46005__auto__.call(null);
(statearr_78344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78349);

return statearr_78344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78349,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args78368 = [];
var len__42602__auto___78426 = arguments.length;
var i__42603__auto___78427 = (0);
while(true){
if((i__42603__auto___78427 < len__42602__auto___78426)){
args78368.push((arguments[i__42603__auto___78427]));

var G__78428 = (i__42603__auto___78427 + (1));
i__42603__auto___78427 = G__78428;
continue;
} else {
}
break;
}

var G__78370 = args78368.length;
switch (G__78370) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78368.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46004__auto___78430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78430,out){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78430,out){
return (function (state_78402){
var state_val_78403 = (state_78402[(1)]);
if((state_val_78403 === (7))){
var inst_78381 = (state_78402[(7)]);
var inst_78382 = (state_78402[(8)]);
var inst_78381__$1 = (state_78402[(2)]);
var inst_78382__$1 = cljs.core.nth.call(null,inst_78381__$1,(0),null);
var inst_78383 = cljs.core.nth.call(null,inst_78381__$1,(1),null);
var inst_78384 = (inst_78382__$1 == null);
var state_78402__$1 = (function (){var statearr_78404 = state_78402;
(statearr_78404[(9)] = inst_78383);

(statearr_78404[(7)] = inst_78381__$1);

(statearr_78404[(8)] = inst_78382__$1);

return statearr_78404;
})();
if(cljs.core.truth_(inst_78384)){
var statearr_78405_78431 = state_78402__$1;
(statearr_78405_78431[(1)] = (8));

} else {
var statearr_78406_78432 = state_78402__$1;
(statearr_78406_78432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78403 === (1))){
var inst_78371 = cljs.core.vec.call(null,chs);
var inst_78372 = inst_78371;
var state_78402__$1 = (function (){var statearr_78407 = state_78402;
(statearr_78407[(10)] = inst_78372);

return statearr_78407;
})();
var statearr_78408_78433 = state_78402__$1;
(statearr_78408_78433[(2)] = null);

(statearr_78408_78433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78403 === (4))){
var inst_78372 = (state_78402[(10)]);
var state_78402__$1 = state_78402;
return cljs.core.async.ioc_alts_BANG_.call(null,state_78402__$1,(7),inst_78372);
} else {
if((state_val_78403 === (6))){
var inst_78398 = (state_78402[(2)]);
var state_78402__$1 = state_78402;
var statearr_78409_78434 = state_78402__$1;
(statearr_78409_78434[(2)] = inst_78398);

(statearr_78409_78434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78403 === (3))){
var inst_78400 = (state_78402[(2)]);
var state_78402__$1 = state_78402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78402__$1,inst_78400);
} else {
if((state_val_78403 === (2))){
var inst_78372 = (state_78402[(10)]);
var inst_78374 = cljs.core.count.call(null,inst_78372);
var inst_78375 = (inst_78374 > (0));
var state_78402__$1 = state_78402;
if(cljs.core.truth_(inst_78375)){
var statearr_78411_78435 = state_78402__$1;
(statearr_78411_78435[(1)] = (4));

} else {
var statearr_78412_78436 = state_78402__$1;
(statearr_78412_78436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78403 === (11))){
var inst_78372 = (state_78402[(10)]);
var inst_78391 = (state_78402[(2)]);
var tmp78410 = inst_78372;
var inst_78372__$1 = tmp78410;
var state_78402__$1 = (function (){var statearr_78413 = state_78402;
(statearr_78413[(11)] = inst_78391);

(statearr_78413[(10)] = inst_78372__$1);

return statearr_78413;
})();
var statearr_78414_78437 = state_78402__$1;
(statearr_78414_78437[(2)] = null);

(statearr_78414_78437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78403 === (9))){
var inst_78382 = (state_78402[(8)]);
var state_78402__$1 = state_78402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78402__$1,(11),out,inst_78382);
} else {
if((state_val_78403 === (5))){
var inst_78396 = cljs.core.async.close_BANG_.call(null,out);
var state_78402__$1 = state_78402;
var statearr_78415_78438 = state_78402__$1;
(statearr_78415_78438[(2)] = inst_78396);

(statearr_78415_78438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78403 === (10))){
var inst_78394 = (state_78402[(2)]);
var state_78402__$1 = state_78402;
var statearr_78416_78439 = state_78402__$1;
(statearr_78416_78439[(2)] = inst_78394);

(statearr_78416_78439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78403 === (8))){
var inst_78383 = (state_78402[(9)]);
var inst_78381 = (state_78402[(7)]);
var inst_78372 = (state_78402[(10)]);
var inst_78382 = (state_78402[(8)]);
var inst_78386 = (function (){var cs = inst_78372;
var vec__78377 = inst_78381;
var v = inst_78382;
var c = inst_78383;
return ((function (cs,vec__78377,v,c,inst_78383,inst_78381,inst_78372,inst_78382,state_val_78403,c__46004__auto___78430,out){
return (function (p1__78367_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__78367_SHARP_);
});
;})(cs,vec__78377,v,c,inst_78383,inst_78381,inst_78372,inst_78382,state_val_78403,c__46004__auto___78430,out))
})();
var inst_78387 = cljs.core.filterv.call(null,inst_78386,inst_78372);
var inst_78372__$1 = inst_78387;
var state_78402__$1 = (function (){var statearr_78417 = state_78402;
(statearr_78417[(10)] = inst_78372__$1);

return statearr_78417;
})();
var statearr_78418_78440 = state_78402__$1;
(statearr_78418_78440[(2)] = null);

(statearr_78418_78440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78430,out))
;
return ((function (switch__45890__auto__,c__46004__auto___78430,out){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_78422 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78422[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_78422[(1)] = (1));

return statearr_78422;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_78402){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78423){if((e78423 instanceof Object)){
var ex__45894__auto__ = e78423;
var statearr_78424_78441 = state_78402;
(statearr_78424_78441[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78442 = state_78402;
state_78402 = G__78442;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_78402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_78402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78430,out))
})();
var state__46006__auto__ = (function (){var statearr_78425 = f__46005__auto__.call(null);
(statearr_78425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78430);

return statearr_78425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78430,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args78443 = [];
var len__42602__auto___78492 = arguments.length;
var i__42603__auto___78493 = (0);
while(true){
if((i__42603__auto___78493 < len__42602__auto___78492)){
args78443.push((arguments[i__42603__auto___78493]));

var G__78494 = (i__42603__auto___78493 + (1));
i__42603__auto___78493 = G__78494;
continue;
} else {
}
break;
}

var G__78445 = args78443.length;
switch (G__78445) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78443.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46004__auto___78496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78496,out){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78496,out){
return (function (state_78469){
var state_val_78470 = (state_78469[(1)]);
if((state_val_78470 === (7))){
var inst_78451 = (state_78469[(7)]);
var inst_78451__$1 = (state_78469[(2)]);
var inst_78452 = (inst_78451__$1 == null);
var inst_78453 = cljs.core.not.call(null,inst_78452);
var state_78469__$1 = (function (){var statearr_78471 = state_78469;
(statearr_78471[(7)] = inst_78451__$1);

return statearr_78471;
})();
if(inst_78453){
var statearr_78472_78497 = state_78469__$1;
(statearr_78472_78497[(1)] = (8));

} else {
var statearr_78473_78498 = state_78469__$1;
(statearr_78473_78498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (1))){
var inst_78446 = (0);
var state_78469__$1 = (function (){var statearr_78474 = state_78469;
(statearr_78474[(8)] = inst_78446);

return statearr_78474;
})();
var statearr_78475_78499 = state_78469__$1;
(statearr_78475_78499[(2)] = null);

(statearr_78475_78499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (4))){
var state_78469__$1 = state_78469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78469__$1,(7),ch);
} else {
if((state_val_78470 === (6))){
var inst_78464 = (state_78469[(2)]);
var state_78469__$1 = state_78469;
var statearr_78476_78500 = state_78469__$1;
(statearr_78476_78500[(2)] = inst_78464);

(statearr_78476_78500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (3))){
var inst_78466 = (state_78469[(2)]);
var inst_78467 = cljs.core.async.close_BANG_.call(null,out);
var state_78469__$1 = (function (){var statearr_78477 = state_78469;
(statearr_78477[(9)] = inst_78466);

return statearr_78477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78469__$1,inst_78467);
} else {
if((state_val_78470 === (2))){
var inst_78446 = (state_78469[(8)]);
var inst_78448 = (inst_78446 < n);
var state_78469__$1 = state_78469;
if(cljs.core.truth_(inst_78448)){
var statearr_78478_78501 = state_78469__$1;
(statearr_78478_78501[(1)] = (4));

} else {
var statearr_78479_78502 = state_78469__$1;
(statearr_78479_78502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (11))){
var inst_78446 = (state_78469[(8)]);
var inst_78456 = (state_78469[(2)]);
var inst_78457 = (inst_78446 + (1));
var inst_78446__$1 = inst_78457;
var state_78469__$1 = (function (){var statearr_78480 = state_78469;
(statearr_78480[(8)] = inst_78446__$1);

(statearr_78480[(10)] = inst_78456);

return statearr_78480;
})();
var statearr_78481_78503 = state_78469__$1;
(statearr_78481_78503[(2)] = null);

(statearr_78481_78503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (9))){
var state_78469__$1 = state_78469;
var statearr_78482_78504 = state_78469__$1;
(statearr_78482_78504[(2)] = null);

(statearr_78482_78504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (5))){
var state_78469__$1 = state_78469;
var statearr_78483_78505 = state_78469__$1;
(statearr_78483_78505[(2)] = null);

(statearr_78483_78505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (10))){
var inst_78461 = (state_78469[(2)]);
var state_78469__$1 = state_78469;
var statearr_78484_78506 = state_78469__$1;
(statearr_78484_78506[(2)] = inst_78461);

(statearr_78484_78506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78470 === (8))){
var inst_78451 = (state_78469[(7)]);
var state_78469__$1 = state_78469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78469__$1,(11),out,inst_78451);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78496,out))
;
return ((function (switch__45890__auto__,c__46004__auto___78496,out){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_78488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78488[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_78488[(1)] = (1));

return statearr_78488;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_78469){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78489){if((e78489 instanceof Object)){
var ex__45894__auto__ = e78489;
var statearr_78490_78507 = state_78469;
(statearr_78490_78507[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78508 = state_78469;
state_78469 = G__78508;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_78469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_78469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78496,out))
})();
var state__46006__auto__ = (function (){var statearr_78491 = f__46005__auto__.call(null);
(statearr_78491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78496);

return statearr_78491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78496,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async78516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78516 = (function (map_LT_,f,ch,meta78517){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta78517 = meta78517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78518,meta78517__$1){
var self__ = this;
var _78518__$1 = this;
return (new cljs.core.async.t_cljs$core$async78516(self__.map_LT_,self__.f,self__.ch,meta78517__$1));
});

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78518){
var self__ = this;
var _78518__$1 = this;
return self__.meta78517;
});

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async78519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78519 = (function (map_LT_,f,ch,meta78517,_,fn1,meta78520){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta78517 = meta78517;
this._ = _;
this.fn1 = fn1;
this.meta78520 = meta78520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_78521,meta78520__$1){
var self__ = this;
var _78521__$1 = this;
return (new cljs.core.async.t_cljs$core$async78519(self__.map_LT_,self__.f,self__.ch,self__.meta78517,self__._,self__.fn1,meta78520__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async78519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_78521){
var self__ = this;
var _78521__$1 = this;
return self__.meta78520;
});})(___$1))
;

cljs.core.async.t_cljs$core$async78519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async78519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async78519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async78519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__78509_SHARP_){
return f1.call(null,(((p1__78509_SHARP_ == null))?null:self__.f.call(null,p1__78509_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async78519.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta78517","meta78517",-580983730,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async78516","cljs.core.async/t_cljs$core$async78516",194801358,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta78520","meta78520",-1872165200,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async78519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78519";

cljs.core.async.t_cljs$core$async78519.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async78519");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async78519 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async78519(map_LT___$1,f__$1,ch__$1,meta78517__$1,___$2,fn1__$1,meta78520){
return (new cljs.core.async.t_cljs$core$async78519(map_LT___$1,f__$1,ch__$1,meta78517__$1,___$2,fn1__$1,meta78520));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async78519(self__.map_LT_,self__.f,self__.ch,self__.meta78517,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41407__auto__ = ret;
if(cljs.core.truth_(and__41407__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41407__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async78516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async78516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta78517","meta78517",-580983730,null)], null);
});

cljs.core.async.t_cljs$core$async78516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78516";

cljs.core.async.t_cljs$core$async78516.cljs$lang$ctorPrWriter = (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async78516");
});

cljs.core.async.__GT_t_cljs$core$async78516 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async78516(map_LT___$1,f__$1,ch__$1,meta78517){
return (new cljs.core.async.t_cljs$core$async78516(map_LT___$1,f__$1,ch__$1,meta78517));
});

}

return (new cljs.core.async.t_cljs$core$async78516(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async78525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78525 = (function (map_GT_,f,ch,meta78526){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta78526 = meta78526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78527,meta78526__$1){
var self__ = this;
var _78527__$1 = this;
return (new cljs.core.async.t_cljs$core$async78525(self__.map_GT_,self__.f,self__.ch,meta78526__$1));
});

cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78527){
var self__ = this;
var _78527__$1 = this;
return self__.meta78526;
});

cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async78525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async78525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta78526","meta78526",-1937283790,null)], null);
});

cljs.core.async.t_cljs$core$async78525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78525";

cljs.core.async.t_cljs$core$async78525.cljs$lang$ctorPrWriter = (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async78525");
});

cljs.core.async.__GT_t_cljs$core$async78525 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async78525(map_GT___$1,f__$1,ch__$1,meta78526){
return (new cljs.core.async.t_cljs$core$async78525(map_GT___$1,f__$1,ch__$1,meta78526));
});

}

return (new cljs.core.async.t_cljs$core$async78525(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async78531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78531 = (function (filter_GT_,p,ch,meta78532){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta78532 = meta78532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78533,meta78532__$1){
var self__ = this;
var _78533__$1 = this;
return (new cljs.core.async.t_cljs$core$async78531(self__.filter_GT_,self__.p,self__.ch,meta78532__$1));
});

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78533){
var self__ = this;
var _78533__$1 = this;
return self__.meta78532;
});

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async78531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async78531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta78532","meta78532",-601379516,null)], null);
});

cljs.core.async.t_cljs$core$async78531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async78531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78531";

cljs.core.async.t_cljs$core$async78531.cljs$lang$ctorPrWriter = (function (this__42071__auto__,writer__42072__auto__,opt__42073__auto__){
return cljs.core._write.call(null,writer__42072__auto__,"cljs.core.async/t_cljs$core$async78531");
});

cljs.core.async.__GT_t_cljs$core$async78531 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async78531(filter_GT___$1,p__$1,ch__$1,meta78532){
return (new cljs.core.async.t_cljs$core$async78531(filter_GT___$1,p__$1,ch__$1,meta78532));
});

}

return (new cljs.core.async.t_cljs$core$async78531(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args78534 = [];
var len__42602__auto___78578 = arguments.length;
var i__42603__auto___78579 = (0);
while(true){
if((i__42603__auto___78579 < len__42602__auto___78578)){
args78534.push((arguments[i__42603__auto___78579]));

var G__78580 = (i__42603__auto___78579 + (1));
i__42603__auto___78579 = G__78580;
continue;
} else {
}
break;
}

var G__78536 = args78534.length;
switch (G__78536) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78534.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46004__auto___78582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78582,out){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78582,out){
return (function (state_78557){
var state_val_78558 = (state_78557[(1)]);
if((state_val_78558 === (7))){
var inst_78553 = (state_78557[(2)]);
var state_78557__$1 = state_78557;
var statearr_78559_78583 = state_78557__$1;
(statearr_78559_78583[(2)] = inst_78553);

(statearr_78559_78583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (1))){
var state_78557__$1 = state_78557;
var statearr_78560_78584 = state_78557__$1;
(statearr_78560_78584[(2)] = null);

(statearr_78560_78584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (4))){
var inst_78539 = (state_78557[(7)]);
var inst_78539__$1 = (state_78557[(2)]);
var inst_78540 = (inst_78539__$1 == null);
var state_78557__$1 = (function (){var statearr_78561 = state_78557;
(statearr_78561[(7)] = inst_78539__$1);

return statearr_78561;
})();
if(cljs.core.truth_(inst_78540)){
var statearr_78562_78585 = state_78557__$1;
(statearr_78562_78585[(1)] = (5));

} else {
var statearr_78563_78586 = state_78557__$1;
(statearr_78563_78586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (6))){
var inst_78539 = (state_78557[(7)]);
var inst_78544 = p.call(null,inst_78539);
var state_78557__$1 = state_78557;
if(cljs.core.truth_(inst_78544)){
var statearr_78564_78587 = state_78557__$1;
(statearr_78564_78587[(1)] = (8));

} else {
var statearr_78565_78588 = state_78557__$1;
(statearr_78565_78588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (3))){
var inst_78555 = (state_78557[(2)]);
var state_78557__$1 = state_78557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78557__$1,inst_78555);
} else {
if((state_val_78558 === (2))){
var state_78557__$1 = state_78557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78557__$1,(4),ch);
} else {
if((state_val_78558 === (11))){
var inst_78547 = (state_78557[(2)]);
var state_78557__$1 = state_78557;
var statearr_78566_78589 = state_78557__$1;
(statearr_78566_78589[(2)] = inst_78547);

(statearr_78566_78589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (9))){
var state_78557__$1 = state_78557;
var statearr_78567_78590 = state_78557__$1;
(statearr_78567_78590[(2)] = null);

(statearr_78567_78590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (5))){
var inst_78542 = cljs.core.async.close_BANG_.call(null,out);
var state_78557__$1 = state_78557;
var statearr_78568_78591 = state_78557__$1;
(statearr_78568_78591[(2)] = inst_78542);

(statearr_78568_78591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (10))){
var inst_78550 = (state_78557[(2)]);
var state_78557__$1 = (function (){var statearr_78569 = state_78557;
(statearr_78569[(8)] = inst_78550);

return statearr_78569;
})();
var statearr_78570_78592 = state_78557__$1;
(statearr_78570_78592[(2)] = null);

(statearr_78570_78592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78558 === (8))){
var inst_78539 = (state_78557[(7)]);
var state_78557__$1 = state_78557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78557__$1,(11),out,inst_78539);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78582,out))
;
return ((function (switch__45890__auto__,c__46004__auto___78582,out){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_78574 = [null,null,null,null,null,null,null,null,null];
(statearr_78574[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_78574[(1)] = (1));

return statearr_78574;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_78557){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78575){if((e78575 instanceof Object)){
var ex__45894__auto__ = e78575;
var statearr_78576_78593 = state_78557;
(statearr_78576_78593[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78594 = state_78557;
state_78557 = G__78594;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_78557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_78557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78582,out))
})();
var state__46006__auto__ = (function (){var statearr_78577 = f__46005__auto__.call(null);
(statearr_78577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78582);

return statearr_78577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78582,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args78595 = [];
var len__42602__auto___78598 = arguments.length;
var i__42603__auto___78599 = (0);
while(true){
if((i__42603__auto___78599 < len__42602__auto___78598)){
args78595.push((arguments[i__42603__auto___78599]));

var G__78600 = (i__42603__auto___78599 + (1));
i__42603__auto___78599 = G__78600;
continue;
} else {
}
break;
}

var G__78597 = args78595.length;
switch (G__78597) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78595.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__){
return (function (state_78767){
var state_val_78768 = (state_78767[(1)]);
if((state_val_78768 === (7))){
var inst_78763 = (state_78767[(2)]);
var state_78767__$1 = state_78767;
var statearr_78769_78810 = state_78767__$1;
(statearr_78769_78810[(2)] = inst_78763);

(statearr_78769_78810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (20))){
var inst_78733 = (state_78767[(7)]);
var inst_78744 = (state_78767[(2)]);
var inst_78745 = cljs.core.next.call(null,inst_78733);
var inst_78719 = inst_78745;
var inst_78720 = null;
var inst_78721 = (0);
var inst_78722 = (0);
var state_78767__$1 = (function (){var statearr_78770 = state_78767;
(statearr_78770[(8)] = inst_78720);

(statearr_78770[(9)] = inst_78722);

(statearr_78770[(10)] = inst_78744);

(statearr_78770[(11)] = inst_78721);

(statearr_78770[(12)] = inst_78719);

return statearr_78770;
})();
var statearr_78771_78811 = state_78767__$1;
(statearr_78771_78811[(2)] = null);

(statearr_78771_78811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (1))){
var state_78767__$1 = state_78767;
var statearr_78772_78812 = state_78767__$1;
(statearr_78772_78812[(2)] = null);

(statearr_78772_78812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (4))){
var inst_78708 = (state_78767[(13)]);
var inst_78708__$1 = (state_78767[(2)]);
var inst_78709 = (inst_78708__$1 == null);
var state_78767__$1 = (function (){var statearr_78773 = state_78767;
(statearr_78773[(13)] = inst_78708__$1);

return statearr_78773;
})();
if(cljs.core.truth_(inst_78709)){
var statearr_78774_78813 = state_78767__$1;
(statearr_78774_78813[(1)] = (5));

} else {
var statearr_78775_78814 = state_78767__$1;
(statearr_78775_78814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (15))){
var state_78767__$1 = state_78767;
var statearr_78779_78815 = state_78767__$1;
(statearr_78779_78815[(2)] = null);

(statearr_78779_78815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (21))){
var state_78767__$1 = state_78767;
var statearr_78780_78816 = state_78767__$1;
(statearr_78780_78816[(2)] = null);

(statearr_78780_78816[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (13))){
var inst_78720 = (state_78767[(8)]);
var inst_78722 = (state_78767[(9)]);
var inst_78721 = (state_78767[(11)]);
var inst_78719 = (state_78767[(12)]);
var inst_78729 = (state_78767[(2)]);
var inst_78730 = (inst_78722 + (1));
var tmp78776 = inst_78720;
var tmp78777 = inst_78721;
var tmp78778 = inst_78719;
var inst_78719__$1 = tmp78778;
var inst_78720__$1 = tmp78776;
var inst_78721__$1 = tmp78777;
var inst_78722__$1 = inst_78730;
var state_78767__$1 = (function (){var statearr_78781 = state_78767;
(statearr_78781[(8)] = inst_78720__$1);

(statearr_78781[(14)] = inst_78729);

(statearr_78781[(9)] = inst_78722__$1);

(statearr_78781[(11)] = inst_78721__$1);

(statearr_78781[(12)] = inst_78719__$1);

return statearr_78781;
})();
var statearr_78782_78817 = state_78767__$1;
(statearr_78782_78817[(2)] = null);

(statearr_78782_78817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (22))){
var state_78767__$1 = state_78767;
var statearr_78783_78818 = state_78767__$1;
(statearr_78783_78818[(2)] = null);

(statearr_78783_78818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (6))){
var inst_78708 = (state_78767[(13)]);
var inst_78717 = f.call(null,inst_78708);
var inst_78718 = cljs.core.seq.call(null,inst_78717);
var inst_78719 = inst_78718;
var inst_78720 = null;
var inst_78721 = (0);
var inst_78722 = (0);
var state_78767__$1 = (function (){var statearr_78784 = state_78767;
(statearr_78784[(8)] = inst_78720);

(statearr_78784[(9)] = inst_78722);

(statearr_78784[(11)] = inst_78721);

(statearr_78784[(12)] = inst_78719);

return statearr_78784;
})();
var statearr_78785_78819 = state_78767__$1;
(statearr_78785_78819[(2)] = null);

(statearr_78785_78819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (17))){
var inst_78733 = (state_78767[(7)]);
var inst_78737 = cljs.core.chunk_first.call(null,inst_78733);
var inst_78738 = cljs.core.chunk_rest.call(null,inst_78733);
var inst_78739 = cljs.core.count.call(null,inst_78737);
var inst_78719 = inst_78738;
var inst_78720 = inst_78737;
var inst_78721 = inst_78739;
var inst_78722 = (0);
var state_78767__$1 = (function (){var statearr_78786 = state_78767;
(statearr_78786[(8)] = inst_78720);

(statearr_78786[(9)] = inst_78722);

(statearr_78786[(11)] = inst_78721);

(statearr_78786[(12)] = inst_78719);

return statearr_78786;
})();
var statearr_78787_78820 = state_78767__$1;
(statearr_78787_78820[(2)] = null);

(statearr_78787_78820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (3))){
var inst_78765 = (state_78767[(2)]);
var state_78767__$1 = state_78767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78767__$1,inst_78765);
} else {
if((state_val_78768 === (12))){
var inst_78753 = (state_78767[(2)]);
var state_78767__$1 = state_78767;
var statearr_78788_78821 = state_78767__$1;
(statearr_78788_78821[(2)] = inst_78753);

(statearr_78788_78821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (2))){
var state_78767__$1 = state_78767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78767__$1,(4),in$);
} else {
if((state_val_78768 === (23))){
var inst_78761 = (state_78767[(2)]);
var state_78767__$1 = state_78767;
var statearr_78789_78822 = state_78767__$1;
(statearr_78789_78822[(2)] = inst_78761);

(statearr_78789_78822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (19))){
var inst_78748 = (state_78767[(2)]);
var state_78767__$1 = state_78767;
var statearr_78790_78823 = state_78767__$1;
(statearr_78790_78823[(2)] = inst_78748);

(statearr_78790_78823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (11))){
var inst_78733 = (state_78767[(7)]);
var inst_78719 = (state_78767[(12)]);
var inst_78733__$1 = cljs.core.seq.call(null,inst_78719);
var state_78767__$1 = (function (){var statearr_78791 = state_78767;
(statearr_78791[(7)] = inst_78733__$1);

return statearr_78791;
})();
if(inst_78733__$1){
var statearr_78792_78824 = state_78767__$1;
(statearr_78792_78824[(1)] = (14));

} else {
var statearr_78793_78825 = state_78767__$1;
(statearr_78793_78825[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (9))){
var inst_78755 = (state_78767[(2)]);
var inst_78756 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_78767__$1 = (function (){var statearr_78794 = state_78767;
(statearr_78794[(15)] = inst_78755);

return statearr_78794;
})();
if(cljs.core.truth_(inst_78756)){
var statearr_78795_78826 = state_78767__$1;
(statearr_78795_78826[(1)] = (21));

} else {
var statearr_78796_78827 = state_78767__$1;
(statearr_78796_78827[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (5))){
var inst_78711 = cljs.core.async.close_BANG_.call(null,out);
var state_78767__$1 = state_78767;
var statearr_78797_78828 = state_78767__$1;
(statearr_78797_78828[(2)] = inst_78711);

(statearr_78797_78828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (14))){
var inst_78733 = (state_78767[(7)]);
var inst_78735 = cljs.core.chunked_seq_QMARK_.call(null,inst_78733);
var state_78767__$1 = state_78767;
if(inst_78735){
var statearr_78798_78829 = state_78767__$1;
(statearr_78798_78829[(1)] = (17));

} else {
var statearr_78799_78830 = state_78767__$1;
(statearr_78799_78830[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (16))){
var inst_78751 = (state_78767[(2)]);
var state_78767__$1 = state_78767;
var statearr_78800_78831 = state_78767__$1;
(statearr_78800_78831[(2)] = inst_78751);

(statearr_78800_78831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78768 === (10))){
var inst_78720 = (state_78767[(8)]);
var inst_78722 = (state_78767[(9)]);
var inst_78727 = cljs.core._nth.call(null,inst_78720,inst_78722);
var state_78767__$1 = state_78767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78767__$1,(13),out,inst_78727);
} else {
if((state_val_78768 === (18))){
var inst_78733 = (state_78767[(7)]);
var inst_78742 = cljs.core.first.call(null,inst_78733);
var state_78767__$1 = state_78767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78767__$1,(20),out,inst_78742);
} else {
if((state_val_78768 === (8))){
var inst_78722 = (state_78767[(9)]);
var inst_78721 = (state_78767[(11)]);
var inst_78724 = (inst_78722 < inst_78721);
var inst_78725 = inst_78724;
var state_78767__$1 = state_78767;
if(cljs.core.truth_(inst_78725)){
var statearr_78801_78832 = state_78767__$1;
(statearr_78801_78832[(1)] = (10));

} else {
var statearr_78802_78833 = state_78767__$1;
(statearr_78802_78833[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto__))
;
return ((function (switch__45890__auto__,c__46004__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45891__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45891__auto____0 = (function (){
var statearr_78806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78806[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45891__auto__);

(statearr_78806[(1)] = (1));

return statearr_78806;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45891__auto____1 = (function (state_78767){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78807){if((e78807 instanceof Object)){
var ex__45894__auto__ = e78807;
var statearr_78808_78834 = state_78767;
(statearr_78808_78834[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78835 = state_78767;
state_78767 = G__78835;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45891__auto__ = function(state_78767){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45891__auto____1.call(this,state_78767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45891__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45891__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__))
})();
var state__46006__auto__ = (function (){var statearr_78809 = f__46005__auto__.call(null);
(statearr_78809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_78809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__))
);

return c__46004__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args78836 = [];
var len__42602__auto___78839 = arguments.length;
var i__42603__auto___78840 = (0);
while(true){
if((i__42603__auto___78840 < len__42602__auto___78839)){
args78836.push((arguments[i__42603__auto___78840]));

var G__78841 = (i__42603__auto___78840 + (1));
i__42603__auto___78840 = G__78841;
continue;
} else {
}
break;
}

var G__78838 = args78836.length;
switch (G__78838) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78836.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args78843 = [];
var len__42602__auto___78846 = arguments.length;
var i__42603__auto___78847 = (0);
while(true){
if((i__42603__auto___78847 < len__42602__auto___78846)){
args78843.push((arguments[i__42603__auto___78847]));

var G__78848 = (i__42603__auto___78847 + (1));
i__42603__auto___78847 = G__78848;
continue;
} else {
}
break;
}

var G__78845 = args78843.length;
switch (G__78845) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78843.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args78850 = [];
var len__42602__auto___78901 = arguments.length;
var i__42603__auto___78902 = (0);
while(true){
if((i__42603__auto___78902 < len__42602__auto___78901)){
args78850.push((arguments[i__42603__auto___78902]));

var G__78903 = (i__42603__auto___78902 + (1));
i__42603__auto___78902 = G__78903;
continue;
} else {
}
break;
}

var G__78852 = args78850.length;
switch (G__78852) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78850.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46004__auto___78905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78905,out){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78905,out){
return (function (state_78876){
var state_val_78877 = (state_78876[(1)]);
if((state_val_78877 === (7))){
var inst_78871 = (state_78876[(2)]);
var state_78876__$1 = state_78876;
var statearr_78878_78906 = state_78876__$1;
(statearr_78878_78906[(2)] = inst_78871);

(statearr_78878_78906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78877 === (1))){
var inst_78853 = null;
var state_78876__$1 = (function (){var statearr_78879 = state_78876;
(statearr_78879[(7)] = inst_78853);

return statearr_78879;
})();
var statearr_78880_78907 = state_78876__$1;
(statearr_78880_78907[(2)] = null);

(statearr_78880_78907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78877 === (4))){
var inst_78856 = (state_78876[(8)]);
var inst_78856__$1 = (state_78876[(2)]);
var inst_78857 = (inst_78856__$1 == null);
var inst_78858 = cljs.core.not.call(null,inst_78857);
var state_78876__$1 = (function (){var statearr_78881 = state_78876;
(statearr_78881[(8)] = inst_78856__$1);

return statearr_78881;
})();
if(inst_78858){
var statearr_78882_78908 = state_78876__$1;
(statearr_78882_78908[(1)] = (5));

} else {
var statearr_78883_78909 = state_78876__$1;
(statearr_78883_78909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78877 === (6))){
var state_78876__$1 = state_78876;
var statearr_78884_78910 = state_78876__$1;
(statearr_78884_78910[(2)] = null);

(statearr_78884_78910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78877 === (3))){
var inst_78873 = (state_78876[(2)]);
var inst_78874 = cljs.core.async.close_BANG_.call(null,out);
var state_78876__$1 = (function (){var statearr_78885 = state_78876;
(statearr_78885[(9)] = inst_78873);

return statearr_78885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78876__$1,inst_78874);
} else {
if((state_val_78877 === (2))){
var state_78876__$1 = state_78876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78876__$1,(4),ch);
} else {
if((state_val_78877 === (11))){
var inst_78856 = (state_78876[(8)]);
var inst_78865 = (state_78876[(2)]);
var inst_78853 = inst_78856;
var state_78876__$1 = (function (){var statearr_78886 = state_78876;
(statearr_78886[(7)] = inst_78853);

(statearr_78886[(10)] = inst_78865);

return statearr_78886;
})();
var statearr_78887_78911 = state_78876__$1;
(statearr_78887_78911[(2)] = null);

(statearr_78887_78911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78877 === (9))){
var inst_78856 = (state_78876[(8)]);
var state_78876__$1 = state_78876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78876__$1,(11),out,inst_78856);
} else {
if((state_val_78877 === (5))){
var inst_78853 = (state_78876[(7)]);
var inst_78856 = (state_78876[(8)]);
var inst_78860 = cljs.core._EQ_.call(null,inst_78856,inst_78853);
var state_78876__$1 = state_78876;
if(inst_78860){
var statearr_78889_78912 = state_78876__$1;
(statearr_78889_78912[(1)] = (8));

} else {
var statearr_78890_78913 = state_78876__$1;
(statearr_78890_78913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78877 === (10))){
var inst_78868 = (state_78876[(2)]);
var state_78876__$1 = state_78876;
var statearr_78891_78914 = state_78876__$1;
(statearr_78891_78914[(2)] = inst_78868);

(statearr_78891_78914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78877 === (8))){
var inst_78853 = (state_78876[(7)]);
var tmp78888 = inst_78853;
var inst_78853__$1 = tmp78888;
var state_78876__$1 = (function (){var statearr_78892 = state_78876;
(statearr_78892[(7)] = inst_78853__$1);

return statearr_78892;
})();
var statearr_78893_78915 = state_78876__$1;
(statearr_78893_78915[(2)] = null);

(statearr_78893_78915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78905,out))
;
return ((function (switch__45890__auto__,c__46004__auto___78905,out){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_78897 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78897[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_78897[(1)] = (1));

return statearr_78897;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_78876){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78898){if((e78898 instanceof Object)){
var ex__45894__auto__ = e78898;
var statearr_78899_78916 = state_78876;
(statearr_78899_78916[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78917 = state_78876;
state_78876 = G__78917;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_78876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_78876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78905,out))
})();
var state__46006__auto__ = (function (){var statearr_78900 = f__46005__auto__.call(null);
(statearr_78900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78905);

return statearr_78900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78905,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args78918 = [];
var len__42602__auto___78988 = arguments.length;
var i__42603__auto___78989 = (0);
while(true){
if((i__42603__auto___78989 < len__42602__auto___78988)){
args78918.push((arguments[i__42603__auto___78989]));

var G__78990 = (i__42603__auto___78989 + (1));
i__42603__auto___78989 = G__78990;
continue;
} else {
}
break;
}

var G__78920 = args78918.length;
switch (G__78920) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78918.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46004__auto___78992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___78992,out){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___78992,out){
return (function (state_78958){
var state_val_78959 = (state_78958[(1)]);
if((state_val_78959 === (7))){
var inst_78954 = (state_78958[(2)]);
var state_78958__$1 = state_78958;
var statearr_78960_78993 = state_78958__$1;
(statearr_78960_78993[(2)] = inst_78954);

(statearr_78960_78993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (1))){
var inst_78921 = (new Array(n));
var inst_78922 = inst_78921;
var inst_78923 = (0);
var state_78958__$1 = (function (){var statearr_78961 = state_78958;
(statearr_78961[(7)] = inst_78922);

(statearr_78961[(8)] = inst_78923);

return statearr_78961;
})();
var statearr_78962_78994 = state_78958__$1;
(statearr_78962_78994[(2)] = null);

(statearr_78962_78994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (4))){
var inst_78926 = (state_78958[(9)]);
var inst_78926__$1 = (state_78958[(2)]);
var inst_78927 = (inst_78926__$1 == null);
var inst_78928 = cljs.core.not.call(null,inst_78927);
var state_78958__$1 = (function (){var statearr_78963 = state_78958;
(statearr_78963[(9)] = inst_78926__$1);

return statearr_78963;
})();
if(inst_78928){
var statearr_78964_78995 = state_78958__$1;
(statearr_78964_78995[(1)] = (5));

} else {
var statearr_78965_78996 = state_78958__$1;
(statearr_78965_78996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (15))){
var inst_78948 = (state_78958[(2)]);
var state_78958__$1 = state_78958;
var statearr_78966_78997 = state_78958__$1;
(statearr_78966_78997[(2)] = inst_78948);

(statearr_78966_78997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (13))){
var state_78958__$1 = state_78958;
var statearr_78967_78998 = state_78958__$1;
(statearr_78967_78998[(2)] = null);

(statearr_78967_78998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (6))){
var inst_78923 = (state_78958[(8)]);
var inst_78944 = (inst_78923 > (0));
var state_78958__$1 = state_78958;
if(cljs.core.truth_(inst_78944)){
var statearr_78968_78999 = state_78958__$1;
(statearr_78968_78999[(1)] = (12));

} else {
var statearr_78969_79000 = state_78958__$1;
(statearr_78969_79000[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (3))){
var inst_78956 = (state_78958[(2)]);
var state_78958__$1 = state_78958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78958__$1,inst_78956);
} else {
if((state_val_78959 === (12))){
var inst_78922 = (state_78958[(7)]);
var inst_78946 = cljs.core.vec.call(null,inst_78922);
var state_78958__$1 = state_78958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78958__$1,(15),out,inst_78946);
} else {
if((state_val_78959 === (2))){
var state_78958__$1 = state_78958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78958__$1,(4),ch);
} else {
if((state_val_78959 === (11))){
var inst_78938 = (state_78958[(2)]);
var inst_78939 = (new Array(n));
var inst_78922 = inst_78939;
var inst_78923 = (0);
var state_78958__$1 = (function (){var statearr_78970 = state_78958;
(statearr_78970[(7)] = inst_78922);

(statearr_78970[(10)] = inst_78938);

(statearr_78970[(8)] = inst_78923);

return statearr_78970;
})();
var statearr_78971_79001 = state_78958__$1;
(statearr_78971_79001[(2)] = null);

(statearr_78971_79001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (9))){
var inst_78922 = (state_78958[(7)]);
var inst_78936 = cljs.core.vec.call(null,inst_78922);
var state_78958__$1 = state_78958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78958__$1,(11),out,inst_78936);
} else {
if((state_val_78959 === (5))){
var inst_78926 = (state_78958[(9)]);
var inst_78931 = (state_78958[(11)]);
var inst_78922 = (state_78958[(7)]);
var inst_78923 = (state_78958[(8)]);
var inst_78930 = (inst_78922[inst_78923] = inst_78926);
var inst_78931__$1 = (inst_78923 + (1));
var inst_78932 = (inst_78931__$1 < n);
var state_78958__$1 = (function (){var statearr_78972 = state_78958;
(statearr_78972[(12)] = inst_78930);

(statearr_78972[(11)] = inst_78931__$1);

return statearr_78972;
})();
if(cljs.core.truth_(inst_78932)){
var statearr_78973_79002 = state_78958__$1;
(statearr_78973_79002[(1)] = (8));

} else {
var statearr_78974_79003 = state_78958__$1;
(statearr_78974_79003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (14))){
var inst_78951 = (state_78958[(2)]);
var inst_78952 = cljs.core.async.close_BANG_.call(null,out);
var state_78958__$1 = (function (){var statearr_78976 = state_78958;
(statearr_78976[(13)] = inst_78951);

return statearr_78976;
})();
var statearr_78977_79004 = state_78958__$1;
(statearr_78977_79004[(2)] = inst_78952);

(statearr_78977_79004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (10))){
var inst_78942 = (state_78958[(2)]);
var state_78958__$1 = state_78958;
var statearr_78978_79005 = state_78958__$1;
(statearr_78978_79005[(2)] = inst_78942);

(statearr_78978_79005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78959 === (8))){
var inst_78931 = (state_78958[(11)]);
var inst_78922 = (state_78958[(7)]);
var tmp78975 = inst_78922;
var inst_78922__$1 = tmp78975;
var inst_78923 = inst_78931;
var state_78958__$1 = (function (){var statearr_78979 = state_78958;
(statearr_78979[(7)] = inst_78922__$1);

(statearr_78979[(8)] = inst_78923);

return statearr_78979;
})();
var statearr_78980_79006 = state_78958__$1;
(statearr_78980_79006[(2)] = null);

(statearr_78980_79006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___78992,out))
;
return ((function (switch__45890__auto__,c__46004__auto___78992,out){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_78984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78984[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_78984[(1)] = (1));

return statearr_78984;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_78958){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_78958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e78985){if((e78985 instanceof Object)){
var ex__45894__auto__ = e78985;
var statearr_78986_79007 = state_78958;
(statearr_78986_79007[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79008 = state_78958;
state_78958 = G__79008;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_78958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_78958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___78992,out))
})();
var state__46006__auto__ = (function (){var statearr_78987 = f__46005__auto__.call(null);
(statearr_78987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___78992);

return statearr_78987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___78992,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args79009 = [];
var len__42602__auto___79083 = arguments.length;
var i__42603__auto___79084 = (0);
while(true){
if((i__42603__auto___79084 < len__42602__auto___79083)){
args79009.push((arguments[i__42603__auto___79084]));

var G__79085 = (i__42603__auto___79084 + (1));
i__42603__auto___79084 = G__79085;
continue;
} else {
}
break;
}

var G__79011 = args79009.length;
switch (G__79011) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args79009.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46004__auto___79087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___79087,out){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___79087,out){
return (function (state_79053){
var state_val_79054 = (state_79053[(1)]);
if((state_val_79054 === (7))){
var inst_79049 = (state_79053[(2)]);
var state_79053__$1 = state_79053;
var statearr_79055_79088 = state_79053__$1;
(statearr_79055_79088[(2)] = inst_79049);

(statearr_79055_79088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (1))){
var inst_79012 = [];
var inst_79013 = inst_79012;
var inst_79014 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_79053__$1 = (function (){var statearr_79056 = state_79053;
(statearr_79056[(7)] = inst_79014);

(statearr_79056[(8)] = inst_79013);

return statearr_79056;
})();
var statearr_79057_79089 = state_79053__$1;
(statearr_79057_79089[(2)] = null);

(statearr_79057_79089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (4))){
var inst_79017 = (state_79053[(9)]);
var inst_79017__$1 = (state_79053[(2)]);
var inst_79018 = (inst_79017__$1 == null);
var inst_79019 = cljs.core.not.call(null,inst_79018);
var state_79053__$1 = (function (){var statearr_79058 = state_79053;
(statearr_79058[(9)] = inst_79017__$1);

return statearr_79058;
})();
if(inst_79019){
var statearr_79059_79090 = state_79053__$1;
(statearr_79059_79090[(1)] = (5));

} else {
var statearr_79060_79091 = state_79053__$1;
(statearr_79060_79091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (15))){
var inst_79043 = (state_79053[(2)]);
var state_79053__$1 = state_79053;
var statearr_79061_79092 = state_79053__$1;
(statearr_79061_79092[(2)] = inst_79043);

(statearr_79061_79092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (13))){
var state_79053__$1 = state_79053;
var statearr_79062_79093 = state_79053__$1;
(statearr_79062_79093[(2)] = null);

(statearr_79062_79093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (6))){
var inst_79013 = (state_79053[(8)]);
var inst_79038 = inst_79013.length;
var inst_79039 = (inst_79038 > (0));
var state_79053__$1 = state_79053;
if(cljs.core.truth_(inst_79039)){
var statearr_79063_79094 = state_79053__$1;
(statearr_79063_79094[(1)] = (12));

} else {
var statearr_79064_79095 = state_79053__$1;
(statearr_79064_79095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (3))){
var inst_79051 = (state_79053[(2)]);
var state_79053__$1 = state_79053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79053__$1,inst_79051);
} else {
if((state_val_79054 === (12))){
var inst_79013 = (state_79053[(8)]);
var inst_79041 = cljs.core.vec.call(null,inst_79013);
var state_79053__$1 = state_79053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79053__$1,(15),out,inst_79041);
} else {
if((state_val_79054 === (2))){
var state_79053__$1 = state_79053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79053__$1,(4),ch);
} else {
if((state_val_79054 === (11))){
var inst_79017 = (state_79053[(9)]);
var inst_79021 = (state_79053[(10)]);
var inst_79031 = (state_79053[(2)]);
var inst_79032 = [];
var inst_79033 = inst_79032.push(inst_79017);
var inst_79013 = inst_79032;
var inst_79014 = inst_79021;
var state_79053__$1 = (function (){var statearr_79065 = state_79053;
(statearr_79065[(7)] = inst_79014);

(statearr_79065[(8)] = inst_79013);

(statearr_79065[(11)] = inst_79033);

(statearr_79065[(12)] = inst_79031);

return statearr_79065;
})();
var statearr_79066_79096 = state_79053__$1;
(statearr_79066_79096[(2)] = null);

(statearr_79066_79096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (9))){
var inst_79013 = (state_79053[(8)]);
var inst_79029 = cljs.core.vec.call(null,inst_79013);
var state_79053__$1 = state_79053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79053__$1,(11),out,inst_79029);
} else {
if((state_val_79054 === (5))){
var inst_79014 = (state_79053[(7)]);
var inst_79017 = (state_79053[(9)]);
var inst_79021 = (state_79053[(10)]);
var inst_79021__$1 = f.call(null,inst_79017);
var inst_79022 = cljs.core._EQ_.call(null,inst_79021__$1,inst_79014);
var inst_79023 = cljs.core.keyword_identical_QMARK_.call(null,inst_79014,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_79024 = (inst_79022) || (inst_79023);
var state_79053__$1 = (function (){var statearr_79067 = state_79053;
(statearr_79067[(10)] = inst_79021__$1);

return statearr_79067;
})();
if(cljs.core.truth_(inst_79024)){
var statearr_79068_79097 = state_79053__$1;
(statearr_79068_79097[(1)] = (8));

} else {
var statearr_79069_79098 = state_79053__$1;
(statearr_79069_79098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (14))){
var inst_79046 = (state_79053[(2)]);
var inst_79047 = cljs.core.async.close_BANG_.call(null,out);
var state_79053__$1 = (function (){var statearr_79071 = state_79053;
(statearr_79071[(13)] = inst_79046);

return statearr_79071;
})();
var statearr_79072_79099 = state_79053__$1;
(statearr_79072_79099[(2)] = inst_79047);

(statearr_79072_79099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (10))){
var inst_79036 = (state_79053[(2)]);
var state_79053__$1 = state_79053;
var statearr_79073_79100 = state_79053__$1;
(statearr_79073_79100[(2)] = inst_79036);

(statearr_79073_79100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79054 === (8))){
var inst_79013 = (state_79053[(8)]);
var inst_79017 = (state_79053[(9)]);
var inst_79021 = (state_79053[(10)]);
var inst_79026 = inst_79013.push(inst_79017);
var tmp79070 = inst_79013;
var inst_79013__$1 = tmp79070;
var inst_79014 = inst_79021;
var state_79053__$1 = (function (){var statearr_79074 = state_79053;
(statearr_79074[(7)] = inst_79014);

(statearr_79074[(8)] = inst_79013__$1);

(statearr_79074[(14)] = inst_79026);

return statearr_79074;
})();
var statearr_79075_79101 = state_79053__$1;
(statearr_79075_79101[(2)] = null);

(statearr_79075_79101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46004__auto___79087,out))
;
return ((function (switch__45890__auto__,c__46004__auto___79087,out){
return (function() {
var cljs$core$async$state_machine__45891__auto__ = null;
var cljs$core$async$state_machine__45891__auto____0 = (function (){
var statearr_79079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79079[(0)] = cljs$core$async$state_machine__45891__auto__);

(statearr_79079[(1)] = (1));

return statearr_79079;
});
var cljs$core$async$state_machine__45891__auto____1 = (function (state_79053){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_79053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e79080){if((e79080 instanceof Object)){
var ex__45894__auto__ = e79080;
var statearr_79081_79102 = state_79053;
(statearr_79081_79102[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79103 = state_79053;
state_79053 = G__79103;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
cljs$core$async$state_machine__45891__auto__ = function(state_79053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45891__auto____1.call(this,state_79053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45891__auto____0;
cljs$core$async$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45891__auto____1;
return cljs$core$async$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___79087,out))
})();
var state__46006__auto__ = (function (){var statearr_79082 = f__46005__auto__.call(null);
(statearr_79082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___79087);

return statearr_79082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___79087,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1467866140130