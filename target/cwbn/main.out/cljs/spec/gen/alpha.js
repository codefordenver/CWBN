// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13691 = arguments.length;
var i__9954__auto___13692 = (0);
while(true){
if((i__9954__auto___13692 < len__9953__auto___13691)){
args__9960__auto__.push((arguments[i__9954__auto___13692]));

var G__13693 = (i__9954__auto___13692 + (1));
i__9954__auto___13692 = G__13693;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13690){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13690));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13695 = arguments.length;
var i__9954__auto___13696 = (0);
while(true){
if((i__9954__auto___13696 < len__9953__auto___13695)){
args__9960__auto__.push((arguments[i__9954__auto___13696]));

var G__13697 = (i__9954__auto___13696 + (1));
i__9954__auto___13696 = G__13697;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13694){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13694));
});

var g_QMARK__13698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_13699 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13698){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__13698))
,null));
var mkg_13700 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13698,g_13699){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__13698,g_13699))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13698,g_13699,mkg_13700){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13698).call(null,x);
});})(g_QMARK__13698,g_13699,mkg_13700))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13698,g_13699,mkg_13700){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_13700).call(null,gfn);
});})(g_QMARK__13698,g_13699,mkg_13700))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13698,g_13699,mkg_13700){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_13699).call(null,generator);
});})(g_QMARK__13698,g_13699,mkg_13700))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10056__auto___13720 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__10056__auto___13720){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13721 = arguments.length;
var i__9954__auto___13722 = (0);
while(true){
if((i__9954__auto___13722 < len__9953__auto___13721)){
args__9960__auto__.push((arguments[i__9954__auto___13722]));

var G__13723 = (i__9954__auto___13722 + (1));
i__9954__auto___13722 = G__13723;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13720))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13720){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13720),args);
});})(g__10056__auto___13720))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__10056__auto___13720){
return (function (seq13701){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13701));
});})(g__10056__auto___13720))
;


var g__10056__auto___13724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__10056__auto___13724){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13725 = arguments.length;
var i__9954__auto___13726 = (0);
while(true){
if((i__9954__auto___13726 < len__9953__auto___13725)){
args__9960__auto__.push((arguments[i__9954__auto___13726]));

var G__13727 = (i__9954__auto___13726 + (1));
i__9954__auto___13726 = G__13727;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13724))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13724){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13724),args);
});})(g__10056__auto___13724))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__10056__auto___13724){
return (function (seq13702){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13702));
});})(g__10056__auto___13724))
;


var g__10056__auto___13728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__10056__auto___13728){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13729 = arguments.length;
var i__9954__auto___13730 = (0);
while(true){
if((i__9954__auto___13730 < len__9953__auto___13729)){
args__9960__auto__.push((arguments[i__9954__auto___13730]));

var G__13731 = (i__9954__auto___13730 + (1));
i__9954__auto___13730 = G__13731;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13728))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13728){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13728),args);
});})(g__10056__auto___13728))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__10056__auto___13728){
return (function (seq13703){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13703));
});})(g__10056__auto___13728))
;


var g__10056__auto___13732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__10056__auto___13732){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13733 = arguments.length;
var i__9954__auto___13734 = (0);
while(true){
if((i__9954__auto___13734 < len__9953__auto___13733)){
args__9960__auto__.push((arguments[i__9954__auto___13734]));

var G__13735 = (i__9954__auto___13734 + (1));
i__9954__auto___13734 = G__13735;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13732))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13732),args);
});})(g__10056__auto___13732))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__10056__auto___13732){
return (function (seq13704){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13704));
});})(g__10056__auto___13732))
;


var g__10056__auto___13736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__10056__auto___13736){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13737 = arguments.length;
var i__9954__auto___13738 = (0);
while(true){
if((i__9954__auto___13738 < len__9953__auto___13737)){
args__9960__auto__.push((arguments[i__9954__auto___13738]));

var G__13739 = (i__9954__auto___13738 + (1));
i__9954__auto___13738 = G__13739;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13736))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13736){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13736),args);
});})(g__10056__auto___13736))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__10056__auto___13736){
return (function (seq13705){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13705));
});})(g__10056__auto___13736))
;


