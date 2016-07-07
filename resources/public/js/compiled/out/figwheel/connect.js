// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('grid.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20628__delegate = function (x){
if(cljs.core.truth_(grid.core.on_js_reload)){
return cljs.core.apply.call(null,grid.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'grid.core/on-js-reload' is missing");
}
};
var G__20628 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20629__i = 0, G__20629__a = new Array(arguments.length -  0);
while (G__20629__i < G__20629__a.length) {G__20629__a[G__20629__i] = arguments[G__20629__i + 0]; ++G__20629__i;}
  x = new cljs.core.IndexedSeq(G__20629__a,0);
} 
return G__20628__delegate.call(this,x);};
G__20628.cljs$lang$maxFixedArity = 0;
G__20628.cljs$lang$applyTo = (function (arglist__20630){
var x = cljs.core.seq(arglist__20630);
return G__20628__delegate(x);
});
G__20628.cljs$core$IFn$_invoke$arity$variadic = G__20628__delegate;
return G__20628;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1462424837575