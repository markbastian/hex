// Compiled by ClojureScript 1.8.51 {}
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
var or__37702__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__37702__auto__){
return or__37702__auto__;
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
var or__37702__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44207_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44207_SHARP_));
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
var seq__44212 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44213 = null;
var count__44214 = (0);
var i__44215 = (0);
while(true){
if((i__44215 < count__44214)){
var n = cljs.core._nth.call(null,chunk__44213,i__44215);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44216 = seq__44212;
var G__44217 = chunk__44213;
var G__44218 = count__44214;
var G__44219 = (i__44215 + (1));
seq__44212 = G__44216;
chunk__44213 = G__44217;
count__44214 = G__44218;
i__44215 = G__44219;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44212);
if(temp__4657__auto__){
var seq__44212__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44212__$1)){
var c__38513__auto__ = cljs.core.chunk_first.call(null,seq__44212__$1);
var G__44220 = cljs.core.chunk_rest.call(null,seq__44212__$1);
var G__44221 = c__38513__auto__;
var G__44222 = cljs.core.count.call(null,c__38513__auto__);
var G__44223 = (0);
seq__44212 = G__44220;
chunk__44213 = G__44221;
count__44214 = G__44222;
i__44215 = G__44223;
continue;
} else {
var n = cljs.core.first.call(null,seq__44212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44224 = cljs.core.next.call(null,seq__44212__$1);
var G__44225 = null;
var G__44226 = (0);
var G__44227 = (0);
seq__44212 = G__44224;
chunk__44213 = G__44225;
count__44214 = G__44226;
i__44215 = G__44227;
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

var seq__44266_44273 = cljs.core.seq.call(null,deps);
var chunk__44267_44274 = null;
var count__44268_44275 = (0);
var i__44269_44276 = (0);
while(true){
if((i__44269_44276 < count__44268_44275)){
var dep_44277 = cljs.core._nth.call(null,chunk__44267_44274,i__44269_44276);
topo_sort_helper_STAR_.call(null,dep_44277,(depth + (1)),state);

var G__44278 = seq__44266_44273;
var G__44279 = chunk__44267_44274;
var G__44280 = count__44268_44275;
var G__44281 = (i__44269_44276 + (1));
seq__44266_44273 = G__44278;
chunk__44267_44274 = G__44279;
count__44268_44275 = G__44280;
i__44269_44276 = G__44281;
continue;
} else {
var temp__4657__auto___44282 = cljs.core.seq.call(null,seq__44266_44273);
if(temp__4657__auto___44282){
var seq__44266_44283__$1 = temp__4657__auto___44282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44266_44283__$1)){
var c__38513__auto___44284 = cljs.core.chunk_first.call(null,seq__44266_44283__$1);
var G__44285 = cljs.core.chunk_rest.call(null,seq__44266_44283__$1);
var G__44286 = c__38513__auto___44284;
var G__44287 = cljs.core.count.call(null,c__38513__auto___44284);
var G__44288 = (0);
seq__44266_44273 = G__44285;
chunk__44267_44274 = G__44286;
count__44268_44275 = G__44287;
i__44269_44276 = G__44288;
continue;
} else {
var dep_44289 = cljs.core.first.call(null,seq__44266_44283__$1);
topo_sort_helper_STAR_.call(null,dep_44289,(depth + (1)),state);

var G__44290 = cljs.core.next.call(null,seq__44266_44283__$1);
var G__44291 = null;
var G__44292 = (0);
var G__44293 = (0);
seq__44266_44273 = G__44290;
chunk__44267_44274 = G__44291;
count__44268_44275 = G__44292;
i__44269_44276 = G__44293;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44270){
var vec__44272 = p__44270;
var x = cljs.core.nth.call(null,vec__44272,(0),null);
var xs = cljs.core.nthnext.call(null,vec__44272,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44272,x,xs,get_deps__$1){
return (function (p1__44228_SHARP_){
return clojure.set.difference.call(null,p1__44228_SHARP_,x);
});})(vec__44272,x,xs,get_deps__$1))
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
var seq__44306 = cljs.core.seq.call(null,provides);
var chunk__44307 = null;
var count__44308 = (0);
var i__44309 = (0);
while(true){
if((i__44309 < count__44308)){
var prov = cljs.core._nth.call(null,chunk__44307,i__44309);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44310_44318 = cljs.core.seq.call(null,requires);
var chunk__44311_44319 = null;
var count__44312_44320 = (0);
var i__44313_44321 = (0);
while(true){
if((i__44313_44321 < count__44312_44320)){
var req_44322 = cljs.core._nth.call(null,chunk__44311_44319,i__44313_44321);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44322,prov);

var G__44323 = seq__44310_44318;
var G__44324 = chunk__44311_44319;
var G__44325 = count__44312_44320;
var G__44326 = (i__44313_44321 + (1));
seq__44310_44318 = G__44323;
chunk__44311_44319 = G__44324;
count__44312_44320 = G__44325;
i__44313_44321 = G__44326;
continue;
} else {
var temp__4657__auto___44327 = cljs.core.seq.call(null,seq__44310_44318);
if(temp__4657__auto___44327){
var seq__44310_44328__$1 = temp__4657__auto___44327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44310_44328__$1)){
var c__38513__auto___44329 = cljs.core.chunk_first.call(null,seq__44310_44328__$1);
var G__44330 = cljs.core.chunk_rest.call(null,seq__44310_44328__$1);
var G__44331 = c__38513__auto___44329;
var G__44332 = cljs.core.count.call(null,c__38513__auto___44329);
var G__44333 = (0);
seq__44310_44318 = G__44330;
chunk__44311_44319 = G__44331;
count__44312_44320 = G__44332;
i__44313_44321 = G__44333;
continue;
} else {
var req_44334 = cljs.core.first.call(null,seq__44310_44328__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44334,prov);

var G__44335 = cljs.core.next.call(null,seq__44310_44328__$1);
var G__44336 = null;
var G__44337 = (0);
var G__44338 = (0);
seq__44310_44318 = G__44335;
chunk__44311_44319 = G__44336;
count__44312_44320 = G__44337;
i__44313_44321 = G__44338;
continue;
}
} else {
}
}
break;
}

var G__44339 = seq__44306;
var G__44340 = chunk__44307;
var G__44341 = count__44308;
var G__44342 = (i__44309 + (1));
seq__44306 = G__44339;
chunk__44307 = G__44340;
count__44308 = G__44341;
i__44309 = G__44342;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44306);
if(temp__4657__auto__){
var seq__44306__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44306__$1)){
var c__38513__auto__ = cljs.core.chunk_first.call(null,seq__44306__$1);
var G__44343 = cljs.core.chunk_rest.call(null,seq__44306__$1);
var G__44344 = c__38513__auto__;
var G__44345 = cljs.core.count.call(null,c__38513__auto__);
var G__44346 = (0);
seq__44306 = G__44343;
chunk__44307 = G__44344;
count__44308 = G__44345;
i__44309 = G__44346;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44306__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44314_44347 = cljs.core.seq.call(null,requires);
var chunk__44315_44348 = null;
var count__44316_44349 = (0);
var i__44317_44350 = (0);
while(true){
if((i__44317_44350 < count__44316_44349)){
var req_44351 = cljs.core._nth.call(null,chunk__44315_44348,i__44317_44350);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44351,prov);

var G__44352 = seq__44314_44347;
var G__44353 = chunk__44315_44348;
var G__44354 = count__44316_44349;
var G__44355 = (i__44317_44350 + (1));
seq__44314_44347 = G__44352;
chunk__44315_44348 = G__44353;
count__44316_44349 = G__44354;
i__44317_44350 = G__44355;
continue;
} else {
var temp__4657__auto___44356__$1 = cljs.core.seq.call(null,seq__44314_44347);
if(temp__4657__auto___44356__$1){
var seq__44314_44357__$1 = temp__4657__auto___44356__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44314_44357__$1)){
var c__38513__auto___44358 = cljs.core.chunk_first.call(null,seq__44314_44357__$1);
var G__44359 = cljs.core.chunk_rest.call(null,seq__44314_44357__$1);
var G__44360 = c__38513__auto___44358;
var G__44361 = cljs.core.count.call(null,c__38513__auto___44358);
var G__44362 = (0);
seq__44314_44347 = G__44359;
chunk__44315_44348 = G__44360;
count__44316_44349 = G__44361;
i__44317_44350 = G__44362;
continue;
} else {
var req_44363 = cljs.core.first.call(null,seq__44314_44357__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44363,prov);

var G__44364 = cljs.core.next.call(null,seq__44314_44357__$1);
var G__44365 = null;
var G__44366 = (0);
var G__44367 = (0);
seq__44314_44347 = G__44364;
chunk__44315_44348 = G__44365;
count__44316_44349 = G__44366;
i__44317_44350 = G__44367;
continue;
}
} else {
}
}
break;
}

