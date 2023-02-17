goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19551,res){
var map__19552 = p__19551;
var map__19552__$1 = cljs.core.__destructure_map(map__19552);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19552__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19552__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19559 = res;
var G__19559__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19559,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19559);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19559__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19559__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19576 = arguments.length;
switch (G__19576) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19577,msg,handlers,timeout_after_ms){
var map__19578 = p__19577;
var map__19578__$1 = cljs.core.__destructure_map(map__19578);
var runtime = map__19578__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19578__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19697 = arguments.length;
var i__5770__auto___19698 = (0);
while(true){
if((i__5770__auto___19698 < len__5769__auto___19697)){
args__5775__auto__.push((arguments[i__5770__auto___19698]));

var G__19699 = (i__5770__auto___19698 + (1));
i__5770__auto___19698 = G__19699;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19583,ev,args){
var map__19584 = p__19583;
var map__19584__$1 = cljs.core.__destructure_map(map__19584);
var runtime = map__19584__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19584__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19585 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19588 = null;
var count__19589 = (0);
var i__19590 = (0);
while(true){
if((i__19590 < count__19589)){
var ext = chunk__19588.cljs$core$IIndexed$_nth$arity$2(null,i__19590);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19700 = seq__19585;
var G__19701 = chunk__19588;
var G__19702 = count__19589;
var G__19703 = (i__19590 + (1));
seq__19585 = G__19700;
chunk__19588 = G__19701;
count__19589 = G__19702;
i__19590 = G__19703;
continue;
} else {
var G__19704 = seq__19585;
var G__19705 = chunk__19588;
var G__19706 = count__19589;
var G__19707 = (i__19590 + (1));
seq__19585 = G__19704;
chunk__19588 = G__19705;
count__19589 = G__19706;
i__19590 = G__19707;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19585);
if(temp__5804__auto__){
var seq__19585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19585__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19585__$1);
var G__19710 = cljs.core.chunk_rest(seq__19585__$1);
var G__19711 = c__5568__auto__;
var G__19712 = cljs.core.count(c__5568__auto__);
var G__19713 = (0);
seq__19585 = G__19710;
chunk__19588 = G__19711;
count__19589 = G__19712;
i__19590 = G__19713;
continue;
} else {
var ext = cljs.core.first(seq__19585__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19714 = cljs.core.next(seq__19585__$1);
var G__19715 = null;
var G__19716 = (0);
var G__19717 = (0);
seq__19585 = G__19714;
chunk__19588 = G__19715;
count__19589 = G__19716;
i__19590 = G__19717;
continue;
} else {
var G__19718 = cljs.core.next(seq__19585__$1);
var G__19719 = null;
var G__19720 = (0);
var G__19721 = (0);
seq__19585 = G__19718;
chunk__19588 = G__19719;
count__19589 = G__19720;
i__19590 = G__19721;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19579){
var G__19580 = cljs.core.first(seq19579);
var seq19579__$1 = cljs.core.next(seq19579);
var G__19581 = cljs.core.first(seq19579__$1);
var seq19579__$2 = cljs.core.next(seq19579__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19580,G__19581,seq19579__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19624,p__19625){
var map__19626 = p__19624;
var map__19626__$1 = cljs.core.__destructure_map(map__19626);
var runtime = map__19626__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19626__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19627 = p__19625;
var map__19627__$1 = cljs.core.__destructure_map(map__19627);
var msg = map__19627__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19627__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19628 = cljs.core.deref(state_ref);
var map__19628__$1 = cljs.core.__destructure_map(map__19628);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19628__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19628__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19633){
var map__19634 = p__19633;
var map__19634__$1 = cljs.core.__destructure_map(map__19634);
var runtime = map__19634__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19634__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19643,msg){
var map__19644 = p__19643;
var map__19644__$1 = cljs.core.__destructure_map(map__19644);
var runtime = map__19644__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19644__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19645,key,p__19646){
var map__19647 = p__19645;
var map__19647__$1 = cljs.core.__destructure_map(map__19647);
var state = map__19647__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19647__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19648 = p__19646;
var map__19648__$1 = cljs.core.__destructure_map(map__19648);
var spec = map__19648__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19648__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19652,key,spec){
var map__19653 = p__19652;
var map__19653__$1 = cljs.core.__destructure_map(map__19653);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19653__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19654_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19654_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19655_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19655_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19656_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19656_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19657_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19657_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19658_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19658_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19662,key){
var map__19663 = p__19662;
var map__19663__$1 = cljs.core.__destructure_map(map__19663);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19663__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19664,msg){
var map__19665 = p__19664;
var map__19665__$1 = cljs.core.__destructure_map(map__19665);
var runtime = map__19665__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19665__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19667,p__19668){
var map__19669 = p__19667;
var map__19669__$1 = cljs.core.__destructure_map(map__19669);
var runtime = map__19669__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19670 = p__19668;
var map__19670__$1 = cljs.core.__destructure_map(map__19670);
var msg = map__19670__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19670__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19670__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19675 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19677 = null;
var count__19678 = (0);
var i__19679 = (0);
while(true){
if((i__19679 < count__19678)){
var map__19684 = chunk__19677.cljs$core$IIndexed$_nth$arity$2(null,i__19679);
var map__19684__$1 = cljs.core.__destructure_map(map__19684);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19684__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19745 = seq__19675;
var G__19746 = chunk__19677;
var G__19747 = count__19678;
var G__19748 = (i__19679 + (1));
seq__19675 = G__19745;
chunk__19677 = G__19746;
count__19678 = G__19747;
i__19679 = G__19748;
continue;
} else {
var G__19749 = seq__19675;
var G__19750 = chunk__19677;
var G__19751 = count__19678;
var G__19752 = (i__19679 + (1));
seq__19675 = G__19749;
chunk__19677 = G__19750;
count__19678 = G__19751;
i__19679 = G__19752;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19675);
if(temp__5804__auto__){
var seq__19675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19675__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19675__$1);
var G__19753 = cljs.core.chunk_rest(seq__19675__$1);
var G__19754 = c__5568__auto__;
var G__19755 = cljs.core.count(c__5568__auto__);
var G__19756 = (0);
seq__19675 = G__19753;
chunk__19677 = G__19754;
count__19678 = G__19755;
i__19679 = G__19756;
continue;
} else {
var map__19685 = cljs.core.first(seq__19675__$1);
var map__19685__$1 = cljs.core.__destructure_map(map__19685);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19685__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19757 = cljs.core.next(seq__19675__$1);
var G__19758 = null;
var G__19759 = (0);
var G__19760 = (0);
seq__19675 = G__19757;
chunk__19677 = G__19758;
count__19678 = G__19759;
i__19679 = G__19760;
continue;
} else {
var G__19761 = cljs.core.next(seq__19675__$1);
var G__19762 = null;
var G__19763 = (0);
var G__19764 = (0);
seq__19675 = G__19761;
chunk__19677 = G__19762;
count__19678 = G__19763;
i__19679 = G__19764;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
