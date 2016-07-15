// Compiled by ClojureScript 1.9.93 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41419__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41419__auto__){
return or__41419__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41419__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__79206_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__79206_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__79211 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__79212 = null;
var count__79213 = (0);
var i__79214 = (0);
while(true){
if((i__79214 < count__79213)){
var n = cljs.core._nth.call(null,chunk__79212,i__79214);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__79215 = seq__79211;
var G__79216 = chunk__79212;
var G__79217 = count__79213;
var G__79218 = (i__79214 + (1));
seq__79211 = G__79215;
chunk__79212 = G__79216;
count__79213 = G__79217;
i__79214 = G__79218;
continue;
} else {
var temp__6477__auto__ = cljs.core.seq.call(null,seq__79211);
if(temp__6477__auto__){
var seq__79211__$1 = temp__6477__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79211__$1)){
var c__42322__auto__ = cljs.core.chunk_first.call(null,seq__79211__$1);
var G__79219 = cljs.core.chunk_rest.call(null,seq__79211__$1);
var G__79220 = c__42322__auto__;
var G__79221 = cljs.core.count.call(null,c__42322__auto__);
var G__79222 = (0);
seq__79211 = G__79219;
chunk__79212 = G__79220;
count__79213 = G__79221;
i__79214 = G__79222;
continue;
} else {
var n = cljs.core.first.call(null,seq__79211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__79223 = cljs.core.next.call(null,seq__79211__$1);
var G__79224 = null;
var G__79225 = (0);
var G__79226 = (0);
seq__79211 = G__79223;
chunk__79212 = G__79224;
count__79213 = G__79225;
i__79214 = G__79226;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__79277_79288 = cljs.core.seq.call(null,deps);
var chunk__79278_79289 = null;
var count__79279_79290 = (0);
var i__79280_79291 = (0);
while(true){
if((i__79280_79291 < count__79279_79290)){
var dep_79292 = cljs.core._nth.call(null,chunk__79278_79289,i__79280_79291);
topo_sort_helper_STAR_.call(null,dep_79292,(depth + (1)),state);

var G__79293 = seq__79277_79288;
var G__79294 = chunk__79278_79289;
var G__79295 = count__79279_79290;
var G__79296 = (i__79280_79291 + (1));
seq__79277_79288 = G__79293;
chunk__79278_79289 = G__79294;
count__79279_79290 = G__79295;
i__79280_79291 = G__79296;
continue;
} else {
var temp__6477__auto___79297 = cljs.core.seq.call(null,seq__79277_79288);
if(temp__6477__auto___79297){
var seq__79277_79298__$1 = temp__6477__auto___79297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79277_79298__$1)){
var c__42322__auto___79299 = cljs.core.chunk_first.call(null,seq__79277_79298__$1);
var G__79300 = cljs.core.chunk_rest.call(null,seq__79277_79298__$1);
var G__79301 = c__42322__auto___79299;
var G__79302 = cljs.core.count.call(null,c__42322__auto___79299);
var G__79303 = (0);
seq__79277_79288 = G__79300;
chunk__79278_79289 = G__79301;
count__79279_79290 = G__79302;
i__79280_79291 = G__79303;
continue;
} else {
var dep_79304 = cljs.core.first.call(null,seq__79277_79298__$1);
topo_sort_helper_STAR_.call(null,dep_79304,(depth + (1)),state);

var G__79305 = cljs.core.next.call(null,seq__79277_79298__$1);
var G__79306 = null;
var G__79307 = (0);
var G__79308 = (0);
seq__79277_79288 = G__79305;
chunk__79278_79289 = G__79306;
count__79279_79290 = G__79307;
i__79280_79291 = G__79308;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__79281){
var vec__79285 = p__79281;
var seq__79286 = cljs.core.seq.call(null,vec__79285);
var first__79287 = cljs.core.first.call(null,seq__79286);
var seq__79286__$1 = cljs.core.next.call(null,seq__79286);
var x = first__79287;
var xs = seq__79286__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__79285,seq__79286,first__79287,seq__79286__$1,x,xs,get_deps__$1){
return (function (p1__79227_SHARP_){
return clojure.set.difference.call(null,p1__79227_SHARP_,x);
});})(vec__79285,seq__79286,first__79287,seq__79286__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__79321 = cljs.core.seq.call(null,provides);
var chunk__79322 = null;
var count__79323 = (0);
var i__79324 = (0);
while(true){
if((i__79324 < count__79323)){
var prov = cljs.core._nth.call(null,chunk__79322,i__79324);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__79325_79333 = cljs.core.seq.call(null,requires);
var chunk__79326_79334 = null;
var count__79327_79335 = (0);
var i__79328_79336 = (0);
while(true){
if((i__79328_79336 < count__79327_79335)){
var req_79337 = cljs.core._nth.call(null,chunk__79326_79334,i__79328_79336);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79337,prov);

var G__79338 = seq__79325_79333;
var G__79339 = chunk__79326_79334;
var G__79340 = count__79327_79335;
var G__79341 = (i__79328_79336 + (1));
seq__79325_79333 = G__79338;
chunk__79326_79334 = G__79339;
count__79327_79335 = G__79340;
i__79328_79336 = G__79341;
continue;
} else {
var temp__6477__auto___79342 = cljs.core.seq.call(null,seq__79325_79333);
if(temp__6477__auto___79342){
var seq__79325_79343__$1 = temp__6477__auto___79342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79325_79343__$1)){
var c__42322__auto___79344 = cljs.core.chunk_first.call(null,seq__79325_79343__$1);
var G__79345 = cljs.core.chunk_rest.call(null,seq__79325_79343__$1);
var G__79346 = c__42322__auto___79344;
var G__79347 = cljs.core.count.call(null,c__42322__auto___79344);
var G__79348 = (0);
seq__79325_79333 = G__79345;
chunk__79326_79334 = G__79346;
count__79327_79335 = G__79347;
i__79328_79336 = G__79348;
continue;
} else {
var req_79349 = cljs.core.first.call(null,seq__79325_79343__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79349,prov);

var G__79350 = cljs.core.next.call(null,seq__79325_79343__$1);
var G__79351 = null;
var G__79352 = (0);
var G__79353 = (0);
seq__79325_79333 = G__79350;
chunk__79326_79334 = G__79351;
count__79327_79335 = G__79352;
i__79328_79336 = G__79353;
continue;
}
} else {
}
}
break;
}

var G__79354 = seq__79321;
var G__79355 = chunk__79322;
var G__79356 = count__79323;
var G__79357 = (i__79324 + (1));
seq__79321 = G__79354;
chunk__79322 = G__79355;
count__79323 = G__79356;
i__79324 = G__79357;
continue;
} else {
var temp__6477__auto__ = cljs.core.seq.call(null,seq__79321);
if(temp__6477__auto__){
var seq__79321__$1 = temp__6477__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79321__$1)){
var c__42322__auto__ = cljs.core.chunk_first.call(null,seq__79321__$1);
var G__79358 = cljs.core.chunk_rest.call(null,seq__79321__$1);
var G__79359 = c__42322__auto__;
var G__79360 = cljs.core.count.call(null,c__42322__auto__);
var G__79361 = (0);
seq__79321 = G__79358;
chunk__79322 = G__79359;
count__79323 = G__79360;
i__79324 = G__79361;
continue;
} else {
var prov = cljs.core.first.call(null,seq__79321__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__79329_79362 = cljs.core.seq.call(null,requires);
var chunk__79330_79363 = null;
var count__79331_79364 = (0);
var i__79332_79365 = (0);
while(true){
if((i__79332_79365 < count__79331_79364)){
var req_79366 = cljs.core._nth.call(null,chunk__79330_79363,i__79332_79365);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79366,prov);

var G__79367 = seq__79329_79362;
var G__79368 = chunk__79330_79363;
var G__79369 = count__79331_79364;
var G__79370 = (i__79332_79365 + (1));
seq__79329_79362 = G__79367;
chunk__79330_79363 = G__79368;
count__79331_79364 = G__79369;
i__79332_79365 = G__79370;
continue;
} else {
var temp__6477__auto___79371__$1 = cljs.core.seq.call(null,seq__79329_79362);
if(temp__6477__auto___79371__$1){
var seq__79329_79372__$1 = temp__6477__auto___79371__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79329_79372__$1)){
var c__42322__auto___79373 = cljs.core.chunk_first.call(null,seq__79329_79372__$1);
var G__79374 = cljs.core.chunk_rest.call(null,seq__79329_79372__$1);
var G__79375 = c__42322__auto___79373;
var G__79376 = cljs.core.count.call(null,c__42322__auto___79373);
var G__79377 = (0);
seq__79329_79362 = G__79374;
chunk__79330_79363 = G__79375;
count__79331_79364 = G__79376;
i__79332_79365 = G__79377;
continue;
} else {
var req_79378 = cljs.core.first.call(null,seq__79329_79372__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_79378,prov);

var G__79379 = cljs.core.next.call(null,seq__79329_79372__$1);
var G__79380 = null;
var G__79381 = (0);
var G__79382 = (0);
seq__79329_79362 = G__79379;
chunk__79330_79363 = G__79380;
count__79331_79364 = G__79381;
i__79332_79365 = G__79382;
continue;
}
} else {
}
}
break;
}

var G__79383 = cljs.core.next.call(null,seq__79321__$1);
var G__79384 = null;
var G__79385 = (0);
var G__79386 = (0);
seq__79321 = G__79383;
chunk__79322 = G__79384;
count__79323 = G__79385;
i__79324 = G__79386;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__79391_79395 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__79392_79396 = null;
var count__79393_79397 = (0);
var i__79394_79398 = (0);
while(true){
if((i__79394_79398 < count__79393_79397)){
var ns_79399 = cljs.core._nth.call(null,chunk__79392_79396,i__79394_79398);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_79399);

var G__79400 = seq__79391_79395;
var G__79401 = chunk__79392_79396;
var G__79402 = count__79393_79397;
var G__79403 = (i__79394_79398 + (1));
seq__79391_79395 = G__79400;
chunk__79392_79396 = G__79401;
count__79393_79397 = G__79402;
i__79394_79398 = G__79403;
continue;
} else {
var temp__6477__auto___79404 = cljs.core.seq.call(null,seq__79391_79395);
if(temp__6477__auto___79404){
var seq__79391_79405__$1 = temp__6477__auto___79404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79391_79405__$1)){
var c__42322__auto___79406 = cljs.core.chunk_first.call(null,seq__79391_79405__$1);
var G__79407 = cljs.core.chunk_rest.call(null,seq__79391_79405__$1);
var G__79408 = c__42322__auto___79406;
var G__79409 = cljs.core.count.call(null,c__42322__auto___79406);
var G__79410 = (0);
seq__79391_79395 = G__79407;
chunk__79392_79396 = G__79408;
count__79393_79397 = G__79409;
i__79394_79398 = G__79410;
continue;
} else {
var ns_79411 = cljs.core.first.call(null,seq__79391_79405__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_79411);

var G__79412 = cljs.core.next.call(null,seq__79391_79405__$1);
var G__79413 = null;
var G__79414 = (0);
var G__79415 = (0);
seq__79391_79395 = G__79412;
chunk__79392_79396 = G__79413;
count__79393_79397 = G__79414;
i__79394_79398 = G__79415;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41419__auto__ = goog.require__;
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__79416__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__79416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79417__i = 0, G__79417__a = new Array(arguments.length -  0);
while (G__79417__i < G__79417__a.length) {G__79417__a[G__79417__i] = arguments[G__79417__i + 0]; ++G__79417__i;}
  args = new cljs.core.IndexedSeq(G__79417__a,0);
} 
return G__79416__delegate.call(this,args);};
G__79416.cljs$lang$maxFixedArity = 0;
G__79416.cljs$lang$applyTo = (function (arglist__79418){
var args = cljs.core.seq(arglist__79418);
return G__79416__delegate(args);
});
G__79416.cljs$core$IFn$_invoke$arity$variadic = G__79416__delegate;
return G__79416;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__79420 = cljs.core._EQ_;
var expr__79421 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__79420.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__79421))){
var path_parts = ((function (pred__79420,expr__79421){
return (function (p1__79419_SHARP_){
return clojure.string.split.call(null,p1__79419_SHARP_,/[\/\\]/);
});})(pred__79420,expr__79421))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__79420,expr__79421){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e79423){if((e79423 instanceof Error)){
var e = e79423;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e79423;

}
}})());
});
;})(path_parts,sep,root,pred__79420,expr__79421))
} else {
if(cljs.core.truth_(pred__79420.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__79421))){
return ((function (pred__79420,expr__79421){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__79420,expr__79421){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__79420,expr__79421))
);

return deferred.addErrback(((function (deferred,pred__79420,expr__79421){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__79420,expr__79421))
);
});
;})(pred__79420,expr__79421))
} else {
return ((function (pred__79420,expr__79421){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__79420,expr__79421))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__79424,callback){
var map__79427 = p__79424;
var map__79427__$1 = ((((!((map__79427 == null)))?((((map__79427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79427):map__79427);
var file_msg = map__79427__$1;
var request_url = cljs.core.get.call(null,map__79427__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__79427,map__79427__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__79427,map__79427__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__){
return (function (state_79451){
var state_val_79452 = (state_79451[(1)]);
if((state_val_79452 === (7))){
var inst_79447 = (state_79451[(2)]);
var state_79451__$1 = state_79451;
var statearr_79453_79473 = state_79451__$1;
(statearr_79453_79473[(2)] = inst_79447);

(statearr_79453_79473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79452 === (1))){
var state_79451__$1 = state_79451;
var statearr_79454_79474 = state_79451__$1;
(statearr_79454_79474[(2)] = null);

(statearr_79454_79474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79452 === (4))){
var inst_79431 = (state_79451[(7)]);
var inst_79431__$1 = (state_79451[(2)]);
var state_79451__$1 = (function (){var statearr_79455 = state_79451;
(statearr_79455[(7)] = inst_79431__$1);

return statearr_79455;
})();
if(cljs.core.truth_(inst_79431__$1)){
var statearr_79456_79475 = state_79451__$1;
(statearr_79456_79475[(1)] = (5));

} else {
var statearr_79457_79476 = state_79451__$1;
(statearr_79457_79476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79452 === (6))){
var state_79451__$1 = state_79451;
var statearr_79458_79477 = state_79451__$1;
(statearr_79458_79477[(2)] = null);

(statearr_79458_79477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79452 === (3))){
var inst_79449 = (state_79451[(2)]);
var state_79451__$1 = state_79451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79451__$1,inst_79449);
} else {
if((state_val_79452 === (2))){
var state_79451__$1 = state_79451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79451__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_79452 === (11))){
var inst_79443 = (state_79451[(2)]);
var state_79451__$1 = (function (){var statearr_79459 = state_79451;
(statearr_79459[(8)] = inst_79443);

return statearr_79459;
})();
var statearr_79460_79478 = state_79451__$1;
(statearr_79460_79478[(2)] = null);

(statearr_79460_79478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79452 === (9))){
var inst_79437 = (state_79451[(9)]);
var inst_79435 = (state_79451[(10)]);
var inst_79439 = inst_79437.call(null,inst_79435);
var state_79451__$1 = state_79451;
var statearr_79461_79479 = state_79451__$1;
(statearr_79461_79479[(2)] = inst_79439);

(statearr_79461_79479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79452 === (5))){
var inst_79431 = (state_79451[(7)]);
var inst_79433 = figwheel.client.file_reloading.blocking_load.call(null,inst_79431);
var state_79451__$1 = state_79451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79451__$1,(8),inst_79433);
} else {
if((state_val_79452 === (10))){
var inst_79435 = (state_79451[(10)]);
var inst_79441 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_79435);
var state_79451__$1 = state_79451;
var statearr_79462_79480 = state_79451__$1;
(statearr_79462_79480[(2)] = inst_79441);

(statearr_79462_79480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79452 === (8))){
var inst_79431 = (state_79451[(7)]);
var inst_79437 = (state_79451[(9)]);
var inst_79435 = (state_79451[(2)]);
var inst_79436 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_79437__$1 = cljs.core.get.call(null,inst_79436,inst_79431);
var state_79451__$1 = (function (){var statearr_79463 = state_79451;
(statearr_79463[(9)] = inst_79437__$1);

(statearr_79463[(10)] = inst_79435);

return statearr_79463;
})();
if(cljs.core.truth_(inst_79437__$1)){
var statearr_79464_79481 = state_79451__$1;
(statearr_79464_79481[(1)] = (9));

} else {
var statearr_79465_79482 = state_79451__$1;
(statearr_79465_79482[(1)] = (10));

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
});})(c__46004__auto__))
;
return ((function (switch__45890__auto__,c__46004__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45891__auto__ = null;
var figwheel$client$file_reloading$state_machine__45891__auto____0 = (function (){
var statearr_79469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79469[(0)] = figwheel$client$file_reloading$state_machine__45891__auto__);

(statearr_79469[(1)] = (1));

return statearr_79469;
});
var figwheel$client$file_reloading$state_machine__45891__auto____1 = (function (state_79451){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_79451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e79470){if((e79470 instanceof Object)){
var ex__45894__auto__ = e79470;
var statearr_79471_79483 = state_79451;
(statearr_79471_79483[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79484 = state_79451;
state_79451 = G__79484;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45891__auto__ = function(state_79451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45891__auto____1.call(this,state_79451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45891__auto____0;
figwheel$client$file_reloading$state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45891__auto____1;
return figwheel$client$file_reloading$state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__))
})();
var state__46006__auto__ = (function (){var statearr_79472 = f__46005__auto__.call(null);
(statearr_79472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_79472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__))
);

return c__46004__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__79485,callback){
var map__79488 = p__79485;
var map__79488__$1 = ((((!((map__79488 == null)))?((((map__79488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79488):map__79488);
var file_msg = map__79488__$1;
var namespace = cljs.core.get.call(null,map__79488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__79488,map__79488__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__79488,map__79488__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__79490){
var map__79493 = p__79490;
var map__79493__$1 = ((((!((map__79493 == null)))?((((map__79493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79493):map__79493);
var file_msg = map__79493__$1;
var namespace = cljs.core.get.call(null,map__79493__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41407__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__41407__auto__){
var or__41419__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
var or__41419__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41419__auto____$1)){
return or__41419__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41407__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__79495,callback){
var map__79498 = p__79495;
var map__79498__$1 = ((((!((map__79498 == null)))?((((map__79498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79498):map__79498);
var file_msg = map__79498__$1;
var request_url = cljs.core.get.call(null,map__79498__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__79498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__46004__auto___79602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___79602,out){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___79602,out){
return (function (state_79584){
var state_val_79585 = (state_79584[(1)]);
if((state_val_79585 === (1))){
var inst_79558 = cljs.core.seq.call(null,files);
var inst_79559 = cljs.core.first.call(null,inst_79558);
var inst_79560 = cljs.core.next.call(null,inst_79558);
var inst_79561 = files;
var state_79584__$1 = (function (){var statearr_79586 = state_79584;
(statearr_79586[(7)] = inst_79561);

(statearr_79586[(8)] = inst_79559);

(statearr_79586[(9)] = inst_79560);

return statearr_79586;
})();
var statearr_79587_79603 = state_79584__$1;
(statearr_79587_79603[(2)] = null);

(statearr_79587_79603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79585 === (2))){
var inst_79567 = (state_79584[(10)]);
var inst_79561 = (state_79584[(7)]);
var inst_79566 = cljs.core.seq.call(null,inst_79561);
var inst_79567__$1 = cljs.core.first.call(null,inst_79566);
var inst_79568 = cljs.core.next.call(null,inst_79566);
var inst_79569 = (inst_79567__$1 == null);
var inst_79570 = cljs.core.not.call(null,inst_79569);
var state_79584__$1 = (function (){var statearr_79588 = state_79584;
(statearr_79588[(10)] = inst_79567__$1);

(statearr_79588[(11)] = inst_79568);

return statearr_79588;
})();
if(inst_79570){
var statearr_79589_79604 = state_79584__$1;
(statearr_79589_79604[(1)] = (4));

} else {
var statearr_79590_79605 = state_79584__$1;
(statearr_79590_79605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79585 === (3))){
var inst_79582 = (state_79584[(2)]);
var state_79584__$1 = state_79584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79584__$1,inst_79582);
} else {
if((state_val_79585 === (4))){
var inst_79567 = (state_79584[(10)]);
var inst_79572 = figwheel.client.file_reloading.reload_js_file.call(null,inst_79567);
var state_79584__$1 = state_79584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79584__$1,(7),inst_79572);
} else {
if((state_val_79585 === (5))){
var inst_79578 = cljs.core.async.close_BANG_.call(null,out);
var state_79584__$1 = state_79584;
var statearr_79591_79606 = state_79584__$1;
(statearr_79591_79606[(2)] = inst_79578);

(statearr_79591_79606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79585 === (6))){
var inst_79580 = (state_79584[(2)]);
var state_79584__$1 = state_79584;
var statearr_79592_79607 = state_79584__$1;
(statearr_79592_79607[(2)] = inst_79580);

(statearr_79592_79607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79585 === (7))){
var inst_79568 = (state_79584[(11)]);
var inst_79574 = (state_79584[(2)]);
var inst_79575 = cljs.core.async.put_BANG_.call(null,out,inst_79574);
var inst_79561 = inst_79568;
var state_79584__$1 = (function (){var statearr_79593 = state_79584;
(statearr_79593[(7)] = inst_79561);

(statearr_79593[(12)] = inst_79575);

return statearr_79593;
})();
var statearr_79594_79608 = state_79584__$1;
(statearr_79594_79608[(2)] = null);

(statearr_79594_79608[(1)] = (2));


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
});})(c__46004__auto___79602,out))
;
return ((function (switch__45890__auto__,c__46004__auto___79602,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto____0 = (function (){
var statearr_79598 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79598[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto__);

(statearr_79598[(1)] = (1));

return statearr_79598;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto____1 = (function (state_79584){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_79584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e79599){if((e79599 instanceof Object)){
var ex__45894__auto__ = e79599;
var statearr_79600_79609 = state_79584;
(statearr_79600_79609[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79610 = state_79584;
state_79584 = G__79610;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto__ = function(state_79584){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto____1.call(this,state_79584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___79602,out))
})();
var state__46006__auto__ = (function (){var statearr_79601 = f__46005__auto__.call(null);
(statearr_79601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___79602);

return statearr_79601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___79602,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__79611,opts){
var map__79615 = p__79611;
var map__79615__$1 = ((((!((map__79615 == null)))?((((map__79615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79615):map__79615);
var eval_body__$1 = cljs.core.get.call(null,map__79615__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__79615__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41407__auto__ = eval_body__$1;
if(cljs.core.truth_(and__41407__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__41407__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e79617){var e = e79617;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6475__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__79618_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__79618_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6475__auto__)){
var file_msg = temp__6475__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__79627){
var vec__79628 = p__79627;
var k = cljs.core.nth.call(null,vec__79628,(0),null);
var v = cljs.core.nth.call(null,vec__79628,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__79631){
var vec__79632 = p__79631;
var k = cljs.core.nth.call(null,vec__79632,(0),null);
var v = cljs.core.nth.call(null,vec__79632,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__79638,p__79639){
var map__79886 = p__79638;
var map__79886__$1 = ((((!((map__79886 == null)))?((((map__79886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79886):map__79886);
var opts = map__79886__$1;
var before_jsload = cljs.core.get.call(null,map__79886__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__79886__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__79886__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__79887 = p__79639;
var map__79887__$1 = ((((!((map__79887 == null)))?((((map__79887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79887):map__79887);
var msg = map__79887__$1;
var files = cljs.core.get.call(null,map__79887__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__79887__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__79887__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_80040){
var state_val_80041 = (state_80040[(1)]);
if((state_val_80041 === (7))){
var inst_79904 = (state_80040[(7)]);
var inst_79902 = (state_80040[(8)]);
var inst_79903 = (state_80040[(9)]);
var inst_79901 = (state_80040[(10)]);
var inst_79909 = cljs.core._nth.call(null,inst_79902,inst_79904);
var inst_79910 = figwheel.client.file_reloading.eval_body.call(null,inst_79909,opts);
var inst_79911 = (inst_79904 + (1));
var tmp80042 = inst_79902;
var tmp80043 = inst_79903;
var tmp80044 = inst_79901;
var inst_79901__$1 = tmp80044;
var inst_79902__$1 = tmp80042;
var inst_79903__$1 = tmp80043;
var inst_79904__$1 = inst_79911;
var state_80040__$1 = (function (){var statearr_80045 = state_80040;
(statearr_80045[(11)] = inst_79910);

(statearr_80045[(7)] = inst_79904__$1);

(statearr_80045[(8)] = inst_79902__$1);

(statearr_80045[(9)] = inst_79903__$1);

(statearr_80045[(10)] = inst_79901__$1);

return statearr_80045;
})();
var statearr_80046_80132 = state_80040__$1;
(statearr_80046_80132[(2)] = null);

(statearr_80046_80132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (20))){
var inst_79944 = (state_80040[(12)]);
var inst_79952 = figwheel.client.file_reloading.sort_files.call(null,inst_79944);
var state_80040__$1 = state_80040;
var statearr_80047_80133 = state_80040__$1;
(statearr_80047_80133[(2)] = inst_79952);

(statearr_80047_80133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (27))){
var state_80040__$1 = state_80040;
var statearr_80048_80134 = state_80040__$1;
(statearr_80048_80134[(2)] = null);

(statearr_80048_80134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (1))){
var inst_79893 = (state_80040[(13)]);
var inst_79890 = before_jsload.call(null,files);
var inst_79891 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_79892 = (function (){return ((function (inst_79893,inst_79890,inst_79891,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79635_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__79635_SHARP_);
});
;})(inst_79893,inst_79890,inst_79891,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79893__$1 = cljs.core.filter.call(null,inst_79892,files);
var inst_79894 = cljs.core.not_empty.call(null,inst_79893__$1);
var state_80040__$1 = (function (){var statearr_80049 = state_80040;
(statearr_80049[(13)] = inst_79893__$1);

(statearr_80049[(14)] = inst_79890);

(statearr_80049[(15)] = inst_79891);

return statearr_80049;
})();
if(cljs.core.truth_(inst_79894)){
var statearr_80050_80135 = state_80040__$1;
(statearr_80050_80135[(1)] = (2));

} else {
var statearr_80051_80136 = state_80040__$1;
(statearr_80051_80136[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (24))){
var state_80040__$1 = state_80040;
var statearr_80052_80137 = state_80040__$1;
(statearr_80052_80137[(2)] = null);

(statearr_80052_80137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (39))){
var inst_79994 = (state_80040[(16)]);
var state_80040__$1 = state_80040;
var statearr_80053_80138 = state_80040__$1;
(statearr_80053_80138[(2)] = inst_79994);

(statearr_80053_80138[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (46))){
var inst_80035 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
var statearr_80054_80139 = state_80040__$1;
(statearr_80054_80139[(2)] = inst_80035);

(statearr_80054_80139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (4))){
var inst_79938 = (state_80040[(2)]);
var inst_79939 = cljs.core.List.EMPTY;
var inst_79940 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_79939);
var inst_79941 = (function (){return ((function (inst_79938,inst_79939,inst_79940,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79636_SHARP_){
var and__41407__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__79636_SHARP_);
if(cljs.core.truth_(and__41407__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__79636_SHARP_));
} else {
return and__41407__auto__;
}
});
;})(inst_79938,inst_79939,inst_79940,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79942 = cljs.core.filter.call(null,inst_79941,files);
var inst_79943 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_79944 = cljs.core.concat.call(null,inst_79942,inst_79943);
var state_80040__$1 = (function (){var statearr_80055 = state_80040;
(statearr_80055[(17)] = inst_79940);

(statearr_80055[(18)] = inst_79938);

(statearr_80055[(12)] = inst_79944);

return statearr_80055;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_80056_80140 = state_80040__$1;
(statearr_80056_80140[(1)] = (16));

} else {
var statearr_80057_80141 = state_80040__$1;
(statearr_80057_80141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (15))){
var inst_79928 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
var statearr_80058_80142 = state_80040__$1;
(statearr_80058_80142[(2)] = inst_79928);

(statearr_80058_80142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (21))){
var inst_79954 = (state_80040[(19)]);
var inst_79954__$1 = (state_80040[(2)]);
var inst_79955 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_79954__$1);
var state_80040__$1 = (function (){var statearr_80059 = state_80040;
(statearr_80059[(19)] = inst_79954__$1);

return statearr_80059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80040__$1,(22),inst_79955);
} else {
if((state_val_80041 === (31))){
var inst_80038 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80040__$1,inst_80038);
} else {
if((state_val_80041 === (32))){
var inst_79994 = (state_80040[(16)]);
var inst_79999 = inst_79994.cljs$lang$protocol_mask$partition0$;
var inst_80000 = (inst_79999 & (64));
var inst_80001 = inst_79994.cljs$core$ISeq$;
var inst_80002 = (inst_80000) || (inst_80001);
var state_80040__$1 = state_80040;
if(cljs.core.truth_(inst_80002)){
var statearr_80060_80143 = state_80040__$1;
(statearr_80060_80143[(1)] = (35));

} else {
var statearr_80061_80144 = state_80040__$1;
(statearr_80061_80144[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (40))){
var inst_80015 = (state_80040[(20)]);
var inst_80014 = (state_80040[(2)]);
var inst_80015__$1 = cljs.core.get.call(null,inst_80014,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_80016 = cljs.core.get.call(null,inst_80014,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_80017 = cljs.core.not_empty.call(null,inst_80015__$1);
var state_80040__$1 = (function (){var statearr_80062 = state_80040;
(statearr_80062[(20)] = inst_80015__$1);

(statearr_80062[(21)] = inst_80016);

return statearr_80062;
})();
if(cljs.core.truth_(inst_80017)){
var statearr_80063_80145 = state_80040__$1;
(statearr_80063_80145[(1)] = (41));

} else {
var statearr_80064_80146 = state_80040__$1;
(statearr_80064_80146[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (33))){
var state_80040__$1 = state_80040;
var statearr_80065_80147 = state_80040__$1;
(statearr_80065_80147[(2)] = false);

(statearr_80065_80147[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (13))){
var inst_79914 = (state_80040[(22)]);
var inst_79918 = cljs.core.chunk_first.call(null,inst_79914);
var inst_79919 = cljs.core.chunk_rest.call(null,inst_79914);
var inst_79920 = cljs.core.count.call(null,inst_79918);
var inst_79901 = inst_79919;
var inst_79902 = inst_79918;
var inst_79903 = inst_79920;
var inst_79904 = (0);
var state_80040__$1 = (function (){var statearr_80066 = state_80040;
(statearr_80066[(7)] = inst_79904);

(statearr_80066[(8)] = inst_79902);

(statearr_80066[(9)] = inst_79903);

(statearr_80066[(10)] = inst_79901);

return statearr_80066;
})();
var statearr_80067_80148 = state_80040__$1;
(statearr_80067_80148[(2)] = null);

(statearr_80067_80148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (22))){
var inst_79957 = (state_80040[(23)]);
var inst_79958 = (state_80040[(24)]);
var inst_79962 = (state_80040[(25)]);
var inst_79954 = (state_80040[(19)]);
var inst_79957__$1 = (state_80040[(2)]);
var inst_79958__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_79957__$1);
var inst_79959 = (function (){var all_files = inst_79954;
var res_SINGLEQUOTE_ = inst_79957__$1;
var res = inst_79958__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_79957,inst_79958,inst_79962,inst_79954,inst_79957__$1,inst_79958__$1,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__79637_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__79637_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_79957,inst_79958,inst_79962,inst_79954,inst_79957__$1,inst_79958__$1,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79960 = cljs.core.filter.call(null,inst_79959,inst_79957__$1);
var inst_79961 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_79962__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_79961);
var inst_79963 = cljs.core.not_empty.call(null,inst_79962__$1);
var state_80040__$1 = (function (){var statearr_80068 = state_80040;
(statearr_80068[(23)] = inst_79957__$1);

(statearr_80068[(24)] = inst_79958__$1);

(statearr_80068[(25)] = inst_79962__$1);

(statearr_80068[(26)] = inst_79960);

return statearr_80068;
})();
if(cljs.core.truth_(inst_79963)){
var statearr_80069_80149 = state_80040__$1;
(statearr_80069_80149[(1)] = (23));

} else {
var statearr_80070_80150 = state_80040__$1;
(statearr_80070_80150[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (36))){
var state_80040__$1 = state_80040;
var statearr_80071_80151 = state_80040__$1;
(statearr_80071_80151[(2)] = false);

(statearr_80071_80151[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (41))){
var inst_80015 = (state_80040[(20)]);
var inst_80019 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_80020 = cljs.core.map.call(null,inst_80019,inst_80015);
var inst_80021 = cljs.core.pr_str.call(null,inst_80020);
var inst_80022 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_80021)].join('');
var inst_80023 = figwheel.client.utils.log.call(null,inst_80022);
var state_80040__$1 = state_80040;
var statearr_80072_80152 = state_80040__$1;
(statearr_80072_80152[(2)] = inst_80023);

(statearr_80072_80152[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (43))){
var inst_80016 = (state_80040[(21)]);
var inst_80026 = (state_80040[(2)]);
var inst_80027 = cljs.core.not_empty.call(null,inst_80016);
var state_80040__$1 = (function (){var statearr_80073 = state_80040;
(statearr_80073[(27)] = inst_80026);

return statearr_80073;
})();
if(cljs.core.truth_(inst_80027)){
var statearr_80074_80153 = state_80040__$1;
(statearr_80074_80153[(1)] = (44));

} else {
var statearr_80075_80154 = state_80040__$1;
(statearr_80075_80154[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (29))){
var inst_79957 = (state_80040[(23)]);
var inst_79958 = (state_80040[(24)]);
var inst_79994 = (state_80040[(16)]);
var inst_79962 = (state_80040[(25)]);
var inst_79960 = (state_80040[(26)]);
var inst_79954 = (state_80040[(19)]);
var inst_79990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_79993 = (function (){var all_files = inst_79954;
var res_SINGLEQUOTE_ = inst_79957;
var res = inst_79958;
var files_not_loaded = inst_79960;
var dependencies_that_loaded = inst_79962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79994,inst_79962,inst_79960,inst_79954,inst_79990,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__79992){
var map__80076 = p__79992;
var map__80076__$1 = ((((!((map__80076 == null)))?((((map__80076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80076):map__80076);
var namespace = cljs.core.get.call(null,map__80076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79994,inst_79962,inst_79960,inst_79954,inst_79990,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79994__$1 = cljs.core.group_by.call(null,inst_79993,inst_79960);
var inst_79996 = (inst_79994__$1 == null);
var inst_79997 = cljs.core.not.call(null,inst_79996);
var state_80040__$1 = (function (){var statearr_80078 = state_80040;
(statearr_80078[(16)] = inst_79994__$1);

(statearr_80078[(28)] = inst_79990);

return statearr_80078;
})();
if(inst_79997){
var statearr_80079_80155 = state_80040__$1;
(statearr_80079_80155[(1)] = (32));

} else {
var statearr_80080_80156 = state_80040__$1;
(statearr_80080_80156[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (44))){
var inst_80016 = (state_80040[(21)]);
var inst_80029 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_80016);
var inst_80030 = cljs.core.pr_str.call(null,inst_80029);
var inst_80031 = [cljs.core.str("not required: "),cljs.core.str(inst_80030)].join('');
var inst_80032 = figwheel.client.utils.log.call(null,inst_80031);
var state_80040__$1 = state_80040;
var statearr_80081_80157 = state_80040__$1;
(statearr_80081_80157[(2)] = inst_80032);

(statearr_80081_80157[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (6))){
var inst_79935 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
var statearr_80082_80158 = state_80040__$1;
(statearr_80082_80158[(2)] = inst_79935);

(statearr_80082_80158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (28))){
var inst_79960 = (state_80040[(26)]);
var inst_79987 = (state_80040[(2)]);
var inst_79988 = cljs.core.not_empty.call(null,inst_79960);
var state_80040__$1 = (function (){var statearr_80083 = state_80040;
(statearr_80083[(29)] = inst_79987);

return statearr_80083;
})();
if(cljs.core.truth_(inst_79988)){
var statearr_80084_80159 = state_80040__$1;
(statearr_80084_80159[(1)] = (29));

} else {
var statearr_80085_80160 = state_80040__$1;
(statearr_80085_80160[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (25))){
var inst_79958 = (state_80040[(24)]);
var inst_79974 = (state_80040[(2)]);
var inst_79975 = cljs.core.not_empty.call(null,inst_79958);
var state_80040__$1 = (function (){var statearr_80086 = state_80040;
(statearr_80086[(30)] = inst_79974);

return statearr_80086;
})();
if(cljs.core.truth_(inst_79975)){
var statearr_80087_80161 = state_80040__$1;
(statearr_80087_80161[(1)] = (26));

} else {
var statearr_80088_80162 = state_80040__$1;
(statearr_80088_80162[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (34))){
var inst_80009 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
if(cljs.core.truth_(inst_80009)){
var statearr_80089_80163 = state_80040__$1;
(statearr_80089_80163[(1)] = (38));

} else {
var statearr_80090_80164 = state_80040__$1;
(statearr_80090_80164[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (17))){
var state_80040__$1 = state_80040;
var statearr_80091_80165 = state_80040__$1;
(statearr_80091_80165[(2)] = recompile_dependents);

(statearr_80091_80165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (3))){
var state_80040__$1 = state_80040;
var statearr_80092_80166 = state_80040__$1;
(statearr_80092_80166[(2)] = null);

(statearr_80092_80166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (12))){
var inst_79931 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
var statearr_80093_80167 = state_80040__$1;
(statearr_80093_80167[(2)] = inst_79931);

(statearr_80093_80167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (2))){
var inst_79893 = (state_80040[(13)]);
var inst_79900 = cljs.core.seq.call(null,inst_79893);
var inst_79901 = inst_79900;
var inst_79902 = null;
var inst_79903 = (0);
var inst_79904 = (0);
var state_80040__$1 = (function (){var statearr_80094 = state_80040;
(statearr_80094[(7)] = inst_79904);

(statearr_80094[(8)] = inst_79902);

(statearr_80094[(9)] = inst_79903);

(statearr_80094[(10)] = inst_79901);

return statearr_80094;
})();
var statearr_80095_80168 = state_80040__$1;
(statearr_80095_80168[(2)] = null);

(statearr_80095_80168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (23))){
var inst_79957 = (state_80040[(23)]);
var inst_79958 = (state_80040[(24)]);
var inst_79962 = (state_80040[(25)]);
var inst_79960 = (state_80040[(26)]);
var inst_79954 = (state_80040[(19)]);
var inst_79965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_79967 = (function (){var all_files = inst_79954;
var res_SINGLEQUOTE_ = inst_79957;
var res = inst_79958;
var files_not_loaded = inst_79960;
var dependencies_that_loaded = inst_79962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79962,inst_79960,inst_79954,inst_79965,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__79966){
var map__80096 = p__79966;
var map__80096__$1 = ((((!((map__80096 == null)))?((((map__80096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80096):map__80096);
var request_url = cljs.core.get.call(null,map__80096__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79962,inst_79960,inst_79954,inst_79965,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79968 = cljs.core.reverse.call(null,inst_79962);
var inst_79969 = cljs.core.map.call(null,inst_79967,inst_79968);
var inst_79970 = cljs.core.pr_str.call(null,inst_79969);
var inst_79971 = figwheel.client.utils.log.call(null,inst_79970);
var state_80040__$1 = (function (){var statearr_80098 = state_80040;
(statearr_80098[(31)] = inst_79965);

return statearr_80098;
})();
var statearr_80099_80169 = state_80040__$1;
(statearr_80099_80169[(2)] = inst_79971);

(statearr_80099_80169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (35))){
var state_80040__$1 = state_80040;
var statearr_80100_80170 = state_80040__$1;
(statearr_80100_80170[(2)] = true);

(statearr_80100_80170[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (19))){
var inst_79944 = (state_80040[(12)]);
var inst_79950 = figwheel.client.file_reloading.expand_files.call(null,inst_79944);
var state_80040__$1 = state_80040;
var statearr_80101_80171 = state_80040__$1;
(statearr_80101_80171[(2)] = inst_79950);

(statearr_80101_80171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (11))){
var state_80040__$1 = state_80040;
var statearr_80102_80172 = state_80040__$1;
(statearr_80102_80172[(2)] = null);

(statearr_80102_80172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (9))){
var inst_79933 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
var statearr_80103_80173 = state_80040__$1;
(statearr_80103_80173[(2)] = inst_79933);

(statearr_80103_80173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (5))){
var inst_79904 = (state_80040[(7)]);
var inst_79903 = (state_80040[(9)]);
var inst_79906 = (inst_79904 < inst_79903);
var inst_79907 = inst_79906;
var state_80040__$1 = state_80040;
if(cljs.core.truth_(inst_79907)){
var statearr_80104_80174 = state_80040__$1;
(statearr_80104_80174[(1)] = (7));

} else {
var statearr_80105_80175 = state_80040__$1;
(statearr_80105_80175[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (14))){
var inst_79914 = (state_80040[(22)]);
var inst_79923 = cljs.core.first.call(null,inst_79914);
var inst_79924 = figwheel.client.file_reloading.eval_body.call(null,inst_79923,opts);
var inst_79925 = cljs.core.next.call(null,inst_79914);
var inst_79901 = inst_79925;
var inst_79902 = null;
var inst_79903 = (0);
var inst_79904 = (0);
var state_80040__$1 = (function (){var statearr_80106 = state_80040;
(statearr_80106[(7)] = inst_79904);

(statearr_80106[(8)] = inst_79902);

(statearr_80106[(9)] = inst_79903);

(statearr_80106[(10)] = inst_79901);

(statearr_80106[(32)] = inst_79924);

return statearr_80106;
})();
var statearr_80107_80176 = state_80040__$1;
(statearr_80107_80176[(2)] = null);

(statearr_80107_80176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (45))){
var state_80040__$1 = state_80040;
var statearr_80108_80177 = state_80040__$1;
(statearr_80108_80177[(2)] = null);

(statearr_80108_80177[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (26))){
var inst_79957 = (state_80040[(23)]);
var inst_79958 = (state_80040[(24)]);
var inst_79962 = (state_80040[(25)]);
var inst_79960 = (state_80040[(26)]);
var inst_79954 = (state_80040[(19)]);
var inst_79977 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_79979 = (function (){var all_files = inst_79954;
var res_SINGLEQUOTE_ = inst_79957;
var res = inst_79958;
var files_not_loaded = inst_79960;
var dependencies_that_loaded = inst_79962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79962,inst_79960,inst_79954,inst_79977,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__79978){
var map__80109 = p__79978;
var map__80109__$1 = ((((!((map__80109 == null)))?((((map__80109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80109):map__80109);
var namespace = cljs.core.get.call(null,map__80109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__80109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79962,inst_79960,inst_79954,inst_79977,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79980 = cljs.core.map.call(null,inst_79979,inst_79958);
var inst_79981 = cljs.core.pr_str.call(null,inst_79980);
var inst_79982 = figwheel.client.utils.log.call(null,inst_79981);
var inst_79983 = (function (){var all_files = inst_79954;
var res_SINGLEQUOTE_ = inst_79957;
var res = inst_79958;
var files_not_loaded = inst_79960;
var dependencies_that_loaded = inst_79962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79962,inst_79960,inst_79954,inst_79977,inst_79979,inst_79980,inst_79981,inst_79982,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_79957,inst_79958,inst_79962,inst_79960,inst_79954,inst_79977,inst_79979,inst_79980,inst_79981,inst_79982,state_val_80041,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_79984 = setTimeout(inst_79983,(10));
var state_80040__$1 = (function (){var statearr_80111 = state_80040;
(statearr_80111[(33)] = inst_79982);

(statearr_80111[(34)] = inst_79977);

return statearr_80111;
})();
var statearr_80112_80178 = state_80040__$1;
(statearr_80112_80178[(2)] = inst_79984);

(statearr_80112_80178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (16))){
var state_80040__$1 = state_80040;
var statearr_80113_80179 = state_80040__$1;
(statearr_80113_80179[(2)] = reload_dependents);

(statearr_80113_80179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (38))){
var inst_79994 = (state_80040[(16)]);
var inst_80011 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79994);
var state_80040__$1 = state_80040;
var statearr_80114_80180 = state_80040__$1;
(statearr_80114_80180[(2)] = inst_80011);

(statearr_80114_80180[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (30))){
var state_80040__$1 = state_80040;
var statearr_80115_80181 = state_80040__$1;
(statearr_80115_80181[(2)] = null);

(statearr_80115_80181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (10))){
var inst_79914 = (state_80040[(22)]);
var inst_79916 = cljs.core.chunked_seq_QMARK_.call(null,inst_79914);
var state_80040__$1 = state_80040;
if(inst_79916){
var statearr_80116_80182 = state_80040__$1;
(statearr_80116_80182[(1)] = (13));

} else {
var statearr_80117_80183 = state_80040__$1;
(statearr_80117_80183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (18))){
var inst_79948 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
if(cljs.core.truth_(inst_79948)){
var statearr_80118_80184 = state_80040__$1;
(statearr_80118_80184[(1)] = (19));

} else {
var statearr_80119_80185 = state_80040__$1;
(statearr_80119_80185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (42))){
var state_80040__$1 = state_80040;
var statearr_80120_80186 = state_80040__$1;
(statearr_80120_80186[(2)] = null);

(statearr_80120_80186[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (37))){
var inst_80006 = (state_80040[(2)]);
var state_80040__$1 = state_80040;
var statearr_80121_80187 = state_80040__$1;
(statearr_80121_80187[(2)] = inst_80006);

(statearr_80121_80187[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80041 === (8))){
var inst_79914 = (state_80040[(22)]);
var inst_79901 = (state_80040[(10)]);
var inst_79914__$1 = cljs.core.seq.call(null,inst_79901);
var state_80040__$1 = (function (){var statearr_80122 = state_80040;
(statearr_80122[(22)] = inst_79914__$1);

return statearr_80122;
})();
if(inst_79914__$1){
var statearr_80123_80188 = state_80040__$1;
(statearr_80123_80188[(1)] = (10));

} else {
var statearr_80124_80189 = state_80040__$1;
(statearr_80124_80189[(1)] = (11));

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
}
});})(c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45890__auto__,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto____0 = (function (){
var statearr_80128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80128[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto__);

(statearr_80128[(1)] = (1));

return statearr_80128;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto____1 = (function (state_80040){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_80040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e80129){if((e80129 instanceof Object)){
var ex__45894__auto__ = e80129;
var statearr_80130_80190 = state_80040;
(statearr_80130_80190[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80191 = state_80040;
state_80040 = G__80191;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto__ = function(state_80040){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto____1.call(this,state_80040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46006__auto__ = (function (){var statearr_80131 = f__46005__auto__.call(null);
(statearr_80131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_80131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__,map__79886,map__79886__$1,opts,before_jsload,on_jsload,reload_dependents,map__79887,map__79887__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46004__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__80194,link){
var map__80197 = p__80194;
var map__80197__$1 = ((((!((map__80197 == null)))?((((map__80197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80197):map__80197);
var file = cljs.core.get.call(null,map__80197__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6477__auto__ = link.href;
if(cljs.core.truth_(temp__6477__auto__)){
var link_href = temp__6477__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6477__auto__,map__80197,map__80197__$1,file){
return (function (p1__80192_SHARP_,p2__80193_SHARP_){
if(cljs.core._EQ_.call(null,p1__80192_SHARP_,p2__80193_SHARP_)){
return p1__80192_SHARP_;
} else {
return false;
}
});})(link_href,temp__6477__auto__,map__80197,map__80197__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6477__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__80203){
var map__80204 = p__80203;
var map__80204__$1 = ((((!((map__80204 == null)))?((((map__80204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80204):map__80204);
var match_length = cljs.core.get.call(null,map__80204__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__80204__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__80199_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__80199_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6477__auto__)){
var res = temp__6477__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args80206 = [];
var len__42602__auto___80209 = arguments.length;
var i__42603__auto___80210 = (0);
while(true){
if((i__42603__auto___80210 < len__42602__auto___80209)){
args80206.push((arguments[i__42603__auto___80210]));

var G__80211 = (i__42603__auto___80210 + (1));
i__42603__auto___80210 = G__80211;
continue;
} else {
}
break;
}

var G__80208 = args80206.length;
switch (G__80208) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80206.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__80213_SHARP_,p2__80214_SHARP_){
return cljs.core.assoc.call(null,p1__80213_SHARP_,cljs.core.get.call(null,p2__80214_SHARP_,key),p2__80214_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__80215){
var map__80218 = p__80215;
var map__80218__$1 = ((((!((map__80218 == null)))?((((map__80218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80218):map__80218);
var f_data = map__80218__$1;
var file = cljs.core.get.call(null,map__80218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6477__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6477__auto__)){
var link = temp__6477__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__80220,files_msg){
var map__80227 = p__80220;
var map__80227__$1 = ((((!((map__80227 == null)))?((((map__80227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80227):map__80227);
var opts = map__80227__$1;
var on_cssload = cljs.core.get.call(null,map__80227__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__80229_80233 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__80230_80234 = null;
var count__80231_80235 = (0);
var i__80232_80236 = (0);
while(true){
if((i__80232_80236 < count__80231_80235)){
var f_80237 = cljs.core._nth.call(null,chunk__80230_80234,i__80232_80236);
figwheel.client.file_reloading.reload_css_file.call(null,f_80237);

var G__80238 = seq__80229_80233;
var G__80239 = chunk__80230_80234;
var G__80240 = count__80231_80235;
var G__80241 = (i__80232_80236 + (1));
seq__80229_80233 = G__80238;
chunk__80230_80234 = G__80239;
count__80231_80235 = G__80240;
i__80232_80236 = G__80241;
continue;
} else {
var temp__6477__auto___80242 = cljs.core.seq.call(null,seq__80229_80233);
if(temp__6477__auto___80242){
var seq__80229_80243__$1 = temp__6477__auto___80242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80229_80243__$1)){
var c__42322__auto___80244 = cljs.core.chunk_first.call(null,seq__80229_80243__$1);
var G__80245 = cljs.core.chunk_rest.call(null,seq__80229_80243__$1);
var G__80246 = c__42322__auto___80244;
var G__80247 = cljs.core.count.call(null,c__42322__auto___80244);
var G__80248 = (0);
seq__80229_80233 = G__80245;
chunk__80230_80234 = G__80246;
count__80231_80235 = G__80247;
i__80232_80236 = G__80248;
continue;
} else {
var f_80249 = cljs.core.first.call(null,seq__80229_80243__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_80249);

var G__80250 = cljs.core.next.call(null,seq__80229_80243__$1);
var G__80251 = null;
var G__80252 = (0);
var G__80253 = (0);
seq__80229_80233 = G__80250;
chunk__80230_80234 = G__80251;
count__80231_80235 = G__80252;
i__80232_80236 = G__80253;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__80227,map__80227__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__80227,map__80227__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467866140996