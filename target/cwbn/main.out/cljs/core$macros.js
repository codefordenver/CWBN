// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__9999__auto___19386 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19387 = arguments.length;
var i__9954__auto___19388 = (0);
while(true){
if((i__9954__auto___19388 < len__9953__auto___19387)){
args__9960__auto__.push((arguments[i__9954__auto___19388]));

var G__19389 = (i__9954__auto___19388 + (1));
i__9954__auto___19388 = G__19389;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})());
var G__19390 = threaded;
var G__19391 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19390;
forms__$1 = G__19391;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq19382){
var G__19383 = cljs.core.first.call(null,seq19382);
var seq19382__$1 = cljs.core.next.call(null,seq19382);
var G__19384 = cljs.core.first.call(null,seq19382__$1);
var seq19382__$2 = cljs.core.next.call(null,seq19382__$1);
var G__19385 = cljs.core.first.call(null,seq19382__$2);
var seq19382__$3 = cljs.core.next.call(null,seq19382__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19383,G__19384,G__19385,seq19382__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__9999__auto___19396 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19397 = arguments.length;
var i__9954__auto___19398 = (0);
while(true){
if((i__9954__auto___19398 < len__9953__auto___19397)){
args__9960__auto__.push((arguments[i__9954__auto___19398]));

var G__19399 = (i__9954__auto___19398 + (1));
i__9954__auto___19398 = G__19399;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__9628__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})());
var G__19400 = threaded;
var G__19401 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19400;
forms__$1 = G__19401;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq19392){
var G__19393 = cljs.core.first.call(null,seq19392);
var seq19392__$1 = cljs.core.next.call(null,seq19392);
var G__19394 = cljs.core.first.call(null,seq19392__$1);
var seq19392__$2 = cljs.core.next.call(null,seq19392__$1);
var G__19395 = cljs.core.first.call(null,seq19392__$2);
var seq19392__$3 = cljs.core.next.call(null,seq19392__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19393,G__19394,G__19395,seq19392__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__9999__auto___19409 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__19408 = arguments.length;
switch (G__19408) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19411 = arguments.length;
var i__9954__auto___19412 = (0);
while(true){
if((i__9954__auto___19412 < len__9953__auto___19411)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19412]));

var G__19413 = (i__9954__auto___19412 + (1));
i__9954__auto___19412 = G__19413;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq19403){
var G__19404 = cljs.core.first.call(null,seq19403);
var seq19403__$1 = cljs.core.next.call(null,seq19403);
var G__19405 = cljs.core.first.call(null,seq19403__$1);
var seq19403__$2 = cljs.core.next.call(null,seq19403__$1);
var G__19406 = cljs.core.first.call(null,seq19403__$2);
var seq19403__$3 = cljs.core.next.call(null,seq19403__$2);
var G__19407 = cljs.core.first.call(null,seq19403__$3);
var seq19403__$4 = cljs.core.next.call(null,seq19403__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__19404,G__19405,G__19406,G__19407,seq19403__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__9999__auto___19417 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19418 = arguments.length;
var i__9954__auto___19419 = (0);
while(true){
if((i__9954__auto___19419 < len__9953__auto___19418)){
args__9960__auto__.push((arguments[i__9954__auto___19419]));

var G__19420 = (i__9954__auto___19419 + (1));
i__9954__auto___19419 = G__19420;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq19414){
var G__19415 = cljs.core.first.call(null,seq19414);
var seq19414__$1 = cljs.core.next.call(null,seq19414);
var G__19416 = cljs.core.first.call(null,seq19414__$1);
var seq19414__$2 = cljs.core.next.call(null,seq19414__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__19415,G__19416,seq19414__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__9999__auto___19424 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19425 = arguments.length;
var i__9954__auto___19426 = (0);
while(true){
if((i__9954__auto___19426 < len__9953__auto___19425)){
args__9960__auto__.push((arguments[i__9954__auto___19426]));

var G__19427 = (i__9954__auto___19426 + (1));
i__9954__auto___19426 = G__19427;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__9628__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$2);
})(),x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq19421){
var G__19422 = cljs.core.first.call(null,seq19421);
var seq19421__$1 = cljs.core.next.call(null,seq19421);
var G__19423 = cljs.core.first.call(null,seq19421__$1);
var seq19421__$2 = cljs.core.next.call(null,seq19421__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__19422,G__19423,seq19421__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__9999__auto___19432 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19433 = arguments.length;
var i__9954__auto___19434 = (0);
while(true){
if((i__9954__auto___19434 < len__9953__auto___19433)){
args__9960__auto__.push((arguments[i__9954__auto___19434]));

var G__19435 = (i__9954__auto___19434 + (1));
i__9954__auto___19434 = G__19435;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__19428_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.vary_meta.call(null,p1__19428_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq19429){
var G__19430 = cljs.core.first.call(null,seq19429);
var seq19429__$1 = cljs.core.next.call(null,seq19429);
var G__19431 = cljs.core.first.call(null,seq19429__$1);
var seq19429__$2 = cljs.core.next.call(null,seq19429__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__19430,G__19431,seq19429__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__9999__auto___19440 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19441 = arguments.length;
var i__9954__auto___19442 = (0);
while(true){
if((i__9954__auto___19442 < len__9953__auto___19441)){
args__9960__auto__.push((arguments[i__9954__auto___19442]));

var G__19443 = (i__9954__auto___19442 + (1));
i__9954__auto___19442 = G__19443;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9628__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq19436){
var G__19437 = cljs.core.first.call(null,seq19436);
var seq19436__$1 = cljs.core.next.call(null,seq19436);
var G__19438 = cljs.core.first.call(null,seq19436__$1);
var seq19436__$2 = cljs.core.next.call(null,seq19436__$1);
var G__19439 = cljs.core.first.call(null,seq19436__$2);
var seq19436__$3 = cljs.core.next.call(null,seq19436__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__19437,G__19438,G__19439,seq19436__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__19444 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__19445 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__19444;
s = G__19445;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__19446){
var vec__19447 = p__19446;
var t = cljs.core.nth.call(null,vec__19447,(0),null);
var fs = cljs.core.nth.call(null,vec__19447,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9628__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__9999__auto___19454 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19455 = arguments.length;
var i__9954__auto___19456 = (0);
while(true){
if((i__9954__auto___19456 < len__9953__auto___19455)){
args__9960__auto__.push((arguments[i__9954__auto___19456]));

var G__19457 = (i__9954__auto___19456 + (1));
i__9954__auto___19456 = G__19457;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq19450){
var G__19451 = cljs.core.first.call(null,seq19450);
var seq19450__$1 = cljs.core.next.call(null,seq19450);
var G__19452 = cljs.core.first.call(null,seq19450__$1);
var seq19450__$2 = cljs.core.next.call(null,seq19450__$1);
var G__19453 = cljs.core.first.call(null,seq19450__$2);
var seq19450__$3 = cljs.core.next.call(null,seq19450__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__19451,G__19452,G__19453,seq19450__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__19458 = cljs.core.next.call(null,params__$1);
var G__19459 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__19460 = lets;
params__$1 = G__19458;
new_params = G__19459;
lets = G__19460;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__19461 = cljs.core.next.call(null,params__$1);
var G__19462 = cljs.core.conj.call(null,new_params,gparam);
var G__19463 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__19461;
new_params = G__19462;
lets = G__19463;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
break;
}
}
});
var ret__9999__auto___19470 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19471 = arguments.length;
var i__9954__auto___19472 = (0);
while(true){
if((i__9954__auto___19472 < len__9953__auto___19471)){
args__9960__auto__.push((arguments[i__9954__auto___19472]));

var G__19473 = (i__9954__auto___19472 + (1));
i__9954__auto___19472 = G__19473;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__9628__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__19467 = sig;
var seq__19468 = cljs.core.seq.call(null,vec__19467);
var first__19469 = cljs.core.first.call(null,seq__19468);
var seq__19468__$1 = cljs.core.next.call(null,seq__19468);
var params = first__19469;
var body = seq__19468__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__8674__auto__ = conds;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__9628__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,((function (vec__19467,seq__19468,first__19469,seq__19468__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9628__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(vec__19467,seq__19468,first__19469,seq__19468__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__19467,seq__19468,first__19469,seq__19468__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9628__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(vec__19467,seq__19468,first__19469,seq__19468__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq19464){
var G__19465 = cljs.core.first.call(null,seq19464);
var seq19464__$1 = cljs.core.next.call(null,seq19464);
var G__19466 = cljs.core.first.call(null,seq19464__$1);
var seq19464__$2 = cljs.core.next.call(null,seq19464__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__19465,G__19466,seq19464__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__9999__auto___19478 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19479 = arguments.length;
var i__9954__auto___19480 = (0);
while(true){
if((i__9954__auto___19480 < len__9953__auto___19479)){
args__9960__auto__.push((arguments[i__9954__auto___19480]));

var G__19481 = (i__9954__auto___19480 + (1));
i__9954__auto___19480 = G__19481;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq19474){
var G__19475 = cljs.core.first.call(null,seq19474);
var seq19474__$1 = cljs.core.next.call(null,seq19474);
var G__19476 = cljs.core.first.call(null,seq19474__$1);
var seq19474__$2 = cljs.core.next.call(null,seq19474__$1);
var G__19477 = cljs.core.first.call(null,seq19474__$2);
var seq19474__$3 = cljs.core.next.call(null,seq19474__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__19475,G__19476,G__19477,seq19474__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__9999__auto___19491 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__19490 = arguments.length;
switch (G__19490) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19493 = arguments.length;
var i__9954__auto___19494 = (0);
while(true){
if((i__9954__auto___19494 < len__9953__auto___19493)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19494]));

var G__19495 = (i__9954__auto___19494 + (1));
i__9954__auto___19494 = G__19495;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9977__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9628__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19482__auto__","temp__19482__auto__",-488596981,null)),(function (){var x__9628__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19482__auto__","temp__19482__auto__",-488596981,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19482__auto__","temp__19482__auto__",-488596981,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq19484){
var G__19485 = cljs.core.first.call(null,seq19484);
var seq19484__$1 = cljs.core.next.call(null,seq19484);
var G__19486 = cljs.core.first.call(null,seq19484__$1);
var seq19484__$2 = cljs.core.next.call(null,seq19484__$1);
var G__19487 = cljs.core.first.call(null,seq19484__$2);
var seq19484__$3 = cljs.core.next.call(null,seq19484__$2);
var G__19488 = cljs.core.first.call(null,seq19484__$3);
var seq19484__$4 = cljs.core.next.call(null,seq19484__$3);
var G__19489 = cljs.core.first.call(null,seq19484__$4);
var seq19484__$5 = cljs.core.next.call(null,seq19484__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__19485,G__19486,G__19487,G__19488,G__19489,seq19484__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__9999__auto___19498 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__19497 = arguments.length;
switch (G__19497) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__9999__auto___19505 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19506 = arguments.length;
var i__9954__auto___19507 = (0);
while(true){
if((i__9954__auto___19507 < len__9953__auto___19506)){
args__9960__auto__.push((arguments[i__9954__auto___19507]));

var G__19508 = (i__9954__auto___19507 + (1));
i__9954__auto___19507 = G__19508;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__19500_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__19500_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq19501){
var G__19502 = cljs.core.first.call(null,seq19501);
var seq19501__$1 = cljs.core.next.call(null,seq19501);
var G__19503 = cljs.core.first.call(null,seq19501__$1);
var seq19501__$2 = cljs.core.next.call(null,seq19501__$1);
var G__19504 = cljs.core.first.call(null,seq19501__$2);
var seq19501__$3 = cljs.core.next.call(null,seq19501__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__19502,G__19503,G__19504,seq19501__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__9999__auto___19513 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19514 = arguments.length;
var i__9954__auto___19515 = (0);
while(true){
if((i__9954__auto___19515 < len__9953__auto___19514)){
args__9960__auto__.push((arguments[i__9954__auto___19515]));

var G__19516 = (i__9954__auto___19515 + (1));
i__9954__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq19509){
var G__19510 = cljs.core.first.call(null,seq19509);
var seq19509__$1 = cljs.core.next.call(null,seq19509);
var G__19511 = cljs.core.first.call(null,seq19509__$1);
var seq19509__$2 = cljs.core.next.call(null,seq19509__$1);
var G__19512 = cljs.core.first.call(null,seq19509__$2);
var seq19509__$3 = cljs.core.next.call(null,seq19509__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__19510,G__19511,G__19512,seq19509__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__9999__auto___19521 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19522 = arguments.length;
var i__9954__auto___19523 = (0);
while(true){
if((i__9954__auto___19523 < len__9953__auto___19522)){
args__9960__auto__.push((arguments[i__9954__auto___19523]));

var G__19524 = (i__9954__auto___19523 + (1));
i__9954__auto___19523 = G__19524;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq19517){
var G__19518 = cljs.core.first.call(null,seq19517);
var seq19517__$1 = cljs.core.next.call(null,seq19517);
var G__19519 = cljs.core.first.call(null,seq19517__$1);
var seq19517__$2 = cljs.core.next.call(null,seq19517__$1);
var G__19520 = cljs.core.first.call(null,seq19517__$2);
var seq19517__$3 = cljs.core.next.call(null,seq19517__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__19518,G__19519,G__19520,seq19517__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__9999__auto___19533 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19534 = arguments.length;
var i__9954__auto___19535 = (0);
while(true){
if((i__9954__auto___19535 < len__9953__auto___19534)){
args__9960__auto__.push((arguments[i__9954__auto___19535]));

var G__19536 = (i__9954__auto___19535 + (1));
i__9954__auto___19535 = G__19536;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__19530 = bindings;
var x = cljs.core.nth.call(null,vec__19530,(0),null);
var xs = cljs.core.nth.call(null,vec__19530,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19525__auto__","xs__19525__auto__",-1699624895,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9628__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19525__auto__","xs__19525__auto__",-1699624895,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq19526){
var G__19527 = cljs.core.first.call(null,seq19526);
var seq19526__$1 = cljs.core.next.call(null,seq19526);
var G__19528 = cljs.core.first.call(null,seq19526__$1);
var seq19526__$2 = cljs.core.next.call(null,seq19526__$1);
var G__19529 = cljs.core.first.call(null,seq19526__$2);
var seq19526__$3 = cljs.core.next.call(null,seq19526__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__19527,G__19528,G__19529,seq19526__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__9999__auto___19542 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19543 = arguments.length;
var i__9954__auto___19544 = (0);
while(true){
if((i__9954__auto___19544 < len__9953__auto___19543)){
args__9960__auto__.push((arguments[i__9954__auto___19544]));

var G__19545 = (i__9954__auto___19544 + (1));
i__9954__auto___19544 = G__19545;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19537__auto__","temp__19537__auto__",-1602106621,null)),(function (){var x__9628__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19537__auto__","temp__19537__auto__",-1602106621,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19537__auto__","temp__19537__auto__",-1602106621,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq19538){
var G__19539 = cljs.core.first.call(null,seq19538);
var seq19538__$1 = cljs.core.next.call(null,seq19538);
var G__19540 = cljs.core.first.call(null,seq19538__$1);
var seq19538__$2 = cljs.core.next.call(null,seq19538__$1);
var G__19541 = cljs.core.first.call(null,seq19538__$2);
var seq19538__$3 = cljs.core.next.call(null,seq19538__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__19539,G__19540,G__19541,seq19538__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__9999__auto___19550 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19551 = arguments.length;
var i__9954__auto___19552 = (0);
while(true){
if((i__9954__auto___19552 < len__9953__auto___19551)){
args__9960__auto__.push((arguments[i__9954__auto___19552]));

var G__19553 = (i__9954__auto___19552 + (1));
i__9954__auto___19552 = G__19553;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),null),x__9628__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq19546){
var G__19547 = cljs.core.first.call(null,seq19546);
var seq19546__$1 = cljs.core.next.call(null,seq19546);
var G__19548 = cljs.core.first.call(null,seq19546__$1);
var seq19546__$2 = cljs.core.next.call(null,seq19546__$1);
var G__19549 = cljs.core.first.call(null,seq19546__$2);
var seq19546__$3 = cljs.core.next.call(null,seq19546__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__19547,G__19548,G__19549,seq19546__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__9999__auto___19558 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19559 = arguments.length;
var i__9954__auto___19560 = (0);
while(true){
if((i__9954__auto___19560 < len__9953__auto___19559)){
args__9960__auto__.push((arguments[i__9954__auto___19560]));

var G__19561 = (i__9954__auto___19560 + (1));
i__9954__auto___19560 = G__19561;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq19554){
var G__19555 = cljs.core.first.call(null,seq19554);
var seq19554__$1 = cljs.core.next.call(null,seq19554);
var G__19556 = cljs.core.first.call(null,seq19554__$1);
var seq19554__$2 = cljs.core.next.call(null,seq19554__$1);
var G__19557 = cljs.core.first.call(null,seq19554__$2);
var seq19554__$3 = cljs.core.next.call(null,seq19554__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__19555,G__19556,G__19557,seq19554__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__9999__auto___19570 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19571 = arguments.length;
var i__9954__auto___19572 = (0);
while(true){
if((i__9954__auto___19572 < len__9953__auto___19571)){
args__9960__auto__.push((arguments[i__9954__auto___19572]));

var G__19573 = (i__9954__auto___19572 + (1));
i__9954__auto___19572 = G__19573;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__19566){
var vec__19567 = p__19566;
var test = cljs.core.nth.call(null,vec__19567,(0),null);
var step = cljs.core.nth.call(null,vec__19567,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq19562){
var G__19563 = cljs.core.first.call(null,seq19562);
var seq19562__$1 = cljs.core.next.call(null,seq19562);
var G__19564 = cljs.core.first.call(null,seq19562__$1);
var seq19562__$2 = cljs.core.next.call(null,seq19562__$1);
var G__19565 = cljs.core.first.call(null,seq19562__$2);
var seq19562__$3 = cljs.core.next.call(null,seq19562__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19563,G__19564,G__19565,seq19562__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__9999__auto___19582 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19583 = arguments.length;
var i__9954__auto___19584 = (0);
while(true){
if((i__9954__auto___19584 < len__9953__auto___19583)){
args__9960__auto__.push((arguments[i__9954__auto___19584]));

var G__19585 = (i__9954__auto___19584 + (1));
i__9954__auto___19584 = G__19585;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__19578){
var vec__19579 = p__19578;
var test = cljs.core.nth.call(null,vec__19579,(0),null);
var step = cljs.core.nth.call(null,vec__19579,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq19574){
var G__19575 = cljs.core.first.call(null,seq19574);
var seq19574__$1 = cljs.core.next.call(null,seq19574);
var G__19576 = cljs.core.first.call(null,seq19574__$1);
var seq19574__$2 = cljs.core.next.call(null,seq19574__$1);
var G__19577 = cljs.core.first.call(null,seq19574__$2);
var seq19574__$3 = cljs.core.next.call(null,seq19574__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19575,G__19576,G__19577,seq19574__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__9999__auto___19591 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19592 = arguments.length;
var i__9954__auto___19593 = (0);
while(true){
if((i__9954__auto___19593 < len__9953__auto___19592)){
args__9960__auto__.push((arguments[i__9954__auto___19593]));

var G__19594 = (i__9954__auto___19593 + (1));
i__9954__auto___19593 = G__19594;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((4) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9961__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq19586){
var G__19587 = cljs.core.first.call(null,seq19586);
var seq19586__$1 = cljs.core.next.call(null,seq19586);
var G__19588 = cljs.core.first.call(null,seq19586__$1);
var seq19586__$2 = cljs.core.next.call(null,seq19586__$1);
var G__19589 = cljs.core.first.call(null,seq19586__$2);
var seq19586__$3 = cljs.core.next.call(null,seq19586__$2);
var G__19590 = cljs.core.first.call(null,seq19586__$3);
var seq19586__$4 = cljs.core.next.call(null,seq19586__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19587,G__19588,G__19589,G__19590,seq19586__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__9999__auto___19599 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19600 = arguments.length;
var i__9954__auto___19601 = (0);
while(true){
if((i__9954__auto___19601 < len__9953__auto___19600)){
args__9960__auto__.push((arguments[i__9954__auto___19601]));

var G__19602 = (i__9954__auto___19601 + (1));
i__9954__auto___19601 = G__19602;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq19595){
var G__19596 = cljs.core.first.call(null,seq19595);
var seq19595__$1 = cljs.core.next.call(null,seq19595);
var G__19597 = cljs.core.first.call(null,seq19595__$1);
var seq19595__$2 = cljs.core.next.call(null,seq19595__$1);
var G__19598 = cljs.core.first.call(null,seq19595__$2);
var seq19595__$3 = cljs.core.next.call(null,seq19595__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19596,G__19597,G__19598,seq19595__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__9999__auto___19607 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19608 = arguments.length;
var i__9954__auto___19609 = (0);
while(true){
if((i__9954__auto___19609 < len__9953__auto___19608)){
args__9960__auto__.push((arguments[i__9954__auto___19609]));

var G__19610 = (i__9954__auto___19609 + (1));
i__9954__auto___19609 = G__19610;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq19603){
var G__19604 = cljs.core.first.call(null,seq19603);
var seq19603__$1 = cljs.core.next.call(null,seq19603);
var G__19605 = cljs.core.first.call(null,seq19603__$1);
var seq19603__$2 = cljs.core.next.call(null,seq19603__$1);
var G__19606 = cljs.core.first.call(null,seq19603__$2);
var seq19603__$3 = cljs.core.next.call(null,seq19603__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19604,G__19605,G__19606,seq19603__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__9999__auto___19620 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__19619 = arguments.length;
switch (G__19619) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19622 = arguments.length;
var i__9954__auto___19623 = (0);
while(true){
if((i__9954__auto___19623 < len__9953__auto___19622)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19623]));

var G__19624 = (i__9954__auto___19623 + (1));
i__9954__auto___19623 = G__19624;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9977__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__9628__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19611__auto__","temp__19611__auto__",-980566372,null)),(function (){var x__9628__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19611__auto__","temp__19611__auto__",-980566372,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19611__auto__","temp__19611__auto__",-980566372,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq19613){
var G__19614 = cljs.core.first.call(null,seq19613);
var seq19613__$1 = cljs.core.next.call(null,seq19613);
var G__19615 = cljs.core.first.call(null,seq19613__$1);
var seq19613__$2 = cljs.core.next.call(null,seq19613__$1);
var G__19616 = cljs.core.first.call(null,seq19613__$2);
var seq19613__$3 = cljs.core.next.call(null,seq19613__$2);
var G__19617 = cljs.core.first.call(null,seq19613__$3);
var seq19613__$4 = cljs.core.next.call(null,seq19613__$3);
var G__19618 = cljs.core.first.call(null,seq19613__$4);
var seq19613__$5 = cljs.core.next.call(null,seq19613__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__19614,G__19615,G__19616,G__19617,G__19618,seq19613__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__9999__auto___19630 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19631 = arguments.length;
var i__9954__auto___19632 = (0);
while(true){
if((i__9954__auto___19632 < len__9953__auto___19631)){
args__9960__auto__.push((arguments[i__9954__auto___19632]));

var G__19633 = (i__9954__auto___19632 + (1));
i__9954__auto___19632 = G__19633;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19625__auto__","temp__19625__auto__",1669801736,null)),(function (){var x__9628__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19625__auto__","temp__19625__auto__",1669801736,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19625__auto__","temp__19625__auto__",1669801736,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq19626){
var G__19627 = cljs.core.first.call(null,seq19626);
var seq19626__$1 = cljs.core.next.call(null,seq19626);
var G__19628 = cljs.core.first.call(null,seq19626__$1);
var seq19626__$2 = cljs.core.next.call(null,seq19626__$1);
var G__19629 = cljs.core.first.call(null,seq19626__$2);
var seq19626__$3 = cljs.core.next.call(null,seq19626__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__19627,G__19628,G__19629,seq19626__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__19634_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__19634_SHARP_)){
return cljs.core.first.call(null,p1__19634_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19634_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19634_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__19635_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__19635_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__19636 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__19637 = cljs.core.next.call(null,fdecls);
ret = G__19636;
fdecls = G__19637;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__9628__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
}
});
var ret__9999__auto___19638 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__9628__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__19645 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__19646 = n;
var G__19647 = cljs.core.nnext.call(null,bs);
var G__19648 = true;
ret = G__19645;
n = G__19646;
bs = G__19647;
seen_rest_QMARK_ = G__19648;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__19649 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9628__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9628__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__9628__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__19650 = (n + (1));
var G__19651 = cljs.core.next.call(null,bs);
var G__19652 = seen_rest_QMARK_;
ret = G__19649;
n = G__19650;
bs = G__19651;
seen_rest_QMARK_ = G__19652;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__9628__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__9628__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__19639_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__8674__auto__ = mkns;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.namespace.call(null,p1__19639_SHARP_);
}
})(),cljs.core.name.call(null,p1__19639_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__19640_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.symbol.call(null,(function (){var or__8674__auto__ = mkns;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.namespace.call(null,p1__19640_SHARP_);
}
})(),cljs.core.name.call(null,p1__19640_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__19641_SHARP_,p2__19642_SHARP_){
return cljs.core.assoc.call(null,p1__19641_SHARP_,p2__19642_SHARP_,cljs.core.val.call(null,entry).call(null,p2__19642_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__9628__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$2);
})(),x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__9628__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__19653 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__19654 = cljs.core.next.call(null,bes);
ret = G__19653;
bes = G__19654;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__5455__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__19643_SHARP_){
return (cljs.core.first.call(null,p1__19643_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5455__auto__){
var kwbs = temp__5455__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__9999__auto___19655 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9628__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__9628__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__9999__auto___19660 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19661 = arguments.length;
var i__9954__auto___19662 = (0);
while(true){
if((i__9954__auto___19662 < len__9953__auto___19661)){
args__9960__auto__.push((arguments[i__9954__auto___19662]));

var G__19663 = (i__9954__auto___19662 + (1));
i__9954__auto___19662 = G__19663;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__9628__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq19656){
var G__19657 = cljs.core.first.call(null,seq19656);
var seq19656__$1 = cljs.core.next.call(null,seq19656);
var G__19658 = cljs.core.first.call(null,seq19656__$1);
var seq19656__$2 = cljs.core.next.call(null,seq19656__$1);
var G__19659 = cljs.core.first.call(null,seq19656__$2);
var seq19656__$3 = cljs.core.next.call(null,seq19656__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__19657,G__19658,G__19659,seq19656__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__9999__auto___19672 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19673 = arguments.length;
var i__9954__auto___19674 = (0);
while(true){
if((i__9954__auto___19674 < len__9953__auto___19673)){
args__9960__auto__.push((arguments[i__9954__auto___19674]));

var G__19675 = (i__9954__auto___19674 + (1));
i__9954__auto___19674 = G__19675;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9628__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__19668){
var vec__19669 = p__19668;
var b = cljs.core.nth.call(null,vec__19669,(0),null);
var v = cljs.core.nth.call(null,vec__19669,(1),null);
var g = cljs.core.nth.call(null,vec__19669,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq19664){
var G__19665 = cljs.core.first.call(null,seq19664);
var seq19664__$1 = cljs.core.next.call(null,seq19664);
var G__19666 = cljs.core.first.call(null,seq19664__$1);
var seq19664__$2 = cljs.core.next.call(null,seq19664__$1);
var G__19667 = cljs.core.first.call(null,seq19664__$2);
var seq19664__$3 = cljs.core.next.call(null,seq19664__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__19665,G__19666,G__19667,seq19664__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__19676_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19676_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__19677){
var vec__19678 = p__19677;
var p = cljs.core.nth.call(null,vec__19678,(0),null);
var b = cljs.core.nth.call(null,vec__19678,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
var ret__9999__auto___19684 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19685 = arguments.length;
var i__9954__auto___19686 = (0);
while(true){
if((i__9954__auto___19686 < len__9953__auto___19685)){
args__9960__auto__.push((arguments[i__9954__auto___19686]));

var G__19687 = (i__9954__auto___19686 + (1));
i__9954__auto___19686 = G__19687;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,xs)));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq19681){
var G__19682 = cljs.core.first.call(null,seq19681);
var seq19681__$1 = cljs.core.next.call(null,seq19681);
var G__19683 = cljs.core.first.call(null,seq19681__$1);
var seq19681__$2 = cljs.core.next.call(null,seq19681__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__19682,G__19683,seq19681__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8662__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__8662__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__8662__auto__;
}
});
var ret__9999__auto___19698 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__19696 = arguments.length;
switch (G__19696) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19700 = arguments.length;
var i__9954__auto___19701 = (0);
while(true){
if((i__9954__auto___19701 < len__9953__auto___19700)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19701]));

var G__19702 = (i__9954__auto___19701 + (1));
i__9954__auto___19701 = G__19702;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9977__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__19688_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__19688_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__19689_SHARP_){
var _STAR_cljs_warnings_STAR_19697 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__19689_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_19697;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9628__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19690__auto__","and__19690__auto__",848102924,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19690__auto__","and__19690__auto__",848102924,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19690__auto__","and__19690__auto__",848102924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq19692){
var G__19693 = cljs.core.first.call(null,seq19692);
var seq19692__$1 = cljs.core.next.call(null,seq19692);
var G__19694 = cljs.core.first.call(null,seq19692__$1);
var seq19692__$2 = cljs.core.next.call(null,seq19692__$1);
var G__19695 = cljs.core.first.call(null,seq19692__$2);
var seq19692__$3 = cljs.core.next.call(null,seq19692__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__19693,G__19694,G__19695,seq19692__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__9999__auto___19713 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__19711 = arguments.length;
switch (G__19711) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19715 = arguments.length;
var i__9954__auto___19716 = (0);
while(true){
if((i__9954__auto___19716 < len__9953__auto___19715)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19716]));

var G__19717 = (i__9954__auto___19716 + (1));
i__9954__auto___19716 = G__19717;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9977__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__19703_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__19703_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__19704_SHARP_){
var _STAR_cljs_warnings_STAR_19712 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__19704_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_19712;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9628__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19705__auto__","or__19705__auto__",-341442445,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19705__auto__","or__19705__auto__",-341442445,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19705__auto__","or__19705__auto__",-341442445,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq19707){
var G__19708 = cljs.core.first.call(null,seq19707);
var seq19707__$1 = cljs.core.next.call(null,seq19707);
var G__19709 = cljs.core.first.call(null,seq19707__$1);
var seq19707__$2 = cljs.core.next.call(null,seq19707__$1);
var G__19710 = cljs.core.first.call(null,seq19707__$2);
var seq19707__$3 = cljs.core.next.call(null,seq19707__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__19708,G__19709,G__19710,seq19707__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__9999__auto___19718 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19719 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19720 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__9999__auto___19721 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__9999__auto___19722 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__9999__auto___19723 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__9999__auto___19724 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__9999__auto___19725 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__9999__auto___19726 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__9999__auto___19727 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__9999__auto___19728 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9628__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__9999__auto___19733 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__19730 = clojure.string.split.call(null,comment,/\n/);
var seq__19731 = cljs.core.seq.call(null,vec__19730);
var first__19732 = cljs.core.first.call(null,seq__19731);
var seq__19731__$1 = cljs.core.next.call(null,seq__19731);
var x = first__19732;
var ys = seq__19731__$1;
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__19730,seq__19731,first__19732,seq__19731__$1,x,ys){
return (function (p1__19729_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__19729_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__19730,seq__19731,first__19732,seq__19731__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__9999__auto___19734 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$2);
})(),x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__9999__auto___19735 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__9999__auto___19736 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19737 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19738 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19739 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19740 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19741 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19744 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19742__auto__","c__19742__auto__",1539822240,null)),(function (){var x__9628__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19743__auto__","x__19743__auto__",-775652153,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19743__auto__","x__19743__auto__",-775652153,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19742__auto__","c__19742__auto__",1539822240,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19745 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19746 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19747 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19757 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__19754 = arguments.length;
switch (G__19754) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19759 = arguments.length;
var i__9954__auto___19760 = (0);
while(true){
if((i__9954__auto___19760 < len__9953__auto___19759)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19760]));

var G__19761 = (i__9954__auto___19760 + (1));
i__9954__auto___19760 = G__19761;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__19755 = cljs.analyzer.checked_arrays.call(null);
var G__19755__$1 = (((G__19755 instanceof cljs.core.Keyword))?G__19755.fqn:null);
switch (G__19755__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__19756 = cljs.analyzer.checked_arrays.call(null);
var G__19756__$1 = (((G__19756 instanceof cljs.core.Keyword))?G__19756.fqn:null);
switch (G__19756__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9628__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq19749){
var G__19750 = cljs.core.first.call(null,seq19749);
var seq19749__$1 = cljs.core.next.call(null,seq19749);
var G__19751 = cljs.core.first.call(null,seq19749__$1);
var seq19749__$2 = cljs.core.next.call(null,seq19749__$1);
var G__19752 = cljs.core.first.call(null,seq19749__$2);
var seq19749__$3 = cljs.core.next.call(null,seq19749__$2);
var G__19753 = cljs.core.first.call(null,seq19749__$3);
var seq19749__$4 = cljs.core.next.call(null,seq19749__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__19750,G__19751,G__19752,G__19753,seq19749__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__9999__auto___19774 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__19771 = arguments.length;
switch (G__19771) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19776 = arguments.length;
var i__9954__auto___19777 = (0);
while(true){
if((i__9954__auto___19777 < len__9953__auto___19776)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19777]));

var G__19778 = (i__9954__auto___19777 + (1));
i__9954__auto___19777 = G__19778;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9977__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__19772 = cljs.analyzer.checked_arrays.call(null);
var G__19772__$1 = (((G__19772 instanceof cljs.core.Keyword))?G__19772.fqn:null);
switch (G__19772__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$2);
})(),x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__19773 = cljs.analyzer.checked_arrays.call(null);
var G__19773__$1 = (((G__19773 instanceof cljs.core.Keyword))?G__19773.fqn:null);
switch (G__19773__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9628__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq19765){
var G__19766 = cljs.core.first.call(null,seq19765);
var seq19765__$1 = cljs.core.next.call(null,seq19765);
var G__19767 = cljs.core.first.call(null,seq19765__$1);
var seq19765__$2 = cljs.core.next.call(null,seq19765__$1);
var G__19768 = cljs.core.first.call(null,seq19765__$2);
var seq19765__$3 = cljs.core.next.call(null,seq19765__$2);
var G__19769 = cljs.core.first.call(null,seq19765__$3);
var seq19765__$4 = cljs.core.next.call(null,seq19765__$3);
var G__19770 = cljs.core.first.call(null,seq19765__$4);
var seq19765__$5 = cljs.core.next.call(null,seq19765__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__19766,G__19767,G__19768,G__19769,G__19770,seq19765__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__9999__auto___19781 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__9999__auto___19782 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$2);
})(),x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__9999__auto___19790 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__19789 = arguments.length;
switch (G__19789) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19792 = arguments.length;
var i__9954__auto___19793 = (0);
while(true){
if((i__9954__auto___19793 < len__9953__auto___19792)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19793]));

var G__19794 = (i__9954__auto___19793 + (1));
i__9954__auto___19793 = G__19794;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq19784){
var G__19785 = cljs.core.first.call(null,seq19784);
var seq19784__$1 = cljs.core.next.call(null,seq19784);
var G__19786 = cljs.core.first.call(null,seq19784__$1);
var seq19784__$2 = cljs.core.next.call(null,seq19784__$1);
var G__19787 = cljs.core.first.call(null,seq19784__$2);
var seq19784__$3 = cljs.core.next.call(null,seq19784__$2);
var G__19788 = cljs.core.first.call(null,seq19784__$3);
var seq19784__$4 = cljs.core.next.call(null,seq19784__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__19785,G__19786,G__19787,G__19788,seq19784__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__9999__auto___19795 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__9999__auto___19796 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__9999__auto___19797 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__9999__auto___19798 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__9999__auto___19799 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__9999__auto___19800 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__9999__auto___19801 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__9999__auto___19802 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__9999__auto___19803 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__9999__auto___19807 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19808 = arguments.length;
var i__9954__auto___19809 = (0);
while(true){
if((i__9954__auto___19809 < len__9953__auto___19808)){
args__9960__auto__.push((arguments[i__9954__auto___19809]));

var G__19810 = (i__9954__auto___19809 + (1));
i__9954__auto___19809 = G__19810;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq19804){
var G__19805 = cljs.core.first.call(null,seq19804);
var seq19804__$1 = cljs.core.next.call(null,seq19804);
var G__19806 = cljs.core.first.call(null,seq19804__$1);
var seq19804__$2 = cljs.core.next.call(null,seq19804__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__19805,G__19806,seq19804__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__9999__auto___19814 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19815 = arguments.length;
var i__9954__auto___19816 = (0);
while(true){
if((i__9954__auto___19816 < len__9953__auto___19815)){
args__9960__auto__.push((arguments[i__9954__auto___19816]));

var G__19817 = (i__9954__auto___19816 + (1));
i__9954__auto___19816 = G__19817;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq19811){
var G__19812 = cljs.core.first.call(null,seq19811);
var seq19811__$1 = cljs.core.next.call(null,seq19811);
var G__19813 = cljs.core.first.call(null,seq19811__$1);
var seq19811__$2 = cljs.core.next.call(null,seq19811__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__19812,G__19813,seq19811__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__9999__auto___19818 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__9999__auto___19819 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__9999__auto___19823 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19824 = arguments.length;
var i__9954__auto___19825 = (0);
while(true){
if((i__9954__auto___19825 < len__9953__auto___19824)){
args__9960__auto__.push((arguments[i__9954__auto___19825]));

var G__19826 = (i__9954__auto___19825 + (1));
i__9954__auto___19825 = G__19826;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq19820){
var G__19821 = cljs.core.first.call(null,seq19820);
var seq19820__$1 = cljs.core.next.call(null,seq19820);
var G__19822 = cljs.core.first.call(null,seq19820__$1);
var seq19820__$2 = cljs.core.next.call(null,seq19820__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__19821,G__19822,seq19820__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__9999__auto___19827 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__9999__auto___19828 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__9999__auto___19832 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19833 = arguments.length;
var i__9954__auto___19834 = (0);
while(true){
if((i__9954__auto___19834 < len__9953__auto___19833)){
args__9960__auto__.push((arguments[i__9954__auto___19834]));

var G__19835 = (i__9954__auto___19834 + (1));
i__9954__auto___19834 = G__19835;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq19829){
var G__19830 = cljs.core.first.call(null,seq19829);
var seq19829__$1 = cljs.core.next.call(null,seq19829);
var G__19831 = cljs.core.first.call(null,seq19829__$1);
var seq19829__$2 = cljs.core.next.call(null,seq19829__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__19830,G__19831,seq19829__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__9999__auto___19839 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19840 = arguments.length;
var i__9954__auto___19841 = (0);
while(true){
if((i__9954__auto___19841 < len__9953__auto___19840)){
args__9960__auto__.push((arguments[i__9954__auto___19841]));

var G__19842 = (i__9954__auto___19841 + (1));
i__9954__auto___19841 = G__19842;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq19836){
var G__19837 = cljs.core.first.call(null,seq19836);
var seq19836__$1 = cljs.core.next.call(null,seq19836);
var G__19838 = cljs.core.first.call(null,seq19836__$1);
var seq19836__$2 = cljs.core.next.call(null,seq19836__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__19837,G__19838,seq19836__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__9999__auto___19843 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__9999__auto___19844 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__9999__auto___19845 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__9999__auto___19849 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19850 = arguments.length;
var i__9954__auto___19851 = (0);
while(true){
if((i__9954__auto___19851 < len__9953__auto___19850)){
args__9960__auto__.push((arguments[i__9954__auto___19851]));

var G__19852 = (i__9954__auto___19851 + (1));
i__9954__auto___19851 = G__19852;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq19846){
var G__19847 = cljs.core.first.call(null,seq19846);
var seq19846__$1 = cljs.core.next.call(null,seq19846);
var G__19848 = cljs.core.first.call(null,seq19846__$1);
var seq19846__$2 = cljs.core.next.call(null,seq19846__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__19847,G__19848,seq19846__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__9999__auto___19856 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__9960__auto__ = [];
var len__9953__auto___19857 = arguments.length;
var i__9954__auto___19858 = (0);
while(true){
if((i__9954__auto___19858 < len__9953__auto___19857)){
args__9960__auto__.push((arguments[i__9954__auto___19858]));

var G__19859 = (i__9954__auto___19858 + (1));
i__9954__auto___19858 = G__19859;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq19853){
var G__19854 = cljs.core.first.call(null,seq19853);
var seq19853__$1 = cljs.core.next.call(null,seq19853);
var G__19855 = cljs.core.first.call(null,seq19853__$1);
var seq19853__$2 = cljs.core.next.call(null,seq19853__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__19854,G__19855,seq19853__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__9999__auto___19867 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__19866 = arguments.length;
switch (G__19866) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19869 = arguments.length;
var i__9954__auto___19870 = (0);
while(true){
if((i__9954__auto___19870 < len__9953__auto___19869)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19870]));

var G__19871 = (i__9954__auto___19870 + (1));
i__9954__auto___19870 = G__19871;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq19861){
var G__19862 = cljs.core.first.call(null,seq19861);
var seq19861__$1 = cljs.core.next.call(null,seq19861);
var G__19863 = cljs.core.first.call(null,seq19861__$1);
var seq19861__$2 = cljs.core.next.call(null,seq19861__$1);
var G__19864 = cljs.core.first.call(null,seq19861__$2);
var seq19861__$3 = cljs.core.next.call(null,seq19861__$2);
var G__19865 = cljs.core.first.call(null,seq19861__$3);
var seq19861__$4 = cljs.core.next.call(null,seq19861__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__19862,G__19863,G__19864,G__19865,seq19861__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__9999__auto___19879 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__19878 = arguments.length;
switch (G__19878) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19881 = arguments.length;
var i__9954__auto___19882 = (0);
while(true){
if((i__9954__auto___19882 < len__9953__auto___19881)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19882]));

var G__19883 = (i__9954__auto___19882 + (1));
i__9954__auto___19882 = G__19883;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq19873){
var G__19874 = cljs.core.first.call(null,seq19873);
var seq19873__$1 = cljs.core.next.call(null,seq19873);
var G__19875 = cljs.core.first.call(null,seq19873__$1);
var seq19873__$2 = cljs.core.next.call(null,seq19873__$1);
var G__19876 = cljs.core.first.call(null,seq19873__$2);
var seq19873__$3 = cljs.core.next.call(null,seq19873__$2);
var G__19877 = cljs.core.first.call(null,seq19873__$3);
var seq19873__$4 = cljs.core.next.call(null,seq19873__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__19874,G__19875,G__19876,G__19877,seq19873__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__9999__auto___19891 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__19890 = arguments.length;
switch (G__19890) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19893 = arguments.length;
var i__9954__auto___19894 = (0);
while(true){
if((i__9954__auto___19894 < len__9953__auto___19893)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19894]));

var G__19895 = (i__9954__auto___19894 + (1));
i__9954__auto___19894 = G__19895;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq19885){
var G__19886 = cljs.core.first.call(null,seq19885);
var seq19885__$1 = cljs.core.next.call(null,seq19885);
var G__19887 = cljs.core.first.call(null,seq19885__$1);
var seq19885__$2 = cljs.core.next.call(null,seq19885__$1);
var G__19888 = cljs.core.first.call(null,seq19885__$2);
var seq19885__$3 = cljs.core.next.call(null,seq19885__$2);
var G__19889 = cljs.core.first.call(null,seq19885__$3);
var seq19885__$4 = cljs.core.next.call(null,seq19885__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__19886,G__19887,G__19888,G__19889,seq19885__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__9999__auto___19903 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__19902 = arguments.length;
switch (G__19902) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19905 = arguments.length;
var i__9954__auto___19906 = (0);
while(true){
if((i__9954__auto___19906 < len__9953__auto___19905)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19906]));

var G__19907 = (i__9954__auto___19906 + (1));
i__9954__auto___19906 = G__19907;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq19897){
var G__19898 = cljs.core.first.call(null,seq19897);
var seq19897__$1 = cljs.core.next.call(null,seq19897);
var G__19899 = cljs.core.first.call(null,seq19897__$1);
var seq19897__$2 = cljs.core.next.call(null,seq19897__$1);
var G__19900 = cljs.core.first.call(null,seq19897__$2);
var seq19897__$3 = cljs.core.next.call(null,seq19897__$2);
var G__19901 = cljs.core.first.call(null,seq19897__$3);
var seq19897__$4 = cljs.core.next.call(null,seq19897__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__19898,G__19899,G__19900,G__19901,seq19897__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__9999__auto___19915 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__19914 = arguments.length;
switch (G__19914) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19917 = arguments.length;
var i__9954__auto___19918 = (0);
while(true){
if((i__9954__auto___19918 < len__9953__auto___19917)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19918]));

var G__19919 = (i__9954__auto___19918 + (1));
i__9954__auto___19918 = G__19919;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq19909){
var G__19910 = cljs.core.first.call(null,seq19909);
var seq19909__$1 = cljs.core.next.call(null,seq19909);
var G__19911 = cljs.core.first.call(null,seq19909__$1);
var seq19909__$2 = cljs.core.next.call(null,seq19909__$1);
var G__19912 = cljs.core.first.call(null,seq19909__$2);
var seq19909__$3 = cljs.core.next.call(null,seq19909__$2);
var G__19913 = cljs.core.first.call(null,seq19909__$3);
var seq19909__$4 = cljs.core.next.call(null,seq19909__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__19910,G__19911,G__19912,G__19913,seq19909__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__9999__auto___19927 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__19926 = arguments.length;
switch (G__19926) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19929 = arguments.length;
var i__9954__auto___19930 = (0);
while(true){
if((i__9954__auto___19930 < len__9953__auto___19929)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19930]));

var G__19931 = (i__9954__auto___19930 + (1));
i__9954__auto___19930 = G__19931;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq19921){
var G__19922 = cljs.core.first.call(null,seq19921);
var seq19921__$1 = cljs.core.next.call(null,seq19921);
var G__19923 = cljs.core.first.call(null,seq19921__$1);
var seq19921__$2 = cljs.core.next.call(null,seq19921__$1);
var G__19924 = cljs.core.first.call(null,seq19921__$2);
var seq19921__$3 = cljs.core.next.call(null,seq19921__$2);
var G__19925 = cljs.core.first.call(null,seq19921__$3);
var seq19921__$4 = cljs.core.next.call(null,seq19921__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19922,G__19923,G__19924,G__19925,seq19921__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__9999__auto___19939 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__19938 = arguments.length;
switch (G__19938) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19941 = arguments.length;
var i__9954__auto___19942 = (0);
while(true){
if((i__9954__auto___19942 < len__9953__auto___19941)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19942]));

var G__19943 = (i__9954__auto___19942 + (1));
i__9954__auto___19942 = G__19943;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq19933){
var G__19934 = cljs.core.first.call(null,seq19933);
var seq19933__$1 = cljs.core.next.call(null,seq19933);
var G__19935 = cljs.core.first.call(null,seq19933__$1);
var seq19933__$2 = cljs.core.next.call(null,seq19933__$1);
var G__19936 = cljs.core.first.call(null,seq19933__$2);
var seq19933__$3 = cljs.core.next.call(null,seq19933__$2);
var G__19937 = cljs.core.first.call(null,seq19933__$3);
var seq19933__$4 = cljs.core.next.call(null,seq19933__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__19934,G__19935,G__19936,G__19937,seq19933__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__9999__auto___19951 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__19950 = arguments.length;
switch (G__19950) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19953 = arguments.length;
var i__9954__auto___19954 = (0);
while(true){
if((i__9954__auto___19954 < len__9953__auto___19953)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19954]));

var G__19955 = (i__9954__auto___19954 + (1));
i__9954__auto___19954 = G__19955;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq19945){
var G__19946 = cljs.core.first.call(null,seq19945);
var seq19945__$1 = cljs.core.next.call(null,seq19945);
var G__19947 = cljs.core.first.call(null,seq19945__$1);
var seq19945__$2 = cljs.core.next.call(null,seq19945__$1);
var G__19948 = cljs.core.first.call(null,seq19945__$2);
var seq19945__$3 = cljs.core.next.call(null,seq19945__$2);
var G__19949 = cljs.core.first.call(null,seq19945__$3);
var seq19945__$4 = cljs.core.next.call(null,seq19945__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19946,G__19947,G__19948,G__19949,seq19945__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__9999__auto___19963 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__19962 = arguments.length;
switch (G__19962) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19965 = arguments.length;
var i__9954__auto___19966 = (0);
while(true){
if((i__9954__auto___19966 < len__9953__auto___19965)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19966]));

var G__19967 = (i__9954__auto___19966 + (1));
i__9954__auto___19966 = G__19967;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq19957){
var G__19958 = cljs.core.first.call(null,seq19957);
var seq19957__$1 = cljs.core.next.call(null,seq19957);
var G__19959 = cljs.core.first.call(null,seq19957__$1);
var seq19957__$2 = cljs.core.next.call(null,seq19957__$1);
var G__19960 = cljs.core.first.call(null,seq19957__$2);
var seq19957__$3 = cljs.core.next.call(null,seq19957__$2);
var G__19961 = cljs.core.first.call(null,seq19957__$3);
var seq19957__$4 = cljs.core.next.call(null,seq19957__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19958,G__19959,G__19960,G__19961,seq19957__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__9999__auto___19968 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__9999__auto___19969 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__9999__auto___19970 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19971 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19972 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___19982 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__19981 = arguments.length;
switch (G__19981) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19984 = arguments.length;
var i__9954__auto___19985 = (0);
while(true){
if((i__9954__auto___19985 < len__9953__auto___19984)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19985]));

var G__19986 = (i__9954__auto___19985 + (1));
i__9954__auto___19985 = G__19986;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19973__auto__","x__19973__auto__",-826100521,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19974__auto__","y__19974__auto__",-747624773,null)),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19973__auto__","x__19973__auto__",-826100521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19974__auto__","y__19974__auto__",-747624773,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19973__auto__","x__19973__auto__",-826100521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19974__auto__","y__19974__auto__",-747624773,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq19976){
var G__19977 = cljs.core.first.call(null,seq19976);
var seq19976__$1 = cljs.core.next.call(null,seq19976);
var G__19978 = cljs.core.first.call(null,seq19976__$1);
var seq19976__$2 = cljs.core.next.call(null,seq19976__$1);
var G__19979 = cljs.core.first.call(null,seq19976__$2);
var seq19976__$3 = cljs.core.next.call(null,seq19976__$2);
var G__19980 = cljs.core.first.call(null,seq19976__$3);
var seq19976__$4 = cljs.core.next.call(null,seq19976__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__19977,G__19978,G__19979,G__19980,seq19976__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__9999__auto___19996 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__19995 = arguments.length;
switch (G__19995) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___19998 = arguments.length;
var i__9954__auto___19999 = (0);
while(true){
if((i__9954__auto___19999 < len__9953__auto___19998)){
args_arr__9976__auto__.push((arguments[i__9954__auto___19999]));

var G__20000 = (i__9954__auto___19999 + (1));
i__9954__auto___19999 = G__20000;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19987__auto__","x__19987__auto__",666609389,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19988__auto__","y__19988__auto__",-1222869889,null)),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19987__auto__","x__19987__auto__",666609389,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19988__auto__","y__19988__auto__",-1222869889,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19987__auto__","x__19987__auto__",666609389,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19988__auto__","y__19988__auto__",-1222869889,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq19990){
var G__19991 = cljs.core.first.call(null,seq19990);
var seq19990__$1 = cljs.core.next.call(null,seq19990);
var G__19992 = cljs.core.first.call(null,seq19990__$1);
var seq19990__$2 = cljs.core.next.call(null,seq19990__$1);
var G__19993 = cljs.core.first.call(null,seq19990__$2);
var seq19990__$3 = cljs.core.next.call(null,seq19990__$2);
var G__19994 = cljs.core.first.call(null,seq19990__$3);
var seq19990__$4 = cljs.core.next.call(null,seq19990__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__19991,G__19992,G__19993,G__19994,seq19990__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__9999__auto___20001 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__9999__auto___20002 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__9999__auto___20010 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__20009 = arguments.length;
switch (G__20009) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20012 = arguments.length;
var i__9954__auto___20013 = (0);
while(true){
if((i__9954__auto___20013 < len__9953__auto___20012)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20013]));

var G__20014 = (i__9954__auto___20013 + (1));
i__9954__auto___20013 = G__20014;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq20004){
var G__20005 = cljs.core.first.call(null,seq20004);
var seq20004__$1 = cljs.core.next.call(null,seq20004);
var G__20006 = cljs.core.first.call(null,seq20004__$1);
var seq20004__$2 = cljs.core.next.call(null,seq20004__$1);
var G__20007 = cljs.core.first.call(null,seq20004__$2);
var seq20004__$3 = cljs.core.next.call(null,seq20004__$2);
var G__20008 = cljs.core.first.call(null,seq20004__$3);
var seq20004__$4 = cljs.core.next.call(null,seq20004__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__20005,G__20006,G__20007,G__20008,seq20004__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__9999__auto___20022 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__20021 = arguments.length;
switch (G__20021) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20024 = arguments.length;
var i__9954__auto___20025 = (0);
while(true){
if((i__9954__auto___20025 < len__9953__auto___20024)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20025]));

var G__20026 = (i__9954__auto___20025 + (1));
i__9954__auto___20025 = G__20026;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq20016){
var G__20017 = cljs.core.first.call(null,seq20016);
var seq20016__$1 = cljs.core.next.call(null,seq20016);
var G__20018 = cljs.core.first.call(null,seq20016__$1);
var seq20016__$2 = cljs.core.next.call(null,seq20016__$1);
var G__20019 = cljs.core.first.call(null,seq20016__$2);
var seq20016__$3 = cljs.core.next.call(null,seq20016__$2);
var G__20020 = cljs.core.first.call(null,seq20016__$3);
var seq20016__$4 = cljs.core.next.call(null,seq20016__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__20017,G__20018,G__20019,G__20020,seq20016__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__9999__auto___20034 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__20033 = arguments.length;
switch (G__20033) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20036 = arguments.length;
var i__9954__auto___20037 = (0);
while(true){
if((i__9954__auto___20037 < len__9953__auto___20036)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20037]));

var G__20038 = (i__9954__auto___20037 + (1));
i__9954__auto___20037 = G__20038;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq20028){
var G__20029 = cljs.core.first.call(null,seq20028);
var seq20028__$1 = cljs.core.next.call(null,seq20028);
var G__20030 = cljs.core.first.call(null,seq20028__$1);
var seq20028__$2 = cljs.core.next.call(null,seq20028__$1);
var G__20031 = cljs.core.first.call(null,seq20028__$2);
var seq20028__$3 = cljs.core.next.call(null,seq20028__$2);
var G__20032 = cljs.core.first.call(null,seq20028__$3);
var seq20028__$4 = cljs.core.next.call(null,seq20028__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__20029,G__20030,G__20031,G__20032,seq20028__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__9999__auto___20039 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__9999__auto___20047 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__20046 = arguments.length;
switch (G__20046) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20049 = arguments.length;
var i__9954__auto___20050 = (0);
while(true){
if((i__9954__auto___20050 < len__9953__auto___20049)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20050]));

var G__20051 = (i__9954__auto___20050 + (1));
i__9954__auto___20050 = G__20051;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq20041){
var G__20042 = cljs.core.first.call(null,seq20041);
var seq20041__$1 = cljs.core.next.call(null,seq20041);
var G__20043 = cljs.core.first.call(null,seq20041__$1);
var seq20041__$2 = cljs.core.next.call(null,seq20041__$1);
var G__20044 = cljs.core.first.call(null,seq20041__$2);
var seq20041__$3 = cljs.core.next.call(null,seq20041__$2);
var G__20045 = cljs.core.first.call(null,seq20041__$3);
var seq20041__$4 = cljs.core.next.call(null,seq20041__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__20042,G__20043,G__20044,G__20045,seq20041__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__9999__auto___20059 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__20058 = arguments.length;
switch (G__20058) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20061 = arguments.length;
var i__9954__auto___20062 = (0);
while(true){
if((i__9954__auto___20062 < len__9953__auto___20061)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20062]));

var G__20063 = (i__9954__auto___20062 + (1));
i__9954__auto___20062 = G__20063;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq20053){
var G__20054 = cljs.core.first.call(null,seq20053);
var seq20053__$1 = cljs.core.next.call(null,seq20053);
var G__20055 = cljs.core.first.call(null,seq20053__$1);
var seq20053__$2 = cljs.core.next.call(null,seq20053__$1);
var G__20056 = cljs.core.first.call(null,seq20053__$2);
var seq20053__$3 = cljs.core.next.call(null,seq20053__$2);
var G__20057 = cljs.core.first.call(null,seq20053__$3);
var seq20053__$4 = cljs.core.next.call(null,seq20053__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__20054,G__20055,G__20056,G__20057,seq20053__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__9999__auto___20064 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__9999__auto___20065 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__9999__auto___20066 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__9999__auto___20067 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__9999__auto___20068 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__9999__auto___20069 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__9999__auto___20070 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__9999__auto___20071 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__9999__auto___20072 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__9999__auto___20073 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__9628__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__9999__auto___20075 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20074__auto__","h__20074__auto__",-1728358706,null)),(function (){var x__9628__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20074__auto__","h__20074__auto__",-1728358706,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20074__auto__","h__20074__auto__",-1728358706,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20074__auto__","h__20074__auto__",-1728358706,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20074__auto__","h__20074__auto__",-1728358706,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20074__auto__","h__20074__auto__",-1728358706,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20076__auto__","x__20076__auto__",635570342,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20076__auto__","x__20076__auto__",635570342,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
var ret__9999__auto___20084 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20085 = arguments.length;
var i__9954__auto___20086 = (0);
while(true){
if((i__9954__auto___20086 < len__9953__auto___20085)){
args__9960__auto__.push((arguments[i__9954__auto___20086]));

var G__20087 = (i__9954__auto___20086 + (1));
i__9954__auto___20086 = G__20087;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((6) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__9961__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq20077){
var G__20078 = cljs.core.first.call(null,seq20077);
var seq20077__$1 = cljs.core.next.call(null,seq20077);
var G__20079 = cljs.core.first.call(null,seq20077__$1);
var seq20077__$2 = cljs.core.next.call(null,seq20077__$1);
var G__20080 = cljs.core.first.call(null,seq20077__$2);
var seq20077__$3 = cljs.core.next.call(null,seq20077__$2);
var G__20081 = cljs.core.first.call(null,seq20077__$3);
var seq20077__$4 = cljs.core.next.call(null,seq20077__$3);
var G__20082 = cljs.core.first.call(null,seq20077__$4);
var seq20077__$5 = cljs.core.next.call(null,seq20077__$4);
var G__20083 = cljs.core.first.call(null,seq20077__$5);
var seq20077__$6 = cljs.core.next.call(null,seq20077__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__20078,G__20079,G__20080,G__20081,G__20082,G__20083,seq20077__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = clojure.walk.postwalk.call(null,(function (p1__20088_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__20088_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__20088_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__20088_SHARP_));
} else {
return p1__20088_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
var ret__9999__auto___20093 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__20089,fkv){
var vec__20090 = p__20089;
var f1 = cljs.core.nth.call(null,vec__20090,(0),null);
var k = cljs.core.nth.call(null,vec__20090,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__9999__auto___20097 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20098 = arguments.length;
var i__9954__auto___20099 = (0);
while(true){
if((i__9954__auto___20099 < len__9953__auto___20098)){
args__9960__auto__.push((arguments[i__9954__auto___20099]));

var G__20100 = (i__9954__auto___20099 + (1));
i__9954__auto___20099 = G__20100;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__9628__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__9628__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),locals,(function (){var x__9628__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),locals,(function (){var x__9628__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq20094){
var G__20095 = cljs.core.first.call(null,seq20094);
var seq20094__$1 = cljs.core.next.call(null,seq20094);
var G__20096 = cljs.core.first.call(null,seq20094__$1);
var seq20094__$2 = cljs.core.next.call(null,seq20094__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__20095,G__20096,seq20094__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__9999__auto___20105 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20106 = arguments.length;
var i__9954__auto___20107 = (0);
while(true){
if((i__9954__auto___20107 < len__9953__auto___20106)){
args__9960__auto__.push((arguments[i__9954__auto___20107]));

var G__20108 = (i__9954__auto___20107 + (1));
i__9954__auto___20107 = G__20108;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq20101){
var G__20102 = cljs.core.first.call(null,seq20101);
var seq20101__$1 = cljs.core.next.call(null,seq20101);
var G__20103 = cljs.core.first.call(null,seq20101__$1);
var seq20101__$2 = cljs.core.next.call(null,seq20101__$1);
var G__20104 = cljs.core.first.call(null,seq20101__$2);
var seq20101__$3 = cljs.core.next.call(null,seq20101__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20102,G__20103,G__20104,seq20101__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__9999__auto___20113 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20114 = arguments.length;
var i__9954__auto___20115 = (0);
while(true){
if((i__9954__auto___20115 < len__9953__auto___20114)){
args__9960__auto__.push((arguments[i__9954__auto___20115]));

var G__20116 = (i__9954__auto___20115 + (1));
i__9954__auto___20115 = G__20116;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq20109){
var G__20110 = cljs.core.first.call(null,seq20109);
var seq20109__$1 = cljs.core.next.call(null,seq20109);
var G__20111 = cljs.core.first.call(null,seq20109__$1);
var seq20109__$2 = cljs.core.next.call(null,seq20109__$1);
var G__20112 = cljs.core.first.call(null,seq20109__$2);
var seq20109__$3 = cljs.core.next.call(null,seq20109__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__20110,G__20111,G__20112,seq20109__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__9999__auto___20117 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__9999__auto___20122 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20123 = arguments.length;
var i__9954__auto___20124 = (0);
while(true){
if((i__9954__auto___20124 < len__9953__auto___20123)){
args__9960__auto__.push((arguments[i__9954__auto___20124]));

var G__20125 = (i__9954__auto___20124 + (1));
i__9954__auto___20124 = G__20125;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq20118){
var G__20119 = cljs.core.first.call(null,seq20118);
var seq20118__$1 = cljs.core.next.call(null,seq20118);
var G__20120 = cljs.core.first.call(null,seq20118__$1);
var seq20118__$2 = cljs.core.next.call(null,seq20118__$1);
var G__20121 = cljs.core.first.call(null,seq20118__$2);
var seq20118__$3 = cljs.core.next.call(null,seq20118__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__20119,G__20120,G__20121,seq20118__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__5455__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__5455__auto__)){
var var$ = temp__5455__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__8662__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8662__auto__)){
var and__8662__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8662__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__8662__auto____$1;
}
} else {
return and__8662__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__5455__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__5455__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__20126 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__20127 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__20126;
s = G__20127;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__20128){
var vec__20129 = p__20128;
var p = cljs.core.nth.call(null,vec__20129,(0),null);
var sigs = cljs.core.nth.call(null,vec__20129,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9628__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__20129,p,sigs){
return (function (p__20132){
var vec__20133 = p__20132;
var seq__20134 = cljs.core.seq.call(null,vec__20133);
var first__20135 = cljs.core.first.call(null,seq__20134);
var seq__20134__$1 = cljs.core.next.call(null,seq__20134);
var f = first__20135;
var meths = seq__20134__$1;
var form = vec__20133;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(psym,pfn_prefix,vec__20129,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9731__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9733__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__9729__auto__,prefer_table__9730__auto__,method_cache__9731__auto__,cached_hierarchy__9732__auto__,hierarchy__9733__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__9729__auto__,prefer_table__9730__auto__,method_cache__9731__auto__,cached_hierarchy__9732__auto__,hierarchy__9733__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9733__auto__,method_table__9729__auto__,prefer_table__9730__auto__,method_cache__9731__auto__,cached_hierarchy__9732__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9628__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9628__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__9628__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__20136){
var vec__20137 = p__20136;
var seq__20138 = cljs.core.seq.call(null,vec__20137);
var first__20139 = cljs.core.first.call(null,seq__20138);
var seq__20138__$1 = cljs.core.next.call(null,seq__20138);
var vec__20140 = first__20139;
var seq__20141 = cljs.core.seq.call(null,vec__20140);
var first__20142 = cljs.core.first.call(null,seq__20141);
var seq__20141__$1 = cljs.core.next.call(null,seq__20141);
var this$ = first__20142;
var args = seq__20141__$1;
var sig = vec__20140;
var body = seq__20138__$1;
var x__9628__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__20143){
var vec__20144 = p__20143;
var seq__20145 = cljs.core.seq.call(null,vec__20144);
var first__20146 = cljs.core.first.call(null,seq__20145);
var seq__20145__$1 = cljs.core.next.call(null,seq__20145);
var vec__20147 = first__20146;
var seq__20148 = cljs.core.seq.call(null,vec__20147);
var first__20149 = cljs.core.first.call(null,seq__20148);
var seq__20148__$1 = cljs.core.next.call(null,seq__20148);
var this$ = first__20149;
var args = seq__20148__$1;
var sig = vec__20147;
var body = seq__20145__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9628__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__20150){
var vec__20151 = p__20150;
var seq__20152 = cljs.core.seq.call(null,vec__20151);
var first__20153 = cljs.core.first.call(null,seq__20152);
var seq__20152__$1 = cljs.core.next.call(null,seq__20152);
var vec__20154 = first__20153;
var seq__20155 = cljs.core.seq.call(null,vec__20154);
var first__20156 = cljs.core.first.call(null,seq__20155);
var seq__20155__$1 = cljs.core.next.call(null,seq__20155);
var this$ = first__20156;
var args = seq__20155__$1;
var sig = vec__20154;
var body = seq__20152__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9628__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__20157){
var vec__20158 = p__20157;
var seq__20159 = cljs.core.seq.call(null,vec__20158);
var first__20160 = cljs.core.first.call(null,seq__20159);
var seq__20159__$1 = cljs.core.next.call(null,seq__20159);
var vec__20161 = first__20160;
var seq__20162 = cljs.core.seq.call(null,vec__20161);
var first__20163 = cljs.core.first.call(null,seq__20162);
var seq__20162__$1 = cljs.core.next.call(null,seq__20162);
var this$ = first__20163;
var args = seq__20162__$1;
var sig = vec__20161;
var body = seq__20159__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9628__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__20165){
var vec__20166 = p__20165;
var seq__20167 = cljs.core.seq.call(null,vec__20166);
var first__20168 = cljs.core.first.call(null,seq__20167);
var seq__20167__$1 = cljs.core.next.call(null,seq__20167);
var f = first__20168;
var meths = seq__20167__$1;
var form = vec__20166;
var vec__20169 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__20169,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__20169,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__20169,f__$1,meths__$1,vec__20166,seq__20167,first__20168,seq__20167__$1,f,meths,form){
return (function (p1__20164_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__20164_SHARP_);
});})(vec__20169,f__$1,meths__$1,vec__20166,seq__20167,first__20168,seq__20167__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__20173){
var vec__20174 = p__20173;
var seq__20175 = cljs.core.seq.call(null,vec__20174);
var first__20176 = cljs.core.first.call(null,seq__20175);
var seq__20175__$1 = cljs.core.next.call(null,seq__20175);
var f = first__20176;
var meths = seq__20175__$1;
var form = vec__20174;
return cljs.core.map.call(null,((function (vec__20174,seq__20175,first__20176,seq__20175__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(vec__20174,seq__20175,first__20176,seq__20175__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__20174,seq__20175,first__20176,seq__20175__$1,f,meths,form){
return (function (p1__20172_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__20172_SHARP_);
});})(vec__20174,seq__20175,first__20176,seq__20175__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__20178){
var vec__20179 = p__20178;
var seq__20180 = cljs.core.seq.call(null,vec__20179);
var first__20181 = cljs.core.first.call(null,seq__20180);
var seq__20180__$1 = cljs.core.next.call(null,seq__20180);
var f = first__20181;
var meths = seq__20180__$1;
var form = vec__20179;
var meths__$1 = cljs.core.map.call(null,((function (vec__20179,seq__20180,first__20181,seq__20180__$1,f,meths,form){
return (function (p1__20177_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__20177_SHARP_);
});})(vec__20179,seq__20180,first__20181,seq__20180__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9628__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__9628__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__9628__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__9628__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__20182){
var vec__20183 = p__20182;
var seq__20184 = cljs.core.seq.call(null,vec__20183);
var first__20185 = cljs.core.first.call(null,seq__20184);
var seq__20184__$1 = cljs.core.next.call(null,seq__20184);
var f = first__20185;
var meths = seq__20184__$1;
var form = vec__20183;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__20183,seq__20184,first__20185,seq__20184__$1,f,meths,form){
return (function (p__20186){
var vec__20187 = p__20186;
var seq__20188 = cljs.core.seq.call(null,vec__20187);
var first__20189 = cljs.core.first.call(null,seq__20188);
var seq__20188__$1 = cljs.core.next.call(null,seq__20188);
var sig = first__20189;
var body = seq__20188__$1;
var meth = vec__20187;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(pf,vec__20183,seq__20184,first__20185,seq__20184__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__20190){
var vec__20191 = p__20190;
var p = cljs.core.nth.call(null,vec__20191,(0),null);
var sigs = cljs.core.nth.call(null,vec__20191,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__20191,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__20191,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__20194 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__20194,(0),null);
var sigs = cljs.core.nth.call(null,vec__20194,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_20197 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_20197))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__20198 = cljs.core.next.call(null,sigs__$1);
var G__20199 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__20198;
seen = G__20199;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_20203 = cljs.core.PersistentHashSet.EMPTY;
var methods_20204__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_20204__$1)){
var vec__20200_20205 = cljs.core.first.call(null,methods_20204__$1);
var fname_20206 = cljs.core.nth.call(null,vec__20200_20205,(0),null);
var method_20207 = vec__20200_20205;
if(cljs.core.contains_QMARK_.call(null,seen_20203,fname_20206)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_20206], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_20207);

var G__20208 = cljs.core.conj.call(null,seen_20203,fname_20206);
var G__20209 = cljs.core.next.call(null,methods_20204__$1);
seen_20203 = G__20208;
methods_20204__$1 = G__20209;
continue;
} else {
}
break;
}

var G__20210 = cljs.core.conj.call(null,protos,proto);
var G__20211 = impls__$2;
protos = G__20210;
impls__$1 = G__20211;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__9999__auto___20220 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20221 = arguments.length;
var i__9954__auto___20222 = (0);
while(true){
if((i__9954__auto___20222 < len__9953__auto___20221)){
args__9960__auto__.push((arguments[i__9954__auto___20222]));

var G__20223 = (i__9954__auto___20222 + (1));
i__9954__auto___20222 = G__20223;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__20217 = (function (){var temp__5455__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__20217,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__20217,(1),null);
if(cljs.core.truth_((function (){var and__8662__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8662__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__8662__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__20217,type,assign_impls){
return (function (p1__20212_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__20212_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__20217,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq20213){
var G__20214 = cljs.core.first.call(null,seq20213);
var seq20213__$1 = cljs.core.next.call(null,seq20213);
var G__20215 = cljs.core.first.call(null,seq20213__$1);
var seq20213__$2 = cljs.core.next.call(null,seq20213__$1);
var G__20216 = cljs.core.first.call(null,seq20213__$2);
var seq20213__$3 = cljs.core.next.call(null,seq20213__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__20214,G__20215,G__20216,seq20213__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__20225){
var vec__20226 = p__20225;
var f = cljs.core.nth.call(null,vec__20226,(0),null);
var sigs = cljs.core.nth.call(null,vec__20226,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__20226,f,sigs){
return (function (p1__20224_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__20224_SHARP_),cljs.core.nnext.call(null,p1__20224_SHARP_));
});})(vec__20226,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__20230 = arguments.length;
switch (G__20230) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__20232 = ret__$1;
var G__20233 = specs__$2;
ret = G__20232;
specs__$1 = G__20233;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__20234_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__20234_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9628__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__9999__auto___20246 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20247 = arguments.length;
var i__9954__auto___20248 = (0);
while(true){
if((i__9954__auto___20248 < len__9953__auto___20247)){
args__9960__auto__.push((arguments[i__9954__auto___20248]));

var G__20249 = (i__9954__auto___20248 + (1));
i__9954__auto___20248 = G__20249;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((4) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9961__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__20243 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__20243,(0),null);
var pmasks = cljs.core.nth.call(null,vec__20243,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__9628__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9628__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9628__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9628__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9628__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9628__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20235__auto__","this__20235__auto__",2035553237,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20236__auto__","writer__20236__auto__",-49790310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__20237__auto__","opt__20237__auto__",1353375563,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20236__auto__","writer__20236__auto__",-49790310,null)),(function (){var x__9628__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq20238){
var G__20239 = cljs.core.first.call(null,seq20238);
var seq20238__$1 = cljs.core.next.call(null,seq20238);
var G__20240 = cljs.core.first.call(null,seq20238__$1);
var seq20238__$2 = cljs.core.next.call(null,seq20238__$1);
var G__20241 = cljs.core.first.call(null,seq20238__$2);
var seq20238__$3 = cljs.core.next.call(null,seq20238__$2);
var G__20242 = cljs.core.first.call(null,seq20238__$3);
var seq20238__$4 = cljs.core.next.call(null,seq20238__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__20239,G__20240,G__20241,G__20242,seq20238__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__20250_SHARP_){
return cljs.core.with_meta.call(null,p1__20250_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20251__auto__","this__20251__auto__",1917205088,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20252__auto__","this__20252__auto__",-212615464,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20252__auto__","this__20252__auto__",-212615464,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__20253__auto__","coll__20253__auto__",-1770526909,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9628__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__20253__auto__","coll__20253__auto__",-1770526909,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__9628__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__9628__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__9628__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9628__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9628__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__9628__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__9628__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20254__auto__","this__20254__auto__",1142052378,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20255__auto__","this__20255__auto__",1472950637,null)),(function (){var x__9628__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20256__auto__","this__20256__auto__",940989118,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20257__auto__","k__20257__auto__",-256609348,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20256__auto__","this__20256__auto__",940989118,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20257__auto__","k__20257__auto__",-256609348,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20258__auto__","this__20258__auto__",1653765418,null)),(function (){var x__9628__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__20259__auto__","else__20259__auto__",653345752,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9628__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9628__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__20259__auto__","else__20259__auto__",653345752,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20260__auto__","this__20260__auto__",404224661,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9628__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20261__auto__","this__20261__auto__",2112536777,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20262__auto__","entry__20262__auto__",1659944327,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20262__auto__","entry__20262__auto__",1659944327,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20261__auto__","this__20261__auto__",2112536777,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20262__auto__","entry__20262__auto__",1659944327,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20262__auto__","entry__20262__auto__",1659944327,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20261__auto__","this__20261__auto__",2112536777,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20262__auto__","entry__20262__auto__",1659944327,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20263__auto__","this__20263__auto__",-1225333672,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20264__auto__","k__20264__auto__",-682334549,null)),(function (){var x__9628__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20264__auto__","k__20264__auto__",-682334549,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20264__auto__","k__20264__auto__",-682334549,null)),(function (){var x__9628__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20265__auto__","this__20265__auto__",-1055007590,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20266__auto__","k__20266__auto__",1784198823,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20266__auto__","k__20266__auto__",1784198823,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20265__auto__","this__20265__auto__",-1055007590,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20266__auto__","k__20266__auto__",1784198823,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20266__auto__","k__20266__auto__",1784198823,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20268__auto__","this__20268__auto__",1185118161,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20267_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.keyword.call(null,p1__20267_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = p1__20267_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9628__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20270__auto__","this__20270__auto__",-1553327166,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20271__auto__","writer__20271__auto__",476493432,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20272__auto__","opts__20272__auto__",1063818085,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__20273__auto__","pr-pair__20273__auto__",-1963258397,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__20274__auto__","keyval__20274__auto__",-512988438,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20271__auto__","writer__20271__auto__",476493432,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20272__auto__","opts__20272__auto__",1063818085,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__20274__auto__","keyval__20274__auto__",-512988438,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20271__auto__","writer__20271__auto__",476493432,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__20273__auto__","pr-pair__20273__auto__",-1963258397,null)),(function (){var x__9628__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20272__auto__","opts__20272__auto__",1063818085,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20269_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.keyword.call(null,p1__20269_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = p1__20269_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))], null));
var vec__20275 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__20275,(0),null);
var pmasks = cljs.core.nth.call(null,vec__20275,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__9628__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9628__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9628__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9628__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
var ret__9999__auto___20285 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20286 = arguments.length;
var i__9954__auto___20287 = (0);
while(true){
if((i__9954__auto___20287 < len__9953__auto___20286)){
args__9960__auto__.push((arguments[i__9954__auto___20287]));

var G__20288 = (i__9954__auto___20287 + (1));
i__9954__auto___20287 = G__20288;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((4) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9961__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9628__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9628__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__9628__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20278__auto__","this__20278__auto__",-1588113868,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9628__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9628__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20278__auto__","this__20278__auto__",-1588113868,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20279__auto__","writer__20279__auto__",-190253395,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20279__auto__","writer__20279__auto__",-190253395,null)),(function (){var x__9628__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq20280){
var G__20281 = cljs.core.first.call(null,seq20280);
var seq20280__$1 = cljs.core.next.call(null,seq20280);
var G__20282 = cljs.core.first.call(null,seq20280__$1);
var seq20280__$2 = cljs.core.next.call(null,seq20280__$1);
var G__20283 = cljs.core.first.call(null,seq20280__$2);
var seq20280__$3 = cljs.core.next.call(null,seq20280__$2);
var G__20284 = cljs.core.first.call(null,seq20280__$3);
var seq20280__$4 = cljs.core.next.call(null,seq20280__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__20281,G__20282,G__20283,G__20284,seq20280__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__9999__auto___20316 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20317 = arguments.length;
var i__9954__auto___20318 = (0);
while(true){
if((i__9954__auto___20318 < len__9953__auto___20317)){
args__9960__auto__.push((arguments[i__9954__auto___20318]));

var G__20319 = (i__9954__auto___20318 + (1));
i__9954__auto___20318 = G__20319;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__20295 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__20295,(0),null);
var methods$ = cljs.core.nth.call(null,vec__20295,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__20295,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__20295,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__20298 = cljs.core.seq.call(null,methods$);
var chunk__20299 = null;
var count__20300 = (0);
var i__20301 = (0);
while(true){
if((i__20301 < count__20300)){
var vec__20302 = cljs.core._nth.call(null,chunk__20299,i__20301);
var seq__20303 = cljs.core.seq.call(null,vec__20302);
var first__20304 = cljs.core.first.call(null,seq__20303);
var seq__20303__$1 = cljs.core.next.call(null,seq__20303);
var mname = first__20304;
var arities = seq__20303__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__20320 = seq__20298;
var G__20321 = chunk__20299;
var G__20322 = count__20300;
var G__20323 = (i__20301 + (1));
seq__20298 = G__20320;
chunk__20299 = G__20321;
count__20300 = G__20322;
i__20301 = G__20323;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20298);
if(temp__5457__auto__){
var seq__20298__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20298__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__20298__$1);
var G__20324 = cljs.core.chunk_rest.call(null,seq__20298__$1);
var G__20325 = c__9605__auto__;
var G__20326 = cljs.core.count.call(null,c__9605__auto__);
var G__20327 = (0);
seq__20298 = G__20324;
chunk__20299 = G__20325;
count__20300 = G__20326;
i__20301 = G__20327;
continue;
} else {
var vec__20305 = cljs.core.first.call(null,seq__20298__$1);
var seq__20306 = cljs.core.seq.call(null,vec__20305);
var first__20307 = cljs.core.first.call(null,seq__20306);
var seq__20306__$1 = cljs.core.next.call(null,seq__20306);
var mname = first__20307;
var arities = seq__20306__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__20328 = cljs.core.next.call(null,seq__20298__$1);
var G__20329 = null;
var G__20330 = (0);
var G__20331 = (0);
seq__20298 = G__20328;
chunk__20299 = G__20329;
count__20300 = G__20330;
i__20301 = G__20331;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20289__auto__","x__20289__auto__",1960794856,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20290__auto__","m__20290__auto__",-643221823,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9628__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20289__auto__","x__20289__auto__",1960794856,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20290__auto__","m__20290__auto__",-643221823,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20290__auto__","m__20290__auto__",-643221823,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20290__auto__","m__20290__auto__",-643221823,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9628__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20290__auto__","m__20290__auto__",-643221823,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20290__auto__","m__20290__auto__",-643221823,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__9628__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__20308){
var vec__20309 = p__20308;
var seq__20310 = cljs.core.seq.call(null,vec__20309);
var first__20311 = cljs.core.first.call(null,seq__20310);
var seq__20310__$1 = cljs.core.next.call(null,seq__20310);
var fname = first__20311;
var sigs = seq__20310__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__20312){
var vec__20313 = p__20312;
var seq__20314 = cljs.core.seq.call(null,vec__20313);
var first__20315 = cljs.core.first.call(null,seq__20314);
var seq__20314__$1 = cljs.core.next.call(null,seq__20314);
var fname = first__20315;
var sigs = seq__20314__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9628__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__20313,seq__20314,first__20315,seq__20314__$1,fname,sigs,p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__20313,seq__20314,first__20315,seq__20314__$1,fname,sigs,p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__20295,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9628__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq20291){
var G__20292 = cljs.core.first.call(null,seq20291);
var seq20291__$1 = cljs.core.next.call(null,seq20291);
var G__20293 = cljs.core.first.call(null,seq20291__$1);
var seq20291__$2 = cljs.core.next.call(null,seq20291__$1);
var G__20294 = cljs.core.first.call(null,seq20291__$2);
var seq20291__$3 = cljs.core.next.call(null,seq20291__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__20292,G__20293,G__20294,seq20291__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__9999__auto___20335 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__20332 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__20332,(0),null);
var bit = cljs.core.nth.call(null,vec__20332,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9628__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9628__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___20339 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__20336 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__20336,(0),null);
var bit = cljs.core.nth.call(null,vec__20336,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9628__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9628__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9628__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9628__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9628__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9628__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__9999__auto___20343 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20344 = arguments.length;
var i__9954__auto___20345 = (0);
while(true){
if((i__9954__auto___20345 < len__9953__auto___20344)){
args__9960__auto__.push((arguments[i__9954__auto___20345]));

var G__20346 = (i__9954__auto___20345 + (1));
i__9954__auto___20345 = G__20346;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq20340){
var G__20341 = cljs.core.first.call(null,seq20340);
var seq20340__$1 = cljs.core.next.call(null,seq20340);
var G__20342 = cljs.core.first.call(null,seq20340__$1);
var seq20340__$2 = cljs.core.next.call(null,seq20340__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__20341,G__20342,seq20340__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__9999__auto___20350 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20351 = arguments.length;
var i__9954__auto___20352 = (0);
while(true){
if((i__9954__auto___20352 < len__9953__auto___20351)){
args__9960__auto__.push((arguments[i__9954__auto___20352]));

var G__20353 = (i__9954__auto___20352 + (1));
i__9954__auto___20352 = G__20353;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq20347){
var G__20348 = cljs.core.first.call(null,seq20347);
var seq20347__$1 = cljs.core.next.call(null,seq20347);
var G__20349 = cljs.core.first.call(null,seq20347__$1);
var seq20347__$2 = cljs.core.next.call(null,seq20347__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__20348,G__20349,seq20347__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__9999__auto___20362 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20363 = arguments.length;
var i__9954__auto___20364 = (0);
while(true){
if((i__9954__auto___20364 < len__9953__auto___20363)){
args__9960__auto__.push((arguments[i__9954__auto___20364]));

var G__20365 = (i__9954__auto___20364 + (1));
i__9954__auto___20364 = G__20365;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__20358){
var vec__20359 = p__20358;
var k = cljs.core.nth.call(null,vec__20359,(0),null);
var v = cljs.core.nth.call(null,vec__20359,(1),null);
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq20354){
var G__20355 = cljs.core.first.call(null,seq20354);
var seq20354__$1 = cljs.core.next.call(null,seq20354);
var G__20356 = cljs.core.first.call(null,seq20354__$1);
var seq20354__$2 = cljs.core.next.call(null,seq20354__$1);
var G__20357 = cljs.core.first.call(null,seq20354__$2);
var seq20354__$3 = cljs.core.next.call(null,seq20354__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__20355,G__20356,G__20357,seq20354__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__9999__auto___20370 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20371 = arguments.length;
var i__9954__auto___20372 = (0);
while(true){
if((i__9954__auto___20372 < len__9953__auto___20371)){
args__9960__auto__.push((arguments[i__9954__auto___20372]));

var G__20373 = (i__9954__auto___20372 + (1));
i__9954__auto___20372 = G__20373;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__9628__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq20366){
var G__20367 = cljs.core.first.call(null,seq20366);
var seq20366__$1 = cljs.core.next.call(null,seq20366);
var G__20368 = cljs.core.first.call(null,seq20366__$1);
var seq20366__$2 = cljs.core.next.call(null,seq20366__$1);
var G__20369 = cljs.core.first.call(null,seq20366__$2);
var seq20366__$3 = cljs.core.next.call(null,seq20366__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__20367,G__20368,G__20369,seq20366__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__9999__auto___20386 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20387 = arguments.length;
var i__9954__auto___20388 = (0);
while(true){
if((i__9954__auto___20388 < len__9953__auto___20387)){
args__9960__auto__.push((arguments[i__9954__auto___20388]));

var G__20389 = (i__9954__auto___20388 + (1));
i__9954__auto___20388 = G__20389;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((4) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9961__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__20380 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__20383 = cljs.core.nth.call(null,vec__20380,(0),null);
var a = cljs.core.nth.call(null,vec__20383,(0),null);
var b = cljs.core.nth.call(null,vec__20383,(1),null);
var c = cljs.core.nth.call(null,vec__20383,(2),null);
var clause = vec__20383;
var more = cljs.core.nth.call(null,vec__20380,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9628__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__20374__auto__","p__20374__auto__",-1630534425,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__20374__auto__","p__20374__auto__",-1630534425,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq20375){
var G__20376 = cljs.core.first.call(null,seq20375);
var seq20375__$1 = cljs.core.next.call(null,seq20375);
var G__20377 = cljs.core.first.call(null,seq20375__$1);
var seq20375__$2 = cljs.core.next.call(null,seq20375__$1);
var G__20378 = cljs.core.first.call(null,seq20375__$2);
var seq20375__$3 = cljs.core.next.call(null,seq20375__$2);
var G__20379 = cljs.core.first.call(null,seq20375__$3);
var seq20375__$4 = cljs.core.next.call(null,seq20375__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__20376,G__20377,G__20378,G__20379,seq20375__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__8662__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__8662__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__8662__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__9999__auto___20410 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20411 = arguments.length;
var i__9954__auto___20412 = (0);
while(true){
if((i__9954__auto___20412 < len__9953__auto___20411)){
args__9960__auto__.push((arguments[i__9954__auto___20412]));

var G__20413 = (i__9954__auto___20412 + (1));
i__9954__auto___20412 = G__20413;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__20398){
var vec__20399 = p__20398;
var test = cljs.core.nth.call(null,vec__20399,(0),null);
var expr = cljs.core.nth.call(null,vec__20399,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__20399,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__9628__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__20399,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__9628__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__20390_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__20390_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__20391_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20391_SHARP_)){
return cljs.core.vec.call(null,p1__20391_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20391_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__20392_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20392_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__20393_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20393_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__20393_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__20393_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__20406){
var vec__20407 = p__20406;
var m = cljs.core.nth.call(null,vec__20407,(0),null);
var c = cljs.core.nth.call(null,vec__20407,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9628__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9628__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq20394){
var G__20395 = cljs.core.first.call(null,seq20394);
var seq20394__$1 = cljs.core.next.call(null,seq20394);
var G__20396 = cljs.core.first.call(null,seq20394__$1);
var seq20394__$2 = cljs.core.next.call(null,seq20394__$1);
var G__20397 = cljs.core.first.call(null,seq20394__$2);
var seq20394__$3 = cljs.core.next.call(null,seq20394__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__20395,G__20396,G__20397,seq20394__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__9999__auto___20414 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__9999__auto___20417 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__20416 = arguments.length;
switch (G__20416) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9628__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__9628__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__9628__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__9999__auto___20455 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__20424){
var vec__20425 = p__20424;
var k = cljs.core.nth.call(null,vec__20425,(0),null);
var v = cljs.core.nth.call(null,vec__20425,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__20456__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20456 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20457__i = 0, G__20457__a = new Array(arguments.length -  0);
while (G__20457__i < G__20457__a.length) {G__20457__a[G__20457__i] = arguments[G__20457__i + 0]; ++G__20457__i;}
  msg = new cljs.core.IndexedSeq(G__20457__a,0,null);
} 
return G__20456__delegate.call(this,msg);};
G__20456.cljs$lang$maxFixedArity = 0;
G__20456.cljs$lang$applyTo = (function (arglist__20458){
var msg = cljs.core.seq(arglist__20458);
return G__20456__delegate(msg);
});
G__20456.cljs$core$IFn$_invoke$arity$variadic = G__20456__delegate;
return G__20456;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__20428){
var vec__20429 = p__20428;
var seq__20430 = cljs.core.seq.call(null,vec__20429);
var first__20431 = cljs.core.first.call(null,seq__20430);
var seq__20430__$1 = cljs.core.next.call(null,seq__20430);
var vec__20432 = first__20431;
var seq__20433 = cljs.core.seq.call(null,vec__20432);
var first__20434 = cljs.core.first.call(null,seq__20433);
var seq__20433__$1 = cljs.core.next.call(null,seq__20433);
var bind = first__20434;
var first__20434__$1 = cljs.core.first.call(null,seq__20433__$1);
var seq__20433__$2 = cljs.core.next.call(null,seq__20433__$1);
var expr = first__20434__$1;
var mod_pairs = seq__20433__$2;
var vec__20435 = seq__20430__$1;
var vec__20438 = cljs.core.nth.call(null,vec__20435,(0),null);
var _ = cljs.core.nth.call(null,vec__20438,(0),null);
var next_expr = cljs.core.nth.call(null,vec__20438,(1),null);
var next_groups = vec__20435;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__20429,seq__20430,first__20431,seq__20430__$1,vec__20432,seq__20433,first__20434,seq__20433__$1,bind,first__20434__$1,seq__20433__$2,expr,mod_pairs,vec__20435,vec__20438,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__20441){
var vec__20442 = p__20441;
var seq__20443 = cljs.core.seq.call(null,vec__20442);
var first__20444 = cljs.core.first.call(null,seq__20443);
var seq__20443__$1 = cljs.core.next.call(null,seq__20443);
var vec__20445 = first__20444;
var k = cljs.core.nth.call(null,vec__20445,(0),null);
var v = cljs.core.nth.call(null,vec__20445,(1),null);
var pair = vec__20445;
var etc = seq__20443__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20419__auto__","iterys__20419__auto__",1004439121,null)),(function (){var x__9628__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20420__auto__","fs__20420__auto__",-1639648605,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20419__auto__","iterys__20419__auto__",1004439121,null)),(function (){var x__9628__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20420__auto__","fs__20420__auto__",-1639648605,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20420__auto__","fs__20420__auto__",-1639648605,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__9628__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__20429,seq__20430,first__20431,seq__20430__$1,vec__20432,seq__20433,first__20434,seq__20433__$1,bind,first__20434__$1,seq__20433__$2,expr,mod_pairs,vec__20435,vec__20438,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__20429,seq__20430,first__20431,seq__20430__$1,vec__20432,seq__20433,first__20434,seq__20433__$1,bind,first__20434__$1,seq__20433__$2,expr,mod_pairs,vec__20435,vec__20438,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__20448){
var vec__20449 = p__20448;
var seq__20450 = cljs.core.seq.call(null,vec__20449);
var first__20451 = cljs.core.first.call(null,seq__20450);
var seq__20450__$1 = cljs.core.next.call(null,seq__20450);
var vec__20452 = first__20451;
var k = cljs.core.nth.call(null,vec__20452,(0),null);
var v = cljs.core.nth.call(null,vec__20452,(1),null);
var pair = vec__20452;
var etc = seq__20450__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9628__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__9628__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9628__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__20429,seq__20430,first__20431,seq__20430__$1,vec__20432,seq__20433,first__20434,seq__20433__$1,bind,first__20434__$1,seq__20433__$2,expr,mod_pairs,vec__20435,vec__20438,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20421__auto__","c__20421__auto__",-1194104351,null)),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"C:\\Users\\KyuBok\\.boot\\cache\\tmp\\Projects\\cwbn-clj\\cwbn\\5u0\\-9uliv9\\cwbn\\main.out\\cljs\\core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20422__auto__","size__20422__auto__",1537852957,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20421__auto__","c__20421__auto__",-1194104351,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20422__auto__","size__20422__auto__",1537852957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20422__auto__","size__20422__auto__",1537852957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20421__auto__","c__20421__auto__",-1194104351,null)),(function (){var x__9628__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9628__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9628__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9628__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20423__auto__","iter__20423__auto__",-276337454,null)),(function (){var x__9628__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20423__auto__","iter__20423__auto__",-276337454,null)),(function (){var x__9628__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__9999__auto___20464 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20465 = arguments.length;
var i__9954__auto___20466 = (0);
while(true){
if((i__9954__auto___20466 < len__9953__auto___20465)){
args__9960__auto__.push((arguments[i__9954__auto___20466]));

var G__20467 = (i__9954__auto___20466 + (1));
i__9954__auto___20466 = G__20467;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__20468__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20468 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20469__i = 0, G__20469__a = new Array(arguments.length -  0);
while (G__20469__i < G__20469__a.length) {G__20469__a[G__20469__i] = arguments[G__20469__i + 0]; ++G__20469__i;}
  msg = new cljs.core.IndexedSeq(G__20469__a,0,null);
} 
return G__20468__delegate.call(this,msg);};
G__20468.cljs$lang$maxFixedArity = 0;
G__20468.cljs$lang$applyTo = (function (arglist__20470){
var msg = cljs.core.seq(arglist__20470);
return G__20468__delegate(msg);
});
G__20468.cljs$core$IFn$_invoke$arity$variadic = G__20468__delegate;
return G__20468;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9628__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9628__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__9628__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20459__auto__","c__20459__auto__",404718547,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20459__auto__","c__20459__auto__",404718547,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20459__auto__","c__20459__auto__",404718547,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9628__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq20460){
var G__20461 = cljs.core.first.call(null,seq20460);
var seq20460__$1 = cljs.core.next.call(null,seq20460);
var G__20462 = cljs.core.first.call(null,seq20460__$1);
var seq20460__$2 = cljs.core.next.call(null,seq20460__$1);
var G__20463 = cljs.core.first.call(null,seq20460__$2);
var seq20460__$3 = cljs.core.next.call(null,seq20460__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__20461,G__20462,G__20463,seq20460__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__9999__auto___20474 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20475 = arguments.length;
var i__9954__auto___20476 = (0);
while(true){
if((i__9954__auto___20476 < len__9953__auto___20475)){
args__9960__auto__.push((arguments[i__9954__auto___20476]));

var G__20477 = (i__9954__auto___20476 + (1));
i__9954__auto___20476 = G__20477;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq20471){
var G__20472 = cljs.core.first.call(null,seq20471);
var seq20471__$1 = cljs.core.next.call(null,seq20471);
var G__20473 = cljs.core.first.call(null,seq20471__$1);
var seq20471__$2 = cljs.core.next.call(null,seq20471__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__20472,G__20473,seq20471__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__9999__auto___20488 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__20487 = arguments.length;
switch (G__20487) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20490 = arguments.length;
var i__9954__auto___20491 = (0);
while(true){
if((i__9954__auto___20491 < len__9953__auto___20490)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20491]));

var G__20492 = (i__9954__auto___20491 + (1));
i__9954__auto___20491 = G__20492;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9977__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__9628__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9628__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20478__auto__","dims__20478__auto__",-1376198235,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20479__auto__","dimarray__20479__auto__",-1548446068,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9628__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20480__auto__","i__20480__auto__",545682370,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20479__auto__","dimarray__20479__auto__",-1548446068,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20479__auto__","dimarray__20479__auto__",-1548446068,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20480__auto__","i__20480__auto__",545682370,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20478__auto__","dims__20478__auto__",-1376198235,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20479__auto__","dimarray__20479__auto__",-1548446068,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq20482){
var G__20483 = cljs.core.first.call(null,seq20482);
var seq20482__$1 = cljs.core.next.call(null,seq20482);
var G__20484 = cljs.core.first.call(null,seq20482__$1);
var seq20482__$2 = cljs.core.next.call(null,seq20482__$1);
var G__20485 = cljs.core.first.call(null,seq20482__$2);
var seq20482__$3 = cljs.core.next.call(null,seq20482__$2);
var G__20486 = cljs.core.first.call(null,seq20482__$3);
var seq20482__$4 = cljs.core.next.call(null,seq20482__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__20483,G__20484,G__20485,G__20486,seq20482__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__9999__auto___20501 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__20499 = arguments.length;
switch (G__20499) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20503 = arguments.length;
var i__9954__auto___20504 = (0);
while(true){
if((i__9954__auto___20504 < len__9953__auto___20503)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20504]));

var G__20505 = (i__9954__auto___20504 + (1));
i__9954__auto___20504 = G__20505;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9977__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_20500 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_20500;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20493__auto__","x__20493__auto__",615814356,null)),(function (){var x__9628__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20493__auto__","x__20493__auto__",615814356,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq20495){
var G__20496 = cljs.core.first.call(null,seq20495);
var seq20495__$1 = cljs.core.next.call(null,seq20495);
var G__20497 = cljs.core.first.call(null,seq20495__$1);
var seq20495__$2 = cljs.core.next.call(null,seq20495__$1);
var G__20498 = cljs.core.first.call(null,seq20495__$2);
var seq20495__$3 = cljs.core.next.call(null,seq20495__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__20496,G__20497,G__20498,seq20495__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__9999__auto___20511 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__20510 = arguments.length;
switch (G__20510) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20513 = arguments.length;
var i__9954__auto___20514 = (0);
while(true){
if((i__9954__auto___20514 < len__9953__auto___20513)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20514]));

var G__20515 = (i__9954__auto___20514 + (1));
i__9954__auto___20514 = G__20515;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9977__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq20507){
var G__20508 = cljs.core.first.call(null,seq20507);
var seq20507__$1 = cljs.core.next.call(null,seq20507);
var G__20509 = cljs.core.first.call(null,seq20507__$1);
var seq20507__$2 = cljs.core.next.call(null,seq20507__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__20508,G__20509,seq20507__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__9999__auto___20525 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__20522 = arguments.length;
switch (G__20522) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20527 = arguments.length;
var i__9954__auto___20528 = (0);
while(true){
if((i__9954__auto___20528 < len__9953__auto___20527)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20528]));

var G__20529 = (i__9954__auto___20528 + (1));
i__9954__auto___20528 = G__20529;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9977__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__20516_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20516_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__20517_SHARP_){
var _STAR_cljs_warnings_STAR_20524 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20517_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_20524;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq20519){
var G__20520 = cljs.core.first.call(null,seq20519);
var seq20519__$1 = cljs.core.next.call(null,seq20519);
var G__20521 = cljs.core.first.call(null,seq20519__$1);
var seq20519__$2 = cljs.core.next.call(null,seq20519__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__20520,G__20521,seq20519__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__9999__auto___20535 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__20534 = arguments.length;
switch (G__20534) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20537 = arguments.length;
var i__9954__auto___20538 = (0);
while(true){
if((i__9954__auto___20538 < len__9953__auto___20537)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20538]));

var G__20539 = (i__9954__auto___20538 + (1));
i__9954__auto___20538 = G__20539;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9977__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq20531){
var G__20532 = cljs.core.first.call(null,seq20531);
var seq20531__$1 = cljs.core.next.call(null,seq20531);
var G__20533 = cljs.core.first.call(null,seq20531__$1);
var seq20531__$2 = cljs.core.next.call(null,seq20531__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__20532,G__20533,seq20531__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__9999__auto___20549 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__20546 = arguments.length;
switch (G__20546) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9976__auto__ = [];
var len__9953__auto___20551 = arguments.length;
var i__9954__auto___20552 = (0);
while(true){
if((i__9954__auto___20552 < len__9953__auto___20551)){
args_arr__9976__auto__.push((arguments[i__9954__auto___20552]));

var G__20553 = (i__9954__auto___20552 + (1));
i__9954__auto___20552 = G__20553;
continue;
} else {
}
break;
}

var argseq__9977__auto__ = (new cljs.core.IndexedSeq(args_arr__9976__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9977__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__20540_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20540_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__20541_SHARP_){
var _STAR_cljs_warnings_STAR_20548 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20541_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_20548;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9628__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq20543){
var G__20544 = cljs.core.first.call(null,seq20543);
var seq20543__$1 = cljs.core.next.call(null,seq20543);
var G__20545 = cljs.core.first.call(null,seq20543__$1);
var seq20543__$2 = cljs.core.next.call(null,seq20543__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__20544,G__20545,seq20543__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__9999__auto___20569 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20570 = arguments.length;
var i__9954__auto___20571 = (0);
while(true){
if((i__9954__auto___20571 < len__9953__auto___20570)){
args__9960__auto__.push((arguments[i__9954__auto___20571]));

var G__20572 = (i__9954__auto___20571 + (1));
i__9954__auto___20571 = G__20572;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__20557){
var vec__20558 = p__20557;
var k = cljs.core.nth.call(null,vec__20558,(0),null);
var _ = cljs.core.nth.call(null,vec__20558,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__9628__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__20561){
var vec__20562 = p__20561;
var k = cljs.core.nth.call(null,vec__20562,(0),null);
var v = cljs.core.nth.call(null,vec__20562,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9628__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__20565){
var vec__20566 = p__20565;
var k = cljs.core.nth.call(null,vec__20566,(0),null);
var v = cljs.core.nth.call(null,vec__20566,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9628__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9628__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq20554){
var G__20555 = cljs.core.first.call(null,seq20554);
var seq20554__$1 = cljs.core.next.call(null,seq20554);
var G__20556 = cljs.core.first.call(null,seq20554__$1);
var seq20554__$2 = cljs.core.next.call(null,seq20554__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__20555,G__20556,seq20554__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__9999__auto___20573 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__9999__auto___20576 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20574__auto__","a__20574__auto__",-1194356246,null)),(function (){var x__9628__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__20575__auto__","l__20575__auto__",1388427076,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20574__auto__","a__20574__auto__",-1194356246,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20574__auto__","a__20574__auto__",-1194356246,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__20575__auto__","l__20575__auto__",1388427076,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9628__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__9999__auto___20579 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20577__auto__","a__20577__auto__",-53548059,null)),(function (){var x__9628__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__20578__auto__","l__20578__auto__",856390122,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20577__auto__","a__20577__auto__",-53548059,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9628__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__20578__auto__","l__20578__auto__",856390122,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9628__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__9999__auto___20585 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20586 = arguments.length;
var i__9954__auto___20587 = (0);
while(true){
if((i__9954__auto___20587 < len__9953__auto___20586)){
args__9960__auto__.push((arguments[i__9954__auto___20587]));

var G__20588 = (i__9954__auto___20587 + (1));
i__9954__auto___20587 = G__20588;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__20580__auto__","n__20580__auto__",-1686484199,null)),(function (){var x__9628__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__20580__auto__","n__20580__auto__",-1686484199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9628__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq20581){
var G__20582 = cljs.core.first.call(null,seq20581);
var seq20581__$1 = cljs.core.next.call(null,seq20581);
var G__20583 = cljs.core.first.call(null,seq20581__$1);
var seq20581__$2 = cljs.core.next.call(null,seq20581__$1);
var G__20584 = cljs.core.first.call(null,seq20581__$2);
var seq20581__$3 = cljs.core.next.call(null,seq20581__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__20582,G__20583,G__20584,seq20581__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20592 = arguments.length;
var i__9954__auto___20593 = (0);
while(true){
if((i__9954__auto___20593 < len__9953__auto___20592)){
args__9960__auto__.push((arguments[i__9954__auto___20593]));

var G__20594 = (i__9954__auto___20593 + (1));
i__9954__auto___20593 = G__20594;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((1) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9961__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__20589_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20589_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq20590){
var G__20591 = cljs.core.first.call(null,seq20590);
var seq20590__$1 = cljs.core.next.call(null,seq20590);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__20591,seq20590__$1);
});

var ret__9999__auto___20604 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20605 = arguments.length;
var i__9954__auto___20606 = (0);
while(true){
if((i__9954__auto___20606 < len__9953__auto___20605)){
args__9960__auto__.push((arguments[i__9954__auto___20606]));

var G__20607 = (i__9954__auto___20606 + (1));
i__9954__auto___20606 = G__20607;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__20595__auto__","method-table__20595__auto__",129596654,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__20596__auto__","prefer-table__20596__auto__",-459177266,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__20597__auto__","method-cache__20597__auto__",929759299,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__20598__auto__","cached-hierarchy__20598__auto__",1113603661,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__20599__auto__","hierarchy__20599__auto__",353125243,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__9628__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9628__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__20599__auto__","hierarchy__20599__auto__",353125243,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__20595__auto__","method-table__20595__auto__",129596654,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__20596__auto__","prefer-table__20596__auto__",-459177266,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__20597__auto__","method-cache__20597__auto__",929759299,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__20598__auto__","cached-hierarchy__20598__auto__",1113603661,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq20600){
var G__20601 = cljs.core.first.call(null,seq20600);
var seq20600__$1 = cljs.core.next.call(null,seq20600);
var G__20602 = cljs.core.first.call(null,seq20600__$1);
var seq20600__$2 = cljs.core.next.call(null,seq20600__$1);
var G__20603 = cljs.core.first.call(null,seq20600__$2);
var seq20600__$3 = cljs.core.next.call(null,seq20600__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__20601,G__20602,G__20603,seq20600__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__9999__auto___20613 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20614 = arguments.length;
var i__9954__auto___20615 = (0);
while(true){
if((i__9954__auto___20615 < len__9953__auto___20614)){
args__9960__auto__.push((arguments[i__9954__auto___20615]));

var G__20616 = (i__9954__auto___20615 + (1));
i__9954__auto___20615 = G__20616;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((4) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9961__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq20608){
var G__20609 = cljs.core.first.call(null,seq20608);
var seq20608__$1 = cljs.core.next.call(null,seq20608);
var G__20610 = cljs.core.first.call(null,seq20608__$1);
var seq20608__$2 = cljs.core.next.call(null,seq20608__$1);
var G__20611 = cljs.core.first.call(null,seq20608__$2);
var seq20608__$3 = cljs.core.next.call(null,seq20608__$2);
var G__20612 = cljs.core.first.call(null,seq20608__$3);
var seq20608__$4 = cljs.core.next.call(null,seq20608__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__20609,G__20610,G__20611,G__20612,seq20608__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__9999__auto___20619 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20617__auto__","start__20617__auto__",871543128,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20618__auto__","ret__20618__auto__",2114062347,null)),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20617__auto__","start__20617__auto__",871543128,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20618__auto__","ret__20618__auto__",2114062347,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__9999__auto___20634 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20635 = arguments.length;
var i__9954__auto___20636 = (0);
while(true){
if((i__9954__auto___20636 < len__9953__auto___20635)){
args__9960__auto__.push((arguments[i__9954__auto___20636]));

var G__20637 = (i__9954__auto___20636 + (1));
i__9954__auto___20636 = G__20637;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((5) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9961__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__20631){
var map__20632 = p__20631;
var map__20632__$1 = ((((!((map__20632 == null)))?((((map__20632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20632):map__20632);
var print_fn = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20620__auto__","start__20620__auto__",907983251,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20621__auto__","ret__20621__auto__",1169346058,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___20622__auto__","___20622__auto__",-1226497939,null)),(function (){var x__9628__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__20623__auto__","end__20623__auto__",-1583401224,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__20624__auto__","elapsed__20624__auto__",-1339356955,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__20623__auto__","end__20623__auto__",-1583401224,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20620__auto__","start__20620__auto__",907983251,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__9628__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9628__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9628__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__20624__auto__","elapsed__20624__auto__",-1339356955,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq20625){
var G__20626 = cljs.core.first.call(null,seq20625);
var seq20625__$1 = cljs.core.next.call(null,seq20625);
var G__20627 = cljs.core.first.call(null,seq20625__$1);
var seq20625__$2 = cljs.core.next.call(null,seq20625__$1);
var G__20628 = cljs.core.first.call(null,seq20625__$2);
var seq20625__$3 = cljs.core.next.call(null,seq20625__$2);
var G__20629 = cljs.core.first.call(null,seq20625__$3);
var seq20625__$4 = cljs.core.next.call(null,seq20625__$3);
var G__20630 = cljs.core.first.call(null,seq20625__$4);
var seq20625__$5 = cljs.core.next.call(null,seq20625__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__20626,G__20627,G__20628,G__20629,G__20630,seq20625__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__20639 = arguments.length;
switch (G__20639) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__9628__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__9999__auto___20641 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__20642_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20642_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__9628__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9628__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9628__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__20643__auto__","arr__20643__auto__",550126589,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__20644__auto__","s__20644__auto__",-397759599,null)),(function (){var x__9628__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__20644__auto__","s__20644__auto__",-397759599,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__20643__auto__","arr__20643__auto__",550126589,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__20644__auto__","s__20644__auto__",-397759599,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__20644__auto__","s__20644__auto__",-397759599,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__20643__auto__","arr__20643__auto__",550126589,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
var ret__9999__auto___20645 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__9999__auto___20651 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20652 = arguments.length;
var i__9954__auto___20653 = (0);
while(true){
if((i__9954__auto___20653 < len__9953__auto___20652)){
args__9960__auto__.push((arguments[i__9954__auto___20653]));

var G__20654 = (i__9954__auto___20653 + (1));
i__9954__auto___20653 = G__20654;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20646__auto__","sb__20646__auto__",-126955278,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20647__auto__","x__20647__auto__",149572230,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20646__auto__","sb__20646__auto__",-126955278,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20647__auto__","x__20647__auto__",149572230,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20646__auto__","sb__20646__auto__",-126955278,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq20648){
var G__20649 = cljs.core.first.call(null,seq20648);
var seq20648__$1 = cljs.core.next.call(null,seq20648);
var G__20650 = cljs.core.first.call(null,seq20648__$1);
var seq20648__$2 = cljs.core.next.call(null,seq20648__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__20649,G__20650,seq20648__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__9999__auto___20659 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20660 = arguments.length;
var i__9954__auto___20661 = (0);
while(true){
if((i__9954__auto___20661 < len__9953__auto___20660)){
args__9960__auto__.push((arguments[i__9954__auto___20661]));

var G__20662 = (i__9954__auto___20661 + (1));
i__9954__auto___20661 = G__20662;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__20655_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = p1__20655_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq20656){
var G__20657 = cljs.core.first.call(null,seq20656);
var seq20656__$1 = cljs.core.next.call(null,seq20656);
var G__20658 = cljs.core.first.call(null,seq20656__$1);
var seq20656__$2 = cljs.core.next.call(null,seq20656__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__20657,G__20658,seq20656__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__9999__auto___20663 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9628__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__9999__auto___20665 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9628__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20664__auto__","this__20664__auto__",-139728442,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20664__auto__","this__20664__auto__",-139728442,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__9999__auto___20682 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__20674){
var vec__20675 = p__20674;
var sym = cljs.core.nth.call(null,vec__20675,(0),null);
var _ = cljs.core.nth.call(null,vec__20675,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9628__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__20678){
var vec__20679 = p__20678;
var _ = cljs.core.nth.call(null,vec__20679,(0),null);
var info = cljs.core.nth.call(null,vec__20679,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__9999__auto___20691 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__20687){
var vec__20688 = p__20687;
var ctor = cljs.core.nth.call(null,vec__20688,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__20688,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9628__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__9999__auto___20700 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9628__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__20696){
var vec__20697 = p__20696;
var sym = cljs.core.nth.call(null,vec__20697,(0),null);
var _ = cljs.core.nth.call(null,vec__20697,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9628__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__9999__auto___20701 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__9628__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__9999__auto___20707 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20708 = arguments.length;
var i__9954__auto___20709 = (0);
while(true){
if((i__9954__auto___20709 < len__9953__auto___20708)){
args__9960__auto__.push((arguments[i__9954__auto___20709]));

var G__20710 = (i__9954__auto___20709 + (1));
i__9954__auto___20709 = G__20710;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((4) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9961__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__9628__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__9628__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq20702){
var G__20703 = cljs.core.first.call(null,seq20702);
var seq20702__$1 = cljs.core.next.call(null,seq20702);
var G__20704 = cljs.core.first.call(null,seq20702__$1);
var seq20702__$2 = cljs.core.next.call(null,seq20702__$1);
var G__20705 = cljs.core.first.call(null,seq20702__$2);
var seq20702__$3 = cljs.core.next.call(null,seq20702__$2);
var G__20706 = cljs.core.first.call(null,seq20702__$3);
var seq20702__$4 = cljs.core.next.call(null,seq20702__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20703,G__20704,G__20705,G__20706,seq20702__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__9999__auto___20715 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20716 = arguments.length;
var i__9954__auto___20717 = (0);
while(true){
if((i__9954__auto___20717 < len__9953__auto___20716)){
args__9960__auto__.push((arguments[i__9954__auto___20717]));

var G__20718 = (i__9954__auto___20717 + (1));
i__9954__auto___20717 = G__20718;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq20711){
var G__20712 = cljs.core.first.call(null,seq20711);
var seq20711__$1 = cljs.core.next.call(null,seq20711);
var G__20713 = cljs.core.first.call(null,seq20711__$1);
var seq20711__$2 = cljs.core.next.call(null,seq20711__$1);
var G__20714 = cljs.core.first.call(null,seq20711__$2);
var seq20711__$3 = cljs.core.next.call(null,seq20711__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__20712,G__20713,G__20714,seq20711__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__9999__auto___20722 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20723 = arguments.length;
var i__9954__auto___20724 = (0);
while(true){
if((i__9954__auto___20724 < len__9953__auto___20723)){
args__9960__auto__.push((arguments[i__9954__auto___20724]));

var G__20725 = (i__9954__auto___20724 + (1));
i__9954__auto___20724 = G__20725;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9628__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq20719){
var G__20720 = cljs.core.first.call(null,seq20719);
var seq20719__$1 = cljs.core.next.call(null,seq20719);
var G__20721 = cljs.core.first.call(null,seq20719__$1);
var seq20719__$2 = cljs.core.next.call(null,seq20719__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__20720,G__20721,seq20719__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__9999__auto___20729 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20730 = arguments.length;
var i__9954__auto___20731 = (0);
while(true){
if((i__9954__auto___20731 < len__9953__auto___20730)){
args__9960__auto__.push((arguments[i__9954__auto___20731]));

var G__20732 = (i__9954__auto___20731 + (1));
i__9954__auto___20731 = G__20732;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9628__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq20726){
var G__20727 = cljs.core.first.call(null,seq20726);
var seq20726__$1 = cljs.core.next.call(null,seq20726);
var G__20728 = cljs.core.first.call(null,seq20726__$1);
var seq20726__$2 = cljs.core.next.call(null,seq20726__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__20727,G__20728,seq20726__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__9999__auto___20736 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20737 = arguments.length;
var i__9954__auto___20738 = (0);
while(true){
if((i__9954__auto___20738 < len__9953__auto___20737)){
args__9960__auto__.push((arguments[i__9954__auto___20738]));

var G__20739 = (i__9954__auto___20738 + (1));
i__9954__auto___20738 = G__20739;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9628__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq20733){
var G__20734 = cljs.core.first.call(null,seq20733);
var seq20733__$1 = cljs.core.next.call(null,seq20733);
var G__20735 = cljs.core.first.call(null,seq20733__$1);
var seq20733__$2 = cljs.core.next.call(null,seq20733__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__20734,G__20735,seq20733__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__9999__auto___20743 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20744 = arguments.length;
var i__9954__auto___20745 = (0);
while(true){
if((i__9954__auto___20745 < len__9953__auto___20744)){
args__9960__auto__.push((arguments[i__9954__auto___20745]));

var G__20746 = (i__9954__auto___20745 + (1));
i__9954__auto___20745 = G__20746;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9628__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq20740){
var G__20741 = cljs.core.first.call(null,seq20740);
var seq20740__$1 = cljs.core.next.call(null,seq20740);
var G__20742 = cljs.core.first.call(null,seq20740__$1);
var seq20740__$2 = cljs.core.next.call(null,seq20740__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__20741,G__20742,seq20740__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__9999__auto___20750 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20751 = arguments.length;
var i__9954__auto___20752 = (0);
while(true){
if((i__9954__auto___20752 < len__9953__auto___20751)){
args__9960__auto__.push((arguments[i__9954__auto___20752]));

var G__20753 = (i__9954__auto___20752 + (1));
i__9954__auto___20752 = G__20753;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9628__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq20747){
var G__20748 = cljs.core.first.call(null,seq20747);
var seq20747__$1 = cljs.core.next.call(null,seq20747);
var G__20749 = cljs.core.first.call(null,seq20747__$1);
var seq20747__$2 = cljs.core.next.call(null,seq20747__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__20748,G__20749,seq20747__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__9999__auto___20757 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20758 = arguments.length;
var i__9954__auto___20759 = (0);
while(true){
if((i__9954__auto___20759 < len__9953__auto___20758)){
args__9960__auto__.push((arguments[i__9954__auto___20759]));

var G__20760 = (i__9954__auto___20759 + (1));
i__9954__auto___20759 = G__20760;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((2) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9961__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9628__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq20754){
var G__20755 = cljs.core.first.call(null,seq20754);
var seq20754__$1 = cljs.core.next.call(null,seq20754);
var G__20756 = cljs.core.first.call(null,seq20754__$1);
var seq20754__$2 = cljs.core.next.call(null,seq20754__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__20755,G__20756,seq20754__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__9999__auto___20761 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__9628__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__9999__auto___20762 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9628__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__9999__auto___20763 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__20764 = form_SINGLEQUOTE_;
var G__20765 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__20764;
form_SINGLEQUOTE_ = G__20765;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9628__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__8662__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__8662__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__8662__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__20767 = arguments.length;
switch (G__20767) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__20768,solo){
var vec__20769 = p__20768;
var seq__20770 = cljs.core.seq.call(null,vec__20769);
var first__20771 = cljs.core.first.call(null,seq__20770);
var seq__20770__$1 = cljs.core.next.call(null,seq__20770);
var arglist = first__20771;
var body = seq__20770__$1;
var method = vec__20769;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"C:\\Users\\KyuBok\\.boot\\cache\\tmp\\Projects\\cwbn-clj\\cwbn\\5u0\\-9uliv9\\cwbn\\main.out\\cljs\\core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2999),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"C:\\Users\\KyuBok\\.boot\\cache\\tmp\\Projects\\cwbn-clj\\cwbn\\5u0\\-9uliv9\\cwbn\\main.out\\cljs\\core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3000),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
});})(sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),params,(function (){var x__9628__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9628__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});})(sig,restarg,vec__20769,seq__20770,first__20771,seq__20770__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))):null),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__9999__auto___20775 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__20773__auto__","len__20773__auto__",773873498,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20774__auto__","i__20774__auto__",-880112509,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20774__auto__","i__20774__auto__",-880112509,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__20773__auto__","len__20773__auto__",773873498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__9628__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20774__auto__","i__20774__auto__",-880112509,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20774__auto__","i__20774__auto__",-880112509,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__20778,emit_var_QMARK_){
var vec__20779 = p__20778;
var vec__20782 = cljs.core.nth.call(null,vec__20779,(0),null);
var seq__20783 = cljs.core.seq.call(null,vec__20782);
var first__20784 = cljs.core.first.call(null,seq__20783);
var seq__20783__$1 = cljs.core.next.call(null,seq__20783);
var arglist = first__20784;
var body = seq__20783__$1;
var method = vec__20782;
var fdecl = vec__20779;
var dest_args = ((function (vec__20779,vec__20782,seq__20783,first__20784,seq__20783__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__20779,vec__20782,seq__20783,first__20784,seq__20783__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});})(vec__20779,vec__20782,seq__20783,first__20784,seq__20783__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__20779,vec__20782,seq__20783,first__20784,seq__20783__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__9628__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20776__auto__","args__20776__auto__",-1625456998,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20776__auto__","args__20776__auto__",-1625456998,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20777__auto__","argseq__20777__auto__",235743347,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9628__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20776__auto__","args__20776__auto__",-1625456998,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"C:\\Users\\KyuBok\\.boot\\cache\\tmp\\Projects\\cwbn-clj\\cwbn\\5u0\\-9uliv9\\cwbn\\main.out\\cljs\\core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20776__auto__","args__20776__auto__",-1625456998,null)),(function (){var x__9628__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20777__auto__","argseq__20777__auto__",235743347,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9628__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__20793){
var vec__20794 = p__20793;
var seq__20795 = cljs.core.seq.call(null,vec__20794);
var first__20796 = cljs.core.first.call(null,seq__20795);
var seq__20795__$1 = cljs.core.next.call(null,seq__20795);
var sig = first__20796;
var body = seq__20795__$1;
var method = vec__20794;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__20785_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__20785_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__20786_SHARP_){
return fixed_arity.call(null,rname,p1__20786_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__9628__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__20787__auto__","args-arr__20787__auto__",-2121565647,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__20787__auto__","args-arr__20787__auto__",-2121565647,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20788__auto__","argseq__20788__auto__",981189322,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"C:\\Users\\KyuBok\\.boot\\cache\\tmp\\Projects\\cwbn-clj\\cwbn\\5u0\\-9uliv9\\cwbn\\main.out\\cljs\\core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3108),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__20787__auto__","args-arr__20787__auto__",-2121565647,null)),(function (){var x__9628__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20788__auto__","argseq__20788__auto__",981189322,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__9628__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__20797__i = 0, G__20797__a = new Array(arguments.length -  3);
while (G__20797__i < G__20797__a.length) {G__20797__a[G__20797__i] = arguments[G__20797__i + 3]; ++G__20797__i;}
  fdecl = new cljs.core.IndexedSeq(G__20797__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__20798){
var _AMPERSAND_form = cljs.core.first(arglist__20798);
arglist__20798 = cljs.core.next(arglist__20798);
var _AMPERSAND_env = cljs.core.first(arglist__20798);
arglist__20798 = cljs.core.next(arglist__20798);
var name = cljs.core.first(arglist__20798);
var fdecl = cljs.core.rest(arglist__20798);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__9960__auto__ = [];
var len__9953__auto___20804 = arguments.length;
var i__9954__auto___20805 = (0);
while(true){
if((i__9954__auto___20805 < len__9953__auto___20804)){
args__9960__auto__.push((arguments[i__9954__auto___20805]));

var G__20806 = (i__9954__auto___20805 + (1));
i__9954__auto___20805 = G__20806;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((3) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9961__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9628__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__20807 = cljs.core.cons.call(null,f,p);
var G__20808 = cljs.core.next.call(null,args__$1);
p = G__20807;
args__$1 = G__20808;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__20809 = cljs.core.cons.call(null,f,p);
var G__20810 = cljs.core.next.call(null,args__$1);
p = G__20809;
args__$1 = G__20810;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__20811 = cljs.core.next.call(null,fd);
fd = G__20811;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__20812 = cljs.core.next.call(null,fd);
fd = G__20812;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__9628__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__20813 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__20814 = cljs.core.next.call(null,ds);
acc = G__20813;
ds = G__20814;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__20815 = cljs.core.next.call(null,p);
var G__20816 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__20815;
d = G__20816;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20799__auto__","ret__20799__auto__",2081222759,null)),(function (){var x__9628__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9628__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20799__auto__","ret__20799__auto__",2081222759,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq20800){
var G__20801 = cljs.core.first.call(null,seq20800);
var seq20800__$1 = cljs.core.next.call(null,seq20800);
var G__20802 = cljs.core.first.call(null,seq20800__$1);
var seq20800__$2 = cljs.core.next.call(null,seq20800__$1);
var G__20803 = cljs.core.first.call(null,seq20800__$2);
var seq20800__$3 = cljs.core.next.call(null,seq20800__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__20801,G__20802,G__20803,seq20800__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__9999__auto___20821 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__20817 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e20820){var e = e20820;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__20817,(0),null);
var meta = cljs.core.nth.call(null,vec__20817,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9628__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9628__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9628__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),(function (){var x__9628__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map