var g__10056__auto___13740 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__10056__auto___13740){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13741 = arguments.length;
var i__9954__auto___13742 = (0);
while(true){
if((i__9954__auto___13742 < len__9953__auto___13741)){
args__9960__auto__.push((arguments[i__9954__auto___13742]));

var G__13743 = (i__9954__auto___13742 + (1));
i__9954__auto___13742 = G__13743;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13740))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13740){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13740),args);
});})(g__10056__auto___13740))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__10056__auto___13740){
return (function (seq13706){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13706));
});})(g__10056__auto___13740))
;


var g__10056__auto___13744 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__10056__auto___13744){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13745 = arguments.length;
var i__9954__auto___13746 = (0);
while(true){
if((i__9954__auto___13746 < len__9953__auto___13745)){
args__9960__auto__.push((arguments[i__9954__auto___13746]));

var G__13747 = (i__9954__auto___13746 + (1));
i__9954__auto___13746 = G__13747;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13744))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13744){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13744),args);
});})(g__10056__auto___13744))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__10056__auto___13744){
return (function (seq13707){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13707));
});})(g__10056__auto___13744))
;


var g__10056__auto___13748 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__10056__auto___13748){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13749 = arguments.length;
var i__9954__auto___13750 = (0);
while(true){
if((i__9954__auto___13750 < len__9953__auto___13749)){
args__9960__auto__.push((arguments[i__9954__auto___13750]));

var G__13751 = (i__9954__auto___13750 + (1));
i__9954__auto___13750 = G__13751;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13748))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13748){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13748),args);
});})(g__10056__auto___13748))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__10056__auto___13748){
return (function (seq13708){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13708));
});})(g__10056__auto___13748))
;


var g__10056__auto___13752 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__10056__auto___13752){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13753 = arguments.length;
var i__9954__auto___13754 = (0);
while(true){
if((i__9954__auto___13754 < len__9953__auto___13753)){
args__9960__auto__.push((arguments[i__9954__auto___13754]));

var G__13755 = (i__9954__auto___13754 + (1));
i__9954__auto___13754 = G__13755;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13752))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13752){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13752),args);
});})(g__10056__auto___13752))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__10056__auto___13752){
return (function (seq13709){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13709));
});})(g__10056__auto___13752))
;


var g__10056__auto___13756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__10056__auto___13756){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13757 = arguments.length;
var i__9954__auto___13758 = (0);
while(true){
if((i__9954__auto___13758 < len__9953__auto___13757)){
args__9960__auto__.push((arguments[i__9954__auto___13758]));

var G__13759 = (i__9954__auto___13758 + (1));
i__9954__auto___13758 = G__13759;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13756))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13756){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13756),args);
});})(g__10056__auto___13756))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__10056__auto___13756){
return (function (seq13710){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13710));
});})(g__10056__auto___13756))
;


var g__10056__auto___13760 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__10056__auto___13760){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13761 = arguments.length;
var i__9954__auto___13762 = (0);
while(true){
if((i__9954__auto___13762 < len__9953__auto___13761)){
args__9960__auto__.push((arguments[i__9954__auto___13762]));

var G__13763 = (i__9954__auto___13762 + (1));
i__9954__auto___13762 = G__13763;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13760))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13760),args);
});})(g__10056__auto___13760))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__10056__auto___13760){
return (function (seq13711){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13711));
});})(g__10056__auto___13760))
;


var g__10056__auto___13764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__10056__auto___13764){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13765 = arguments.length;
var i__9954__auto___13766 = (0);
while(true){
if((i__9954__auto___13766 < len__9953__auto___13765)){
args__9960__auto__.push((arguments[i__9954__auto___13766]));

var G__13767 = (i__9954__auto___13766 + (1));
i__9954__auto___13766 = G__13767;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13764))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13764),args);
});})(g__10056__auto___13764))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__10056__auto___13764){
return (function (seq13712){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13712));
});})(g__10056__auto___13764))
;


