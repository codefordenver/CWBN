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
return cljs.core.reduce.call(null,(function (m,p__12373){
var vec__12374 = p__12373;
var i = cljs.core.nth.call(null,vec__12374,(0),null);
var v = cljs.core.nth.call(null,vec__12374,(1),null);
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
var vec__12377 = seg;
var gcol = cljs.core.nth.call(null,vec__12377,(0),null);
var source = cljs.core.nth.call(null,vec__12377,(1),null);
var line = cljs.core.nth.call(null,vec__12377,(2),null);
var col = cljs.core.nth.call(null,vec__12377,(3),null);
var name = cljs.core.nth.call(null,vec__12377,(4),null);
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
var vec__12380 = seg;
var gcol = cljs.core.nth.call(null,vec__12380,(0),null);
var source = cljs.core.nth.call(null,vec__12380,(1),null);
var line = cljs.core.nth.call(null,vec__12380,(2),null);
var col = cljs.core.nth.call(null,vec__12380,(3),null);
var name = cljs.core.nth.call(null,vec__12380,(4),null);
var vec__12383 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12383,(0),null);
var rsource = cljs.core.nth.call(null,vec__12383,(1),null);
var rline = cljs.core.nth.call(null,vec__12383,(2),null);
var rcol = cljs.core.nth.call(null,vec__12383,(3),null);
var rname = cljs.core.nth.call(null,vec__12383,(4),null);
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
var map__12386 = segmap;
var map__12386__$1 = ((((!((map__12386 == null)))?((((map__12386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12386):map__12386);
var gcol = cljs.core.get.call(null,map__12386__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12386__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12386__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12386__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12386,map__12386__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12386,map__12386__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12386,map__12386__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12386,map__12386__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12386,map__12386__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12386,map__12386__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__12389 = arguments.length;
switch (G__12389) {
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
var vec__12390 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12394 = cljs.core.next.call(null,segs__$1);
var G__12395 = nrelseg;
var G__12396 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12394;
relseg__$1 = G__12395;
result__$1 = G__12396;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12390,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12390,(1),null);
var G__12397 = (gline + (1));
var G__12398 = cljs.core.next.call(null,lines__$1);
var G__12399 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12400 = result__$1;
gline = G__12397;
lines__$1 = G__12398;
relseg = G__12399;
result = G__12400;
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
var map__12402 = segmap;
var map__12402__$1 = ((((!((map__12402 == null)))?((((map__12402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12402):map__12402);
var gcol = cljs.core.get.call(null,map__12402__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12402__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12402__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12402__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12402,map__12402__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12402,map__12402__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12401_SHARP_){
return cljs.core.conj.call(null,p1__12401_SHARP_,d__$1);
});})(map__12402,map__12402__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12402,map__12402__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__12405 = arguments.length;
switch (G__12405) {
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
var vec__12406 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12410 = cljs.core.next.call(null,segs__$1);
var G__12411 = nrelseg;
var G__12412 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12410;
relseg__$1 = G__12411;
result__$1 = G__12412;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12406,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12406,(1),null);
var G__12413 = (gline + (1));
var G__12414 = cljs.core.next.call(null,lines__$1);
var G__12415 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12416 = result__$1;
gline = G__12413;
lines__$1 = G__12414;
relseg = G__12415;
result = G__12416;
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
return (function (p__12417){
var vec__12418 = p__12417;
var _ = cljs.core.nth.call(null,vec__12418,(0),null);
var source = cljs.core.nth.call(null,vec__12418,(1),null);
var line = cljs.core.nth.call(null,vec__12418,(2),null);
var col = cljs.core.nth.call(null,vec__12418,(3),null);
var name = cljs.core.nth.call(null,vec__12418,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12421){
var vec__12422 = p__12421;
var gcol = cljs.core.nth.call(null,vec__12422,(0),null);
var sidx = cljs.core.nth.call(null,vec__12422,(1),null);
var line = cljs.core.nth.call(null,vec__12422,(2),null);
var col = cljs.core.nth.call(null,vec__12422,(3),null);
var name = cljs.core.nth.call(null,vec__12422,(4),null);
var seg = vec__12422;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12422,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12425){
var vec__12426 = p__12425;
var _ = cljs.core.nth.call(null,vec__12426,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12426,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12426,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12426,(3),null);
var lname = cljs.core.nth.call(null,vec__12426,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8674__auto__ = name;
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12422,gcol,sidx,line,col,name,seg,relseg))
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
var seq__12432 = cljs.core.seq.call(null,infos);
var chunk__12433 = null;
var count__12434 = (0);
var i__12435 = (0);
while(true){
if((i__12435 < count__12434)){
var info = cljs.core._nth.call(null,chunk__12433,i__12435);
var segv_12514 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12515 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12516 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12515 > (lc_12516 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12432,chunk__12433,count__12434,i__12435,segv_12514,gline_12515,lc_12516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12515 - (lc_12516 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12514], null));
});})(seq__12432,chunk__12433,count__12434,i__12435,segv_12514,gline_12515,lc_12516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12432,chunk__12433,count__12434,i__12435,segv_12514,gline_12515,lc_12516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12515], null),cljs.core.conj,segv_12514);
});})(seq__12432,chunk__12433,count__12434,i__12435,segv_12514,gline_12515,lc_12516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12517 = seq__12432;
var G__12518 = chunk__12433;
var G__12519 = count__12434;
var G__12520 = (i__12435 + (1));
seq__12432 = G__12517;
chunk__12433 = G__12518;
count__12434 = G__12519;
i__12435 = G__12520;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12432);
if(temp__5457__auto__){
var seq__12432__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12432__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__12432__$1);
var G__12521 = cljs.core.chunk_rest.call(null,seq__12432__$1);
var G__12522 = c__9605__auto__;
var G__12523 = cljs.core.count.call(null,c__9605__auto__);
var G__12524 = (0);
seq__12432 = G__12521;
chunk__12433 = G__12522;
count__12434 = G__12523;
i__12435 = G__12524;
continue;
} else {
var info = cljs.core.first.call(null,seq__12432__$1);
var segv_12525 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12526 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12527 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12526 > (lc_12527 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12432,chunk__12433,count__12434,i__12435,segv_12525,gline_12526,lc_12527,info,seq__12432__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12526 - (lc_12527 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12525], null));
});})(seq__12432,chunk__12433,count__12434,i__12435,segv_12525,gline_12526,lc_12527,info,seq__12432__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12432,chunk__12433,count__12434,i__12435,segv_12525,gline_12526,lc_12527,info,seq__12432__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12526], null),cljs.core.conj,segv_12525);
});})(seq__12432,chunk__12433,count__12434,i__12435,segv_12525,gline_12526,lc_12527,info,seq__12432__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__12528 = cljs.core.next.call(null,seq__12432__$1);
var G__12529 = null;
var G__12530 = (0);
var G__12531 = (0);
seq__12432 = G__12528;
chunk__12433 = G__12529;
count__12434 = G__12530;
i__12435 = G__12531;
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
var seq__12436_12532 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12437_12533 = null;
var count__12438_12534 = (0);
var i__12439_12535 = (0);
while(true){
if((i__12439_12535 < count__12438_12534)){
var vec__12440_12536 = cljs.core._nth.call(null,chunk__12437_12533,i__12439_12535);
var source_idx_12537 = cljs.core.nth.call(null,vec__12440_12536,(0),null);
var vec__12443_12538 = cljs.core.nth.call(null,vec__12440_12536,(1),null);
var __12539 = cljs.core.nth.call(null,vec__12443_12538,(0),null);
var lines_12540__$1 = cljs.core.nth.call(null,vec__12443_12538,(1),null);
var seq__12446_12541 = cljs.core.seq.call(null,lines_12540__$1);
var chunk__12447_12542 = null;
var count__12448_12543 = (0);
var i__12449_12544 = (0);
while(true){
if((i__12449_12544 < count__12448_12543)){
var vec__12450_12545 = cljs.core._nth.call(null,chunk__12447_12542,i__12449_12544);
var line_12546 = cljs.core.nth.call(null,vec__12450_12545,(0),null);
var cols_12547 = cljs.core.nth.call(null,vec__12450_12545,(1),null);
var seq__12453_12548 = cljs.core.seq.call(null,cols_12547);
var chunk__12454_12549 = null;
var count__12455_12550 = (0);
var i__12456_12551 = (0);
while(true){
if((i__12456_12551 < count__12455_12550)){
var vec__12457_12552 = cljs.core._nth.call(null,chunk__12454_12549,i__12456_12551);
var col_12553 = cljs.core.nth.call(null,vec__12457_12552,(0),null);
var infos_12554 = cljs.core.nth.call(null,vec__12457_12552,(1),null);
encode_cols.call(null,infos_12554,source_idx_12537,line_12546,col_12553);

var G__12555 = seq__12453_12548;
var G__12556 = chunk__12454_12549;
var G__12557 = count__12455_12550;
var G__12558 = (i__12456_12551 + (1));
seq__12453_12548 = G__12555;
chunk__12454_12549 = G__12556;
count__12455_12550 = G__12557;
i__12456_12551 = G__12558;
continue;
} else {
var temp__5457__auto___12559 = cljs.core.seq.call(null,seq__12453_12548);
if(temp__5457__auto___12559){
var seq__12453_12560__$1 = temp__5457__auto___12559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12453_12560__$1)){
var c__9605__auto___12561 = cljs.core.chunk_first.call(null,seq__12453_12560__$1);
var G__12562 = cljs.core.chunk_rest.call(null,seq__12453_12560__$1);
var G__12563 = c__9605__auto___12561;
var G__12564 = cljs.core.count.call(null,c__9605__auto___12561);
var G__12565 = (0);
seq__12453_12548 = G__12562;
chunk__12454_12549 = G__12563;
count__12455_12550 = G__12564;
i__12456_12551 = G__12565;
continue;
} else {
var vec__12460_12566 = cljs.core.first.call(null,seq__12453_12560__$1);
var col_12567 = cljs.core.nth.call(null,vec__12460_12566,(0),null);
var infos_12568 = cljs.core.nth.call(null,vec__12460_12566,(1),null);
encode_cols.call(null,infos_12568,source_idx_12537,line_12546,col_12567);

var G__12569 = cljs.core.next.call(null,seq__12453_12560__$1);
var G__12570 = null;
var G__12571 = (0);
var G__12572 = (0);
seq__12453_12548 = G__12569;
chunk__12454_12549 = G__12570;
count__12455_12550 = G__12571;
i__12456_12551 = G__12572;
continue;
}
} else {
}
}
break;
}

var G__12573 = seq__12446_12541;
var G__12574 = chunk__12447_12542;
var G__12575 = count__12448_12543;
var G__12576 = (i__12449_12544 + (1));
seq__12446_12541 = G__12573;
chunk__12447_12542 = G__12574;
count__12448_12543 = G__12575;
i__12449_12544 = G__12576;
continue;
} else {
var temp__5457__auto___12577 = cljs.core.seq.call(null,seq__12446_12541);
if(temp__5457__auto___12577){
var seq__12446_12578__$1 = temp__5457__auto___12577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12446_12578__$1)){
var c__9605__auto___12579 = cljs.core.chunk_first.call(null,seq__12446_12578__$1);
var G__12580 = cljs.core.chunk_rest.call(null,seq__12446_12578__$1);
var G__12581 = c__9605__auto___12579;
var G__12582 = cljs.core.count.call(null,c__9605__auto___12579);
var G__12583 = (0);
seq__12446_12541 = G__12580;
chunk__12447_12542 = G__12581;
count__12448_12543 = G__12582;
i__12449_12544 = G__12583;
continue;
} else {
var vec__12463_12584 = cljs.core.first.call(null,seq__12446_12578__$1);
var line_12585 = cljs.core.nth.call(null,vec__12463_12584,(0),null);
var cols_12586 = cljs.core.nth.call(null,vec__12463_12584,(1),null);
var seq__12466_12587 = cljs.core.seq.call(null,cols_12586);
var chunk__12467_12588 = null;
var count__12468_12589 = (0);
var i__12469_12590 = (0);
while(true){
if((i__12469_12590 < count__12468_12589)){
var vec__12470_12591 = cljs.core._nth.call(null,chunk__12467_12588,i__12469_12590);
var col_12592 = cljs.core.nth.call(null,vec__12470_12591,(0),null);
var infos_12593 = cljs.core.nth.call(null,vec__12470_12591,(1),null);
encode_cols.call(null,infos_12593,source_idx_12537,line_12585,col_12592);

var G__12594 = seq__12466_12587;
var G__12595 = chunk__12467_12588;
var G__12596 = count__12468_12589;
var G__12597 = (i__12469_12590 + (1));
seq__12466_12587 = G__12594;
chunk__12467_12588 = G__12595;
count__12468_12589 = G__12596;
i__12469_12590 = G__12597;
continue;
} else {
var temp__5457__auto___12598__$1 = cljs.core.seq.call(null,seq__12466_12587);
if(temp__5457__auto___12598__$1){
var seq__12466_12599__$1 = temp__5457__auto___12598__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12466_12599__$1)){
var c__9605__auto___12600 = cljs.core.chunk_first.call(null,seq__12466_12599__$1);
var G__12601 = cljs.core.chunk_rest.call(null,seq__12466_12599__$1);
var G__12602 = c__9605__auto___12600;
var G__12603 = cljs.core.count.call(null,c__9605__auto___12600);
var G__12604 = (0);
seq__12466_12587 = G__12601;
chunk__12467_12588 = G__12602;
count__12468_12589 = G__12603;
i__12469_12590 = G__12604;
continue;
} else {
var vec__12473_12605 = cljs.core.first.call(null,seq__12466_12599__$1);
var col_12606 = cljs.core.nth.call(null,vec__12473_12605,(0),null);
var infos_12607 = cljs.core.nth.call(null,vec__12473_12605,(1),null);
encode_cols.call(null,infos_12607,source_idx_12537,line_12585,col_12606);

var G__12608 = cljs.core.next.call(null,seq__12466_12599__$1);
var G__12609 = null;
var G__12610 = (0);
var G__12611 = (0);
seq__12466_12587 = G__12608;
chunk__12467_12588 = G__12609;
count__12468_12589 = G__12610;
i__12469_12590 = G__12611;
continue;
}
} else {
}
}
break;
}

var G__12612 = cljs.core.next.call(null,seq__12446_12578__$1);
var G__12613 = null;
var G__12614 = (0);
var G__12615 = (0);
seq__12446_12541 = G__12612;
chunk__12447_12542 = G__12613;
count__12448_12543 = G__12614;
i__12449_12544 = G__12615;
continue;
}
} else {
}
}
break;
}

