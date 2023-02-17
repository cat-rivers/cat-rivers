goog.provide('first.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

/**
 * A component which greets a user.
 */
first.app.greeting = (function (){var G__13782 = (function first$app$greeting_render(props__11616__auto__,maybe_ref__11617__auto__){
var vec__13783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11616__auto__),maybe_ref__11617__auto__], null);
var map__13786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13783,(0),null);
var map__13786__$1 = cljs.core.__destructure_map(map__13786);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13786__$1,new cljs.core.Keyword(null,"name","name",1843675177));

return helix.core.get_react().createElement("div",null,"Hello, ",helix.core.get_react().createElement("strong",null,name),"!");
});
if(goog.DEBUG === true){
var G__13787 = G__13782;
(G__13787.displayName = "first.app/greeting");

return G__13787;
} else {
return G__13782;
}
})();




first.app.clickMe = (function (){var G__13789 = (function first$app$clickMe_render(props__11616__auto__,maybe_ref__11617__auto__){
var vec__13790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11616__auto__),maybe_ref__11617__auto__], null);

return helix.core.get_react().createElement("button",(function (){var obj13794 = ({"onClick":(function (){
return alert("BOOO!!");
})});
return obj13794;
})(),"Click Me!");
});
if(goog.DEBUG === true){
var G__13795 = G__13789;
(G__13795.displayName = "first.app/clickMe");

return G__13795;
} else {
return G__13789;
}
})();



var seq__13796_13819 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4),(5),(6),(7),(8),(9)], null));
var chunk__13798_13820 = null;
var count__13799_13821 = (0);
var i__13800_13822 = (0);
while(true){
if((i__13800_13822 < count__13799_13821)){
var val_13823 = chunk__13798_13820.cljs$core$IIndexed$_nth$arity$2(null,i__13800_13822);
if(cljs.core.odd_QMARK_(val_13823)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_13823], 0));


var G__13824 = seq__13796_13819;
var G__13825 = chunk__13798_13820;
var G__13826 = count__13799_13821;
var G__13827 = (i__13800_13822 + (1));
seq__13796_13819 = G__13824;
chunk__13798_13820 = G__13825;
count__13799_13821 = G__13826;
i__13800_13822 = G__13827;
continue;
} else {
var G__13828 = seq__13796_13819;
var G__13829 = chunk__13798_13820;
var G__13830 = count__13799_13821;
var G__13831 = (i__13800_13822 + (1));
seq__13796_13819 = G__13828;
chunk__13798_13820 = G__13829;
count__13799_13821 = G__13830;
i__13800_13822 = G__13831;
continue;
}
} else {
var temp__5804__auto___13832 = cljs.core.seq(seq__13796_13819);
if(temp__5804__auto___13832){
var seq__13796_13833__$1 = temp__5804__auto___13832;
if(cljs.core.chunked_seq_QMARK_(seq__13796_13833__$1)){
var c__5568__auto___13834 = cljs.core.chunk_first(seq__13796_13833__$1);
var G__13835 = cljs.core.chunk_rest(seq__13796_13833__$1);
var G__13836 = c__5568__auto___13834;
var G__13837 = cljs.core.count(c__5568__auto___13834);
var G__13838 = (0);
seq__13796_13819 = G__13835;
chunk__13798_13820 = G__13836;
count__13799_13821 = G__13837;
i__13800_13822 = G__13838;
continue;
} else {
var val_13839 = cljs.core.first(seq__13796_13833__$1);
if(cljs.core.odd_QMARK_(val_13839)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_13839], 0));


var G__13840 = cljs.core.next(seq__13796_13833__$1);
var G__13841 = null;
var G__13842 = (0);
var G__13843 = (0);
seq__13796_13819 = G__13840;
chunk__13798_13820 = G__13841;
count__13799_13821 = G__13842;
i__13800_13822 = G__13843;
continue;
} else {
var G__13844 = cljs.core.next(seq__13796_13833__$1);
var G__13845 = null;
var G__13846 = (0);
var G__13847 = (0);
seq__13796_13819 = G__13844;
chunk__13798_13820 = G__13845;
count__13799_13821 = G__13846;
i__13800_13822 = G__13847;
continue;
}
}
} else {
}
}
break;
}

first.app.first_app = (function (){var G__13804 = (function first$app$first_app_render(props__11616__auto__,maybe_ref__11617__auto__){
var vec__13805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11616__auto__),maybe_ref__11617__auto__], null);

var vec__13808 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Helix User"], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808,(1),null);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"Welcome!"),helix.core.get_react().createElement(first.app.clickMe,null),helix.core.get_react().createElement(first.app.greeting,(function (){var obj13812 = ({"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)});
return obj13812;
})()),helix.core.get_react().createElement("input",(function (){var obj13814 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__13802_SHARP_){
var G__13815 = cljs.core.assoc;
var G__13816 = new cljs.core.Keyword(null,"name","name",1843675177);
var G__13817 = p1__13802_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__13815,G__13816,G__13817) : set_state.call(null,G__13815,G__13816,G__13817));
})});
return obj13814;
})()));
});
if(goog.DEBUG === true){
var G__13818 = G__13804;
(G__13818.displayName = "first.app/first-app");

return G__13818;
} else {
return G__13804;
}
})();



if((typeof first !== 'undefined') && (typeof first.app !== 'undefined') && (typeof first.app.root !== 'undefined')){
} else {
first.app.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
first.app.root.render(helix.core.get_react().createElement(first.app.first_app,null));

//# sourceMappingURL=first.app.js.map
