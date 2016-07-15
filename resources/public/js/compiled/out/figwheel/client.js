// Compiled by ClojureScript 1.9.93 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-5";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args83417 = [];
var len__42602__auto___83420 = arguments.length;
var i__42603__auto___83421 = (0);
while(true){
if((i__42603__auto___83421 < len__42602__auto___83420)){
args83417.push((arguments[i__42603__auto___83421]));

var G__83422 = (i__42603__auto___83421 + (1));
i__42603__auto___83421 = G__83422;
continue;
} else {
}
break;
}

var G__83419 = args83417.length;
switch (G__83419) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83417.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__42609__auto__ = [];
var len__42602__auto___83425 = arguments.length;
var i__42603__auto___83426 = (0);
while(true){
if((i__42603__auto___83426 < len__42602__auto___83425)){
args__42609__auto__.push((arguments[i__42603__auto___83426]));

var G__83427 = (i__42603__auto___83426 + (1));
i__42603__auto___83426 = G__83427;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq83424){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83424));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42609__auto__ = [];
var len__42602__auto___83429 = arguments.length;
var i__42603__auto___83430 = (0);
while(true){
if((i__42603__auto___83430 < len__42602__auto___83429)){
args__42609__auto__.push((arguments[i__42603__auto___83430]));

var G__83431 = (i__42603__auto___83430 + (1));
i__42603__auto___83430 = G__83431;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq83428){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq83428));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__83432 = cljs.core._EQ_;
var expr__83433 = (function (){var or__41419__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e83436){if((e83436 instanceof Error)){
var e = e83436;
return false;
} else {
throw e83436;

}
}})();
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__83432.call(null,"true",expr__83433))){
return true;
} else {
if(cljs.core.truth_(pred__83432.call(null,"false",expr__83433))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__83433)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e83438){if((e83438 instanceof Error)){
var e = e83438;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e83438;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__83439){
var map__83442 = p__83439;
var map__83442__$1 = ((((!((map__83442 == null)))?((((map__83442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83442):map__83442);
var message = cljs.core.get.call(null,map__83442__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__83442__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41419__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41419__auto__)){
return or__41419__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41407__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41407__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41407__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__46004__auto___83604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___83604,ch){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___83604,ch){
return (function (state_83573){
var state_val_83574 = (state_83573[(1)]);
if((state_val_83574 === (7))){
var inst_83569 = (state_83573[(2)]);
var state_83573__$1 = state_83573;
var statearr_83575_83605 = state_83573__$1;
(statearr_83575_83605[(2)] = inst_83569);

(statearr_83575_83605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (1))){
var state_83573__$1 = state_83573;
var statearr_83576_83606 = state_83573__$1;
(statearr_83576_83606[(2)] = null);

(statearr_83576_83606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (4))){
var inst_83526 = (state_83573[(7)]);
var inst_83526__$1 = (state_83573[(2)]);
var state_83573__$1 = (function (){var statearr_83577 = state_83573;
(statearr_83577[(7)] = inst_83526__$1);

return statearr_83577;
})();
if(cljs.core.truth_(inst_83526__$1)){
var statearr_83578_83607 = state_83573__$1;
(statearr_83578_83607[(1)] = (5));

} else {
var statearr_83579_83608 = state_83573__$1;
(statearr_83579_83608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (15))){
var inst_83533 = (state_83573[(8)]);
var inst_83548 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_83533);
var inst_83549 = cljs.core.first.call(null,inst_83548);
var inst_83550 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_83549);
var inst_83551 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_83550)].join('');
var inst_83552 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_83551);
var state_83573__$1 = state_83573;
var statearr_83580_83609 = state_83573__$1;
(statearr_83580_83609[(2)] = inst_83552);

(statearr_83580_83609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (13))){
var inst_83557 = (state_83573[(2)]);
var state_83573__$1 = state_83573;
var statearr_83581_83610 = state_83573__$1;
(statearr_83581_83610[(2)] = inst_83557);

(statearr_83581_83610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (6))){
var state_83573__$1 = state_83573;
var statearr_83582_83611 = state_83573__$1;
(statearr_83582_83611[(2)] = null);

(statearr_83582_83611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (17))){
var inst_83555 = (state_83573[(2)]);
var state_83573__$1 = state_83573;
var statearr_83583_83612 = state_83573__$1;
(statearr_83583_83612[(2)] = inst_83555);

(statearr_83583_83612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (3))){
var inst_83571 = (state_83573[(2)]);
var state_83573__$1 = state_83573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83573__$1,inst_83571);
} else {
if((state_val_83574 === (12))){
var inst_83532 = (state_83573[(9)]);
var inst_83546 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_83532,opts);
var state_83573__$1 = state_83573;
if(cljs.core.truth_(inst_83546)){
var statearr_83584_83613 = state_83573__$1;
(statearr_83584_83613[(1)] = (15));

} else {
var statearr_83585_83614 = state_83573__$1;
(statearr_83585_83614[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (2))){
var state_83573__$1 = state_83573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83573__$1,(4),ch);
} else {
if((state_val_83574 === (11))){
var inst_83533 = (state_83573[(8)]);
var inst_83538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83539 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_83533);
var inst_83540 = cljs.core.async.timeout.call(null,(1000));
var inst_83541 = [inst_83539,inst_83540];
var inst_83542 = (new cljs.core.PersistentVector(null,2,(5),inst_83538,inst_83541,null));
var state_83573__$1 = state_83573;
return cljs.core.async.ioc_alts_BANG_.call(null,state_83573__$1,(14),inst_83542);
} else {
if((state_val_83574 === (9))){
var inst_83533 = (state_83573[(8)]);
var inst_83559 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_83560 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_83533);
var inst_83561 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_83560);
var inst_83562 = [cljs.core.str("Not loading: "),cljs.core.str(inst_83561)].join('');
var inst_83563 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_83562);
var state_83573__$1 = (function (){var statearr_83586 = state_83573;
(statearr_83586[(10)] = inst_83559);

return statearr_83586;
})();
var statearr_83587_83615 = state_83573__$1;
(statearr_83587_83615[(2)] = inst_83563);

(statearr_83587_83615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (5))){
var inst_83526 = (state_83573[(7)]);
var inst_83528 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_83529 = (new cljs.core.PersistentArrayMap(null,2,inst_83528,null));
var inst_83530 = (new cljs.core.PersistentHashSet(null,inst_83529,null));
var inst_83531 = figwheel.client.focus_msgs.call(null,inst_83530,inst_83526);
var inst_83532 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_83531);
var inst_83533 = cljs.core.first.call(null,inst_83531);
var inst_83534 = figwheel.client.autoload_QMARK_.call(null);
var state_83573__$1 = (function (){var statearr_83588 = state_83573;
(statearr_83588[(8)] = inst_83533);

(statearr_83588[(9)] = inst_83532);

return statearr_83588;
})();
if(cljs.core.truth_(inst_83534)){
var statearr_83589_83616 = state_83573__$1;
(statearr_83589_83616[(1)] = (8));

} else {
var statearr_83590_83617 = state_83573__$1;
(statearr_83590_83617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (14))){
var inst_83544 = (state_83573[(2)]);
var state_83573__$1 = state_83573;
var statearr_83591_83618 = state_83573__$1;
(statearr_83591_83618[(2)] = inst_83544);

(statearr_83591_83618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (16))){
var state_83573__$1 = state_83573;
var statearr_83592_83619 = state_83573__$1;
(statearr_83592_83619[(2)] = null);

(statearr_83592_83619[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (10))){
var inst_83565 = (state_83573[(2)]);
var state_83573__$1 = (function (){var statearr_83593 = state_83573;
(statearr_83593[(11)] = inst_83565);

return statearr_83593;
})();
var statearr_83594_83620 = state_83573__$1;
(statearr_83594_83620[(2)] = null);

(statearr_83594_83620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83574 === (8))){
var inst_83532 = (state_83573[(9)]);
var inst_83536 = figwheel.client.reload_file_state_QMARK_.call(null,inst_83532,opts);
var state_83573__$1 = state_83573;
if(cljs.core.truth_(inst_83536)){
var statearr_83595_83621 = state_83573__$1;
(statearr_83595_83621[(1)] = (11));

} else {
var statearr_83596_83622 = state_83573__$1;
(statearr_83596_83622[(1)] = (12));

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
});})(c__46004__auto___83604,ch))
;
return ((function (switch__45890__auto__,c__46004__auto___83604,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45891__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45891__auto____0 = (function (){
var statearr_83600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83600[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45891__auto__);

(statearr_83600[(1)] = (1));

return statearr_83600;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45891__auto____1 = (function (state_83573){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_83573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e83601){if((e83601 instanceof Object)){
var ex__45894__auto__ = e83601;
var statearr_83602_83623 = state_83573;
(statearr_83602_83623[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83624 = state_83573;
state_83573 = G__83624;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45891__auto__ = function(state_83573){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45891__auto____1.call(this,state_83573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45891__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45891__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___83604,ch))
})();
var state__46006__auto__ = (function (){var statearr_83603 = f__46005__auto__.call(null);
(statearr_83603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___83604);

return statearr_83603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___83604,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__83625_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__83625_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_83628 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_83628){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e83627){if((e83627 instanceof Error)){
var e = e83627;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_83628], null));
} else {
var e = e83627;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_83628))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__83629){
var map__83638 = p__83629;
var map__83638__$1 = ((((!((map__83638 == null)))?((((map__83638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83638):map__83638);
var opts = map__83638__$1;
var build_id = cljs.core.get.call(null,map__83638__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__83638,map__83638__$1,opts,build_id){
return (function (p__83640){
var vec__83641 = p__83640;
var seq__83642 = cljs.core.seq.call(null,vec__83641);
var first__83643 = cljs.core.first.call(null,seq__83642);
var seq__83642__$1 = cljs.core.next.call(null,seq__83642);
var map__83644 = first__83643;
var map__83644__$1 = ((((!((map__83644 == null)))?((((map__83644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83644):map__83644);
var msg = map__83644__$1;
var msg_name = cljs.core.get.call(null,map__83644__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__83642__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__83641,seq__83642,first__83643,seq__83642__$1,map__83644,map__83644__$1,msg,msg_name,_,map__83638,map__83638__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__83641,seq__83642,first__83643,seq__83642__$1,map__83644,map__83644__$1,msg,msg_name,_,map__83638,map__83638__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__83638,map__83638__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__83652){
var vec__83653 = p__83652;
var seq__83654 = cljs.core.seq.call(null,vec__83653);
var first__83655 = cljs.core.first.call(null,seq__83654);
var seq__83654__$1 = cljs.core.next.call(null,seq__83654);
var map__83656 = first__83655;
var map__83656__$1 = ((((!((map__83656 == null)))?((((map__83656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83656):map__83656);
var msg = map__83656__$1;
var msg_name = cljs.core.get.call(null,map__83656__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__83654__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__83658){
var map__83670 = p__83658;
var map__83670__$1 = ((((!((map__83670 == null)))?((((map__83670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83670):map__83670);
var on_compile_warning = cljs.core.get.call(null,map__83670__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__83670__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__83670,map__83670__$1,on_compile_warning,on_compile_fail){
return (function (p__83672){
var vec__83673 = p__83672;
var seq__83674 = cljs.core.seq.call(null,vec__83673);
var first__83675 = cljs.core.first.call(null,seq__83674);
var seq__83674__$1 = cljs.core.next.call(null,seq__83674);
var map__83676 = first__83675;
var map__83676__$1 = ((((!((map__83676 == null)))?((((map__83676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83676):map__83676);
var msg = map__83676__$1;
var msg_name = cljs.core.get.call(null,map__83676__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__83674__$1;
var pred__83678 = cljs.core._EQ_;
var expr__83679 = msg_name;
if(cljs.core.truth_(pred__83678.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__83679))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__83678.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__83679))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__83670,map__83670__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__,msg_hist,msg_names,msg){
return (function (state_83887){
var state_val_83888 = (state_83887[(1)]);
if((state_val_83888 === (7))){
var inst_83815 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83815)){
var statearr_83889_83935 = state_83887__$1;
(statearr_83889_83935[(1)] = (8));

} else {
var statearr_83890_83936 = state_83887__$1;
(statearr_83890_83936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (20))){
var inst_83881 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83891_83937 = state_83887__$1;
(statearr_83891_83937[(2)] = inst_83881);

(statearr_83891_83937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (27))){
var inst_83877 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83892_83938 = state_83887__$1;
(statearr_83892_83938[(2)] = inst_83877);

(statearr_83892_83938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (1))){
var inst_83808 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83808)){
var statearr_83893_83939 = state_83887__$1;
(statearr_83893_83939[(1)] = (2));

} else {
var statearr_83894_83940 = state_83887__$1;
(statearr_83894_83940[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (24))){
var inst_83879 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83895_83941 = state_83887__$1;
(statearr_83895_83941[(2)] = inst_83879);

(statearr_83895_83941[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (4))){
var inst_83885 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83887__$1,inst_83885);
} else {
if((state_val_83888 === (15))){
var inst_83883 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83896_83942 = state_83887__$1;
(statearr_83896_83942[(2)] = inst_83883);

(statearr_83896_83942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (21))){
var inst_83842 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83897_83943 = state_83887__$1;
(statearr_83897_83943[(2)] = inst_83842);

(statearr_83897_83943[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (31))){
var inst_83866 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83866)){
var statearr_83898_83944 = state_83887__$1;
(statearr_83898_83944[(1)] = (34));

} else {
var statearr_83899_83945 = state_83887__$1;
(statearr_83899_83945[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (32))){
var inst_83875 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83900_83946 = state_83887__$1;
(statearr_83900_83946[(2)] = inst_83875);

(statearr_83900_83946[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (33))){
var inst_83864 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83901_83947 = state_83887__$1;
(statearr_83901_83947[(2)] = inst_83864);

(statearr_83901_83947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (13))){
var inst_83829 = figwheel.client.heads_up.clear.call(null);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(16),inst_83829);
} else {
if((state_val_83888 === (22))){
var inst_83846 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83847 = figwheel.client.heads_up.append_warning_message.call(null,inst_83846);
var state_83887__$1 = state_83887;
var statearr_83902_83948 = state_83887__$1;
(statearr_83902_83948[(2)] = inst_83847);

(statearr_83902_83948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (36))){
var inst_83873 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83903_83949 = state_83887__$1;
(statearr_83903_83949[(2)] = inst_83873);

(statearr_83903_83949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (29))){
var inst_83857 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83904_83950 = state_83887__$1;
(statearr_83904_83950[(2)] = inst_83857);

(statearr_83904_83950[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (6))){
var inst_83810 = (state_83887[(7)]);
var state_83887__$1 = state_83887;
var statearr_83905_83951 = state_83887__$1;
(statearr_83905_83951[(2)] = inst_83810);

(statearr_83905_83951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (28))){
var inst_83853 = (state_83887[(2)]);
var inst_83854 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83855 = figwheel.client.heads_up.display_warning.call(null,inst_83854);
var state_83887__$1 = (function (){var statearr_83906 = state_83887;
(statearr_83906[(8)] = inst_83853);

return statearr_83906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(29),inst_83855);
} else {
if((state_val_83888 === (25))){
var inst_83851 = figwheel.client.heads_up.clear.call(null);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(28),inst_83851);
} else {
if((state_val_83888 === (34))){
var inst_83868 = figwheel.client.heads_up.flash_loaded.call(null);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(37),inst_83868);
} else {
if((state_val_83888 === (17))){
var inst_83835 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83907_83952 = state_83887__$1;
(statearr_83907_83952[(2)] = inst_83835);

(statearr_83907_83952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (3))){
var inst_83827 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83827)){
var statearr_83908_83953 = state_83887__$1;
(statearr_83908_83953[(1)] = (13));

} else {
var statearr_83909_83954 = state_83887__$1;
(statearr_83909_83954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (12))){
var inst_83823 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83910_83955 = state_83887__$1;
(statearr_83910_83955[(2)] = inst_83823);

(statearr_83910_83955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (2))){
var inst_83810 = (state_83887[(7)]);
var inst_83810__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_83887__$1 = (function (){var statearr_83911 = state_83887;
(statearr_83911[(7)] = inst_83810__$1);

return statearr_83911;
})();
if(cljs.core.truth_(inst_83810__$1)){
var statearr_83912_83956 = state_83887__$1;
(statearr_83912_83956[(1)] = (5));

} else {
var statearr_83913_83957 = state_83887__$1;
(statearr_83913_83957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (23))){
var inst_83849 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83849)){
var statearr_83914_83958 = state_83887__$1;
(statearr_83914_83958[(1)] = (25));

} else {
var statearr_83915_83959 = state_83887__$1;
(statearr_83915_83959[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (35))){
var state_83887__$1 = state_83887;
var statearr_83916_83960 = state_83887__$1;
(statearr_83916_83960[(2)] = null);

(statearr_83916_83960[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (19))){
var inst_83844 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83844)){
var statearr_83917_83961 = state_83887__$1;
(statearr_83917_83961[(1)] = (22));

} else {
var statearr_83918_83962 = state_83887__$1;
(statearr_83918_83962[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (11))){
var inst_83819 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83919_83963 = state_83887__$1;
(statearr_83919_83963[(2)] = inst_83819);

(statearr_83919_83963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (9))){
var inst_83821 = figwheel.client.heads_up.clear.call(null);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(12),inst_83821);
} else {
if((state_val_83888 === (5))){
var inst_83812 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_83887__$1 = state_83887;
var statearr_83920_83964 = state_83887__$1;
(statearr_83920_83964[(2)] = inst_83812);

(statearr_83920_83964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (14))){
var inst_83837 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83837)){
var statearr_83921_83965 = state_83887__$1;
(statearr_83921_83965[(1)] = (18));

} else {
var statearr_83922_83966 = state_83887__$1;
(statearr_83922_83966[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (26))){
var inst_83859 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_83887__$1 = state_83887;
if(cljs.core.truth_(inst_83859)){
var statearr_83923_83967 = state_83887__$1;
(statearr_83923_83967[(1)] = (30));

} else {
var statearr_83924_83968 = state_83887__$1;
(statearr_83924_83968[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (16))){
var inst_83831 = (state_83887[(2)]);
var inst_83832 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83833 = figwheel.client.heads_up.display_exception.call(null,inst_83832);
var state_83887__$1 = (function (){var statearr_83925 = state_83887;
(statearr_83925[(9)] = inst_83831);

return statearr_83925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(17),inst_83833);
} else {
if((state_val_83888 === (30))){
var inst_83861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83862 = figwheel.client.heads_up.display_warning.call(null,inst_83861);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(33),inst_83862);
} else {
if((state_val_83888 === (10))){
var inst_83825 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83926_83969 = state_83887__$1;
(statearr_83926_83969[(2)] = inst_83825);

(statearr_83926_83969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (18))){
var inst_83839 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_83840 = figwheel.client.heads_up.display_exception.call(null,inst_83839);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(21),inst_83840);
} else {
if((state_val_83888 === (37))){
var inst_83870 = (state_83887[(2)]);
var state_83887__$1 = state_83887;
var statearr_83927_83970 = state_83887__$1;
(statearr_83927_83970[(2)] = inst_83870);

(statearr_83927_83970[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83888 === (8))){
var inst_83817 = figwheel.client.heads_up.flash_loaded.call(null);
var state_83887__$1 = state_83887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83887__$1,(11),inst_83817);
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
});})(c__46004__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45890__auto__,c__46004__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto____0 = (function (){
var statearr_83931 = [null,null,null,null,null,null,null,null,null,null];
(statearr_83931[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto__);

(statearr_83931[(1)] = (1));

return statearr_83931;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto____1 = (function (state_83887){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_83887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e83932){if((e83932 instanceof Object)){
var ex__45894__auto__ = e83932;
var statearr_83933_83971 = state_83887;
(statearr_83933_83971[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83972 = state_83887;
state_83887 = G__83972;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto__ = function(state_83887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto____1.call(this,state_83887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__,msg_hist,msg_names,msg))
})();
var state__46006__auto__ = (function (){var statearr_83934 = f__46005__auto__.call(null);
(statearr_83934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_83934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__,msg_hist,msg_names,msg))
);

return c__46004__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46004__auto___84035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto___84035,ch){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto___84035,ch){
return (function (state_84018){
var state_val_84019 = (state_84018[(1)]);
if((state_val_84019 === (1))){
var state_84018__$1 = state_84018;
var statearr_84020_84036 = state_84018__$1;
(statearr_84020_84036[(2)] = null);

(statearr_84020_84036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84019 === (2))){
var state_84018__$1 = state_84018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84018__$1,(4),ch);
} else {
if((state_val_84019 === (3))){
var inst_84016 = (state_84018[(2)]);
var state_84018__$1 = state_84018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84018__$1,inst_84016);
} else {
if((state_val_84019 === (4))){
var inst_84006 = (state_84018[(7)]);
var inst_84006__$1 = (state_84018[(2)]);
var state_84018__$1 = (function (){var statearr_84021 = state_84018;
(statearr_84021[(7)] = inst_84006__$1);

return statearr_84021;
})();
if(cljs.core.truth_(inst_84006__$1)){
var statearr_84022_84037 = state_84018__$1;
(statearr_84022_84037[(1)] = (5));

} else {
var statearr_84023_84038 = state_84018__$1;
(statearr_84023_84038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84019 === (5))){
var inst_84006 = (state_84018[(7)]);
var inst_84008 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_84006);
var state_84018__$1 = state_84018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84018__$1,(8),inst_84008);
} else {
if((state_val_84019 === (6))){
var state_84018__$1 = state_84018;
var statearr_84024_84039 = state_84018__$1;
(statearr_84024_84039[(2)] = null);

(statearr_84024_84039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84019 === (7))){
var inst_84014 = (state_84018[(2)]);
var state_84018__$1 = state_84018;
var statearr_84025_84040 = state_84018__$1;
(statearr_84025_84040[(2)] = inst_84014);

(statearr_84025_84040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84019 === (8))){
var inst_84010 = (state_84018[(2)]);
var state_84018__$1 = (function (){var statearr_84026 = state_84018;
(statearr_84026[(8)] = inst_84010);

return statearr_84026;
})();
var statearr_84027_84041 = state_84018__$1;
(statearr_84027_84041[(2)] = null);

(statearr_84027_84041[(1)] = (2));


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
});})(c__46004__auto___84035,ch))
;
return ((function (switch__45890__auto__,c__46004__auto___84035,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45891__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45891__auto____0 = (function (){
var statearr_84031 = [null,null,null,null,null,null,null,null,null];
(statearr_84031[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45891__auto__);

(statearr_84031[(1)] = (1));

return statearr_84031;
});
var figwheel$client$heads_up_plugin_$_state_machine__45891__auto____1 = (function (state_84018){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_84018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e84032){if((e84032 instanceof Object)){
var ex__45894__auto__ = e84032;
var statearr_84033_84042 = state_84018;
(statearr_84033_84042[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84043 = state_84018;
state_84018 = G__84043;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45891__auto__ = function(state_84018){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45891__auto____1.call(this,state_84018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45891__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45891__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto___84035,ch))
})();
var state__46006__auto__ = (function (){var statearr_84034 = f__46005__auto__.call(null);
(statearr_84034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto___84035);

return statearr_84034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto___84035,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__){
return (function (state_84064){
var state_val_84065 = (state_84064[(1)]);
if((state_val_84065 === (1))){
var inst_84059 = cljs.core.async.timeout.call(null,(3000));
var state_84064__$1 = state_84064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84064__$1,(2),inst_84059);
} else {
if((state_val_84065 === (2))){
var inst_84061 = (state_84064[(2)]);
var inst_84062 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_84064__$1 = (function (){var statearr_84066 = state_84064;
(statearr_84066[(7)] = inst_84061);

return statearr_84066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84064__$1,inst_84062);
} else {
return null;
}
}
});})(c__46004__auto__))
;
return ((function (switch__45890__auto__,c__46004__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45891__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45891__auto____0 = (function (){
var statearr_84070 = [null,null,null,null,null,null,null,null];
(statearr_84070[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45891__auto__);

(statearr_84070[(1)] = (1));

return statearr_84070;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45891__auto____1 = (function (state_84064){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_84064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e84071){if((e84071 instanceof Object)){
var ex__45894__auto__ = e84071;
var statearr_84072_84074 = state_84064;
(statearr_84072_84074[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84075 = state_84064;
state_84064 = G__84075;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45891__auto__ = function(state_84064){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45891__auto____1.call(this,state_84064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45891__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45891__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__))
})();
var state__46006__auto__ = (function (){var statearr_84073 = f__46005__auto__.call(null);
(statearr_84073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_84073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__))
);

return c__46004__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6477__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6477__auto__)){
var figwheel_version = temp__6477__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46004__auto__,figwheel_version,temp__6477__auto__){
return (function (){
var f__46005__auto__ = (function (){var switch__45890__auto__ = ((function (c__46004__auto__,figwheel_version,temp__6477__auto__){
return (function (state_84098){
var state_val_84099 = (state_84098[(1)]);
if((state_val_84099 === (1))){
var inst_84092 = cljs.core.async.timeout.call(null,(2000));
var state_84098__$1 = state_84098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84098__$1,(2),inst_84092);
} else {
if((state_val_84099 === (2))){
var inst_84094 = (state_84098[(2)]);
var inst_84095 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_84096 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_84095);
var state_84098__$1 = (function (){var statearr_84100 = state_84098;
(statearr_84100[(7)] = inst_84094);

return statearr_84100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84098__$1,inst_84096);
} else {
return null;
}
}
});})(c__46004__auto__,figwheel_version,temp__6477__auto__))
;
return ((function (switch__45890__auto__,c__46004__auto__,figwheel_version,temp__6477__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto____0 = (function (){
var statearr_84104 = [null,null,null,null,null,null,null,null];
(statearr_84104[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto__);

(statearr_84104[(1)] = (1));

return statearr_84104;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto____1 = (function (state_84098){
while(true){
var ret_value__45892__auto__ = (function (){try{while(true){
var result__45893__auto__ = switch__45890__auto__.call(null,state_84098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45893__auto__;
}
break;
}
}catch (e84105){if((e84105 instanceof Object)){
var ex__45894__auto__ = e84105;
var statearr_84106_84108 = state_84098;
(statearr_84106_84108[(5)] = ex__45894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84109 = state_84098;
state_84098 = G__84109;
continue;
} else {
return ret_value__45892__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto__ = function(state_84098){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto____1.call(this,state_84098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45891__auto__;
})()
;})(switch__45890__auto__,c__46004__auto__,figwheel_version,temp__6477__auto__))
})();
var state__46006__auto__ = (function (){var statearr_84107 = f__46005__auto__.call(null);
(statearr_84107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46004__auto__);

return statearr_84107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46006__auto__);
});})(c__46004__auto__,figwheel_version,temp__6477__auto__))
);

return c__46004__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__84110){
var map__84114 = p__84110;
var map__84114__$1 = ((((!((map__84114 == null)))?((((map__84114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84114):map__84114);
var file = cljs.core.get.call(null,map__84114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__84114__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__84114__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__84116 = "";
var G__84116__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__84116),cljs.core.str("file "),cljs.core.str(file)].join(''):G__84116);
var G__84116__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__84116__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__84116__$1);
if(cljs.core.truth_((function (){var and__41407__auto__ = line;
if(cljs.core.truth_(and__41407__auto__)){
return column;
} else {
return and__41407__auto__;
}
})())){
return [cljs.core.str(G__84116__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__84116__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__84117){
var map__84124 = p__84117;
var map__84124__$1 = ((((!((map__84124 == null)))?((((map__84124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84124):map__84124);
var ed = map__84124__$1;
var formatted_exception = cljs.core.get.call(null,map__84124__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__84124__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__84124__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__84126_84130 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__84127_84131 = null;
var count__84128_84132 = (0);
var i__84129_84133 = (0);
while(true){
if((i__84129_84133 < count__84128_84132)){
var msg_84134 = cljs.core._nth.call(null,chunk__84127_84131,i__84129_84133);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_84134);

var G__84135 = seq__84126_84130;
var G__84136 = chunk__84127_84131;
var G__84137 = count__84128_84132;
var G__84138 = (i__84129_84133 + (1));
seq__84126_84130 = G__84135;
chunk__84127_84131 = G__84136;
count__84128_84132 = G__84137;
i__84129_84133 = G__84138;
continue;
} else {
var temp__6477__auto___84139 = cljs.core.seq.call(null,seq__84126_84130);
if(temp__6477__auto___84139){
var seq__84126_84140__$1 = temp__6477__auto___84139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84126_84140__$1)){
var c__42322__auto___84141 = cljs.core.chunk_first.call(null,seq__84126_84140__$1);
var G__84142 = cljs.core.chunk_rest.call(null,seq__84126_84140__$1);
var G__84143 = c__42322__auto___84141;
var G__84144 = cljs.core.count.call(null,c__42322__auto___84141);
var G__84145 = (0);
seq__84126_84130 = G__84142;
chunk__84127_84131 = G__84143;
count__84128_84132 = G__84144;
i__84129_84133 = G__84145;
continue;
} else {
var msg_84146 = cljs.core.first.call(null,seq__84126_84140__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_84146);

var G__84147 = cljs.core.next.call(null,seq__84126_84140__$1);
var G__84148 = null;
var G__84149 = (0);
var G__84150 = (0);
seq__84126_84130 = G__84147;
chunk__84127_84131 = G__84148;
count__84128_84132 = G__84149;
i__84129_84133 = G__84150;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__84151){
var map__84154 = p__84151;
var map__84154__$1 = ((((!((map__84154 == null)))?((((map__84154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84154):map__84154);
var w = map__84154__$1;
var message = cljs.core.get.call(null,map__84154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41407__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41407__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41407__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__84166 = cljs.core.seq.call(null,plugins);
var chunk__84167 = null;
var count__84168 = (0);
var i__84169 = (0);
while(true){
if((i__84169 < count__84168)){
var vec__84170 = cljs.core._nth.call(null,chunk__84167,i__84169);
var k = cljs.core.nth.call(null,vec__84170,(0),null);
var plugin = cljs.core.nth.call(null,vec__84170,(1),null);
if(cljs.core.truth_(plugin)){
var pl_84176 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__84166,chunk__84167,count__84168,i__84169,pl_84176,vec__84170,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_84176.call(null,msg_hist);
});})(seq__84166,chunk__84167,count__84168,i__84169,pl_84176,vec__84170,k,plugin))
);
} else {
}

var G__84177 = seq__84166;
var G__84178 = chunk__84167;
var G__84179 = count__84168;
var G__84180 = (i__84169 + (1));
seq__84166 = G__84177;
chunk__84167 = G__84178;
count__84168 = G__84179;
i__84169 = G__84180;
continue;
} else {
var temp__6477__auto__ = cljs.core.seq.call(null,seq__84166);
if(temp__6477__auto__){
var seq__84166__$1 = temp__6477__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84166__$1)){
var c__42322__auto__ = cljs.core.chunk_first.call(null,seq__84166__$1);
var G__84181 = cljs.core.chunk_rest.call(null,seq__84166__$1);
var G__84182 = c__42322__auto__;
var G__84183 = cljs.core.count.call(null,c__42322__auto__);
var G__84184 = (0);
seq__84166 = G__84181;
chunk__84167 = G__84182;
count__84168 = G__84183;
i__84169 = G__84184;
continue;
} else {
var vec__84173 = cljs.core.first.call(null,seq__84166__$1);
var k = cljs.core.nth.call(null,vec__84173,(0),null);
var plugin = cljs.core.nth.call(null,vec__84173,(1),null);
if(cljs.core.truth_(plugin)){
var pl_84185 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__84166,chunk__84167,count__84168,i__84169,pl_84185,vec__84173,k,plugin,seq__84166__$1,temp__6477__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_84185.call(null,msg_hist);
});})(seq__84166,chunk__84167,count__84168,i__84169,pl_84185,vec__84173,k,plugin,seq__84166__$1,temp__6477__auto__))
);
} else {
}

var G__84186 = cljs.core.next.call(null,seq__84166__$1);
var G__84187 = null;
var G__84188 = (0);
var G__84189 = (0);
seq__84166 = G__84186;
chunk__84167 = G__84187;
count__84168 = G__84188;
i__84169 = G__84189;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args84190 = [];
var len__42602__auto___84197 = arguments.length;
var i__42603__auto___84198 = (0);
while(true){
if((i__42603__auto___84198 < len__42602__auto___84197)){
args84190.push((arguments[i__42603__auto___84198]));

var G__84199 = (i__42603__auto___84198 + (1));
i__42603__auto___84198 = G__84199;
continue;
} else {
}
break;
}

var G__84192 = args84190.length;
switch (G__84192) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args84190.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__84193_84201 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__84194_84202 = null;
var count__84195_84203 = (0);
var i__84196_84204 = (0);
while(true){
if((i__84196_84204 < count__84195_84203)){
var msg_84205 = cljs.core._nth.call(null,chunk__84194_84202,i__84196_84204);
figwheel.client.socket.handle_incoming_message.call(null,msg_84205);

var G__84206 = seq__84193_84201;
var G__84207 = chunk__84194_84202;
var G__84208 = count__84195_84203;
var G__84209 = (i__84196_84204 + (1));
seq__84193_84201 = G__84206;
chunk__84194_84202 = G__84207;
count__84195_84203 = G__84208;
i__84196_84204 = G__84209;
continue;
} else {
var temp__6477__auto___84210 = cljs.core.seq.call(null,seq__84193_84201);
if(temp__6477__auto___84210){
var seq__84193_84211__$1 = temp__6477__auto___84210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84193_84211__$1)){
var c__42322__auto___84212 = cljs.core.chunk_first.call(null,seq__84193_84211__$1);
var G__84213 = cljs.core.chunk_rest.call(null,seq__84193_84211__$1);
var G__84214 = c__42322__auto___84212;
var G__84215 = cljs.core.count.call(null,c__42322__auto___84212);
var G__84216 = (0);
seq__84193_84201 = G__84213;
chunk__84194_84202 = G__84214;
count__84195_84203 = G__84215;
i__84196_84204 = G__84216;
continue;
} else {
var msg_84217 = cljs.core.first.call(null,seq__84193_84211__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_84217);

var G__84218 = cljs.core.next.call(null,seq__84193_84211__$1);
var G__84219 = null;
var G__84220 = (0);
var G__84221 = (0);
seq__84193_84201 = G__84218;
chunk__84194_84202 = G__84219;
count__84195_84203 = G__84220;
i__84196_84204 = G__84221;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__42609__auto__ = [];
var len__42602__auto___84226 = arguments.length;
var i__42603__auto___84227 = (0);
while(true){
if((i__42603__auto___84227 < len__42602__auto___84226)){
args__42609__auto__.push((arguments[i__42603__auto___84227]));

var G__84228 = (i__42603__auto___84227 + (1));
i__42603__auto___84227 = G__84228;
continue;
} else {
}
break;
}

var argseq__42610__auto__ = ((((0) < args__42609__auto__.length))?(new cljs.core.IndexedSeq(args__42609__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42610__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__84223){
var map__84224 = p__84223;
var map__84224__$1 = ((((!((map__84224 == null)))?((((map__84224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84224):map__84224);
var opts = map__84224__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq84222){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84222));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e84230){if((e84230 instanceof Error)){
var e = e84230;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e84230;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__84234){
var map__84235 = p__84234;
var map__84235__$1 = ((((!((map__84235 == null)))?((((map__84235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84235):map__84235);
var msg_name = cljs.core.get.call(null,map__84235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1467866146724