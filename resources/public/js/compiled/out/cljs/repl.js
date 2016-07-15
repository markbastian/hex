// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__81361){
var map__81386 = p__81361;
var map__81386__$1 = ((((!((map__81386 == null)))?((((map__81386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81386):map__81386);
var m = map__81386__$1;
var n = cljs.core.get.call(null,map__81386__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__81386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6477__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6477__auto__)){
var ns = temp__6477__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__81388_81410 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__81389_81411 = null;
var count__81390_81412 = (0);
var i__81391_81413 = (0);
while(true){
if((i__81391_81413 < count__81390_81412)){
var f_81414 = cljs.core._nth.call(null,chunk__81389_81411,i__81391_81413);
cljs.core.println.call(null,"  ",f_81414);

var G__81415 = seq__81388_81410;
var G__81416 = chunk__81389_81411;
var G__81417 = count__81390_81412;
var G__81418 = (i__81391_81413 + (1));
seq__81388_81410 = G__81415;
chunk__81389_81411 = G__81416;
count__81390_81412 = G__81417;
i__81391_81413 = G__81418;
continue;
} else {
var temp__6477__auto___81419 = cljs.core.seq.call(null,seq__81388_81410);
if(temp__6477__auto___81419){
var seq__81388_81420__$1 = temp__6477__auto___81419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81388_81420__$1)){
var c__42322__auto___81421 = cljs.core.chunk_first.call(null,seq__81388_81420__$1);
var G__81422 = cljs.core.chunk_rest.call(null,seq__81388_81420__$1);
var G__81423 = c__42322__auto___81421;
var G__81424 = cljs.core.count.call(null,c__42322__auto___81421);
var G__81425 = (0);
seq__81388_81410 = G__81422;
chunk__81389_81411 = G__81423;
count__81390_81412 = G__81424;
i__81391_81413 = G__81425;
continue;
} else {
var f_81426 = cljs.core.first.call(null,seq__81388_81420__$1);
cljs.core.println.call(null,"  ",f_81426);

var G__81427 = cljs.core.next.call(null,seq__81388_81420__$1);
var G__81428 = null;
var G__81429 = (0);
var G__81430 = (0);
seq__81388_81410 = G__81427;
chunk__81389_81411 = G__81428;
count__81390_81412 = G__81429;
i__81391_81413 = G__81430;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_81431 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41419__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_81431);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_81431)))?cljs.core.second.call(null,arglists_81431):arglists_81431));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__81392_81432 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__81393_81433 = null;
var count__81394_81434 = (0);
var i__81395_81435 = (0);
while(true){
if((i__81395_81435 < count__81394_81434)){
var vec__81396_81436 = cljs.core._nth.call(null,chunk__81393_81433,i__81395_81435);
var name_81437 = cljs.core.nth.call(null,vec__81396_81436,(0),null);
var map__81399_81438 = cljs.core.nth.call(null,vec__81396_81436,(1),null);
var map__81399_81439__$1 = ((((!((map__81399_81438 == null)))?((((map__81399_81438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81399_81438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81399_81438):map__81399_81438);
var doc_81440 = cljs.core.get.call(null,map__81399_81439__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_81441 = cljs.core.get.call(null,map__81399_81439__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_81437);

cljs.core.println.call(null," ",arglists_81441);

if(cljs.core.truth_(doc_81440)){
cljs.core.println.call(null," ",doc_81440);
} else {
}

var G__81442 = seq__81392_81432;
var G__81443 = chunk__81393_81433;
var G__81444 = count__81394_81434;
var G__81445 = (i__81395_81435 + (1));
seq__81392_81432 = G__81442;
chunk__81393_81433 = G__81443;
count__81394_81434 = G__81444;
i__81395_81435 = G__81445;
continue;
} else {
var temp__6477__auto___81446 = cljs.core.seq.call(null,seq__81392_81432);
if(temp__6477__auto___81446){
var seq__81392_81447__$1 = temp__6477__auto___81446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81392_81447__$1)){
var c__42322__auto___81448 = cljs.core.chunk_first.call(null,seq__81392_81447__$1);
var G__81449 = cljs.core.chunk_rest.call(null,seq__81392_81447__$1);
var G__81450 = c__42322__auto___81448;
var G__81451 = cljs.core.count.call(null,c__42322__auto___81448);
var G__81452 = (0);
seq__81392_81432 = G__81449;
chunk__81393_81433 = G__81450;
count__81394_81434 = G__81451;
i__81395_81435 = G__81452;
continue;
} else {
var vec__81401_81453 = cljs.core.first.call(null,seq__81392_81447__$1);
var name_81454 = cljs.core.nth.call(null,vec__81401_81453,(0),null);
var map__81404_81455 = cljs.core.nth.call(null,vec__81401_81453,(1),null);
var map__81404_81456__$1 = ((((!((map__81404_81455 == null)))?((((map__81404_81455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81404_81455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81404_81455):map__81404_81455);
var doc_81457 = cljs.core.get.call(null,map__81404_81456__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_81458 = cljs.core.get.call(null,map__81404_81456__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_81454);

cljs.core.println.call(null," ",arglists_81458);

if(cljs.core.truth_(doc_81457)){
cljs.core.println.call(null," ",doc_81457);
} else {
}

var G__81459 = cljs.core.next.call(null,seq__81392_81447__$1);
var G__81460 = null;
var G__81461 = (0);
var G__81462 = (0);
seq__81392_81432 = G__81459;
chunk__81393_81433 = G__81460;
count__81394_81434 = G__81461;
i__81395_81435 = G__81462;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6477__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6477__auto__)){
var fnspec = temp__6477__auto__;
cljs.core.print.call(null,"Spec");

var seq__81406 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__81407 = null;
var count__81408 = (0);
var i__81409 = (0);
while(true){
if((i__81409 < count__81408)){
var role = cljs.core._nth.call(null,chunk__81407,i__81409);
var temp__6477__auto___81463__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6477__auto___81463__$1)){
var spec_81464 = temp__6477__auto___81463__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_81464));
} else {
}

var G__81465 = seq__81406;
var G__81466 = chunk__81407;
var G__81467 = count__81408;
var G__81468 = (i__81409 + (1));
seq__81406 = G__81465;
chunk__81407 = G__81466;
count__81408 = G__81467;
i__81409 = G__81468;
continue;
} else {
var temp__6477__auto____$1 = cljs.core.seq.call(null,seq__81406);
if(temp__6477__auto____$1){
var seq__81406__$1 = temp__6477__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81406__$1)){
var c__42322__auto__ = cljs.core.chunk_first.call(null,seq__81406__$1);
var G__81469 = cljs.core.chunk_rest.call(null,seq__81406__$1);
var G__81470 = c__42322__auto__;
var G__81471 = cljs.core.count.call(null,c__42322__auto__);
var G__81472 = (0);
seq__81406 = G__81469;
chunk__81407 = G__81470;
count__81408 = G__81471;
i__81409 = G__81472;
continue;
} else {
var role = cljs.core.first.call(null,seq__81406__$1);
var temp__6477__auto___81473__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6477__auto___81473__$2)){
var spec_81474 = temp__6477__auto___81473__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_81474));
} else {
}

var G__81475 = cljs.core.next.call(null,seq__81406__$1);
var G__81476 = null;
var G__81477 = (0);
var G__81478 = (0);
seq__81406 = G__81475;
chunk__81407 = G__81476;
count__81408 = G__81477;
i__81409 = G__81478;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1467866143033