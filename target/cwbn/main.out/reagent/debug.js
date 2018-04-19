// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10456__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10457__i = 0, G__10457__a = new Array(arguments.length -  0);
while (G__10457__i < G__10457__a.length) {G__10457__a[G__10457__i] = arguments[G__10457__i + 0]; ++G__10457__i;}
  args = new cljs.core.IndexedSeq(G__10457__a,0,null);
} 
return G__10456__delegate.call(this,args);};
G__10456.cljs$lang$maxFixedArity = 0;
G__10456.cljs$lang$applyTo = (function (arglist__10458){
var args = cljs.core.seq(arglist__10458);
return G__10456__delegate(args);
});
G__10456.cljs$core$IFn$_invoke$arity$variadic = G__10456__delegate;
return G__10456;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10459__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10460__i = 0, G__10460__a = new Array(arguments.length -  0);
while (G__10460__i < G__10460__a.length) {G__10460__a[G__10460__i] = arguments[G__10460__i + 0]; ++G__10460__i;}
  args = new cljs.core.IndexedSeq(G__10460__a,0,null);
} 
return G__10459__delegate.call(this,args);};
G__10459.cljs$lang$maxFixedArity = 0;
G__10459.cljs$lang$applyTo = (function (arglist__10461){
var args = cljs.core.seq(arglist__10461);
return G__10459__delegate(args);
});
G__10459.cljs$core$IFn$_invoke$arity$variadic = G__10459__delegate;
return G__10459;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
