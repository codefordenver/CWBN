// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16651 = arguments.length;
switch (G__16651) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16652 = (function (f,blockable,meta16653){
this.f = f;
this.blockable = blockable;
this.meta16653 = meta16653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16654,meta16653__$1){
var self__ = this;
var _16654__$1 = this;
return (new cljs.core.async.t_cljs$core$async16652(self__.f,self__.blockable,meta16653__$1));
});

cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16654){
var self__ = this;
var _16654__$1 = this;
return self__.meta16653;
});

cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16653","meta16653",1309379015,null)], null);
});

cljs.core.async.t_cljs$core$async16652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16652";

cljs.core.async.t_cljs$core$async16652.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async16652");
});

cljs.core.async.__GT_t_cljs$core$async16652 = (function cljs$core$async$__GT_t_cljs$core$async16652(f__$1,blockable__$1,meta16653){
return (new cljs.core.async.t_cljs$core$async16652(f__$1,blockable__$1,meta16653));
});

}

return (new cljs.core.async.t_cljs$core$async16652(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__16658 = arguments.length;
switch (G__16658) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16661 = arguments.length;
switch (G__16661) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__16664 = arguments.length;
switch (G__16664) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16666 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16666);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16666,ret){
return (function (){
return fn1.call(null,val_16666);
});})(val_16666,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16668 = arguments.length;
switch (G__16668) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9719__auto___16670 = n;
var x_16671 = (0);
while(true){
if((x_16671 < n__9719__auto___16670)){
(a[x_16671] = (0));

var G__16672 = (x_16671 + (1));
x_16671 = G__16672;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__16673 = (i + (1));
i = G__16673;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async16674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16674 = (function (flag,meta16675){
this.flag = flag;
this.meta16675 = meta16675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16676,meta16675__$1){
var self__ = this;
var _16676__$1 = this;
return (new cljs.core.async.t_cljs$core$async16674(self__.flag,meta16675__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16676){
var self__ = this;
var _16676__$1 = this;
return self__.meta16675;
});})(flag))
;

cljs.core.async.t_cljs$core$async16674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16674.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16675","meta16675",-1855620416,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16674";

cljs.core.async.t_cljs$core$async16674.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async16674");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16674 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16674(flag__$1,meta16675){
return (new cljs.core.async.t_cljs$core$async16674(flag__$1,meta16675));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16674(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16677 = (function (flag,cb,meta16678){
this.flag = flag;
this.cb = cb;
this.meta16678 = meta16678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16679,meta16678__$1){
var self__ = this;
var _16679__$1 = this;
return (new cljs.core.async.t_cljs$core$async16677(self__.flag,self__.cb,meta16678__$1));
});

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16679){
var self__ = this;
var _16679__$1 = this;
return self__.meta16678;
});

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16678","meta16678",899697840,null)], null);
});

cljs.core.async.t_cljs$core$async16677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16677";

cljs.core.async.t_cljs$core$async16677.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async16677");
});

cljs.core.async.__GT_t_cljs$core$async16677 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16677(flag__$1,cb__$1,meta16678){
return (new cljs.core.async.t_cljs$core$async16677(flag__$1,cb__$1,meta16678));
});

}

