goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16587 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16587(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16588 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16588(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15923 = coll;
var G__15924 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15923,G__15924) : shadow.dom.lazy_native_coll_seq.call(null,G__15923,G__15924));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15981 = arguments.length;
switch (G__15981) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16000 = arguments.length;
switch (G__16000) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16011 = arguments.length;
switch (G__16011) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16019 = arguments.length;
switch (G__16019) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16040 = arguments.length;
switch (G__16040) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16050 = arguments.length;
switch (G__16050) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16071){if((e16071 instanceof Object)){
var e = e16071;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16071;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16080 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16081 = null;
var count__16082 = (0);
var i__16083 = (0);
while(true){
if((i__16083 < count__16082)){
var el = chunk__16081.cljs$core$IIndexed$_nth$arity$2(null,i__16083);
var handler_16595__$1 = ((function (seq__16080,chunk__16081,count__16082,i__16083,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16080,chunk__16081,count__16082,i__16083,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16595__$1);


var G__16596 = seq__16080;
var G__16597 = chunk__16081;
var G__16598 = count__16082;
var G__16599 = (i__16083 + (1));
seq__16080 = G__16596;
chunk__16081 = G__16597;
count__16082 = G__16598;
i__16083 = G__16599;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16080);
if(temp__5804__auto__){
var seq__16080__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16080__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16080__$1);
var G__16600 = cljs.core.chunk_rest(seq__16080__$1);
var G__16601 = c__5568__auto__;
var G__16602 = cljs.core.count(c__5568__auto__);
var G__16603 = (0);
seq__16080 = G__16600;
chunk__16081 = G__16601;
count__16082 = G__16602;
i__16083 = G__16603;
continue;
} else {
var el = cljs.core.first(seq__16080__$1);
var handler_16604__$1 = ((function (seq__16080,chunk__16081,count__16082,i__16083,el,seq__16080__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16080,chunk__16081,count__16082,i__16083,el,seq__16080__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16604__$1);


var G__16605 = cljs.core.next(seq__16080__$1);
var G__16606 = null;
var G__16607 = (0);
var G__16608 = (0);
seq__16080 = G__16605;
chunk__16081 = G__16606;
count__16082 = G__16607;
i__16083 = G__16608;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16102 = arguments.length;
switch (G__16102) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__16106 = cljs.core.seq(events);
var chunk__16107 = null;
var count__16108 = (0);
var i__16109 = (0);
while(true){
if((i__16109 < count__16108)){
var vec__16123 = chunk__16107.cljs$core$IIndexed$_nth$arity$2(null,i__16109);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16123,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16610 = seq__16106;
var G__16611 = chunk__16107;
var G__16612 = count__16108;
var G__16613 = (i__16109 + (1));
seq__16106 = G__16610;
chunk__16107 = G__16611;
count__16108 = G__16612;
i__16109 = G__16613;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16106);
if(temp__5804__auto__){
var seq__16106__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16106__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16106__$1);
var G__16614 = cljs.core.chunk_rest(seq__16106__$1);
var G__16615 = c__5568__auto__;
var G__16616 = cljs.core.count(c__5568__auto__);
var G__16617 = (0);
seq__16106 = G__16614;
chunk__16107 = G__16615;
count__16108 = G__16616;
i__16109 = G__16617;
continue;
} else {
var vec__16126 = cljs.core.first(seq__16106__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16126,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16618 = cljs.core.next(seq__16106__$1);
var G__16619 = null;
var G__16620 = (0);
var G__16621 = (0);
seq__16106 = G__16618;
chunk__16107 = G__16619;
count__16108 = G__16620;
i__16109 = G__16621;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__16129 = cljs.core.seq(styles);
var chunk__16130 = null;
var count__16131 = (0);
var i__16132 = (0);
while(true){
if((i__16132 < count__16131)){
var vec__16139 = chunk__16130.cljs$core$IIndexed$_nth$arity$2(null,i__16132);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16139,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16622 = seq__16129;
var G__16623 = chunk__16130;
var G__16624 = count__16131;
var G__16625 = (i__16132 + (1));
seq__16129 = G__16622;
chunk__16130 = G__16623;
count__16131 = G__16624;
i__16132 = G__16625;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16129);
if(temp__5804__auto__){
var seq__16129__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16129__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16129__$1);
var G__16626 = cljs.core.chunk_rest(seq__16129__$1);
var G__16627 = c__5568__auto__;
var G__16628 = cljs.core.count(c__5568__auto__);
var G__16629 = (0);
seq__16129 = G__16626;
chunk__16130 = G__16627;
count__16131 = G__16628;
i__16132 = G__16629;
continue;
} else {
var vec__16142 = cljs.core.first(seq__16129__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16142,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16630 = cljs.core.next(seq__16129__$1);
var G__16631 = null;
var G__16632 = (0);
var G__16633 = (0);
seq__16129 = G__16630;
chunk__16130 = G__16631;
count__16131 = G__16632;
i__16132 = G__16633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__16145_16634 = key;
var G__16145_16635__$1 = (((G__16145_16634 instanceof cljs.core.Keyword))?G__16145_16634.fqn:null);
switch (G__16145_16635__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16637 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_16637,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_16637,"aria-");
}
})())){
el.setAttribute(ks_16637,value);
} else {
(el[ks_16637] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16152){
var map__16153 = p__16152;
var map__16153__$1 = cljs.core.__destructure_map(map__16153);
var props = map__16153__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16153__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16154 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16154,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16154,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16154,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16157 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16157,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16157;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16159 = arguments.length;
switch (G__16159) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16161){
var vec__16162 = p__16161;
var seq__16163 = cljs.core.seq(vec__16162);
var first__16164 = cljs.core.first(seq__16163);
var seq__16163__$1 = cljs.core.next(seq__16163);
var nn = first__16164;
var first__16164__$1 = cljs.core.first(seq__16163__$1);
var seq__16163__$2 = cljs.core.next(seq__16163__$1);
var np = first__16164__$1;
var nc = seq__16163__$2;
var node = vec__16162;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16166 = nn;
var G__16167 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16166,G__16167) : create_fn.call(null,G__16166,G__16167));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16169 = nn;
var G__16170 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16169,G__16170) : create_fn.call(null,G__16169,G__16170));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16174 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(1),null);
var seq__16178_16639 = cljs.core.seq(node_children);
var chunk__16179_16640 = null;
var count__16180_16641 = (0);
var i__16181_16642 = (0);
while(true){
if((i__16181_16642 < count__16180_16641)){
var child_struct_16643 = chunk__16179_16640.cljs$core$IIndexed$_nth$arity$2(null,i__16181_16642);
var children_16644 = shadow.dom.dom_node(child_struct_16643);
if(cljs.core.seq_QMARK_(children_16644)){
var seq__16209_16645 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16644));
var chunk__16211_16646 = null;
var count__16212_16647 = (0);
var i__16213_16648 = (0);
while(true){
if((i__16213_16648 < count__16212_16647)){
var child_16649 = chunk__16211_16646.cljs$core$IIndexed$_nth$arity$2(null,i__16213_16648);
if(cljs.core.truth_(child_16649)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16649);


var G__16650 = seq__16209_16645;
var G__16651 = chunk__16211_16646;
var G__16652 = count__16212_16647;
var G__16653 = (i__16213_16648 + (1));
seq__16209_16645 = G__16650;
chunk__16211_16646 = G__16651;
count__16212_16647 = G__16652;
i__16213_16648 = G__16653;
continue;
} else {
var G__16654 = seq__16209_16645;
var G__16655 = chunk__16211_16646;
var G__16656 = count__16212_16647;
var G__16657 = (i__16213_16648 + (1));
seq__16209_16645 = G__16654;
chunk__16211_16646 = G__16655;
count__16212_16647 = G__16656;
i__16213_16648 = G__16657;
continue;
}
} else {
var temp__5804__auto___16658 = cljs.core.seq(seq__16209_16645);
if(temp__5804__auto___16658){
var seq__16209_16659__$1 = temp__5804__auto___16658;
if(cljs.core.chunked_seq_QMARK_(seq__16209_16659__$1)){
var c__5568__auto___16660 = cljs.core.chunk_first(seq__16209_16659__$1);
var G__16661 = cljs.core.chunk_rest(seq__16209_16659__$1);
var G__16662 = c__5568__auto___16660;
var G__16663 = cljs.core.count(c__5568__auto___16660);
var G__16664 = (0);
seq__16209_16645 = G__16661;
chunk__16211_16646 = G__16662;
count__16212_16647 = G__16663;
i__16213_16648 = G__16664;
continue;
} else {
var child_16665 = cljs.core.first(seq__16209_16659__$1);
if(cljs.core.truth_(child_16665)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16665);


var G__16666 = cljs.core.next(seq__16209_16659__$1);
var G__16667 = null;
var G__16668 = (0);
var G__16669 = (0);
seq__16209_16645 = G__16666;
chunk__16211_16646 = G__16667;
count__16212_16647 = G__16668;
i__16213_16648 = G__16669;
continue;
} else {
var G__16670 = cljs.core.next(seq__16209_16659__$1);
var G__16671 = null;
var G__16672 = (0);
var G__16673 = (0);
seq__16209_16645 = G__16670;
chunk__16211_16646 = G__16671;
count__16212_16647 = G__16672;
i__16213_16648 = G__16673;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16644);
}


var G__16674 = seq__16178_16639;
var G__16675 = chunk__16179_16640;
var G__16676 = count__16180_16641;
var G__16677 = (i__16181_16642 + (1));
seq__16178_16639 = G__16674;
chunk__16179_16640 = G__16675;
count__16180_16641 = G__16676;
i__16181_16642 = G__16677;
continue;
} else {
var temp__5804__auto___16678 = cljs.core.seq(seq__16178_16639);
if(temp__5804__auto___16678){
var seq__16178_16679__$1 = temp__5804__auto___16678;
if(cljs.core.chunked_seq_QMARK_(seq__16178_16679__$1)){
var c__5568__auto___16680 = cljs.core.chunk_first(seq__16178_16679__$1);
var G__16681 = cljs.core.chunk_rest(seq__16178_16679__$1);
var G__16682 = c__5568__auto___16680;
var G__16683 = cljs.core.count(c__5568__auto___16680);
var G__16684 = (0);
seq__16178_16639 = G__16681;
chunk__16179_16640 = G__16682;
count__16180_16641 = G__16683;
i__16181_16642 = G__16684;
continue;
} else {
var child_struct_16685 = cljs.core.first(seq__16178_16679__$1);
var children_16686 = shadow.dom.dom_node(child_struct_16685);
if(cljs.core.seq_QMARK_(children_16686)){
var seq__16233_16687 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16686));
var chunk__16235_16688 = null;
var count__16236_16689 = (0);
var i__16237_16690 = (0);
while(true){
if((i__16237_16690 < count__16236_16689)){
var child_16691 = chunk__16235_16688.cljs$core$IIndexed$_nth$arity$2(null,i__16237_16690);
if(cljs.core.truth_(child_16691)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16691);


var G__16692 = seq__16233_16687;
var G__16693 = chunk__16235_16688;
var G__16694 = count__16236_16689;
var G__16695 = (i__16237_16690 + (1));
seq__16233_16687 = G__16692;
chunk__16235_16688 = G__16693;
count__16236_16689 = G__16694;
i__16237_16690 = G__16695;
continue;
} else {
var G__16696 = seq__16233_16687;
var G__16697 = chunk__16235_16688;
var G__16698 = count__16236_16689;
var G__16699 = (i__16237_16690 + (1));
seq__16233_16687 = G__16696;
chunk__16235_16688 = G__16697;
count__16236_16689 = G__16698;
i__16237_16690 = G__16699;
continue;
}
} else {
var temp__5804__auto___16700__$1 = cljs.core.seq(seq__16233_16687);
if(temp__5804__auto___16700__$1){
var seq__16233_16701__$1 = temp__5804__auto___16700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16233_16701__$1)){
var c__5568__auto___16702 = cljs.core.chunk_first(seq__16233_16701__$1);
var G__16703 = cljs.core.chunk_rest(seq__16233_16701__$1);
var G__16704 = c__5568__auto___16702;
var G__16705 = cljs.core.count(c__5568__auto___16702);
var G__16706 = (0);
seq__16233_16687 = G__16703;
chunk__16235_16688 = G__16704;
count__16236_16689 = G__16705;
i__16237_16690 = G__16706;
continue;
} else {
var child_16707 = cljs.core.first(seq__16233_16701__$1);
if(cljs.core.truth_(child_16707)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16707);


var G__16708 = cljs.core.next(seq__16233_16701__$1);
var G__16709 = null;
var G__16710 = (0);
var G__16711 = (0);
seq__16233_16687 = G__16708;
chunk__16235_16688 = G__16709;
count__16236_16689 = G__16710;
i__16237_16690 = G__16711;
continue;
} else {
var G__16712 = cljs.core.next(seq__16233_16701__$1);
var G__16713 = null;
var G__16714 = (0);
var G__16715 = (0);
seq__16233_16687 = G__16712;
chunk__16235_16688 = G__16713;
count__16236_16689 = G__16714;
i__16237_16690 = G__16715;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16686);
}


var G__16716 = cljs.core.next(seq__16178_16679__$1);
var G__16717 = null;
var G__16718 = (0);
var G__16719 = (0);
seq__16178_16639 = G__16716;
chunk__16179_16640 = G__16717;
count__16180_16641 = G__16718;
i__16181_16642 = G__16719;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__16260 = cljs.core.seq(node);
var chunk__16261 = null;
var count__16262 = (0);
var i__16263 = (0);
while(true){
if((i__16263 < count__16262)){
var n = chunk__16261.cljs$core$IIndexed$_nth$arity$2(null,i__16263);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16720 = seq__16260;
var G__16721 = chunk__16261;
var G__16722 = count__16262;
var G__16723 = (i__16263 + (1));
seq__16260 = G__16720;
chunk__16261 = G__16721;
count__16262 = G__16722;
i__16263 = G__16723;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16260);
if(temp__5804__auto__){
var seq__16260__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16260__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16260__$1);
var G__16724 = cljs.core.chunk_rest(seq__16260__$1);
var G__16725 = c__5568__auto__;
var G__16726 = cljs.core.count(c__5568__auto__);
var G__16727 = (0);
seq__16260 = G__16724;
chunk__16261 = G__16725;
count__16262 = G__16726;
i__16263 = G__16727;
continue;
} else {
var n = cljs.core.first(seq__16260__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16728 = cljs.core.next(seq__16260__$1);
var G__16729 = null;
var G__16730 = (0);
var G__16731 = (0);
seq__16260 = G__16728;
chunk__16261 = G__16729;
count__16262 = G__16730;
i__16263 = G__16731;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__16276 = arguments.length;
switch (G__16276) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__16281 = arguments.length;
switch (G__16281) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__16293 = arguments.length;
switch (G__16293) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16735 = arguments.length;
var i__5770__auto___16736 = (0);
while(true){
if((i__5770__auto___16736 < len__5769__auto___16735)){
args__5775__auto__.push((arguments[i__5770__auto___16736]));

var G__16737 = (i__5770__auto___16736 + (1));
i__5770__auto___16736 = G__16737;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16318_16738 = cljs.core.seq(nodes);
var chunk__16319_16739 = null;
var count__16320_16740 = (0);
var i__16321_16741 = (0);
while(true){
if((i__16321_16741 < count__16320_16740)){
var node_16742 = chunk__16319_16739.cljs$core$IIndexed$_nth$arity$2(null,i__16321_16741);
fragment.appendChild(shadow.dom._to_dom(node_16742));


var G__16743 = seq__16318_16738;
var G__16744 = chunk__16319_16739;
var G__16745 = count__16320_16740;
var G__16746 = (i__16321_16741 + (1));
seq__16318_16738 = G__16743;
chunk__16319_16739 = G__16744;
count__16320_16740 = G__16745;
i__16321_16741 = G__16746;
continue;
} else {
var temp__5804__auto___16747 = cljs.core.seq(seq__16318_16738);
if(temp__5804__auto___16747){
var seq__16318_16748__$1 = temp__5804__auto___16747;
if(cljs.core.chunked_seq_QMARK_(seq__16318_16748__$1)){
var c__5568__auto___16749 = cljs.core.chunk_first(seq__16318_16748__$1);
var G__16750 = cljs.core.chunk_rest(seq__16318_16748__$1);
var G__16751 = c__5568__auto___16749;
var G__16752 = cljs.core.count(c__5568__auto___16749);
var G__16753 = (0);
seq__16318_16738 = G__16750;
chunk__16319_16739 = G__16751;
count__16320_16740 = G__16752;
i__16321_16741 = G__16753;
continue;
} else {
var node_16754 = cljs.core.first(seq__16318_16748__$1);
fragment.appendChild(shadow.dom._to_dom(node_16754));


var G__16755 = cljs.core.next(seq__16318_16748__$1);
var G__16756 = null;
var G__16757 = (0);
var G__16758 = (0);
seq__16318_16738 = G__16755;
chunk__16319_16739 = G__16756;
count__16320_16740 = G__16757;
i__16321_16741 = G__16758;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16312){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16312));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16366_16759 = cljs.core.seq(scripts);
var chunk__16367_16760 = null;
var count__16368_16761 = (0);
var i__16369_16762 = (0);
while(true){
if((i__16369_16762 < count__16368_16761)){
var vec__16382_16763 = chunk__16367_16760.cljs$core$IIndexed$_nth$arity$2(null,i__16369_16762);
var script_tag_16764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382_16763,(0),null);
var script_body_16765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382_16763,(1),null);
eval(script_body_16765);


var G__16766 = seq__16366_16759;
var G__16767 = chunk__16367_16760;
var G__16768 = count__16368_16761;
var G__16769 = (i__16369_16762 + (1));
seq__16366_16759 = G__16766;
chunk__16367_16760 = G__16767;
count__16368_16761 = G__16768;
i__16369_16762 = G__16769;
continue;
} else {
var temp__5804__auto___16770 = cljs.core.seq(seq__16366_16759);
if(temp__5804__auto___16770){
var seq__16366_16771__$1 = temp__5804__auto___16770;
if(cljs.core.chunked_seq_QMARK_(seq__16366_16771__$1)){
var c__5568__auto___16772 = cljs.core.chunk_first(seq__16366_16771__$1);
var G__16773 = cljs.core.chunk_rest(seq__16366_16771__$1);
var G__16774 = c__5568__auto___16772;
var G__16775 = cljs.core.count(c__5568__auto___16772);
var G__16776 = (0);
seq__16366_16759 = G__16773;
chunk__16367_16760 = G__16774;
count__16368_16761 = G__16775;
i__16369_16762 = G__16776;
continue;
} else {
var vec__16388_16777 = cljs.core.first(seq__16366_16771__$1);
var script_tag_16778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388_16777,(0),null);
var script_body_16779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388_16777,(1),null);
eval(script_body_16779);


var G__16780 = cljs.core.next(seq__16366_16771__$1);
var G__16781 = null;
var G__16782 = (0);
var G__16783 = (0);
seq__16366_16759 = G__16780;
chunk__16367_16760 = G__16781;
count__16368_16761 = G__16782;
i__16369_16762 = G__16783;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16392){
var vec__16393 = p__16392;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16409 = arguments.length;
switch (G__16409) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16432 = cljs.core.seq(style_keys);
var chunk__16433 = null;
var count__16434 = (0);
var i__16435 = (0);
while(true){
if((i__16435 < count__16434)){
var it = chunk__16433.cljs$core$IIndexed$_nth$arity$2(null,i__16435);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16787 = seq__16432;
var G__16788 = chunk__16433;
var G__16789 = count__16434;
var G__16790 = (i__16435 + (1));
seq__16432 = G__16787;
chunk__16433 = G__16788;
count__16434 = G__16789;
i__16435 = G__16790;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16432);
if(temp__5804__auto__){
var seq__16432__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16432__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16432__$1);
var G__16791 = cljs.core.chunk_rest(seq__16432__$1);
var G__16792 = c__5568__auto__;
var G__16793 = cljs.core.count(c__5568__auto__);
var G__16794 = (0);
seq__16432 = G__16791;
chunk__16433 = G__16792;
count__16434 = G__16793;
i__16435 = G__16794;
continue;
} else {
var it = cljs.core.first(seq__16432__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16795 = cljs.core.next(seq__16432__$1);
var G__16796 = null;
var G__16797 = (0);
var G__16798 = (0);
seq__16432 = G__16795;
chunk__16433 = G__16796;
count__16434 = G__16797;
i__16435 = G__16798;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16447,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16470 = k16447;
var G__16470__$1 = (((G__16470 instanceof cljs.core.Keyword))?G__16470.fqn:null);
switch (G__16470__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16447,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16473){
var vec__16474 = p__16473;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16474,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16474,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16446){
var self__ = this;
var G__16446__$1 = this;
return (new cljs.core.RecordIter((0),G__16446__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16448,other16449){
var self__ = this;
var this16448__$1 = this;
return (((!((other16449 == null)))) && ((((this16448__$1.constructor === other16449.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16448__$1.x,other16449.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16448__$1.y,other16449.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16448__$1.__extmap,other16449.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16447){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16488 = k16447;
var G__16488__$1 = (((G__16488 instanceof cljs.core.Keyword))?G__16488.fqn:null);
switch (G__16488__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16447);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16446){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16489 = cljs.core.keyword_identical_QMARK_;
var expr__16490 = k__5352__auto__;
if(cljs.core.truth_((pred__16489.cljs$core$IFn$_invoke$arity$2 ? pred__16489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16490) : pred__16489.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16490)))){
return (new shadow.dom.Coordinate(G__16446,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16489.cljs$core$IFn$_invoke$arity$2 ? pred__16489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16490) : pred__16489.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16490)))){
return (new shadow.dom.Coordinate(self__.x,G__16446,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16446),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16446){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16446,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16455){
var extmap__5385__auto__ = (function (){var G__16492 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16455,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16455)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16492);
} else {
return G__16492;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16455),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16455),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16494,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16498 = k16494;
var G__16498__$1 = (((G__16498 instanceof cljs.core.Keyword))?G__16498.fqn:null);
switch (G__16498__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16494,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16499){
var vec__16500 = p__16499;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16500,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16500,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16493){
var self__ = this;
var G__16493__$1 = this;
return (new cljs.core.RecordIter((0),G__16493__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16495,other16496){
var self__ = this;
var this16495__$1 = this;
return (((!((other16496 == null)))) && ((((this16495__$1.constructor === other16496.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16495__$1.w,other16496.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16495__$1.h,other16496.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16495__$1.__extmap,other16496.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16494){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16503 = k16494;
var G__16503__$1 = (((G__16503 instanceof cljs.core.Keyword))?G__16503.fqn:null);
switch (G__16503__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16494);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16493){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16504 = cljs.core.keyword_identical_QMARK_;
var expr__16505 = k__5352__auto__;
if(cljs.core.truth_((pred__16504.cljs$core$IFn$_invoke$arity$2 ? pred__16504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16505) : pred__16504.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16505)))){
return (new shadow.dom.Size(G__16493,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16504.cljs$core$IFn$_invoke$arity$2 ? pred__16504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16505) : pred__16504.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16505)))){
return (new shadow.dom.Size(self__.w,G__16493,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16493),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16493){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16493,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16497){
var extmap__5385__auto__ = (function (){var G__16507 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16497,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16497)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16507);
} else {
return G__16507;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16497),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16497),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16809 = (i + (1));
var G__16810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16809;
ret = G__16810;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16512){
var vec__16513 = p__16512;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16517 = arguments.length;
switch (G__16517) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16812 = ps;
var G__16813 = (i + (1));
el__$1 = G__16812;
i = G__16813;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16518 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16521_16817 = cljs.core.seq(props);
var chunk__16522_16818 = null;
var count__16523_16819 = (0);
var i__16524_16820 = (0);
while(true){
if((i__16524_16820 < count__16523_16819)){
var vec__16531_16821 = chunk__16522_16818.cljs$core$IIndexed$_nth$arity$2(null,i__16524_16820);
var k_16822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16531_16821,(0),null);
var v_16823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16531_16821,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16822);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16822),v_16823);


var G__16824 = seq__16521_16817;
var G__16825 = chunk__16522_16818;
var G__16826 = count__16523_16819;
var G__16827 = (i__16524_16820 + (1));
seq__16521_16817 = G__16824;
chunk__16522_16818 = G__16825;
count__16523_16819 = G__16826;
i__16524_16820 = G__16827;
continue;
} else {
var temp__5804__auto___16828 = cljs.core.seq(seq__16521_16817);
if(temp__5804__auto___16828){
var seq__16521_16829__$1 = temp__5804__auto___16828;
if(cljs.core.chunked_seq_QMARK_(seq__16521_16829__$1)){
var c__5568__auto___16830 = cljs.core.chunk_first(seq__16521_16829__$1);
var G__16831 = cljs.core.chunk_rest(seq__16521_16829__$1);
var G__16832 = c__5568__auto___16830;
var G__16833 = cljs.core.count(c__5568__auto___16830);
var G__16834 = (0);
seq__16521_16817 = G__16831;
chunk__16522_16818 = G__16832;
count__16523_16819 = G__16833;
i__16524_16820 = G__16834;
continue;
} else {
var vec__16534_16838 = cljs.core.first(seq__16521_16829__$1);
var k_16839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16534_16838,(0),null);
var v_16840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16534_16838,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16839);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16839),v_16840);


var G__16841 = cljs.core.next(seq__16521_16829__$1);
var G__16842 = null;
var G__16843 = (0);
var G__16844 = (0);
seq__16521_16817 = G__16841;
chunk__16522_16818 = G__16842;
count__16523_16819 = G__16843;
i__16524_16820 = G__16844;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16538 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16538,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16538,(1),null);
var seq__16541_16845 = cljs.core.seq(node_children);
var chunk__16543_16846 = null;
var count__16544_16847 = (0);
var i__16545_16848 = (0);
while(true){
if((i__16545_16848 < count__16544_16847)){
var child_struct_16849 = chunk__16543_16846.cljs$core$IIndexed$_nth$arity$2(null,i__16545_16848);
if((!((child_struct_16849 == null)))){
if(typeof child_struct_16849 === 'string'){
var text_16850 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16850),child_struct_16849].join(''));
} else {
var children_16851 = shadow.dom.svg_node(child_struct_16849);
if(cljs.core.seq_QMARK_(children_16851)){
var seq__16559_16852 = cljs.core.seq(children_16851);
var chunk__16561_16853 = null;
var count__16562_16854 = (0);
var i__16563_16855 = (0);
while(true){
if((i__16563_16855 < count__16562_16854)){
var child_16856 = chunk__16561_16853.cljs$core$IIndexed$_nth$arity$2(null,i__16563_16855);
if(cljs.core.truth_(child_16856)){
node.appendChild(child_16856);


var G__16857 = seq__16559_16852;
var G__16858 = chunk__16561_16853;
var G__16859 = count__16562_16854;
var G__16860 = (i__16563_16855 + (1));
seq__16559_16852 = G__16857;
chunk__16561_16853 = G__16858;
count__16562_16854 = G__16859;
i__16563_16855 = G__16860;
continue;
} else {
var G__16861 = seq__16559_16852;
var G__16862 = chunk__16561_16853;
var G__16863 = count__16562_16854;
var G__16864 = (i__16563_16855 + (1));
seq__16559_16852 = G__16861;
chunk__16561_16853 = G__16862;
count__16562_16854 = G__16863;
i__16563_16855 = G__16864;
continue;
}
} else {
var temp__5804__auto___16865 = cljs.core.seq(seq__16559_16852);
if(temp__5804__auto___16865){
var seq__16559_16866__$1 = temp__5804__auto___16865;
if(cljs.core.chunked_seq_QMARK_(seq__16559_16866__$1)){
var c__5568__auto___16867 = cljs.core.chunk_first(seq__16559_16866__$1);
var G__16868 = cljs.core.chunk_rest(seq__16559_16866__$1);
var G__16869 = c__5568__auto___16867;
var G__16870 = cljs.core.count(c__5568__auto___16867);
var G__16871 = (0);
seq__16559_16852 = G__16868;
chunk__16561_16853 = G__16869;
count__16562_16854 = G__16870;
i__16563_16855 = G__16871;
continue;
} else {
var child_16872 = cljs.core.first(seq__16559_16866__$1);
if(cljs.core.truth_(child_16872)){
node.appendChild(child_16872);


var G__16873 = cljs.core.next(seq__16559_16866__$1);
var G__16874 = null;
var G__16875 = (0);
var G__16876 = (0);
seq__16559_16852 = G__16873;
chunk__16561_16853 = G__16874;
count__16562_16854 = G__16875;
i__16563_16855 = G__16876;
continue;
} else {
var G__16877 = cljs.core.next(seq__16559_16866__$1);
var G__16878 = null;
var G__16879 = (0);
var G__16880 = (0);
seq__16559_16852 = G__16877;
chunk__16561_16853 = G__16878;
count__16562_16854 = G__16879;
i__16563_16855 = G__16880;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16851);
}
}


var G__16884 = seq__16541_16845;
var G__16885 = chunk__16543_16846;
var G__16886 = count__16544_16847;
var G__16887 = (i__16545_16848 + (1));
seq__16541_16845 = G__16884;
chunk__16543_16846 = G__16885;
count__16544_16847 = G__16886;
i__16545_16848 = G__16887;
continue;
} else {
var G__16888 = seq__16541_16845;
var G__16889 = chunk__16543_16846;
var G__16890 = count__16544_16847;
var G__16891 = (i__16545_16848 + (1));
seq__16541_16845 = G__16888;
chunk__16543_16846 = G__16889;
count__16544_16847 = G__16890;
i__16545_16848 = G__16891;
continue;
}
} else {
var temp__5804__auto___16892 = cljs.core.seq(seq__16541_16845);
if(temp__5804__auto___16892){
var seq__16541_16893__$1 = temp__5804__auto___16892;
if(cljs.core.chunked_seq_QMARK_(seq__16541_16893__$1)){
var c__5568__auto___16894 = cljs.core.chunk_first(seq__16541_16893__$1);
var G__16895 = cljs.core.chunk_rest(seq__16541_16893__$1);
var G__16896 = c__5568__auto___16894;
var G__16897 = cljs.core.count(c__5568__auto___16894);
var G__16898 = (0);
seq__16541_16845 = G__16895;
chunk__16543_16846 = G__16896;
count__16544_16847 = G__16897;
i__16545_16848 = G__16898;
continue;
} else {
var child_struct_16899 = cljs.core.first(seq__16541_16893__$1);
if((!((child_struct_16899 == null)))){
if(typeof child_struct_16899 === 'string'){
var text_16900 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16900),child_struct_16899].join(''));
} else {
var children_16901 = shadow.dom.svg_node(child_struct_16899);
if(cljs.core.seq_QMARK_(children_16901)){
var seq__16565_16902 = cljs.core.seq(children_16901);
var chunk__16567_16903 = null;
var count__16568_16904 = (0);
var i__16569_16905 = (0);
while(true){
if((i__16569_16905 < count__16568_16904)){
var child_16906 = chunk__16567_16903.cljs$core$IIndexed$_nth$arity$2(null,i__16569_16905);
if(cljs.core.truth_(child_16906)){
node.appendChild(child_16906);


var G__16907 = seq__16565_16902;
var G__16908 = chunk__16567_16903;
var G__16909 = count__16568_16904;
var G__16910 = (i__16569_16905 + (1));
seq__16565_16902 = G__16907;
chunk__16567_16903 = G__16908;
count__16568_16904 = G__16909;
i__16569_16905 = G__16910;
continue;
} else {
var G__16911 = seq__16565_16902;
var G__16912 = chunk__16567_16903;
var G__16913 = count__16568_16904;
var G__16914 = (i__16569_16905 + (1));
seq__16565_16902 = G__16911;
chunk__16567_16903 = G__16912;
count__16568_16904 = G__16913;
i__16569_16905 = G__16914;
continue;
}
} else {
var temp__5804__auto___16915__$1 = cljs.core.seq(seq__16565_16902);
if(temp__5804__auto___16915__$1){
var seq__16565_16916__$1 = temp__5804__auto___16915__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16565_16916__$1)){
var c__5568__auto___16917 = cljs.core.chunk_first(seq__16565_16916__$1);
var G__16918 = cljs.core.chunk_rest(seq__16565_16916__$1);
var G__16919 = c__5568__auto___16917;
var G__16920 = cljs.core.count(c__5568__auto___16917);
var G__16921 = (0);
seq__16565_16902 = G__16918;
chunk__16567_16903 = G__16919;
count__16568_16904 = G__16920;
i__16569_16905 = G__16921;
continue;
} else {
var child_16922 = cljs.core.first(seq__16565_16916__$1);
if(cljs.core.truth_(child_16922)){
node.appendChild(child_16922);


var G__16923 = cljs.core.next(seq__16565_16916__$1);
var G__16924 = null;
var G__16925 = (0);
var G__16926 = (0);
seq__16565_16902 = G__16923;
chunk__16567_16903 = G__16924;
count__16568_16904 = G__16925;
i__16569_16905 = G__16926;
continue;
} else {
var G__16927 = cljs.core.next(seq__16565_16916__$1);
var G__16928 = null;
var G__16929 = (0);
var G__16930 = (0);
seq__16565_16902 = G__16927;
chunk__16567_16903 = G__16928;
count__16568_16904 = G__16929;
i__16569_16905 = G__16930;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16901);
}
}


var G__16931 = cljs.core.next(seq__16541_16893__$1);
var G__16932 = null;
var G__16933 = (0);
var G__16934 = (0);
seq__16541_16845 = G__16931;
chunk__16543_16846 = G__16932;
count__16544_16847 = G__16933;
i__16545_16848 = G__16934;
continue;
} else {
var G__16935 = cljs.core.next(seq__16541_16893__$1);
var G__16936 = null;
var G__16937 = (0);
var G__16938 = (0);
seq__16541_16845 = G__16935;
chunk__16543_16846 = G__16936;
count__16544_16847 = G__16937;
i__16545_16848 = G__16938;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16939 = arguments.length;
var i__5770__auto___16940 = (0);
while(true){
if((i__5770__auto___16940 < len__5769__auto___16939)){
args__5775__auto__.push((arguments[i__5770__auto___16940]));

var G__16941 = (i__5770__auto___16940 + (1));
i__5770__auto___16940 = G__16941;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16571){
var G__16572 = cljs.core.first(seq16571);
var seq16571__$1 = cljs.core.next(seq16571);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16572,seq16571__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__16574 = arguments.length;
switch (G__16574) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13731__auto___16943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_16579){
var state_val_16580 = (state_16579[(1)]);
if((state_val_16580 === (1))){
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16579__$1,(2),once_or_cleanup);
} else {
if((state_val_16580 === (2))){
var inst_16576 = (state_16579[(2)]);
var inst_16577 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_16579__$1 = (function (){var statearr_16581 = state_16579;
(statearr_16581[(7)] = inst_16576);

return statearr_16581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16579__$1,inst_16577);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13571__auto__ = null;
var shadow$dom$state_machine__13571__auto____0 = (function (){
var statearr_16582 = [null,null,null,null,null,null,null,null];
(statearr_16582[(0)] = shadow$dom$state_machine__13571__auto__);

(statearr_16582[(1)] = (1));

return statearr_16582;
});
var shadow$dom$state_machine__13571__auto____1 = (function (state_16579){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_16579);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e16583){var ex__13574__auto__ = e16583;
var statearr_16584_16948 = state_16579;
(statearr_16584_16948[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_16579[(4)]))){
var statearr_16585_16949 = state_16579;
(statearr_16585_16949[(1)] = cljs.core.first((state_16579[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16950 = state_16579;
state_16579 = G__16950;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
shadow$dom$state_machine__13571__auto__ = function(state_16579){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13571__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13571__auto____1.call(this,state_16579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13571__auto____0;
shadow$dom$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13571__auto____1;
return shadow$dom$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_16586 = f__13732__auto__();
(statearr_16586[(6)] = c__13731__auto___16943);

return statearr_16586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
