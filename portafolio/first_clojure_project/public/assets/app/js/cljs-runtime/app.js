goog.provide('app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

/**
 * A component which greets a user.
 */
app.greeting = (function (){var G__12680 = (function app$greeting_render(props__11802__auto__,maybe_ref__11803__auto__){
var vec__12681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11802__auto__),maybe_ref__11803__auto__], null);
var map__12684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12681,(0),null);
var map__12684__$1 = cljs.core.__destructure_map(map__12684);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12684__$1,new cljs.core.Keyword(null,"name","name",1843675177));

return helix.core.get_react().createElement("div",null,"Hello, ",helix.core.get_react().createElement("strong",null,name),"!");
});
if(goog.DEBUG === true){
var G__12685 = G__12680;
(G__12685.displayName = "app/greeting");

return G__12685;
} else {
return G__12680;
}
})();




app.first_app = (function (){var G__12688 = (function app$first_app_render(props__11802__auto__,maybe_ref__11803__auto__){
var vec__12689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11802__auto__),maybe_ref__11803__auto__], null);

var vec__12692 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Helix User"], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(1),null);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"Welcome!"),helix.core.get_react().createElement(app.greeting,(function (){var obj12696 = ({"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)});
return obj12696;
})()),helix.core.get_react().createElement("input",(function (){var obj12698 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__12686_SHARP_){
var G__12699 = cljs.core.assoc;
var G__12700 = new cljs.core.Keyword(null,"name","name",1843675177);
var G__12701 = p1__12686_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__12699,G__12700,G__12701) : set_state.call(null,G__12699,G__12700,G__12701));
})});
return obj12698;
})()));
});
if(goog.DEBUG === true){
var G__12702 = G__12688;
(G__12702.displayName = "app/first-app");

return G__12702;
} else {
return G__12688;
}
})();



if((typeof app !== 'undefined') && (typeof app.root !== 'undefined')){
} else {
app.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
app.root.render(helix.core.get_react().createElement(app.first_app,null));

//# sourceMappingURL=app.js.map
