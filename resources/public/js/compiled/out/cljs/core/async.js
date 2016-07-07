// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args41383 = [];
var len__38772__auto___41389 = arguments.length;
var i__38773__auto___41390 = (0);
while(true){
if((i__38773__auto___41390 < len__38772__auto___41389)){
args41383.push((arguments[i__38773__auto___41390]));

var G__41391 = (i__38773__auto___41390 + (1));
i__38773__auto___41390 = G__41391;
continue;
} else {
}
break;
}

var G__41385 = args41383.length;
switch (G__41385) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41383.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41386 = (function (f,blockable,meta41387){
this.f = f;
this.blockable = blockable;
this.meta41387 = meta41387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41388,meta41387__$1){
var self__ = this;
var _41388__$1 = this;
return (new cljs.core.async.t_cljs$core$async41386(self__.f,self__.blockable,meta41387__$1));
});

cljs.core.async.t_cljs$core$async41386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41388){
var self__ = this;
var _41388__$1 = this;
return self__.meta41387;
});

cljs.core.async.t_cljs$core$async41386.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41387","meta41387",-1573626519,null)], null);
});

cljs.core.async.t_cljs$core$async41386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41386";

cljs.core.async.t_cljs$core$async41386.cljs$lang$ctorPrWriter = (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async41386");
});

cljs.core.async.__GT_t_cljs$core$async41386 = (function cljs$core$async$__GT_t_cljs$core$async41386(f__$1,blockable__$1,meta41387){
return (new cljs.core.async.t_cljs$core$async41386(f__$1,blockable__$1,meta41387));
});

}

return (new cljs.core.async.t_cljs$core$async41386(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args41395 = [];
var len__38772__auto___41398 = arguments.length;
var i__38773__auto___41399 = (0);
while(true){
if((i__38773__auto___41399 < len__38772__auto___41398)){
args41395.push((arguments[i__38773__auto___41399]));

var G__41400 = (i__38773__auto___41399 + (1));
i__38773__auto___41399 = G__41400;
continue;
} else {
}
break;
}

var G__41397 = args41395.length;
switch (G__41397) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41395.length)].join('')));

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
var args41402 = [];
var len__38772__auto___41405 = arguments.length;
var i__38773__auto___41406 = (0);
while(true){
if((i__38773__auto___41406 < len__38772__auto___41405)){
args41402.push((arguments[i__38773__auto___41406]));

var G__41407 = (i__38773__auto___41406 + (1));
i__38773__auto___41406 = G__41407;
continue;
} else {
}
break;
}

var G__41404 = args41402.length;
switch (G__41404) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41402.length)].join('')));

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
var args41409 = [];
var len__38772__auto___41412 = arguments.length;
var i__38773__auto___41413 = (0);
while(true){
if((i__38773__auto___41413 < len__38772__auto___41412)){
args41409.push((arguments[i__38773__auto___41413]));

var G__41414 = (i__38773__auto___41413 + (1));
i__38773__auto___41413 = G__41414;
continue;
} else {
}
break;
}

var G__41411 = args41409.length;
switch (G__41411) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41409.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41416 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41416);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41416,ret){
return (function (){
return fn1.call(null,val_41416);
});})(val_41416,ret))
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
var args41417 = [];
var len__38772__auto___41420 = arguments.length;
var i__38773__auto___41421 = (0);
while(true){
if((i__38773__auto___41421 < len__38772__auto___41420)){
args41417.push((arguments[i__38773__auto___41421]));

var G__41422 = (i__38773__auto___41421 + (1));
i__38773__auto___41421 = G__41422;
continue;
} else {
}
break;
}

var G__41419 = args41417.length;
switch (G__41419) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41417.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__38617__auto___41424 = n;
var x_41425 = (0);
while(true){
if((x_41425 < n__38617__auto___41424)){
(a[x_41425] = (0));

var G__41426 = (x_41425 + (1));
x_41425 = G__41426;
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

var G__41427 = (i + (1));
i = G__41427;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41431 = (function (alt_flag,flag,meta41432){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta41432 = meta41432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41433,meta41432__$1){
var self__ = this;
var _41433__$1 = this;
return (new cljs.core.async.t_cljs$core$async41431(self__.alt_flag,self__.flag,meta41432__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41433){
var self__ = this;
var _41433__$1 = this;
return self__.meta41432;
});})(flag))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41431.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41432","meta41432",-153714490,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41431";

cljs.core.async.t_cljs$core$async41431.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async41431");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41431 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41431(alt_flag__$1,flag__$1,meta41432){
return (new cljs.core.async.t_cljs$core$async41431(alt_flag__$1,flag__$1,meta41432));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41431(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41437 = (function (alt_handler,flag,cb,meta41438){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta41438 = meta41438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41439,meta41438__$1){
var self__ = this;
var _41439__$1 = this;
return (new cljs.core.async.t_cljs$core$async41437(self__.alt_handler,self__.flag,self__.cb,meta41438__$1));
});

cljs.core.async.t_cljs$core$async41437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41439){
var self__ = this;
var _41439__$1 = this;
return self__.meta41438;
});

cljs.core.async.t_cljs$core$async41437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41438","meta41438",-1255096192,null)], null);
});

cljs.core.async.t_cljs$core$async41437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41437";

cljs.core.async.t_cljs$core$async41437.cljs$lang$ctorPrWriter = (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async41437");
});

cljs.core.async.__GT_t_cljs$core$async41437 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41437(alt_handler__$1,flag__$1,cb__$1,meta41438){
return (new cljs.core.async.t_cljs$core$async41437(alt_handler__$1,flag__$1,cb__$1,meta41438));
});

}

return (new cljs.core.async.t_cljs$core$async41437(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41440_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41440_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41441_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41441_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__37702__auto__ = wport;
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41442 = (i + (1));
i = G__41442;
continue;
}
} else {
return null;
}
break;
}
})();
var or__37702__auto__ = ret;
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__37690__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__37690__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__37690__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__38779__auto__ = [];
var len__38772__auto___41448 = arguments.length;
var i__38773__auto___41449 = (0);
while(true){
if((i__38773__auto___41449 < len__38772__auto___41448)){
args__38779__auto__.push((arguments[i__38773__auto___41449]));

var G__41450 = (i__38773__auto___41449 + (1));
i__38773__auto___41449 = G__41450;
continue;
} else {
}
break;
}

