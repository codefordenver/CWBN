// Compiled by ClojureScript 1.9.946 {}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var G__18987 = arguments.length;
switch (G__18987) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,(cljs.core.truth_(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__5455__auto__ = cljs.core.first.call(null,extensions);
if(cljs.core.truth_(temp__5455__auto__)){
var extension = temp__5455__auto__;
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__5455__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__5455__auto__))
);
}catch (e18988){if((e18988 instanceof Error)){
var _ = e18988;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e18988;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_18991 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns_sym);

try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_18991;
}}catch (e18990){if((e18990 instanceof Error)){
var _ = e18990;
return null;
} else {
throw e18990;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var _STAR_forms = cljs.core.atom.call(null,forms);
var _STAR_results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__17017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17017__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__17018__auto__ = (function (){var switch__16927__auto__ = ((function (c__17017__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_19085){
var state_val_19086 = (state_19085[(1)]);
if((state_val_19086 === (7))){
var inst_19036 = (state_19085[(2)]);
var inst_19037 = cljs.core.swap_BANG_.call(null,_STAR_forms,cljs.core.rest);
var state_19085__$1 = (function (){var statearr_19087 = state_19085;
(statearr_19087[(7)] = inst_19036);

(statearr_19087[(8)] = inst_19037);

return statearr_19087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19085__$1,(19),channel);
} else {
if((state_val_19086 === (20))){
var inst_19040 = (state_19085[(9)]);
var inst_19045 = inst_19040.cljs$lang$protocol_mask$partition0$;
var inst_19046 = (inst_19045 & (64));
var inst_19047 = inst_19040.cljs$core$ISeq$;
var inst_19048 = (cljs.core.PROTOCOL_SENTINEL === inst_19047);
var inst_19049 = (inst_19046) || (inst_19048);
var state_19085__$1 = state_19085;
if(cljs.core.truth_(inst_19049)){
var statearr_19088_19136 = state_19085__$1;
(statearr_19088_19136[(1)] = (23));

} else {
var statearr_19089_19137 = state_19085__$1;
(statearr_19089_19137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (27))){
var inst_19040 = (state_19085[(9)]);
var state_19085__$1 = state_19085;
var statearr_19090_19138 = state_19085__$1;
(statearr_19090_19138[(2)] = inst_19040);

(statearr_19090_19138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (1))){
var state_19085__$1 = state_19085;
var statearr_19091_19139 = state_19085__$1;
(statearr_19091_19139[(2)] = null);

(statearr_19091_19139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (24))){
var state_19085__$1 = state_19085;
var statearr_19092_19140 = state_19085__$1;
(statearr_19092_19140[(2)] = false);

(statearr_19092_19140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (4))){
var state_19085__$1 = state_19085;
var statearr_19093_19141 = state_19085__$1;
(statearr_19093_19141[(2)] = null);

(statearr_19093_19141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (15))){
var inst_19020 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19094_19142 = state_19085__$1;
(statearr_19094_19142[(2)] = inst_19020);

(statearr_19094_19142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (21))){
var state_19085__$1 = state_19085;
var statearr_19095_19143 = state_19085__$1;
(statearr_19095_19143[(2)] = false);

(statearr_19095_19143[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (31))){
var inst_19072 = (state_19085[(2)]);
var inst_19073 = cljs.core.swap_BANG_.call(null,_STAR_results,cljs.core.conj,inst_19072);
var state_19085__$1 = (function (){var statearr_19096 = state_19085;
(statearr_19096[(10)] = inst_19073);

return statearr_19096;
})();
var statearr_19097_19144 = state_19085__$1;
(statearr_19097_19144[(2)] = null);

(statearr_19097_19144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (32))){
var inst_19065 = (state_19085[(11)]);
var inst_19067 = (state_19085[(2)]);
var inst_19068 = [inst_19067];
var inst_19069 = cljs.core.PersistentHashMap.fromArrays(inst_19065,inst_19068);
var state_19085__$1 = state_19085;
var statearr_19098_19145 = state_19085__$1;
(statearr_19098_19145[(2)] = inst_19069);

(statearr_19098_19145[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (13))){
var inst_19008 = (state_19085[(12)]);
var inst_19016 = cljs.core.second.call(null,inst_19008);
var inst_19017 = cljs.core.reset_BANG_.call(null,_STAR_current_ns,inst_19016);
var state_19085__$1 = state_19085;
var statearr_19099_19146 = state_19085__$1;
(statearr_19099_19146[(2)] = inst_19017);

(statearr_19099_19146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (22))){
var inst_19056 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
if(cljs.core.truth_(inst_19056)){
var statearr_19100_19147 = state_19085__$1;
(statearr_19100_19147[(1)] = (26));

} else {
var statearr_19101_19148 = state_19085__$1;
(statearr_19101_19148[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (29))){
var inst_19062 = (state_19085[(13)]);
var inst_19065 = [new cljs.core.Keyword(null,"value","value",305978217)];
var state_19085__$1 = (function (){var statearr_19102 = state_19085;
(statearr_19102[(11)] = inst_19065);

return statearr_19102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19085__$1,(32),inst_19062);
} else {
if((state_val_19086 === (6))){
var inst_19077 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19103_19149 = state_19085__$1;
(statearr_19103_19149[(2)] = inst_19077);

(statearr_19103_19149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (28))){
var inst_19061 = (state_19085[(14)]);
var inst_19062 = (state_19085[(13)]);
var inst_19061__$1 = (state_19085[(2)]);
var inst_19062__$1 = cljs.core.get.call(null,inst_19061__$1,new cljs.core.Keyword(null,"value","value",305978217));
var inst_19063 = (inst_19062__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_19085__$1 = (function (){var statearr_19104 = state_19085;
(statearr_19104[(14)] = inst_19061__$1);

(statearr_19104[(13)] = inst_19062__$1);

return statearr_19104;
})();
if(cljs.core.truth_(inst_19063)){
var statearr_19105_19150 = state_19085__$1;
(statearr_19105_19150[(1)] = (29));

} else {
var statearr_19106_19151 = state_19085__$1;
(statearr_19106_19151[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (25))){
var inst_19053 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19107_19152 = state_19085__$1;
(statearr_19107_19152[(2)] = inst_19053);

(statearr_19107_19152[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (17))){
var inst_19008 = (state_19085[(12)]);
var inst_19009 = (state_19085[(15)]);
var inst_19006 = (state_19085[(16)]);
var inst_19031 = (function (){var current_ns = inst_19006;
var form = inst_19008;
var opts__$1 = inst_19009;
return ((function (current_ns,form,opts__$1,inst_19008,inst_19009,inst_19006,state_val_19086,c__17017__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__18992_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__18992_SHARP_);
});
;})(current_ns,form,opts__$1,inst_19008,inst_19009,inst_19006,state_val_19086,c__17017__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_19032 = cljs.js.eval.call(null,_STAR_state,inst_19008,inst_19009,inst_19031);
var state_19085__$1 = state_19085;
var statearr_19108_19153 = state_19085__$1;
(statearr_19108_19153[(2)] = inst_19032);

(statearr_19108_19153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (3))){
var inst_19079 = (state_19085[(2)]);
var inst_19080 = (function (){return ((function (inst_19079,state_val_19086,c__17017__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__18993_SHARP_){
var or__8674__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__18993_SHARP_);
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__18993_SHARP_);
}
});
;})(inst_19079,state_val_19086,c__17017__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_19081 = cljs.core.deref.call(null,_STAR_results);
var inst_19082 = cljs.core.mapv.call(null,inst_19080,inst_19081);
var inst_19083 = cb.call(null,inst_19082);
var state_19085__$1 = (function (){var statearr_19109 = state_19085;
(statearr_19109[(17)] = inst_19079);

return statearr_19109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19085__$1,inst_19083);
} else {
if((state_val_19086 === (12))){
var inst_19008 = (state_19085[(12)]);
var inst_19023 = (state_19085[(2)]);
var inst_19024 = (inst_19008 instanceof Error);
var state_19085__$1 = (function (){var statearr_19110 = state_19085;
(statearr_19110[(18)] = inst_19023);

return statearr_19110;
})();
if(cljs.core.truth_(inst_19024)){
var statearr_19111_19154 = state_19085__$1;
(statearr_19111_19154[(1)] = (16));

} else {
var statearr_19112_19155 = state_19085__$1;
(statearr_19112_19155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (2))){
var inst_18995 = cljs.core.deref.call(null,_STAR_forms);
var inst_18996 = cljs.core.seq.call(null,inst_18995);
var state_19085__$1 = state_19085;
if(inst_18996){
var statearr_19113_19156 = state_19085__$1;
(statearr_19113_19156[(1)] = (4));

} else {
var statearr_19114_19157 = state_19085__$1;
(statearr_19114_19157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (23))){
var state_19085__$1 = state_19085;
var statearr_19115_19158 = state_19085__$1;
(statearr_19115_19158[(2)] = true);

(statearr_19115_19158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (19))){
var inst_19040 = (state_19085[(9)]);
var inst_19040__$1 = (state_19085[(2)]);
var inst_19042 = (inst_19040__$1 == null);
var inst_19043 = cljs.core.not.call(null,inst_19042);
var state_19085__$1 = (function (){var statearr_19116 = state_19085;
(statearr_19116[(9)] = inst_19040__$1);

return statearr_19116;
})();
if(inst_19043){
var statearr_19117_19159 = state_19085__$1;
(statearr_19117_19159[(1)] = (20));

} else {
var statearr_19118_19160 = state_19085__$1;
(statearr_19118_19160[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (11))){
var state_19085__$1 = state_19085;
var statearr_19119_19161 = state_19085__$1;
(statearr_19119_19161[(2)] = null);

(statearr_19119_19161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (9))){
var inst_19008 = (state_19085[(12)]);
var inst_19006 = (state_19085[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19085,(8),Error,null,(7));
var inst_19006__$1 = cljs.core.deref.call(null,_STAR_current_ns);
var inst_19007 = cljs.core.deref.call(null,_STAR_forms);
var inst_19008__$1 = cljs.core.first.call(null,inst_19007);
var inst_19009 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_19006__$1);
var inst_19010 = cljs.core.list_QMARK_.call(null,inst_19008__$1);
var state_19085__$1 = (function (){var statearr_19120 = state_19085;
(statearr_19120[(12)] = inst_19008__$1);

(statearr_19120[(15)] = inst_19009);

(statearr_19120[(16)] = inst_19006__$1);

return statearr_19120;
})();
if(inst_19010){
var statearr_19121_19162 = state_19085__$1;
(statearr_19121_19162[(1)] = (10));

} else {
var statearr_19122_19163 = state_19085__$1;
(statearr_19122_19163[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (5))){
var state_19085__$1 = state_19085;
var statearr_19123_19164 = state_19085__$1;
(statearr_19123_19164[(2)] = null);

(statearr_19123_19164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (14))){
var state_19085__$1 = state_19085;
var statearr_19124_19165 = state_19085__$1;
(statearr_19124_19165[(2)] = null);

(statearr_19124_19165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (26))){
var inst_19040 = (state_19085[(9)]);
var inst_19058 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19040);
var state_19085__$1 = state_19085;
var statearr_19125_19166 = state_19085__$1;
(statearr_19125_19166[(2)] = inst_19058);

(statearr_19125_19166[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (16))){
var inst_19008 = (state_19085[(12)]);
var inst_19026 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19027 = [inst_19008];
var inst_19028 = cljs.core.PersistentHashMap.fromArrays(inst_19026,inst_19027);
var inst_19029 = cljs.core.async.put_BANG_.call(null,channel,inst_19028);
var state_19085__$1 = state_19085;
var statearr_19126_19167 = state_19085__$1;
(statearr_19126_19167[(2)] = inst_19029);

(statearr_19126_19167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (30))){
var inst_19061 = (state_19085[(14)]);
var state_19085__$1 = state_19085;
var statearr_19127_19168 = state_19085__$1;
(statearr_19127_19168[(2)] = inst_19061);

(statearr_19127_19168[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (10))){
var inst_19008 = (state_19085[(12)]);
var inst_19012 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_19013 = cljs.core.first.call(null,inst_19008);
var inst_19014 = cljs.core._EQ_.call(null,inst_19012,inst_19013);
var state_19085__$1 = state_19085;
if(inst_19014){
var statearr_19128_19169 = state_19085__$1;
(statearr_19128_19169[(1)] = (13));

} else {
var statearr_19129_19170 = state_19085__$1;
(statearr_19129_19170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (18))){
var inst_19034 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19130_19171 = state_19085__$1;
(statearr_19130_19171[(2)] = inst_19034);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (8))){
var inst_18998 = (state_19085[(2)]);
var inst_18999 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19000 = [inst_18998];
var inst_19001 = cljs.core.PersistentHashMap.fromArrays(inst_18999,inst_19000);
var inst_19002 = cljs.core.async.put_BANG_.call(null,channel,inst_19001);
var state_19085__$1 = state_19085;
var statearr_19131_19172 = state_19085__$1;
(statearr_19131_19172[(2)] = inst_19002);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17017__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__16927__auto__,c__17017__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__16928__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__16928__auto____0 = (function (){
var statearr_19132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19132[(0)] = eval_soup$core$eval_forms_$_state_machine__16928__auto__);

(statearr_19132[(1)] = (1));

return statearr_19132;
});
var eval_soup$core$eval_forms_$_state_machine__16928__auto____1 = (function (state_19085){
while(true){
var ret_value__16929__auto__ = (function (){try{while(true){
var result__16930__auto__ = switch__16927__auto__.call(null,state_19085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16930__auto__;
}
break;
}
}catch (e19133){if((e19133 instanceof Object)){
var ex__16931__auto__ = e19133;
var statearr_19134_19173 = state_19085;
(statearr_19134_19173[(5)] = ex__16931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19174 = state_19085;
state_19085 = G__19174;
continue;
} else {
return ret_value__16929__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__16928__auto__ = function(state_19085){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__16928__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__16928__auto____1.call(this,state_19085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__16928__auto____0;
eval_soup$core$eval_forms_$_state_machine__16928__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__16928__auto____1;
return eval_soup$core$eval_forms_$_state_machine__16928__auto__;
})()
;})(switch__16927__auto__,c__17017__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__17019__auto__ = (function (){var statearr_19135 = f__17018__auto__.call(null);
(statearr_19135[(6)] = c__17017__auto__);

return statearr_19135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17019__auto__);
});})(c__17017__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__17017__auto__;
});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core._conj.call(null,(function (){var x__9628__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(timeout,form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,cljs.core.partial.call(null,eval_soup.core.add_timeout_checks,timeout),cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core._conj.call(null,(function (){var x__9628__auto__ = timeout;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__9628__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto____$1);
})(),x__9628__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(timeout,forms,expanded_forms){
var iter__9556__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__19175(s__19176){
return (new cljs.core.LazySeq(null,(function (){
var s__19176__$1 = s__19176;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19176__$1);
if(temp__5457__auto__){
var s__19176__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19176__$2)){
var c__9554__auto__ = cljs.core.chunk_first.call(null,s__19176__$2);
var size__9555__auto__ = cljs.core.count.call(null,c__9554__auto__);
var b__19178 = cljs.core.chunk_buffer.call(null,size__9555__auto__);
if((function (){var i__19177 = (0);
while(true){
if((i__19177 < size__9555__auto__)){
var i = cljs.core._nth.call(null,c__9554__auto__,i__19177);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__19178,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__19179 = (i__19177 + (1));
i__19177 = G__19179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19178),eval_soup$core$add_timeouts_if_necessary_$_iter__19175.call(null,cljs.core.chunk_rest.call(null,s__19176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19178),null);
}
} else {
var i = cljs.core.first.call(null,s__19176__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__19175.call(null,cljs.core.rest.call(null,s__19176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9556__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core._STAR_cljs_state !== 'undefined'){
} else {
eval_soup.core._STAR_cljs_state = cljs.js.empty_state.call(null);
}
/**
 * Evaluates each form, providing the results in a callback.
 *   If any of the forms are strings, it will read them first.
 */
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var G__19182 = arguments.length;
switch (G__19182) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__19183){
var map__19184 = p__19183;
var map__19184__$1 = ((((!((map__19184 == null)))?((((map__19184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19184):map__19184);
var opts = map__19184__$1;
var _STAR_current_ns = cljs.core.get.call(null,map__19184__$1,new cljs.core.Keyword(null,"*current-ns","*current-ns",547476271),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var _STAR_state = cljs.core.get.call(null,map__19184__$1,new cljs.core.Keyword(null,"*state","*state",471581315),eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.call(null,map__19184__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108),eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.call(null,map__19184__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(4000));
var disable_timeout_QMARK_ = cljs.core.get.call(null,map__19184__$1,new cljs.core.Keyword(null,"disable-timeout?","disable-timeout?",-760039639),false);
var forms__$1 = cljs.core.mapv.call(null,((function (map__19184,map__19184__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__19180_SHARP_){
if(typeof p1__19180_SHARP_ === 'string'){
return eval_soup.core.str__GT_form.call(null,cljs.core.deref.call(null,_STAR_current_ns),p1__19180_SHARP_);
} else {
return p1__19180_SHARP_;
}
});})(map__19184,map__19184__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null))], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out."))))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.deref.call(null,_STAR_current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null)));
var timeout_cb = ((function (forms__$1,init_forms,map__19184,map__19184__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__19184,map__19184__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__19184,map__19184__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,(cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__19184,map__19184__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms.call(null,init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
