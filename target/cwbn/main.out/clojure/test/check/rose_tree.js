// Compiled by ClojureScript 1.9.946 {}
goog.provide('clojure.test.check.rose_tree');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IIndexed}
*/
clojure.test.check.rose_tree.RoseTree = (function (root,children){
this.root = root;
this.children = children;
this.cljs$lang$protocol_mask$partition0$ = 16;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.call(null,i,(1))){
return self__.children;
} else {
throw (new Error("Index out of bounds in rose tree"));

}
}
});

clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.call(null,i,(1))){
return self__.children;
} else {
return not_found;

}
}
});

clojure.test.check.rose_tree.RoseTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

clojure.test.check.rose_tree.RoseTree.cljs$lang$type = true;

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorStr = "clojure.test.check.rose-tree/RoseTree";

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorPrWriter = (function (this__9345__auto__,writer__9346__auto__,opt__9347__auto__){
return cljs.core._write.call(null,writer__9346__auto__,"clojure.test.check.rose-tree/RoseTree");
});

clojure.test.check.rose_tree.__GT_RoseTree = (function clojure$test$check$rose_tree$__GT_RoseTree(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});

/**
 * Returns the root of a Rose tree.
 */
clojure.test.check.rose_tree.root = (function clojure$test$check$rose_tree$root(rose){
return rose.root;
});
/**
 * Returns the children of the root of the Rose tree.
 */
clojure.test.check.rose_tree.children = (function clojure$test$check$rose_tree$children(rose){
return rose.children;
});
clojure.test.check.rose_tree.make_rose = (function clojure$test$check$rose_tree$make_rose(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});
/**
 * Exclude the nth value in a collection.
 */
clojure.test.check.rose_tree.exclude_nth = (function clojure$test$check$rose_tree$exclude_nth(n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5457__auto__ = cljs.core.seq.call(null,coll);
if(temp__5457__auto__){
var s = temp__5457__auto__;
if((n === (0))){
return cljs.core.rest.call(null,coll);
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure.test.check.rose_tree.exclude_nth.call(null,(n - (1)),cljs.core.rest.call(null,s)));
}
} else {
return null;
}
}),null,null));
});
/**
 * Turn a tree of trees into a single tree. Does this by concatenating
 *   children of the inner and outer trees.
 */
clojure.test.check.rose_tree.join = (function clojure$test$check$rose_tree$join(rose){
var outer_root = clojure.test.check.rose_tree.root.call(null,rose);
var outer_children = clojure.test.check.rose_tree.children.call(null,rose);
var inner_root = clojure.test.check.rose_tree.root.call(null,outer_root);
var inner_children = clojure.test.check.rose_tree.children.call(null,outer_root);
return clojure.test.check.rose_tree.make_rose.call(null,inner_root,cljs.core.concat.call(null,cljs.core.map.call(null,clojure.test.check.rose_tree.join,outer_children),inner_children));
});
/**
 * Puts a value `x` into a Rose tree, with no children.
 */
clojure.test.check.rose_tree.pure = (function clojure$test$check$rose_tree$pure(x){
return clojure.test.check.rose_tree.make_rose.call(null,x,cljs.core.PersistentVector.EMPTY);
});
/**
 * Applies functions `f` to all values in the tree.
 */
clojure.test.check.rose_tree.fmap = (function clojure$test$check$rose_tree$fmap(f,rose){
return clojure.test.check.rose_tree.make_rose.call(null,f.call(null,clojure.test.check.rose_tree.root.call(null,rose)),cljs.core.map.call(null,(function (p1__20850_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__20850_SHARP_);
}),clojure.test.check.rose_tree.children.call(null,rose)));
});
/**
 * Takes a Rose tree (m) and a function (k) from
 *   values to Rose tree and returns a new Rose tree.
 *   This is the monadic bind (>>=) for Rose trees.
 */
clojure.test.check.rose_tree.bind = (function clojure$test$check$rose_tree$bind(m,k){
return clojure.test.check.rose_tree.join.call(null,clojure.test.check.rose_tree.fmap.call(null,k,m));
});
/**
 * Returns a new Rose tree whose values pass `pred`. Values who
 *   do not pass `pred` have their children cut out as well.
 *   Takes a list of roses, not a rose
 */
