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
var map__12995 = s;
var map__12995__$1 = ((((!((map__12995 == null)))?((((map__12995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12995):map__12995);
var name = cljs.core.get.call(null,map__12995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12995__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12998 = info;
var map__12999 = G__12998;
var map__12999__$1 = ((((!((map__12999 == null)))?((((map__12999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12999):map__12999);
var shadow = cljs.core.get.call(null,map__12999__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12998__$1 = G__12998;
while(true){
var d__$2 = d__$1;
var map__13001 = G__12998__$1;
var map__13001__$1 = ((((!((map__13001 == null)))?((((map__13001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13001):map__13001);
var shadow__$1 = cljs.core.get.call(null,map__13001__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__13003 = (d__$2 + (1));
var G__13004 = shadow__$1;
d__$1 = G__13003;
G__12998__$1 = G__13004;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13005){
var map__13006 = p__13005;
var map__13006__$1 = ((((!((map__13006 == null)))?((((map__13006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13006):map__13006);
var name_var = map__13006__$1;
var name = cljs.core.get.call(null,map__13006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__13006__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__13008 = info;
var map__13008__$1 = ((((!((map__13008 == null)))?((((map__13008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13008):map__13008);
var ns = cljs.core.get.call(null,map__13008__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__13008__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__13011 = arguments.length;
switch (G__13011) {
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
var G__13013 = cp;
switch (G__13013) {
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
var seq__13015_13019 = cljs.core.seq.call(null,s);
var chunk__13016_13020 = null;
var count__13017_13021 = (0);
var i__13018_13022 = (0);
while(true){
if((i__13018_13022 < count__13017_13021)){
var c_13023 = cljs.core._nth.call(null,chunk__13016_13020,i__13018_13022);
sb.append(cljs.compiler.escape_char.call(null,c_13023));

var G__13024 = seq__13015_13019;
var G__13025 = chunk__13016_13020;
var G__13026 = count__13017_13021;
var G__13027 = (i__13018_13022 + (1));
seq__13015_13019 = G__13024;
chunk__13016_13020 = G__13025;
count__13017_13021 = G__13026;
i__13018_13022 = G__13027;
continue;
} else {
var temp__5457__auto___13028 = cljs.core.seq.call(null,seq__13015_13019);
if(temp__5457__auto___13028){
var seq__13015_13029__$1 = temp__5457__auto___13028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13015_13029__$1)){
var c__9605__auto___13030 = cljs.core.chunk_first.call(null,seq__13015_13029__$1);
var G__13031 = cljs.core.chunk_rest.call(null,seq__13015_13029__$1);
var G__13032 = c__9605__auto___13030;
var G__13033 = cljs.core.count.call(null,c__9605__auto___13030);
var G__13034 = (0);
seq__13015_13019 = G__13031;
chunk__13016_13020 = G__13032;
count__13017_13021 = G__13033;
i__13018_13022 = G__13034;
continue;
} else {
var c_13035 = cljs.core.first.call(null,seq__13015_13029__$1);
sb.append(cljs.compiler.escape_char.call(null,c_13035));

var G__13036 = cljs.core.next.call(null,seq__13015_13029__$1);
var G__13037 = null;
var G__13038 = (0);
var G__13039 = (0);
seq__13015_13019 = G__13036;
chunk__13016_13020 = G__13037;
count__13017_13021 = G__13038;
i__13018_13022 = G__13039;
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
var val__11392__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__11392__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13040_13045 = ast;
var map__13040_13046__$1 = ((((!((map__13040_13045 == null)))?((((map__13040_13045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13040_13045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13040_13045):map__13040_13045);
var env_13047 = cljs.core.get.call(null,map__13040_13046__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_13047))){
var map__13042_13048 = env_13047;
var map__13042_13049__$1 = ((((!((map__13042_13048 == null)))?((((map__13042_13048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13042_13048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13042_13048):map__13042_13048);
var line_13050 = cljs.core.get.call(null,map__13042_13049__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13051 = cljs.core.get.call(null,map__13042_13049__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__13042_13048,map__13042_13049__$1,line_13050,column_13051,map__13040_13045,map__13040_13046__$1,env_13047,val__11392__auto__){
return (function (m){
var minfo = (function (){var G__13044 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__13044,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__13044;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_13050 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__13042_13048,map__13042_13049__$1,line_13050,column_13051,map__13040_13045,map__13040_13046__$1,env_13047,val__11392__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13051)?(column_13051 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__13042_13048,map__13042_13049__$1,line_13050,column_13051,map__13040_13045,map__13040_13046__$1,env_13047,val__11392__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__13042_13048,map__13042_13049__$1,line_13050,column_13051,map__13040_13045,map__13040_13046__$1,env_13047,val__11392__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__13042_13048,map__13042_13049__$1,line_13050,column_13051,map__13040_13045,map__13040_13046__$1,env_13047,val__11392__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__13042_13048,map__13042_13049__$1,line_13050,column_13051,map__13040_13045,map__13040_13046__$1,env_13047,val__11392__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__11392__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13058 = arguments.length;
var i__9954__auto___13059 = (0);
while(true){
if((i__9954__auto___13059 < len__9953__auto___13058)){
args__9960__auto__.push((arguments[i__9954__auto___13059]));

var G__13060 = (i__9954__auto___13059 + (1));
i__9954__auto___13059 = G__13060;
continue;
} else {
}
break;
}

var argseq__9961__auto__ = ((((0) < args__9960__auto__.length))?(new cljs.core.IndexedSeq(args__9960__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9961__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__13054_13061 = cljs.core.seq.call(null,xs);
var chunk__13055_13062 = null;
var count__13056_13063 = (0);
var i__13057_13064 = (0);
while(true){
if((i__13057_13064 < count__13056_13063)){
var x_13065 = cljs.core._nth.call(null,chunk__13055_13062,i__13057_13064);
if((x_13065 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13065)){
cljs.compiler.emit.call(null,x_13065);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13065)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13065);
} else {
if(goog.isFunction(x_13065)){
x_13065.call(null);
} else {
var s_13066 = cljs.core.print_str.call(null,x_13065);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13054_13061,chunk__13055_13062,count__13056_13063,i__13057_13064,s_13066,x_13065){
return (function (p1__13052_SHARP_){
return (p1__13052_SHARP_ + cljs.core.count.call(null,s_13066));
});})(seq__13054_13061,chunk__13055_13062,count__13056_13063,i__13057_13064,s_13066,x_13065))
);
}

cljs.core.print.call(null,s_13066);

}
}
}
}

var G__13067 = seq__13054_13061;
var G__13068 = chunk__13055_13062;
var G__13069 = count__13056_13063;
var G__13070 = (i__13057_13064 + (1));
seq__13054_13061 = G__13067;
chunk__13055_13062 = G__13068;
count__13056_13063 = G__13069;
i__13057_13064 = G__13070;
continue;
} else {
var temp__5457__auto___13071 = cljs.core.seq.call(null,seq__13054_13061);
if(temp__5457__auto___13071){
var seq__13054_13072__$1 = temp__5457__auto___13071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13054_13072__$1)){
var c__9605__auto___13073 = cljs.core.chunk_first.call(null,seq__13054_13072__$1);
var G__13074 = cljs.core.chunk_rest.call(null,seq__13054_13072__$1);
var G__13075 = c__9605__auto___13073;
var G__13076 = cljs.core.count.call(null,c__9605__auto___13073);
var G__13077 = (0);
seq__13054_13061 = G__13074;
chunk__13055_13062 = G__13075;
count__13056_13063 = G__13076;
i__13057_13064 = G__13077;
continue;
} else {
var x_13078 = cljs.core.first.call(null,seq__13054_13072__$1);
if((x_13078 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_13078)){
cljs.compiler.emit.call(null,x_13078);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_13078)){
cljs.core.apply.call(null,cljs.compiler.emits,x_13078);
} else {
if(goog.isFunction(x_13078)){
x_13078.call(null);
} else {
var s_13079 = cljs.core.print_str.call(null,x_13078);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__13054_13061,chunk__13055_13062,count__13056_13063,i__13057_13064,s_13079,x_13078,seq__13054_13072__$1,temp__5457__auto___13071){
return (function (p1__13052_SHARP_){
return (p1__13052_SHARP_ + cljs.core.count.call(null,s_13079));
});})(seq__13054_13061,chunk__13055_13062,count__13056_13063,i__13057_13064,s_13079,x_13078,seq__13054_13072__$1,temp__5457__auto___13071))
);
}

cljs.core.print.call(null,s_13079);

}
}
}
}

var G__13080 = cljs.core.next.call(null,seq__13054_13072__$1);
var G__13081 = null;
var G__13082 = (0);
var G__13083 = (0);
seq__13054_13061 = G__13080;
chunk__13055_13062 = G__13081;
count__13056_13063 = G__13082;
i__13057_13064 = G__13083;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq13053){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13053));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9960__auto__ = [];
var len__9953__auto___13089 = arguments.length;
var i__9954__auto___13090 = (0);
while(true){
if((i__9954__auto___13090 < len__9953__auto___13089)){
args__9960__auto__.push((arguments[i__9954__auto___13090]));

var G__13091 = (i__9954__auto___13090 + (1));
i__9954__auto___13090 = G__13091;
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

var _STAR_flush_on_newline_STAR_13085_13092 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_13085_13092;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__13086){
var map__13087 = p__13086;
var map__13087__$1 = ((((!((map__13087 == null)))?((((map__13087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13087):map__13087);
var m = map__13087__$1;
var gen_line = cljs.core.get.call(null,map__13087__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13084){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13084));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9801__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13093_13095 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13094_13096 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13093_13095,_STAR_print_fn_STAR_13094_13096,sb__9801__auto__){
return (function (x__9802__auto__){
return sb__9801__auto__.append(x__9802__auto__);
});})(_STAR_print_newline_STAR_13093_13095,_STAR_print_fn_STAR_13094_13096,sb__9801__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13094_13096;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13093_13095;
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
var vec__13097 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__13097,(0),null);
var flags = cljs.core.nth.call(null,vec__13097,(1),null);
var pattern = cljs.core.nth.call(null,vec__13097,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__13101){
var map__13102 = p__13101;
var map__13102__$1 = ((((!((map__13102 == null)))?((((map__13102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13102):map__13102);
var ast = map__13102__$1;
var info = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__13104 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__13104__$1 = ((((!((map__13104 == null)))?((((map__13104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13104):map__13104);
var cenv = map__13104__$1;
var options = cljs.core.get.call(null,map__13104__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__13106 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8662__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__8662__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__8662__auto__;
}
})())){
return clojure.set.difference.call(null,G__13106,cljs.analyzer.es5_allowed);
} else {
return G__13106;
}
})();
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__13107 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__13107,reserved);
} else {
return G__13107;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__13108){
var map__13109 = p__13108;
var map__13109__$1 = ((((!((map__13109 == null)))?((((map__13109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13109):map__13109);
var arg = map__13109__$1;
var env = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__13111 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__13111__$1 = ((((!((map__13111 == null)))?((((map__13111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13111):map__13111);
var name = cljs.core.get.call(null,map__13111__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__13113){
var map__13114 = p__13113;
var map__13114__$1 = ((((!((map__13114 == null)))?((((map__13114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13114):map__13114);
var expr = cljs.core.get.call(null,map__13114__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__13114__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__13114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__13116_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13116_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__13117){
var map__13118 = p__13117;
var map__13118__$1 = ((((!((map__13118 == null)))?((((map__13118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13118):map__13118);
var env = cljs.core.get.call(null,map__13118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__13118__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__13118__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__13120){
var map__13121 = p__13120;
var map__13121__$1 = ((((!((map__13121 == null)))?((((map__13121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13121):map__13121);
var items = cljs.core.get.call(null,map__13121__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13121__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__13123){
var map__13124 = p__13123;
var map__13124__$1 = ((((!((map__13124 == null)))?((((map__13124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13124):map__13124);
var items = cljs.core.get.call(null,map__13124__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_13126 = cljs.core.count.call(null,items);
if((cnt_13126 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_13126,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__13127_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13127_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__13128){
var map__13129 = p__13128;
var map__13129__$1 = ((((!((map__13129 == null)))?((((map__13129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13129):map__13129);
var items = cljs.core.get.call(null,map__13129__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__13129__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__13131){
var map__13132 = p__13131;
var map__13132__$1 = ((((!((map__13132 == null)))?((((map__13132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13132):map__13132);
var items = cljs.core.get.call(null,map__13132__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__13132__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__13132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___13150 = cljs.core.seq.call(null,items);
if(temp__5457__auto___13150){
var items_13151__$1 = temp__5457__auto___13150;
var vec__13134_13152 = items_13151__$1;
var seq__13135_13153 = cljs.core.seq.call(null,vec__13134_13152);
var first__13136_13154 = cljs.core.first.call(null,seq__13135_13153);
var seq__13135_13155__$1 = cljs.core.next.call(null,seq__13135_13153);
var vec__13137_13156 = first__13136_13154;
var k_13157 = cljs.core.nth.call(null,vec__13137_13156,(0),null);
var v_13158 = cljs.core.nth.call(null,vec__13137_13156,(1),null);
var r_13159 = seq__13135_13155__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_13157),"\": ",v_13158);

var seq__13140_13160 = cljs.core.seq.call(null,r_13159);
var chunk__13141_13161 = null;
var count__13142_13162 = (0);
var i__13143_13163 = (0);
while(true){
if((i__13143_13163 < count__13142_13162)){
var vec__13144_13164 = cljs.core._nth.call(null,chunk__13141_13161,i__13143_13163);
var k_13165__$1 = cljs.core.nth.call(null,vec__13144_13164,(0),null);
var v_13166__$1 = cljs.core.nth.call(null,vec__13144_13164,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13165__$1),"\": ",v_13166__$1);

var G__13167 = seq__13140_13160;
var G__13168 = chunk__13141_13161;
var G__13169 = count__13142_13162;
var G__13170 = (i__13143_13163 + (1));
seq__13140_13160 = G__13167;
chunk__13141_13161 = G__13168;
count__13142_13162 = G__13169;
i__13143_13163 = G__13170;
continue;
} else {
var temp__5457__auto___13171__$1 = cljs.core.seq.call(null,seq__13140_13160);
if(temp__5457__auto___13171__$1){
var seq__13140_13172__$1 = temp__5457__auto___13171__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13140_13172__$1)){
var c__9605__auto___13173 = cljs.core.chunk_first.call(null,seq__13140_13172__$1);
var G__13174 = cljs.core.chunk_rest.call(null,seq__13140_13172__$1);
var G__13175 = c__9605__auto___13173;
var G__13176 = cljs.core.count.call(null,c__9605__auto___13173);
var G__13177 = (0);
seq__13140_13160 = G__13174;
chunk__13141_13161 = G__13175;
count__13142_13162 = G__13176;
i__13143_13163 = G__13177;
continue;
} else {
var vec__13147_13178 = cljs.core.first.call(null,seq__13140_13172__$1);
var k_13179__$1 = cljs.core.nth.call(null,vec__13147_13178,(0),null);
var v_13180__$1 = cljs.core.nth.call(null,vec__13147_13178,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_13179__$1),"\": ",v_13180__$1);

var G__13181 = cljs.core.next.call(null,seq__13140_13172__$1);
var G__13182 = null;
var G__13183 = (0);
var G__13184 = (0);
seq__13140_13160 = G__13181;
chunk__13141_13161 = G__13182;
count__13142_13162 = G__13183;
i__13143_13163 = G__13184;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__13185){
var map__13186 = p__13185;
var map__13186__$1 = ((((!((map__13186 == null)))?((((map__13186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13186):map__13186);
var items = cljs.core.get.call(null,map__13186__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__13186__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__13186__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13186__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__13188){
var map__13189 = p__13188;
var map__13189__$1 = ((((!((map__13189 == null)))?((((map__13189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13189):map__13189);
var form = cljs.core.get.call(null,map__13189__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__13189__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__13191){
var map__13192 = p__13191;
var map__13192__$1 = ((((!((map__13192 == null)))?((((map__13192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13192):map__13192);
var op = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__13194){
var map__13195 = p__13194;
var map__13195__$1 = ((((!((map__13195 == null)))?((((map__13195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13195):map__13195);
var op = cljs.core.get.call(null,map__13195__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__13195__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__13195__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__13197){
var map__13198 = p__13197;
var map__13198__$1 = ((((!((map__13198 == null)))?((((map__13198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13198):map__13198);
var test = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__13198__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__13200){
var map__13201 = p__13200;
var map__13201__$1 = ((((!((map__13201 == null)))?((((map__13201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13201):map__13201);
var v = cljs.core.get.call(null,map__13201__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__13201__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__13201__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__13201__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__13201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__13203_13221 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__13204_13222 = null;
var count__13205_13223 = (0);
var i__13206_13224 = (0);
while(true){
if((i__13206_13224 < count__13205_13223)){
var vec__13207_13225 = cljs.core._nth.call(null,chunk__13204_13222,i__13206_13224);
var ts_13226 = cljs.core.nth.call(null,vec__13207_13225,(0),null);
var then_13227 = cljs.core.nth.call(null,vec__13207_13225,(1),null);
var seq__13210_13228 = cljs.core.seq.call(null,ts_13226);
var chunk__13211_13229 = null;
var count__13212_13230 = (0);
var i__13213_13231 = (0);
while(true){
if((i__13213_13231 < count__13212_13230)){
var test_13232 = cljs.core._nth.call(null,chunk__13211_13229,i__13213_13231);
cljs.compiler.emitln.call(null,"case ",test_13232,":");

var G__13233 = seq__13210_13228;
var G__13234 = chunk__13211_13229;
var G__13235 = count__13212_13230;
var G__13236 = (i__13213_13231 + (1));
seq__13210_13228 = G__13233;
chunk__13211_13229 = G__13234;
count__13212_13230 = G__13235;
i__13213_13231 = G__13236;
continue;
} else {
var temp__5457__auto___13237 = cljs.core.seq.call(null,seq__13210_13228);
if(temp__5457__auto___13237){
var seq__13210_13238__$1 = temp__5457__auto___13237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13210_13238__$1)){
var c__9605__auto___13239 = cljs.core.chunk_first.call(null,seq__13210_13238__$1);
var G__13240 = cljs.core.chunk_rest.call(null,seq__13210_13238__$1);
var G__13241 = c__9605__auto___13239;
var G__13242 = cljs.core.count.call(null,c__9605__auto___13239);
var G__13243 = (0);
seq__13210_13228 = G__13240;
chunk__13211_13229 = G__13241;
count__13212_13230 = G__13242;
i__13213_13231 = G__13243;
continue;
} else {
var test_13244 = cljs.core.first.call(null,seq__13210_13238__$1);
cljs.compiler.emitln.call(null,"case ",test_13244,":");

var G__13245 = cljs.core.next.call(null,seq__13210_13238__$1);
var G__13246 = null;
var G__13247 = (0);
var G__13248 = (0);
seq__13210_13228 = G__13245;
chunk__13211_13229 = G__13246;
count__13212_13230 = G__13247;
i__13213_13231 = G__13248;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13227);
} else {
cljs.compiler.emitln.call(null,then_13227);
}

cljs.compiler.emitln.call(null,"break;");

var G__13249 = seq__13203_13221;
var G__13250 = chunk__13204_13222;
var G__13251 = count__13205_13223;
var G__13252 = (i__13206_13224 + (1));
seq__13203_13221 = G__13249;
chunk__13204_13222 = G__13250;
count__13205_13223 = G__13251;
i__13206_13224 = G__13252;
continue;
} else {
var temp__5457__auto___13253 = cljs.core.seq.call(null,seq__13203_13221);
if(temp__5457__auto___13253){
var seq__13203_13254__$1 = temp__5457__auto___13253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13203_13254__$1)){
var c__9605__auto___13255 = cljs.core.chunk_first.call(null,seq__13203_13254__$1);
var G__13256 = cljs.core.chunk_rest.call(null,seq__13203_13254__$1);
var G__13257 = c__9605__auto___13255;
var G__13258 = cljs.core.count.call(null,c__9605__auto___13255);
var G__13259 = (0);
seq__13203_13221 = G__13256;
chunk__13204_13222 = G__13257;
count__13205_13223 = G__13258;
i__13206_13224 = G__13259;
continue;
} else {
var vec__13214_13260 = cljs.core.first.call(null,seq__13203_13254__$1);
var ts_13261 = cljs.core.nth.call(null,vec__13214_13260,(0),null);
var then_13262 = cljs.core.nth.call(null,vec__13214_13260,(1),null);
var seq__13217_13263 = cljs.core.seq.call(null,ts_13261);
var chunk__13218_13264 = null;
var count__13219_13265 = (0);
var i__13220_13266 = (0);
while(true){
if((i__13220_13266 < count__13219_13265)){
var test_13267 = cljs.core._nth.call(null,chunk__13218_13264,i__13220_13266);
cljs.compiler.emitln.call(null,"case ",test_13267,":");

var G__13268 = seq__13217_13263;
var G__13269 = chunk__13218_13264;
var G__13270 = count__13219_13265;
var G__13271 = (i__13220_13266 + (1));
seq__13217_13263 = G__13268;
chunk__13218_13264 = G__13269;
count__13219_13265 = G__13270;
i__13220_13266 = G__13271;
continue;
} else {
var temp__5457__auto___13272__$1 = cljs.core.seq.call(null,seq__13217_13263);
if(temp__5457__auto___13272__$1){
var seq__13217_13273__$1 = temp__5457__auto___13272__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13217_13273__$1)){
var c__9605__auto___13274 = cljs.core.chunk_first.call(null,seq__13217_13273__$1);
var G__13275 = cljs.core.chunk_rest.call(null,seq__13217_13273__$1);
var G__13276 = c__9605__auto___13274;
var G__13277 = cljs.core.count.call(null,c__9605__auto___13274);
var G__13278 = (0);
seq__13217_13263 = G__13275;
chunk__13218_13264 = G__13276;
count__13219_13265 = G__13277;
i__13220_13266 = G__13278;
continue;
} else {
var test_13279 = cljs.core.first.call(null,seq__13217_13273__$1);
cljs.compiler.emitln.call(null,"case ",test_13279,":");

var G__13280 = cljs.core.next.call(null,seq__13217_13273__$1);
var G__13281 = null;
var G__13282 = (0);
var G__13283 = (0);
seq__13217_13263 = G__13280;
chunk__13218_13264 = G__13281;
count__13219_13265 = G__13282;
i__13220_13266 = G__13283;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_13262);
} else {
cljs.compiler.emitln.call(null,then_13262);
}

cljs.compiler.emitln.call(null,"break;");

var G__13284 = cljs.core.next.call(null,seq__13203_13254__$1);
var G__13285 = null;
var G__13286 = (0);
var G__13287 = (0);
seq__13203_13221 = G__13284;
chunk__13204_13222 = G__13285;
count__13205_13223 = G__13286;
i__13206_13224 = G__13287;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__13288){
var map__13289 = p__13288;
var map__13289__$1 = ((((!((map__13289 == null)))?((((map__13289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13289):map__13289);
var throw$ = cljs.core.get.call(null,map__13289__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__13289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__13292 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__13292,(0),null);
var rstr = cljs.core.nth.call(null,vec__13292,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__13292,fstr,rstr,ret_t,axstr){
return (function (p1__13291_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13291_SHARP_);
});})(idx,vec__13292,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__13295 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13295),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__13295;
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
return (function (p1__13296_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__13296_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__13297 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13298 = cljs.core.seq.call(null,vec__13297);
var first__13299 = cljs.core.first.call(null,seq__13298);
var seq__13298__$1 = cljs.core.next.call(null,seq__13298);
var p = first__13299;
var first__13299__$1 = cljs.core.first.call(null,seq__13298__$1);
var seq__13298__$2 = cljs.core.next.call(null,seq__13298__$1);
var ts = first__13299__$1;
var first__13299__$2 = cljs.core.first.call(null,seq__13298__$2);
var seq__13298__$3 = cljs.core.next.call(null,seq__13298__$2);
var n = first__13299__$2;
var xs = seq__13298__$3;
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
var vec__13300 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__13301 = cljs.core.seq.call(null,vec__13300);
var first__13302 = cljs.core.first.call(null,seq__13301);
var seq__13301__$1 = cljs.core.next.call(null,seq__13301);
var p = first__13302;
var first__13302__$1 = cljs.core.first.call(null,seq__13301__$1);
var seq__13301__$2 = cljs.core.next.call(null,seq__13301__$1);
var ts = first__13302__$1;
var xs = seq__13301__$2;
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
var G__13305 = arguments.length;
switch (G__13305) {
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
var vec__13313 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__13303_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__13303_SHARP_);
} else {
return p1__13303_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__13314 = cljs.core.seq.call(null,vec__13313);
var first__13315 = cljs.core.first.call(null,seq__13314);
var seq__13314__$1 = cljs.core.next.call(null,seq__13314);
var x = first__13315;
var ys = seq__13314__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__13316 = cljs.core.seq.call(null,ys);
var chunk__13317 = null;
var count__13318 = (0);
var i__13319 = (0);
while(true){
if((i__13319 < count__13318)){
var next_line = cljs.core._nth.call(null,chunk__13317,i__13319);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13325 = seq__13316;
var G__13326 = chunk__13317;
var G__13327 = count__13318;
var G__13328 = (i__13319 + (1));
seq__13316 = G__13325;
chunk__13317 = G__13326;
count__13318 = G__13327;
i__13319 = G__13328;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13316);
if(temp__5457__auto__){
var seq__13316__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13316__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__13316__$1);
var G__13329 = cljs.core.chunk_rest.call(null,seq__13316__$1);
var G__13330 = c__9605__auto__;
var G__13331 = cljs.core.count.call(null,c__9605__auto__);
var G__13332 = (0);
seq__13316 = G__13329;
chunk__13317 = G__13330;
count__13318 = G__13331;
i__13319 = G__13332;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__13316__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13333 = cljs.core.next.call(null,seq__13316__$1);
var G__13334 = null;
var G__13335 = (0);
var G__13336 = (0);
seq__13316 = G__13333;
chunk__13317 = G__13334;
count__13318 = G__13335;
i__13319 = G__13336;
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

var seq__13320_13337 = cljs.core.seq.call(null,docs__$2);
var chunk__13321_13338 = null;
var count__13322_13339 = (0);
var i__13323_13340 = (0);
while(true){
if((i__13323_13340 < count__13322_13339)){
var e_13341 = cljs.core._nth.call(null,chunk__13321_13338,i__13323_13340);
if(cljs.core.truth_(e_13341)){
print_comment_lines.call(null,e_13341);
} else {
}

var G__13342 = seq__13320_13337;
var G__13343 = chunk__13321_13338;
var G__13344 = count__13322_13339;
var G__13345 = (i__13323_13340 + (1));
seq__13320_13337 = G__13342;
chunk__13321_13338 = G__13343;
count__13322_13339 = G__13344;
i__13323_13340 = G__13345;
continue;
} else {
var temp__5457__auto___13346 = cljs.core.seq.call(null,seq__13320_13337);
if(temp__5457__auto___13346){
var seq__13320_13347__$1 = temp__5457__auto___13346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13320_13347__$1)){
var c__9605__auto___13348 = cljs.core.chunk_first.call(null,seq__13320_13347__$1);
var G__13349 = cljs.core.chunk_rest.call(null,seq__13320_13347__$1);
var G__13350 = c__9605__auto___13348;
var G__13351 = cljs.core.count.call(null,c__9605__auto___13348);
var G__13352 = (0);
seq__13320_13337 = G__13349;
chunk__13321_13338 = G__13350;
count__13322_13339 = G__13351;
i__13323_13340 = G__13352;
continue;
} else {
var e_13353 = cljs.core.first.call(null,seq__13320_13347__$1);
if(cljs.core.truth_(e_13353)){
print_comment_lines.call(null,e_13353);
} else {
}

var G__13354 = cljs.core.next.call(null,seq__13320_13347__$1);
var G__13355 = null;
var G__13356 = (0);
var G__13357 = (0);
seq__13320_13337 = G__13354;
chunk__13321_13338 = G__13355;
count__13322_13339 = G__13356;
i__13323_13340 = G__13357;
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
return (function (p1__13359_SHARP_){
return goog.string.startsWith(p1__13359_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__13360){
var map__13361 = p__13360;
var map__13361__$1 = ((((!((map__13361 == null)))?((((map__13361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13361):map__13361);
var name = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__13363){
var map__13364 = p__13363;
var map__13364__$1 = ((((!((map__13364 == null)))?((((map__13364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13364):map__13364);
var name = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__13364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__13366_13384 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__13367_13385 = null;
var count__13368_13386 = (0);
var i__13369_13387 = (0);
while(true){
if((i__13369_13387 < count__13368_13386)){
var vec__13370_13388 = cljs.core._nth.call(null,chunk__13367_13385,i__13369_13387);
var i_13389 = cljs.core.nth.call(null,vec__13370_13388,(0),null);
var param_13390 = cljs.core.nth.call(null,vec__13370_13388,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13390);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13391 = seq__13366_13384;
var G__13392 = chunk__13367_13385;
var G__13393 = count__13368_13386;
var G__13394 = (i__13369_13387 + (1));
seq__13366_13384 = G__13391;
chunk__13367_13385 = G__13392;
count__13368_13386 = G__13393;
i__13369_13387 = G__13394;
continue;
} else {
var temp__5457__auto___13395 = cljs.core.seq.call(null,seq__13366_13384);
if(temp__5457__auto___13395){
var seq__13366_13396__$1 = temp__5457__auto___13395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13366_13396__$1)){
var c__9605__auto___13397 = cljs.core.chunk_first.call(null,seq__13366_13396__$1);
var G__13398 = cljs.core.chunk_rest.call(null,seq__13366_13396__$1);
var G__13399 = c__9605__auto___13397;
var G__13400 = cljs.core.count.call(null,c__9605__auto___13397);
var G__13401 = (0);
seq__13366_13384 = G__13398;
chunk__13367_13385 = G__13399;
count__13368_13386 = G__13400;
i__13369_13387 = G__13401;
continue;
} else {
var vec__13373_13402 = cljs.core.first.call(null,seq__13366_13396__$1);
var i_13403 = cljs.core.nth.call(null,vec__13373_13402,(0),null);
var param_13404 = cljs.core.nth.call(null,vec__13373_13402,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13404);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13405 = cljs.core.next.call(null,seq__13366_13396__$1);
var G__13406 = null;
var G__13407 = (0);
var G__13408 = (0);
seq__13366_13384 = G__13405;
chunk__13367_13385 = G__13406;
count__13368_13386 = G__13407;
i__13369_13387 = G__13408;
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

var seq__13376_13409 = cljs.core.seq.call(null,params);
var chunk__13377_13410 = null;
var count__13378_13411 = (0);
var i__13379_13412 = (0);
while(true){
if((i__13379_13412 < count__13378_13411)){
var param_13413 = cljs.core._nth.call(null,chunk__13377_13410,i__13379_13412);
cljs.compiler.emit.call(null,param_13413);

if(cljs.core._EQ_.call(null,param_13413,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13414 = seq__13376_13409;
var G__13415 = chunk__13377_13410;
var G__13416 = count__13378_13411;
var G__13417 = (i__13379_13412 + (1));
seq__13376_13409 = G__13414;
chunk__13377_13410 = G__13415;
count__13378_13411 = G__13416;
i__13379_13412 = G__13417;
continue;
} else {
var temp__5457__auto___13418 = cljs.core.seq.call(null,seq__13376_13409);
if(temp__5457__auto___13418){
var seq__13376_13419__$1 = temp__5457__auto___13418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13376_13419__$1)){
var c__9605__auto___13420 = cljs.core.chunk_first.call(null,seq__13376_13419__$1);
var G__13421 = cljs.core.chunk_rest.call(null,seq__13376_13419__$1);
var G__13422 = c__9605__auto___13420;
var G__13423 = cljs.core.count.call(null,c__9605__auto___13420);
var G__13424 = (0);
seq__13376_13409 = G__13421;
chunk__13377_13410 = G__13422;
count__13378_13411 = G__13423;
i__13379_13412 = G__13424;
continue;
} else {
var param_13425 = cljs.core.first.call(null,seq__13376_13419__$1);
cljs.compiler.emit.call(null,param_13425);

if(cljs.core._EQ_.call(null,param_13425,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13426 = cljs.core.next.call(null,seq__13376_13419__$1);
var G__13427 = null;
var G__13428 = (0);
var G__13429 = (0);
seq__13376_13409 = G__13426;
chunk__13377_13410 = G__13427;
count__13378_13411 = G__13428;
i__13379_13412 = G__13429;
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

var seq__13380_13430 = cljs.core.seq.call(null,params);
var chunk__13381_13431 = null;
var count__13382_13432 = (0);
var i__13383_13433 = (0);
while(true){
if((i__13383_13433 < count__13382_13432)){
var param_13434 = cljs.core._nth.call(null,chunk__13381_13431,i__13383_13433);
cljs.compiler.emit.call(null,param_13434);

if(cljs.core._EQ_.call(null,param_13434,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13435 = seq__13380_13430;
var G__13436 = chunk__13381_13431;
var G__13437 = count__13382_13432;
var G__13438 = (i__13383_13433 + (1));
seq__13380_13430 = G__13435;
chunk__13381_13431 = G__13436;
count__13382_13432 = G__13437;
i__13383_13433 = G__13438;
continue;
} else {
var temp__5457__auto___13439 = cljs.core.seq.call(null,seq__13380_13430);
if(temp__5457__auto___13439){
var seq__13380_13440__$1 = temp__5457__auto___13439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13380_13440__$1)){
var c__9605__auto___13441 = cljs.core.chunk_first.call(null,seq__13380_13440__$1);
var G__13442 = cljs.core.chunk_rest.call(null,seq__13380_13440__$1);
var G__13443 = c__9605__auto___13441;
var G__13444 = cljs.core.count.call(null,c__9605__auto___13441);
var G__13445 = (0);
seq__13380_13430 = G__13442;
chunk__13381_13431 = G__13443;
count__13382_13432 = G__13444;
i__13383_13433 = G__13445;
continue;
} else {
var param_13446 = cljs.core.first.call(null,seq__13380_13440__$1);
cljs.compiler.emit.call(null,param_13446);

if(cljs.core._EQ_.call(null,param_13446,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13447 = cljs.core.next.call(null,seq__13380_13440__$1);
var G__13448 = null;
var G__13449 = (0);
var G__13450 = (0);
seq__13380_13430 = G__13447;
chunk__13381_13431 = G__13448;
count__13382_13432 = G__13449;
i__13383_13433 = G__13450;
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
var seq__13451 = cljs.core.seq.call(null,params);
var chunk__13452 = null;
var count__13453 = (0);
var i__13454 = (0);
while(true){
if((i__13454 < count__13453)){
var param = cljs.core._nth.call(null,chunk__13452,i__13454);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13455 = seq__13451;
var G__13456 = chunk__13452;
var G__13457 = count__13453;
var G__13458 = (i__13454 + (1));
seq__13451 = G__13455;
chunk__13452 = G__13456;
count__13453 = G__13457;
i__13454 = G__13458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13451);
if(temp__5457__auto__){
var seq__13451__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13451__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__13451__$1);
var G__13459 = cljs.core.chunk_rest.call(null,seq__13451__$1);
var G__13460 = c__9605__auto__;
var G__13461 = cljs.core.count.call(null,c__9605__auto__);
var G__13462 = (0);
seq__13451 = G__13459;
chunk__13452 = G__13460;
count__13453 = G__13461;
i__13454 = G__13462;
continue;
} else {
var param = cljs.core.first.call(null,seq__13451__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13463 = cljs.core.next.call(null,seq__13451__$1);
var G__13464 = null;
var G__13465 = (0);
var G__13466 = (0);
seq__13451 = G__13463;
chunk__13452 = G__13464;
count__13453 = G__13465;
i__13454 = G__13466;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13467){
var map__13468 = p__13467;
var map__13468__$1 = ((((!((map__13468 == null)))?((((map__13468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13468):map__13468);
var type = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13470){
var map__13471 = p__13470;
var map__13471__$1 = ((((!((map__13471 == null)))?((((map__13471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13471):map__13471);
var f = map__13471__$1;
var type = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13471__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13481__$1 = (function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13482 = cljs.compiler.munge.call(null,name_13481__$1);
var delegate_name_13483 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13482),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13483," = function (");

var seq__13473_13484 = cljs.core.seq.call(null,params);
var chunk__13474_13485 = null;
var count__13475_13486 = (0);
var i__13476_13487 = (0);
while(true){
if((i__13476_13487 < count__13475_13486)){
var param_13488 = cljs.core._nth.call(null,chunk__13474_13485,i__13476_13487);
cljs.compiler.emit.call(null,param_13488);

if(cljs.core._EQ_.call(null,param_13488,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13489 = seq__13473_13484;
var G__13490 = chunk__13474_13485;
var G__13491 = count__13475_13486;
var G__13492 = (i__13476_13487 + (1));
seq__13473_13484 = G__13489;
chunk__13474_13485 = G__13490;
count__13475_13486 = G__13491;
i__13476_13487 = G__13492;
continue;
} else {
var temp__5457__auto___13493 = cljs.core.seq.call(null,seq__13473_13484);
if(temp__5457__auto___13493){
var seq__13473_13494__$1 = temp__5457__auto___13493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13473_13494__$1)){
var c__9605__auto___13495 = cljs.core.chunk_first.call(null,seq__13473_13494__$1);
var G__13496 = cljs.core.chunk_rest.call(null,seq__13473_13494__$1);
var G__13497 = c__9605__auto___13495;
var G__13498 = cljs.core.count.call(null,c__9605__auto___13495);
var G__13499 = (0);
seq__13473_13484 = G__13496;
chunk__13474_13485 = G__13497;
count__13475_13486 = G__13498;
i__13476_13487 = G__13499;
continue;
} else {
var param_13500 = cljs.core.first.call(null,seq__13473_13494__$1);
cljs.compiler.emit.call(null,param_13500);

if(cljs.core._EQ_.call(null,param_13500,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13501 = cljs.core.next.call(null,seq__13473_13494__$1);
var G__13502 = null;
var G__13503 = (0);
var G__13504 = (0);
seq__13473_13484 = G__13501;
chunk__13474_13485 = G__13502;
count__13475_13486 = G__13503;
i__13476_13487 = G__13504;
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

cljs.compiler.emitln.call(null,"var ",mname_13482," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13505 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13505,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13483,".call(this,");

var seq__13477_13506 = cljs.core.seq.call(null,params);
var chunk__13478_13507 = null;
var count__13479_13508 = (0);
var i__13480_13509 = (0);
while(true){
if((i__13480_13509 < count__13479_13508)){
var param_13510 = cljs.core._nth.call(null,chunk__13478_13507,i__13480_13509);
cljs.compiler.emit.call(null,param_13510);

if(cljs.core._EQ_.call(null,param_13510,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13511 = seq__13477_13506;
var G__13512 = chunk__13478_13507;
var G__13513 = count__13479_13508;
var G__13514 = (i__13480_13509 + (1));
seq__13477_13506 = G__13511;
chunk__13478_13507 = G__13512;
count__13479_13508 = G__13513;
i__13480_13509 = G__13514;
continue;
} else {
var temp__5457__auto___13515 = cljs.core.seq.call(null,seq__13477_13506);
if(temp__5457__auto___13515){
var seq__13477_13516__$1 = temp__5457__auto___13515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13477_13516__$1)){
var c__9605__auto___13517 = cljs.core.chunk_first.call(null,seq__13477_13516__$1);
var G__13518 = cljs.core.chunk_rest.call(null,seq__13477_13516__$1);
var G__13519 = c__9605__auto___13517;
var G__13520 = cljs.core.count.call(null,c__9605__auto___13517);
var G__13521 = (0);
seq__13477_13506 = G__13518;
chunk__13478_13507 = G__13519;
count__13479_13508 = G__13520;
i__13480_13509 = G__13521;
continue;
} else {
var param_13522 = cljs.core.first.call(null,seq__13477_13516__$1);
cljs.compiler.emit.call(null,param_13522);

if(cljs.core._EQ_.call(null,param_13522,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13523 = cljs.core.next.call(null,seq__13477_13516__$1);
var G__13524 = null;
var G__13525 = (0);
var G__13526 = (0);
seq__13477_13506 = G__13523;
chunk__13478_13507 = G__13524;
count__13479_13508 = G__13525;
i__13480_13509 = G__13526;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13482,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13482,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13481__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13482,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13483,";");

cljs.compiler.emitln.call(null,"return ",mname_13482,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13530){
var map__13531 = p__13530;
var map__13531__$1 = ((((!((map__13531 == null)))?((((map__13531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13531):map__13531);
var name = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__13531__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13527_SHARP_){
var and__8662__auto__ = p1__13527_SHARP_;
if(cljs.core.truth_(and__8662__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13527_SHARP_));
} else {
return and__8662__auto__;
}
});})(map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_13566__$1 = (function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13567 = cljs.compiler.munge.call(null,name_13566__$1);
var maxparams_13568 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13569 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_13566__$1,mname_13567,maxparams_13568,loop_locals,map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13567),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13566__$1,mname_13567,maxparams_13568,loop_locals,map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13570 = cljs.core.sort_by.call(null,((function (name_13566__$1,mname_13567,maxparams_13568,mmap_13569,loop_locals,map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13528_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13528_SHARP_)));
});})(name_13566__$1,mname_13567,maxparams_13568,mmap_13569,loop_locals,map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_13569));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13567," = null;");

var seq__13533_13571 = cljs.core.seq.call(null,ms_13570);
var chunk__13534_13572 = null;
var count__13535_13573 = (0);
var i__13536_13574 = (0);
while(true){
if((i__13536_13574 < count__13535_13573)){
var vec__13537_13575 = cljs.core._nth.call(null,chunk__13534_13572,i__13536_13574);
var n_13576 = cljs.core.nth.call(null,vec__13537_13575,(0),null);
var meth_13577 = cljs.core.nth.call(null,vec__13537_13575,(1),null);
cljs.compiler.emits.call(null,"var ",n_13576," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13577))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13577);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13577);
}

cljs.compiler.emitln.call(null,";");

var G__13578 = seq__13533_13571;
var G__13579 = chunk__13534_13572;
var G__13580 = count__13535_13573;
var G__13581 = (i__13536_13574 + (1));
seq__13533_13571 = G__13578;
chunk__13534_13572 = G__13579;
count__13535_13573 = G__13580;
i__13536_13574 = G__13581;
continue;
} else {
var temp__5457__auto___13582 = cljs.core.seq.call(null,seq__13533_13571);
if(temp__5457__auto___13582){
var seq__13533_13583__$1 = temp__5457__auto___13582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13533_13583__$1)){
var c__9605__auto___13584 = cljs.core.chunk_first.call(null,seq__13533_13583__$1);
var G__13585 = cljs.core.chunk_rest.call(null,seq__13533_13583__$1);
var G__13586 = c__9605__auto___13584;
var G__13587 = cljs.core.count.call(null,c__9605__auto___13584);
var G__13588 = (0);
seq__13533_13571 = G__13585;
chunk__13534_13572 = G__13586;
count__13535_13573 = G__13587;
i__13536_13574 = G__13588;
continue;
} else {
var vec__13540_13589 = cljs.core.first.call(null,seq__13533_13583__$1);
var n_13590 = cljs.core.nth.call(null,vec__13540_13589,(0),null);
var meth_13591 = cljs.core.nth.call(null,vec__13540_13589,(1),null);
cljs.compiler.emits.call(null,"var ",n_13590," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13591))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13591);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13591);
}

cljs.compiler.emitln.call(null,";");

var G__13592 = cljs.core.next.call(null,seq__13533_13583__$1);
var G__13593 = null;
var G__13594 = (0);
var G__13595 = (0);
seq__13533_13571 = G__13592;
chunk__13534_13572 = G__13593;
count__13535_13573 = G__13594;
i__13536_13574 = G__13595;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13567," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13568),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13568)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13568));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13543_13596 = cljs.core.seq.call(null,ms_13570);
var chunk__13544_13597 = null;
var count__13545_13598 = (0);
var i__13546_13599 = (0);
while(true){
if((i__13546_13599 < count__13545_13598)){
var vec__13547_13600 = cljs.core._nth.call(null,chunk__13544_13597,i__13546_13599);
var n_13601 = cljs.core.nth.call(null,vec__13547_13600,(0),null);
var meth_13602 = cljs.core.nth.call(null,vec__13547_13600,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13602))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13603 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13603," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13604 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13603," = new cljs.core.IndexedSeq(",a_13604,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13601,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13568)),(((cljs.core.count.call(null,maxparams_13568) > (1)))?", ":null),restarg_13603,");");
} else {
var pcnt_13605 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13602));
cljs.compiler.emitln.call(null,"case ",pcnt_13605,":");

cljs.compiler.emitln.call(null,"return ",n_13601,".call(this",(((pcnt_13605 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13605,maxparams_13568));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),",")),");");
}

var G__13606 = seq__13543_13596;
var G__13607 = chunk__13544_13597;
var G__13608 = count__13545_13598;
var G__13609 = (i__13546_13599 + (1));
seq__13543_13596 = G__13606;
chunk__13544_13597 = G__13607;
count__13545_13598 = G__13608;
i__13546_13599 = G__13609;
continue;
} else {
var temp__5457__auto___13610 = cljs.core.seq.call(null,seq__13543_13596);
if(temp__5457__auto___13610){
var seq__13543_13611__$1 = temp__5457__auto___13610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13543_13611__$1)){
var c__9605__auto___13612 = cljs.core.chunk_first.call(null,seq__13543_13611__$1);
var G__13613 = cljs.core.chunk_rest.call(null,seq__13543_13611__$1);
var G__13614 = c__9605__auto___13612;
var G__13615 = cljs.core.count.call(null,c__9605__auto___13612);
var G__13616 = (0);
seq__13543_13596 = G__13613;
chunk__13544_13597 = G__13614;
count__13545_13598 = G__13615;
i__13546_13599 = G__13616;
continue;
} else {
var vec__13550_13617 = cljs.core.first.call(null,seq__13543_13611__$1);
var n_13618 = cljs.core.nth.call(null,vec__13550_13617,(0),null);
var meth_13619 = cljs.core.nth.call(null,vec__13550_13617,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13619))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13620 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13620," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13621 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13620," = new cljs.core.IndexedSeq(",a_13621,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13618,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13568)),(((cljs.core.count.call(null,maxparams_13568) > (1)))?", ":null),restarg_13620,");");
} else {
var pcnt_13622 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13619));
cljs.compiler.emitln.call(null,"case ",pcnt_13622,":");

cljs.compiler.emitln.call(null,"return ",n_13618,".call(this",(((pcnt_13622 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13622,maxparams_13568));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),",")),");");
}

var G__13623 = cljs.core.next.call(null,seq__13543_13611__$1);
var G__13624 = null;
var G__13625 = (0);
var G__13626 = (0);
seq__13543_13596 = G__13623;
chunk__13544_13597 = G__13624;
count__13545_13598 = G__13625;
i__13546_13599 = G__13626;
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
cljs.compiler.emitln.call(null,mname_13567,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13567,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_13566__$1,mname_13567,maxparams_13568,mmap_13569,ms_13570,loop_locals,map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13529_SHARP_){
var vec__13553 = p1__13529_SHARP_;
var n = cljs.core.nth.call(null,vec__13553,(0),null);
var m = cljs.core.nth.call(null,vec__13553,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13566__$1,mname_13567,maxparams_13568,mmap_13569,ms_13570,loop_locals,map__13531,map__13531__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13570),".cljs$lang$applyTo;");
} else {
}

var seq__13556_13627 = cljs.core.seq.call(null,ms_13570);
var chunk__13557_13628 = null;
var count__13558_13629 = (0);
var i__13559_13630 = (0);
while(true){
if((i__13559_13630 < count__13558_13629)){
var vec__13560_13631 = cljs.core._nth.call(null,chunk__13557_13628,i__13559_13630);
var n_13632 = cljs.core.nth.call(null,vec__13560_13631,(0),null);
var meth_13633 = cljs.core.nth.call(null,vec__13560_13631,(1),null);
var c_13634 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13633));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13633))){
cljs.compiler.emitln.call(null,mname_13567,".cljs$core$IFn$_invoke$arity$variadic = ",n_13632,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13567,".cljs$core$IFn$_invoke$arity$",c_13634," = ",n_13632,";");
}

var G__13635 = seq__13556_13627;
var G__13636 = chunk__13557_13628;
var G__13637 = count__13558_13629;
var G__13638 = (i__13559_13630 + (1));
seq__13556_13627 = G__13635;
chunk__13557_13628 = G__13636;
count__13558_13629 = G__13637;
i__13559_13630 = G__13638;
continue;
} else {
var temp__5457__auto___13639 = cljs.core.seq.call(null,seq__13556_13627);
if(temp__5457__auto___13639){
var seq__13556_13640__$1 = temp__5457__auto___13639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13556_13640__$1)){
var c__9605__auto___13641 = cljs.core.chunk_first.call(null,seq__13556_13640__$1);
var G__13642 = cljs.core.chunk_rest.call(null,seq__13556_13640__$1);
var G__13643 = c__9605__auto___13641;
var G__13644 = cljs.core.count.call(null,c__9605__auto___13641);
var G__13645 = (0);
seq__13556_13627 = G__13642;
chunk__13557_13628 = G__13643;
count__13558_13629 = G__13644;
i__13559_13630 = G__13645;
continue;
} else {
var vec__13563_13646 = cljs.core.first.call(null,seq__13556_13640__$1);
var n_13647 = cljs.core.nth.call(null,vec__13563_13646,(0),null);
var meth_13648 = cljs.core.nth.call(null,vec__13563_13646,(1),null);
var c_13649 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13648));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13648))){
cljs.compiler.emitln.call(null,mname_13567,".cljs$core$IFn$_invoke$arity$variadic = ",n_13647,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13567,".cljs$core$IFn$_invoke$arity$",c_13649," = ",n_13647,";");
}

var G__13650 = cljs.core.next.call(null,seq__13556_13640__$1);
var G__13651 = null;
var G__13652 = (0);
var G__13653 = (0);
seq__13556_13627 = G__13650;
chunk__13557_13628 = G__13651;
count__13558_13629 = G__13652;
i__13559_13630 = G__13653;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13567,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13654){
var map__13655 = p__13654;
var map__13655__$1 = ((((!((map__13655 == null)))?((((map__13655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13655):map__13655);
var statements = cljs.core.get.call(null,map__13655__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13655__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__13657_13661 = cljs.core.seq.call(null,statements);
var chunk__13658_13662 = null;
var count__13659_13663 = (0);
var i__13660_13664 = (0);
while(true){
if((i__13660_13664 < count__13659_13663)){
var s_13665 = cljs.core._nth.call(null,chunk__13658_13662,i__13660_13664);
cljs.compiler.emitln.call(null,s_13665);

var G__13666 = seq__13657_13661;
var G__13667 = chunk__13658_13662;
var G__13668 = count__13659_13663;
var G__13669 = (i__13660_13664 + (1));
seq__13657_13661 = G__13666;
chunk__13658_13662 = G__13667;
count__13659_13663 = G__13668;
i__13660_13664 = G__13669;
continue;
} else {
var temp__5457__auto___13670 = cljs.core.seq.call(null,seq__13657_13661);
if(temp__5457__auto___13670){
var seq__13657_13671__$1 = temp__5457__auto___13670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13657_13671__$1)){
var c__9605__auto___13672 = cljs.core.chunk_first.call(null,seq__13657_13671__$1);
var G__13673 = cljs.core.chunk_rest.call(null,seq__13657_13671__$1);
var G__13674 = c__9605__auto___13672;
var G__13675 = cljs.core.count.call(null,c__9605__auto___13672);
var G__13676 = (0);
seq__13657_13661 = G__13673;
chunk__13658_13662 = G__13674;
count__13659_13663 = G__13675;
i__13660_13664 = G__13676;
continue;
} else {
var s_13677 = cljs.core.first.call(null,seq__13657_13671__$1);
cljs.compiler.emitln.call(null,s_13677);

var G__13678 = cljs.core.next.call(null,seq__13657_13671__$1);
var G__13679 = null;
var G__13680 = (0);
var G__13681 = (0);
seq__13657_13661 = G__13678;
chunk__13658_13662 = G__13679;
count__13659_13663 = G__13680;
i__13660_13664 = G__13681;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13682){
var map__13683 = p__13682;
var map__13683__$1 = ((((!((map__13683 == null)))?((((map__13683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13683):map__13683);
var env = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13685,is_loop){
var map__13686 = p__13685;
var map__13686__$1 = ((((!((map__13686 == null)))?((((map__13686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13686):map__13686);
var bindings = cljs.core.get.call(null,map__13686__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13686__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13686__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_13688_13697 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_13688_13697,context,map__13686,map__13686__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_13688_13697,context,map__13686,map__13686__$1,bindings,expr,env))
,bindings):null));

try{var seq__13689_13698 = cljs.core.seq.call(null,bindings);
var chunk__13690_13699 = null;
var count__13691_13700 = (0);
var i__13692_13701 = (0);
while(true){
if((i__13692_13701 < count__13691_13700)){
var map__13693_13702 = cljs.core._nth.call(null,chunk__13690_13699,i__13692_13701);
var map__13693_13703__$1 = ((((!((map__13693_13702 == null)))?((((map__13693_13702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13693_13702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13693_13702):map__13693_13702);
var binding_13704 = map__13693_13703__$1;
var init_13705 = cljs.core.get.call(null,map__13693_13703__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13704);

cljs.compiler.emitln.call(null," = ",init_13705,";");

var G__13706 = seq__13689_13698;
var G__13707 = chunk__13690_13699;
var G__13708 = count__13691_13700;
var G__13709 = (i__13692_13701 + (1));
seq__13689_13698 = G__13706;
chunk__13690_13699 = G__13707;
count__13691_13700 = G__13708;
i__13692_13701 = G__13709;
continue;
} else {
var temp__5457__auto___13710 = cljs.core.seq.call(null,seq__13689_13698);
if(temp__5457__auto___13710){
var seq__13689_13711__$1 = temp__5457__auto___13710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13689_13711__$1)){
var c__9605__auto___13712 = cljs.core.chunk_first.call(null,seq__13689_13711__$1);
var G__13713 = cljs.core.chunk_rest.call(null,seq__13689_13711__$1);
var G__13714 = c__9605__auto___13712;
var G__13715 = cljs.core.count.call(null,c__9605__auto___13712);
var G__13716 = (0);
seq__13689_13698 = G__13713;
chunk__13690_13699 = G__13714;
count__13691_13700 = G__13715;
i__13692_13701 = G__13716;
continue;
} else {
var map__13695_13717 = cljs.core.first.call(null,seq__13689_13711__$1);
var map__13695_13718__$1 = ((((!((map__13695_13717 == null)))?((((map__13695_13717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13695_13717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13695_13717):map__13695_13717);
var binding_13719 = map__13695_13718__$1;
var init_13720 = cljs.core.get.call(null,map__13695_13718__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13719);

cljs.compiler.emitln.call(null," = ",init_13720,";");

var G__13721 = cljs.core.next.call(null,seq__13689_13711__$1);
var G__13722 = null;
var G__13723 = (0);
var G__13724 = (0);
seq__13689_13698 = G__13721;
chunk__13690_13699 = G__13722;
count__13691_13700 = G__13723;
i__13692_13701 = G__13724;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13688_13697;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13725){
var map__13726 = p__13725;
var map__13726__$1 = ((((!((map__13726 == null)))?((((map__13726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13726):map__13726);
var frame = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9719__auto___13728 = cljs.core.count.call(null,exprs);
var i_13729 = (0);
while(true){
if((i_13729 < n__9719__auto___13728)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13729)," = ",exprs.call(null,i_13729),";");

var G__13730 = (i_13729 + (1));
i_13729 = G__13730;
continue;
} else {
}
break;
}

var n__9719__auto___13731 = cljs.core.count.call(null,exprs);
var i_13732 = (0);
while(true){
if((i_13732 < n__9719__auto___13731)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13732))," = ",temps.call(null,i_13732),";");

var G__13733 = (i_13732 + (1));
i_13732 = G__13733;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13734){
var map__13735 = p__13734;
var map__13735__$1 = ((((!((map__13735 == null)))?((((map__13735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13735):map__13735);
var bindings = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13737_13745 = cljs.core.seq.call(null,bindings);
var chunk__13738_13746 = null;
var count__13739_13747 = (0);
var i__13740_13748 = (0);
while(true){
if((i__13740_13748 < count__13739_13747)){
var map__13741_13749 = cljs.core._nth.call(null,chunk__13738_13746,i__13740_13748);
var map__13741_13750__$1 = ((((!((map__13741_13749 == null)))?((((map__13741_13749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13741_13749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741_13749):map__13741_13749);
var binding_13751 = map__13741_13750__$1;
var init_13752 = cljs.core.get.call(null,map__13741_13750__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13751)," = ",init_13752,";");

var G__13753 = seq__13737_13745;
var G__13754 = chunk__13738_13746;
var G__13755 = count__13739_13747;
var G__13756 = (i__13740_13748 + (1));
seq__13737_13745 = G__13753;
chunk__13738_13746 = G__13754;
count__13739_13747 = G__13755;
i__13740_13748 = G__13756;
continue;
} else {
var temp__5457__auto___13757 = cljs.core.seq.call(null,seq__13737_13745);
if(temp__5457__auto___13757){
var seq__13737_13758__$1 = temp__5457__auto___13757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13737_13758__$1)){
var c__9605__auto___13759 = cljs.core.chunk_first.call(null,seq__13737_13758__$1);
var G__13760 = cljs.core.chunk_rest.call(null,seq__13737_13758__$1);
var G__13761 = c__9605__auto___13759;
var G__13762 = cljs.core.count.call(null,c__9605__auto___13759);
var G__13763 = (0);
seq__13737_13745 = G__13760;
chunk__13738_13746 = G__13761;
count__13739_13747 = G__13762;
i__13740_13748 = G__13763;
continue;
} else {
var map__13743_13764 = cljs.core.first.call(null,seq__13737_13758__$1);
var map__13743_13765__$1 = ((((!((map__13743_13764 == null)))?((((map__13743_13764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13743_13764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13743_13764):map__13743_13764);
var binding_13766 = map__13743_13765__$1;
var init_13767 = cljs.core.get.call(null,map__13743_13765__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13766)," = ",init_13767,";");

var G__13768 = cljs.core.next.call(null,seq__13737_13758__$1);
var G__13769 = null;
var G__13770 = (0);
var G__13771 = (0);
seq__13737_13745 = G__13768;
chunk__13738_13746 = G__13769;
count__13739_13747 = G__13770;
i__13740_13748 = G__13771;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13774){
var map__13775 = p__13774;
var map__13775__$1 = ((((!((map__13775 == null)))?((((map__13775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13775):map__13775);
var expr = map__13775__$1;
var f = cljs.core.get.call(null,map__13775__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__13775__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__13777 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env){
return (function (p1__13772_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13772_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env){
return (function (p1__13773_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13773_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13775,map__13775__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13777,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13777,(1),null);
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_13780 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13780,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13781 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13781,args)),(((mfa_13781 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13781,args)),"], 0))");
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
var fprop_13782 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_13782," ? ",f__$1,fprop_13782,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_13782," ? ",f__$1,fprop_13782,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13783){
var map__13784 = p__13783;
var map__13784__$1 = ((((!((map__13784 == null)))?((((map__13784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13784):map__13784);
var ctor = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13786){
var map__13787 = p__13786;
var map__13787__$1 = ((((!((map__13787 == null)))?((((map__13787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13787):map__13787);
var target = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__13789 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__13789__$1 = ((((!((map__13789 == null)))?((((map__13789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13789):map__13789);
var options = cljs.core.get.call(null,map__13789__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__13789__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__13790 = options;
var map__13790__$1 = ((((!((map__13790 == null)))?((((map__13790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13790):map__13790);
var target = cljs.core.get.call(null,map__13790__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__13790__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__13791 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__13797 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__13797__$1 = ((((!((map__13797 == null)))?((((map__13797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13797):map__13797);
var node_libs = cljs.core.get.call(null,map__13797__$1,true);
var libs_to_load = cljs.core.get.call(null,map__13797__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__13791,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__13791,(1),null);
var map__13794 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__13794__$1 = ((((!((map__13794 == null)))?((((map__13794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13794):map__13794);
var global_exports_libs = cljs.core.get.call(null,map__13794__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__13794__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__13800_13816 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__13801_13817 = null;
var count__13802_13818 = (0);
var i__13803_13819 = (0);
while(true){
if((i__13803_13819 < count__13802_13818)){
var lib_13820 = cljs.core._nth.call(null,chunk__13801_13817,i__13803_13819);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13820)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13820),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13820),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13820),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13820),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13820),"');");

}
}
}

var G__13821 = seq__13800_13816;
var G__13822 = chunk__13801_13817;
var G__13823 = count__13802_13818;
var G__13824 = (i__13803_13819 + (1));
seq__13800_13816 = G__13821;
chunk__13801_13817 = G__13822;
count__13802_13818 = G__13823;
i__13803_13819 = G__13824;
continue;
} else {
var temp__5457__auto___13825 = cljs.core.seq.call(null,seq__13800_13816);
if(temp__5457__auto___13825){
var seq__13800_13826__$1 = temp__5457__auto___13825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13800_13826__$1)){
var c__9605__auto___13827 = cljs.core.chunk_first.call(null,seq__13800_13826__$1);
var G__13828 = cljs.core.chunk_rest.call(null,seq__13800_13826__$1);
var G__13829 = c__9605__auto___13827;
var G__13830 = cljs.core.count.call(null,c__9605__auto___13827);
var G__13831 = (0);
seq__13800_13816 = G__13828;
chunk__13801_13817 = G__13829;
count__13802_13818 = G__13830;
i__13803_13819 = G__13831;
continue;
} else {
var lib_13832 = cljs.core.first.call(null,seq__13800_13826__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13832)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13832),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13832),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8674__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13832),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13832),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13832),"');");

}
}
}

var G__13833 = cljs.core.next.call(null,seq__13800_13826__$1);
var G__13834 = null;
var G__13835 = (0);
var G__13836 = (0);
seq__13800_13816 = G__13833;
chunk__13801_13817 = G__13834;
count__13802_13818 = G__13835;
i__13803_13819 = G__13836;
continue;
}
} else {
}
}
break;
}

var seq__13804_13837 = cljs.core.seq.call(null,node_libs);
var chunk__13805_13838 = null;
var count__13806_13839 = (0);
var i__13807_13840 = (0);
while(true){
if((i__13807_13840 < count__13806_13839)){
var lib_13841 = cljs.core._nth.call(null,chunk__13805_13838,i__13807_13840);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13841)," = require('",lib_13841,"');");

var G__13842 = seq__13804_13837;
var G__13843 = chunk__13805_13838;
var G__13844 = count__13806_13839;
var G__13845 = (i__13807_13840 + (1));
seq__13804_13837 = G__13842;
chunk__13805_13838 = G__13843;
count__13806_13839 = G__13844;
i__13807_13840 = G__13845;
continue;
} else {
var temp__5457__auto___13846 = cljs.core.seq.call(null,seq__13804_13837);
if(temp__5457__auto___13846){
var seq__13804_13847__$1 = temp__5457__auto___13846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13804_13847__$1)){
var c__9605__auto___13848 = cljs.core.chunk_first.call(null,seq__13804_13847__$1);
var G__13849 = cljs.core.chunk_rest.call(null,seq__13804_13847__$1);
var G__13850 = c__9605__auto___13848;
var G__13851 = cljs.core.count.call(null,c__9605__auto___13848);
var G__13852 = (0);
seq__13804_13837 = G__13849;
chunk__13805_13838 = G__13850;
count__13806_13839 = G__13851;
i__13807_13840 = G__13852;
continue;
} else {
var lib_13853 = cljs.core.first.call(null,seq__13804_13847__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13853)," = require('",lib_13853,"');");

var G__13854 = cljs.core.next.call(null,seq__13804_13847__$1);
var G__13855 = null;
var G__13856 = (0);
var G__13857 = (0);
seq__13804_13837 = G__13854;
chunk__13805_13838 = G__13855;
count__13806_13839 = G__13856;
i__13807_13840 = G__13857;
continue;
}
} else {
}
}
break;
}

var seq__13808_13858 = cljs.core.seq.call(null,global_exports_libs);
var chunk__13809_13859 = null;
var count__13810_13860 = (0);
var i__13811_13861 = (0);
while(true){
if((i__13811_13861 < count__13810_13860)){
var lib_13862 = cljs.core._nth.call(null,chunk__13809_13859,i__13811_13861);
var map__13812_13863 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_13862));
var map__13812_13864__$1 = ((((!((map__13812_13863 == null)))?((((map__13812_13863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13812_13863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13812_13863):map__13812_13863);
var global_exports_13865 = cljs.core.get.call(null,map__13812_13864__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_13862)," = goog.global.",cljs.core.get.call(null,global_exports_13865,cljs.core.symbol.call(null,lib_13862)),";");

var G__13866 = seq__13808_13858;
var G__13867 = chunk__13809_13859;
var G__13868 = count__13810_13860;
var G__13869 = (i__13811_13861 + (1));
seq__13808_13858 = G__13866;
chunk__13809_13859 = G__13867;
count__13810_13860 = G__13868;
i__13811_13861 = G__13869;
continue;
} else {
var temp__5457__auto___13870 = cljs.core.seq.call(null,seq__13808_13858);
if(temp__5457__auto___13870){
var seq__13808_13871__$1 = temp__5457__auto___13870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13808_13871__$1)){
var c__9605__auto___13872 = cljs.core.chunk_first.call(null,seq__13808_13871__$1);
var G__13873 = cljs.core.chunk_rest.call(null,seq__13808_13871__$1);
var G__13874 = c__9605__auto___13872;
var G__13875 = cljs.core.count.call(null,c__9605__auto___13872);
var G__13876 = (0);
seq__13808_13858 = G__13873;
chunk__13809_13859 = G__13874;
count__13810_13860 = G__13875;
i__13811_13861 = G__13876;
continue;
} else {
var lib_13877 = cljs.core.first.call(null,seq__13808_13871__$1);
var map__13814_13878 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_13877));
var map__13814_13879__$1 = ((((!((map__13814_13878 == null)))?((((map__13814_13878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13814_13878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13814_13878):map__13814_13878);
var global_exports_13880 = cljs.core.get.call(null,map__13814_13879__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_13877)," = goog.global.",cljs.core.get.call(null,global_exports_13880,cljs.core.symbol.call(null,lib_13877)),";");

var G__13881 = cljs.core.next.call(null,seq__13808_13871__$1);
var G__13882 = null;
var G__13883 = (0);
var G__13884 = (0);
seq__13808_13858 = G__13881;
chunk__13809_13859 = G__13882;
count__13810_13860 = G__13883;
i__13811_13861 = G__13884;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13885){
var map__13886 = p__13885;
var map__13886__$1 = ((((!((map__13886 == null)))?((((map__13886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13886):map__13886);
var name = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13886__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13888){
var map__13889 = p__13888;
var map__13889__$1 = ((((!((map__13889 == null)))?((((map__13889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13889):map__13889);
var name = cljs.core.get.call(null,map__13889__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13889__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13889__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13889__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13889__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13889__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13889__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__13891){
var map__13892 = p__13891;
var map__13892__$1 = ((((!((map__13892 == null)))?((((map__13892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13892):map__13892);
var t = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13892__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13894_13912 = cljs.core.seq.call(null,protocols);
var chunk__13895_13913 = null;
var count__13896_13914 = (0);
var i__13897_13915 = (0);
while(true){
if((i__13897_13915 < count__13896_13914)){
var protocol_13916 = cljs.core._nth.call(null,chunk__13895_13913,i__13897_13915);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13916)].join('')),"}");

var G__13917 = seq__13894_13912;
var G__13918 = chunk__13895_13913;
var G__13919 = count__13896_13914;
var G__13920 = (i__13897_13915 + (1));
seq__13894_13912 = G__13917;
chunk__13895_13913 = G__13918;
count__13896_13914 = G__13919;
i__13897_13915 = G__13920;
continue;
} else {
var temp__5457__auto___13921 = cljs.core.seq.call(null,seq__13894_13912);
if(temp__5457__auto___13921){
var seq__13894_13922__$1 = temp__5457__auto___13921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13894_13922__$1)){
var c__9605__auto___13923 = cljs.core.chunk_first.call(null,seq__13894_13922__$1);
var G__13924 = cljs.core.chunk_rest.call(null,seq__13894_13922__$1);
var G__13925 = c__9605__auto___13923;
var G__13926 = cljs.core.count.call(null,c__9605__auto___13923);
var G__13927 = (0);
seq__13894_13912 = G__13924;
chunk__13895_13913 = G__13925;
count__13896_13914 = G__13926;
i__13897_13915 = G__13927;
continue;
} else {
var protocol_13928 = cljs.core.first.call(null,seq__13894_13922__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13928)].join('')),"}");

var G__13929 = cljs.core.next.call(null,seq__13894_13922__$1);
var G__13930 = null;
var G__13931 = (0);
var G__13932 = (0);
seq__13894_13912 = G__13929;
chunk__13895_13913 = G__13930;
count__13896_13914 = G__13931;
i__13897_13915 = G__13932;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13898_13933 = cljs.core.seq.call(null,fields__$1);
var chunk__13899_13934 = null;
var count__13900_13935 = (0);
var i__13901_13936 = (0);
while(true){
if((i__13901_13936 < count__13900_13935)){
var fld_13937 = cljs.core._nth.call(null,chunk__13899_13934,i__13901_13936);
cljs.compiler.emitln.call(null,"this.",fld_13937," = ",fld_13937,";");

var G__13938 = seq__13898_13933;
var G__13939 = chunk__13899_13934;
var G__13940 = count__13900_13935;
var G__13941 = (i__13901_13936 + (1));
seq__13898_13933 = G__13938;
chunk__13899_13934 = G__13939;
count__13900_13935 = G__13940;
i__13901_13936 = G__13941;
continue;
} else {
var temp__5457__auto___13942 = cljs.core.seq.call(null,seq__13898_13933);
if(temp__5457__auto___13942){
var seq__13898_13943__$1 = temp__5457__auto___13942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13898_13943__$1)){
var c__9605__auto___13944 = cljs.core.chunk_first.call(null,seq__13898_13943__$1);
var G__13945 = cljs.core.chunk_rest.call(null,seq__13898_13943__$1);
var G__13946 = c__9605__auto___13944;
var G__13947 = cljs.core.count.call(null,c__9605__auto___13944);
var G__13948 = (0);
seq__13898_13933 = G__13945;
chunk__13899_13934 = G__13946;
count__13900_13935 = G__13947;
i__13901_13936 = G__13948;
continue;
} else {
var fld_13949 = cljs.core.first.call(null,seq__13898_13943__$1);
cljs.compiler.emitln.call(null,"this.",fld_13949," = ",fld_13949,";");

var G__13950 = cljs.core.next.call(null,seq__13898_13943__$1);
var G__13951 = null;
var G__13952 = (0);
var G__13953 = (0);
seq__13898_13933 = G__13950;
chunk__13899_13934 = G__13951;
count__13900_13935 = G__13952;
i__13901_13936 = G__13953;
continue;
}
} else {
}
}
break;
}

var seq__13902_13954 = cljs.core.seq.call(null,pmasks);
var chunk__13903_13955 = null;
var count__13904_13956 = (0);
var i__13905_13957 = (0);
while(true){
if((i__13905_13957 < count__13904_13956)){
var vec__13906_13958 = cljs.core._nth.call(null,chunk__13903_13955,i__13905_13957);
var pno_13959 = cljs.core.nth.call(null,vec__13906_13958,(0),null);
var pmask_13960 = cljs.core.nth.call(null,vec__13906_13958,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13959,"$ = ",pmask_13960,";");

var G__13961 = seq__13902_13954;
var G__13962 = chunk__13903_13955;
var G__13963 = count__13904_13956;
var G__13964 = (i__13905_13957 + (1));
seq__13902_13954 = G__13961;
chunk__13903_13955 = G__13962;
count__13904_13956 = G__13963;
i__13905_13957 = G__13964;
continue;
} else {
var temp__5457__auto___13965 = cljs.core.seq.call(null,seq__13902_13954);
if(temp__5457__auto___13965){
var seq__13902_13966__$1 = temp__5457__auto___13965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13902_13966__$1)){
var c__9605__auto___13967 = cljs.core.chunk_first.call(null,seq__13902_13966__$1);
var G__13968 = cljs.core.chunk_rest.call(null,seq__13902_13966__$1);
var G__13969 = c__9605__auto___13967;
var G__13970 = cljs.core.count.call(null,c__9605__auto___13967);
var G__13971 = (0);
seq__13902_13954 = G__13968;
chunk__13903_13955 = G__13969;
count__13904_13956 = G__13970;
i__13905_13957 = G__13971;
continue;
} else {
var vec__13909_13972 = cljs.core.first.call(null,seq__13902_13966__$1);
var pno_13973 = cljs.core.nth.call(null,vec__13909_13972,(0),null);
var pmask_13974 = cljs.core.nth.call(null,vec__13909_13972,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13973,"$ = ",pmask_13974,";");

var G__13975 = cljs.core.next.call(null,seq__13902_13966__$1);
var G__13976 = null;
var G__13977 = (0);
var G__13978 = (0);
seq__13902_13954 = G__13975;
chunk__13903_13955 = G__13976;
count__13904_13956 = G__13977;
i__13905_13957 = G__13978;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__13979){
var map__13980 = p__13979;
var map__13980__$1 = ((((!((map__13980 == null)))?((((map__13980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13980):map__13980);
var t = cljs.core.get.call(null,map__13980__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13980__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13980__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13980__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13980__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13982_14000 = cljs.core.seq.call(null,protocols);
var chunk__13983_14001 = null;
var count__13984_14002 = (0);
var i__13985_14003 = (0);
while(true){
if((i__13985_14003 < count__13984_14002)){
var protocol_14004 = cljs.core._nth.call(null,chunk__13983_14001,i__13985_14003);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14004)].join('')),"}");

var G__14005 = seq__13982_14000;
var G__14006 = chunk__13983_14001;
var G__14007 = count__13984_14002;
var G__14008 = (i__13985_14003 + (1));
seq__13982_14000 = G__14005;
chunk__13983_14001 = G__14006;
count__13984_14002 = G__14007;
i__13985_14003 = G__14008;
continue;
} else {
var temp__5457__auto___14009 = cljs.core.seq.call(null,seq__13982_14000);
if(temp__5457__auto___14009){
var seq__13982_14010__$1 = temp__5457__auto___14009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13982_14010__$1)){
var c__9605__auto___14011 = cljs.core.chunk_first.call(null,seq__13982_14010__$1);
var G__14012 = cljs.core.chunk_rest.call(null,seq__13982_14010__$1);
var G__14013 = c__9605__auto___14011;
var G__14014 = cljs.core.count.call(null,c__9605__auto___14011);
var G__14015 = (0);
seq__13982_14000 = G__14012;
chunk__13983_14001 = G__14013;
count__13984_14002 = G__14014;
i__13985_14003 = G__14015;
continue;
} else {
var protocol_14016 = cljs.core.first.call(null,seq__13982_14010__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14016)].join('')),"}");

var G__14017 = cljs.core.next.call(null,seq__13982_14010__$1);
var G__14018 = null;
var G__14019 = (0);
var G__14020 = (0);
seq__13982_14000 = G__14017;
chunk__13983_14001 = G__14018;
count__13984_14002 = G__14019;
i__13985_14003 = G__14020;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13986_14021 = cljs.core.seq.call(null,fields__$1);
var chunk__13987_14022 = null;
var count__13988_14023 = (0);
var i__13989_14024 = (0);
while(true){
if((i__13989_14024 < count__13988_14023)){
var fld_14025 = cljs.core._nth.call(null,chunk__13987_14022,i__13989_14024);
cljs.compiler.emitln.call(null,"this.",fld_14025," = ",fld_14025,";");

var G__14026 = seq__13986_14021;
var G__14027 = chunk__13987_14022;
var G__14028 = count__13988_14023;
var G__14029 = (i__13989_14024 + (1));
seq__13986_14021 = G__14026;
chunk__13987_14022 = G__14027;
count__13988_14023 = G__14028;
i__13989_14024 = G__14029;
continue;
} else {
var temp__5457__auto___14030 = cljs.core.seq.call(null,seq__13986_14021);
if(temp__5457__auto___14030){
var seq__13986_14031__$1 = temp__5457__auto___14030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13986_14031__$1)){
var c__9605__auto___14032 = cljs.core.chunk_first.call(null,seq__13986_14031__$1);
var G__14033 = cljs.core.chunk_rest.call(null,seq__13986_14031__$1);
var G__14034 = c__9605__auto___14032;
var G__14035 = cljs.core.count.call(null,c__9605__auto___14032);
var G__14036 = (0);
seq__13986_14021 = G__14033;
chunk__13987_14022 = G__14034;
count__13988_14023 = G__14035;
i__13989_14024 = G__14036;
continue;
} else {
var fld_14037 = cljs.core.first.call(null,seq__13986_14031__$1);
cljs.compiler.emitln.call(null,"this.",fld_14037," = ",fld_14037,";");

var G__14038 = cljs.core.next.call(null,seq__13986_14031__$1);
var G__14039 = null;
var G__14040 = (0);
var G__14041 = (0);
seq__13986_14021 = G__14038;
chunk__13987_14022 = G__14039;
count__13988_14023 = G__14040;
i__13989_14024 = G__14041;
continue;
}
} else {
}
}
break;
}

var seq__13990_14042 = cljs.core.seq.call(null,pmasks);
var chunk__13991_14043 = null;
var count__13992_14044 = (0);
var i__13993_14045 = (0);
while(true){
if((i__13993_14045 < count__13992_14044)){
var vec__13994_14046 = cljs.core._nth.call(null,chunk__13991_14043,i__13993_14045);
var pno_14047 = cljs.core.nth.call(null,vec__13994_14046,(0),null);
var pmask_14048 = cljs.core.nth.call(null,vec__13994_14046,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14047,"$ = ",pmask_14048,";");

var G__14049 = seq__13990_14042;
var G__14050 = chunk__13991_14043;
var G__14051 = count__13992_14044;
var G__14052 = (i__13993_14045 + (1));
seq__13990_14042 = G__14049;
chunk__13991_14043 = G__14050;
count__13992_14044 = G__14051;
i__13993_14045 = G__14052;
continue;
} else {
var temp__5457__auto___14053 = cljs.core.seq.call(null,seq__13990_14042);
if(temp__5457__auto___14053){
var seq__13990_14054__$1 = temp__5457__auto___14053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13990_14054__$1)){
var c__9605__auto___14055 = cljs.core.chunk_first.call(null,seq__13990_14054__$1);
var G__14056 = cljs.core.chunk_rest.call(null,seq__13990_14054__$1);
var G__14057 = c__9605__auto___14055;
var G__14058 = cljs.core.count.call(null,c__9605__auto___14055);
var G__14059 = (0);
seq__13990_14042 = G__14056;
chunk__13991_14043 = G__14057;
count__13992_14044 = G__14058;
i__13993_14045 = G__14059;
continue;
} else {
var vec__13997_14060 = cljs.core.first.call(null,seq__13990_14054__$1);
var pno_14061 = cljs.core.nth.call(null,vec__13997_14060,(0),null);
var pmask_14062 = cljs.core.nth.call(null,vec__13997_14060,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_14061,"$ = ",pmask_14062,";");

var G__14063 = cljs.core.next.call(null,seq__13990_14054__$1);
var G__14064 = null;
var G__14065 = (0);
var G__14066 = (0);
seq__13990_14042 = G__14063;
chunk__13991_14043 = G__14064;
count__13992_14044 = G__14065;
i__13993_14045 = G__14066;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__14067){
var map__14068 = p__14067;
var map__14068__$1 = ((((!((map__14068 == null)))?((((map__14068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14068):map__14068);
var target = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__14070){
var map__14071 = p__14070;
var map__14071__$1 = ((((!((map__14071 == null)))?((((map__14071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14071):map__14071);
var op = cljs.core.get.call(null,map__14071__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__14071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__14071__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__14071__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__14071__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8662__auto__ = code;
if(cljs.core.truth_(and__8662__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8662__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12987__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12987__auto__))){
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

var seq__14076 = cljs.core.seq.call(null,table);
var chunk__14077 = null;
var count__14078 = (0);
var i__14079 = (0);
while(true){
if((i__14079 < count__14078)){
var vec__14080 = cljs.core._nth.call(null,chunk__14077,i__14079);
var sym = cljs.core.nth.call(null,vec__14080,(0),null);
var value = cljs.core.nth.call(null,vec__14080,(1),null);
var ns_14086 = cljs.core.namespace.call(null,sym);
var name_14087 = cljs.core.name.call(null,sym);
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

var G__14088 = seq__14076;
var G__14089 = chunk__14077;
var G__14090 = count__14078;
var G__14091 = (i__14079 + (1));
seq__14076 = G__14088;
chunk__14077 = G__14089;
count__14078 = G__14090;
i__14079 = G__14091;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14076);
if(temp__5457__auto__){
var seq__14076__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14076__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__14076__$1);
var G__14092 = cljs.core.chunk_rest.call(null,seq__14076__$1);
var G__14093 = c__9605__auto__;
var G__14094 = cljs.core.count.call(null,c__9605__auto__);
var G__14095 = (0);
seq__14076 = G__14092;
chunk__14077 = G__14093;
count__14078 = G__14094;
i__14079 = G__14095;
continue;
} else {
var vec__14083 = cljs.core.first.call(null,seq__14076__$1);
var sym = cljs.core.nth.call(null,vec__14083,(0),null);
var value = cljs.core.nth.call(null,vec__14083,(1),null);
var ns_14096 = cljs.core.namespace.call(null,sym);
var name_14097 = cljs.core.name.call(null,sym);
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

var G__14098 = cljs.core.next.call(null,seq__14076__$1);
var G__14099 = null;
var G__14100 = (0);
var G__14101 = (0);
seq__14076 = G__14098;
chunk__14077 = G__14099;
count__14078 = G__14100;
i__14079 = G__14101;
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
var G__14103 = arguments.length;
switch (G__14103) {
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
var k_14108 = cljs.core.first.call(null,ks);
var vec__14104_14109 = cljs.core.conj.call(null,prefix,k_14108);
var top_14110 = cljs.core.nth.call(null,vec__14104_14109,(0),null);
var prefix_SINGLEQUOTE__14111 = vec__14104_14109;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_14108)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__14111) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_14110)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_14110)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__14111)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_14110);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__14111)),";");
}
} else {
}

var m_14112 = cljs.core.get.call(null,externs,k_14108);
if(cljs.core.empty_QMARK_.call(null,m_14112)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__14111,m_14112,top_level,known_externs);
}

var G__14113 = cljs.core.next.call(null,ks);
ks = G__14113;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
