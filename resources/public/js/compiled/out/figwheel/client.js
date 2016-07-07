// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__45577 = cljs.core._EQ_;
var expr__45578 = (function (){var or__37702__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e45581){if((e45581 instanceof Error)){
var e = e45581;
return false;
} else {
throw e45581;

}
}})();
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45577.call(null,"true",expr__45578))){
return true;
} else {
if(cljs.core.truth_(pred__45577.call(null,"false",expr__45578))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45578)].join('')));
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
}catch (e45583){if((e45583 instanceof Error)){
var e = e45583;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e45583;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__38779__auto__ = [];
var len__38772__auto___45585 = arguments.length;
var i__38773__auto___45586 = (0);
while(true){
if((i__38773__auto___45586 < len__38772__auto___45585)){
args__38779__auto__.push((arguments[i__38773__auto___45586]));

var G__45587 = (i__38773__auto___45586 + (1));
i__38773__auto___45586 = G__45587;
continue;
} else {
}
break;
}

var argseq__38780__auto__ = ((((0) < args__38779__auto__.length))?(new cljs.core.IndexedSeq(args__38779__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38780__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq45584){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45584));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45588){
var map__45591 = p__45588;
var map__45591__$1 = ((((!((map__45591 == null)))?((((map__45591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45591):map__45591);
var message = cljs.core.get.call(null,map__45591__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45591__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__37702__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__37702__auto__)){
return or__37702__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__37690__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__37690__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__37690__auto__;
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
var c__41338__auto___45753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___45753,ch){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___45753,ch){
return (function (state_45722){
var state_val_45723 = (state_45722[(1)]);
if((state_val_45723 === (7))){
var inst_45718 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45724_45754 = state_45722__$1;
(statearr_45724_45754[(2)] = inst_45718);

(statearr_45724_45754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (1))){
var state_45722__$1 = state_45722;
var statearr_45725_45755 = state_45722__$1;
(statearr_45725_45755[(2)] = null);

(statearr_45725_45755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (4))){
var inst_45675 = (state_45722[(7)]);
var inst_45675__$1 = (state_45722[(2)]);
var state_45722__$1 = (function (){var statearr_45726 = state_45722;
(statearr_45726[(7)] = inst_45675__$1);

return statearr_45726;
})();
if(cljs.core.truth_(inst_45675__$1)){
var statearr_45727_45756 = state_45722__$1;
(statearr_45727_45756[(1)] = (5));

} else {
var statearr_45728_45757 = state_45722__$1;
(statearr_45728_45757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (15))){
var inst_45682 = (state_45722[(8)]);
var inst_45697 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45682);
var inst_45698 = cljs.core.first.call(null,inst_45697);
var inst_45699 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45698);
var inst_45700 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_45699)].join('');
var inst_45701 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45700);
var state_45722__$1 = state_45722;
var statearr_45729_45758 = state_45722__$1;
(statearr_45729_45758[(2)] = inst_45701);

(statearr_45729_45758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (13))){
var inst_45706 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45730_45759 = state_45722__$1;
(statearr_45730_45759[(2)] = inst_45706);

(statearr_45730_45759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (6))){
var state_45722__$1 = state_45722;
var statearr_45731_45760 = state_45722__$1;
(statearr_45731_45760[(2)] = null);

(statearr_45731_45760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (17))){
var inst_45704 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45732_45761 = state_45722__$1;
(statearr_45732_45761[(2)] = inst_45704);

(statearr_45732_45761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (3))){
var inst_45720 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45722__$1,inst_45720);
} else {
if((state_val_45723 === (12))){
var inst_45681 = (state_45722[(9)]);
var inst_45695 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45681,opts);
var state_45722__$1 = state_45722;
if(cljs.core.truth_(inst_45695)){
var statearr_45733_45762 = state_45722__$1;
(statearr_45733_45762[(1)] = (15));

} else {
var statearr_45734_45763 = state_45722__$1;
(statearr_45734_45763[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (2))){
var state_45722__$1 = state_45722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45722__$1,(4),ch);
} else {
if((state_val_45723 === (11))){
var inst_45682 = (state_45722[(8)]);
var inst_45687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45688 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45682);
var inst_45689 = cljs.core.async.timeout.call(null,(1000));
var inst_45690 = [inst_45688,inst_45689];
var inst_45691 = (new cljs.core.PersistentVector(null,2,(5),inst_45687,inst_45690,null));
var state_45722__$1 = state_45722;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45722__$1,(14),inst_45691);
} else {
if((state_val_45723 === (9))){
var inst_45682 = (state_45722[(8)]);
var inst_45708 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45709 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45682);
var inst_45710 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45709);
var inst_45711 = [cljs.core.str("Not loading: "),cljs.core.str(inst_45710)].join('');
var inst_45712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45711);
var state_45722__$1 = (function (){var statearr_45735 = state_45722;
(statearr_45735[(10)] = inst_45708);

return statearr_45735;
})();
var statearr_45736_45764 = state_45722__$1;
(statearr_45736_45764[(2)] = inst_45712);

(statearr_45736_45764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (5))){
var inst_45675 = (state_45722[(7)]);
var inst_45677 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45678 = (new cljs.core.PersistentArrayMap(null,2,inst_45677,null));
var inst_45679 = (new cljs.core.PersistentHashSet(null,inst_45678,null));
var inst_45680 = figwheel.client.focus_msgs.call(null,inst_45679,inst_45675);
var inst_45681 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45680);
var inst_45682 = cljs.core.first.call(null,inst_45680);
var inst_45683 = figwheel.client.autoload_QMARK_.call(null);
var state_45722__$1 = (function (){var statearr_45737 = state_45722;
(statearr_45737[(8)] = inst_45682);

(statearr_45737[(9)] = inst_45681);

return statearr_45737;
})();
if(cljs.core.truth_(inst_45683)){
var statearr_45738_45765 = state_45722__$1;
(statearr_45738_45765[(1)] = (8));

} else {
var statearr_45739_45766 = state_45722__$1;
(statearr_45739_45766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (14))){
var inst_45693 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45740_45767 = state_45722__$1;
(statearr_45740_45767[(2)] = inst_45693);

(statearr_45740_45767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (16))){
var state_45722__$1 = state_45722;
var statearr_45741_45768 = state_45722__$1;
(statearr_45741_45768[(2)] = null);

(statearr_45741_45768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (10))){
var inst_45714 = (state_45722[(2)]);
var state_45722__$1 = (function (){var statearr_45742 = state_45722;
(statearr_45742[(11)] = inst_45714);

return statearr_45742;
})();
var statearr_45743_45769 = state_45722__$1;
(statearr_45743_45769[(2)] = null);

(statearr_45743_45769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (8))){
var inst_45681 = (state_45722[(9)]);
var inst_45685 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45681,opts);
var state_45722__$1 = state_45722;
if(cljs.core.truth_(inst_45685)){
var statearr_45744_45770 = state_45722__$1;
(statearr_45744_45770[(1)] = (11));

} else {
var statearr_45745_45771 = state_45722__$1;
(statearr_45745_45771[(1)] = (12));

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
});})(c__41338__auto___45753,ch))
;
return ((function (switch__41226__auto__,c__41338__auto___45753,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__41227__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41227__auto____0 = (function (){
var statearr_45749 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45749[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41227__auto__);

(statearr_45749[(1)] = (1));

return statearr_45749;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41227__auto____1 = (function (state_45722){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_45722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e45750){if((e45750 instanceof Object)){
var ex__41230__auto__ = e45750;
var statearr_45751_45772 = state_45722;
(statearr_45751_45772[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45773 = state_45722;
state_45722 = G__45773;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41227__auto__ = function(state_45722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41227__auto____1.call(this,state_45722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41227__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41227__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___45753,ch))
})();
var state__41340__auto__ = (function (){var statearr_45752 = f__41339__auto__.call(null);
(statearr_45752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___45753);

return statearr_45752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___45753,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45774_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45774_SHARP_));
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
var base_path_45781 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45781){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_45779 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_45780 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45780;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45779;
}}catch (e45778){if((e45778 instanceof Error)){
var e = e45778;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45781], null));
} else {
var e = e45778;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_45781))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45782){
var map__45789 = p__45782;
var map__45789__$1 = ((((!((map__45789 == null)))?((((map__45789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45789):map__45789);
var opts = map__45789__$1;
var build_id = cljs.core.get.call(null,map__45789__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45789,map__45789__$1,opts,build_id){
return (function (p__45791){
var vec__45792 = p__45791;
var map__45793 = cljs.core.nth.call(null,vec__45792,(0),null);
var map__45793__$1 = ((((!((map__45793 == null)))?((((map__45793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45793):map__45793);
var msg = map__45793__$1;
var msg_name = cljs.core.get.call(null,map__45793__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45792,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45792,map__45793,map__45793__$1,msg,msg_name,_,map__45789,map__45789__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45792,map__45793,map__45793__$1,msg,msg_name,_,map__45789,map__45789__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45789,map__45789__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45799){
var vec__45800 = p__45799;
var map__45801 = cljs.core.nth.call(null,vec__45800,(0),null);
var map__45801__$1 = ((((!((map__45801 == null)))?((((map__45801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45801):map__45801);
var msg = map__45801__$1;
var msg_name = cljs.core.get.call(null,map__45801__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45800,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45803){
var map__45813 = p__45803;
var map__45813__$1 = ((((!((map__45813 == null)))?((((map__45813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45813):map__45813);
var on_compile_warning = cljs.core.get.call(null,map__45813__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45813__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45813,map__45813__$1,on_compile_warning,on_compile_fail){
return (function (p__45815){
var vec__45816 = p__45815;
var map__45817 = cljs.core.nth.call(null,vec__45816,(0),null);
var map__45817__$1 = ((((!((map__45817 == null)))?((((map__45817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45817):map__45817);
var msg = map__45817__$1;
var msg_name = cljs.core.get.call(null,map__45817__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45816,(1));
var pred__45819 = cljs.core._EQ_;
var expr__45820 = msg_name;
if(cljs.core.truth_(pred__45819.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45820))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45819.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45820))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45813,map__45813__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__,msg_hist,msg_names,msg){
return (function (state_46036){
var state_val_46037 = (state_46036[(1)]);
if((state_val_46037 === (7))){
var inst_45960 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_45960)){
var statearr_46038_46084 = state_46036__$1;
(statearr_46038_46084[(1)] = (8));

} else {
var statearr_46039_46085 = state_46036__$1;
(statearr_46039_46085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (20))){
var inst_46030 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46040_46086 = state_46036__$1;
(statearr_46040_46086[(2)] = inst_46030);

(statearr_46040_46086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (27))){
var inst_46026 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46041_46087 = state_46036__$1;
(statearr_46041_46087[(2)] = inst_46026);

(statearr_46041_46087[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (1))){
var inst_45953 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_45953)){
var statearr_46042_46088 = state_46036__$1;
(statearr_46042_46088[(1)] = (2));

} else {
var statearr_46043_46089 = state_46036__$1;
(statearr_46043_46089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (24))){
var inst_46028 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46044_46090 = state_46036__$1;
(statearr_46044_46090[(2)] = inst_46028);

(statearr_46044_46090[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (4))){
var inst_46034 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46036__$1,inst_46034);
} else {
if((state_val_46037 === (15))){
var inst_46032 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46045_46091 = state_46036__$1;
(statearr_46045_46091[(2)] = inst_46032);

(statearr_46045_46091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (21))){
var inst_45991 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46046_46092 = state_46036__$1;
(statearr_46046_46092[(2)] = inst_45991);

(statearr_46046_46092[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (31))){
var inst_46015 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_46015)){
var statearr_46047_46093 = state_46036__$1;
(statearr_46047_46093[(1)] = (34));

} else {
var statearr_46048_46094 = state_46036__$1;
(statearr_46048_46094[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (32))){
var inst_46024 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46049_46095 = state_46036__$1;
(statearr_46049_46095[(2)] = inst_46024);

(statearr_46049_46095[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (33))){
var inst_46013 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46050_46096 = state_46036__$1;
(statearr_46050_46096[(2)] = inst_46013);

(statearr_46050_46096[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (13))){
var inst_45974 = figwheel.client.heads_up.clear.call(null);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(16),inst_45974);
} else {
if((state_val_46037 === (22))){
var inst_45995 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45996 = figwheel.client.heads_up.append_message.call(null,inst_45995);
var state_46036__$1 = state_46036;
var statearr_46051_46097 = state_46036__$1;
(statearr_46051_46097[(2)] = inst_45996);

(statearr_46051_46097[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (36))){
var inst_46022 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46052_46098 = state_46036__$1;
(statearr_46052_46098[(2)] = inst_46022);

(statearr_46052_46098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (29))){
var inst_46006 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46053_46099 = state_46036__$1;
(statearr_46053_46099[(2)] = inst_46006);

(statearr_46053_46099[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (6))){
var inst_45955 = (state_46036[(7)]);
var state_46036__$1 = state_46036;
var statearr_46054_46100 = state_46036__$1;
(statearr_46054_46100[(2)] = inst_45955);

(statearr_46054_46100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (28))){
var inst_46002 = (state_46036[(2)]);
var inst_46003 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46004 = figwheel.client.heads_up.display_warning.call(null,inst_46003);
var state_46036__$1 = (function (){var statearr_46055 = state_46036;
(statearr_46055[(8)] = inst_46002);

return statearr_46055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(29),inst_46004);
} else {
if((state_val_46037 === (25))){
var inst_46000 = figwheel.client.heads_up.clear.call(null);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(28),inst_46000);
} else {
if((state_val_46037 === (34))){
var inst_46017 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(37),inst_46017);
} else {
if((state_val_46037 === (17))){
var inst_45982 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46056_46101 = state_46036__$1;
(statearr_46056_46101[(2)] = inst_45982);

(statearr_46056_46101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (3))){
var inst_45972 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_45972)){
var statearr_46057_46102 = state_46036__$1;
(statearr_46057_46102[(1)] = (13));

} else {
var statearr_46058_46103 = state_46036__$1;
(statearr_46058_46103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (12))){
var inst_45968 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46059_46104 = state_46036__$1;
(statearr_46059_46104[(2)] = inst_45968);

(statearr_46059_46104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (2))){
var inst_45955 = (state_46036[(7)]);
var inst_45955__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46036__$1 = (function (){var statearr_46060 = state_46036;
(statearr_46060[(7)] = inst_45955__$1);

return statearr_46060;
})();
if(cljs.core.truth_(inst_45955__$1)){
var statearr_46061_46105 = state_46036__$1;
(statearr_46061_46105[(1)] = (5));

} else {
var statearr_46062_46106 = state_46036__$1;
(statearr_46062_46106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (23))){
var inst_45998 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_45998)){
var statearr_46063_46107 = state_46036__$1;
(statearr_46063_46107[(1)] = (25));

} else {
var statearr_46064_46108 = state_46036__$1;
(statearr_46064_46108[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (35))){
var state_46036__$1 = state_46036;
var statearr_46065_46109 = state_46036__$1;
(statearr_46065_46109[(2)] = null);

(statearr_46065_46109[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (19))){
var inst_45993 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_45993)){
var statearr_46066_46110 = state_46036__$1;
(statearr_46066_46110[(1)] = (22));

} else {
var statearr_46067_46111 = state_46036__$1;
(statearr_46067_46111[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (11))){
var inst_45964 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46068_46112 = state_46036__$1;
(statearr_46068_46112[(2)] = inst_45964);

(statearr_46068_46112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (9))){
var inst_45966 = figwheel.client.heads_up.clear.call(null);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(12),inst_45966);
} else {
if((state_val_46037 === (5))){
var inst_45957 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46036__$1 = state_46036;
var statearr_46069_46113 = state_46036__$1;
(statearr_46069_46113[(2)] = inst_45957);

(statearr_46069_46113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (14))){
var inst_45984 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_45984)){
var statearr_46070_46114 = state_46036__$1;
(statearr_46070_46114[(1)] = (18));

} else {
var statearr_46071_46115 = state_46036__$1;
(statearr_46071_46115[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (26))){
var inst_46008 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46036__$1 = state_46036;
if(cljs.core.truth_(inst_46008)){
var statearr_46072_46116 = state_46036__$1;
(statearr_46072_46116[(1)] = (30));

} else {
var statearr_46073_46117 = state_46036__$1;
(statearr_46073_46117[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (16))){
var inst_45976 = (state_46036[(2)]);
var inst_45977 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45978 = figwheel.client.format_messages.call(null,inst_45977);
var inst_45979 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45980 = figwheel.client.heads_up.display_error.call(null,inst_45978,inst_45979);
var state_46036__$1 = (function (){var statearr_46074 = state_46036;
(statearr_46074[(9)] = inst_45976);

return statearr_46074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(17),inst_45980);
} else {
if((state_val_46037 === (30))){
var inst_46010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46011 = figwheel.client.heads_up.display_warning.call(null,inst_46010);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(33),inst_46011);
} else {
if((state_val_46037 === (10))){
var inst_45970 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46075_46118 = state_46036__$1;
(statearr_46075_46118[(2)] = inst_45970);

(statearr_46075_46118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (18))){
var inst_45986 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45987 = figwheel.client.format_messages.call(null,inst_45986);
var inst_45988 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45989 = figwheel.client.heads_up.display_error.call(null,inst_45987,inst_45988);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(21),inst_45989);
} else {
if((state_val_46037 === (37))){
var inst_46019 = (state_46036[(2)]);
var state_46036__$1 = state_46036;
var statearr_46076_46119 = state_46036__$1;
(statearr_46076_46119[(2)] = inst_46019);

(statearr_46076_46119[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46037 === (8))){
var inst_45962 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46036__$1 = state_46036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46036__$1,(11),inst_45962);
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
});})(c__41338__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__41226__auto__,c__41338__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto____0 = (function (){
var statearr_46080 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46080[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto__);

(statearr_46080[(1)] = (1));

return statearr_46080;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto____1 = (function (state_46036){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_46036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e46081){if((e46081 instanceof Object)){
var ex__41230__auto__ = e46081;
var statearr_46082_46120 = state_46036;
(statearr_46082_46120[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46121 = state_46036;
state_46036 = G__46121;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto__ = function(state_46036){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto____1.call(this,state_46036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__,msg_hist,msg_names,msg))
})();
var state__41340__auto__ = (function (){var statearr_46083 = f__41339__auto__.call(null);
(statearr_46083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_46083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__,msg_hist,msg_names,msg))
);

return c__41338__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41338__auto___46184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto___46184,ch){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto___46184,ch){
return (function (state_46167){
var state_val_46168 = (state_46167[(1)]);
if((state_val_46168 === (1))){
var state_46167__$1 = state_46167;
var statearr_46169_46185 = state_46167__$1;
(statearr_46169_46185[(2)] = null);

(statearr_46169_46185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (2))){
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46167__$1,(4),ch);
} else {
if((state_val_46168 === (3))){
var inst_46165 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46167__$1,inst_46165);
} else {
if((state_val_46168 === (4))){
var inst_46155 = (state_46167[(7)]);
var inst_46155__$1 = (state_46167[(2)]);
var state_46167__$1 = (function (){var statearr_46170 = state_46167;
(statearr_46170[(7)] = inst_46155__$1);

return statearr_46170;
})();
if(cljs.core.truth_(inst_46155__$1)){
var statearr_46171_46186 = state_46167__$1;
(statearr_46171_46186[(1)] = (5));

} else {
var statearr_46172_46187 = state_46167__$1;
(statearr_46172_46187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (5))){
var inst_46155 = (state_46167[(7)]);
var inst_46157 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46155);
var state_46167__$1 = state_46167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46167__$1,(8),inst_46157);
} else {
if((state_val_46168 === (6))){
var state_46167__$1 = state_46167;
var statearr_46173_46188 = state_46167__$1;
(statearr_46173_46188[(2)] = null);

(statearr_46173_46188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (7))){
var inst_46163 = (state_46167[(2)]);
var state_46167__$1 = state_46167;
var statearr_46174_46189 = state_46167__$1;
(statearr_46174_46189[(2)] = inst_46163);

(statearr_46174_46189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46168 === (8))){
var inst_46159 = (state_46167[(2)]);
var state_46167__$1 = (function (){var statearr_46175 = state_46167;
(statearr_46175[(8)] = inst_46159);

return statearr_46175;
})();
var statearr_46176_46190 = state_46167__$1;
(statearr_46176_46190[(2)] = null);

(statearr_46176_46190[(1)] = (2));


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
});})(c__41338__auto___46184,ch))
;
return ((function (switch__41226__auto__,c__41338__auto___46184,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__41227__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41227__auto____0 = (function (){
var statearr_46180 = [null,null,null,null,null,null,null,null,null];
(statearr_46180[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41227__auto__);

(statearr_46180[(1)] = (1));

return statearr_46180;
});
var figwheel$client$heads_up_plugin_$_state_machine__41227__auto____1 = (function (state_46167){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_46167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e46181){if((e46181 instanceof Object)){
var ex__41230__auto__ = e46181;
var statearr_46182_46191 = state_46167;
(statearr_46182_46191[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46192 = state_46167;
state_46167 = G__46192;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41227__auto__ = function(state_46167){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41227__auto____1.call(this,state_46167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41227__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41227__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto___46184,ch))
})();
var state__41340__auto__ = (function (){var statearr_46183 = f__41339__auto__.call(null);
(statearr_46183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto___46184);

return statearr_46183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto___46184,ch))
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
var c__41338__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41338__auto__){
return (function (){
var f__41339__auto__ = (function (){var switch__41226__auto__ = ((function (c__41338__auto__){
return (function (state_46213){
var state_val_46214 = (state_46213[(1)]);
if((state_val_46214 === (1))){
var inst_46208 = cljs.core.async.timeout.call(null,(3000));
var state_46213__$1 = state_46213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46213__$1,(2),inst_46208);
} else {
if((state_val_46214 === (2))){
var inst_46210 = (state_46213[(2)]);
var inst_46211 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46213__$1 = (function (){var statearr_46215 = state_46213;
(statearr_46215[(7)] = inst_46210);

return statearr_46215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46213__$1,inst_46211);
} else {
return null;
}
}
});})(c__41338__auto__))
;
return ((function (switch__41226__auto__,c__41338__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41227__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41227__auto____0 = (function (){
var statearr_46219 = [null,null,null,null,null,null,null,null];
(statearr_46219[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41227__auto__);

(statearr_46219[(1)] = (1));

return statearr_46219;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41227__auto____1 = (function (state_46213){
while(true){
var ret_value__41228__auto__ = (function (){try{while(true){
var result__41229__auto__ = switch__41226__auto__.call(null,state_46213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41229__auto__;
}
break;
}
}catch (e46220){if((e46220 instanceof Object)){
var ex__41230__auto__ = e46220;
var statearr_46221_46223 = state_46213;
(statearr_46221_46223[(5)] = ex__41230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46224 = state_46213;
state_46213 = G__46224;
continue;
} else {
return ret_value__41228__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41227__auto__ = function(state_46213){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41227__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41227__auto____1.call(this,state_46213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41227__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41227__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41227__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41227__auto__;
})()
;})(switch__41226__auto__,c__41338__auto__))
})();
var state__41340__auto__ = (function (){var statearr_46222 = f__41339__auto__.call(null);
(statearr_46222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41338__auto__);

return statearr_46222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41340__auto__);
});})(c__41338__auto__))
);

return c__41338__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46225){
var map__46232 = p__46225;
var map__46232__$1 = ((((!((map__46232 == null)))?((((map__46232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46232):map__46232);
var ed = map__46232__$1;
var formatted_exception = cljs.core.get.call(null,map__46232__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46232__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46232__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46234_46238 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46235_46239 = null;
var count__46236_46240 = (0);
var i__46237_46241 = (0);
while(true){
if((i__46237_46241 < count__46236_46240)){
var msg_46242 = cljs.core._nth.call(null,chunk__46235_46239,i__46237_46241);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46242);

var G__46243 = seq__46234_46238;
var G__46244 = chunk__46235_46239;
var G__46245 = count__46236_46240;
var G__46246 = (i__46237_46241 + (1));
seq__46234_46238 = G__46243;
chunk__46235_46239 = G__46244;
count__46236_46240 = G__46245;
i__46237_46241 = G__46246;
continue;
} else {
var temp__4657__auto___46247 = cljs.core.seq.call(null,seq__46234_46238);
if(temp__4657__auto___46247){
var seq__46234_46248__$1 = temp__4657__auto___46247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46234_46248__$1)){
var c__38513__auto___46249 = cljs.core.chunk_first.call(null,seq__46234_46248__$1);
var G__46250 = cljs.core.chunk_rest.call(null,seq__46234_46248__$1);
var G__46251 = c__38513__auto___46249;
var G__46252 = cljs.core.count.call(null,c__38513__auto___46249);
var G__46253 = (0);
seq__46234_46238 = G__46250;
chunk__46235_46239 = G__46251;
count__46236_46240 = G__46252;
i__46237_46241 = G__46253;
continue;
} else {
var msg_46254 = cljs.core.first.call(null,seq__46234_46248__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46254);

var G__46255 = cljs.core.next.call(null,seq__46234_46248__$1);
var G__46256 = null;
var G__46257 = (0);
var G__46258 = (0);
seq__46234_46238 = G__46255;
chunk__46235_46239 = G__46256;
count__46236_46240 = G__46257;
i__46237_46241 = G__46258;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46259){
var map__46262 = p__46259;
var map__46262__$1 = ((((!((map__46262 == null)))?((((map__46262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46262):map__46262);
var w = map__46262__$1;
var message = cljs.core.get.call(null,map__46262__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__37690__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__37690__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__37690__auto__;
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
var seq__46270 = cljs.core.seq.call(null,plugins);
var chunk__46271 = null;
var count__46272 = (0);
var i__46273 = (0);
while(true){
if((i__46273 < count__46272)){
var vec__46274 = cljs.core._nth.call(null,chunk__46271,i__46273);
var k = cljs.core.nth.call(null,vec__46274,(0),null);
var plugin = cljs.core.nth.call(null,vec__46274,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46276 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46270,chunk__46271,count__46272,i__46273,pl_46276,vec__46274,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46276.call(null,msg_hist);
});})(seq__46270,chunk__46271,count__46272,i__46273,pl_46276,vec__46274,k,plugin))
);
} else {
}

var G__46277 = seq__46270;
var G__46278 = chunk__46271;
var G__46279 = count__46272;
var G__46280 = (i__46273 + (1));
seq__46270 = G__46277;
chunk__46271 = G__46278;
count__46272 = G__46279;
i__46273 = G__46280;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46270);
if(temp__4657__auto__){
var seq__46270__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46270__$1)){
var c__38513__auto__ = cljs.core.chunk_first.call(null,seq__46270__$1);
var G__46281 = cljs.core.chunk_rest.call(null,seq__46270__$1);
var G__46282 = c__38513__auto__;
var G__46283 = cljs.core.count.call(null,c__38513__auto__);
var G__46284 = (0);
seq__46270 = G__46281;
chunk__46271 = G__46282;
count__46272 = G__46283;
i__46273 = G__46284;
continue;
} else {
var vec__46275 = cljs.core.first.call(null,seq__46270__$1);
var k = cljs.core.nth.call(null,vec__46275,(0),null);
var plugin = cljs.core.nth.call(null,vec__46275,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46285 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46270,chunk__46271,count__46272,i__46273,pl_46285,vec__46275,k,plugin,seq__46270__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46285.call(null,msg_hist);
});})(seq__46270,chunk__46271,count__46272,i__46273,pl_46285,vec__46275,k,plugin,seq__46270__$1,temp__4657__auto__))
);
} else {
}

var G__46286 = cljs.core.next.call(null,seq__46270__$1);
var G__46287 = null;
var G__46288 = (0);
var G__46289 = (0);
seq__46270 = G__46286;
chunk__46271 = G__46287;
count__46272 = G__46288;
i__46273 = G__46289;
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
var args46290 = [];
var len__38772__auto___46293 = arguments.length;
var i__38773__auto___46294 = (0);
while(true){
if((i__38773__auto___46294 < len__38772__auto___46293)){
args46290.push((arguments[i__38773__auto___46294]));

var G__46295 = (i__38773__auto___46294 + (1));
i__38773__auto___46294 = G__46295;
continue;
} else {
}
break;
}

var G__46292 = args46290.length;
switch (G__46292) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46290.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
var args__38779__auto__ = [];
var len__38772__auto___46301 = arguments.length;
var i__38773__auto___46302 = (0);
while(true){
if((i__38773__auto___46302 < len__38772__auto___46301)){
args__38779__auto__.push((arguments[i__38773__auto___46302]));

var G__46303 = (i__38773__auto___46302 + (1));
i__38773__auto___46302 = G__46303;
continue;
} else {
}
break;
}

var argseq__38780__auto__ = ((((0) < args__38779__auto__.length))?(new cljs.core.IndexedSeq(args__38779__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38780__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46298){
var map__46299 = p__46298;
var map__46299__$1 = ((((!((map__46299 == null)))?((((map__46299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46299):map__46299);
var opts = map__46299__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46297){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46297));
});

//# sourceMappingURL=client.js.map?rel=1462424042460