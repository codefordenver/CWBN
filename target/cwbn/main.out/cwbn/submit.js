// Compiled by ClojureScript 1.9.946 {}
goog.provide('cwbn.submit');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('goog.net.XhrIo');
cwbn.submit.entities = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cwbn.submit.get_entities = (function cwbn$submit$get_entities(){
return goog.net.XhrIo.send("/entities",(function (e){
return cljs.core.reset_BANG_.call(null,cwbn.submit.entities,cljs.reader.read_string.call(null,e.target.getResponseText()));
}),"GET");
});
cwbn.submit.on_submit = (function cwbn$submit$on_submit(e){
e.preventDefault();

var input = document.querySelector("#input");
var name = document.querySelector("#name");
var type = document.querySelector("#type");
var address = document.querySelector("#address");
var support_type = document.querySelector("#support_type");
return goog.net.XhrIo.send("/entities",((function (input,name,type,address,support_type){
return (function (e__$1){
name.value = "";

type.value = "";

address.value = "";

support_type.value = "";

return cwbn.submit.get_entities.call(null);
});})(input,name,type,address,support_type))
,"POST",cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),(((cljs.core.count.call(null,name.value) > (0)))?name.value:null),new cljs.core.Keyword(null,"type","type",1174270348),type.value,new cljs.core.Keyword(null,"address","address",559499426),address.value,new cljs.core.Keyword(null,"support_type","support_type",-797205304),support_type.value], null)));
});
cwbn.submit.submit_content = (function cwbn$submit$submit_content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),cwbn.submit.on_submit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"name",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"type",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"type",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"address",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"address",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"support_type",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"support_type",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"pre_idea",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"pre_idea",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__9556__auto__ = (function cwbn$submit$submit_content_$_iter__20861(s__20862){
return (new cljs.core.LazySeq(null,(function (){
var s__20862__$1 = s__20862;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20862__$1);
if(temp__5457__auto__){
var s__20862__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20862__$2)){
var c__9554__auto__ = cljs.core.chunk_first.call(null,s__20862__$2);
var size__9555__auto__ = cljs.core.count.call(null,c__9554__auto__);
var b__20864 = cljs.core.chunk_buffer.call(null,size__9555__auto__);
if((function (){var i__20863 = (0);
while(true){
if((i__20863 < size__9555__auto__)){
var entity = cljs.core._nth.call(null,c__9554__auto__,i__20863);
cljs.core.chunk_append.call(null,b__20864,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"support_type","support_type",-797205304).cljs$core$IFn$_invoke$arity$1(entity)], null)], null));

var G__20865 = (i__20863 + (1));
i__20863 = G__20865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20864),cwbn$submit$submit_content_$_iter__20861.call(null,cljs.core.chunk_rest.call(null,s__20862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20864),null);
}
} else {
var entity = cljs.core.first.call(null,s__20862__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"support_type","support_type",-797205304).cljs$core$IFn$_invoke$arity$1(entity)], null)], null),cwbn$submit$submit_content_$_iter__20861.call(null,cljs.core.rest.call(null,s__20862__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9556__auto__.call(null,cljs.core.deref.call(null,cwbn.submit.entities));
})())], null)], null);
});
window.onload = cwbn.submit.get_entities.call(null);

//# sourceMappingURL=submit.js.map
