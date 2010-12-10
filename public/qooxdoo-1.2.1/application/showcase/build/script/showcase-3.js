qx.$$packageData['d6ef8bab5266']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("d6ef8bab5266", function() {
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="changeSelection",b="_applyEnabled",a="__jk";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(x){qx.core.Object.call(this);
this.__jk=[];
this.addListener(d,this.__jl,this);

if(x!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:b,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__jk:null,getItems:function(){return this.__jk;
},add:function(y){var z=this.__jk;
var A;

for(var i=0,l=arguments.length;i<l;i++){A=arguments[i];

if(qx.lang.Array.contains(z,A)){continue;
}A.addListener(p,this._onItemChangeChecked,this);
z.push(A);
A.setGroup(this);
if(A.getValue()){this.setSelection([A]);
}}if(!this.isAllowEmptySelection()&&z.length>0&&!this.getSelection()[0]){this.setSelection([z[0]]);
}},remove:function(G){var H=this.__jk;

if(qx.lang.Array.contains(H,G)){qx.lang.Array.remove(H,G);
if(G.getGroup()===this){G.resetGroup();
}G.removeListener(p,this._onItemChangeChecked,this);
if(G.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__jk;
},_onItemChangeChecked:function(e){var K=e.getTarget();

if(K.getValue()){this.setSelection([K]);
}else if(this.getSelection()[0]==K){this.resetSelection();
}},_applyInvalidMessage:function(I,J){for(var i=0;i<this.__jk.length;i++){this.__jk[i].setInvalidMessage(I);
}},_applyValid:function(L,M){for(var i=0;i<this.__jk.length;i++){this.__jk[i].setValid(L);
}},_applyEnabled:function(N,O){var P=this.__jk;

if(N==null){for(var i=0,l=P.length;i<l;i++){P[i].resetEnabled();
}}else{for(var i=0,l=P.length;i<l;i++){P[i].setEnabled(N);
}}},_applyAllowEmptySelection:function(s,t){if(!s&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var u=this.getSelection()[0];
var w=this.__jk;
var v=w.indexOf(u);

if(v==-1){return;
}var i=0;
var length=w.length;
if(this.getWrap()){v=(v+1)%length;
}else{v=Math.min(v+1,length-1);
}
while(i<length&&!w[v].getEnabled()){v=(v+1)%length;
i++;
}this.setSelection([w[v]]);
},selectPrevious:function(){var D=this.getSelection()[0];
var F=this.__jk;
var E=F.indexOf(D);

if(E==-1){return;
}var i=0;
var length=F.length;
if(this.getWrap()){E=(E-1+length)%length;
}else{E=Math.max(E-1,0);
}
while(i<length&&!F[E].getEnabled()){E=(E-1+length)%length;
i++;
}this.setSelection([F[E]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__jl:function(e){var C=e.getData()[0];
var B=e.getOldData()[0];

if(B){B.setValue(false);
}
if(C){C.setValue(true);
}}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="qx.ui.form.AbstractSelectBox",l="changeSelection",i="PageUp",c="_applyMaxListHeight",b="PageDown",h="mouseup",g="Escape",j="changeVisibility",a="one",k="middle",d="mousedown";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){qx.ui.core.Widget.call(this);
var z=new qx.ui.layout.HBox();
this._setLayout(z);
z.setAlignY(k);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var y=qx.core.Init.getApplication().getRoot();
y.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:c,nullable:true,init:200},format:{check:q,init:function(C){return this._defaultFormat(C);
},nullable:true}},members:{_createChildControlImpl:function(w){var x;

switch(w){case u:x=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:a,quickSelection:true});
x.addListener(l,this._onListChangeSelection,this);
x.addListener(d,this._onListMouseDown,this);
break;
case v:x=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
x.setAutoHide(false);
x.setKeepActive(true);
x.addListener(h,this.close,this);
x.add(this.getChildControl(u));
x.addListener(j,this._onPopupChangeVisibility,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,w);
},_applyMaxListHeight:function(E,F){this.getChildControl(u).setMaxHeight(E);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var K=this.getChildControl(v);
K.placeToWidget(this,true);
K.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var G=this.getChildControl(v).isVisible();

if(G){this.close();
}else{this.open();
}},_defaultFormat:function(H){var I=H?H.getLabel():t;
var J=H?H.getRich():false;

if(J){I=I.replace(/<[^>]+?>/g,t);
I=qx.bom.String.unescape(I);
}return I;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var L=e.getKeyIdentifier();
var M=this.getChildControl(v);
if(M.isHidden()&&(L==b||L==i)){e.stopPropagation();
}else if(!M.isHidden()&&L==g){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var B=e.getTarget();
var A=this.getChildControl(v,true);

if(A==null){return;
}
if(qx.ui.core.Widget.contains(A,B)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var D=qx.core.Init.getApplication().getRoot();

if(D){D.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var k="list",j="atom",i="pressed",h="abandoned",g="popup",f="hovered",d="changeLabel",c="changeIcon",b="arrow",a="",z="spacer",y="Enter",x="one",w="mouseout",v="Space",u="key",t="mousewheel",s="keyinput",r="changeSelection",q="quick",o="qx.ui.form.SelectBox",p="mouseover",m="selectbox",n="click",l=" ";
qx.Class.define(o,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
this._createChildControl(j);
this._createChildControl(z);
this._createChildControl(b);
this.addListener(p,this._onMouseOver,this);
this.addListener(w,this._onMouseOut,this);
this.addListener(n,this._onClick,this);
this.addListener(t,this._onMouseWheel,this);
this.addListener(s,this._onKeyInput,this);
this.addListener(r,this.__wX,this);
},properties:{appearance:{refine:true,init:m}},members:{__wW:null,_createChildControlImpl:function(G){var H;

switch(G){case z:H=new qx.ui.core.Spacer();
this._add(H,{flex:1});
break;
case j:H=new qx.ui.basic.Atom(l);
H.setCenter(false);
H.setAnonymous(true);
this._add(H,{flex:1});
break;
case b:H=new qx.ui.basic.Image();
H.setAnonymous(true);
this._add(H);
break;
}return H||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,G);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==x;
},__wX:function(e){var B=e.getData()[0];
var A=this.getChildControl(k);

if(A.getSelection()[0]!=B){if(B){A.setSelection([B]);
}else{A.resetSelection();
}}this.__wY();
this.__xa();
},__wY:function(){var T=this.getChildControl(k).getSelection()[0];
var U=this.getChildControl(j);
var S=T?T.getIcon():a;
S==null?U.resetIcon():U.setIcon(S);
},__xa:function(){var E=this.getChildControl(k).getSelection()[0];
var F=this.getChildControl(j);
var D=E?E.getLabel():a;
var C=this.getFormat();

if(C!=null){D=C.call(this,E);
}if(D&&D.translate){D=D.translate();
}D==null?F.resetLabel():F.setLabel(D);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(h)){this.removeState(h);
this.addState(i);
}this.addState(f);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(f);

if(this.hasState(i)){this.removeState(i);
this.addState(h);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(g).isVisible()){return;
}var bc=e.getWheelDelta()>0?1:-1;
var be=this.getSelectables();
var bd=this.getSelection()[0];

if(!bd){bd=be[0];
}var bb=be.indexOf(bd)+bc;
var bf=be.length-1;
if(bb<0){bb=0;
}else if(bb>=bf){bb=bf;
}this.setSelection([be[bb]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var Q=e.getKeyIdentifier();

if(Q==y||Q==v){if(this.__wW){this.setSelection([this.__wW]);
this.__wW=null;
}this.toggle();
}else{qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onKeyInput:function(e){var R=e.clone();
R.setTarget(this._list);
R.setBubbles(false);
this.getChildControl(k).dispatchEvent(R);
},_onListMouseDown:function(e){if(this.__wW){this.setSelection([this.__wW]);
this.__wW=null;
}},_onListChangeSelection:function(e){var V=e.getData();
var Y=e.getOldData();
if(Y&&Y.length>0){Y[0].removeListener(c,this.__wY,this);
Y[0].removeListener(d,this.__xa,this);
}
if(V.length>0){var X=this.getChildControl(g);
var W=this.getChildControl(k);
var ba=W.getSelectionContext();

if(X.isVisible()&&(ba==q||ba==u)){this.__wW=V[0];
}else{this.setSelection([V[0]]);
this.__wW=null;
}V[0].addListener(c,this.__wY,this);
V[0].addListener(d,this.__xa,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var J=this.getChildControl(g);

if(!J.isVisible()){var L=this.getChildControl(k);
if(L.hasChildren()){L.setSelection(this.getSelection());
}}else{var I=J.getLayoutLocation(this);
var N=qx.bom.Viewport.getHeight();
var M=I.top;
var O=N-I.bottom;
var K=M>O?M:O;
var P=this.getMaxListHeight();
var L=this.getChildControl(k);

if(P==null||P>K){L.setMaxHeight(K);
}else if(P<K){L.setMaxHeight(P);
}}}},destruct:function(){this.__wW=null;
}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){qx.ui.form.Button.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(m,n){qx.ui.menu.AbstractButton.call(this);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setMenu(n);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(o,p){o?this.addState(j):this.removeState(j);
},_applyGroup:function(k,l){if(l){l.remove(this);
}
if(k){k.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();

});