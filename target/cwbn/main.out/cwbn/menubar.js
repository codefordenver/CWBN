// Compiled by ClojureScript 1.9.946 {}
goog.provide('cwbn.menubar');
goog.require('cljs.core');
goog.require('reagent.core');
cwbn.menubar.logged_in_status = reagent.core.atom.call(null,"false");
cwbn.menubar.edit_mode = reagent.core.atom.call(null,"false");
cwbn.menubar.logged_in_selection = (function cwbn$menubar$logged_in_selection(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cwbn.menubar.logged_in_status),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22671_SHARP_){
return cljs.core.reset_BANG_.call(null,cwbn.menubar.logged_in_status,p1__22671_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null),"logged-in"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),false], null),"logged-out"], null)], null);
});
cwbn.menubar.edit_mode_selection = (function cwbn$menubar$edit_mode_selection(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cwbn.menubar.edit_mode),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22672_SHARP_){
return cljs.core.reset_BANG_.call(null,cwbn.menubar.edit_mode,p1__22672_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null),"Edit Mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),false], null),"Search Mode"], null)], null);
});
cwbn.menubar.generic_menubar = (function cwbn$menubar$generic_menubar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"<--Logo Here-->","<--About Component Link Here-->"], null);
});
cwbn.menubar.logged_in_menubar = (function cwbn$menubar$logged_in_menubar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.menubar.generic_menubar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.menubar.edit_mode_selection], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.menubar.logged_in_selection], null)], null);
});
cwbn.menubar.logged_out_menubar = (function cwbn$menubar$logged_out_menubar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.menubar.generic_menubar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.menubar.logged_in_selection], null)], null);
});
cwbn.menubar.what_menubar_to_show = (function cwbn$menubar$what_menubar_to_show(logged_in_status){
if(cljs.core._EQ_.call(null,logged_in_status,"true")){
return cwbn.menubar.logged_in_menubar.call(null);
} else {
return cwbn.menubar.logged_out_menubar.call(null);
}
});
cwbn.menubar.menubar = (function cwbn$menubar$menubar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.menubar.what_menubar_to_show,cljs.core.deref.call(null,cwbn.menubar.logged_in_status)], null)], null)], null);
});

//# sourceMappingURL=menubar.js.map
