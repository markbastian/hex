// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__37690__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__37690__auto__)){
var and__37690__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__37690__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__37690__auto____$1;
}
} else {
return and__37690__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj38878 = {"detail":data};
return obj38878;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args38883 = [];
var len__38772__auto___38889 = arguments.length;
var i__38773__auto___38890 = (0);
while(true){
if((i__38773__auto___38890 < len__38772__auto___38889)){
args38883.push((arguments[i__38773__auto___38890]));

var G__38891 = (i__38773__auto___38890 + (1));
i__38773__auto___38890 = G__38891;
continue;
} else {
}
break;
}

var G__38885 = args38883.length;
switch (G__38885) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38883.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__38886 = cljs.core._EQ_;
var expr__38887 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__38886.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__38887))){
return ((function (pred__38886,expr__38887){
return (function (p1__38879_SHARP_){
return console.warn(p1__38879_SHARP_);
});
;})(pred__38886,expr__38887))
} else {
if(cljs.core.truth_(pred__38886.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__38887))){
return ((function (pred__38886,expr__38887){
return (function (p1__38880_SHARP_){
return console.debug(p1__38880_SHARP_);
});
;})(pred__38886,expr__38887))
} else {
if(cljs.core.truth_(pred__38886.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__38887))){
return ((function (pred__38886,expr__38887){
return (function (p1__38881_SHARP_){
return console.error(p1__38881_SHARP_);
});
;})(pred__38886,expr__38887))
} else {
return ((function (pred__38886,expr__38887){
return (function (p1__38882_SHARP_){
return console.log(p1__38882_SHARP_);
});
;})(pred__38886,expr__38887))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__38893){
var map__38896 = p__38893;
var map__38896__$1 = ((((!((map__38896 == null)))?((((map__38896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38896):map__38896);
var opts = map__38896__$1;
var eval_fn = cljs.core.get.call(null,map__38896__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1462424036835