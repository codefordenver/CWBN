// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__11937){
var vec__11938 = p__11937;
var i = cljs.core.nth.call(null,vec__11938,(0),null);
var v = cljs.core.nth.call(null,vec__11938,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__11941 = seg;
var gcol = cljs.core.nth.call(null,vec__11941,(0),null);
var source = cljs.core.nth.call(null,vec__11941,(1),null);
var line = cljs.core.nth.call(null,vec__11941,(2),null);
var col = cljs.core.nth.call(null,vec__11941,(3),null);
var name = cljs.core.nth.call(null,vec__11941,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__11944 = seg;
var gcol = cljs.core.nth.call(null,vec__11944,(0),null);
var source = cljs.core.nth.call(null,vec__11944,(1),null);
var line = cljs.core.nth.call(null,vec__11944,(2),null);
var col = cljs.core.nth.call(null,vec__11944,(3),null);
var name = cljs.core.nth.call(null,vec__11944,(4),null);
var vec__11947 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11947,(0),null);
var rsource = cljs.core.nth.call(null,vec__11947,(1),null);
var rline = cljs.core.nth.call(null,vec__11947,(2),null);
var rcol = cljs.core.nth.call(null,vec__11947,(3),null);
var rname = cljs.core.nth.call(null,vec__11947,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8674__auto__ = source;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8674__auto__ = line;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8674__auto__ = col;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__11950 = segmap;
var map__11950__$1 = ((((!((map__11950 == null)))?((((map__11950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11950):map__11950);
var gcol = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__11950,map__11950__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__11950,map__11950__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__11950,map__11950__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__11950,map__11950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11950,map__11950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__11950,map__11950__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__11953 = arguments.length;
switch (G__11953) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__11954 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11958 = cljs.core.next.call(null,segs__$1);
var G__11959 = nrelseg;
var G__11960 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11958;
relseg__$1 = G__11959;
result__$1 = G__11960;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11954,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11954,(1),null);
var G__11961 = (gline + (1));
var G__11962 = cljs.core.next.call(null,lines__$1);
var G__11963 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11964 = result__$1;
gline = G__11961;
lines__$1 = G__11962;
relseg = G__11963;
result = G__11964;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__11966 = segmap;
var map__11966__$1 = ((((!((map__11966 == null)))?((((map__11966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11966):map__11966);
var gcol = cljs.core.get.call(null,map__11966__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11966__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11966__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__11966,map__11966__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__11966,map__11966__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11965_SHARP_){
return cljs.core.conj.call(null,p1__11965_SHARP_,d__$1);
});})(map__11966,map__11966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11966,map__11966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__11969 = arguments.length;
switch (G__11969) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__11970 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11974 = cljs.core.next.call(null,segs__$1);
var G__11975 = nrelseg;
var G__11976 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11974;
relseg__$1 = G__11975;
result__$1 = G__11976;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11970,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11970,(1),null);
var G__11977 = (gline + (1));
var G__11978 = cljs.core.next.call(null,lines__$1);
var G__11979 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11980 = result__$1;
gline = G__11977;
lines__$1 = G__11978;
relseg = G__11979;
result = G__11980;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__11981){
var vec__11982 = p__11981;
var _ = cljs.core.nth.call(null,vec__11982,(0),null);
var source = cljs.core.nth.call(null,vec__11982,(1),null);
var line = cljs.core.nth.call(null,vec__11982,(2),null);
var col = cljs.core.nth.call(null,vec__11982,(3),null);
var name = cljs.core.nth.call(null,vec__11982,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__11985){
var vec__11986 = p__11985;
var gcol = cljs.core.nth.call(null,vec__11986,(0),null);
var sidx = cljs.core.nth.call(null,vec__11986,(1),null);
var line = cljs.core.nth.call(null,vec__11986,(2),null);
var col = cljs.core.nth.call(null,vec__11986,(3),null);
var name = cljs.core.nth.call(null,vec__11986,(4),null);
var seg = vec__11986;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__11986,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11989){
var vec__11990 = p__11989;
var _ = cljs.core.nth.call(null,vec__11990,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11990,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11990,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11990,(3),null);
var lname = cljs.core.nth.call(null,vec__11990,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11986,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__8674__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__11996 = cljs.core.seq.call(null,infos);
var chunk__11997 = null;
var count__11998 = (0);
var i__11999 = (0);
while(true){
if((i__11999 < count__11998)){
var info = cljs.core._nth.call(null,chunk__11997,i__11999);
var segv_12078 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12079 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12080 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12079 > (lc_12080 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11996,chunk__11997,count__11998,i__11999,segv_12078,gline_12079,lc_12080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12079 - (lc_12080 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12078], null));
});})(seq__11996,chunk__11997,count__11998,i__11999,segv_12078,gline_12079,lc_12080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11996,chunk__11997,count__11998,i__11999,segv_12078,gline_12079,lc_12080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12079], null),cljs.core.conj,segv_12078);
});})(seq__11996,chunk__11997,count__11998,i__11999,segv_12078,gline_12079,lc_12080,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12081 = seq__11996;
var G__12082 = chunk__11997;
var G__12083 = count__11998;
var G__12084 = (i__11999 + (1));
seq__11996 = G__12081;
chunk__11997 = G__12082;
count__11998 = G__12083;
i__11999 = G__12084;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11996);
if(temp__5457__auto__){
var seq__11996__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11996__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__11996__$1);
var G__12085 = cljs.core.chunk_rest.call(null,seq__11996__$1);
var G__12086 = c__9605__auto__;
var G__12087 = cljs.core.count.call(null,c__9605__auto__);
var G__12088 = (0);
seq__11996 = G__12085;
chunk__11997 = G__12086;
count__11998 = G__12087;
i__11999 = G__12088;
continue;
} else {
var info = cljs.core.first.call(null,seq__11996__$1);
var segv_12089 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12090 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12091 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12090 > (lc_12091 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11996,chunk__11997,count__11998,i__11999,segv_12089,gline_12090,lc_12091,info,seq__11996__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12090 - (lc_12091 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12089], null));
});})(seq__11996,chunk__11997,count__11998,i__11999,segv_12089,gline_12090,lc_12091,info,seq__11996__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11996,chunk__11997,count__11998,i__11999,segv_12089,gline_12090,lc_12091,info,seq__11996__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12090], null),cljs.core.conj,segv_12089);
});})(seq__11996,chunk__11997,count__11998,i__11999,segv_12089,gline_12090,lc_12091,info,seq__11996__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12092 = cljs.core.next.call(null,seq__11996__$1);
var G__12093 = null;
var G__12094 = (0);
var G__12095 = (0);
seq__11996 = G__12092;
chunk__11997 = G__12093;
count__11998 = G__12094;
i__11999 = G__12095;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__12000_12096 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12001_12097 = null;
var count__12002_12098 = (0);
var i__12003_12099 = (0);
while(true){
if((i__12003_12099 < count__12002_12098)){
var vec__12004_12100 = cljs.core._nth.call(null,chunk__12001_12097,i__12003_12099);
var source_idx_12101 = cljs.core.nth.call(null,vec__12004_12100,(0),null);
var vec__12007_12102 = cljs.core.nth.call(null,vec__12004_12100,(1),null);
var __12103 = cljs.core.nth.call(null,vec__12007_12102,(0),null);
var lines_12104__$1 = cljs.core.nth.call(null,vec__12007_12102,(1),null);
var seq__12010_12105 = cljs.core.seq.call(null,lines_12104__$1);
var chunk__12011_12106 = null;
var count__12012_12107 = (0);
var i__12013_12108 = (0);
while(true){
if((i__12013_12108 < count__12012_12107)){
var vec__12014_12109 = cljs.core._nth.call(null,chunk__12011_12106,i__12013_12108);
var line_12110 = cljs.core.nth.call(null,vec__12014_12109,(0),null);
var cols_12111 = cljs.core.nth.call(null,vec__12014_12109,(1),null);
var seq__12017_12112 = cljs.core.seq.call(null,cols_12111);
var chunk__12018_12113 = null;
var count__12019_12114 = (0);
var i__12020_12115 = (0);
while(true){
if((i__12020_12115 < count__12019_12114)){
var vec__12021_12116 = cljs.core._nth.call(null,chunk__12018_12113,i__12020_12115);
var col_12117 = cljs.core.nth.call(null,vec__12021_12116,(0),null);
var infos_12118 = cljs.core.nth.call(null,vec__12021_12116,(1),null);
encode_cols.call(null,infos_12118,source_idx_12101,line_12110,col_12117);

var G__12119 = seq__12017_12112;
var G__12120 = chunk__12018_12113;
var G__12121 = count__12019_12114;
var G__12122 = (i__12020_12115 + (1));
seq__12017_12112 = G__12119;
chunk__12018_12113 = G__12120;
count__12019_12114 = G__12121;
i__12020_12115 = G__12122;
continue;
} else {
var temp__5457__auto___12123 = cljs.core.seq.call(null,seq__12017_12112);
if(temp__5457__auto___12123){
var seq__12017_12124__$1 = temp__5457__auto___12123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12017_12124__$1)){
var c__9605__auto___12125 = cljs.core.chunk_first.call(null,seq__12017_12124__$1);
var G__12126 = cljs.core.chunk_rest.call(null,seq__12017_12124__$1);
var G__12127 = c__9605__auto___12125;
var G__12128 = cljs.core.count.call(null,c__9605__auto___12125);
var G__12129 = (0);
seq__12017_12112 = G__12126;
chunk__12018_12113 = G__12127;
count__12019_12114 = G__12128;
i__12020_12115 = G__12129;
continue;
} else {
var vec__12024_12130 = cljs.core.first.call(null,seq__12017_12124__$1);
var col_12131 = cljs.core.nth.call(null,vec__12024_12130,(0),null);
var infos_12132 = cljs.core.nth.call(null,vec__12024_12130,(1),null);
encode_cols.call(null,infos_12132,source_idx_12101,line_12110,col_12131);

var G__12133 = cljs.core.next.call(null,seq__12017_12124__$1);
var G__12134 = null;
var G__12135 = (0);
var G__12136 = (0);
seq__12017_12112 = G__12133;
chunk__12018_12113 = G__12134;
count__12019_12114 = G__12135;
i__12020_12115 = G__12136;
continue;
}
} else {
}
}
break;
}

var G__12137 = seq__12010_12105;
var G__12138 = chunk__12011_12106;
var G__12139 = count__12012_12107;
var G__12140 = (i__12013_12108 + (1));
seq__12010_12105 = G__12137;
chunk__12011_12106 = G__12138;
count__12012_12107 = G__12139;
i__12013_12108 = G__12140;
continue;
} else {
var temp__5457__auto___12141 = cljs.core.seq.call(null,seq__12010_12105);
if(temp__5457__auto___12141){
var seq__12010_12142__$1 = temp__5457__auto___12141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12010_12142__$1)){
var c__9605__auto___12143 = cljs.core.chunk_first.call(null,seq__12010_12142__$1);
var G__12144 = cljs.core.chunk_rest.call(null,seq__12010_12142__$1);
var G__12145 = c__9605__auto___12143;
var G__12146 = cljs.core.count.call(null,c__9605__auto___12143);
var G__12147 = (0);
seq__12010_12105 = G__12144;
chunk__12011_12106 = G__12145;
count__12012_12107 = G__12146;
i__12013_12108 = G__12147;
continue;
} else {
var vec__12027_12148 = cljs.core.first.call(null,seq__12010_12142__$1);
var line_12149 = cljs.core.nth.call(null,vec__12027_12148,(0),null);
var cols_12150 = cljs.core.nth.call(null,vec__12027_12148,(1),null);
var seq__12030_12151 = cljs.core.seq.call(null,cols_12150);
var chunk__12031_12152 = null;
var count__12032_12153 = (0);
var i__12033_12154 = (0);
while(true){
if((i__12033_12154 < count__12032_12153)){
var vec__12034_12155 = cljs.core._nth.call(null,chunk__12031_12152,i__12033_12154);
var col_12156 = cljs.core.nth.call(null,vec__12034_12155,(0),null);
var infos_12157 = cljs.core.nth.call(null,vec__12034_12155,(1),null);
encode_cols.call(null,infos_12157,source_idx_12101,line_12149,col_12156);

var G__12158 = seq__12030_12151;
var G__12159 = chunk__12031_12152;
var G__12160 = count__12032_12153;
var G__12161 = (i__12033_12154 + (1));
seq__12030_12151 = G__12158;
chunk__12031_12152 = G__12159;
count__12032_12153 = G__12160;
i__12033_12154 = G__12161;
continue;
} else {
var temp__5457__auto___12162__$1 = cljs.core.seq.call(null,seq__12030_12151);
if(temp__5457__auto___12162__$1){
var seq__12030_12163__$1 = temp__5457__auto___12162__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12030_12163__$1)){
var c__9605__auto___12164 = cljs.core.chunk_first.call(null,seq__12030_12163__$1);
var G__12165 = cljs.core.chunk_rest.call(null,seq__12030_12163__$1);
var G__12166 = c__9605__auto___12164;
var G__12167 = cljs.core.count.call(null,c__9605__auto___12164);
var G__12168 = (0);
seq__12030_12151 = G__12165;
chunk__12031_12152 = G__12166;
count__12032_12153 = G__12167;
i__12033_12154 = G__12168;
continue;
} else {
var vec__12037_12169 = cljs.core.first.call(null,seq__12030_12163__$1);
var col_12170 = cljs.core.nth.call(null,vec__12037_12169,(0),null);
var infos_12171 = cljs.core.nth.call(null,vec__12037_12169,(1),null);
encode_cols.call(null,infos_12171,source_idx_12101,line_12149,col_12170);

var G__12172 = cljs.core.next.call(null,seq__12030_12163__$1);
var G__12173 = null;
var G__12174 = (0);
var G__12175 = (0);
seq__12030_12151 = G__12172;
chunk__12031_12152 = G__12173;
count__12032_12153 = G__12174;
i__12033_12154 = G__12175;
continue;
}
} else {
}
}
break;
}

var G__12176 = cljs.core.next.call(null,seq__12010_12142__$1);
var G__12177 = null;
var G__12178 = (0);
var G__12179 = (0);
seq__12010_12105 = G__12176;
chunk__12011_12106 = G__12177;
count__12012_12107 = G__12178;
i__12013_12108 = G__12179;
continue;
}
} else {
}
}
break;
}

