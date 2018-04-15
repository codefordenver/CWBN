// Compiled by ClojureScript 1.9.946 {}
goog.provide('cwbn.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('cwbn.submit');
goog.require('cwbn.menubar');
goog.require('cwbn.out');
goog.require('cwbn.ins');
cwbn.client.conditional_component = (function cwbn$client$conditional_component(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cwbn.menubar.logged_in_status),"true")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.ins.ins_component], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.out.out_component], null);
}
});
cwbn.client.content = (function cwbn$client$content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.menubar.menubar], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.client.conditional_component], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cwbn.client.content], null),document.querySelector("#app"));

//# sourceMappingURL=client.js.map