var g__10056__auto___13768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__10056__auto___13768){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13769 = arguments.length;
var i__9954__auto___13770 = (0);
while(true){
if((i__9954__auto___13770 < len__9953__auto___13769)){
args__9960__auto__.push((arguments[i__9954__auto___13770]));

var G__13771 = (i__9954__auto___13770 + (1));
i__9954__auto___13770 = G__13771;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13768))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13768),args);
});})(g__10056__auto___13768))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__10056__auto___13768){
return (function (seq13713){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13713));
});})(g__10056__auto___13768))
;


var g__10056__auto___13772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__10056__auto___13772){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13773 = arguments.length;
var i__9954__auto___13774 = (0);
while(true){
if((i__9954__auto___13774 < len__9953__auto___13773)){
args__9960__auto__.push((arguments[i__9954__auto___13774]));

var G__13775 = (i__9954__auto___13774 + (1));
i__9954__auto___13774 = G__13775;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13772))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13772),args);
});})(g__10056__auto___13772))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__10056__auto___13772){
return (function (seq13714){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13714));
});})(g__10056__auto___13772))
;


var g__10056__auto___13776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__10056__auto___13776){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13777 = arguments.length;
var i__9954__auto___13778 = (0);
while(true){
if((i__9954__auto___13778 < len__9953__auto___13777)){
args__9960__auto__.push((arguments[i__9954__auto___13778]));

var G__13779 = (i__9954__auto___13778 + (1));
i__9954__auto___13778 = G__13779;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13776))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13776),args);
});})(g__10056__auto___13776))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__10056__auto___13776){
return (function (seq13715){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13715));
});})(g__10056__auto___13776))
;


var g__10056__auto___13780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__10056__auto___13780){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13781 = arguments.length;
var i__9954__auto___13782 = (0);
while(true){
if((i__9954__auto___13782 < len__9953__auto___13781)){
args__9960__auto__.push((arguments[i__9954__auto___13782]));

var G__13783 = (i__9954__auto___13782 + (1));
i__9954__auto___13782 = G__13783;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13780))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13780),args);
});})(g__10056__auto___13780))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__10056__auto___13780){
return (function (seq13716){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13716));
});})(g__10056__auto___13780))
;


var g__10056__auto___13784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__10056__auto___13784){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13785 = arguments.length;
var i__9954__auto___13786 = (0);
while(true){
if((i__9954__auto___13786 < len__9953__auto___13785)){
args__9960__auto__.push((arguments[i__9954__auto___13786]));

var G__13787 = (i__9954__auto___13786 + (1));
i__9954__auto___13786 = G__13787;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13784))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13784),args);
});})(g__10056__auto___13784))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10056__auto___13784){
return (function (seq13717){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13717));
});})(g__10056__auto___13784))
;


var g__10056__auto___13788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__10056__auto___13788){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13789 = arguments.length;
var i__9954__auto___13790 = (0);
while(true){
if((i__9954__auto___13790 < len__9953__auto___13789)){
args__9960__auto__.push((arguments[i__9954__auto___13790]));

var G__13791 = (i__9954__auto___13790 + (1));
i__9954__auto___13790 = G__13791;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13788))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13788),args);
});})(g__10056__auto___13788))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__10056__auto___13788){
return (function (seq13718){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13718));
});})(g__10056__auto___13788))
;


var g__10056__auto___13792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__10056__auto___13792){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13793 = arguments.length;
var i__9954__auto___13794 = (0);
while(true){
if((i__9954__auto___13794 < len__9953__auto___13793)){
args__9960__auto__.push((arguments[i__9954__auto___13794]));

var G__13795 = (i__9954__auto___13794 + (1));
i__9954__auto___13794 = G__13795;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10056__auto___13792))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10056__auto___13792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10056__auto___13792),args);
});})(g__10056__auto___13792))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__10056__auto___13792){
return (function (seq13719){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13719));
});})(g__10056__auto___13792))
;

