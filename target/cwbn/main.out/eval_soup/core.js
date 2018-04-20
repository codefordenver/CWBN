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
var G__18561 = arguments.length;
switch (G__18561) {
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
}catch (e18562){if((e18562 instanceof Error)){
var _ = e18562;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e18562;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_18565 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns_sym);

try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_18565;
}}catch (e18564){if((e18564 instanceof Error)){
var _ = e18564;
return null;
} else {
throw e18564;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var _STAR_forms = cljs.core.atom.call(null,forms);
var _STAR_results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__16591__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16591__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__16592__auto__ = (function (){var switch__16501__auto__ = ((function (c__16591__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_18659){
var state_val_18660 = (state_18659[(1)]);
if((state_val_18660 === (7))){
var inst_18610 = (state_18659[(2)]);
var inst_18611 = cljs.core.swap_BANG_.call(null,_STAR_forms,cljs.core.rest);
var state_18659__$1 = (function (){var statearr_18661 = state_18659;
(statearr_18661[(7)] = inst_18610);

(statearr_18661[(8)] = inst_18611);

return statearr_18661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18659__$1,(19),channel);
} else {
if((state_val_18660 === (20))){
var inst_18614 = (state_18659[(9)]);
var inst_18619 = inst_18614.cljs$lang$protocol_mask$partition0$;
var inst_18620 = (inst_18619 & (64));
var inst_18621 = inst_18614.cljs$core$ISeq$;
var inst_18622 = (cljs.core.PROTOCOL_SENTINEL === inst_18621);
var inst_18623 = (inst_18620) || (inst_18622);
var state_18659__$1 = state_18659;
if(cljs.core.truth_(inst_18623)){
var statearr_18662_18710 = state_18659__$1;
(statearr_18662_18710[(1)] = (23));

} else {
var statearr_18663_18711 = state_18659__$1;
(statearr_18663_18711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (27))){
var inst_18614 = (state_18659[(9)]);
var state_18659__$1 = state_18659;
var statearr_18664_18712 = state_18659__$1;
(statearr_18664_18712[(2)] = inst_18614);

(statearr_18664_18712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (1))){
var state_18659__$1 = state_18659;
var statearr_18665_18713 = state_18659__$1;
(statearr_18665_18713[(2)] = null);

(statearr_18665_18713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (24))){
var state_18659__$1 = state_18659;
var statearr_18666_18714 = state_18659__$1;
(statearr_18666_18714[(2)] = false);

(statearr_18666_18714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (4))){
var state_18659__$1 = state_18659;
var statearr_18667_18715 = state_18659__$1;
(statearr_18667_18715[(2)] = null);

(statearr_18667_18715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (15))){
var inst_18594 = (state_18659[(2)]);
var state_18659__$1 = state_18659;
var statearr_18668_18716 = state_18659__$1;
(statearr_18668_18716[(2)] = inst_18594);

(statearr_18668_18716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (21))){
var state_18659__$1 = state_18659;
var statearr_18669_18717 = state_18659__$1;
(statearr_18669_18717[(2)] = false);

(statearr_18669_18717[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (31))){
var inst_18646 = (state_18659[(2)]);
var inst_18647 = cljs.core.swap_BANG_.call(null,_STAR_results,cljs.core.conj,inst_18646);
var state_18659__$1 = (function (){var statearr_18670 = state_18659;
(statearr_18670[(10)] = inst_18647);

return statearr_18670;
})();
var statearr_18671_18718 = state_18659__$1;
(statearr_18671_18718[(2)] = null);

(statearr_18671_18718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (32))){
var inst_18639 = (state_18659[(11)]);
var inst_18641 = (state_18659[(2)]);
var inst_18642 = [inst_18641];
var inst_18643 = cljs.core.PersistentHashMap.fromArrays(inst_18639,inst_18642);
var state_18659__$1 = state_18659;
var statearr_18672_18719 = state_18659__$1;
(statearr_18672_18719[(2)] = inst_18643);

(statearr_18672_18719[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (13))){
var inst_18582 = (state_18659[(12)]);
var inst_18590 = cljs.core.second.call(null,inst_18582);
var inst_18591 = cljs.core.reset_BANG_.call(null,_STAR_current_ns,inst_18590);
var state_18659__$1 = state_18659;
var statearr_18673_18720 = state_18659__$1;
(statearr_18673_18720[(2)] = inst_18591);

(statearr_18673_18720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (22))){
var inst_18630 = (state_18659[(2)]);
var state_18659__$1 = state_18659;
if(cljs.core.truth_(inst_18630)){
var statearr_18674_18721 = state_18659__$1;
(statearr_18674_18721[(1)] = (26));

} else {
var statearr_18675_18722 = state_18659__$1;
(statearr_18675_18722[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (29))){
var inst_18636 = (state_18659[(13)]);
var inst_18639 = [new cljs.core.Keyword(null,"value","value",305978217)];
var state_18659__$1 = (function (){var statearr_18676 = state_18659;
(statearr_18676[(11)] = inst_18639);

return statearr_18676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18659__$1,(32),inst_18636);
} else {
if((state_val_18660 === (6))){
var inst_18651 = (state_18659[(2)]);
var state_18659__$1 = state_18659;
var statearr_18677_18723 = state_18659__$1;
(statearr_18677_18723[(2)] = inst_18651);

(statearr_18677_18723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (28))){
var inst_18635 = (state_18659[(14)]);
var inst_18636 = (state_18659[(13)]);
var inst_18635__$1 = (state_18659[(2)]);
var inst_18636__$1 = cljs.core.get.call(null,inst_18635__$1,new cljs.core.Keyword(null,"value","value",305978217));
var inst_18637 = (inst_18636__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_18659__$1 = (function (){var statearr_18678 = state_18659;
(statearr_18678[(14)] = inst_18635__$1);

(statearr_18678[(13)] = inst_18636__$1);

return statearr_18678;
})();
if(cljs.core.truth_(inst_18637)){
var statearr_18679_18724 = state_18659__$1;
(statearr_18679_18724[(1)] = (29));

} else {
var statearr_18680_18725 = state_18659__$1;
(statearr_18680_18725[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (25))){
var inst_18627 = (state_18659[(2)]);
var state_18659__$1 = state_18659;
var statearr_18681_18726 = state_18659__$1;
(statearr_18681_18726[(2)] = inst_18627);

(statearr_18681_18726[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (17))){
var inst_18580 = (state_18659[(15)]);
var inst_18582 = (state_18659[(12)]);
var inst_18583 = (state_18659[(16)]);
var inst_18605 = (function (){var current_ns = inst_18580;
var form = inst_18582;
var opts__$1 = inst_18583;
return ((function (current_ns,form,opts__$1,inst_18580,inst_18582,inst_18583,state_val_18660,c__16591__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__18566_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__18566_SHARP_);
});
;})(current_ns,form,opts__$1,inst_18580,inst_18582,inst_18583,state_val_18660,c__16591__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_18606 = cljs.js.eval.call(null,_STAR_state,inst_18582,inst_18583,inst_18605);
var state_18659__$1 = state_18659;
var statearr_18682_18727 = state_18659__$1;
(statearr_18682_18727[(2)] = inst_18606);

(statearr_18682_18727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (3))){
var inst_18653 = (state_18659[(2)]);
var inst_18654 = (function (){return ((function (inst_18653,state_val_18660,c__16591__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__18567_SHARP_){
var or__8674__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__18567_SHARP_);
if(cljs.core.truth_(or__8674__auto__)){
return or__8674__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__18567_SHARP_);
}
});
;})(inst_18653,state_val_18660,c__16591__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_18655 = cljs.core.deref.call(null,_STAR_results);
var inst_18656 = cljs.core.mapv.call(null,inst_18654,inst_18655);
var inst_18657 = cb.call(null,inst_18656);
var state_18659__$1 = (function (){var statearr_18683 = state_18659;
(statearr_18683[(17)] = inst_18653);

return statearr_18683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18659__$1,inst_18657);
} else {
if((state_val_18660 === (12))){
var inst_18582 = (state_18659[(12)]);
var inst_18597 = (state_18659[(2)]);
var inst_18598 = (inst_18582 instanceof Error);
var state_18659__$1 = (function (){var statearr_18684 = state_18659;
(statearr_18684[(18)] = inst_18597);

return statearr_18684;
})();
if(cljs.core.truth_(inst_18598)){
var statearr_18685_18728 = state_18659__$1;
(statearr_18685_18728[(1)] = (16));

} else {
var statearr_18686_18729 = state_18659__$1;
(statearr_18686_18729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (2))){
var inst_18569 = cljs.core.deref.call(null,_STAR_forms);
var inst_18570 = cljs.core.seq.call(null,inst_18569);
var state_18659__$1 = state_18659;
if(inst_18570){
var statearr_18687_18730 = state_18659__$1;
(statearr_18687_18730[(1)] = (4));

} else {
var statearr_18688_18731 = state_18659__$1;
(statearr_18688_18731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (23))){
var state_18659__$1 = state_18659;
var statearr_18689_18732 = state_18659__$1;
(statearr_18689_18732[(2)] = true);

(statearr_18689_18732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (19))){
var inst_18614 = (state_18659[(9)]);
var inst_18614__$1 = (state_18659[(2)]);
var inst_18616 = (inst_18614__$1 == null);
var inst_18617 = cljs.core.not.call(null,inst_18616);
var state_18659__$1 = (function (){var statearr_18690 = state_18659;
(statearr_18690[(9)] = inst_18614__$1);

return statearr_18690;
})();
if(inst_18617){
var statearr_18691_18733 = state_18659__$1;
(statearr_18691_18733[(1)] = (20));

} else {
var statearr_18692_18734 = state_18659__$1;
(statearr_18692_18734[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (11))){
var state_18659__$1 = state_18659;
var statearr_18693_18735 = state_18659__$1;
(statearr_18693_18735[(2)] = null);

(statearr_18693_18735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (9))){
var inst_18580 = (state_18659[(15)]);
var inst_18582 = (state_18659[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18659,(8),Error,null,(7));
var inst_18580__$1 = cljs.core.deref.call(null,_STAR_current_ns);
var inst_18581 = cljs.core.deref.call(null,_STAR_forms);
var inst_18582__$1 = cljs.core.first.call(null,inst_18581);
var inst_18583 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_18580__$1);
var inst_18584 = cljs.core.list_QMARK_.call(null,inst_18582__$1);
var state_18659__$1 = (function (){var statearr_18694 = state_18659;
(statearr_18694[(15)] = inst_18580__$1);

(statearr_18694[(12)] = inst_18582__$1);

(statearr_18694[(16)] = inst_18583);

return statearr_18694;
})();
if(inst_18584){
var statearr_18695_18736 = state_18659__$1;
(statearr_18695_18736[(1)] = (10));

} else {
var statearr_18696_18737 = state_18659__$1;
(statearr_18696_18737[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (5))){
var state_18659__$1 = state_18659;
var statearr_18697_18738 = state_18659__$1;
(statearr_18697_18738[(2)] = null);

(statearr_18697_18738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (14))){
var state_18659__$1 = state_18659;
var statearr_18698_18739 = state_18659__$1;
(statearr_18698_18739[(2)] = null);

(statearr_18698_18739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (26))){
var inst_18614 = (state_18659[(9)]);
var inst_18632 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18614);
var state_18659__$1 = state_18659;
var statearr_18699_18740 = state_18659__$1;
(statearr_18699_18740[(2)] = inst_18632);

(statearr_18699_18740[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (16))){
var inst_18582 = (state_18659[(12)]);
var inst_18600 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18601 = [inst_18582];
var inst_18602 = cljs.core.PersistentHashMap.fromArrays(inst_18600,inst_18601);
var inst_18603 = cljs.core.async.put_BANG_.call(null,channel,inst_18602);
var state_18659__$1 = state_18659;
var statearr_18700_18741 = state_18659__$1;
(statearr_18700_18741[(2)] = inst_18603);

(statearr_18700_18741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (30))){
var inst_18635 = (state_18659[(14)]);
var state_18659__$1 = state_18659;
var statearr_18701_18742 = state_18659__$1;
(statearr_18701_18742[(2)] = inst_18635);

(statearr_18701_18742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (10))){
var inst_18582 = (state_18659[(12)]);
var inst_18586 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_18587 = cljs.core.first.call(null,inst_18582);
var inst_18588 = cljs.core._EQ_.call(null,inst_18586,inst_18587);
var state_18659__$1 = state_18659;
if(inst_18588){
var statearr_18702_18743 = state_18659__$1;
(statearr_18702_18743[(1)] = (13));

} else {
var statearr_18703_18744 = state_18659__$1;
(statearr_18703_18744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (18))){
var inst_18608 = (state_18659[(2)]);
var state_18659__$1 = state_18659;
var statearr_18704_18745 = state_18659__$1;
(statearr_18704_18745[(2)] = inst_18608);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18659__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18660 === (8))){
var inst_18572 = (state_18659[(2)]);
var inst_18573 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18574 = [inst_18572];
var inst_18575 = cljs.core.PersistentHashMap.fromArrays(inst_18573,inst_18574);
var inst_18576 = cljs.core.async.put_BANG_.call(null,channel,inst_18575);
var state_18659__$1 = state_18659;
var statearr_18705_18746 = state_18659__$1;
(statearr_18705_18746[(2)] = inst_18576);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18659__$1);

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
});})(c__16591__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__16501__auto__,c__16591__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__16502__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__16502__auto____0 = (function (){
var statearr_18706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18706[(0)] = eval_soup$core$eval_forms_$_state_machine__16502__auto__);

(statearr_18706[(1)] = (1));

return statearr_18706;
});
var eval_soup$core$eval_forms_$_state_machine__16502__auto____1 = (function (state_18659){
while(true){
var ret_value__16503__auto__ = (function (){try{while(true){
var result__16504__auto__ = switch__16501__auto__.call(null,state_18659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16504__auto__;
}
break;
}
}catch (e18707){if((e18707 instanceof Object)){
var ex__16505__auto__ = e18707;
var statearr_18708_18747 = state_18659;
(statearr_18708_18747[(5)] = ex__16505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18748 = state_18659;
state_18659 = G__18748;
continue;
} else {
return ret_value__16503__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__16502__auto__ = function(state_18659){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__16502__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__16502__auto____1.call(this,state_18659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__16502__auto____0;
eval_soup$core$eval_forms_$_state_machine__16502__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__16502__auto____1;
return eval_soup$core$eval_forms_$_state_machine__16502__auto__;
})()
;})(switch__16501__auto__,c__16591__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__16593__auto__ = (function (){var statearr_18709 = f__16592__auto__.call(null);
(statearr_18709[(6)] = c__16591__auto__);

return statearr_18709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16593__auto__);
});})(c__16591__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__16591__auto__;
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
var iter__9556__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__18749(s__18750){
return (new cljs.core.LazySeq(null,(function (){
var s__18750__$1 = s__18750;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18750__$1);
if(temp__5457__auto__){
var s__18750__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18750__$2)){
var c__9554__auto__ = cljs.core.chunk_first.call(null,s__18750__$2);
var size__9555__auto__ = cljs.core.count.call(null,c__9554__auto__);
var b__18752 = cljs.core.chunk_buffer.call(null,size__9555__auto__);
if((function (){var i__18751 = (0);
while(true){
if((i__18751 < size__9555__auto__)){
var i = cljs.core._nth.call(null,c__9554__auto__,i__18751);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__18752,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__18753 = (i__18751 + (1));
i__18751 = G__18753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18752),eval_soup$core$add_timeouts_if_necessary_$_iter__18749.call(null,cljs.core.chunk_rest.call(null,s__18750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18752),null);
}
} else {
var i = cljs.core.first.call(null,s__18750__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__18749.call(null,cljs.core.rest.call(null,s__18750__$2)));
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
var G__18756 = arguments.length;
switch (G__18756) {
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

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__18757){
var map__18758 = p__18757;
var map__18758__$1 = ((((!((map__18758 == null)))?((((map__18758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18758):map__18758);
var opts = map__18758__$1;
var _STAR_current_ns = cljs.core.get.call(null,map__18758__$1,new cljs.core.Keyword(null,"*current-ns","*current-ns",547476271),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var _STAR_state = cljs.core.get.call(null,map__18758__$1,new cljs.core.Keyword(null,"*state","*state",471581315),eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.call(null,map__18758__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108),eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.call(null,map__18758__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(4000));
var disable_timeout_QMARK_ = cljs.core.get.call(null,map__18758__$1,new cljs.core.Keyword(null,"disable-timeout?","disable-timeout?",-760039639),false);
var forms__$1 = cljs.core.mapv.call(null,((function (map__18758,map__18758__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__18754_SHARP_){
if(typeof p1__18754_SHARP_ === 'string'){
return eval_soup.core.str__GT_form.call(null,cljs.core.deref.call(null,_STAR_current_ns),p1__18754_SHARP_);
} else {
return p1__18754_SHARP_;
}
});})(map__18758,map__18758__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null))], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out."))))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__9628__auto__ = cljs.core.deref.call(null,_STAR_current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9628__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null)));
var timeout_cb = ((function (forms__$1,init_forms,map__18758,map__18758__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__18758,map__18758__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__18758,map__18758__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,(cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__18758,map__18758__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms.call(null,init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