clojure.test.check.rose_tree.filter = (function clojure$test$check$rose_tree$filter(pred,rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.map.call(null,(function (p1__20851_SHARP_){
return clojure.test.check.rose_tree.filter.call(null,pred,p1__20851_SHARP_);
}),cljs.core.filter.call(null,(function (p1__20852_SHARP_){
return pred.call(null,clojure.test.check.rose_tree.root.call(null,p1__20852_SHARP_));
}),clojure.test.check.rose_tree.children.call(null,rose))));
});
/**
 * Create a seq of vectors, where each rose in turn, has been replaced
 *   by its children.
 */
clojure.test.check.rose_tree.permutations = (function clojure$test$check$rose_tree$permutations(roses){
var iter__9556__auto__ = (function clojure$test$check$rose_tree$permutations_$_iter__20853(s__20854){
return (new cljs.core.LazySeq(null,(function (){
var s__20854__$1 = s__20854;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20854__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__20859 = cljs.core.first.call(null,xs__6012__auto__);
var rose = cljs.core.nth.call(null,vec__20859,(0),null);
var index = cljs.core.nth.call(null,vec__20859,(1),null);
var iterys__9552__auto__ = ((function (s__20854__$1,vec__20859,rose,index,xs__6012__auto__,temp__5457__auto__){
return (function clojure$test$check$rose_tree$permutations_$_iter__20853_$_iter__20855(s__20856){
return (new cljs.core.LazySeq(null,((function (s__20854__$1,vec__20859,rose,index,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__20856__$1 = s__20856;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__20856__$1);
if(temp__5457__auto____$1){
var s__20856__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20856__$2)){
var c__9554__auto__ = cljs.core.chunk_first.call(null,s__20856__$2);
var size__9555__auto__ = cljs.core.count.call(null,c__9554__auto__);
var b__20858 = cljs.core.chunk_buffer.call(null,size__9555__auto__);
if((function (){var i__20857 = (0);
while(true){
if((i__20857 < size__9555__auto__)){
var child = cljs.core._nth.call(null,c__9554__auto__,i__20857);
cljs.core.chunk_append.call(null,b__20858,cljs.core.assoc.call(null,roses,index,child));

var G__20862 = (i__20857 + (1));
i__20857 = G__20862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20858),clojure$test$check$rose_tree$permutations_$_iter__20853_$_iter__20855.call(null,cljs.core.chunk_rest.call(null,s__20856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20858),null);
}
} else {
var child = cljs.core.first.call(null,s__20856__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,roses,index,child),clojure$test$check$rose_tree$permutations_$_iter__20853_$_iter__20855.call(null,cljs.core.rest.call(null,s__20856__$2)));
}
} else {
return null;
}
break;
}
});})(s__20854__$1,vec__20859,rose,index,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__20854__$1,vec__20859,rose,index,xs__6012__auto__,temp__5457__auto__))
;
var fs__9553__auto__ = cljs.core.seq.call(null,iterys__9552__auto__.call(null,clojure.test.check.rose_tree.children.call(null,rose)));
if(fs__9553__auto__){
return cljs.core.concat.call(null,fs__9553__auto__,clojure$test$check$rose_tree$permutations_$_iter__20853.call(null,cljs.core.rest.call(null,s__20854__$1)));
} else {
var G__20863 = cljs.core.rest.call(null,s__20854__$1);
s__20854__$1 = G__20863;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9556__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,roses,cljs.core.range.call(null)));
});
/**
 * Apply `f` to the sequence of Rose trees `roses`.
 */
clojure.test.check.rose_tree.zip = (function clojure$test$check$rose_tree$zip(f,roses){
return clojure.test.check.rose_tree.make_rose.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,clojure.test.check.rose_tree.root,roses)),cljs.core.map.call(null,(function (p1__20864_SHARP_){
return clojure.test.check.rose_tree.zip.call(null,f,p1__20864_SHARP_);
}),clojure.test.check.rose_tree.permutations.call(null,roses)));
});
clojure.test.check.rose_tree.remove = (function clojure$test$check$rose_tree$remove(roses){
return cljs.core.concat.call(null,cljs.core.map_indexed.call(null,(function (index,_){
return clojure.test.check.rose_tree.exclude_nth.call(null,index,roses);
}),roses),clojure.test.check.rose_tree.permutations.call(null,cljs.core.vec.call(null,roses)));
});
clojure.test.check.rose_tree.shrink = (function clojure$test$check$rose_tree$shrink(f,roses){
if(cljs.core.seq.call(null,roses)){
return clojure.test.check.rose_tree.make_rose.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,clojure.test.check.rose_tree.root,roses)),cljs.core.map.call(null,(function (p1__20865_SHARP_){
return clojure.test.check.rose_tree.shrink.call(null,f,p1__20865_SHARP_);
}),clojure.test.check.rose_tree.remove.call(null,roses)));
} else {
return clojure.test.check.rose_tree.make_rose.call(null,f.call(null),cljs.core.PersistentVector.EMPTY);
}
});
/**
 * Return a new rose-tree whose depth-one children
 *   are the children from depth one _and_ two of the input
 *   tree.
 */
clojure.test.check.rose_tree.collapse = (function clojure$test$check$rose_tree$collapse(rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),(function (){var the_children = clojure.test.check.rose_tree.children.call(null,rose);
return cljs.core.concat.call(null,cljs.core.map.call(null,clojure.test.check.rose_tree.collapse,the_children),cljs.core.map.call(null,clojure.test.check.rose_tree.collapse,cljs.core.mapcat.call(null,clojure.test.check.rose_tree.children,the_children)));
})());
});
clojure.test.check.rose_tree.make_stack = (function clojure$test$check$rose_tree$make_stack(children,stack){
var temp__5455__auto__ = cljs.core.seq.call(null,children);
if(temp__5455__auto__){
var s = temp__5455__auto__;
return cljs.core.cons.call(null,children,stack);
} else {
return stack;
}
});
/**
 * Create a lazy-seq of all of the (unique) nodes in a shrink-tree.
 *   This assumes that two nodes with the same value have the same children.
 *   While it's not common, it's possible to create trees that don't
 *   fit that description. This function is significantly faster than
 *   brute-force enumerating all of the nodes in a tree, as there will
 *   be many duplicates.
 */