var g__10069__auto___13817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__10069__auto___13817){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13818 = arguments.length;
var i__9954__auto___13819 = (0);
while(true){
if((i__9954__auto___13819 < len__9953__auto___13818)){
args__9960__auto__.push((arguments[i__9954__auto___13819]));

var G__13820 = (i__9954__auto___13819 + (1));
i__9954__auto___13819 = G__13820;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13817))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13817){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13817);
});})(g__10069__auto___13817))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__10069__auto___13817){
return (function (seq13796){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13796));
});})(g__10069__auto___13817))
;


var g__10069__auto___13821 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__10069__auto___13821){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13822 = arguments.length;
var i__9954__auto___13823 = (0);
while(true){
if((i__9954__auto___13823 < len__9953__auto___13822)){
args__9960__auto__.push((arguments[i__9954__auto___13823]));

var G__13824 = (i__9954__auto___13823 + (1));
i__9954__auto___13823 = G__13824;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13821))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13821){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13821);
});})(g__10069__auto___13821))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__10069__auto___13821){
return (function (seq13797){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13797));
});})(g__10069__auto___13821))
;


var g__10069__auto___13825 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__10069__auto___13825){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13826 = arguments.length;
var i__9954__auto___13827 = (0);
while(true){
if((i__9954__auto___13827 < len__9953__auto___13826)){
args__9960__auto__.push((arguments[i__9954__auto___13827]));

var G__13828 = (i__9954__auto___13827 + (1));
i__9954__auto___13827 = G__13828;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13825))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13825){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13825);
});})(g__10069__auto___13825))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__10069__auto___13825){
return (function (seq13798){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13798));
});})(g__10069__auto___13825))
;


var g__10069__auto___13829 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__10069__auto___13829){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13830 = arguments.length;
var i__9954__auto___13831 = (0);
while(true){
if((i__9954__auto___13831 < len__9953__auto___13830)){
args__9960__auto__.push((arguments[i__9954__auto___13831]));

var G__13832 = (i__9954__auto___13831 + (1));
i__9954__auto___13831 = G__13832;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13829))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13829){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13829);
});})(g__10069__auto___13829))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__10069__auto___13829){
return (function (seq13799){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13799));
});})(g__10069__auto___13829))
;


var g__10069__auto___13833 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__10069__auto___13833){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13834 = arguments.length;
var i__9954__auto___13835 = (0);
while(true){
if((i__9954__auto___13835 < len__9953__auto___13834)){
args__9960__auto__.push((arguments[i__9954__auto___13835]));

var G__13836 = (i__9954__auto___13835 + (1));
i__9954__auto___13835 = G__13836;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13833))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13833){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13833);
});})(g__10069__auto___13833))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__10069__auto___13833){
return (function (seq13800){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13800));
});})(g__10069__auto___13833))
;


var g__10069__auto___13837 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__10069__auto___13837){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13838 = arguments.length;
var i__9954__auto___13839 = (0);
while(true){
if((i__9954__auto___13839 < len__9953__auto___13838)){
args__9960__auto__.push((arguments[i__9954__auto___13839]));

var G__13840 = (i__9954__auto___13839 + (1));
i__9954__auto___13839 = G__13840;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13837))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13837){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13837);
});})(g__10069__auto___13837))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__10069__auto___13837){
return (function (seq13801){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13801));
});})(g__10069__auto___13837))
;


var g__10069__auto___13841 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__10069__auto___13841){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13842 = arguments.length;
var i__9954__auto___13843 = (0);
while(true){
if((i__9954__auto___13843 < len__9953__auto___13842)){
args__9960__auto__.push((arguments[i__9954__auto___13843]));

var G__13844 = (i__9954__auto___13843 + (1));
i__9954__auto___13843 = G__13844;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13841))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13841){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13841);
});})(g__10069__auto___13841))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__10069__auto___13841){
return (function (seq13802){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13802));
});})(g__10069__auto___13841))
;


