goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20804 = arguments.length;
var i__5770__auto___20805 = (0);
while(true){
if((i__5770__auto___20805 < len__5769__auto___20804)){
args__5775__auto__.push((arguments[i__5770__auto___20805]));

var G__20806 = (i__5770__auto___20805 + (1));
i__5770__auto___20805 = G__20806;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20514){
var G__20515 = cljs.core.first(seq20514);
var seq20514__$1 = cljs.core.next(seq20514);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20515,seq20514__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20519 = cljs.core.seq(sources);
var chunk__20520 = null;
var count__20521 = (0);
var i__20522 = (0);
while(true){
if((i__20522 < count__20521)){
var map__20532 = chunk__20520.cljs$core$IIndexed$_nth$arity$2(null,i__20522);
var map__20532__$1 = cljs.core.__destructure_map(map__20532);
var src = map__20532__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20533){var e_20807 = e20533;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20807);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20807.message)].join('')));
}

var G__20808 = seq__20519;
var G__20809 = chunk__20520;
var G__20810 = count__20521;
var G__20811 = (i__20522 + (1));
seq__20519 = G__20808;
chunk__20520 = G__20809;
count__20521 = G__20810;
i__20522 = G__20811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20519);
if(temp__5804__auto__){
var seq__20519__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20519__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20519__$1);
var G__20812 = cljs.core.chunk_rest(seq__20519__$1);
var G__20813 = c__5568__auto__;
var G__20814 = cljs.core.count(c__5568__auto__);
var G__20815 = (0);
seq__20519 = G__20812;
chunk__20520 = G__20813;
count__20521 = G__20814;
i__20522 = G__20815;
continue;
} else {
var map__20536 = cljs.core.first(seq__20519__$1);
var map__20536__$1 = cljs.core.__destructure_map(map__20536);
var src = map__20536__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20537){var e_20816 = e20537;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20816);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20816.message)].join('')));
}

var G__20817 = cljs.core.next(seq__20519__$1);
var G__20818 = null;
var G__20819 = (0);
var G__20820 = (0);
seq__20519 = G__20817;
chunk__20520 = G__20818;
count__20521 = G__20819;
i__20522 = G__20820;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20538 = cljs.core.seq(js_requires);
var chunk__20539 = null;
var count__20540 = (0);
var i__20541 = (0);
while(true){
if((i__20541 < count__20540)){
var js_ns = chunk__20539.cljs$core$IIndexed$_nth$arity$2(null,i__20541);
var require_str_20821 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20821);


var G__20822 = seq__20538;
var G__20823 = chunk__20539;
var G__20824 = count__20540;
var G__20825 = (i__20541 + (1));
seq__20538 = G__20822;
chunk__20539 = G__20823;
count__20540 = G__20824;
i__20541 = G__20825;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20538);
if(temp__5804__auto__){
var seq__20538__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20538__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20538__$1);
var G__20826 = cljs.core.chunk_rest(seq__20538__$1);
var G__20827 = c__5568__auto__;
var G__20828 = cljs.core.count(c__5568__auto__);
var G__20829 = (0);
seq__20538 = G__20826;
chunk__20539 = G__20827;
count__20540 = G__20828;
i__20541 = G__20829;
continue;
} else {
var js_ns = cljs.core.first(seq__20538__$1);
var require_str_20830 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20830);


