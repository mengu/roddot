qx.$$packageData['739b0042e0be']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("739b0042e0be", function() {
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(q){var r;

switch(q){case k:r=new qx.ui.basic.Image();
r.setAlignY(g);
this._add(r);
break;
case m:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(n,o){var p=this.getChildControl(m).getLayout();
n==null?p.resetSpacing():p.setSpacing(n);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var t=this.getChildren();
var s=[];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u instanceof qx.ui.menubar.Button){s.push(u);
}}return s;
}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(E){var F;

switch(E){case t:F=new qx.ui.basic.Image;
F.setAnonymous(true);
this._add(F,{column:0});
break;
case s:F=new qx.ui.basic.Label;
F.setAnonymous(true);
this._add(F,{column:1});
break;
case q:F=new qx.ui.basic.Label;
F.setAnonymous(true);
this._add(F,{column:2});
break;
case r:F=new qx.ui.basic.Image;
F.setAnonymous(true);
this._add(F,{column:3});
break;
}return F||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);
},_forwardStates:{selected:1},getChildrenSizes:function(){var G=0,H=0,I=0,M=0;

if(this._isChildControlVisible(t)){var N=this.getChildControl(t);
G=N.getMarginLeft()+N.getSizeHint().width+N.getMarginRight();
}
if(this._isChildControlVisible(s)){var K=this.getChildControl(s);
H=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(q)){var J=this.getChildControl(q);
I=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}
if(this._isChildControlVisible(r)){var L=this.getChildControl(r);
M=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}return [G,H,I,M];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var y=e.getData();

if(qx.core.Variant.isSet(o,m)){var w=e.getOldData();

if(!w){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!y){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var x=y!=null?y.toString():h;
this.getChildControl(q).setValue(x);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var z=this.getCommand();

if(z!=null){this.getChildControl(q).setValue(z.toString());
}},"off":null}),_applyIcon:function(u,v){if(u){this._showChildControl(t).setSource(u);
}else{this._excludeChildControl(t);
}},_applyLabel:function(A,B){if(A){this._showChildControl(s).setValue(A);
}else{this._excludeChildControl(s);
}},_applyMenu:function(C,D){if(D){D.resetOpener();
D.removeState(n);
}
if(C){this._showChildControl(r);
C.setOpener(this);
C.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(s,t){return s.replace(/&[#\w]+;/gi,function(p){var q=p;
var p=p.substring(1,p.length-1);
var r=t[p];

if(r){q=String.fromCharCode(r);
}else{if(p.charAt(0)==c){if(p.charAt(1).toUpperCase()==e){r=p.substring(2);
if(r.match(/^[0-9A-Fa-f]+$/gi)){q=String.fromCharCode(parseInt(r,16));
}}else{r=p.substring(1);
if(r.match(/^\d+$/gi)){q=String.fromCharCode(parseInt(r,10));
}}}}return q;
});
}}});
})();
(function(){var m="pressed",l="hovered",k="changeVisibility",j="qx.ui.menu.Menu",i="submenu",h="Enter",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",c="abandoned",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(n,o,p){qx.ui.form.Button.call(this,n,o);
if(p!=null){this.setMenu(p);
}},properties:{menu:{check:j,nullable:true,apply:b,event:f}},members:{_applyMenu:function(q,r){if(r){r.removeListener(k,this._onMenuChange,this);
r.resetOpener();
}
if(q){q.addListener(k,this._onMenuChange,this);
q.setOpener(this);
q.removeState(i);
q.removeState(g);
}},open:function(s){var t=this.getMenu();

if(t){qx.ui.menu.Manager.getInstance().hideAll();
t.setOpener(this);
t.open();
if(s){var u=t.getSelectables()[0];

if(u){t.setSelectedButton(u);
}}}},_onMenuChange:function(e){var w=this.getMenu();

if(w.isVisible()){this.addState(m);
}else{this.removeState(m);
}},_onMouseDown:function(e){var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case h:this.removeState(c);
this.addState(m);
var a=this.getMenu();

if(a){if(!a.isVisible()){this.open();
}else{a.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var i="pressed",h="hovered",g="inherit",f="qx.ui.menubar.Button",d="keydown",c="menubar-button",b="keyup";
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){qx.ui.form.MenuButton.call(this,k,l,m);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(n){qx.ui.form.MenuButton.prototype.open.call(this,n);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var j=this.getMenu();
var menubar=this.getMenuBar();

if(j.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(j);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==j){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var a=this.getMenu();

if(a&&a.isVisible()&&!this.hasState(i)){this.addState(i);
}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var bm="keypress",bl="interval",bk="keydown",bj="mousedown",bi="keyup",bh="blur",bg="Enter",bf="__nw",be="__nv",bd="__nx",W="Up",bc="Escape",ba="qx.ui.menu.Manager",V="Left",U="Down",Y="Right",X="singleton",bb="Space";
qx.Class.define(ba,{type:X,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nv=[];
var x=document.body;
var y=qx.event.Registration;
y.addListener(window.document.documentElement,bj,this._onMouseDown,this,true);
y.addListener(x,bk,this._onKeyUpDown,this,true);
y.addListener(x,bi,this._onKeyUpDown,this,true);
y.addListener(x,bm,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,bh,this.hideAll,this);
this.__nw=new qx.event.Timer;
this.__nw.addListener(bl,this._onOpenInterval,this);
this.__nx=new qx.event.Timer;
this.__nx.addListener(bl,this._onCloseInterval,this);
},members:{__ny:null,__nz:null,__nw:null,__nx:null,__nv:null,_getChild:function(C,D,E,F){var G=C.getChildren();
var length=G.length;
var H;

for(var i=D;i<length&&i>=0;i+=E){H=G[i];

if(H.isEnabled()&&!H.isAnonymous()){return H;
}}
if(F){i=i==length?0:length-1;

for(;i!=D;i+=E){H=G[i];

if(H.isEnabled()&&!H.isAnonymous()){return H;
}}}return null;
},_isInMenu:function(I){while(I){if(I instanceof qx.ui.menu.Menu){return true;
}I=I.getLayoutParent();
}return false;
},_getMenuButton:function(bs){while(bs){if(bs instanceof qx.ui.menu.AbstractButton){return bs;
}bs=bs.getLayoutParent();
}return null;
},add:function(R){{};
var S=this.__nv;
S.push(R);
R.setZIndex(1e6+S.length);
},remove:function(z){{};
var A=this.__nv;

if(A){qx.lang.Array.remove(A,z);
}},hideAll:function(){var J=this.__nv;

if(J){for(var i=J.length-1;i>=0;i--){J[i].exclude();
}}},getActiveMenu:function(){var bn=this.__nv;
return bn.length>0?bn[bn.length-1]:null;
},scheduleOpen:function(w){this.cancelClose(w);
if(w.isVisible()){if(this.__ny){this.cancelOpen(this.__ny);
}}else if(this.__ny!=w){this.__ny=w;
this.__nw.restartWith(w.getOpenInterval());
}},scheduleClose:function(a){this.cancelOpen(a);
if(!a.isVisible()){if(this.__nz){this.cancelClose(this.__nz);
}}else if(this.__nz!=a){this.__nz=a;
this.__nx.restartWith(a.getCloseInterval());
}},cancelOpen:function(br){if(this.__ny==br){this.__nw.stop();
this.__ny=null;
}},cancelClose:function(B){if(this.__nz==B){this.__nx.stop();
this.__nz=null;
}},_onOpenInterval:function(e){this.__nw.stop();
this.__ny.open();
this.__ny=null;
},_onCloseInterval:function(e){this.__nx.stop();
this.__nz.exclude();
this.__nz=null;
},_onMouseDown:function(e){var T=e.getTarget();
T=qx.ui.core.Widget.getWidgetByElement(T);
if(T==null){this.hideAll();
return;
}if(T.getMenu&&T.getMenu()&&T.getMenu().isVisible()){return;
}if(this.__nv.length>0&&!this._isInMenu(T)){this.hideAll();
}},__nA:{"Enter":1,"Space":1},__nB:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bC=this.getActiveMenu();

if(!bC){return;
}var bD=e.getKeyIdentifier();

if(this.__nB[bD]||(this.__nA[bD]&&bC.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var p=this.getActiveMenu();

if(!p){return;
}var q=e.getKeyIdentifier();
var s=this.__nB[q];
var r=this.__nA[q];

if(s){switch(q){case W:this._onKeyPressUp(p);
break;
case U:this._onKeyPressDown(p);
break;
case V:this._onKeyPressLeft(p);
break;
case Y:this._onKeyPressRight(p);
break;
case bc:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(r){var t=p.getSelectedButton();

if(t){switch(q){case bg:this._onKeyPressEnter(p,t,e);
break;
case bb:this._onKeyPressSpace(p,t,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(k){var l=k.getSelectedButton();
var m=k.getChildren();
var o=l?k.indexOf(l)-1:m.length-1;
var n=this._getChild(k,o,-1,true);
if(n){k.setSelectedButton(n);
}else{k.resetSelectedButton();
}},_onKeyPressDown:function(b){var c=b.getSelectedButton();
var f=c?b.indexOf(c)+1:0;
var d=this._getChild(b,f,1,true);
if(d){b.setSelectedButton(d);
}else{b.resetSelectedButton();
}},_onKeyPressLeft:function(K){var P=K.getOpener();

if(!P){return;
}if(P instanceof qx.ui.menu.Button){var M=P.getLayoutParent();
M.resetOpenedButton();
M.setSelectedButton(P);
}else if(P instanceof qx.ui.menubar.Button){var O=P.getMenuBar().getMenuButtons();
var L=O.indexOf(P);
if(L===-1){return;
}var Q=null;
var length=O.length;

for(var i=1;i<=length;i++){var N=O[(L-i+length)%length];

if(N.isEnabled()){Q=N;
break;
}}
if(Q&&Q!=P){Q.open(true);
}}},_onKeyPressRight:function(bt){var bv=bt.getSelectedButton();
if(bv){var bu=bv.getMenu();

if(bu){bt.setOpenedButton(bv);
var bB=this._getChild(bu,0,1);

if(bB){bu.setSelectedButton(bB);
}return;
}}else if(!bt.getOpenedButton()){var bB=this._getChild(bt,0,1);

if(bB){bt.setSelectedButton(bB);

if(bB.getMenu()){bt.setOpenedButton(bB);
}return;
}}var bz=bt.getOpener();
if(bz instanceof qx.ui.menu.Button&&bv){while(bz){bz=bz.getLayoutParent();

if(bz instanceof qx.ui.menu.Menu){bz=bz.getOpener();

if(bz instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bz){return;
}}if(bz instanceof qx.ui.menubar.Button){var by=bz.getMenuBar().getMenuButtons();
var bw=by.indexOf(bz);
if(bw===-1){return;
}var bA=null;
var length=by.length;

for(var i=1;i<=length;i++){var bx=by[(bw+i)%length];

if(bx.isEnabled()){bA=bx;
break;
}}
if(bA&&bA!=bz){bA.open(true);
}}},_onKeyPressEnter:function(g,h,e){if(h.hasListener(bm)){var j=e.clone();
j.setBubbles(false);
j.setTarget(h);
h.dispatchEvent(j);
}this.hideAll();
},_onKeyPressSpace:function(bo,bp,e){if(bp.hasListener(bm)){var bq=e.clone();
bq.setBubbles(false);
bq.setTarget(bp);
bp.dispatchEvent(bq);
}}},destruct:function(){var v=qx.event.Registration;
var u=document.body;
v.removeListener(window.document.documentElement,bj,this._onMouseDown,this,true);
v.removeListener(u,bk,this._onKeyUpDown,this,true);
v.removeListener(u,bi,this._onKeyUpDown,this,true);
v.removeListener(u,bm,this._onKeyPress,this,true);
this._disposeObjects(bf,bd);
this._disposeArray(be);
}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__ox:false,_setAllowMenuOpenHover:function(t){this.__ox=t;
},_isAllowMenuOpenHover:function(){return this.__ox;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var s=new qx.ui.core.Spacer;
this._add(s,{flex:1});
return s;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}else if(r instanceof qx.ui.toolbar.Part){p.push.apply(p,r.getMenuButtons());
}}return p;
}}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__nH:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__nH=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__nH||null;
}},destruct:function(){this.__nH=null;
}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="removeChildWidget",f="scrollX",i="_applyOrientation",h="mousewheel",d="Integer",c="slidebar",g="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(G){qx.ui.core.Widget.call(this);
var H=this.getChildControl(r);
this._add(H,{flex:1});

if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:c},orientation:{check:[s,q],init:s,apply:i},scrollStep:{check:d,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(w){var x;

switch(w){case o:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case p:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case n:x=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){x.addListener(j,this._onRemoveChild,this);
}this.getChildControl(r).add(x);
break;
case r:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(g,this._onResize,this);
x.addListener(f,this._onScroll,this);
x.addListener(k,this._onScroll,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,w);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(a){var b=this.getChildControl(r);

if(this.getOrientation()===s){b.scrollByX(a);
}else{b.scrollByY(a);
}},scrollTo:function(I){var J=this.getChildControl(r);

if(this.getOrientation()===s){J.scrollToX(I);
}else{J.scrollToY(I);
}},_applyOrientation:function(B,C){var F=[this.getLayout(),this._getLayout()];
var E=this.getChildControl(o);
var D=this.getChildControl(p);
if(C==q){E.removeState(q);
D.removeState(q);
E.addState(s);
D.addState(s);
}else if(C==s){E.removeState(s);
D.removeState(s);
E.addState(q);
D.addState(q);
}
if(B==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(F[0]){F[0].dispose();
}
if(F[1]){F[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var y=this.getInnerSize();
var A=content.getBounds();
var z=(this.getOrientation()===s)?A.width>y.width:A.height>y.height;

if(z){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var u=this.getChildControl(r);

if(this.getOrientation()===s){var t=u.getScrollX();
var v=u.getScrollMaxX();
}else{var t=u.getScrollY();
var v=u.getScrollMaxY();
}this.getChildControl(p).setEnabled(t>0);
this.getChildControl(o).setEnabled(t<v);
},_showArrows:function(){this._showChildControl(o);
this._showChildControl(p);
},_hideArrows:function(){this._excludeChildControl(o);
this._excludeChildControl(p);
this.scrollTo(0);
}}});
})();
(function(){var S="slidebar",R="Integer",Q="resize",P="qx.ui.core.Widget",O="selected",N="visible",M="Boolean",L="mouseout",K="excluded",J="menu",bi="_applySelectedButton",bh="_applyOpenInterval",bg="_applySpacingY",bf="_blocker",be="_applyCloseInterval",bd="_applyBlockerColor",bc="_applyIconColumnWidth",bb="mouseover",ba="qx.ui.menu.Menu",Y="Color",W="Number",X="_applyOpenedButton",U="_applySpacingX",V="_applyBlockerOpacity",T="_applyArrowColumnWidth";
qx.Class.define(ba,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var br=this.getApplicationRoot();
br.add(this);
this.addListener(bb,this._onMouseOver);
this.addListener(L,this._onMouseOut);
this.addListener(Q,this._onResize,this);
br.addListener(Q,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(br);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:J},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:K},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:R,apply:U,init:0,themeable:true},spacingY:{check:R,apply:bg,init:0,themeable:true},iconColumnWidth:{check:R,init:0,themeable:true,apply:bc},arrowColumnWidth:{check:R,init:0,themeable:true,apply:T},blockerColor:{check:Y,init:null,nullable:true,apply:bd,themeable:true},blockerOpacity:{check:W,init:1,apply:V,themeable:true},selectedButton:{check:P,nullable:true,apply:bi},openedButton:{check:P,nullable:true,apply:X},opener:{check:P,nullable:true},openInterval:{check:R,themeable:true,init:250,apply:bh},closeInterval:{check:R,themeable:true,init:250,apply:be},blockBackground:{check:M,themeable:true,init:false}},members:{__nD:null,__nE:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__nG();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__nG();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(g){this.placeToPoint(g);
this.__nG();
this.show();
this._placementTarget=g;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var u=[];
var v=this.getChildren();

for(var i=0;i<v.length;i++){if(v[i].isEnabled()){u.push(v[i]);
}}return u;
},_applyIconColumnWidth:function(H,I){this._getMenuLayout().setIconColumnWidth(H);
},_applyArrowColumnWidth:function(bk,bl){this._getMenuLayout().setArrowColumnWidth(bk);
},_applySpacingX:function(B,C){this._getMenuLayout().setColumnSpacing(B);
},_applySpacingY:function(d,f){this._getMenuLayout().setSpacing(d);
},_applyVisibility:function(o,p){qx.ui.core.Widget.prototype._applyVisibility.call(this,o,p);
var q=qx.ui.menu.Manager.getInstance();

if(o===N){q.add(this);
var r=this.getParentMenu();

if(r){r.setOpenedButton(this.getOpener());
}}else if(p===N){q.remove(this);
var r=this.getParentMenu();

if(r&&r.getOpenedButton()==this.getOpener()){r.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__nF();
},__nF:function(){if(this.isVisible()){if(this.getBlockBackground()){var G=this.getZIndex();
this._blocker.blockContent(G-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var A=this.getOpener();

if(!A||!(A instanceof qx.ui.menu.AbstractButton)){return null;
}
while(A&&!(A instanceof qx.ui.menu.Menu)){A=A.getLayoutParent();
}return A;
},_applySelectedButton:function(y,z){if(z){z.removeState(O);
}
if(y){y.addState(O);
}},_applyOpenedButton:function(b,c){if(c){c.getMenu().exclude();
}
if(b){b.getMenu().open();
}},_applyBlockerColor:function(w,x){this._blocker.setColor(w);
},_applyBlockerOpacity:function(h,j){this._blocker.setOpacity(h);
},getChildrenContainer:function(){return this.getChildControl(S,true)||this;
},_createChildControlImpl:function(bm){var bn;

switch(bm){case S:var bn=new qx.ui.menu.MenuSlideBar();
var bp=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bo=bn.getLayout();
bn.setLayout(bp);
bo.dispose();
var bq=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bq.length;i++){bn.add(bq[i]);
}this.removeListener(Q,this._onResize,this);
bn.getChildrenContainer().addListener(Q,this._onResize,this);
this._add(bn);
break;
}return bn||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bm);
},_getMenuLayout:function(){if(this.hasChildControl(S)){return this.getChildControl(S).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(S)){return this.getChildControl(S).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__nG:function(){var E=this._getMenuBounds();

if(!E){this.addListenerOnce(Q,this.__nG,this);
return;
}var D=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var F=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(E.height+top);
this.moveTo(F,0);
});
}else if(top+E.height>D){this._assertSlideBar(function(){this.setHeight(D-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bj){if(this.hasChildControl(S)){return bj.call(this);
}this.__nE=bj;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(S);

if(this.__nE){this.__nE.call(this);
delete this.__nE;
}},_onResize:function(){if(this.isVisible()){var a=this._placementTarget;

if(!a){return;
}else if(a instanceof qx.ui.core.Widget){this.placeToWidget(a);
}else if(a.top!==undefined){this.placeToPoint(a);
}else{throw new Error("Unknown target: "+a);
}this.__nG();
}},_onMouseOver:function(e){var l=qx.ui.menu.Manager.getInstance();
l.cancelClose(this);
var m=e.getTarget();

if(m.isEnabled()&&m instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(m);
var k=m.getMenu&&m.getMenu();

if(k){k.setOpener(m);
l.scheduleOpen(k);
this.__nD=k;
}else{var n=this.getOpenedButton();

if(n){l.scheduleClose(n.getMenu());
}
if(this.__nD){l.cancelOpen(this.__nD);
this.__nD=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var s=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var t=this.getOpenedButton();
t?this.setSelectedButton(t):this.resetSelectedButton();
if(t){s.cancelClose(t.getMenu());
}if(this.__nD){s.cancelOpen(this.__nD);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(Q,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bf);
}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__ow",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__ow=new qx.event.AcceleratingTimer();
this.__ow.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__ow:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__ow.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__ow.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__ow.stop();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__ov(q[0]);
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},__ov:function(x){while(!(x instanceof qx.ui.menu.Menu)){x=x.getLayoutParent();
}return x;
},_computeSizeHint:function(){var v=this._getLayoutChildren();
var u=0;
var w=0;

for(var i=0,l=v.length;i<l;i++){var t=v[i].getSizeHint();
w+=t.width;
u=Math.max(u,t.height);
}return {width:w,height:u};
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(j){return qx.util.StringEscape.unescape(j,qx.bom.String.TO_CHARCODE);
},fromText:function(o){return qx.bom.String.escape(o).replace(/(  |\n)/g,function(m){var n={"  ":e,"\n":d};
return n[m]||m;
});
},toText:function(l){return qx.bom.String.unescape(l.replace(/\s+|<([^>])+>/gi,function(k){if(k.indexOf(f)===0){return b;
}else if(k.length>0&&k.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(i){i.FROM_CHARCODE=qx.lang.Object.invert(i.TO_CHARCODE);
}});
})();

});