var G__12616 = seq__12436_12532;
var G__12617 = chunk__12437_12533;
var G__12618 = count__12438_12534;
var G__12619 = (i__12439_12535 + (1));
seq__12436_12532 = G__12616;
chunk__12437_12533 = G__12617;
count__12438_12534 = G__12618;
i__12439_12535 = G__12619;
continue;
} else {
var temp__5457__auto___12620 = cljs.core.seq.call(null,seq__12436_12532);
if(temp__5457__auto___12620){
var seq__12436_12621__$1 = temp__5457__auto___12620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12436_12621__$1)){
var c__9605__auto___12622 = cljs.core.chunk_first.call(null,seq__12436_12621__$1);
var G__12623 = cljs.core.chunk_rest.call(null,seq__12436_12621__$1);
var G__12624 = c__9605__auto___12622;
var G__12625 = cljs.core.count.call(null,c__9605__auto___12622);
var G__12626 = (0);
seq__12436_12532 = G__12623;
chunk__12437_12533 = G__12624;
count__12438_12534 = G__12625;
i__12439_12535 = G__12626;
continue;
} else {
var vec__12476_12627 = cljs.core.first.call(null,seq__12436_12621__$1);
var source_idx_12628 = cljs.core.nth.call(null,vec__12476_12627,(0),null);
var vec__12479_12629 = cljs.core.nth.call(null,vec__12476_12627,(1),null);
var __12630 = cljs.core.nth.call(null,vec__12479_12629,(0),null);
var lines_12631__$1 = cljs.core.nth.call(null,vec__12479_12629,(1),null);
var seq__12482_12632 = cljs.core.seq.call(null,lines_12631__$1);
var chunk__12483_12633 = null;
var count__12484_12634 = (0);
var i__12485_12635 = (0);
while(true){
if((i__12485_12635 < count__12484_12634)){
var vec__12486_12636 = cljs.core._nth.call(null,chunk__12483_12633,i__12485_12635);
var line_12637 = cljs.core.nth.call(null,vec__12486_12636,(0),null);
var cols_12638 = cljs.core.nth.call(null,vec__12486_12636,(1),null);
var seq__12489_12639 = cljs.core.seq.call(null,cols_12638);
var chunk__12490_12640 = null;
var count__12491_12641 = (0);
var i__12492_12642 = (0);
while(true){
if((i__12492_12642 < count__12491_12641)){
var vec__12493_12643 = cljs.core._nth.call(null,chunk__12490_12640,i__12492_12642);
var col_12644 = cljs.core.nth.call(null,vec__12493_12643,(0),null);
var infos_12645 = cljs.core.nth.call(null,vec__12493_12643,(1),null);
encode_cols.call(null,infos_12645,source_idx_12628,line_12637,col_12644);

var G__12646 = seq__12489_12639;
var G__12647 = chunk__12490_12640;
var G__12648 = count__12491_12641;
var G__12649 = (i__12492_12642 + (1));
seq__12489_12639 = G__12646;
chunk__12490_12640 = G__12647;
count__12491_12641 = G__12648;
i__12492_12642 = G__12649;
continue;
} else {
var temp__5457__auto___12650__$1 = cljs.core.seq.call(null,seq__12489_12639);
if(temp__5457__auto___12650__$1){
var seq__12489_12651__$1 = temp__5457__auto___12650__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12489_12651__$1)){
var c__9605__auto___12652 = cljs.core.chunk_first.call(null,seq__12489_12651__$1);
var G__12653 = cljs.core.chunk_rest.call(null,seq__12489_12651__$1);
var G__12654 = c__9605__auto___12652;
var G__12655 = cljs.core.count.call(null,c__9605__auto___12652);
var G__12656 = (0);
seq__12489_12639 = G__12653;
chunk__12490_12640 = G__12654;
count__12491_12641 = G__12655;
i__12492_12642 = G__12656;
continue;
} else {
var vec__12496_12657 = cljs.core.first.call(null,seq__12489_12651__$1);
var col_12658 = cljs.core.nth.call(null,vec__12496_12657,(0),null);
var infos_12659 = cljs.core.nth.call(null,vec__12496_12657,(1),null);
encode_cols.call(null,infos_12659,source_idx_12628,line_12637,col_12658);

var G__12660 = cljs.core.next.call(null,seq__12489_12651__$1);
var G__12661 = null;
var G__12662 = (0);
var G__12663 = (0);
seq__12489_12639 = G__12660;
chunk__12490_12640 = G__12661;
count__12491_12641 = G__12662;
i__12492_12642 = G__12663;
continue;
}
} else {
}
}
break;
}

var G__12664 = seq__12482_12632;
var G__12665 = chunk__12483_12633;
var G__12666 = count__12484_12634;
var G__12667 = (i__12485_12635 + (1));
seq__12482_12632 = G__12664;
chunk__12483_12633 = G__12665;
count__12484_12634 = G__12666;
i__12485_12635 = G__12667;
continue;
} else {
var temp__5457__auto___12668__$1 = cljs.core.seq.call(null,seq__12482_12632);
if(temp__5457__auto___12668__$1){
var seq__12482_12669__$1 = temp__5457__auto___12668__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12482_12669__$1)){
var c__9605__auto___12670 = cljs.core.chunk_first.call(null,seq__12482_12669__$1);
var G__12671 = cljs.core.chunk_rest.call(null,seq__12482_12669__$1);
var G__12672 = c__9605__auto___12670;
var G__12673 = cljs.core.count.call(null,c__9605__auto___12670);
var G__12674 = (0);
seq__12482_12632 = G__12671;
chunk__12483_12633 = G__12672;
count__12484_12634 = G__12673;
i__12485_12635 = G__12674;
continue;
} else {
var vec__12499_12675 = cljs.core.first.call(null,seq__12482_12669__$1);
var line_12676 = cljs.core.nth.call(null,vec__12499_12675,(0),null);
var cols_12677 = cljs.core.nth.call(null,vec__12499_12675,(1),null);
var seq__12502_12678 = cljs.core.seq.call(null,cols_12677);
var chunk__12503_12679 = null;
var count__12504_12680 = (0);
var i__12505_12681 = (0);
while(true){
if((i__12505_12681 < count__12504_12680)){
var vec__12506_12682 = cljs.core._nth.call(null,chunk__12503_12679,i__12505_12681);
var col_12683 = cljs.core.nth.call(null,vec__12506_12682,(0),null);
var infos_12684 = cljs.core.nth.call(null,vec__12506_12682,(1),null);
encode_cols.call(null,infos_12684,source_idx_12628,line_12676,col_12683);

var G__12685 = seq__12502_12678;
var G__12686 = chunk__12503_12679;
var G__12687 = count__12504_12680;
var G__12688 = (i__12505_12681 + (1));
seq__12502_12678 = G__12685;
chunk__12503_12679 = G__12686;
count__12504_12680 = G__12687;
i__12505_12681 = G__12688;
continue;
} else {
var temp__5457__auto___12689__$2 = cljs.core.seq.call(null,seq__12502_12678);
if(temp__5457__auto___12689__$2){
var seq__12502_12690__$1 = temp__5457__auto___12689__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12502_12690__$1)){
var c__9605__auto___12691 = cljs.core.chunk_first.call(null,seq__12502_12690__$1);
var G__12692 = cljs.core.chunk_rest.call(null,seq__12502_12690__$1);
var G__12693 = c__9605__auto___12691;
var G__12694 = cljs.core.count.call(null,c__9605__auto___12691);
var G__12695 = (0);
seq__12502_12678 = G__12692;
chunk__12503_12679 = G__12693;
count__12504_12680 = G__12694;
i__12505_12681 = G__12695;
continue;
} else {
var vec__12509_12696 = cljs.core.first.call(null,seq__12502_12690__$1);
var col_12697 = cljs.core.nth.call(null,vec__12509_12696,(0),null);
var infos_12698 = cljs.core.nth.call(null,vec__12509_12696,(1),null);
encode_cols.call(null,infos_12698,source_idx_12628,line_12676,col_12697);

var G__12699 = cljs.core.next.call(null,seq__12502_12690__$1);
var G__12700 = null;
var G__12701 = (0);
var G__12702 = (0);
seq__12502_12678 = G__12699;
chunk__12503_12679 = G__12700;
count__12504_12680 = G__12701;
i__12505_12681 = G__12702;
continue;
}
} else {
}
}
break;
}