var G__12180 = seq__12000_12096;
var G__12181 = chunk__12001_12097;
var G__12182 = count__12002_12098;
var G__12183 = (i__12003_12099 + (1));
seq__12000_12096 = G__12180;
chunk__12001_12097 = G__12181;
count__12002_12098 = G__12182;
i__12003_12099 = G__12183;
continue;
} else {
var temp__5457__auto___12184 = cljs.core.seq.call(null,seq__12000_12096);
if(temp__5457__auto___12184){
var seq__12000_12185__$1 = temp__5457__auto___12184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12000_12185__$1)){
var c__9605__auto___12186 = cljs.core.chunk_first.call(null,seq__12000_12185__$1);
var G__12187 = cljs.core.chunk_rest.call(null,seq__12000_12185__$1);
var G__12188 = c__9605__auto___12186;
var G__12189 = cljs.core.count.call(null,c__9605__auto___12186);
var G__12190 = (0);
seq__12000_12096 = G__12187;
chunk__12001_12097 = G__12188;
count__12002_12098 = G__12189;
i__12003_12099 = G__12190;
continue;
} else {
var vec__12040_12191 = cljs.core.first.call(null,seq__12000_12185__$1);
var source_idx_12192 = cljs.core.nth.call(null,vec__12040_12191,(0),null);
var vec__12043_12193 = cljs.core.nth.call(null,vec__12040_12191,(1),null);
var __12194 = cljs.core.nth.call(null,vec__12043_12193,(0),null);
var lines_12195__$1 = cljs.core.nth.call(null,vec__12043_12193,(1),null);
var seq__12046_12196 = cljs.core.seq.call(null,lines_12195__$1);
var chunk__12047_12197 = null;
var count__12048_12198 = (0);
var i__12049_12199 = (0);
while(true){
if((i__12049_12199 < count__12048_12198)){
var vec__12050_12200 = cljs.core._nth.call(null,chunk__12047_12197,i__12049_12199);
var line_12201 = cljs.core.nth.call(null,vec__12050_12200,(0),null);
var cols_12202 = cljs.core.nth.call(null,vec__12050_12200,(1),null);
var seq__12053_12203 = cljs.core.seq.call(null,cols_12202);
var chunk__12054_12204 = null;
var count__12055_12205 = (0);
var i__12056_12206 = (0);
while(true){
if((i__12056_12206 < count__12055_12205)){
var vec__12057_12207 = cljs.core._nth.call(null,chunk__12054_12204,i__12056_12206);
var col_12208 = cljs.core.nth.call(null,vec__12057_12207,(0),null);
var infos_12209 = cljs.core.nth.call(null,vec__12057_12207,(1),null);
encode_cols.call(null,infos_12209,source_idx_12192,line_12201,col_12208);

var G__12210 = seq__12053_12203;
var G__12211 = chunk__12054_12204;
var G__12212 = count__12055_12205;
var G__12213 = (i__12056_12206 + (1));
seq__12053_12203 = G__12210;
chunk__12054_12204 = G__12211;
count__12055_12205 = G__12212;
i__12056_12206 = G__12213;
continue;
} else {
var temp__5457__auto___12214__$1 = cljs.core.seq.call(null,seq__12053_12203);
if(temp__5457__auto___12214__$1){
var seq__12053_12215__$1 = temp__5457__auto___12214__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12053_12215__$1)){
var c__9605__auto___12216 = cljs.core.chunk_first.call(null,seq__12053_12215__$1);
var G__12217 = cljs.core.chunk_rest.call(null,seq__12053_12215__$1);
var G__12218 = c__9605__auto___12216;
var G__12219 = cljs.core.count.call(null,c__9605__auto___12216);
var G__12220 = (0);
seq__12053_12203 = G__12217;
chunk__12054_12204 = G__12218;
count__12055_12205 = G__12219;
i__12056_12206 = G__12220;
continue;
} else {
var vec__12060_12221 = cljs.core.first.call(null,seq__12053_12215__$1);
var col_12222 = cljs.core.nth.call(null,vec__12060_12221,(0),null);
var infos_12223 = cljs.core.nth.call(null,vec__12060_12221,(1),null);
encode_cols.call(null,infos_12223,source_idx_12192,line_12201,col_12222);

var G__12224 = cljs.core.next.call(null,seq__12053_12215__$1);
var G__12225 = null;
var G__12226 = (0);
var G__12227 = (0);
seq__12053_12203 = G__12224;
chunk__12054_12204 = G__12225;
count__12055_12205 = G__12226;
i__12056_12206 = G__12227;
continue;
}
} else {
}
}
break;
}

var G__12228 = seq__12046_12196;
var G__12229 = chunk__12047_12197;
var G__12230 = count__12048_12198;
var G__12231 = (i__12049_12199 + (1));
seq__12046_12196 = G__12228;
chunk__12047_12197 = G__12229;
count__12048_12198 = G__12230;
i__12049_12199 = G__12231;
continue;
} else {
var temp__5457__auto___12232__$1 = cljs.core.seq.call(null,seq__12046_12196);
if(temp__5457__auto___12232__$1){
var seq__12046_12233__$1 = temp__5457__auto___12232__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12046_12233__$1)){
var c__9605__auto___12234 = cljs.core.chunk_first.call(null,seq__12046_12233__$1);
var G__12235 = cljs.core.chunk_rest.call(null,seq__12046_12233__$1);
var G__12236 = c__9605__auto___12234;
var G__12237 = cljs.core.count.call(null,c__9605__auto___12234);
var G__12238 = (0);
seq__12046_12196 = G__12235;
chunk__12047_12197 = G__12236;
count__12048_12198 = G__12237;
i__12049_12199 = G__12238;
continue;
} else {
var vec__12063_12239 = cljs.core.first.call(null,seq__12046_12233__$1);
var line_12240 = cljs.core.nth.call(null,vec__12063_12239,(0),null);
var cols_12241 = cljs.core.nth.call(null,vec__12063_12239,(1),null);
var seq__12066_12242 = cljs.core.seq.call(null,cols_12241);
var chunk__12067_12243 = null;
var count__12068_12244 = (0);
var i__12069_12245 = (0);
while(true){
if((i__12069_12245 < count__12068_12244)){
var vec__12070_12246 = cljs.core._nth.call(null,chunk__12067_12243,i__12069_12245);
var col_12247 = cljs.core.nth.call(null,vec__12070_12246,(0),null);
var infos_12248 = cljs.core.nth.call(null,vec__12070_12246,(1),null);
encode_cols.call(null,infos_12248,source_idx_12192,line_12240,col_12247);

var G__12249 = seq__12066_12242;
var G__12250 = chunk__12067_12243;
var G__12251 = count__12068_12244;
var G__12252 = (i__12069_12245 + (1));
seq__12066_12242 = G__12249;
chunk__12067_12243 = G__12250;
count__12068_12244 = G__12251;
i__12069_12245 = G__12252;
continue;
} else {
var temp__5457__auto___12253__$2 = cljs.core.seq.call(null,seq__12066_12242);
if(temp__5457__auto___12253__$2){
var seq__12066_12254__$1 = temp__5457__auto___12253__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12066_12254__$1)){
var c__9605__auto___12255 = cljs.core.chunk_first.call(null,seq__12066_12254__$1);
var G__12256 = cljs.core.chunk_rest.call(null,seq__12066_12254__$1);
var G__12257 = c__9605__auto___12255;
var G__12258 = cljs.core.count.call(null,c__9605__auto___12255);
var G__12259 = (0);
seq__12066_12242 = G__12256;
chunk__12067_12243 = G__12257;
count__12068_12244 = G__12258;
i__12069_12245 = G__12259;
continue;
} else {
var vec__12073_12260 = cljs.core.first.call(null,seq__12066_12254__$1);
var col_12261 = cljs.core.nth.call(null,vec__12073_12260,(0),null);
var infos_12262 = cljs.core.nth.call(null,vec__12073_12260,(1),null);
encode_cols.call(null,infos_12262,source_idx_12192,line_12240,col_12261);

var G__12263 = cljs.core.next.call(null,seq__12066_12254__$1);
var G__12264 = null;
var G__12265 = (0);
var G__12266 = (0);
seq__12066_12242 = G__12263;
chunk__12067_12243 = G__12264;
count__12068_12244 = G__12265;
i__12069_12245 = G__12266;
continue;
}
} else {
}
}
break;
}

