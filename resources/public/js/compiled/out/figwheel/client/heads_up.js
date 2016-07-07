// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__38779__auto__ = [];
var len__38772__auto___45343 = arguments.length;
var i__38773__auto___45344 = (0);
while(true){
if((i__38773__auto___45344 < len__38772__auto___45343)){
args__38779__auto__.push((arguments[i__38773__auto___45344]));

var G__45345 = (i__38773__auto___45344 + (1));
i__38773__auto___45344 = G__45345;
continue;
} else {
}
break;
}

var argseq__38780__auto__ = ((((2) < args__38779__auto__.length))?(new cljs.core.IndexedSeq(args__38779__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38780__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__45335_45346 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__45336_45347 = null;
var count__45337_45348 = (0);
var i__45338_45349 = (0);
while(true){
if((i__45338_45349 < count__45337_45348)){
var k_45350 = cljs.core._nth.call(null,chunk__45336_45347,i__45338_45349);
e.setAttribute(cljs.core.name.call(null,k_45350),cljs.core.get.call(null,attrs,k_45350));

var G__45351 = seq__45335_45346;
var G__45352 = chunk__45336_45347;
var G__45353 = count__45337_45348;
var G__45354 = (i__45338_45349 + (1));
seq__45335_45346 = G__45351;
chunk__45336_45347 = G__45352;
count__45337_45348 = G__45353;
i__45338_45349 = G__45354;
continue;
} else {
var temp__4657__auto___45355 = cljs.core.seq.call(null,seq__45335_45346);
if(temp__4657__auto___45355){
var seq__45335_45356__$1 = temp__4657__auto___45355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45335_45356__$1)){
var c__38513__auto___45357 = cljs.core.chunk_first.call(null,seq__45335_45356__$1);
var G__45358 = cljs.core.chunk_rest.call(null,seq__45335_45356__$1);
var G__45359 = c__38513__auto___45357;
var G__45360 = cljs.core.count.call(null,c__38513__auto___45357);
var G__45361 = (0);
seq__45335_45346 = G__45358;
chunk__45336_45347 = G__45359;
count__45337_45348 = G__45360;
i__45338_45349 = G__45361;
continue;
} else {
var k_45362 = cljs.core.first.call(null,seq__45335_45356__$1);
e.setAttribute(cljs.core.name.call(null,k_45362),cljs.core.get.call(null,attrs,k_45362));

var G__45363 = cljs.core.next.call(null,seq__45335_45356__$1);
var G__45364 = null;
var G__45365 = (0);
var G__45366 = (0);
seq__45335_45346 = G__45363;
chunk__45336_45347 = G__45364;
count__45337_45348 = G__45365;
i__45338_45349 = G__45366;
continue;
}
} else {
}
}
break;
}

var seq__45339_45367 = cljs.core.seq.call(null,children);
var chunk__45340_45368 = null;
var count__45341_45369 = (0);
var i__45342_45370 = (0);
while(true){
if((i__45342_45370 < count__45341_45369)){
var ch_45371 = cljs.core._nth.call(null,chunk__45340_45368,i__45342_45370);
e.appendChild(ch_45371);

var G__45372 = seq__45339_45367;
var G__45373 = chunk__45340_45368;
var G__45374 = count__45341_45369;
var G__45375 = (i__45342_45370 + (1));
seq__45339_45367 = G__45372;
chunk__45340_45368 = G__45373;
count__45341_45369 = G__45374;
i__45342_45370 = G__45375;
continue;
} else {
var temp__4657__auto___45376 = cljs.core.seq.call(null,seq__45339_45367);
if(temp__4657__auto___45376){
var seq__45339_45377__$1 = temp__4657__auto___45376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45339_45377__$1)){
var c__38513__auto___45378 = cljs.core.chunk_first.call(null,seq__45339_45377__$1);
var G__45379 = cljs.core.chunk_rest.call(null,seq__45339_45377__$1);
var G__45380 = c__38513__auto___45378;
var G__45381 = cljs.core.count.call(null,c__38513__auto___45378);
var G__45382 = (0);
seq__45339_45367 = G__45379;
chunk__45340_45368 = G__45380;
count__45341_45369 = G__45381;
i__45342_45370 = G__45382;
continue;
} else {
var ch_45383 = cljs.core.first.call(null,seq__45339_45377__$1);
e.appendChild(ch_45383);

var G__45384 = cljs.core.next.call(null,seq__45339_45377__$1);
var G__45385 = null;
var G__45386 = (0);
var G__45387 = (0);
seq__45339_45367 = G__45384;
chunk__45340_45368 = G__45385;
count__45341_45369 = G__45386;
i__45342_45370 = G__45387;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq45332){
var G__45333 = cljs.core.first.call(null,seq45332);
var seq45332__$1 = cljs.core.next.call(null,seq45332);
var G__45334 = cljs.core.first.call(null,seq45332__$1);
var seq45332__$2 = cljs.core.next.call(null,seq45332__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__45333,G__45334,seq45332__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__38627__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__38628__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__38629__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__38630__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__38631__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__38627__auto__,prefer_table__38628__auto__,method_cache__38629__auto__,cached_hierarchy__38630__auto__,hierarchy__38631__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__38627__auto__,prefer_table__38628__auto__,method_cache__38629__auto__,cached_hierarchy__38630__auto__,hierarchy__38631__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__38631__auto__,method_table__38627__auto__,prefer_table__38628__auto__,method_cache__38629__auto__,cached_hierarchy__38630__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_45388 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_45388.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_45388.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_45388.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_45388);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__45389,st_map){
var map__45394 = p__45389;
var map__45394__$1 = ((((!((map__45394 == null)))?((((map__45394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45394):map__45394);
var container_el = cljs.core.get.call(null,map__45394__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__45394,map__45394__$1,container_el){
return (function (p__45396){
var vec__45397 = p__45396;
var k = cljs.core.nth.call(null,vec__45397,(0),null);
var v = cljs.core.nth.call(null,vec__45397,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__45394,map__45394__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__45398,dom_str){
var map__45401 = p__45398;
var map__45401__$1 = ((((!((map__45401 == null)))?((((map__45401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45401):map__45401);
var c = map__45401__$1;
var content_area_el = cljs.core.get.call(null,map__45401__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__45403){
var map__45406 = p__45403;
var map__45406__$1 = ((((!((map__45406 == null)))?((((map__45406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45406):map__45406);
var content_area_el = cljs.core.get.call(null,map__45406__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_45449){
var state_val_45450 = (state_45449[(1)]);
if((state_val_45450 === (1))){
var inst_45434 = (state_45449[(7)]);
var inst_45434__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45435 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45436 = ["10px","10px","100%","68px","1.0"];
var inst_45437 = cljs.core.PersistentHashMap.fromArrays(inst_45435,inst_45436);
var inst_45438 = cljs.core.merge.call(null,inst_45437,style);
var inst_45439 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45434__$1,inst_45438);
var inst_45440 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45434__$1,msg);
var inst_45441 = cljs.core.async.timeout.call(null,(300));
var state_45449__$1 = (function (){var statearr_45451 = state_45449;
(statearr_45451[(7)] = inst_45434__$1);

(statearr_45451[(8)] = inst_45440);

(statearr_45451[(9)] = inst_45439);

return statearr_45451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45449__$1,(2),inst_45441);
} else {
if((state_val_45450 === (2))){
var inst_45434 = (state_45449[(7)]);
var inst_45443 = (state_45449[(2)]);
var inst_45444 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_45445 = ["auto"];
var inst_45446 = cljs.core.PersistentHashMap.fromArrays(inst_45444,inst_45445);
var inst_45447 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45434,inst_45446);
var state_45449__$1 = (function (){var statearr_45452 = state_45449;
(statearr_45452[(10)] = inst_45443);

return statearr_45452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45449__$1,inst_45447);
} else {
return null;
}
}
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto____0 = (function (){
var statearr_45456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45456[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto__);

(statearr_45456[(1)] = (1));

return statearr_45456;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto____1 = (function (state_45449){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_45449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e45457){if((e45457 instanceof Object)){
var ex__41230__auto__ = e45457;
var statearr_45458_45460 = state_45449;
(statearr_45458_45460[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45461 = state_45449;
state_45449 = G__45461;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto__ = function(state_45449){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto____1.call(this,state_45449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_45459 = f__41339__auto__.call(null);
(statearr_45459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_45459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__45463 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__45463,(0),null);
var ln = cljs.core.nth.call(null,vec__45463,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__45466 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__45466,(0),null);
var file_line = cljs.core.nth.call(null,vec__45466,(1),null);
var file_column = cljs.core.nth.call(null,vec__45466,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__45466,file_name,file_line,file_column){
return (function (p1__45464_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__45464_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__45466,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__37702__auto__ = file_line;
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
var and__37690__auto__ = cause;
if(cljs.core.truth_(and__37690__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__37690__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__45469 = figwheel.client.heads_up.ensure_container.call(null);
var map__45469__$1 = ((((!((map__45469 == null)))?((((map__45469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45469):map__45469);
var content_area_el = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_45517){
var state_val_45518 = (state_45517[(1)]);
if((state_val_45518 === (1))){
var inst_45500 = (state_45517[(7)]);
var inst_45500__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45501 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45502 = ["0.0"];
var inst_45503 = cljs.core.PersistentHashMap.fromArrays(inst_45501,inst_45502);
var inst_45504 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45500__$1,inst_45503);
var inst_45505 = cljs.core.async.timeout.call(null,(300));
var state_45517__$1 = (function (){var statearr_45519 = state_45517;
(statearr_45519[(7)] = inst_45500__$1);

(statearr_45519[(8)] = inst_45504);

return statearr_45519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45517__$1,(2),inst_45505);
} else {
if((state_val_45518 === (2))){
var inst_45500 = (state_45517[(7)]);
var inst_45507 = (state_45517[(2)]);
var inst_45508 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_45509 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_45510 = cljs.core.PersistentHashMap.fromArrays(inst_45508,inst_45509);
var inst_45511 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45500,inst_45510);
var inst_45512 = cljs.core.async.timeout.call(null,(200));
var state_45517__$1 = (function (){var statearr_45520 = state_45517;
(statearr_45520[(9)] = inst_45507);

(statearr_45520[(10)] = inst_45511);

return statearr_45520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45517__$1,(3),inst_45512);
} else {
if((state_val_45518 === (3))){
var inst_45500 = (state_45517[(7)]);
var inst_45514 = (state_45517[(2)]);
var inst_45515 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45500,"");
var state_45517__$1 = (function (){var statearr_45521 = state_45517;
(statearr_45521[(11)] = inst_45514);

return statearr_45521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45517__$1,inst_45515);
} else {
return null;
}
}
}
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__41227__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__41227__auto____0 = (function (){
var statearr_45525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45525[(0)] = figwheel$client$heads_up$clear_$_state_machine__41227__auto__);

(statearr_45525[(1)] = (1));

return statearr_45525;
});
var figwheel$client$heads_up$clear_$_state_machine__41227__auto____1 = (function (state_45517){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_45517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e45526){if((e45526 instanceof Object)){
var ex__41230__auto__ = e45526;
var statearr_45527_45529 = state_45517;
(statearr_45527_45529[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45530 = state_45517;
state_45517 = G__45530;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__41227__auto__ = function(state_45517){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__41227__auto____1.call(this,state_45517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__41227__auto____0;
figwheel$client$heads_up$clear_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__41227__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_45528 = f__41339__auto__.call(null);
(statearr_45528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_45528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_45562){
var state_val_45563 = (state_45562[(1)]);
if((state_val_45563 === (1))){
var inst_45552 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_45562__$1 = state_45562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45562__$1,(2),inst_45552);
} else {
if((state_val_45563 === (2))){
var inst_45554 = (state_45562[(2)]);
var inst_45555 = cljs.core.async.timeout.call(null,(400));
var state_45562__$1 = (function (){var statearr_45564 = state_45562;
(statearr_45564[(7)] = inst_45554);

return statearr_45564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45562__$1,(3),inst_45555);
} else {
if((state_val_45563 === (3))){
var inst_45557 = (state_45562[(2)]);
var inst_45558 = figwheel.client.heads_up.clear.call(null);
var state_45562__$1 = (function (){var statearr_45565 = state_45562;
(statearr_45565[(8)] = inst_45557);

return statearr_45565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45562__$1,(4),inst_45558);
} else {
if((state_val_45563 === (4))){
var inst_45560 = (state_45562[(2)]);
var state_45562__$1 = state_45562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45562__$1,inst_45560);
} else {
return null;
}
}
}
}
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto____0 = (function (){
var statearr_45569 = [null,null,null,null,null,null,null,null,null];
(statearr_45569[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto__);

(statearr_45569[(1)] = (1));

return statearr_45569;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto____1 = (function (state_45562){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_45562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e45570){if((e45570 instanceof Object)){
var ex__41230__auto__ = e45570;
var statearr_45571_45573 = state_45562;
(statearr_45571_45573[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45574 = state_45562;
state_45562 = G__45574;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto__ = function(state_45562){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto____1.call(this,state_45562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_45572 = f__41339__auto__.call(null);
(statearr_45572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_45572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1462424042145