var G__20831 = cljs.core.next(seq__20538__$1);
var G__20832 = null;
var G__20833 = (0);
var G__20834 = (0);
seq__20538 = G__20831;
chunk__20539 = G__20832;
count__20540 = G__20833;
i__20541 = G__20834;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20543){
var map__20544 = p__20543;
var map__20544__$1 = cljs.core.__destructure_map(map__20544);
var msg = map__20544__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20545(s__20546){
return (new cljs.core.LazySeq(null,(function (){
var s__20546__$1 = s__20546;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20546__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20551 = cljs.core.first(xs__6360__auto__);
var map__20551__$1 = cljs.core.__destructure_map(map__20551);
var src = map__20551__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20546__$1,map__20551,map__20551__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20544,map__20544__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20545_$_iter__20547(s__20548){
return (new cljs.core.LazySeq(null,((function (s__20546__$1,map__20551,map__20551__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20544,map__20544__$1,msg,info,reload_info){
return (function (){
var s__20548__$1 = s__20548;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20548__$1);
if(temp__5804__auto____$1){
var s__20548__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20548__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20548__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20550 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20549 = (0);
while(true){
if((i__20549 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20549);
cljs.core.chunk_append(b__20550,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20835 = (i__20549 + (1));
i__20549 = G__20835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20550),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20545_$_iter__20547(cljs.core.chunk_rest(s__20548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20550),null);
}
} else {
var warning = cljs.core.first(s__20548__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20545_$_iter__20547(cljs.core.rest(s__20548__$2)));
}
} else {
return null;
}
break;
}
});})(s__20546__$1,map__20551,map__20551__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20544,map__20544__$1,msg,info,reload_info))
,null,null));
});})(s__20546__$1,map__20551,map__20551__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20544,map__20544__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20545(cljs.core.rest(s__20546__$1)));
} else {
var G__20836 = cljs.core.rest(s__20546__$1);
s__20546__$1 = G__20836;
continue;
}
} else {
var G__20837 = cljs.core.rest(s__20546__$1);
s__20546__$1 = G__20837;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20552_20838 = cljs.core.seq(warnings);
var chunk__20553_20839 = null;
var count__20554_20840 = (0);
var i__20555_20841 = (0);
while(true){
if((i__20555_20841 < count__20554_20840)){
var map__20558_20842 = chunk__20553_20839.cljs$core$IIndexed$_nth$arity$2(null,i__20555_20841);
var map__20558_20843__$1 = cljs.core.__destructure_map(map__20558_20842);
var w_20844 = map__20558_20843__$1;
var msg_20845__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20558_20843__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20558_20843__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20558_20843__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20558_20843__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20848)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20846),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20847),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20845__$1)].join(''));


var G__20849 = seq__20552_20838;
var G__20850 = chunk__20553_20839;
var G__20851 = count__20554_20840;
var G__20852 = (i__20555_20841 + (1));
seq__20552_20838 = G__20849;
chunk__20553_20839 = G__20850;
count__20554_20840 = G__20851;
i__20555_20841 = G__20852;
continue;
} else {
var temp__5804__auto___20853 = cljs.core.seq(seq__20552_20838);
if(temp__5804__auto___20853){
var seq__20552_20854__$1 = temp__5804__auto___20853;
if(cljs.core.chunked_seq_QMARK_(seq__20552_20854__$1)){
var c__5568__auto___20855 = cljs.core.chunk_first(seq__20552_20854__$1);
var G__20856 = cljs.core.chunk_rest(seq__20552_20854__$1);
var G__20857 = c__5568__auto___20855;
var G__20858 = cljs.core.count(c__5568__auto___20855);
var G__20859 = (0);
seq__20552_20838 = G__20856;
chunk__20553_20839 = G__20857;
count__20554_20840 = G__20858;
i__20555_20841 = G__20859;
continue;
} else {
var map__20559_20860 = cljs.core.first(seq__20552_20854__$1);
var map__20559_20861__$1 = cljs.core.__destructure_map(map__20559_20860);
var w_20862 = map__20559_20861__$1;
var msg_20863__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559_20861__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559_20861__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559_20861__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20559_20861__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20866)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20864),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20865),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20863__$1)].join(''));


