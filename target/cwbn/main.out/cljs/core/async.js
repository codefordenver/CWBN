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
var G__17077 = arguments.length;
switch (G__17077) {
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
if(typeof cljs.core.async.t_cljs$core$async17078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17078 = (function (f,blockable,meta17079){
this.f = f;
this.blockable = blockable;
this.meta17079 = meta17079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17080,meta17079__$1){
var self__ = this;
var _17080__$1 = this;
return (new cljs.core.async.t_cljs$core$async17078(self__.f,self__.blockable,meta17079__$1));
});

cljs.core.async.t_cljs$core$async17078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17080){
var self__ = this;
var _17080__$1 = this;
return self__.meta17079;
});

cljs.core.async.t_cljs$core$async17078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17079","meta17079",-1755128538,null)], null);
});

cljs.core.async.t_cljs$core$async17078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17078";

cljs.core.async.t_cljs$core$async17078.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17078");
});

cljs.core.async.__GT_t_cljs$core$async17078 = (function cljs$core$async$__GT_t_cljs$core$async17078(f__$1,blockable__$1,meta17079){
return (new cljs.core.async.t_cljs$core$async17078(f__$1,blockable__$1,meta17079));
});

}

return (new cljs.core.async.t_cljs$core$async17078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17084 = arguments.length;
switch (G__17084) {
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
var G__17087 = arguments.length;
switch (G__17087) {
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
var G__17090 = arguments.length;
switch (G__17090) {
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
var val_17092 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17092);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17092,ret){
return (function (){
return fn1.call(null,val_17092);
});})(val_17092,ret))
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
var G__17094 = arguments.length;
switch (G__17094) {
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
var n__9719__auto___17096 = n;
var x_17097 = (0);
while(true){
if((x_17097 < n__9719__auto___17096)){
(a[x_17097] = (0));

var G__17098 = (x_17097 + (1));
x_17097 = G__17098;
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

var G__17099 = (i + (1));
i = G__17099;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17100 = (function (flag,meta17101){
this.flag = flag;
this.meta17101 = meta17101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17102,meta17101__$1){
var self__ = this;
var _17102__$1 = this;
return (new cljs.core.async.t_cljs$core$async17100(self__.flag,meta17101__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17102){
var self__ = this;
var _17102__$1 = this;
return self__.meta17101;
});})(flag))
;

cljs.core.async.t_cljs$core$async17100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17100.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17101","meta17101",1835800929,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17100";

cljs.core.async.t_cljs$core$async17100.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17100");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17100 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17100(flag__$1,meta17101){
return (new cljs.core.async.t_cljs$core$async17100(flag__$1,meta17101));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17100(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17103 = (function (flag,cb,meta17104){
this.flag = flag;
this.cb = cb;
this.meta17104 = meta17104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17105,meta17104__$1){
var self__ = this;
var _17105__$1 = this;
return (new cljs.core.async.t_cljs$core$async17103(self__.flag,self__.cb,meta17104__$1));
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17105){
var self__ = this;
var _17105__$1 = this;
return self__.meta17104;
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17104","meta17104",-270788578,null)], null);
});

cljs.core.async.t_cljs$core$async17103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17103";

cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17103");
});

cljs.core.async.__GT_t_cljs$core$async17103 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17103(flag__$1,cb__$1,meta17104){
return (new cljs.core.async.t_cljs$core$async17103(flag__$1,cb__$1,meta17104));
});

}