var G__12267 = cljs.core.next.call(null,seq__12046_12233__$1);
var G__12268 = null;
var G__12269 = (0);
var G__12270 = (0);
seq__12046_12196 = G__12267;
chunk__12047_12197 = G__12268;
count__12048_12198 = G__12269;
i__12049_12199 = G__12270;
continue;
}
} else {
}
}
break;
}

var G__12271 = cljs.core.next.call(null,seq__12000_12185__$1);
var G__12272 = null;
var G__12273 = (0);
var G__12274 = (0);
seq__12000_12096 = G__12271;
chunk__12001_12097 = G__12272;
count__12002_12098 = G__12273;
i__12003_12099 = G__12274;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12076 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11993_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11993_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11994_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11994_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11995_SHARP_){
return clojure.string.join.call(null,",",p1__11995_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12077 = G__12076;
goog.object.set(G__12077,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12077;
} else {
return G__12076;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__12275 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12275,(0),null);
var col_map = cljs.core.nth.call(null,vec__12275,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12278 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12278,(0),null);
var infos = cljs.core.nth.call(null,vec__12278,(1),null);
var G__12284 = cljs.core.next.call(null,col_map_seq);
var G__12285 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12278,col,infos,vec__12275,line,col_map){
return (function (v,p__12281){
var map__12282 = p__12281;
var map__12282__$1 = ((((!((map__12282 == null)))?((((map__12282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12282):map__12282);
var gline = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12278,col,infos,vec__12275,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12284;
new_cols = G__12285;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12286 = cljs.core.next.call(null,line_map_seq);
var G__12287 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12286;
new_lines = G__12287;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__12288_12350 = cljs.core.seq.call(null,reverse_map);
var chunk__12289_12351 = null;
var count__12290_12352 = (0);
var i__12291_12353 = (0);
while(true){
if((i__12291_12353 < count__12290_12352)){
var vec__12292_12354 = cljs.core._nth.call(null,chunk__12289_12351,i__12291_12353);
var line_12355 = cljs.core.nth.call(null,vec__12292_12354,(0),null);
var columns_12356 = cljs.core.nth.call(null,vec__12292_12354,(1),null);
var seq__12295_12357 = cljs.core.seq.call(null,columns_12356);
var chunk__12296_12358 = null;
var count__12297_12359 = (0);
var i__12298_12360 = (0);
while(true){
if((i__12298_12360 < count__12297_12359)){
var vec__12299_12361 = cljs.core._nth.call(null,chunk__12296_12358,i__12298_12360);
var column_12362 = cljs.core.nth.call(null,vec__12299_12361,(0),null);
var column_info_12363 = cljs.core.nth.call(null,vec__12299_12361,(1),null);
var seq__12302_12364 = cljs.core.seq.call(null,column_info_12363);
var chunk__12303_12365 = null;
var count__12304_12366 = (0);
var i__12305_12367 = (0);
while(true){
if((i__12305_12367 < count__12304_12366)){
var map__12306_12368 = cljs.core._nth.call(null,chunk__12303_12365,i__12305_12367);
var map__12306_12369__$1 = ((((!((map__12306_12368 == null)))?((((map__12306_12368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12306_12368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12306_12368):map__12306_12368);
var gline_12370 = cljs.core.get.call(null,map__12306_12369__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12371 = cljs.core.get.call(null,map__12306_12369__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12372 = cljs.core.get.call(null,map__12306_12369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12370], null),cljs.core.fnil.call(null,((function (seq__12302_12364,chunk__12303_12365,count__12304_12366,i__12305_12367,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12306_12368,map__12306_12369__$1,gline_12370,gcol_12371,name_12372,vec__12299_12361,column_12362,column_info_12363,vec__12292_12354,line_12355,columns_12356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12371], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12355,new cljs.core.Keyword(null,"col","col",-1959363084),column_12362,new cljs.core.Keyword(null,"name","name",1843675177),name_12372], null));
});})(seq__12302_12364,chunk__12303_12365,count__12304_12366,i__12305_12367,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12306_12368,map__12306_12369__$1,gline_12370,gcol_12371,name_12372,vec__12299_12361,column_12362,column_info_12363,vec__12292_12354,line_12355,columns_12356,inverted))
,cljs.core.sorted_map.call(null)));

var G__12373 = seq__12302_12364;
var G__12374 = chunk__12303_12365;
var G__12375 = count__12304_12366;
var G__12376 = (i__12305_12367 + (1));
seq__12302_12364 = G__12373;
chunk__12303_12365 = G__12374;
count__12304_12366 = G__12375;
i__12305_12367 = G__12376;
continue;
} else {
var temp__5457__auto___12377 = cljs.core.seq.call(null,seq__12302_12364);
if(temp__5457__auto___12377){
var seq__12302_12378__$1 = temp__5457__auto___12377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12302_12378__$1)){
var c__9605__auto___12379 = cljs.core.chunk_first.call(null,seq__12302_12378__$1);
var G__12380 = cljs.core.chunk_rest.call(null,seq__12302_12378__$1);
var G__12381 = c__9605__auto___12379;
var G__12382 = cljs.core.count.call(null,c__9605__auto___12379);
var G__12383 = (0);
seq__12302_12364 = G__12380;
chunk__12303_12365 = G__12381;
count__12304_12366 = G__12382;
i__12305_12367 = G__12383;
continue;
} else {
var map__12308_12384 = cljs.core.first.call(null,seq__12302_12378__$1);
var map__12308_12385__$1 = ((((!((map__12308_12384 == null)))?((((map__12308_12384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12308_12384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12308_12384):map__12308_12384);
var gline_12386 = cljs.core.get.call(null,map__12308_12385__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12387 = cljs.core.get.call(null,map__12308_12385__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12388 = cljs.core.get.call(null,map__12308_12385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12386], null),cljs.core.fnil.call(null,((function (seq__12302_12364,chunk__12303_12365,count__12304_12366,i__12305_12367,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12308_12384,map__12308_12385__$1,gline_12386,gcol_12387,name_12388,seq__12302_12378__$1,temp__5457__auto___12377,vec__12299_12361,column_12362,column_info_12363,vec__12292_12354,line_12355,columns_12356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12387], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12355,new cljs.core.Keyword(null,"col","col",-1959363084),column_12362,new cljs.core.Keyword(null,"name","name",1843675177),name_12388], null));
});})(seq__12302_12364,chunk__12303_12365,count__12304_12366,i__12305_12367,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12308_12384,map__12308_12385__$1,gline_12386,gcol_12387,name_12388,seq__12302_12378__$1,temp__5457__auto___12377,vec__12299_12361,column_12362,column_info_12363,vec__12292_12354,line_12355,columns_12356,inverted))
,cljs.core.sorted_map.call(null)));

var G__12389 = cljs.core.next.call(null,seq__12302_12378__$1);
var G__12390 = null;
var G__12391 = (0);
var G__12392 = (0);
seq__12302_12364 = G__12389;
chunk__12303_12365 = G__12390;
count__12304_12366 = G__12391;
i__12305_12367 = G__12392;
continue;
}
} else {
}
}
break;
}

var G__12393 = seq__12295_12357;
var G__12394 = chunk__12296_12358;
var G__12395 = count__12297_12359;
var G__12396 = (i__12298_12360 + (1));
seq__12295_12357 = G__12393;
chunk__12296_12358 = G__12394;
count__12297_12359 = G__12395;
i__12298_12360 = G__12396;
continue;
} else {
var temp__5457__auto___12397 = cljs.core.seq.call(null,seq__12295_12357);
if(temp__5457__auto___12397){
var seq__12295_12398__$1 = temp__5457__auto___12397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12295_12398__$1)){
var c__9605__auto___12399 = cljs.core.chunk_first.call(null,seq__12295_12398__$1);
var G__12400 = cljs.core.chunk_rest.call(null,seq__12295_12398__$1);
var G__12401 = c__9605__auto___12399;
var G__12402 = cljs.core.count.call(null,c__9605__auto___12399);
var G__12403 = (0);
seq__12295_12357 = G__12400;
chunk__12296_12358 = G__12401;
count__12297_12359 = G__12402;
i__12298_12360 = G__12403;
continue;
} else {
var vec__12310_12404 = cljs.core.first.call(null,seq__12295_12398__$1);
var column_12405 = cljs.core.nth.call(null,vec__12310_12404,(0),null);
var column_info_12406 = cljs.core.nth.call(null,vec__12310_12404,(1),null);
var seq__12313_12407 = cljs.core.seq.call(null,column_info_12406);
var chunk__12314_12408 = null;
var count__12315_12409 = (0);
var i__12316_12410 = (0);
while(true){
if((i__12316_12410 < count__12315_12409)){
var map__12317_12411 = cljs.core._nth.call(null,chunk__12314_12408,i__12316_12410);
var map__12317_12412__$1 = ((((!((map__12317_12411 == null)))?((((map__12317_12411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12317_12411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12317_12411):map__12317_12411);
var gline_12413 = cljs.core.get.call(null,map__12317_12412__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12414 = cljs.core.get.call(null,map__12317_12412__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12415 = cljs.core.get.call(null,map__12317_12412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12413], null),cljs.core.fnil.call(null,((function (seq__12313_12407,chunk__12314_12408,count__12315_12409,i__12316_12410,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12317_12411,map__12317_12412__$1,gline_12413,gcol_12414,name_12415,vec__12310_12404,column_12405,column_info_12406,seq__12295_12398__$1,temp__5457__auto___12397,vec__12292_12354,line_12355,columns_12356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12414], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12355,new cljs.core.Keyword(null,"col","col",-1959363084),column_12405,new cljs.core.Keyword(null,"name","name",1843675177),name_12415], null));
});})(seq__12313_12407,chunk__12314_12408,count__12315_12409,i__12316_12410,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12317_12411,map__12317_12412__$1,gline_12413,gcol_12414,name_12415,vec__12310_12404,column_12405,column_info_12406,seq__12295_12398__$1,temp__5457__auto___12397,vec__12292_12354,line_12355,columns_12356,inverted))
,cljs.core.sorted_map.call(null)));

var G__12416 = seq__12313_12407;
var G__12417 = chunk__12314_12408;
var G__12418 = count__12315_12409;
var G__12419 = (i__12316_12410 + (1));
seq__12313_12407 = G__12416;
chunk__12314_12408 = G__12417;
count__12315_12409 = G__12418;
i__12316_12410 = G__12419;
continue;
} else {
var temp__5457__auto___12420__$1 = cljs.core.seq.call(null,seq__12313_12407);
if(temp__5457__auto___12420__$1){
var seq__12313_12421__$1 = temp__5457__auto___12420__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12313_12421__$1)){
var c__9605__auto___12422 = cljs.core.chunk_first.call(null,seq__12313_12421__$1);
var G__12423 = cljs.core.chunk_rest.call(null,seq__12313_12421__$1);
var G__12424 = c__9605__auto___12422;
var G__12425 = cljs.core.count.call(null,c__9605__auto___12422);
var G__12426 = (0);
seq__12313_12407 = G__12423;
chunk__12314_12408 = G__12424;
count__12315_12409 = G__12425;
i__12316_12410 = G__12426;
continue;
} else {
var map__12319_12427 = cljs.core.first.call(null,seq__12313_12421__$1);
var map__12319_12428__$1 = ((((!((map__12319_12427 == null)))?((((map__12319_12427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12319_12427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12319_12427):map__12319_12427);
var gline_12429 = cljs.core.get.call(null,map__12319_12428__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12430 = cljs.core.get.call(null,map__12319_12428__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12431 = cljs.core.get.call(null,map__12319_12428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12429], null),cljs.core.fnil.call(null,((function (seq__12313_12407,chunk__12314_12408,count__12315_12409,i__12316_12410,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12319_12427,map__12319_12428__$1,gline_12429,gcol_12430,name_12431,seq__12313_12421__$1,temp__5457__auto___12420__$1,vec__12310_12404,column_12405,column_info_12406,seq__12295_12398__$1,temp__5457__auto___12397,vec__12292_12354,line_12355,columns_12356,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12430], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12355,new cljs.core.Keyword(null,"col","col",-1959363084),column_12405,new cljs.core.Keyword(null,"name","name",1843675177),name_12431], null));
});})(seq__12313_12407,chunk__12314_12408,count__12315_12409,i__12316_12410,seq__12295_12357,chunk__12296_12358,count__12297_12359,i__12298_12360,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12319_12427,map__12319_12428__$1,gline_12429,gcol_12430,name_12431,seq__12313_12421__$1,temp__5457__auto___12420__$1,vec__12310_12404,column_12405,column_info_12406,seq__12295_12398__$1,temp__5457__auto___12397,vec__12292_12354,line_12355,columns_12356,inverted))
,cljs.core.sorted_map.call(null)));

var G__12432 = cljs.core.next.call(null,seq__12313_12421__$1);
var G__12433 = null;
var G__12434 = (0);
var G__12435 = (0);
seq__12313_12407 = G__12432;
chunk__12314_12408 = G__12433;
count__12315_12409 = G__12434;
i__12316_12410 = G__12435;
continue;
}
} else {
}
}
break;
}

var G__12436 = cljs.core.next.call(null,seq__12295_12398__$1);
var G__12437 = null;
var G__12438 = (0);
var G__12439 = (0);
seq__12295_12357 = G__12436;
chunk__12296_12358 = G__12437;
count__12297_12359 = G__12438;
i__12298_12360 = G__12439;
continue;
}
} else {
}
}
break;
}

var G__12440 = seq__12288_12350;
var G__12441 = chunk__12289_12351;
var G__12442 = count__12290_12352;
var G__12443 = (i__12291_12353 + (1));
seq__12288_12350 = G__12440;
chunk__12289_12351 = G__12441;
count__12290_12352 = G__12442;
i__12291_12353 = G__12443;
continue;
} else {
var temp__5457__auto___12444 = cljs.core.seq.call(null,seq__12288_12350);
if(temp__5457__auto___12444){
var seq__12288_12445__$1 = temp__5457__auto___12444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12288_12445__$1)){
var c__9605__auto___12446 = cljs.core.chunk_first.call(null,seq__12288_12445__$1);
var G__12447 = cljs.core.chunk_rest.call(null,seq__12288_12445__$1);
var G__12448 = c__9605__auto___12446;
var G__12449 = cljs.core.count.call(null,c__9605__auto___12446);
var G__12450 = (0);
seq__12288_12350 = G__12447;
chunk__12289_12351 = G__12448;
count__12290_12352 = G__12449;
i__12291_12353 = G__12450;
continue;
} else {
var vec__12321_12451 = cljs.core.first.call(null,seq__12288_12445__$1);
var line_12452 = cljs.core.nth.call(null,vec__12321_12451,(0),null);
var columns_12453 = cljs.core.nth.call(null,vec__12321_12451,(1),null);
var seq__12324_12454 = cljs.core.seq.call(null,columns_12453);
var chunk__12325_12455 = null;
var count__12326_12456 = (0);
var i__12327_12457 = (0);
while(true){
if((i__12327_12457 < count__12326_12456)){
var vec__12328_12458 = cljs.core._nth.call(null,chunk__12325_12455,i__12327_12457);
var column_12459 = cljs.core.nth.call(null,vec__12328_12458,(0),null);
var column_info_12460 = cljs.core.nth.call(null,vec__12328_12458,(1),null);
var seq__12331_12461 = cljs.core.seq.call(null,column_info_12460);
var chunk__12332_12462 = null;
var count__12333_12463 = (0);
var i__12334_12464 = (0);
while(true){
if((i__12334_12464 < count__12333_12463)){
var map__12335_12465 = cljs.core._nth.call(null,chunk__12332_12462,i__12334_12464);
var map__12335_12466__$1 = ((((!((map__12335_12465 == null)))?((((map__12335_12465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12335_12465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12335_12465):map__12335_12465);
var gline_12467 = cljs.core.get.call(null,map__12335_12466__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12468 = cljs.core.get.call(null,map__12335_12466__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12469 = cljs.core.get.call(null,map__12335_12466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12467], null),cljs.core.fnil.call(null,((function (seq__12331_12461,chunk__12332_12462,count__12333_12463,i__12334_12464,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12335_12465,map__12335_12466__$1,gline_12467,gcol_12468,name_12469,vec__12328_12458,column_12459,column_info_12460,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12468], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12452,new cljs.core.Keyword(null,"col","col",-1959363084),column_12459,new cljs.core.Keyword(null,"name","name",1843675177),name_12469], null));
});})(seq__12331_12461,chunk__12332_12462,count__12333_12463,i__12334_12464,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12335_12465,map__12335_12466__$1,gline_12467,gcol_12468,name_12469,vec__12328_12458,column_12459,column_info_12460,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted))
,cljs.core.sorted_map.call(null)));

var G__12470 = seq__12331_12461;
var G__12471 = chunk__12332_12462;
var G__12472 = count__12333_12463;
var G__12473 = (i__12334_12464 + (1));
seq__12331_12461 = G__12470;
chunk__12332_12462 = G__12471;
count__12333_12463 = G__12472;
i__12334_12464 = G__12473;
continue;
} else {
var temp__5457__auto___12474__$1 = cljs.core.seq.call(null,seq__12331_12461);
if(temp__5457__auto___12474__$1){
var seq__12331_12475__$1 = temp__5457__auto___12474__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12331_12475__$1)){
var c__9605__auto___12476 = cljs.core.chunk_first.call(null,seq__12331_12475__$1);
var G__12477 = cljs.core.chunk_rest.call(null,seq__12331_12475__$1);
var G__12478 = c__9605__auto___12476;
var G__12479 = cljs.core.count.call(null,c__9605__auto___12476);
var G__12480 = (0);
seq__12331_12461 = G__12477;
chunk__12332_12462 = G__12478;
count__12333_12463 = G__12479;
i__12334_12464 = G__12480;
continue;
} else {
var map__12337_12481 = cljs.core.first.call(null,seq__12331_12475__$1);
var map__12337_12482__$1 = ((((!((map__12337_12481 == null)))?((((map__12337_12481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12337_12481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12337_12481):map__12337_12481);
var gline_12483 = cljs.core.get.call(null,map__12337_12482__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12484 = cljs.core.get.call(null,map__12337_12482__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12485 = cljs.core.get.call(null,map__12337_12482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12483], null),cljs.core.fnil.call(null,((function (seq__12331_12461,chunk__12332_12462,count__12333_12463,i__12334_12464,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12337_12481,map__12337_12482__$1,gline_12483,gcol_12484,name_12485,seq__12331_12475__$1,temp__5457__auto___12474__$1,vec__12328_12458,column_12459,column_info_12460,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12484], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12452,new cljs.core.Keyword(null,"col","col",-1959363084),column_12459,new cljs.core.Keyword(null,"name","name",1843675177),name_12485], null));
});})(seq__12331_12461,chunk__12332_12462,count__12333_12463,i__12334_12464,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12337_12481,map__12337_12482__$1,gline_12483,gcol_12484,name_12485,seq__12331_12475__$1,temp__5457__auto___12474__$1,vec__12328_12458,column_12459,column_info_12460,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted))
,cljs.core.sorted_map.call(null)));

var G__12486 = cljs.core.next.call(null,seq__12331_12475__$1);
var G__12487 = null;
var G__12488 = (0);
var G__12489 = (0);
seq__12331_12461 = G__12486;
chunk__12332_12462 = G__12487;
count__12333_12463 = G__12488;
i__12334_12464 = G__12489;
continue;
}
} else {
}
}
break;
}