var g__10069__auto___13845 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__10069__auto___13845){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13846 = arguments.length;
var i__9954__auto___13847 = (0);
while(true){
if((i__9954__auto___13847 < len__9953__auto___13846)){
args__9960__auto__.push((arguments[i__9954__auto___13847]));

var G__13848 = (i__9954__auto___13847 + (1));
i__9954__auto___13847 = G__13848;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13845))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13845){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13845);
});})(g__10069__auto___13845))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__10069__auto___13845){
return (function (seq13803){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13803));
});})(g__10069__auto___13845))
;


var g__10069__auto___13849 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__10069__auto___13849){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13850 = arguments.length;
var i__9954__auto___13851 = (0);
while(true){
if((i__9954__auto___13851 < len__9953__auto___13850)){
args__9960__auto__.push((arguments[i__9954__auto___13851]));

var G__13852 = (i__9954__auto___13851 + (1));
i__9954__auto___13851 = G__13852;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13849))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13849){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13849);
});})(g__10069__auto___13849))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__10069__auto___13849){
return (function (seq13804){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13804));
});})(g__10069__auto___13849))
;


var g__10069__auto___13853 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__10069__auto___13853){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13854 = arguments.length;
var i__9954__auto___13855 = (0);
while(true){
if((i__9954__auto___13855 < len__9953__auto___13854)){
args__9960__auto__.push((arguments[i__9954__auto___13855]));

var G__13856 = (i__9954__auto___13855 + (1));
i__9954__auto___13855 = G__13856;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13853))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13853){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13853);
});})(g__10069__auto___13853))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__10069__auto___13853){
return (function (seq13805){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13805));
});})(g__10069__auto___13853))
;


var g__10069__auto___13857 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__10069__auto___13857){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13858 = arguments.length;
var i__9954__auto___13859 = (0);
while(true){
if((i__9954__auto___13859 < len__9953__auto___13858)){
args__9960__auto__.push((arguments[i__9954__auto___13859]));

var G__13860 = (i__9954__auto___13859 + (1));
i__9954__auto___13859 = G__13860;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13857))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13857){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13857);
});})(g__10069__auto___13857))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__10069__auto___13857){
return (function (seq13806){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13806));
});})(g__10069__auto___13857))
;


var g__10069__auto___13861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__10069__auto___13861){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13862 = arguments.length;
var i__9954__auto___13863 = (0);
while(true){
if((i__9954__auto___13863 < len__9953__auto___13862)){
args__9960__auto__.push((arguments[i__9954__auto___13863]));

var G__13864 = (i__9954__auto___13863 + (1));
i__9954__auto___13863 = G__13864;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13861))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13861){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13861);
});})(g__10069__auto___13861))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__10069__auto___13861){
return (function (seq13807){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13807));
});})(g__10069__auto___13861))
;


var g__10069__auto___13865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__10069__auto___13865){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13866 = arguments.length;
var i__9954__auto___13867 = (0);
while(true){
if((i__9954__auto___13867 < len__9953__auto___13866)){
args__9960__auto__.push((arguments[i__9954__auto___13867]));

var G__13868 = (i__9954__auto___13867 + (1));
i__9954__auto___13867 = G__13868;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13865))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13865){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13865);
});})(g__10069__auto___13865))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__10069__auto___13865){
return (function (seq13808){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13808));
});})(g__10069__auto___13865))
;


var g__10069__auto___13869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__10069__auto___13869){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13870 = arguments.length;
var i__9954__auto___13871 = (0);
while(true){
if((i__9954__auto___13871 < len__9953__auto___13870)){
args__9960__auto__.push((arguments[i__9954__auto___13871]));

var G__13872 = (i__9954__auto___13871 + (1));
i__9954__auto___13871 = G__13872;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13869))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13869){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13869);
});})(g__10069__auto___13869))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__10069__auto___13869){
return (function (seq13809){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13809));
});})(g__10069__auto___13869))
;


var g__10069__auto___13873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__10069__auto___13873){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13874 = arguments.length;
var i__9954__auto___13875 = (0);
while(true){
if((i__9954__auto___13875 < len__9953__auto___13874)){
args__9960__auto__.push((arguments[i__9954__auto___13875]));

var G__13876 = (i__9954__auto___13875 + (1));
i__9954__auto___13875 = G__13876;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13873))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13873){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13873);
});})(g__10069__auto___13873))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__10069__auto___13873){
return (function (seq13810){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13810));
});})(g__10069__auto___13873))
;


