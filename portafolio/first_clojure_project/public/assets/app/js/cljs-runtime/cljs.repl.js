goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19208){
var map__19209 = p__19208;
var map__19209__$1 = cljs.core.__destructure_map(map__19209);
var m = map__19209__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19210_19494 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19211_19495 = null;
var count__19212_19496 = (0);
var i__19213_19497 = (0);
while(true){
if((i__19213_19497 < count__19212_19496)){
var f_19498 = chunk__19211_19495.cljs$core$IIndexed$_nth$arity$2(null,i__19213_19497);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19498], 0));


var G__19499 = seq__19210_19494;
var G__19500 = chunk__19211_19495;
var G__19501 = count__19212_19496;
var G__19502 = (i__19213_19497 + (1));
seq__19210_19494 = G__19499;
chunk__19211_19495 = G__19500;
count__19212_19496 = G__19501;
i__19213_19497 = G__19502;
continue;
} else {
var temp__5804__auto___19503 = cljs.core.seq(seq__19210_19494);
if(temp__5804__auto___19503){
var seq__19210_19504__$1 = temp__5804__auto___19503;
if(cljs.core.chunked_seq_QMARK_(seq__19210_19504__$1)){
var c__5568__auto___19505 = cljs.core.chunk_first(seq__19210_19504__$1);
var G__19506 = cljs.core.chunk_rest(seq__19210_19504__$1);
var G__19507 = c__5568__auto___19505;
var G__19508 = cljs.core.count(c__5568__auto___19505);
var G__19509 = (0);
seq__19210_19494 = G__19506;
chunk__19211_19495 = G__19507;
count__19212_19496 = G__19508;
i__19213_19497 = G__19509;
continue;
} else {
var f_19510 = cljs.core.first(seq__19210_19504__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19510], 0));


var G__19511 = cljs.core.next(seq__19210_19504__$1);
var G__19512 = null;
var G__19513 = (0);
var G__19514 = (0);
seq__19210_19494 = G__19511;
chunk__19211_19495 = G__19512;
count__19212_19496 = G__19513;
i__19213_19497 = G__19514;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19515 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19515], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19515)))?cljs.core.second(arglists_19515):arglists_19515)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19228_19520 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19229_19521 = null;
var count__19230_19522 = (0);
var i__19231_19523 = (0);
while(true){
if((i__19231_19523 < count__19230_19522)){
var vec__19241_19524 = chunk__19229_19521.cljs$core$IIndexed$_nth$arity$2(null,i__19231_19523);
var name_19525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19241_19524,(0),null);
var map__19244_19526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19241_19524,(1),null);
var map__19244_19527__$1 = cljs.core.__destructure_map(map__19244_19526);
var doc_19528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244_19527__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244_19527__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19525], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19529], 0));

if(cljs.core.truth_(doc_19528)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19528], 0));
} else {
}


var G__19530 = seq__19228_19520;
var G__19531 = chunk__19229_19521;
var G__19532 = count__19230_19522;
var G__19533 = (i__19231_19523 + (1));
seq__19228_19520 = G__19530;
chunk__19229_19521 = G__19531;
count__19230_19522 = G__19532;
i__19231_19523 = G__19533;
continue;
} else {
var temp__5804__auto___19534 = cljs.core.seq(seq__19228_19520);
if(temp__5804__auto___19534){
var seq__19228_19535__$1 = temp__5804__auto___19534;
if(cljs.core.chunked_seq_QMARK_(seq__19228_19535__$1)){
var c__5568__auto___19536 = cljs.core.chunk_first(seq__19228_19535__$1);
var G__19537 = cljs.core.chunk_rest(seq__19228_19535__$1);
var G__19538 = c__5568__auto___19536;
var G__19539 = cljs.core.count(c__5568__auto___19536);
var G__19540 = (0);
seq__19228_19520 = G__19537;
chunk__19229_19521 = G__19538;
count__19230_19522 = G__19539;
i__19231_19523 = G__19540;
continue;
} else {
var vec__19246_19541 = cljs.core.first(seq__19228_19535__$1);
var name_19542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246_19541,(0),null);
var map__19249_19543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246_19541,(1),null);
var map__19249_19544__$1 = cljs.core.__destructure_map(map__19249_19543);
var doc_19545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19249_19544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19249_19544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19542], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19546], 0));

if(cljs.core.truth_(doc_19545)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19545], 0));
} else {
}


var G__19547 = cljs.core.next(seq__19228_19535__$1);
var G__19548 = null;
var G__19549 = (0);
var G__19550 = (0);
seq__19228_19520 = G__19547;
chunk__19229_19521 = G__19548;
count__19230_19522 = G__19549;
i__19231_19523 = G__19550;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19251 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19252 = null;
var count__19253 = (0);
var i__19254 = (0);
while(true){
if((i__19254 < count__19253)){
var role = chunk__19252.cljs$core$IIndexed$_nth$arity$2(null,i__19254);
var temp__5804__auto___19553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19553__$1)){
var spec_19554 = temp__5804__auto___19553__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19554)], 0));
} else {
}


