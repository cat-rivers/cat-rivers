goog.provide('first.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

first.app.first_app = (function (){var G__19979 = (function first$app$first_app_render(props__11902__auto__,maybe_ref__11903__auto__){
var vec__19980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11902__auto__),maybe_ref__11903__auto__], null);

return helix.core.get_react().createElement(first.todo.todo_list_app,null);
});
if(goog.DEBUG === true){
var G__19983 = G__19979;
(G__19983.displayName = "first.app/first-app");

return G__19983;
} else {
return G__19979;
}
})();



first.app.alert_cati = (function first$app$alert_cati(){
return alert("CATIII");
});
if((typeof first !== 'undefined') && (typeof first.app !== 'undefined') && (typeof first.app.root !== 'undefined')){
} else {
first.app.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
first.app.root.render(helix.core.get_react().createElement(first.app.first_app,null));

//# sourceMappingURL=first.app.js.map