var G__12703 = cljs.core.next.call(null,seq__12482_12669__$1);
var G__12704 = null;
var G__12705 = (0);
var G__12706 = (0);
seq__12482_12632 = G__12703;
chunk__12483_12633 = G__12704;
count__12484_12634 = G__12705;
i__12485_12635 = G__12706;
continue;
}
} else {
}
}
break;
}

var G__12707 = cljs.core.next.call(null,seq__12436_12621__$1);
var G__12708 = null;
var G__12709 = (0);
var G__12710 = (0);
seq__12436_12532 = G__12707;
chunk__12437_12533 = G__12708;
count__12438_12534 = G__12709;
i__12439_12535 = G__12710;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12512 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12429_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12429_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12430_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12430_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12431_SHARP_){
return clojure.string.join.call(null,",",p1__12431_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12513 = G__12512;
goog.object.set(G__12513,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12513;
} else {
return G__12512;
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
var vec__12711 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12711,(0),null);
var col_map = cljs.core.nth.call(null,vec__12711,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12714 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12714,(0),null);
var infos = cljs.core.nth.call(null,vec__12714,(1),null);
var G__12720 = cljs.core.next.call(null,col_map_seq);
var G__12721 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12714,col,infos,vec__12711,line,col_map){
return (function (v,p__12717){
var map__12718 = p__12717;
var map__12718__$1 = ((((!((map__12718 == null)))?((((map__12718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12718):map__12718);
var gline = cljs.core.get.call(null,map__12718__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12718__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12714,col,infos,vec__12711,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12720;
new_cols = G__12721;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12722 = cljs.core.next.call(null,line_map_seq);
var G__12723 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12722;
new_lines = G__12723;
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
var seq__12724_12786 = cljs.core.seq.call(null,reverse_map);
var chunk__12725_12787 = null;
var count__12726_12788 = (0);
var i__12727_12789 = (0);
while(true){
if((i__12727_12789 < count__12726_12788)){
var vec__12728_12790 = cljs.core._nth.call(null,chunk__12725_12787,i__12727_12789);
var line_12791 = cljs.core.nth.call(null,vec__12728_12790,(0),null);
var columns_12792 = cljs.core.nth.call(null,vec__12728_12790,(1),null);
var seq__12731_12793 = cljs.core.seq.call(null,columns_12792);
var chunk__12732_12794 = null;
var count__12733_12795 = (0);
var i__12734_12796 = (0);
while(true){
if((i__12734_12796 < count__12733_12795)){
var vec__12735_12797 = cljs.core._nth.call(null,chunk__12732_12794,i__12734_12796);
var column_12798 = cljs.core.nth.call(null,vec__12735_12797,(0),null);
var column_info_12799 = cljs.core.nth.call(null,vec__12735_12797,(1),null);
var seq__12738_12800 = cljs.core.seq.call(null,column_info_12799);
var chunk__12739_12801 = null;
var count__12740_12802 = (0);
var i__12741_12803 = (0);
while(true){
if((i__12741_12803 < count__12740_12802)){
var map__12742_12804 = cljs.core._nth.call(null,chunk__12739_12801,i__12741_12803);
var map__12742_12805__$1 = ((((!((map__12742_12804 == null)))?((((map__12742_12804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12742_12804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12742_12804):map__12742_12804);
var gline_12806 = cljs.core.get.call(null,map__12742_12805__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12807 = cljs.core.get.call(null,map__12742_12805__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12808 = cljs.core.get.call(null,map__12742_12805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12806], null),cljs.core.fnil.call(null,((function (seq__12738_12800,chunk__12739_12801,count__12740_12802,i__12741_12803,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12742_12804,map__12742_12805__$1,gline_12806,gcol_12807,name_12808,vec__12735_12797,column_12798,column_info_12799,vec__12728_12790,line_12791,columns_12792,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12807], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12791,new cljs.core.Keyword(null,"col","col",-1959363084),column_12798,new cljs.core.Keyword(null,"name","name",1843675177),name_12808], null));
});})(seq__12738_12800,chunk__12739_12801,count__12740_12802,i__12741_12803,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12742_12804,map__12742_12805__$1,gline_12806,gcol_12807,name_12808,vec__12735_12797,column_12798,column_info_12799,vec__12728_12790,line_12791,columns_12792,inverted))
,cljs.core.sorted_map.call(null)));

var G__12809 = seq__12738_12800;
var G__12810 = chunk__12739_12801;
var G__12811 = count__12740_12802;
var G__12812 = (i__12741_12803 + (1));
seq__12738_12800 = G__12809;
chunk__12739_12801 = G__12810;
count__12740_12802 = G__12811;
i__12741_12803 = G__12812;
continue;
} else {
var temp__5457__auto___12813 = cljs.core.seq.call(null,seq__12738_12800);
if(temp__5457__auto___12813){
var seq__12738_12814__$1 = temp__5457__auto___12813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12738_12814__$1)){
var c__9605__auto___12815 = cljs.core.chunk_first.call(null,seq__12738_12814__$1);
var G__12816 = cljs.core.chunk_rest.call(null,seq__12738_12814__$1);
var G__12817 = c__9605__auto___12815;
var G__12818 = cljs.core.count.call(null,c__9605__auto___12815);
var G__12819 = (0);
seq__12738_12800 = G__12816;
chunk__12739_12801 = G__12817;
count__12740_12802 = G__12818;
i__12741_12803 = G__12819;
continue;
} else {
var map__12744_12820 = cljs.core.first.call(null,seq__12738_12814__$1);
var map__12744_12821__$1 = ((((!((map__12744_12820 == null)))?((((map__12744_12820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12744_12820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12744_12820):map__12744_12820);
var gline_12822 = cljs.core.get.call(null,map__12744_12821__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12823 = cljs.core.get.call(null,map__12744_12821__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12824 = cljs.core.get.call(null,map__12744_12821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12822], null),cljs.core.fnil.call(null,((function (seq__12738_12800,chunk__12739_12801,count__12740_12802,i__12741_12803,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12744_12820,map__12744_12821__$1,gline_12822,gcol_12823,name_12824,seq__12738_12814__$1,temp__5457__auto___12813,vec__12735_12797,column_12798,column_info_12799,vec__12728_12790,line_12791,columns_12792,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12823], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12791,new cljs.core.Keyword(null,"col","col",-1959363084),column_12798,new cljs.core.Keyword(null,"name","name",1843675177),name_12824], null));
});})(seq__12738_12800,chunk__12739_12801,count__12740_12802,i__12741_12803,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12744_12820,map__12744_12821__$1,gline_12822,gcol_12823,name_12824,seq__12738_12814__$1,temp__5457__auto___12813,vec__12735_12797,column_12798,column_info_12799,vec__12728_12790,line_12791,columns_12792,inverted))
,cljs.core.sorted_map.call(null)));

var G__12825 = cljs.core.next.call(null,seq__12738_12814__$1);
var G__12826 = null;
var G__12827 = (0);
var G__12828 = (0);
seq__12738_12800 = G__12825;
chunk__12739_12801 = G__12826;
count__12740_12802 = G__12827;
i__12741_12803 = G__12828;
continue;
}
} else {
}
}
break;
}

var G__12829 = seq__12731_12793;
var G__12830 = chunk__12732_12794;
var G__12831 = count__12733_12795;
var G__12832 = (i__12734_12796 + (1));
seq__12731_12793 = G__12829;
chunk__12732_12794 = G__12830;
count__12733_12795 = G__12831;
i__12734_12796 = G__12832;
continue;
} else {
var temp__5457__auto___12833 = cljs.core.seq.call(null,seq__12731_12793);
if(temp__5457__auto___12833){
var seq__12731_12834__$1 = temp__5457__auto___12833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12731_12834__$1)){
var c__9605__auto___12835 = cljs.core.chunk_first.call(null,seq__12731_12834__$1);
var G__12836 = cljs.core.chunk_rest.call(null,seq__12731_12834__$1);
var G__12837 = c__9605__auto___12835;
var G__12838 = cljs.core.count.call(null,c__9605__auto___12835);
var G__12839 = (0);
seq__12731_12793 = G__12836;
chunk__12732_12794 = G__12837;
count__12733_12795 = G__12838;
i__12734_12796 = G__12839;
continue;
} else {
var vec__12746_12840 = cljs.core.first.call(null,seq__12731_12834__$1);
var column_12841 = cljs.core.nth.call(null,vec__12746_12840,(0),null);
var column_info_12842 = cljs.core.nth.call(null,vec__12746_12840,(1),null);
var seq__12749_12843 = cljs.core.seq.call(null,column_info_12842);
var chunk__12750_12844 = null;
var count__12751_12845 = (0);
var i__12752_12846 = (0);
while(true){
if((i__12752_12846 < count__12751_12845)){
var map__12753_12847 = cljs.core._nth.call(null,chunk__12750_12844,i__12752_12846);
var map__12753_12848__$1 = ((((!((map__12753_12847 == null)))?((((map__12753_12847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12753_12847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12753_12847):map__12753_12847);
var gline_12849 = cljs.core.get.call(null,map__12753_12848__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12850 = cljs.core.get.call(null,map__12753_12848__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12851 = cljs.core.get.call(null,map__12753_12848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12849], null),cljs.core.fnil.call(null,((function (seq__12749_12843,chunk__12750_12844,count__12751_12845,i__12752_12846,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12753_12847,map__12753_12848__$1,gline_12849,gcol_12850,name_12851,vec__12746_12840,column_12841,column_info_12842,seq__12731_12834__$1,temp__5457__auto___12833,vec__12728_12790,line_12791,columns_12792,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12850], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12791,new cljs.core.Keyword(null,"col","col",-1959363084),column_12841,new cljs.core.Keyword(null,"name","name",1843675177),name_12851], null));
});})(seq__12749_12843,chunk__12750_12844,count__12751_12845,i__12752_12846,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12753_12847,map__12753_12848__$1,gline_12849,gcol_12850,name_12851,vec__12746_12840,column_12841,column_info_12842,seq__12731_12834__$1,temp__5457__auto___12833,vec__12728_12790,line_12791,columns_12792,inverted))
,cljs.core.sorted_map.call(null)));

var G__12852 = seq__12749_12843;
var G__12853 = chunk__12750_12844;
var G__12854 = count__12751_12845;
var G__12855 = (i__12752_12846 + (1));
seq__12749_12843 = G__12852;
chunk__12750_12844 = G__12853;
count__12751_12845 = G__12854;
i__12752_12846 = G__12855;
continue;
} else {
var temp__5457__auto___12856__$1 = cljs.core.seq.call(null,seq__12749_12843);
if(temp__5457__auto___12856__$1){
var seq__12749_12857__$1 = temp__5457__auto___12856__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12749_12857__$1)){
var c__9605__auto___12858 = cljs.core.chunk_first.call(null,seq__12749_12857__$1);
var G__12859 = cljs.core.chunk_rest.call(null,seq__12749_12857__$1);
var G__12860 = c__9605__auto___12858;
var G__12861 = cljs.core.count.call(null,c__9605__auto___12858);
var G__12862 = (0);
seq__12749_12843 = G__12859;
chunk__12750_12844 = G__12860;
count__12751_12845 = G__12861;
i__12752_12846 = G__12862;
continue;
} else {
var map__12755_12863 = cljs.core.first.call(null,seq__12749_12857__$1);
var map__12755_12864__$1 = ((((!((map__12755_12863 == null)))?((((map__12755_12863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12755_12863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12755_12863):map__12755_12863);
var gline_12865 = cljs.core.get.call(null,map__12755_12864__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12866 = cljs.core.get.call(null,map__12755_12864__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12867 = cljs.core.get.call(null,map__12755_12864__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12865], null),cljs.core.fnil.call(null,((function (seq__12749_12843,chunk__12750_12844,count__12751_12845,i__12752_12846,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12755_12863,map__12755_12864__$1,gline_12865,gcol_12866,name_12867,seq__12749_12857__$1,temp__5457__auto___12856__$1,vec__12746_12840,column_12841,column_info_12842,seq__12731_12834__$1,temp__5457__auto___12833,vec__12728_12790,line_12791,columns_12792,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12866], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12791,new cljs.core.Keyword(null,"col","col",-1959363084),column_12841,new cljs.core.Keyword(null,"name","name",1843675177),name_12867], null));
});})(seq__12749_12843,chunk__12750_12844,count__12751_12845,i__12752_12846,seq__12731_12793,chunk__12732_12794,count__12733_12795,i__12734_12796,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12755_12863,map__12755_12864__$1,gline_12865,gcol_12866,name_12867,seq__12749_12857__$1,temp__5457__auto___12856__$1,vec__12746_12840,column_12841,column_info_12842,seq__12731_12834__$1,temp__5457__auto___12833,vec__12728_12790,line_12791,columns_12792,inverted))
,cljs.core.sorted_map.call(null)));

var G__12868 = cljs.core.next.call(null,seq__12749_12857__$1);
var G__12869 = null;
var G__12870 = (0);
var G__12871 = (0);
seq__12749_12843 = G__12868;
chunk__12750_12844 = G__12869;
count__12751_12845 = G__12870;
i__12752_12846 = G__12871;
continue;
}
} else {
}
}
break;
}

var G__12872 = cljs.core.next.call(null,seq__12731_12834__$1);
var G__12873 = null;
var G__12874 = (0);
var G__12875 = (0);
seq__12731_12793 = G__12872;
chunk__12732_12794 = G__12873;
count__12733_12795 = G__12874;
i__12734_12796 = G__12875;
continue;
}
} else {
}
}
break;
}

var G__12876 = seq__12724_12786;
var G__12877 = chunk__12725_12787;
var G__12878 = count__12726_12788;
var G__12879 = (i__12727_12789 + (1));
seq__12724_12786 = G__12876;
chunk__12725_12787 = G__12877;
count__12726_12788 = G__12878;
i__12727_12789 = G__12879;
continue;
} else {
var temp__5457__auto___12880 = cljs.core.seq.call(null,seq__12724_12786);
if(temp__5457__auto___12880){
var seq__12724_12881__$1 = temp__5457__auto___12880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12724_12881__$1)){
var c__9605__auto___12882 = cljs.core.chunk_first.call(null,seq__12724_12881__$1);
var G__12883 = cljs.core.chunk_rest.call(null,seq__12724_12881__$1);
var G__12884 = c__9605__auto___12882;
var G__12885 = cljs.core.count.call(null,c__9605__auto___12882);
var G__12886 = (0);
seq__12724_12786 = G__12883;
chunk__12725_12787 = G__12884;
count__12726_12788 = G__12885;
i__12727_12789 = G__12886;
continue;
} else {
var vec__12757_12887 = cljs.core.first.call(null,seq__12724_12881__$1);
var line_12888 = cljs.core.nth.call(null,vec__12757_12887,(0),null);
var columns_12889 = cljs.core.nth.call(null,vec__12757_12887,(1),null);
var seq__12760_12890 = cljs.core.seq.call(null,columns_12889);
var chunk__12761_12891 = null;
var count__12762_12892 = (0);
var i__12763_12893 = (0);
while(true){
if((i__12763_12893 < count__12762_12892)){
var vec__12764_12894 = cljs.core._nth.call(null,chunk__12761_12891,i__12763_12893);
var column_12895 = cljs.core.nth.call(null,vec__12764_12894,(0),null);
var column_info_12896 = cljs.core.nth.call(null,vec__12764_12894,(1),null);
var seq__12767_12897 = cljs.core.seq.call(null,column_info_12896);
var chunk__12768_12898 = null;
var count__12769_12899 = (0);
var i__12770_12900 = (0);
while(true){
if((i__12770_12900 < count__12769_12899)){
var map__12771_12901 = cljs.core._nth.call(null,chunk__12768_12898,i__12770_12900);
var map__12771_12902__$1 = ((((!((map__12771_12901 == null)))?((((map__12771_12901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12771_12901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12771_12901):map__12771_12901);
var gline_12903 = cljs.core.get.call(null,map__12771_12902__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12904 = cljs.core.get.call(null,map__12771_12902__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12905 = cljs.core.get.call(null,map__12771_12902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12903], null),cljs.core.fnil.call(null,((function (seq__12767_12897,chunk__12768_12898,count__12769_12899,i__12770_12900,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12771_12901,map__12771_12902__$1,gline_12903,gcol_12904,name_12905,vec__12764_12894,column_12895,column_info_12896,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12904], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12888,new cljs.core.Keyword(null,"col","col",-1959363084),column_12895,new cljs.core.Keyword(null,"name","name",1843675177),name_12905], null));
});})(seq__12767_12897,chunk__12768_12898,count__12769_12899,i__12770_12900,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12771_12901,map__12771_12902__$1,gline_12903,gcol_12904,name_12905,vec__12764_12894,column_12895,column_info_12896,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted))
,cljs.core.sorted_map.call(null)));

var G__12906 = seq__12767_12897;
var G__12907 = chunk__12768_12898;
var G__12908 = count__12769_12899;
var G__12909 = (i__12770_12900 + (1));
seq__12767_12897 = G__12906;
chunk__12768_12898 = G__12907;
count__12769_12899 = G__12908;
i__12770_12900 = G__12909;
continue;
} else {
var temp__5457__auto___12910__$1 = cljs.core.seq.call(null,seq__12767_12897);
if(temp__5457__auto___12910__$1){
var seq__12767_12911__$1 = temp__5457__auto___12910__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12767_12911__$1)){
var c__9605__auto___12912 = cljs.core.chunk_first.call(null,seq__12767_12911__$1);
var G__12913 = cljs.core.chunk_rest.call(null,seq__12767_12911__$1);
var G__12914 = c__9605__auto___12912;
var G__12915 = cljs.core.count.call(null,c__9605__auto___12912);
var G__12916 = (0);
seq__12767_12897 = G__12913;
chunk__12768_12898 = G__12914;
count__12769_12899 = G__12915;
i__12770_12900 = G__12916;
continue;
} else {
var map__12773_12917 = cljs.core.first.call(null,seq__12767_12911__$1);
var map__12773_12918__$1 = ((((!((map__12773_12917 == null)))?((((map__12773_12917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12773_12917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12773_12917):map__12773_12917);
var gline_12919 = cljs.core.get.call(null,map__12773_12918__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12920 = cljs.core.get.call(null,map__12773_12918__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12921 = cljs.core.get.call(null,map__12773_12918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12919], null),cljs.core.fnil.call(null,((function (seq__12767_12897,chunk__12768_12898,count__12769_12899,i__12770_12900,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12773_12917,map__12773_12918__$1,gline_12919,gcol_12920,name_12921,seq__12767_12911__$1,temp__5457__auto___12910__$1,vec__12764_12894,column_12895,column_info_12896,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12920], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12888,new cljs.core.Keyword(null,"col","col",-1959363084),column_12895,new cljs.core.Keyword(null,"name","name",1843675177),name_12921], null));
});})(seq__12767_12897,chunk__12768_12898,count__12769_12899,i__12770_12900,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12773_12917,map__12773_12918__$1,gline_12919,gcol_12920,name_12921,seq__12767_12911__$1,temp__5457__auto___12910__$1,vec__12764_12894,column_12895,column_info_12896,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted))
,cljs.core.sorted_map.call(null)));

var G__12922 = cljs.core.next.call(null,seq__12767_12911__$1);
var G__12923 = null;
var G__12924 = (0);
var G__12925 = (0);
seq__12767_12897 = G__12922;
chunk__12768_12898 = G__12923;
count__12769_12899 = G__12924;
i__12770_12900 = G__12925;
continue;
}
} else {
}
}
break;
}