var G__44368 = cljs.core.next.call(null,seq__44306__$1);
var G__44369 = null;
var G__44370 = (0);
var G__44371 = (0);
seq__44306 = G__44368;
chunk__44307 = G__44369;
count__44308 = G__44370;
i__44309 = G__44371;
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
var seq__44376_44380 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44377_44381 = null;
var count__44378_44382 = (0);
var i__44379_44383 = (0);
while(true){
if((i__44379_44383 < count__44378_44382)){
var ns_44384 = cljs.core._nth.call(null,chunk__44377_44381,i__44379_44383);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44384);

var G__44385 = seq__44376_44380;
var G__44386 = chunk__44377_44381;
var G__44387 = count__44378_44382;
var G__44388 = (i__44379_44383 + (1));
seq__44376_44380 = G__44385;
chunk__44377_44381 = G__44386;
count__44378_44382 = G__44387;
i__44379_44383 = G__44388;
continue;
} else {
var temp__4657__auto___44389 = cljs.core.seq.call(null,seq__44376_44380);
if(temp__4657__auto___44389){
var seq__44376_44390__$1 = temp__4657__auto___44389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44376_44390__$1)){
var c__38513__auto___44391 = cljs.core.chunk_first.call(null,seq__44376_44390__$1);
var G__44392 = cljs.core.chunk_rest.call(null,seq__44376_44390__$1);
var G__44393 = c__38513__auto___44391;
var G__44394 = cljs.core.count.call(null,c__38513__auto___44391);
var G__44395 = (0);
seq__44376_44380 = G__44392;
chunk__44377_44381 = G__44393;
count__44378_44382 = G__44394;
i__44379_44383 = G__44395;
continue;
} else {
var ns_44396 = cljs.core.first.call(null,seq__44376_44390__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44396);

var G__44397 = cljs.core.next.call(null,seq__44376_44390__$1);
var G__44398 = null;
var G__44399 = (0);
var G__44400 = (0);
seq__44376_44380 = G__44397;
chunk__44377_44381 = G__44398;
count__44378_44382 = G__44399;
i__44379_44383 = G__44400;
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
goog.require_figwheel_backup_ = (function (){var or__37702__auto__ = goog.require__;
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
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
var G__44401__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44402__i = 0, G__44402__a = new Array(arguments.length -  0);
while (G__44402__i < G__44402__a.length) {G__44402__a[G__44402__i] = arguments[G__44402__i + 0]; ++G__44402__i;}
  args = new cljs.core.IndexedSeq(G__44402__a,0);
} 
return G__44401__delegate.call(this,args);};
G__44401.cljs$lang$maxFixedArity = 0;
G__44401.cljs$lang$applyTo = (function (arglist__44403){
var args = cljs.core.seq(arglist__44403);
return G__44401__delegate(args);
});
G__44401.cljs$core$IFn$_invoke$arity$variadic = G__44401__delegate;
return G__44401;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44405 = cljs.core._EQ_;
var expr__44406 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44405.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44406))){
var path_parts = ((function (pred__44405,expr__44406){
return (function (p1__44404_SHARP_){
return clojure.string.split.call(null,p1__44404_SHARP_,/[\/\\]/);
});})(pred__44405,expr__44406))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__44405,expr__44406){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44408){if((e44408 instanceof Error)){
var e = e44408;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44408;

}
}})());
});
;})(path_parts,sep,root,pred__44405,expr__44406))
} else {
if(cljs.core.truth_(pred__44405.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44406))){
return ((function (pred__44405,expr__44406){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__44405,expr__44406){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__44405,expr__44406))
);

return deferred.addErrback(((function (deferred,pred__44405,expr__44406){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__44405,expr__44406))
);
});
;})(pred__44405,expr__44406))
} else {
return ((function (pred__44405,expr__44406){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44405,expr__44406))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44409,callback){
var map__44412 = p__44409;
var map__44412__$1 = ((((!((map__44412 == null)))?((((map__44412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44412):map__44412);
var file_msg = map__44412__$1;
var request_url = cljs.core.get.call(null,map__44412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44412,map__44412__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44412,map__44412__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_44436){
var state_val_44437 = (state_44436[(1)]);
if((state_val_44437 === (7))){
var inst_44432 = (state_44436[(2)]);
var state_44436__$1 = state_44436;
var statearr_44438_44458 = state_44436__$1;
(statearr_44438_44458[(2)] = inst_44432);

(statearr_44438_44458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44437 === (1))){
var state_44436__$1 = state_44436;
var statearr_44439_44459 = state_44436__$1;
(statearr_44439_44459[(2)] = null);

(statearr_44439_44459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44437 === (4))){
var inst_44416 = (state_44436[(7)]);
var inst_44416__$1 = (state_44436[(2)]);
var state_44436__$1 = (function (){var statearr_44440 = state_44436;
(statearr_44440[(7)] = inst_44416__$1);

return statearr_44440;
})();
if(cljs.core.truth_(inst_44416__$1)){
var statearr_44441_44460 = state_44436__$1;
(statearr_44441_44460[(1)] = (5));

} else {
var statearr_44442_44461 = state_44436__$1;
(statearr_44442_44461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44437 === (6))){
var state_44436__$1 = state_44436;
var statearr_44443_44462 = state_44436__$1;
(statearr_44443_44462[(2)] = null);

(statearr_44443_44462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44437 === (3))){
var inst_44434 = (state_44436[(2)]);
var state_44436__$1 = state_44436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44436__$1,inst_44434);
} else {
if((state_val_44437 === (2))){
var state_44436__$1 = state_44436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44436__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44437 === (11))){
var inst_44428 = (state_44436[(2)]);
var state_44436__$1 = (function (){var statearr_44444 = state_44436;
(statearr_44444[(8)] = inst_44428);

return statearr_44444;
})();
var statearr_44445_44463 = state_44436__$1;
(statearr_44445_44463[(2)] = null);

(statearr_44445_44463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44437 === (9))){
var inst_44420 = (state_44436[(9)]);
var inst_44422 = (state_44436[(10)]);
var inst_44424 = inst_44422.call(null,inst_44420);
var state_44436__$1 = state_44436;
var statearr_44446_44464 = state_44436__$1;
(statearr_44446_44464[(2)] = inst_44424);

(statearr_44446_44464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44437 === (5))){
var inst_44416 = (state_44436[(7)]);
var inst_44418 = figwheel.client.file_reloading.blocking_load.call(null,inst_44416);
var state_44436__$1 = state_44436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44436__$1,(8),inst_44418);
} else {
if((state_val_44437 === (10))){
var inst_44420 = (state_44436[(9)]);
var inst_44426 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44420);
var state_44436__$1 = state_44436;
var statearr_44447_44465 = state_44436__$1;
(statearr_44447_44465[(2)] = inst_44426);

(statearr_44447_44465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44437 === (8))){
var inst_44416 = (state_44436[(7)]);
var inst_44422 = (state_44436[(10)]);
var inst_44420 = (state_44436[(2)]);
var inst_44421 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44422__$1 = cljs.core.get.call(null,inst_44421,inst_44416);
var state_44436__$1 = (function (){var statearr_44448 = state_44436;
(statearr_44448[(9)] = inst_44420);

(statearr_44448[(10)] = inst_44422__$1);

return statearr_44448;
})();
if(cljs.core.truth_(inst_44422__$1)){
var statearr_44449_44466 = state_44436__$1;
(statearr_44449_44466[(1)] = (9));

} else {
var statearr_44450_44467 = state_44436__$1;
(statearr_44450_44467[(1)] = (10));

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
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__41227__auto__ = null;
var figwheel$client$file_reloading$state_machine__41227__auto____0 = (function (){
var statearr_44454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44454[(0)] = figwheel$client$file_reloading$state_machine__41227__auto__);

(statearr_44454[(1)] = (1));

return statearr_44454;
});
var figwheel$client$file_reloading$state_machine__41227__auto____1 = (function (state_44436){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_44436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e44455){if((e44455 instanceof Object)){
var ex__41230__auto__ = e44455;
var statearr_44456_44468 = state_44436;
(statearr_44456_44468[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44469 = state_44436;
state_44436 = G__44469;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__41227__auto__ = function(state_44436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__41227__auto____1.call(this,state_44436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__41227__auto____0;
figwheel$client$file_reloading$state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__41227__auto____1;
return figwheel$client$file_reloading$state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_44457 = f__41339__auto__.call(null);
(statearr_44457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_44457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44470,callback){
var map__44473 = p__44470;
var map__44473__$1 = ((((!((map__44473 == null)))?((((map__44473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44473):map__44473);
var file_msg = map__44473__$1;
var namespace = cljs.core.get.call(null,map__44473__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44473,map__44473__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44473,map__44473__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44475){
var map__44478 = p__44475;
var map__44478__$1 = ((((!((map__44478 == null)))?((((map__44478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44478):map__44478);
var file_msg = map__44478__$1;
var namespace = cljs.core.get.call(null,map__44478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__37690__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__37690__auto__){
var or__37702__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
var or__37702__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37702__auto____$1)){
return or__37702__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__37690__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44480,callback){
var map__44483 = p__44480;
var map__44483__$1 = ((((!((map__44483 == null)))?((((map__44483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44483):map__44483);
var file_msg = map__44483__$1;
var request_url = cljs.core.get.call(null,map__44483__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44483__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__41338__auto___44571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___44571,out){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___44571,out){
return (function (state_44553){
var state_val_44554 = (state_44553[(1)]);
if((state_val_44554 === (1))){
var inst_44531 = cljs.core.nth.call(null,files,(0),null);
var inst_44532 = cljs.core.nthnext.call(null,files,(1));
var inst_44533 = files;
var state_44553__$1 = (function (){var statearr_44555 = state_44553;
(statearr_44555[(7)] = inst_44532);

(statearr_44555[(8)] = inst_44533);

(statearr_44555[(9)] = inst_44531);

return statearr_44555;
})();
var statearr_44556_44572 = state_44553__$1;
(statearr_44556_44572[(2)] = null);

(statearr_44556_44572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (2))){
var inst_44533 = (state_44553[(8)]);
var inst_44536 = (state_44553[(10)]);
var inst_44536__$1 = cljs.core.nth.call(null,inst_44533,(0),null);
var inst_44537 = cljs.core.nthnext.call(null,inst_44533,(1));
var inst_44538 = (inst_44536__$1 == null);
var inst_44539 = cljs.core.not.call(null,inst_44538);
var state_44553__$1 = (function (){var statearr_44557 = state_44553;
(statearr_44557[(11)] = inst_44537);

(statearr_44557[(10)] = inst_44536__$1);

return statearr_44557;
})();
if(inst_44539){
var statearr_44558_44573 = state_44553__$1;
(statearr_44558_44573[(1)] = (4));

} else {
var statearr_44559_44574 = state_44553__$1;
(statearr_44559_44574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (3))){
var inst_44551 = (state_44553[(2)]);
var state_44553__$1 = state_44553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44553__$1,inst_44551);
} else {
if((state_val_44554 === (4))){
var inst_44536 = (state_44553[(10)]);
var inst_44541 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44536);
var state_44553__$1 = state_44553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44553__$1,(7),inst_44541);
} else {
if((state_val_44554 === (5))){
var inst_44547 = cljs.core.async.close_BANG_.call(null,out);
var state_44553__$1 = state_44553;
var statearr_44560_44575 = state_44553__$1;
(statearr_44560_44575[(2)] = inst_44547);

(statearr_44560_44575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (6))){
var inst_44549 = (state_44553[(2)]);
var state_44553__$1 = state_44553;
var statearr_44561_44576 = state_44553__$1;
(statearr_44561_44576[(2)] = inst_44549);

(statearr_44561_44576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (7))){
var inst_44537 = (state_44553[(11)]);
var inst_44543 = (state_44553[(2)]);
var inst_44544 = cljs.core.async.put_BANG_.call(null,out,inst_44543);
var inst_44533 = inst_44537;
var state_44553__$1 = (function (){var statearr_44562 = state_44553;
(statearr_44562[(8)] = inst_44533);

(statearr_44562[(12)] = inst_44544);

return statearr_44562;
})();
var statearr_44563_44577 = state_44553__$1;
(statearr_44563_44577[(2)] = null);

(statearr_44563_44577[(1)] = (2));


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
});})(c__41338__auto___44571,out))
;
return ((function (switch__41226__auto__,c__41338__auto___44571,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto____0 = (function (){
var statearr_44567 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44567[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto__);

(statearr_44567[(1)] = (1));

return statearr_44567;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto____1 = (function (state_44553){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_44553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e44568){if((e44568 instanceof Object)){
var ex__41230__auto__ = e44568;
var statearr_44569_44578 = state_44553;
(statearr_44569_44578[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44579 = state_44553;
state_44553 = G__44579;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto__ = function(state_44553){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto____1.call(this,state_44553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___44571,out))
})();
var state__41340__auto__ = (function (){var statearr_44570 = f__41339__auto__.call(null);
(statearr_44570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___44571);

return statearr_44570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___44571,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44580,opts){
var map__44584 = p__44580;
var map__44584__$1 = ((((!((map__44584 == null)))?((((map__44584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44584):map__44584);
var eval_body__$1 = cljs.core.get.call(null,map__44584__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__37690__auto__ = eval_body__$1;
if(cljs.core.truth_(and__37690__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__37690__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44586){var e = e44586;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44587_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44587_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__44592){
var vec__44593 = p__44592;
var k = cljs.core.nth.call(null,vec__44593,(0),null);
var v = cljs.core.nth.call(null,vec__44593,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44594){
var vec__44595 = p__44594;
var k = cljs.core.nth.call(null,vec__44595,(0),null);
var v = cljs.core.nth.call(null,vec__44595,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44599,p__44600){
var map__44847 = p__44599;
var map__44847__$1 = ((((!((map__44847 == null)))?((((map__44847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44847):map__44847);
var opts = map__44847__$1;
var before_jsload = cljs.core.get.call(null,map__44847__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44847__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44847__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44848 = p__44600;
var map__44848__$1 = ((((!((map__44848 == null)))?((((map__44848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44848):map__44848);
var msg = map__44848__$1;
var files = cljs.core.get.call(null,map__44848__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44848__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44848__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45001){
var state_val_45002 = (state_45001[(1)]);
if((state_val_45002 === (7))){
var inst_44865 = (state_45001[(7)]);
var inst_44864 = (state_45001[(8)]);
var inst_44863 = (state_45001[(9)]);
var inst_44862 = (state_45001[(10)]);
var inst_44870 = cljs.core._nth.call(null,inst_44863,inst_44865);
var inst_44871 = figwheel.client.file_reloading.eval_body.call(null,inst_44870,opts);
var inst_44872 = (inst_44865 + (1));
var tmp45003 = inst_44864;
var tmp45004 = inst_44863;
var tmp45005 = inst_44862;
var inst_44862__$1 = tmp45005;
var inst_44863__$1 = tmp45004;
var inst_44864__$1 = tmp45003;
var inst_44865__$1 = inst_44872;
var state_45001__$1 = (function (){var statearr_45006 = state_45001;
(statearr_45006[(11)] = inst_44871);

(statearr_45006[(7)] = inst_44865__$1);

(statearr_45006[(8)] = inst_44864__$1);

(statearr_45006[(9)] = inst_44863__$1);

(statearr_45006[(10)] = inst_44862__$1);

return statearr_45006;
})();
var statearr_45007_45093 = state_45001__$1;
(statearr_45007_45093[(2)] = null);

(statearr_45007_45093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (20))){
var inst_44905 = (state_45001[(12)]);
var inst_44913 = figwheel.client.file_reloading.sort_files.call(null,inst_44905);
var state_45001__$1 = state_45001;
var statearr_45008_45094 = state_45001__$1;
(statearr_45008_45094[(2)] = inst_44913);

(statearr_45008_45094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (27))){
var state_45001__$1 = state_45001;
var statearr_45009_45095 = state_45001__$1;
(statearr_45009_45095[(2)] = null);

(statearr_45009_45095[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (1))){
var inst_44854 = (state_45001[(13)]);
var inst_44851 = before_jsload.call(null,files);
var inst_44852 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44853 = (function (){return ((function (inst_44854,inst_44851,inst_44852,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44596_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44596_SHARP_);
});
;})(inst_44854,inst_44851,inst_44852,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44854__$1 = cljs.core.filter.call(null,inst_44853,files);
var inst_44855 = cljs.core.not_empty.call(null,inst_44854__$1);
var state_45001__$1 = (function (){var statearr_45010 = state_45001;
(statearr_45010[(14)] = inst_44852);

(statearr_45010[(13)] = inst_44854__$1);

(statearr_45010[(15)] = inst_44851);

return statearr_45010;
})();
if(cljs.core.truth_(inst_44855)){
var statearr_45011_45096 = state_45001__$1;
(statearr_45011_45096[(1)] = (2));

} else {
var statearr_45012_45097 = state_45001__$1;
(statearr_45012_45097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (24))){
var state_45001__$1 = state_45001;
var statearr_45013_45098 = state_45001__$1;
(statearr_45013_45098[(2)] = null);

(statearr_45013_45098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (39))){
var inst_44955 = (state_45001[(16)]);
var state_45001__$1 = state_45001;
var statearr_45014_45099 = state_45001__$1;
(statearr_45014_45099[(2)] = inst_44955);

(statearr_45014_45099[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (46))){
var inst_44996 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45015_45100 = state_45001__$1;
(statearr_45015_45100[(2)] = inst_44996);

(statearr_45015_45100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (4))){
var inst_44899 = (state_45001[(2)]);
var inst_44900 = cljs.core.List.EMPTY;
var inst_44901 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44900);
var inst_44902 = (function (){return ((function (inst_44899,inst_44900,inst_44901,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44597_SHARP_){
var and__37690__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44597_SHARP_);
if(cljs.core.truth_(and__37690__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44597_SHARP_));
} else {
return and__37690__auto__;
}
});
;})(inst_44899,inst_44900,inst_44901,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44903 = cljs.core.filter.call(null,inst_44902,files);
var inst_44904 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44905 = cljs.core.concat.call(null,inst_44903,inst_44904);
var state_45001__$1 = (function (){var statearr_45016 = state_45001;
(statearr_45016[(12)] = inst_44905);

(statearr_45016[(17)] = inst_44899);

(statearr_45016[(18)] = inst_44901);

return statearr_45016;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45017_45101 = state_45001__$1;
(statearr_45017_45101[(1)] = (16));

} else {
var statearr_45018_45102 = state_45001__$1;
(statearr_45018_45102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (15))){
var inst_44889 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45019_45103 = state_45001__$1;
(statearr_45019_45103[(2)] = inst_44889);

(statearr_45019_45103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (21))){
var inst_44915 = (state_45001[(19)]);
var inst_44915__$1 = (state_45001[(2)]);
var inst_44916 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44915__$1);
var state_45001__$1 = (function (){var statearr_45020 = state_45001;
(statearr_45020[(19)] = inst_44915__$1);

return statearr_45020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45001__$1,(22),inst_44916);
} else {
if((state_val_45002 === (31))){
var inst_44999 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45001__$1,inst_44999);
} else {
if((state_val_45002 === (32))){
var inst_44955 = (state_45001[(16)]);
var inst_44960 = inst_44955.cljs$lang$protocol_mask$partition0$;
var inst_44961 = (inst_44960 & (64));
var inst_44962 = inst_44955.cljs$core$ISeq$;
var inst_44963 = (inst_44961) || (inst_44962);
var state_45001__$1 = state_45001;
if(cljs.core.truth_(inst_44963)){
var statearr_45021_45104 = state_45001__$1;
(statearr_45021_45104[(1)] = (35));

} else {
var statearr_45022_45105 = state_45001__$1;
(statearr_45022_45105[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (40))){
var inst_44976 = (state_45001[(20)]);
var inst_44975 = (state_45001[(2)]);
var inst_44976__$1 = cljs.core.get.call(null,inst_44975,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44977 = cljs.core.get.call(null,inst_44975,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44978 = cljs.core.not_empty.call(null,inst_44976__$1);
var state_45001__$1 = (function (){var statearr_45023 = state_45001;
(statearr_45023[(20)] = inst_44976__$1);

(statearr_45023[(21)] = inst_44977);

return statearr_45023;
})();
if(cljs.core.truth_(inst_44978)){
var statearr_45024_45106 = state_45001__$1;
(statearr_45024_45106[(1)] = (41));

} else {
var statearr_45025_45107 = state_45001__$1;
(statearr_45025_45107[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (33))){
var state_45001__$1 = state_45001;
var statearr_45026_45108 = state_45001__$1;
(statearr_45026_45108[(2)] = false);

(statearr_45026_45108[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (13))){
var inst_44875 = (state_45001[(22)]);
var inst_44879 = cljs.core.chunk_first.call(null,inst_44875);
var inst_44880 = cljs.core.chunk_rest.call(null,inst_44875);
var inst_44881 = cljs.core.count.call(null,inst_44879);
var inst_44862 = inst_44880;
var inst_44863 = inst_44879;
var inst_44864 = inst_44881;
var inst_44865 = (0);
var state_45001__$1 = (function (){var statearr_45027 = state_45001;
(statearr_45027[(7)] = inst_44865);

(statearr_45027[(8)] = inst_44864);

(statearr_45027[(9)] = inst_44863);

(statearr_45027[(10)] = inst_44862);

return statearr_45027;
})();
var statearr_45028_45109 = state_45001__$1;
(statearr_45028_45109[(2)] = null);

(statearr_45028_45109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (22))){
var inst_44923 = (state_45001[(23)]);
var inst_44915 = (state_45001[(19)]);
var inst_44919 = (state_45001[(24)]);
var inst_44918 = (state_45001[(25)]);
var inst_44918__$1 = (state_45001[(2)]);
var inst_44919__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44918__$1);
var inst_44920 = (function (){var all_files = inst_44915;
var res_SINGLEQUOTE_ = inst_44918__$1;
var res = inst_44919__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44923,inst_44915,inst_44919,inst_44918,inst_44918__$1,inst_44919__$1,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44598_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44598_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44923,inst_44915,inst_44919,inst_44918,inst_44918__$1,inst_44919__$1,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44921 = cljs.core.filter.call(null,inst_44920,inst_44918__$1);
var inst_44922 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44923__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44922);
var inst_44924 = cljs.core.not_empty.call(null,inst_44923__$1);
var state_45001__$1 = (function (){var statearr_45029 = state_45001;
(statearr_45029[(23)] = inst_44923__$1);

(statearr_45029[(26)] = inst_44921);

(statearr_45029[(24)] = inst_44919__$1);

(statearr_45029[(25)] = inst_44918__$1);

return statearr_45029;
})();
if(cljs.core.truth_(inst_44924)){
var statearr_45030_45110 = state_45001__$1;
(statearr_45030_45110[(1)] = (23));

} else {
var statearr_45031_45111 = state_45001__$1;
(statearr_45031_45111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (36))){
var state_45001__$1 = state_45001;
var statearr_45032_45112 = state_45001__$1;
(statearr_45032_45112[(2)] = false);

(statearr_45032_45112[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (41))){
var inst_44976 = (state_45001[(20)]);
var inst_44980 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44981 = cljs.core.map.call(null,inst_44980,inst_44976);
var inst_44982 = cljs.core.pr_str.call(null,inst_44981);
var inst_44983 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_44982)].join('');
var inst_44984 = figwheel.client.utils.log.call(null,inst_44983);
var state_45001__$1 = state_45001;
var statearr_45033_45113 = state_45001__$1;
(statearr_45033_45113[(2)] = inst_44984);

(statearr_45033_45113[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (43))){
var inst_44977 = (state_45001[(21)]);
var inst_44987 = (state_45001[(2)]);
var inst_44988 = cljs.core.not_empty.call(null,inst_44977);
var state_45001__$1 = (function (){var statearr_45034 = state_45001;
(statearr_45034[(27)] = inst_44987);

return statearr_45034;
})();
if(cljs.core.truth_(inst_44988)){
var statearr_45035_45114 = state_45001__$1;
(statearr_45035_45114[(1)] = (44));

} else {
var statearr_45036_45115 = state_45001__$1;
(statearr_45036_45115[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (29))){
var inst_44923 = (state_45001[(23)]);
var inst_44921 = (state_45001[(26)]);
var inst_44915 = (state_45001[(19)]);
var inst_44919 = (state_45001[(24)]);
var inst_44918 = (state_45001[(25)]);
var inst_44955 = (state_45001[(16)]);
var inst_44951 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44954 = (function (){var all_files = inst_44915;
var res_SINGLEQUOTE_ = inst_44918;
var res = inst_44919;
var files_not_loaded = inst_44921;
var dependencies_that_loaded = inst_44923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44955,inst_44951,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44953){
var map__45037 = p__44953;
var map__45037__$1 = ((((!((map__45037 == null)))?((((map__45037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45037):map__45037);
var namespace = cljs.core.get.call(null,map__45037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44955,inst_44951,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44955__$1 = cljs.core.group_by.call(null,inst_44954,inst_44921);
var inst_44957 = (inst_44955__$1 == null);
var inst_44958 = cljs.core.not.call(null,inst_44957);
var state_45001__$1 = (function (){var statearr_45039 = state_45001;
(statearr_45039[(16)] = inst_44955__$1);

(statearr_45039[(28)] = inst_44951);

return statearr_45039;
})();
if(inst_44958){
var statearr_45040_45116 = state_45001__$1;
(statearr_45040_45116[(1)] = (32));

} else {
var statearr_45041_45117 = state_45001__$1;
(statearr_45041_45117[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (44))){
var inst_44977 = (state_45001[(21)]);
var inst_44990 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44977);
var inst_44991 = cljs.core.pr_str.call(null,inst_44990);
var inst_44992 = [cljs.core.str("not required: "),cljs.core.str(inst_44991)].join('');
var inst_44993 = figwheel.client.utils.log.call(null,inst_44992);
var state_45001__$1 = state_45001;
var statearr_45042_45118 = state_45001__$1;
(statearr_45042_45118[(2)] = inst_44993);

(statearr_45042_45118[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (6))){
var inst_44896 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45043_45119 = state_45001__$1;
(statearr_45043_45119[(2)] = inst_44896);

(statearr_45043_45119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (28))){
var inst_44921 = (state_45001[(26)]);
var inst_44948 = (state_45001[(2)]);
var inst_44949 = cljs.core.not_empty.call(null,inst_44921);
var state_45001__$1 = (function (){var statearr_45044 = state_45001;
(statearr_45044[(29)] = inst_44948);

return statearr_45044;
})();
if(cljs.core.truth_(inst_44949)){
var statearr_45045_45120 = state_45001__$1;
(statearr_45045_45120[(1)] = (29));

} else {
var statearr_45046_45121 = state_45001__$1;
(statearr_45046_45121[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (25))){
var inst_44919 = (state_45001[(24)]);
var inst_44935 = (state_45001[(2)]);
var inst_44936 = cljs.core.not_empty.call(null,inst_44919);
var state_45001__$1 = (function (){var statearr_45047 = state_45001;
(statearr_45047[(30)] = inst_44935);

return statearr_45047;
})();
if(cljs.core.truth_(inst_44936)){
var statearr_45048_45122 = state_45001__$1;
(statearr_45048_45122[(1)] = (26));

} else {
var statearr_45049_45123 = state_45001__$1;
(statearr_45049_45123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (34))){
var inst_44970 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
if(cljs.core.truth_(inst_44970)){
var statearr_45050_45124 = state_45001__$1;
(statearr_45050_45124[(1)] = (38));

} else {
var statearr_45051_45125 = state_45001__$1;
(statearr_45051_45125[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (17))){
var state_45001__$1 = state_45001;
var statearr_45052_45126 = state_45001__$1;
(statearr_45052_45126[(2)] = recompile_dependents);

(statearr_45052_45126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (3))){
var state_45001__$1 = state_45001;
var statearr_45053_45127 = state_45001__$1;
(statearr_45053_45127[(2)] = null);

(statearr_45053_45127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (12))){
var inst_44892 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45054_45128 = state_45001__$1;
(statearr_45054_45128[(2)] = inst_44892);

(statearr_45054_45128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (2))){
var inst_44854 = (state_45001[(13)]);
var inst_44861 = cljs.core.seq.call(null,inst_44854);
var inst_44862 = inst_44861;
var inst_44863 = null;
var inst_44864 = (0);
var inst_44865 = (0);
var state_45001__$1 = (function (){var statearr_45055 = state_45001;
(statearr_45055[(7)] = inst_44865);

(statearr_45055[(8)] = inst_44864);

(statearr_45055[(9)] = inst_44863);

(statearr_45055[(10)] = inst_44862);

return statearr_45055;
})();
var statearr_45056_45129 = state_45001__$1;
(statearr_45056_45129[(2)] = null);

(statearr_45056_45129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (23))){
var inst_44923 = (state_45001[(23)]);
var inst_44921 = (state_45001[(26)]);
var inst_44915 = (state_45001[(19)]);
var inst_44919 = (state_45001[(24)]);
var inst_44918 = (state_45001[(25)]);
var inst_44926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44928 = (function (){var all_files = inst_44915;
var res_SINGLEQUOTE_ = inst_44918;
var res = inst_44919;
var files_not_loaded = inst_44921;
var dependencies_that_loaded = inst_44923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44926,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44927){
var map__45057 = p__44927;
var map__45057__$1 = ((((!((map__45057 == null)))?((((map__45057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45057):map__45057);
var request_url = cljs.core.get.call(null,map__45057__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44926,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44929 = cljs.core.reverse.call(null,inst_44923);
var inst_44930 = cljs.core.map.call(null,inst_44928,inst_44929);
var inst_44931 = cljs.core.pr_str.call(null,inst_44930);
var inst_44932 = figwheel.client.utils.log.call(null,inst_44931);
var state_45001__$1 = (function (){var statearr_45059 = state_45001;
(statearr_45059[(31)] = inst_44926);

return statearr_45059;
})();
var statearr_45060_45130 = state_45001__$1;
(statearr_45060_45130[(2)] = inst_44932);

(statearr_45060_45130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (35))){
var state_45001__$1 = state_45001;
var statearr_45061_45131 = state_45001__$1;
(statearr_45061_45131[(2)] = true);

(statearr_45061_45131[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (19))){
var inst_44905 = (state_45001[(12)]);
var inst_44911 = figwheel.client.file_reloading.expand_files.call(null,inst_44905);
var state_45001__$1 = state_45001;
var statearr_45062_45132 = state_45001__$1;
(statearr_45062_45132[(2)] = inst_44911);

(statearr_45062_45132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (11))){
var state_45001__$1 = state_45001;
var statearr_45063_45133 = state_45001__$1;
(statearr_45063_45133[(2)] = null);

(statearr_45063_45133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (9))){
var inst_44894 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45064_45134 = state_45001__$1;
(statearr_45064_45134[(2)] = inst_44894);

(statearr_45064_45134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (5))){
var inst_44865 = (state_45001[(7)]);
var inst_44864 = (state_45001[(8)]);
var inst_44867 = (inst_44865 < inst_44864);
var inst_44868 = inst_44867;
var state_45001__$1 = state_45001;
if(cljs.core.truth_(inst_44868)){
var statearr_45065_45135 = state_45001__$1;
(statearr_45065_45135[(1)] = (7));

} else {
var statearr_45066_45136 = state_45001__$1;
(statearr_45066_45136[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (14))){
var inst_44875 = (state_45001[(22)]);
var inst_44884 = cljs.core.first.call(null,inst_44875);
var inst_44885 = figwheel.client.file_reloading.eval_body.call(null,inst_44884,opts);
var inst_44886 = cljs.core.next.call(null,inst_44875);
var inst_44862 = inst_44886;
var inst_44863 = null;
var inst_44864 = (0);
var inst_44865 = (0);
var state_45001__$1 = (function (){var statearr_45067 = state_45001;
(statearr_45067[(7)] = inst_44865);

(statearr_45067[(32)] = inst_44885);

(statearr_45067[(8)] = inst_44864);

(statearr_45067[(9)] = inst_44863);

(statearr_45067[(10)] = inst_44862);

return statearr_45067;
})();
var statearr_45068_45137 = state_45001__$1;
(statearr_45068_45137[(2)] = null);

(statearr_45068_45137[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (45))){
var state_45001__$1 = state_45001;
var statearr_45069_45138 = state_45001__$1;
(statearr_45069_45138[(2)] = null);

(statearr_45069_45138[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (26))){
var inst_44923 = (state_45001[(23)]);
var inst_44921 = (state_45001[(26)]);
var inst_44915 = (state_45001[(19)]);
var inst_44919 = (state_45001[(24)]);
var inst_44918 = (state_45001[(25)]);
var inst_44938 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44940 = (function (){var all_files = inst_44915;
var res_SINGLEQUOTE_ = inst_44918;
var res = inst_44919;
var files_not_loaded = inst_44921;
var dependencies_that_loaded = inst_44923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44938,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44939){
var map__45070 = p__44939;
var map__45070__$1 = ((((!((map__45070 == null)))?((((map__45070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45070):map__45070);
var namespace = cljs.core.get.call(null,map__45070__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44938,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44941 = cljs.core.map.call(null,inst_44940,inst_44919);
var inst_44942 = cljs.core.pr_str.call(null,inst_44941);
var inst_44943 = figwheel.client.utils.log.call(null,inst_44942);
var inst_44944 = (function (){var all_files = inst_44915;
var res_SINGLEQUOTE_ = inst_44918;
var res = inst_44919;
var files_not_loaded = inst_44921;
var dependencies_that_loaded = inst_44923;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44938,inst_44940,inst_44941,inst_44942,inst_44943,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44923,inst_44921,inst_44915,inst_44919,inst_44918,inst_44938,inst_44940,inst_44941,inst_44942,inst_44943,state_val_45002,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44945 = setTimeout(inst_44944,(10));
var state_45001__$1 = (function (){var statearr_45072 = state_45001;
(statearr_45072[(33)] = inst_44943);

(statearr_45072[(34)] = inst_44938);

return statearr_45072;
})();
var statearr_45073_45139 = state_45001__$1;
(statearr_45073_45139[(2)] = inst_44945);

(statearr_45073_45139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (16))){
var state_45001__$1 = state_45001;
var statearr_45074_45140 = state_45001__$1;
(statearr_45074_45140[(2)] = reload_dependents);

(statearr_45074_45140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (38))){
var inst_44955 = (state_45001[(16)]);
var inst_44972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44955);
var state_45001__$1 = state_45001;
var statearr_45075_45141 = state_45001__$1;
(statearr_45075_45141[(2)] = inst_44972);

(statearr_45075_45141[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (30))){
var state_45001__$1 = state_45001;
var statearr_45076_45142 = state_45001__$1;
(statearr_45076_45142[(2)] = null);

(statearr_45076_45142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (10))){
var inst_44875 = (state_45001[(22)]);
var inst_44877 = cljs.core.chunked_seq_QMARK_.call(null,inst_44875);
var state_45001__$1 = state_45001;
if(inst_44877){
var statearr_45077_45143 = state_45001__$1;
(statearr_45077_45143[(1)] = (13));

} else {
var statearr_45078_45144 = state_45001__$1;
(statearr_45078_45144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (18))){
var inst_44909 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
if(cljs.core.truth_(inst_44909)){
var statearr_45079_45145 = state_45001__$1;
(statearr_45079_45145[(1)] = (19));

} else {
var statearr_45080_45146 = state_45001__$1;
(statearr_45080_45146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (42))){
var state_45001__$1 = state_45001;
var statearr_45081_45147 = state_45001__$1;
(statearr_45081_45147[(2)] = null);

(statearr_45081_45147[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (37))){
var inst_44967 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45082_45148 = state_45001__$1;
(statearr_45082_45148[(2)] = inst_44967);

(statearr_45082_45148[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (8))){
var inst_44875 = (state_45001[(22)]);
var inst_44862 = (state_45001[(10)]);
var inst_44875__$1 = cljs.core.seq.call(null,inst_44862);
var state_45001__$1 = (function (){var statearr_45083 = state_45001;
(statearr_45083[(22)] = inst_44875__$1);

return statearr_45083;
})();
if(inst_44875__$1){
var statearr_45084_45149 = state_45001__$1;
(statearr_45084_45149[(1)] = (10));

} else {
var statearr_45085_45150 = state_45001__$1;
(statearr_45085_45150[(1)] = (11));

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
});})(c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__41226__auto__,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto____0 = (function (){
var statearr_45089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45089[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto__);

(statearr_45089[(1)] = (1));

return statearr_45089;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto____1 = (function (state_45001){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_45001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e45090){if((e45090 instanceof Object)){
var ex__41230__auto__ = e45090;
var statearr_45091_45151 = state_45001;
(statearr_45091_45151[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45152 = state_45001;
state_45001 = G__45152;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto__ = function(state_45001){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto____1.call(this,state_45001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__41340__auto__ = (function (){var statearr_45092 = f__41339__auto__.call(null);
(statearr_45092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_45092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__,map__44847,map__44847__$1,opts,before_jsload,on_jsload,reload_dependents,map__44848,map__44848__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__41338__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45155,link){
var map__45158 = p__45155;
var map__45158__$1 = ((((!((map__45158 == null)))?((((map__45158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45158):map__45158);
var file = cljs.core.get.call(null,map__45158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__45158,map__45158__$1,file){
return (function (p1__45153_SHARP_,p2__45154_SHARP_){
if(cljs.core._EQ_.call(null,p1__45153_SHARP_,p2__45154_SHARP_)){
return p1__45153_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__45158,map__45158__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45164){
var map__45165 = p__45164;
var map__45165__$1 = ((((!((map__45165 == null)))?((((map__45165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45165):map__45165);
var match_length = cljs.core.get.call(null,map__45165__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45165__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45160_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45160_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args45167 = [];
var len__38772__auto___45170 = arguments.length;
var i__38773__auto___45171 = (0);
while(true){
if((i__38773__auto___45171 < len__38772__auto___45170)){
args45167.push((arguments[i__38773__auto___45171]));

var G__45172 = (i__38773__auto___45171 + (1));
i__38773__auto___45171 = G__45172;
continue;
} else {
}
break;
}

var G__45169 = args45167.length;
switch (G__45169) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45167.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45174_SHARP_,p2__45175_SHARP_){
return cljs.core.assoc.call(null,p1__45174_SHARP_,cljs.core.get.call(null,p2__45175_SHARP_,key),p2__45175_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45176){
var map__45179 = p__45176;
var map__45179__$1 = ((((!((map__45179 == null)))?((((map__45179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45179):map__45179);
var f_data = map__45179__$1;
var file = cljs.core.get.call(null,map__45179__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45181,files_msg){
var map__45188 = p__45181;
var map__45188__$1 = ((((!((map__45188 == null)))?((((map__45188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45188):map__45188);
var opts = map__45188__$1;
var on_cssload = cljs.core.get.call(null,map__45188__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45190_45194 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__45191_45195 = null;
var count__45192_45196 = (0);
var i__45193_45197 = (0);
while(true){
if((i__45193_45197 < count__45192_45196)){
var f_45198 = cljs.core._nth.call(null,chunk__45191_45195,i__45193_45197);
figwheel.client.file_reloading.reload_css_file.call(null,f_45198);

var G__45199 = seq__45190_45194;
var G__45200 = chunk__45191_45195;
var G__45201 = count__45192_45196;
var G__45202 = (i__45193_45197 + (1));
seq__45190_45194 = G__45199;
chunk__45191_45195 = G__45200;
count__45192_45196 = G__45201;
i__45193_45197 = G__45202;
continue;
} else {
var temp__4657__auto___45203 = cljs.core.seq.call(null,seq__45190_45194);
if(temp__4657__auto___45203){
var seq__45190_45204__$1 = temp__4657__auto___45203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45190_45204__$1)){
var c__38513__auto___45205 = cljs.core.chunk_first.call(null,seq__45190_45204__$1);
var G__45206 = cljs.core.chunk_rest.call(null,seq__45190_45204__$1);
var G__45207 = c__38513__auto___45205;
var G__45208 = cljs.core.count.call(null,c__38513__auto___45205);
var G__45209 = (0);
seq__45190_45194 = G__45206;
chunk__45191_45195 = G__45207;
count__45192_45196 = G__45208;
i__45193_45197 = G__45209;
continue;
} else {
var f_45210 = cljs.core.first.call(null,seq__45190_45204__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45210);

var G__45211 = cljs.core.next.call(null,seq__45190_45204__$1);
var G__45212 = null;
var G__45213 = (0);
var G__45214 = (0);
seq__45190_45194 = G__45211;
chunk__45191_45195 = G__45212;
count__45192_45196 = G__45213;
i__45193_45197 = G__45214;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__45188,map__45188__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__45188,map__45188__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1462424041864