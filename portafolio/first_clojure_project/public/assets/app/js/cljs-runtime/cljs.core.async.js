goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13825 = (function (f,blockable,meta13826){
this.f = f;
this.blockable = blockable;
this.meta13826 = meta13826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13827,meta13826__$1){
var self__ = this;
var _13827__$1 = this;
return (new cljs.core.async.t_cljs$core$async13825(self__.f,self__.blockable,meta13826__$1));
}));

(cljs.core.async.t_cljs$core$async13825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13827){
var self__ = this;
var _13827__$1 = this;
return self__.meta13826;
}));

(cljs.core.async.t_cljs$core$async13825.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13825.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13826","meta13826",-561890394,null)], null);
}));

(cljs.core.async.t_cljs$core$async13825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13825");

(cljs.core.async.t_cljs$core$async13825.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13825.
 */
cljs.core.async.__GT_t_cljs$core$async13825 = (function cljs$core$async$__GT_t_cljs$core$async13825(f,blockable,meta13826){
return (new cljs.core.async.t_cljs$core$async13825(f,blockable,meta13826));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13811 = arguments.length;
switch (G__13811) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13825(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13847 = arguments.length;
switch (G__13847) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13871 = arguments.length;
switch (G__13871) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13879 = arguments.length;
switch (G__13879) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15877 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15877) : fn1.call(null,val_15877));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15877) : fn1.call(null,val_15877));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13903 = arguments.length;
switch (G__13903) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15883 = n;
var x_15884 = (0);
while(true){
if((x_15884 < n__5636__auto___15883)){
(a[x_15884] = x_15884);

var G__15885 = (x_15884 + (1));
x_15884 = G__15885;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13915 = (function (flag,meta13916){
this.flag = flag;
this.meta13916 = meta13916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13917,meta13916__$1){
var self__ = this;
var _13917__$1 = this;
return (new cljs.core.async.t_cljs$core$async13915(self__.flag,meta13916__$1));
}));

(cljs.core.async.t_cljs$core$async13915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13917){
var self__ = this;
var _13917__$1 = this;
return self__.meta13916;
}));

(cljs.core.async.t_cljs$core$async13915.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13916","meta13916",-200490941,null)], null);
}));