var G__20867 = cljs.core.next(seq__20552_20854__$1);
var G__20868 = null;
var G__20869 = (0);
var G__20870 = (0);
seq__20552_20838 = G__20867;
chunk__20553_20839 = G__20868;
count__20554_20840 = G__20869;
i__20555_20841 = G__20870;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20542_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20542_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20560){
var map__20561 = p__20560;
var map__20561__$1 = cljs.core.__destructure_map(map__20561);
var msg = map__20561__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20561__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20561__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20562 = cljs.core.seq(updates);
var chunk__20564 = null;
var count__20565 = (0);
var i__20566 = (0);
while(true){
if((i__20566 < count__20565)){
var path = chunk__20564.cljs$core$IIndexed$_nth$arity$2(null,i__20566);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20676_20871 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20680_20872 = null;
var count__20681_20873 = (0);
var i__20682_20874 = (0);
while(true){
if((i__20682_20874 < count__20681_20873)){
var node_20875 = chunk__20680_20872.cljs$core$IIndexed$_nth$arity$2(null,i__20682_20874);
if(cljs.core.not(node_20875.shadow$old)){
var path_match_20876 = shadow.cljs.devtools.client.browser.match_paths(node_20875.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20876)){
var new_link_20877 = (function (){var G__20708 = node_20875.cloneNode(true);
G__20708.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20876),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20708;
})();
(node_20875.shadow$old = true);

(new_link_20877.onload = ((function (seq__20676_20871,chunk__20680_20872,count__20681_20873,i__20682_20874,seq__20562,chunk__20564,count__20565,i__20566,new_link_20877,path_match_20876,node_20875,path,map__20561,map__20561__$1,msg,updates,reload_info){
return (function (e){
var seq__20709_20878 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20711_20879 = null;
var count__20712_20880 = (0);
var i__20713_20881 = (0);
while(true){
if((i__20713_20881 < count__20712_20880)){
var map__20717_20882 = chunk__20711_20879.cljs$core$IIndexed$_nth$arity$2(null,i__20713_20881);
var map__20717_20883__$1 = cljs.core.__destructure_map(map__20717_20882);
var task_20884 = map__20717_20883__$1;
var fn_str_20885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20717_20883__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20717_20883__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20887 = goog.getObjectByName(fn_str_20885,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20886)].join(''));

(fn_obj_20887.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20887.cljs$core$IFn$_invoke$arity$2(path,new_link_20877) : fn_obj_20887.call(null,path,new_link_20877));


var G__20888 = seq__20709_20878;
var G__20889 = chunk__20711_20879;
var G__20890 = count__20712_20880;
var G__20891 = (i__20713_20881 + (1));
seq__20709_20878 = G__20888;
chunk__20711_20879 = G__20889;
count__20712_20880 = G__20890;
i__20713_20881 = G__20891;
continue;
} else {
var temp__5804__auto___20892 = cljs.core.seq(seq__20709_20878);
if(temp__5804__auto___20892){
var seq__20709_20893__$1 = temp__5804__auto___20892;
if(cljs.core.chunked_seq_QMARK_(seq__20709_20893__$1)){
var c__5568__auto___20894 = cljs.core.chunk_first(seq__20709_20893__$1);
var G__20895 = cljs.core.chunk_rest(seq__20709_20893__$1);
var G__20896 = c__5568__auto___20894;
var G__20897 = cljs.core.count(c__5568__auto___20894);
var G__20898 = (0);
seq__20709_20878 = G__20895;
chunk__20711_20879 = G__20896;
count__20712_20880 = G__20897;
i__20713_20881 = G__20898;
continue;
} else {
var map__20718_20899 = cljs.core.first(seq__20709_20893__$1);
var map__20718_20900__$1 = cljs.core.__destructure_map(map__20718_20899);
var task_20901 = map__20718_20900__$1;
var fn_str_20902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718_20900__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20718_20900__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20904 = goog.getObjectByName(fn_str_20902,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20903)].join(''));

(fn_obj_20904.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20904.cljs$core$IFn$_invoke$arity$2(path,new_link_20877) : fn_obj_20904.call(null,path,new_link_20877));


var G__20905 = cljs.core.next(seq__20709_20893__$1);
var G__20906 = null;
var G__20907 = (0);
var G__20908 = (0);
seq__20709_20878 = G__20905;
chunk__20711_20879 = G__20906;
count__20712_20880 = G__20907;
i__20713_20881 = G__20908;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20875);
});})(seq__20676_20871,chunk__20680_20872,count__20681_20873,i__20682_20874,seq__20562,chunk__20564,count__20565,i__20566,new_link_20877,path_match_20876,node_20875,path,map__20561,map__20561__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20876], 0));

goog.dom.insertSiblingAfter(new_link_20877,node_20875);


var G__20909 = seq__20676_20871;
var G__20910 = chunk__20680_20872;
var G__20911 = count__20681_20873;
var G__20912 = (i__20682_20874 + (1));
seq__20676_20871 = G__20909;
chunk__20680_20872 = G__20910;
count__20681_20873 = G__20911;
i__20682_20874 = G__20912;
continue;
} else {
var G__20913 = seq__20676_20871;
var G__20914 = chunk__20680_20872;
var G__20915 = count__20681_20873;
var G__20916 = (i__20682_20874 + (1));
seq__20676_20871 = G__20913;
chunk__20680_20872 = G__20914;
count__20681_20873 = G__20915;
i__20682_20874 = G__20916;
continue;
}
} else {
var G__20917 = seq__20676_20871;
var G__20918 = chunk__20680_20872;
var G__20919 = count__20681_20873;
var G__20920 = (i__20682_20874 + (1));
seq__20676_20871 = G__20917;
chunk__20680_20872 = G__20918;
count__20681_20873 = G__20919;
i__20682_20874 = G__20920;
continue;
}
} else {
var temp__5804__auto___20921 = cljs.core.seq(seq__20676_20871);
if(temp__5804__auto___20921){
var seq__20676_20922__$1 = temp__5804__auto___20921;
if(cljs.core.chunked_seq_QMARK_(seq__20676_20922__$1)){
var c__5568__auto___20923 = cljs.core.chunk_first(seq__20676_20922__$1);
var G__20924 = cljs.core.chunk_rest(seq__20676_20922__$1);
var G__20925 = c__5568__auto___20923;
var G__20926 = cljs.core.count(c__5568__auto___20923);
var G__20927 = (0);
seq__20676_20871 = G__20924;
chunk__20680_20872 = G__20925;
count__20681_20873 = G__20926;
i__20682_20874 = G__20927;
continue;
} else {
var node_20928 = cljs.core.first(seq__20676_20922__$1);
if(cljs.core.not(node_20928.shadow$old)){
var path_match_20929 = shadow.cljs.devtools.client.browser.match_paths(node_20928.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20929)){
var new_link_20930 = (function (){var G__20719 = node_20928.cloneNode(true);
G__20719.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20929),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20719;
})();
(node_20928.shadow$old = true);

(new_link_20930.onload = ((function (seq__20676_20871,chunk__20680_20872,count__20681_20873,i__20682_20874,seq__20562,chunk__20564,count__20565,i__20566,new_link_20930,path_match_20929,node_20928,seq__20676_20922__$1,temp__5804__auto___20921,path,map__20561,map__20561__$1,msg,updates,reload_info){
return (function (e){
var seq__20720_20931 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20722_20932 = null;
var count__20723_20933 = (0);
var i__20724_20934 = (0);
while(true){
if((i__20724_20934 < count__20723_20933)){
var map__20728_20935 = chunk__20722_20932.cljs$core$IIndexed$_nth$arity$2(null,i__20724_20934);
var map__20728_20936__$1 = cljs.core.__destructure_map(map__20728_20935);
var task_20937 = map__20728_20936__$1;
var fn_str_20938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20728_20936__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20728_20936__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20940 = goog.getObjectByName(fn_str_20938,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20939)].join(''));

(fn_obj_20940.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20940.cljs$core$IFn$_invoke$arity$2(path,new_link_20930) : fn_obj_20940.call(null,path,new_link_20930));


var G__20941 = seq__20720_20931;
var G__20942 = chunk__20722_20932;
var G__20943 = count__20723_20933;
var G__20944 = (i__20724_20934 + (1));
seq__20720_20931 = G__20941;
chunk__20722_20932 = G__20942;
count__20723_20933 = G__20943;
i__20724_20934 = G__20944;
continue;
} else {
var temp__5804__auto___20945__$1 = cljs.core.seq(seq__20720_20931);
if(temp__5804__auto___20945__$1){
var seq__20720_20946__$1 = temp__5804__auto___20945__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20720_20946__$1)){
var c__5568__auto___20947 = cljs.core.chunk_first(seq__20720_20946__$1);
var G__20948 = cljs.core.chunk_rest(seq__20720_20946__$1);
var G__20949 = c__5568__auto___20947;
var G__20950 = cljs.core.count(c__5568__auto___20947);
var G__20951 = (0);
seq__20720_20931 = G__20948;
chunk__20722_20932 = G__20949;
count__20723_20933 = G__20950;
i__20724_20934 = G__20951;
continue;
} else {
var map__20729_20952 = cljs.core.first(seq__20720_20946__$1);
var map__20729_20953__$1 = cljs.core.__destructure_map(map__20729_20952);
var task_20954 = map__20729_20953__$1;
var fn_str_20955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20729_20953__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20729_20953__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20957 = goog.getObjectByName(fn_str_20955,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20956)].join(''));

(fn_obj_20957.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20957.cljs$core$IFn$_invoke$arity$2(path,new_link_20930) : fn_obj_20957.call(null,path,new_link_20930));


var G__20958 = cljs.core.next(seq__20720_20946__$1);
var G__20959 = null;
var G__20960 = (0);
var G__20961 = (0);
seq__20720_20931 = G__20958;
chunk__20722_20932 = G__20959;
count__20723_20933 = G__20960;
i__20724_20934 = G__20961;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20928);
});})(seq__20676_20871,chunk__20680_20872,count__20681_20873,i__20682_20874,seq__20562,chunk__20564,count__20565,i__20566,new_link_20930,path_match_20929,node_20928,seq__20676_20922__$1,temp__5804__auto___20921,path,map__20561,map__20561__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20929], 0));

goog.dom.insertSiblingAfter(new_link_20930,node_20928);


var G__20962 = cljs.core.next(seq__20676_20922__$1);
var G__20963 = null;
var G__20964 = (0);
var G__20965 = (0);
seq__20676_20871 = G__20962;
chunk__20680_20872 = G__20963;
count__20681_20873 = G__20964;
i__20682_20874 = G__20965;
continue;
} else {
var G__20966 = cljs.core.next(seq__20676_20922__$1);
var G__20967 = null;
var G__20968 = (0);
var G__20969 = (0);
seq__20676_20871 = G__20966;
chunk__20680_20872 = G__20967;
count__20681_20873 = G__20968;
i__20682_20874 = G__20969;
continue;
}
} else {
var G__20970 = cljs.core.next(seq__20676_20922__$1);
var G__20971 = null;
var G__20972 = (0);
var G__20973 = (0);
seq__20676_20871 = G__20970;
chunk__20680_20872 = G__20971;
count__20681_20873 = G__20972;
i__20682_20874 = G__20973;
continue;
}
}
} else {
}
}
break;
}


