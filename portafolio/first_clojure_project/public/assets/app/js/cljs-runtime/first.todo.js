goog.provide('first.todo');
first.todo.todos = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buy butts","kick butts","spank butts","massage butts"], null);

first.todo.list_item = (function (){var G__19940 = (function first$todo$list_item_render(props__11902__auto__,maybe_ref__11903__auto__){
var vec__19941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11902__auto__),maybe_ref__11903__auto__], null);
var map__19944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19941,(0),null);
var map__19944__$1 = cljs.core.__destructure_map(map__19944);
var todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19944__$1,new cljs.core.Keyword(null,"todo","todo",-1046442570));

return helix.core.get_react().createElement("li",null,todo);
});
if(goog.DEBUG === true){
var G__19945 = G__19940;
(G__19945.displayName = "first.todo/list-item");

return G__19945;
} else {
return G__19940;
}
})();




first.todo.todo_list = (function (){var G__19947 = (function first$todo$todo_list_render(props__11902__auto__,maybe_ref__11903__auto__){
var vec__19948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11902__auto__),maybe_ref__11903__auto__], null);
var map__19951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19948,(0),null);
var map__19951__$1 = cljs.core.__destructure_map(map__19951);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19951__$1,new cljs.core.Keyword(null,"items","items",1031954938));

return helix.core.get_react().createElement("ul",null,(function (){var iter__5523__auto__ = (function first$todo$todo_list_render_$_iter__19952(s__19953){
return (new cljs.core.LazySeq(null,(function (){
var s__19953__$1 = s__19953;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19953__$1);
if(temp__5804__auto__){
var s__19953__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19953__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19953__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19955 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19954 = (0);
while(true){
if((i__19954 < size__5522__auto__)){
var todo = cljs.core._nth(c__5521__auto__,i__19954);
cljs.core.chunk_append(b__19955,helix.core.get_react().createElement(first.todo.list_item,(function (){var obj19957 = ({"key":todo,"todo":todo});
return obj19957;
})()));

var G__19978 = (i__19954 + (1));
i__19954 = G__19978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19955),first$todo$todo_list_render_$_iter__19952(cljs.core.chunk_rest(s__19953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19955),null);
}
} else {
var todo = cljs.core.first(s__19953__$2);
return cljs.core.cons(helix.core.get_react().createElement(first.todo.list_item,(function (){var obj19959 = ({"key":todo,"todo":todo});
return obj19959;
})()),first$todo$todo_list_render_$_iter__19952(cljs.core.rest(s__19953__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(items);
})());
});
if(goog.DEBUG === true){
var G__19960 = G__19947;
(G__19960.displayName = "first.todo/todo-list");

return G__19960;
} else {
return G__19947;
}
})();



first.todo.add_todo = (function first$todo$add_todo(set_todos_state,event){
event.preventDefault();

var G__19961 = (function (todos_state){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(todos_state,event.target.content.value);
});
return (set_todos_state.cljs$core$IFn$_invoke$arity$1 ? set_todos_state.cljs$core$IFn$_invoke$arity$1(G__19961) : set_todos_state.call(null,G__19961));
});

first.todo.todo_list_app = (function (){var G__19963 = (function first$todo$todo_list_app_render(props__11902__auto__,maybe_ref__11903__auto__){
var vec__19964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__11902__auto__),maybe_ref__11903__auto__], null);

var vec__19967 = helix.hooks.use_state(first.todo.todos);
var todos_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19967,(0),null);
var set_todos_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19967,(1),null);
first.todo.t = first.todo.todos;

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"TODOS"),helix.core.get_react().createElement("form",(function (){var obj19971 = ({"onSubmit":cljs.core.partial.cljs$core$IFn$_invoke$arity$2(first.todo.add_todo,set_todos_state)});
return obj19971;
})(),helix.core.get_react().createElement("input",(function (){var obj19973 = ({"type":"text","name":"content"});
return obj19973;
})()),helix.core.get_react().createElement("button",null,"add todo")),helix.core.get_react().createElement(first.todo.todo_list,(function (){var obj19975 = ({"items":todos_state});
return obj19975;
})()));
});
if(goog.DEBUG === true){
var G__19976 = G__19963;
(G__19976.displayName = "first.todo/todo-list-app");

return G__19976;
} else {
return G__19963;
}
})();




//# sourceMappingURL=first.todo.js.map
