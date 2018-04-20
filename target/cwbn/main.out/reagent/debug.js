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
var G__18940__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18941__i = 0, G__18941__a = new Array(arguments.length -  0);
while (G__18941__i < G__18941__a.length) {G__18941__a[G__18941__i] = arguments[G__18941__i + 0]; ++G__18941__i;}
  args = new cljs.core.IndexedSeq(G__18941__a,0,null);
} 
return G__18940__delegate.call(this,args);};
G__18940.cljs$lang$maxFixedArity = 0;
G__18940.cljs$lang$applyTo = (function (arglist__18942){
var args = cljs.core.seq(arglist__18942);
return G__18940__delegate(args);
});
G__18940.cljs$core$IFn$_invoke$arity$variadic = G__18940__delegate;
return G__18940;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18943__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18944__i = 0, G__18944__a = new Array(arguments.length -  0);
while (G__18944__i < G__18944__a.length) {G__18944__a[G__18944__i] = arguments[G__18944__i + 0]; ++G__18944__i;}
  args = new cljs.core.IndexedSeq(G__18944__a,0,null);
} 
return G__18943__delegate.call(this,args);};
G__18943.cljs$lang$maxFixedArity = 0;
G__18943.cljs$lang$applyTo = (function (arglist__18945){
var args = cljs.core.seq(arglist__18945);
return G__18943__delegate(args);
});
G__18943.cljs$core$IFn$_invoke$arity$variadic = G__18943__delegate;
return G__18943;
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