var G__20974 = seq__20562;
var G__20975 = chunk__20564;
var G__20976 = count__20565;
var G__20977 = (i__20566 + (1));
seq__20562 = G__20974;
chunk__20564 = G__20975;
count__20565 = G__20976;
i__20566 = G__20977;
continue;
} else {
var G__20978 = seq__20562;
var G__20979 = chunk__20564;
var G__20980 = count__20565;
var G__20981 = (i__20566 + (1));
seq__20562 = G__20978;
chunk__20564 = G__20979;
count__20565 = G__20980;
i__20566 = G__20981;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20562);
if(temp__5804__auto__){
var seq__20562__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20562__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20562__$1);
var G__20982 = cljs.core.chunk_rest(seq__20562__$1);
var G__20983 = c__5568__auto__;
var G__20984 = cljs.core.count(c__5568__auto__);
var G__20985 = (0);
seq__20562 = G__20982;
chunk__20564 = G__20983;
count__20565 = G__20984;
i__20566 = G__20985;
continue;
} else {
var path = cljs.core.first(seq__20562__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20730_20986 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20734_20987 = null;
var count__20735_20988 = (0);
var i__20736_20989 = (0);
while(true){
if((i__20736_20989 < count__20735_20988)){
var node_20990 = chunk__20734_20987.cljs$core$IIndexed$_nth$arity$2(null,i__20736_20989);
if(cljs.core.not(node_20990.shadow$old)){
var path_match_20991 = shadow.cljs.devtools.client.browser.match_paths(node_20990.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20991)){
var new_link_20992 = (function (){var G__20762 = node_20990.cloneNode(true);
G__20762.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20991),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20762;
})();
(node_20990.shadow$old = true);

(new_link_20992.onload = ((function (seq__20730_20986,chunk__20734_20987,count__20735_20988,i__20736_20989,seq__20562,chunk__20564,count__20565,i__20566,new_link_20992,path_match_20991,node_20990,path,seq__20562__$1,temp__5804__auto__,map__20561,map__20561__$1,msg,updates,reload_info){
return (function (e){
var seq__20763_20993 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20765_20994 = null;
var count__20766_20995 = (0);
var i__20767_20996 = (0);
while(true){
if((i__20767_20996 < count__20766_20995)){
var map__20771_20997 = chunk__20765_20994.cljs$core$IIndexed$_nth$arity$2(null,i__20767_20996);
var map__20771_20998__$1 = cljs.core.__destructure_map(map__20771_20997);
var task_20999 = map__20771_20998__$1;
var fn_str_21000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20771_20998__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20771_20998__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21002 = goog.getObjectByName(fn_str_21000,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21001)].join(''));

(fn_obj_21002.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21002.cljs$core$IFn$_invoke$arity$2(path,new_link_20992) : fn_obj_21002.call(null,path,new_link_20992));


var G__21003 = seq__20763_20993;
var G__21004 = chunk__20765_20994;
var G__21005 = count__20766_20995;
var G__21006 = (i__20767_20996 + (1));
seq__20763_20993 = G__21003;
chunk__20765_20994 = G__21004;
count__20766_20995 = G__21005;
i__20767_20996 = G__21006;
continue;
} else {
var temp__5804__auto___21007__$1 = cljs.core.seq(seq__20763_20993);
if(temp__5804__auto___21007__$1){
var seq__20763_21008__$1 = temp__5804__auto___21007__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20763_21008__$1)){
var c__5568__auto___21009 = cljs.core.chunk_first(seq__20763_21008__$1);
var G__21010 = cljs.core.chunk_rest(seq__20763_21008__$1);
var G__21011 = c__5568__auto___21009;
var G__21012 = cljs.core.count(c__5568__auto___21009);
var G__21013 = (0);
seq__20763_20993 = G__21010;
chunk__20765_20994 = G__21011;
count__20766_20995 = G__21012;
i__20767_20996 = G__21013;
continue;
} else {
var map__20772_21014 = cljs.core.first(seq__20763_21008__$1);
var map__20772_21015__$1 = cljs.core.__destructure_map(map__20772_21014);
var task_21016 = map__20772_21015__$1;
var fn_str_21017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772_21015__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772_21015__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21019 = goog.getObjectByName(fn_str_21017,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21018)].join(''));

(fn_obj_21019.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21019.cljs$core$IFn$_invoke$arity$2(path,new_link_20992) : fn_obj_21019.call(null,path,new_link_20992));


var G__21020 = cljs.core.next(seq__20763_21008__$1);
var G__21021 = null;
var G__21022 = (0);
var G__21023 = (0);
seq__20763_20993 = G__21020;
chunk__20765_20994 = G__21021;
count__20766_20995 = G__21022;
i__20767_20996 = G__21023;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20990);
});})(seq__20730_20986,chunk__20734_20987,count__20735_20988,i__20736_20989,seq__20562,chunk__20564,count__20565,i__20566,new_link_20992,path_match_20991,node_20990,path,seq__20562__$1,temp__5804__auto__,map__20561,map__20561__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20991], 0));

goog.dom.insertSiblingAfter(new_link_20992,node_20990);


var G__21024 = seq__20730_20986;
var G__21025 = chunk__20734_20987;
var G__21026 = count__20735_20988;
var G__21027 = (i__20736_20989 + (1));
seq__20730_20986 = G__21024;
chunk__20734_20987 = G__21025;
count__20735_20988 = G__21026;
i__20736_20989 = G__21027;
continue;
} else {
var G__21028 = seq__20730_20986;
var G__21029 = chunk__20734_20987;
var G__21030 = count__20735_20988;
var G__21031 = (i__20736_20989 + (1));
seq__20730_20986 = G__21028;
chunk__20734_20987 = G__21029;
count__20735_20988 = G__21030;
i__20736_20989 = G__21031;
continue;
}
} else {
var G__21032 = seq__20730_20986;
var G__21033 = chunk__20734_20987;
var G__21034 = count__20735_20988;
var G__21035 = (i__20736_20989 + (1));
seq__20730_20986 = G__21032;
chunk__20734_20987 = G__21033;
count__20735_20988 = G__21034;
i__20736_20989 = G__21035;
continue;
}
} else {
var temp__5804__auto___21036__$1 = cljs.core.seq(seq__20730_20986);
if(temp__5804__auto___21036__$1){
var seq__20730_21037__$1 = temp__5804__auto___21036__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20730_21037__$1)){
var c__5568__auto___21038 = cljs.core.chunk_first(seq__20730_21037__$1);
var G__21039 = cljs.core.chunk_rest(seq__20730_21037__$1);
var G__21040 = c__5568__auto___21038;
var G__21041 = cljs.core.count(c__5568__auto___21038);
var G__21042 = (0);
seq__20730_20986 = G__21039;
chunk__20734_20987 = G__21040;
count__20735_20988 = G__21041;
i__20736_20989 = G__21042;
continue;
} else {
var node_21043 = cljs.core.first(seq__20730_21037__$1);
if(cljs.core.not(node_21043.shadow$old)){
var path_match_21044 = shadow.cljs.devtools.client.browser.match_paths(node_21043.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21044)){
var new_link_21045 = (function (){var G__20773 = node_21043.cloneNode(true);
G__20773.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21044),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20773;
})();
(node_21043.shadow$old = true);

(new_link_21045.onload = ((function (seq__20730_20986,chunk__20734_20987,count__20735_20988,i__20736_20989,seq__20562,chunk__20564,count__20565,i__20566,new_link_21045,path_match_21044,node_21043,seq__20730_21037__$1,temp__5804__auto___21036__$1,path,seq__20562__$1,temp__5804__auto__,map__20561,map__20561__$1,msg,updates,reload_info){
return (function (e){
var seq__20774_21046 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20776_21047 = null;
var count__20777_21048 = (0);
var i__20778_21049 = (0);
while(true){
if((i__20778_21049 < count__20777_21048)){
var map__20782_21050 = chunk__20776_21047.cljs$core$IIndexed$_nth$arity$2(null,i__20778_21049);
var map__20782_21051__$1 = cljs.core.__destructure_map(map__20782_21050);
var task_21052 = map__20782_21051__$1;
var fn_str_21053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_21051__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_21051__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21055 = goog.getObjectByName(fn_str_21053,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21054)].join(''));

(fn_obj_21055.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21055.cljs$core$IFn$_invoke$arity$2(path,new_link_21045) : fn_obj_21055.call(null,path,new_link_21045));


var G__21056 = seq__20774_21046;
var G__21057 = chunk__20776_21047;
var G__21058 = count__20777_21048;
var G__21059 = (i__20778_21049 + (1));
seq__20774_21046 = G__21056;
chunk__20776_21047 = G__21057;
count__20777_21048 = G__21058;
i__20778_21049 = G__21059;
continue;
} else {
var temp__5804__auto___21060__$2 = cljs.core.seq(seq__20774_21046);
if(temp__5804__auto___21060__$2){
var seq__20774_21061__$1 = temp__5804__auto___21060__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20774_21061__$1)){
var c__5568__auto___21062 = cljs.core.chunk_first(seq__20774_21061__$1);
var G__21063 = cljs.core.chunk_rest(seq__20774_21061__$1);
var G__21064 = c__5568__auto___21062;
var G__21065 = cljs.core.count(c__5568__auto___21062);
var G__21066 = (0);
seq__20774_21046 = G__21063;
chunk__20776_21047 = G__21064;
count__20777_21048 = G__21065;
i__20778_21049 = G__21066;
continue;
} else {
var map__20783_21067 = cljs.core.first(seq__20774_21061__$1);
var map__20783_21068__$1 = cljs.core.__destructure_map(map__20783_21067);
var task_21069 = map__20783_21068__$1;
var fn_str_21070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783_21068__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783_21068__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21072 = goog.getObjectByName(fn_str_21070,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21071)].join(''));

(fn_obj_21072.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21072.cljs$core$IFn$_invoke$arity$2(path,new_link_21045) : fn_obj_21072.call(null,path,new_link_21045));


var G__21073 = cljs.core.next(seq__20774_21061__$1);
var G__21074 = null;
var G__21075 = (0);
var G__21076 = (0);
seq__20774_21046 = G__21073;
chunk__20776_21047 = G__21074;
count__20777_21048 = G__21075;
i__20778_21049 = G__21076;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21043);
});})(seq__20730_20986,chunk__20734_20987,count__20735_20988,i__20736_20989,seq__20562,chunk__20564,count__20565,i__20566,new_link_21045,path_match_21044,node_21043,seq__20730_21037__$1,temp__5804__auto___21036__$1,path,seq__20562__$1,temp__5804__auto__,map__20561,map__20561__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21044], 0));

