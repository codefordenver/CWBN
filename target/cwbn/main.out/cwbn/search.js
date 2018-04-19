// Compiled by ClojureScript 1.9.946 {}
goog.provide('cwbn.search');
goog.require('cljs.core');
goog.require('reagent.core');
cwbn.search.search_term = reagent.core.atom.call(null,"");
cwbn.search.search_input = (function cwbn$search$search_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search ...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cwbn.search.search_term),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19348_SHARP_){
return cljs.core.reset_BANG_.call(null,cwbn.search.search_term,p1__19348_SHARP_.target.value);
})], null)], null)], null);
});
cwbn.search.search_result = (function cwbn$search$search_result(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"search results"], null);
});
cwbn.search.search_component = (function cwbn$search$search_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.search.search_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,cwbn.search.search_term)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.search.search_result], null)], null)], null);
});

//# sourceMappingURL=search.js.map