var g__10069__auto___13877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__10069__auto___13877){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13878 = arguments.length;
var i__9954__auto___13879 = (0);
while(true){
if((i__9954__auto___13879 < len__9953__auto___13878)){
args__9960__auto__.push((arguments[i__9954__auto___13879]));

var G__13880 = (i__9954__auto___13879 + (1));
i__9954__auto___13879 = G__13880;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13877))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13877){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13877);
});})(g__10069__auto___13877))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__10069__auto___13877){
return (function (seq13811){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13811));
});})(g__10069__auto___13877))
;


var g__10069__auto___13881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__10069__auto___13881){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13882 = arguments.length;
var i__9954__auto___13883 = (0);
while(true){
if((i__9954__auto___13883 < len__9953__auto___13882)){
args__9960__auto__.push((arguments[i__9954__auto___13883]));

var G__13884 = (i__9954__auto___13883 + (1));
i__9954__auto___13883 = G__13884;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13881))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13881){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13881);
});})(g__10069__auto___13881))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__10069__auto___13881){
return (function (seq13812){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13812));
});})(g__10069__auto___13881))
;


var g__10069__auto___13885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__10069__auto___13885){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13886 = arguments.length;
var i__9954__auto___13887 = (0);
while(true){
if((i__9954__auto___13887 < len__9953__auto___13886)){
args__9960__auto__.push((arguments[i__9954__auto___13887]));

var G__13888 = (i__9954__auto___13887 + (1));
i__9954__auto___13887 = G__13888;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13885))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13885){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13885);
});})(g__10069__auto___13885))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__10069__auto___13885){
return (function (seq13813){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13813));
});})(g__10069__auto___13885))
;


var g__10069__auto___13889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__10069__auto___13889){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13890 = arguments.length;
var i__9954__auto___13891 = (0);
while(true){
if((i__9954__auto___13891 < len__9953__auto___13890)){
args__9960__auto__.push((arguments[i__9954__auto___13891]));

var G__13892 = (i__9954__auto___13891 + (1));
i__9954__auto___13891 = G__13892;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13889))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13889){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13889);
});})(g__10069__auto___13889))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__10069__auto___13889){
return (function (seq13814){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13814));
});})(g__10069__auto___13889))
;


var g__10069__auto___13893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__10069__auto___13893){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13894 = arguments.length;
var i__9954__auto___13895 = (0);
while(true){
if((i__9954__auto___13895 < len__9953__auto___13894)){
args__9960__auto__.push((arguments[i__9954__auto___13895]));

var G__13896 = (i__9954__auto___13895 + (1));
i__9954__auto___13895 = G__13896;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13893))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13893){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13893);
});})(g__10069__auto___13893))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__10069__auto___13893){
return (function (seq13815){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13815));
});})(g__10069__auto___13893))
;


var g__10069__auto___13897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__10069__auto___13897){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13898 = arguments.length;
var i__9954__auto___13899 = (0);
while(true){
if((i__9954__auto___13899 < len__9953__auto___13898)){
args__9960__auto__.push((arguments[i__9954__auto___13899]));

var G__13900 = (i__9954__auto___13899 + (1));
i__9954__auto___13899 = G__13900;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});})(g__10069__auto___13897))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10069__auto___13897){
return (function (args){
return cljs.core.deref.call(null,g__10069__auto___13897);
});})(g__10069__auto___13897))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__10069__auto___13897){
return (function (seq13816){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13816));
});})(g__10069__auto___13897))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13903 = arguments.length;
var i__9954__auto___13904 = (0);
while(true){
if((i__9954__auto___13904 < len__9953__auto___13903)){
args__9960__auto__.push((arguments[i__9954__auto___13904]));

var G__13905 = (i__9954__auto___13904 + (1));
i__9954__auto___13904 = G__13905;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13901_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13901_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq13902){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13902));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__13906_SHARP_){
return (new Date(p1__13906_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