goog.dom.insertSiblingAfter(new_link_21045,node_21043);


var G__21077 = cljs.core.next(seq__20730_21037__$1);
var G__21078 = null;
var G__21079 = (0);
var G__21080 = (0);
seq__20730_20986 = G__21077;
chunk__20734_20987 = G__21078;
count__20735_20988 = G__21079;
i__20736_20989 = G__21080;
continue;
} else {
var G__21081 = cljs.core.next(seq__20730_21037__$1);
var G__21082 = null;
var G__21083 = (0);
var G__21084 = (0);
seq__20730_20986 = G__21081;
chunk__20734_20987 = G__21082;
count__20735_20988 = G__21083;
i__20736_20989 = G__21084;
continue;
}
} else {
var G__21085 = cljs.core.next(seq__20730_21037__$1);
var G__21086 = null;
var G__21087 = (0);
var G__21088 = (0);
seq__20730_20986 = G__21085;
chunk__20734_20987 = G__21086;
count__20735_20988 = G__21087;
i__20736_20989 = G__21088;
continue;
}
}
} else {
}
}
break;
}


var G__21089 = cljs.core.next(seq__20562__$1);
var G__21090 = null;
var G__21091 = (0);
var G__21092 = (0);
seq__20562 = G__21089;
chunk__20564 = G__21090;
count__20565 = G__21091;
i__20566 = G__21092;
continue;
} else {
var G__21093 = cljs.core.next(seq__20562__$1);
var G__21094 = null;
var G__21095 = (0);
var G__21096 = (0);
seq__20562 = G__21093;
chunk__20564 = G__21094;
count__20565 = G__21095;
i__20566 = G__21096;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__20784){
var map__20785 = p__20784;
var map__20785__$1 = cljs.core.__destructure_map(map__20785);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__20786){
var map__20787 = p__20786;
var map__20787__$1 = cljs.core.__destructure_map(map__20787);
var _ = map__20787__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20788,done,error){
var map__20789 = p__20788;
var map__20789__$1 = cljs.core.__destructure_map(map__20789);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20789__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20790,done,error){
var map__20791 = p__20790;
var map__20791__$1 = cljs.core.__destructure_map(map__20791);
var msg = map__20791__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20791__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20791__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20791__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20792){
var map__20793 = p__20792;
var map__20793__$1 = cljs.core.__destructure_map(map__20793);
var src = map__20793__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20794 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20794) : done.call(null,G__20794));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20795){
var map__20796 = p__20795;
var map__20796__$1 = cljs.core.__destructure_map(map__20796);
var msg__$1 = map__20796__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20797){var ex = e20797;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20798){
var map__20799 = p__20798;
var map__20799__$1 = cljs.core.__destructure_map(map__20799);
var env = map__20799__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20799__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20800){
var map__20801 = p__20800;
var map__20801__$1 = cljs.core.__destructure_map(map__20801);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20802){
var map__20803 = p__20802;
var map__20803__$1 = cljs.core.__destructure_map(map__20803);
var svc = map__20803__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20803__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
