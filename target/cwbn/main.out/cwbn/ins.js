// Compiled by ClojureScript 1.9.946 {}
goog.provide('cwbn.ins');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cwbn.submit');
goog.require('cwbn.search');
goog.require('cwbn.menubar');
goog.require('cljs.reader');
cwbn.ins.add_entity = (function cwbn$ins$add_entity(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.submit.submit_content], null)], null);
});
cwbn.ins.update_entity = (function cwbn$ins$update_entity(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Update-one"], null);
});
cwbn.ins.delete_entity = (function cwbn$ins$delete_entity(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Delete-one"], null);
});
cwbn.ins.view_all = (function cwbn$ins$view_all(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"view"], null);
});
cwbn.ins.button_selection = reagent.core.atom.call(null,(0));
cwbn.ins.component_selection = (function cwbn$ins$component_selection(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,cwbn.ins.button_selection,(1));
})], null),"View All"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,cwbn.ins.button_selection,(2));
})], null),"Update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,cwbn.ins.button_selection,(3));
})], null),"Add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,cwbn.ins.button_selection,(4));
})], null),"Delete"], null)], null);
});
cwbn.ins.edit_component = (function cwbn$ins$edit_component(button_selection){
if(cljs.core._EQ_.call(null,button_selection,(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.view_all], null);
} else {
if(cljs.core._EQ_.call(null,button_selection,(2))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.update_entity], null);
} else {
if(cljs.core._EQ_.call(null,button_selection,(3))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.add_entity], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.delete_entity], null);
}
}
}
});
cwbn.ins.what_component_to_show = (function cwbn$ins$what_component_to_show(edit_mode){
if(cljs.core._EQ_.call(null,edit_mode,"true")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.component_selection], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.edit_component,cljs.core.deref.call(null,cwbn.ins.button_selection)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.search.search_component], null);
}
});
cwbn.ins.ins_component = (function cwbn$ins$ins_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"logged-in-component",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.what_component_to_show,cljs.core.deref.call(null,cwbn.menubar.edit_mode)], null)], null)], null);
});

//# sourceMappingURL=ins.js.map