var G__12490 = seq__12324_12454;
var G__12491 = chunk__12325_12455;
var G__12492 = count__12326_12456;
var G__12493 = (i__12327_12457 + (1));
seq__12324_12454 = G__12490;
chunk__12325_12455 = G__12491;
count__12326_12456 = G__12492;
i__12327_12457 = G__12493;
continue;
} else {
var temp__5457__auto___12494__$1 = cljs.core.seq.call(null,seq__12324_12454);
if(temp__5457__auto___12494__$1){
var seq__12324_12495__$1 = temp__5457__auto___12494__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12324_12495__$1)){
var c__9605__auto___12496 = cljs.core.chunk_first.call(null,seq__12324_12495__$1);
var G__12497 = cljs.core.chunk_rest.call(null,seq__12324_12495__$1);
var G__12498 = c__9605__auto___12496;
var G__12499 = cljs.core.count.call(null,c__9605__auto___12496);
var G__12500 = (0);
seq__12324_12454 = G__12497;
chunk__12325_12455 = G__12498;
count__12326_12456 = G__12499;
i__12327_12457 = G__12500;
continue;
} else {
var vec__12339_12501 = cljs.core.first.call(null,seq__12324_12495__$1);
var column_12502 = cljs.core.nth.call(null,vec__12339_12501,(0),null);
var column_info_12503 = cljs.core.nth.call(null,vec__12339_12501,(1),null);
var seq__12342_12504 = cljs.core.seq.call(null,column_info_12503);
var chunk__12343_12505 = null;
var count__12344_12506 = (0);
var i__12345_12507 = (0);
while(true){
if((i__12345_12507 < count__12344_12506)){
var map__12346_12508 = cljs.core._nth.call(null,chunk__12343_12505,i__12345_12507);
var map__12346_12509__$1 = ((((!((map__12346_12508 == null)))?((((map__12346_12508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12346_12508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12346_12508):map__12346_12508);
var gline_12510 = cljs.core.get.call(null,map__12346_12509__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12511 = cljs.core.get.call(null,map__12346_12509__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12512 = cljs.core.get.call(null,map__12346_12509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12510], null),cljs.core.fnil.call(null,((function (seq__12342_12504,chunk__12343_12505,count__12344_12506,i__12345_12507,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12346_12508,map__12346_12509__$1,gline_12510,gcol_12511,name_12512,vec__12339_12501,column_12502,column_info_12503,seq__12324_12495__$1,temp__5457__auto___12494__$1,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12511], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12452,new cljs.core.Keyword(null,"col","col",-1959363084),column_12502,new cljs.core.Keyword(null,"name","name",1843675177),name_12512], null));
});})(seq__12342_12504,chunk__12343_12505,count__12344_12506,i__12345_12507,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12346_12508,map__12346_12509__$1,gline_12510,gcol_12511,name_12512,vec__12339_12501,column_12502,column_info_12503,seq__12324_12495__$1,temp__5457__auto___12494__$1,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted))
,cljs.core.sorted_map.call(null)));

var G__12513 = seq__12342_12504;
var G__12514 = chunk__12343_12505;
var G__12515 = count__12344_12506;
var G__12516 = (i__12345_12507 + (1));
seq__12342_12504 = G__12513;
chunk__12343_12505 = G__12514;
count__12344_12506 = G__12515;
i__12345_12507 = G__12516;
continue;
} else {
var temp__5457__auto___12517__$2 = cljs.core.seq.call(null,seq__12342_12504);
if(temp__5457__auto___12517__$2){
var seq__12342_12518__$1 = temp__5457__auto___12517__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12342_12518__$1)){
var c__9605__auto___12519 = cljs.core.chunk_first.call(null,seq__12342_12518__$1);
var G__12520 = cljs.core.chunk_rest.call(null,seq__12342_12518__$1);
var G__12521 = c__9605__auto___12519;
var G__12522 = cljs.core.count.call(null,c__9605__auto___12519);
var G__12523 = (0);
seq__12342_12504 = G__12520;
chunk__12343_12505 = G__12521;
count__12344_12506 = G__12522;
i__12345_12507 = G__12523;
continue;
} else {
var map__12348_12524 = cljs.core.first.call(null,seq__12342_12518__$1);
var map__12348_12525__$1 = ((((!((map__12348_12524 == null)))?((((map__12348_12524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12348_12524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12348_12524):map__12348_12524);
var gline_12526 = cljs.core.get.call(null,map__12348_12525__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12527 = cljs.core.get.call(null,map__12348_12525__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12528 = cljs.core.get.call(null,map__12348_12525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12526], null),cljs.core.fnil.call(null,((function (seq__12342_12504,chunk__12343_12505,count__12344_12506,i__12345_12507,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12348_12524,map__12348_12525__$1,gline_12526,gcol_12527,name_12528,seq__12342_12518__$1,temp__5457__auto___12517__$2,vec__12339_12501,column_12502,column_info_12503,seq__12324_12495__$1,temp__5457__auto___12494__$1,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12527], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12452,new cljs.core.Keyword(null,"col","col",-1959363084),column_12502,new cljs.core.Keyword(null,"name","name",1843675177),name_12528], null));
});})(seq__12342_12504,chunk__12343_12505,count__12344_12506,i__12345_12507,seq__12324_12454,chunk__12325_12455,count__12326_12456,i__12327_12457,seq__12288_12350,chunk__12289_12351,count__12290_12352,i__12291_12353,map__12348_12524,map__12348_12525__$1,gline_12526,gcol_12527,name_12528,seq__12342_12518__$1,temp__5457__auto___12517__$2,vec__12339_12501,column_12502,column_info_12503,seq__12324_12495__$1,temp__5457__auto___12494__$1,vec__12321_12451,line_12452,columns_12453,seq__12288_12445__$1,temp__5457__auto___12444,inverted))
,cljs.core.sorted_map.call(null)));

var G__12529 = cljs.core.next.call(null,seq__12342_12518__$1);
var G__12530 = null;
var G__12531 = (0);
var G__12532 = (0);
seq__12342_12504 = G__12529;
chunk__12343_12505 = G__12530;
count__12344_12506 = G__12531;
i__12345_12507 = G__12532;
continue;
}
} else {
}
}
break;
}

var G__12533 = cljs.core.next.call(null,seq__12324_12495__$1);
var G__12534 = null;
var G__12535 = (0);
var G__12536 = (0);
seq__12324_12454 = G__12533;
chunk__12325_12455 = G__12534;
count__12326_12456 = G__12535;
i__12327_12457 = G__12536;
continue;
}
} else {
}
}
break;
}

var G__12537 = cljs.core.next.call(null,seq__12288_12445__$1);
var G__12538 = null;
var G__12539 = (0);
var G__12540 = (0);
seq__12288_12350 = G__12537;
chunk__12289_12351 = G__12538;
count__12290_12352 = G__12539;
i__12291_12353 = G__12540;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
