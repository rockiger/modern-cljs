// Compiled by ClojureScript 0.0-2755 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17779_17783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17780_17784 = null;
var count__17781_17785 = (0);
var i__17782_17786 = (0);
while(true){
if((i__17782_17786 < count__17781_17785)){
var f_17787 = cljs.core._nth.call(null,chunk__17780_17784,i__17782_17786);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17787);

var G__17788 = seq__17779_17783;
var G__17789 = chunk__17780_17784;
var G__17790 = count__17781_17785;
var G__17791 = (i__17782_17786 + (1));
seq__17779_17783 = G__17788;
chunk__17780_17784 = G__17789;
count__17781_17785 = G__17790;
i__17782_17786 = G__17791;
continue;
} else {
var temp__4126__auto___17792 = cljs.core.seq.call(null,seq__17779_17783);
if(temp__4126__auto___17792){
var seq__17779_17793__$1 = temp__4126__auto___17792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17779_17793__$1)){
var c__4712__auto___17794 = cljs.core.chunk_first.call(null,seq__17779_17793__$1);
var G__17795 = cljs.core.chunk_rest.call(null,seq__17779_17793__$1);
var G__17796 = c__4712__auto___17794;
var G__17797 = cljs.core.count.call(null,c__4712__auto___17794);
var G__17798 = (0);
seq__17779_17783 = G__17795;
chunk__17780_17784 = G__17796;
count__17781_17785 = G__17797;
i__17782_17786 = G__17798;
continue;
} else {
var f_17799 = cljs.core.first.call(null,seq__17779_17793__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17799);

var G__17800 = cljs.core.next.call(null,seq__17779_17793__$1);
var G__17801 = null;
var G__17802 = (0);
var G__17803 = (0);
seq__17779_17783 = G__17800;
chunk__17780_17784 = G__17801;
count__17781_17785 = G__17802;
i__17782_17786 = G__17803;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});