var G__19555 = seq__19251;
var G__19556 = chunk__19252;
var G__19557 = count__19253;
var G__19558 = (i__19254 + (1));
seq__19251 = G__19555;
chunk__19252 = G__19556;
count__19253 = G__19557;
i__19254 = G__19558;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19251);
if(temp__5804__auto____$1){
var seq__19251__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19251__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19251__$1);
var G__19560 = cljs.core.chunk_rest(seq__19251__$1);
var G__19561 = c__5568__auto__;
var G__19562 = cljs.core.count(c__5568__auto__);
var G__19563 = (0);
seq__19251 = G__19560;
chunk__19252 = G__19561;
count__19253 = G__19562;
i__19254 = G__19563;
continue;
} else {
var role = cljs.core.first(seq__19251__$1);
var temp__5804__auto___19564__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19564__$2)){
var spec_19565 = temp__5804__auto___19564__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19565)], 0));
} else {
}


var G__19566 = cljs.core.next(seq__19251__$1);
var G__19567 = null;
var G__19568 = (0);
var G__19569 = (0);
seq__19251 = G__19566;
chunk__19252 = G__19567;
count__19253 = G__19568;
i__19254 = G__19569;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19570 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19571 = cljs.core.ex_cause(t);
via = G__19570;
t = G__19571;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19305 = datafied_throwable;
var map__19305__$1 = cljs.core.__destructure_map(map__19305);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19305__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19306 = cljs.core.last(via);
var map__19306__$1 = cljs.core.__destructure_map(map__19306);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19306__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19306__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19306__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19307 = data;
var map__19307__$1 = cljs.core.__destructure_map(map__19307);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19308 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19308__$1 = cljs.core.__destructure_map(map__19308);
var top_data = map__19308__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19313 = phase;
var G__19313__$1 = (((G__19313 instanceof cljs.core.Keyword))?G__19313.fqn:null);
switch (G__19313__$1) {
case "read-source":
var map__19314 = data;
var map__19314__$1 = cljs.core.__destructure_map(map__19314);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19314__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19314__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19315 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19315__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19315,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19315);
var G__19315__$2 = (cljs.core.truth_((function (){var fexpr__19316 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19316.cljs$core$IFn$_invoke$arity$1 ? fexpr__19316.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19316.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19315__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19315__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19315__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19318 = top_data;
var G__19318__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19318,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19318);
var G__19318__$2 = (cljs.core.truth_((function (){var fexpr__19319 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19319.cljs$core$IFn$_invoke$arity$1 ? fexpr__19319.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19319.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19318__$1);
var G__19318__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19318__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19318__$2);
var G__19318__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19318__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19318__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19318__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19318__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19323 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(3),null);
var G__19326 = top_data;
var G__19326__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19326,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19326);
var G__19326__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19326__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19326__$1);
var G__19326__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19326__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19326__$2);
var G__19326__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19326__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19326__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19326__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19326__$4;
}

break;
case "execution":
var vec__19344 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19299_SHARP_){
var or__5045__auto__ = (p1__19299_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19348 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19348.cljs$core$IFn$_invoke$arity$1 ? fexpr__19348.cljs$core$IFn$_invoke$arity$1(p1__19299_SHARP_) : fexpr__19348.call(null,p1__19299_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19349 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19349__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19349,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19349);
var G__19349__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19349__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19349__$1);
var G__19349__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19349__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19349__$2);
var G__19349__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19349__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19349__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19349__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19349__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19313__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19369){
var map__19371 = p__19369;
var map__19371__$1 = cljs.core.__destructure_map(map__19371);
var triage_data = map__19371__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19371__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19384 = phase;
var G__19384__$1 = (((G__19384 instanceof cljs.core.Keyword))?G__19384.fqn:null);
switch (G__19384__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19385 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19386 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19387 = loc;
var G__19388 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19416_19603 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19417_19604 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19418_19605 = true;
var _STAR_print_fn_STAR__temp_val__19419_19606 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19418_19605);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19419_19606);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19360_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19360_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19417_19604);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19416_19603);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19385,G__19386,G__19387,G__19388) : format.call(null,G__19385,G__19386,G__19387,G__19388));

break;
case "macroexpansion":
var G__19427 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19428 = cause_type;
var G__19429 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19430 = loc;
var G__19431 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19427,G__19428,G__19429,G__19430,G__19431) : format.call(null,G__19427,G__19428,G__19429,G__19430,G__19431));

break;
case "compile-syntax-check":
var G__19432 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19433 = cause_type;
var G__19434 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19435 = loc;
var G__19436 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19432,G__19433,G__19434,G__19435,G__19436) : format.call(null,G__19432,G__19433,G__19434,G__19435,G__19436));

break;
case "compilation":
var G__19437 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19438 = cause_type;
var G__19439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19440 = loc;
var G__19441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19437,G__19438,G__19439,G__19440,G__19441) : format.call(null,G__19437,G__19438,G__19439,G__19440,G__19441));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19442 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19443 = symbol;
var G__19444 = loc;
var G__19445 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19449_19629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19450_19630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19451_19631 = true;
var _STAR_print_fn_STAR__temp_val__19452_19632 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19451_19631);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19452_19632);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19361_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19361_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19450_19630);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19449_19629);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19442,G__19443,G__19444,G__19445) : format.call(null,G__19442,G__19443,G__19444,G__19445));
} else {
var G__19463 = "Execution error%s at %s(%s).\n%s\n";
var G__19464 = cause_type;
var G__19465 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19466 = loc;
var G__19467 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19463,G__19464,G__19465,G__19466,G__19467) : format.call(null,G__19463,G__19464,G__19465,G__19466,G__19467));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19384__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
