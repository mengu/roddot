qx.$$packageData['2e4a162d0aba']={"locales":{},"resources":{"qx/icon/Tango/22/actions/document-send.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-important.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-mark-junk.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/mail-message-new.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-chart.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-harddisk.png":[22,22,"png","qx"],"qx/icon/Tango/22/devices/drive-optical.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/media-image.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-remote.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-server.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/network-workgroup.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-desktop.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-home.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash-full.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/user-trash.png":[22,22,"png","qx"]},"translations":{}};

qx.Part.$$notifyLoad("2e4a162d0aba", function() {
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(g){var h=g.getBounds();

if(h){var top=this._getWidget().getItemTop(g);
return {top:top,bottom:top+h.height};
}},_isSelectable:function(f){return this._isItemSelectable(f)&&f instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(p){var s=false;

if(!p){s=this._userInteraction;
this._userInteraction=true;
}var r=this._getWidget();
var t=[];

if(r.getRoot()!=null){var q=r.getRoot().getItems(true,!!p,r.getHideRoot());

for(var i=0;i<q.length;i++){if(this._isSelectable(q[i])){t.push(q[i]);
}}}this._userInteraction=s;
return t;
},_getSelectableRange:function(k,l){if(k===l){return [k];
}var m=this.getSelectables();
var n=m.indexOf(k);
var o=m.indexOf(l);

if(n<0||o<0){return [];
}
if(n<o){return m.slice(n,o+1);
}else{return m.slice(o,n+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var j=this.getSelectables();

if(j.length>0){return j[j.length-1];
}else{return null;
}},_getRelatedSelectable:function(u,v){var w=this._getWidget();
var x=null;

switch(v){case d:x=w.getPreviousNodeOf(u,false);
break;
case b:x=w.getNextNodeOf(u,false);
break;
case c:case e:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var n="dblclick",m="click",l="Boolean",k="excluded",j="visible",h="qx.event.type.Data",g="_applyOpenMode",f="Space",d="Left",c="Enter",B="changeOpenMode",A="__kN",z="_applyRootOpenClose",y="changeSelection",x="qx.ui.tree.Tree",w="tree",v="_applyHideRoot",u="changeRoot",t="_applyRoot",s="keypress",q="none",r="pane",o="Right",p="qx.ui.tree.AbstractTreeItem";
qx.Class.define(x,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__kN=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(r).add(this.__kN);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(y,this._onChangeSelection,this);
this.addListener(s,this._onKeyPress,this);
},events:{addItem:h,removeItem:h},properties:{openMode:{check:[m,n,q],init:n,apply:g,event:B,themeable:true},root:{check:p,init:null,nullable:true,event:u,apply:t},hideRoot:{check:l,init:false,apply:v},rootOpenClose:{check:l,init:false,apply:z},appearance:{refine:true,init:w},focusable:{refine:true,init:true}},members:{__kN:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__kN;
},_applyRoot:function(ba,bb){var bc=this.getChildrenContainer();

if(bb){bc.remove(bb);

if(bb.hasChildren()){bc.remove(bb.getChildrenContainer());
}}
if(ba){bc.add(ba);

if(ba.hasChildren()){bc.add(ba.getChildrenContainer());
}ba.setVisibility(this.getHideRoot()?k:j);
ba.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(L,M){var N=this.getRoot();

if(!N){return;
}N.setVisibility(L?k:j);
N.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(C,D){var E=this.getRoot();

if(!E){return;
}E.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__kN;
},getNextNodeOf:function(bd,be){if((be!==false||bd.isOpen())&&bd.hasChildren()){return bd.getChildren()[0];
}
while(bd){var parent=bd.getParent();

if(!parent){return null;
}var bg=parent.getChildren();
var bf=bg.indexOf(bd);

if(bf>-1&&bf<bg.length-1){return bg[bf+1];
}bd=parent;
}return null;
},getPreviousNodeOf:function(T,U){var parent=T.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==T){return null;
}}}else{if(T==this.getRoot()){return null;
}}var X=parent.getChildren();
var V=X.indexOf(T);

if(V>0){var W=X[V-1];

while((U!==false||W.isOpen())&&W.hasChildren()){var Y=W.getChildren();
W=Y[Y.length-1];
}return W;
}else{return parent;
}},getNextSiblingOf:function(O){if(O==this.getRoot()){return null;
}var parent=O.getParent();
var P=parent.getChildren();
var Q=P.indexOf(O);

if(Q<P.length-1){return P[Q+1];
}return null;
},getPreviousSiblingOf:function(F){if(F==this.getRoot()){return null;
}var parent=F.getParent();
var G=parent.getChildren();
var H=G.indexOf(F);

if(H>0){return G[H-1];
}return null;
},getItems:function(a,b){if(this.getRoot()!=null){return this.getRoot().getItems(a,b,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(K){while(K){if(K==this){return null;
}
if(K instanceof qx.ui.tree.AbstractTreeItem){return K;
}K=K.getLayoutParent();
}return null;
},_applyOpenMode:function(R,S){if(S==m){this.removeListener(m,this._onOpen,this);
}else if(S==n){this.removeListener(n,this._onOpen,this);
}
if(R==m){this.addListener(m,this._onOpen,this);
}else if(R==n){this.addListener(n,this._onOpen,this);
}},_onOpen:function(e){var I=this.getTreeItem(e.getTarget());

if(!I||!I.isOpenable()){return;
}I.setOpen(!I.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bi=e.getData();
for(var i=0;i<bi.length;i++){var bh=bi[i];
while(bh.getParent()!=null){bh=bh.getParent();
bh.setOpen(true);
}}},_onKeyPress:function(e){var J=this._getLeadItem();

if(J!==null){switch(e.getKeyIdentifier()){case d:if(J.isOpenable()&&J.isOpen()){J.setOpen(false);
}break;
case o:if(J.isOpenable()&&!J.isOpen()){J.setOpen(true);
}break;
case c:case f:if(J.isOpenable()){J.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(A);
}});
})();
(function(){var bj="open",bi="auto",bh="middle",bg="icon",bf="label",be="changeOpen",bd="excluded",bc="visible",bb="String",ba="opened",bC="always",bB="qx.ui.tree.AbstractTreeItem",bA="addItem",bz="Boolean",by="__lB",bx="Integer",bw="_applyIndent",bv="changeOpenSymbolMode",bu="_applyOpenSymbolMode",bt="resize",bq="",br="removeItem",bo="__lA",bp="__lE",bm="abstract",bn="never",bk="_applyIcon",bl="_applyOpen",bs="_applyLabel";
qx.Class.define(bB,{extend:qx.ui.core.Widget,type:bm,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__lA=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bz,init:false,event:be,apply:bl},openSymbolMode:{check:[bC,bn,bi],init:bi,event:bv,apply:bu},indent:{check:bx,init:19,apply:bw,themeable:true},parent:{check:bB,nullable:true},icon:{check:bb,apply:bk,nullable:true,themeable:true},label:{check:bb,apply:bs,init:bq}},members:{__lA:null,__lB:null,__lC:null,__lD:null,__lE:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(b){var c;

switch(b){case bf:c=new qx.ui.basic.Label().set({alignY:bh,value:this.getLabel()});
break;
case bg:c=new qx.ui.basic.Image().set({alignY:bh,source:this.getIcon()});
break;
case bj:c=new qx.ui.tree.FolderOpenButton().set({alignY:bh});
c.addListener(be,this._onChangeOpen,this);
c.addListener(bt,this._updateIndent,this);
break;
}return c||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,b);
},getTree:function(){var U=this;

while(U.getParent()){U=U.getParent();
}var T=U.getLayoutParent()?U.getLayoutParent().getLayoutParent():0;

if(T&&T instanceof qx.ui.core.scroll.ScrollPane){return T.getLayoutParent();
}return null;
},addWidget:function(d,f){this._add(d,f);
},addSpacer:function(){if(!this.__lE){this.__lE=new qx.ui.core.Spacer();
}else{this._remove(this.__lE);
}this._add(this.__lE);
},addOpenButton:function(){this._add(this.getChildControl(bj));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var g=this.getChildControl(bg);

if(this.__lD){this._remove(g);
}this._add(g);
this.__lD=true;
},addLabel:function(X){var Y=this.getChildControl(bf);

if(this.__lC){this._remove(Y);
}
if(X){this.setLabel(X);
}else{Y.setValue(this.getLabel());
}this._add(Y);
this.__lC=true;
},addState:function(o){qx.ui.core.Widget.prototype.addState.call(this,o);
var q=this._getChildren();

for(var i=0,l=q.length;i<l;i++){var p=q[i];

if(p.addState){q[i].addState(o);
}}},removeState:function(bM){qx.ui.core.Widget.prototype.removeState.call(this,bM);
var bO=this._getChildren();

for(var i=0,l=bO.length;i<l;i++){var bN=bO[i];

if(bN.addState){bO[i].removeState(bM);
}}},_applyIcon:function(Q,R){var S=this.getChildControl(bg,true);

if(S){S.setSource(Q);
}},_applyLabel:function(r,s){var t=this.getChildControl(bf,true);

if(t){t.setValue(r);
}},_applyOpen:function(j,k){if(this.hasChildren()){this.getChildrenContainer().setVisibility(j?bc:bd);
}var open=this.getChildControl(bj,true);

if(open){open.setOpen(j);
}j?this.addState(ba):this.removeState(ba);
},isOpenable:function(){var bU=this.getOpenSymbolMode();
return (bU===bC||bU===bi&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bj,true);

if(!open){return false;
}var w=this.getTree();

if(!w.getRootOpenClose()){if(w.getHideRoot()){if(w.getRoot()==this.getParent()){return false;
}}else{if(w.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bK,bL){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var P=0;
var open=this.getChildControl(bj,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var O=open.getBounds();

if(O){P=O.width;
}else{return;
}}else{open.exclude();
}}
if(this.__lE){this.__lE.setWidth((this.getLevel()+1)*this.getIndent()-P);
}},_applyIndent:function(V,W){this._updateIndent();
},getLevel:function(){var L=this.getTree();

if(!L){return;
}var M=this;
var N=-1;

while(M){M=M.getParent();
N+=1;
}if(L.getHideRoot()){N-=1;
}
if(!L.getRootOpenClose()){N-=1;
}return N;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__lB){this.__lB=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?bc:bd});
}return this.__lB;
},hasChildrenContainer:function(){return this.__lB;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__lA;
},hasChildren:function(){return this.__lA?this.__lA.length>0:false;
},getItems:function(bD,bE,bF){if(bF!==false){var bG=[];
}else{var bG=[this];
}var bJ=this.hasChildren()&&(bE!==false||this.isOpen());

if(bJ){var bI=this.getChildren();

if(bD===false){bG=bG.concat(bI);
}else{for(var i=0,bH=bI.length;i<bH;i++){bG=bG.concat(bI[i].getItems(bD,bE,false));
}}}return bG;
},recursiveAddToWidgetQueue:function(){var h=this.getItems(true,true,false);

for(var i=0,l=h.length;i<l;i++){qx.ui.core.queue.Widget.add(h[i]);
}},__lF:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(x){var y=this.getChildrenContainer();
var B=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var C=arguments[i];
var A=C.getParent();

if(A){A.remove(C);
}C.setParent(this);
var z=this.hasChildren();
y.add(C);

if(C.hasChildren()){y.add(C.getChildrenContainer());
}this.__lA.push(C);

if(!z){this.__lF();
}
if(B){C.recursiveAddToWidgetQueue();
B.fireNonBubblingEvent(bA,qx.event.type.Data,[C]);
}}
if(B){qx.ui.core.queue.Widget.add(this);
}},addAt:function(D,E){{};

if(E==this.__lA.length){this.add(D);
return;
}var I=D.getParent();

if(I){I.remove(D);
}var G=this.getChildrenContainer();
D.setParent(this);
var H=this.hasChildren();
var F=this.__lA[E];
G.addBefore(D,F);

if(D.hasChildren()){G.addAfter(D.getChildrenContainer(),D);
}qx.lang.Array.insertAt(this.__lA,D,E);

if(!H){this.__lF();
}
if(this.getTree()){D.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(m,n){{};
this.addAt(m,this.__lA.indexOf(n));
},addAfter:function(u,v){{};
this.addAt(u,this.__lA.indexOf(v)+1);
},addAtBegin:function(a){this.addAt(a,0);
},remove:function(bP){for(var i=0,l=arguments.length;i<l;i++){var bT=arguments[i];

if(this.__lA.indexOf(bT)==-1){this.warn("Cannot remove treeitem '"+bT+"'. It is not a child of this tree item.");
return;
}var bQ=this.getChildrenContainer();

if(bT.hasChildrenContainer()){var bS=bT.getChildrenContainer();

if(bQ.getChildren().indexOf(bS)>=0){bQ.remove(bS);
}}qx.lang.Array.remove(this.__lA,bT);
bT.setParent(null);
bQ.remove(bT);
}var bR=this.getTree();

if(bR){bR.fireNonBubblingEvent(br,qx.event.type.Data,[bT]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(J){var K=this.__lA[J];

if(K){this.remove(K);
}},removeAll:function(){for(var i=this.__lA.length-1;i>=0;i--){this.remove(this.__lA[i]);
}}},destruct:function(){this._disposeArray(bo);
this._disposeObjects(bp,by);
}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var l="Trash",k="icon/22/devices/drive-harddisk.png",j="Windows (C:)",h="Documents (D:)",g="icon/22/places/user-desktop.png",f="Inbox",e="Desktop",d="icon/22/actions/mail-mark-junk.png",c="rgb(228,228,228)",b="Network",bj="Junk",bi="Sent",bh="middle",bg="Files",bf="multi",be="Home",bd="icon/22/apps/internet-mail.png",bc="icon/22/places/user-trash-full.png",bb="Workspace",ba="icon/22/apps/office-chart.png",s="Data",t="icon/22/places/user-trash.png",q="icon/22/places/user-home.png",r="icon/22/places/network-server.png",o="icon/22/actions/document-send.png",p="Products",m="Simple View",n="Bugs",w="Family",x="TINC",F="Development",D="Announce",N="DVD (E:)",I="icon/22/mimetypes/media-image.png",V="Competition",S="Detailed View",z="Personal",Y="Questions",X="Vacation",W="Lists",y="Projects",B="Important",C="Devel",E="icon/22/devices/drive-optical.png",G="Holiday",J="Junk #",P="Chat",U="May ",u="Press",v="Company",A="Internal",M="Relations",L="kb",K="Images",R="Pustefix",Q="showcase.page.tree.Content",H="icon/22/actions/mail-message-new.png",O=" 2005",a="Edit",T="icon/22/actions/mail-mark-important.png";
qx.Class.define(Q,{extend:showcase.page.AbstractDesktopContent,construct:function(bF){showcase.page.AbstractDesktopContent.call(this,bF);
var bG=this.__wu();
this.getView().add(bG);
bG.moveTo(260,20);
bG.open();
},members:{_addWindowContent:function(bk){bk.set({caption:m,minWidth:200});
bk.setLayout(new qx.ui.layout.Grow());
var bv=new qx.ui.tree.Tree().set({width:200,height:400,selectionMode:bf,dragSelection:true,decorator:null,backgroundColor:c});
bk.add(bv);
var bA=new qx.ui.tree.TreeFolder(be).set({icon:q});
bA.setOpen(true);
bv.setRoot(bA);
var by=new qx.ui.tree.TreeFolder(e).set({icon:g});
by.setOpen(true);
bA.add(by);
var bq=new qx.ui.tree.TreeFolder(bg);
var bo=new qx.ui.tree.TreeFolder(bb);
var bp=new qx.ui.tree.TreeFolder(b).set({icon:r});
var bn=new qx.ui.tree.TreeFolder(l).set({icon:t});
by.add(bq,bo,bp,bn);
var bw=new qx.ui.tree.TreeFile(j).set({icon:k});
var bm=new qx.ui.tree.TreeFile(h).set({icon:k});
var bl=new qx.ui.tree.TreeFile(N).set({icon:E});
bo.add(bw,bm,bl);
var bz=new qx.ui.tree.TreeFolder(f).set({icon:bd,open:true});
var br=new qx.ui.tree.TreeFolder(bj).set({icon:d});
var bu=new qx.ui.tree.TreeFolder(bi).set({icon:o});
var bt=new qx.ui.tree.TreeFolder(l).set({icon:bc});

for(var i=0;i<30;i++){bt.add(new qx.ui.tree.TreeFile(J+i).set({icon:H}));
}var bx=new qx.ui.tree.TreeFolder(s).set({icon:ba});
var bs=new qx.ui.tree.TreeFolder(B).set({icon:T});
bz.add(br,bu,bt,bx,bs);
bA.add(bz);
},__wu:function(){var bN=new qx.ui.window.Window().set({showClose:false,showMinimize:false,width:310,height:425,minWidth:200,caption:S,layout:new qx.ui.layout.Grow(),contentPadding:0});
var cq=new qx.ui.tree.Tree().set({width:600,height:500,decorator:null,selectionMode:bf,dragSelection:true,backgroundColor:c});
bN.add(cq);
var cr=this.configureTreeItem(new qx.ui.tree.TreeFolder(),be,q);
cr.setOpen(true);
cq.setRoot(cr);
var cj=this.configureTreeItem(new qx.ui.tree.TreeFolder(),e,g);
cj.setOpen(true);
cr.add(cj);
var bL=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bg);
var bJ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bb);
var bK=this.configureTreeItem(new qx.ui.tree.TreeFolder(),b,r);
var bI=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,bc);
cj.add(bL,bJ,bK,bI);
var cp=this.configureTreeItem(new qx.ui.tree.TreeFile(),j,k);
var co=this.configureTreeItem(new qx.ui.tree.TreeFile(),h,k);
bJ.add(cp,co);
var ck=this.configureTreeItem(new qx.ui.tree.TreeFolder(),f,bd);
ck.setOpen(true);
var bM=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bj,d);
var bP=this.configureTreeItem(new qx.ui.tree.TreeFolder(),bi,o);
var bO=this.configureTreeItem(new qx.ui.tree.TreeFolder(),l,t);
var bR=this.configureTreeItem(new qx.ui.tree.TreeFolder(),s,ba);
var bQ=this.configureTreeItem(new qx.ui.tree.TreeFolder(),a);
var ce=this.configureTreeItem(new qx.ui.tree.TreeFolder(),P);
var cd=this.configureTreeItem(new qx.ui.tree.TreeFolder(),R);
var cc=this.configureTreeItem(new qx.ui.tree.TreeFolder(),x);
var cn=this.configureTreeItem(new qx.ui.tree.TreeFolder(),D);
var cm=this.configureTreeItem(new qx.ui.tree.TreeFolder(),C);
cc.add(cn,cm);
bQ.add(ce,cd,cc);
var bT=this.configureTreeItem(new qx.ui.tree.TreeFolder(),W);
var bY=this.configureTreeItem(new qx.ui.tree.TreeFolder(),M);
var ca=this.configureTreeItem(new qx.ui.tree.TreeFolder(),v);
var cb=this.configureTreeItem(new qx.ui.tree.TreeFolder(),Y);
var bU=this.configureTreeItem(new qx.ui.tree.TreeFolder(),A);
var bV=this.configureTreeItem(new qx.ui.tree.TreeFolder(),p);
var bW=this.configureTreeItem(new qx.ui.tree.TreeFolder(),u);
var bX=this.configureTreeItem(new qx.ui.tree.TreeFolder(),F);
var cf=this.configureTreeItem(new qx.ui.tree.TreeFolder(),V);
bT.add(bY,ca,cb,bU,bV,bW,bX,cf);
var bS=this.configureTreeItem(new qx.ui.tree.TreeFolder(),z);
var ch=this.configureTreeItem(new qx.ui.tree.TreeFolder(),n);
var cl=this.configureTreeItem(new qx.ui.tree.TreeFolder(),w);
var ci=this.configureTreeItem(new qx.ui.tree.TreeFolder(),y);
var cg=this.configureTreeItem(new qx.ui.tree.TreeFolder(),G);
bS.add(ch,cl,ci,cg);
var bH=this.configureTreeItem(new qx.ui.tree.TreeFolder(),K);

for(var i=0;i<50;i++){bH.add(this.configureTreeItem(new qx.ui.tree.TreeFolder(),X+(i+1),I));
}ck.add(bM,bP,bO,bR,bQ,bT,bS,bH);
cr.add(ck);
return bN;
},configureTreeItem:function(bB,bC,bD){bB.addSpacer();

if(bB instanceof qx.ui.tree.TreeFolder){bB.addOpenButton();
}bB.addIcon();

if(arguments.length>=3){bB.setIcon(bD);
}bB.addLabel(bC);
bB.addWidget(new qx.ui.core.Spacer(),{flex:1});
var bE=new qx.ui.basic.Label(Math.round(Math.random()*99)+L);
bE.setWidth(30);
bE.setAlignY(bh);
bE.setMargin([0,8]);
bB.addWidget(bE);
bE=new qx.ui.basic.Label(U+Math.round(Math.random()*30+1)+O);
bE.setWidth(80);
bE.setAlignY(bh);
bB.addWidget(bE);
return bB;
}}});
})();

});