(cljs.core.async.t_cljs$core$async13915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13915");

(cljs.core.async.t_cljs$core$async13915.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13915.
 */
cljs.core.async.__GT_t_cljs$core$async13915 = (function cljs$core$async$__GT_t_cljs$core$async13915(flag,meta13916){
return (new cljs.core.async.t_cljs$core$async13915(flag,meta13916));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13915(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13924 = (function (flag,cb,meta13925){
this.flag = flag;
this.cb = cb;
this.meta13925 = meta13925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13926,meta13925__$1){
var self__ = this;
var _13926__$1 = this;
return (new cljs.core.async.t_cljs$core$async13924(self__.flag,self__.cb,meta13925__$1));
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13926){
var self__ = this;
var _13926__$1 = this;
return self__.meta13925;
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13925","meta13925",1473318438,null)], null);
}));

(cljs.core.async.t_cljs$core$async13924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13924");

(cljs.core.async.t_cljs$core$async13924.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13924.
 */
cljs.core.async.__GT_t_cljs$core$async13924 = (function cljs$core$async$__GT_t_cljs$core$async13924(flag,cb,meta13925){
return (new cljs.core.async.t_cljs$core$async13924(flag,cb,meta13925));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13924(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13987_SHARP_){
var G__14004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13987_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14004) : fret.call(null,G__14004));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13988_SHARP_){
var G__14005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13988_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14005) : fret.call(null,G__14005));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15890 = (i + (1));
i = G__15890;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15891 = arguments.length;
var i__5770__auto___15892 = (0);
while(true){
if((i__5770__auto___15892 < len__5769__auto___15891)){
args__5775__auto__.push((arguments[i__5770__auto___15892]));

var G__15893 = (i__5770__auto___15892 + (1));
i__5770__auto___15892 = G__15893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14013){
var map__14014 = p__14013;
var map__14014__$1 = cljs.core.__destructure_map(map__14014);
var opts = map__14014__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14011){
var G__14012 = cljs.core.first(seq14011);
var seq14011__$1 = cljs.core.next(seq14011);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14012,seq14011__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14023 = arguments.length;
switch (G__14023) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13731__auto___15895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14059){
var state_val_14060 = (state_14059[(1)]);
if((state_val_14060 === (7))){
var inst_14052 = (state_14059[(2)]);
var state_14059__$1 = state_14059;
var statearr_14062_15896 = state_14059__$1;
(statearr_14062_15896[(2)] = inst_14052);

(statearr_14062_15896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (1))){
var state_14059__$1 = state_14059;
var statearr_14063_15897 = state_14059__$1;
(statearr_14063_15897[(2)] = null);

(statearr_14063_15897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (4))){
var inst_14030 = (state_14059[(7)]);
var inst_14030__$1 = (state_14059[(2)]);
var inst_14031 = (inst_14030__$1 == null);
var state_14059__$1 = (function (){var statearr_14066 = state_14059;
(statearr_14066[(7)] = inst_14030__$1);

return statearr_14066;
})();
if(cljs.core.truth_(inst_14031)){
var statearr_14067_15898 = state_14059__$1;
(statearr_14067_15898[(1)] = (5));

} else {
var statearr_14068_15899 = state_14059__$1;
(statearr_14068_15899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (13))){
var state_14059__$1 = state_14059;
var statearr_14069_15900 = state_14059__$1;
(statearr_14069_15900[(2)] = null);

(statearr_14069_15900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (6))){
var inst_14030 = (state_14059[(7)]);
var state_14059__$1 = state_14059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14059__$1,(11),to,inst_14030);
} else {
if((state_val_14060 === (3))){
var inst_14056 = (state_14059[(2)]);
var state_14059__$1 = state_14059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14059__$1,inst_14056);
} else {
if((state_val_14060 === (12))){
var state_14059__$1 = state_14059;
var statearr_14078_15901 = state_14059__$1;
(statearr_14078_15901[(2)] = null);

(statearr_14078_15901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (2))){
var state_14059__$1 = state_14059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14059__$1,(4),from);
} else {
if((state_val_14060 === (11))){
var inst_14043 = (state_14059[(2)]);
var state_14059__$1 = state_14059;
if(cljs.core.truth_(inst_14043)){
var statearr_14083_15902 = state_14059__$1;
(statearr_14083_15902[(1)] = (12));

} else {
var statearr_14084_15903 = state_14059__$1;
(statearr_14084_15903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (9))){
var state_14059__$1 = state_14059;
var statearr_14085_15904 = state_14059__$1;
(statearr_14085_15904[(2)] = null);

(statearr_14085_15904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (5))){
var state_14059__$1 = state_14059;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14086_15905 = state_14059__$1;
(statearr_14086_15905[(1)] = (8));

} else {
var statearr_14087_15906 = state_14059__$1;
(statearr_14087_15906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (14))){
var inst_14050 = (state_14059[(2)]);
var state_14059__$1 = state_14059;
var statearr_14088_15907 = state_14059__$1;
(statearr_14088_15907[(2)] = inst_14050);

(statearr_14088_15907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (10))){
var inst_14039 = (state_14059[(2)]);
var state_14059__$1 = state_14059;
var statearr_14089_15908 = state_14059__$1;
(statearr_14089_15908[(2)] = inst_14039);

(statearr_14089_15908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14060 === (8))){
var inst_14036 = cljs.core.async.close_BANG_(to);
var state_14059__$1 = state_14059;
var statearr_14090_15909 = state_14059__$1;
(statearr_14090_15909[(2)] = inst_14036);

(statearr_14090_15909[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_14091 = [null,null,null,null,null,null,null,null];
(statearr_14091[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_14091[(1)] = (1));

return statearr_14091;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_14059){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14059);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14094){var ex__13574__auto__ = e14094;
var statearr_14096_15910 = state_14059;
(statearr_14096_15910[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14059[(4)]))){
var statearr_14097_15911 = state_14059;
(statearr_14097_15911[(1)] = cljs.core.first((state_14059[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15912 = state_14059;
state_14059 = G__15912;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_14059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_14059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14098 = f__13732__auto__();
(statearr_14098[(6)] = c__13731__auto___15895);

return statearr_14098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14105){
var vec__14106 = p__14105;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(1),null);
var job = vec__14106;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13731__auto___15913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14115){
var state_val_14116 = (state_14115[(1)]);
if((state_val_14116 === (1))){
var state_14115__$1 = state_14115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14115__$1,(2),res,v);
} else {
if((state_val_14116 === (2))){
var inst_14112 = (state_14115[(2)]);
var inst_14113 = cljs.core.async.close_BANG_(res);
var state_14115__$1 = (function (){var statearr_14117 = state_14115;
(statearr_14117[(7)] = inst_14112);

return statearr_14117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14115__$1,inst_14113);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0 = (function (){
var statearr_14118 = [null,null,null,null,null,null,null,null];
(statearr_14118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__);

(statearr_14118[(1)] = (1));

return statearr_14118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1 = (function (state_14115){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14115);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14119){var ex__13574__auto__ = e14119;
var statearr_14120_15914 = state_14115;
(statearr_14120_15914[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14115[(4)]))){
var statearr_14121_15915 = state_14115;
(statearr_14121_15915[(1)] = cljs.core.first((state_14115[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15916 = state_14115;
state_14115 = G__15916;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = function(state_14115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1.call(this,state_14115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14122 = f__13732__auto__();
(statearr_14122[(6)] = c__13731__auto___15913);

return statearr_14122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14123){
var vec__14124 = p__14123;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14124,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14124,(1),null);
var job = vec__14124;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15917 = n;
var __15918 = (0);
while(true){
if((__15918 < n__5636__auto___15917)){
var G__14127_15919 = type;
var G__14127_15920__$1 = (((G__14127_15919 instanceof cljs.core.Keyword))?G__14127_15919.fqn:null);
switch (G__14127_15920__$1) {
case "compute":
var c__13731__auto___15922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15918,c__13731__auto___15922,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async){
return (function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = ((function (__15918,c__13731__auto___15922,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async){
return (function (state_14140){
var state_val_14141 = (state_14140[(1)]);
if((state_val_14141 === (1))){
var state_14140__$1 = state_14140;
var statearr_14142_15925 = state_14140__$1;
(statearr_14142_15925[(2)] = null);

(statearr_14142_15925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14141 === (2))){
var state_14140__$1 = state_14140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14140__$1,(4),jobs);
} else {
if((state_val_14141 === (3))){
var inst_14138 = (state_14140[(2)]);
var state_14140__$1 = state_14140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14140__$1,inst_14138);
} else {
if((state_val_14141 === (4))){
var inst_14130 = (state_14140[(2)]);
var inst_14131 = process__$1(inst_14130);
var state_14140__$1 = state_14140;
if(cljs.core.truth_(inst_14131)){
var statearr_14143_15926 = state_14140__$1;
(statearr_14143_15926[(1)] = (5));

} else {
var statearr_14144_15927 = state_14140__$1;
(statearr_14144_15927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14141 === (5))){
var state_14140__$1 = state_14140;
var statearr_14145_15928 = state_14140__$1;
(statearr_14145_15928[(2)] = null);

(statearr_14145_15928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14141 === (6))){
var state_14140__$1 = state_14140;
var statearr_14146_15929 = state_14140__$1;
(statearr_14146_15929[(2)] = null);

(statearr_14146_15929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14141 === (7))){
var inst_14136 = (state_14140[(2)]);
var state_14140__$1 = state_14140;
var statearr_14147_15930 = state_14140__$1;
(statearr_14147_15930[(2)] = inst_14136);

(statearr_14147_15930[(1)] = (3));


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
});})(__15918,c__13731__auto___15922,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async))
;
return ((function (__15918,switch__13570__auto__,c__13731__auto___15922,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0 = (function (){
var statearr_14148 = [null,null,null,null,null,null,null];
(statearr_14148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__);

(statearr_14148[(1)] = (1));

return statearr_14148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1 = (function (state_14140){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14140);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14149){var ex__13574__auto__ = e14149;
var statearr_14150_15931 = state_14140;
(statearr_14150_15931[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14140[(4)]))){
var statearr_14151_15932 = state_14140;
(statearr_14151_15932[(1)] = cljs.core.first((state_14140[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15933 = state_14140;
state_14140 = G__15933;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = function(state_14140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1.call(this,state_14140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__;
})()
;})(__15918,switch__13570__auto__,c__13731__auto___15922,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async))
})();
var state__13733__auto__ = (function (){var statearr_14152 = f__13732__auto__();
(statearr_14152[(6)] = c__13731__auto___15922);

return statearr_14152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
});})(__15918,c__13731__auto___15922,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async))
);


break;
case "async":
var c__13731__auto___15934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15918,c__13731__auto___15934,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async){
return (function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = ((function (__15918,c__13731__auto___15934,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async){
return (function (state_14165){
var state_val_14166 = (state_14165[(1)]);
if((state_val_14166 === (1))){
var state_14165__$1 = state_14165;
var statearr_14168_15935 = state_14165__$1;
(statearr_14168_15935[(2)] = null);

(statearr_14168_15935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (2))){
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14165__$1,(4),jobs);
} else {
if((state_val_14166 === (3))){
var inst_14163 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14165__$1,inst_14163);
} else {
if((state_val_14166 === (4))){
var inst_14155 = (state_14165[(2)]);
var inst_14156 = async(inst_14155);
var state_14165__$1 = state_14165;
if(cljs.core.truth_(inst_14156)){
var statearr_14169_15936 = state_14165__$1;
(statearr_14169_15936[(1)] = (5));

} else {
var statearr_14170_15937 = state_14165__$1;
(statearr_14170_15937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (5))){
var state_14165__$1 = state_14165;
var statearr_14171_15938 = state_14165__$1;
(statearr_14171_15938[(2)] = null);

(statearr_14171_15938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (6))){
var state_14165__$1 = state_14165;
var statearr_14172_15939 = state_14165__$1;
(statearr_14172_15939[(2)] = null);

(statearr_14172_15939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (7))){
var inst_14161 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14173_15940 = state_14165__$1;
(statearr_14173_15940[(2)] = inst_14161);

(statearr_14173_15940[(1)] = (3));


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
});})(__15918,c__13731__auto___15934,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async))
;
return ((function (__15918,switch__13570__auto__,c__13731__auto___15934,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0 = (function (){
var statearr_14176 = [null,null,null,null,null,null,null];
(statearr_14176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__);

(statearr_14176[(1)] = (1));

return statearr_14176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1 = (function (state_14165){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14165);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14178){var ex__13574__auto__ = e14178;
var statearr_14179_15941 = state_14165;
(statearr_14179_15941[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14165[(4)]))){
var statearr_14181_15942 = state_14165;
(statearr_14181_15942[(1)] = cljs.core.first((state_14165[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15943 = state_14165;
state_14165 = G__15943;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = function(state_14165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1.call(this,state_14165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__;
})()
;})(__15918,switch__13570__auto__,c__13731__auto___15934,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async))
})();
var state__13733__auto__ = (function (){var statearr_14182 = f__13732__auto__();
(statearr_14182[(6)] = c__13731__auto___15934);

return statearr_14182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
});})(__15918,c__13731__auto___15934,G__14127_15919,G__14127_15920__$1,n__5636__auto___15917,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14127_15920__$1)].join('')));

}

var G__15944 = (__15918 + (1));
__15918 = G__15944;
continue;
} else {
}
break;
}

var c__13731__auto___15945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14204){
var state_val_14205 = (state_14204[(1)]);
if((state_val_14205 === (7))){
var inst_14200 = (state_14204[(2)]);
var state_14204__$1 = state_14204;
var statearr_14206_15946 = state_14204__$1;
(statearr_14206_15946[(2)] = inst_14200);

(statearr_14206_15946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14205 === (1))){
var state_14204__$1 = state_14204;
var statearr_14207_15947 = state_14204__$1;
(statearr_14207_15947[(2)] = null);

(statearr_14207_15947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14205 === (4))){
var inst_14185 = (state_14204[(7)]);
var inst_14185__$1 = (state_14204[(2)]);
var inst_14186 = (inst_14185__$1 == null);
var state_14204__$1 = (function (){var statearr_14208 = state_14204;
(statearr_14208[(7)] = inst_14185__$1);

return statearr_14208;
})();
if(cljs.core.truth_(inst_14186)){
var statearr_14209_15948 = state_14204__$1;
(statearr_14209_15948[(1)] = (5));

} else {
var statearr_14210_15949 = state_14204__$1;
(statearr_14210_15949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14205 === (6))){
var inst_14190 = (state_14204[(8)]);
var inst_14185 = (state_14204[(7)]);
var inst_14190__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14192 = [inst_14185,inst_14190__$1];
var inst_14193 = (new cljs.core.PersistentVector(null,2,(5),inst_14191,inst_14192,null));
var state_14204__$1 = (function (){var statearr_14211 = state_14204;
(statearr_14211[(8)] = inst_14190__$1);

return statearr_14211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14204__$1,(8),jobs,inst_14193);
} else {
if((state_val_14205 === (3))){
var inst_14202 = (state_14204[(2)]);
var state_14204__$1 = state_14204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14204__$1,inst_14202);
} else {
if((state_val_14205 === (2))){
var state_14204__$1 = state_14204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14204__$1,(4),from);
} else {
if((state_val_14205 === (9))){
var inst_14197 = (state_14204[(2)]);
var state_14204__$1 = (function (){var statearr_14212 = state_14204;
(statearr_14212[(9)] = inst_14197);

return statearr_14212;
})();
var statearr_14213_15950 = state_14204__$1;
(statearr_14213_15950[(2)] = null);

(statearr_14213_15950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14205 === (5))){
var inst_14188 = cljs.core.async.close_BANG_(jobs);
var state_14204__$1 = state_14204;
var statearr_14214_15951 = state_14204__$1;
(statearr_14214_15951[(2)] = inst_14188);

(statearr_14214_15951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14205 === (8))){
var inst_14190 = (state_14204[(8)]);
var inst_14195 = (state_14204[(2)]);
var state_14204__$1 = (function (){var statearr_14215 = state_14204;
(statearr_14215[(10)] = inst_14195);

return statearr_14215;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14204__$1,(9),results,inst_14190);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0 = (function (){
var statearr_14216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__);

(statearr_14216[(1)] = (1));

return statearr_14216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1 = (function (state_14204){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14204);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14217){var ex__13574__auto__ = e14217;
var statearr_14218_15952 = state_14204;
(statearr_14218_15952[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14204[(4)]))){
var statearr_14219_15953 = state_14204;
(statearr_14219_15953[(1)] = cljs.core.first((state_14204[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15954 = state_14204;
state_14204 = G__15954;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = function(state_14204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1.call(this,state_14204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14220 = f__13732__auto__();
(statearr_14220[(6)] = c__13731__auto___15945);

return statearr_14220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


var c__13731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14261){
var state_val_14262 = (state_14261[(1)]);
if((state_val_14262 === (7))){
var inst_14257 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14263_15955 = state_14261__$1;
(statearr_14263_15955[(2)] = inst_14257);

(statearr_14263_15955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (20))){
var state_14261__$1 = state_14261;
var statearr_14264_15956 = state_14261__$1;
(statearr_14264_15956[(2)] = null);

(statearr_14264_15956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (1))){
var state_14261__$1 = state_14261;
var statearr_14265_15957 = state_14261__$1;
(statearr_14265_15957[(2)] = null);

(statearr_14265_15957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (4))){
var inst_14223 = (state_14261[(7)]);
var inst_14223__$1 = (state_14261[(2)]);
var inst_14224 = (inst_14223__$1 == null);
var state_14261__$1 = (function (){var statearr_14266 = state_14261;
(statearr_14266[(7)] = inst_14223__$1);

return statearr_14266;
})();
if(cljs.core.truth_(inst_14224)){
var statearr_14267_15958 = state_14261__$1;
(statearr_14267_15958[(1)] = (5));

} else {
var statearr_14268_15959 = state_14261__$1;
(statearr_14268_15959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (15))){
var inst_14237 = (state_14261[(8)]);
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14261__$1,(18),to,inst_14237);
} else {
if((state_val_14262 === (21))){
var inst_14251 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14269_15960 = state_14261__$1;
(statearr_14269_15960[(2)] = inst_14251);

(statearr_14269_15960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (13))){
var inst_14253 = (state_14261[(2)]);
var state_14261__$1 = (function (){var statearr_14270 = state_14261;
(statearr_14270[(9)] = inst_14253);

return statearr_14270;
})();
var statearr_14271_15961 = state_14261__$1;
(statearr_14271_15961[(2)] = null);

(statearr_14271_15961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (6))){
var inst_14223 = (state_14261[(7)]);
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14261__$1,(11),inst_14223);
} else {
if((state_val_14262 === (17))){
var inst_14246 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
if(cljs.core.truth_(inst_14246)){
var statearr_14272_15962 = state_14261__$1;
(statearr_14272_15962[(1)] = (19));

} else {
var statearr_14273_15963 = state_14261__$1;
(statearr_14273_15963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (3))){
var inst_14259 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14261__$1,inst_14259);
} else {
if((state_val_14262 === (12))){
var inst_14234 = (state_14261[(10)]);
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14261__$1,(14),inst_14234);
} else {
if((state_val_14262 === (2))){
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14261__$1,(4),results);
} else {
if((state_val_14262 === (19))){
var state_14261__$1 = state_14261;
var statearr_14274_15964 = state_14261__$1;
(statearr_14274_15964[(2)] = null);

(statearr_14274_15964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (11))){
var inst_14234 = (state_14261[(2)]);
var state_14261__$1 = (function (){var statearr_14275 = state_14261;
(statearr_14275[(10)] = inst_14234);

return statearr_14275;
})();
var statearr_14276_15965 = state_14261__$1;
(statearr_14276_15965[(2)] = null);

(statearr_14276_15965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (9))){
var state_14261__$1 = state_14261;
var statearr_14277_15966 = state_14261__$1;
(statearr_14277_15966[(2)] = null);

(statearr_14277_15966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (5))){
var state_14261__$1 = state_14261;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14279_15967 = state_14261__$1;
(statearr_14279_15967[(1)] = (8));

} else {
var statearr_14280_15968 = state_14261__$1;
(statearr_14280_15968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (14))){
var inst_14237 = (state_14261[(8)]);
var inst_14240 = (state_14261[(11)]);
var inst_14237__$1 = (state_14261[(2)]);
var inst_14239 = (inst_14237__$1 == null);
var inst_14240__$1 = cljs.core.not(inst_14239);
var state_14261__$1 = (function (){var statearr_14281 = state_14261;
(statearr_14281[(8)] = inst_14237__$1);

(statearr_14281[(11)] = inst_14240__$1);

return statearr_14281;
})();
if(inst_14240__$1){
var statearr_14282_15969 = state_14261__$1;
(statearr_14282_15969[(1)] = (15));

} else {
var statearr_14283_15970 = state_14261__$1;
(statearr_14283_15970[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (16))){
var inst_14240 = (state_14261[(11)]);
var state_14261__$1 = state_14261;
var statearr_14284_15971 = state_14261__$1;
(statearr_14284_15971[(2)] = inst_14240);

(statearr_14284_15971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (10))){
var inst_14230 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14285_15972 = state_14261__$1;
(statearr_14285_15972[(2)] = inst_14230);

(statearr_14285_15972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (18))){
var inst_14243 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14286_15973 = state_14261__$1;
(statearr_14286_15973[(2)] = inst_14243);

(statearr_14286_15973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (8))){
var inst_14227 = cljs.core.async.close_BANG_(to);
var state_14261__$1 = state_14261;
var statearr_14287_15974 = state_14261__$1;
(statearr_14287_15974[(2)] = inst_14227);

(statearr_14287_15974[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0 = (function (){
var statearr_14290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__);

(statearr_14290[(1)] = (1));

return statearr_14290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1 = (function (state_14261){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14261);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14292){var ex__13574__auto__ = e14292;
var statearr_14293_15976 = state_14261;
(statearr_14293_15976[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14261[(4)]))){
var statearr_14294_15977 = state_14261;
(statearr_14294_15977[(1)] = cljs.core.first((state_14261[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15978 = state_14261;
state_14261 = G__15978;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__ = function(state_14261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1.call(this,state_14261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14295 = f__13732__auto__();
(statearr_14295[(6)] = c__13731__auto__);

return statearr_14295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));

return c__13731__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14297 = arguments.length;
switch (G__14297) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14299 = arguments.length;
switch (G__14299) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14301 = arguments.length;
switch (G__14301) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13731__auto___15984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14327){
var state_val_14328 = (state_14327[(1)]);
if((state_val_14328 === (7))){
var inst_14323 = (state_14327[(2)]);
var state_14327__$1 = state_14327;
var statearr_14330_15985 = state_14327__$1;
(statearr_14330_15985[(2)] = inst_14323);

(statearr_14330_15985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (1))){
var state_14327__$1 = state_14327;
var statearr_14331_15986 = state_14327__$1;
(statearr_14331_15986[(2)] = null);

(statearr_14331_15986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (4))){
var inst_14304 = (state_14327[(7)]);
var inst_14304__$1 = (state_14327[(2)]);
var inst_14305 = (inst_14304__$1 == null);
var state_14327__$1 = (function (){var statearr_14332 = state_14327;
(statearr_14332[(7)] = inst_14304__$1);

return statearr_14332;
})();
if(cljs.core.truth_(inst_14305)){
var statearr_14333_15987 = state_14327__$1;
(statearr_14333_15987[(1)] = (5));

} else {
var statearr_14334_15988 = state_14327__$1;
(statearr_14334_15988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (13))){
var state_14327__$1 = state_14327;
var statearr_14335_15989 = state_14327__$1;
(statearr_14335_15989[(2)] = null);

(statearr_14335_15989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (6))){
var inst_14304 = (state_14327[(7)]);
var inst_14310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14304) : p.call(null,inst_14304));
var state_14327__$1 = state_14327;
if(cljs.core.truth_(inst_14310)){
var statearr_14336_15990 = state_14327__$1;
(statearr_14336_15990[(1)] = (9));

} else {
var statearr_14337_15991 = state_14327__$1;
(statearr_14337_15991[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (3))){
var inst_14325 = (state_14327[(2)]);
var state_14327__$1 = state_14327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14327__$1,inst_14325);
} else {
if((state_val_14328 === (12))){
var state_14327__$1 = state_14327;
var statearr_14338_15992 = state_14327__$1;
(statearr_14338_15992[(2)] = null);

(statearr_14338_15992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (2))){
var state_14327__$1 = state_14327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14327__$1,(4),ch);
} else {
if((state_val_14328 === (11))){
var inst_14304 = (state_14327[(7)]);
var inst_14314 = (state_14327[(2)]);
var state_14327__$1 = state_14327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14327__$1,(8),inst_14314,inst_14304);
} else {
if((state_val_14328 === (9))){
var state_14327__$1 = state_14327;
var statearr_14339_15993 = state_14327__$1;
(statearr_14339_15993[(2)] = tc);

(statearr_14339_15993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (5))){
var inst_14307 = cljs.core.async.close_BANG_(tc);
var inst_14308 = cljs.core.async.close_BANG_(fc);
var state_14327__$1 = (function (){var statearr_14340 = state_14327;
(statearr_14340[(8)] = inst_14307);

return statearr_14340;
})();
var statearr_14341_15994 = state_14327__$1;
(statearr_14341_15994[(2)] = inst_14308);

(statearr_14341_15994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (14))){
var inst_14321 = (state_14327[(2)]);
var state_14327__$1 = state_14327;
var statearr_14342_15995 = state_14327__$1;
(statearr_14342_15995[(2)] = inst_14321);

(statearr_14342_15995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (10))){
var state_14327__$1 = state_14327;
var statearr_14343_15996 = state_14327__$1;
(statearr_14343_15996[(2)] = fc);

(statearr_14343_15996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14328 === (8))){
var inst_14316 = (state_14327[(2)]);
var state_14327__$1 = state_14327;
if(cljs.core.truth_(inst_14316)){
var statearr_14344_15998 = state_14327__$1;
(statearr_14344_15998[(1)] = (12));

} else {
var statearr_14345_15999 = state_14327__$1;
(statearr_14345_15999[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_14346 = [null,null,null,null,null,null,null,null,null];
(statearr_14346[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_14346[(1)] = (1));

return statearr_14346;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_14327){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14327);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14351){var ex__13574__auto__ = e14351;
var statearr_14352_16001 = state_14327;
(statearr_14352_16001[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14327[(4)]))){
var statearr_14357_16002 = state_14327;
(statearr_14357_16002[(1)] = cljs.core.first((state_14327[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16003 = state_14327;
state_14327 = G__16003;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_14327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_14327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14362 = f__13732__auto__();
(statearr_14362[(6)] = c__13731__auto___15984);

return statearr_14362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14386){
var state_val_14387 = (state_14386[(1)]);
if((state_val_14387 === (7))){
var inst_14382 = (state_14386[(2)]);
var state_14386__$1 = state_14386;
var statearr_14388_16004 = state_14386__$1;
(statearr_14388_16004[(2)] = inst_14382);

(statearr_14388_16004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (1))){
var inst_14365 = init;
var inst_14366 = inst_14365;
var state_14386__$1 = (function (){var statearr_14389 = state_14386;
(statearr_14389[(7)] = inst_14366);

return statearr_14389;
})();
var statearr_14390_16006 = state_14386__$1;
(statearr_14390_16006[(2)] = null);

(statearr_14390_16006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (4))){
var inst_14369 = (state_14386[(8)]);
var inst_14369__$1 = (state_14386[(2)]);
var inst_14370 = (inst_14369__$1 == null);
var state_14386__$1 = (function (){var statearr_14394 = state_14386;
(statearr_14394[(8)] = inst_14369__$1);

return statearr_14394;
})();
if(cljs.core.truth_(inst_14370)){
var statearr_14395_16007 = state_14386__$1;
(statearr_14395_16007[(1)] = (5));

} else {
var statearr_14396_16008 = state_14386__$1;
(statearr_14396_16008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (6))){
var inst_14373 = (state_14386[(9)]);
var inst_14366 = (state_14386[(7)]);
var inst_14369 = (state_14386[(8)]);
var inst_14373__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14366,inst_14369) : f.call(null,inst_14366,inst_14369));
var inst_14374 = cljs.core.reduced_QMARK_(inst_14373__$1);
var state_14386__$1 = (function (){var statearr_14397 = state_14386;
(statearr_14397[(9)] = inst_14373__$1);

return statearr_14397;
})();
if(inst_14374){
var statearr_14400_16009 = state_14386__$1;
(statearr_14400_16009[(1)] = (8));

} else {
var statearr_14403_16010 = state_14386__$1;
(statearr_14403_16010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (3))){
var inst_14384 = (state_14386[(2)]);
var state_14386__$1 = state_14386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14386__$1,inst_14384);
} else {
if((state_val_14387 === (2))){
var state_14386__$1 = state_14386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14386__$1,(4),ch);
} else {
if((state_val_14387 === (9))){
var inst_14373 = (state_14386[(9)]);
var inst_14366 = inst_14373;
var state_14386__$1 = (function (){var statearr_14408 = state_14386;
(statearr_14408[(7)] = inst_14366);

return statearr_14408;
})();
var statearr_14411_16012 = state_14386__$1;
(statearr_14411_16012[(2)] = null);

(statearr_14411_16012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (5))){
var inst_14366 = (state_14386[(7)]);
var state_14386__$1 = state_14386;
var statearr_14413_16013 = state_14386__$1;
(statearr_14413_16013[(2)] = inst_14366);

(statearr_14413_16013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (10))){
var inst_14380 = (state_14386[(2)]);
var state_14386__$1 = state_14386;
var statearr_14416_16014 = state_14386__$1;
(statearr_14416_16014[(2)] = inst_14380);

(statearr_14416_16014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14387 === (8))){
var inst_14373 = (state_14386[(9)]);
var inst_14376 = cljs.core.deref(inst_14373);
var state_14386__$1 = state_14386;
var statearr_14420_16015 = state_14386__$1;
(statearr_14420_16015[(2)] = inst_14376);

(statearr_14420_16015[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13571__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13571__auto____0 = (function (){
var statearr_14421 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14421[(0)] = cljs$core$async$reduce_$_state_machine__13571__auto__);

(statearr_14421[(1)] = (1));

return statearr_14421;
});
var cljs$core$async$reduce_$_state_machine__13571__auto____1 = (function (state_14386){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14386);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14422){var ex__13574__auto__ = e14422;
var statearr_14423_16017 = state_14386;
(statearr_14423_16017[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14386[(4)]))){
var statearr_14427_16018 = state_14386;
(statearr_14427_16018[(1)] = cljs.core.first((state_14386[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16020 = state_14386;
state_14386 = G__16020;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13571__auto__ = function(state_14386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13571__auto____1.call(this,state_14386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13571__auto____0;
cljs$core$async$reduce_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13571__auto____1;
return cljs$core$async$reduce_$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14429 = f__13732__auto__();
(statearr_14429[(6)] = c__13731__auto__);

return statearr_14429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));

return c__13731__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14443){
var state_val_14444 = (state_14443[(1)]);
if((state_val_14444 === (1))){
var inst_14438 = cljs.core.async.reduce(f__$1,init,ch);
var state_14443__$1 = state_14443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14443__$1,(2),inst_14438);
} else {
if((state_val_14444 === (2))){
var inst_14440 = (state_14443[(2)]);
var inst_14441 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14440) : f__$1.call(null,inst_14440));
var state_14443__$1 = state_14443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14443__$1,inst_14441);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13571__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13571__auto____0 = (function (){
var statearr_14449 = [null,null,null,null,null,null,null];
(statearr_14449[(0)] = cljs$core$async$transduce_$_state_machine__13571__auto__);

(statearr_14449[(1)] = (1));

return statearr_14449;
});
var cljs$core$async$transduce_$_state_machine__13571__auto____1 = (function (state_14443){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14443);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14450){var ex__13574__auto__ = e14450;
var statearr_14451_16021 = state_14443;
(statearr_14451_16021[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14443[(4)]))){
var statearr_14452_16022 = state_14443;
(statearr_14452_16022[(1)] = cljs.core.first((state_14443[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16023 = state_14443;
state_14443 = G__16023;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13571__auto__ = function(state_14443){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13571__auto____1.call(this,state_14443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13571__auto____0;
cljs$core$async$transduce_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13571__auto____1;
return cljs$core$async$transduce_$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14453 = f__13732__auto__();
(statearr_14453[(6)] = c__13731__auto__);

return statearr_14453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));

return c__13731__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14456 = arguments.length;
switch (G__14456) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14490){
var state_val_14491 = (state_14490[(1)]);
if((state_val_14491 === (7))){
var inst_14472 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14492_16025 = state_14490__$1;
(statearr_14492_16025[(2)] = inst_14472);

(statearr_14492_16025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (1))){
var inst_14458 = cljs.core.seq(coll);
var inst_14459 = inst_14458;
var state_14490__$1 = (function (){var statearr_14493 = state_14490;
(statearr_14493[(7)] = inst_14459);

return statearr_14493;
})();
var statearr_14494_16026 = state_14490__$1;
(statearr_14494_16026[(2)] = null);

(statearr_14494_16026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (4))){
var inst_14459 = (state_14490[(7)]);
var inst_14470 = cljs.core.first(inst_14459);
var state_14490__$1 = state_14490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14490__$1,(7),ch,inst_14470);
} else {
if((state_val_14491 === (13))){
var inst_14484 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14507_16027 = state_14490__$1;
(statearr_14507_16027[(2)] = inst_14484);

(statearr_14507_16027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (6))){
var inst_14475 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
if(cljs.core.truth_(inst_14475)){
var statearr_14508_16028 = state_14490__$1;
(statearr_14508_16028[(1)] = (8));

} else {
var statearr_14509_16029 = state_14490__$1;
(statearr_14509_16029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (3))){
var inst_14488 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14490__$1,inst_14488);
} else {
if((state_val_14491 === (12))){
var state_14490__$1 = state_14490;
var statearr_14511_16030 = state_14490__$1;
(statearr_14511_16030[(2)] = null);

(statearr_14511_16030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (2))){
var inst_14459 = (state_14490[(7)]);
var state_14490__$1 = state_14490;
if(cljs.core.truth_(inst_14459)){
var statearr_14512_16031 = state_14490__$1;
(statearr_14512_16031[(1)] = (4));

} else {
var statearr_14513_16032 = state_14490__$1;
(statearr_14513_16032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (11))){
var inst_14481 = cljs.core.async.close_BANG_(ch);
var state_14490__$1 = state_14490;
var statearr_14516_16033 = state_14490__$1;
(statearr_14516_16033[(2)] = inst_14481);

(statearr_14516_16033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (9))){
var state_14490__$1 = state_14490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14519_16034 = state_14490__$1;
(statearr_14519_16034[(1)] = (11));

} else {
var statearr_14520_16035 = state_14490__$1;
(statearr_14520_16035[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (5))){
var inst_14459 = (state_14490[(7)]);
var state_14490__$1 = state_14490;
var statearr_14524_16036 = state_14490__$1;
(statearr_14524_16036[(2)] = inst_14459);

(statearr_14524_16036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (10))){
var inst_14486 = (state_14490[(2)]);
var state_14490__$1 = state_14490;
var statearr_14528_16037 = state_14490__$1;
(statearr_14528_16037[(2)] = inst_14486);

(statearr_14528_16037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14491 === (8))){
var inst_14459 = (state_14490[(7)]);
var inst_14477 = cljs.core.next(inst_14459);
var inst_14459__$1 = inst_14477;
var state_14490__$1 = (function (){var statearr_14529 = state_14490;
(statearr_14529[(7)] = inst_14459__$1);

return statearr_14529;
})();
var statearr_14531_16038 = state_14490__$1;
(statearr_14531_16038[(2)] = null);

(statearr_14531_16038[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_14532 = [null,null,null,null,null,null,null,null];
(statearr_14532[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_14532[(1)] = (1));

return statearr_14532;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_14490){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14490);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14545){var ex__13574__auto__ = e14545;
var statearr_14546_16041 = state_14490;
(statearr_14546_16041[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14490[(4)]))){
var statearr_14547_16042 = state_14490;
(statearr_14547_16042[(1)] = cljs.core.first((state_14490[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16043 = state_14490;
state_14490 = G__16043;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_14490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_14490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14548 = f__13732__auto__();
(statearr_14548[(6)] = c__13731__auto__);

return statearr_14548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));

return c__13731__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14551 = arguments.length;
switch (G__14551) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16045 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16045(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16046 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16046(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16047 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16047(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16048 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16048(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14580 = (function (ch,cs,meta14581){
this.ch = ch;
this.cs = cs;
this.meta14581 = meta14581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14582,meta14581__$1){
var self__ = this;
var _14582__$1 = this;
return (new cljs.core.async.t_cljs$core$async14580(self__.ch,self__.cs,meta14581__$1));
}));

(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14582){
var self__ = this;
var _14582__$1 = this;
return self__.meta14581;
}));

(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14580.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14581","meta14581",-1696154110,null)], null);
}));

(cljs.core.async.t_cljs$core$async14580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14580");

(cljs.core.async.t_cljs$core$async14580.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14580.
 */
cljs.core.async.__GT_t_cljs$core$async14580 = (function cljs$core$async$__GT_t_cljs$core$async14580(ch,cs,meta14581){
return (new cljs.core.async.t_cljs$core$async14580(ch,cs,meta14581));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14580(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13731__auto___16051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_14725){
var state_val_14726 = (state_14725[(1)]);
if((state_val_14726 === (7))){
var inst_14721 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14728_16052 = state_14725__$1;
(statearr_14728_16052[(2)] = inst_14721);

(statearr_14728_16052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (20))){
var inst_14626 = (state_14725[(7)]);
var inst_14638 = cljs.core.first(inst_14626);
var inst_14639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14638,(0),null);
var inst_14640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14638,(1),null);
var state_14725__$1 = (function (){var statearr_14730 = state_14725;
(statearr_14730[(8)] = inst_14639);

return statearr_14730;
})();
if(cljs.core.truth_(inst_14640)){
var statearr_14731_16053 = state_14725__$1;
(statearr_14731_16053[(1)] = (22));

} else {
var statearr_14732_16054 = state_14725__$1;
(statearr_14732_16054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (27))){
var inst_14668 = (state_14725[(9)]);
var inst_14675 = (state_14725[(10)]);
var inst_14670 = (state_14725[(11)]);
var inst_14594 = (state_14725[(12)]);
var inst_14675__$1 = cljs.core._nth(inst_14668,inst_14670);
var inst_14676 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14675__$1,inst_14594,done);
var state_14725__$1 = (function (){var statearr_14733 = state_14725;
(statearr_14733[(10)] = inst_14675__$1);

return statearr_14733;
})();
if(cljs.core.truth_(inst_14676)){
var statearr_14734_16055 = state_14725__$1;
(statearr_14734_16055[(1)] = (30));

} else {
var statearr_14735_16056 = state_14725__$1;
(statearr_14735_16056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (1))){
var state_14725__$1 = state_14725;
var statearr_14736_16057 = state_14725__$1;
(statearr_14736_16057[(2)] = null);

(statearr_14736_16057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (24))){
var inst_14626 = (state_14725[(7)]);
var inst_14645 = (state_14725[(2)]);
var inst_14646 = cljs.core.next(inst_14626);
var inst_14603 = inst_14646;
var inst_14604 = null;
var inst_14605 = (0);
var inst_14606 = (0);
var state_14725__$1 = (function (){var statearr_14737 = state_14725;
(statearr_14737[(13)] = inst_14604);

(statearr_14737[(14)] = inst_14606);

(statearr_14737[(15)] = inst_14603);

(statearr_14737[(16)] = inst_14645);

(statearr_14737[(17)] = inst_14605);

return statearr_14737;
})();
var statearr_14738_16058 = state_14725__$1;
(statearr_14738_16058[(2)] = null);

(statearr_14738_16058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (39))){
var state_14725__$1 = state_14725;
var statearr_14744_16059 = state_14725__$1;
(statearr_14744_16059[(2)] = null);

(statearr_14744_16059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (4))){
var inst_14594 = (state_14725[(12)]);
var inst_14594__$1 = (state_14725[(2)]);
var inst_14595 = (inst_14594__$1 == null);
var state_14725__$1 = (function (){var statearr_14745 = state_14725;
(statearr_14745[(12)] = inst_14594__$1);

return statearr_14745;
})();
if(cljs.core.truth_(inst_14595)){
var statearr_14746_16060 = state_14725__$1;
(statearr_14746_16060[(1)] = (5));

} else {
var statearr_14747_16061 = state_14725__$1;
(statearr_14747_16061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (15))){
var inst_14604 = (state_14725[(13)]);
var inst_14606 = (state_14725[(14)]);
var inst_14603 = (state_14725[(15)]);
var inst_14605 = (state_14725[(17)]);
var inst_14622 = (state_14725[(2)]);
var inst_14623 = (inst_14606 + (1));
var tmp14739 = inst_14604;
var tmp14740 = inst_14603;
var tmp14741 = inst_14605;
var inst_14603__$1 = tmp14740;
var inst_14604__$1 = tmp14739;
var inst_14605__$1 = tmp14741;
var inst_14606__$1 = inst_14623;
var state_14725__$1 = (function (){var statearr_14748 = state_14725;
(statearr_14748[(18)] = inst_14622);

(statearr_14748[(13)] = inst_14604__$1);

(statearr_14748[(14)] = inst_14606__$1);

(statearr_14748[(15)] = inst_14603__$1);

(statearr_14748[(17)] = inst_14605__$1);

return statearr_14748;
})();
var statearr_14749_16062 = state_14725__$1;
(statearr_14749_16062[(2)] = null);

(statearr_14749_16062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (21))){
var inst_14649 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14753_16063 = state_14725__$1;
(statearr_14753_16063[(2)] = inst_14649);

(statearr_14753_16063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (31))){
var inst_14675 = (state_14725[(10)]);
var inst_14679 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14675);
var state_14725__$1 = state_14725;
var statearr_14756_16064 = state_14725__$1;
(statearr_14756_16064[(2)] = inst_14679);

(statearr_14756_16064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (32))){
var inst_14668 = (state_14725[(9)]);
var inst_14669 = (state_14725[(19)]);
var inst_14667 = (state_14725[(20)]);
var inst_14670 = (state_14725[(11)]);
var inst_14681 = (state_14725[(2)]);
var inst_14682 = (inst_14670 + (1));
var tmp14750 = inst_14668;
var tmp14751 = inst_14669;
var tmp14752 = inst_14667;
var inst_14667__$1 = tmp14752;
var inst_14668__$1 = tmp14750;
var inst_14669__$1 = tmp14751;
var inst_14670__$1 = inst_14682;
var state_14725__$1 = (function (){var statearr_14757 = state_14725;
(statearr_14757[(9)] = inst_14668__$1);

(statearr_14757[(19)] = inst_14669__$1);

(statearr_14757[(20)] = inst_14667__$1);

(statearr_14757[(11)] = inst_14670__$1);

(statearr_14757[(21)] = inst_14681);

return statearr_14757;
})();
var statearr_14758_16065 = state_14725__$1;
(statearr_14758_16065[(2)] = null);

(statearr_14758_16065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (40))){
var inst_14694 = (state_14725[(22)]);
var inst_14698 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14694);
var state_14725__$1 = state_14725;
var statearr_14761_16066 = state_14725__$1;
(statearr_14761_16066[(2)] = inst_14698);

(statearr_14761_16066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (33))){
var inst_14685 = (state_14725[(23)]);
var inst_14687 = cljs.core.chunked_seq_QMARK_(inst_14685);
var state_14725__$1 = state_14725;
if(inst_14687){
var statearr_14762_16067 = state_14725__$1;
(statearr_14762_16067[(1)] = (36));

} else {
var statearr_14763_16068 = state_14725__$1;
(statearr_14763_16068[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (13))){
var inst_14616 = (state_14725[(24)]);
var inst_14619 = cljs.core.async.close_BANG_(inst_14616);
var state_14725__$1 = state_14725;
var statearr_14764_16069 = state_14725__$1;
(statearr_14764_16069[(2)] = inst_14619);

(statearr_14764_16069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (22))){
var inst_14639 = (state_14725[(8)]);
var inst_14642 = cljs.core.async.close_BANG_(inst_14639);
var state_14725__$1 = state_14725;
var statearr_14767_16070 = state_14725__$1;
(statearr_14767_16070[(2)] = inst_14642);

(statearr_14767_16070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (36))){
var inst_14685 = (state_14725[(23)]);
var inst_14689 = cljs.core.chunk_first(inst_14685);
var inst_14690 = cljs.core.chunk_rest(inst_14685);
var inst_14691 = cljs.core.count(inst_14689);
var inst_14667 = inst_14690;
var inst_14668 = inst_14689;
var inst_14669 = inst_14691;
var inst_14670 = (0);
var state_14725__$1 = (function (){var statearr_14768 = state_14725;
(statearr_14768[(9)] = inst_14668);

(statearr_14768[(19)] = inst_14669);

(statearr_14768[(20)] = inst_14667);

(statearr_14768[(11)] = inst_14670);

return statearr_14768;
})();
var statearr_14769_16072 = state_14725__$1;
(statearr_14769_16072[(2)] = null);

(statearr_14769_16072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (41))){
var inst_14685 = (state_14725[(23)]);
var inst_14700 = (state_14725[(2)]);
var inst_14701 = cljs.core.next(inst_14685);
var inst_14667 = inst_14701;
var inst_14668 = null;
var inst_14669 = (0);
var inst_14670 = (0);
var state_14725__$1 = (function (){var statearr_14770 = state_14725;
(statearr_14770[(9)] = inst_14668);

(statearr_14770[(19)] = inst_14669);

(statearr_14770[(20)] = inst_14667);

(statearr_14770[(25)] = inst_14700);

(statearr_14770[(11)] = inst_14670);

return statearr_14770;
})();
var statearr_14772_16073 = state_14725__$1;
(statearr_14772_16073[(2)] = null);

(statearr_14772_16073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (43))){
var state_14725__$1 = state_14725;
var statearr_14773_16074 = state_14725__$1;
(statearr_14773_16074[(2)] = null);

(statearr_14773_16074[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (29))){
var inst_14709 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14774_16075 = state_14725__$1;
(statearr_14774_16075[(2)] = inst_14709);

(statearr_14774_16075[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (44))){
var inst_14718 = (state_14725[(2)]);
var state_14725__$1 = (function (){var statearr_14775 = state_14725;
(statearr_14775[(26)] = inst_14718);

return statearr_14775;
})();
var statearr_14776_16076 = state_14725__$1;
(statearr_14776_16076[(2)] = null);

(statearr_14776_16076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (6))){
var inst_14659 = (state_14725[(27)]);
var inst_14658 = cljs.core.deref(cs);
var inst_14659__$1 = cljs.core.keys(inst_14658);
var inst_14660 = cljs.core.count(inst_14659__$1);
var inst_14661 = cljs.core.reset_BANG_(dctr,inst_14660);
var inst_14666 = cljs.core.seq(inst_14659__$1);
var inst_14667 = inst_14666;
var inst_14668 = null;
var inst_14669 = (0);
var inst_14670 = (0);
var state_14725__$1 = (function (){var statearr_14779 = state_14725;
(statearr_14779[(9)] = inst_14668);

(statearr_14779[(28)] = inst_14661);

(statearr_14779[(19)] = inst_14669);

(statearr_14779[(27)] = inst_14659__$1);

(statearr_14779[(20)] = inst_14667);

(statearr_14779[(11)] = inst_14670);

return statearr_14779;
})();
var statearr_14780_16077 = state_14725__$1;
(statearr_14780_16077[(2)] = null);

(statearr_14780_16077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (28))){
var inst_14667 = (state_14725[(20)]);
var inst_14685 = (state_14725[(23)]);
var inst_14685__$1 = cljs.core.seq(inst_14667);
var state_14725__$1 = (function (){var statearr_14781 = state_14725;
(statearr_14781[(23)] = inst_14685__$1);

return statearr_14781;
})();
if(inst_14685__$1){
var statearr_14782_16078 = state_14725__$1;
(statearr_14782_16078[(1)] = (33));

} else {
var statearr_14783_16079 = state_14725__$1;
(statearr_14783_16079[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (25))){
var inst_14669 = (state_14725[(19)]);
var inst_14670 = (state_14725[(11)]);
var inst_14672 = (inst_14670 < inst_14669);
var inst_14673 = inst_14672;
var state_14725__$1 = state_14725;
if(cljs.core.truth_(inst_14673)){
var statearr_14784_16084 = state_14725__$1;
(statearr_14784_16084[(1)] = (27));

} else {
var statearr_14785_16085 = state_14725__$1;
(statearr_14785_16085[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (34))){
var state_14725__$1 = state_14725;
var statearr_14786_16086 = state_14725__$1;
(statearr_14786_16086[(2)] = null);

(statearr_14786_16086[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (17))){
var state_14725__$1 = state_14725;
var statearr_14787_16087 = state_14725__$1;
(statearr_14787_16087[(2)] = null);

(statearr_14787_16087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (3))){
var inst_14723 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14725__$1,inst_14723);
} else {
if((state_val_14726 === (12))){
var inst_14654 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14789_16088 = state_14725__$1;
(statearr_14789_16088[(2)] = inst_14654);

(statearr_14789_16088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (2))){
var state_14725__$1 = state_14725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14725__$1,(4),ch);
} else {
if((state_val_14726 === (23))){
var state_14725__$1 = state_14725;
var statearr_14791_16089 = state_14725__$1;
(statearr_14791_16089[(2)] = null);

(statearr_14791_16089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (35))){
var inst_14707 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14792_16090 = state_14725__$1;
(statearr_14792_16090[(2)] = inst_14707);

(statearr_14792_16090[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (19))){
var inst_14626 = (state_14725[(7)]);
var inst_14630 = cljs.core.chunk_first(inst_14626);
var inst_14631 = cljs.core.chunk_rest(inst_14626);
var inst_14632 = cljs.core.count(inst_14630);
var inst_14603 = inst_14631;
var inst_14604 = inst_14630;
var inst_14605 = inst_14632;
var inst_14606 = (0);
var state_14725__$1 = (function (){var statearr_14793 = state_14725;
(statearr_14793[(13)] = inst_14604);

(statearr_14793[(14)] = inst_14606);

(statearr_14793[(15)] = inst_14603);

(statearr_14793[(17)] = inst_14605);

return statearr_14793;
})();
var statearr_14794_16091 = state_14725__$1;
(statearr_14794_16091[(2)] = null);

(statearr_14794_16091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (11))){
var inst_14626 = (state_14725[(7)]);
var inst_14603 = (state_14725[(15)]);
var inst_14626__$1 = cljs.core.seq(inst_14603);
var state_14725__$1 = (function (){var statearr_14795 = state_14725;
(statearr_14795[(7)] = inst_14626__$1);

return statearr_14795;
})();
if(inst_14626__$1){
var statearr_14796_16092 = state_14725__$1;
(statearr_14796_16092[(1)] = (16));

} else {
var statearr_14797_16093 = state_14725__$1;
(statearr_14797_16093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (9))){
var inst_14656 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14798_16094 = state_14725__$1;
(statearr_14798_16094[(2)] = inst_14656);

(statearr_14798_16094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (5))){
var inst_14601 = cljs.core.deref(cs);
var inst_14602 = cljs.core.seq(inst_14601);
var inst_14603 = inst_14602;
var inst_14604 = null;
var inst_14605 = (0);
var inst_14606 = (0);
var state_14725__$1 = (function (){var statearr_14800 = state_14725;
(statearr_14800[(13)] = inst_14604);

(statearr_14800[(14)] = inst_14606);

(statearr_14800[(15)] = inst_14603);

(statearr_14800[(17)] = inst_14605);

return statearr_14800;
})();
var statearr_14801_16095 = state_14725__$1;
(statearr_14801_16095[(2)] = null);

(statearr_14801_16095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (14))){
var state_14725__$1 = state_14725;
var statearr_14802_16096 = state_14725__$1;
(statearr_14802_16096[(2)] = null);

(statearr_14802_16096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (45))){
var inst_14715 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14803_16097 = state_14725__$1;
(statearr_14803_16097[(2)] = inst_14715);

(statearr_14803_16097[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (26))){
var inst_14659 = (state_14725[(27)]);
var inst_14711 = (state_14725[(2)]);
var inst_14712 = cljs.core.seq(inst_14659);
var state_14725__$1 = (function (){var statearr_14807 = state_14725;
(statearr_14807[(29)] = inst_14711);

return statearr_14807;
})();
if(inst_14712){
var statearr_14809_16098 = state_14725__$1;
(statearr_14809_16098[(1)] = (42));

} else {
var statearr_14810_16099 = state_14725__$1;
(statearr_14810_16099[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (16))){
var inst_14626 = (state_14725[(7)]);
var inst_14628 = cljs.core.chunked_seq_QMARK_(inst_14626);
var state_14725__$1 = state_14725;
if(inst_14628){
var statearr_14812_16100 = state_14725__$1;
(statearr_14812_16100[(1)] = (19));

} else {
var statearr_14813_16103 = state_14725__$1;
(statearr_14813_16103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (38))){
var inst_14704 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14815_16104 = state_14725__$1;
(statearr_14815_16104[(2)] = inst_14704);

(statearr_14815_16104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (30))){
var state_14725__$1 = state_14725;
var statearr_14818_16105 = state_14725__$1;
(statearr_14818_16105[(2)] = null);

(statearr_14818_16105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (10))){
var inst_14604 = (state_14725[(13)]);
var inst_14606 = (state_14725[(14)]);
var inst_14615 = cljs.core._nth(inst_14604,inst_14606);
var inst_14616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14615,(0),null);
var inst_14617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14615,(1),null);
var state_14725__$1 = (function (){var statearr_14821 = state_14725;
(statearr_14821[(24)] = inst_14616);

return statearr_14821;
})();
if(cljs.core.truth_(inst_14617)){
var statearr_14823_16113 = state_14725__$1;
(statearr_14823_16113[(1)] = (13));

} else {
var statearr_14824_16114 = state_14725__$1;
(statearr_14824_16114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (18))){
var inst_14652 = (state_14725[(2)]);
var state_14725__$1 = state_14725;
var statearr_14825_16115 = state_14725__$1;
(statearr_14825_16115[(2)] = inst_14652);

(statearr_14825_16115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (42))){
var state_14725__$1 = state_14725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14725__$1,(45),dchan);
} else {
if((state_val_14726 === (37))){
var inst_14594 = (state_14725[(12)]);
var inst_14685 = (state_14725[(23)]);
var inst_14694 = (state_14725[(22)]);
var inst_14694__$1 = cljs.core.first(inst_14685);
var inst_14695 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14694__$1,inst_14594,done);
var state_14725__$1 = (function (){var statearr_14827 = state_14725;
(statearr_14827[(22)] = inst_14694__$1);

return statearr_14827;
})();
if(cljs.core.truth_(inst_14695)){
var statearr_14830_16119 = state_14725__$1;
(statearr_14830_16119[(1)] = (39));

} else {
var statearr_14831_16120 = state_14725__$1;
(statearr_14831_16120[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14726 === (8))){
var inst_14606 = (state_14725[(14)]);
var inst_14605 = (state_14725[(17)]);
var inst_14609 = (inst_14606 < inst_14605);
var inst_14610 = inst_14609;
var state_14725__$1 = state_14725;
if(cljs.core.truth_(inst_14610)){
var statearr_14835_16121 = state_14725__$1;
(statearr_14835_16121[(1)] = (10));

} else {
var statearr_14836_16122 = state_14725__$1;
(statearr_14836_16122[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__13571__auto__ = null;
var cljs$core$async$mult_$_state_machine__13571__auto____0 = (function (){
var statearr_14837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14837[(0)] = cljs$core$async$mult_$_state_machine__13571__auto__);

(statearr_14837[(1)] = (1));

return statearr_14837;
});
var cljs$core$async$mult_$_state_machine__13571__auto____1 = (function (state_14725){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_14725);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e14839){var ex__13574__auto__ = e14839;
var statearr_14840_16146 = state_14725;
(statearr_14840_16146[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_14725[(4)]))){
var statearr_14842_16147 = state_14725;
(statearr_14842_16147[(1)] = cljs.core.first((state_14725[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16148 = state_14725;
state_14725 = G__16148;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13571__auto__ = function(state_14725){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13571__auto____1.call(this,state_14725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13571__auto____0;
cljs$core$async$mult_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13571__auto____1;
return cljs$core$async$mult_$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_14847 = f__13732__auto__();
(statearr_14847[(6)] = c__13731__auto___16051);

return statearr_14847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14850 = arguments.length;
switch (G__14850) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16150 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16150(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16151 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16151(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16160 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16160(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16165 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16165(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16168 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16168(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16171 = arguments.length;
var i__5770__auto___16172 = (0);
while(true){
if((i__5770__auto___16172 < len__5769__auto___16171)){
args__5775__auto__.push((arguments[i__5770__auto___16172]));

var G__16173 = (i__5770__auto___16172 + (1));
i__5770__auto___16172 = G__16173;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14892){
var map__14893 = p__14892;
var map__14893__$1 = cljs.core.__destructure_map(map__14893);
var opts = map__14893__$1;
var statearr_14894_16177 = state;
(statearr_14894_16177[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14895_16182 = state;
(statearr_14895_16182[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14896_16183 = state;
(statearr_14896_16183[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14885){
var G__14886 = cljs.core.first(seq14885);
var seq14885__$1 = cljs.core.next(seq14885);
var G__14887 = cljs.core.first(seq14885__$1);
var seq14885__$2 = cljs.core.next(seq14885__$1);
var G__14888 = cljs.core.first(seq14885__$2);
var seq14885__$3 = cljs.core.next(seq14885__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14886,G__14887,G__14888,seq14885__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14914 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14915){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14915 = meta14915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14916,meta14915__$1){
var self__ = this;
var _14916__$1 = this;
return (new cljs.core.async.t_cljs$core$async14914(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14915__$1));
}));

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14916){
var self__ = this;
var _14916__$1 = this;
return self__.meta14915;
}));

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14915","meta14915",1477335328,null)], null);
}));

(cljs.core.async.t_cljs$core$async14914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14914");

(cljs.core.async.t_cljs$core$async14914.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14914.
 */
cljs.core.async.__GT_t_cljs$core$async14914 = (function cljs$core$async$__GT_t_cljs$core$async14914(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14915){
return (new cljs.core.async.t_cljs$core$async14914(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14915));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14914(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13731__auto___16196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15010){
var state_val_15011 = (state_15010[(1)]);
if((state_val_15011 === (7))){
var inst_14964 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
if(cljs.core.truth_(inst_14964)){
var statearr_15015_16197 = state_15010__$1;
(statearr_15015_16197[(1)] = (8));

} else {
var statearr_15016_16198 = state_15010__$1;
(statearr_15016_16198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (20))){
var inst_14957 = (state_15010[(7)]);
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15010__$1,(23),out,inst_14957);
} else {
if((state_val_15011 === (1))){
var inst_14940 = calc_state();
var inst_14941 = cljs.core.__destructure_map(inst_14940);
var inst_14942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14941,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14941,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14941,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14945 = inst_14940;
var state_15010__$1 = (function (){var statearr_15017 = state_15010;
(statearr_15017[(8)] = inst_14943);

(statearr_15017[(9)] = inst_14945);

(statearr_15017[(10)] = inst_14944);

(statearr_15017[(11)] = inst_14942);

return statearr_15017;
})();
var statearr_15018_16199 = state_15010__$1;
(statearr_15018_16199[(2)] = null);

(statearr_15018_16199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (24))){
var inst_14948 = (state_15010[(12)]);
var inst_14945 = inst_14948;
var state_15010__$1 = (function (){var statearr_15019 = state_15010;
(statearr_15019[(9)] = inst_14945);

return statearr_15019;
})();
var statearr_15020_16200 = state_15010__$1;
(statearr_15020_16200[(2)] = null);

(statearr_15020_16200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (4))){
var inst_14957 = (state_15010[(7)]);
var inst_14959 = (state_15010[(13)]);
var inst_14956 = (state_15010[(2)]);
var inst_14957__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14956,(0),null);
var inst_14958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14956,(1),null);
var inst_14959__$1 = (inst_14957__$1 == null);
var state_15010__$1 = (function (){var statearr_15021 = state_15010;
(statearr_15021[(7)] = inst_14957__$1);

(statearr_15021[(14)] = inst_14958);

(statearr_15021[(13)] = inst_14959__$1);

return statearr_15021;
})();
if(cljs.core.truth_(inst_14959__$1)){
var statearr_15022_16201 = state_15010__$1;
(statearr_15022_16201[(1)] = (5));

} else {
var statearr_15023_16202 = state_15010__$1;
(statearr_15023_16202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (15))){
var inst_14949 = (state_15010[(15)]);
var inst_14978 = (state_15010[(16)]);
var inst_14978__$1 = cljs.core.empty_QMARK_(inst_14949);
var state_15010__$1 = (function (){var statearr_15024 = state_15010;
(statearr_15024[(16)] = inst_14978__$1);

return statearr_15024;
})();
if(inst_14978__$1){
var statearr_15025_16203 = state_15010__$1;
(statearr_15025_16203[(1)] = (17));

} else {
var statearr_15026_16204 = state_15010__$1;
(statearr_15026_16204[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (21))){
var inst_14948 = (state_15010[(12)]);
var inst_14945 = inst_14948;
var state_15010__$1 = (function (){var statearr_15027 = state_15010;
(statearr_15027[(9)] = inst_14945);

return statearr_15027;
})();
var statearr_15028_16205 = state_15010__$1;
(statearr_15028_16205[(2)] = null);

(statearr_15028_16205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (13))){
var inst_14971 = (state_15010[(2)]);
var inst_14972 = calc_state();
var inst_14945 = inst_14972;
var state_15010__$1 = (function (){var statearr_15029 = state_15010;
(statearr_15029[(9)] = inst_14945);

(statearr_15029[(17)] = inst_14971);

return statearr_15029;
})();
var statearr_15030_16206 = state_15010__$1;
(statearr_15030_16206[(2)] = null);

(statearr_15030_16206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (22))){
var inst_14998 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
var statearr_15031_16207 = state_15010__$1;
(statearr_15031_16207[(2)] = inst_14998);

(statearr_15031_16207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (6))){
var inst_14958 = (state_15010[(14)]);
var inst_14962 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14958,change);
var state_15010__$1 = state_15010;
var statearr_15032_16208 = state_15010__$1;
(statearr_15032_16208[(2)] = inst_14962);

(statearr_15032_16208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (25))){
var state_15010__$1 = state_15010;
var statearr_15033_16215 = state_15010__$1;
(statearr_15033_16215[(2)] = null);

(statearr_15033_16215[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (17))){
var inst_14950 = (state_15010[(18)]);
var inst_14958 = (state_15010[(14)]);
var inst_14980 = (inst_14950.cljs$core$IFn$_invoke$arity$1 ? inst_14950.cljs$core$IFn$_invoke$arity$1(inst_14958) : inst_14950.call(null,inst_14958));
var inst_14981 = cljs.core.not(inst_14980);
var state_15010__$1 = state_15010;
var statearr_15034_16216 = state_15010__$1;
(statearr_15034_16216[(2)] = inst_14981);

(statearr_15034_16216[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (3))){
var inst_15002 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15010__$1,inst_15002);
} else {
if((state_val_15011 === (12))){
var state_15010__$1 = state_15010;
var statearr_15035_16217 = state_15010__$1;
(statearr_15035_16217[(2)] = null);

(statearr_15035_16217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (2))){
var inst_14945 = (state_15010[(9)]);
var inst_14948 = (state_15010[(12)]);
var inst_14948__$1 = cljs.core.__destructure_map(inst_14945);
var inst_14949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14948__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14948__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14948__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15010__$1 = (function (){var statearr_15036 = state_15010;
(statearr_15036[(18)] = inst_14950);

(statearr_15036[(15)] = inst_14949);

(statearr_15036[(12)] = inst_14948__$1);

return statearr_15036;
})();
return cljs.core.async.ioc_alts_BANG_(state_15010__$1,(4),inst_14951);
} else {
if((state_val_15011 === (23))){
var inst_14989 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
if(cljs.core.truth_(inst_14989)){
var statearr_15037_16218 = state_15010__$1;
(statearr_15037_16218[(1)] = (24));

} else {
var statearr_15038_16219 = state_15010__$1;
(statearr_15038_16219[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (19))){
var inst_14984 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
var statearr_15039_16220 = state_15010__$1;
(statearr_15039_16220[(2)] = inst_14984);

(statearr_15039_16220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (11))){
var inst_14958 = (state_15010[(14)]);
var inst_14968 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14958);
var state_15010__$1 = state_15010;
var statearr_15040_16221 = state_15010__$1;
(statearr_15040_16221[(2)] = inst_14968);

(statearr_15040_16221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (9))){
var inst_14949 = (state_15010[(15)]);
var inst_14975 = (state_15010[(19)]);
var inst_14958 = (state_15010[(14)]);
var inst_14975__$1 = (inst_14949.cljs$core$IFn$_invoke$arity$1 ? inst_14949.cljs$core$IFn$_invoke$arity$1(inst_14958) : inst_14949.call(null,inst_14958));
var state_15010__$1 = (function (){var statearr_15041 = state_15010;
(statearr_15041[(19)] = inst_14975__$1);

return statearr_15041;
})();
if(cljs.core.truth_(inst_14975__$1)){
var statearr_15042_16222 = state_15010__$1;
(statearr_15042_16222[(1)] = (14));

} else {
var statearr_15043_16223 = state_15010__$1;
(statearr_15043_16223[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (5))){
var inst_14959 = (state_15010[(13)]);
var state_15010__$1 = state_15010;
var statearr_15044_16224 = state_15010__$1;
(statearr_15044_16224[(2)] = inst_14959);

(statearr_15044_16224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (14))){
var inst_14975 = (state_15010[(19)]);
var state_15010__$1 = state_15010;
var statearr_15045_16225 = state_15010__$1;
(statearr_15045_16225[(2)] = inst_14975);

(statearr_15045_16225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (26))){
var inst_14994 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
var statearr_15046_16226 = state_15010__$1;
(statearr_15046_16226[(2)] = inst_14994);

(statearr_15046_16226[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (16))){
var inst_14986 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
if(cljs.core.truth_(inst_14986)){
var statearr_15047_16227 = state_15010__$1;
(statearr_15047_16227[(1)] = (20));

} else {
var statearr_15048_16228 = state_15010__$1;
(statearr_15048_16228[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (10))){
var inst_15000 = (state_15010[(2)]);
var state_15010__$1 = state_15010;
var statearr_15049_16229 = state_15010__$1;
(statearr_15049_16229[(2)] = inst_15000);

(statearr_15049_16229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (18))){
var inst_14978 = (state_15010[(16)]);
var state_15010__$1 = state_15010;
var statearr_15050_16230 = state_15010__$1;
(statearr_15050_16230[(2)] = inst_14978);

(statearr_15050_16230[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15011 === (8))){
var inst_14957 = (state_15010[(7)]);
var inst_14966 = (inst_14957 == null);
var state_15010__$1 = state_15010;
if(cljs.core.truth_(inst_14966)){
var statearr_15051_16231 = state_15010__$1;
(statearr_15051_16231[(1)] = (11));

} else {
var statearr_15052_16232 = state_15010__$1;
(statearr_15052_16232[(1)] = (12));

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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13571__auto__ = null;
var cljs$core$async$mix_$_state_machine__13571__auto____0 = (function (){
var statearr_15053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15053[(0)] = cljs$core$async$mix_$_state_machine__13571__auto__);

(statearr_15053[(1)] = (1));

return statearr_15053;
});
var cljs$core$async$mix_$_state_machine__13571__auto____1 = (function (state_15010){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15010);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15054){var ex__13574__auto__ = e15054;
var statearr_15055_16239 = state_15010;
(statearr_15055_16239[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15010[(4)]))){
var statearr_15056_16240 = state_15010;
(statearr_15056_16240[(1)] = cljs.core.first((state_15010[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16241 = state_15010;
state_15010 = G__16241;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13571__auto__ = function(state_15010){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13571__auto____1.call(this,state_15010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13571__auto____0;
cljs$core$async$mix_$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13571__auto____1;
return cljs$core$async$mix_$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15057 = f__13732__auto__();
(statearr_15057[(6)] = c__13731__auto___16196);

return statearr_15057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16242 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16242(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16243 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16243(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16244 = (function() {
var G__16245 = null;
var G__16245__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16245__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16245 = function(p,v){
switch(arguments.length){
case 1:
return G__16245__1.call(this,p);
case 2:
return G__16245__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16245.cljs$core$IFn$_invoke$arity$1 = G__16245__1;
G__16245.cljs$core$IFn$_invoke$arity$2 = G__16245__2;
return G__16245;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15071 = arguments.length;
switch (G__15071) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16244(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16244(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15086 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15087){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15087 = meta15087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15088,meta15087__$1){
var self__ = this;
var _15088__$1 = this;
return (new cljs.core.async.t_cljs$core$async15086(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15087__$1));
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15088){
var self__ = this;
var _15088__$1 = this;
return self__.meta15087;
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15087","meta15087",1255876099,null)], null);
}));

(cljs.core.async.t_cljs$core$async15086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15086");

(cljs.core.async.t_cljs$core$async15086.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15086.
 */
cljs.core.async.__GT_t_cljs$core$async15086 = (function cljs$core$async$__GT_t_cljs$core$async15086(ch,topic_fn,buf_fn,mults,ensure_mult,meta15087){
return (new cljs.core.async.t_cljs$core$async15086(ch,topic_fn,buf_fn,mults,ensure_mult,meta15087));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15082 = arguments.length;
switch (G__15082) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15077_SHARP_){
if(cljs.core.truth_((p1__15077_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15077_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15077_SHARP_.call(null,topic)))){
return p1__15077_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15077_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15086(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13731__auto___16248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15210){
var state_val_15211 = (state_15210[(1)]);
if((state_val_15211 === (7))){
var inst_15205 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15212_16249 = state_15210__$1;
(statearr_15212_16249[(2)] = inst_15205);

(statearr_15212_16249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (20))){
var state_15210__$1 = state_15210;
var statearr_15213_16250 = state_15210__$1;
(statearr_15213_16250[(2)] = null);

(statearr_15213_16250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (1))){
var state_15210__$1 = state_15210;
var statearr_15217_16251 = state_15210__$1;
(statearr_15217_16251[(2)] = null);

(statearr_15217_16251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (24))){
var inst_15188 = (state_15210[(7)]);
var inst_15197 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15188);
var state_15210__$1 = state_15210;
var statearr_15219_16252 = state_15210__$1;
(statearr_15219_16252[(2)] = inst_15197);

(statearr_15219_16252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (4))){
var inst_15133 = (state_15210[(8)]);
var inst_15133__$1 = (state_15210[(2)]);
var inst_15134 = (inst_15133__$1 == null);
var state_15210__$1 = (function (){var statearr_15220 = state_15210;
(statearr_15220[(8)] = inst_15133__$1);

return statearr_15220;
})();
if(cljs.core.truth_(inst_15134)){
var statearr_15221_16253 = state_15210__$1;
(statearr_15221_16253[(1)] = (5));

} else {
var statearr_15222_16254 = state_15210__$1;
(statearr_15222_16254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (15))){
var inst_15182 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15223_16255 = state_15210__$1;
(statearr_15223_16255[(2)] = inst_15182);

(statearr_15223_16255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (21))){
var inst_15202 = (state_15210[(2)]);
var state_15210__$1 = (function (){var statearr_15224 = state_15210;
(statearr_15224[(9)] = inst_15202);

return statearr_15224;
})();
var statearr_15225_16256 = state_15210__$1;
(statearr_15225_16256[(2)] = null);

(statearr_15225_16256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (13))){
var inst_15164 = (state_15210[(10)]);
var inst_15166 = cljs.core.chunked_seq_QMARK_(inst_15164);
var state_15210__$1 = state_15210;
if(inst_15166){
var statearr_15226_16257 = state_15210__$1;
(statearr_15226_16257[(1)] = (16));

} else {
var statearr_15227_16258 = state_15210__$1;
(statearr_15227_16258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (22))){
var inst_15194 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
if(cljs.core.truth_(inst_15194)){
var statearr_15229_16264 = state_15210__$1;
(statearr_15229_16264[(1)] = (23));

} else {
var statearr_15232_16265 = state_15210__$1;
(statearr_15232_16265[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (6))){
var inst_15188 = (state_15210[(7)]);
var inst_15133 = (state_15210[(8)]);
var inst_15190 = (state_15210[(11)]);
var inst_15188__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15133) : topic_fn.call(null,inst_15133));
var inst_15189 = cljs.core.deref(mults);
var inst_15190__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15189,inst_15188__$1);
var state_15210__$1 = (function (){var statearr_15237 = state_15210;
(statearr_15237[(7)] = inst_15188__$1);

(statearr_15237[(11)] = inst_15190__$1);

return statearr_15237;
})();
if(cljs.core.truth_(inst_15190__$1)){
var statearr_15239_16266 = state_15210__$1;
(statearr_15239_16266[(1)] = (19));

} else {
var statearr_15240_16267 = state_15210__$1;
(statearr_15240_16267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (25))){
var inst_15199 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15241_16268 = state_15210__$1;
(statearr_15241_16268[(2)] = inst_15199);

(statearr_15241_16268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (17))){
var inst_15164 = (state_15210[(10)]);
var inst_15173 = cljs.core.first(inst_15164);
var inst_15174 = cljs.core.async.muxch_STAR_(inst_15173);
var inst_15175 = cljs.core.async.close_BANG_(inst_15174);
var inst_15176 = cljs.core.next(inst_15164);
var inst_15143 = inst_15176;
var inst_15144 = null;
var inst_15145 = (0);
var inst_15146 = (0);
var state_15210__$1 = (function (){var statearr_15243 = state_15210;
(statearr_15243[(12)] = inst_15146);

(statearr_15243[(13)] = inst_15143);

(statearr_15243[(14)] = inst_15145);

(statearr_15243[(15)] = inst_15175);

(statearr_15243[(16)] = inst_15144);

return statearr_15243;
})();
var statearr_15244_16269 = state_15210__$1;
(statearr_15244_16269[(2)] = null);

(statearr_15244_16269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (3))){
var inst_15207 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15210__$1,inst_15207);
} else {
if((state_val_15211 === (12))){
var inst_15184 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15245_16270 = state_15210__$1;
(statearr_15245_16270[(2)] = inst_15184);

(statearr_15245_16270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (2))){
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15210__$1,(4),ch);
} else {
if((state_val_15211 === (23))){
var state_15210__$1 = state_15210;
var statearr_15246_16271 = state_15210__$1;
(statearr_15246_16271[(2)] = null);

(statearr_15246_16271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (19))){
var inst_15133 = (state_15210[(8)]);
var inst_15190 = (state_15210[(11)]);
var inst_15192 = cljs.core.async.muxch_STAR_(inst_15190);
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15210__$1,(22),inst_15192,inst_15133);
} else {
if((state_val_15211 === (11))){
var inst_15143 = (state_15210[(13)]);
var inst_15164 = (state_15210[(10)]);
var inst_15164__$1 = cljs.core.seq(inst_15143);
var state_15210__$1 = (function (){var statearr_15250 = state_15210;
(statearr_15250[(10)] = inst_15164__$1);

return statearr_15250;
})();
if(inst_15164__$1){
var statearr_15251_16272 = state_15210__$1;
(statearr_15251_16272[(1)] = (13));

} else {
var statearr_15252_16273 = state_15210__$1;
(statearr_15252_16273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (9))){
var inst_15186 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15254_16274 = state_15210__$1;
(statearr_15254_16274[(2)] = inst_15186);

(statearr_15254_16274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (5))){
var inst_15140 = cljs.core.deref(mults);
var inst_15141 = cljs.core.vals(inst_15140);
var inst_15142 = cljs.core.seq(inst_15141);
var inst_15143 = inst_15142;
var inst_15144 = null;
var inst_15145 = (0);
var inst_15146 = (0);
var state_15210__$1 = (function (){var statearr_15255 = state_15210;
(statearr_15255[(12)] = inst_15146);

(statearr_15255[(13)] = inst_15143);

(statearr_15255[(14)] = inst_15145);

(statearr_15255[(16)] = inst_15144);

return statearr_15255;
})();
var statearr_15256_16277 = state_15210__$1;
(statearr_15256_16277[(2)] = null);

(statearr_15256_16277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (14))){
var state_15210__$1 = state_15210;
var statearr_15262_16278 = state_15210__$1;
(statearr_15262_16278[(2)] = null);

(statearr_15262_16278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (16))){
var inst_15164 = (state_15210[(10)]);
var inst_15168 = cljs.core.chunk_first(inst_15164);
var inst_15169 = cljs.core.chunk_rest(inst_15164);
var inst_15170 = cljs.core.count(inst_15168);
var inst_15143 = inst_15169;
var inst_15144 = inst_15168;
var inst_15145 = inst_15170;
var inst_15146 = (0);
var state_15210__$1 = (function (){var statearr_15264 = state_15210;
(statearr_15264[(12)] = inst_15146);

(statearr_15264[(13)] = inst_15143);

(statearr_15264[(14)] = inst_15145);

(statearr_15264[(16)] = inst_15144);

return statearr_15264;
})();
var statearr_15265_16279 = state_15210__$1;
(statearr_15265_16279[(2)] = null);

(statearr_15265_16279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (10))){
var inst_15146 = (state_15210[(12)]);
var inst_15143 = (state_15210[(13)]);
var inst_15145 = (state_15210[(14)]);
var inst_15144 = (state_15210[(16)]);
var inst_15154 = cljs.core._nth(inst_15144,inst_15146);
var inst_15159 = cljs.core.async.muxch_STAR_(inst_15154);
var inst_15160 = cljs.core.async.close_BANG_(inst_15159);
var inst_15161 = (inst_15146 + (1));
var tmp15257 = inst_15143;
var tmp15258 = inst_15145;
var tmp15259 = inst_15144;
var inst_15143__$1 = tmp15257;
var inst_15144__$1 = tmp15259;
var inst_15145__$1 = tmp15258;
var inst_15146__$1 = inst_15161;
var state_15210__$1 = (function (){var statearr_15267 = state_15210;
(statearr_15267[(12)] = inst_15146__$1);

(statearr_15267[(13)] = inst_15143__$1);

(statearr_15267[(17)] = inst_15160);

(statearr_15267[(14)] = inst_15145__$1);

(statearr_15267[(16)] = inst_15144__$1);

return statearr_15267;
})();
var statearr_15269_16282 = state_15210__$1;
(statearr_15269_16282[(2)] = null);

(statearr_15269_16282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (18))){
var inst_15179 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15270_16283 = state_15210__$1;
(statearr_15270_16283[(2)] = inst_15179);

(statearr_15270_16283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (8))){
var inst_15146 = (state_15210[(12)]);
var inst_15145 = (state_15210[(14)]);
var inst_15150 = (inst_15146 < inst_15145);
var inst_15151 = inst_15150;
var state_15210__$1 = state_15210;
if(cljs.core.truth_(inst_15151)){
var statearr_15272_16284 = state_15210__$1;
(statearr_15272_16284[(1)] = (10));

} else {
var statearr_15273_16285 = state_15210__$1;
(statearr_15273_16285[(1)] = (11));

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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15274[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15274[(1)] = (1));

return statearr_15274;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15210){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15210);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15275){var ex__13574__auto__ = e15275;
var statearr_15276_16286 = state_15210;
(statearr_15276_16286[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15210[(4)]))){
var statearr_15277_16287 = state_15210;
(statearr_15277_16287[(1)] = cljs.core.first((state_15210[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16288 = state_15210;
state_15210 = G__16288;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15278 = f__13732__auto__();
(statearr_15278[(6)] = c__13731__auto___16248);

return statearr_15278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15281 = arguments.length;
switch (G__15281) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15283 = arguments.length;
switch (G__15283) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15287 = arguments.length;
switch (G__15287) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13731__auto___16294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15336){
var state_val_15337 = (state_15336[(1)]);
if((state_val_15337 === (7))){
var state_15336__$1 = state_15336;
var statearr_15339_16295 = state_15336__$1;
(statearr_15339_16295[(2)] = null);

(statearr_15339_16295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (1))){
var state_15336__$1 = state_15336;
var statearr_15340_16296 = state_15336__$1;
(statearr_15340_16296[(2)] = null);

(statearr_15340_16296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (4))){
var inst_15293 = (state_15336[(7)]);
var inst_15294 = (state_15336[(8)]);
var inst_15296 = (inst_15294 < inst_15293);
var state_15336__$1 = state_15336;
if(cljs.core.truth_(inst_15296)){
var statearr_15342_16297 = state_15336__$1;
(statearr_15342_16297[(1)] = (6));

} else {
var statearr_15343_16298 = state_15336__$1;
(statearr_15343_16298[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (15))){
var inst_15320 = (state_15336[(9)]);
var inst_15325 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15320);
var state_15336__$1 = state_15336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15336__$1,(17),out,inst_15325);
} else {
if((state_val_15337 === (13))){
var inst_15320 = (state_15336[(9)]);
var inst_15320__$1 = (state_15336[(2)]);
var inst_15321 = cljs.core.some(cljs.core.nil_QMARK_,inst_15320__$1);
var state_15336__$1 = (function (){var statearr_15345 = state_15336;
(statearr_15345[(9)] = inst_15320__$1);

return statearr_15345;
})();
if(cljs.core.truth_(inst_15321)){
var statearr_15346_16299 = state_15336__$1;
(statearr_15346_16299[(1)] = (14));

} else {
var statearr_15347_16300 = state_15336__$1;
(statearr_15347_16300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (6))){
var state_15336__$1 = state_15336;
var statearr_15349_16301 = state_15336__$1;
(statearr_15349_16301[(2)] = null);

(statearr_15349_16301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (17))){
var inst_15327 = (state_15336[(2)]);
var state_15336__$1 = (function (){var statearr_15351 = state_15336;
(statearr_15351[(10)] = inst_15327);

return statearr_15351;
})();
var statearr_15352_16302 = state_15336__$1;
(statearr_15352_16302[(2)] = null);

(statearr_15352_16302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (3))){
var inst_15332 = (state_15336[(2)]);
var state_15336__$1 = state_15336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15336__$1,inst_15332);
} else {
if((state_val_15337 === (12))){
var _ = (function (){var statearr_15353 = state_15336;
(statearr_15353[(4)] = cljs.core.rest((state_15336[(4)])));

return statearr_15353;
})();
var state_15336__$1 = state_15336;
var ex15350 = (state_15336__$1[(2)]);
var statearr_15354_16303 = state_15336__$1;
(statearr_15354_16303[(5)] = ex15350);


if((ex15350 instanceof Object)){
var statearr_15355_16304 = state_15336__$1;
(statearr_15355_16304[(1)] = (11));

(statearr_15355_16304[(5)] = null);

} else {
throw ex15350;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (2))){
var inst_15292 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15293 = cnt;
var inst_15294 = (0);
var state_15336__$1 = (function (){var statearr_15356 = state_15336;
(statearr_15356[(7)] = inst_15293);

(statearr_15356[(11)] = inst_15292);

(statearr_15356[(8)] = inst_15294);

return statearr_15356;
})();
var statearr_15357_16305 = state_15336__$1;
(statearr_15357_16305[(2)] = null);

(statearr_15357_16305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (11))){
var inst_15299 = (state_15336[(2)]);
var inst_15300 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15336__$1 = (function (){var statearr_15358 = state_15336;
(statearr_15358[(12)] = inst_15299);

return statearr_15358;
})();
var statearr_15359_16306 = state_15336__$1;
(statearr_15359_16306[(2)] = inst_15300);

(statearr_15359_16306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (9))){
var inst_15294 = (state_15336[(8)]);
var _ = (function (){var statearr_15360 = state_15336;
(statearr_15360[(4)] = cljs.core.cons((12),(state_15336[(4)])));

return statearr_15360;
})();
var inst_15306 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15294) : chs__$1.call(null,inst_15294));
var inst_15307 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15294) : done.call(null,inst_15294));
var inst_15308 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15306,inst_15307);
var ___$1 = (function (){var statearr_15361 = state_15336;
(statearr_15361[(4)] = cljs.core.rest((state_15336[(4)])));

return statearr_15361;
})();
var state_15336__$1 = state_15336;
var statearr_15362_16307 = state_15336__$1;
(statearr_15362_16307[(2)] = inst_15308);

(statearr_15362_16307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (5))){
var inst_15318 = (state_15336[(2)]);
var state_15336__$1 = (function (){var statearr_15363 = state_15336;
(statearr_15363[(13)] = inst_15318);

return statearr_15363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15336__$1,(13),dchan);
} else {
if((state_val_15337 === (14))){
var inst_15323 = cljs.core.async.close_BANG_(out);
var state_15336__$1 = state_15336;
var statearr_15364_16308 = state_15336__$1;
(statearr_15364_16308[(2)] = inst_15323);

(statearr_15364_16308[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (16))){
var inst_15330 = (state_15336[(2)]);
var state_15336__$1 = state_15336;
var statearr_15365_16309 = state_15336__$1;
(statearr_15365_16309[(2)] = inst_15330);

(statearr_15365_16309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (10))){
var inst_15294 = (state_15336[(8)]);
var inst_15311 = (state_15336[(2)]);
var inst_15312 = (inst_15294 + (1));
var inst_15294__$1 = inst_15312;
var state_15336__$1 = (function (){var statearr_15366 = state_15336;
(statearr_15366[(14)] = inst_15311);

(statearr_15366[(8)] = inst_15294__$1);

return statearr_15366;
})();
var statearr_15367_16310 = state_15336__$1;
(statearr_15367_16310[(2)] = null);

(statearr_15367_16310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15337 === (8))){
var inst_15316 = (state_15336[(2)]);
var state_15336__$1 = state_15336;
var statearr_15368_16311 = state_15336__$1;
(statearr_15368_16311[(2)] = inst_15316);

(statearr_15368_16311[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15369[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15369[(1)] = (1));

return statearr_15369;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15336){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15336);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15370){var ex__13574__auto__ = e15370;
var statearr_15371_16313 = state_15336;
(statearr_15371_16313[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15336[(4)]))){
var statearr_15372_16314 = state_15336;
(statearr_15372_16314[(1)] = cljs.core.first((state_15336[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16315 = state_15336;
state_15336 = G__16315;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15373 = f__13732__auto__();
(statearr_15373[(6)] = c__13731__auto___16294);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15376 = arguments.length;
switch (G__15376) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13731__auto___16317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15408){
var state_val_15409 = (state_15408[(1)]);
if((state_val_15409 === (7))){
var inst_15388 = (state_15408[(7)]);
var inst_15387 = (state_15408[(8)]);
var inst_15387__$1 = (state_15408[(2)]);
var inst_15388__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15387__$1,(0),null);
var inst_15389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15387__$1,(1),null);
var inst_15390 = (inst_15388__$1 == null);
var state_15408__$1 = (function (){var statearr_15410 = state_15408;
(statearr_15410[(7)] = inst_15388__$1);

(statearr_15410[(9)] = inst_15389);

(statearr_15410[(8)] = inst_15387__$1);

return statearr_15410;
})();
if(cljs.core.truth_(inst_15390)){
var statearr_15411_16322 = state_15408__$1;
(statearr_15411_16322[(1)] = (8));

} else {
var statearr_15412_16323 = state_15408__$1;
(statearr_15412_16323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (1))){
var inst_15377 = cljs.core.vec(chs);
var inst_15378 = inst_15377;
var state_15408__$1 = (function (){var statearr_15413 = state_15408;
(statearr_15413[(10)] = inst_15378);

return statearr_15413;
})();
var statearr_15414_16324 = state_15408__$1;
(statearr_15414_16324[(2)] = null);

(statearr_15414_16324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (4))){
var inst_15378 = (state_15408[(10)]);
var state_15408__$1 = state_15408;
return cljs.core.async.ioc_alts_BANG_(state_15408__$1,(7),inst_15378);
} else {
if((state_val_15409 === (6))){
var inst_15404 = (state_15408[(2)]);
var state_15408__$1 = state_15408;
var statearr_15415_16325 = state_15408__$1;
(statearr_15415_16325[(2)] = inst_15404);

(statearr_15415_16325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (3))){
var inst_15406 = (state_15408[(2)]);
var state_15408__$1 = state_15408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15408__$1,inst_15406);
} else {
if((state_val_15409 === (2))){
var inst_15378 = (state_15408[(10)]);
var inst_15380 = cljs.core.count(inst_15378);
var inst_15381 = (inst_15380 > (0));
var state_15408__$1 = state_15408;
if(cljs.core.truth_(inst_15381)){
var statearr_15417_16326 = state_15408__$1;
(statearr_15417_16326[(1)] = (4));

} else {
var statearr_15418_16327 = state_15408__$1;
(statearr_15418_16327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (11))){
var inst_15378 = (state_15408[(10)]);
var inst_15397 = (state_15408[(2)]);
var tmp15416 = inst_15378;
var inst_15378__$1 = tmp15416;
var state_15408__$1 = (function (){var statearr_15419 = state_15408;
(statearr_15419[(10)] = inst_15378__$1);

(statearr_15419[(11)] = inst_15397);

return statearr_15419;
})();
var statearr_15420_16328 = state_15408__$1;
(statearr_15420_16328[(2)] = null);

(statearr_15420_16328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (9))){
var inst_15388 = (state_15408[(7)]);
var state_15408__$1 = state_15408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15408__$1,(11),out,inst_15388);
} else {
if((state_val_15409 === (5))){
var inst_15402 = cljs.core.async.close_BANG_(out);
var state_15408__$1 = state_15408;
var statearr_15421_16329 = state_15408__$1;
(statearr_15421_16329[(2)] = inst_15402);

(statearr_15421_16329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (10))){
var inst_15400 = (state_15408[(2)]);
var state_15408__$1 = state_15408;
var statearr_15422_16330 = state_15408__$1;
(statearr_15422_16330[(2)] = inst_15400);

(statearr_15422_16330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (8))){
var inst_15378 = (state_15408[(10)]);
var inst_15388 = (state_15408[(7)]);
var inst_15389 = (state_15408[(9)]);
var inst_15387 = (state_15408[(8)]);
var inst_15392 = (function (){var cs = inst_15378;
var vec__15383 = inst_15387;
var v = inst_15388;
var c = inst_15389;
return (function (p1__15374_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15374_SHARP_);
});
})();
var inst_15393 = cljs.core.filterv(inst_15392,inst_15378);
var inst_15378__$1 = inst_15393;
var state_15408__$1 = (function (){var statearr_15423 = state_15408;
(statearr_15423[(10)] = inst_15378__$1);

return statearr_15423;
})();
var statearr_15424_16331 = state_15408__$1;
(statearr_15424_16331[(2)] = null);

(statearr_15424_16331[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15425[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15425[(1)] = (1));

return statearr_15425;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15408){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15408);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15426){var ex__13574__auto__ = e15426;
var statearr_15427_16332 = state_15408;
(statearr_15427_16332[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15408[(4)]))){
var statearr_15428_16333 = state_15408;
(statearr_15428_16333[(1)] = cljs.core.first((state_15408[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16334 = state_15408;
state_15408 = G__16334;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15429 = f__13732__auto__();
(statearr_15429[(6)] = c__13731__auto___16317);

return statearr_15429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15431 = arguments.length;
switch (G__15431) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13731__auto___16336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15455){
var state_val_15456 = (state_15455[(1)]);
if((state_val_15456 === (7))){
var inst_15437 = (state_15455[(7)]);
var inst_15437__$1 = (state_15455[(2)]);
var inst_15438 = (inst_15437__$1 == null);
var inst_15439 = cljs.core.not(inst_15438);
var state_15455__$1 = (function (){var statearr_15457 = state_15455;
(statearr_15457[(7)] = inst_15437__$1);

return statearr_15457;
})();
if(inst_15439){
var statearr_15458_16337 = state_15455__$1;
(statearr_15458_16337[(1)] = (8));

} else {
var statearr_15459_16338 = state_15455__$1;
(statearr_15459_16338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (1))){
var inst_15432 = (0);
var state_15455__$1 = (function (){var statearr_15460 = state_15455;
(statearr_15460[(8)] = inst_15432);

return statearr_15460;
})();
var statearr_15461_16339 = state_15455__$1;
(statearr_15461_16339[(2)] = null);

(statearr_15461_16339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (4))){
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15455__$1,(7),ch);
} else {
if((state_val_15456 === (6))){
var inst_15450 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15462_16340 = state_15455__$1;
(statearr_15462_16340[(2)] = inst_15450);

(statearr_15462_16340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (3))){
var inst_15452 = (state_15455[(2)]);
var inst_15453 = cljs.core.async.close_BANG_(out);
var state_15455__$1 = (function (){var statearr_15463 = state_15455;
(statearr_15463[(9)] = inst_15452);

return statearr_15463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15455__$1,inst_15453);
} else {
if((state_val_15456 === (2))){
var inst_15432 = (state_15455[(8)]);
var inst_15434 = (inst_15432 < n);
var state_15455__$1 = state_15455;
if(cljs.core.truth_(inst_15434)){
var statearr_15464_16341 = state_15455__$1;
(statearr_15464_16341[(1)] = (4));

} else {
var statearr_15465_16342 = state_15455__$1;
(statearr_15465_16342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (11))){
var inst_15432 = (state_15455[(8)]);
var inst_15442 = (state_15455[(2)]);
var inst_15443 = (inst_15432 + (1));
var inst_15432__$1 = inst_15443;
var state_15455__$1 = (function (){var statearr_15466 = state_15455;
(statearr_15466[(10)] = inst_15442);

(statearr_15466[(8)] = inst_15432__$1);

return statearr_15466;
})();
var statearr_15467_16343 = state_15455__$1;
(statearr_15467_16343[(2)] = null);

(statearr_15467_16343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (9))){
var state_15455__$1 = state_15455;
var statearr_15469_16344 = state_15455__$1;
(statearr_15469_16344[(2)] = null);

(statearr_15469_16344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (5))){
var state_15455__$1 = state_15455;
var statearr_15470_16345 = state_15455__$1;
(statearr_15470_16345[(2)] = null);

(statearr_15470_16345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (10))){
var inst_15447 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15471_16346 = state_15455__$1;
(statearr_15471_16346[(2)] = inst_15447);

(statearr_15471_16346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (8))){
var inst_15437 = (state_15455[(7)]);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15455__$1,(11),out,inst_15437);
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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15472[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15472[(1)] = (1));

return statearr_15472;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15455){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15455);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15473){var ex__13574__auto__ = e15473;
var statearr_15474_16347 = state_15455;
(statearr_15474_16347[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15455[(4)]))){
var statearr_15475_16348 = state_15455;
(statearr_15475_16348[(1)] = cljs.core.first((state_15455[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16349 = state_15455;
state_15455 = G__16349;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15476 = f__13732__auto__();
(statearr_15476[(6)] = c__13731__auto___16336);

return statearr_15476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15482 = (function (f,ch,meta15480,_,fn1,meta15483){
this.f = f;
this.ch = ch;
this.meta15480 = meta15480;
this._ = _;
this.fn1 = fn1;
this.meta15483 = meta15483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15484,meta15483__$1){
var self__ = this;
var _15484__$1 = this;
return (new cljs.core.async.t_cljs$core$async15482(self__.f,self__.ch,self__.meta15480,self__._,self__.fn1,meta15483__$1));
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15484){
var self__ = this;
var _15484__$1 = this;
return self__.meta15483;
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15477_SHARP_){
var G__15493 = (((p1__15477_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15477_SHARP_) : self__.f.call(null,p1__15477_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15493) : f1.call(null,G__15493));
});
}));

(cljs.core.async.t_cljs$core$async15482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15480","meta15480",-891958689,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15479","cljs.core.async/t_cljs$core$async15479",-1578614123,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15483","meta15483",1705184323,null)], null);
}));

(cljs.core.async.t_cljs$core$async15482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15482");

(cljs.core.async.t_cljs$core$async15482.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15482.
 */
cljs.core.async.__GT_t_cljs$core$async15482 = (function cljs$core$async$__GT_t_cljs$core$async15482(f,ch,meta15480,_,fn1,meta15483){
return (new cljs.core.async.t_cljs$core$async15482(f,ch,meta15480,_,fn1,meta15483));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15479 = (function (f,ch,meta15480){
this.f = f;
this.ch = ch;
this.meta15480 = meta15480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15481,meta15480__$1){
var self__ = this;
var _15481__$1 = this;
return (new cljs.core.async.t_cljs$core$async15479(self__.f,self__.ch,meta15480__$1));
}));

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15481){
var self__ = this;
var _15481__$1 = this;
return self__.meta15480;
}));

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15482(self__.f,self__.ch,self__.meta15480,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15508 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15508) : self__.f.call(null,G__15508));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15480","meta15480",-891958689,null)], null);
}));

(cljs.core.async.t_cljs$core$async15479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15479");

(cljs.core.async.t_cljs$core$async15479.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15479.
 */
cljs.core.async.__GT_t_cljs$core$async15479 = (function cljs$core$async$__GT_t_cljs$core$async15479(f,ch,meta15480){
return (new cljs.core.async.t_cljs$core$async15479(f,ch,meta15480));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15479(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15509 = (function (f,ch,meta15510){
this.f = f;
this.ch = ch;
this.meta15510 = meta15510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15511,meta15510__$1){
var self__ = this;
var _15511__$1 = this;
return (new cljs.core.async.t_cljs$core$async15509(self__.f,self__.ch,meta15510__$1));
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15511){
var self__ = this;
var _15511__$1 = this;
return self__.meta15510;
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15510","meta15510",116160749,null)], null);
}));

(cljs.core.async.t_cljs$core$async15509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15509");

(cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15509.
 */
cljs.core.async.__GT_t_cljs$core$async15509 = (function cljs$core$async$__GT_t_cljs$core$async15509(f,ch,meta15510){
return (new cljs.core.async.t_cljs$core$async15509(f,ch,meta15510));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15509(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15516 = (function (p,ch,meta15517){
this.p = p;
this.ch = ch;
this.meta15517 = meta15517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15518,meta15517__$1){
var self__ = this;
var _15518__$1 = this;
return (new cljs.core.async.t_cljs$core$async15516(self__.p,self__.ch,meta15517__$1));
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15518){
var self__ = this;
var _15518__$1 = this;
return self__.meta15517;
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15517","meta15517",1399869240,null)], null);
}));

(cljs.core.async.t_cljs$core$async15516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15516");

(cljs.core.async.t_cljs$core$async15516.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15516.
 */
cljs.core.async.__GT_t_cljs$core$async15516 = (function cljs$core$async$__GT_t_cljs$core$async15516(p,ch,meta15517){
return (new cljs.core.async.t_cljs$core$async15516(p,ch,meta15517));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15516(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15521 = arguments.length;
switch (G__15521) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13731__auto___16351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15542){
var state_val_15543 = (state_15542[(1)]);
if((state_val_15543 === (7))){
var inst_15538 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15544_16352 = state_15542__$1;
(statearr_15544_16352[(2)] = inst_15538);

(statearr_15544_16352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (1))){
var state_15542__$1 = state_15542;
var statearr_15545_16353 = state_15542__$1;
(statearr_15545_16353[(2)] = null);

(statearr_15545_16353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (4))){
var inst_15524 = (state_15542[(7)]);
var inst_15524__$1 = (state_15542[(2)]);
var inst_15525 = (inst_15524__$1 == null);
var state_15542__$1 = (function (){var statearr_15546 = state_15542;
(statearr_15546[(7)] = inst_15524__$1);

return statearr_15546;
})();
if(cljs.core.truth_(inst_15525)){
var statearr_15547_16354 = state_15542__$1;
(statearr_15547_16354[(1)] = (5));

} else {
var statearr_15548_16355 = state_15542__$1;
(statearr_15548_16355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (6))){
var inst_15524 = (state_15542[(7)]);
var inst_15529 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15524) : p.call(null,inst_15524));
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15529)){
var statearr_15549_16356 = state_15542__$1;
(statearr_15549_16356[(1)] = (8));

} else {
var statearr_15550_16357 = state_15542__$1;
(statearr_15550_16357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (3))){
var inst_15540 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15542__$1,inst_15540);
} else {
if((state_val_15543 === (2))){
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15542__$1,(4),ch);
} else {
if((state_val_15543 === (11))){
var inst_15532 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15551_16358 = state_15542__$1;
(statearr_15551_16358[(2)] = inst_15532);

(statearr_15551_16358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (9))){
var state_15542__$1 = state_15542;
var statearr_15552_16359 = state_15542__$1;
(statearr_15552_16359[(2)] = null);

(statearr_15552_16359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (5))){
var inst_15527 = cljs.core.async.close_BANG_(out);
var state_15542__$1 = state_15542;
var statearr_15553_16360 = state_15542__$1;
(statearr_15553_16360[(2)] = inst_15527);

(statearr_15553_16360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (10))){
var inst_15535 = (state_15542[(2)]);
var state_15542__$1 = (function (){var statearr_15554 = state_15542;
(statearr_15554[(8)] = inst_15535);

return statearr_15554;
})();
var statearr_15555_16361 = state_15542__$1;
(statearr_15555_16361[(2)] = null);

(statearr_15555_16361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (8))){
var inst_15524 = (state_15542[(7)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15542__$1,(11),out,inst_15524);
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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15556 = [null,null,null,null,null,null,null,null,null];
(statearr_15556[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15556[(1)] = (1));

return statearr_15556;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15542){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15542);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15557){var ex__13574__auto__ = e15557;
var statearr_15558_16362 = state_15542;
(statearr_15558_16362[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15542[(4)]))){
var statearr_15559_16363 = state_15542;
(statearr_15559_16363[(1)] = cljs.core.first((state_15542[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16364 = state_15542;
state_15542 = G__16364;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15560 = f__13732__auto__();
(statearr_15560[(6)] = c__13731__auto___16351);

return statearr_15560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15562 = arguments.length;
switch (G__15562) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13731__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15624){
var state_val_15625 = (state_15624[(1)]);
if((state_val_15625 === (7))){
var inst_15620 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15626_16370 = state_15624__$1;
(statearr_15626_16370[(2)] = inst_15620);

(statearr_15626_16370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (20))){
var inst_15590 = (state_15624[(7)]);
var inst_15601 = (state_15624[(2)]);
var inst_15602 = cljs.core.next(inst_15590);
var inst_15576 = inst_15602;
var inst_15577 = null;
var inst_15578 = (0);
var inst_15579 = (0);
var state_15624__$1 = (function (){var statearr_15627 = state_15624;
(statearr_15627[(8)] = inst_15577);

(statearr_15627[(9)] = inst_15578);

(statearr_15627[(10)] = inst_15579);

(statearr_15627[(11)] = inst_15576);

(statearr_15627[(12)] = inst_15601);

return statearr_15627;
})();
var statearr_15628_16374 = state_15624__$1;
(statearr_15628_16374[(2)] = null);

(statearr_15628_16374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (1))){
var state_15624__$1 = state_15624;
var statearr_15629_16375 = state_15624__$1;
(statearr_15629_16375[(2)] = null);

(statearr_15629_16375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (4))){
var inst_15565 = (state_15624[(13)]);
var inst_15565__$1 = (state_15624[(2)]);
var inst_15566 = (inst_15565__$1 == null);
var state_15624__$1 = (function (){var statearr_15630 = state_15624;
(statearr_15630[(13)] = inst_15565__$1);

return statearr_15630;
})();
if(cljs.core.truth_(inst_15566)){
var statearr_15631_16379 = state_15624__$1;
(statearr_15631_16379[(1)] = (5));

} else {
var statearr_15632_16380 = state_15624__$1;
(statearr_15632_16380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (15))){
var state_15624__$1 = state_15624;
var statearr_15636_16381 = state_15624__$1;
(statearr_15636_16381[(2)] = null);

(statearr_15636_16381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (21))){
var state_15624__$1 = state_15624;
var statearr_15637_16385 = state_15624__$1;
(statearr_15637_16385[(2)] = null);

(statearr_15637_16385[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (13))){
var inst_15577 = (state_15624[(8)]);
var inst_15578 = (state_15624[(9)]);
var inst_15579 = (state_15624[(10)]);
var inst_15576 = (state_15624[(11)]);
var inst_15586 = (state_15624[(2)]);
var inst_15587 = (inst_15579 + (1));
var tmp15633 = inst_15577;
var tmp15634 = inst_15578;
var tmp15635 = inst_15576;
var inst_15576__$1 = tmp15635;
var inst_15577__$1 = tmp15633;
var inst_15578__$1 = tmp15634;
var inst_15579__$1 = inst_15587;
var state_15624__$1 = (function (){var statearr_15638 = state_15624;
(statearr_15638[(8)] = inst_15577__$1);

(statearr_15638[(9)] = inst_15578__$1);

(statearr_15638[(14)] = inst_15586);

(statearr_15638[(10)] = inst_15579__$1);

(statearr_15638[(11)] = inst_15576__$1);

return statearr_15638;
})();
var statearr_15639_16386 = state_15624__$1;
(statearr_15639_16386[(2)] = null);

(statearr_15639_16386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (22))){
var state_15624__$1 = state_15624;
var statearr_15640_16387 = state_15624__$1;
(statearr_15640_16387[(2)] = null);

(statearr_15640_16387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (6))){
var inst_15565 = (state_15624[(13)]);
var inst_15574 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15565) : f.call(null,inst_15565));
var inst_15575 = cljs.core.seq(inst_15574);
var inst_15576 = inst_15575;
var inst_15577 = null;
var inst_15578 = (0);
var inst_15579 = (0);
var state_15624__$1 = (function (){var statearr_15641 = state_15624;
(statearr_15641[(8)] = inst_15577);

(statearr_15641[(9)] = inst_15578);

(statearr_15641[(10)] = inst_15579);

(statearr_15641[(11)] = inst_15576);

return statearr_15641;
})();
var statearr_15642_16391 = state_15624__$1;
(statearr_15642_16391[(2)] = null);

(statearr_15642_16391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (17))){
var inst_15590 = (state_15624[(7)]);
var inst_15594 = cljs.core.chunk_first(inst_15590);
var inst_15595 = cljs.core.chunk_rest(inst_15590);
var inst_15596 = cljs.core.count(inst_15594);
var inst_15576 = inst_15595;
var inst_15577 = inst_15594;
var inst_15578 = inst_15596;
var inst_15579 = (0);
var state_15624__$1 = (function (){var statearr_15643 = state_15624;
(statearr_15643[(8)] = inst_15577);

(statearr_15643[(9)] = inst_15578);

(statearr_15643[(10)] = inst_15579);

(statearr_15643[(11)] = inst_15576);

return statearr_15643;
})();
var statearr_15644_16396 = state_15624__$1;
(statearr_15644_16396[(2)] = null);

(statearr_15644_16396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (3))){
var inst_15622 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15624__$1,inst_15622);
} else {
if((state_val_15625 === (12))){
var inst_15610 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15645_16397 = state_15624__$1;
(statearr_15645_16397[(2)] = inst_15610);

(statearr_15645_16397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (2))){
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15624__$1,(4),in$);
} else {
if((state_val_15625 === (23))){
var inst_15618 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15646_16398 = state_15624__$1;
(statearr_15646_16398[(2)] = inst_15618);

(statearr_15646_16398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (19))){
var inst_15605 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15647_16399 = state_15624__$1;
(statearr_15647_16399[(2)] = inst_15605);

(statearr_15647_16399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (11))){
var inst_15590 = (state_15624[(7)]);
var inst_15576 = (state_15624[(11)]);
var inst_15590__$1 = cljs.core.seq(inst_15576);
var state_15624__$1 = (function (){var statearr_15648 = state_15624;
(statearr_15648[(7)] = inst_15590__$1);

return statearr_15648;
})();
if(inst_15590__$1){
var statearr_15649_16400 = state_15624__$1;
(statearr_15649_16400[(1)] = (14));

} else {
var statearr_15650_16401 = state_15624__$1;
(statearr_15650_16401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (9))){
var inst_15612 = (state_15624[(2)]);
var inst_15613 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15624__$1 = (function (){var statearr_15651 = state_15624;
(statearr_15651[(15)] = inst_15612);

return statearr_15651;
})();
if(cljs.core.truth_(inst_15613)){
var statearr_15652_16402 = state_15624__$1;
(statearr_15652_16402[(1)] = (21));

} else {
var statearr_15653_16403 = state_15624__$1;
(statearr_15653_16403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (5))){
var inst_15568 = cljs.core.async.close_BANG_(out);
var state_15624__$1 = state_15624;
var statearr_15654_16404 = state_15624__$1;
(statearr_15654_16404[(2)] = inst_15568);

(statearr_15654_16404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (14))){
var inst_15590 = (state_15624[(7)]);
var inst_15592 = cljs.core.chunked_seq_QMARK_(inst_15590);
var state_15624__$1 = state_15624;
if(inst_15592){
var statearr_15655_16405 = state_15624__$1;
(statearr_15655_16405[(1)] = (17));

} else {
var statearr_15656_16406 = state_15624__$1;
(statearr_15656_16406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (16))){
var inst_15608 = (state_15624[(2)]);
var state_15624__$1 = state_15624;
var statearr_15657_16407 = state_15624__$1;
(statearr_15657_16407[(2)] = inst_15608);

(statearr_15657_16407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15625 === (10))){
var inst_15577 = (state_15624[(8)]);
var inst_15579 = (state_15624[(10)]);
var inst_15584 = cljs.core._nth(inst_15577,inst_15579);
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15624__$1,(13),out,inst_15584);
} else {
if((state_val_15625 === (18))){
var inst_15590 = (state_15624[(7)]);
var inst_15599 = cljs.core.first(inst_15590);
var state_15624__$1 = state_15624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15624__$1,(20),out,inst_15599);
} else {
if((state_val_15625 === (8))){
var inst_15578 = (state_15624[(9)]);
var inst_15579 = (state_15624[(10)]);
var inst_15581 = (inst_15579 < inst_15578);
var inst_15582 = inst_15581;
var state_15624__$1 = state_15624;
if(cljs.core.truth_(inst_15582)){
var statearr_15658_16410 = state_15624__$1;
(statearr_15658_16410[(1)] = (10));

} else {
var statearr_15659_16411 = state_15624__$1;
(statearr_15659_16411[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13571__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13571__auto____0 = (function (){
var statearr_15660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15660[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13571__auto__);

(statearr_15660[(1)] = (1));

return statearr_15660;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13571__auto____1 = (function (state_15624){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15624);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15661){var ex__13574__auto__ = e15661;
var statearr_15662_16412 = state_15624;
(statearr_15662_16412[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15624[(4)]))){
var statearr_15663_16413 = state_15624;
(statearr_15663_16413[(1)] = cljs.core.first((state_15624[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16414 = state_15624;
state_15624 = G__16414;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13571__auto__ = function(state_15624){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13571__auto____1.call(this,state_15624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13571__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13571__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15664 = f__13732__auto__();
(statearr_15664[(6)] = c__13731__auto__);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));

return c__13731__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15666 = arguments.length;
switch (G__15666) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15668 = arguments.length;
switch (G__15668) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15670 = arguments.length;
switch (G__15670) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13731__auto___16418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15694){
var state_val_15695 = (state_15694[(1)]);
if((state_val_15695 === (7))){
var inst_15689 = (state_15694[(2)]);
var state_15694__$1 = state_15694;
var statearr_15696_16419 = state_15694__$1;
(statearr_15696_16419[(2)] = inst_15689);

(statearr_15696_16419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15695 === (1))){
var inst_15671 = null;
var state_15694__$1 = (function (){var statearr_15697 = state_15694;
(statearr_15697[(7)] = inst_15671);

return statearr_15697;
})();
var statearr_15698_16420 = state_15694__$1;
(statearr_15698_16420[(2)] = null);

(statearr_15698_16420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15695 === (4))){
var inst_15674 = (state_15694[(8)]);
var inst_15674__$1 = (state_15694[(2)]);
var inst_15675 = (inst_15674__$1 == null);
var inst_15676 = cljs.core.not(inst_15675);
var state_15694__$1 = (function (){var statearr_15699 = state_15694;
(statearr_15699[(8)] = inst_15674__$1);

return statearr_15699;
})();
if(inst_15676){
var statearr_15700_16421 = state_15694__$1;
(statearr_15700_16421[(1)] = (5));

} else {
var statearr_15701_16422 = state_15694__$1;
(statearr_15701_16422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15695 === (6))){
var state_15694__$1 = state_15694;
var statearr_15702_16423 = state_15694__$1;
(statearr_15702_16423[(2)] = null);

(statearr_15702_16423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15695 === (3))){
var inst_15691 = (state_15694[(2)]);
var inst_15692 = cljs.core.async.close_BANG_(out);
var state_15694__$1 = (function (){var statearr_15703 = state_15694;
(statearr_15703[(9)] = inst_15691);

return statearr_15703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15694__$1,inst_15692);
} else {
if((state_val_15695 === (2))){
var state_15694__$1 = state_15694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15694__$1,(4),ch);
} else {
if((state_val_15695 === (11))){
var inst_15674 = (state_15694[(8)]);
var inst_15683 = (state_15694[(2)]);
var inst_15671 = inst_15674;
var state_15694__$1 = (function (){var statearr_15704 = state_15694;
(statearr_15704[(7)] = inst_15671);

(statearr_15704[(10)] = inst_15683);

return statearr_15704;
})();
var statearr_15705_16424 = state_15694__$1;
(statearr_15705_16424[(2)] = null);

(statearr_15705_16424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15695 === (9))){
var inst_15674 = (state_15694[(8)]);
var state_15694__$1 = state_15694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15694__$1,(11),out,inst_15674);
} else {
if((state_val_15695 === (5))){
var inst_15671 = (state_15694[(7)]);
var inst_15674 = (state_15694[(8)]);
var inst_15678 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15674,inst_15671);
var state_15694__$1 = state_15694;
if(inst_15678){
var statearr_15707_16425 = state_15694__$1;
(statearr_15707_16425[(1)] = (8));

} else {
var statearr_15708_16426 = state_15694__$1;
(statearr_15708_16426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15695 === (10))){
var inst_15686 = (state_15694[(2)]);
var state_15694__$1 = state_15694;
var statearr_15709_16427 = state_15694__$1;
(statearr_15709_16427[(2)] = inst_15686);

(statearr_15709_16427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15695 === (8))){
var inst_15671 = (state_15694[(7)]);
var tmp15706 = inst_15671;
var inst_15671__$1 = tmp15706;
var state_15694__$1 = (function (){var statearr_15710 = state_15694;
(statearr_15710[(7)] = inst_15671__$1);

return statearr_15710;
})();
var statearr_15711_16428 = state_15694__$1;
(statearr_15711_16428[(2)] = null);

(statearr_15711_16428[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15712[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15712[(1)] = (1));

return statearr_15712;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15694){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15694);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15713){var ex__13574__auto__ = e15713;
var statearr_15714_16429 = state_15694;
(statearr_15714_16429[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15694[(4)]))){
var statearr_15715_16430 = state_15694;
(statearr_15715_16430[(1)] = cljs.core.first((state_15694[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16431 = state_15694;
state_15694 = G__16431;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15716 = f__13732__auto__();
(statearr_15716[(6)] = c__13731__auto___16418);

return statearr_15716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15718 = arguments.length;
switch (G__15718) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13731__auto___16437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15756){
var state_val_15757 = (state_15756[(1)]);
if((state_val_15757 === (7))){
var inst_15752 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15758_16438 = state_15756__$1;
(statearr_15758_16438[(2)] = inst_15752);

(statearr_15758_16438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (1))){
var inst_15719 = (new Array(n));
var inst_15720 = inst_15719;
var inst_15721 = (0);
var state_15756__$1 = (function (){var statearr_15759 = state_15756;
(statearr_15759[(7)] = inst_15721);

(statearr_15759[(8)] = inst_15720);

return statearr_15759;
})();
var statearr_15760_16439 = state_15756__$1;
(statearr_15760_16439[(2)] = null);

(statearr_15760_16439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (4))){
var inst_15724 = (state_15756[(9)]);
var inst_15724__$1 = (state_15756[(2)]);
var inst_15725 = (inst_15724__$1 == null);
var inst_15726 = cljs.core.not(inst_15725);
var state_15756__$1 = (function (){var statearr_15761 = state_15756;
(statearr_15761[(9)] = inst_15724__$1);

return statearr_15761;
})();
if(inst_15726){
var statearr_15762_16440 = state_15756__$1;
(statearr_15762_16440[(1)] = (5));

} else {
var statearr_15763_16441 = state_15756__$1;
(statearr_15763_16441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (15))){
var inst_15746 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15764_16442 = state_15756__$1;
(statearr_15764_16442[(2)] = inst_15746);

(statearr_15764_16442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (13))){
var state_15756__$1 = state_15756;
var statearr_15765_16443 = state_15756__$1;
(statearr_15765_16443[(2)] = null);

(statearr_15765_16443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (6))){
var inst_15721 = (state_15756[(7)]);
var inst_15742 = (inst_15721 > (0));
var state_15756__$1 = state_15756;
if(cljs.core.truth_(inst_15742)){
var statearr_15766_16444 = state_15756__$1;
(statearr_15766_16444[(1)] = (12));

} else {
var statearr_15767_16445 = state_15756__$1;
(statearr_15767_16445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (3))){
var inst_15754 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15756__$1,inst_15754);
} else {
if((state_val_15757 === (12))){
var inst_15720 = (state_15756[(8)]);
var inst_15744 = cljs.core.vec(inst_15720);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15756__$1,(15),out,inst_15744);
} else {
if((state_val_15757 === (2))){
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15756__$1,(4),ch);
} else {
if((state_val_15757 === (11))){
var inst_15736 = (state_15756[(2)]);
var inst_15737 = (new Array(n));
var inst_15720 = inst_15737;
var inst_15721 = (0);
var state_15756__$1 = (function (){var statearr_15768 = state_15756;
(statearr_15768[(7)] = inst_15721);

(statearr_15768[(10)] = inst_15736);

(statearr_15768[(8)] = inst_15720);

return statearr_15768;
})();
var statearr_15769_16450 = state_15756__$1;
(statearr_15769_16450[(2)] = null);

(statearr_15769_16450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (9))){
var inst_15720 = (state_15756[(8)]);
var inst_15734 = cljs.core.vec(inst_15720);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15756__$1,(11),out,inst_15734);
} else {
if((state_val_15757 === (5))){
var inst_15721 = (state_15756[(7)]);
var inst_15724 = (state_15756[(9)]);
var inst_15729 = (state_15756[(11)]);
var inst_15720 = (state_15756[(8)]);
var inst_15728 = (inst_15720[inst_15721] = inst_15724);
var inst_15729__$1 = (inst_15721 + (1));
var inst_15730 = (inst_15729__$1 < n);
var state_15756__$1 = (function (){var statearr_15770 = state_15756;
(statearr_15770[(11)] = inst_15729__$1);

(statearr_15770[(12)] = inst_15728);

return statearr_15770;
})();
if(cljs.core.truth_(inst_15730)){
var statearr_15771_16451 = state_15756__$1;
(statearr_15771_16451[(1)] = (8));

} else {
var statearr_15772_16452 = state_15756__$1;
(statearr_15772_16452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (14))){
var inst_15749 = (state_15756[(2)]);
var inst_15750 = cljs.core.async.close_BANG_(out);
var state_15756__$1 = (function (){var statearr_15774 = state_15756;
(statearr_15774[(13)] = inst_15749);

return statearr_15774;
})();
var statearr_15775_16453 = state_15756__$1;
(statearr_15775_16453[(2)] = inst_15750);

(statearr_15775_16453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (10))){
var inst_15740 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15776_16454 = state_15756__$1;
(statearr_15776_16454[(2)] = inst_15740);

(statearr_15776_16454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (8))){
var inst_15729 = (state_15756[(11)]);
var inst_15720 = (state_15756[(8)]);
var tmp15773 = inst_15720;
var inst_15720__$1 = tmp15773;
var inst_15721 = inst_15729;
var state_15756__$1 = (function (){var statearr_15777 = state_15756;
(statearr_15777[(7)] = inst_15721);

(statearr_15777[(8)] = inst_15720__$1);

return statearr_15777;
})();
var statearr_15778_16456 = state_15756__$1;
(statearr_15778_16456[(2)] = null);

(statearr_15778_16456[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15779[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15779[(1)] = (1));

return statearr_15779;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15756){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15756);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15780){var ex__13574__auto__ = e15780;
var statearr_15781_16457 = state_15756;
(statearr_15781_16457[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15756[(4)]))){
var statearr_15782_16458 = state_15756;
(statearr_15782_16458[(1)] = cljs.core.first((state_15756[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16459 = state_15756;
state_15756 = G__16459;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15783 = f__13732__auto__();
(statearr_15783[(6)] = c__13731__auto___16437);

return statearr_15783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15785 = arguments.length;
switch (G__15785) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13731__auto___16461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13732__auto__ = (function (){var switch__13570__auto__ = (function (state_15830){
var state_val_15831 = (state_15830[(1)]);
if((state_val_15831 === (7))){
var inst_15826 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
var statearr_15832_16462 = state_15830__$1;
(statearr_15832_16462[(2)] = inst_15826);

(statearr_15832_16462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (1))){
var inst_15786 = [];
var inst_15787 = inst_15786;
var inst_15788 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15830__$1 = (function (){var statearr_15833 = state_15830;
(statearr_15833[(7)] = inst_15787);

(statearr_15833[(8)] = inst_15788);

return statearr_15833;
})();
var statearr_15834_16463 = state_15830__$1;
(statearr_15834_16463[(2)] = null);

(statearr_15834_16463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (4))){
var inst_15791 = (state_15830[(9)]);
var inst_15791__$1 = (state_15830[(2)]);
var inst_15792 = (inst_15791__$1 == null);
var inst_15793 = cljs.core.not(inst_15792);
var state_15830__$1 = (function (){var statearr_15835 = state_15830;
(statearr_15835[(9)] = inst_15791__$1);

return statearr_15835;
})();
if(inst_15793){
var statearr_15836_16464 = state_15830__$1;
(statearr_15836_16464[(1)] = (5));

} else {
var statearr_15837_16465 = state_15830__$1;
(statearr_15837_16465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (15))){
var inst_15787 = (state_15830[(7)]);
var inst_15818 = cljs.core.vec(inst_15787);
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15830__$1,(18),out,inst_15818);
} else {
if((state_val_15831 === (13))){
var inst_15813 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
var statearr_15838_16466 = state_15830__$1;
(statearr_15838_16466[(2)] = inst_15813);

(statearr_15838_16466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (6))){
var inst_15787 = (state_15830[(7)]);
var inst_15815 = inst_15787.length;
var inst_15816 = (inst_15815 > (0));
var state_15830__$1 = state_15830;
if(cljs.core.truth_(inst_15816)){
var statearr_15839_16467 = state_15830__$1;
(statearr_15839_16467[(1)] = (15));

} else {
var statearr_15840_16468 = state_15830__$1;
(statearr_15840_16468[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (17))){
var inst_15823 = (state_15830[(2)]);
var inst_15824 = cljs.core.async.close_BANG_(out);
var state_15830__$1 = (function (){var statearr_15841 = state_15830;
(statearr_15841[(10)] = inst_15823);

return statearr_15841;
})();
var statearr_15842_16469 = state_15830__$1;
(statearr_15842_16469[(2)] = inst_15824);

(statearr_15842_16469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (3))){
var inst_15828 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15830__$1,inst_15828);
} else {
if((state_val_15831 === (12))){
var inst_15787 = (state_15830[(7)]);
var inst_15806 = cljs.core.vec(inst_15787);
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15830__$1,(14),out,inst_15806);
} else {
if((state_val_15831 === (2))){
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15830__$1,(4),ch);
} else {
if((state_val_15831 === (11))){
var inst_15795 = (state_15830[(11)]);
var inst_15791 = (state_15830[(9)]);
var inst_15787 = (state_15830[(7)]);
var inst_15803 = inst_15787.push(inst_15791);
var tmp15843 = inst_15787;
var inst_15787__$1 = tmp15843;
var inst_15788 = inst_15795;
var state_15830__$1 = (function (){var statearr_15844 = state_15830;
(statearr_15844[(12)] = inst_15803);

(statearr_15844[(7)] = inst_15787__$1);

(statearr_15844[(8)] = inst_15788);

return statearr_15844;
})();
var statearr_15845_16471 = state_15830__$1;
(statearr_15845_16471[(2)] = null);

(statearr_15845_16471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (9))){
var inst_15788 = (state_15830[(8)]);
var inst_15799 = cljs.core.keyword_identical_QMARK_(inst_15788,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15830__$1 = state_15830;
var statearr_15846_16472 = state_15830__$1;
(statearr_15846_16472[(2)] = inst_15799);

(statearr_15846_16472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (5))){
var inst_15795 = (state_15830[(11)]);
var inst_15791 = (state_15830[(9)]);
var inst_15796 = (state_15830[(13)]);
var inst_15788 = (state_15830[(8)]);
var inst_15795__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15791) : f.call(null,inst_15791));
var inst_15796__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15795__$1,inst_15788);
var state_15830__$1 = (function (){var statearr_15847 = state_15830;
(statearr_15847[(11)] = inst_15795__$1);

(statearr_15847[(13)] = inst_15796__$1);

return statearr_15847;
})();
if(inst_15796__$1){
var statearr_15848_16477 = state_15830__$1;
(statearr_15848_16477[(1)] = (8));

} else {
var statearr_15849_16478 = state_15830__$1;
(statearr_15849_16478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (14))){
var inst_15795 = (state_15830[(11)]);
var inst_15791 = (state_15830[(9)]);
var inst_15808 = (state_15830[(2)]);
var inst_15809 = [];
var inst_15810 = inst_15809.push(inst_15791);
var inst_15787 = inst_15809;
var inst_15788 = inst_15795;
var state_15830__$1 = (function (){var statearr_15850 = state_15830;
(statearr_15850[(7)] = inst_15787);

(statearr_15850[(14)] = inst_15810);

(statearr_15850[(8)] = inst_15788);

(statearr_15850[(15)] = inst_15808);

return statearr_15850;
})();
var statearr_15851_16479 = state_15830__$1;
(statearr_15851_16479[(2)] = null);

(statearr_15851_16479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (16))){
var state_15830__$1 = state_15830;
var statearr_15852_16480 = state_15830__$1;
(statearr_15852_16480[(2)] = null);

(statearr_15852_16480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (10))){
var inst_15801 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
if(cljs.core.truth_(inst_15801)){
var statearr_15853_16481 = state_15830__$1;
(statearr_15853_16481[(1)] = (11));

} else {
var statearr_15854_16482 = state_15830__$1;
(statearr_15854_16482[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (18))){
var inst_15820 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
var statearr_15855_16483 = state_15830__$1;
(statearr_15855_16483[(2)] = inst_15820);

(statearr_15855_16483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15831 === (8))){
var inst_15796 = (state_15830[(13)]);
var state_15830__$1 = state_15830;
var statearr_15856_16484 = state_15830__$1;
(statearr_15856_16484[(2)] = inst_15796);

(statearr_15856_16484[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$state_machine__13571__auto__ = null;
var cljs$core$async$state_machine__13571__auto____0 = (function (){
var statearr_15857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15857[(0)] = cljs$core$async$state_machine__13571__auto__);

(statearr_15857[(1)] = (1));

return statearr_15857;
});
var cljs$core$async$state_machine__13571__auto____1 = (function (state_15830){
while(true){
var ret_value__13572__auto__ = (function (){try{while(true){
var result__13573__auto__ = switch__13570__auto__(state_15830);
if(cljs.core.keyword_identical_QMARK_(result__13573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13573__auto__;
}
break;
}
}catch (e15858){var ex__13574__auto__ = e15858;
var statearr_15859_16485 = state_15830;
(statearr_15859_16485[(2)] = ex__13574__auto__);


if(cljs.core.seq((state_15830[(4)]))){
var statearr_15860_16486 = state_15830;
(statearr_15860_16486[(1)] = cljs.core.first((state_15830[(4)])));

} else {
throw ex__13574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16487 = state_15830;
state_15830 = G__16487;
continue;
} else {
return ret_value__13572__auto__;
}
break;
}
});
cljs$core$async$state_machine__13571__auto__ = function(state_15830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13571__auto____1.call(this,state_15830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13571__auto____0;
cljs$core$async$state_machine__13571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13571__auto____1;
return cljs$core$async$state_machine__13571__auto__;
})()
})();
var state__13733__auto__ = (function (){var statearr_15861 = f__13732__auto__();
(statearr_15861[(6)] = c__13731__auto___16461);

return statearr_15861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13733__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
