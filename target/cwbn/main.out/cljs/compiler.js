// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__12559 = s;
var map__12559__$1 = ((((!((map__12559 == null)))?((((map__12559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12559):map__12559);
var name = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12562 = info;
var map__12563 = G__12562;
var map__12563__$1 = ((((!((map__12563 == null)))?((((map__12563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12563):map__12563);
var shadow = cljs.core.get.call(null,map__12563__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12562__$1 = G__12562;
while(true){
var d__$2 = d__$1;
var map__12565 = G__12562__$1;
var map__12565__$1 = ((((!((map__12565 == null)))?((((map__12565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12565):map__12565);
var shadow__$1 = cljs.core.get.call(null,map__12565__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__12567 = (d__$2 + (1));
var G__12568 = shadow__$1;
d__$1 = G__12567;
G__12562__$1 = G__12568;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12569){
var map__12570 = p__12569;
var map__12570__$1 = ((((!((map__12570 == null)))?((((map__12570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12570):map__12570);
var name_var = map__12570__$1;
var name = cljs.core.get.call(null,map__12570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12570__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__12572 = info;
var map__12572__$1 = ((((!((map__12572 == null)))?((((map__12572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572):map__12572);
var ns = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__12575 = arguments.length;
switch (G__12575) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__12577 = cp;
switch (G__12577) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__12579_12583 = cljs.core.seq.call(null,s);
var chunk__12580_12584 = null;
var count__12581_12585 = (0);
var i__12582_12586 = (0);
while(true){
if((i__12582_12586 < count__12581_12585)){
var c_12587 = cljs.core._nth.call(null,chunk__12580_12584,i__12582_12586);
sb.append(cljs.compiler.escape_char.call(null,c_12587));

var G__12588 = seq__12579_12583;
var G__12589 = chunk__12580_12584;
var G__12590 = count__12581_12585;
var G__12591 = (i__12582_12586 + (1));
seq__12579_12583 = G__12588;
chunk__12580_12584 = G__12589;
count__12581_12585 = G__12590;
i__12582_12586 = G__12591;
continue;
} else {
var temp__5457__auto___12592 = cljs.core.seq.call(null,seq__12579_12583);
if(temp__5457__auto___12592){
var seq__12579_12593__$1 = temp__5457__auto___12592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12579_12593__$1)){
var c__9605__auto___12594 = cljs.core.chunk_first.call(null,seq__12579_12593__$1);
var G__12595 = cljs.core.chunk_rest.call(null,seq__12579_12593__$1);
var G__12596 = c__9605__auto___12594;
var G__12597 = cljs.core.count.call(null,c__9605__auto___12594);
var G__12598 = (0);
seq__12579_12583 = G__12595;
chunk__12580_12584 = G__12596;
count__12581_12585 = G__12597;
i__12582_12586 = G__12598;
continue;
} else {
var c_12599 = cljs.core.first.call(null,seq__12579_12593__$1);
sb.append(cljs.compiler.escape_char.call(null,c_12599));

var G__12600 = cljs.core.next.call(null,seq__12579_12593__$1);
var G__12601 = null;
var G__12602 = (0);
var G__12603 = (0);
seq__12579_12583 = G__12600;
chunk__12580_12584 = G__12601;
count__12581_12585 = G__12602;
i__12582_12586 = G__12603;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__9729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9731__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9733__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9733__auto__,method_table__9729__auto__,prefer_table__9730__auto__,method_cache__9731__auto__,cached_hierarchy__9732__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__10956__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__10956__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__12604_12609 = ast;
var map__12604_12610__$1 = ((((!((map__12604_12609 == null)))?((((map__12604_12609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12604_12609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12604_12609):map__12604_12609);
var env_12611 = cljs.core.get.call(null,map__12604_12610__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_12611))){
var map__12606_12612 = env_12611;
var map__12606_12613__$1 = ((((!((map__12606_12612 == null)))?((((map__12606_12612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12606_12612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12606_12612):map__12606_12612);
var line_12614 = cljs.core.get.call(null,map__12606_12613__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12615 = cljs.core.get.call(null,map__12606_12613__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__12606_12612,map__12606_12613__$1,line_12614,column_12615,map__12604_12609,map__12604_12610__$1,env_12611,val__10956__auto__){
return (function (m){
var minfo = (function (){var G__12608 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__12608,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__12608;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_12614 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__12606_12612,map__12606_12613__$1,line_12614,column_12615,map__12604_12609,map__12604_12610__$1,env_12611,val__10956__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_12615)?(column_12615 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__12606_12612,map__12606_12613__$1,line_12614,column_12615,map__12604_12609,map__12604_12610__$1,env_12611,val__10956__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__12606_12612,map__12606_12613__$1,line_12614,column_12615,map__12604_12609,map__12604_12610__$1,env_12611,val__10956__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__12606_12612,map__12606_12613__$1,line_12614,column_12615,map__12604_12609,map__12604_12610__$1,env_12611,val__10956__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__12606_12612,map__12606_12613__$1,line_12614,column_12615,map__12604_12609,map__12604_12610__$1,env_12611,val__10956__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__10956__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9960__auto__ = [];
var len__9953__auto___12622 = arguments.length;
var i__9954__auto___12623 = (0);
while(true){
if((i__9954__auto___12623 < len__9953__auto___12622)){
args__9960__auto__.push((arguments[i__9954__auto___12623]));

var G__12624 = (i__9954__auto___12623 + (1));
i__9954__auto___12623 = G__12624;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__12618_12625 = cljs.core.seq.call(null,xs);
var chunk__12619_12626 = null;
var count__12620_12627 = (0);
var i__12621_12628 = (0);
while(true){
if((i__12621_12628 < count__12620_12627)){
var x_12629 = cljs.core._nth.call(null,chunk__12619_12626,i__12621_12628);
if((x_12629 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12629)){
cljs.compiler.emit.call(null,x_12629);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12629)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12629);
} else {
if(goog.isFunction(x_12629)){
x_12629.call(null);
} else {
var s_12630 = cljs.core.print_str.call(null,x_12629);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12618_12625,chunk__12619_12626,count__12620_12627,i__12621_12628,s_12630,x_12629){
return (function (p1__12616_SHARP_){
return (p1__12616_SHARP_ + cljs.core.count.call(null,s_12630));
});})(seq__12618_12625,chunk__12619_12626,count__12620_12627,i__12621_12628,s_12630,x_12629))
);
}

cljs.core.print.call(null,s_12630);

}
}
}
}

var G__12631 = seq__12618_12625;
var G__12632 = chunk__12619_12626;
var G__12633 = count__12620_12627;
var G__12634 = (i__12621_12628 + (1));
seq__12618_12625 = G__12631;
chunk__12619_12626 = G__12632;
count__12620_12627 = G__12633;
i__12621_12628 = G__12634;
continue;
} else {
var temp__5457__auto___12635 = cljs.core.seq.call(null,seq__12618_12625);
if(temp__5457__auto___12635){
var seq__12618_12636__$1 = temp__5457__auto___12635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12618_12636__$1)){
var c__9605__auto___12637 = cljs.core.chunk_first.call(null,seq__12618_12636__$1);
var G__12638 = cljs.core.chunk_rest.call(null,seq__12618_12636__$1);
var G__12639 = c__9605__auto___12637;
var G__12640 = cljs.core.count.call(null,c__9605__auto___12637);
var G__12641 = (0);
seq__12618_12625 = G__12638;
chunk__12619_12626 = G__12639;
count__12620_12627 = G__12640;
i__12621_12628 = G__12641;
continue;
} else {
var x_12642 = cljs.core.first.call(null,seq__12618_12636__$1);
if((x_12642 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12642)){
cljs.compiler.emit.call(null,x_12642);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12642)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12642);
} else {
if(goog.isFunction(x_12642)){
x_12642.call(null);
} else {
var s_12643 = cljs.core.print_str.call(null,x_12642);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12618_12625,chunk__12619_12626,count__12620_12627,i__12621_12628,s_12643,x_12642,seq__12618_12636__$1,temp__5457__auto___12635){
return (function (p1__12616_SHARP_){
return (p1__12616_SHARP_ + cljs.core.count.call(null,s_12643));
});})(seq__12618_12625,chunk__12619_12626,count__12620_12627,i__12621_12628,s_12643,x_12642,seq__12618_12636__$1,temp__5457__auto___12635))
);
}

cljs.core.print.call(null,s_12643);

}
}
}
}

var G__12644 = cljs.core.next.call(null,seq__12618_12636__$1);
var G__12645 = null;
var G__12646 = (0);
var G__12647 = (0);
seq__12618_12625 = G__12644;
chunk__12619_12626 = G__12645;
count__12620_12627 = G__12646;
i__12621_12628 = G__12647;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq12617){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12617));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9960__auto__ = [];
var len__9953__auto___12653 = arguments.length;
var i__9954__auto___12654 = (0);
while(true){
if((i__9954__auto___12654 < len__9953__auto___12653)){
args__9960__auto__.push((arguments[i__9954__auto___12654]));

var G__12655 = (i__9954__auto___12654 + (1));
i__9954__auto___12654 = G__12655;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_12649_12656 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_12649_12656;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__12650){
var map__12651 = p__12650;
var map__12651__$1 = ((((!((map__12651 == null)))?((((map__12651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12651):map__12651);
var m = map__12651__$1;
var gen_line = cljs.core.get.call(null,map__12651__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12648){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12648));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9801__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12657_12659 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12658_12660 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12657_12659,_STAR_print_fn_STAR_12658_12660,sb__9801__auto__){
return (function (x__9802__auto__){
return sb__9801__auto__.append(x__9802__auto__);
});})(_STAR_print_newline_STAR_12657_12659,_STAR_print_fn_STAR_12658_12660,sb__9801__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12658_12660;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12657_12659;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9801__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9730__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9731__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9733__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9733__auto__,method_table__9729__auto__,prefer_table__9730__auto__,method_cache__9731__auto__,cached_hierarchy__9732__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__12661 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__12661,(0),null);
var flags = cljs.core.nth.call(null,vec__12661,(1),null);
var pattern = cljs.core.nth.call(null,vec__12661,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__8662__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8662__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__8662__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__8662__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8662__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__8662__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__12665){
var map__12666 = p__12665;
var map__12666__$1 = ((((!((map__12666 == null)))?((((map__12666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12666):map__12666);
var ast = map__12666__$1;
var info = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__12666__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__12668 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12668__$1 = ((((!((map__12668 == null)))?((((map__12668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12668):map__12668);
var cenv = map__12668__$1;
var options = cljs.core.get.call(null,map__12668__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__8674__auto__ = js_module_name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__12670 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8662__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__8662__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__8662__auto__;
}
})())){
return clojure.set.difference.call(null,G__12670,cljs.analyzer.es5_allowed);
} else {
return G__12670;
}
})();
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__12671 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__12671,reserved);
} else {
return G__12671;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__12672){
var map__12673 = p__12672;
var map__12673__$1 = ((((!((map__12673 == null)))?((((map__12673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12673):map__12673);
var arg = map__12673__$1;
var env = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12675 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12675__$1 = ((((!((map__12675 == null)))?((((map__12675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12675):map__12675);
var name = cljs.core.get.call(null,map__12675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__12677){
var map__12678 = p__12677;
var map__12678__$1 = ((((!((map__12678 == null)))?((((map__12678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12678):map__12678);
var expr = cljs.core.get.call(null,map__12678__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__12678__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__12678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__12680_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12680_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12681){
var map__12682 = p__12681;
var map__12682__$1 = ((((!((map__12682 == null)))?((((map__12682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12682):map__12682);
var env = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__12684){
var map__12685 = p__12684;
var map__12685__$1 = ((((!((map__12685 == null)))?((((map__12685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12685):map__12685);
var items = cljs.core.get.call(null,map__12685__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12685__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12687){
var map__12688 = p__12687;
var map__12688__$1 = ((((!((map__12688 == null)))?((((map__12688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12688):map__12688);
var items = cljs.core.get.call(null,map__12688__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12688__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_12690 = cljs.core.count.call(null,items);
if((cnt_12690 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_12690,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__12691_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12691_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12692){
var map__12693 = p__12692;
var map__12693__$1 = ((((!((map__12693 == null)))?((((map__12693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12693):map__12693);
var items = cljs.core.get.call(null,map__12693__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__12695){
var map__12696 = p__12695;
var map__12696__$1 = ((((!((map__12696 == null)))?((((map__12696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12696):map__12696);
var items = cljs.core.get.call(null,map__12696__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__12696__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__12696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___12714 = cljs.core.seq.call(null,items);
if(temp__5457__auto___12714){
var items_12715__$1 = temp__5457__auto___12714;
var vec__12698_12716 = items_12715__$1;
var seq__12699_12717 = cljs.core.seq.call(null,vec__12698_12716);
var first__12700_12718 = cljs.core.first.call(null,seq__12699_12717);
var seq__12699_12719__$1 = cljs.core.next.call(null,seq__12699_12717);
var vec__12701_12720 = first__12700_12718;
var k_12721 = cljs.core.nth.call(null,vec__12701_12720,(0),null);
var v_12722 = cljs.core.nth.call(null,vec__12701_12720,(1),null);
var r_12723 = seq__12699_12719__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_12721),"\": ",v_12722);

var seq__12704_12724 = cljs.core.seq.call(null,r_12723);
var chunk__12705_12725 = null;
var count__12706_12726 = (0);
var i__12707_12727 = (0);
while(true){
if((i__12707_12727 < count__12706_12726)){
var vec__12708_12728 = cljs.core._nth.call(null,chunk__12705_12725,i__12707_12727);
var k_12729__$1 = cljs.core.nth.call(null,vec__12708_12728,(0),null);
var v_12730__$1 = cljs.core.nth.call(null,vec__12708_12728,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12729__$1),"\": ",v_12730__$1);

var G__12731 = seq__12704_12724;
var G__12732 = chunk__12705_12725;
var G__12733 = count__12706_12726;
var G__12734 = (i__12707_12727 + (1));
seq__12704_12724 = G__12731;
chunk__12705_12725 = G__12732;
count__12706_12726 = G__12733;
i__12707_12727 = G__12734;
continue;
} else {
var temp__5457__auto___12735__$1 = cljs.core.seq.call(null,seq__12704_12724);
if(temp__5457__auto___12735__$1){
var seq__12704_12736__$1 = temp__5457__auto___12735__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12704_12736__$1)){
var c__9605__auto___12737 = cljs.core.chunk_first.call(null,seq__12704_12736__$1);
var G__12738 = cljs.core.chunk_rest.call(null,seq__12704_12736__$1);
var G__12739 = c__9605__auto___12737;
var G__12740 = cljs.core.count.call(null,c__9605__auto___12737);
var G__12741 = (0);
seq__12704_12724 = G__12738;
chunk__12705_12725 = G__12739;
count__12706_12726 = G__12740;
i__12707_12727 = G__12741;
continue;
} else {
var vec__12711_12742 = cljs.core.first.call(null,seq__12704_12736__$1);
var k_12743__$1 = cljs.core.nth.call(null,vec__12711_12742,(0),null);
var v_12744__$1 = cljs.core.nth.call(null,vec__12711_12742,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12743__$1),"\": ",v_12744__$1);

var G__12745 = cljs.core.next.call(null,seq__12704_12736__$1);
var G__12746 = null;
var G__12747 = (0);
var G__12748 = (0);
seq__12704_12724 = G__12745;
chunk__12705_12725 = G__12746;
count__12706_12726 = G__12747;
i__12707_12727 = G__12748;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__12749){
var map__12750 = p__12749;
var map__12750__$1 = ((((!((map__12750 == null)))?((((map__12750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12750):map__12750);
var items = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__12752){
var map__12753 = p__12752;
var map__12753__$1 = ((((!((map__12753 == null)))?((((map__12753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12753):map__12753);
var form = cljs.core.get.call(null,map__12753__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__12753__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__12755){
var map__12756 = p__12755;
var map__12756__$1 = ((((!((map__12756 == null)))?((((map__12756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12756):map__12756);
var op = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8674__auto__ = (function (){var and__8662__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8662__auto__){
var and__8662__auto____$1 = form;
if(cljs.core.truth_(and__8662__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8662__auto____$1;
}
} else {
return and__8662__auto__;
}
})();
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
var and__8662__auto__ = !((const_expr == null));
if(and__8662__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__8662__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__12758){
var map__12759 = p__12758;
var map__12759__$1 = ((((!((map__12759 == null)))?((((map__12759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12759):map__12759);
var op = cljs.core.get.call(null,map__12759__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12759__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12759__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__8674__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__8674__auto__){
return or__8674__auto__;
} else {
var and__8662__auto__ = !((const_expr == null));
if(and__8662__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__8662__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__8674__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12761){
var map__12762 = p__12761;
var map__12762__$1 = ((((!((map__12762 == null)))?((((map__12762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12762):map__12762);
var test = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__8674__auto__ = unchecked;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__12764){
var map__12765 = p__12764;
var map__12765__$1 = ((((!((map__12765 == null)))?((((map__12765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12765):map__12765);
var v = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__12767_12785 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__12768_12786 = null;
var count__12769_12787 = (0);
var i__12770_12788 = (0);
while(true){
if((i__12770_12788 < count__12769_12787)){
var vec__12771_12789 = cljs.core._nth.call(null,chunk__12768_12786,i__12770_12788);
var ts_12790 = cljs.core.nth.call(null,vec__12771_12789,(0),null);
var then_12791 = cljs.core.nth.call(null,vec__12771_12789,(1),null);
var seq__12774_12792 = cljs.core.seq.call(null,ts_12790);
var chunk__12775_12793 = null;
var count__12776_12794 = (0);
var i__12777_12795 = (0);
while(true){
if((i__12777_12795 < count__12776_12794)){
var test_12796 = cljs.core._nth.call(null,chunk__12775_12793,i__12777_12795);
cljs.compiler.emitln.call(null,"case ",test_12796,":");

var G__12797 = seq__12774_12792;
var G__12798 = chunk__12775_12793;
var G__12799 = count__12776_12794;
var G__12800 = (i__12777_12795 + (1));
seq__12774_12792 = G__12797;
chunk__12775_12793 = G__12798;
count__12776_12794 = G__12799;
i__12777_12795 = G__12800;
continue;
} else {
var temp__5457__auto___12801 = cljs.core.seq.call(null,seq__12774_12792);
if(temp__5457__auto___12801){
var seq__12774_12802__$1 = temp__5457__auto___12801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12774_12802__$1)){
var c__9605__auto___12803 = cljs.core.chunk_first.call(null,seq__12774_12802__$1);
var G__12804 = cljs.core.chunk_rest.call(null,seq__12774_12802__$1);
var G__12805 = c__9605__auto___12803;
var G__12806 = cljs.core.count.call(null,c__9605__auto___12803);
var G__12807 = (0);
seq__12774_12792 = G__12804;
chunk__12775_12793 = G__12805;
count__12776_12794 = G__12806;
i__12777_12795 = G__12807;
continue;
} else {
var test_12808 = cljs.core.first.call(null,seq__12774_12802__$1);
cljs.compiler.emitln.call(null,"case ",test_12808,":");

var G__12809 = cljs.core.next.call(null,seq__12774_12802__$1);
var G__12810 = null;
var G__12811 = (0);
var G__12812 = (0);
seq__12774_12792 = G__12809;
chunk__12775_12793 = G__12810;
count__12776_12794 = G__12811;
i__12777_12795 = G__12812;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12791);
} else {
cljs.compiler.emitln.call(null,then_12791);
}

cljs.compiler.emitln.call(null,"break;");

var G__12813 = seq__12767_12785;
var G__12814 = chunk__12768_12786;
var G__12815 = count__12769_12787;
var G__12816 = (i__12770_12788 + (1));
seq__12767_12785 = G__12813;
chunk__12768_12786 = G__12814;
count__12769_12787 = G__12815;
i__12770_12788 = G__12816;
continue;
} else {
var temp__5457__auto___12817 = cljs.core.seq.call(null,seq__12767_12785);
if(temp__5457__auto___12817){
var seq__12767_12818__$1 = temp__5457__auto___12817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12767_12818__$1)){
var c__9605__auto___12819 = cljs.core.chunk_first.call(null,seq__12767_12818__$1);
var G__12820 = cljs.core.chunk_rest.call(null,seq__12767_12818__$1);
var G__12821 = c__9605__auto___12819;
var G__12822 = cljs.core.count.call(null,c__9605__auto___12819);
var G__12823 = (0);
seq__12767_12785 = G__12820;
chunk__12768_12786 = G__12821;
count__12769_12787 = G__12822;
i__12770_12788 = G__12823;
continue;
} else {
var vec__12778_12824 = cljs.core.first.call(null,seq__12767_12818__$1);
var ts_12825 = cljs.core.nth.call(null,vec__12778_12824,(0),null);
var then_12826 = cljs.core.nth.call(null,vec__12778_12824,(1),null);
var seq__12781_12827 = cljs.core.seq.call(null,ts_12825);
var chunk__12782_12828 = null;
var count__12783_12829 = (0);
var i__12784_12830 = (0);
while(true){
if((i__12784_12830 < count__12783_12829)){
var test_12831 = cljs.core._nth.call(null,chunk__12782_12828,i__12784_12830);
cljs.compiler.emitln.call(null,"case ",test_12831,":");

var G__12832 = seq__12781_12827;
var G__12833 = chunk__12782_12828;
var G__12834 = count__12783_12829;
var G__12835 = (i__12784_12830 + (1));
seq__12781_12827 = G__12832;
chunk__12782_12828 = G__12833;
count__12783_12829 = G__12834;
i__12784_12830 = G__12835;
continue;
} else {
var temp__5457__auto___12836__$1 = cljs.core.seq.call(null,seq__12781_12827);
if(temp__5457__auto___12836__$1){
var seq__12781_12837__$1 = temp__5457__auto___12836__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12781_12837__$1)){
var c__9605__auto___12838 = cljs.core.chunk_first.call(null,seq__12781_12837__$1);
var G__12839 = cljs.core.chunk_rest.call(null,seq__12781_12837__$1);
var G__12840 = c__9605__auto___12838;
var G__12841 = cljs.core.count.call(null,c__9605__auto___12838);
var G__12842 = (0);
seq__12781_12827 = G__12839;
chunk__12782_12828 = G__12840;
count__12783_12829 = G__12841;
i__12784_12830 = G__12842;
continue;
} else {
var test_12843 = cljs.core.first.call(null,seq__12781_12837__$1);
cljs.compiler.emitln.call(null,"case ",test_12843,":");

var G__12844 = cljs.core.next.call(null,seq__12781_12837__$1);
var G__12845 = null;
var G__12846 = (0);
var G__12847 = (0);
seq__12781_12827 = G__12844;
chunk__12782_12828 = G__12845;
count__12783_12829 = G__12846;
i__12784_12830 = G__12847;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12826);
} else {
cljs.compiler.emitln.call(null,then_12826);
}

cljs.compiler.emitln.call(null,"break;");

var G__12848 = cljs.core.next.call(null,seq__12767_12818__$1);
var G__12849 = null;
var G__12850 = (0);
var G__12851 = (0);
seq__12767_12785 = G__12848;
chunk__12768_12786 = G__12849;
count__12769_12787 = G__12850;
i__12770_12788 = G__12851;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12852){
var map__12853 = p__12852;
var map__12853__$1 = ((((!((map__12853 == null)))?((((map__12853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12853):map__12853);
var throw$ = cljs.core.get.call(null,map__12853__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__12853__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__12856 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__12856,(0),null);
var rstr = cljs.core.nth.call(null,vec__12856,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__12856,fstr,rstr,ret_t,axstr){
return (function (p1__12855_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12855_SHARP_);
});})(idx,vec__12856,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__12859 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12859),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__12859;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__12860_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12860_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__12861 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12862 = cljs.core.seq.call(null,vec__12861);
var first__12863 = cljs.core.first.call(null,seq__12862);
var seq__12862__$1 = cljs.core.next.call(null,seq__12862);
var p = first__12863;
var first__12863__$1 = cljs.core.first.call(null,seq__12862__$1);
var seq__12862__$2 = cljs.core.next.call(null,seq__12862__$1);
var ts = first__12863__$1;
var first__12863__$2 = cljs.core.first.call(null,seq__12862__$2);
var seq__12862__$3 = cljs.core.next.call(null,seq__12862__$2);
var n = first__12863__$2;
var xs = seq__12862__$3;
if(cljs.core.truth_((function (){var and__8662__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__8662__auto__){
var and__8662__auto____$1 = ts;
if(cljs.core.truth_(and__8662__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8662__auto____$1;
}
} else {
return and__8662__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__12864 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12865 = cljs.core.seq.call(null,vec__12864);
var first__12866 = cljs.core.first.call(null,seq__12865);
var seq__12865__$1 = cljs.core.next.call(null,seq__12865);
var p = first__12866;
var first__12866__$1 = cljs.core.first.call(null,seq__12865__$1);
var seq__12865__$2 = cljs.core.next.call(null,seq__12865__$1);
var ts = first__12866__$1;
var xs = seq__12865__$2;
if(cljs.core.truth_((function (){var and__8662__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__8662__auto__){
var and__8662__auto____$1 = ts;
if(cljs.core.truth_(and__8662__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8662__auto____$1;
}
} else {
return and__8662__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__12869 = arguments.length;
switch (G__12869) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__12877 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__12867_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__12867_SHARP_);
} else {
return p1__12867_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__12878 = cljs.core.seq.call(null,vec__12877);
var first__12879 = cljs.core.first.call(null,seq__12878);
var seq__12878__$1 = cljs.core.next.call(null,seq__12878);
var x = first__12879;
var ys = seq__12878__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__12880 = cljs.core.seq.call(null,ys);
var chunk__12881 = null;
var count__12882 = (0);
var i__12883 = (0);
while(true){
if((i__12883 < count__12882)){
var next_line = cljs.core._nth.call(null,chunk__12881,i__12883);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12889 = seq__12880;
var G__12890 = chunk__12881;
var G__12891 = count__12882;
var G__12892 = (i__12883 + (1));
seq__12880 = G__12889;
chunk__12881 = G__12890;
count__12882 = G__12891;
i__12883 = G__12892;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12880);
if(temp__5457__auto__){
var seq__12880__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12880__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__12880__$1);
var G__12893 = cljs.core.chunk_rest.call(null,seq__12880__$1);
var G__12894 = c__9605__auto__;
var G__12895 = cljs.core.count.call(null,c__9605__auto__);
var G__12896 = (0);
seq__12880 = G__12893;
chunk__12881 = G__12894;
count__12882 = G__12895;
i__12883 = G__12896;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__12880__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12897 = cljs.core.next.call(null,seq__12880__$1);
var G__12898 = null;
var G__12899 = (0);
var G__12900 = (0);
seq__12880 = G__12897;
chunk__12881 = G__12898;
count__12882 = G__12899;
i__12883 = G__12900;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__12884_12901 = cljs.core.seq.call(null,docs__$2);
var chunk__12885_12902 = null;
var count__12886_12903 = (0);
var i__12887_12904 = (0);
while(true){
if((i__12887_12904 < count__12886_12903)){
var e_12905 = cljs.core._nth.call(null,chunk__12885_12902,i__12887_12904);
if(cljs.core.truth_(e_12905)){
print_comment_lines.call(null,e_12905);
} else {
}

var G__12906 = seq__12884_12901;
var G__12907 = chunk__12885_12902;
var G__12908 = count__12886_12903;
var G__12909 = (i__12887_12904 + (1));
seq__12884_12901 = G__12906;
chunk__12885_12902 = G__12907;
count__12886_12903 = G__12908;
i__12887_12904 = G__12909;
continue;
} else {
var temp__5457__auto___12910 = cljs.core.seq.call(null,seq__12884_12901);
if(temp__5457__auto___12910){
var seq__12884_12911__$1 = temp__5457__auto___12910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12884_12911__$1)){
var c__9605__auto___12912 = cljs.core.chunk_first.call(null,seq__12884_12911__$1);
var G__12913 = cljs.core.chunk_rest.call(null,seq__12884_12911__$1);
var G__12914 = c__9605__auto___12912;
var G__12915 = cljs.core.count.call(null,c__9605__auto___12912);
var G__12916 = (0);
seq__12884_12901 = G__12913;
chunk__12885_12902 = G__12914;
count__12886_12903 = G__12915;
i__12887_12904 = G__12916;
continue;
} else {
var e_12917 = cljs.core.first.call(null,seq__12884_12911__$1);
if(cljs.core.truth_(e_12917)){
print_comment_lines.call(null,e_12917);
} else {
}

var G__12918 = cljs.core.next.call(null,seq__12884_12911__$1);
var G__12919 = null;
var G__12920 = (0);
var G__12921 = (0);
seq__12884_12901 = G__12918;
chunk__12885_12902 = G__12919;
count__12886_12903 = G__12920;
i__12887_12904 = G__12921;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__8662__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__12923_SHARP_){
return goog.string.startsWith(p1__12923_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8662__auto__)){
var and__8662__auto____$1 = opts;
if(cljs.core.truth_(and__8662__auto____$1)){
var and__8662__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8662__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__8662__auto____$2;
}
} else {
return and__8662__auto____$1;
}
} else {
return and__8662__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12924){
var map__12925 = p__12924;
var map__12925__$1 = ((((!((map__12925 == null)))?((((map__12925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12925):map__12925);
var name = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__12925__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8674__auto__ = init;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__8662__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8662__auto__){
return test;
} else {
return and__8662__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12927){
var map__12928 = p__12927;
var map__12928__$1 = ((((!((map__12928 == null)))?((((map__12928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12928):map__12928);
var name = cljs.core.get.call(null,map__12928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12928__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12928__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__12930_12948 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__12931_12949 = null;
var count__12932_12950 = (0);
var i__12933_12951 = (0);
while(true){
if((i__12933_12951 < count__12932_12950)){
var vec__12934_12952 = cljs.core._nth.call(null,chunk__12931_12949,i__12933_12951);
var i_12953 = cljs.core.nth.call(null,vec__12934_12952,(0),null);
var param_12954 = cljs.core.nth.call(null,vec__12934_12952,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12954);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__12955 = seq__12930_12948;
var G__12956 = chunk__12931_12949;
var G__12957 = count__12932_12950;
var G__12958 = (i__12933_12951 + (1));
seq__12930_12948 = G__12955;
chunk__12931_12949 = G__12956;
count__12932_12950 = G__12957;
i__12933_12951 = G__12958;
continue;
} else {
var temp__5457__auto___12959 = cljs.core.seq.call(null,seq__12930_12948);
if(temp__5457__auto___12959){
var seq__12930_12960__$1 = temp__5457__auto___12959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12930_12960__$1)){
var c__9605__auto___12961 = cljs.core.chunk_first.call(null,seq__12930_12960__$1);
var G__12962 = cljs.core.chunk_rest.call(null,seq__12930_12960__$1);
var G__12963 = c__9605__auto___12961;
var G__12964 = cljs.core.count.call(null,c__9605__auto___12961);
var G__12965 = (0);
seq__12930_12948 = G__12962;
chunk__12931_12949 = G__12963;
count__12932_12950 = G__12964;
i__12933_12951 = G__12965;
continue;
} else {
var vec__12937_12966 = cljs.core.first.call(null,seq__12930_12960__$1);
var i_12967 = cljs.core.nth.call(null,vec__12937_12966,(0),null);
var param_12968 = cljs.core.nth.call(null,vec__12937_12966,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_12968);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__12969 = cljs.core.next.call(null,seq__12930_12960__$1);
var G__12970 = null;
var G__12971 = (0);
var G__12972 = (0);
seq__12930_12948 = G__12969;
chunk__12931_12949 = G__12970;
count__12932_12950 = G__12971;
i__12933_12951 = G__12972;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__12940_12973 = cljs.core.seq.call(null,params);
var chunk__12941_12974 = null;
var count__12942_12975 = (0);
var i__12943_12976 = (0);
while(true){
if((i__12943_12976 < count__12942_12975)){
var param_12977 = cljs.core._nth.call(null,chunk__12941_12974,i__12943_12976);
cljs.compiler.emit.call(null,param_12977);

if(cljs.core._EQ_.call(null,param_12977,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12978 = seq__12940_12973;
var G__12979 = chunk__12941_12974;
var G__12980 = count__12942_12975;
var G__12981 = (i__12943_12976 + (1));
seq__12940_12973 = G__12978;
chunk__12941_12974 = G__12979;
count__12942_12975 = G__12980;
i__12943_12976 = G__12981;
continue;
} else {
var temp__5457__auto___12982 = cljs.core.seq.call(null,seq__12940_12973);
if(temp__5457__auto___12982){
var seq__12940_12983__$1 = temp__5457__auto___12982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12940_12983__$1)){
var c__9605__auto___12984 = cljs.core.chunk_first.call(null,seq__12940_12983__$1);
var G__12985 = cljs.core.chunk_rest.call(null,seq__12940_12983__$1);
var G__12986 = c__9605__auto___12984;
var G__12987 = cljs.core.count.call(null,c__9605__auto___12984);
var G__12988 = (0);
seq__12940_12973 = G__12985;
chunk__12941_12974 = G__12986;
count__12942_12975 = G__12987;
i__12943_12976 = G__12988;
continue;
} else {
var param_12989 = cljs.core.first.call(null,seq__12940_12983__$1);
cljs.compiler.emit.call(null,param_12989);

if(cljs.core._EQ_.call(null,param_12989,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12990 = cljs.core.next.call(null,seq__12940_12983__$1);
var G__12991 = null;
var G__12992 = (0);
var G__12993 = (0);
seq__12940_12973 = G__12990;
chunk__12941_12974 = G__12991;
count__12942_12975 = G__12992;
i__12943_12976 = G__12993;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__12944_12994 = cljs.core.seq.call(null,params);
var chunk__12945_12995 = null;
var count__12946_12996 = (0);
var i__12947_12997 = (0);
while(true){
if((i__12947_12997 < count__12946_12996)){
var param_12998 = cljs.core._nth.call(null,chunk__12945_12995,i__12947_12997);
cljs.compiler.emit.call(null,param_12998);

if(cljs.core._EQ_.call(null,param_12998,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__12999 = seq__12944_12994;
var G__13000 = chunk__12945_12995;
var G__13001 = count__12946_12996;
var G__13002 = (i__12947_12997 + (1));
seq__12944_12994 = G__12999;
chunk__12945_12995 = G__13000;
count__12946_12996 = G__13001;
i__12947_12997 = G__13002;
continue;
} else {
var temp__5457__auto___13003 = cljs.core.seq.call(null,seq__12944_12994);
if(temp__5457__auto___13003){
var seq__12944_13004__$1 = temp__5457__auto___13003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12944_13004__$1)){
var c__9605__auto___13005 = cljs.core.chunk_first.call(null,seq__12944_13004__$1);
var G__13006 = cljs.core.chunk_rest.call(null,seq__12944_13004__$1);
var G__13007 = c__9605__auto___13005;
var G__13008 = cljs.core.count.call(null,c__9605__auto___13005);
var G__13009 = (0);
seq__12944_12994 = G__13006;
chunk__12945_12995 = G__13007;
count__12946_12996 = G__13008;
i__12947_12997 = G__13009;
continue;
} else {
var param_13010 = cljs.core.first.call(null,seq__12944_13004__$1);
cljs.compiler.emit.call(null,param_13010);

if(cljs.core._EQ_.call(null,param_13010,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13011 = cljs.core.next.call(null,seq__12944_13004__$1);
var G__13012 = null;
var G__13013 = (0);
var G__13014 = (0);
seq__12944_12994 = G__13011;
chunk__12945_12995 = G__13012;
count__12946_12996 = G__13013;
i__12947_12997 = G__13014;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__13015 = cljs.core.seq.call(null,params);
var chunk__13016 = null;
var count__13017 = (0);
var i__13018 = (0);
while(true){
if((i__13018 < count__13017)){
var param = cljs.core._nth.call(null,chunk__13016,i__13018);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13019 = seq__13015;
var G__13020 = chunk__13016;
var G__13021 = count__13017;
var G__13022 = (i__13018 + (1));
seq__13015 = G__13019;
chunk__13016 = G__13020;
count__13017 = G__13021;
i__13018 = G__13022;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13015);
if(temp__5457__auto__){
var seq__13015__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13015__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__13015__$1);
var G__13023 = cljs.core.chunk_rest.call(null,seq__13015__$1);
var G__13024 = c__9605__auto__;
var G__13025 = cljs.core.count.call(null,c__9605__auto__);
var G__13026 = (0);
seq__13015 = G__13023;
chunk__13016 = G__13024;
count__13017 = G__13025;
i__13018 = G__13026;
continue;
} else {
var param = cljs.core.first.call(null,seq__13015__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13027 = cljs.core.next.call(null,seq__13015__$1);
var G__13028 = null;
var G__13029 = (0);
var G__13030 = (0);
seq__13015 = G__13027;
chunk__13016 = G__13028;
count__13017 = G__13029;
i__13018 = G__13030;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13031){
var map__13032 = p__13031;
var map__13032__$1 = ((((!((map__13032 == null)))?((((map__13032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13032):map__13032);
var type = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13032__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13034){
var map__13035 = p__13034;
var map__13035__$1 = ((((!((map__13035 == null)))?((((map__13035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13035):map__13035);
var f = map__13035__$1;
var type = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13035__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13045__$1 = (function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13046 = cljs.compiler.munge.call(null,name_13045__$1);
var delegate_name_13047 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13046),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13047," = function (");

var seq__13037_13048 = cljs.core.seq.call(null,params);
var chunk__13038_13049 = null;
var count__13039_13050 = (0);
var i__13040_13051 = (0);
while(true){
if((i__13040_13051 < count__13039_13050)){
var param_13052 = cljs.core._nth.call(null,chunk__13038_13049,i__13040_13051);
cljs.compiler.emit.call(null,param_13052);

if(cljs.core._EQ_.call(null,param_13052,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13053 = seq__13037_13048;
var G__13054 = chunk__13038_13049;
var G__13055 = count__13039_13050;
var G__13056 = (i__13040_13051 + (1));
seq__13037_13048 = G__13053;
chunk__13038_13049 = G__13054;
count__13039_13050 = G__13055;
i__13040_13051 = G__13056;
continue;
} else {
var temp__5457__auto___13057 = cljs.core.seq.call(null,seq__13037_13048);
if(temp__5457__auto___13057){
var seq__13037_13058__$1 = temp__5457__auto___13057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13037_13058__$1)){
var c__9605__auto___13059 = cljs.core.chunk_first.call(null,seq__13037_13058__$1);
var G__13060 = cljs.core.chunk_rest.call(null,seq__13037_13058__$1);
var G__13061 = c__9605__auto___13059;
var G__13062 = cljs.core.count.call(null,c__9605__auto___13059);
var G__13063 = (0);
seq__13037_13048 = G__13060;
chunk__13038_13049 = G__13061;
count__13039_13050 = G__13062;
i__13040_13051 = G__13063;
continue;
} else {
var param_13064 = cljs.core.first.call(null,seq__13037_13058__$1);
cljs.compiler.emit.call(null,param_13064);

if(cljs.core._EQ_.call(null,param_13064,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13065 = cljs.core.next.call(null,seq__13037_13058__$1);
var G__13066 = null;
var G__13067 = (0);
var G__13068 = (0);
seq__13037_13048 = G__13065;
chunk__13038_13049 = G__13066;
count__13039_13050 = G__13067;
i__13040_13051 = G__13068;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_13046," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13069 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13069,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13047,".call(this,");

var seq__13041_13070 = cljs.core.seq.call(null,params);
var chunk__13042_13071 = null;
var count__13043_13072 = (0);
var i__13044_13073 = (0);
while(true){
if((i__13044_13073 < count__13043_13072)){
var param_13074 = cljs.core._nth.call(null,chunk__13042_13071,i__13044_13073);
cljs.compiler.emit.call(null,param_13074);

if(cljs.core._EQ_.call(null,param_13074,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13075 = seq__13041_13070;
var G__13076 = chunk__13042_13071;
var G__13077 = count__13043_13072;
var G__13078 = (i__13044_13073 + (1));
seq__13041_13070 = G__13075;
chunk__13042_13071 = G__13076;
count__13043_13072 = G__13077;
i__13044_13073 = G__13078;
continue;
} else {
var temp__5457__auto___13079 = cljs.core.seq.call(null,seq__13041_13070);
if(temp__5457__auto___13079){
var seq__13041_13080__$1 = temp__5457__auto___13079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13041_13080__$1)){
var c__9605__auto___13081 = cljs.core.chunk_first.call(null,seq__13041_13080__$1);
var G__13082 = cljs.core.chunk_rest.call(null,seq__13041_13080__$1);
var G__13083 = c__9605__auto___13081;
var G__13084 = cljs.core.count.call(null,c__9605__auto___13081);
var G__13085 = (0);
seq__13041_13070 = G__13082;
chunk__13042_13071 = G__13083;
count__13043_13072 = G__13084;
i__13044_13073 = G__13085;
continue;
} else {
var param_13086 = cljs.core.first.call(null,seq__13041_13080__$1);
cljs.compiler.emit.call(null,param_13086);

if(cljs.core._EQ_.call(null,param_13086,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13087 = cljs.core.next.call(null,seq__13041_13080__$1);
var G__13088 = null;
var G__13089 = (0);
var G__13090 = (0);
seq__13041_13070 = G__13087;
chunk__13042_13071 = G__13088;
count__13043_13072 = G__13089;
i__13044_13073 = G__13090;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13046,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13046,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13045__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13046,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13047,";");

cljs.compiler.emitln.call(null,"return ",mname_13046,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13094){
var map__13095 = p__13094;
var map__13095__$1 = ((((!((map__13095 == null)))?((((map__13095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13095):map__13095);
var name = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__13095__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13091_SHARP_){
var and__8662__auto__ = p1__13091_SHARP_;
if(cljs.core.truth_(and__8662__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13091_SHARP_));
} else {
return and__8662__auto__;
}
});})(map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_13130__$1 = (function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13131 = cljs.compiler.munge.call(null,name_13130__$1);
var maxparams_13132 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13133 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_13130__$1,mname_13131,maxparams_13132,loop_locals,map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13131),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13130__$1,mname_13131,maxparams_13132,loop_locals,map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13134 = cljs.core.sort_by.call(null,((function (name_13130__$1,mname_13131,maxparams_13132,mmap_13133,loop_locals,map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13092_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13092_SHARP_)));
});})(name_13130__$1,mname_13131,maxparams_13132,mmap_13133,loop_locals,map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_13133));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13131," = null;");

var seq__13097_13135 = cljs.core.seq.call(null,ms_13134);
var chunk__13098_13136 = null;
var count__13099_13137 = (0);
var i__13100_13138 = (0);
while(true){
if((i__13100_13138 < count__13099_13137)){
var vec__13101_13139 = cljs.core._nth.call(null,chunk__13098_13136,i__13100_13138);
var n_13140 = cljs.core.nth.call(null,vec__13101_13139,(0),null);
var meth_13141 = cljs.core.nth.call(null,vec__13101_13139,(1),null);
cljs.compiler.emits.call(null,"var ",n_13140," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13141))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13141);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13141);
}

cljs.compiler.emitln.call(null,";");

var G__13142 = seq__13097_13135;
var G__13143 = chunk__13098_13136;
var G__13144 = count__13099_13137;
var G__13145 = (i__13100_13138 + (1));
seq__13097_13135 = G__13142;
chunk__13098_13136 = G__13143;
count__13099_13137 = G__13144;
i__13100_13138 = G__13145;
continue;
} else {
var temp__5457__auto___13146 = cljs.core.seq.call(null,seq__13097_13135);
if(temp__5457__auto___13146){
var seq__13097_13147__$1 = temp__5457__auto___13146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13097_13147__$1)){
var c__9605__auto___13148 = cljs.core.chunk_first.call(null,seq__13097_13147__$1);
var G__13149 = cljs.core.chunk_rest.call(null,seq__13097_13147__$1);
var G__13150 = c__9605__auto___13148;
var G__13151 = cljs.core.count.call(null,c__9605__auto___13148);
var G__13152 = (0);
seq__13097_13135 = G__13149;
chunk__13098_13136 = G__13150;
count__13099_13137 = G__13151;
i__13100_13138 = G__13152;
continue;
} else {
var vec__13104_13153 = cljs.core.first.call(null,seq__13097_13147__$1);
var n_13154 = cljs.core.nth.call(null,vec__13104_13153,(0),null);
var meth_13155 = cljs.core.nth.call(null,vec__13104_13153,(1),null);
cljs.compiler.emits.call(null,"var ",n_13154," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13155))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13155);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13155);
}

cljs.compiler.emitln.call(null,";");

var G__13156 = cljs.core.next.call(null,seq__13097_13147__$1);
var G__13157 = null;
var G__13158 = (0);
var G__13159 = (0);
seq__13097_13135 = G__13156;
chunk__13098_13136 = G__13157;
count__13099_13137 = G__13158;
i__13100_13138 = G__13159;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13131," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13132),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13132)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13132));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13107_13160 = cljs.core.seq.call(null,ms_13134);
var chunk__13108_13161 = null;
var count__13109_13162 = (0);
var i__13110_13163 = (0);
while(true){
if((i__13110_13163 < count__13109_13162)){
var vec__13111_13164 = cljs.core._nth.call(null,chunk__13108_13161,i__13110_13163);
var n_13165 = cljs.core.nth.call(null,vec__13111_13164,(0),null);
var meth_13166 = cljs.core.nth.call(null,vec__13111_13164,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13166))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13167 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13167," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13168 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13167," = new cljs.core.IndexedSeq(",a_13168,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13165,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13132)),(((cljs.core.count.call(null,maxparams_13132) > (1)))?", ":null),restarg_13167,");");
} else {
var pcnt_13169 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13166));
cljs.compiler.emitln.call(null,"case ",pcnt_13169,":");

cljs.compiler.emitln.call(null,"return ",n_13165,".call(this",(((pcnt_13169 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13169,maxparams_13132));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),",")),");");
}

var G__13170 = seq__13107_13160;
var G__13171 = chunk__13108_13161;
var G__13172 = count__13109_13162;
var G__13173 = (i__13110_13163 + (1));
seq__13107_13160 = G__13170;
chunk__13108_13161 = G__13171;
count__13109_13162 = G__13172;
i__13110_13163 = G__13173;
continue;
} else {
var temp__5457__auto___13174 = cljs.core.seq.call(null,seq__13107_13160);
if(temp__5457__auto___13174){
var seq__13107_13175__$1 = temp__5457__auto___13174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13107_13175__$1)){
var c__9605__auto___13176 = cljs.core.chunk_first.call(null,seq__13107_13175__$1);
var G__13177 = cljs.core.chunk_rest.call(null,seq__13107_13175__$1);
var G__13178 = c__9605__auto___13176;
var G__13179 = cljs.core.count.call(null,c__9605__auto___13176);
var G__13180 = (0);
seq__13107_13160 = G__13177;
chunk__13108_13161 = G__13178;
count__13109_13162 = G__13179;
i__13110_13163 = G__13180;
continue;
} else {
var vec__13114_13181 = cljs.core.first.call(null,seq__13107_13175__$1);
var n_13182 = cljs.core.nth.call(null,vec__13114_13181,(0),null);
var meth_13183 = cljs.core.nth.call(null,vec__13114_13181,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13183))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13184 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13184," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13185 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13184," = new cljs.core.IndexedSeq(",a_13185,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13182,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13132)),(((cljs.core.count.call(null,maxparams_13132) > (1)))?", ":null),restarg_13184,");");
} else {
var pcnt_13186 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13183));
cljs.compiler.emitln.call(null,"case ",pcnt_13186,":");

cljs.compiler.emitln.call(null,"return ",n_13182,".call(this",(((pcnt_13186 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13186,maxparams_13132));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),",")),");");
}

var G__13187 = cljs.core.next.call(null,seq__13107_13175__$1);
var G__13188 = null;
var G__13189 = (0);
var G__13190 = (0);
seq__13107_13160 = G__13187;
chunk__13108_13161 = G__13188;
count__13109_13162 = G__13189;
i__13110_13163 = G__13190;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_13131,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13131,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_13130__$1,mname_13131,maxparams_13132,mmap_13133,ms_13134,loop_locals,map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13093_SHARP_){
var vec__13117 = p1__13093_SHARP_;
var n = cljs.core.nth.call(null,vec__13117,(0),null);
var m = cljs.core.nth.call(null,vec__13117,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13130__$1,mname_13131,maxparams_13132,mmap_13133,ms_13134,loop_locals,map__13095,map__13095__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13134),".cljs$lang$applyTo;");
} else {
}

var seq__13120_13191 = cljs.core.seq.call(null,ms_13134);
var chunk__13121_13192 = null;
var count__13122_13193 = (0);
var i__13123_13194 = (0);
while(true){
if((i__13123_13194 < count__13122_13193)){
var vec__13124_13195 = cljs.core._nth.call(null,chunk__13121_13192,i__13123_13194);
var n_13196 = cljs.core.nth.call(null,vec__13124_13195,(0),null);
var meth_13197 = cljs.core.nth.call(null,vec__13124_13195,(1),null);
var c_13198 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13197));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13197))){
cljs.compiler.emitln.call(null,mname_13131,".cljs$core$IFn$_invoke$arity$variadic = ",n_13196,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13131,".cljs$core$IFn$_invoke$arity$",c_13198," = ",n_13196,";");
}

var G__13199 = seq__13120_13191;
var G__13200 = chunk__13121_13192;
var G__13201 = count__13122_13193;
var G__13202 = (i__13123_13194 + (1));
seq__13120_13191 = G__13199;
chunk__13121_13192 = G__13200;
count__13122_13193 = G__13201;
i__13123_13194 = G__13202;
continue;
} else {
var temp__5457__auto___13203 = cljs.core.seq.call(null,seq__13120_13191);
if(temp__5457__auto___13203){
var seq__13120_13204__$1 = temp__5457__auto___13203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13120_13204__$1)){
var c__9605__auto___13205 = cljs.core.chunk_first.call(null,seq__13120_13204__$1);
var G__13206 = cljs.core.chunk_rest.call(null,seq__13120_13204__$1);
var G__13207 = c__9605__auto___13205;
var G__13208 = cljs.core.count.call(null,c__9605__auto___13205);
var G__13209 = (0);
seq__13120_13191 = G__13206;
chunk__13121_13192 = G__13207;
count__13122_13193 = G__13208;
i__13123_13194 = G__13209;
continue;
} else {
var vec__13127_13210 = cljs.core.first.call(null,seq__13120_13204__$1);
var n_13211 = cljs.core.nth.call(null,vec__13127_13210,(0),null);
var meth_13212 = cljs.core.nth.call(null,vec__13127_13210,(1),null);
var c_13213 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13212));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13212))){
cljs.compiler.emitln.call(null,mname_13131,".cljs$core$IFn$_invoke$arity$variadic = ",n_13211,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13131,".cljs$core$IFn$_invoke$arity$",c_13213," = ",n_13211,";");
}

var G__13214 = cljs.core.next.call(null,seq__13120_13204__$1);
var G__13215 = null;
var G__13216 = (0);
var G__13217 = (0);
seq__13120_13191 = G__13214;
chunk__13121_13192 = G__13215;
count__13122_13193 = G__13216;
i__13123_13194 = G__13217;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13131,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13218){
var map__13219 = p__13218;
var map__13219__$1 = ((((!((map__13219 == null)))?((((map__13219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13219):map__13219);
var statements = cljs.core.get.call(null,map__13219__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13219__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13219__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8662__auto__ = statements;
if(cljs.core.truth_(and__8662__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8662__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__13221_13225 = cljs.core.seq.call(null,statements);
var chunk__13222_13226 = null;
var count__13223_13227 = (0);
var i__13224_13228 = (0);
while(true){
if((i__13224_13228 < count__13223_13227)){
var s_13229 = cljs.core._nth.call(null,chunk__13222_13226,i__13224_13228);
cljs.compiler.emitln.call(null,s_13229);

var G__13230 = seq__13221_13225;
var G__13231 = chunk__13222_13226;
var G__13232 = count__13223_13227;
var G__13233 = (i__13224_13228 + (1));
seq__13221_13225 = G__13230;
chunk__13222_13226 = G__13231;
count__13223_13227 = G__13232;
i__13224_13228 = G__13233;
continue;
} else {
var temp__5457__auto___13234 = cljs.core.seq.call(null,seq__13221_13225);
if(temp__5457__auto___13234){
var seq__13221_13235__$1 = temp__5457__auto___13234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13221_13235__$1)){
var c__9605__auto___13236 = cljs.core.chunk_first.call(null,seq__13221_13235__$1);
var G__13237 = cljs.core.chunk_rest.call(null,seq__13221_13235__$1);
var G__13238 = c__9605__auto___13236;
var G__13239 = cljs.core.count.call(null,c__9605__auto___13236);
var G__13240 = (0);
seq__13221_13225 = G__13237;
chunk__13222_13226 = G__13238;
count__13223_13227 = G__13239;
i__13224_13228 = G__13240;
continue;
} else {
var s_13241 = cljs.core.first.call(null,seq__13221_13235__$1);
cljs.compiler.emitln.call(null,s_13241);

var G__13242 = cljs.core.next.call(null,seq__13221_13235__$1);
var G__13243 = null;
var G__13244 = (0);
var G__13245 = (0);
seq__13221_13225 = G__13242;
chunk__13222_13226 = G__13243;
count__13223_13227 = G__13244;
i__13224_13228 = G__13245;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__8662__auto__ = statements;
if(cljs.core.truth_(and__8662__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8662__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13246){
var map__13247 = p__13246;
var map__13247__$1 = ((((!((map__13247 == null)))?((((map__13247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13247):map__13247);
var env = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13249,is_loop){
var map__13250 = p__13249;
var map__13250__$1 = ((((!((map__13250 == null)))?((((map__13250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13250):map__13250);
var bindings = cljs.core.get.call(null,map__13250__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13250__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13250__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_13252_13261 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_13252_13261,context,map__13250,map__13250__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_13252_13261,context,map__13250,map__13250__$1,bindings,expr,env))
,bindings):null));

try{var seq__13253_13262 = cljs.core.seq.call(null,bindings);
var chunk__13254_13263 = null;
var count__13255_13264 = (0);
var i__13256_13265 = (0);
while(true){
if((i__13256_13265 < count__13255_13264)){
var map__13257_13266 = cljs.core._nth.call(null,chunk__13254_13263,i__13256_13265);
var map__13257_13267__$1 = ((((!((map__13257_13266 == null)))?((((map__13257_13266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13257_13266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13257_13266):map__13257_13266);
var binding_13268 = map__13257_13267__$1;
var init_13269 = cljs.core.get.call(null,map__13257_13267__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13268);

cljs.compiler.emitln.call(null," = ",init_13269,";");

var G__13270 = seq__13253_13262;
var G__13271 = chunk__13254_13263;
var G__13272 = count__13255_13264;
var G__13273 = (i__13256_13265 + (1));
seq__13253_13262 = G__13270;
chunk__13254_13263 = G__13271;
count__13255_13264 = G__13272;
i__13256_13265 = G__13273;
continue;
} else {
var temp__5457__auto___13274 = cljs.core.seq.call(null,seq__13253_13262);
if(temp__5457__auto___13274){
var seq__13253_13275__$1 = temp__5457__auto___13274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13253_13275__$1)){
var c__9605__auto___13276 = cljs.core.chunk_first.call(null,seq__13253_13275__$1);
var G__13277 = cljs.core.chunk_rest.call(null,seq__13253_13275__$1);
var G__13278 = c__9605__auto___13276;
var G__13279 = cljs.core.count.call(null,c__9605__auto___13276);
var G__13280 = (0);
seq__13253_13262 = G__13277;
chunk__13254_13263 = G__13278;
count__13255_13264 = G__13279;
i__13256_13265 = G__13280;
continue;
} else {
var map__13259_13281 = cljs.core.first.call(null,seq__13253_13275__$1);
var map__13259_13282__$1 = ((((!((map__13259_13281 == null)))?((((map__13259_13281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13259_13281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13259_13281):map__13259_13281);
var binding_13283 = map__13259_13282__$1;
var init_13284 = cljs.core.get.call(null,map__13259_13282__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13283);

cljs.compiler.emitln.call(null," = ",init_13284,";");

var G__13285 = cljs.core.next.call(null,seq__13253_13275__$1);
var G__13286 = null;
var G__13287 = (0);
var G__13288 = (0);
seq__13253_13262 = G__13285;
chunk__13254_13263 = G__13286;
count__13255_13264 = G__13287;
i__13256_13265 = G__13288;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13252_13261;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13289){
var map__13290 = p__13289;
var map__13290__$1 = ((((!((map__13290 == null)))?((((map__13290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13290):map__13290);
var frame = cljs.core.get.call(null,map__13290__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13290__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13290__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9719__auto___13292 = cljs.core.count.call(null,exprs);
var i_13293 = (0);
while(true){
if((i_13293 < n__9719__auto___13292)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13293)," = ",exprs.call(null,i_13293),";");

var G__13294 = (i_13293 + (1));
i_13293 = G__13294;
continue;
} else {
}
break;
}

var n__9719__auto___13295 = cljs.core.count.call(null,exprs);
var i_13296 = (0);
while(true){
if((i_13296 < n__9719__auto___13295)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13296))," = ",temps.call(null,i_13296),";");

var G__13297 = (i_13296 + (1));
i_13296 = G__13297;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13298){
var map__13299 = p__13298;
var map__13299__$1 = ((((!((map__13299 == null)))?((((map__13299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13299):map__13299);
var bindings = cljs.core.get.call(null,map__13299__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13299__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13301_13309 = cljs.core.seq.call(null,bindings);
var chunk__13302_13310 = null;
var count__13303_13311 = (0);
var i__13304_13312 = (0);
while(true){
if((i__13304_13312 < count__13303_13311)){
var map__13305_13313 = cljs.core._nth.call(null,chunk__13302_13310,i__13304_13312);
var map__13305_13314__$1 = ((((!((map__13305_13313 == null)))?((((map__13305_13313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13305_13313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13305_13313):map__13305_13313);
var binding_13315 = map__13305_13314__$1;
var init_13316 = cljs.core.get.call(null,map__13305_13314__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13315)," = ",init_13316,";");

var G__13317 = seq__13301_13309;
var G__13318 = chunk__13302_13310;
var G__13319 = count__13303_13311;
var G__13320 = (i__13304_13312 + (1));
seq__13301_13309 = G__13317;
chunk__13302_13310 = G__13318;
count__13303_13311 = G__13319;
i__13304_13312 = G__13320;
continue;
} else {
var temp__5457__auto___13321 = cljs.core.seq.call(null,seq__13301_13309);
if(temp__5457__auto___13321){
var seq__13301_13322__$1 = temp__5457__auto___13321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13301_13322__$1)){
var c__9605__auto___13323 = cljs.core.chunk_first.call(null,seq__13301_13322__$1);
var G__13324 = cljs.core.chunk_rest.call(null,seq__13301_13322__$1);
var G__13325 = c__9605__auto___13323;
var G__13326 = cljs.core.count.call(null,c__9605__auto___13323);
var G__13327 = (0);
seq__13301_13309 = G__13324;
chunk__13302_13310 = G__13325;
count__13303_13311 = G__13326;
i__13304_13312 = G__13327;
continue;
} else {
var map__13307_13328 = cljs.core.first.call(null,seq__13301_13322__$1);
var map__13307_13329__$1 = ((((!((map__13307_13328 == null)))?((((map__13307_13328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13307_13328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13307_13328):map__13307_13328);
var binding_13330 = map__13307_13329__$1;
var init_13331 = cljs.core.get.call(null,map__13307_13329__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13330)," = ",init_13331,";");

var G__13332 = cljs.core.next.call(null,seq__13301_13322__$1);
var G__13333 = null;
var G__13334 = (0);
var G__13335 = (0);
seq__13301_13309 = G__13332;
chunk__13302_13310 = G__13333;
count__13303_13311 = G__13334;
i__13304_13312 = G__13335;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13338){
var map__13339 = p__13338;
var map__13339__$1 = ((((!((map__13339 == null)))?((((map__13339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13339):map__13339);
var expr = map__13339__$1;
var f = cljs.core.get.call(null,map__13339__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__13339__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8662__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8662__auto__){
var and__8662__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8662__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8662__auto____$1;
}
} else {
return and__8662__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8662__auto__ = protocol;
if(cljs.core.truth_(and__8662__auto__)){
var and__8662__auto____$1 = tag;
if(cljs.core.truth_(and__8662__auto____$1)){
var or__8674__auto__ = (function (){var and__8662__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8662__auto____$2){
var and__8662__auto____$3 = protocol;
if(cljs.core.truth_(and__8662__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8662__auto____$3;
}
} else {
return and__8662__auto____$2;
}
})();
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
var and__8662__auto____$2 = (function (){var or__8674__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8674__auto____$1){
return or__8674__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8662__auto____$2)){
var or__8674__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__8674__auto____$1){
return or__8674__auto____$1;
} else {
var and__8662__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__8662__auto____$3){
var and__8662__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__8662__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__8662__auto____$4;
}
} else {
return and__8662__auto____$3;
}
}
} else {
return and__8662__auto____$2;
}
}
} else {
return and__8662__auto____$1;
}
} else {
return and__8662__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8674__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8674__auto__){
return or__8674__auto__;
} else {
var or__8674__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8674__auto____$1)){
return or__8674__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__13341 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8662__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8662__auto__)){
return (arity > mfa);
} else {
return and__8662__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env){
return (function (p1__13336_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13336_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env){
return (function (p1__13337_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13337_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13339,map__13339__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13341,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13341,(1),null);
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_13344 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13344,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13345 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13345,args)),(((mfa_13345 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13345,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
var or__8674__auto____$1 = js_QMARK_;
if(or__8674__auto____$1){
return or__8674__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_13346 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_13346," ? ",f__$1,fprop_13346,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_13346," ? ",f__$1,fprop_13346,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13347){
var map__13348 = p__13347;
var map__13348__$1 = ((((!((map__13348 == null)))?((((map__13348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13348):map__13348);
var ctor = cljs.core.get.call(null,map__13348__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__13348__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13348__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13350){
var map__13351 = p__13350;
var map__13351__$1 = ((((!((map__13351 == null)))?((((map__13351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13351):map__13351);
var target = cljs.core.get.call(null,map__13351__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13351__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__13353 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__13353__$1 = ((((!((map__13353 == null)))?((((map__13353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13353):map__13353);
var options = cljs.core.get.call(null,map__13353__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__13353__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__13354 = options;
var map__13354__$1 = ((((!((map__13354 == null)))?((((map__13354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13354):map__13354);
var target = cljs.core.get.call(null,map__13354__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__13354__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__13355 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__13361 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__13361__$1 = ((((!((map__13361 == null)))?((((map__13361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13361):map__13361);
var node_libs = cljs.core.get.call(null,map__13361__$1,true);
var libs_to_load = cljs.core.get.call(null,map__13361__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__13355,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__13355,(1),null);
var map__13358 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__13358__$1 = ((((!((map__13358 == null)))?((((map__13358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13358):map__13358);
var global_exports_libs = cljs.core.get.call(null,map__13358__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__13358__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__13364_13380 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__13365_13381 = null;
var count__13366_13382 = (0);
var i__13367_13383 = (0);
while(true){
if((i__13367_13383 < count__13366_13382)){
var lib_13384 = cljs.core._nth.call(null,chunk__13365_13381,i__13367_13383);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13384)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13384),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13384),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13384),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13384),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13384),"');");

}
}
}

var G__13385 = seq__13364_13380;
var G__13386 = chunk__13365_13381;
var G__13387 = count__13366_13382;
var G__13388 = (i__13367_13383 + (1));
seq__13364_13380 = G__13385;
chunk__13365_13381 = G__13386;
count__13366_13382 = G__13387;
i__13367_13383 = G__13388;
continue;
} else {
var temp__5457__auto___13389 = cljs.core.seq.call(null,seq__13364_13380);
if(temp__5457__auto___13389){
var seq__13364_13390__$1 = temp__5457__auto___13389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13364_13390__$1)){
var c__9605__auto___13391 = cljs.core.chunk_first.call(null,seq__13364_13390__$1);
var G__13392 = cljs.core.chunk_rest.call(null,seq__13364_13390__$1);
var G__13393 = c__9605__auto___13391;
var G__13394 = cljs.core.count.call(null,c__9605__auto___13391);
var G__13395 = (0);
seq__13364_13380 = G__13392;
chunk__13365_13381 = G__13393;
count__13366_13382 = G__13394;
i__13367_13383 = G__13395;
continue;
} else {
var lib_13396 = cljs.core.first.call(null,seq__13364_13390__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13396)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13396),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13396),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13396),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13396),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13396),"');");

}
}
}

var G__13397 = cljs.core.next.call(null,seq__13364_13390__$1);
var G__13398 = null;
var G__13399 = (0);
var G__13400 = (0);
seq__13364_13380 = G__13397;
chunk__13365_13381 = G__13398;
count__13366_13382 = G__13399;
i__13367_13383 = G__13400;
continue;
}
} else {
}
}
break;
}

var seq__13368_13401 = cljs.core.seq.call(null,node_libs);
var chunk__13369_13402 = null;
var count__13370_13403 = (0);
var i__13371_13404 = (0);
while(true){
if((i__13371_13404 < count__13370_13403)){
var lib_13405 = cljs.core._nth.call(null,chunk__13369_13402,i__13371_13404);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13405)," = require('",lib_13405,"');");

var G__13406 = seq__13368_13401;
var G__13407 = chunk__13369_13402;
var G__13408 = count__13370_13403;
var G__13409 = (i__13371_13404 + (1));
seq__13368_13401 = G__13406;
chunk__13369_13402 = G__13407;
count__13370_13403 = G__13408;
i__13371_13404 = G__13409;
continue;
} else {
var temp__5457__auto___13410 = cljs.core.seq.call(null,seq__13368_13401);
if(temp__5457__auto___13410){
var seq__13368_13411__$1 = temp__5457__auto___13410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13368_13411__$1)){
var c__9605__auto___13412 = cljs.core.chunk_first.call(null,seq__13368_13411__$1);
var G__13413 = cljs.core.chunk_rest.call(null,seq__13368_13411__$1);
var G__13414 = c__9605__auto___13412;
var G__13415 = cljs.core.count.call(null,c__9605__auto___13412);
var G__13416 = (0);
seq__13368_13401 = G__13413;
chunk__13369_13402 = G__13414;
count__13370_13403 = G__13415;
i__13371_13404 = G__13416;
continue;
} else {
var lib_13417 = cljs.core.first.call(null,seq__13368_13411__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13417)," = require('",lib_13417,"');");

var G__13418 = cljs.core.next.call(null,seq__13368_13411__$1);
var G__13419 = null;
var G__13420 = (0);
var G__13421 = (0);
seq__13368_13401 = G__13418;
chunk__13369_13402 = G__13419;
count__13370_13403 = G__13420;
i__13371_13404 = G__13421;
continue;
}
} else {
}
}
break;
}

var seq__13372_13422 = cljs.core.seq.call(null,global_exports_libs);
var chunk__13373_13423 = null;
var count__13374_13424 = (0);
var i__13375_13425 = (0);
while(true){
if((i__13375_13425 < count__13374_13424)){
var lib_13426 = cljs.core._nth.call(null,chunk__13373_13423,i__13375_13425);
var map__13376_13427 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_13426));
var map__13376_13428__$1 = ((((!((map__13376_13427 == null)))?((((map__13376_13427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13376_13427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13376_13427):map__13376_13427);
var global_exports_13429 = cljs.core.get.call(null,map__13376_13428__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_13426)," = goog.global.",cljs.core.get.call(null,global_exports_13429,cljs.core.symbol.call(null,lib_13426)),";");

var G__13430 = seq__13372_13422;
var G__13431 = chunk__13373_13423;
var G__13432 = count__13374_13424;
var G__13433 = (i__13375_13425 + (1));
seq__13372_13422 = G__13430;
chunk__13373_13423 = G__13431;
count__13374_13424 = G__13432;
i__13375_13425 = G__13433;
continue;
} else {
var temp__5457__auto___13434 = cljs.core.seq.call(null,seq__13372_13422);
if(temp__5457__auto___13434){
var seq__13372_13435__$1 = temp__5457__auto___13434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13372_13435__$1)){
var c__9605__auto___13436 = cljs.core.chunk_first.call(null,seq__13372_13435__$1);
var G__13437 = cljs.core.chunk_rest.call(null,seq__13372_13435__$1);
var G__13438 = c__9605__auto___13436;
var G__13439 = cljs.core.count.call(null,c__9605__auto___13436);
var G__13440 = (0);
seq__13372_13422 = G__13437;
chunk__13373_13423 = G__13438;
count__13374_13424 = G__13439;
i__13375_13425 = G__13440;
continue;
} else {
var lib_13441 = cljs.core.first.call(null,seq__13372_13435__$1);
var map__13378_13442 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_13441));
var map__13378_13443__$1 = ((((!((map__13378_13442 == null)))?((((map__13378_13442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13378_13442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13378_13442):map__13378_13442);
var global_exports_13444 = cljs.core.get.call(null,map__13378_13443__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_13441)," = goog.global.",cljs.core.get.call(null,global_exports_13444,cljs.core.symbol.call(null,lib_13441)),";");

var G__13445 = cljs.core.next.call(null,seq__13372_13435__$1);
var G__13446 = null;
var G__13447 = (0);
var G__13448 = (0);
seq__13372_13422 = G__13445;
chunk__13373_13423 = G__13446;
count__13374_13424 = G__13447;
i__13375_13425 = G__13448;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13449){
var map__13450 = p__13449;
var map__13450__$1 = ((((!((map__13450 == null)))?((((map__13450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13450):map__13450);
var name = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13452){
var map__13453 = p__13452;
var map__13453__$1 = ((((!((map__13453 == null)))?((((map__13453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13453):map__13453);
var name = cljs.core.get.call(null,map__13453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13453__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13453__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13453__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13453__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13453__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__13455){
var map__13456 = p__13455;
var map__13456__$1 = ((((!((map__13456 == null)))?((((map__13456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13456):map__13456);
var t = cljs.core.get.call(null,map__13456__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13456__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13456__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13456__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13456__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13458_13476 = cljs.core.seq.call(null,protocols);
var chunk__13459_13477 = null;
var count__13460_13478 = (0);
var i__13461_13479 = (0);
while(true){
if((i__13461_13479 < count__13460_13478)){
var protocol_13480 = cljs.core._nth.call(null,chunk__13459_13477,i__13461_13479);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13480)].join('')),"}");

var G__13481 = seq__13458_13476;
var G__13482 = chunk__13459_13477;
var G__13483 = count__13460_13478;
var G__13484 = (i__13461_13479 + (1));
seq__13458_13476 = G__13481;
chunk__13459_13477 = G__13482;
count__13460_13478 = G__13483;
i__13461_13479 = G__13484;
continue;
} else {
var temp__5457__auto___13485 = cljs.core.seq.call(null,seq__13458_13476);
if(temp__5457__auto___13485){
var seq__13458_13486__$1 = temp__5457__auto___13485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13458_13486__$1)){
var c__9605__auto___13487 = cljs.core.chunk_first.call(null,seq__13458_13486__$1);
var G__13488 = cljs.core.chunk_rest.call(null,seq__13458_13486__$1);
var G__13489 = c__9605__auto___13487;
var G__13490 = cljs.core.count.call(null,c__9605__auto___13487);
var G__13491 = (0);
seq__13458_13476 = G__13488;
chunk__13459_13477 = G__13489;
count__13460_13478 = G__13490;
i__13461_13479 = G__13491;
continue;
} else {
var protocol_13492 = cljs.core.first.call(null,seq__13458_13486__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13492)].join('')),"}");

var G__13493 = cljs.core.next.call(null,seq__13458_13486__$1);
var G__13494 = null;
var G__13495 = (0);
var G__13496 = (0);
seq__13458_13476 = G__13493;
chunk__13459_13477 = G__13494;
count__13460_13478 = G__13495;
i__13461_13479 = G__13496;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13462_13497 = cljs.core.seq.call(null,fields__$1);
var chunk__13463_13498 = null;
var count__13464_13499 = (0);
var i__13465_13500 = (0);
while(true){
if((i__13465_13500 < count__13464_13499)){
var fld_13501 = cljs.core._nth.call(null,chunk__13463_13498,i__13465_13500);
cljs.compiler.emitln.call(null,"this.",fld_13501," = ",fld_13501,";");

var G__13502 = seq__13462_13497;
var G__13503 = chunk__13463_13498;
var G__13504 = count__13464_13499;
var G__13505 = (i__13465_13500 + (1));
seq__13462_13497 = G__13502;
chunk__13463_13498 = G__13503;
count__13464_13499 = G__13504;
i__13465_13500 = G__13505;
continue;
} else {
var temp__5457__auto___13506 = cljs.core.seq.call(null,seq__13462_13497);
if(temp__5457__auto___13506){
var seq__13462_13507__$1 = temp__5457__auto___13506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13462_13507__$1)){
var c__9605__auto___13508 = cljs.core.chunk_first.call(null,seq__13462_13507__$1);
var G__13509 = cljs.core.chunk_rest.call(null,seq__13462_13507__$1);
var G__13510 = c__9605__auto___13508;
var G__13511 = cljs.core.count.call(null,c__9605__auto___13508);
var G__13512 = (0);
seq__13462_13497 = G__13509;
chunk__13463_13498 = G__13510;
count__13464_13499 = G__13511;
i__13465_13500 = G__13512;
continue;
} else {
var fld_13513 = cljs.core.first.call(null,seq__13462_13507__$1);
cljs.compiler.emitln.call(null,"this.",fld_13513," = ",fld_13513,";");

var G__13514 = cljs.core.next.call(null,seq__13462_13507__$1);
var G__13515 = null;
var G__13516 = (0);
var G__13517 = (0);
seq__13462_13497 = G__13514;
chunk__13463_13498 = G__13515;
count__13464_13499 = G__13516;
i__13465_13500 = G__13517;
continue;
}
} else {
}
}
break;
}

var seq__13466_13518 = cljs.core.seq.call(null,pmasks);
var chunk__13467_13519 = null;
var count__13468_13520 = (0);
var i__13469_13521 = (0);
while(true){
if((i__13469_13521 < count__13468_13520)){
var vec__13470_13522 = cljs.core._nth.call(null,chunk__13467_13519,i__13469_13521);
var pno_13523 = cljs.core.nth.call(null,vec__13470_13522,(0),null);
var pmask_13524 = cljs.core.nth.call(null,vec__13470_13522,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13523,"$ = ",pmask_13524,";");

var G__13525 = seq__13466_13518;
var G__13526 = chunk__13467_13519;
var G__13527 = count__13468_13520;
var G__13528 = (i__13469_13521 + (1));
seq__13466_13518 = G__13525;
chunk__13467_13519 = G__13526;
count__13468_13520 = G__13527;
i__13469_13521 = G__13528;
continue;
} else {
var temp__5457__auto___13529 = cljs.core.seq.call(null,seq__13466_13518);
if(temp__5457__auto___13529){
var seq__13466_13530__$1 = temp__5457__auto___13529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13466_13530__$1)){
var c__9605__auto___13531 = cljs.core.chunk_first.call(null,seq__13466_13530__$1);
var G__13532 = cljs.core.chunk_rest.call(null,seq__13466_13530__$1);
var G__13533 = c__9605__auto___13531;
var G__13534 = cljs.core.count.call(null,c__9605__auto___13531);
var G__13535 = (0);
seq__13466_13518 = G__13532;
chunk__13467_13519 = G__13533;
count__13468_13520 = G__13534;
i__13469_13521 = G__13535;
continue;
} else {
var vec__13473_13536 = cljs.core.first.call(null,seq__13466_13530__$1);
var pno_13537 = cljs.core.nth.call(null,vec__13473_13536,(0),null);
var pmask_13538 = cljs.core.nth.call(null,vec__13473_13536,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13537,"$ = ",pmask_13538,";");

var G__13539 = cljs.core.next.call(null,seq__13466_13530__$1);
var G__13540 = null;
var G__13541 = (0);
var G__13542 = (0);
seq__13466_13518 = G__13539;
chunk__13467_13519 = G__13540;
count__13468_13520 = G__13541;
i__13469_13521 = G__13542;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__13543){
var map__13544 = p__13543;
var map__13544__$1 = ((((!((map__13544 == null)))?((((map__13544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13544):map__13544);
var t = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13544__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13546_13564 = cljs.core.seq.call(null,protocols);
var chunk__13547_13565 = null;
var count__13548_13566 = (0);
var i__13549_13567 = (0);
while(true){
if((i__13549_13567 < count__13548_13566)){
var protocol_13568 = cljs.core._nth.call(null,chunk__13547_13565,i__13549_13567);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13568)].join('')),"}");

var G__13569 = seq__13546_13564;
var G__13570 = chunk__13547_13565;
var G__13571 = count__13548_13566;
var G__13572 = (i__13549_13567 + (1));
seq__13546_13564 = G__13569;
chunk__13547_13565 = G__13570;
count__13548_13566 = G__13571;
i__13549_13567 = G__13572;
continue;
} else {
var temp__5457__auto___13573 = cljs.core.seq.call(null,seq__13546_13564);
if(temp__5457__auto___13573){
var seq__13546_13574__$1 = temp__5457__auto___13573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13546_13574__$1)){
var c__9605__auto___13575 = cljs.core.chunk_first.call(null,seq__13546_13574__$1);
var G__13576 = cljs.core.chunk_rest.call(null,seq__13546_13574__$1);
var G__13577 = c__9605__auto___13575;
var G__13578 = cljs.core.count.call(null,c__9605__auto___13575);
var G__13579 = (0);
seq__13546_13564 = G__13576;
chunk__13547_13565 = G__13577;
count__13548_13566 = G__13578;
i__13549_13567 = G__13579;
continue;
} else {
var protocol_13580 = cljs.core.first.call(null,seq__13546_13574__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13580)].join('')),"}");

var G__13581 = cljs.core.next.call(null,seq__13546_13574__$1);
var G__13582 = null;
var G__13583 = (0);
var G__13584 = (0);
seq__13546_13564 = G__13581;
chunk__13547_13565 = G__13582;
count__13548_13566 = G__13583;
i__13549_13567 = G__13584;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13550_13585 = cljs.core.seq.call(null,fields__$1);
var chunk__13551_13586 = null;
var count__13552_13587 = (0);
var i__13553_13588 = (0);
while(true){
if((i__13553_13588 < count__13552_13587)){
var fld_13589 = cljs.core._nth.call(null,chunk__13551_13586,i__13553_13588);
cljs.compiler.emitln.call(null,"this.",fld_13589," = ",fld_13589,";");

var G__13590 = seq__13550_13585;
var G__13591 = chunk__13551_13586;
var G__13592 = count__13552_13587;
var G__13593 = (i__13553_13588 + (1));
seq__13550_13585 = G__13590;
chunk__13551_13586 = G__13591;
count__13552_13587 = G__13592;
i__13553_13588 = G__13593;
continue;
} else {
var temp__5457__auto___13594 = cljs.core.seq.call(null,seq__13550_13585);
if(temp__5457__auto___13594){
var seq__13550_13595__$1 = temp__5457__auto___13594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13550_13595__$1)){
var c__9605__auto___13596 = cljs.core.chunk_first.call(null,seq__13550_13595__$1);
var G__13597 = cljs.core.chunk_rest.call(null,seq__13550_13595__$1);
var G__13598 = c__9605__auto___13596;
var G__13599 = cljs.core.count.call(null,c__9605__auto___13596);
var G__13600 = (0);
seq__13550_13585 = G__13597;
chunk__13551_13586 = G__13598;
count__13552_13587 = G__13599;
i__13553_13588 = G__13600;
continue;
} else {
var fld_13601 = cljs.core.first.call(null,seq__13550_13595__$1);
cljs.compiler.emitln.call(null,"this.",fld_13601," = ",fld_13601,";");

var G__13602 = cljs.core.next.call(null,seq__13550_13595__$1);
var G__13603 = null;
var G__13604 = (0);
var G__13605 = (0);
seq__13550_13585 = G__13602;
chunk__13551_13586 = G__13603;
count__13552_13587 = G__13604;
i__13553_13588 = G__13605;
continue;
}
} else {
}
}
break;
}

var seq__13554_13606 = cljs.core.seq.call(null,pmasks);
var chunk__13555_13607 = null;
var count__13556_13608 = (0);
var i__13557_13609 = (0);
while(true){
if((i__13557_13609 < count__13556_13608)){
var vec__13558_13610 = cljs.core._nth.call(null,chunk__13555_13607,i__13557_13609);
var pno_13611 = cljs.core.nth.call(null,vec__13558_13610,(0),null);
var pmask_13612 = cljs.core.nth.call(null,vec__13558_13610,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13611,"$ = ",pmask_13612,";");

var G__13613 = seq__13554_13606;
var G__13614 = chunk__13555_13607;
var G__13615 = count__13556_13608;
var G__13616 = (i__13557_13609 + (1));
seq__13554_13606 = G__13613;
chunk__13555_13607 = G__13614;
count__13556_13608 = G__13615;
i__13557_13609 = G__13616;
continue;
} else {
var temp__5457__auto___13617 = cljs.core.seq.call(null,seq__13554_13606);
if(temp__5457__auto___13617){
var seq__13554_13618__$1 = temp__5457__auto___13617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13554_13618__$1)){
var c__9605__auto___13619 = cljs.core.chunk_first.call(null,seq__13554_13618__$1);
var G__13620 = cljs.core.chunk_rest.call(null,seq__13554_13618__$1);
var G__13621 = c__9605__auto___13619;
var G__13622 = cljs.core.count.call(null,c__9605__auto___13619);
var G__13623 = (0);
seq__13554_13606 = G__13620;
chunk__13555_13607 = G__13621;
count__13556_13608 = G__13622;
i__13557_13609 = G__13623;
continue;
} else {
var vec__13561_13624 = cljs.core.first.call(null,seq__13554_13618__$1);
var pno_13625 = cljs.core.nth.call(null,vec__13561_13624,(0),null);
var pmask_13626 = cljs.core.nth.call(null,vec__13561_13624,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13625,"$ = ",pmask_13626,";");

var G__13627 = cljs.core.next.call(null,seq__13554_13618__$1);
var G__13628 = null;
var G__13629 = (0);
var G__13630 = (0);
seq__13554_13606 = G__13627;
chunk__13555_13607 = G__13628;
count__13556_13608 = G__13629;
i__13557_13609 = G__13630;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__13631){
var map__13632 = p__13631;
var map__13632__$1 = ((((!((map__13632 == null)))?((((map__13632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13632):map__13632);
var target = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13634){
var map__13635 = p__13634;
var map__13635__$1 = ((((!((map__13635 == null)))?((((map__13635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13635):map__13635);
var op = cljs.core.get.call(null,map__13635__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__13635__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__13635__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__13635__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__13635__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8662__auto__ = code;
if(cljs.core.truth_(and__8662__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8662__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12551__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12551__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__13640 = cljs.core.seq.call(null,table);
var chunk__13641 = null;
var count__13642 = (0);
var i__13643 = (0);
while(true){
if((i__13643 < count__13642)){
var vec__13644 = cljs.core._nth.call(null,chunk__13641,i__13643);
var sym = cljs.core.nth.call(null,vec__13644,(0),null);
var value = cljs.core.nth.call(null,vec__13644,(1),null);
var ns_13650 = cljs.core.namespace.call(null,sym);
var name_13651 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__13652 = seq__13640;
var G__13653 = chunk__13641;
var G__13654 = count__13642;
var G__13655 = (i__13643 + (1));
seq__13640 = G__13652;
chunk__13641 = G__13653;
count__13642 = G__13654;
i__13643 = G__13655;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13640);
if(temp__5457__auto__){
var seq__13640__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13640__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__13640__$1);
var G__13656 = cljs.core.chunk_rest.call(null,seq__13640__$1);
var G__13657 = c__9605__auto__;
var G__13658 = cljs.core.count.call(null,c__9605__auto__);
var G__13659 = (0);
seq__13640 = G__13656;
chunk__13641 = G__13657;
count__13642 = G__13658;
i__13643 = G__13659;
continue;
} else {
var vec__13647 = cljs.core.first.call(null,seq__13640__$1);
var sym = cljs.core.nth.call(null,vec__13647,(0),null);
var value = cljs.core.nth.call(null,vec__13647,(1),null);
var ns_13660 = cljs.core.namespace.call(null,sym);
var name_13661 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__13662 = cljs.core.next.call(null,seq__13640__$1);
var G__13663 = null;
var G__13664 = (0);
var G__13665 = (0);
seq__13640 = G__13662;
chunk__13641 = G__13663;
count__13642 = G__13664;
i__13643 = G__13665;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__13667 = arguments.length;
switch (G__13667) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_13672 = cljs.core.first.call(null,ks);
var vec__13668_13673 = cljs.core.conj.call(null,prefix,k_13672);
var top_13674 = cljs.core.nth.call(null,vec__13668_13673,(0),null);
var prefix_SINGLEQUOTE__13675 = vec__13668_13673;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_13672)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__13675) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_13674)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_13674)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13675)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_13674);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13675)),";");
}
} else {
}

var m_13676 = cljs.core.get.call(null,externs,k_13672);
if(cljs.core.empty_QMARK_.call(null,m_13676)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__13675,m_13676,top_level,known_externs);
}

var G__13677 = cljs.core.next.call(null,ks);
ks = G__13677;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
