// Compiled by ClojureScript 1.8.51 {}
goog.provide('grid.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
grid.core.render = (function grid$core$render(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tetris Clone"], null)], null);
});
var temp__4657__auto___10238 = document.getElementById("app");
if(cljs.core.truth_(temp__4657__auto___10238)){
var app_context_10239 = temp__4657__auto___10238;
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid.core.render,grid.core.state], null));
} else {
}
grid.core.on_js_reload = (function grid$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1462424429610