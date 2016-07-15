// Compiled by ClojureScript 1.9.93 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('grid.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__86084__delegate = function (x){
if(cljs.core.truth_(grid.core.on_js_reload)){
return cljs.core.apply.call(null,grid.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'grid.core/on-js-reload' is missing");
}
};
var G__86084 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__86085__i = 0, G__86085__a = new Array(arguments.length -  0);
while (G__86085__i < G__86085__a.length) {G__86085__a[G__86085__i] = arguments[G__86085__i + 0]; ++G__86085__i;}
  x = new cljs.core.IndexedSeq(G__86085__a,0);
} 
return G__86084__delegate.call(this,x);};
G__86084.cljs$lang$maxFixedArity = 0;
G__86084.cljs$lang$applyTo = (function (arglist__86086){
var x = cljs.core.seq(arglist__86086);
return G__86084__delegate(x);
});
G__86084.cljs$core$IFn$_invoke$arity$variadic = G__86084__delegate;
return G__86084;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1467868408690