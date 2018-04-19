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
return (function (p1__19250_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__19250_SHARP_),path);
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
var seq__19251 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__19252 = null;
var count__19253 = (0);
var i__19254 = (0);
while(true){
if((i__19254 < count__19253)){
var s = cljs.core._nth.call(null,chunk__19252,i__19254);
var temp__5457__auto___19255 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___19255)){
var sheet_19256 = temp__5457__auto___19255;
var temp__5457__auto___19257__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_19256.href,changed);
if(cljs.core.truth_(temp__5457__auto___19257__$1)){
var href_uri_19258 = temp__5457__auto___19257__$1;
sheet_19256.ownerNode.href = href_uri_19258.makeUnique().toString();
} else {
}
} else {
}

var G__19259 = seq__19251;
var G__19260 = chunk__19252;
var G__19261 = count__19253;
var G__19262 = (i__19254 + (1));
seq__19251 = G__19259;
chunk__19252 = G__19260;
count__19253 = G__19261;
i__19254 = G__19262;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__19251);
if(temp__5457__auto__){
var seq__19251__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19251__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__19251__$1);
var G__19263 = cljs.core.chunk_rest.call(null,seq__19251__$1);
var G__19264 = c__9605__auto__;
var G__19265 = cljs.core.count.call(null,c__9605__auto__);
var G__19266 = (0);
seq__19251 = G__19263;
chunk__19252 = G__19264;
count__19253 = G__19265;
i__19254 = G__19266;
continue;
} else {
var s = cljs.core.first.call(null,seq__19251__$1);
var temp__5457__auto___19267__$1 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___19267__$1)){
var sheet_19268 = temp__5457__auto___19267__$1;
var temp__5457__auto___19269__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_19268.href,changed);
if(cljs.core.truth_(temp__5457__auto___19269__$2)){
var href_uri_19270 = temp__5457__auto___19269__$2;
sheet_19268.ownerNode.href = href_uri_19270.makeUnique().toString();
} else {
}
} else {
}

var G__19271 = cljs.core.next.call(null,seq__19251__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__19251 = G__19271;
chunk__19252 = G__19272;
count__19253 = G__19273;
i__19254 = G__19274;
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
var seq__19275 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__19276 = null;
var count__19277 = (0);
var i__19278 = (0);
while(true){
if((i__19278 < count__19277)){
var s = cljs.core._nth.call(null,chunk__19276,i__19278);
var temp__5457__auto___19279 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___19279)){
var image_19280 = temp__5457__auto___19279;
var temp__5457__auto___19281__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_19280.src,changed);
if(cljs.core.truth_(temp__5457__auto___19281__$1)){
var href_uri_19282 = temp__5457__auto___19281__$1;
image_19280.src = href_uri_19282.makeUnique().toString();
} else {
}
} else {
}

var G__19283 = seq__19275;
var G__19284 = chunk__19276;
var G__19285 = count__19277;
var G__19286 = (i__19278 + (1));
seq__19275 = G__19283;
chunk__19276 = G__19284;
count__19277 = G__19285;
i__19278 = G__19286;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__19275);
if(temp__5457__auto__){
var seq__19275__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19275__$1)){
var c__9605__auto__ = cljs.core.chunk_first.call(null,seq__19275__$1);
var G__19287 = cljs.core.chunk_rest.call(null,seq__19275__$1);
var G__19288 = c__9605__auto__;
var G__19289 = cljs.core.count.call(null,c__9605__auto__);
var G__19290 = (0);
seq__19275 = G__19287;
chunk__19276 = G__19288;
count__19277 = G__19289;
i__19278 = G__19290;
continue;
} else {
var s = cljs.core.first.call(null,seq__19275__$1);
var temp__5457__auto___19291__$1 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___19291__$1)){
var image_19292 = temp__5457__auto___19291__$1;
var temp__5457__auto___19293__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_19292.src,changed);
if(cljs.core.truth_(temp__5457__auto___19293__$2)){
var href_uri_19294 = temp__5457__auto___19293__$2;
image_19292.src = href_uri_19294.makeUnique().toString();
} else {
}
} else {
}