clojure.test.check.rose_tree.seq = (function clojure$test$check$rose_tree$seq(rose){
var helper = (function clojure$test$check$rose_tree$seq_$_helper(rose__$1,seen,stack){
var node = clojure.test.check.rose_tree.root.call(null,rose__$1);
var the_children = clojure.test.check.rose_tree.children.call(null,rose__$1);
return (new cljs.core.LazySeq(null,((function (node,the_children){
return (function (){
if(cljs.core.not.call(null,seen.call(null,node))){
return cljs.core.cons.call(null,node,((cljs.core.seq.call(null,the_children))?clojure$test$check$rose_tree$seq_$_helper.call(null,cljs.core.first.call(null,the_children),cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,cljs.core.rest.call(null,the_children),stack)):(function (){var temp__5457__auto__ = cljs.core.seq.call(null,stack);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var f = cljs.core.ffirst.call(null,s);
var r = cljs.core.rest.call(null,cljs.core.first.call(null,s));
return clojure$test$check$rose_tree$seq_$_helper.call(null,f,cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,r,cljs.core.rest.call(null,s)));
} else {
return null;
}
})()));
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,stack);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var f = cljs.core.ffirst.call(null,s);
var r = cljs.core.rest.call(null,cljs.core.first.call(null,s));
return clojure$test$check$rose_tree$seq_$_helper.call(null,f,seen,clojure.test.check.rose_tree.make_stack.call(null,r,cljs.core.rest.call(null,s)));
} else {
return null;
}
}
});})(node,the_children))
,null,null));
});
return helper.call(null,rose,cljs.core.PersistentHashSet.EMPTY,cljs.core.List.EMPTY);
});

//# sourceMappingURL=rose_tree.js.map
