// Compiled by ClojureScript 1.8.51 {}
goog.provide('grid.square');
goog.require('cljs.core');
grid.square.neighbors = (function grid$square$neighbors(p__8848){
var vec__8850 = p__8848;
var i = cljs.core.nth.call(null,vec__8850,(0),null);
var j = cljs.core.nth.call(null,vec__8850,(1),null);
var x = cljs.core.juxt.call(null,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.dec,cljs.core.dec,cljs.core.identity,cljs.core.inc).call(null,i);
var y = cljs.core.juxt.call(null,cljs.core.identity,cljs.core.inc,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.dec,cljs.core.dec).call(null,j);
return cljs.core.map.call(null,cljs.core.vector,x,y);
});

//# sourceMappingURL=square.js.map?rel=1462424429201