var G__19295 = cljs.core.next.call(null,seq__19275__$1);
var G__19296 = null;
var G__19297 = (0);
var G__19298 = (0);
seq__19275 = G__19295;
chunk__19276 = G__19296;
count__19277 = G__19297;
i__19278 = G__19298;
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
return (function (p1__19299_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__19299_SHARP_.toString());
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
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__19302){
var map__19303 = p__19302;
var map__19303__$1 = ((((!((map__19303 == null)))?((((map__19303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19303):map__19303);
var on_jsload = cljs.core.get.call(null,map__19303__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__19303,map__19303__$1,on_jsload){
return (function (p1__19300_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__19300_SHARP_,".js");
});})(map__19303,map__19303__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__19303,map__19303__$1,on_jsload){
return (function (p1__19301_SHARP_){
return goog.Uri.parse(p1__19301_SHARP_).makeUnique();
});})(js_files,map__19303,map__19303__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__19303,map__19303__$1,on_jsload){
return (function() { 
var G__19305__delegate = function (_){
return on_jsload.call(null);
};
var G__19305 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__19306__i = 0, G__19306__a = new Array(arguments.length -  0);
while (G__19306__i < G__19306__a.length) {G__19306__a[G__19306__i] = arguments[G__19306__i + 0]; ++G__19306__i;}
  _ = new cljs.core.IndexedSeq(G__19306__a,0,null);
} 
return G__19305__delegate.call(this,_);};
G__19305.cljs$lang$maxFixedArity = 0;
G__19305.cljs$lang$applyTo = (function (arglist__19307){
var _ = cljs.core.seq(arglist__19307);
return G__19305__delegate(_);
});
G__19305.cljs$core$IFn$_invoke$arity$variadic = G__19305__delegate;
return G__19305;
})()
;})(js_files,map__19303,map__19303__$1,on_jsload))
,((function (js_files,map__19303,map__19303__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__19303,map__19303__$1,on_jsload))
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

var seq__19308_19312 = cljs.core.seq.call(null,things_to_log);
var chunk__19309_19313 = null;
var count__19310_19314 = (0);
var i__19311_19315 = (0);
while(true){
if((i__19311_19315 < count__19310_19314)){
var t_19316 = cljs.core._nth.call(null,chunk__19309_19313,i__19311_19315);
console.log(t_19316);

var G__19317 = seq__19308_19312;
var G__19318 = chunk__19309_19313;
var G__19319 = count__19310_19314;
var G__19320 = (i__19311_19315 + (1));
seq__19308_19312 = G__19317;
chunk__19309_19313 = G__19318;
count__19310_19314 = G__19319;
i__19311_19315 = G__19320;
continue;
} else {
var temp__5457__auto___19321 = cljs.core.seq.call(null,seq__19308_19312);
if(temp__5457__auto___19321){
var seq__19308_19322__$1 = temp__5457__auto___19321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19308_19322__$1)){
var c__9605__auto___19323 = cljs.core.chunk_first.call(null,seq__19308_19322__$1);
var G__19324 = cljs.core.chunk_rest.call(null,seq__19308_19322__$1);
var G__19325 = c__9605__auto___19323;
var G__19326 = cljs.core.count.call(null,c__9605__auto___19323);
var G__19327 = (0);
seq__19308_19312 = G__19324;
chunk__19309_19313 = G__19325;
count__19310_19314 = G__19326;
i__19311_19315 = G__19327;
continue;
} else {
var t_19328 = cljs.core.first.call(null,seq__19308_19322__$1);
console.log(t_19328);

var G__19329 = cljs.core.next.call(null,seq__19308_19322__$1);
var G__19330 = null;
var G__19331 = (0);
var G__19332 = (0);
seq__19308_19312 = G__19329;
chunk__19309_19313 = G__19330;
count__19310_19314 = G__19331;
i__19311_19315 = G__19332;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__19333_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19333_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__19334){
var map__19335 = p__19334;
var map__19335__$1 = ((((!((map__19335 == null)))?((((map__19335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19335):map__19335);
var canonical_path = cljs.core.get.call(null,map__19335__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__19335__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__19337 = window;
var G__19337__$1 = (((G__19337 == null))?null:G__19337.location);
if((G__19337__$1 == null)){
return null;
} else {
return G__19337__$1.protocol;
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
var G__19338 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__19338);

adzerk.boot_reload.reload.reload_css.call(null,G__19338);

adzerk.boot_reload.reload.reload_img.call(null,G__19338);

return G__19338;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