var G__12926 = seq__12760_12890;
var G__12927 = chunk__12761_12891;
var G__12928 = count__12762_12892;
var G__12929 = (i__12763_12893 + (1));
seq__12760_12890 = G__12926;
chunk__12761_12891 = G__12927;
count__12762_12892 = G__12928;
i__12763_12893 = G__12929;
continue;
} else {
var temp__5457__auto___12930__$1 = cljs.core.seq.call(null,seq__12760_12890);
if(temp__5457__auto___12930__$1){
var seq__12760_12931__$1 = temp__5457__auto___12930__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12760_12931__$1)){
var c__9605__auto___12932 = cljs.core.chunk_first.call(null,seq__12760_12931__$1);
var G__12933 = cljs.core.chunk_rest.call(null,seq__12760_12931__$1);
var G__12934 = c__9605__auto___12932;
var G__12935 = cljs.core.count.call(null,c__9605__auto___12932);
var G__12936 = (0);
seq__12760_12890 = G__12933;
chunk__12761_12891 = G__12934;
count__12762_12892 = G__12935;
i__12763_12893 = G__12936;
continue;
} else {
var vec__12775_12937 = cljs.core.first.call(null,seq__12760_12931__$1);
var column_12938 = cljs.core.nth.call(null,vec__12775_12937,(0),null);
var column_info_12939 = cljs.core.nth.call(null,vec__12775_12937,(1),null);
var seq__12778_12940 = cljs.core.seq.call(null,column_info_12939);
var chunk__12779_12941 = null;
var count__12780_12942 = (0);
var i__12781_12943 = (0);
while(true){
if((i__12781_12943 < count__12780_12942)){
var map__12782_12944 = cljs.core._nth.call(null,chunk__12779_12941,i__12781_12943);
var map__12782_12945__$1 = ((((!((map__12782_12944 == null)))?((((map__12782_12944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12782_12944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12782_12944):map__12782_12944);
var gline_12946 = cljs.core.get.call(null,map__12782_12945__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12947 = cljs.core.get.call(null,map__12782_12945__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12948 = cljs.core.get.call(null,map__12782_12945__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12946], null),cljs.core.fnil.call(null,((function (seq__12778_12940,chunk__12779_12941,count__12780_12942,i__12781_12943,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12782_12944,map__12782_12945__$1,gline_12946,gcol_12947,name_12948,vec__12775_12937,column_12938,column_info_12939,seq__12760_12931__$1,temp__5457__auto___12930__$1,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12947], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12888,new cljs.core.Keyword(null,"col","col",-1959363084),column_12938,new cljs.core.Keyword(null,"name","name",1843675177),name_12948], null));
});})(seq__12778_12940,chunk__12779_12941,count__12780_12942,i__12781_12943,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12782_12944,map__12782_12945__$1,gline_12946,gcol_12947,name_12948,vec__12775_12937,column_12938,column_info_12939,seq__12760_12931__$1,temp__5457__auto___12930__$1,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted))
,cljs.core.sorted_map.call(null)));

var G__12949 = seq__12778_12940;
var G__12950 = chunk__12779_12941;
var G__12951 = count__12780_12942;
var G__12952 = (i__12781_12943 + (1));
seq__12778_12940 = G__12949;
chunk__12779_12941 = G__12950;
count__12780_12942 = G__12951;
i__12781_12943 = G__12952;
continue;
} else {
var temp__5457__auto___12953__$2 = cljs.core.seq.call(null,seq__12778_12940);
if(temp__5457__auto___12953__$2){
var seq__12778_12954__$1 = temp__5457__auto___12953__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12778_12954__$1)){
var c__9605__auto___12955 = cljs.core.chunk_first.call(null,seq__12778_12954__$1);
var G__12956 = cljs.core.chunk_rest.call(null,seq__12778_12954__$1);
var G__12957 = c__9605__auto___12955;
var G__12958 = cljs.core.count.call(null,c__9605__auto___12955);
var G__12959 = (0);
seq__12778_12940 = G__12956;
chunk__12779_12941 = G__12957;
count__12780_12942 = G__12958;
i__12781_12943 = G__12959;
continue;
} else {
var map__12784_12960 = cljs.core.first.call(null,seq__12778_12954__$1);
var map__12784_12961__$1 = ((((!((map__12784_12960 == null)))?((((map__12784_12960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12784_12960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12784_12960):map__12784_12960);
var gline_12962 = cljs.core.get.call(null,map__12784_12961__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12963 = cljs.core.get.call(null,map__12784_12961__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12964 = cljs.core.get.call(null,map__12784_12961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12962], null),cljs.core.fnil.call(null,((function (seq__12778_12940,chunk__12779_12941,count__12780_12942,i__12781_12943,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12784_12960,map__12784_12961__$1,gline_12962,gcol_12963,name_12964,seq__12778_12954__$1,temp__5457__auto___12953__$2,vec__12775_12937,column_12938,column_info_12939,seq__12760_12931__$1,temp__5457__auto___12930__$1,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12963], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12888,new cljs.core.Keyword(null,"col","col",-1959363084),column_12938,new cljs.core.Keyword(null,"name","name",1843675177),name_12964], null));
});})(seq__12778_12940,chunk__12779_12941,count__12780_12942,i__12781_12943,seq__12760_12890,chunk__12761_12891,count__12762_12892,i__12763_12893,seq__12724_12786,chunk__12725_12787,count__12726_12788,i__12727_12789,map__12784_12960,map__12784_12961__$1,gline_12962,gcol_12963,name_12964,seq__12778_12954__$1,temp__5457__auto___12953__$2,vec__12775_12937,column_12938,column_info_12939,seq__12760_12931__$1,temp__5457__auto___12930__$1,vec__12757_12887,line_12888,columns_12889,seq__12724_12881__$1,temp__5457__auto___12880,inverted))
,cljs.core.sorted_map.call(null)));

var G__12965 = cljs.core.next.call(null,seq__12778_12954__$1);
var G__12966 = null;
var G__12967 = (0);
var G__12968 = (0);
seq__12778_12940 = G__12965;
chunk__12779_12941 = G__12966;
count__12780_12942 = G__12967;
i__12781_12943 = G__12968;
continue;
}
} else {
}
}
break;
}

var G__12969 = cljs.core.next.call(null,seq__12760_12931__$1);
var G__12970 = null;
var G__12971 = (0);
var G__12972 = (0);
seq__12760_12890 = G__12969;
chunk__12761_12891 = G__12970;
count__12762_12892 = G__12971;
i__12763_12893 = G__12972;
continue;
}
} else {
}
}
break;
}

var G__12973 = cljs.core.next.call(null,seq__12724_12881__$1);
var G__12974 = null;
var G__12975 = (0);
var G__12976 = (0);
seq__12724_12786 = G__12973;
chunk__12725_12787 = G__12974;
count__12726_12788 = G__12975;
i__12727_12789 = G__12976;
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
