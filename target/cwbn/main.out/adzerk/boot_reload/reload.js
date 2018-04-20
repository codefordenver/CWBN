// Compiled by ClojureScript 1.9.946 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.html.legacyconversions');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__10371_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__10371_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__5457__auto__)){
var changed__$1 = temp__5457__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__10372 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__10373 = null;
var count__10374 = (0);
var i__10375 = (0);
while(true){
if((i__10375 < count__10374)){
var s = cljs.core._nth.call(null,chunk__10373,i__10375);
var temp__5457__auto___10376 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___10376)){
var sheet_10377 = temp__5457__auto___10376;
var temp__5457__auto___10378__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10377.href,changed);
if(cljs.core.truth_(temp__5457__auto___10378__$1)){
var href_uri_10379 = temp__5457__auto___10378__$1;
sheet_10377.ownerNode.href = href_uri_10379.makeUnique().toString();
} else {
}
} else {
}

var G__10380 = seq__10372;
var G__10381 = chunk__10373;
var G__10382 = count__10374;
var G__10383 = (i__10375 + (1));
seq__10372 = G__10380;
chunk__10373 = G__10381;
count__10374 = G__10382;
i__10375 = G__10383;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10372);
if(temp__5457__auto__){
var seq__10372__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10372__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__10372__$1);
var G__10384 = cljs.core.chunk_rest.call(null,seq__10372__$1);
var G__10385 = c__9605__auto__;
var G__10386 = cljs.core.count.call(null,c__9605__auto__);
var G__10387 = (0);
seq__10372 = G__10384;
chunk__10373 = G__10385;
count__10374 = G__10386;
i__10375 = G__10387;
continue;
} else {
var s = cljs.core.first.call(null,seq__10372__$1);
var temp__5457__auto___10388__$1 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___10388__$1)){
var sheet_10389 = temp__5457__auto___10388__$1;
var temp__5457__auto___10390__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_10389.href,changed);
if(cljs.core.truth_(temp__5457__auto___10390__$2)){
var href_uri_10391 = temp__5457__auto___10390__$2;
sheet_10389.ownerNode.href = href_uri_10391.makeUnique().toString();
} else {
}
} else {
}

var G__10392 = cljs.core.next.call(null,seq__10372__$1);
var G__10393 = null;
var G__10394 = (0);
var G__10395 = (0);
seq__10372 = G__10392;
chunk__10373 = G__10393;
count__10374 = G__10394;
i__10375 = G__10395;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__10396 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__10397 = null;
var count__10398 = (0);
var i__10399 = (0);
while(true){
if((i__10399 < count__10398)){
var s = cljs.core._nth.call(null,chunk__10397,i__10399);
var temp__5457__auto___10400 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___10400)){
var image_10401 = temp__5457__auto___10400;
var temp__5457__auto___10402__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_10401.src,changed);
if(cljs.core.truth_(temp__5457__auto___10402__$1)){
var href_uri_10403 = temp__5457__auto___10402__$1;
image_10401.src = href_uri_10403.makeUnique().toString();
} else {
}
} else {
}

var G__10404 = seq__10396;
var G__10405 = chunk__10397;
var G__10406 = count__10398;
var G__10407 = (i__10399 + (1));
seq__10396 = G__10404;
chunk__10397 = G__10405;
count__10398 = G__10406;
i__10399 = G__10407;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10396);
if(temp__5457__auto__){
var seq__10396__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10396__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__10396__$1);
var G__10408 = cljs.core.chunk_rest.call(null,seq__10396__$1);
var G__10409 = c__9605__auto__;
var G__10410 = cljs.core.count.call(null,c__9605__auto__);
var G__10411 = (0);
seq__10396 = G__10408;
chunk__10397 = G__10409;
count__10398 = G__10410;
i__10399 = G__10411;
continue;
} else {
var s = cljs.core.first.call(null,seq__10396__$1);
var temp__5457__auto___10412__$1 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___10412__$1)){
var image_10413 = temp__5457__auto___10412__$1;
var temp__5457__auto___10414__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_10413.src,changed);
if(cljs.core.truth_(temp__5457__auto___10414__$2)){
var href_uri_10415 = temp__5457__auto___10414__$2;
image_10413.src = href_uri_10415.makeUnique().toString();
} else {
}
} else {
}