return (new cljs.core.async.t_cljs$core$async17103(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17106_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17107_SHARP_,port], null));
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
var G__17108 = (i + (1));
i = G__17108;
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
var len__9953__auto___17114 = arguments.length;
var i__9954__auto___17115 = (0);
while(true){
if((i__9954__auto___17115 < len__9953__auto___17114)){
args__9960__auto__.push((arguments[i__9954__auto___17115]));

var G__17116 = (i__9954__auto___17115 + (1));
i__9954__auto___17115 = G__17116;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((1) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9961__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17111){
var map__17112 = p__17111;
var map__17112__$1 = ((((!((map__17112 == null)))?((((map__17112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17112):map__17112);
var opts = map__17112__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17109){
var G__17110 = cljs.core.first.call(null,seq17109);
var seq17109__$1 = cljs.core.next.call(null,seq17109);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17110,seq17109__$1);
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
var G__17118 = arguments.length;
switch (G__17118) {
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
var c__17017__auto___17164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___17164){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___17164){
return (function (state_17142){
var state_val_17143 = (state_17142[(1)]);
if((state_val_17143 === (7))){
var inst_17138 = (state_17142[(2)]);
var state_17142__$1 = state_17142;
var statearr_17144_17165 = state_17142__$1;
(statearr_17144_17165[(2)] = inst_17138);

(statearr_17144_17165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (1))){
var state_17142__$1 = state_17142;
var statearr_17145_17166 = state_17142__$1;
(statearr_17145_17166[(2)] = null);

(statearr_17145_17166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (4))){
var inst_17121 = (state_17142[(7)]);
var inst_17121__$1 = (state_17142[(2)]);
var inst_17122 = (inst_17121__$1 == null);
var state_17142__$1 = (function (){var statearr_17146 = state_17142;
(statearr_17146[(7)] = inst_17121__$1);

return statearr_17146;
})();
if(cljs.core.truth_(inst_17122)){
var statearr_17147_17167 = state_17142__$1;
(statearr_17147_17167[(1)] = (5));

} else {
var statearr_17148_17168 = state_17142__$1;
(statearr_17148_17168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (13))){
var state_17142__$1 = state_17142;
var statearr_17149_17169 = state_17142__$1;
(statearr_17149_17169[(2)] = null);

(statearr_17149_17169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (6))){
var inst_17121 = (state_17142[(7)]);
var state_17142__$1 = state_17142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17142__$1,(11),to,inst_17121);
} else {
if((state_val_17143 === (3))){
var inst_17140 = (state_17142[(2)]);
var state_17142__$1 = state_17142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17142__$1,inst_17140);
} else {
if((state_val_17143 === (12))){
var state_17142__$1 = state_17142;
var statearr_17150_17170 = state_17142__$1;
(statearr_17150_17170[(2)] = null);

(statearr_17150_17170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (2))){
var state_17142__$1 = state_17142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17142__$1,(4),from);
} else {
if((state_val_17143 === (11))){
var inst_17131 = (state_17142[(2)]);
var state_17142__$1 = state_17142;
if(cljs.core.truth_(inst_17131)){
var statearr_17151_17171 = state_17142__$1;
(statearr_17151_17171[(1)] = (12));

} else {
var statearr_17152_17172 = state_17142__$1;
(statearr_17152_17172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (9))){
var state_17142__$1 = state_17142;
var statearr_17153_17173 = state_17142__$1;
(statearr_17153_17173[(2)] = null);

(statearr_17153_17173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (5))){
var state_17142__$1 = state_17142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17154_17174 = state_17142__$1;
(statearr_17154_17174[(1)] = (8));

} else {
var statearr_17155_17175 = state_17142__$1;
(statearr_17155_17175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (14))){
var inst_17136 = (state_17142[(2)]);
var state_17142__$1 = state_17142;
var statearr_17156_17176 = state_17142__$1;
(statearr_17156_17176[(2)] = inst_17136);

(statearr_17156_17176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (10))){
var inst_17128 = (state_17142[(2)]);
var state_17142__$1 = state_17142;
var statearr_17157_17177 = state_17142__$1;
(statearr_17157_17177[(2)] = inst_17128);

(statearr_17157_17177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17143 === (8))){
var inst_17125 = cljs.core.async.close_BANG_.call(null,to);
var state_17142__$1 = state_17142;
var statearr_17158_17178 = state_17142__$1;
(statearr_17158_17178[(2)] = inst_17125);

(statearr_17158_17178[(1)] = (10));


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
});})(c__17017__auto___17164))
;
return ((function (switch__16927__auto__,c__17017__auto___17164){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_17159 = [null,null,null,null,null,null,null,null];
(statearr_17159[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_17159[(1)] = (1));

return statearr_17159;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_17142){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17160){if((e17160 instanceof Object)){
var ex__16931__auto__ = e17160;
var statearr_17161_17179 = state_17142;
(statearr_17161_17179[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17180 = state_17142;
state_17142 = G__17180;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_17142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_17142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___17164))
})();
var state__17019__auto__ = (function (){var statearr_17162 = f__17018__auto__.call(null);
(statearr_17162[(6)] = c__17017__auto___17164);

return statearr_17162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___17164))
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
return (function (p__17181){
var vec__17182 = p__17181;
var v = cljs.core.nth.call(null,vec__17182,(0),null);
var p = cljs.core.nth.call(null,vec__17182,(1),null);
var job = vec__17182;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17017__auto___17353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___17353,res,vec__17182,v,p,job,jobs,results){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___17353,res,vec__17182,v,p,job,jobs,results){
return (function (state_17189){
var state_val_17190 = (state_17189[(1)]);
if((state_val_17190 === (1))){
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17189__$1,(2),res,v);
} else {
if((state_val_17190 === (2))){
var inst_17186 = (state_17189[(2)]);
var inst_17187 = cljs.core.async.close_BANG_.call(null,res);
var state_17189__$1 = (function (){var statearr_17191 = state_17189;
(statearr_17191[(7)] = inst_17186);

return statearr_17191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17189__$1,inst_17187);
} else {
return null;
}
}
});})(c__17017__auto___17353,res,vec__17182,v,p,job,jobs,results))
;
return ((function (switch__16927__auto__,c__17017__auto___17353,res,vec__17182,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0 = (function (){
var statearr_17192 = [null,null,null,null,null,null,null,null];
(statearr_17192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__);

(statearr_17192[(1)] = (1));

return statearr_17192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1 = (function (state_17189){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17193){if((e17193 instanceof Object)){
var ex__16931__auto__ = e17193;
var statearr_17194_17354 = state_17189;
(statearr_17194_17354[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17355 = state_17189;
state_17189 = G__17355;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = function(state_17189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1.call(this,state_17189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___17353,res,vec__17182,v,p,job,jobs,results))
})();
var state__17019__auto__ = (function (){var statearr_17195 = f__17018__auto__.call(null);
(statearr_17195[(6)] = c__17017__auto___17353);

return statearr_17195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___17353,res,vec__17182,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17196){
var vec__17197 = p__17196;
var v = cljs.core.nth.call(null,vec__17197,(0),null);
var p = cljs.core.nth.call(null,vec__17197,(1),null);
var job = vec__17197;
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
var n__9719__auto___17356 = n;
var __17357 = (0);
while(true){
if((__17357 < n__9719__auto___17356)){
var G__17200_17358 = type;
var G__17200_17359__$1 = (((G__17200_17358 instanceof cljs.core.Keyword))?G__17200_17358.fqn:null);
switch (G__17200_17359__$1) {
case "compute":
var c__17017__auto___17361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17357,c__17017__auto___17361,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (__17357,c__17017__auto___17361,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async){
return (function (state_17213){
var state_val_17214 = (state_17213[(1)]);
if((state_val_17214 === (1))){
var state_17213__$1 = state_17213;
var statearr_17215_17362 = state_17213__$1;
(statearr_17215_17362[(2)] = null);

(statearr_17215_17362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (2))){
var state_17213__$1 = state_17213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17213__$1,(4),jobs);
} else {
if((state_val_17214 === (3))){
var inst_17211 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17213__$1,inst_17211);
} else {
if((state_val_17214 === (4))){
var inst_17203 = (state_17213[(2)]);
var inst_17204 = process.call(null,inst_17203);
var state_17213__$1 = state_17213;
if(cljs.core.truth_(inst_17204)){
var statearr_17216_17363 = state_17213__$1;
(statearr_17216_17363[(1)] = (5));

} else {
var statearr_17217_17364 = state_17213__$1;
(statearr_17217_17364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (5))){
var state_17213__$1 = state_17213;
var statearr_17218_17365 = state_17213__$1;
(statearr_17218_17365[(2)] = null);

(statearr_17218_17365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (6))){
var state_17213__$1 = state_17213;
var statearr_17219_17366 = state_17213__$1;
(statearr_17219_17366[(2)] = null);

(statearr_17219_17366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (7))){
var inst_17209 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
var statearr_17220_17367 = state_17213__$1;
(statearr_17220_17367[(2)] = inst_17209);

(statearr_17220_17367[(1)] = (3));


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
});})(__17357,c__17017__auto___17361,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async))
;
return ((function (__17357,switch__16927__auto__,c__17017__auto___17361,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0 = (function (){
var statearr_17221 = [null,null,null,null,null,null,null];
(statearr_17221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__);

(statearr_17221[(1)] = (1));

return statearr_17221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1 = (function (state_17213){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17222){if((e17222 instanceof Object)){
var ex__16931__auto__ = e17222;
var statearr_17223_17368 = state_17213;
(statearr_17223_17368[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17369 = state_17213;
state_17213 = G__17369;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = function(state_17213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1.call(this,state_17213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__;
})()
;})(__17357,switch__16927__auto__,c__17017__auto___17361,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async))
})();
var state__17019__auto__ = (function (){var statearr_17224 = f__17018__auto__.call(null);
(statearr_17224[(6)] = c__17017__auto___17361);

return statearr_17224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(__17357,c__17017__auto___17361,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async))
);


break;
case "async":
var c__17017__auto___17370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17357,c__17017__auto___17370,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (__17357,c__17017__auto___17370,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async){
return (function (state_17237){
var state_val_17238 = (state_17237[(1)]);
if((state_val_17238 === (1))){
var state_17237__$1 = state_17237;
var statearr_17239_17371 = state_17237__$1;
(statearr_17239_17371[(2)] = null);

(statearr_17239_17371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (2))){
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17237__$1,(4),jobs);
} else {
if((state_val_17238 === (3))){
var inst_17235 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17237__$1,inst_17235);
} else {
if((state_val_17238 === (4))){
var inst_17227 = (state_17237[(2)]);
var inst_17228 = async.call(null,inst_17227);
var state_17237__$1 = state_17237;
if(cljs.core.truth_(inst_17228)){
var statearr_17240_17372 = state_17237__$1;
(statearr_17240_17372[(1)] = (5));

} else {
var statearr_17241_17373 = state_17237__$1;
(statearr_17241_17373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (5))){
var state_17237__$1 = state_17237;
var statearr_17242_17374 = state_17237__$1;
(statearr_17242_17374[(2)] = null);

(statearr_17242_17374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (6))){
var state_17237__$1 = state_17237;
var statearr_17243_17375 = state_17237__$1;
(statearr_17243_17375[(2)] = null);

(statearr_17243_17375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17238 === (7))){
var inst_17233 = (state_17237[(2)]);
var state_17237__$1 = state_17237;
var statearr_17244_17376 = state_17237__$1;
(statearr_17244_17376[(2)] = inst_17233);

(statearr_17244_17376[(1)] = (3));


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
});})(__17357,c__17017__auto___17370,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async))
;
return ((function (__17357,switch__16927__auto__,c__17017__auto___17370,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0 = (function (){
var statearr_17245 = [null,null,null,null,null,null,null];
(statearr_17245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__);

(statearr_17245[(1)] = (1));

return statearr_17245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1 = (function (state_17237){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17246){if((e17246 instanceof Object)){
var ex__16931__auto__ = e17246;
var statearr_17247_17377 = state_17237;
(statearr_17247_17377[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17378 = state_17237;
state_17237 = G__17378;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = function(state_17237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1.call(this,state_17237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__;
})()
;})(__17357,switch__16927__auto__,c__17017__auto___17370,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async))
})();
var state__17019__auto__ = (function (){var statearr_17248 = f__17018__auto__.call(null);
(statearr_17248[(6)] = c__17017__auto___17370);

return statearr_17248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(__17357,c__17017__auto___17370,G__17200_17358,G__17200_17359__$1,n__9719__auto___17356,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17200_17359__$1)].join('')));

}

var G__17379 = (__17357 + (1));
__17357 = G__17379;
continue;
} else {
}
break;
}

var c__17017__auto___17380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___17380,jobs,results,process,async){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___17380,jobs,results,process,async){
return (function (state_17270){
var state_val_17271 = (state_17270[(1)]);
if((state_val_17271 === (1))){
var state_17270__$1 = state_17270;
var statearr_17272_17381 = state_17270__$1;
(statearr_17272_17381[(2)] = null);

(statearr_17272_17381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (2))){
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17270__$1,(4),from);
} else {
if((state_val_17271 === (3))){
var inst_17268 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17270__$1,inst_17268);
} else {
if((state_val_17271 === (4))){
var inst_17251 = (state_17270[(7)]);
var inst_17251__$1 = (state_17270[(2)]);
var inst_17252 = (inst_17251__$1 == null);
var state_17270__$1 = (function (){var statearr_17273 = state_17270;
(statearr_17273[(7)] = inst_17251__$1);

return statearr_17273;
})();
if(cljs.core.truth_(inst_17252)){
var statearr_17274_17382 = state_17270__$1;
(statearr_17274_17382[(1)] = (5));

} else {
var statearr_17275_17383 = state_17270__$1;
(statearr_17275_17383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (5))){
var inst_17254 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17270__$1 = state_17270;
var statearr_17276_17384 = state_17270__$1;
(statearr_17276_17384[(2)] = inst_17254);

(statearr_17276_17384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (6))){
var inst_17251 = (state_17270[(7)]);
var inst_17256 = (state_17270[(8)]);
var inst_17256__$1 = cljs.core.async.chan.call(null,(1));
var inst_17257 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17258 = [inst_17251,inst_17256__$1];
var inst_17259 = (new cljs.core.PersistentVector(null,2,(5),inst_17257,inst_17258,null));
var state_17270__$1 = (function (){var statearr_17277 = state_17270;
(statearr_17277[(8)] = inst_17256__$1);

return statearr_17277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17270__$1,(8),jobs,inst_17259);
} else {
if((state_val_17271 === (7))){
var inst_17266 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17278_17385 = state_17270__$1;
(statearr_17278_17385[(2)] = inst_17266);

(statearr_17278_17385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (8))){
var inst_17256 = (state_17270[(8)]);
var inst_17261 = (state_17270[(2)]);
var state_17270__$1 = (function (){var statearr_17279 = state_17270;
(statearr_17279[(9)] = inst_17261);

return statearr_17279;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17270__$1,(9),results,inst_17256);
} else {
if((state_val_17271 === (9))){
var inst_17263 = (state_17270[(2)]);
var state_17270__$1 = (function (){var statearr_17280 = state_17270;
(statearr_17280[(10)] = inst_17263);

return statearr_17280;
})();
var statearr_17281_17386 = state_17270__$1;
(statearr_17281_17386[(2)] = null);

(statearr_17281_17386[(1)] = (2));


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
});})(c__17017__auto___17380,jobs,results,process,async))
;
return ((function (switch__16927__auto__,c__17017__auto___17380,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0 = (function (){
var statearr_17282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__);

(statearr_17282[(1)] = (1));

return statearr_17282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1 = (function (state_17270){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17283){if((e17283 instanceof Object)){
var ex__16931__auto__ = e17283;
var statearr_17284_17387 = state_17270;
(statearr_17284_17387[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17388 = state_17270;
state_17270 = G__17388;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = function(state_17270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1.call(this,state_17270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___17380,jobs,results,process,async))
})();
var state__17019__auto__ = (function (){var statearr_17285 = f__17018__auto__.call(null);
(statearr_17285[(6)] = c__17017__auto___17380);

return statearr_17285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___17380,jobs,results,process,async))
);


var c__17017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto__,jobs,results,process,async){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto__,jobs,results,process,async){
return (function (state_17323){
var state_val_17324 = (state_17323[(1)]);
if((state_val_17324 === (7))){
var inst_17319 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17325_17389 = state_17323__$1;
(statearr_17325_17389[(2)] = inst_17319);

(statearr_17325_17389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (20))){
var state_17323__$1 = state_17323;
var statearr_17326_17390 = state_17323__$1;
(statearr_17326_17390[(2)] = null);

(statearr_17326_17390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (1))){
var state_17323__$1 = state_17323;
var statearr_17327_17391 = state_17323__$1;
(statearr_17327_17391[(2)] = null);

(statearr_17327_17391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (4))){
var inst_17288 = (state_17323[(7)]);
var inst_17288__$1 = (state_17323[(2)]);
var inst_17289 = (inst_17288__$1 == null);
var state_17323__$1 = (function (){var statearr_17328 = state_17323;
(statearr_17328[(7)] = inst_17288__$1);

return statearr_17328;
})();
if(cljs.core.truth_(inst_17289)){
var statearr_17329_17392 = state_17323__$1;
(statearr_17329_17392[(1)] = (5));

} else {
var statearr_17330_17393 = state_17323__$1;
(statearr_17330_17393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (15))){
var inst_17301 = (state_17323[(8)]);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17323__$1,(18),to,inst_17301);
} else {
if((state_val_17324 === (21))){
var inst_17314 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17331_17394 = state_17323__$1;
(statearr_17331_17394[(2)] = inst_17314);

(statearr_17331_17394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (13))){
var inst_17316 = (state_17323[(2)]);
var state_17323__$1 = (function (){var statearr_17332 = state_17323;
(statearr_17332[(9)] = inst_17316);

return statearr_17332;
})();
var statearr_17333_17395 = state_17323__$1;
(statearr_17333_17395[(2)] = null);

(statearr_17333_17395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (6))){
var inst_17288 = (state_17323[(7)]);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17323__$1,(11),inst_17288);
} else {
if((state_val_17324 === (17))){
var inst_17309 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
if(cljs.core.truth_(inst_17309)){
var statearr_17334_17396 = state_17323__$1;
(statearr_17334_17396[(1)] = (19));

} else {
var statearr_17335_17397 = state_17323__$1;
(statearr_17335_17397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (3))){
var inst_17321 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17323__$1,inst_17321);
} else {
if((state_val_17324 === (12))){
var inst_17298 = (state_17323[(10)]);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17323__$1,(14),inst_17298);
} else {
if((state_val_17324 === (2))){
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17323__$1,(4),results);
} else {
if((state_val_17324 === (19))){
var state_17323__$1 = state_17323;
var statearr_17336_17398 = state_17323__$1;
(statearr_17336_17398[(2)] = null);

(statearr_17336_17398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (11))){
var inst_17298 = (state_17323[(2)]);
var state_17323__$1 = (function (){var statearr_17337 = state_17323;
(statearr_17337[(10)] = inst_17298);

return statearr_17337;
})();
var statearr_17338_17399 = state_17323__$1;
(statearr_17338_17399[(2)] = null);

(statearr_17338_17399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (9))){
var state_17323__$1 = state_17323;
var statearr_17339_17400 = state_17323__$1;
(statearr_17339_17400[(2)] = null);

(statearr_17339_17400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (5))){
var state_17323__$1 = state_17323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17340_17401 = state_17323__$1;
(statearr_17340_17401[(1)] = (8));

} else {
var statearr_17341_17402 = state_17323__$1;
(statearr_17341_17402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (14))){
var inst_17303 = (state_17323[(11)]);
var inst_17301 = (state_17323[(8)]);
var inst_17301__$1 = (state_17323[(2)]);
var inst_17302 = (inst_17301__$1 == null);
var inst_17303__$1 = cljs.core.not.call(null,inst_17302);
var state_17323__$1 = (function (){var statearr_17342 = state_17323;
(statearr_17342[(11)] = inst_17303__$1);

(statearr_17342[(8)] = inst_17301__$1);

return statearr_17342;
})();
if(inst_17303__$1){
var statearr_17343_17403 = state_17323__$1;
(statearr_17343_17403[(1)] = (15));

} else {
var statearr_17344_17404 = state_17323__$1;
(statearr_17344_17404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (16))){
var inst_17303 = (state_17323[(11)]);
var state_17323__$1 = state_17323;
var statearr_17345_17405 = state_17323__$1;
(statearr_17345_17405[(2)] = inst_17303);

(statearr_17345_17405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (10))){
var inst_17295 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17346_17406 = state_17323__$1;
(statearr_17346_17406[(2)] = inst_17295);

(statearr_17346_17406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (18))){
var inst_17306 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17347_17407 = state_17323__$1;
(statearr_17347_17407[(2)] = inst_17306);

(statearr_17347_17407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (8))){
var inst_17292 = cljs.core.async.close_BANG_.call(null,to);
var state_17323__$1 = state_17323;
var statearr_17348_17408 = state_17323__$1;
(statearr_17348_17408[(2)] = inst_17292);

(statearr_17348_17408[(1)] = (10));


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
});})(c__17017__auto__,jobs,results,process,async))
;
return ((function (switch__16927__auto__,c__17017__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0 = (function (){
var statearr_17349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__);

(statearr_17349[(1)] = (1));

return statearr_17349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1 = (function (state_17323){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17350){if((e17350 instanceof Object)){
var ex__16931__auto__ = e17350;
var statearr_17351_17409 = state_17323;
(statearr_17351_17409[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17410 = state_17323;
state_17323 = G__17410;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__ = function(state_17323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1.call(this,state_17323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto__,jobs,results,process,async))
})();
var state__17019__auto__ = (function (){var statearr_17352 = f__17018__auto__.call(null);
(statearr_17352[(6)] = c__17017__auto__);

return statearr_17352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto__,jobs,results,process,async))
);

return c__17017__auto__;
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
var G__17412 = arguments.length;
switch (G__17412) {
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
var G__17415 = arguments.length;
switch (G__17415) {
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
var G__17418 = arguments.length;
switch (G__17418) {
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
var c__17017__auto___17467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___17467,tc,fc){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___17467,tc,fc){
return (function (state_17444){
var state_val_17445 = (state_17444[(1)]);
if((state_val_17445 === (7))){
var inst_17440 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
var statearr_17446_17468 = state_17444__$1;
(statearr_17446_17468[(2)] = inst_17440);

(statearr_17446_17468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (1))){
var state_17444__$1 = state_17444;
var statearr_17447_17469 = state_17444__$1;
(statearr_17447_17469[(2)] = null);

(statearr_17447_17469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (4))){
var inst_17421 = (state_17444[(7)]);
var inst_17421__$1 = (state_17444[(2)]);
var inst_17422 = (inst_17421__$1 == null);
var state_17444__$1 = (function (){var statearr_17448 = state_17444;
(statearr_17448[(7)] = inst_17421__$1);

return statearr_17448;
})();
if(cljs.core.truth_(inst_17422)){
var statearr_17449_17470 = state_17444__$1;
(statearr_17449_17470[(1)] = (5));

} else {
var statearr_17450_17471 = state_17444__$1;
(statearr_17450_17471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (13))){
var state_17444__$1 = state_17444;
var statearr_17451_17472 = state_17444__$1;
(statearr_17451_17472[(2)] = null);

(statearr_17451_17472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (6))){
var inst_17421 = (state_17444[(7)]);
var inst_17427 = p.call(null,inst_17421);
var state_17444__$1 = state_17444;
if(cljs.core.truth_(inst_17427)){
var statearr_17452_17473 = state_17444__$1;
(statearr_17452_17473[(1)] = (9));

} else {
var statearr_17453_17474 = state_17444__$1;
(statearr_17453_17474[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (3))){
var inst_17442 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17444__$1,inst_17442);
} else {
if((state_val_17445 === (12))){
var state_17444__$1 = state_17444;
var statearr_17454_17475 = state_17444__$1;
(statearr_17454_17475[(2)] = null);

(statearr_17454_17475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (2))){
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17444__$1,(4),ch);
} else {
if((state_val_17445 === (11))){
var inst_17421 = (state_17444[(7)]);
var inst_17431 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17444__$1,(8),inst_17431,inst_17421);
} else {
if((state_val_17445 === (9))){
var state_17444__$1 = state_17444;
var statearr_17455_17476 = state_17444__$1;
(statearr_17455_17476[(2)] = tc);

(statearr_17455_17476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (5))){
var inst_17424 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17425 = cljs.core.async.close_BANG_.call(null,fc);
var state_17444__$1 = (function (){var statearr_17456 = state_17444;
(statearr_17456[(8)] = inst_17424);

return statearr_17456;
})();
var statearr_17457_17477 = state_17444__$1;
(statearr_17457_17477[(2)] = inst_17425);

(statearr_17457_17477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (14))){
var inst_17438 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
var statearr_17458_17478 = state_17444__$1;
(statearr_17458_17478[(2)] = inst_17438);

(statearr_17458_17478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (10))){
var state_17444__$1 = state_17444;
var statearr_17459_17479 = state_17444__$1;
(statearr_17459_17479[(2)] = fc);

(statearr_17459_17479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (8))){
var inst_17433 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
if(cljs.core.truth_(inst_17433)){
var statearr_17460_17480 = state_17444__$1;
(statearr_17460_17480[(1)] = (12));

} else {
var statearr_17461_17481 = state_17444__$1;
(statearr_17461_17481[(1)] = (13));

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
});})(c__17017__auto___17467,tc,fc))
;
return ((function (switch__16927__auto__,c__17017__auto___17467,tc,fc){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_17462 = [null,null,null,null,null,null,null,null,null];
(statearr_17462[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_17462[(1)] = (1));

return statearr_17462;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_17444){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17463){if((e17463 instanceof Object)){
var ex__16931__auto__ = e17463;
var statearr_17464_17482 = state_17444;
(statearr_17464_17482[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17483 = state_17444;
state_17444 = G__17483;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_17444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_17444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___17467,tc,fc))
})();
var state__17019__auto__ = (function (){var statearr_17465 = f__17018__auto__.call(null);
(statearr_17465[(6)] = c__17017__auto___17467);

return statearr_17465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___17467,tc,fc))
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
var c__17017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto__){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto__){
return (function (state_17504){
var state_val_17505 = (state_17504[(1)]);
if((state_val_17505 === (7))){
var inst_17500 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17506_17524 = state_17504__$1;
(statearr_17506_17524[(2)] = inst_17500);

(statearr_17506_17524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (1))){
var inst_17484 = init;
var state_17504__$1 = (function (){var statearr_17507 = state_17504;
(statearr_17507[(7)] = inst_17484);

return statearr_17507;
})();
var statearr_17508_17525 = state_17504__$1;
(statearr_17508_17525[(2)] = null);

(statearr_17508_17525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (4))){
var inst_17487 = (state_17504[(8)]);
var inst_17487__$1 = (state_17504[(2)]);
var inst_17488 = (inst_17487__$1 == null);
var state_17504__$1 = (function (){var statearr_17509 = state_17504;
(statearr_17509[(8)] = inst_17487__$1);

return statearr_17509;
})();
if(cljs.core.truth_(inst_17488)){
var statearr_17510_17526 = state_17504__$1;
(statearr_17510_17526[(1)] = (5));

} else {
var statearr_17511_17527 = state_17504__$1;
(statearr_17511_17527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (6))){
var inst_17487 = (state_17504[(8)]);
var inst_17484 = (state_17504[(7)]);
var inst_17491 = (state_17504[(9)]);
var inst_17491__$1 = f.call(null,inst_17484,inst_17487);
var inst_17492 = cljs.core.reduced_QMARK_.call(null,inst_17491__$1);
var state_17504__$1 = (function (){var statearr_17512 = state_17504;
(statearr_17512[(9)] = inst_17491__$1);

return statearr_17512;
})();
if(inst_17492){
var statearr_17513_17528 = state_17504__$1;
(statearr_17513_17528[(1)] = (8));

} else {
var statearr_17514_17529 = state_17504__$1;
(statearr_17514_17529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (3))){
var inst_17502 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17504__$1,inst_17502);
} else {
if((state_val_17505 === (2))){
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17504__$1,(4),ch);
} else {
if((state_val_17505 === (9))){
var inst_17491 = (state_17504[(9)]);
var inst_17484 = inst_17491;
var state_17504__$1 = (function (){var statearr_17515 = state_17504;
(statearr_17515[(7)] = inst_17484);

return statearr_17515;
})();
var statearr_17516_17530 = state_17504__$1;
(statearr_17516_17530[(2)] = null);

(statearr_17516_17530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (5))){
var inst_17484 = (state_17504[(7)]);
var state_17504__$1 = state_17504;
var statearr_17517_17531 = state_17504__$1;
(statearr_17517_17531[(2)] = inst_17484);

(statearr_17517_17531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (10))){
var inst_17498 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17518_17532 = state_17504__$1;
(statearr_17518_17532[(2)] = inst_17498);

(statearr_17518_17532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (8))){
var inst_17491 = (state_17504[(9)]);
var inst_17494 = cljs.core.deref.call(null,inst_17491);
var state_17504__$1 = state_17504;
var statearr_17519_17533 = state_17504__$1;
(statearr_17519_17533[(2)] = inst_17494);

(statearr_17519_17533[(1)] = (10));


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
});})(c__17017__auto__))
;
return ((function (switch__16927__auto__,c__17017__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16928__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16928__auto____0 = (function (){
var statearr_17520 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17520[(0)] = cljs$core$async$reduce_$_state_machine__16928__auto__);

(statearr_17520[(1)] = (1));

return statearr_17520;
});
var cljs$core$async$reduce_$_state_machine__16928__auto____1 = (function (state_17504){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17521){if((e17521 instanceof Object)){
var ex__16931__auto__ = e17521;
var statearr_17522_17534 = state_17504;
(statearr_17522_17534[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17535 = state_17504;
state_17504 = G__17535;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16928__auto__ = function(state_17504){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16928__auto____1.call(this,state_17504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16928__auto____0;
cljs$core$async$reduce_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16928__auto____1;
return cljs$core$async$reduce_$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto__))
})();
var state__17019__auto__ = (function (){var statearr_17523 = f__17018__auto__.call(null);
(statearr_17523[(6)] = c__17017__auto__);

return statearr_17523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto__))
);

return c__17017__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto__,f__$1){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto__,f__$1){
return (function (state_17541){
var state_val_17542 = (state_17541[(1)]);
if((state_val_17542 === (1))){
var inst_17536 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17541__$1,(2),inst_17536);
} else {
if((state_val_17542 === (2))){
var inst_17538 = (state_17541[(2)]);
var inst_17539 = f__$1.call(null,inst_17538);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17541__$1,inst_17539);
} else {
return null;
}
}
});})(c__17017__auto__,f__$1))
;
return ((function (switch__16927__auto__,c__17017__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16928__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16928__auto____0 = (function (){
var statearr_17543 = [null,null,null,null,null,null,null];
(statearr_17543[(0)] = cljs$core$async$transduce_$_state_machine__16928__auto__);

(statearr_17543[(1)] = (1));

return statearr_17543;
});
var cljs$core$async$transduce_$_state_machine__16928__auto____1 = (function (state_17541){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17544){if((e17544 instanceof Object)){
var ex__16931__auto__ = e17544;
var statearr_17545_17547 = state_17541;
(statearr_17545_17547[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17548 = state_17541;
state_17541 = G__17548;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16928__auto__ = function(state_17541){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16928__auto____1.call(this,state_17541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16928__auto____0;
cljs$core$async$transduce_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16928__auto____1;
return cljs$core$async$transduce_$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto__,f__$1))
})();
var state__17019__auto__ = (function (){var statearr_17546 = f__17018__auto__.call(null);
(statearr_17546[(6)] = c__17017__auto__);

return statearr_17546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto__,f__$1))
);

return c__17017__auto__;
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
var G__17550 = arguments.length;
switch (G__17550) {
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
var c__17017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto__){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto__){
return (function (state_17575){
var state_val_17576 = (state_17575[(1)]);
if((state_val_17576 === (7))){
var inst_17557 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
var statearr_17577_17598 = state_17575__$1;
(statearr_17577_17598[(2)] = inst_17557);

(statearr_17577_17598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (1))){
var inst_17551 = cljs.core.seq.call(null,coll);
var inst_17552 = inst_17551;
var state_17575__$1 = (function (){var statearr_17578 = state_17575;
(statearr_17578[(7)] = inst_17552);

return statearr_17578;
})();
var statearr_17579_17599 = state_17575__$1;
(statearr_17579_17599[(2)] = null);

(statearr_17579_17599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (4))){
var inst_17552 = (state_17575[(7)]);
var inst_17555 = cljs.core.first.call(null,inst_17552);
var state_17575__$1 = state_17575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17575__$1,(7),ch,inst_17555);
} else {
if((state_val_17576 === (13))){
var inst_17569 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
var statearr_17580_17600 = state_17575__$1;
(statearr_17580_17600[(2)] = inst_17569);

(statearr_17580_17600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (6))){
var inst_17560 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
if(cljs.core.truth_(inst_17560)){
var statearr_17581_17601 = state_17575__$1;
(statearr_17581_17601[(1)] = (8));

} else {
var statearr_17582_17602 = state_17575__$1;
(statearr_17582_17602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (3))){
var inst_17573 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17575__$1,inst_17573);
} else {
if((state_val_17576 === (12))){
var state_17575__$1 = state_17575;
var statearr_17583_17603 = state_17575__$1;
(statearr_17583_17603[(2)] = null);

(statearr_17583_17603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (2))){
var inst_17552 = (state_17575[(7)]);
var state_17575__$1 = state_17575;
if(cljs.core.truth_(inst_17552)){
var statearr_17584_17604 = state_17575__$1;
(statearr_17584_17604[(1)] = (4));

} else {
var statearr_17585_17605 = state_17575__$1;
(statearr_17585_17605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (11))){
var inst_17566 = cljs.core.async.close_BANG_.call(null,ch);
var state_17575__$1 = state_17575;
var statearr_17586_17606 = state_17575__$1;
(statearr_17586_17606[(2)] = inst_17566);

(statearr_17586_17606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (9))){
var state_17575__$1 = state_17575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17587_17607 = state_17575__$1;
(statearr_17587_17607[(1)] = (11));

} else {
var statearr_17588_17608 = state_17575__$1;
(statearr_17588_17608[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (5))){
var inst_17552 = (state_17575[(7)]);
var state_17575__$1 = state_17575;
var statearr_17589_17609 = state_17575__$1;
(statearr_17589_17609[(2)] = inst_17552);

(statearr_17589_17609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (10))){
var inst_17571 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
var statearr_17590_17610 = state_17575__$1;
(statearr_17590_17610[(2)] = inst_17571);

(statearr_17590_17610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17576 === (8))){
var inst_17552 = (state_17575[(7)]);
var inst_17562 = cljs.core.next.call(null,inst_17552);
var inst_17552__$1 = inst_17562;
var state_17575__$1 = (function (){var statearr_17591 = state_17575;
(statearr_17591[(7)] = inst_17552__$1);

return statearr_17591;
})();
var statearr_17592_17611 = state_17575__$1;
(statearr_17592_17611[(2)] = null);

(statearr_17592_17611[(1)] = (2));


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
});})(c__17017__auto__))
;
return ((function (switch__16927__auto__,c__17017__auto__){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_17593 = [null,null,null,null,null,null,null,null];
(statearr_17593[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_17593[(1)] = (1));

return statearr_17593;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_17575){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17594){if((e17594 instanceof Object)){
var ex__16931__auto__ = e17594;
var statearr_17595_17612 = state_17575;
(statearr_17595_17612[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17613 = state_17575;
state_17575 = G__17613;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_17575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_17575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto__))
})();
var state__17019__auto__ = (function (){var statearr_17596 = f__17018__auto__.call(null);
(statearr_17596[(6)] = c__17017__auto__);

return statearr_17596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto__))
);

return c__17017__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async17614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17614 = (function (ch,cs,meta17615){
this.ch = ch;
this.cs = cs;
this.meta17615 = meta17615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17616,meta17615__$1){
var self__ = this;
var _17616__$1 = this;
return (new cljs.core.async.t_cljs$core$async17614(self__.ch,self__.cs,meta17615__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17616){
var self__ = this;
var _17616__$1 = this;
return self__.meta17615;
});})(cs))
;

cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17614.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17615","meta17615",1600478592,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17614";

cljs.core.async.t_cljs$core$async17614.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17614");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17614 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17614(ch__$1,cs__$1,meta17615){
return (new cljs.core.async.t_cljs$core$async17614(ch__$1,cs__$1,meta17615));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17614(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17017__auto___17836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___17836,cs,m,dchan,dctr,done){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___17836,cs,m,dchan,dctr,done){
return (function (state_17751){
var state_val_17752 = (state_17751[(1)]);
if((state_val_17752 === (7))){
var inst_17747 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17753_17837 = state_17751__$1;
(statearr_17753_17837[(2)] = inst_17747);

(statearr_17753_17837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (20))){
var inst_17650 = (state_17751[(7)]);
var inst_17662 = cljs.core.first.call(null,inst_17650);
var inst_17663 = cljs.core.nth.call(null,inst_17662,(0),null);
var inst_17664 = cljs.core.nth.call(null,inst_17662,(1),null);
var state_17751__$1 = (function (){var statearr_17754 = state_17751;
(statearr_17754[(8)] = inst_17663);

return statearr_17754;
})();
if(cljs.core.truth_(inst_17664)){
var statearr_17755_17838 = state_17751__$1;
(statearr_17755_17838[(1)] = (22));

} else {
var statearr_17756_17839 = state_17751__$1;
(statearr_17756_17839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (27))){
var inst_17619 = (state_17751[(9)]);
var inst_17692 = (state_17751[(10)]);
var inst_17699 = (state_17751[(11)]);
var inst_17694 = (state_17751[(12)]);
var inst_17699__$1 = cljs.core._nth.call(null,inst_17692,inst_17694);
var inst_17700 = cljs.core.async.put_BANG_.call(null,inst_17699__$1,inst_17619,done);
var state_17751__$1 = (function (){var statearr_17757 = state_17751;
(statearr_17757[(11)] = inst_17699__$1);

return statearr_17757;
})();
if(cljs.core.truth_(inst_17700)){
var statearr_17758_17840 = state_17751__$1;
(statearr_17758_17840[(1)] = (30));

} else {
var statearr_17759_17841 = state_17751__$1;
(statearr_17759_17841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (1))){
var state_17751__$1 = state_17751;
var statearr_17760_17842 = state_17751__$1;
(statearr_17760_17842[(2)] = null);

(statearr_17760_17842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (24))){
var inst_17650 = (state_17751[(7)]);
var inst_17669 = (state_17751[(2)]);
var inst_17670 = cljs.core.next.call(null,inst_17650);
var inst_17628 = inst_17670;
var inst_17629 = null;
var inst_17630 = (0);
var inst_17631 = (0);
var state_17751__$1 = (function (){var statearr_17761 = state_17751;
(statearr_17761[(13)] = inst_17629);

(statearr_17761[(14)] = inst_17630);

(statearr_17761[(15)] = inst_17631);

(statearr_17761[(16)] = inst_17628);

(statearr_17761[(17)] = inst_17669);

return statearr_17761;
})();
var statearr_17762_17843 = state_17751__$1;
(statearr_17762_17843[(2)] = null);

(statearr_17762_17843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (39))){
var state_17751__$1 = state_17751;
var statearr_17766_17844 = state_17751__$1;
(statearr_17766_17844[(2)] = null);

(statearr_17766_17844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (4))){
var inst_17619 = (state_17751[(9)]);
var inst_17619__$1 = (state_17751[(2)]);
var inst_17620 = (inst_17619__$1 == null);
var state_17751__$1 = (function (){var statearr_17767 = state_17751;
(statearr_17767[(9)] = inst_17619__$1);

return statearr_17767;
})();
if(cljs.core.truth_(inst_17620)){
var statearr_17768_17845 = state_17751__$1;
(statearr_17768_17845[(1)] = (5));

} else {
var statearr_17769_17846 = state_17751__$1;
(statearr_17769_17846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (15))){
var inst_17629 = (state_17751[(13)]);
var inst_17630 = (state_17751[(14)]);
var inst_17631 = (state_17751[(15)]);
var inst_17628 = (state_17751[(16)]);
var inst_17646 = (state_17751[(2)]);
var inst_17647 = (inst_17631 + (1));
var tmp17763 = inst_17629;
var tmp17764 = inst_17630;
var tmp17765 = inst_17628;
var inst_17628__$1 = tmp17765;
var inst_17629__$1 = tmp17763;
var inst_17630__$1 = tmp17764;
var inst_17631__$1 = inst_17647;
var state_17751__$1 = (function (){var statearr_17770 = state_17751;
(statearr_17770[(13)] = inst_17629__$1);

(statearr_17770[(14)] = inst_17630__$1);

(statearr_17770[(15)] = inst_17631__$1);

(statearr_17770[(18)] = inst_17646);

(statearr_17770[(16)] = inst_17628__$1);

return statearr_17770;
})();
var statearr_17771_17847 = state_17751__$1;
(statearr_17771_17847[(2)] = null);

(statearr_17771_17847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (21))){
var inst_17673 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17775_17848 = state_17751__$1;
(statearr_17775_17848[(2)] = inst_17673);

(statearr_17775_17848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (31))){
var inst_17699 = (state_17751[(11)]);
var inst_17703 = done.call(null,null);
var inst_17704 = cljs.core.async.untap_STAR_.call(null,m,inst_17699);
var state_17751__$1 = (function (){var statearr_17776 = state_17751;
(statearr_17776[(19)] = inst_17703);

return statearr_17776;
})();
var statearr_17777_17849 = state_17751__$1;
(statearr_17777_17849[(2)] = inst_17704);

(statearr_17777_17849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (32))){
var inst_17692 = (state_17751[(10)]);
var inst_17693 = (state_17751[(20)]);
var inst_17691 = (state_17751[(21)]);
var inst_17694 = (state_17751[(12)]);
var inst_17706 = (state_17751[(2)]);
var inst_17707 = (inst_17694 + (1));
var tmp17772 = inst_17692;
var tmp17773 = inst_17693;
var tmp17774 = inst_17691;
var inst_17691__$1 = tmp17774;
var inst_17692__$1 = tmp17772;
var inst_17693__$1 = tmp17773;
var inst_17694__$1 = inst_17707;
var state_17751__$1 = (function (){var statearr_17778 = state_17751;
(statearr_17778[(22)] = inst_17706);

(statearr_17778[(10)] = inst_17692__$1);

(statearr_17778[(20)] = inst_17693__$1);

(statearr_17778[(21)] = inst_17691__$1);

(statearr_17778[(12)] = inst_17694__$1);

return statearr_17778;
})();
var statearr_17779_17850 = state_17751__$1;
(statearr_17779_17850[(2)] = null);

(statearr_17779_17850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (40))){
var inst_17719 = (state_17751[(23)]);
var inst_17723 = done.call(null,null);
var inst_17724 = cljs.core.async.untap_STAR_.call(null,m,inst_17719);
var state_17751__$1 = (function (){var statearr_17780 = state_17751;
(statearr_17780[(24)] = inst_17723);

return statearr_17780;
})();
var statearr_17781_17851 = state_17751__$1;
(statearr_17781_17851[(2)] = inst_17724);

(statearr_17781_17851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (33))){
var inst_17710 = (state_17751[(25)]);
var inst_17712 = cljs.core.chunked_seq_QMARK_.call(null,inst_17710);
var state_17751__$1 = state_17751;
if(inst_17712){
var statearr_17782_17852 = state_17751__$1;
(statearr_17782_17852[(1)] = (36));

} else {
var statearr_17783_17853 = state_17751__$1;
(statearr_17783_17853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (13))){
var inst_17640 = (state_17751[(26)]);
var inst_17643 = cljs.core.async.close_BANG_.call(null,inst_17640);
var state_17751__$1 = state_17751;
var statearr_17784_17854 = state_17751__$1;
(statearr_17784_17854[(2)] = inst_17643);

(statearr_17784_17854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (22))){
var inst_17663 = (state_17751[(8)]);
var inst_17666 = cljs.core.async.close_BANG_.call(null,inst_17663);
var state_17751__$1 = state_17751;
var statearr_17785_17855 = state_17751__$1;
(statearr_17785_17855[(2)] = inst_17666);

(statearr_17785_17855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (36))){
var inst_17710 = (state_17751[(25)]);
var inst_17714 = cljs.core.chunk_first.call(null,inst_17710);
var inst_17715 = cljs.core.chunk_rest.call(null,inst_17710);
var inst_17716 = cljs.core.count.call(null,inst_17714);
var inst_17691 = inst_17715;
var inst_17692 = inst_17714;
var inst_17693 = inst_17716;
var inst_17694 = (0);
var state_17751__$1 = (function (){var statearr_17786 = state_17751;
(statearr_17786[(10)] = inst_17692);

(statearr_17786[(20)] = inst_17693);

(statearr_17786[(21)] = inst_17691);

(statearr_17786[(12)] = inst_17694);

return statearr_17786;
})();
var statearr_17787_17856 = state_17751__$1;
(statearr_17787_17856[(2)] = null);

(statearr_17787_17856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (41))){
var inst_17710 = (state_17751[(25)]);
var inst_17726 = (state_17751[(2)]);
var inst_17727 = cljs.core.next.call(null,inst_17710);
var inst_17691 = inst_17727;
var inst_17692 = null;
var inst_17693 = (0);
var inst_17694 = (0);
var state_17751__$1 = (function (){var statearr_17788 = state_17751;
(statearr_17788[(10)] = inst_17692);

(statearr_17788[(27)] = inst_17726);

(statearr_17788[(20)] = inst_17693);

(statearr_17788[(21)] = inst_17691);

(statearr_17788[(12)] = inst_17694);

return statearr_17788;
})();
var statearr_17789_17857 = state_17751__$1;
(statearr_17789_17857[(2)] = null);

(statearr_17789_17857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (43))){
var state_17751__$1 = state_17751;
var statearr_17790_17858 = state_17751__$1;
(statearr_17790_17858[(2)] = null);

(statearr_17790_17858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (29))){
var inst_17735 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17791_17859 = state_17751__$1;
(statearr_17791_17859[(2)] = inst_17735);

(statearr_17791_17859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (44))){
var inst_17744 = (state_17751[(2)]);
var state_17751__$1 = (function (){var statearr_17792 = state_17751;
(statearr_17792[(28)] = inst_17744);

return statearr_17792;
})();
var statearr_17793_17860 = state_17751__$1;
(statearr_17793_17860[(2)] = null);

(statearr_17793_17860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (6))){
var inst_17683 = (state_17751[(29)]);
var inst_17682 = cljs.core.deref.call(null,cs);
var inst_17683__$1 = cljs.core.keys.call(null,inst_17682);
var inst_17684 = cljs.core.count.call(null,inst_17683__$1);
var inst_17685 = cljs.core.reset_BANG_.call(null,dctr,inst_17684);
var inst_17690 = cljs.core.seq.call(null,inst_17683__$1);
var inst_17691 = inst_17690;
var inst_17692 = null;
var inst_17693 = (0);
var inst_17694 = (0);
var state_17751__$1 = (function (){var statearr_17794 = state_17751;
(statearr_17794[(29)] = inst_17683__$1);

(statearr_17794[(30)] = inst_17685);

(statearr_17794[(10)] = inst_17692);

(statearr_17794[(20)] = inst_17693);

(statearr_17794[(21)] = inst_17691);

(statearr_17794[(12)] = inst_17694);

return statearr_17794;
})();
var statearr_17795_17861 = state_17751__$1;
(statearr_17795_17861[(2)] = null);

(statearr_17795_17861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (28))){
var inst_17710 = (state_17751[(25)]);
var inst_17691 = (state_17751[(21)]);
var inst_17710__$1 = cljs.core.seq.call(null,inst_17691);
var state_17751__$1 = (function (){var statearr_17796 = state_17751;
(statearr_17796[(25)] = inst_17710__$1);

return statearr_17796;
})();
if(inst_17710__$1){
var statearr_17797_17862 = state_17751__$1;
(statearr_17797_17862[(1)] = (33));

} else {
var statearr_17798_17863 = state_17751__$1;
(statearr_17798_17863[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (25))){
var inst_17693 = (state_17751[(20)]);
var inst_17694 = (state_17751[(12)]);
var inst_17696 = (inst_17694 < inst_17693);
var inst_17697 = inst_17696;
var state_17751__$1 = state_17751;
if(cljs.core.truth_(inst_17697)){
var statearr_17799_17864 = state_17751__$1;
(statearr_17799_17864[(1)] = (27));

} else {
var statearr_17800_17865 = state_17751__$1;
(statearr_17800_17865[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (34))){
var state_17751__$1 = state_17751;
var statearr_17801_17866 = state_17751__$1;
(statearr_17801_17866[(2)] = null);

(statearr_17801_17866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (17))){
var state_17751__$1 = state_17751;
var statearr_17802_17867 = state_17751__$1;
(statearr_17802_17867[(2)] = null);

(statearr_17802_17867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (3))){
var inst_17749 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17751__$1,inst_17749);
} else {
if((state_val_17752 === (12))){
var inst_17678 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17803_17868 = state_17751__$1;
(statearr_17803_17868[(2)] = inst_17678);

(statearr_17803_17868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (2))){
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17751__$1,(4),ch);
} else {
if((state_val_17752 === (23))){
var state_17751__$1 = state_17751;
var statearr_17804_17869 = state_17751__$1;
(statearr_17804_17869[(2)] = null);

(statearr_17804_17869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (35))){
var inst_17733 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17805_17870 = state_17751__$1;
(statearr_17805_17870[(2)] = inst_17733);

(statearr_17805_17870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (19))){
var inst_17650 = (state_17751[(7)]);
var inst_17654 = cljs.core.chunk_first.call(null,inst_17650);
var inst_17655 = cljs.core.chunk_rest.call(null,inst_17650);
var inst_17656 = cljs.core.count.call(null,inst_17654);
var inst_17628 = inst_17655;
var inst_17629 = inst_17654;
var inst_17630 = inst_17656;
var inst_17631 = (0);
var state_17751__$1 = (function (){var statearr_17806 = state_17751;
(statearr_17806[(13)] = inst_17629);

(statearr_17806[(14)] = inst_17630);

(statearr_17806[(15)] = inst_17631);

(statearr_17806[(16)] = inst_17628);

return statearr_17806;
})();
var statearr_17807_17871 = state_17751__$1;
(statearr_17807_17871[(2)] = null);

(statearr_17807_17871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (11))){
var inst_17650 = (state_17751[(7)]);
var inst_17628 = (state_17751[(16)]);
var inst_17650__$1 = cljs.core.seq.call(null,inst_17628);
var state_17751__$1 = (function (){var statearr_17808 = state_17751;
(statearr_17808[(7)] = inst_17650__$1);

return statearr_17808;
})();
if(inst_17650__$1){
var statearr_17809_17872 = state_17751__$1;
(statearr_17809_17872[(1)] = (16));

} else {
var statearr_17810_17873 = state_17751__$1;
(statearr_17810_17873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (9))){
var inst_17680 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17811_17874 = state_17751__$1;
(statearr_17811_17874[(2)] = inst_17680);

(statearr_17811_17874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (5))){
var inst_17626 = cljs.core.deref.call(null,cs);
var inst_17627 = cljs.core.seq.call(null,inst_17626);
var inst_17628 = inst_17627;
var inst_17629 = null;
var inst_17630 = (0);
var inst_17631 = (0);
var state_17751__$1 = (function (){var statearr_17812 = state_17751;
(statearr_17812[(13)] = inst_17629);

(statearr_17812[(14)] = inst_17630);

(statearr_17812[(15)] = inst_17631);

(statearr_17812[(16)] = inst_17628);

return statearr_17812;
})();
var statearr_17813_17875 = state_17751__$1;
(statearr_17813_17875[(2)] = null);

(statearr_17813_17875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (14))){
var state_17751__$1 = state_17751;
var statearr_17814_17876 = state_17751__$1;
(statearr_17814_17876[(2)] = null);

(statearr_17814_17876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (45))){
var inst_17741 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17815_17877 = state_17751__$1;
(statearr_17815_17877[(2)] = inst_17741);

(statearr_17815_17877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (26))){
var inst_17683 = (state_17751[(29)]);
var inst_17737 = (state_17751[(2)]);
var inst_17738 = cljs.core.seq.call(null,inst_17683);
var state_17751__$1 = (function (){var statearr_17816 = state_17751;
(statearr_17816[(31)] = inst_17737);

return statearr_17816;
})();
if(inst_17738){
var statearr_17817_17878 = state_17751__$1;
(statearr_17817_17878[(1)] = (42));

} else {
var statearr_17818_17879 = state_17751__$1;
(statearr_17818_17879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (16))){
var inst_17650 = (state_17751[(7)]);
var inst_17652 = cljs.core.chunked_seq_QMARK_.call(null,inst_17650);
var state_17751__$1 = state_17751;
if(inst_17652){
var statearr_17819_17880 = state_17751__$1;
(statearr_17819_17880[(1)] = (19));

} else {
var statearr_17820_17881 = state_17751__$1;
(statearr_17820_17881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (38))){
var inst_17730 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17821_17882 = state_17751__$1;
(statearr_17821_17882[(2)] = inst_17730);

(statearr_17821_17882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (30))){
var state_17751__$1 = state_17751;
var statearr_17822_17883 = state_17751__$1;
(statearr_17822_17883[(2)] = null);

(statearr_17822_17883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (10))){
var inst_17629 = (state_17751[(13)]);
var inst_17631 = (state_17751[(15)]);
var inst_17639 = cljs.core._nth.call(null,inst_17629,inst_17631);
var inst_17640 = cljs.core.nth.call(null,inst_17639,(0),null);
var inst_17641 = cljs.core.nth.call(null,inst_17639,(1),null);
var state_17751__$1 = (function (){var statearr_17823 = state_17751;
(statearr_17823[(26)] = inst_17640);

return statearr_17823;
})();
if(cljs.core.truth_(inst_17641)){
var statearr_17824_17884 = state_17751__$1;
(statearr_17824_17884[(1)] = (13));

} else {
var statearr_17825_17885 = state_17751__$1;
(statearr_17825_17885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (18))){
var inst_17676 = (state_17751[(2)]);
var state_17751__$1 = state_17751;
var statearr_17826_17886 = state_17751__$1;
(statearr_17826_17886[(2)] = inst_17676);

(statearr_17826_17886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (42))){
var state_17751__$1 = state_17751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17751__$1,(45),dchan);
} else {
if((state_val_17752 === (37))){
var inst_17619 = (state_17751[(9)]);
var inst_17710 = (state_17751[(25)]);
var inst_17719 = (state_17751[(23)]);
var inst_17719__$1 = cljs.core.first.call(null,inst_17710);
var inst_17720 = cljs.core.async.put_BANG_.call(null,inst_17719__$1,inst_17619,done);
var state_17751__$1 = (function (){var statearr_17827 = state_17751;
(statearr_17827[(23)] = inst_17719__$1);

return statearr_17827;
})();
if(cljs.core.truth_(inst_17720)){
var statearr_17828_17887 = state_17751__$1;
(statearr_17828_17887[(1)] = (39));

} else {
var statearr_17829_17888 = state_17751__$1;
(statearr_17829_17888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17752 === (8))){
var inst_17630 = (state_17751[(14)]);
var inst_17631 = (state_17751[(15)]);
var inst_17633 = (inst_17631 < inst_17630);
var inst_17634 = inst_17633;
var state_17751__$1 = state_17751;
if(cljs.core.truth_(inst_17634)){
var statearr_17830_17889 = state_17751__$1;
(statearr_17830_17889[(1)] = (10));

} else {
var statearr_17831_17890 = state_17751__$1;
(statearr_17831_17890[(1)] = (11));

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
});})(c__17017__auto___17836,cs,m,dchan,dctr,done))
;
return ((function (switch__16927__auto__,c__17017__auto___17836,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16928__auto__ = null;
var cljs$core$async$mult_$_state_machine__16928__auto____0 = (function (){
var statearr_17832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17832[(0)] = cljs$core$async$mult_$_state_machine__16928__auto__);

(statearr_17832[(1)] = (1));

return statearr_17832;
});
var cljs$core$async$mult_$_state_machine__16928__auto____1 = (function (state_17751){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_17751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e17833){if((e17833 instanceof Object)){
var ex__16931__auto__ = e17833;
var statearr_17834_17891 = state_17751;
(statearr_17834_17891[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17892 = state_17751;
state_17751 = G__17892;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16928__auto__ = function(state_17751){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16928__auto____1.call(this,state_17751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16928__auto____0;
cljs$core$async$mult_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16928__auto____1;
return cljs$core$async$mult_$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___17836,cs,m,dchan,dctr,done))
})();
var state__17019__auto__ = (function (){var statearr_17835 = f__17018__auto__.call(null);
(statearr_17835[(6)] = c__17017__auto___17836);

return statearr_17835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___17836,cs,m,dchan,dctr,done))
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
var G__17894 = arguments.length;
switch (G__17894) {
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
var len__9953__auto___17906 = arguments.length;
var i__9954__auto___17907 = (0);
while(true){
if((i__9954__auto___17907 < len__9953__auto___17906)){
args__9960__auto__.push((arguments[i__9954__auto___17907]));

var G__17908 = (i__9954__auto___17907 + (1));
i__9954__auto___17907 = G__17908;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17900){
var map__17901 = p__17900;
var map__17901__$1 = ((((!((map__17901 == null)))?((((map__17901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17901):map__17901);
var opts = map__17901__$1;
var statearr_17903_17909 = state;
(statearr_17903_17909[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__17901,map__17901__$1,opts){
return (function (val){
var statearr_17904_17910 = state;
(statearr_17904_17910[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17901,map__17901__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17905_17911 = state;
(statearr_17905_17911[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17896){
var G__17897 = cljs.core.first.call(null,seq17896);
var seq17896__$1 = cljs.core.next.call(null,seq17896);
var G__17898 = cljs.core.first.call(null,seq17896__$1);
var seq17896__$2 = cljs.core.next.call(null,seq17896__$1);
var G__17899 = cljs.core.first.call(null,seq17896__$2);
var seq17896__$3 = cljs.core.next.call(null,seq17896__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17897,G__17898,G__17899,seq17896__$3);
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
if(typeof cljs.core.async.t_cljs$core$async17912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17912 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17913){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17913 = meta17913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17914,meta17913__$1){
var self__ = this;
var _17914__$1 = this;
return (new cljs.core.async.t_cljs$core$async17912(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17913__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17914){
var self__ = this;
var _17914__$1 = this;
return self__.meta17913;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17912.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17913","meta17913",-2034743271,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17912";

cljs.core.async.t_cljs$core$async17912.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async17912");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17912 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17912(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17913){
return (new cljs.core.async.t_cljs$core$async17912(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17913));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17912(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17017__auto___18076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18016){
var state_val_18017 = (state_18016[(1)]);
if((state_val_18017 === (7))){
var inst_17931 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18018_18077 = state_18016__$1;
(statearr_18018_18077[(2)] = inst_17931);

(statearr_18018_18077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (20))){
var inst_17943 = (state_18016[(7)]);
var state_18016__$1 = state_18016;
var statearr_18019_18078 = state_18016__$1;
(statearr_18019_18078[(2)] = inst_17943);

(statearr_18019_18078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (27))){
var state_18016__$1 = state_18016;
var statearr_18020_18079 = state_18016__$1;
(statearr_18020_18079[(2)] = null);

(statearr_18020_18079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (1))){
var inst_17918 = (state_18016[(8)]);
var inst_17918__$1 = calc_state.call(null);
var inst_17920 = (inst_17918__$1 == null);
var inst_17921 = cljs.core.not.call(null,inst_17920);
var state_18016__$1 = (function (){var statearr_18021 = state_18016;
(statearr_18021[(8)] = inst_17918__$1);

return statearr_18021;
})();
if(inst_17921){
var statearr_18022_18080 = state_18016__$1;
(statearr_18022_18080[(1)] = (2));

} else {
var statearr_18023_18081 = state_18016__$1;
(statearr_18023_18081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (24))){
var inst_17990 = (state_18016[(9)]);
var inst_17976 = (state_18016[(10)]);
var inst_17967 = (state_18016[(11)]);
var inst_17990__$1 = inst_17967.call(null,inst_17976);
var state_18016__$1 = (function (){var statearr_18024 = state_18016;
(statearr_18024[(9)] = inst_17990__$1);

return statearr_18024;
})();
if(cljs.core.truth_(inst_17990__$1)){
var statearr_18025_18082 = state_18016__$1;
(statearr_18025_18082[(1)] = (29));

} else {
var statearr_18026_18083 = state_18016__$1;
(statearr_18026_18083[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (4))){
var inst_17934 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_17934)){
var statearr_18027_18084 = state_18016__$1;
(statearr_18027_18084[(1)] = (8));

} else {
var statearr_18028_18085 = state_18016__$1;
(statearr_18028_18085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (15))){
var inst_17961 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_17961)){
var statearr_18029_18086 = state_18016__$1;
(statearr_18029_18086[(1)] = (19));

} else {
var statearr_18030_18087 = state_18016__$1;
(statearr_18030_18087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (21))){
var inst_17966 = (state_18016[(12)]);
var inst_17966__$1 = (state_18016[(2)]);
var inst_17967 = cljs.core.get.call(null,inst_17966__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17968 = cljs.core.get.call(null,inst_17966__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17969 = cljs.core.get.call(null,inst_17966__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18016__$1 = (function (){var statearr_18031 = state_18016;
(statearr_18031[(12)] = inst_17966__$1);

(statearr_18031[(13)] = inst_17968);

(statearr_18031[(11)] = inst_17967);

return statearr_18031;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18016__$1,(22),inst_17969);
} else {
if((state_val_18017 === (31))){
var inst_17998 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_17998)){
var statearr_18032_18088 = state_18016__$1;
(statearr_18032_18088[(1)] = (32));

} else {
var statearr_18033_18089 = state_18016__$1;
(statearr_18033_18089[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (32))){
var inst_17975 = (state_18016[(14)]);
var state_18016__$1 = state_18016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18016__$1,(35),out,inst_17975);
} else {
if((state_val_18017 === (33))){
var inst_17966 = (state_18016[(12)]);
var inst_17943 = inst_17966;
var state_18016__$1 = (function (){var statearr_18034 = state_18016;
(statearr_18034[(7)] = inst_17943);

return statearr_18034;
})();
var statearr_18035_18090 = state_18016__$1;
(statearr_18035_18090[(2)] = null);

(statearr_18035_18090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (13))){
var inst_17943 = (state_18016[(7)]);
var inst_17950 = inst_17943.cljs$lang$protocol_mask$partition0$;
var inst_17951 = (inst_17950 & (64));
var inst_17952 = inst_17943.cljs$core$ISeq$;
var inst_17953 = (cljs.core.PROTOCOL_SENTINEL === inst_17952);
var inst_17954 = (inst_17951) || (inst_17953);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_17954)){
var statearr_18036_18091 = state_18016__$1;
(statearr_18036_18091[(1)] = (16));

} else {
var statearr_18037_18092 = state_18016__$1;
(statearr_18037_18092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (22))){
var inst_17975 = (state_18016[(14)]);
var inst_17976 = (state_18016[(10)]);
var inst_17974 = (state_18016[(2)]);
var inst_17975__$1 = cljs.core.nth.call(null,inst_17974,(0),null);
var inst_17976__$1 = cljs.core.nth.call(null,inst_17974,(1),null);
var inst_17977 = (inst_17975__$1 == null);
var inst_17978 = cljs.core._EQ_.call(null,inst_17976__$1,change);
var inst_17979 = (inst_17977) || (inst_17978);
var state_18016__$1 = (function (){var statearr_18038 = state_18016;
(statearr_18038[(14)] = inst_17975__$1);

(statearr_18038[(10)] = inst_17976__$1);

return statearr_18038;
})();
if(cljs.core.truth_(inst_17979)){
var statearr_18039_18093 = state_18016__$1;
(statearr_18039_18093[(1)] = (23));

} else {
var statearr_18040_18094 = state_18016__$1;
(statearr_18040_18094[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (36))){
var inst_17966 = (state_18016[(12)]);
var inst_17943 = inst_17966;
var state_18016__$1 = (function (){var statearr_18041 = state_18016;
(statearr_18041[(7)] = inst_17943);

return statearr_18041;
})();
var statearr_18042_18095 = state_18016__$1;
(statearr_18042_18095[(2)] = null);

(statearr_18042_18095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (29))){
var inst_17990 = (state_18016[(9)]);
var state_18016__$1 = state_18016;
var statearr_18043_18096 = state_18016__$1;
(statearr_18043_18096[(2)] = inst_17990);

(statearr_18043_18096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (6))){
var state_18016__$1 = state_18016;
var statearr_18044_18097 = state_18016__$1;
(statearr_18044_18097[(2)] = false);

(statearr_18044_18097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (28))){
var inst_17986 = (state_18016[(2)]);
var inst_17987 = calc_state.call(null);
var inst_17943 = inst_17987;
var state_18016__$1 = (function (){var statearr_18045 = state_18016;
(statearr_18045[(15)] = inst_17986);

(statearr_18045[(7)] = inst_17943);

return statearr_18045;
})();
var statearr_18046_18098 = state_18016__$1;
(statearr_18046_18098[(2)] = null);

(statearr_18046_18098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (25))){
var inst_18012 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18047_18099 = state_18016__$1;
(statearr_18047_18099[(2)] = inst_18012);

(statearr_18047_18099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (34))){
var inst_18010 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18048_18100 = state_18016__$1;
(statearr_18048_18100[(2)] = inst_18010);

(statearr_18048_18100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (17))){
var state_18016__$1 = state_18016;
var statearr_18049_18101 = state_18016__$1;
(statearr_18049_18101[(2)] = false);

(statearr_18049_18101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (3))){
var state_18016__$1 = state_18016;
var statearr_18050_18102 = state_18016__$1;
(statearr_18050_18102[(2)] = false);

(statearr_18050_18102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (12))){
var inst_18014 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18016__$1,inst_18014);
} else {
if((state_val_18017 === (2))){
var inst_17918 = (state_18016[(8)]);
var inst_17923 = inst_17918.cljs$lang$protocol_mask$partition0$;
var inst_17924 = (inst_17923 & (64));
var inst_17925 = inst_17918.cljs$core$ISeq$;
var inst_17926 = (cljs.core.PROTOCOL_SENTINEL === inst_17925);
var inst_17927 = (inst_17924) || (inst_17926);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_17927)){
var statearr_18051_18103 = state_18016__$1;
(statearr_18051_18103[(1)] = (5));

} else {
var statearr_18052_18104 = state_18016__$1;
(statearr_18052_18104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (23))){
var inst_17975 = (state_18016[(14)]);
var inst_17981 = (inst_17975 == null);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_17981)){
var statearr_18053_18105 = state_18016__$1;
(statearr_18053_18105[(1)] = (26));

} else {
var statearr_18054_18106 = state_18016__$1;
(statearr_18054_18106[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (35))){
var inst_18001 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_18001)){
var statearr_18055_18107 = state_18016__$1;
(statearr_18055_18107[(1)] = (36));

} else {
var statearr_18056_18108 = state_18016__$1;
(statearr_18056_18108[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (19))){
var inst_17943 = (state_18016[(7)]);
var inst_17963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17943);
var state_18016__$1 = state_18016;
var statearr_18057_18109 = state_18016__$1;
(statearr_18057_18109[(2)] = inst_17963);

(statearr_18057_18109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (11))){
var inst_17943 = (state_18016[(7)]);
var inst_17947 = (inst_17943 == null);
var inst_17948 = cljs.core.not.call(null,inst_17947);
var state_18016__$1 = state_18016;
if(inst_17948){
var statearr_18058_18110 = state_18016__$1;
(statearr_18058_18110[(1)] = (13));

} else {
var statearr_18059_18111 = state_18016__$1;
(statearr_18059_18111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (9))){
var inst_17918 = (state_18016[(8)]);
var state_18016__$1 = state_18016;
var statearr_18060_18112 = state_18016__$1;
(statearr_18060_18112[(2)] = inst_17918);

(statearr_18060_18112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (5))){
var state_18016__$1 = state_18016;
var statearr_18061_18113 = state_18016__$1;
(statearr_18061_18113[(2)] = true);

(statearr_18061_18113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (14))){
var state_18016__$1 = state_18016;
var statearr_18062_18114 = state_18016__$1;
(statearr_18062_18114[(2)] = false);

(statearr_18062_18114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (26))){
var inst_17976 = (state_18016[(10)]);
var inst_17983 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17976);
var state_18016__$1 = state_18016;
var statearr_18063_18115 = state_18016__$1;
(statearr_18063_18115[(2)] = inst_17983);

(statearr_18063_18115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (16))){
var state_18016__$1 = state_18016;
var statearr_18064_18116 = state_18016__$1;
(statearr_18064_18116[(2)] = true);

(statearr_18064_18116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (38))){
var inst_18006 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18065_18117 = state_18016__$1;
(statearr_18065_18117[(2)] = inst_18006);

(statearr_18065_18117[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (30))){
var inst_17968 = (state_18016[(13)]);
var inst_17976 = (state_18016[(10)]);
var inst_17967 = (state_18016[(11)]);
var inst_17993 = cljs.core.empty_QMARK_.call(null,inst_17967);
var inst_17994 = inst_17968.call(null,inst_17976);
var inst_17995 = cljs.core.not.call(null,inst_17994);
var inst_17996 = (inst_17993) && (inst_17995);
var state_18016__$1 = state_18016;
var statearr_18066_18118 = state_18016__$1;
(statearr_18066_18118[(2)] = inst_17996);

(statearr_18066_18118[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (10))){
var inst_17918 = (state_18016[(8)]);
var inst_17939 = (state_18016[(2)]);
var inst_17940 = cljs.core.get.call(null,inst_17939,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17941 = cljs.core.get.call(null,inst_17939,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17942 = cljs.core.get.call(null,inst_17939,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17943 = inst_17918;
var state_18016__$1 = (function (){var statearr_18067 = state_18016;
(statearr_18067[(16)] = inst_17941);

(statearr_18067[(7)] = inst_17943);

(statearr_18067[(17)] = inst_17940);

(statearr_18067[(18)] = inst_17942);

return statearr_18067;
})();
var statearr_18068_18119 = state_18016__$1;
(statearr_18068_18119[(2)] = null);

(statearr_18068_18119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (18))){
var inst_17958 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18069_18120 = state_18016__$1;
(statearr_18069_18120[(2)] = inst_17958);

(statearr_18069_18120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (37))){
var state_18016__$1 = state_18016;
var statearr_18070_18121 = state_18016__$1;
(statearr_18070_18121[(2)] = null);

(statearr_18070_18121[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (8))){
var inst_17918 = (state_18016[(8)]);
var inst_17936 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17918);
var state_18016__$1 = state_18016;
var statearr_18071_18122 = state_18016__$1;
(statearr_18071_18122[(2)] = inst_17936);

(statearr_18071_18122[(1)] = (10));


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
});})(c__17017__auto___18076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16927__auto__,c__17017__auto___18076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16928__auto__ = null;
var cljs$core$async$mix_$_state_machine__16928__auto____0 = (function (){
var statearr_18072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18072[(0)] = cljs$core$async$mix_$_state_machine__16928__auto__);

(statearr_18072[(1)] = (1));

return statearr_18072;
});
var cljs$core$async$mix_$_state_machine__16928__auto____1 = (function (state_18016){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18073){if((e18073 instanceof Object)){
var ex__16931__auto__ = e18073;
var statearr_18074_18123 = state_18016;
(statearr_18074_18123[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18124 = state_18016;
state_18016 = G__18124;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16928__auto__ = function(state_18016){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16928__auto____1.call(this,state_18016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16928__auto____0;
cljs$core$async$mix_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16928__auto____1;
return cljs$core$async$mix_$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17019__auto__ = (function (){var statearr_18075 = f__17018__auto__.call(null);
(statearr_18075[(6)] = c__17017__auto___18076);

return statearr_18075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18076,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18126 = arguments.length;
switch (G__18126) {
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
var G__18130 = arguments.length;
switch (G__18130) {
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
return (function (p1__18128_SHARP_){
if(cljs.core.truth_(p1__18128_SHARP_.call(null,topic))){
return p1__18128_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18128_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18131 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18132){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18132 = meta18132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18133,meta18132__$1){
var self__ = this;
var _18133__$1 = this;
return (new cljs.core.async.t_cljs$core$async18131(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18132__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18133){
var self__ = this;
var _18133__$1 = this;
return self__.meta18132;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18131.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18131.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18132","meta18132",-830940449,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18131";

cljs.core.async.t_cljs$core$async18131.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18131");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18131 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18132){
return (new cljs.core.async.t_cljs$core$async18131(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18132));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18131(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17017__auto___18251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18251,mults,ensure_mult,p){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18251,mults,ensure_mult,p){
return (function (state_18205){
var state_val_18206 = (state_18205[(1)]);
if((state_val_18206 === (7))){
var inst_18201 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18207_18252 = state_18205__$1;
(statearr_18207_18252[(2)] = inst_18201);

(statearr_18207_18252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (20))){
var state_18205__$1 = state_18205;
var statearr_18208_18253 = state_18205__$1;
(statearr_18208_18253[(2)] = null);

(statearr_18208_18253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (1))){
var state_18205__$1 = state_18205;
var statearr_18209_18254 = state_18205__$1;
(statearr_18209_18254[(2)] = null);

(statearr_18209_18254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (24))){
var inst_18184 = (state_18205[(7)]);
var inst_18193 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18184);
var state_18205__$1 = state_18205;
var statearr_18210_18255 = state_18205__$1;
(statearr_18210_18255[(2)] = inst_18193);

(statearr_18210_18255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (4))){
var inst_18136 = (state_18205[(8)]);
var inst_18136__$1 = (state_18205[(2)]);
var inst_18137 = (inst_18136__$1 == null);
var state_18205__$1 = (function (){var statearr_18211 = state_18205;
(statearr_18211[(8)] = inst_18136__$1);

return statearr_18211;
})();
if(cljs.core.truth_(inst_18137)){
var statearr_18212_18256 = state_18205__$1;
(statearr_18212_18256[(1)] = (5));

} else {
var statearr_18213_18257 = state_18205__$1;
(statearr_18213_18257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (15))){
var inst_18178 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18214_18258 = state_18205__$1;
(statearr_18214_18258[(2)] = inst_18178);

(statearr_18214_18258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (21))){
var inst_18198 = (state_18205[(2)]);
var state_18205__$1 = (function (){var statearr_18215 = state_18205;
(statearr_18215[(9)] = inst_18198);

return statearr_18215;
})();
var statearr_18216_18259 = state_18205__$1;
(statearr_18216_18259[(2)] = null);

(statearr_18216_18259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (13))){
var inst_18160 = (state_18205[(10)]);
var inst_18162 = cljs.core.chunked_seq_QMARK_.call(null,inst_18160);
var state_18205__$1 = state_18205;
if(inst_18162){
var statearr_18217_18260 = state_18205__$1;
(statearr_18217_18260[(1)] = (16));

} else {
var statearr_18218_18261 = state_18205__$1;
(statearr_18218_18261[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (22))){
var inst_18190 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
if(cljs.core.truth_(inst_18190)){
var statearr_18219_18262 = state_18205__$1;
(statearr_18219_18262[(1)] = (23));

} else {
var statearr_18220_18263 = state_18205__$1;
(statearr_18220_18263[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (6))){
var inst_18186 = (state_18205[(11)]);
var inst_18136 = (state_18205[(8)]);
var inst_18184 = (state_18205[(7)]);
var inst_18184__$1 = topic_fn.call(null,inst_18136);
var inst_18185 = cljs.core.deref.call(null,mults);
var inst_18186__$1 = cljs.core.get.call(null,inst_18185,inst_18184__$1);
var state_18205__$1 = (function (){var statearr_18221 = state_18205;
(statearr_18221[(11)] = inst_18186__$1);

(statearr_18221[(7)] = inst_18184__$1);

return statearr_18221;
})();
if(cljs.core.truth_(inst_18186__$1)){
var statearr_18222_18264 = state_18205__$1;
(statearr_18222_18264[(1)] = (19));

} else {
var statearr_18223_18265 = state_18205__$1;
(statearr_18223_18265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (25))){
var inst_18195 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18224_18266 = state_18205__$1;
(statearr_18224_18266[(2)] = inst_18195);

(statearr_18224_18266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (17))){
var inst_18160 = (state_18205[(10)]);
var inst_18169 = cljs.core.first.call(null,inst_18160);
var inst_18170 = cljs.core.async.muxch_STAR_.call(null,inst_18169);
var inst_18171 = cljs.core.async.close_BANG_.call(null,inst_18170);
var inst_18172 = cljs.core.next.call(null,inst_18160);
var inst_18146 = inst_18172;
var inst_18147 = null;
var inst_18148 = (0);
var inst_18149 = (0);
var state_18205__$1 = (function (){var statearr_18225 = state_18205;
(statearr_18225[(12)] = inst_18171);

(statearr_18225[(13)] = inst_18148);

(statearr_18225[(14)] = inst_18146);

(statearr_18225[(15)] = inst_18147);

(statearr_18225[(16)] = inst_18149);

return statearr_18225;
})();
var statearr_18226_18267 = state_18205__$1;
(statearr_18226_18267[(2)] = null);

(statearr_18226_18267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (3))){
var inst_18203 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18205__$1,inst_18203);
} else {
if((state_val_18206 === (12))){
var inst_18180 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18227_18268 = state_18205__$1;
(statearr_18227_18268[(2)] = inst_18180);

(statearr_18227_18268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (2))){
var state_18205__$1 = state_18205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18205__$1,(4),ch);
} else {
if((state_val_18206 === (23))){
var state_18205__$1 = state_18205;
var statearr_18228_18269 = state_18205__$1;
(statearr_18228_18269[(2)] = null);

(statearr_18228_18269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (19))){
var inst_18186 = (state_18205[(11)]);
var inst_18136 = (state_18205[(8)]);
var inst_18188 = cljs.core.async.muxch_STAR_.call(null,inst_18186);
var state_18205__$1 = state_18205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18205__$1,(22),inst_18188,inst_18136);
} else {
if((state_val_18206 === (11))){
var inst_18146 = (state_18205[(14)]);
var inst_18160 = (state_18205[(10)]);
var inst_18160__$1 = cljs.core.seq.call(null,inst_18146);
var state_18205__$1 = (function (){var statearr_18229 = state_18205;
(statearr_18229[(10)] = inst_18160__$1);

return statearr_18229;
})();
if(inst_18160__$1){
var statearr_18230_18270 = state_18205__$1;
(statearr_18230_18270[(1)] = (13));

} else {
var statearr_18231_18271 = state_18205__$1;
(statearr_18231_18271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (9))){
var inst_18182 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18232_18272 = state_18205__$1;
(statearr_18232_18272[(2)] = inst_18182);

(statearr_18232_18272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (5))){
var inst_18143 = cljs.core.deref.call(null,mults);
var inst_18144 = cljs.core.vals.call(null,inst_18143);
var inst_18145 = cljs.core.seq.call(null,inst_18144);
var inst_18146 = inst_18145;
var inst_18147 = null;
var inst_18148 = (0);
var inst_18149 = (0);
var state_18205__$1 = (function (){var statearr_18233 = state_18205;
(statearr_18233[(13)] = inst_18148);

(statearr_18233[(14)] = inst_18146);

(statearr_18233[(15)] = inst_18147);

(statearr_18233[(16)] = inst_18149);

return statearr_18233;
})();
var statearr_18234_18273 = state_18205__$1;
(statearr_18234_18273[(2)] = null);

(statearr_18234_18273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (14))){
var state_18205__$1 = state_18205;
var statearr_18238_18274 = state_18205__$1;
(statearr_18238_18274[(2)] = null);

(statearr_18238_18274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (16))){
var inst_18160 = (state_18205[(10)]);
var inst_18164 = cljs.core.chunk_first.call(null,inst_18160);
var inst_18165 = cljs.core.chunk_rest.call(null,inst_18160);
var inst_18166 = cljs.core.count.call(null,inst_18164);
var inst_18146 = inst_18165;
var inst_18147 = inst_18164;
var inst_18148 = inst_18166;
var inst_18149 = (0);
var state_18205__$1 = (function (){var statearr_18239 = state_18205;
(statearr_18239[(13)] = inst_18148);

(statearr_18239[(14)] = inst_18146);

(statearr_18239[(15)] = inst_18147);

(statearr_18239[(16)] = inst_18149);

return statearr_18239;
})();
var statearr_18240_18275 = state_18205__$1;
(statearr_18240_18275[(2)] = null);

(statearr_18240_18275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (10))){
var inst_18148 = (state_18205[(13)]);
var inst_18146 = (state_18205[(14)]);
var inst_18147 = (state_18205[(15)]);
var inst_18149 = (state_18205[(16)]);
var inst_18154 = cljs.core._nth.call(null,inst_18147,inst_18149);
var inst_18155 = cljs.core.async.muxch_STAR_.call(null,inst_18154);
var inst_18156 = cljs.core.async.close_BANG_.call(null,inst_18155);
var inst_18157 = (inst_18149 + (1));
var tmp18235 = inst_18148;
var tmp18236 = inst_18146;
var tmp18237 = inst_18147;
var inst_18146__$1 = tmp18236;
var inst_18147__$1 = tmp18237;
var inst_18148__$1 = tmp18235;
var inst_18149__$1 = inst_18157;
var state_18205__$1 = (function (){var statearr_18241 = state_18205;
(statearr_18241[(17)] = inst_18156);

(statearr_18241[(13)] = inst_18148__$1);

(statearr_18241[(14)] = inst_18146__$1);

(statearr_18241[(15)] = inst_18147__$1);

(statearr_18241[(16)] = inst_18149__$1);

return statearr_18241;
})();
var statearr_18242_18276 = state_18205__$1;
(statearr_18242_18276[(2)] = null);

(statearr_18242_18276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (18))){
var inst_18175 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18243_18277 = state_18205__$1;
(statearr_18243_18277[(2)] = inst_18175);

(statearr_18243_18277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18206 === (8))){
var inst_18148 = (state_18205[(13)]);
var inst_18149 = (state_18205[(16)]);
var inst_18151 = (inst_18149 < inst_18148);
var inst_18152 = inst_18151;
var state_18205__$1 = state_18205;
if(cljs.core.truth_(inst_18152)){
var statearr_18244_18278 = state_18205__$1;
(statearr_18244_18278[(1)] = (10));

} else {
var statearr_18245_18279 = state_18205__$1;
(statearr_18245_18279[(1)] = (11));

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
});})(c__17017__auto___18251,mults,ensure_mult,p))
;
return ((function (switch__16927__auto__,c__17017__auto___18251,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18246[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18246[(1)] = (1));

return statearr_18246;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18205){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18247){if((e18247 instanceof Object)){
var ex__16931__auto__ = e18247;
var statearr_18248_18280 = state_18205;
(statearr_18248_18280[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18281 = state_18205;
state_18205 = G__18281;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18251,mults,ensure_mult,p))
})();
var state__17019__auto__ = (function (){var statearr_18249 = f__17018__auto__.call(null);
(statearr_18249[(6)] = c__17017__auto___18251);

return statearr_18249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18251,mults,ensure_mult,p))
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
var G__18283 = arguments.length;
switch (G__18283) {
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
var G__18286 = arguments.length;
switch (G__18286) {
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
var G__18289 = arguments.length;
switch (G__18289) {
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
var c__17017__auto___18356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18328){
var state_val_18329 = (state_18328[(1)]);
if((state_val_18329 === (7))){
var state_18328__$1 = state_18328;
var statearr_18330_18357 = state_18328__$1;
(statearr_18330_18357[(2)] = null);

(statearr_18330_18357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (1))){
var state_18328__$1 = state_18328;
var statearr_18331_18358 = state_18328__$1;
(statearr_18331_18358[(2)] = null);

(statearr_18331_18358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (4))){
var inst_18292 = (state_18328[(7)]);
var inst_18294 = (inst_18292 < cnt);
var state_18328__$1 = state_18328;
if(cljs.core.truth_(inst_18294)){
var statearr_18332_18359 = state_18328__$1;
(statearr_18332_18359[(1)] = (6));

} else {
var statearr_18333_18360 = state_18328__$1;
(statearr_18333_18360[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (15))){
var inst_18324 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
var statearr_18334_18361 = state_18328__$1;
(statearr_18334_18361[(2)] = inst_18324);

(statearr_18334_18361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (13))){
var inst_18317 = cljs.core.async.close_BANG_.call(null,out);
var state_18328__$1 = state_18328;
var statearr_18335_18362 = state_18328__$1;
(statearr_18335_18362[(2)] = inst_18317);

(statearr_18335_18362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (6))){
var state_18328__$1 = state_18328;
var statearr_18336_18363 = state_18328__$1;
(statearr_18336_18363[(2)] = null);

(statearr_18336_18363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (3))){
var inst_18326 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18328__$1,inst_18326);
} else {
if((state_val_18329 === (12))){
var inst_18314 = (state_18328[(8)]);
var inst_18314__$1 = (state_18328[(2)]);
var inst_18315 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18314__$1);
var state_18328__$1 = (function (){var statearr_18337 = state_18328;
(statearr_18337[(8)] = inst_18314__$1);

return statearr_18337;
})();
if(cljs.core.truth_(inst_18315)){
var statearr_18338_18364 = state_18328__$1;
(statearr_18338_18364[(1)] = (13));

} else {
var statearr_18339_18365 = state_18328__$1;
(statearr_18339_18365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (2))){
var inst_18291 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18292 = (0);
var state_18328__$1 = (function (){var statearr_18340 = state_18328;
(statearr_18340[(7)] = inst_18292);

(statearr_18340[(9)] = inst_18291);

return statearr_18340;
})();
var statearr_18341_18366 = state_18328__$1;
(statearr_18341_18366[(2)] = null);

(statearr_18341_18366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (11))){
var inst_18292 = (state_18328[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18328,(10),Object,null,(9));
var inst_18301 = chs__$1.call(null,inst_18292);
var inst_18302 = done.call(null,inst_18292);
var inst_18303 = cljs.core.async.take_BANG_.call(null,inst_18301,inst_18302);
var state_18328__$1 = state_18328;
var statearr_18342_18367 = state_18328__$1;
(statearr_18342_18367[(2)] = inst_18303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (9))){
var inst_18292 = (state_18328[(7)]);
var inst_18305 = (state_18328[(2)]);
var inst_18306 = (inst_18292 + (1));
var inst_18292__$1 = inst_18306;
var state_18328__$1 = (function (){var statearr_18343 = state_18328;
(statearr_18343[(10)] = inst_18305);

(statearr_18343[(7)] = inst_18292__$1);

return statearr_18343;
})();
var statearr_18344_18368 = state_18328__$1;
(statearr_18344_18368[(2)] = null);

(statearr_18344_18368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (5))){
var inst_18312 = (state_18328[(2)]);
var state_18328__$1 = (function (){var statearr_18345 = state_18328;
(statearr_18345[(11)] = inst_18312);

return statearr_18345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18328__$1,(12),dchan);
} else {
if((state_val_18329 === (14))){
var inst_18314 = (state_18328[(8)]);
var inst_18319 = cljs.core.apply.call(null,f,inst_18314);
var state_18328__$1 = state_18328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18328__$1,(16),out,inst_18319);
} else {
if((state_val_18329 === (16))){
var inst_18321 = (state_18328[(2)]);
var state_18328__$1 = (function (){var statearr_18346 = state_18328;
(statearr_18346[(12)] = inst_18321);

return statearr_18346;
})();
var statearr_18347_18369 = state_18328__$1;
(statearr_18347_18369[(2)] = null);

(statearr_18347_18369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (10))){
var inst_18296 = (state_18328[(2)]);
var inst_18297 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18328__$1 = (function (){var statearr_18348 = state_18328;
(statearr_18348[(13)] = inst_18296);

return statearr_18348;
})();
var statearr_18349_18370 = state_18328__$1;
(statearr_18349_18370[(2)] = inst_18297);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18329 === (8))){
var inst_18310 = (state_18328[(2)]);
var state_18328__$1 = state_18328;
var statearr_18350_18371 = state_18328__$1;
(statearr_18350_18371[(2)] = inst_18310);

(statearr_18350_18371[(1)] = (5));


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
});})(c__17017__auto___18356,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16927__auto__,c__17017__auto___18356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18351[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18351[(1)] = (1));

return statearr_18351;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18328){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18352){if((e18352 instanceof Object)){
var ex__16931__auto__ = e18352;
var statearr_18353_18372 = state_18328;
(statearr_18353_18372[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18373 = state_18328;
state_18328 = G__18373;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18356,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17019__auto__ = (function (){var statearr_18354 = f__17018__auto__.call(null);
(statearr_18354[(6)] = c__17017__auto___18356);

return statearr_18354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18356,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18376 = arguments.length;
switch (G__18376) {
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
var c__17017__auto___18430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18430,out){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18430,out){
return (function (state_18408){
var state_val_18409 = (state_18408[(1)]);
if((state_val_18409 === (7))){
var inst_18387 = (state_18408[(7)]);
var inst_18388 = (state_18408[(8)]);
var inst_18387__$1 = (state_18408[(2)]);
var inst_18388__$1 = cljs.core.nth.call(null,inst_18387__$1,(0),null);
var inst_18389 = cljs.core.nth.call(null,inst_18387__$1,(1),null);
var inst_18390 = (inst_18388__$1 == null);
var state_18408__$1 = (function (){var statearr_18410 = state_18408;
(statearr_18410[(9)] = inst_18389);

(statearr_18410[(7)] = inst_18387__$1);

(statearr_18410[(8)] = inst_18388__$1);

return statearr_18410;
})();
if(cljs.core.truth_(inst_18390)){
var statearr_18411_18431 = state_18408__$1;
(statearr_18411_18431[(1)] = (8));

} else {
var statearr_18412_18432 = state_18408__$1;
(statearr_18412_18432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (1))){
var inst_18377 = cljs.core.vec.call(null,chs);
var inst_18378 = inst_18377;
var state_18408__$1 = (function (){var statearr_18413 = state_18408;
(statearr_18413[(10)] = inst_18378);

return statearr_18413;
})();
var statearr_18414_18433 = state_18408__$1;
(statearr_18414_18433[(2)] = null);

(statearr_18414_18433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (4))){
var inst_18378 = (state_18408[(10)]);
var state_18408__$1 = state_18408;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18408__$1,(7),inst_18378);
} else {
if((state_val_18409 === (6))){
var inst_18404 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18415_18434 = state_18408__$1;
(statearr_18415_18434[(2)] = inst_18404);

(statearr_18415_18434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (3))){
var inst_18406 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18408__$1,inst_18406);
} else {
if((state_val_18409 === (2))){
var inst_18378 = (state_18408[(10)]);
var inst_18380 = cljs.core.count.call(null,inst_18378);
var inst_18381 = (inst_18380 > (0));
var state_18408__$1 = state_18408;
if(cljs.core.truth_(inst_18381)){
var statearr_18417_18435 = state_18408__$1;
(statearr_18417_18435[(1)] = (4));

} else {
var statearr_18418_18436 = state_18408__$1;
(statearr_18418_18436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (11))){
var inst_18378 = (state_18408[(10)]);
var inst_18397 = (state_18408[(2)]);
var tmp18416 = inst_18378;
var inst_18378__$1 = tmp18416;
var state_18408__$1 = (function (){var statearr_18419 = state_18408;
(statearr_18419[(11)] = inst_18397);

(statearr_18419[(10)] = inst_18378__$1);

return statearr_18419;
})();
var statearr_18420_18437 = state_18408__$1;
(statearr_18420_18437[(2)] = null);

(statearr_18420_18437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (9))){
var inst_18388 = (state_18408[(8)]);
var state_18408__$1 = state_18408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18408__$1,(11),out,inst_18388);
} else {
if((state_val_18409 === (5))){
var inst_18402 = cljs.core.async.close_BANG_.call(null,out);
var state_18408__$1 = state_18408;
var statearr_18421_18438 = state_18408__$1;
(statearr_18421_18438[(2)] = inst_18402);

(statearr_18421_18438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (10))){
var inst_18400 = (state_18408[(2)]);
var state_18408__$1 = state_18408;
var statearr_18422_18439 = state_18408__$1;
(statearr_18422_18439[(2)] = inst_18400);

(statearr_18422_18439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18409 === (8))){
var inst_18389 = (state_18408[(9)]);
var inst_18387 = (state_18408[(7)]);
var inst_18388 = (state_18408[(8)]);
var inst_18378 = (state_18408[(10)]);
var inst_18392 = (function (){var cs = inst_18378;
var vec__18383 = inst_18387;
var v = inst_18388;
var c = inst_18389;
return ((function (cs,vec__18383,v,c,inst_18389,inst_18387,inst_18388,inst_18378,state_val_18409,c__17017__auto___18430,out){
return (function (p1__18374_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18374_SHARP_);
});
;})(cs,vec__18383,v,c,inst_18389,inst_18387,inst_18388,inst_18378,state_val_18409,c__17017__auto___18430,out))
})();
var inst_18393 = cljs.core.filterv.call(null,inst_18392,inst_18378);
var inst_18378__$1 = inst_18393;
var state_18408__$1 = (function (){var statearr_18423 = state_18408;
(statearr_18423[(10)] = inst_18378__$1);

return statearr_18423;
})();
var statearr_18424_18440 = state_18408__$1;
(statearr_18424_18440[(2)] = null);

(statearr_18424_18440[(1)] = (2));


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
});})(c__17017__auto___18430,out))
;
return ((function (switch__16927__auto__,c__17017__auto___18430,out){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18425[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18425[(1)] = (1));

return statearr_18425;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18408){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18426){if((e18426 instanceof Object)){
var ex__16931__auto__ = e18426;
var statearr_18427_18441 = state_18408;
(statearr_18427_18441[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18442 = state_18408;
state_18408 = G__18442;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18430,out))
})();
var state__17019__auto__ = (function (){var statearr_18428 = f__17018__auto__.call(null);
(statearr_18428[(6)] = c__17017__auto___18430);

return statearr_18428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18430,out))
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
var G__18444 = arguments.length;
switch (G__18444) {
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
var c__17017__auto___18489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18489,out){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18489,out){
return (function (state_18468){
var state_val_18469 = (state_18468[(1)]);
if((state_val_18469 === (7))){
var inst_18450 = (state_18468[(7)]);
var inst_18450__$1 = (state_18468[(2)]);
var inst_18451 = (inst_18450__$1 == null);
var inst_18452 = cljs.core.not.call(null,inst_18451);
var state_18468__$1 = (function (){var statearr_18470 = state_18468;
(statearr_18470[(7)] = inst_18450__$1);

return statearr_18470;
})();
if(inst_18452){
var statearr_18471_18490 = state_18468__$1;
(statearr_18471_18490[(1)] = (8));

} else {
var statearr_18472_18491 = state_18468__$1;
(statearr_18472_18491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (1))){
var inst_18445 = (0);
var state_18468__$1 = (function (){var statearr_18473 = state_18468;
(statearr_18473[(8)] = inst_18445);

return statearr_18473;
})();
var statearr_18474_18492 = state_18468__$1;
(statearr_18474_18492[(2)] = null);

(statearr_18474_18492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (4))){
var state_18468__$1 = state_18468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18468__$1,(7),ch);
} else {
if((state_val_18469 === (6))){
var inst_18463 = (state_18468[(2)]);
var state_18468__$1 = state_18468;
var statearr_18475_18493 = state_18468__$1;
(statearr_18475_18493[(2)] = inst_18463);

(statearr_18475_18493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (3))){
var inst_18465 = (state_18468[(2)]);
var inst_18466 = cljs.core.async.close_BANG_.call(null,out);
var state_18468__$1 = (function (){var statearr_18476 = state_18468;
(statearr_18476[(9)] = inst_18465);

return statearr_18476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18468__$1,inst_18466);
} else {
if((state_val_18469 === (2))){
var inst_18445 = (state_18468[(8)]);
var inst_18447 = (inst_18445 < n);
var state_18468__$1 = state_18468;
if(cljs.core.truth_(inst_18447)){
var statearr_18477_18494 = state_18468__$1;
(statearr_18477_18494[(1)] = (4));

} else {
var statearr_18478_18495 = state_18468__$1;
(statearr_18478_18495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (11))){
var inst_18445 = (state_18468[(8)]);
var inst_18455 = (state_18468[(2)]);
var inst_18456 = (inst_18445 + (1));
var inst_18445__$1 = inst_18456;
var state_18468__$1 = (function (){var statearr_18479 = state_18468;
(statearr_18479[(8)] = inst_18445__$1);

(statearr_18479[(10)] = inst_18455);

return statearr_18479;
})();
var statearr_18480_18496 = state_18468__$1;
(statearr_18480_18496[(2)] = null);

(statearr_18480_18496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (9))){
var state_18468__$1 = state_18468;
var statearr_18481_18497 = state_18468__$1;
(statearr_18481_18497[(2)] = null);

(statearr_18481_18497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (5))){
var state_18468__$1 = state_18468;
var statearr_18482_18498 = state_18468__$1;
(statearr_18482_18498[(2)] = null);

(statearr_18482_18498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (10))){
var inst_18460 = (state_18468[(2)]);
var state_18468__$1 = state_18468;
var statearr_18483_18499 = state_18468__$1;
(statearr_18483_18499[(2)] = inst_18460);

(statearr_18483_18499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18469 === (8))){
var inst_18450 = (state_18468[(7)]);
var state_18468__$1 = state_18468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18468__$1,(11),out,inst_18450);
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
});})(c__17017__auto___18489,out))
;
return ((function (switch__16927__auto__,c__17017__auto___18489,out){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18484[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18484[(1)] = (1));

return statearr_18484;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18468){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18485){if((e18485 instanceof Object)){
var ex__16931__auto__ = e18485;
var statearr_18486_18500 = state_18468;
(statearr_18486_18500[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18501 = state_18468;
state_18468 = G__18501;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18489,out))
})();
var state__17019__auto__ = (function (){var statearr_18487 = f__17018__auto__.call(null);
(statearr_18487[(6)] = c__17017__auto___18489);

return statearr_18487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18489,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18503 = (function (f,ch,meta18504){
this.f = f;
this.ch = ch;
this.meta18504 = meta18504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18505,meta18504__$1){
var self__ = this;
var _18505__$1 = this;
return (new cljs.core.async.t_cljs$core$async18503(self__.f,self__.ch,meta18504__$1));
});

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18505){
var self__ = this;
var _18505__$1 = this;
return self__.meta18504;
});

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18506 = (function (f,ch,meta18504,_,fn1,meta18507){
this.f = f;
this.ch = ch;
this.meta18504 = meta18504;
this._ = _;
this.fn1 = fn1;
this.meta18507 = meta18507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18508,meta18507__$1){
var self__ = this;
var _18508__$1 = this;
return (new cljs.core.async.t_cljs$core$async18506(self__.f,self__.ch,self__.meta18504,self__._,self__.fn1,meta18507__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18508){
var self__ = this;
var _18508__$1 = this;
return self__.meta18507;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18502_SHARP_){
return f1.call(null,(((p1__18502_SHARP_ == null))?null:self__.f.call(null,p1__18502_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18506.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18504","meta18504",-1505478915,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18503","cljs.core.async/t_cljs$core$async18503",-715302584,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18507","meta18507",-1527344614,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18506";

cljs.core.async.t_cljs$core$async18506.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18506");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18506 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18506(f__$1,ch__$1,meta18504__$1,___$2,fn1__$1,meta18507){
return (new cljs.core.async.t_cljs$core$async18506(f__$1,ch__$1,meta18504__$1,___$2,fn1__$1,meta18507));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18506(self__.f,self__.ch,self__.meta18504,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18504","meta18504",-1505478915,null)], null);
});

cljs.core.async.t_cljs$core$async18503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18503";

cljs.core.async.t_cljs$core$async18503.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18503");
});

cljs.core.async.__GT_t_cljs$core$async18503 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18503(f__$1,ch__$1,meta18504){
return (new cljs.core.async.t_cljs$core$async18503(f__$1,ch__$1,meta18504));
});

}

return (new cljs.core.async.t_cljs$core$async18503(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18509 = (function (f,ch,meta18510){
this.f = f;
this.ch = ch;
this.meta18510 = meta18510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18511,meta18510__$1){
var self__ = this;
var _18511__$1 = this;
return (new cljs.core.async.t_cljs$core$async18509(self__.f,self__.ch,meta18510__$1));
});

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18511){
var self__ = this;
var _18511__$1 = this;
return self__.meta18510;
});

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18510","meta18510",2127276117,null)], null);
});

cljs.core.async.t_cljs$core$async18509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18509";

cljs.core.async.t_cljs$core$async18509.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18509");
});

cljs.core.async.__GT_t_cljs$core$async18509 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18509(f__$1,ch__$1,meta18510){
return (new cljs.core.async.t_cljs$core$async18509(f__$1,ch__$1,meta18510));
});

}

return (new cljs.core.async.t_cljs$core$async18509(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18512 = (function (p,ch,meta18513){
this.p = p;
this.ch = ch;
this.meta18513 = meta18513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18514,meta18513__$1){
var self__ = this;
var _18514__$1 = this;
return (new cljs.core.async.t_cljs$core$async18512(self__.p,self__.ch,meta18513__$1));
});

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18514){
var self__ = this;
var _18514__$1 = this;
return self__.meta18513;
});

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18513","meta18513",314885202,null)], null);
});

cljs.core.async.t_cljs$core$async18512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18512";

cljs.core.async.t_cljs$core$async18512.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.core.async/t_cljs$core$async18512");
});

cljs.core.async.__GT_t_cljs$core$async18512 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18512(p__$1,ch__$1,meta18513){
return (new cljs.core.async.t_cljs$core$async18512(p__$1,ch__$1,meta18513));
});

}

return (new cljs.core.async.t_cljs$core$async18512(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18516 = arguments.length;
switch (G__18516) {
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
var c__17017__auto___18556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18556,out){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18556,out){
return (function (state_18537){
var state_val_18538 = (state_18537[(1)]);
if((state_val_18538 === (7))){
var inst_18533 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18539_18557 = state_18537__$1;
(statearr_18539_18557[(2)] = inst_18533);

(statearr_18539_18557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (1))){
var state_18537__$1 = state_18537;
var statearr_18540_18558 = state_18537__$1;
(statearr_18540_18558[(2)] = null);

(statearr_18540_18558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (4))){
var inst_18519 = (state_18537[(7)]);
var inst_18519__$1 = (state_18537[(2)]);
var inst_18520 = (inst_18519__$1 == null);
var state_18537__$1 = (function (){var statearr_18541 = state_18537;
(statearr_18541[(7)] = inst_18519__$1);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18520)){
var statearr_18542_18559 = state_18537__$1;
(statearr_18542_18559[(1)] = (5));

} else {
var statearr_18543_18560 = state_18537__$1;
(statearr_18543_18560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (6))){
var inst_18519 = (state_18537[(7)]);
var inst_18524 = p.call(null,inst_18519);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18524)){
var statearr_18544_18561 = state_18537__$1;
(statearr_18544_18561[(1)] = (8));

} else {
var statearr_18545_18562 = state_18537__$1;
(statearr_18545_18562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (3))){
var inst_18535 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18537__$1,inst_18535);
} else {
if((state_val_18538 === (2))){
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18537__$1,(4),ch);
} else {
if((state_val_18538 === (11))){
var inst_18527 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18546_18563 = state_18537__$1;
(statearr_18546_18563[(2)] = inst_18527);

(statearr_18546_18563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (9))){
var state_18537__$1 = state_18537;
var statearr_18547_18564 = state_18537__$1;
(statearr_18547_18564[(2)] = null);

(statearr_18547_18564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (5))){
var inst_18522 = cljs.core.async.close_BANG_.call(null,out);
var state_18537__$1 = state_18537;
var statearr_18548_18565 = state_18537__$1;
(statearr_18548_18565[(2)] = inst_18522);

(statearr_18548_18565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (10))){
var inst_18530 = (state_18537[(2)]);
var state_18537__$1 = (function (){var statearr_18549 = state_18537;
(statearr_18549[(8)] = inst_18530);

return statearr_18549;
})();
var statearr_18550_18566 = state_18537__$1;
(statearr_18550_18566[(2)] = null);

(statearr_18550_18566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (8))){
var inst_18519 = (state_18537[(7)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18537__$1,(11),out,inst_18519);
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
});})(c__17017__auto___18556,out))
;
return ((function (switch__16927__auto__,c__17017__auto___18556,out){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18551 = [null,null,null,null,null,null,null,null,null];
(statearr_18551[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18551[(1)] = (1));

return statearr_18551;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18537){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18552){if((e18552 instanceof Object)){
var ex__16931__auto__ = e18552;
var statearr_18553_18567 = state_18537;
(statearr_18553_18567[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18568 = state_18537;
state_18537 = G__18568;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18556,out))
})();
var state__17019__auto__ = (function (){var statearr_18554 = f__17018__auto__.call(null);
(statearr_18554[(6)] = c__17017__auto___18556);

return statearr_18554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18556,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18570 = arguments.length;
switch (G__18570) {
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
var c__17017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto__){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto__){
return (function (state_18633){
var state_val_18634 = (state_18633[(1)]);
if((state_val_18634 === (7))){
var inst_18629 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
var statearr_18635_18673 = state_18633__$1;
(statearr_18635_18673[(2)] = inst_18629);

(statearr_18635_18673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (20))){
var inst_18599 = (state_18633[(7)]);
var inst_18610 = (state_18633[(2)]);
var inst_18611 = cljs.core.next.call(null,inst_18599);
var inst_18585 = inst_18611;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18633__$1 = (function (){var statearr_18636 = state_18633;
(statearr_18636[(8)] = inst_18586);

(statearr_18636[(9)] = inst_18588);

(statearr_18636[(10)] = inst_18610);

(statearr_18636[(11)] = inst_18585);

(statearr_18636[(12)] = inst_18587);

return statearr_18636;
})();
var statearr_18637_18674 = state_18633__$1;
(statearr_18637_18674[(2)] = null);

(statearr_18637_18674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (1))){
var state_18633__$1 = state_18633;
var statearr_18638_18675 = state_18633__$1;
(statearr_18638_18675[(2)] = null);

(statearr_18638_18675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (4))){
var inst_18574 = (state_18633[(13)]);
var inst_18574__$1 = (state_18633[(2)]);
var inst_18575 = (inst_18574__$1 == null);
var state_18633__$1 = (function (){var statearr_18639 = state_18633;
(statearr_18639[(13)] = inst_18574__$1);

return statearr_18639;
})();
if(cljs.core.truth_(inst_18575)){
var statearr_18640_18676 = state_18633__$1;
(statearr_18640_18676[(1)] = (5));

} else {
var statearr_18641_18677 = state_18633__$1;
(statearr_18641_18677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (15))){
var state_18633__$1 = state_18633;
var statearr_18645_18678 = state_18633__$1;
(statearr_18645_18678[(2)] = null);

(statearr_18645_18678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (21))){
var state_18633__$1 = state_18633;
var statearr_18646_18679 = state_18633__$1;
(statearr_18646_18679[(2)] = null);

(statearr_18646_18679[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (13))){
var inst_18586 = (state_18633[(8)]);
var inst_18588 = (state_18633[(9)]);
var inst_18585 = (state_18633[(11)]);
var inst_18587 = (state_18633[(12)]);
var inst_18595 = (state_18633[(2)]);
var inst_18596 = (inst_18588 + (1));
var tmp18642 = inst_18586;
var tmp18643 = inst_18585;
var tmp18644 = inst_18587;
var inst_18585__$1 = tmp18643;
var inst_18586__$1 = tmp18642;
var inst_18587__$1 = tmp18644;
var inst_18588__$1 = inst_18596;
var state_18633__$1 = (function (){var statearr_18647 = state_18633;
(statearr_18647[(8)] = inst_18586__$1);

(statearr_18647[(9)] = inst_18588__$1);

(statearr_18647[(14)] = inst_18595);

(statearr_18647[(11)] = inst_18585__$1);

(statearr_18647[(12)] = inst_18587__$1);

return statearr_18647;
})();
var statearr_18648_18680 = state_18633__$1;
(statearr_18648_18680[(2)] = null);

(statearr_18648_18680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (22))){
var state_18633__$1 = state_18633;
var statearr_18649_18681 = state_18633__$1;
(statearr_18649_18681[(2)] = null);

(statearr_18649_18681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (6))){
var inst_18574 = (state_18633[(13)]);
var inst_18583 = f.call(null,inst_18574);
var inst_18584 = cljs.core.seq.call(null,inst_18583);
var inst_18585 = inst_18584;
var inst_18586 = null;
var inst_18587 = (0);
var inst_18588 = (0);
var state_18633__$1 = (function (){var statearr_18650 = state_18633;
(statearr_18650[(8)] = inst_18586);

(statearr_18650[(9)] = inst_18588);

(statearr_18650[(11)] = inst_18585);

(statearr_18650[(12)] = inst_18587);

return statearr_18650;
})();
var statearr_18651_18682 = state_18633__$1;
(statearr_18651_18682[(2)] = null);

(statearr_18651_18682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (17))){
var inst_18599 = (state_18633[(7)]);
var inst_18603 = cljs.core.chunk_first.call(null,inst_18599);
var inst_18604 = cljs.core.chunk_rest.call(null,inst_18599);
var inst_18605 = cljs.core.count.call(null,inst_18603);
var inst_18585 = inst_18604;
var inst_18586 = inst_18603;
var inst_18587 = inst_18605;
var inst_18588 = (0);
var state_18633__$1 = (function (){var statearr_18652 = state_18633;
(statearr_18652[(8)] = inst_18586);

(statearr_18652[(9)] = inst_18588);

(statearr_18652[(11)] = inst_18585);

(statearr_18652[(12)] = inst_18587);

return statearr_18652;
})();
var statearr_18653_18683 = state_18633__$1;
(statearr_18653_18683[(2)] = null);

(statearr_18653_18683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (3))){
var inst_18631 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18633__$1,inst_18631);
} else {
if((state_val_18634 === (12))){
var inst_18619 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
var statearr_18654_18684 = state_18633__$1;
(statearr_18654_18684[(2)] = inst_18619);

(statearr_18654_18684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (2))){
var state_18633__$1 = state_18633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18633__$1,(4),in$);
} else {
if((state_val_18634 === (23))){
var inst_18627 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
var statearr_18655_18685 = state_18633__$1;
(statearr_18655_18685[(2)] = inst_18627);

(statearr_18655_18685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (19))){
var inst_18614 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
var statearr_18656_18686 = state_18633__$1;
(statearr_18656_18686[(2)] = inst_18614);

(statearr_18656_18686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (11))){
var inst_18599 = (state_18633[(7)]);
var inst_18585 = (state_18633[(11)]);
var inst_18599__$1 = cljs.core.seq.call(null,inst_18585);
var state_18633__$1 = (function (){var statearr_18657 = state_18633;
(statearr_18657[(7)] = inst_18599__$1);

return statearr_18657;
})();
if(inst_18599__$1){
var statearr_18658_18687 = state_18633__$1;
(statearr_18658_18687[(1)] = (14));

} else {
var statearr_18659_18688 = state_18633__$1;
(statearr_18659_18688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (9))){
var inst_18621 = (state_18633[(2)]);
var inst_18622 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18633__$1 = (function (){var statearr_18660 = state_18633;
(statearr_18660[(15)] = inst_18621);

return statearr_18660;
})();
if(cljs.core.truth_(inst_18622)){
var statearr_18661_18689 = state_18633__$1;
(statearr_18661_18689[(1)] = (21));

} else {
var statearr_18662_18690 = state_18633__$1;
(statearr_18662_18690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (5))){
var inst_18577 = cljs.core.async.close_BANG_.call(null,out);
var state_18633__$1 = state_18633;
var statearr_18663_18691 = state_18633__$1;
(statearr_18663_18691[(2)] = inst_18577);

(statearr_18663_18691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (14))){
var inst_18599 = (state_18633[(7)]);
var inst_18601 = cljs.core.chunked_seq_QMARK_.call(null,inst_18599);
var state_18633__$1 = state_18633;
if(inst_18601){
var statearr_18664_18692 = state_18633__$1;
(statearr_18664_18692[(1)] = (17));

} else {
var statearr_18665_18693 = state_18633__$1;
(statearr_18665_18693[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (16))){
var inst_18617 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
var statearr_18666_18694 = state_18633__$1;
(statearr_18666_18694[(2)] = inst_18617);

(statearr_18666_18694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (10))){
var inst_18586 = (state_18633[(8)]);
var inst_18588 = (state_18633[(9)]);
var inst_18593 = cljs.core._nth.call(null,inst_18586,inst_18588);
var state_18633__$1 = state_18633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18633__$1,(13),out,inst_18593);
} else {
if((state_val_18634 === (18))){
var inst_18599 = (state_18633[(7)]);
var inst_18608 = cljs.core.first.call(null,inst_18599);
var state_18633__$1 = state_18633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18633__$1,(20),out,inst_18608);
} else {
if((state_val_18634 === (8))){
var inst_18588 = (state_18633[(9)]);
var inst_18587 = (state_18633[(12)]);
var inst_18590 = (inst_18588 < inst_18587);
var inst_18591 = inst_18590;
var state_18633__$1 = state_18633;
if(cljs.core.truth_(inst_18591)){
var statearr_18667_18695 = state_18633__$1;
(statearr_18667_18695[(1)] = (10));

} else {
var statearr_18668_18696 = state_18633__$1;
(statearr_18668_18696[(1)] = (11));

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
});})(c__17017__auto__))
;
return ((function (switch__16927__auto__,c__17017__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16928__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16928__auto____0 = (function (){
var statearr_18669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18669[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16928__auto__);

(statearr_18669[(1)] = (1));

return statearr_18669;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16928__auto____1 = (function (state_18633){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18670){if((e18670 instanceof Object)){
var ex__16931__auto__ = e18670;
var statearr_18671_18697 = state_18633;
(statearr_18671_18697[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18698 = state_18633;
state_18633 = G__18698;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16928__auto__ = function(state_18633){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16928__auto____1.call(this,state_18633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16928__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16928__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto__))
})();
var state__17019__auto__ = (function (){var statearr_18672 = f__17018__auto__.call(null);
(statearr_18672[(6)] = c__17017__auto__);

return statearr_18672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto__))
);

return c__17017__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18700 = arguments.length;
switch (G__18700) {
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
var G__18703 = arguments.length;
switch (G__18703) {
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
var G__18706 = arguments.length;
switch (G__18706) {
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
var c__17017__auto___18753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18753,out){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18753,out){
return (function (state_18730){
var state_val_18731 = (state_18730[(1)]);
if((state_val_18731 === (7))){
var inst_18725 = (state_18730[(2)]);
var state_18730__$1 = state_18730;
var statearr_18732_18754 = state_18730__$1;
(statearr_18732_18754[(2)] = inst_18725);

(statearr_18732_18754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (1))){
var inst_18707 = null;
var state_18730__$1 = (function (){var statearr_18733 = state_18730;
(statearr_18733[(7)] = inst_18707);

return statearr_18733;
})();
var statearr_18734_18755 = state_18730__$1;
(statearr_18734_18755[(2)] = null);

(statearr_18734_18755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (4))){
var inst_18710 = (state_18730[(8)]);
var inst_18710__$1 = (state_18730[(2)]);
var inst_18711 = (inst_18710__$1 == null);
var inst_18712 = cljs.core.not.call(null,inst_18711);
var state_18730__$1 = (function (){var statearr_18735 = state_18730;
(statearr_18735[(8)] = inst_18710__$1);

return statearr_18735;
})();
if(inst_18712){
var statearr_18736_18756 = state_18730__$1;
(statearr_18736_18756[(1)] = (5));

} else {
var statearr_18737_18757 = state_18730__$1;
(statearr_18737_18757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (6))){
var state_18730__$1 = state_18730;
var statearr_18738_18758 = state_18730__$1;
(statearr_18738_18758[(2)] = null);

(statearr_18738_18758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (3))){
var inst_18727 = (state_18730[(2)]);
var inst_18728 = cljs.core.async.close_BANG_.call(null,out);
var state_18730__$1 = (function (){var statearr_18739 = state_18730;
(statearr_18739[(9)] = inst_18727);

return statearr_18739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18730__$1,inst_18728);
} else {
if((state_val_18731 === (2))){
var state_18730__$1 = state_18730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18730__$1,(4),ch);
} else {
if((state_val_18731 === (11))){
var inst_18710 = (state_18730[(8)]);
var inst_18719 = (state_18730[(2)]);
var inst_18707 = inst_18710;
var state_18730__$1 = (function (){var statearr_18740 = state_18730;
(statearr_18740[(10)] = inst_18719);

(statearr_18740[(7)] = inst_18707);

return statearr_18740;
})();
var statearr_18741_18759 = state_18730__$1;
(statearr_18741_18759[(2)] = null);

(statearr_18741_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (9))){
var inst_18710 = (state_18730[(8)]);
var state_18730__$1 = state_18730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18730__$1,(11),out,inst_18710);
} else {
if((state_val_18731 === (5))){
var inst_18707 = (state_18730[(7)]);
var inst_18710 = (state_18730[(8)]);
var inst_18714 = cljs.core._EQ_.call(null,inst_18710,inst_18707);
var state_18730__$1 = state_18730;
if(inst_18714){
var statearr_18743_18760 = state_18730__$1;
(statearr_18743_18760[(1)] = (8));

} else {
var statearr_18744_18761 = state_18730__$1;
(statearr_18744_18761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (10))){
var inst_18722 = (state_18730[(2)]);
var state_18730__$1 = state_18730;
var statearr_18745_18762 = state_18730__$1;
(statearr_18745_18762[(2)] = inst_18722);

(statearr_18745_18762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (8))){
var inst_18707 = (state_18730[(7)]);
var tmp18742 = inst_18707;
var inst_18707__$1 = tmp18742;
var state_18730__$1 = (function (){var statearr_18746 = state_18730;
(statearr_18746[(7)] = inst_18707__$1);

return statearr_18746;
})();
var statearr_18747_18763 = state_18730__$1;
(statearr_18747_18763[(2)] = null);

(statearr_18747_18763[(1)] = (2));


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
});})(c__17017__auto___18753,out))
;
return ((function (switch__16927__auto__,c__17017__auto___18753,out){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18748[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18748[(1)] = (1));

return statearr_18748;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18730){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18749){if((e18749 instanceof Object)){
var ex__16931__auto__ = e18749;
var statearr_18750_18764 = state_18730;
(statearr_18750_18764[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18765 = state_18730;
state_18730 = G__18765;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18753,out))
})();
var state__17019__auto__ = (function (){var statearr_18751 = f__17018__auto__.call(null);
(statearr_18751[(6)] = c__17017__auto___18753);

return statearr_18751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18753,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18767 = arguments.length;
switch (G__18767) {
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
var c__17017__auto___18833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18833,out){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18833,out){
return (function (state_18805){
var state_val_18806 = (state_18805[(1)]);
if((state_val_18806 === (7))){
var inst_18801 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
var statearr_18807_18834 = state_18805__$1;
(statearr_18807_18834[(2)] = inst_18801);

(statearr_18807_18834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (1))){
var inst_18768 = (new Array(n));
var inst_18769 = inst_18768;
var inst_18770 = (0);
var state_18805__$1 = (function (){var statearr_18808 = state_18805;
(statearr_18808[(7)] = inst_18770);

(statearr_18808[(8)] = inst_18769);

return statearr_18808;
})();
var statearr_18809_18835 = state_18805__$1;
(statearr_18809_18835[(2)] = null);

(statearr_18809_18835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (4))){
var inst_18773 = (state_18805[(9)]);
var inst_18773__$1 = (state_18805[(2)]);
var inst_18774 = (inst_18773__$1 == null);
var inst_18775 = cljs.core.not.call(null,inst_18774);
var state_18805__$1 = (function (){var statearr_18810 = state_18805;
(statearr_18810[(9)] = inst_18773__$1);

return statearr_18810;
})();
if(inst_18775){
var statearr_18811_18836 = state_18805__$1;
(statearr_18811_18836[(1)] = (5));

} else {
var statearr_18812_18837 = state_18805__$1;
(statearr_18812_18837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (15))){
var inst_18795 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
var statearr_18813_18838 = state_18805__$1;
(statearr_18813_18838[(2)] = inst_18795);

(statearr_18813_18838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (13))){
var state_18805__$1 = state_18805;
var statearr_18814_18839 = state_18805__$1;
(statearr_18814_18839[(2)] = null);

(statearr_18814_18839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (6))){
var inst_18770 = (state_18805[(7)]);
var inst_18791 = (inst_18770 > (0));
var state_18805__$1 = state_18805;
if(cljs.core.truth_(inst_18791)){
var statearr_18815_18840 = state_18805__$1;
(statearr_18815_18840[(1)] = (12));

} else {
var statearr_18816_18841 = state_18805__$1;
(statearr_18816_18841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (3))){
var inst_18803 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18805__$1,inst_18803);
} else {
if((state_val_18806 === (12))){
var inst_18769 = (state_18805[(8)]);
var inst_18793 = cljs.core.vec.call(null,inst_18769);
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18805__$1,(15),out,inst_18793);
} else {
if((state_val_18806 === (2))){
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18805__$1,(4),ch);
} else {
if((state_val_18806 === (11))){
var inst_18785 = (state_18805[(2)]);
var inst_18786 = (new Array(n));
var inst_18769 = inst_18786;
var inst_18770 = (0);
var state_18805__$1 = (function (){var statearr_18817 = state_18805;
(statearr_18817[(7)] = inst_18770);

(statearr_18817[(10)] = inst_18785);

(statearr_18817[(8)] = inst_18769);

return statearr_18817;
})();
var statearr_18818_18842 = state_18805__$1;
(statearr_18818_18842[(2)] = null);

(statearr_18818_18842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (9))){
var inst_18769 = (state_18805[(8)]);
var inst_18783 = cljs.core.vec.call(null,inst_18769);
var state_18805__$1 = state_18805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18805__$1,(11),out,inst_18783);
} else {
if((state_val_18806 === (5))){
var inst_18773 = (state_18805[(9)]);
var inst_18770 = (state_18805[(7)]);
var inst_18769 = (state_18805[(8)]);
var inst_18778 = (state_18805[(11)]);
var inst_18777 = (inst_18769[inst_18770] = inst_18773);
var inst_18778__$1 = (inst_18770 + (1));
var inst_18779 = (inst_18778__$1 < n);
var state_18805__$1 = (function (){var statearr_18819 = state_18805;
(statearr_18819[(12)] = inst_18777);

(statearr_18819[(11)] = inst_18778__$1);

return statearr_18819;
})();
if(cljs.core.truth_(inst_18779)){
var statearr_18820_18843 = state_18805__$1;
(statearr_18820_18843[(1)] = (8));

} else {
var statearr_18821_18844 = state_18805__$1;
(statearr_18821_18844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (14))){
var inst_18798 = (state_18805[(2)]);
var inst_18799 = cljs.core.async.close_BANG_.call(null,out);
var state_18805__$1 = (function (){var statearr_18823 = state_18805;
(statearr_18823[(13)] = inst_18798);

return statearr_18823;
})();
var statearr_18824_18845 = state_18805__$1;
(statearr_18824_18845[(2)] = inst_18799);

(statearr_18824_18845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (10))){
var inst_18789 = (state_18805[(2)]);
var state_18805__$1 = state_18805;
var statearr_18825_18846 = state_18805__$1;
(statearr_18825_18846[(2)] = inst_18789);

(statearr_18825_18846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18806 === (8))){
var inst_18769 = (state_18805[(8)]);
var inst_18778 = (state_18805[(11)]);
var tmp18822 = inst_18769;
var inst_18769__$1 = tmp18822;
var inst_18770 = inst_18778;
var state_18805__$1 = (function (){var statearr_18826 = state_18805;
(statearr_18826[(7)] = inst_18770);

(statearr_18826[(8)] = inst_18769__$1);

return statearr_18826;
})();
var statearr_18827_18847 = state_18805__$1;
(statearr_18827_18847[(2)] = null);

(statearr_18827_18847[(1)] = (2));


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
});})(c__17017__auto___18833,out))
;
return ((function (switch__16927__auto__,c__17017__auto___18833,out){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18828[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18828[(1)] = (1));

return statearr_18828;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18805){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18829){if((e18829 instanceof Object)){
var ex__16931__auto__ = e18829;
var statearr_18830_18848 = state_18805;
(statearr_18830_18848[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18849 = state_18805;
state_18805 = G__18849;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18833,out))
})();
var state__17019__auto__ = (function (){var statearr_18831 = f__17018__auto__.call(null);
(statearr_18831[(6)] = c__17017__auto___18833);

return statearr_18831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18833,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18851 = arguments.length;
switch (G__18851) {
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
var c__17017__auto___18921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto___18921,out){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto___18921,out){
return (function (state_18893){
var state_val_18894 = (state_18893[(1)]);
if((state_val_18894 === (7))){
var inst_18889 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18895_18922 = state_18893__$1;
(statearr_18895_18922[(2)] = inst_18889);

(statearr_18895_18922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (1))){
var inst_18852 = [];
var inst_18853 = inst_18852;
var inst_18854 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18893__$1 = (function (){var statearr_18896 = state_18893;
(statearr_18896[(7)] = inst_18853);

(statearr_18896[(8)] = inst_18854);

return statearr_18896;
})();
var statearr_18897_18923 = state_18893__$1;
(statearr_18897_18923[(2)] = null);

(statearr_18897_18923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (4))){
var inst_18857 = (state_18893[(9)]);
var inst_18857__$1 = (state_18893[(2)]);
var inst_18858 = (inst_18857__$1 == null);
var inst_18859 = cljs.core.not.call(null,inst_18858);
var state_18893__$1 = (function (){var statearr_18898 = state_18893;
(statearr_18898[(9)] = inst_18857__$1);

return statearr_18898;
})();
if(inst_18859){
var statearr_18899_18924 = state_18893__$1;
(statearr_18899_18924[(1)] = (5));

} else {
var statearr_18900_18925 = state_18893__$1;
(statearr_18900_18925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (15))){
var inst_18883 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18901_18926 = state_18893__$1;
(statearr_18901_18926[(2)] = inst_18883);

(statearr_18901_18926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (13))){
var state_18893__$1 = state_18893;
var statearr_18902_18927 = state_18893__$1;
(statearr_18902_18927[(2)] = null);

(statearr_18902_18927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (6))){
var inst_18853 = (state_18893[(7)]);
var inst_18878 = inst_18853.length;
var inst_18879 = (inst_18878 > (0));
var state_18893__$1 = state_18893;
if(cljs.core.truth_(inst_18879)){
var statearr_18903_18928 = state_18893__$1;
(statearr_18903_18928[(1)] = (12));

} else {
var statearr_18904_18929 = state_18893__$1;
(statearr_18904_18929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (3))){
var inst_18891 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18893__$1,inst_18891);
} else {
if((state_val_18894 === (12))){
var inst_18853 = (state_18893[(7)]);
var inst_18881 = cljs.core.vec.call(null,inst_18853);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18893__$1,(15),out,inst_18881);
} else {
if((state_val_18894 === (2))){
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18893__$1,(4),ch);
} else {
if((state_val_18894 === (11))){
var inst_18857 = (state_18893[(9)]);
var inst_18861 = (state_18893[(10)]);
var inst_18871 = (state_18893[(2)]);
var inst_18872 = [];
var inst_18873 = inst_18872.push(inst_18857);
var inst_18853 = inst_18872;
var inst_18854 = inst_18861;
var state_18893__$1 = (function (){var statearr_18905 = state_18893;
(statearr_18905[(7)] = inst_18853);

(statearr_18905[(8)] = inst_18854);

(statearr_18905[(11)] = inst_18871);

(statearr_18905[(12)] = inst_18873);

return statearr_18905;
})();
var statearr_18906_18930 = state_18893__$1;
(statearr_18906_18930[(2)] = null);

(statearr_18906_18930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (9))){
var inst_18853 = (state_18893[(7)]);
var inst_18869 = cljs.core.vec.call(null,inst_18853);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18893__$1,(11),out,inst_18869);
} else {
if((state_val_18894 === (5))){
var inst_18857 = (state_18893[(9)]);
var inst_18861 = (state_18893[(10)]);
var inst_18854 = (state_18893[(8)]);
var inst_18861__$1 = f.call(null,inst_18857);
var inst_18862 = cljs.core._EQ_.call(null,inst_18861__$1,inst_18854);
var inst_18863 = cljs.core.keyword_identical_QMARK_.call(null,inst_18854,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18864 = (inst_18862) || (inst_18863);
var state_18893__$1 = (function (){var statearr_18907 = state_18893;
(statearr_18907[(10)] = inst_18861__$1);

return statearr_18907;
})();
if(cljs.core.truth_(inst_18864)){
var statearr_18908_18931 = state_18893__$1;
(statearr_18908_18931[(1)] = (8));

} else {
var statearr_18909_18932 = state_18893__$1;
(statearr_18909_18932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (14))){
var inst_18886 = (state_18893[(2)]);
var inst_18887 = cljs.core.async.close_BANG_.call(null,out);
var state_18893__$1 = (function (){var statearr_18911 = state_18893;
(statearr_18911[(13)] = inst_18886);

return statearr_18911;
})();
var statearr_18912_18933 = state_18893__$1;
(statearr_18912_18933[(2)] = inst_18887);

(statearr_18912_18933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (10))){
var inst_18876 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18913_18934 = state_18893__$1;
(statearr_18913_18934[(2)] = inst_18876);

(statearr_18913_18934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18894 === (8))){
var inst_18853 = (state_18893[(7)]);
var inst_18857 = (state_18893[(9)]);
var inst_18861 = (state_18893[(10)]);
var inst_18866 = inst_18853.push(inst_18857);
var tmp18910 = inst_18853;
var inst_18853__$1 = tmp18910;
var inst_18854 = inst_18861;
var state_18893__$1 = (function (){var statearr_18914 = state_18893;
(statearr_18914[(7)] = inst_18853__$1);

(statearr_18914[(8)] = inst_18854);

(statearr_18914[(14)] = inst_18866);

return statearr_18914;
})();
var statearr_18915_18935 = state_18893__$1;
(statearr_18915_18935[(2)] = null);

(statearr_18915_18935[(1)] = (2));


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
});})(c__17017__auto___18921,out))
;
return ((function (switch__16927__auto__,c__17017__auto___18921,out){
return (function() {
var cljs$core$async$state_machine__16928__auto__ = null;
var cljs$core$async$state_machine__16928__auto____0 = (function (){
var statearr_18916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18916[(0)] = cljs$core$async$state_machine__16928__auto__);

(statearr_18916[(1)] = (1));

return statearr_18916;
});
var cljs$core$async$state_machine__16928__auto____1 = (function (state_18893){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_18893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e18917){if((e18917 instanceof Object)){
var ex__16931__auto__ = e18917;
var statearr_18918_18936 = state_18893;
(statearr_18918_18936[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18937 = state_18893;
state_18893 = G__18937;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
cljs$core$async$state_machine__16928__auto__ = function(state_18893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16928__auto____1.call(this,state_18893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16928__auto____0;
cljs$core$async$state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16928__auto____1;
return cljs$core$async$state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto___18921,out))
})();
var state__17019__auto__ = (function (){var statearr_18919 = f__17018__auto__.call(null);
(statearr_18919[(6)] = c__17017__auto___18921);

return statearr_18919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto___18921,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