var argseq__38780__auto__ = ((((1) < args__38779__auto__.length))?(new cljs.core.IndexedSeq(args__38779__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38780__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41445){
var map__41446 = p__41445;
var map__41446__$1 = ((((!((map__41446 == null)))?((((map__41446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41446):map__41446);
var opts = map__41446__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41443){
var G__41444 = cljs.core.first.call(null,seq41443);
var seq41443__$1 = cljs.core.next.call(null,seq41443);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41444,seq41443__$1);
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
var args41451 = [];
var len__38772__auto___41501 = arguments.length;
var i__38773__auto___41502 = (0);
while(true){
if((i__38773__auto___41502 < len__38772__auto___41501)){
args41451.push((arguments[i__38773__auto___41502]));

var G__41503 = (i__38773__auto___41502 + (1));
i__38773__auto___41502 = G__41503;
continue;
} else {
}
break;
}

var G__41453 = args41451.length;
switch (G__41453) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41451.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41338__auto___41505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___41505){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___41505){
return (function (state_41477){
var state_val_41478 = (state_41477[(1)]);
if((state_val_41478 === (7))){
var inst_41473 = (state_41477[(2)]);
var state_41477__$1 = state_41477;
var statearr_41479_41506 = state_41477__$1;
(statearr_41479_41506[(2)] = inst_41473);

(statearr_41479_41506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (1))){
var state_41477__$1 = state_41477;
var statearr_41480_41507 = state_41477__$1;
(statearr_41480_41507[(2)] = null);

(statearr_41480_41507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (4))){
var inst_41456 = (state_41477[(7)]);
var inst_41456__$1 = (state_41477[(2)]);
var inst_41457 = (inst_41456__$1 == null);
var state_41477__$1 = (function (){var statearr_41481 = state_41477;
(statearr_41481[(7)] = inst_41456__$1);

return statearr_41481;
})();
if(cljs.core.truth_(inst_41457)){
var statearr_41482_41508 = state_41477__$1;
(statearr_41482_41508[(1)] = (5));

} else {
var statearr_41483_41509 = state_41477__$1;
(statearr_41483_41509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (13))){
var state_41477__$1 = state_41477;
var statearr_41484_41510 = state_41477__$1;
(statearr_41484_41510[(2)] = null);

(statearr_41484_41510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (6))){
var inst_41456 = (state_41477[(7)]);
var state_41477__$1 = state_41477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41477__$1,(11),to,inst_41456);
} else {
if((state_val_41478 === (3))){
var inst_41475 = (state_41477[(2)]);
var state_41477__$1 = state_41477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41477__$1,inst_41475);
} else {
if((state_val_41478 === (12))){
var state_41477__$1 = state_41477;
var statearr_41485_41511 = state_41477__$1;
(statearr_41485_41511[(2)] = null);

(statearr_41485_41511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (2))){
var state_41477__$1 = state_41477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41477__$1,(4),from);
} else {
if((state_val_41478 === (11))){
var inst_41466 = (state_41477[(2)]);
var state_41477__$1 = state_41477;
if(cljs.core.truth_(inst_41466)){
var statearr_41486_41512 = state_41477__$1;
(statearr_41486_41512[(1)] = (12));

} else {
var statearr_41487_41513 = state_41477__$1;
(statearr_41487_41513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (9))){
var state_41477__$1 = state_41477;
var statearr_41488_41514 = state_41477__$1;
(statearr_41488_41514[(2)] = null);

(statearr_41488_41514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (5))){
var state_41477__$1 = state_41477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41489_41515 = state_41477__$1;
(statearr_41489_41515[(1)] = (8));

} else {
var statearr_41490_41516 = state_41477__$1;
(statearr_41490_41516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (14))){
var inst_41471 = (state_41477[(2)]);
var state_41477__$1 = state_41477;
var statearr_41491_41517 = state_41477__$1;
(statearr_41491_41517[(2)] = inst_41471);

(statearr_41491_41517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (10))){
var inst_41463 = (state_41477[(2)]);
var state_41477__$1 = state_41477;
var statearr_41492_41518 = state_41477__$1;
(statearr_41492_41518[(2)] = inst_41463);

(statearr_41492_41518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (8))){
var inst_41460 = cljs.core.async.close_BANG_.call(null,to);
var state_41477__$1 = state_41477;
var statearr_41493_41519 = state_41477__$1;
(statearr_41493_41519[(2)] = inst_41460);

(statearr_41493_41519[(1)] = (10));


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
});})(c__41338__auto___41505))
;
return ((function (switch__41226__auto__,c__41338__auto___41505){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_41497 = [null,null,null,null,null,null,null,null];
(statearr_41497[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_41497[(1)] = (1));

return statearr_41497;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_41477){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_41477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e41498){if((e41498 instanceof Object)){
var ex__41230__auto__ = e41498;
var statearr_41499_41520 = state_41477;
(statearr_41499_41520[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41521 = state_41477;
state_41477 = G__41521;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_41477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_41477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___41505))
})();
var state__41340__auto__ = (function (){var statearr_41500 = f__41339__auto__.call(null);
(statearr_41500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___41505);

return statearr_41500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___41505))
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
return (function (p__41705){
var vec__41706 = p__41705;
var v = cljs.core.nth.call(null,vec__41706,(0),null);
var p = cljs.core.nth.call(null,vec__41706,(1),null);
var job = vec__41706;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41338__auto___41888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___41888,res,vec__41706,v,p,job,jobs,results){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___41888,res,vec__41706,v,p,job,jobs,results){
return (function (state_41711){
var state_val_41712 = (state_41711[(1)]);
if((state_val_41712 === (1))){
var state_41711__$1 = state_41711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41711__$1,(2),res,v);
} else {
if((state_val_41712 === (2))){
var inst_41708 = (state_41711[(2)]);
var inst_41709 = cljs.core.async.close_BANG_.call(null,res);
var state_41711__$1 = (function (){var statearr_41713 = state_41711;
(statearr_41713[(7)] = inst_41708);

return statearr_41713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41711__$1,inst_41709);
} else {
return null;
}
}
});})(c__41338__auto___41888,res,vec__41706,v,p,job,jobs,results))
;
return ((function (switch__41226__auto__,c__41338__auto___41888,res,vec__41706,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0 = (function (){
var statearr_41717 = [null,null,null,null,null,null,null,null];
(statearr_41717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__);

(statearr_41717[(1)] = (1));

return statearr_41717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1 = (function (state_41711){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_41711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e41718){if((e41718 instanceof Object)){
var ex__41230__auto__ = e41718;
var statearr_41719_41889 = state_41711;
(statearr_41719_41889[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41890 = state_41711;
state_41711 = G__41890;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = function(state_41711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1.call(this,state_41711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___41888,res,vec__41706,v,p,job,jobs,results))
})();
var state__41340__auto__ = (function (){var statearr_41720 = f__41339__auto__.call(null);
(statearr_41720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___41888);

return statearr_41720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___41888,res,vec__41706,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41721){
var vec__41722 = p__41721;
var v = cljs.core.nth.call(null,vec__41722,(0),null);
var p = cljs.core.nth.call(null,vec__41722,(1),null);
var job = vec__41722;
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
var n__38617__auto___41891 = n;
var __41892 = (0);
while(true){
if((__41892 < n__38617__auto___41891)){
var G__41723_41893 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41723_41893) {
case "compute":
var c__41338__auto___41895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41892,c__41338__auto___41895,G__41723_41893,n__38617__auto___41891,jobs,results,process,async){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (__41892,c__41338__auto___41895,G__41723_41893,n__38617__auto___41891,jobs,results,process,async){
return (function (state_41736){
var state_val_41737 = (state_41736[(1)]);
if((state_val_41737 === (1))){
var state_41736__$1 = state_41736;
var statearr_41738_41896 = state_41736__$1;
(statearr_41738_41896[(2)] = null);

(statearr_41738_41896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (2))){
var state_41736__$1 = state_41736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41736__$1,(4),jobs);
} else {
if((state_val_41737 === (3))){
var inst_41734 = (state_41736[(2)]);
var state_41736__$1 = state_41736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41736__$1,inst_41734);
} else {
if((state_val_41737 === (4))){
var inst_41726 = (state_41736[(2)]);
var inst_41727 = process.call(null,inst_41726);
var state_41736__$1 = state_41736;
if(cljs.core.truth_(inst_41727)){
var statearr_41739_41897 = state_41736__$1;
(statearr_41739_41897[(1)] = (5));

} else {
var statearr_41740_41898 = state_41736__$1;
(statearr_41740_41898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (5))){
var state_41736__$1 = state_41736;
var statearr_41741_41899 = state_41736__$1;
(statearr_41741_41899[(2)] = null);

(statearr_41741_41899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (6))){
var state_41736__$1 = state_41736;
var statearr_41742_41900 = state_41736__$1;
(statearr_41742_41900[(2)] = null);

(statearr_41742_41900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41737 === (7))){
var inst_41732 = (state_41736[(2)]);
var state_41736__$1 = state_41736;
var statearr_41743_41901 = state_41736__$1;
(statearr_41743_41901[(2)] = inst_41732);

(statearr_41743_41901[(1)] = (3));


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
});})(__41892,c__41338__auto___41895,G__41723_41893,n__38617__auto___41891,jobs,results,process,async))
;
return ((function (__41892,switch__41226__auto__,c__41338__auto___41895,G__41723_41893,n__38617__auto___41891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0 = (function (){
var statearr_41747 = [null,null,null,null,null,null,null];
(statearr_41747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__);

(statearr_41747[(1)] = (1));

return statearr_41747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1 = (function (state_41736){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_41736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e41748){if((e41748 instanceof Object)){
var ex__41230__auto__ = e41748;
var statearr_41749_41902 = state_41736;
(statearr_41749_41902[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41903 = state_41736;
state_41736 = G__41903;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = function(state_41736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1.call(this,state_41736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__;
})()
;})(__41892,switch__41226__auto__,c__41338__auto___41895,G__41723_41893,n__38617__auto___41891,jobs,results,process,async))
})();
var state__41340__auto__ = (function (){var statearr_41750 = f__41339__auto__.call(null);
(statearr_41750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___41895);

return statearr_41750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(__41892,c__41338__auto___41895,G__41723_41893,n__38617__auto___41891,jobs,results,process,async))
);


break;
case "async":
var c__41338__auto___41904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41892,c__41338__auto___41904,G__41723_41893,n__38617__auto___41891,jobs,results,process,async){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (__41892,c__41338__auto___41904,G__41723_41893,n__38617__auto___41891,jobs,results,process,async){
return (function (state_41763){
var state_val_41764 = (state_41763[(1)]);
if((state_val_41764 === (1))){
var state_41763__$1 = state_41763;
var statearr_41765_41905 = state_41763__$1;
(statearr_41765_41905[(2)] = null);

(statearr_41765_41905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41764 === (2))){
var state_41763__$1 = state_41763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41763__$1,(4),jobs);
} else {
if((state_val_41764 === (3))){
var inst_41761 = (state_41763[(2)]);
var state_41763__$1 = state_41763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41763__$1,inst_41761);
} else {
if((state_val_41764 === (4))){
var inst_41753 = (state_41763[(2)]);
var inst_41754 = async.call(null,inst_41753);
var state_41763__$1 = state_41763;
if(cljs.core.truth_(inst_41754)){
var statearr_41766_41906 = state_41763__$1;
(statearr_41766_41906[(1)] = (5));

} else {
var statearr_41767_41907 = state_41763__$1;
(statearr_41767_41907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41764 === (5))){
var state_41763__$1 = state_41763;
var statearr_41768_41908 = state_41763__$1;
(statearr_41768_41908[(2)] = null);

(statearr_41768_41908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41764 === (6))){
var state_41763__$1 = state_41763;
var statearr_41769_41909 = state_41763__$1;
(statearr_41769_41909[(2)] = null);

(statearr_41769_41909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41764 === (7))){
var inst_41759 = (state_41763[(2)]);
var state_41763__$1 = state_41763;
var statearr_41770_41910 = state_41763__$1;
(statearr_41770_41910[(2)] = inst_41759);

(statearr_41770_41910[(1)] = (3));


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
});})(__41892,c__41338__auto___41904,G__41723_41893,n__38617__auto___41891,jobs,results,process,async))
;
return ((function (__41892,switch__41226__auto__,c__41338__auto___41904,G__41723_41893,n__38617__auto___41891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0 = (function (){
var statearr_41774 = [null,null,null,null,null,null,null];
(statearr_41774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__);

(statearr_41774[(1)] = (1));

return statearr_41774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1 = (function (state_41763){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_41763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e41775){if((e41775 instanceof Object)){
var ex__41230__auto__ = e41775;
var statearr_41776_41911 = state_41763;
(statearr_41776_41911[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41912 = state_41763;
state_41763 = G__41912;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = function(state_41763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1.call(this,state_41763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__;
})()
;})(__41892,switch__41226__auto__,c__41338__auto___41904,G__41723_41893,n__38617__auto___41891,jobs,results,process,async))
})();
var state__41340__auto__ = (function (){var statearr_41777 = f__41339__auto__.call(null);
(statearr_41777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___41904);

return statearr_41777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(__41892,c__41338__auto___41904,G__41723_41893,n__38617__auto___41891,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41913 = (__41892 + (1));
__41892 = G__41913;
continue;
} else {
}
break;
}

var c__41338__auto___41914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___41914,jobs,results,process,async){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___41914,jobs,results,process,async){
return (function (state_41799){
var state_val_41800 = (state_41799[(1)]);
if((state_val_41800 === (1))){
var state_41799__$1 = state_41799;
var statearr_41801_41915 = state_41799__$1;
(statearr_41801_41915[(2)] = null);

(statearr_41801_41915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (2))){
var state_41799__$1 = state_41799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41799__$1,(4),from);
} else {
if((state_val_41800 === (3))){
var inst_41797 = (state_41799[(2)]);
var state_41799__$1 = state_41799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41799__$1,inst_41797);
} else {
if((state_val_41800 === (4))){
var inst_41780 = (state_41799[(7)]);
var inst_41780__$1 = (state_41799[(2)]);
var inst_41781 = (inst_41780__$1 == null);
var state_41799__$1 = (function (){var statearr_41802 = state_41799;
(statearr_41802[(7)] = inst_41780__$1);

return statearr_41802;
})();
if(cljs.core.truth_(inst_41781)){
var statearr_41803_41916 = state_41799__$1;
(statearr_41803_41916[(1)] = (5));

} else {
var statearr_41804_41917 = state_41799__$1;
(statearr_41804_41917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (5))){
var inst_41783 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41799__$1 = state_41799;
var statearr_41805_41918 = state_41799__$1;
(statearr_41805_41918[(2)] = inst_41783);

(statearr_41805_41918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (6))){
var inst_41780 = (state_41799[(7)]);
var inst_41785 = (state_41799[(8)]);
var inst_41785__$1 = cljs.core.async.chan.call(null,(1));
var inst_41786 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41787 = [inst_41780,inst_41785__$1];
var inst_41788 = (new cljs.core.PersistentVector(null,2,(5),inst_41786,inst_41787,null));
var state_41799__$1 = (function (){var statearr_41806 = state_41799;
(statearr_41806[(8)] = inst_41785__$1);

return statearr_41806;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41799__$1,(8),jobs,inst_41788);
} else {
if((state_val_41800 === (7))){
var inst_41795 = (state_41799[(2)]);
var state_41799__$1 = state_41799;
var statearr_41807_41919 = state_41799__$1;
(statearr_41807_41919[(2)] = inst_41795);

(statearr_41807_41919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (8))){
var inst_41785 = (state_41799[(8)]);
var inst_41790 = (state_41799[(2)]);
var state_41799__$1 = (function (){var statearr_41808 = state_41799;
(statearr_41808[(9)] = inst_41790);

return statearr_41808;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41799__$1,(9),results,inst_41785);
} else {
if((state_val_41800 === (9))){
var inst_41792 = (state_41799[(2)]);
var state_41799__$1 = (function (){var statearr_41809 = state_41799;
(statearr_41809[(10)] = inst_41792);

return statearr_41809;
})();
var statearr_41810_41920 = state_41799__$1;
(statearr_41810_41920[(2)] = null);

(statearr_41810_41920[(1)] = (2));


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
});})(c__41338__auto___41914,jobs,results,process,async))
;
return ((function (switch__41226__auto__,c__41338__auto___41914,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0 = (function (){
var statearr_41814 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__);

(statearr_41814[(1)] = (1));

return statearr_41814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1 = (function (state_41799){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_41799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e41815){if((e41815 instanceof Object)){
var ex__41230__auto__ = e41815;
var statearr_41816_41921 = state_41799;
(statearr_41816_41921[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41922 = state_41799;
state_41799 = G__41922;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = function(state_41799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1.call(this,state_41799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___41914,jobs,results,process,async))
})();
var state__41340__auto__ = (function (){var statearr_41817 = f__41339__auto__.call(null);
(statearr_41817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___41914);

return statearr_41817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___41914,jobs,results,process,async))
);


var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__,jobs,results,process,async){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__,jobs,results,process,async){
return (function (state_41855){
var state_val_41856 = (state_41855[(1)]);
if((state_val_41856 === (7))){
var inst_41851 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
var statearr_41857_41923 = state_41855__$1;
(statearr_41857_41923[(2)] = inst_41851);

(statearr_41857_41923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (20))){
var state_41855__$1 = state_41855;
var statearr_41858_41924 = state_41855__$1;
(statearr_41858_41924[(2)] = null);

(statearr_41858_41924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (1))){
var state_41855__$1 = state_41855;
var statearr_41859_41925 = state_41855__$1;
(statearr_41859_41925[(2)] = null);

(statearr_41859_41925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (4))){
var inst_41820 = (state_41855[(7)]);
var inst_41820__$1 = (state_41855[(2)]);
var inst_41821 = (inst_41820__$1 == null);
var state_41855__$1 = (function (){var statearr_41860 = state_41855;
(statearr_41860[(7)] = inst_41820__$1);

return statearr_41860;
})();
if(cljs.core.truth_(inst_41821)){
var statearr_41861_41926 = state_41855__$1;
(statearr_41861_41926[(1)] = (5));

} else {
var statearr_41862_41927 = state_41855__$1;
(statearr_41862_41927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (15))){
var inst_41833 = (state_41855[(8)]);
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41855__$1,(18),to,inst_41833);
} else {
if((state_val_41856 === (21))){
var inst_41846 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
var statearr_41863_41928 = state_41855__$1;
(statearr_41863_41928[(2)] = inst_41846);

(statearr_41863_41928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (13))){
var inst_41848 = (state_41855[(2)]);
var state_41855__$1 = (function (){var statearr_41864 = state_41855;
(statearr_41864[(9)] = inst_41848);

return statearr_41864;
})();
var statearr_41865_41929 = state_41855__$1;
(statearr_41865_41929[(2)] = null);

(statearr_41865_41929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (6))){
var inst_41820 = (state_41855[(7)]);
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41855__$1,(11),inst_41820);
} else {
if((state_val_41856 === (17))){
var inst_41841 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
if(cljs.core.truth_(inst_41841)){
var statearr_41866_41930 = state_41855__$1;
(statearr_41866_41930[(1)] = (19));

} else {
var statearr_41867_41931 = state_41855__$1;
(statearr_41867_41931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (3))){
var inst_41853 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41855__$1,inst_41853);
} else {
if((state_val_41856 === (12))){
var inst_41830 = (state_41855[(10)]);
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41855__$1,(14),inst_41830);
} else {
if((state_val_41856 === (2))){
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41855__$1,(4),results);
} else {
if((state_val_41856 === (19))){
var state_41855__$1 = state_41855;
var statearr_41868_41932 = state_41855__$1;
(statearr_41868_41932[(2)] = null);

(statearr_41868_41932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (11))){
var inst_41830 = (state_41855[(2)]);
var state_41855__$1 = (function (){var statearr_41869 = state_41855;
(statearr_41869[(10)] = inst_41830);

return statearr_41869;
})();
var statearr_41870_41933 = state_41855__$1;
(statearr_41870_41933[(2)] = null);

(statearr_41870_41933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (9))){
var state_41855__$1 = state_41855;
var statearr_41871_41934 = state_41855__$1;
(statearr_41871_41934[(2)] = null);

(statearr_41871_41934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (5))){
var state_41855__$1 = state_41855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41872_41935 = state_41855__$1;
(statearr_41872_41935[(1)] = (8));

} else {
var statearr_41873_41936 = state_41855__$1;
(statearr_41873_41936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (14))){
var inst_41833 = (state_41855[(8)]);
var inst_41835 = (state_41855[(11)]);
var inst_41833__$1 = (state_41855[(2)]);
var inst_41834 = (inst_41833__$1 == null);
var inst_41835__$1 = cljs.core.not.call(null,inst_41834);
var state_41855__$1 = (function (){var statearr_41874 = state_41855;
(statearr_41874[(8)] = inst_41833__$1);

(statearr_41874[(11)] = inst_41835__$1);

return statearr_41874;
})();
if(inst_41835__$1){
var statearr_41875_41937 = state_41855__$1;
(statearr_41875_41937[(1)] = (15));

} else {
var statearr_41876_41938 = state_41855__$1;
(statearr_41876_41938[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (16))){
var inst_41835 = (state_41855[(11)]);
var state_41855__$1 = state_41855;
var statearr_41877_41939 = state_41855__$1;
(statearr_41877_41939[(2)] = inst_41835);

(statearr_41877_41939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (10))){
var inst_41827 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
var statearr_41878_41940 = state_41855__$1;
(statearr_41878_41940[(2)] = inst_41827);

(statearr_41878_41940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (18))){
var inst_41838 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
var statearr_41879_41941 = state_41855__$1;
(statearr_41879_41941[(2)] = inst_41838);

(statearr_41879_41941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (8))){
var inst_41824 = cljs.core.async.close_BANG_.call(null,to);
var state_41855__$1 = state_41855;
var statearr_41880_41942 = state_41855__$1;
(statearr_41880_41942[(2)] = inst_41824);

(statearr_41880_41942[(1)] = (10));


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
});})(c__41338__auto__,jobs,results,process,async))
;
return ((function (switch__41226__auto__,c__41338__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0 = (function (){
var statearr_41884 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__);

(statearr_41884[(1)] = (1));

return statearr_41884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1 = (function (state_41855){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_41855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e41885){if((e41885 instanceof Object)){
var ex__41230__auto__ = e41885;
var statearr_41886_41943 = state_41855;
(statearr_41886_41943[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41944 = state_41855;
state_41855 = G__41944;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__ = function(state_41855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1.call(this,state_41855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__,jobs,results,process,async))
})();
var state__41340__auto__ = (function (){var statearr_41887 = f__41339__auto__.call(null);
(statearr_41887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_41887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__,jobs,results,process,async))
);

return c__41338__auto__;
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
var args41945 = [];
var len__38772__auto___41948 = arguments.length;
var i__38773__auto___41949 = (0);
while(true){
if((i__38773__auto___41949 < len__38772__auto___41948)){
args41945.push((arguments[i__38773__auto___41949]));

var G__41950 = (i__38773__auto___41949 + (1));
i__38773__auto___41949 = G__41950;
continue;
} else {
}
break;
}

var G__41947 = args41945.length;
switch (G__41947) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41945.length)].join('')));

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
var args41952 = [];
var len__38772__auto___41955 = arguments.length;
var i__38773__auto___41956 = (0);
while(true){
if((i__38773__auto___41956 < len__38772__auto___41955)){
args41952.push((arguments[i__38773__auto___41956]));

var G__41957 = (i__38773__auto___41956 + (1));
i__38773__auto___41956 = G__41957;
continue;
} else {
}
break;
}

var G__41954 = args41952.length;
switch (G__41954) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41952.length)].join('')));

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
var args41959 = [];
var len__38772__auto___42012 = arguments.length;
var i__38773__auto___42013 = (0);
while(true){
if((i__38773__auto___42013 < len__38772__auto___42012)){
args41959.push((arguments[i__38773__auto___42013]));

var G__42014 = (i__38773__auto___42013 + (1));
i__38773__auto___42013 = G__42014;
continue;
} else {
}
break;
}

var G__41961 = args41959.length;
switch (G__41961) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41959.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41338__auto___42016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___42016,tc,fc){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___42016,tc,fc){
return (function (state_41987){
var state_val_41988 = (state_41987[(1)]);
if((state_val_41988 === (7))){
var inst_41983 = (state_41987[(2)]);
var state_41987__$1 = state_41987;
var statearr_41989_42017 = state_41987__$1;
(statearr_41989_42017[(2)] = inst_41983);

(statearr_41989_42017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (1))){
var state_41987__$1 = state_41987;
var statearr_41990_42018 = state_41987__$1;
(statearr_41990_42018[(2)] = null);

(statearr_41990_42018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (4))){
var inst_41964 = (state_41987[(7)]);
var inst_41964__$1 = (state_41987[(2)]);
var inst_41965 = (inst_41964__$1 == null);
var state_41987__$1 = (function (){var statearr_41991 = state_41987;
(statearr_41991[(7)] = inst_41964__$1);

return statearr_41991;
})();
if(cljs.core.truth_(inst_41965)){
var statearr_41992_42019 = state_41987__$1;
(statearr_41992_42019[(1)] = (5));

} else {
var statearr_41993_42020 = state_41987__$1;
(statearr_41993_42020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (13))){
var state_41987__$1 = state_41987;
var statearr_41994_42021 = state_41987__$1;
(statearr_41994_42021[(2)] = null);

(statearr_41994_42021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (6))){
var inst_41964 = (state_41987[(7)]);
var inst_41970 = p.call(null,inst_41964);
var state_41987__$1 = state_41987;
if(cljs.core.truth_(inst_41970)){
var statearr_41995_42022 = state_41987__$1;
(statearr_41995_42022[(1)] = (9));

} else {
var statearr_41996_42023 = state_41987__$1;
(statearr_41996_42023[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (3))){
var inst_41985 = (state_41987[(2)]);
var state_41987__$1 = state_41987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41987__$1,inst_41985);
} else {
if((state_val_41988 === (12))){
var state_41987__$1 = state_41987;
var statearr_41997_42024 = state_41987__$1;
(statearr_41997_42024[(2)] = null);

(statearr_41997_42024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (2))){
var state_41987__$1 = state_41987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41987__$1,(4),ch);
} else {
if((state_val_41988 === (11))){
var inst_41964 = (state_41987[(7)]);
var inst_41974 = (state_41987[(2)]);
var state_41987__$1 = state_41987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41987__$1,(8),inst_41974,inst_41964);
} else {
if((state_val_41988 === (9))){
var state_41987__$1 = state_41987;
var statearr_41998_42025 = state_41987__$1;
(statearr_41998_42025[(2)] = tc);

(statearr_41998_42025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (5))){
var inst_41967 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41968 = cljs.core.async.close_BANG_.call(null,fc);
var state_41987__$1 = (function (){var statearr_41999 = state_41987;
(statearr_41999[(8)] = inst_41967);

return statearr_41999;
})();
var statearr_42000_42026 = state_41987__$1;
(statearr_42000_42026[(2)] = inst_41968);

(statearr_42000_42026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (14))){
var inst_41981 = (state_41987[(2)]);
var state_41987__$1 = state_41987;
var statearr_42001_42027 = state_41987__$1;
(statearr_42001_42027[(2)] = inst_41981);

(statearr_42001_42027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (10))){
var state_41987__$1 = state_41987;
var statearr_42002_42028 = state_41987__$1;
(statearr_42002_42028[(2)] = fc);

(statearr_42002_42028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41988 === (8))){
var inst_41976 = (state_41987[(2)]);
var state_41987__$1 = state_41987;
if(cljs.core.truth_(inst_41976)){
var statearr_42003_42029 = state_41987__$1;
(statearr_42003_42029[(1)] = (12));

} else {
var statearr_42004_42030 = state_41987__$1;
(statearr_42004_42030[(1)] = (13));

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
});})(c__41338__auto___42016,tc,fc))
;
return ((function (switch__41226__auto__,c__41338__auto___42016,tc,fc){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_42008 = [null,null,null,null,null,null,null,null,null];
(statearr_42008[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_42008[(1)] = (1));

return statearr_42008;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_41987){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_41987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e42009){if((e42009 instanceof Object)){
var ex__41230__auto__ = e42009;
var statearr_42010_42031 = state_41987;
(statearr_42010_42031[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42032 = state_41987;
state_41987 = G__42032;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_41987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_41987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___42016,tc,fc))
})();
var state__41340__auto__ = (function (){var statearr_42011 = f__41339__auto__.call(null);
(statearr_42011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___42016);

return statearr_42011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___42016,tc,fc))
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
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_42096){
var state_val_42097 = (state_42096[(1)]);
if((state_val_42097 === (7))){
var inst_42092 = (state_42096[(2)]);
var state_42096__$1 = state_42096;
var statearr_42098_42119 = state_42096__$1;
(statearr_42098_42119[(2)] = inst_42092);

(statearr_42098_42119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42097 === (1))){
var inst_42076 = init;
var state_42096__$1 = (function (){var statearr_42099 = state_42096;
(statearr_42099[(7)] = inst_42076);

return statearr_42099;
})();
var statearr_42100_42120 = state_42096__$1;
(statearr_42100_42120[(2)] = null);

(statearr_42100_42120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42097 === (4))){
var inst_42079 = (state_42096[(8)]);
var inst_42079__$1 = (state_42096[(2)]);
var inst_42080 = (inst_42079__$1 == null);
var state_42096__$1 = (function (){var statearr_42101 = state_42096;
(statearr_42101[(8)] = inst_42079__$1);

return statearr_42101;
})();
if(cljs.core.truth_(inst_42080)){
var statearr_42102_42121 = state_42096__$1;
(statearr_42102_42121[(1)] = (5));

} else {
var statearr_42103_42122 = state_42096__$1;
(statearr_42103_42122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42097 === (6))){
var inst_42076 = (state_42096[(7)]);
var inst_42079 = (state_42096[(8)]);
var inst_42083 = (state_42096[(9)]);
var inst_42083__$1 = f.call(null,inst_42076,inst_42079);
var inst_42084 = cljs.core.reduced_QMARK_.call(null,inst_42083__$1);
var state_42096__$1 = (function (){var statearr_42104 = state_42096;
(statearr_42104[(9)] = inst_42083__$1);

return statearr_42104;
})();
if(inst_42084){
var statearr_42105_42123 = state_42096__$1;
(statearr_42105_42123[(1)] = (8));

} else {
var statearr_42106_42124 = state_42096__$1;
(statearr_42106_42124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42097 === (3))){
var inst_42094 = (state_42096[(2)]);
var state_42096__$1 = state_42096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42096__$1,inst_42094);
} else {
if((state_val_42097 === (2))){
var state_42096__$1 = state_42096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42096__$1,(4),ch);
} else {
if((state_val_42097 === (9))){
var inst_42083 = (state_42096[(9)]);
var inst_42076 = inst_42083;
var state_42096__$1 = (function (){var statearr_42107 = state_42096;
(statearr_42107[(7)] = inst_42076);

return statearr_42107;
})();
var statearr_42108_42125 = state_42096__$1;
(statearr_42108_42125[(2)] = null);

(statearr_42108_42125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42097 === (5))){
var inst_42076 = (state_42096[(7)]);
var state_42096__$1 = state_42096;
var statearr_42109_42126 = state_42096__$1;
(statearr_42109_42126[(2)] = inst_42076);

(statearr_42109_42126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42097 === (10))){
var inst_42090 = (state_42096[(2)]);
var state_42096__$1 = state_42096;
var statearr_42110_42127 = state_42096__$1;
(statearr_42110_42127[(2)] = inst_42090);

(statearr_42110_42127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42097 === (8))){
var inst_42083 = (state_42096[(9)]);
var inst_42086 = cljs.core.deref.call(null,inst_42083);
var state_42096__$1 = state_42096;
var statearr_42111_42128 = state_42096__$1;
(statearr_42111_42128[(2)] = inst_42086);

(statearr_42111_42128[(1)] = (10));


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
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41227__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41227__auto____0 = (function (){
var statearr_42115 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42115[(0)] = cljs$core$async$reduce_$_state_machine__41227__auto__);

(statearr_42115[(1)] = (1));

return statearr_42115;
});
var cljs$core$async$reduce_$_state_machine__41227__auto____1 = (function (state_42096){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_42096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e42116){if((e42116 instanceof Object)){
var ex__41230__auto__ = e42116;
var statearr_42117_42129 = state_42096;
(statearr_42117_42129[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42130 = state_42096;
state_42096 = G__42130;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41227__auto__ = function(state_42096){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41227__auto____1.call(this,state_42096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41227__auto____0;
cljs$core$async$reduce_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41227__auto____1;
return cljs$core$async$reduce_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_42118 = f__41339__auto__.call(null);
(statearr_42118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_42118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
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
var args42131 = [];
var len__38772__auto___42183 = arguments.length;
var i__38773__auto___42184 = (0);
while(true){
if((i__38773__auto___42184 < len__38772__auto___42183)){
args42131.push((arguments[i__38773__auto___42184]));

var G__42185 = (i__38773__auto___42184 + (1));
i__38773__auto___42184 = G__42185;
continue;
} else {
}
break;
}

var G__42133 = args42131.length;
switch (G__42133) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42131.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_42158){
var state_val_42159 = (state_42158[(1)]);
if((state_val_42159 === (7))){
var inst_42140 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
var statearr_42160_42187 = state_42158__$1;
(statearr_42160_42187[(2)] = inst_42140);

(statearr_42160_42187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (1))){
var inst_42134 = cljs.core.seq.call(null,coll);
var inst_42135 = inst_42134;
var state_42158__$1 = (function (){var statearr_42161 = state_42158;
(statearr_42161[(7)] = inst_42135);

return statearr_42161;
})();
var statearr_42162_42188 = state_42158__$1;
(statearr_42162_42188[(2)] = null);

(statearr_42162_42188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (4))){
var inst_42135 = (state_42158[(7)]);
var inst_42138 = cljs.core.first.call(null,inst_42135);
var state_42158__$1 = state_42158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42158__$1,(7),ch,inst_42138);
} else {
if((state_val_42159 === (13))){
var inst_42152 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
var statearr_42163_42189 = state_42158__$1;
(statearr_42163_42189[(2)] = inst_42152);

(statearr_42163_42189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (6))){
var inst_42143 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
if(cljs.core.truth_(inst_42143)){
var statearr_42164_42190 = state_42158__$1;
(statearr_42164_42190[(1)] = (8));

} else {
var statearr_42165_42191 = state_42158__$1;
(statearr_42165_42191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (3))){
var inst_42156 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42158__$1,inst_42156);
} else {
if((state_val_42159 === (12))){
var state_42158__$1 = state_42158;
var statearr_42166_42192 = state_42158__$1;
(statearr_42166_42192[(2)] = null);

(statearr_42166_42192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (2))){
var inst_42135 = (state_42158[(7)]);
var state_42158__$1 = state_42158;
if(cljs.core.truth_(inst_42135)){
var statearr_42167_42193 = state_42158__$1;
(statearr_42167_42193[(1)] = (4));

} else {
var statearr_42168_42194 = state_42158__$1;
(statearr_42168_42194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (11))){
var inst_42149 = cljs.core.async.close_BANG_.call(null,ch);
var state_42158__$1 = state_42158;
var statearr_42169_42195 = state_42158__$1;
(statearr_42169_42195[(2)] = inst_42149);

(statearr_42169_42195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (9))){
var state_42158__$1 = state_42158;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42170_42196 = state_42158__$1;
(statearr_42170_42196[(1)] = (11));

} else {
var statearr_42171_42197 = state_42158__$1;
(statearr_42171_42197[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (5))){
var inst_42135 = (state_42158[(7)]);
var state_42158__$1 = state_42158;
var statearr_42172_42198 = state_42158__$1;
(statearr_42172_42198[(2)] = inst_42135);

(statearr_42172_42198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (10))){
var inst_42154 = (state_42158[(2)]);
var state_42158__$1 = state_42158;
var statearr_42173_42199 = state_42158__$1;
(statearr_42173_42199[(2)] = inst_42154);

(statearr_42173_42199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42159 === (8))){
var inst_42135 = (state_42158[(7)]);
var inst_42145 = cljs.core.next.call(null,inst_42135);
var inst_42135__$1 = inst_42145;
var state_42158__$1 = (function (){var statearr_42174 = state_42158;
(statearr_42174[(7)] = inst_42135__$1);

return statearr_42174;
})();
var statearr_42175_42200 = state_42158__$1;
(statearr_42175_42200[(2)] = null);

(statearr_42175_42200[(1)] = (2));


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
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_42179 = [null,null,null,null,null,null,null,null];
(statearr_42179[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_42179[(1)] = (1));

return statearr_42179;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_42158){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_42158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e42180){if((e42180 instanceof Object)){
var ex__41230__auto__ = e42180;
var statearr_42181_42201 = state_42158;
(statearr_42181_42201[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42202 = state_42158;
state_42158 = G__42202;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_42158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_42158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_42182 = f__41339__auto__.call(null);
(statearr_42182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_42182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
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
var x__38365__auto__ = (((_ == null))?null:_);
var m__38366__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,_);
} else {
var m__38366__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,_);
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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__38366__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m,ch);
} else {
var m__38366__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m,ch);
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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m);
} else {
var m__38366__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async42424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42424 = (function (mult,ch,cs,meta42425){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta42425 = meta42425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42426,meta42425__$1){
var self__ = this;
var _42426__$1 = this;
return (new cljs.core.async.t_cljs$core$async42424(self__.mult,self__.ch,self__.cs,meta42425__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42426){
var self__ = this;
var _42426__$1 = this;
return self__.meta42425;
});})(cs))
;

cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42424.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42424.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42425","meta42425",470299959,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42424";

cljs.core.async.t_cljs$core$async42424.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async42424");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42424 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42424(mult__$1,ch__$1,cs__$1,meta42425){
return (new cljs.core.async.t_cljs$core$async42424(mult__$1,ch__$1,cs__$1,meta42425));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42424(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41338__auto___42645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___42645,cs,m,dchan,dctr,done){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___42645,cs,m,dchan,dctr,done){
return (function (state_42557){
var state_val_42558 = (state_42557[(1)]);
if((state_val_42558 === (7))){
var inst_42553 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42559_42646 = state_42557__$1;
(statearr_42559_42646[(2)] = inst_42553);

(statearr_42559_42646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (20))){
var inst_42458 = (state_42557[(7)]);
var inst_42468 = cljs.core.first.call(null,inst_42458);
var inst_42469 = cljs.core.nth.call(null,inst_42468,(0),null);
var inst_42470 = cljs.core.nth.call(null,inst_42468,(1),null);
var state_42557__$1 = (function (){var statearr_42560 = state_42557;
(statearr_42560[(8)] = inst_42469);

return statearr_42560;
})();
if(cljs.core.truth_(inst_42470)){
var statearr_42561_42647 = state_42557__$1;
(statearr_42561_42647[(1)] = (22));

} else {
var statearr_42562_42648 = state_42557__$1;
(statearr_42562_42648[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (27))){
var inst_42498 = (state_42557[(9)]);
var inst_42429 = (state_42557[(10)]);
var inst_42505 = (state_42557[(11)]);
var inst_42500 = (state_42557[(12)]);
var inst_42505__$1 = cljs.core._nth.call(null,inst_42498,inst_42500);
var inst_42506 = cljs.core.async.put_BANG_.call(null,inst_42505__$1,inst_42429,done);
var state_42557__$1 = (function (){var statearr_42563 = state_42557;
(statearr_42563[(11)] = inst_42505__$1);

return statearr_42563;
})();
if(cljs.core.truth_(inst_42506)){
var statearr_42564_42649 = state_42557__$1;
(statearr_42564_42649[(1)] = (30));

} else {
var statearr_42565_42650 = state_42557__$1;
(statearr_42565_42650[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (1))){
var state_42557__$1 = state_42557;
var statearr_42566_42651 = state_42557__$1;
(statearr_42566_42651[(2)] = null);

(statearr_42566_42651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (24))){
var inst_42458 = (state_42557[(7)]);
var inst_42475 = (state_42557[(2)]);
var inst_42476 = cljs.core.next.call(null,inst_42458);
var inst_42438 = inst_42476;
var inst_42439 = null;
var inst_42440 = (0);
var inst_42441 = (0);
var state_42557__$1 = (function (){var statearr_42567 = state_42557;
(statearr_42567[(13)] = inst_42441);

(statearr_42567[(14)] = inst_42439);

(statearr_42567[(15)] = inst_42438);

(statearr_42567[(16)] = inst_42475);

(statearr_42567[(17)] = inst_42440);

return statearr_42567;
})();
var statearr_42568_42652 = state_42557__$1;
(statearr_42568_42652[(2)] = null);

(statearr_42568_42652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (39))){
var state_42557__$1 = state_42557;
var statearr_42572_42653 = state_42557__$1;
(statearr_42572_42653[(2)] = null);

(statearr_42572_42653[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (4))){
var inst_42429 = (state_42557[(10)]);
var inst_42429__$1 = (state_42557[(2)]);
var inst_42430 = (inst_42429__$1 == null);
var state_42557__$1 = (function (){var statearr_42573 = state_42557;
(statearr_42573[(10)] = inst_42429__$1);

return statearr_42573;
})();
if(cljs.core.truth_(inst_42430)){
var statearr_42574_42654 = state_42557__$1;
(statearr_42574_42654[(1)] = (5));

} else {
var statearr_42575_42655 = state_42557__$1;
(statearr_42575_42655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (15))){
var inst_42441 = (state_42557[(13)]);
var inst_42439 = (state_42557[(14)]);
var inst_42438 = (state_42557[(15)]);
var inst_42440 = (state_42557[(17)]);
var inst_42454 = (state_42557[(2)]);
var inst_42455 = (inst_42441 + (1));
var tmp42569 = inst_42439;
var tmp42570 = inst_42438;
var tmp42571 = inst_42440;
var inst_42438__$1 = tmp42570;
var inst_42439__$1 = tmp42569;
var inst_42440__$1 = tmp42571;
var inst_42441__$1 = inst_42455;
var state_42557__$1 = (function (){var statearr_42576 = state_42557;
(statearr_42576[(18)] = inst_42454);

(statearr_42576[(13)] = inst_42441__$1);

(statearr_42576[(14)] = inst_42439__$1);

(statearr_42576[(15)] = inst_42438__$1);

(statearr_42576[(17)] = inst_42440__$1);

return statearr_42576;
})();
var statearr_42577_42656 = state_42557__$1;
(statearr_42577_42656[(2)] = null);

(statearr_42577_42656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (21))){
var inst_42479 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42581_42657 = state_42557__$1;
(statearr_42581_42657[(2)] = inst_42479);

(statearr_42581_42657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (31))){
var inst_42505 = (state_42557[(11)]);
var inst_42509 = done.call(null,null);
var inst_42510 = cljs.core.async.untap_STAR_.call(null,m,inst_42505);
var state_42557__$1 = (function (){var statearr_42582 = state_42557;
(statearr_42582[(19)] = inst_42509);

return statearr_42582;
})();
var statearr_42583_42658 = state_42557__$1;
(statearr_42583_42658[(2)] = inst_42510);

(statearr_42583_42658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (32))){
var inst_42499 = (state_42557[(20)]);
var inst_42498 = (state_42557[(9)]);
var inst_42500 = (state_42557[(12)]);
var inst_42497 = (state_42557[(21)]);
var inst_42512 = (state_42557[(2)]);
var inst_42513 = (inst_42500 + (1));
var tmp42578 = inst_42499;
var tmp42579 = inst_42498;
var tmp42580 = inst_42497;
var inst_42497__$1 = tmp42580;
var inst_42498__$1 = tmp42579;
var inst_42499__$1 = tmp42578;
var inst_42500__$1 = inst_42513;
var state_42557__$1 = (function (){var statearr_42584 = state_42557;
(statearr_42584[(20)] = inst_42499__$1);

(statearr_42584[(9)] = inst_42498__$1);

(statearr_42584[(22)] = inst_42512);

(statearr_42584[(12)] = inst_42500__$1);

(statearr_42584[(21)] = inst_42497__$1);

return statearr_42584;
})();
var statearr_42585_42659 = state_42557__$1;
(statearr_42585_42659[(2)] = null);

(statearr_42585_42659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (40))){
var inst_42525 = (state_42557[(23)]);
var inst_42529 = done.call(null,null);
var inst_42530 = cljs.core.async.untap_STAR_.call(null,m,inst_42525);
var state_42557__$1 = (function (){var statearr_42586 = state_42557;
(statearr_42586[(24)] = inst_42529);

return statearr_42586;
})();
var statearr_42587_42660 = state_42557__$1;
(statearr_42587_42660[(2)] = inst_42530);

(statearr_42587_42660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (33))){
var inst_42516 = (state_42557[(25)]);
var inst_42518 = cljs.core.chunked_seq_QMARK_.call(null,inst_42516);
var state_42557__$1 = state_42557;
if(inst_42518){
var statearr_42588_42661 = state_42557__$1;
(statearr_42588_42661[(1)] = (36));

} else {
var statearr_42589_42662 = state_42557__$1;
(statearr_42589_42662[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (13))){
var inst_42448 = (state_42557[(26)]);
var inst_42451 = cljs.core.async.close_BANG_.call(null,inst_42448);
var state_42557__$1 = state_42557;
var statearr_42590_42663 = state_42557__$1;
(statearr_42590_42663[(2)] = inst_42451);

(statearr_42590_42663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (22))){
var inst_42469 = (state_42557[(8)]);
var inst_42472 = cljs.core.async.close_BANG_.call(null,inst_42469);
var state_42557__$1 = state_42557;
var statearr_42591_42664 = state_42557__$1;
(statearr_42591_42664[(2)] = inst_42472);

(statearr_42591_42664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (36))){
var inst_42516 = (state_42557[(25)]);
var inst_42520 = cljs.core.chunk_first.call(null,inst_42516);
var inst_42521 = cljs.core.chunk_rest.call(null,inst_42516);
var inst_42522 = cljs.core.count.call(null,inst_42520);
var inst_42497 = inst_42521;
var inst_42498 = inst_42520;
var inst_42499 = inst_42522;
var inst_42500 = (0);
var state_42557__$1 = (function (){var statearr_42592 = state_42557;
(statearr_42592[(20)] = inst_42499);

(statearr_42592[(9)] = inst_42498);

(statearr_42592[(12)] = inst_42500);

(statearr_42592[(21)] = inst_42497);

return statearr_42592;
})();
var statearr_42593_42665 = state_42557__$1;
(statearr_42593_42665[(2)] = null);

(statearr_42593_42665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (41))){
var inst_42516 = (state_42557[(25)]);
var inst_42532 = (state_42557[(2)]);
var inst_42533 = cljs.core.next.call(null,inst_42516);
var inst_42497 = inst_42533;
var inst_42498 = null;
var inst_42499 = (0);
var inst_42500 = (0);
var state_42557__$1 = (function (){var statearr_42594 = state_42557;
(statearr_42594[(20)] = inst_42499);

(statearr_42594[(9)] = inst_42498);

(statearr_42594[(12)] = inst_42500);

(statearr_42594[(21)] = inst_42497);

(statearr_42594[(27)] = inst_42532);

return statearr_42594;
})();
var statearr_42595_42666 = state_42557__$1;
(statearr_42595_42666[(2)] = null);

(statearr_42595_42666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (43))){
var state_42557__$1 = state_42557;
var statearr_42596_42667 = state_42557__$1;
(statearr_42596_42667[(2)] = null);

(statearr_42596_42667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (29))){
var inst_42541 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42597_42668 = state_42557__$1;
(statearr_42597_42668[(2)] = inst_42541);

(statearr_42597_42668[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (44))){
var inst_42550 = (state_42557[(2)]);
var state_42557__$1 = (function (){var statearr_42598 = state_42557;
(statearr_42598[(28)] = inst_42550);

return statearr_42598;
})();
var statearr_42599_42669 = state_42557__$1;
(statearr_42599_42669[(2)] = null);

(statearr_42599_42669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (6))){
var inst_42489 = (state_42557[(29)]);
var inst_42488 = cljs.core.deref.call(null,cs);
var inst_42489__$1 = cljs.core.keys.call(null,inst_42488);
var inst_42490 = cljs.core.count.call(null,inst_42489__$1);
var inst_42491 = cljs.core.reset_BANG_.call(null,dctr,inst_42490);
var inst_42496 = cljs.core.seq.call(null,inst_42489__$1);
var inst_42497 = inst_42496;
var inst_42498 = null;
var inst_42499 = (0);
var inst_42500 = (0);
var state_42557__$1 = (function (){var statearr_42600 = state_42557;
(statearr_42600[(30)] = inst_42491);

(statearr_42600[(29)] = inst_42489__$1);

(statearr_42600[(20)] = inst_42499);

(statearr_42600[(9)] = inst_42498);

(statearr_42600[(12)] = inst_42500);

(statearr_42600[(21)] = inst_42497);

return statearr_42600;
})();
var statearr_42601_42670 = state_42557__$1;
(statearr_42601_42670[(2)] = null);

(statearr_42601_42670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (28))){
var inst_42516 = (state_42557[(25)]);
var inst_42497 = (state_42557[(21)]);
var inst_42516__$1 = cljs.core.seq.call(null,inst_42497);
var state_42557__$1 = (function (){var statearr_42602 = state_42557;
(statearr_42602[(25)] = inst_42516__$1);

return statearr_42602;
})();
if(inst_42516__$1){
var statearr_42603_42671 = state_42557__$1;
(statearr_42603_42671[(1)] = (33));

} else {
var statearr_42604_42672 = state_42557__$1;
(statearr_42604_42672[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (25))){
var inst_42499 = (state_42557[(20)]);
var inst_42500 = (state_42557[(12)]);
var inst_42502 = (inst_42500 < inst_42499);
var inst_42503 = inst_42502;
var state_42557__$1 = state_42557;
if(cljs.core.truth_(inst_42503)){
var statearr_42605_42673 = state_42557__$1;
(statearr_42605_42673[(1)] = (27));

} else {
var statearr_42606_42674 = state_42557__$1;
(statearr_42606_42674[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (34))){
var state_42557__$1 = state_42557;
var statearr_42607_42675 = state_42557__$1;
(statearr_42607_42675[(2)] = null);

(statearr_42607_42675[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (17))){
var state_42557__$1 = state_42557;
var statearr_42608_42676 = state_42557__$1;
(statearr_42608_42676[(2)] = null);

(statearr_42608_42676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (3))){
var inst_42555 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42557__$1,inst_42555);
} else {
if((state_val_42558 === (12))){
var inst_42484 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42609_42677 = state_42557__$1;
(statearr_42609_42677[(2)] = inst_42484);

(statearr_42609_42677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (2))){
var state_42557__$1 = state_42557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42557__$1,(4),ch);
} else {
if((state_val_42558 === (23))){
var state_42557__$1 = state_42557;
var statearr_42610_42678 = state_42557__$1;
(statearr_42610_42678[(2)] = null);

(statearr_42610_42678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (35))){
var inst_42539 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42611_42679 = state_42557__$1;
(statearr_42611_42679[(2)] = inst_42539);

(statearr_42611_42679[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (19))){
var inst_42458 = (state_42557[(7)]);
var inst_42462 = cljs.core.chunk_first.call(null,inst_42458);
var inst_42463 = cljs.core.chunk_rest.call(null,inst_42458);
var inst_42464 = cljs.core.count.call(null,inst_42462);
var inst_42438 = inst_42463;
var inst_42439 = inst_42462;
var inst_42440 = inst_42464;
var inst_42441 = (0);
var state_42557__$1 = (function (){var statearr_42612 = state_42557;
(statearr_42612[(13)] = inst_42441);

(statearr_42612[(14)] = inst_42439);

(statearr_42612[(15)] = inst_42438);

(statearr_42612[(17)] = inst_42440);

return statearr_42612;
})();
var statearr_42613_42680 = state_42557__$1;
(statearr_42613_42680[(2)] = null);

(statearr_42613_42680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (11))){
var inst_42438 = (state_42557[(15)]);
var inst_42458 = (state_42557[(7)]);
var inst_42458__$1 = cljs.core.seq.call(null,inst_42438);
var state_42557__$1 = (function (){var statearr_42614 = state_42557;
(statearr_42614[(7)] = inst_42458__$1);

return statearr_42614;
})();
if(inst_42458__$1){
var statearr_42615_42681 = state_42557__$1;
(statearr_42615_42681[(1)] = (16));

} else {
var statearr_42616_42682 = state_42557__$1;
(statearr_42616_42682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (9))){
var inst_42486 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42617_42683 = state_42557__$1;
(statearr_42617_42683[(2)] = inst_42486);

(statearr_42617_42683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (5))){
var inst_42436 = cljs.core.deref.call(null,cs);
var inst_42437 = cljs.core.seq.call(null,inst_42436);
var inst_42438 = inst_42437;
var inst_42439 = null;
var inst_42440 = (0);
var inst_42441 = (0);
var state_42557__$1 = (function (){var statearr_42618 = state_42557;
(statearr_42618[(13)] = inst_42441);

(statearr_42618[(14)] = inst_42439);

(statearr_42618[(15)] = inst_42438);

(statearr_42618[(17)] = inst_42440);

return statearr_42618;
})();
var statearr_42619_42684 = state_42557__$1;
(statearr_42619_42684[(2)] = null);

(statearr_42619_42684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (14))){
var state_42557__$1 = state_42557;
var statearr_42620_42685 = state_42557__$1;
(statearr_42620_42685[(2)] = null);

(statearr_42620_42685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (45))){
var inst_42547 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42621_42686 = state_42557__$1;
(statearr_42621_42686[(2)] = inst_42547);

(statearr_42621_42686[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (26))){
var inst_42489 = (state_42557[(29)]);
var inst_42543 = (state_42557[(2)]);
var inst_42544 = cljs.core.seq.call(null,inst_42489);
var state_42557__$1 = (function (){var statearr_42622 = state_42557;
(statearr_42622[(31)] = inst_42543);

return statearr_42622;
})();
if(inst_42544){
var statearr_42623_42687 = state_42557__$1;
(statearr_42623_42687[(1)] = (42));

} else {
var statearr_42624_42688 = state_42557__$1;
(statearr_42624_42688[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (16))){
var inst_42458 = (state_42557[(7)]);
var inst_42460 = cljs.core.chunked_seq_QMARK_.call(null,inst_42458);
var state_42557__$1 = state_42557;
if(inst_42460){
var statearr_42625_42689 = state_42557__$1;
(statearr_42625_42689[(1)] = (19));

} else {
var statearr_42626_42690 = state_42557__$1;
(statearr_42626_42690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (38))){
var inst_42536 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42627_42691 = state_42557__$1;
(statearr_42627_42691[(2)] = inst_42536);

(statearr_42627_42691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (30))){
var state_42557__$1 = state_42557;
var statearr_42628_42692 = state_42557__$1;
(statearr_42628_42692[(2)] = null);

(statearr_42628_42692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (10))){
var inst_42441 = (state_42557[(13)]);
var inst_42439 = (state_42557[(14)]);
var inst_42447 = cljs.core._nth.call(null,inst_42439,inst_42441);
var inst_42448 = cljs.core.nth.call(null,inst_42447,(0),null);
var inst_42449 = cljs.core.nth.call(null,inst_42447,(1),null);
var state_42557__$1 = (function (){var statearr_42629 = state_42557;
(statearr_42629[(26)] = inst_42448);

return statearr_42629;
})();
if(cljs.core.truth_(inst_42449)){
var statearr_42630_42693 = state_42557__$1;
(statearr_42630_42693[(1)] = (13));

} else {
var statearr_42631_42694 = state_42557__$1;
(statearr_42631_42694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (18))){
var inst_42482 = (state_42557[(2)]);
var state_42557__$1 = state_42557;
var statearr_42632_42695 = state_42557__$1;
(statearr_42632_42695[(2)] = inst_42482);

(statearr_42632_42695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (42))){
var state_42557__$1 = state_42557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42557__$1,(45),dchan);
} else {
if((state_val_42558 === (37))){
var inst_42525 = (state_42557[(23)]);
var inst_42429 = (state_42557[(10)]);
var inst_42516 = (state_42557[(25)]);
var inst_42525__$1 = cljs.core.first.call(null,inst_42516);
var inst_42526 = cljs.core.async.put_BANG_.call(null,inst_42525__$1,inst_42429,done);
var state_42557__$1 = (function (){var statearr_42633 = state_42557;
(statearr_42633[(23)] = inst_42525__$1);

return statearr_42633;
})();
if(cljs.core.truth_(inst_42526)){
var statearr_42634_42696 = state_42557__$1;
(statearr_42634_42696[(1)] = (39));

} else {
var statearr_42635_42697 = state_42557__$1;
(statearr_42635_42697[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42558 === (8))){
var inst_42441 = (state_42557[(13)]);
var inst_42440 = (state_42557[(17)]);
var inst_42443 = (inst_42441 < inst_42440);
var inst_42444 = inst_42443;
var state_42557__$1 = state_42557;
if(cljs.core.truth_(inst_42444)){
var statearr_42636_42698 = state_42557__$1;
(statearr_42636_42698[(1)] = (10));

} else {
var statearr_42637_42699 = state_42557__$1;
(statearr_42637_42699[(1)] = (11));

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
});})(c__41338__auto___42645,cs,m,dchan,dctr,done))
;
return ((function (switch__41226__auto__,c__41338__auto___42645,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41227__auto__ = null;
var cljs$core$async$mult_$_state_machine__41227__auto____0 = (function (){
var statearr_42641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42641[(0)] = cljs$core$async$mult_$_state_machine__41227__auto__);

(statearr_42641[(1)] = (1));

return statearr_42641;
});
var cljs$core$async$mult_$_state_machine__41227__auto____1 = (function (state_42557){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_42557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e42642){if((e42642 instanceof Object)){
var ex__41230__auto__ = e42642;
var statearr_42643_42700 = state_42557;
(statearr_42643_42700[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42701 = state_42557;
state_42557 = G__42701;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41227__auto__ = function(state_42557){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41227__auto____1.call(this,state_42557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41227__auto____0;
cljs$core$async$mult_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41227__auto____1;
return cljs$core$async$mult_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___42645,cs,m,dchan,dctr,done))
})();
var state__41340__auto__ = (function (){var statearr_42644 = f__41339__auto__.call(null);
(statearr_42644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___42645);

return statearr_42644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___42645,cs,m,dchan,dctr,done))
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
var args42702 = [];
var len__38772__auto___42705 = arguments.length;
var i__38773__auto___42706 = (0);
while(true){
if((i__38773__auto___42706 < len__38772__auto___42705)){
args42702.push((arguments[i__38773__auto___42706]));

var G__42707 = (i__38773__auto___42706 + (1));
i__38773__auto___42706 = G__42707;
continue;
} else {
}
break;
}

var G__42704 = args42702.length;
switch (G__42704) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42702.length)].join('')));

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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m,ch);
} else {
var m__38366__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m,ch);
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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m,ch);
} else {
var m__38366__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m,ch);
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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m);
} else {
var m__38366__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m);
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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m,state_map);
} else {
var m__38366__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m,state_map);
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
var x__38365__auto__ = (((m == null))?null:m);
var m__38366__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,m,mode);
} else {
var m__38366__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__38779__auto__ = [];
var len__38772__auto___42719 = arguments.length;
var i__38773__auto___42720 = (0);
while(true){
if((i__38773__auto___42720 < len__38772__auto___42719)){
args__38779__auto__.push((arguments[i__38773__auto___42720]));

var G__42721 = (i__38773__auto___42720 + (1));
i__38773__auto___42720 = G__42721;
continue;
} else {
}
break;
}

var argseq__38780__auto__ = ((((3) < args__38779__auto__.length))?(new cljs.core.IndexedSeq(args__38779__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38780__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42713){
var map__42714 = p__42713;
var map__42714__$1 = ((((!((map__42714 == null)))?((((map__42714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42714):map__42714);
var opts = map__42714__$1;
var statearr_42716_42722 = state;
(statearr_42716_42722[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42714,map__42714__$1,opts){
return (function (val){
var statearr_42717_42723 = state;
(statearr_42717_42723[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42714,map__42714__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42718_42724 = state;
(statearr_42718_42724[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42709){
var G__42710 = cljs.core.first.call(null,seq42709);
var seq42709__$1 = cljs.core.next.call(null,seq42709);
var G__42711 = cljs.core.first.call(null,seq42709__$1);
var seq42709__$2 = cljs.core.next.call(null,seq42709__$1);
var G__42712 = cljs.core.first.call(null,seq42709__$2);
var seq42709__$3 = cljs.core.next.call(null,seq42709__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42710,G__42711,G__42712,seq42709__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42888 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42889){
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
this.meta42889 = meta42889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42890,meta42889__$1){
var self__ = this;
var _42890__$1 = this;
return (new cljs.core.async.t_cljs$core$async42888(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42889__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42890){
var self__ = this;
var _42890__$1 = this;
return self__.meta42889;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42888.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42889","meta42889",1013210528,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42888";

cljs.core.async.t_cljs$core$async42888.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async42888");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42888 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42888(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42889){
return (new cljs.core.async.t_cljs$core$async42888(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42889));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42888(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41338__auto___43051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43051,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43051,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42988){
var state_val_42989 = (state_42988[(1)]);
if((state_val_42989 === (7))){
var inst_42906 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
var statearr_42990_43052 = state_42988__$1;
(statearr_42990_43052[(2)] = inst_42906);

(statearr_42990_43052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (20))){
var inst_42918 = (state_42988[(7)]);
var state_42988__$1 = state_42988;
var statearr_42991_43053 = state_42988__$1;
(statearr_42991_43053[(2)] = inst_42918);

(statearr_42991_43053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (27))){
var state_42988__$1 = state_42988;
var statearr_42992_43054 = state_42988__$1;
(statearr_42992_43054[(2)] = null);

(statearr_42992_43054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (1))){
var inst_42894 = (state_42988[(8)]);
var inst_42894__$1 = calc_state.call(null);
var inst_42896 = (inst_42894__$1 == null);
var inst_42897 = cljs.core.not.call(null,inst_42896);
var state_42988__$1 = (function (){var statearr_42993 = state_42988;
(statearr_42993[(8)] = inst_42894__$1);

return statearr_42993;
})();
if(inst_42897){
var statearr_42994_43055 = state_42988__$1;
(statearr_42994_43055[(1)] = (2));

} else {
var statearr_42995_43056 = state_42988__$1;
(statearr_42995_43056[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (24))){
var inst_42962 = (state_42988[(9)]);
var inst_42948 = (state_42988[(10)]);
var inst_42941 = (state_42988[(11)]);
var inst_42962__$1 = inst_42941.call(null,inst_42948);
var state_42988__$1 = (function (){var statearr_42996 = state_42988;
(statearr_42996[(9)] = inst_42962__$1);

return statearr_42996;
})();
if(cljs.core.truth_(inst_42962__$1)){
var statearr_42997_43057 = state_42988__$1;
(statearr_42997_43057[(1)] = (29));

} else {
var statearr_42998_43058 = state_42988__$1;
(statearr_42998_43058[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (4))){
var inst_42909 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
if(cljs.core.truth_(inst_42909)){
var statearr_42999_43059 = state_42988__$1;
(statearr_42999_43059[(1)] = (8));

} else {
var statearr_43000_43060 = state_42988__$1;
(statearr_43000_43060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (15))){
var inst_42935 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
if(cljs.core.truth_(inst_42935)){
var statearr_43001_43061 = state_42988__$1;
(statearr_43001_43061[(1)] = (19));

} else {
var statearr_43002_43062 = state_42988__$1;
(statearr_43002_43062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (21))){
var inst_42940 = (state_42988[(12)]);
var inst_42940__$1 = (state_42988[(2)]);
var inst_42941 = cljs.core.get.call(null,inst_42940__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42942 = cljs.core.get.call(null,inst_42940__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42943 = cljs.core.get.call(null,inst_42940__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42988__$1 = (function (){var statearr_43003 = state_42988;
(statearr_43003[(13)] = inst_42942);

(statearr_43003[(11)] = inst_42941);

(statearr_43003[(12)] = inst_42940__$1);

return statearr_43003;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42988__$1,(22),inst_42943);
} else {
if((state_val_42989 === (31))){
var inst_42970 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
if(cljs.core.truth_(inst_42970)){
var statearr_43004_43063 = state_42988__$1;
(statearr_43004_43063[(1)] = (32));

} else {
var statearr_43005_43064 = state_42988__$1;
(statearr_43005_43064[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (32))){
var inst_42947 = (state_42988[(14)]);
var state_42988__$1 = state_42988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42988__$1,(35),out,inst_42947);
} else {
if((state_val_42989 === (33))){
var inst_42940 = (state_42988[(12)]);
var inst_42918 = inst_42940;
var state_42988__$1 = (function (){var statearr_43006 = state_42988;
(statearr_43006[(7)] = inst_42918);

return statearr_43006;
})();
var statearr_43007_43065 = state_42988__$1;
(statearr_43007_43065[(2)] = null);

(statearr_43007_43065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (13))){
var inst_42918 = (state_42988[(7)]);
var inst_42925 = inst_42918.cljs$lang$protocol_mask$partition0$;
var inst_42926 = (inst_42925 & (64));
var inst_42927 = inst_42918.cljs$core$ISeq$;
var inst_42928 = (inst_42926) || (inst_42927);
var state_42988__$1 = state_42988;
if(cljs.core.truth_(inst_42928)){
var statearr_43008_43066 = state_42988__$1;
(statearr_43008_43066[(1)] = (16));

} else {
var statearr_43009_43067 = state_42988__$1;
(statearr_43009_43067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (22))){
var inst_42947 = (state_42988[(14)]);
var inst_42948 = (state_42988[(10)]);
var inst_42946 = (state_42988[(2)]);
var inst_42947__$1 = cljs.core.nth.call(null,inst_42946,(0),null);
var inst_42948__$1 = cljs.core.nth.call(null,inst_42946,(1),null);
var inst_42949 = (inst_42947__$1 == null);
var inst_42950 = cljs.core._EQ_.call(null,inst_42948__$1,change);
var inst_42951 = (inst_42949) || (inst_42950);
var state_42988__$1 = (function (){var statearr_43010 = state_42988;
(statearr_43010[(14)] = inst_42947__$1);

(statearr_43010[(10)] = inst_42948__$1);

return statearr_43010;
})();
if(cljs.core.truth_(inst_42951)){
var statearr_43011_43068 = state_42988__$1;
(statearr_43011_43068[(1)] = (23));

} else {
var statearr_43012_43069 = state_42988__$1;
(statearr_43012_43069[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (36))){
var inst_42940 = (state_42988[(12)]);
var inst_42918 = inst_42940;
var state_42988__$1 = (function (){var statearr_43013 = state_42988;
(statearr_43013[(7)] = inst_42918);

return statearr_43013;
})();
var statearr_43014_43070 = state_42988__$1;
(statearr_43014_43070[(2)] = null);

(statearr_43014_43070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (29))){
var inst_42962 = (state_42988[(9)]);
var state_42988__$1 = state_42988;
var statearr_43015_43071 = state_42988__$1;
(statearr_43015_43071[(2)] = inst_42962);

(statearr_43015_43071[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (6))){
var state_42988__$1 = state_42988;
var statearr_43016_43072 = state_42988__$1;
(statearr_43016_43072[(2)] = false);

(statearr_43016_43072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (28))){
var inst_42958 = (state_42988[(2)]);
var inst_42959 = calc_state.call(null);
var inst_42918 = inst_42959;
var state_42988__$1 = (function (){var statearr_43017 = state_42988;
(statearr_43017[(15)] = inst_42958);

(statearr_43017[(7)] = inst_42918);

return statearr_43017;
})();
var statearr_43018_43073 = state_42988__$1;
(statearr_43018_43073[(2)] = null);

(statearr_43018_43073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (25))){
var inst_42984 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
var statearr_43019_43074 = state_42988__$1;
(statearr_43019_43074[(2)] = inst_42984);

(statearr_43019_43074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (34))){
var inst_42982 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
var statearr_43020_43075 = state_42988__$1;
(statearr_43020_43075[(2)] = inst_42982);

(statearr_43020_43075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (17))){
var state_42988__$1 = state_42988;
var statearr_43021_43076 = state_42988__$1;
(statearr_43021_43076[(2)] = false);

(statearr_43021_43076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (3))){
var state_42988__$1 = state_42988;
var statearr_43022_43077 = state_42988__$1;
(statearr_43022_43077[(2)] = false);

(statearr_43022_43077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (12))){
var inst_42986 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42988__$1,inst_42986);
} else {
if((state_val_42989 === (2))){
var inst_42894 = (state_42988[(8)]);
var inst_42899 = inst_42894.cljs$lang$protocol_mask$partition0$;
var inst_42900 = (inst_42899 & (64));
var inst_42901 = inst_42894.cljs$core$ISeq$;
var inst_42902 = (inst_42900) || (inst_42901);
var state_42988__$1 = state_42988;
if(cljs.core.truth_(inst_42902)){
var statearr_43023_43078 = state_42988__$1;
(statearr_43023_43078[(1)] = (5));

} else {
var statearr_43024_43079 = state_42988__$1;
(statearr_43024_43079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (23))){
var inst_42947 = (state_42988[(14)]);
var inst_42953 = (inst_42947 == null);
var state_42988__$1 = state_42988;
if(cljs.core.truth_(inst_42953)){
var statearr_43025_43080 = state_42988__$1;
(statearr_43025_43080[(1)] = (26));

} else {
var statearr_43026_43081 = state_42988__$1;
(statearr_43026_43081[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (35))){
var inst_42973 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
if(cljs.core.truth_(inst_42973)){
var statearr_43027_43082 = state_42988__$1;
(statearr_43027_43082[(1)] = (36));

} else {
var statearr_43028_43083 = state_42988__$1;
(statearr_43028_43083[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (19))){
var inst_42918 = (state_42988[(7)]);
var inst_42937 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42918);
var state_42988__$1 = state_42988;
var statearr_43029_43084 = state_42988__$1;
(statearr_43029_43084[(2)] = inst_42937);

(statearr_43029_43084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (11))){
var inst_42918 = (state_42988[(7)]);
var inst_42922 = (inst_42918 == null);
var inst_42923 = cljs.core.not.call(null,inst_42922);
var state_42988__$1 = state_42988;
if(inst_42923){
var statearr_43030_43085 = state_42988__$1;
(statearr_43030_43085[(1)] = (13));

} else {
var statearr_43031_43086 = state_42988__$1;
(statearr_43031_43086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (9))){
var inst_42894 = (state_42988[(8)]);
var state_42988__$1 = state_42988;
var statearr_43032_43087 = state_42988__$1;
(statearr_43032_43087[(2)] = inst_42894);

(statearr_43032_43087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (5))){
var state_42988__$1 = state_42988;
var statearr_43033_43088 = state_42988__$1;
(statearr_43033_43088[(2)] = true);

(statearr_43033_43088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (14))){
var state_42988__$1 = state_42988;
var statearr_43034_43089 = state_42988__$1;
(statearr_43034_43089[(2)] = false);

(statearr_43034_43089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (26))){
var inst_42948 = (state_42988[(10)]);
var inst_42955 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42948);
var state_42988__$1 = state_42988;
var statearr_43035_43090 = state_42988__$1;
(statearr_43035_43090[(2)] = inst_42955);

(statearr_43035_43090[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (16))){
var state_42988__$1 = state_42988;
var statearr_43036_43091 = state_42988__$1;
(statearr_43036_43091[(2)] = true);

(statearr_43036_43091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (38))){
var inst_42978 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
var statearr_43037_43092 = state_42988__$1;
(statearr_43037_43092[(2)] = inst_42978);

(statearr_43037_43092[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (30))){
var inst_42942 = (state_42988[(13)]);
var inst_42948 = (state_42988[(10)]);
var inst_42941 = (state_42988[(11)]);
var inst_42965 = cljs.core.empty_QMARK_.call(null,inst_42941);
var inst_42966 = inst_42942.call(null,inst_42948);
var inst_42967 = cljs.core.not.call(null,inst_42966);
var inst_42968 = (inst_42965) && (inst_42967);
var state_42988__$1 = state_42988;
var statearr_43038_43093 = state_42988__$1;
(statearr_43038_43093[(2)] = inst_42968);

(statearr_43038_43093[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (10))){
var inst_42894 = (state_42988[(8)]);
var inst_42914 = (state_42988[(2)]);
var inst_42915 = cljs.core.get.call(null,inst_42914,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42916 = cljs.core.get.call(null,inst_42914,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42917 = cljs.core.get.call(null,inst_42914,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42918 = inst_42894;
var state_42988__$1 = (function (){var statearr_43039 = state_42988;
(statearr_43039[(16)] = inst_42916);

(statearr_43039[(17)] = inst_42915);

(statearr_43039[(7)] = inst_42918);

(statearr_43039[(18)] = inst_42917);

return statearr_43039;
})();
var statearr_43040_43094 = state_42988__$1;
(statearr_43040_43094[(2)] = null);

(statearr_43040_43094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (18))){
var inst_42932 = (state_42988[(2)]);
var state_42988__$1 = state_42988;
var statearr_43041_43095 = state_42988__$1;
(statearr_43041_43095[(2)] = inst_42932);

(statearr_43041_43095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (37))){
var state_42988__$1 = state_42988;
var statearr_43042_43096 = state_42988__$1;
(statearr_43042_43096[(2)] = null);

(statearr_43042_43096[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42989 === (8))){
var inst_42894 = (state_42988[(8)]);
var inst_42911 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42894);
var state_42988__$1 = state_42988;
var statearr_43043_43097 = state_42988__$1;
(statearr_43043_43097[(2)] = inst_42911);

(statearr_43043_43097[(1)] = (10));


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
});})(c__41338__auto___43051,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41226__auto__,c__41338__auto___43051,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41227__auto__ = null;
var cljs$core$async$mix_$_state_machine__41227__auto____0 = (function (){
var statearr_43047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43047[(0)] = cljs$core$async$mix_$_state_machine__41227__auto__);

(statearr_43047[(1)] = (1));

return statearr_43047;
});
var cljs$core$async$mix_$_state_machine__41227__auto____1 = (function (state_42988){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_42988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43048){if((e43048 instanceof Object)){
var ex__41230__auto__ = e43048;
var statearr_43049_43098 = state_42988;
(statearr_43049_43098[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43099 = state_42988;
state_42988 = G__43099;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41227__auto__ = function(state_42988){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41227__auto____1.call(this,state_42988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41227__auto____0;
cljs$core$async$mix_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41227__auto____1;
return cljs$core$async$mix_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43051,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41340__auto__ = (function (){var statearr_43050 = f__41339__auto__.call(null);
(statearr_43050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43051);

return statearr_43050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43051,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__38365__auto__ = (((p == null))?null:p);
var m__38366__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__38366__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__38365__auto__ = (((p == null))?null:p);
var m__38366__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,p,v,ch);
} else {
var m__38366__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args43100 = [];
var len__38772__auto___43103 = arguments.length;
var i__38773__auto___43104 = (0);
while(true){
if((i__38773__auto___43104 < len__38772__auto___43103)){
args43100.push((arguments[i__38773__auto___43104]));

var G__43105 = (i__38773__auto___43104 + (1));
i__38773__auto___43104 = G__43105;
continue;
} else {
}
break;
}

var G__43102 = args43100.length;
switch (G__43102) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43100.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__38365__auto__ = (((p == null))?null:p);
var m__38366__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,p);
} else {
var m__38366__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,p);
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
var x__38365__auto__ = (((p == null))?null:p);
var m__38366__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38365__auto__)]);
if(!((m__38366__auto__ == null))){
return m__38366__auto__.call(null,p,v);
} else {
var m__38366__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38366__auto____$1 == null))){
return m__38366__auto____$1.call(null,p,v);
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
var args43108 = [];
var len__38772__auto___43233 = arguments.length;
var i__38773__auto___43234 = (0);
while(true){
if((i__38773__auto___43234 < len__38772__auto___43233)){
args43108.push((arguments[i__38773__auto___43234]));

var G__43235 = (i__38773__auto___43234 + (1));
i__38773__auto___43234 = G__43235;
continue;
} else {
}
break;
}

var G__43110 = args43108.length;
switch (G__43110) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43108.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__37702__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__37702__auto__,mults){
return (function (p1__43107_SHARP_){
if(cljs.core.truth_(p1__43107_SHARP_.call(null,topic))){
return p1__43107_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43107_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__37702__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43111 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43111 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43112){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43112 = meta43112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43113,meta43112__$1){
var self__ = this;
var _43113__$1 = this;
return (new cljs.core.async.t_cljs$core$async43111(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43112__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43113){
var self__ = this;
var _43113__$1 = this;
return self__.meta43112;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43112","meta43112",-2025539782,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43111.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43111";

cljs.core.async.t_cljs$core$async43111.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async43111");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43111 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43111(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43112){
return (new cljs.core.async.t_cljs$core$async43111(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43112));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43111(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41338__auto___43237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43237,mults,ensure_mult,p){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43237,mults,ensure_mult,p){
return (function (state_43185){
var state_val_43186 = (state_43185[(1)]);
if((state_val_43186 === (7))){
var inst_43181 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43187_43238 = state_43185__$1;
(statearr_43187_43238[(2)] = inst_43181);

(statearr_43187_43238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (20))){
var state_43185__$1 = state_43185;
var statearr_43188_43239 = state_43185__$1;
(statearr_43188_43239[(2)] = null);

(statearr_43188_43239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (1))){
var state_43185__$1 = state_43185;
var statearr_43189_43240 = state_43185__$1;
(statearr_43189_43240[(2)] = null);

(statearr_43189_43240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (24))){
var inst_43164 = (state_43185[(7)]);
var inst_43173 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43164);
var state_43185__$1 = state_43185;
var statearr_43190_43241 = state_43185__$1;
(statearr_43190_43241[(2)] = inst_43173);

(statearr_43190_43241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (4))){
var inst_43116 = (state_43185[(8)]);
var inst_43116__$1 = (state_43185[(2)]);
var inst_43117 = (inst_43116__$1 == null);
var state_43185__$1 = (function (){var statearr_43191 = state_43185;
(statearr_43191[(8)] = inst_43116__$1);

return statearr_43191;
})();
if(cljs.core.truth_(inst_43117)){
var statearr_43192_43242 = state_43185__$1;
(statearr_43192_43242[(1)] = (5));

} else {
var statearr_43193_43243 = state_43185__$1;
(statearr_43193_43243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (15))){
var inst_43158 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43194_43244 = state_43185__$1;
(statearr_43194_43244[(2)] = inst_43158);

(statearr_43194_43244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (21))){
var inst_43178 = (state_43185[(2)]);
var state_43185__$1 = (function (){var statearr_43195 = state_43185;
(statearr_43195[(9)] = inst_43178);

return statearr_43195;
})();
var statearr_43196_43245 = state_43185__$1;
(statearr_43196_43245[(2)] = null);

(statearr_43196_43245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (13))){
var inst_43140 = (state_43185[(10)]);
var inst_43142 = cljs.core.chunked_seq_QMARK_.call(null,inst_43140);
var state_43185__$1 = state_43185;
if(inst_43142){
var statearr_43197_43246 = state_43185__$1;
(statearr_43197_43246[(1)] = (16));

} else {
var statearr_43198_43247 = state_43185__$1;
(statearr_43198_43247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (22))){
var inst_43170 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
if(cljs.core.truth_(inst_43170)){
var statearr_43199_43248 = state_43185__$1;
(statearr_43199_43248[(1)] = (23));

} else {
var statearr_43200_43249 = state_43185__$1;
(statearr_43200_43249[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (6))){
var inst_43164 = (state_43185[(7)]);
var inst_43166 = (state_43185[(11)]);
var inst_43116 = (state_43185[(8)]);
var inst_43164__$1 = topic_fn.call(null,inst_43116);
var inst_43165 = cljs.core.deref.call(null,mults);
var inst_43166__$1 = cljs.core.get.call(null,inst_43165,inst_43164__$1);
var state_43185__$1 = (function (){var statearr_43201 = state_43185;
(statearr_43201[(7)] = inst_43164__$1);

(statearr_43201[(11)] = inst_43166__$1);

return statearr_43201;
})();
if(cljs.core.truth_(inst_43166__$1)){
var statearr_43202_43250 = state_43185__$1;
(statearr_43202_43250[(1)] = (19));

} else {
var statearr_43203_43251 = state_43185__$1;
(statearr_43203_43251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (25))){
var inst_43175 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43204_43252 = state_43185__$1;
(statearr_43204_43252[(2)] = inst_43175);

(statearr_43204_43252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (17))){
var inst_43140 = (state_43185[(10)]);
var inst_43149 = cljs.core.first.call(null,inst_43140);
var inst_43150 = cljs.core.async.muxch_STAR_.call(null,inst_43149);
var inst_43151 = cljs.core.async.close_BANG_.call(null,inst_43150);
var inst_43152 = cljs.core.next.call(null,inst_43140);
var inst_43126 = inst_43152;
var inst_43127 = null;
var inst_43128 = (0);
var inst_43129 = (0);
var state_43185__$1 = (function (){var statearr_43205 = state_43185;
(statearr_43205[(12)] = inst_43127);

(statearr_43205[(13)] = inst_43128);

(statearr_43205[(14)] = inst_43126);

(statearr_43205[(15)] = inst_43151);

(statearr_43205[(16)] = inst_43129);

return statearr_43205;
})();
var statearr_43206_43253 = state_43185__$1;
(statearr_43206_43253[(2)] = null);

(statearr_43206_43253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (3))){
var inst_43183 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43185__$1,inst_43183);
} else {
if((state_val_43186 === (12))){
var inst_43160 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43207_43254 = state_43185__$1;
(statearr_43207_43254[(2)] = inst_43160);

(statearr_43207_43254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (2))){
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43185__$1,(4),ch);
} else {
if((state_val_43186 === (23))){
var state_43185__$1 = state_43185;
var statearr_43208_43255 = state_43185__$1;
(statearr_43208_43255[(2)] = null);

(statearr_43208_43255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (19))){
var inst_43166 = (state_43185[(11)]);
var inst_43116 = (state_43185[(8)]);
var inst_43168 = cljs.core.async.muxch_STAR_.call(null,inst_43166);
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43185__$1,(22),inst_43168,inst_43116);
} else {
if((state_val_43186 === (11))){
var inst_43126 = (state_43185[(14)]);
var inst_43140 = (state_43185[(10)]);
var inst_43140__$1 = cljs.core.seq.call(null,inst_43126);
var state_43185__$1 = (function (){var statearr_43209 = state_43185;
(statearr_43209[(10)] = inst_43140__$1);

return statearr_43209;
})();
if(inst_43140__$1){
var statearr_43210_43256 = state_43185__$1;
(statearr_43210_43256[(1)] = (13));

} else {
var statearr_43211_43257 = state_43185__$1;
(statearr_43211_43257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (9))){
var inst_43162 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43212_43258 = state_43185__$1;
(statearr_43212_43258[(2)] = inst_43162);

(statearr_43212_43258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (5))){
var inst_43123 = cljs.core.deref.call(null,mults);
var inst_43124 = cljs.core.vals.call(null,inst_43123);
var inst_43125 = cljs.core.seq.call(null,inst_43124);
var inst_43126 = inst_43125;
var inst_43127 = null;
var inst_43128 = (0);
var inst_43129 = (0);
var state_43185__$1 = (function (){var statearr_43213 = state_43185;
(statearr_43213[(12)] = inst_43127);

(statearr_43213[(13)] = inst_43128);

(statearr_43213[(14)] = inst_43126);

(statearr_43213[(16)] = inst_43129);

return statearr_43213;
})();
var statearr_43214_43259 = state_43185__$1;
(statearr_43214_43259[(2)] = null);

(statearr_43214_43259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (14))){
var state_43185__$1 = state_43185;
var statearr_43218_43260 = state_43185__$1;
(statearr_43218_43260[(2)] = null);

(statearr_43218_43260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (16))){
var inst_43140 = (state_43185[(10)]);
var inst_43144 = cljs.core.chunk_first.call(null,inst_43140);
var inst_43145 = cljs.core.chunk_rest.call(null,inst_43140);
var inst_43146 = cljs.core.count.call(null,inst_43144);
var inst_43126 = inst_43145;
var inst_43127 = inst_43144;
var inst_43128 = inst_43146;
var inst_43129 = (0);
var state_43185__$1 = (function (){var statearr_43219 = state_43185;
(statearr_43219[(12)] = inst_43127);

(statearr_43219[(13)] = inst_43128);

(statearr_43219[(14)] = inst_43126);

(statearr_43219[(16)] = inst_43129);

return statearr_43219;
})();
var statearr_43220_43261 = state_43185__$1;
(statearr_43220_43261[(2)] = null);

(statearr_43220_43261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (10))){
var inst_43127 = (state_43185[(12)]);
var inst_43128 = (state_43185[(13)]);
var inst_43126 = (state_43185[(14)]);
var inst_43129 = (state_43185[(16)]);
var inst_43134 = cljs.core._nth.call(null,inst_43127,inst_43129);
var inst_43135 = cljs.core.async.muxch_STAR_.call(null,inst_43134);
var inst_43136 = cljs.core.async.close_BANG_.call(null,inst_43135);
var inst_43137 = (inst_43129 + (1));
var tmp43215 = inst_43127;
var tmp43216 = inst_43128;
var tmp43217 = inst_43126;
var inst_43126__$1 = tmp43217;
var inst_43127__$1 = tmp43215;
var inst_43128__$1 = tmp43216;
var inst_43129__$1 = inst_43137;
var state_43185__$1 = (function (){var statearr_43221 = state_43185;
(statearr_43221[(12)] = inst_43127__$1);

(statearr_43221[(13)] = inst_43128__$1);

(statearr_43221[(14)] = inst_43126__$1);

(statearr_43221[(17)] = inst_43136);

(statearr_43221[(16)] = inst_43129__$1);

return statearr_43221;
})();
var statearr_43222_43262 = state_43185__$1;
(statearr_43222_43262[(2)] = null);

(statearr_43222_43262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (18))){
var inst_43155 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43223_43263 = state_43185__$1;
(statearr_43223_43263[(2)] = inst_43155);

(statearr_43223_43263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (8))){
var inst_43128 = (state_43185[(13)]);
var inst_43129 = (state_43185[(16)]);
var inst_43131 = (inst_43129 < inst_43128);
var inst_43132 = inst_43131;
var state_43185__$1 = state_43185;
if(cljs.core.truth_(inst_43132)){
var statearr_43224_43264 = state_43185__$1;
(statearr_43224_43264[(1)] = (10));

} else {
var statearr_43225_43265 = state_43185__$1;
(statearr_43225_43265[(1)] = (11));

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
});})(c__41338__auto___43237,mults,ensure_mult,p))
;
return ((function (switch__41226__auto__,c__41338__auto___43237,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_43229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43229[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_43229[(1)] = (1));

return statearr_43229;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_43185){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43230){if((e43230 instanceof Object)){
var ex__41230__auto__ = e43230;
var statearr_43231_43266 = state_43185;
(statearr_43231_43266[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43267 = state_43185;
state_43185 = G__43267;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_43185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_43185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43237,mults,ensure_mult,p))
})();
var state__41340__auto__ = (function (){var statearr_43232 = f__41339__auto__.call(null);
(statearr_43232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43237);

return statearr_43232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43237,mults,ensure_mult,p))
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
var args43268 = [];
var len__38772__auto___43271 = arguments.length;
var i__38773__auto___43272 = (0);
while(true){
if((i__38773__auto___43272 < len__38772__auto___43271)){
args43268.push((arguments[i__38773__auto___43272]));

var G__43273 = (i__38773__auto___43272 + (1));
i__38773__auto___43272 = G__43273;
continue;
} else {
}
break;
}

var G__43270 = args43268.length;
switch (G__43270) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43268.length)].join('')));

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
var args43275 = [];
var len__38772__auto___43278 = arguments.length;
var i__38773__auto___43279 = (0);
while(true){
if((i__38773__auto___43279 < len__38772__auto___43278)){
args43275.push((arguments[i__38773__auto___43279]));

var G__43280 = (i__38773__auto___43279 + (1));
i__38773__auto___43279 = G__43280;
continue;
} else {
}
break;
}

var G__43277 = args43275.length;
switch (G__43277) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43275.length)].join('')));

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
var args43282 = [];
var len__38772__auto___43353 = arguments.length;
var i__38773__auto___43354 = (0);
while(true){
if((i__38773__auto___43354 < len__38772__auto___43353)){
args43282.push((arguments[i__38773__auto___43354]));

var G__43355 = (i__38773__auto___43354 + (1));
i__38773__auto___43354 = G__43355;
continue;
} else {
}
break;
}

var G__43284 = args43282.length;
switch (G__43284) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43282.length)].join('')));

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
var c__41338__auto___43357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43323){
var state_val_43324 = (state_43323[(1)]);
if((state_val_43324 === (7))){
var state_43323__$1 = state_43323;
var statearr_43325_43358 = state_43323__$1;
(statearr_43325_43358[(2)] = null);

(statearr_43325_43358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (1))){
var state_43323__$1 = state_43323;
var statearr_43326_43359 = state_43323__$1;
(statearr_43326_43359[(2)] = null);

(statearr_43326_43359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (4))){
var inst_43287 = (state_43323[(7)]);
var inst_43289 = (inst_43287 < cnt);
var state_43323__$1 = state_43323;
if(cljs.core.truth_(inst_43289)){
var statearr_43327_43360 = state_43323__$1;
(statearr_43327_43360[(1)] = (6));

} else {
var statearr_43328_43361 = state_43323__$1;
(statearr_43328_43361[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (15))){
var inst_43319 = (state_43323[(2)]);
var state_43323__$1 = state_43323;
var statearr_43329_43362 = state_43323__$1;
(statearr_43329_43362[(2)] = inst_43319);

(statearr_43329_43362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (13))){
var inst_43312 = cljs.core.async.close_BANG_.call(null,out);
var state_43323__$1 = state_43323;
var statearr_43330_43363 = state_43323__$1;
(statearr_43330_43363[(2)] = inst_43312);

(statearr_43330_43363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (6))){
var state_43323__$1 = state_43323;
var statearr_43331_43364 = state_43323__$1;
(statearr_43331_43364[(2)] = null);

(statearr_43331_43364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (3))){
var inst_43321 = (state_43323[(2)]);
var state_43323__$1 = state_43323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43323__$1,inst_43321);
} else {
if((state_val_43324 === (12))){
var inst_43309 = (state_43323[(8)]);
var inst_43309__$1 = (state_43323[(2)]);
var inst_43310 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43309__$1);
var state_43323__$1 = (function (){var statearr_43332 = state_43323;
(statearr_43332[(8)] = inst_43309__$1);

return statearr_43332;
})();
if(cljs.core.truth_(inst_43310)){
var statearr_43333_43365 = state_43323__$1;
(statearr_43333_43365[(1)] = (13));

} else {
var statearr_43334_43366 = state_43323__$1;
(statearr_43334_43366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (2))){
var inst_43286 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43287 = (0);
var state_43323__$1 = (function (){var statearr_43335 = state_43323;
(statearr_43335[(9)] = inst_43286);

(statearr_43335[(7)] = inst_43287);

return statearr_43335;
})();
var statearr_43336_43367 = state_43323__$1;
(statearr_43336_43367[(2)] = null);

(statearr_43336_43367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (11))){
var inst_43287 = (state_43323[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43323,(10),Object,null,(9));
var inst_43296 = chs__$1.call(null,inst_43287);
var inst_43297 = done.call(null,inst_43287);
var inst_43298 = cljs.core.async.take_BANG_.call(null,inst_43296,inst_43297);
var state_43323__$1 = state_43323;
var statearr_43337_43368 = state_43323__$1;
(statearr_43337_43368[(2)] = inst_43298);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43323__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (9))){
var inst_43287 = (state_43323[(7)]);
var inst_43300 = (state_43323[(2)]);
var inst_43301 = (inst_43287 + (1));
var inst_43287__$1 = inst_43301;
var state_43323__$1 = (function (){var statearr_43338 = state_43323;
(statearr_43338[(10)] = inst_43300);

(statearr_43338[(7)] = inst_43287__$1);

return statearr_43338;
})();
var statearr_43339_43369 = state_43323__$1;
(statearr_43339_43369[(2)] = null);

(statearr_43339_43369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (5))){
var inst_43307 = (state_43323[(2)]);
var state_43323__$1 = (function (){var statearr_43340 = state_43323;
(statearr_43340[(11)] = inst_43307);

return statearr_43340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43323__$1,(12),dchan);
} else {
if((state_val_43324 === (14))){
var inst_43309 = (state_43323[(8)]);
var inst_43314 = cljs.core.apply.call(null,f,inst_43309);
var state_43323__$1 = state_43323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43323__$1,(16),out,inst_43314);
} else {
if((state_val_43324 === (16))){
var inst_43316 = (state_43323[(2)]);
var state_43323__$1 = (function (){var statearr_43341 = state_43323;
(statearr_43341[(12)] = inst_43316);

return statearr_43341;
})();
var statearr_43342_43370 = state_43323__$1;
(statearr_43342_43370[(2)] = null);

(statearr_43342_43370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (10))){
var inst_43291 = (state_43323[(2)]);
var inst_43292 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43323__$1 = (function (){var statearr_43343 = state_43323;
(statearr_43343[(13)] = inst_43291);

return statearr_43343;
})();
var statearr_43344_43371 = state_43323__$1;
(statearr_43344_43371[(2)] = inst_43292);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43323__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (8))){
var inst_43305 = (state_43323[(2)]);
var state_43323__$1 = state_43323;
var statearr_43345_43372 = state_43323__$1;
(statearr_43345_43372[(2)] = inst_43305);

(statearr_43345_43372[(1)] = (5));


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
});})(c__41338__auto___43357,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41226__auto__,c__41338__auto___43357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_43349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43349[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_43349[(1)] = (1));

return statearr_43349;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_43323){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43350){if((e43350 instanceof Object)){
var ex__41230__auto__ = e43350;
var statearr_43351_43373 = state_43323;
(statearr_43351_43373[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43374 = state_43323;
state_43323 = G__43374;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_43323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_43323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43357,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41340__auto__ = (function (){var statearr_43352 = f__41339__auto__.call(null);
(statearr_43352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43357);

return statearr_43352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43357,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args43376 = [];
var len__38772__auto___43432 = arguments.length;
var i__38773__auto___43433 = (0);
while(true){
if((i__38773__auto___43433 < len__38772__auto___43432)){
args43376.push((arguments[i__38773__auto___43433]));

var G__43434 = (i__38773__auto___43433 + (1));
i__38773__auto___43433 = G__43434;
continue;
} else {
}
break;
}

var G__43378 = args43376.length;
switch (G__43378) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43376.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41338__auto___43436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43436,out){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43436,out){
return (function (state_43408){
var state_val_43409 = (state_43408[(1)]);
if((state_val_43409 === (7))){
var inst_43388 = (state_43408[(7)]);
var inst_43387 = (state_43408[(8)]);
var inst_43387__$1 = (state_43408[(2)]);
var inst_43388__$1 = cljs.core.nth.call(null,inst_43387__$1,(0),null);
var inst_43389 = cljs.core.nth.call(null,inst_43387__$1,(1),null);
var inst_43390 = (inst_43388__$1 == null);
var state_43408__$1 = (function (){var statearr_43410 = state_43408;
(statearr_43410[(7)] = inst_43388__$1);

(statearr_43410[(9)] = inst_43389);

(statearr_43410[(8)] = inst_43387__$1);

return statearr_43410;
})();
if(cljs.core.truth_(inst_43390)){
var statearr_43411_43437 = state_43408__$1;
(statearr_43411_43437[(1)] = (8));

} else {
var statearr_43412_43438 = state_43408__$1;
(statearr_43412_43438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (1))){
var inst_43379 = cljs.core.vec.call(null,chs);
var inst_43380 = inst_43379;
var state_43408__$1 = (function (){var statearr_43413 = state_43408;
(statearr_43413[(10)] = inst_43380);

return statearr_43413;
})();
var statearr_43414_43439 = state_43408__$1;
(statearr_43414_43439[(2)] = null);

(statearr_43414_43439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (4))){
var inst_43380 = (state_43408[(10)]);
var state_43408__$1 = state_43408;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43408__$1,(7),inst_43380);
} else {
if((state_val_43409 === (6))){
var inst_43404 = (state_43408[(2)]);
var state_43408__$1 = state_43408;
var statearr_43415_43440 = state_43408__$1;
(statearr_43415_43440[(2)] = inst_43404);

(statearr_43415_43440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (3))){
var inst_43406 = (state_43408[(2)]);
var state_43408__$1 = state_43408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43408__$1,inst_43406);
} else {
if((state_val_43409 === (2))){
var inst_43380 = (state_43408[(10)]);
var inst_43382 = cljs.core.count.call(null,inst_43380);
var inst_43383 = (inst_43382 > (0));
var state_43408__$1 = state_43408;
if(cljs.core.truth_(inst_43383)){
var statearr_43417_43441 = state_43408__$1;
(statearr_43417_43441[(1)] = (4));

} else {
var statearr_43418_43442 = state_43408__$1;
(statearr_43418_43442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (11))){
var inst_43380 = (state_43408[(10)]);
var inst_43397 = (state_43408[(2)]);
var tmp43416 = inst_43380;
var inst_43380__$1 = tmp43416;
var state_43408__$1 = (function (){var statearr_43419 = state_43408;
(statearr_43419[(10)] = inst_43380__$1);

(statearr_43419[(11)] = inst_43397);

return statearr_43419;
})();
var statearr_43420_43443 = state_43408__$1;
(statearr_43420_43443[(2)] = null);

(statearr_43420_43443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (9))){
var inst_43388 = (state_43408[(7)]);
var state_43408__$1 = state_43408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43408__$1,(11),out,inst_43388);
} else {
if((state_val_43409 === (5))){
var inst_43402 = cljs.core.async.close_BANG_.call(null,out);
var state_43408__$1 = state_43408;
var statearr_43421_43444 = state_43408__$1;
(statearr_43421_43444[(2)] = inst_43402);

(statearr_43421_43444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (10))){
var inst_43400 = (state_43408[(2)]);
var state_43408__$1 = state_43408;
var statearr_43422_43445 = state_43408__$1;
(statearr_43422_43445[(2)] = inst_43400);

(statearr_43422_43445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (8))){
var inst_43380 = (state_43408[(10)]);
var inst_43388 = (state_43408[(7)]);
var inst_43389 = (state_43408[(9)]);
var inst_43387 = (state_43408[(8)]);
var inst_43392 = (function (){var cs = inst_43380;
var vec__43385 = inst_43387;
var v = inst_43388;
var c = inst_43389;
return ((function (cs,vec__43385,v,c,inst_43380,inst_43388,inst_43389,inst_43387,state_val_43409,c__41338__auto___43436,out){
return (function (p1__43375_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43375_SHARP_);
});
;})(cs,vec__43385,v,c,inst_43380,inst_43388,inst_43389,inst_43387,state_val_43409,c__41338__auto___43436,out))
})();
var inst_43393 = cljs.core.filterv.call(null,inst_43392,inst_43380);
var inst_43380__$1 = inst_43393;
var state_43408__$1 = (function (){var statearr_43423 = state_43408;
(statearr_43423[(10)] = inst_43380__$1);

return statearr_43423;
})();
var statearr_43424_43446 = state_43408__$1;
(statearr_43424_43446[(2)] = null);

(statearr_43424_43446[(1)] = (2));


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
});})(c__41338__auto___43436,out))
;
return ((function (switch__41226__auto__,c__41338__auto___43436,out){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_43428 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43428[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_43428[(1)] = (1));

return statearr_43428;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_43408){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43429){if((e43429 instanceof Object)){
var ex__41230__auto__ = e43429;
var statearr_43430_43447 = state_43408;
(statearr_43430_43447[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43448 = state_43408;
state_43408 = G__43448;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_43408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_43408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43436,out))
})();
var state__41340__auto__ = (function (){var statearr_43431 = f__41339__auto__.call(null);
(statearr_43431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43436);

return statearr_43431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43436,out))
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
var args43449 = [];
var len__38772__auto___43498 = arguments.length;
var i__38773__auto___43499 = (0);
while(true){
if((i__38773__auto___43499 < len__38772__auto___43498)){
args43449.push((arguments[i__38773__auto___43499]));

var G__43500 = (i__38773__auto___43499 + (1));
i__38773__auto___43499 = G__43500;
continue;
} else {
}
break;
}

var G__43451 = args43449.length;
switch (G__43451) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43449.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41338__auto___43502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43502,out){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43502,out){
return (function (state_43475){
var state_val_43476 = (state_43475[(1)]);
if((state_val_43476 === (7))){
var inst_43457 = (state_43475[(7)]);
var inst_43457__$1 = (state_43475[(2)]);
var inst_43458 = (inst_43457__$1 == null);
var inst_43459 = cljs.core.not.call(null,inst_43458);
var state_43475__$1 = (function (){var statearr_43477 = state_43475;
(statearr_43477[(7)] = inst_43457__$1);

return statearr_43477;
})();
if(inst_43459){
var statearr_43478_43503 = state_43475__$1;
(statearr_43478_43503[(1)] = (8));

} else {
var statearr_43479_43504 = state_43475__$1;
(statearr_43479_43504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (1))){
var inst_43452 = (0);
var state_43475__$1 = (function (){var statearr_43480 = state_43475;
(statearr_43480[(8)] = inst_43452);

return statearr_43480;
})();
var statearr_43481_43505 = state_43475__$1;
(statearr_43481_43505[(2)] = null);

(statearr_43481_43505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (4))){
var state_43475__$1 = state_43475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43475__$1,(7),ch);
} else {
if((state_val_43476 === (6))){
var inst_43470 = (state_43475[(2)]);
var state_43475__$1 = state_43475;
var statearr_43482_43506 = state_43475__$1;
(statearr_43482_43506[(2)] = inst_43470);

(statearr_43482_43506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (3))){
var inst_43472 = (state_43475[(2)]);
var inst_43473 = cljs.core.async.close_BANG_.call(null,out);
var state_43475__$1 = (function (){var statearr_43483 = state_43475;
(statearr_43483[(9)] = inst_43472);

return statearr_43483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43475__$1,inst_43473);
} else {
if((state_val_43476 === (2))){
var inst_43452 = (state_43475[(8)]);
var inst_43454 = (inst_43452 < n);
var state_43475__$1 = state_43475;
if(cljs.core.truth_(inst_43454)){
var statearr_43484_43507 = state_43475__$1;
(statearr_43484_43507[(1)] = (4));

} else {
var statearr_43485_43508 = state_43475__$1;
(statearr_43485_43508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (11))){
var inst_43452 = (state_43475[(8)]);
var inst_43462 = (state_43475[(2)]);
var inst_43463 = (inst_43452 + (1));
var inst_43452__$1 = inst_43463;
var state_43475__$1 = (function (){var statearr_43486 = state_43475;
(statearr_43486[(10)] = inst_43462);

(statearr_43486[(8)] = inst_43452__$1);

return statearr_43486;
})();
var statearr_43487_43509 = state_43475__$1;
(statearr_43487_43509[(2)] = null);

(statearr_43487_43509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (9))){
var state_43475__$1 = state_43475;
var statearr_43488_43510 = state_43475__$1;
(statearr_43488_43510[(2)] = null);

(statearr_43488_43510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (5))){
var state_43475__$1 = state_43475;
var statearr_43489_43511 = state_43475__$1;
(statearr_43489_43511[(2)] = null);

(statearr_43489_43511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (10))){
var inst_43467 = (state_43475[(2)]);
var state_43475__$1 = state_43475;
var statearr_43490_43512 = state_43475__$1;
(statearr_43490_43512[(2)] = inst_43467);

(statearr_43490_43512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43476 === (8))){
var inst_43457 = (state_43475[(7)]);
var state_43475__$1 = state_43475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43475__$1,(11),out,inst_43457);
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
});})(c__41338__auto___43502,out))
;
return ((function (switch__41226__auto__,c__41338__auto___43502,out){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_43494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43494[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_43494[(1)] = (1));

return statearr_43494;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_43475){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43495){if((e43495 instanceof Object)){
var ex__41230__auto__ = e43495;
var statearr_43496_43513 = state_43475;
(statearr_43496_43513[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43514 = state_43475;
state_43475 = G__43514;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_43475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_43475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43502,out))
})();
var state__41340__auto__ = (function (){var statearr_43497 = f__41339__auto__.call(null);
(statearr_43497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43502);

return statearr_43497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43502,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43522 = (function (map_LT_,f,ch,meta43523){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43523 = meta43523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43524,meta43523__$1){
var self__ = this;
var _43524__$1 = this;
return (new cljs.core.async.t_cljs$core$async43522(self__.map_LT_,self__.f,self__.ch,meta43523__$1));
});

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43524){
var self__ = this;
var _43524__$1 = this;
return self__.meta43523;
});

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43525 = (function (map_LT_,f,ch,meta43523,_,fn1,meta43526){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43523 = meta43523;
this._ = _;
this.fn1 = fn1;
this.meta43526 = meta43526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43527,meta43526__$1){
var self__ = this;
var _43527__$1 = this;
return (new cljs.core.async.t_cljs$core$async43525(self__.map_LT_,self__.f,self__.ch,self__.meta43523,self__._,self__.fn1,meta43526__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43527){
var self__ = this;
var _43527__$1 = this;
return self__.meta43526;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43525.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43515_SHARP_){
return f1.call(null,(((p1__43515_SHARP_ == null))?null:self__.f.call(null,p1__43515_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43525.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43523","meta43523",-1703308799,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43522","cljs.core.async/t_cljs$core$async43522",716827748,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43526","meta43526",-1738135767,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43525";

cljs.core.async.t_cljs$core$async43525.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async43525");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43525 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43525(map_LT___$1,f__$1,ch__$1,meta43523__$1,___$2,fn1__$1,meta43526){
return (new cljs.core.async.t_cljs$core$async43525(map_LT___$1,f__$1,ch__$1,meta43523__$1,___$2,fn1__$1,meta43526));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43525(self__.map_LT_,self__.f,self__.ch,self__.meta43523,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__37690__auto__ = ret;
if(cljs.core.truth_(and__37690__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__37690__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43523","meta43523",-1703308799,null)], null);
});

cljs.core.async.t_cljs$core$async43522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43522";

cljs.core.async.t_cljs$core$async43522.cljs$lang$ctorPrWriter = (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async43522");
});

cljs.core.async.__GT_t_cljs$core$async43522 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43522(map_LT___$1,f__$1,ch__$1,meta43523){
return (new cljs.core.async.t_cljs$core$async43522(map_LT___$1,f__$1,ch__$1,meta43523));
});

}

return (new cljs.core.async.t_cljs$core$async43522(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43531 = (function (map_GT_,f,ch,meta43532){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta43532 = meta43532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43533,meta43532__$1){
var self__ = this;
var _43533__$1 = this;
return (new cljs.core.async.t_cljs$core$async43531(self__.map_GT_,self__.f,self__.ch,meta43532__$1));
});

cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43533){
var self__ = this;
var _43533__$1 = this;
return self__.meta43532;
});

cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43532","meta43532",1979555739,null)], null);
});

cljs.core.async.t_cljs$core$async43531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43531";

cljs.core.async.t_cljs$core$async43531.cljs$lang$ctorPrWriter = (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async43531");
});

cljs.core.async.__GT_t_cljs$core$async43531 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43531(map_GT___$1,f__$1,ch__$1,meta43532){
return (new cljs.core.async.t_cljs$core$async43531(map_GT___$1,f__$1,ch__$1,meta43532));
});

}

return (new cljs.core.async.t_cljs$core$async43531(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43537 = (function (filter_GT_,p,ch,meta43538){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta43538 = meta43538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43539,meta43538__$1){
var self__ = this;
var _43539__$1 = this;
return (new cljs.core.async.t_cljs$core$async43537(self__.filter_GT_,self__.p,self__.ch,meta43538__$1));
});

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43539){
var self__ = this;
var _43539__$1 = this;
return self__.meta43538;
});

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43538","meta43538",1583986481,null)], null);
});

cljs.core.async.t_cljs$core$async43537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43537";

cljs.core.async.t_cljs$core$async43537.cljs$lang$ctorPrWriter = (function (this__38308__auto__,writer__38309__auto__,opt__38310__auto__){
return cljs.core._write.call(null,writer__38309__auto__,"cljs.core.async/t_cljs$core$async43537");
});

cljs.core.async.__GT_t_cljs$core$async43537 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43537(filter_GT___$1,p__$1,ch__$1,meta43538){
return (new cljs.core.async.t_cljs$core$async43537(filter_GT___$1,p__$1,ch__$1,meta43538));
});

}

return (new cljs.core.async.t_cljs$core$async43537(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args43540 = [];
var len__38772__auto___43584 = arguments.length;
var i__38773__auto___43585 = (0);
while(true){
if((i__38773__auto___43585 < len__38772__auto___43584)){
args43540.push((arguments[i__38773__auto___43585]));

var G__43586 = (i__38773__auto___43585 + (1));
i__38773__auto___43585 = G__43586;
continue;
} else {
}
break;
}

var G__43542 = args43540.length;
switch (G__43542) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43540.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41338__auto___43588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43588,out){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43588,out){
return (function (state_43563){
var state_val_43564 = (state_43563[(1)]);
if((state_val_43564 === (7))){
var inst_43559 = (state_43563[(2)]);
var state_43563__$1 = state_43563;
var statearr_43565_43589 = state_43563__$1;
(statearr_43565_43589[(2)] = inst_43559);

(statearr_43565_43589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (1))){
var state_43563__$1 = state_43563;
var statearr_43566_43590 = state_43563__$1;
(statearr_43566_43590[(2)] = null);

(statearr_43566_43590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (4))){
var inst_43545 = (state_43563[(7)]);
var inst_43545__$1 = (state_43563[(2)]);
var inst_43546 = (inst_43545__$1 == null);
var state_43563__$1 = (function (){var statearr_43567 = state_43563;
(statearr_43567[(7)] = inst_43545__$1);

return statearr_43567;
})();
if(cljs.core.truth_(inst_43546)){
var statearr_43568_43591 = state_43563__$1;
(statearr_43568_43591[(1)] = (5));

} else {
var statearr_43569_43592 = state_43563__$1;
(statearr_43569_43592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (6))){
var inst_43545 = (state_43563[(7)]);
var inst_43550 = p.call(null,inst_43545);
var state_43563__$1 = state_43563;
if(cljs.core.truth_(inst_43550)){
var statearr_43570_43593 = state_43563__$1;
(statearr_43570_43593[(1)] = (8));

} else {
var statearr_43571_43594 = state_43563__$1;
(statearr_43571_43594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (3))){
var inst_43561 = (state_43563[(2)]);
var state_43563__$1 = state_43563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43563__$1,inst_43561);
} else {
if((state_val_43564 === (2))){
var state_43563__$1 = state_43563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43563__$1,(4),ch);
} else {
if((state_val_43564 === (11))){
var inst_43553 = (state_43563[(2)]);
var state_43563__$1 = state_43563;
var statearr_43572_43595 = state_43563__$1;
(statearr_43572_43595[(2)] = inst_43553);

(statearr_43572_43595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (9))){
var state_43563__$1 = state_43563;
var statearr_43573_43596 = state_43563__$1;
(statearr_43573_43596[(2)] = null);

(statearr_43573_43596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (5))){
var inst_43548 = cljs.core.async.close_BANG_.call(null,out);
var state_43563__$1 = state_43563;
var statearr_43574_43597 = state_43563__$1;
(statearr_43574_43597[(2)] = inst_43548);

(statearr_43574_43597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (10))){
var inst_43556 = (state_43563[(2)]);
var state_43563__$1 = (function (){var statearr_43575 = state_43563;
(statearr_43575[(8)] = inst_43556);

return statearr_43575;
})();
var statearr_43576_43598 = state_43563__$1;
(statearr_43576_43598[(2)] = null);

(statearr_43576_43598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43564 === (8))){
var inst_43545 = (state_43563[(7)]);
var state_43563__$1 = state_43563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43563__$1,(11),out,inst_43545);
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
});})(c__41338__auto___43588,out))
;
return ((function (switch__41226__auto__,c__41338__auto___43588,out){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_43580 = [null,null,null,null,null,null,null,null,null];
(statearr_43580[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_43580[(1)] = (1));

return statearr_43580;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_43563){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43581){if((e43581 instanceof Object)){
var ex__41230__auto__ = e43581;
var statearr_43582_43599 = state_43563;
(statearr_43582_43599[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43600 = state_43563;
state_43563 = G__43600;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_43563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_43563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43588,out))
})();
var state__41340__auto__ = (function (){var statearr_43583 = f__41339__auto__.call(null);
(statearr_43583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43588);

return statearr_43583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43588,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43601 = [];
var len__38772__auto___43604 = arguments.length;
var i__38773__auto___43605 = (0);
while(true){
if((i__38773__auto___43605 < len__38772__auto___43604)){
args43601.push((arguments[i__38773__auto___43605]));

var G__43606 = (i__38773__auto___43605 + (1));
i__38773__auto___43605 = G__43606;
continue;
} else {
}
break;
}

var G__43603 = args43601.length;
switch (G__43603) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43601.length)].join('')));

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
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_43773){
var state_val_43774 = (state_43773[(1)]);
if((state_val_43774 === (7))){
var inst_43769 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
var statearr_43775_43816 = state_43773__$1;
(statearr_43775_43816[(2)] = inst_43769);

(statearr_43775_43816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (20))){
var inst_43739 = (state_43773[(7)]);
var inst_43750 = (state_43773[(2)]);
var inst_43751 = cljs.core.next.call(null,inst_43739);
var inst_43725 = inst_43751;
var inst_43726 = null;
var inst_43727 = (0);
var inst_43728 = (0);
var state_43773__$1 = (function (){var statearr_43776 = state_43773;
(statearr_43776[(8)] = inst_43728);

(statearr_43776[(9)] = inst_43750);

(statearr_43776[(10)] = inst_43727);

(statearr_43776[(11)] = inst_43725);

(statearr_43776[(12)] = inst_43726);

return statearr_43776;
})();
var statearr_43777_43817 = state_43773__$1;
(statearr_43777_43817[(2)] = null);

(statearr_43777_43817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (1))){
var state_43773__$1 = state_43773;
var statearr_43778_43818 = state_43773__$1;
(statearr_43778_43818[(2)] = null);

(statearr_43778_43818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (4))){
var inst_43714 = (state_43773[(13)]);
var inst_43714__$1 = (state_43773[(2)]);
var inst_43715 = (inst_43714__$1 == null);
var state_43773__$1 = (function (){var statearr_43779 = state_43773;
(statearr_43779[(13)] = inst_43714__$1);

return statearr_43779;
})();
if(cljs.core.truth_(inst_43715)){
var statearr_43780_43819 = state_43773__$1;
(statearr_43780_43819[(1)] = (5));

} else {
var statearr_43781_43820 = state_43773__$1;
(statearr_43781_43820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (15))){
var state_43773__$1 = state_43773;
var statearr_43785_43821 = state_43773__$1;
(statearr_43785_43821[(2)] = null);

(statearr_43785_43821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (21))){
var state_43773__$1 = state_43773;
var statearr_43786_43822 = state_43773__$1;
(statearr_43786_43822[(2)] = null);

(statearr_43786_43822[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (13))){
var inst_43728 = (state_43773[(8)]);
var inst_43727 = (state_43773[(10)]);
var inst_43725 = (state_43773[(11)]);
var inst_43726 = (state_43773[(12)]);
var inst_43735 = (state_43773[(2)]);
var inst_43736 = (inst_43728 + (1));
var tmp43782 = inst_43727;
var tmp43783 = inst_43725;
var tmp43784 = inst_43726;
var inst_43725__$1 = tmp43783;
var inst_43726__$1 = tmp43784;
var inst_43727__$1 = tmp43782;
var inst_43728__$1 = inst_43736;
var state_43773__$1 = (function (){var statearr_43787 = state_43773;
(statearr_43787[(8)] = inst_43728__$1);

(statearr_43787[(14)] = inst_43735);

(statearr_43787[(10)] = inst_43727__$1);

(statearr_43787[(11)] = inst_43725__$1);

(statearr_43787[(12)] = inst_43726__$1);

return statearr_43787;
})();
var statearr_43788_43823 = state_43773__$1;
(statearr_43788_43823[(2)] = null);

(statearr_43788_43823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (22))){
var state_43773__$1 = state_43773;
var statearr_43789_43824 = state_43773__$1;
(statearr_43789_43824[(2)] = null);

(statearr_43789_43824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (6))){
var inst_43714 = (state_43773[(13)]);
var inst_43723 = f.call(null,inst_43714);
var inst_43724 = cljs.core.seq.call(null,inst_43723);
var inst_43725 = inst_43724;
var inst_43726 = null;
var inst_43727 = (0);
var inst_43728 = (0);
var state_43773__$1 = (function (){var statearr_43790 = state_43773;
(statearr_43790[(8)] = inst_43728);

(statearr_43790[(10)] = inst_43727);

(statearr_43790[(11)] = inst_43725);

(statearr_43790[(12)] = inst_43726);

return statearr_43790;
})();
var statearr_43791_43825 = state_43773__$1;
(statearr_43791_43825[(2)] = null);

(statearr_43791_43825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (17))){
var inst_43739 = (state_43773[(7)]);
var inst_43743 = cljs.core.chunk_first.call(null,inst_43739);
var inst_43744 = cljs.core.chunk_rest.call(null,inst_43739);
var inst_43745 = cljs.core.count.call(null,inst_43743);
var inst_43725 = inst_43744;
var inst_43726 = inst_43743;
var inst_43727 = inst_43745;
var inst_43728 = (0);
var state_43773__$1 = (function (){var statearr_43792 = state_43773;
(statearr_43792[(8)] = inst_43728);

(statearr_43792[(10)] = inst_43727);

(statearr_43792[(11)] = inst_43725);

(statearr_43792[(12)] = inst_43726);

return statearr_43792;
})();
var statearr_43793_43826 = state_43773__$1;
(statearr_43793_43826[(2)] = null);

(statearr_43793_43826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (3))){
var inst_43771 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43773__$1,inst_43771);
} else {
if((state_val_43774 === (12))){
var inst_43759 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
var statearr_43794_43827 = state_43773__$1;
(statearr_43794_43827[(2)] = inst_43759);

(statearr_43794_43827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (2))){
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43773__$1,(4),in$);
} else {
if((state_val_43774 === (23))){
var inst_43767 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
var statearr_43795_43828 = state_43773__$1;
(statearr_43795_43828[(2)] = inst_43767);

(statearr_43795_43828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (19))){
var inst_43754 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
var statearr_43796_43829 = state_43773__$1;
(statearr_43796_43829[(2)] = inst_43754);

(statearr_43796_43829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (11))){
var inst_43739 = (state_43773[(7)]);
var inst_43725 = (state_43773[(11)]);
var inst_43739__$1 = cljs.core.seq.call(null,inst_43725);
var state_43773__$1 = (function (){var statearr_43797 = state_43773;
(statearr_43797[(7)] = inst_43739__$1);

return statearr_43797;
})();
if(inst_43739__$1){
var statearr_43798_43830 = state_43773__$1;
(statearr_43798_43830[(1)] = (14));

} else {
var statearr_43799_43831 = state_43773__$1;
(statearr_43799_43831[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (9))){
var inst_43761 = (state_43773[(2)]);
var inst_43762 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43773__$1 = (function (){var statearr_43800 = state_43773;
(statearr_43800[(15)] = inst_43761);

return statearr_43800;
})();
if(cljs.core.truth_(inst_43762)){
var statearr_43801_43832 = state_43773__$1;
(statearr_43801_43832[(1)] = (21));

} else {
var statearr_43802_43833 = state_43773__$1;
(statearr_43802_43833[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (5))){
var inst_43717 = cljs.core.async.close_BANG_.call(null,out);
var state_43773__$1 = state_43773;
var statearr_43803_43834 = state_43773__$1;
(statearr_43803_43834[(2)] = inst_43717);

(statearr_43803_43834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (14))){
var inst_43739 = (state_43773[(7)]);
var inst_43741 = cljs.core.chunked_seq_QMARK_.call(null,inst_43739);
var state_43773__$1 = state_43773;
if(inst_43741){
var statearr_43804_43835 = state_43773__$1;
(statearr_43804_43835[(1)] = (17));

} else {
var statearr_43805_43836 = state_43773__$1;
(statearr_43805_43836[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (16))){
var inst_43757 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
var statearr_43806_43837 = state_43773__$1;
(statearr_43806_43837[(2)] = inst_43757);

(statearr_43806_43837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43774 === (10))){
var inst_43728 = (state_43773[(8)]);
var inst_43726 = (state_43773[(12)]);
var inst_43733 = cljs.core._nth.call(null,inst_43726,inst_43728);
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43773__$1,(13),out,inst_43733);
} else {
if((state_val_43774 === (18))){
var inst_43739 = (state_43773[(7)]);
var inst_43748 = cljs.core.first.call(null,inst_43739);
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43773__$1,(20),out,inst_43748);
} else {
if((state_val_43774 === (8))){
var inst_43728 = (state_43773[(8)]);
var inst_43727 = (state_43773[(10)]);
var inst_43730 = (inst_43728 < inst_43727);
var inst_43731 = inst_43730;
var state_43773__$1 = state_43773;
if(cljs.core.truth_(inst_43731)){
var statearr_43807_43838 = state_43773__$1;
(statearr_43807_43838[(1)] = (10));

} else {
var statearr_43808_43839 = state_43773__$1;
(statearr_43808_43839[(1)] = (11));

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
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41227__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41227__auto____0 = (function (){
var statearr_43812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43812[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41227__auto__);

(statearr_43812[(1)] = (1));

return statearr_43812;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41227__auto____1 = (function (state_43773){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43813){if((e43813 instanceof Object)){
var ex__41230__auto__ = e43813;
var statearr_43814_43840 = state_43773;
(statearr_43814_43840[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43841 = state_43773;
state_43773 = G__43841;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41227__auto__ = function(state_43773){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41227__auto____1.call(this,state_43773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41227__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41227__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_43815 = f__41339__auto__.call(null);
(statearr_43815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_43815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43842 = [];
var len__38772__auto___43845 = arguments.length;
var i__38773__auto___43846 = (0);
while(true){
if((i__38773__auto___43846 < len__38772__auto___43845)){
args43842.push((arguments[i__38773__auto___43846]));

var G__43847 = (i__38773__auto___43846 + (1));
i__38773__auto___43846 = G__43847;
continue;
} else {
}
break;
}

var G__43844 = args43842.length;
switch (G__43844) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43842.length)].join('')));

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
var args43849 = [];
var len__38772__auto___43852 = arguments.length;
var i__38773__auto___43853 = (0);
while(true){
if((i__38773__auto___43853 < len__38772__auto___43852)){
args43849.push((arguments[i__38773__auto___43853]));

var G__43854 = (i__38773__auto___43853 + (1));
i__38773__auto___43853 = G__43854;
continue;
} else {
}
break;
}

var G__43851 = args43849.length;
switch (G__43851) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43849.length)].join('')));

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
var args43856 = [];
var len__38772__auto___43907 = arguments.length;
var i__38773__auto___43908 = (0);
while(true){
if((i__38773__auto___43908 < len__38772__auto___43907)){
args43856.push((arguments[i__38773__auto___43908]));

var G__43909 = (i__38773__auto___43908 + (1));
i__38773__auto___43908 = G__43909;
continue;
} else {
}
break;
}

var G__43858 = args43856.length;
switch (G__43858) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43856.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41338__auto___43911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43911,out){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43911,out){
return (function (state_43882){
var state_val_43883 = (state_43882[(1)]);
if((state_val_43883 === (7))){
var inst_43877 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
var statearr_43884_43912 = state_43882__$1;
(statearr_43884_43912[(2)] = inst_43877);

(statearr_43884_43912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (1))){
var inst_43859 = null;
var state_43882__$1 = (function (){var statearr_43885 = state_43882;
(statearr_43885[(7)] = inst_43859);

return statearr_43885;
})();
var statearr_43886_43913 = state_43882__$1;
(statearr_43886_43913[(2)] = null);

(statearr_43886_43913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (4))){
var inst_43862 = (state_43882[(8)]);
var inst_43862__$1 = (state_43882[(2)]);
var inst_43863 = (inst_43862__$1 == null);
var inst_43864 = cljs.core.not.call(null,inst_43863);
var state_43882__$1 = (function (){var statearr_43887 = state_43882;
(statearr_43887[(8)] = inst_43862__$1);

return statearr_43887;
})();
if(inst_43864){
var statearr_43888_43914 = state_43882__$1;
(statearr_43888_43914[(1)] = (5));

} else {
var statearr_43889_43915 = state_43882__$1;
(statearr_43889_43915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (6))){
var state_43882__$1 = state_43882;
var statearr_43890_43916 = state_43882__$1;
(statearr_43890_43916[(2)] = null);

(statearr_43890_43916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (3))){
var inst_43879 = (state_43882[(2)]);
var inst_43880 = cljs.core.async.close_BANG_.call(null,out);
var state_43882__$1 = (function (){var statearr_43891 = state_43882;
(statearr_43891[(9)] = inst_43879);

return statearr_43891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43882__$1,inst_43880);
} else {
if((state_val_43883 === (2))){
var state_43882__$1 = state_43882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43882__$1,(4),ch);
} else {
if((state_val_43883 === (11))){
var inst_43862 = (state_43882[(8)]);
var inst_43871 = (state_43882[(2)]);
var inst_43859 = inst_43862;
var state_43882__$1 = (function (){var statearr_43892 = state_43882;
(statearr_43892[(7)] = inst_43859);

(statearr_43892[(10)] = inst_43871);

return statearr_43892;
})();
var statearr_43893_43917 = state_43882__$1;
(statearr_43893_43917[(2)] = null);

(statearr_43893_43917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (9))){
var inst_43862 = (state_43882[(8)]);
var state_43882__$1 = state_43882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43882__$1,(11),out,inst_43862);
} else {
if((state_val_43883 === (5))){
var inst_43859 = (state_43882[(7)]);
var inst_43862 = (state_43882[(8)]);
var inst_43866 = cljs.core._EQ_.call(null,inst_43862,inst_43859);
var state_43882__$1 = state_43882;
if(inst_43866){
var statearr_43895_43918 = state_43882__$1;
(statearr_43895_43918[(1)] = (8));

} else {
var statearr_43896_43919 = state_43882__$1;
(statearr_43896_43919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (10))){
var inst_43874 = (state_43882[(2)]);
var state_43882__$1 = state_43882;
var statearr_43897_43920 = state_43882__$1;
(statearr_43897_43920[(2)] = inst_43874);

(statearr_43897_43920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43883 === (8))){
var inst_43859 = (state_43882[(7)]);
var tmp43894 = inst_43859;
var inst_43859__$1 = tmp43894;
var state_43882__$1 = (function (){var statearr_43898 = state_43882;
(statearr_43898[(7)] = inst_43859__$1);

return statearr_43898;
})();
var statearr_43899_43921 = state_43882__$1;
(statearr_43899_43921[(2)] = null);

(statearr_43899_43921[(1)] = (2));


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
});})(c__41338__auto___43911,out))
;
return ((function (switch__41226__auto__,c__41338__auto___43911,out){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_43903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43903[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_43903[(1)] = (1));

return statearr_43903;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_43882){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43904){if((e43904 instanceof Object)){
var ex__41230__auto__ = e43904;
var statearr_43905_43922 = state_43882;
(statearr_43905_43922[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43923 = state_43882;
state_43882 = G__43923;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_43882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_43882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43911,out))
})();
var state__41340__auto__ = (function (){var statearr_43906 = f__41339__auto__.call(null);
(statearr_43906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43911);

return statearr_43906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43911,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43924 = [];
var len__38772__auto___43994 = arguments.length;
var i__38773__auto___43995 = (0);
while(true){
if((i__38773__auto___43995 < len__38772__auto___43994)){
args43924.push((arguments[i__38773__auto___43995]));

var G__43996 = (i__38773__auto___43995 + (1));
i__38773__auto___43995 = G__43996;
continue;
} else {
}
break;
}

var G__43926 = args43924.length;
switch (G__43926) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43924.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41338__auto___43998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___43998,out){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___43998,out){
return (function (state_43964){
var state_val_43965 = (state_43964[(1)]);
if((state_val_43965 === (7))){
var inst_43960 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
var statearr_43966_43999 = state_43964__$1;
(statearr_43966_43999[(2)] = inst_43960);

(statearr_43966_43999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (1))){
var inst_43927 = (new Array(n));
var inst_43928 = inst_43927;
var inst_43929 = (0);
var state_43964__$1 = (function (){var statearr_43967 = state_43964;
(statearr_43967[(7)] = inst_43929);

(statearr_43967[(8)] = inst_43928);

return statearr_43967;
})();
var statearr_43968_44000 = state_43964__$1;
(statearr_43968_44000[(2)] = null);

(statearr_43968_44000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (4))){
var inst_43932 = (state_43964[(9)]);
var inst_43932__$1 = (state_43964[(2)]);
var inst_43933 = (inst_43932__$1 == null);
var inst_43934 = cljs.core.not.call(null,inst_43933);
var state_43964__$1 = (function (){var statearr_43969 = state_43964;
(statearr_43969[(9)] = inst_43932__$1);

return statearr_43969;
})();
if(inst_43934){
var statearr_43970_44001 = state_43964__$1;
(statearr_43970_44001[(1)] = (5));

} else {
var statearr_43971_44002 = state_43964__$1;
(statearr_43971_44002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (15))){
var inst_43954 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
var statearr_43972_44003 = state_43964__$1;
(statearr_43972_44003[(2)] = inst_43954);

(statearr_43972_44003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (13))){
var state_43964__$1 = state_43964;
var statearr_43973_44004 = state_43964__$1;
(statearr_43973_44004[(2)] = null);

(statearr_43973_44004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (6))){
var inst_43929 = (state_43964[(7)]);
var inst_43950 = (inst_43929 > (0));
var state_43964__$1 = state_43964;
if(cljs.core.truth_(inst_43950)){
var statearr_43974_44005 = state_43964__$1;
(statearr_43974_44005[(1)] = (12));

} else {
var statearr_43975_44006 = state_43964__$1;
(statearr_43975_44006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (3))){
var inst_43962 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43964__$1,inst_43962);
} else {
if((state_val_43965 === (12))){
var inst_43928 = (state_43964[(8)]);
var inst_43952 = cljs.core.vec.call(null,inst_43928);
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43964__$1,(15),out,inst_43952);
} else {
if((state_val_43965 === (2))){
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43964__$1,(4),ch);
} else {
if((state_val_43965 === (11))){
var inst_43944 = (state_43964[(2)]);
var inst_43945 = (new Array(n));
var inst_43928 = inst_43945;
var inst_43929 = (0);
var state_43964__$1 = (function (){var statearr_43976 = state_43964;
(statearr_43976[(7)] = inst_43929);

(statearr_43976[(8)] = inst_43928);

(statearr_43976[(10)] = inst_43944);

return statearr_43976;
})();
var statearr_43977_44007 = state_43964__$1;
(statearr_43977_44007[(2)] = null);

(statearr_43977_44007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (9))){
var inst_43928 = (state_43964[(8)]);
var inst_43942 = cljs.core.vec.call(null,inst_43928);
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43964__$1,(11),out,inst_43942);
} else {
if((state_val_43965 === (5))){
var inst_43929 = (state_43964[(7)]);
var inst_43937 = (state_43964[(11)]);
var inst_43928 = (state_43964[(8)]);
var inst_43932 = (state_43964[(9)]);
var inst_43936 = (inst_43928[inst_43929] = inst_43932);
var inst_43937__$1 = (inst_43929 + (1));
var inst_43938 = (inst_43937__$1 < n);
var state_43964__$1 = (function (){var statearr_43978 = state_43964;
(statearr_43978[(11)] = inst_43937__$1);

(statearr_43978[(12)] = inst_43936);

return statearr_43978;
})();
if(cljs.core.truth_(inst_43938)){
var statearr_43979_44008 = state_43964__$1;
(statearr_43979_44008[(1)] = (8));

} else {
var statearr_43980_44009 = state_43964__$1;
(statearr_43980_44009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (14))){
var inst_43957 = (state_43964[(2)]);
var inst_43958 = cljs.core.async.close_BANG_.call(null,out);
var state_43964__$1 = (function (){var statearr_43982 = state_43964;
(statearr_43982[(13)] = inst_43957);

return statearr_43982;
})();
var statearr_43983_44010 = state_43964__$1;
(statearr_43983_44010[(2)] = inst_43958);

(statearr_43983_44010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (10))){
var inst_43948 = (state_43964[(2)]);
var state_43964__$1 = state_43964;
var statearr_43984_44011 = state_43964__$1;
(statearr_43984_44011[(2)] = inst_43948);

(statearr_43984_44011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43965 === (8))){
var inst_43937 = (state_43964[(11)]);
var inst_43928 = (state_43964[(8)]);
var tmp43981 = inst_43928;
var inst_43928__$1 = tmp43981;
var inst_43929 = inst_43937;
var state_43964__$1 = (function (){var statearr_43985 = state_43964;
(statearr_43985[(7)] = inst_43929);

(statearr_43985[(8)] = inst_43928__$1);

return statearr_43985;
})();
var statearr_43986_44012 = state_43964__$1;
(statearr_43986_44012[(2)] = null);

(statearr_43986_44012[(1)] = (2));


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
});})(c__41338__auto___43998,out))
;
return ((function (switch__41226__auto__,c__41338__auto___43998,out){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_43990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43990[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_43990[(1)] = (1));

return statearr_43990;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_43964){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_43964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e43991){if((e43991 instanceof Object)){
var ex__41230__auto__ = e43991;
var statearr_43992_44013 = state_43964;
(statearr_43992_44013[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44014 = state_43964;
state_43964 = G__44014;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_43964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_43964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___43998,out))
})();
var state__41340__auto__ = (function (){var statearr_43993 = f__41339__auto__.call(null);
(statearr_43993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___43998);

return statearr_43993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___43998,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args44015 = [];
var len__38772__auto___44089 = arguments.length;
var i__38773__auto___44090 = (0);
while(true){
if((i__38773__auto___44090 < len__38772__auto___44089)){
args44015.push((arguments[i__38773__auto___44090]));

var G__44091 = (i__38773__auto___44090 + (1));
i__38773__auto___44090 = G__44091;
continue;
} else {
}
break;
}

var G__44017 = args44015.length;
switch (G__44017) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44015.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41338__auto___44093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___44093,out){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___44093,out){
return (function (state_44059){
var state_val_44060 = (state_44059[(1)]);
if((state_val_44060 === (7))){
var inst_44055 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44061_44094 = state_44059__$1;
(statearr_44061_44094[(2)] = inst_44055);

(statearr_44061_44094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (1))){
var inst_44018 = [];
var inst_44019 = inst_44018;
var inst_44020 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44059__$1 = (function (){var statearr_44062 = state_44059;
(statearr_44062[(7)] = inst_44019);

(statearr_44062[(8)] = inst_44020);

return statearr_44062;
})();
var statearr_44063_44095 = state_44059__$1;
(statearr_44063_44095[(2)] = null);

(statearr_44063_44095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (4))){
var inst_44023 = (state_44059[(9)]);
var inst_44023__$1 = (state_44059[(2)]);
var inst_44024 = (inst_44023__$1 == null);
var inst_44025 = cljs.core.not.call(null,inst_44024);
var state_44059__$1 = (function (){var statearr_44064 = state_44059;
(statearr_44064[(9)] = inst_44023__$1);

return statearr_44064;
})();
if(inst_44025){
var statearr_44065_44096 = state_44059__$1;
(statearr_44065_44096[(1)] = (5));

} else {
var statearr_44066_44097 = state_44059__$1;
(statearr_44066_44097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (15))){
var inst_44049 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44067_44098 = state_44059__$1;
(statearr_44067_44098[(2)] = inst_44049);

(statearr_44067_44098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (13))){
var state_44059__$1 = state_44059;
var statearr_44068_44099 = state_44059__$1;
(statearr_44068_44099[(2)] = null);

(statearr_44068_44099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (6))){
var inst_44019 = (state_44059[(7)]);
var inst_44044 = inst_44019.length;
var inst_44045 = (inst_44044 > (0));
var state_44059__$1 = state_44059;
if(cljs.core.truth_(inst_44045)){
var statearr_44069_44100 = state_44059__$1;
(statearr_44069_44100[(1)] = (12));

} else {
var statearr_44070_44101 = state_44059__$1;
(statearr_44070_44101[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (3))){
var inst_44057 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44059__$1,inst_44057);
} else {
if((state_val_44060 === (12))){
var inst_44019 = (state_44059[(7)]);
var inst_44047 = cljs.core.vec.call(null,inst_44019);
var state_44059__$1 = state_44059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44059__$1,(15),out,inst_44047);
} else {
if((state_val_44060 === (2))){
var state_44059__$1 = state_44059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44059__$1,(4),ch);
} else {
if((state_val_44060 === (11))){
var inst_44023 = (state_44059[(9)]);
var inst_44027 = (state_44059[(10)]);
var inst_44037 = (state_44059[(2)]);
var inst_44038 = [];
var inst_44039 = inst_44038.push(inst_44023);
var inst_44019 = inst_44038;
var inst_44020 = inst_44027;
var state_44059__$1 = (function (){var statearr_44071 = state_44059;
(statearr_44071[(7)] = inst_44019);

(statearr_44071[(8)] = inst_44020);

(statearr_44071[(11)] = inst_44037);

(statearr_44071[(12)] = inst_44039);

return statearr_44071;
})();
var statearr_44072_44102 = state_44059__$1;
(statearr_44072_44102[(2)] = null);

(statearr_44072_44102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (9))){
var inst_44019 = (state_44059[(7)]);
var inst_44035 = cljs.core.vec.call(null,inst_44019);
var state_44059__$1 = state_44059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44059__$1,(11),out,inst_44035);
} else {
if((state_val_44060 === (5))){
var inst_44020 = (state_44059[(8)]);
var inst_44023 = (state_44059[(9)]);
var inst_44027 = (state_44059[(10)]);
var inst_44027__$1 = f.call(null,inst_44023);
var inst_44028 = cljs.core._EQ_.call(null,inst_44027__$1,inst_44020);
var inst_44029 = cljs.core.keyword_identical_QMARK_.call(null,inst_44020,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44030 = (inst_44028) || (inst_44029);
var state_44059__$1 = (function (){var statearr_44073 = state_44059;
(statearr_44073[(10)] = inst_44027__$1);

return statearr_44073;
})();
if(cljs.core.truth_(inst_44030)){
var statearr_44074_44103 = state_44059__$1;
(statearr_44074_44103[(1)] = (8));

} else {
var statearr_44075_44104 = state_44059__$1;
(statearr_44075_44104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (14))){
var inst_44052 = (state_44059[(2)]);
var inst_44053 = cljs.core.async.close_BANG_.call(null,out);
var state_44059__$1 = (function (){var statearr_44077 = state_44059;
(statearr_44077[(13)] = inst_44052);

return statearr_44077;
})();
var statearr_44078_44105 = state_44059__$1;
(statearr_44078_44105[(2)] = inst_44053);

(statearr_44078_44105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (10))){
var inst_44042 = (state_44059[(2)]);
var state_44059__$1 = state_44059;
var statearr_44079_44106 = state_44059__$1;
(statearr_44079_44106[(2)] = inst_44042);

(statearr_44079_44106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44060 === (8))){
var inst_44019 = (state_44059[(7)]);
var inst_44023 = (state_44059[(9)]);
var inst_44027 = (state_44059[(10)]);
var inst_44032 = inst_44019.push(inst_44023);
var tmp44076 = inst_44019;
var inst_44019__$1 = tmp44076;
var inst_44020 = inst_44027;
var state_44059__$1 = (function (){var statearr_44080 = state_44059;
(statearr_44080[(7)] = inst_44019__$1);

(statearr_44080[(8)] = inst_44020);

(statearr_44080[(14)] = inst_44032);

return statearr_44080;
})();
var statearr_44081_44107 = state_44059__$1;
(statearr_44081_44107[(2)] = null);

(statearr_44081_44107[(1)] = (2));


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
});})(c__41338__auto___44093,out))
;
return ((function (switch__41226__auto__,c__41338__auto___44093,out){
return (function() {
var cljs$core$async$state_machine__41227__auto__ = null;
var cljs$core$async$state_machine__41227__auto____0 = (function (){
var statearr_44085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44085[(0)] = cljs$core$async$state_machine__41227__auto__);

(statearr_44085[(1)] = (1));

return statearr_44085;
});
var cljs$core$async$state_machine__41227__auto____1 = (function (state_44059){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_44059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e44086){if((e44086 instanceof Object)){
var ex__41230__auto__ = e44086;
var statearr_44087_44108 = state_44059;
(statearr_44087_44108[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44109 = state_44059;
state_44059 = G__44109;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
cljs$core$async$state_machine__41227__auto__ = function(state_44059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41227__auto____1.call(this,state_44059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41227__auto____0;
cljs$core$async$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41227__auto____1;
return cljs$core$async$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___44093,out))
})();
var state__41340__auto__ = (function (){var statearr_44088 = f__41339__auto__.call(null);
(statearr_44088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___44093);

return statearr_44088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___44093,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1462424041196