var G__10416 = cljs.core.next.call(null,seq__10396__$1);
var G__10417 = null;
var G__10418 = (0);
var G__10419 = (0);
seq__10396 = G__10416;
chunk__10397 = G__10417;
count__10398 = G__10418;
i__10399 = G__10419;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.load_files = (function adzerk$boot_reload$reload$load_files(urls){
var opts = ({"cleanupWhenDone": true});
if(typeof goog.net.jsloader.safeLoadMany !== 'undefined'){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (opts){
return (function (p1__10420_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__10420_SHARP_.toString());
});})(opts))
,urls)),opts);
} else {
if(typeof goog.net.jsloader.loadMany !== 'undefined'){
return goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,urls),opts);
} else {
throw cljs.core.ex_info.call(null,"jsloader/safeLoadMany not found",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__10423){
var map__10424 = p__10423;
var map__10424__$1 = ((((!((map__10424 == null)))?((((map__10424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10424):map__10424);
var on_jsload = cljs.core.get.call(null,map__10424__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__10424,map__10424__$1,on_jsload){
return (function (p1__10421_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__10421_SHARP_,".js");
});})(map__10424,map__10424__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__10424,map__10424__$1,on_jsload){
return (function (p1__10422_SHARP_){
return goog.Uri.parse(p1__10422_SHARP_).makeUnique();
});})(js_files,map__10424,map__10424__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__10424,map__10424__$1,on_jsload){
return (function() { 
var G__10426__delegate = function (_){
return on_jsload.call(null);
};
var G__10426 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__10427__i = 0, G__10427__a = new Array(arguments.length -  0);
while (G__10427__i < G__10427__a.length) {G__10427__a[G__10427__i] = arguments[G__10427__i + 0]; ++G__10427__i;}
  _ = new cljs.core.IndexedSeq(G__10427__a,0,null);
} 
return G__10426__delegate.call(this,_);};
G__10426.cljs$lang$maxFixedArity = 0;
G__10426.cljs$lang$applyTo = (function (arglist__10428){
var _ = cljs.core.seq(arglist__10428);
return G__10426__delegate(_);
});
G__10426.cljs$core$IFn$_invoke$arity$variadic = G__10426__delegate;
return G__10426;
})()
;})(js_files,map__10424,map__10424__$1,on_jsload))
,((function (js_files,map__10424,map__10424__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__10424,map__10424__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__10429_10433 = cljs.core.seq.call(null,things_to_log);
var chunk__10430_10434 = null;
var count__10431_10435 = (0);
var i__10432_10436 = (0);
while(true){
if((i__10432_10436 < count__10431_10435)){
var t_10437 = cljs.core._nth.call(null,chunk__10430_10434,i__10432_10436);
console.log(t_10437);

var G__10438 = seq__10429_10433;
var G__10439 = chunk__10430_10434;
var G__10440 = count__10431_10435;
var G__10441 = (i__10432_10436 + (1));
seq__10429_10433 = G__10438;
chunk__10430_10434 = G__10439;
count__10431_10435 = G__10440;
i__10432_10436 = G__10441;
continue;
} else {
var temp__5457__auto___10442 = cljs.core.seq.call(null,seq__10429_10433);
if(temp__5457__auto___10442){
var seq__10429_10443__$1 = temp__5457__auto___10442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10429_10443__$1)){
var c__9605__auto___10444 = cljs.core.chunk_first.call(null,seq__10429_10443__$1);
var G__10445 = cljs.core.chunk_rest.call(null,seq__10429_10443__$1);
var G__10446 = c__9605__auto___10444;
var G__10447 = cljs.core.count.call(null,c__9605__auto___10444);
var G__10448 = (0);
seq__10429_10433 = G__10445;
chunk__10430_10434 = G__10446;
count__10431_10435 = G__10447;
i__10432_10436 = G__10448;
continue;
} else {
var t_10449 = cljs.core.first.call(null,seq__10429_10443__$1);
console.log(t_10449);

var G__10450 = cljs.core.next.call(null,seq__10429_10443__$1);
var G__10451 = null;
var G__10452 = (0);
var G__10453 = (0);
seq__10429_10433 = G__10450;
chunk__10430_10434 = G__10451;
count__10431_10435 = G__10452;
i__10432_10436 = G__10453;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__10454_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10454_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__10455){
var map__10456 = p__10455;
var map__10456__$1 = ((((!((map__10456 == null)))?((((map__10456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10456):map__10456);
var canonical_path = cljs.core.get.call(null,map__10456__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__10456__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__10458 = window;
var G__10458__$1 = (((G__10458 == null))?null:G__10458.location);
if((G__10458__$1 == null)){
return null;
} else {
return G__10458__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__10459 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__10459);

adzerk.boot_reload.reload.reload_css.call(null,G__10459);

adzerk.boot_reload.reload.reload_img.call(null,G__10459);

return G__10459;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