return (new cljs.core.async.t_cljs$core$async16677(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16680_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16681_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16681_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8674__auto__ = wport;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16682 = (i + (1));
i = G__16682;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8674__auto__ = ret;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__8662__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8662__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8662__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__9960__auto__ = [];
var len__9953__auto___16688 = arguments.length;
var i__9954__auto___16689 = (0);
while(true){
if((i__9954__auto___16689 < len__9953__auto___16688)){
args__9960__auto__.push((arguments[i__9954__auto___16689]));

var G__16690 = (i__9954__auto___16689 + (1));
i__9954__auto___16689 = G__16690;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((1) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9961__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16685){
var map__16686 = p__16685;
var map__16686__$1 = ((((!((map__16686 == null)))?((((map__16686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16686):map__16686);
var opts = map__16686__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16683){
var G__16684 = cljs.core.first.call(null,seq16683);
var seq16683__$1 = cljs.core.next.call(null,seq16683);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16684,seq16683__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__16692 = arguments.length;
switch (G__16692) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16591__auto___16738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___16738){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___16738){
return (function (state_16716){
var state_val_16717 = (state_16716[(1)]);
if((state_val_16717 === (7))){
var inst_16712 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16718_16739 = state_16716__$1;
(statearr_16718_16739[(2)] = inst_16712);

(statearr_16718_16739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (1))){
var state_16716__$1 = state_16716;
var statearr_16719_16740 = state_16716__$1;
(statearr_16719_16740[(2)] = null);

(statearr_16719_16740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (4))){
var inst_16695 = (state_16716[(7)]);
var inst_16695__$1 = (state_16716[(2)]);
var inst_16696 = (inst_16695__$1 == null);
var state_16716__$1 = (function (){var statearr_16720 = state_16716;
(statearr_16720[(7)] = inst_16695__$1);

return statearr_16720;
})();
if(cljs.core.truth_(inst_16696)){
var statearr_16721_16741 = state_16716__$1;
(statearr_16721_16741[(1)] = (5));

} else {
var statearr_16722_16742 = state_16716__$1;
(statearr_16722_16742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (13))){
var state_16716__$1 = state_16716;
var statearr_16723_16743 = state_16716__$1;
(statearr_16723_16743[(2)] = null);

(statearr_16723_16743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (6))){
var inst_16695 = (state_16716[(7)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16716__$1,(11),to,inst_16695);
} else {
if((state_val_16717 === (3))){
var inst_16714 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16716__$1,inst_16714);
} else {
if((state_val_16717 === (12))){
var state_16716__$1 = state_16716;
var statearr_16724_16744 = state_16716__$1;
(statearr_16724_16744[(2)] = null);

(statearr_16724_16744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (2))){
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16716__$1,(4),from);
} else {
if((state_val_16717 === (11))){
var inst_16705 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
if(cljs.core.truth_(inst_16705)){
var statearr_16725_16745 = state_16716__$1;
(statearr_16725_16745[(1)] = (12));

} else {
var statearr_16726_16746 = state_16716__$1;
(statearr_16726_16746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (9))){
var state_16716__$1 = state_16716;
var statearr_16727_16747 = state_16716__$1;
(statearr_16727_16747[(2)] = null);

(statearr_16727_16747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (5))){
var state_16716__$1 = state_16716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16728_16748 = state_16716__$1;
(statearr_16728_16748[(1)] = (8));

} else {
var statearr_16729_16749 = state_16716__$1;
(statearr_16729_16749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (14))){
var inst_16710 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16730_16750 = state_16716__$1;
(statearr_16730_16750[(2)] = inst_16710);

(statearr_16730_16750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (10))){
var inst_16702 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16731_16751 = state_16716__$1;
(statearr_16731_16751[(2)] = inst_16702);

(statearr_16731_16751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (8))){
var inst_16699 = cljs.core.async.close_BANG_.call(null,to);
var state_16716__$1 = state_16716;
var statearr_16732_16752 = state_16716__$1;
(statearr_16732_16752[(2)] = inst_16699);

(statearr_16732_16752[(1)] = (10));


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
});})(c__16591__auto___16738))
;
return ((function (switch__16501__auto__,c__16591__auto___16738){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_16733 = [null,null,null,null,null,null,null,null];
(statearr_16733[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_16733[(1)] = (1));

return statearr_16733;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_16716){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_16716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e16734){if((e16734 instanceof Object)){
var ex__16505__auto__ = e16734;
var statearr_16735_16753 = state_16716;
(statearr_16735_16753[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16754 = state_16716;
state_16716 = G__16754;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_16716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_16716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___16738))
})();
var state__16593__auto__ = (function (){var statearr_16736 = f__16592__auto__.call(null);
(statearr_16736[(6)] = c__16591__auto___16738);

return statearr_16736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___16738))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16755){
var vec__16756 = p__16755;
var v = cljs.core.nth.call(null,vec__16756,(0),null);
var p = cljs.core.nth.call(null,vec__16756,(1),null);
var job = vec__16756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16591__auto___16927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___16927,res,vec__16756,v,p,job,jobs,results){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___16927,res,vec__16756,v,p,job,jobs,results){
return (function (state_16763){
var state_val_16764 = (state_16763[(1)]);
if((state_val_16764 === (1))){
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16763__$1,(2),res,v);
} else {
if((state_val_16764 === (2))){
var inst_16760 = (state_16763[(2)]);
var inst_16761 = cljs.core.async.close_BANG_.call(null,res);
var state_16763__$1 = (function (){var statearr_16765 = state_16763;
(statearr_16765[(7)] = inst_16760);

return statearr_16765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16763__$1,inst_16761);
} else {
return null;
}
}
});})(c__16591__auto___16927,res,vec__16756,v,p,job,jobs,results))
;
return ((function (switch__16501__auto__,c__16591__auto___16927,res,vec__16756,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0 = (function (){
var statearr_16766 = [null,null,null,null,null,null,null,null];
(statearr_16766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__);

(statearr_16766[(1)] = (1));

return statearr_16766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1 = (function (state_16763){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_16763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e16767){if((e16767 instanceof Object)){
var ex__16505__auto__ = e16767;
var statearr_16768_16928 = state_16763;
(statearr_16768_16928[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16929 = state_16763;
state_16763 = G__16929;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = function(state_16763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1.call(this,state_16763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___16927,res,vec__16756,v,p,job,jobs,results))
})();
var state__16593__auto__ = (function (){var statearr_16769 = f__16592__auto__.call(null);
(statearr_16769[(6)] = c__16591__auto___16927);

return statearr_16769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___16927,res,vec__16756,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16770){
var vec__16771 = p__16770;
var v = cljs.core.nth.call(null,vec__16771,(0),null);
var p = cljs.core.nth.call(null,vec__16771,(1),null);
var job = vec__16771;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__9719__auto___16930 = n;
var __16931 = (0);
while(true){
if((__16931 < n__9719__auto___16930)){
var G__16774_16932 = type;
var G__16774_16933__$1 = (((G__16774_16932 instanceof cljs.core.Keyword))?G__16774_16932.fqn:null);
switch (G__16774_16933__$1) {
case "compute":
var c__16591__auto___16935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16931,c__16591__auto___16935,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (__16931,c__16591__auto___16935,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async){
return (function (state_16787){
var state_val_16788 = (state_16787[(1)]);
if((state_val_16788 === (1))){
var state_16787__$1 = state_16787;
var statearr_16789_16936 = state_16787__$1;
(statearr_16789_16936[(2)] = null);

(statearr_16789_16936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (2))){
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16787__$1,(4),jobs);
} else {
if((state_val_16788 === (3))){
var inst_16785 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16787__$1,inst_16785);
} else {
if((state_val_16788 === (4))){
var inst_16777 = (state_16787[(2)]);
var inst_16778 = process.call(null,inst_16777);
var state_16787__$1 = state_16787;
if(cljs.core.truth_(inst_16778)){
var statearr_16790_16937 = state_16787__$1;
(statearr_16790_16937[(1)] = (5));

} else {
var statearr_16791_16938 = state_16787__$1;
(statearr_16791_16938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (5))){
var state_16787__$1 = state_16787;
var statearr_16792_16939 = state_16787__$1;
(statearr_16792_16939[(2)] = null);

(statearr_16792_16939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (6))){
var state_16787__$1 = state_16787;
var statearr_16793_16940 = state_16787__$1;
(statearr_16793_16940[(2)] = null);

(statearr_16793_16940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (7))){
var inst_16783 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16794_16941 = state_16787__$1;
(statearr_16794_16941[(2)] = inst_16783);

(statearr_16794_16941[(1)] = (3));


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
});})(__16931,c__16591__auto___16935,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async))
;
return ((function (__16931,switch__16501__auto__,c__16591__auto___16935,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0 = (function (){
var statearr_16795 = [null,null,null,null,null,null,null];
(statearr_16795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__);

(statearr_16795[(1)] = (1));

return statearr_16795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1 = (function (state_16787){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_16787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e16796){if((e16796 instanceof Object)){
var ex__16505__auto__ = e16796;
var statearr_16797_16942 = state_16787;
(statearr_16797_16942[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16943 = state_16787;
state_16787 = G__16943;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = function(state_16787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1.call(this,state_16787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__;
})()
;})(__16931,switch__16501__auto__,c__16591__auto___16935,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async))
})();
var state__16593__auto__ = (function (){var statearr_16798 = f__16592__auto__.call(null);
(statearr_16798[(6)] = c__16591__auto___16935);

return statearr_16798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(__16931,c__16591__auto___16935,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async))
);


break;
case "async":
var c__16591__auto___16944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16931,c__16591__auto___16944,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (__16931,c__16591__auto___16944,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async){
return (function (state_16811){
var state_val_16812 = (state_16811[(1)]);
if((state_val_16812 === (1))){
var state_16811__$1 = state_16811;
var statearr_16813_16945 = state_16811__$1;
(statearr_16813_16945[(2)] = null);

(statearr_16813_16945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (2))){
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16811__$1,(4),jobs);
} else {
if((state_val_16812 === (3))){
var inst_16809 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16811__$1,inst_16809);
} else {
if((state_val_16812 === (4))){
var inst_16801 = (state_16811[(2)]);
var inst_16802 = async.call(null,inst_16801);
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16802)){
var statearr_16814_16946 = state_16811__$1;
(statearr_16814_16946[(1)] = (5));

} else {
var statearr_16815_16947 = state_16811__$1;
(statearr_16815_16947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (5))){
var state_16811__$1 = state_16811;
var statearr_16816_16948 = state_16811__$1;
(statearr_16816_16948[(2)] = null);

(statearr_16816_16948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (6))){
var state_16811__$1 = state_16811;
var statearr_16817_16949 = state_16811__$1;
(statearr_16817_16949[(2)] = null);

(statearr_16817_16949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (7))){
var inst_16807 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16818_16950 = state_16811__$1;
(statearr_16818_16950[(2)] = inst_16807);

(statearr_16818_16950[(1)] = (3));


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
});})(__16931,c__16591__auto___16944,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async))
;
return ((function (__16931,switch__16501__auto__,c__16591__auto___16944,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0 = (function (){
var statearr_16819 = [null,null,null,null,null,null,null];
(statearr_16819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__);

(statearr_16819[(1)] = (1));

return statearr_16819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1 = (function (state_16811){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_16811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e16820){if((e16820 instanceof Object)){
var ex__16505__auto__ = e16820;
var statearr_16821_16951 = state_16811;
(statearr_16821_16951[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16952 = state_16811;
state_16811 = G__16952;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__;
})()
;})(__16931,switch__16501__auto__,c__16591__auto___16944,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async))
})();
var state__16593__auto__ = (function (){var statearr_16822 = f__16592__auto__.call(null);
(statearr_16822[(6)] = c__16591__auto___16944);

return statearr_16822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(__16931,c__16591__auto___16944,G__16774_16932,G__16774_16933__$1,n__9719__auto___16930,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16774_16933__$1)].join('')));

}

var G__16953 = (__16931 + (1));
__16931 = G__16953;
continue;
} else {
}
break;
}

var c__16591__auto___16954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___16954,jobs,results,process,async){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___16954,jobs,results,process,async){
return (function (state_16844){
var state_val_16845 = (state_16844[(1)]);
if((state_val_16845 === (1))){
var state_16844__$1 = state_16844;
var statearr_16846_16955 = state_16844__$1;
(statearr_16846_16955[(2)] = null);

(statearr_16846_16955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (2))){
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16844__$1,(4),from);
} else {
if((state_val_16845 === (3))){
var inst_16842 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16844__$1,inst_16842);
} else {
if((state_val_16845 === (4))){
var inst_16825 = (state_16844[(7)]);
var inst_16825__$1 = (state_16844[(2)]);
var inst_16826 = (inst_16825__$1 == null);
var state_16844__$1 = (function (){var statearr_16847 = state_16844;
(statearr_16847[(7)] = inst_16825__$1);

return statearr_16847;
})();
if(cljs.core.truth_(inst_16826)){
var statearr_16848_16956 = state_16844__$1;
(statearr_16848_16956[(1)] = (5));

} else {
var statearr_16849_16957 = state_16844__$1;
(statearr_16849_16957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (5))){
var inst_16828 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16844__$1 = state_16844;
var statearr_16850_16958 = state_16844__$1;
(statearr_16850_16958[(2)] = inst_16828);

(statearr_16850_16958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (6))){
var inst_16830 = (state_16844[(8)]);
var inst_16825 = (state_16844[(7)]);
var inst_16830__$1 = cljs.core.async.chan.call(null,(1));
var inst_16831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16832 = [inst_16825,inst_16830__$1];
var inst_16833 = (new cljs.core.PersistentVector(null,2,(5),inst_16831,inst_16832,null));
var state_16844__$1 = (function (){var statearr_16851 = state_16844;
(statearr_16851[(8)] = inst_16830__$1);

return statearr_16851;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16844__$1,(8),jobs,inst_16833);
} else {
if((state_val_16845 === (7))){
var inst_16840 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16852_16959 = state_16844__$1;
(statearr_16852_16959[(2)] = inst_16840);

(statearr_16852_16959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (8))){
var inst_16830 = (state_16844[(8)]);
var inst_16835 = (state_16844[(2)]);
var state_16844__$1 = (function (){var statearr_16853 = state_16844;
(statearr_16853[(9)] = inst_16835);

return statearr_16853;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16844__$1,(9),results,inst_16830);
} else {
if((state_val_16845 === (9))){
var inst_16837 = (state_16844[(2)]);
var state_16844__$1 = (function (){var statearr_16854 = state_16844;
(statearr_16854[(10)] = inst_16837);

return statearr_16854;
})();
var statearr_16855_16960 = state_16844__$1;
(statearr_16855_16960[(2)] = null);

(statearr_16855_16960[(1)] = (2));


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
});})(c__16591__auto___16954,jobs,results,process,async))
;
return ((function (switch__16501__auto__,c__16591__auto___16954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0 = (function (){
var statearr_16856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__);

(statearr_16856[(1)] = (1));

return statearr_16856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1 = (function (state_16844){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_16844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e16857){if((e16857 instanceof Object)){
var ex__16505__auto__ = e16857;
var statearr_16858_16961 = state_16844;
(statearr_16858_16961[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16962 = state_16844;
state_16844 = G__16962;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___16954,jobs,results,process,async))
})();
var state__16593__auto__ = (function (){var statearr_16859 = f__16592__auto__.call(null);
(statearr_16859[(6)] = c__16591__auto___16954);

return statearr_16859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___16954,jobs,results,process,async))
);


var c__16591__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto__,jobs,results,process,async){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto__,jobs,results,process,async){
return (function (state_16897){
var state_val_16898 = (state_16897[(1)]);
if((state_val_16898 === (7))){
var inst_16893 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16899_16963 = state_16897__$1;
(statearr_16899_16963[(2)] = inst_16893);

(statearr_16899_16963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (20))){
var state_16897__$1 = state_16897;
var statearr_16900_16964 = state_16897__$1;
(statearr_16900_16964[(2)] = null);

(statearr_16900_16964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (1))){
var state_16897__$1 = state_16897;
var statearr_16901_16965 = state_16897__$1;
(statearr_16901_16965[(2)] = null);

(statearr_16901_16965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (4))){
var inst_16862 = (state_16897[(7)]);
var inst_16862__$1 = (state_16897[(2)]);
var inst_16863 = (inst_16862__$1 == null);
var state_16897__$1 = (function (){var statearr_16902 = state_16897;
(statearr_16902[(7)] = inst_16862__$1);

return statearr_16902;
})();
if(cljs.core.truth_(inst_16863)){
var statearr_16903_16966 = state_16897__$1;
(statearr_16903_16966[(1)] = (5));

} else {
var statearr_16904_16967 = state_16897__$1;
(statearr_16904_16967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (15))){
var inst_16875 = (state_16897[(8)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16897__$1,(18),to,inst_16875);
} else {
if((state_val_16898 === (21))){
var inst_16888 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16905_16968 = state_16897__$1;
(statearr_16905_16968[(2)] = inst_16888);

(statearr_16905_16968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (13))){
var inst_16890 = (state_16897[(2)]);
var state_16897__$1 = (function (){var statearr_16906 = state_16897;
(statearr_16906[(9)] = inst_16890);

return statearr_16906;
})();
var statearr_16907_16969 = state_16897__$1;
(statearr_16907_16969[(2)] = null);

(statearr_16907_16969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (6))){
var inst_16862 = (state_16897[(7)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16897__$1,(11),inst_16862);
} else {
if((state_val_16898 === (17))){
var inst_16883 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
if(cljs.core.truth_(inst_16883)){
var statearr_16908_16970 = state_16897__$1;
(statearr_16908_16970[(1)] = (19));

} else {
var statearr_16909_16971 = state_16897__$1;
(statearr_16909_16971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (3))){
var inst_16895 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16897__$1,inst_16895);
} else {
if((state_val_16898 === (12))){
var inst_16872 = (state_16897[(10)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16897__$1,(14),inst_16872);
} else {
if((state_val_16898 === (2))){
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16897__$1,(4),results);
} else {
if((state_val_16898 === (19))){
var state_16897__$1 = state_16897;
var statearr_16910_16972 = state_16897__$1;
(statearr_16910_16972[(2)] = null);

(statearr_16910_16972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (11))){
var inst_16872 = (state_16897[(2)]);
var state_16897__$1 = (function (){var statearr_16911 = state_16897;
(statearr_16911[(10)] = inst_16872);

return statearr_16911;
})();
var statearr_16912_16973 = state_16897__$1;
(statearr_16912_16973[(2)] = null);

(statearr_16912_16973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (9))){
var state_16897__$1 = state_16897;
var statearr_16913_16974 = state_16897__$1;
(statearr_16913_16974[(2)] = null);

(statearr_16913_16974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (5))){
var state_16897__$1 = state_16897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16914_16975 = state_16897__$1;
(statearr_16914_16975[(1)] = (8));

} else {
var statearr_16915_16976 = state_16897__$1;
(statearr_16915_16976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (14))){
var inst_16877 = (state_16897[(11)]);
var inst_16875 = (state_16897[(8)]);
var inst_16875__$1 = (state_16897[(2)]);
var inst_16876 = (inst_16875__$1 == null);
var inst_16877__$1 = cljs.core.not.call(null,inst_16876);
var state_16897__$1 = (function (){var statearr_16916 = state_16897;
(statearr_16916[(11)] = inst_16877__$1);

(statearr_16916[(8)] = inst_16875__$1);

return statearr_16916;
})();
if(inst_16877__$1){
var statearr_16917_16977 = state_16897__$1;
(statearr_16917_16977[(1)] = (15));

} else {
var statearr_16918_16978 = state_16897__$1;
(statearr_16918_16978[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (16))){
var inst_16877 = (state_16897[(11)]);
var state_16897__$1 = state_16897;
var statearr_16919_16979 = state_16897__$1;
(statearr_16919_16979[(2)] = inst_16877);

(statearr_16919_16979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (10))){
var inst_16869 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16920_16980 = state_16897__$1;
(statearr_16920_16980[(2)] = inst_16869);

(statearr_16920_16980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (18))){
var inst_16880 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16921_16981 = state_16897__$1;
(statearr_16921_16981[(2)] = inst_16880);

(statearr_16921_16981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (8))){
var inst_16866 = cljs.core.async.close_BANG_.call(null,to);
var state_16897__$1 = state_16897;
var statearr_16922_16982 = state_16897__$1;
(statearr_16922_16982[(2)] = inst_16866);

(statearr_16922_16982[(1)] = (10));


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
});})(c__16591__auto__,jobs,results,process,async))
;
return ((function (switch__16501__auto__,c__16591__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0 = (function (){
var statearr_16923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__);

(statearr_16923[(1)] = (1));

return statearr_16923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1 = (function (state_16897){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_16897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e16924){if((e16924 instanceof Object)){
var ex__16505__auto__ = e16924;
var statearr_16925_16983 = state_16897;
(statearr_16925_16983[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16984 = state_16897;
state_16897 = G__16984;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__ = function(state_16897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1.call(this,state_16897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto__,jobs,results,process,async))
})();
var state__16593__auto__ = (function (){var statearr_16926 = f__16592__auto__.call(null);
(statearr_16926[(6)] = c__16591__auto__);

return statearr_16926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto__,jobs,results,process,async))
);

return c__16591__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16986 = arguments.length;
switch (G__16986) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__16989 = arguments.length;
switch (G__16989) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__16992 = arguments.length;
switch (G__16992) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16591__auto___17041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___17041,tc,fc){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___17041,tc,fc){
return (function (state_17018){
var state_val_17019 = (state_17018[(1)]);
if((state_val_17019 === (7))){
var inst_17014 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17020_17042 = state_17018__$1;
(statearr_17020_17042[(2)] = inst_17014);

(statearr_17020_17042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (1))){
var state_17018__$1 = state_17018;
var statearr_17021_17043 = state_17018__$1;
(statearr_17021_17043[(2)] = null);

(statearr_17021_17043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (4))){
var inst_16995 = (state_17018[(7)]);
var inst_16995__$1 = (state_17018[(2)]);
var inst_16996 = (inst_16995__$1 == null);
var state_17018__$1 = (function (){var statearr_17022 = state_17018;
(statearr_17022[(7)] = inst_16995__$1);

return statearr_17022;
})();
if(cljs.core.truth_(inst_16996)){
var statearr_17023_17044 = state_17018__$1;
(statearr_17023_17044[(1)] = (5));

} else {
var statearr_17024_17045 = state_17018__$1;
(statearr_17024_17045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (13))){
var state_17018__$1 = state_17018;
var statearr_17025_17046 = state_17018__$1;
(statearr_17025_17046[(2)] = null);

(statearr_17025_17046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (6))){
var inst_16995 = (state_17018[(7)]);
var inst_17001 = p.call(null,inst_16995);
var state_17018__$1 = state_17018;
if(cljs.core.truth_(inst_17001)){
var statearr_17026_17047 = state_17018__$1;
(statearr_17026_17047[(1)] = (9));

} else {
var statearr_17027_17048 = state_17018__$1;
(statearr_17027_17048[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (3))){
var inst_17016 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17018__$1,inst_17016);
} else {
if((state_val_17019 === (12))){
var state_17018__$1 = state_17018;
var statearr_17028_17049 = state_17018__$1;
(statearr_17028_17049[(2)] = null);

(statearr_17028_17049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (2))){
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17018__$1,(4),ch);
} else {
if((state_val_17019 === (11))){
var inst_16995 = (state_17018[(7)]);
var inst_17005 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17018__$1,(8),inst_17005,inst_16995);
} else {
if((state_val_17019 === (9))){
var state_17018__$1 = state_17018;
var statearr_17029_17050 = state_17018__$1;
(statearr_17029_17050[(2)] = tc);

(statearr_17029_17050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (5))){
var inst_16998 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16999 = cljs.core.async.close_BANG_.call(null,fc);
var state_17018__$1 = (function (){var statearr_17030 = state_17018;
(statearr_17030[(8)] = inst_16998);

return statearr_17030;
})();
var statearr_17031_17051 = state_17018__$1;
(statearr_17031_17051[(2)] = inst_16999);

(statearr_17031_17051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (14))){
var inst_17012 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
var statearr_17032_17052 = state_17018__$1;
(statearr_17032_17052[(2)] = inst_17012);

(statearr_17032_17052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (10))){
var state_17018__$1 = state_17018;
var statearr_17033_17053 = state_17018__$1;
(statearr_17033_17053[(2)] = fc);

(statearr_17033_17053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17019 === (8))){
var inst_17007 = (state_17018[(2)]);
var state_17018__$1 = state_17018;
if(cljs.core.truth_(inst_17007)){
var statearr_17034_17054 = state_17018__$1;
(statearr_17034_17054[(1)] = (12));

} else {
var statearr_17035_17055 = state_17018__$1;
(statearr_17035_17055[(1)] = (13));

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
});})(c__16591__auto___17041,tc,fc))
;
return ((function (switch__16501__auto__,c__16591__auto___17041,tc,fc){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_17036 = [null,null,null,null,null,null,null,null,null];
(statearr_17036[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_17036[(1)] = (1));

return statearr_17036;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_17018){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17037){if((e17037 instanceof Object)){
var ex__16505__auto__ = e17037;
var statearr_17038_17056 = state_17018;
(statearr_17038_17056[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17057 = state_17018;
state_17018 = G__17057;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_17018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_17018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___17041,tc,fc))
})();
var state__16593__auto__ = (function (){var statearr_17039 = f__16592__auto__.call(null);
(statearr_17039[(6)] = c__16591__auto___17041);

return statearr_17039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___17041,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16591__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto__){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto__){
return (function (state_17078){
var state_val_17079 = (state_17078[(1)]);
if((state_val_17079 === (7))){
var inst_17074 = (state_17078[(2)]);
var state_17078__$1 = state_17078;
var statearr_17080_17098 = state_17078__$1;
(statearr_17080_17098[(2)] = inst_17074);

(statearr_17080_17098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17079 === (1))){
var inst_17058 = init;
var state_17078__$1 = (function (){var statearr_17081 = state_17078;
(statearr_17081[(7)] = inst_17058);

return statearr_17081;
})();
var statearr_17082_17099 = state_17078__$1;
(statearr_17082_17099[(2)] = null);

(statearr_17082_17099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17079 === (4))){
var inst_17061 = (state_17078[(8)]);
var inst_17061__$1 = (state_17078[(2)]);
var inst_17062 = (inst_17061__$1 == null);
var state_17078__$1 = (function (){var statearr_17083 = state_17078;
(statearr_17083[(8)] = inst_17061__$1);

return statearr_17083;
})();
if(cljs.core.truth_(inst_17062)){
var statearr_17084_17100 = state_17078__$1;
(statearr_17084_17100[(1)] = (5));

} else {
var statearr_17085_17101 = state_17078__$1;
(statearr_17085_17101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17079 === (6))){
var inst_17058 = (state_17078[(7)]);
var inst_17065 = (state_17078[(9)]);
var inst_17061 = (state_17078[(8)]);
var inst_17065__$1 = f.call(null,inst_17058,inst_17061);
var inst_17066 = cljs.core.reduced_QMARK_.call(null,inst_17065__$1);
var state_17078__$1 = (function (){var statearr_17086 = state_17078;
(statearr_17086[(9)] = inst_17065__$1);

return statearr_17086;
})();
if(inst_17066){
var statearr_17087_17102 = state_17078__$1;
(statearr_17087_17102[(1)] = (8));

} else {
var statearr_17088_17103 = state_17078__$1;
(statearr_17088_17103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17079 === (3))){
var inst_17076 = (state_17078[(2)]);
var state_17078__$1 = state_17078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17078__$1,inst_17076);
} else {
if((state_val_17079 === (2))){
var state_17078__$1 = state_17078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17078__$1,(4),ch);
} else {
if((state_val_17079 === (9))){
var inst_17065 = (state_17078[(9)]);
var inst_17058 = inst_17065;
var state_17078__$1 = (function (){var statearr_17089 = state_17078;
(statearr_17089[(7)] = inst_17058);

return statearr_17089;
})();
var statearr_17090_17104 = state_17078__$1;
(statearr_17090_17104[(2)] = null);

(statearr_17090_17104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17079 === (5))){
var inst_17058 = (state_17078[(7)]);
var state_17078__$1 = state_17078;
var statearr_17091_17105 = state_17078__$1;
(statearr_17091_17105[(2)] = inst_17058);

(statearr_17091_17105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17079 === (10))){
var inst_17072 = (state_17078[(2)]);
var state_17078__$1 = state_17078;
var statearr_17092_17106 = state_17078__$1;
(statearr_17092_17106[(2)] = inst_17072);

(statearr_17092_17106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17079 === (8))){
var inst_17065 = (state_17078[(9)]);
var inst_17068 = cljs.core.deref.call(null,inst_17065);
var state_17078__$1 = state_17078;
var statearr_17093_17107 = state_17078__$1;
(statearr_17093_17107[(2)] = inst_17068);

(statearr_17093_17107[(1)] = (10));


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
});})(c__16591__auto__))
;
return ((function (switch__16501__auto__,c__16591__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16502__auto____0 = (function (){
var statearr_17094 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17094[(0)] = cljs$core$async$reduce_$_state_machine__16502__auto__);

(statearr_17094[(1)] = (1));

return statearr_17094;
});
var cljs$core$async$reduce_$_state_machine__16502__auto____1 = (function (state_17078){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17095){if((e17095 instanceof Object)){
var ex__16505__auto__ = e17095;
var statearr_17096_17108 = state_17078;
(statearr_17096_17108[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17109 = state_17078;
state_17078 = G__17109;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16502__auto__ = function(state_17078){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16502__auto____1.call(this,state_17078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16502__auto____0;
cljs$core$async$reduce_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16502__auto____1;
return cljs$core$async$reduce_$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto__))
})();
var state__16593__auto__ = (function (){var statearr_17097 = f__16592__auto__.call(null);
(statearr_17097[(6)] = c__16591__auto__);

return statearr_17097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto__))
);

return c__16591__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16591__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto__,f__$1){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto__,f__$1){
return (function (state_17115){
var state_val_17116 = (state_17115[(1)]);
if((state_val_17116 === (1))){
var inst_17110 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17115__$1 = state_17115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17115__$1,(2),inst_17110);
} else {
if((state_val_17116 === (2))){
var inst_17112 = (state_17115[(2)]);
var inst_17113 = f__$1.call(null,inst_17112);
var state_17115__$1 = state_17115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17115__$1,inst_17113);
} else {
return null;
}
}
});})(c__16591__auto__,f__$1))
;
return ((function (switch__16501__auto__,c__16591__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16502__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16502__auto____0 = (function (){
var statearr_17117 = [null,null,null,null,null,null,null];
(statearr_17117[(0)] = cljs$core$async$transduce_$_state_machine__16502__auto__);

(statearr_17117[(1)] = (1));

return statearr_17117;
});
var cljs$core$async$transduce_$_state_machine__16502__auto____1 = (function (state_17115){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17118){if((e17118 instanceof Object)){
var ex__16505__auto__ = e17118;
var statearr_17119_17121 = state_17115;
(statearr_17119_17121[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17122 = state_17115;
state_17115 = G__17122;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16502__auto__ = function(state_17115){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16502__auto____1.call(this,state_17115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16502__auto____0;
cljs$core$async$transduce_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16502__auto____1;
return cljs$core$async$transduce_$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto__,f__$1))
})();
var state__16593__auto__ = (function (){var statearr_17120 = f__16592__auto__.call(null);
(statearr_17120[(6)] = c__16591__auto__);

return statearr_17120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto__,f__$1))
);

return c__16591__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17124 = arguments.length;
switch (G__17124) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16591__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto__){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto__){
return (function (state_17149){
var state_val_17150 = (state_17149[(1)]);
if((state_val_17150 === (7))){
var inst_17131 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17151_17172 = state_17149__$1;
(statearr_17151_17172[(2)] = inst_17131);

(statearr_17151_17172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (1))){
var inst_17125 = cljs.core.seq.call(null,coll);
var inst_17126 = inst_17125;
var state_17149__$1 = (function (){var statearr_17152 = state_17149;
(statearr_17152[(7)] = inst_17126);

return statearr_17152;
})();
var statearr_17153_17173 = state_17149__$1;
(statearr_17153_17173[(2)] = null);

(statearr_17153_17173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (4))){
var inst_17126 = (state_17149[(7)]);
var inst_17129 = cljs.core.first.call(null,inst_17126);
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17149__$1,(7),ch,inst_17129);
} else {
if((state_val_17150 === (13))){
var inst_17143 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17154_17174 = state_17149__$1;
(statearr_17154_17174[(2)] = inst_17143);

(statearr_17154_17174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (6))){
var inst_17134 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17134)){
var statearr_17155_17175 = state_17149__$1;
(statearr_17155_17175[(1)] = (8));

} else {
var statearr_17156_17176 = state_17149__$1;
(statearr_17156_17176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (3))){
var inst_17147 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17149__$1,inst_17147);
} else {
if((state_val_17150 === (12))){
var state_17149__$1 = state_17149;
var statearr_17157_17177 = state_17149__$1;
(statearr_17157_17177[(2)] = null);

(statearr_17157_17177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (2))){
var inst_17126 = (state_17149[(7)]);
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17126)){
var statearr_17158_17178 = state_17149__$1;
(statearr_17158_17178[(1)] = (4));

} else {
var statearr_17159_17179 = state_17149__$1;
(statearr_17159_17179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (11))){
var inst_17140 = cljs.core.async.close_BANG_.call(null,ch);
var state_17149__$1 = state_17149;
var statearr_17160_17180 = state_17149__$1;
(statearr_17160_17180[(2)] = inst_17140);

(statearr_17160_17180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (9))){
var state_17149__$1 = state_17149;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17161_17181 = state_17149__$1;
(statearr_17161_17181[(1)] = (11));

} else {
var statearr_17162_17182 = state_17149__$1;
(statearr_17162_17182[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (5))){
var inst_17126 = (state_17149[(7)]);
var state_17149__$1 = state_17149;
var statearr_17163_17183 = state_17149__$1;
(statearr_17163_17183[(2)] = inst_17126);

(statearr_17163_17183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (10))){
var inst_17145 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17164_17184 = state_17149__$1;
(statearr_17164_17184[(2)] = inst_17145);

(statearr_17164_17184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (8))){
var inst_17126 = (state_17149[(7)]);
var inst_17136 = cljs.core.next.call(null,inst_17126);
var inst_17126__$1 = inst_17136;
var state_17149__$1 = (function (){var statearr_17165 = state_17149;
(statearr_17165[(7)] = inst_17126__$1);

return statearr_17165;
})();
var statearr_17166_17185 = state_17149__$1;
(statearr_17166_17185[(2)] = null);

(statearr_17166_17185[(1)] = (2));


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
});})(c__16591__auto__))
;
return ((function (switch__16501__auto__,c__16591__auto__){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_17167 = [null,null,null,null,null,null,null,null];
(statearr_17167[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_17167[(1)] = (1));

return statearr_17167;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_17149){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17168){if((e17168 instanceof Object)){
var ex__16505__auto__ = e17168;
var statearr_17169_17186 = state_17149;
(statearr_17169_17186[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17187 = state_17149;
state_17149 = G__17187;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_17149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_17149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto__))
})();
var state__16593__auto__ = (function (){var statearr_17170 = f__16592__auto__.call(null);
(statearr_17170[(6)] = c__16591__auto__);

return statearr_17170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto__))
);

return c__16591__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9407__auto__ = (((_ == null))?null:_);
var m__9408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,_);
} else {
var m__9408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m,ch);
} else {
var m__9408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m);
} else {
var m__9408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17188 = (function (ch,cs,meta17189){
this.ch = ch;
this.cs = cs;
this.meta17189 = meta17189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17190,meta17189__$1){
var self__ = this;
var _17190__$1 = this;
return (new cljs.core.async.t_cljs$core$async17188(self__.ch,self__.cs,meta17189__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17190){
var self__ = this;
var _17190__$1 = this;
return self__.meta17189;
});})(cs))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17188.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17189","meta17189",-1315461350,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17188";

cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17188");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17188 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17188(ch__$1,cs__$1,meta17189){
return (new cljs.core.async.t_cljs$core$async17188(ch__$1,cs__$1,meta17189));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17188(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16591__auto___17410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___17410,cs,m,dchan,dctr,done){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___17410,cs,m,dchan,dctr,done){
return (function (state_17325){
var state_val_17326 = (state_17325[(1)]);
if((state_val_17326 === (7))){
var inst_17321 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17327_17411 = state_17325__$1;
(statearr_17327_17411[(2)] = inst_17321);

(statearr_17327_17411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (20))){
var inst_17224 = (state_17325[(7)]);
var inst_17236 = cljs.core.first.call(null,inst_17224);
var inst_17237 = cljs.core.nth.call(null,inst_17236,(0),null);
var inst_17238 = cljs.core.nth.call(null,inst_17236,(1),null);
var state_17325__$1 = (function (){var statearr_17328 = state_17325;
(statearr_17328[(8)] = inst_17237);

return statearr_17328;
})();
if(cljs.core.truth_(inst_17238)){
var statearr_17329_17412 = state_17325__$1;
(statearr_17329_17412[(1)] = (22));

} else {
var statearr_17330_17413 = state_17325__$1;
(statearr_17330_17413[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (27))){
var inst_17266 = (state_17325[(9)]);
var inst_17273 = (state_17325[(10)]);
var inst_17193 = (state_17325[(11)]);
var inst_17268 = (state_17325[(12)]);
var inst_17273__$1 = cljs.core._nth.call(null,inst_17266,inst_17268);
var inst_17274 = cljs.core.async.put_BANG_.call(null,inst_17273__$1,inst_17193,done);
var state_17325__$1 = (function (){var statearr_17331 = state_17325;
(statearr_17331[(10)] = inst_17273__$1);

return statearr_17331;
})();
if(cljs.core.truth_(inst_17274)){
var statearr_17332_17414 = state_17325__$1;
(statearr_17332_17414[(1)] = (30));

} else {
var statearr_17333_17415 = state_17325__$1;
(statearr_17333_17415[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (1))){
var state_17325__$1 = state_17325;
var statearr_17334_17416 = state_17325__$1;
(statearr_17334_17416[(2)] = null);

(statearr_17334_17416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (24))){
var inst_17224 = (state_17325[(7)]);
var inst_17243 = (state_17325[(2)]);
var inst_17244 = cljs.core.next.call(null,inst_17224);
var inst_17202 = inst_17244;
var inst_17203 = null;
var inst_17204 = (0);
var inst_17205 = (0);
var state_17325__$1 = (function (){var statearr_17335 = state_17325;
(statearr_17335[(13)] = inst_17203);

(statearr_17335[(14)] = inst_17243);

(statearr_17335[(15)] = inst_17202);

(statearr_17335[(16)] = inst_17205);

(statearr_17335[(17)] = inst_17204);

return statearr_17335;
})();
var statearr_17336_17417 = state_17325__$1;
(statearr_17336_17417[(2)] = null);

(statearr_17336_17417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (39))){
var state_17325__$1 = state_17325;
var statearr_17340_17418 = state_17325__$1;
(statearr_17340_17418[(2)] = null);

(statearr_17340_17418[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (4))){
var inst_17193 = (state_17325[(11)]);
var inst_17193__$1 = (state_17325[(2)]);
var inst_17194 = (inst_17193__$1 == null);
var state_17325__$1 = (function (){var statearr_17341 = state_17325;
(statearr_17341[(11)] = inst_17193__$1);

return statearr_17341;
})();
if(cljs.core.truth_(inst_17194)){
var statearr_17342_17419 = state_17325__$1;
(statearr_17342_17419[(1)] = (5));

} else {
var statearr_17343_17420 = state_17325__$1;
(statearr_17343_17420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (15))){
var inst_17203 = (state_17325[(13)]);
var inst_17202 = (state_17325[(15)]);
var inst_17205 = (state_17325[(16)]);
var inst_17204 = (state_17325[(17)]);
var inst_17220 = (state_17325[(2)]);
var inst_17221 = (inst_17205 + (1));
var tmp17337 = inst_17203;
var tmp17338 = inst_17202;
var tmp17339 = inst_17204;
var inst_17202__$1 = tmp17338;
var inst_17203__$1 = tmp17337;
var inst_17204__$1 = tmp17339;
var inst_17205__$1 = inst_17221;
var state_17325__$1 = (function (){var statearr_17344 = state_17325;
(statearr_17344[(13)] = inst_17203__$1);

(statearr_17344[(15)] = inst_17202__$1);

(statearr_17344[(18)] = inst_17220);

(statearr_17344[(16)] = inst_17205__$1);

(statearr_17344[(17)] = inst_17204__$1);

return statearr_17344;
})();
var statearr_17345_17421 = state_17325__$1;
(statearr_17345_17421[(2)] = null);

(statearr_17345_17421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (21))){
var inst_17247 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17349_17422 = state_17325__$1;
(statearr_17349_17422[(2)] = inst_17247);

(statearr_17349_17422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (31))){
var inst_17273 = (state_17325[(10)]);
var inst_17277 = done.call(null,null);
var inst_17278 = cljs.core.async.untap_STAR_.call(null,m,inst_17273);
var state_17325__$1 = (function (){var statearr_17350 = state_17325;
(statearr_17350[(19)] = inst_17277);

return statearr_17350;
})();
var statearr_17351_17423 = state_17325__$1;
(statearr_17351_17423[(2)] = inst_17278);

(statearr_17351_17423[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (32))){
var inst_17266 = (state_17325[(9)]);
var inst_17265 = (state_17325[(20)]);
var inst_17267 = (state_17325[(21)]);
var inst_17268 = (state_17325[(12)]);
var inst_17280 = (state_17325[(2)]);
var inst_17281 = (inst_17268 + (1));
var tmp17346 = inst_17266;
var tmp17347 = inst_17265;
var tmp17348 = inst_17267;
var inst_17265__$1 = tmp17347;
var inst_17266__$1 = tmp17346;
var inst_17267__$1 = tmp17348;
var inst_17268__$1 = inst_17281;
var state_17325__$1 = (function (){var statearr_17352 = state_17325;
(statearr_17352[(9)] = inst_17266__$1);

(statearr_17352[(22)] = inst_17280);

(statearr_17352[(20)] = inst_17265__$1);

(statearr_17352[(21)] = inst_17267__$1);

(statearr_17352[(12)] = inst_17268__$1);

return statearr_17352;
})();
var statearr_17353_17424 = state_17325__$1;
(statearr_17353_17424[(2)] = null);

(statearr_17353_17424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (40))){
var inst_17293 = (state_17325[(23)]);
var inst_17297 = done.call(null,null);
var inst_17298 = cljs.core.async.untap_STAR_.call(null,m,inst_17293);
var state_17325__$1 = (function (){var statearr_17354 = state_17325;
(statearr_17354[(24)] = inst_17297);

return statearr_17354;
})();
var statearr_17355_17425 = state_17325__$1;
(statearr_17355_17425[(2)] = inst_17298);

(statearr_17355_17425[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (33))){
var inst_17284 = (state_17325[(25)]);
var inst_17286 = cljs.core.chunked_seq_QMARK_.call(null,inst_17284);
var state_17325__$1 = state_17325;
if(inst_17286){
var statearr_17356_17426 = state_17325__$1;
(statearr_17356_17426[(1)] = (36));

} else {
var statearr_17357_17427 = state_17325__$1;
(statearr_17357_17427[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (13))){
var inst_17214 = (state_17325[(26)]);
var inst_17217 = cljs.core.async.close_BANG_.call(null,inst_17214);
var state_17325__$1 = state_17325;
var statearr_17358_17428 = state_17325__$1;
(statearr_17358_17428[(2)] = inst_17217);

(statearr_17358_17428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (22))){
var inst_17237 = (state_17325[(8)]);
var inst_17240 = cljs.core.async.close_BANG_.call(null,inst_17237);
var state_17325__$1 = state_17325;
var statearr_17359_17429 = state_17325__$1;
(statearr_17359_17429[(2)] = inst_17240);

(statearr_17359_17429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (36))){
var inst_17284 = (state_17325[(25)]);
var inst_17288 = cljs.core.chunk_first.call(null,inst_17284);
var inst_17289 = cljs.core.chunk_rest.call(null,inst_17284);
var inst_17290 = cljs.core.count.call(null,inst_17288);
var inst_17265 = inst_17289;
var inst_17266 = inst_17288;
var inst_17267 = inst_17290;
var inst_17268 = (0);
var state_17325__$1 = (function (){var statearr_17360 = state_17325;
(statearr_17360[(9)] = inst_17266);

(statearr_17360[(20)] = inst_17265);

(statearr_17360[(21)] = inst_17267);

(statearr_17360[(12)] = inst_17268);

return statearr_17360;
})();
var statearr_17361_17430 = state_17325__$1;
(statearr_17361_17430[(2)] = null);

(statearr_17361_17430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (41))){
var inst_17284 = (state_17325[(25)]);
var inst_17300 = (state_17325[(2)]);
var inst_17301 = cljs.core.next.call(null,inst_17284);
var inst_17265 = inst_17301;
var inst_17266 = null;
var inst_17267 = (0);
var inst_17268 = (0);
var state_17325__$1 = (function (){var statearr_17362 = state_17325;
(statearr_17362[(9)] = inst_17266);

(statearr_17362[(27)] = inst_17300);

(statearr_17362[(20)] = inst_17265);

(statearr_17362[(21)] = inst_17267);

(statearr_17362[(12)] = inst_17268);

return statearr_17362;
})();
var statearr_17363_17431 = state_17325__$1;
(statearr_17363_17431[(2)] = null);

(statearr_17363_17431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (43))){
var state_17325__$1 = state_17325;
var statearr_17364_17432 = state_17325__$1;
(statearr_17364_17432[(2)] = null);

(statearr_17364_17432[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (29))){
var inst_17309 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17365_17433 = state_17325__$1;
(statearr_17365_17433[(2)] = inst_17309);

(statearr_17365_17433[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (44))){
var inst_17318 = (state_17325[(2)]);
var state_17325__$1 = (function (){var statearr_17366 = state_17325;
(statearr_17366[(28)] = inst_17318);

return statearr_17366;
})();
var statearr_17367_17434 = state_17325__$1;
(statearr_17367_17434[(2)] = null);

(statearr_17367_17434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (6))){
var inst_17257 = (state_17325[(29)]);
var inst_17256 = cljs.core.deref.call(null,cs);
var inst_17257__$1 = cljs.core.keys.call(null,inst_17256);
var inst_17258 = cljs.core.count.call(null,inst_17257__$1);
var inst_17259 = cljs.core.reset_BANG_.call(null,dctr,inst_17258);
var inst_17264 = cljs.core.seq.call(null,inst_17257__$1);
var inst_17265 = inst_17264;
var inst_17266 = null;
var inst_17267 = (0);
var inst_17268 = (0);
var state_17325__$1 = (function (){var statearr_17368 = state_17325;
(statearr_17368[(9)] = inst_17266);

(statearr_17368[(30)] = inst_17259);

(statearr_17368[(29)] = inst_17257__$1);

(statearr_17368[(20)] = inst_17265);

(statearr_17368[(21)] = inst_17267);

(statearr_17368[(12)] = inst_17268);

return statearr_17368;
})();
var statearr_17369_17435 = state_17325__$1;
(statearr_17369_17435[(2)] = null);

(statearr_17369_17435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (28))){
var inst_17284 = (state_17325[(25)]);
var inst_17265 = (state_17325[(20)]);
var inst_17284__$1 = cljs.core.seq.call(null,inst_17265);
var state_17325__$1 = (function (){var statearr_17370 = state_17325;
(statearr_17370[(25)] = inst_17284__$1);

return statearr_17370;
})();
if(inst_17284__$1){
var statearr_17371_17436 = state_17325__$1;
(statearr_17371_17436[(1)] = (33));

} else {
var statearr_17372_17437 = state_17325__$1;
(statearr_17372_17437[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (25))){
var inst_17267 = (state_17325[(21)]);
var inst_17268 = (state_17325[(12)]);
var inst_17270 = (inst_17268 < inst_17267);
var inst_17271 = inst_17270;
var state_17325__$1 = state_17325;
if(cljs.core.truth_(inst_17271)){
var statearr_17373_17438 = state_17325__$1;
(statearr_17373_17438[(1)] = (27));

} else {
var statearr_17374_17439 = state_17325__$1;
(statearr_17374_17439[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (34))){
var state_17325__$1 = state_17325;
var statearr_17375_17440 = state_17325__$1;
(statearr_17375_17440[(2)] = null);

(statearr_17375_17440[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (17))){
var state_17325__$1 = state_17325;
var statearr_17376_17441 = state_17325__$1;
(statearr_17376_17441[(2)] = null);

(statearr_17376_17441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (3))){
var inst_17323 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17325__$1,inst_17323);
} else {
if((state_val_17326 === (12))){
var inst_17252 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17377_17442 = state_17325__$1;
(statearr_17377_17442[(2)] = inst_17252);

(statearr_17377_17442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (2))){
var state_17325__$1 = state_17325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17325__$1,(4),ch);
} else {
if((state_val_17326 === (23))){
var state_17325__$1 = state_17325;
var statearr_17378_17443 = state_17325__$1;
(statearr_17378_17443[(2)] = null);

(statearr_17378_17443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (35))){
var inst_17307 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17379_17444 = state_17325__$1;
(statearr_17379_17444[(2)] = inst_17307);

(statearr_17379_17444[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (19))){
var inst_17224 = (state_17325[(7)]);
var inst_17228 = cljs.core.chunk_first.call(null,inst_17224);
var inst_17229 = cljs.core.chunk_rest.call(null,inst_17224);
var inst_17230 = cljs.core.count.call(null,inst_17228);
var inst_17202 = inst_17229;
var inst_17203 = inst_17228;
var inst_17204 = inst_17230;
var inst_17205 = (0);
var state_17325__$1 = (function (){var statearr_17380 = state_17325;
(statearr_17380[(13)] = inst_17203);

(statearr_17380[(15)] = inst_17202);

(statearr_17380[(16)] = inst_17205);

(statearr_17380[(17)] = inst_17204);

return statearr_17380;
})();
var statearr_17381_17445 = state_17325__$1;
(statearr_17381_17445[(2)] = null);

(statearr_17381_17445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (11))){
var inst_17224 = (state_17325[(7)]);
var inst_17202 = (state_17325[(15)]);
var inst_17224__$1 = cljs.core.seq.call(null,inst_17202);
var state_17325__$1 = (function (){var statearr_17382 = state_17325;
(statearr_17382[(7)] = inst_17224__$1);

return statearr_17382;
})();
if(inst_17224__$1){
var statearr_17383_17446 = state_17325__$1;
(statearr_17383_17446[(1)] = (16));

} else {
var statearr_17384_17447 = state_17325__$1;
(statearr_17384_17447[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (9))){
var inst_17254 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17385_17448 = state_17325__$1;
(statearr_17385_17448[(2)] = inst_17254);

(statearr_17385_17448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (5))){
var inst_17200 = cljs.core.deref.call(null,cs);
var inst_17201 = cljs.core.seq.call(null,inst_17200);
var inst_17202 = inst_17201;
var inst_17203 = null;
var inst_17204 = (0);
var inst_17205 = (0);
var state_17325__$1 = (function (){var statearr_17386 = state_17325;
(statearr_17386[(13)] = inst_17203);

(statearr_17386[(15)] = inst_17202);

(statearr_17386[(16)] = inst_17205);

(statearr_17386[(17)] = inst_17204);

return statearr_17386;
})();
var statearr_17387_17449 = state_17325__$1;
(statearr_17387_17449[(2)] = null);

(statearr_17387_17449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (14))){
var state_17325__$1 = state_17325;
var statearr_17388_17450 = state_17325__$1;
(statearr_17388_17450[(2)] = null);

(statearr_17388_17450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (45))){
var inst_17315 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17389_17451 = state_17325__$1;
(statearr_17389_17451[(2)] = inst_17315);

(statearr_17389_17451[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (26))){
var inst_17257 = (state_17325[(29)]);
var inst_17311 = (state_17325[(2)]);
var inst_17312 = cljs.core.seq.call(null,inst_17257);
var state_17325__$1 = (function (){var statearr_17390 = state_17325;
(statearr_17390[(31)] = inst_17311);

return statearr_17390;
})();
if(inst_17312){
var statearr_17391_17452 = state_17325__$1;
(statearr_17391_17452[(1)] = (42));

} else {
var statearr_17392_17453 = state_17325__$1;
(statearr_17392_17453[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (16))){
var inst_17224 = (state_17325[(7)]);
var inst_17226 = cljs.core.chunked_seq_QMARK_.call(null,inst_17224);
var state_17325__$1 = state_17325;
if(inst_17226){
var statearr_17393_17454 = state_17325__$1;
(statearr_17393_17454[(1)] = (19));

} else {
var statearr_17394_17455 = state_17325__$1;
(statearr_17394_17455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (38))){
var inst_17304 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17395_17456 = state_17325__$1;
(statearr_17395_17456[(2)] = inst_17304);

(statearr_17395_17456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (30))){
var state_17325__$1 = state_17325;
var statearr_17396_17457 = state_17325__$1;
(statearr_17396_17457[(2)] = null);

(statearr_17396_17457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (10))){
var inst_17203 = (state_17325[(13)]);
var inst_17205 = (state_17325[(16)]);
var inst_17213 = cljs.core._nth.call(null,inst_17203,inst_17205);
var inst_17214 = cljs.core.nth.call(null,inst_17213,(0),null);
var inst_17215 = cljs.core.nth.call(null,inst_17213,(1),null);
var state_17325__$1 = (function (){var statearr_17397 = state_17325;
(statearr_17397[(26)] = inst_17214);

return statearr_17397;
})();
if(cljs.core.truth_(inst_17215)){
var statearr_17398_17458 = state_17325__$1;
(statearr_17398_17458[(1)] = (13));

} else {
var statearr_17399_17459 = state_17325__$1;
(statearr_17399_17459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (18))){
var inst_17250 = (state_17325[(2)]);
var state_17325__$1 = state_17325;
var statearr_17400_17460 = state_17325__$1;
(statearr_17400_17460[(2)] = inst_17250);

(statearr_17400_17460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (42))){
var state_17325__$1 = state_17325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17325__$1,(45),dchan);
} else {
if((state_val_17326 === (37))){
var inst_17293 = (state_17325[(23)]);
var inst_17193 = (state_17325[(11)]);
var inst_17284 = (state_17325[(25)]);
var inst_17293__$1 = cljs.core.first.call(null,inst_17284);
var inst_17294 = cljs.core.async.put_BANG_.call(null,inst_17293__$1,inst_17193,done);
var state_17325__$1 = (function (){var statearr_17401 = state_17325;
(statearr_17401[(23)] = inst_17293__$1);

return statearr_17401;
})();
if(cljs.core.truth_(inst_17294)){
var statearr_17402_17461 = state_17325__$1;
(statearr_17402_17461[(1)] = (39));

} else {
var statearr_17403_17462 = state_17325__$1;
(statearr_17403_17462[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17326 === (8))){
var inst_17205 = (state_17325[(16)]);
var inst_17204 = (state_17325[(17)]);
var inst_17207 = (inst_17205 < inst_17204);
var inst_17208 = inst_17207;
var state_17325__$1 = state_17325;
if(cljs.core.truth_(inst_17208)){
var statearr_17404_17463 = state_17325__$1;
(statearr_17404_17463[(1)] = (10));

} else {
var statearr_17405_17464 = state_17325__$1;
(statearr_17405_17464[(1)] = (11));

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
});})(c__16591__auto___17410,cs,m,dchan,dctr,done))
;
return ((function (switch__16501__auto__,c__16591__auto___17410,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16502__auto__ = null;
var cljs$core$async$mult_$_state_machine__16502__auto____0 = (function (){
var statearr_17406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17406[(0)] = cljs$core$async$mult_$_state_machine__16502__auto__);

(statearr_17406[(1)] = (1));

return statearr_17406;
});
var cljs$core$async$mult_$_state_machine__16502__auto____1 = (function (state_17325){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17407){if((e17407 instanceof Object)){
var ex__16505__auto__ = e17407;
var statearr_17408_17465 = state_17325;
(statearr_17408_17465[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17466 = state_17325;
state_17325 = G__17466;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16502__auto__ = function(state_17325){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16502__auto____1.call(this,state_17325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16502__auto____0;
cljs$core$async$mult_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16502__auto____1;
return cljs$core$async$mult_$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___17410,cs,m,dchan,dctr,done))
})();
var state__16593__auto__ = (function (){var statearr_17409 = f__16592__auto__.call(null);
(statearr_17409[(6)] = c__16591__auto___17410);

return statearr_17409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___17410,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17468 = arguments.length;
switch (G__17468) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m,ch);
} else {
var m__9408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m,ch);
} else {
var m__9408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m);
} else {
var m__9408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m,state_map);
} else {
var m__9408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9407__auto__ = (((m == null))?null:m);
var m__9408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,m,mode);
} else {
var m__9408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___17480 = arguments.length;
var i__9954__auto___17481 = (0);
while(true){
if((i__9954__auto___17481 < len__9953__auto___17480)){
args__9960__auto__.push((arguments[i__9954__auto___17481]));

var G__17482 = (i__9954__auto___17481 + (1));
i__9954__auto___17481 = G__17482;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17474){
var map__17475 = p__17474;
var map__17475__$1 = ((((!((map__17475 == null)))?((((map__17475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17475):map__17475);
var opts = map__17475__$1;
var statearr_17477_17483 = state;
(statearr_17477_17483[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__17475,map__17475__$1,opts){
return (function (val){
var statearr_17478_17484 = state;
(statearr_17478_17484[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17475,map__17475__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17479_17485 = state;
(statearr_17479_17485[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17470){
var G__17471 = cljs.core.first.call(null,seq17470);
var seq17470__$1 = cljs.core.next.call(null,seq17470);
var G__17472 = cljs.core.first.call(null,seq17470__$1);
var seq17470__$2 = cljs.core.next.call(null,seq17470__$1);
var G__17473 = cljs.core.first.call(null,seq17470__$2);
var seq17470__$3 = cljs.core.next.call(null,seq17470__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17471,G__17472,G__17473,seq17470__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17486 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17487){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17487 = meta17487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17488,meta17487__$1){
var self__ = this;
var _17488__$1 = this;
return (new cljs.core.async.t_cljs$core$async17486(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17487__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17488){
var self__ = this;
var _17488__$1 = this;
return self__.meta17487;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17487","meta17487",274027511,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17486";

cljs.core.async.t_cljs$core$async17486.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17486");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17486 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17487){
return (new cljs.core.async.t_cljs$core$async17486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17487));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17486(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16591__auto___17650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___17650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___17650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17590){
var state_val_17591 = (state_17590[(1)]);
if((state_val_17591 === (7))){
var inst_17505 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17592_17651 = state_17590__$1;
(statearr_17592_17651[(2)] = inst_17505);

(statearr_17592_17651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (20))){
var inst_17517 = (state_17590[(7)]);
var state_17590__$1 = state_17590;
var statearr_17593_17652 = state_17590__$1;
(statearr_17593_17652[(2)] = inst_17517);

(statearr_17593_17652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (27))){
var state_17590__$1 = state_17590;
var statearr_17594_17653 = state_17590__$1;
(statearr_17594_17653[(2)] = null);

(statearr_17594_17653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (1))){
var inst_17492 = (state_17590[(8)]);
var inst_17492__$1 = calc_state.call(null);
var inst_17494 = (inst_17492__$1 == null);
var inst_17495 = cljs.core.not.call(null,inst_17494);
var state_17590__$1 = (function (){var statearr_17595 = state_17590;
(statearr_17595[(8)] = inst_17492__$1);

return statearr_17595;
})();
if(inst_17495){
var statearr_17596_17654 = state_17590__$1;
(statearr_17596_17654[(1)] = (2));

} else {
var statearr_17597_17655 = state_17590__$1;
(statearr_17597_17655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (24))){
var inst_17550 = (state_17590[(9)]);
var inst_17564 = (state_17590[(10)]);
var inst_17541 = (state_17590[(11)]);
var inst_17564__$1 = inst_17541.call(null,inst_17550);
var state_17590__$1 = (function (){var statearr_17598 = state_17590;
(statearr_17598[(10)] = inst_17564__$1);

return statearr_17598;
})();
if(cljs.core.truth_(inst_17564__$1)){
var statearr_17599_17656 = state_17590__$1;
(statearr_17599_17656[(1)] = (29));

} else {
var statearr_17600_17657 = state_17590__$1;
(statearr_17600_17657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (4))){
var inst_17508 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17508)){
var statearr_17601_17658 = state_17590__$1;
(statearr_17601_17658[(1)] = (8));

} else {
var statearr_17602_17659 = state_17590__$1;
(statearr_17602_17659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (15))){
var inst_17535 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17535)){
var statearr_17603_17660 = state_17590__$1;
(statearr_17603_17660[(1)] = (19));

} else {
var statearr_17604_17661 = state_17590__$1;
(statearr_17604_17661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (21))){
var inst_17540 = (state_17590[(12)]);
var inst_17540__$1 = (state_17590[(2)]);
var inst_17541 = cljs.core.get.call(null,inst_17540__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17542 = cljs.core.get.call(null,inst_17540__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17543 = cljs.core.get.call(null,inst_17540__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17590__$1 = (function (){var statearr_17605 = state_17590;
(statearr_17605[(12)] = inst_17540__$1);

(statearr_17605[(13)] = inst_17542);

(statearr_17605[(11)] = inst_17541);

return statearr_17605;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17590__$1,(22),inst_17543);
} else {
if((state_val_17591 === (31))){
var inst_17572 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17572)){
var statearr_17606_17662 = state_17590__$1;
(statearr_17606_17662[(1)] = (32));

} else {
var statearr_17607_17663 = state_17590__$1;
(statearr_17607_17663[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (32))){
var inst_17549 = (state_17590[(14)]);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17590__$1,(35),out,inst_17549);
} else {
if((state_val_17591 === (33))){
var inst_17540 = (state_17590[(12)]);
var inst_17517 = inst_17540;
var state_17590__$1 = (function (){var statearr_17608 = state_17590;
(statearr_17608[(7)] = inst_17517);

return statearr_17608;
})();
var statearr_17609_17664 = state_17590__$1;
(statearr_17609_17664[(2)] = null);

(statearr_17609_17664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (13))){
var inst_17517 = (state_17590[(7)]);
var inst_17524 = inst_17517.cljs$lang$protocol_mask$partition0$;
var inst_17525 = (inst_17524 & (64));
var inst_17526 = inst_17517.cljs$core$ISeq$;
var inst_17527 = (cljs.core.PROTOCOL_SENTINEL === inst_17526);
var inst_17528 = (inst_17525) || (inst_17527);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17528)){
var statearr_17610_17665 = state_17590__$1;
(statearr_17610_17665[(1)] = (16));

} else {
var statearr_17611_17666 = state_17590__$1;
(statearr_17611_17666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (22))){
var inst_17550 = (state_17590[(9)]);
var inst_17549 = (state_17590[(14)]);
var inst_17548 = (state_17590[(2)]);
var inst_17549__$1 = cljs.core.nth.call(null,inst_17548,(0),null);
var inst_17550__$1 = cljs.core.nth.call(null,inst_17548,(1),null);
var inst_17551 = (inst_17549__$1 == null);
var inst_17552 = cljs.core._EQ_.call(null,inst_17550__$1,change);
var inst_17553 = (inst_17551) || (inst_17552);
var state_17590__$1 = (function (){var statearr_17612 = state_17590;
(statearr_17612[(9)] = inst_17550__$1);

(statearr_17612[(14)] = inst_17549__$1);

return statearr_17612;
})();
if(cljs.core.truth_(inst_17553)){
var statearr_17613_17667 = state_17590__$1;
(statearr_17613_17667[(1)] = (23));

} else {
var statearr_17614_17668 = state_17590__$1;
(statearr_17614_17668[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (36))){
var inst_17540 = (state_17590[(12)]);
var inst_17517 = inst_17540;
var state_17590__$1 = (function (){var statearr_17615 = state_17590;
(statearr_17615[(7)] = inst_17517);

return statearr_17615;
})();
var statearr_17616_17669 = state_17590__$1;
(statearr_17616_17669[(2)] = null);

(statearr_17616_17669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (29))){
var inst_17564 = (state_17590[(10)]);
var state_17590__$1 = state_17590;
var statearr_17617_17670 = state_17590__$1;
(statearr_17617_17670[(2)] = inst_17564);

(statearr_17617_17670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (6))){
var state_17590__$1 = state_17590;
var statearr_17618_17671 = state_17590__$1;
(statearr_17618_17671[(2)] = false);

(statearr_17618_17671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (28))){
var inst_17560 = (state_17590[(2)]);
var inst_17561 = calc_state.call(null);
var inst_17517 = inst_17561;
var state_17590__$1 = (function (){var statearr_17619 = state_17590;
(statearr_17619[(7)] = inst_17517);

(statearr_17619[(15)] = inst_17560);

return statearr_17619;
})();
var statearr_17620_17672 = state_17590__$1;
(statearr_17620_17672[(2)] = null);

(statearr_17620_17672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (25))){
var inst_17586 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17621_17673 = state_17590__$1;
(statearr_17621_17673[(2)] = inst_17586);

(statearr_17621_17673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (34))){
var inst_17584 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17622_17674 = state_17590__$1;
(statearr_17622_17674[(2)] = inst_17584);

(statearr_17622_17674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (17))){
var state_17590__$1 = state_17590;
var statearr_17623_17675 = state_17590__$1;
(statearr_17623_17675[(2)] = false);

(statearr_17623_17675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (3))){
var state_17590__$1 = state_17590;
var statearr_17624_17676 = state_17590__$1;
(statearr_17624_17676[(2)] = false);

(statearr_17624_17676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (12))){
var inst_17588 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17590__$1,inst_17588);
} else {
if((state_val_17591 === (2))){
var inst_17492 = (state_17590[(8)]);
var inst_17497 = inst_17492.cljs$lang$protocol_mask$partition0$;
var inst_17498 = (inst_17497 & (64));
var inst_17499 = inst_17492.cljs$core$ISeq$;
var inst_17500 = (cljs.core.PROTOCOL_SENTINEL === inst_17499);
var inst_17501 = (inst_17498) || (inst_17500);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17501)){
var statearr_17625_17677 = state_17590__$1;
(statearr_17625_17677[(1)] = (5));

} else {
var statearr_17626_17678 = state_17590__$1;
(statearr_17626_17678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (23))){
var inst_17549 = (state_17590[(14)]);
var inst_17555 = (inst_17549 == null);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17555)){
var statearr_17627_17679 = state_17590__$1;
(statearr_17627_17679[(1)] = (26));

} else {
var statearr_17628_17680 = state_17590__$1;
(statearr_17628_17680[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (35))){
var inst_17575 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17575)){
var statearr_17629_17681 = state_17590__$1;
(statearr_17629_17681[(1)] = (36));

} else {
var statearr_17630_17682 = state_17590__$1;
(statearr_17630_17682[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (19))){
var inst_17517 = (state_17590[(7)]);
var inst_17537 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17517);
var state_17590__$1 = state_17590;
var statearr_17631_17683 = state_17590__$1;
(statearr_17631_17683[(2)] = inst_17537);

(statearr_17631_17683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (11))){
var inst_17517 = (state_17590[(7)]);
var inst_17521 = (inst_17517 == null);
var inst_17522 = cljs.core.not.call(null,inst_17521);
var state_17590__$1 = state_17590;
if(inst_17522){
var statearr_17632_17684 = state_17590__$1;
(statearr_17632_17684[(1)] = (13));

} else {
var statearr_17633_17685 = state_17590__$1;
(statearr_17633_17685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (9))){
var inst_17492 = (state_17590[(8)]);
var state_17590__$1 = state_17590;
var statearr_17634_17686 = state_17590__$1;
(statearr_17634_17686[(2)] = inst_17492);

(statearr_17634_17686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (5))){
var state_17590__$1 = state_17590;
var statearr_17635_17687 = state_17590__$1;
(statearr_17635_17687[(2)] = true);

(statearr_17635_17687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (14))){
var state_17590__$1 = state_17590;
var statearr_17636_17688 = state_17590__$1;
(statearr_17636_17688[(2)] = false);

(statearr_17636_17688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (26))){
var inst_17550 = (state_17590[(9)]);
var inst_17557 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17550);
var state_17590__$1 = state_17590;
var statearr_17637_17689 = state_17590__$1;
(statearr_17637_17689[(2)] = inst_17557);

(statearr_17637_17689[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (16))){
var state_17590__$1 = state_17590;
var statearr_17638_17690 = state_17590__$1;
(statearr_17638_17690[(2)] = true);

(statearr_17638_17690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (38))){
var inst_17580 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17639_17691 = state_17590__$1;
(statearr_17639_17691[(2)] = inst_17580);

(statearr_17639_17691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (30))){
var inst_17550 = (state_17590[(9)]);
var inst_17542 = (state_17590[(13)]);
var inst_17541 = (state_17590[(11)]);
var inst_17567 = cljs.core.empty_QMARK_.call(null,inst_17541);
var inst_17568 = inst_17542.call(null,inst_17550);
var inst_17569 = cljs.core.not.call(null,inst_17568);
var inst_17570 = (inst_17567) && (inst_17569);
var state_17590__$1 = state_17590;
var statearr_17640_17692 = state_17590__$1;
(statearr_17640_17692[(2)] = inst_17570);

(statearr_17640_17692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (10))){
var inst_17492 = (state_17590[(8)]);
var inst_17513 = (state_17590[(2)]);
var inst_17514 = cljs.core.get.call(null,inst_17513,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17515 = cljs.core.get.call(null,inst_17513,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17516 = cljs.core.get.call(null,inst_17513,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17517 = inst_17492;
var state_17590__$1 = (function (){var statearr_17641 = state_17590;
(statearr_17641[(16)] = inst_17514);

(statearr_17641[(17)] = inst_17516);

(statearr_17641[(7)] = inst_17517);

(statearr_17641[(18)] = inst_17515);

return statearr_17641;
})();
var statearr_17642_17693 = state_17590__$1;
(statearr_17642_17693[(2)] = null);

(statearr_17642_17693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (18))){
var inst_17532 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17643_17694 = state_17590__$1;
(statearr_17643_17694[(2)] = inst_17532);

(statearr_17643_17694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (37))){
var state_17590__$1 = state_17590;
var statearr_17644_17695 = state_17590__$1;
(statearr_17644_17695[(2)] = null);

(statearr_17644_17695[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (8))){
var inst_17492 = (state_17590[(8)]);
var inst_17510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17492);
var state_17590__$1 = state_17590;
var statearr_17645_17696 = state_17590__$1;
(statearr_17645_17696[(2)] = inst_17510);

(statearr_17645_17696[(1)] = (10));


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
});})(c__16591__auto___17650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16501__auto__,c__16591__auto___17650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16502__auto__ = null;
var cljs$core$async$mix_$_state_machine__16502__auto____0 = (function (){
var statearr_17646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17646[(0)] = cljs$core$async$mix_$_state_machine__16502__auto__);

(statearr_17646[(1)] = (1));

return statearr_17646;
});
var cljs$core$async$mix_$_state_machine__16502__auto____1 = (function (state_17590){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17647){if((e17647 instanceof Object)){
var ex__16505__auto__ = e17647;
var statearr_17648_17697 = state_17590;
(statearr_17648_17697[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17698 = state_17590;
state_17590 = G__17698;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16502__auto__ = function(state_17590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16502__auto____1.call(this,state_17590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16502__auto____0;
cljs$core$async$mix_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16502__auto____1;
return cljs$core$async$mix_$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___17650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16593__auto__ = (function (){var statearr_17649 = f__16592__auto__.call(null);
(statearr_17649[(6)] = c__16591__auto___17650);

return statearr_17649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___17650,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9407__auto__ = (((p == null))?null:p);
var m__9408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9407__auto__ = (((p == null))?null:p);
var m__9408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,p,v,ch);
} else {
var m__9408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17700 = arguments.length;
switch (G__17700) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9407__auto__ = (((p == null))?null:p);
var m__9408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,p);
} else {
var m__9408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9407__auto__ = (((p == null))?null:p);
var m__9408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9407__auto__)]);
if(!((m__9408__auto__ == null))){
return m__9408__auto__.call(null,p,v);
} else {
var m__9408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9408__auto____$1 == null))){
return m__9408__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__17704 = arguments.length;
switch (G__17704) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8674__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8674__auto__,mults){
return (function (p1__17702_SHARP_){
if(cljs.core.truth_(p1__17702_SHARP_.call(null,topic))){
return p1__17702_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17702_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17705 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17706){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17706 = meta17706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17707,meta17706__$1){
var self__ = this;
var _17707__$1 = this;
return (new cljs.core.async.t_cljs$core$async17705(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17706__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17707){
var self__ = this;
var _17707__$1 = this;
return self__.meta17706;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17706","meta17706",-376206593,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17705";

cljs.core.async.t_cljs$core$async17705.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17705");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17705 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17706){
return (new cljs.core.async.t_cljs$core$async17705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17706));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17705(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16591__auto___17825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___17825,mults,ensure_mult,p){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___17825,mults,ensure_mult,p){
return (function (state_17779){
var state_val_17780 = (state_17779[(1)]);
if((state_val_17780 === (7))){
var inst_17775 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17781_17826 = state_17779__$1;
(statearr_17781_17826[(2)] = inst_17775);

(statearr_17781_17826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (20))){
var state_17779__$1 = state_17779;
var statearr_17782_17827 = state_17779__$1;
(statearr_17782_17827[(2)] = null);

(statearr_17782_17827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (1))){
var state_17779__$1 = state_17779;
var statearr_17783_17828 = state_17779__$1;
(statearr_17783_17828[(2)] = null);

(statearr_17783_17828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (24))){
var inst_17758 = (state_17779[(7)]);
var inst_17767 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17758);
var state_17779__$1 = state_17779;
var statearr_17784_17829 = state_17779__$1;
(statearr_17784_17829[(2)] = inst_17767);

(statearr_17784_17829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (4))){
var inst_17710 = (state_17779[(8)]);
var inst_17710__$1 = (state_17779[(2)]);
var inst_17711 = (inst_17710__$1 == null);
var state_17779__$1 = (function (){var statearr_17785 = state_17779;
(statearr_17785[(8)] = inst_17710__$1);

return statearr_17785;
})();
if(cljs.core.truth_(inst_17711)){
var statearr_17786_17830 = state_17779__$1;
(statearr_17786_17830[(1)] = (5));

} else {
var statearr_17787_17831 = state_17779__$1;
(statearr_17787_17831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (15))){
var inst_17752 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17788_17832 = state_17779__$1;
(statearr_17788_17832[(2)] = inst_17752);

(statearr_17788_17832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (21))){
var inst_17772 = (state_17779[(2)]);
var state_17779__$1 = (function (){var statearr_17789 = state_17779;
(statearr_17789[(9)] = inst_17772);

return statearr_17789;
})();
var statearr_17790_17833 = state_17779__$1;
(statearr_17790_17833[(2)] = null);

(statearr_17790_17833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (13))){
var inst_17734 = (state_17779[(10)]);
var inst_17736 = cljs.core.chunked_seq_QMARK_.call(null,inst_17734);
var state_17779__$1 = state_17779;
if(inst_17736){
var statearr_17791_17834 = state_17779__$1;
(statearr_17791_17834[(1)] = (16));

} else {
var statearr_17792_17835 = state_17779__$1;
(statearr_17792_17835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (22))){
var inst_17764 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17764)){
var statearr_17793_17836 = state_17779__$1;
(statearr_17793_17836[(1)] = (23));

} else {
var statearr_17794_17837 = state_17779__$1;
(statearr_17794_17837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (6))){
var inst_17758 = (state_17779[(7)]);
var inst_17710 = (state_17779[(8)]);
var inst_17760 = (state_17779[(11)]);
var inst_17758__$1 = topic_fn.call(null,inst_17710);
var inst_17759 = cljs.core.deref.call(null,mults);
var inst_17760__$1 = cljs.core.get.call(null,inst_17759,inst_17758__$1);
var state_17779__$1 = (function (){var statearr_17795 = state_17779;
(statearr_17795[(7)] = inst_17758__$1);

(statearr_17795[(11)] = inst_17760__$1);

return statearr_17795;
})();
if(cljs.core.truth_(inst_17760__$1)){
var statearr_17796_17838 = state_17779__$1;
(statearr_17796_17838[(1)] = (19));

} else {
var statearr_17797_17839 = state_17779__$1;
(statearr_17797_17839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (25))){
var inst_17769 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17798_17840 = state_17779__$1;
(statearr_17798_17840[(2)] = inst_17769);

(statearr_17798_17840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (17))){
var inst_17734 = (state_17779[(10)]);
var inst_17743 = cljs.core.first.call(null,inst_17734);
var inst_17744 = cljs.core.async.muxch_STAR_.call(null,inst_17743);
var inst_17745 = cljs.core.async.close_BANG_.call(null,inst_17744);
var inst_17746 = cljs.core.next.call(null,inst_17734);
var inst_17720 = inst_17746;
var inst_17721 = null;
var inst_17722 = (0);
var inst_17723 = (0);
var state_17779__$1 = (function (){var statearr_17799 = state_17779;
(statearr_17799[(12)] = inst_17720);

(statearr_17799[(13)] = inst_17745);

(statearr_17799[(14)] = inst_17722);

(statearr_17799[(15)] = inst_17721);

(statearr_17799[(16)] = inst_17723);

return statearr_17799;
})();
var statearr_17800_17841 = state_17779__$1;
(statearr_17800_17841[(2)] = null);

(statearr_17800_17841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (3))){
var inst_17777 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17779__$1,inst_17777);
} else {
if((state_val_17780 === (12))){
var inst_17754 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17801_17842 = state_17779__$1;
(statearr_17801_17842[(2)] = inst_17754);

(statearr_17801_17842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (2))){
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17779__$1,(4),ch);
} else {
if((state_val_17780 === (23))){
var state_17779__$1 = state_17779;
var statearr_17802_17843 = state_17779__$1;
(statearr_17802_17843[(2)] = null);

(statearr_17802_17843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (19))){
var inst_17710 = (state_17779[(8)]);
var inst_17760 = (state_17779[(11)]);
var inst_17762 = cljs.core.async.muxch_STAR_.call(null,inst_17760);
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17779__$1,(22),inst_17762,inst_17710);
} else {
if((state_val_17780 === (11))){
var inst_17720 = (state_17779[(12)]);
var inst_17734 = (state_17779[(10)]);
var inst_17734__$1 = cljs.core.seq.call(null,inst_17720);
var state_17779__$1 = (function (){var statearr_17803 = state_17779;
(statearr_17803[(10)] = inst_17734__$1);

return statearr_17803;
})();
if(inst_17734__$1){
var statearr_17804_17844 = state_17779__$1;
(statearr_17804_17844[(1)] = (13));

} else {
var statearr_17805_17845 = state_17779__$1;
(statearr_17805_17845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (9))){
var inst_17756 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17806_17846 = state_17779__$1;
(statearr_17806_17846[(2)] = inst_17756);

(statearr_17806_17846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (5))){
var inst_17717 = cljs.core.deref.call(null,mults);
var inst_17718 = cljs.core.vals.call(null,inst_17717);
var inst_17719 = cljs.core.seq.call(null,inst_17718);
var inst_17720 = inst_17719;
var inst_17721 = null;
var inst_17722 = (0);
var inst_17723 = (0);
var state_17779__$1 = (function (){var statearr_17807 = state_17779;
(statearr_17807[(12)] = inst_17720);

(statearr_17807[(14)] = inst_17722);

(statearr_17807[(15)] = inst_17721);

(statearr_17807[(16)] = inst_17723);

return statearr_17807;
})();
var statearr_17808_17847 = state_17779__$1;
(statearr_17808_17847[(2)] = null);

(statearr_17808_17847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (14))){
var state_17779__$1 = state_17779;
var statearr_17812_17848 = state_17779__$1;
(statearr_17812_17848[(2)] = null);

(statearr_17812_17848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (16))){
var inst_17734 = (state_17779[(10)]);
var inst_17738 = cljs.core.chunk_first.call(null,inst_17734);
var inst_17739 = cljs.core.chunk_rest.call(null,inst_17734);
var inst_17740 = cljs.core.count.call(null,inst_17738);
var inst_17720 = inst_17739;
var inst_17721 = inst_17738;
var inst_17722 = inst_17740;
var inst_17723 = (0);
var state_17779__$1 = (function (){var statearr_17813 = state_17779;
(statearr_17813[(12)] = inst_17720);

(statearr_17813[(14)] = inst_17722);

(statearr_17813[(15)] = inst_17721);

(statearr_17813[(16)] = inst_17723);

return statearr_17813;
})();
var statearr_17814_17849 = state_17779__$1;
(statearr_17814_17849[(2)] = null);

(statearr_17814_17849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (10))){
var inst_17720 = (state_17779[(12)]);
var inst_17722 = (state_17779[(14)]);
var inst_17721 = (state_17779[(15)]);
var inst_17723 = (state_17779[(16)]);
var inst_17728 = cljs.core._nth.call(null,inst_17721,inst_17723);
var inst_17729 = cljs.core.async.muxch_STAR_.call(null,inst_17728);
var inst_17730 = cljs.core.async.close_BANG_.call(null,inst_17729);
var inst_17731 = (inst_17723 + (1));
var tmp17809 = inst_17720;
var tmp17810 = inst_17722;
var tmp17811 = inst_17721;
var inst_17720__$1 = tmp17809;
var inst_17721__$1 = tmp17811;
var inst_17722__$1 = tmp17810;
var inst_17723__$1 = inst_17731;
var state_17779__$1 = (function (){var statearr_17815 = state_17779;
(statearr_17815[(12)] = inst_17720__$1);

(statearr_17815[(17)] = inst_17730);

(statearr_17815[(14)] = inst_17722__$1);

(statearr_17815[(15)] = inst_17721__$1);

(statearr_17815[(16)] = inst_17723__$1);

return statearr_17815;
})();
var statearr_17816_17850 = state_17779__$1;
(statearr_17816_17850[(2)] = null);

(statearr_17816_17850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (18))){
var inst_17749 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17817_17851 = state_17779__$1;
(statearr_17817_17851[(2)] = inst_17749);

(statearr_17817_17851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17780 === (8))){
var inst_17722 = (state_17779[(14)]);
var inst_17723 = (state_17779[(16)]);
var inst_17725 = (inst_17723 < inst_17722);
var inst_17726 = inst_17725;
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17726)){
var statearr_17818_17852 = state_17779__$1;
(statearr_17818_17852[(1)] = (10));

} else {
var statearr_17819_17853 = state_17779__$1;
(statearr_17819_17853[(1)] = (11));

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
});})(c__16591__auto___17825,mults,ensure_mult,p))
;
return ((function (switch__16501__auto__,c__16591__auto___17825,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_17820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17820[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_17820[(1)] = (1));

return statearr_17820;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_17779){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17821){if((e17821 instanceof Object)){
var ex__16505__auto__ = e17821;
var statearr_17822_17854 = state_17779;
(statearr_17822_17854[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17855 = state_17779;
state_17779 = G__17855;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_17779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_17779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___17825,mults,ensure_mult,p))
})();
var state__16593__auto__ = (function (){var statearr_17823 = f__16592__auto__.call(null);
(statearr_17823[(6)] = c__16591__auto___17825);

return statearr_17823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___17825,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17857 = arguments.length;
switch (G__17857) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17860 = arguments.length;
switch (G__17860) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__17863 = arguments.length;
switch (G__17863) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16591__auto___17930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17902){
var state_val_17903 = (state_17902[(1)]);
if((state_val_17903 === (7))){
var state_17902__$1 = state_17902;
var statearr_17904_17931 = state_17902__$1;
(statearr_17904_17931[(2)] = null);

(statearr_17904_17931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (1))){
var state_17902__$1 = state_17902;
var statearr_17905_17932 = state_17902__$1;
(statearr_17905_17932[(2)] = null);

(statearr_17905_17932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (4))){
var inst_17866 = (state_17902[(7)]);
var inst_17868 = (inst_17866 < cnt);
var state_17902__$1 = state_17902;
if(cljs.core.truth_(inst_17868)){
var statearr_17906_17933 = state_17902__$1;
(statearr_17906_17933[(1)] = (6));

} else {
var statearr_17907_17934 = state_17902__$1;
(statearr_17907_17934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (15))){
var inst_17898 = (state_17902[(2)]);
var state_17902__$1 = state_17902;
var statearr_17908_17935 = state_17902__$1;
(statearr_17908_17935[(2)] = inst_17898);

(statearr_17908_17935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (13))){
var inst_17891 = cljs.core.async.close_BANG_.call(null,out);
var state_17902__$1 = state_17902;
var statearr_17909_17936 = state_17902__$1;
(statearr_17909_17936[(2)] = inst_17891);

(statearr_17909_17936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (6))){
var state_17902__$1 = state_17902;
var statearr_17910_17937 = state_17902__$1;
(statearr_17910_17937[(2)] = null);

(statearr_17910_17937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (3))){
var inst_17900 = (state_17902[(2)]);
var state_17902__$1 = state_17902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17902__$1,inst_17900);
} else {
if((state_val_17903 === (12))){
var inst_17888 = (state_17902[(8)]);
var inst_17888__$1 = (state_17902[(2)]);
var inst_17889 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17888__$1);
var state_17902__$1 = (function (){var statearr_17911 = state_17902;
(statearr_17911[(8)] = inst_17888__$1);

return statearr_17911;
})();
if(cljs.core.truth_(inst_17889)){
var statearr_17912_17938 = state_17902__$1;
(statearr_17912_17938[(1)] = (13));

} else {
var statearr_17913_17939 = state_17902__$1;
(statearr_17913_17939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (2))){
var inst_17865 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17866 = (0);
var state_17902__$1 = (function (){var statearr_17914 = state_17902;
(statearr_17914[(9)] = inst_17865);

(statearr_17914[(7)] = inst_17866);

return statearr_17914;
})();
var statearr_17915_17940 = state_17902__$1;
(statearr_17915_17940[(2)] = null);

(statearr_17915_17940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (11))){
var inst_17866 = (state_17902[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17902,(10),Object,null,(9));
var inst_17875 = chs__$1.call(null,inst_17866);
var inst_17876 = done.call(null,inst_17866);
var inst_17877 = cljs.core.async.take_BANG_.call(null,inst_17875,inst_17876);
var state_17902__$1 = state_17902;
var statearr_17916_17941 = state_17902__$1;
(statearr_17916_17941[(2)] = inst_17877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (9))){
var inst_17866 = (state_17902[(7)]);
var inst_17879 = (state_17902[(2)]);
var inst_17880 = (inst_17866 + (1));
var inst_17866__$1 = inst_17880;
var state_17902__$1 = (function (){var statearr_17917 = state_17902;
(statearr_17917[(10)] = inst_17879);

(statearr_17917[(7)] = inst_17866__$1);

return statearr_17917;
})();
var statearr_17918_17942 = state_17902__$1;
(statearr_17918_17942[(2)] = null);

(statearr_17918_17942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (5))){
var inst_17886 = (state_17902[(2)]);
var state_17902__$1 = (function (){var statearr_17919 = state_17902;
(statearr_17919[(11)] = inst_17886);

return statearr_17919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17902__$1,(12),dchan);
} else {
if((state_val_17903 === (14))){
var inst_17888 = (state_17902[(8)]);
var inst_17893 = cljs.core.apply.call(null,f,inst_17888);
var state_17902__$1 = state_17902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17902__$1,(16),out,inst_17893);
} else {
if((state_val_17903 === (16))){
var inst_17895 = (state_17902[(2)]);
var state_17902__$1 = (function (){var statearr_17920 = state_17902;
(statearr_17920[(12)] = inst_17895);

return statearr_17920;
})();
var statearr_17921_17943 = state_17902__$1;
(statearr_17921_17943[(2)] = null);

(statearr_17921_17943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (10))){
var inst_17870 = (state_17902[(2)]);
var inst_17871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17902__$1 = (function (){var statearr_17922 = state_17902;
(statearr_17922[(13)] = inst_17870);

return statearr_17922;
})();
var statearr_17923_17944 = state_17902__$1;
(statearr_17923_17944[(2)] = inst_17871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (8))){
var inst_17884 = (state_17902[(2)]);
var state_17902__$1 = state_17902;
var statearr_17924_17945 = state_17902__$1;
(statearr_17924_17945[(2)] = inst_17884);

(statearr_17924_17945[(1)] = (5));


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
});})(c__16591__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16501__auto__,c__16591__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17925[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_17902){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e17926){if((e17926 instanceof Object)){
var ex__16505__auto__ = e17926;
var statearr_17927_17946 = state_17902;
(statearr_17927_17946[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17947 = state_17902;
state_17902 = G__17947;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_17902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_17902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16593__auto__ = (function (){var statearr_17928 = f__16592__auto__.call(null);
(statearr_17928[(6)] = c__16591__auto___17930);

return statearr_17928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___17930,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17950 = arguments.length;
switch (G__17950) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16591__auto___18004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___18004,out){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___18004,out){
return (function (state_17982){
var state_val_17983 = (state_17982[(1)]);
if((state_val_17983 === (7))){
var inst_17961 = (state_17982[(7)]);
var inst_17962 = (state_17982[(8)]);
var inst_17961__$1 = (state_17982[(2)]);
var inst_17962__$1 = cljs.core.nth.call(null,inst_17961__$1,(0),null);
var inst_17963 = cljs.core.nth.call(null,inst_17961__$1,(1),null);
var inst_17964 = (inst_17962__$1 == null);
var state_17982__$1 = (function (){var statearr_17984 = state_17982;
(statearr_17984[(9)] = inst_17963);

(statearr_17984[(7)] = inst_17961__$1);

(statearr_17984[(8)] = inst_17962__$1);

return statearr_17984;
})();
if(cljs.core.truth_(inst_17964)){
var statearr_17985_18005 = state_17982__$1;
(statearr_17985_18005[(1)] = (8));

} else {
var statearr_17986_18006 = state_17982__$1;
(statearr_17986_18006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (1))){
var inst_17951 = cljs.core.vec.call(null,chs);
var inst_17952 = inst_17951;
var state_17982__$1 = (function (){var statearr_17987 = state_17982;
(statearr_17987[(10)] = inst_17952);

return statearr_17987;
})();
var statearr_17988_18007 = state_17982__$1;
(statearr_17988_18007[(2)] = null);

(statearr_17988_18007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (4))){
var inst_17952 = (state_17982[(10)]);
var state_17982__$1 = state_17982;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17982__$1,(7),inst_17952);
} else {
if((state_val_17983 === (6))){
var inst_17978 = (state_17982[(2)]);
var state_17982__$1 = state_17982;
var statearr_17989_18008 = state_17982__$1;
(statearr_17989_18008[(2)] = inst_17978);

(statearr_17989_18008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (3))){
var inst_17980 = (state_17982[(2)]);
var state_17982__$1 = state_17982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17982__$1,inst_17980);
} else {
if((state_val_17983 === (2))){
var inst_17952 = (state_17982[(10)]);
var inst_17954 = cljs.core.count.call(null,inst_17952);
var inst_17955 = (inst_17954 > (0));
var state_17982__$1 = state_17982;
if(cljs.core.truth_(inst_17955)){
var statearr_17991_18009 = state_17982__$1;
(statearr_17991_18009[(1)] = (4));

} else {
var statearr_17992_18010 = state_17982__$1;
(statearr_17992_18010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (11))){
var inst_17952 = (state_17982[(10)]);
var inst_17971 = (state_17982[(2)]);
var tmp17990 = inst_17952;
var inst_17952__$1 = tmp17990;
var state_17982__$1 = (function (){var statearr_17993 = state_17982;
(statearr_17993[(10)] = inst_17952__$1);

(statearr_17993[(11)] = inst_17971);

return statearr_17993;
})();
var statearr_17994_18011 = state_17982__$1;
(statearr_17994_18011[(2)] = null);

(statearr_17994_18011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (9))){
var inst_17962 = (state_17982[(8)]);
var state_17982__$1 = state_17982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17982__$1,(11),out,inst_17962);
} else {
if((state_val_17983 === (5))){
var inst_17976 = cljs.core.async.close_BANG_.call(null,out);
var state_17982__$1 = state_17982;
var statearr_17995_18012 = state_17982__$1;
(statearr_17995_18012[(2)] = inst_17976);

(statearr_17995_18012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (10))){
var inst_17974 = (state_17982[(2)]);
var state_17982__$1 = state_17982;
var statearr_17996_18013 = state_17982__$1;
(statearr_17996_18013[(2)] = inst_17974);

(statearr_17996_18013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (8))){
var inst_17963 = (state_17982[(9)]);
var inst_17961 = (state_17982[(7)]);
var inst_17962 = (state_17982[(8)]);
var inst_17952 = (state_17982[(10)]);
var inst_17966 = (function (){var cs = inst_17952;
var vec__17957 = inst_17961;
var v = inst_17962;
var c = inst_17963;
return ((function (cs,vec__17957,v,c,inst_17963,inst_17961,inst_17962,inst_17952,state_val_17983,c__16591__auto___18004,out){
return (function (p1__17948_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17948_SHARP_);
});
;})(cs,vec__17957,v,c,inst_17963,inst_17961,inst_17962,inst_17952,state_val_17983,c__16591__auto___18004,out))
})();
var inst_17967 = cljs.core.filterv.call(null,inst_17966,inst_17952);
var inst_17952__$1 = inst_17967;
var state_17982__$1 = (function (){var statearr_17997 = state_17982;
(statearr_17997[(10)] = inst_17952__$1);

return statearr_17997;
})();
var statearr_17998_18014 = state_17982__$1;
(statearr_17998_18014[(2)] = null);

(statearr_17998_18014[(1)] = (2));


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
});})(c__16591__auto___18004,out))
;
return ((function (switch__16501__auto__,c__16591__auto___18004,out){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_17999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17999[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_17999[(1)] = (1));

return statearr_17999;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_17982){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_17982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18000){if((e18000 instanceof Object)){
var ex__16505__auto__ = e18000;
var statearr_18001_18015 = state_17982;
(statearr_18001_18015[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18016 = state_17982;
state_17982 = G__18016;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_17982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_17982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___18004,out))
})();
var state__16593__auto__ = (function (){var statearr_18002 = f__16592__auto__.call(null);
(statearr_18002[(6)] = c__16591__auto___18004);

return statearr_18002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___18004,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18018 = arguments.length;
switch (G__18018) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16591__auto___18063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___18063,out){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___18063,out){
return (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (7))){
var inst_18024 = (state_18042[(7)]);
var inst_18024__$1 = (state_18042[(2)]);
var inst_18025 = (inst_18024__$1 == null);
var inst_18026 = cljs.core.not.call(null,inst_18025);
var state_18042__$1 = (function (){var statearr_18044 = state_18042;
(statearr_18044[(7)] = inst_18024__$1);

return statearr_18044;
})();
if(inst_18026){
var statearr_18045_18064 = state_18042__$1;
(statearr_18045_18064[(1)] = (8));

} else {
var statearr_18046_18065 = state_18042__$1;
(statearr_18046_18065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (1))){
var inst_18019 = (0);
var state_18042__$1 = (function (){var statearr_18047 = state_18042;
(statearr_18047[(8)] = inst_18019);

return statearr_18047;
})();
var statearr_18048_18066 = state_18042__$1;
(statearr_18048_18066[(2)] = null);

(statearr_18048_18066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (4))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(7),ch);
} else {
if((state_val_18043 === (6))){
var inst_18037 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18049_18067 = state_18042__$1;
(statearr_18049_18067[(2)] = inst_18037);

(statearr_18049_18067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (3))){
var inst_18039 = (state_18042[(2)]);
var inst_18040 = cljs.core.async.close_BANG_.call(null,out);
var state_18042__$1 = (function (){var statearr_18050 = state_18042;
(statearr_18050[(9)] = inst_18039);

return statearr_18050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (2))){
var inst_18019 = (state_18042[(8)]);
var inst_18021 = (inst_18019 < n);
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_18021)){
var statearr_18051_18068 = state_18042__$1;
(statearr_18051_18068[(1)] = (4));

} else {
var statearr_18052_18069 = state_18042__$1;
(statearr_18052_18069[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (11))){
var inst_18019 = (state_18042[(8)]);
var inst_18029 = (state_18042[(2)]);
var inst_18030 = (inst_18019 + (1));
var inst_18019__$1 = inst_18030;
var state_18042__$1 = (function (){var statearr_18053 = state_18042;
(statearr_18053[(8)] = inst_18019__$1);

(statearr_18053[(10)] = inst_18029);

return statearr_18053;
})();
var statearr_18054_18070 = state_18042__$1;
(statearr_18054_18070[(2)] = null);

(statearr_18054_18070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (9))){
var state_18042__$1 = state_18042;
var statearr_18055_18071 = state_18042__$1;
(statearr_18055_18071[(2)] = null);

(statearr_18055_18071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (5))){
var state_18042__$1 = state_18042;
var statearr_18056_18072 = state_18042__$1;
(statearr_18056_18072[(2)] = null);

(statearr_18056_18072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (10))){
var inst_18034 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18057_18073 = state_18042__$1;
(statearr_18057_18073[(2)] = inst_18034);

(statearr_18057_18073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (8))){
var inst_18024 = (state_18042[(7)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18042__$1,(11),out,inst_18024);
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
});})(c__16591__auto___18063,out))
;
return ((function (switch__16501__auto__,c__16591__auto___18063,out){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_18058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18058[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_18058[(1)] = (1));

return statearr_18058;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_18042){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_18042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18059){if((e18059 instanceof Object)){
var ex__16505__auto__ = e18059;
var statearr_18060_18074 = state_18042;
(statearr_18060_18074[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18075 = state_18042;
state_18042 = G__18075;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___18063,out))
})();
var state__16593__auto__ = (function (){var statearr_18061 = f__16592__auto__.call(null);
(statearr_18061[(6)] = c__16591__auto___18063);

return statearr_18061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___18063,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18077 = (function (f,ch,meta18078){
this.f = f;
this.ch = ch;
this.meta18078 = meta18078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18079,meta18078__$1){
var self__ = this;
var _18079__$1 = this;
return (new cljs.core.async.t_cljs$core$async18077(self__.f,self__.ch,meta18078__$1));
});

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18079){
var self__ = this;
var _18079__$1 = this;
return self__.meta18078;
});

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18080 = (function (f,ch,meta18078,_,fn1,meta18081){
this.f = f;
this.ch = ch;
this.meta18078 = meta18078;
this._ = _;
this.fn1 = fn1;
this.meta18081 = meta18081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18082,meta18081__$1){
var self__ = this;
var _18082__$1 = this;
return (new cljs.core.async.t_cljs$core$async18080(self__.f,self__.ch,self__.meta18078,self__._,self__.fn1,meta18081__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18082){
var self__ = this;
var _18082__$1 = this;
return self__.meta18081;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18076_SHARP_){
return f1.call(null,(((p1__18076_SHARP_ == null))?null:self__.f.call(null,p1__18076_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18080.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18078","meta18078",695812164,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18077","cljs.core.async/t_cljs$core$async18077",-955646219,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18081","meta18081",-306776122,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18080";

cljs.core.async.t_cljs$core$async18080.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18080");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18080 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18080(f__$1,ch__$1,meta18078__$1,___$2,fn1__$1,meta18081){
return (new cljs.core.async.t_cljs$core$async18080(f__$1,ch__$1,meta18078__$1,___$2,fn1__$1,meta18081));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18080(self__.f,self__.ch,self__.meta18078,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8662__auto__ = ret;
if(cljs.core.truth_(and__8662__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8662__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18078","meta18078",695812164,null)], null);
});

cljs.core.async.t_cljs$core$async18077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18077";

cljs.core.async.t_cljs$core$async18077.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18077");
});

cljs.core.async.__GT_t_cljs$core$async18077 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18077(f__$1,ch__$1,meta18078){
return (new cljs.core.async.t_cljs$core$async18077(f__$1,ch__$1,meta18078));
});

}

return (new cljs.core.async.t_cljs$core$async18077(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18083 = (function (f,ch,meta18084){
this.f = f;
this.ch = ch;
this.meta18084 = meta18084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18085,meta18084__$1){
var self__ = this;
var _18085__$1 = this;
return (new cljs.core.async.t_cljs$core$async18083(self__.f,self__.ch,meta18084__$1));
});

cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18085){
var self__ = this;
var _18085__$1 = this;
return self__.meta18084;
});

cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18084","meta18084",885500030,null)], null);
});

cljs.core.async.t_cljs$core$async18083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18083";

cljs.core.async.t_cljs$core$async18083.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18083");
});

cljs.core.async.__GT_t_cljs$core$async18083 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18083(f__$1,ch__$1,meta18084){
return (new cljs.core.async.t_cljs$core$async18083(f__$1,ch__$1,meta18084));
});

}

return (new cljs.core.async.t_cljs$core$async18083(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18086 = (function (p,ch,meta18087){
this.p = p;
this.ch = ch;
this.meta18087 = meta18087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18088,meta18087__$1){
var self__ = this;
var _18088__$1 = this;
return (new cljs.core.async.t_cljs$core$async18086(self__.p,self__.ch,meta18087__$1));
});

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18088){
var self__ = this;
var _18088__$1 = this;
return self__.meta18087;
});

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18087","meta18087",-1849385968,null)], null);
});

cljs.core.async.t_cljs$core$async18086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18086";

cljs.core.async.t_cljs$core$async18086.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18086");
});

cljs.core.async.__GT_t_cljs$core$async18086 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18086(p__$1,ch__$1,meta18087){
return (new cljs.core.async.t_cljs$core$async18086(p__$1,ch__$1,meta18087));
});

}

return (new cljs.core.async.t_cljs$core$async18086(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18090 = arguments.length;
switch (G__18090) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16591__auto___18130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___18130,out){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___18130,out){
return (function (state_18111){
var state_val_18112 = (state_18111[(1)]);
if((state_val_18112 === (7))){
var inst_18107 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18113_18131 = state_18111__$1;
(statearr_18113_18131[(2)] = inst_18107);

(statearr_18113_18131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (1))){
var state_18111__$1 = state_18111;
var statearr_18114_18132 = state_18111__$1;
(statearr_18114_18132[(2)] = null);

(statearr_18114_18132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (4))){
var inst_18093 = (state_18111[(7)]);
var inst_18093__$1 = (state_18111[(2)]);
var inst_18094 = (inst_18093__$1 == null);
var state_18111__$1 = (function (){var statearr_18115 = state_18111;
(statearr_18115[(7)] = inst_18093__$1);

return statearr_18115;
})();
if(cljs.core.truth_(inst_18094)){
var statearr_18116_18133 = state_18111__$1;
(statearr_18116_18133[(1)] = (5));

} else {
var statearr_18117_18134 = state_18111__$1;
(statearr_18117_18134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (6))){
var inst_18093 = (state_18111[(7)]);
var inst_18098 = p.call(null,inst_18093);
var state_18111__$1 = state_18111;
if(cljs.core.truth_(inst_18098)){
var statearr_18118_18135 = state_18111__$1;
(statearr_18118_18135[(1)] = (8));

} else {
var statearr_18119_18136 = state_18111__$1;
(statearr_18119_18136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (3))){
var inst_18109 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18111__$1,inst_18109);
} else {
if((state_val_18112 === (2))){
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18111__$1,(4),ch);
} else {
if((state_val_18112 === (11))){
var inst_18101 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18120_18137 = state_18111__$1;
(statearr_18120_18137[(2)] = inst_18101);

(statearr_18120_18137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (9))){
var state_18111__$1 = state_18111;
var statearr_18121_18138 = state_18111__$1;
(statearr_18121_18138[(2)] = null);

(statearr_18121_18138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (5))){
var inst_18096 = cljs.core.async.close_BANG_.call(null,out);
var state_18111__$1 = state_18111;
var statearr_18122_18139 = state_18111__$1;
(statearr_18122_18139[(2)] = inst_18096);

(statearr_18122_18139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (10))){
var inst_18104 = (state_18111[(2)]);
var state_18111__$1 = (function (){var statearr_18123 = state_18111;
(statearr_18123[(8)] = inst_18104);

return statearr_18123;
})();
var statearr_18124_18140 = state_18111__$1;
(statearr_18124_18140[(2)] = null);

(statearr_18124_18140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (8))){
var inst_18093 = (state_18111[(7)]);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18111__$1,(11),out,inst_18093);
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
});})(c__16591__auto___18130,out))
;
return ((function (switch__16501__auto__,c__16591__auto___18130,out){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_18125 = [null,null,null,null,null,null,null,null,null];
(statearr_18125[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_18125[(1)] = (1));

return statearr_18125;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_18111){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_18111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18126){if((e18126 instanceof Object)){
var ex__16505__auto__ = e18126;
var statearr_18127_18141 = state_18111;
(statearr_18127_18141[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18142 = state_18111;
state_18111 = G__18142;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_18111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_18111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___18130,out))
})();
var state__16593__auto__ = (function (){var statearr_18128 = f__16592__auto__.call(null);
(statearr_18128[(6)] = c__16591__auto___18130);

return statearr_18128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___18130,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18144 = arguments.length;
switch (G__18144) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16591__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto__){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto__){
return (function (state_18207){
var state_val_18208 = (state_18207[(1)]);
if((state_val_18208 === (7))){
var inst_18203 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18209_18247 = state_18207__$1;
(statearr_18209_18247[(2)] = inst_18203);

(statearr_18209_18247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (20))){
var inst_18173 = (state_18207[(7)]);
var inst_18184 = (state_18207[(2)]);
var inst_18185 = cljs.core.next.call(null,inst_18173);
var inst_18159 = inst_18185;
var inst_18160 = null;
var inst_18161 = (0);
var inst_18162 = (0);
var state_18207__$1 = (function (){var statearr_18210 = state_18207;
(statearr_18210[(8)] = inst_18159);

(statearr_18210[(9)] = inst_18160);

(statearr_18210[(10)] = inst_18162);

(statearr_18210[(11)] = inst_18161);

(statearr_18210[(12)] = inst_18184);

return statearr_18210;
})();
var statearr_18211_18248 = state_18207__$1;
(statearr_18211_18248[(2)] = null);

(statearr_18211_18248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (1))){
var state_18207__$1 = state_18207;
var statearr_18212_18249 = state_18207__$1;
(statearr_18212_18249[(2)] = null);

(statearr_18212_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (4))){
var inst_18148 = (state_18207[(13)]);
var inst_18148__$1 = (state_18207[(2)]);
var inst_18149 = (inst_18148__$1 == null);
var state_18207__$1 = (function (){var statearr_18213 = state_18207;
(statearr_18213[(13)] = inst_18148__$1);

return statearr_18213;
})();
if(cljs.core.truth_(inst_18149)){
var statearr_18214_18250 = state_18207__$1;
(statearr_18214_18250[(1)] = (5));

} else {
var statearr_18215_18251 = state_18207__$1;
(statearr_18215_18251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (15))){
var state_18207__$1 = state_18207;
var statearr_18219_18252 = state_18207__$1;
(statearr_18219_18252[(2)] = null);

(statearr_18219_18252[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (21))){
var state_18207__$1 = state_18207;
var statearr_18220_18253 = state_18207__$1;
(statearr_18220_18253[(2)] = null);

(statearr_18220_18253[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (13))){
var inst_18159 = (state_18207[(8)]);
var inst_18160 = (state_18207[(9)]);
var inst_18162 = (state_18207[(10)]);
var inst_18161 = (state_18207[(11)]);
var inst_18169 = (state_18207[(2)]);
var inst_18170 = (inst_18162 + (1));
var tmp18216 = inst_18159;
var tmp18217 = inst_18160;
var tmp18218 = inst_18161;
var inst_18159__$1 = tmp18216;
var inst_18160__$1 = tmp18217;
var inst_18161__$1 = tmp18218;
var inst_18162__$1 = inst_18170;
var state_18207__$1 = (function (){var statearr_18221 = state_18207;
(statearr_18221[(8)] = inst_18159__$1);

(statearr_18221[(14)] = inst_18169);

(statearr_18221[(9)] = inst_18160__$1);

(statearr_18221[(10)] = inst_18162__$1);

(statearr_18221[(11)] = inst_18161__$1);

return statearr_18221;
})();
var statearr_18222_18254 = state_18207__$1;
(statearr_18222_18254[(2)] = null);

(statearr_18222_18254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (22))){
var state_18207__$1 = state_18207;
var statearr_18223_18255 = state_18207__$1;
(statearr_18223_18255[(2)] = null);

(statearr_18223_18255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (6))){
var inst_18148 = (state_18207[(13)]);
var inst_18157 = f.call(null,inst_18148);
var inst_18158 = cljs.core.seq.call(null,inst_18157);
var inst_18159 = inst_18158;
var inst_18160 = null;
var inst_18161 = (0);
var inst_18162 = (0);
var state_18207__$1 = (function (){var statearr_18224 = state_18207;
(statearr_18224[(8)] = inst_18159);

(statearr_18224[(9)] = inst_18160);

(statearr_18224[(10)] = inst_18162);

(statearr_18224[(11)] = inst_18161);

return statearr_18224;
})();
var statearr_18225_18256 = state_18207__$1;
(statearr_18225_18256[(2)] = null);

(statearr_18225_18256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (17))){
var inst_18173 = (state_18207[(7)]);
var inst_18177 = cljs.core.chunk_first.call(null,inst_18173);
var inst_18178 = cljs.core.chunk_rest.call(null,inst_18173);
var inst_18179 = cljs.core.count.call(null,inst_18177);
var inst_18159 = inst_18178;
var inst_18160 = inst_18177;
var inst_18161 = inst_18179;
var inst_18162 = (0);
var state_18207__$1 = (function (){var statearr_18226 = state_18207;
(statearr_18226[(8)] = inst_18159);

(statearr_18226[(9)] = inst_18160);

(statearr_18226[(10)] = inst_18162);

(statearr_18226[(11)] = inst_18161);

return statearr_18226;
})();
var statearr_18227_18257 = state_18207__$1;
(statearr_18227_18257[(2)] = null);

(statearr_18227_18257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (3))){
var inst_18205 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18207__$1,inst_18205);
} else {
if((state_val_18208 === (12))){
var inst_18193 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18228_18258 = state_18207__$1;
(statearr_18228_18258[(2)] = inst_18193);

(statearr_18228_18258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (2))){
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18207__$1,(4),in$);
} else {
if((state_val_18208 === (23))){
var inst_18201 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18229_18259 = state_18207__$1;
(statearr_18229_18259[(2)] = inst_18201);

(statearr_18229_18259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (19))){
var inst_18188 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18230_18260 = state_18207__$1;
(statearr_18230_18260[(2)] = inst_18188);

(statearr_18230_18260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (11))){
var inst_18159 = (state_18207[(8)]);
var inst_18173 = (state_18207[(7)]);
var inst_18173__$1 = cljs.core.seq.call(null,inst_18159);
var state_18207__$1 = (function (){var statearr_18231 = state_18207;
(statearr_18231[(7)] = inst_18173__$1);

return statearr_18231;
})();
if(inst_18173__$1){
var statearr_18232_18261 = state_18207__$1;
(statearr_18232_18261[(1)] = (14));

} else {
var statearr_18233_18262 = state_18207__$1;
(statearr_18233_18262[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (9))){
var inst_18195 = (state_18207[(2)]);
var inst_18196 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18207__$1 = (function (){var statearr_18234 = state_18207;
(statearr_18234[(15)] = inst_18195);

return statearr_18234;
})();
if(cljs.core.truth_(inst_18196)){
var statearr_18235_18263 = state_18207__$1;
(statearr_18235_18263[(1)] = (21));

} else {
var statearr_18236_18264 = state_18207__$1;
(statearr_18236_18264[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (5))){
var inst_18151 = cljs.core.async.close_BANG_.call(null,out);
var state_18207__$1 = state_18207;
var statearr_18237_18265 = state_18207__$1;
(statearr_18237_18265[(2)] = inst_18151);

(statearr_18237_18265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (14))){
var inst_18173 = (state_18207[(7)]);
var inst_18175 = cljs.core.chunked_seq_QMARK_.call(null,inst_18173);
var state_18207__$1 = state_18207;
if(inst_18175){
var statearr_18238_18266 = state_18207__$1;
(statearr_18238_18266[(1)] = (17));

} else {
var statearr_18239_18267 = state_18207__$1;
(statearr_18239_18267[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (16))){
var inst_18191 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18240_18268 = state_18207__$1;
(statearr_18240_18268[(2)] = inst_18191);

(statearr_18240_18268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18208 === (10))){
var inst_18160 = (state_18207[(9)]);
var inst_18162 = (state_18207[(10)]);
var inst_18167 = cljs.core._nth.call(null,inst_18160,inst_18162);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18207__$1,(13),out,inst_18167);
} else {
if((state_val_18208 === (18))){
var inst_18173 = (state_18207[(7)]);
var inst_18182 = cljs.core.first.call(null,inst_18173);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18207__$1,(20),out,inst_18182);
} else {
if((state_val_18208 === (8))){
var inst_18162 = (state_18207[(10)]);
var inst_18161 = (state_18207[(11)]);
var inst_18164 = (inst_18162 < inst_18161);
var inst_18165 = inst_18164;
var state_18207__$1 = state_18207;
if(cljs.core.truth_(inst_18165)){
var statearr_18241_18269 = state_18207__$1;
(statearr_18241_18269[(1)] = (10));

} else {
var statearr_18242_18270 = state_18207__$1;
(statearr_18242_18270[(1)] = (11));

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
});})(c__16591__auto__))
;
return ((function (switch__16501__auto__,c__16591__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16502__auto____0 = (function (){
var statearr_18243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18243[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16502__auto__);

(statearr_18243[(1)] = (1));

return statearr_18243;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16502__auto____1 = (function (state_18207){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_18207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18244){if((e18244 instanceof Object)){
var ex__16505__auto__ = e18244;
var statearr_18245_18271 = state_18207;
(statearr_18245_18271[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18272 = state_18207;
state_18207 = G__18272;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16502__auto__ = function(state_18207){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16502__auto____1.call(this,state_18207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto__))
})();
var state__16593__auto__ = (function (){var statearr_18246 = f__16592__auto__.call(null);
(statearr_18246[(6)] = c__16591__auto__);

return statearr_18246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto__))
);

return c__16591__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18274 = arguments.length;
switch (G__18274) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18277 = arguments.length;
switch (G__18277) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18280 = arguments.length;
switch (G__18280) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16591__auto___18327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___18327,out){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___18327,out){
return (function (state_18304){
var state_val_18305 = (state_18304[(1)]);
if((state_val_18305 === (7))){
var inst_18299 = (state_18304[(2)]);
var state_18304__$1 = state_18304;
var statearr_18306_18328 = state_18304__$1;
(statearr_18306_18328[(2)] = inst_18299);

(statearr_18306_18328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (1))){
var inst_18281 = null;
var state_18304__$1 = (function (){var statearr_18307 = state_18304;
(statearr_18307[(7)] = inst_18281);

return statearr_18307;
})();
var statearr_18308_18329 = state_18304__$1;
(statearr_18308_18329[(2)] = null);

(statearr_18308_18329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (4))){
var inst_18284 = (state_18304[(8)]);
var inst_18284__$1 = (state_18304[(2)]);
var inst_18285 = (inst_18284__$1 == null);
var inst_18286 = cljs.core.not.call(null,inst_18285);
var state_18304__$1 = (function (){var statearr_18309 = state_18304;
(statearr_18309[(8)] = inst_18284__$1);

return statearr_18309;
})();
if(inst_18286){
var statearr_18310_18330 = state_18304__$1;
(statearr_18310_18330[(1)] = (5));

} else {
var statearr_18311_18331 = state_18304__$1;
(statearr_18311_18331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (6))){
var state_18304__$1 = state_18304;
var statearr_18312_18332 = state_18304__$1;
(statearr_18312_18332[(2)] = null);

(statearr_18312_18332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (3))){
var inst_18301 = (state_18304[(2)]);
var inst_18302 = cljs.core.async.close_BANG_.call(null,out);
var state_18304__$1 = (function (){var statearr_18313 = state_18304;
(statearr_18313[(9)] = inst_18301);

return statearr_18313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18304__$1,inst_18302);
} else {
if((state_val_18305 === (2))){
var state_18304__$1 = state_18304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18304__$1,(4),ch);
} else {
if((state_val_18305 === (11))){
var inst_18284 = (state_18304[(8)]);
var inst_18293 = (state_18304[(2)]);
var inst_18281 = inst_18284;
var state_18304__$1 = (function (){var statearr_18314 = state_18304;
(statearr_18314[(7)] = inst_18281);

(statearr_18314[(10)] = inst_18293);

return statearr_18314;
})();
var statearr_18315_18333 = state_18304__$1;
(statearr_18315_18333[(2)] = null);

(statearr_18315_18333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (9))){
var inst_18284 = (state_18304[(8)]);
var state_18304__$1 = state_18304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18304__$1,(11),out,inst_18284);
} else {
if((state_val_18305 === (5))){
var inst_18281 = (state_18304[(7)]);
var inst_18284 = (state_18304[(8)]);
var inst_18288 = cljs.core._EQ_.call(null,inst_18284,inst_18281);
var state_18304__$1 = state_18304;
if(inst_18288){
var statearr_18317_18334 = state_18304__$1;
(statearr_18317_18334[(1)] = (8));

} else {
var statearr_18318_18335 = state_18304__$1;
(statearr_18318_18335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (10))){
var inst_18296 = (state_18304[(2)]);
var state_18304__$1 = state_18304;
var statearr_18319_18336 = state_18304__$1;
(statearr_18319_18336[(2)] = inst_18296);

(statearr_18319_18336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18305 === (8))){
var inst_18281 = (state_18304[(7)]);
var tmp18316 = inst_18281;
var inst_18281__$1 = tmp18316;
var state_18304__$1 = (function (){var statearr_18320 = state_18304;
(statearr_18320[(7)] = inst_18281__$1);

return statearr_18320;
})();
var statearr_18321_18337 = state_18304__$1;
(statearr_18321_18337[(2)] = null);

(statearr_18321_18337[(1)] = (2));


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
});})(c__16591__auto___18327,out))
;
return ((function (switch__16501__auto__,c__16591__auto___18327,out){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_18322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18322[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_18322[(1)] = (1));

return statearr_18322;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_18304){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_18304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18323){if((e18323 instanceof Object)){
var ex__16505__auto__ = e18323;
var statearr_18324_18338 = state_18304;
(statearr_18324_18338[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18339 = state_18304;
state_18304 = G__18339;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_18304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_18304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___18327,out))
})();
var state__16593__auto__ = (function (){var statearr_18325 = f__16592__auto__.call(null);
(statearr_18325[(6)] = c__16591__auto___18327);

return statearr_18325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___18327,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18341 = arguments.length;
switch (G__18341) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16591__auto___18407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___18407,out){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___18407,out){
return (function (state_18379){
var state_val_18380 = (state_18379[(1)]);
if((state_val_18380 === (7))){
var inst_18375 = (state_18379[(2)]);
var state_18379__$1 = state_18379;
var statearr_18381_18408 = state_18379__$1;
(statearr_18381_18408[(2)] = inst_18375);

(statearr_18381_18408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (1))){
var inst_18342 = (new Array(n));
var inst_18343 = inst_18342;
var inst_18344 = (0);
var state_18379__$1 = (function (){var statearr_18382 = state_18379;
(statearr_18382[(7)] = inst_18343);

(statearr_18382[(8)] = inst_18344);

return statearr_18382;
})();
var statearr_18383_18409 = state_18379__$1;
(statearr_18383_18409[(2)] = null);

(statearr_18383_18409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (4))){
var inst_18347 = (state_18379[(9)]);
var inst_18347__$1 = (state_18379[(2)]);
var inst_18348 = (inst_18347__$1 == null);
var inst_18349 = cljs.core.not.call(null,inst_18348);
var state_18379__$1 = (function (){var statearr_18384 = state_18379;
(statearr_18384[(9)] = inst_18347__$1);

return statearr_18384;
})();
if(inst_18349){
var statearr_18385_18410 = state_18379__$1;
(statearr_18385_18410[(1)] = (5));

} else {
var statearr_18386_18411 = state_18379__$1;
(statearr_18386_18411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (15))){
var inst_18369 = (state_18379[(2)]);
var state_18379__$1 = state_18379;
var statearr_18387_18412 = state_18379__$1;
(statearr_18387_18412[(2)] = inst_18369);

(statearr_18387_18412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (13))){
var state_18379__$1 = state_18379;
var statearr_18388_18413 = state_18379__$1;
(statearr_18388_18413[(2)] = null);

(statearr_18388_18413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (6))){
var inst_18344 = (state_18379[(8)]);
var inst_18365 = (inst_18344 > (0));
var state_18379__$1 = state_18379;
if(cljs.core.truth_(inst_18365)){
var statearr_18389_18414 = state_18379__$1;
(statearr_18389_18414[(1)] = (12));

} else {
var statearr_18390_18415 = state_18379__$1;
(statearr_18390_18415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (3))){
var inst_18377 = (state_18379[(2)]);
var state_18379__$1 = state_18379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18379__$1,inst_18377);
} else {
if((state_val_18380 === (12))){
var inst_18343 = (state_18379[(7)]);
var inst_18367 = cljs.core.vec.call(null,inst_18343);
var state_18379__$1 = state_18379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18379__$1,(15),out,inst_18367);
} else {
if((state_val_18380 === (2))){
var state_18379__$1 = state_18379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18379__$1,(4),ch);
} else {
if((state_val_18380 === (11))){
var inst_18359 = (state_18379[(2)]);
var inst_18360 = (new Array(n));
var inst_18343 = inst_18360;
var inst_18344 = (0);
var state_18379__$1 = (function (){var statearr_18391 = state_18379;
(statearr_18391[(7)] = inst_18343);

(statearr_18391[(8)] = inst_18344);

(statearr_18391[(10)] = inst_18359);

return statearr_18391;
})();
var statearr_18392_18416 = state_18379__$1;
(statearr_18392_18416[(2)] = null);

(statearr_18392_18416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (9))){
var inst_18343 = (state_18379[(7)]);
var inst_18357 = cljs.core.vec.call(null,inst_18343);
var state_18379__$1 = state_18379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18379__$1,(11),out,inst_18357);
} else {
if((state_val_18380 === (5))){
var inst_18343 = (state_18379[(7)]);
var inst_18344 = (state_18379[(8)]);
var inst_18347 = (state_18379[(9)]);
var inst_18352 = (state_18379[(11)]);
var inst_18351 = (inst_18343[inst_18344] = inst_18347);
var inst_18352__$1 = (inst_18344 + (1));
var inst_18353 = (inst_18352__$1 < n);
var state_18379__$1 = (function (){var statearr_18393 = state_18379;
(statearr_18393[(12)] = inst_18351);

(statearr_18393[(11)] = inst_18352__$1);

return statearr_18393;
})();
if(cljs.core.truth_(inst_18353)){
var statearr_18394_18417 = state_18379__$1;
(statearr_18394_18417[(1)] = (8));

} else {
var statearr_18395_18418 = state_18379__$1;
(statearr_18395_18418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (14))){
var inst_18372 = (state_18379[(2)]);
var inst_18373 = cljs.core.async.close_BANG_.call(null,out);
var state_18379__$1 = (function (){var statearr_18397 = state_18379;
(statearr_18397[(13)] = inst_18372);

return statearr_18397;
})();
var statearr_18398_18419 = state_18379__$1;
(statearr_18398_18419[(2)] = inst_18373);

(statearr_18398_18419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (10))){
var inst_18363 = (state_18379[(2)]);
var state_18379__$1 = state_18379;
var statearr_18399_18420 = state_18379__$1;
(statearr_18399_18420[(2)] = inst_18363);

(statearr_18399_18420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18380 === (8))){
var inst_18343 = (state_18379[(7)]);
var inst_18352 = (state_18379[(11)]);
var tmp18396 = inst_18343;
var inst_18343__$1 = tmp18396;
var inst_18344 = inst_18352;
var state_18379__$1 = (function (){var statearr_18400 = state_18379;
(statearr_18400[(7)] = inst_18343__$1);

(statearr_18400[(8)] = inst_18344);

return statearr_18400;
})();
var statearr_18401_18421 = state_18379__$1;
(statearr_18401_18421[(2)] = null);

(statearr_18401_18421[(1)] = (2));


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
});})(c__16591__auto___18407,out))
;
return ((function (switch__16501__auto__,c__16591__auto___18407,out){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_18402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18402[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_18402[(1)] = (1));

return statearr_18402;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_18379){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_18379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18403){if((e18403 instanceof Object)){
var ex__16505__auto__ = e18403;
var statearr_18404_18422 = state_18379;
(statearr_18404_18422[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18423 = state_18379;
state_18379 = G__18423;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_18379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_18379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___18407,out))
})();
var state__16593__auto__ = (function (){var statearr_18405 = f__16592__auto__.call(null);
(statearr_18405[(6)] = c__16591__auto___18407);

return statearr_18405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___18407,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18425 = arguments.length;
switch (G__18425) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16591__auto___18495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto___18495,out){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto___18495,out){
return (function (state_18467){
var state_val_18468 = (state_18467[(1)]);
if((state_val_18468 === (7))){
var inst_18463 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18469_18496 = state_18467__$1;
(statearr_18469_18496[(2)] = inst_18463);

(statearr_18469_18496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (1))){
var inst_18426 = [];
var inst_18427 = inst_18426;
var inst_18428 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18467__$1 = (function (){var statearr_18470 = state_18467;
(statearr_18470[(7)] = inst_18427);

(statearr_18470[(8)] = inst_18428);

return statearr_18470;
})();
var statearr_18471_18497 = state_18467__$1;
(statearr_18471_18497[(2)] = null);

(statearr_18471_18497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (4))){
var inst_18431 = (state_18467[(9)]);
var inst_18431__$1 = (state_18467[(2)]);
var inst_18432 = (inst_18431__$1 == null);
var inst_18433 = cljs.core.not.call(null,inst_18432);
var state_18467__$1 = (function (){var statearr_18472 = state_18467;
(statearr_18472[(9)] = inst_18431__$1);

return statearr_18472;
})();
if(inst_18433){
var statearr_18473_18498 = state_18467__$1;
(statearr_18473_18498[(1)] = (5));

} else {
var statearr_18474_18499 = state_18467__$1;
(statearr_18474_18499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (15))){
var inst_18457 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18475_18500 = state_18467__$1;
(statearr_18475_18500[(2)] = inst_18457);

(statearr_18475_18500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (13))){
var state_18467__$1 = state_18467;
var statearr_18476_18501 = state_18467__$1;
(statearr_18476_18501[(2)] = null);

(statearr_18476_18501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (6))){
var inst_18427 = (state_18467[(7)]);
var inst_18452 = inst_18427.length;
var inst_18453 = (inst_18452 > (0));
var state_18467__$1 = state_18467;
if(cljs.core.truth_(inst_18453)){
var statearr_18477_18502 = state_18467__$1;
(statearr_18477_18502[(1)] = (12));

} else {
var statearr_18478_18503 = state_18467__$1;
(statearr_18478_18503[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (3))){
var inst_18465 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18467__$1,inst_18465);
} else {
if((state_val_18468 === (12))){
var inst_18427 = (state_18467[(7)]);
var inst_18455 = cljs.core.vec.call(null,inst_18427);
var state_18467__$1 = state_18467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18467__$1,(15),out,inst_18455);
} else {
if((state_val_18468 === (2))){
var state_18467__$1 = state_18467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18467__$1,(4),ch);
} else {
if((state_val_18468 === (11))){
var inst_18435 = (state_18467[(10)]);
var inst_18431 = (state_18467[(9)]);
var inst_18445 = (state_18467[(2)]);
var inst_18446 = [];
var inst_18447 = inst_18446.push(inst_18431);
var inst_18427 = inst_18446;
var inst_18428 = inst_18435;
var state_18467__$1 = (function (){var statearr_18479 = state_18467;
(statearr_18479[(11)] = inst_18445);

(statearr_18479[(12)] = inst_18447);

(statearr_18479[(7)] = inst_18427);

(statearr_18479[(8)] = inst_18428);

return statearr_18479;
})();
var statearr_18480_18504 = state_18467__$1;
(statearr_18480_18504[(2)] = null);

(statearr_18480_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (9))){
var inst_18427 = (state_18467[(7)]);
var inst_18443 = cljs.core.vec.call(null,inst_18427);
var state_18467__$1 = state_18467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18467__$1,(11),out,inst_18443);
} else {
if((state_val_18468 === (5))){
var inst_18435 = (state_18467[(10)]);
var inst_18431 = (state_18467[(9)]);
var inst_18428 = (state_18467[(8)]);
var inst_18435__$1 = f.call(null,inst_18431);
var inst_18436 = cljs.core._EQ_.call(null,inst_18435__$1,inst_18428);
var inst_18437 = cljs.core.keyword_identical_QMARK_.call(null,inst_18428,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18438 = (inst_18436) || (inst_18437);
var state_18467__$1 = (function (){var statearr_18481 = state_18467;
(statearr_18481[(10)] = inst_18435__$1);

return statearr_18481;
})();
if(cljs.core.truth_(inst_18438)){
var statearr_18482_18505 = state_18467__$1;
(statearr_18482_18505[(1)] = (8));

} else {
var statearr_18483_18506 = state_18467__$1;
(statearr_18483_18506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (14))){
var inst_18460 = (state_18467[(2)]);
var inst_18461 = cljs.core.async.close_BANG_.call(null,out);
var state_18467__$1 = (function (){var statearr_18485 = state_18467;
(statearr_18485[(13)] = inst_18460);

return statearr_18485;
})();
var statearr_18486_18507 = state_18467__$1;
(statearr_18486_18507[(2)] = inst_18461);

(statearr_18486_18507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (10))){
var inst_18450 = (state_18467[(2)]);
var state_18467__$1 = state_18467;
var statearr_18487_18508 = state_18467__$1;
(statearr_18487_18508[(2)] = inst_18450);

(statearr_18487_18508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18468 === (8))){
var inst_18435 = (state_18467[(10)]);
var inst_18431 = (state_18467[(9)]);
var inst_18427 = (state_18467[(7)]);
var inst_18440 = inst_18427.push(inst_18431);
var tmp18484 = inst_18427;
var inst_18427__$1 = tmp18484;
var inst_18428 = inst_18435;
var state_18467__$1 = (function (){var statearr_18488 = state_18467;
(statearr_18488[(14)] = inst_18440);

(statearr_18488[(7)] = inst_18427__$1);

(statearr_18488[(8)] = inst_18428);

return statearr_18488;
})();
var statearr_18489_18509 = state_18467__$1;
(statearr_18489_18509[(2)] = null);

(statearr_18489_18509[(1)] = (2));


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
});})(c__16591__auto___18495,out))
;
return ((function (switch__16501__auto__,c__16591__auto___18495,out){
return (function() {
var cljs$core$async$state_machine__16502__auto__ = null;
var cljs$core$async$state_machine__16502__auto____0 = (function (){
var statearr_18490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18490[(0)] = cljs$core$async$state_machine__16502__auto__);

(statearr_18490[(1)] = (1));

return statearr_18490;
});
var cljs$core$async$state_machine__16502__auto____1 = (function (state_18467){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_18467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18491){if((e18491 instanceof Object)){
var ex__16505__auto__ = e18491;
var statearr_18492_18510 = state_18467;
(statearr_18492_18510[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18511 = state_18467;
state_18467 = G__18511;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
cljs$core$async$state_machine__16502__auto__ = function(state_18467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16502__auto____1.call(this,state_18467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16502__auto____0;
cljs$core$async$state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16502__auto____1;
return cljs$core$async$state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto___18495,out))
})();
var state__16593__auto__ = (function (){var statearr_18493 = f__16592__auto__.call(null);
(statearr_18493[(6)] = c__16591__auto___18495);

return statearr_18493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto___18495,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
