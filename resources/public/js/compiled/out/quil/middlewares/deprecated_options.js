// Compiled by ClojureScript 1.9.93 {}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"decor","decor",-1730969431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljs.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set.call(null,features);
if(cljs.core.truth_(features__$1.call(null,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157)))){
cljs.core.println.call(null,"Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now.");
} else {
}

return cljs.core.disj.call(null,features__$1,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
 * Checks if options map contains deprected options and removes them.
 *   Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336)], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__42273__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__74879(s__74880){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__74880__$1 = s__74880;
while(true){
var temp__6477__auto__ = cljs.core.seq.call(null,s__74880__$1);
if(temp__6477__auto__){
var s__74880__$2 = temp__6477__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__74880__$2)){
var c__42271__auto__ = cljs.core.chunk_first.call(null,s__74880__$2);
var size__42272__auto__ = cljs.core.count.call(null,c__42271__auto__);
var b__74882 = cljs.core.chunk_buffer.call(null,size__42272__auto__);
if((function (){var i__74881 = (0);
while(true){
if((i__74881 < size__42272__auto__)){
var vec__74895 = cljs.core._nth.call(null,c__42271__auto__,i__74881);
var name = cljs.core.nth.call(null,vec__74895,(0),null);
var value = cljs.core.nth.call(null,vec__74895,(1),null);
cljs.core.chunk_append.call(null,b__74882,(function (){var temp__6475__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__6475__auto__)){
var vec__74898 = temp__6475__auto__;
var version = cljs.core.nth.call(null,vec__74898,(0),null);
var message = cljs.core.nth.call(null,vec__74898,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__74907 = (i__74881 + (1));
i__74881 = G__74907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74882),quil$middlewares$deprecated_options$deprecated_options_$_iter__74879.call(null,cljs.core.chunk_rest.call(null,s__74880__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__74882),null);
}
} else {
var vec__74901 = cljs.core.first.call(null,s__74880__$2);
var name = cljs.core.nth.call(null,vec__74901,(0),null);
var value = cljs.core.nth.call(null,vec__74901,(1),null);
return cljs.core.cons.call(null,(function (){var temp__6475__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__6475__auto__)){
var vec__74904 = temp__6475__auto__;
var version = cljs.core.nth.call(null,vec__74904,(0),null);
var message = cljs.core.nth.call(null,vec__74904,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__74879.call(null,cljs.core.rest.call(null,s__74880__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__42273__auto__.call(null,options__$1);
})()));
});

//# sourceMappingURL=deprecated_options.js.map?rel=1467866135600