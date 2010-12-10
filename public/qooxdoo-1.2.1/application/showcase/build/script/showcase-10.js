qx.$$packageData['ea1e248ddb2d']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("ea1e248ddb2d", function() {
(function(){var p="webkitTransitionEnd",o="",n="dblclick",m="perspective(600) rotateY(90deg)",l="perspective(600) rotateY(0deg)",k="perspective(600) rotateY(180deg)",j="-webkit-transform 0.3s ease-in",i="#525252",h="perspective(600) rotateY(360deg)",g="WebkitTransition",c="-webkit-transform 0.3s ease-out",f="perspective(600) rotateY(270deg)",d="showcase/theme/affe.png",b="showcase.page.theme.Content",a="Calculator";
qx.Class.define(b,{extend:showcase.AbstractContent,construct:function(r){showcase.AbstractContent.call(this,r);
this.setView(this._createView());
},members:{_createView:function(){var u=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var t=new showcase.page.theme.calc.view.Calculator(true);
u.add(t);
t.moveTo(60,40);
t.open();
var s=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(t,s);
var t=new showcase.page.theme.calc.view.Calculator(false);
u.add(t);
t.moveTo(340,40);
t.open();
var s=new showcase.page.theme.calc.Model();
new showcase.page.theme.calc.Presenter(t,s);
this.__vY(t);
return u;
},__vY:function(w){if(!(g in document.documentElement.style)){return;
}var y=true;
var x=new qx.ui.basic.Image(d).set({backgroundColor:i,padding:[50,5,5,0]});
w.addListener(n,function(e){var v=w.getContainerElement().getDomElement();
v.style.WebkitTransition=j;

if(y){v.style.WebkitTransform=m;
}else{v.style.WebkitTransform=f;
}v.addEventListener(p,function(){v.removeEventListener(p,arguments.callee,false);

if(y){var q=w.getChildrenContainer().getBounds();
x.setUserBounds(0,0,q.width,q.height);
w.add(x);
w.setCaption(o);
}else{w.remove(x);
w.setCaption(a);
}qx.ui.core.queue.Manager.flush();
v.style.WebkitTransition=c;

if(y){v.style.WebkitTransform=k;
}else{v.style.WebkitTransform=h;
v.addEventListener(p,function(){v.removeEventListener(p,arguments.callee,false);
v.style.WebkitTransition=o;
v.style.WebkitTransform=l;
},false);
}y=!y;
},false);
});
}}});
})();
(function(){var b="calculator-button",a="showcase.page.theme.calc.view.Button";
qx.Class.define(a,{extend:qx.ui.form.Button,construct:function(c,d,e,f,g,h){qx.ui.form.Button.call(this,c);
this.set({rich:true,focusable:false,keepActive:true,allowShrinkX:false,allowShrinkY:false});
this.setLayoutProperties({row:d,column:e,rowSpan:f||1,colSpan:g||1});
this._keyIdentifier=h||null;
},properties:{appearance:{refine:true,init:b}},members:{getKeyIdentifier:function(){return this._keyIdentifier;
}}});
})();
(function(){var m="memory",l="operation",k="label",j="M",i="0",h="Boolean",g="",f="showcase.page.theme.calc.view.Display",e="_applyOperation",d="_applyDisplay",a="_applyMemory",c="String",b="display";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this._add(this.getChildControl(k),{top:0,right:0});
this._add(this.getChildControl(m),{bottom:0,left:0});
this._add(this.getChildControl(l),{bottom:0,left:0});
},properties:{appearance:{refine:true,init:b},display:{init:i,apply:d},memory:{check:h,init:false,apply:a},operation:{check:c,init:g,apply:e}},members:{_createChildControlImpl:function(t){var u;

switch(t){case k:u=new qx.ui.basic.Label(this.getDisplay());
break;
case m:u=new qx.ui.basic.Label(j);
u.exclude();
break;
case l:u=new qx.ui.basic.Label(this.getOperation());
u.setRich(true);
break;
}return u||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_applyDisplay:function(n,o){this.getChildControl(k).setValue(n.toString());
},_applyMemory:function(r,s){if(r){this._showChildControl(m);
}else{this._excludeChildControl(m);
}},_applyOperation:function(p,q){this.getChildControl(l).setValue(p.toString());
}}});
})();
(function(){var d="String",c="Boolean",b="showcase.page.theme.calc.view.ICalculator",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"buttonPress":a},properties:{display:{},memory:{check:c},operation:{check:d}}});
})();
(function(){var l="display",k="0",j="-",i="operation",h="+",g="7",f="5",d="memory",c="3",b="2",Q="8",P="*",O="6",N="4",M="1",L=".",K="9",J="Boolean",I="_buttons",H="keydown",s="button",t="qx.event.type.Data",q="modern-calculator",r="showcase.page.theme.calc.view.Calculator",o="changeOperation",p="execute",m="calculator",n="/",u="String",v="&divide;",z="",y="Calculator",B="buttonPress",A="keyup",D="changeDisplay",C="keypress",x="Enter",G="=",F="changeMemory",E="_keyIdentifier",w="&plusmn;";
qx.Class.define(r,{extend:qx.ui.window.Window,implement:[showcase.page.theme.calc.view.ICalculator],construct:function(V){qx.ui.window.Window.call(this,y);
this._isModern=!!V;

if(this._isModern){this.setAppearance(q);
}this.set({showMinimize:false,showMaximize:false,allowMaximize:false,showClose:false});
this.setLayout(new qx.ui.layout.VBox());
this._initButtons();
this.add(this.getChildControl(l));
this.add(this._createButtonContainer(),{flex:1});
this._initKeyIdentifier();
this.addListener(H,this._onKeyDown,this);
this.addListener(A,this._onKeyUp,this);
this.addListener(C,this._onKeyPress,this);
},events:{"buttonPress":t},properties:{appearance:{refine:true,init:m},display:{init:k,event:D},memory:{check:J,init:false,event:F},operation:{check:u,init:z,event:o}},members:{_buttons:null,_keyIdentifier:null,_pressedButton:null,_initButtons:function(){this._buttons={"MC":new showcase.page.theme.calc.view.Button("MC",0,0),"M+":new showcase.page.theme.calc.view.Button("M+",0,1),"M-":new showcase.page.theme.calc.view.Button("M-",0,2),"MR":new showcase.page.theme.calc.view.Button("MR",0,3),"C":new showcase.page.theme.calc.view.Button("C",1,0),"sign":new showcase.page.theme.calc.view.Button(w,1,1),"/":new showcase.page.theme.calc.view.Button(v,1,2,null,null,n),"*":new showcase.page.theme.calc.view.Button(P,1,3,null,null,P),"7":new showcase.page.theme.calc.view.Button(g,2,0,null,null,g),"8":new showcase.page.theme.calc.view.Button(Q,2,1,null,null,Q),"9":new showcase.page.theme.calc.view.Button(K,2,2,null,null,K),"-":new showcase.page.theme.calc.view.Button(j,2,3,null,null,j),"4":new showcase.page.theme.calc.view.Button(N,3,0,null,null,N),"5":new showcase.page.theme.calc.view.Button(f,3,1,null,null,f),"6":new showcase.page.theme.calc.view.Button(O,3,2,null,null,O),"+":new showcase.page.theme.calc.view.Button(h,3,3,null,null,h),"1":new showcase.page.theme.calc.view.Button(M,4,0,null,null,M),"2":new showcase.page.theme.calc.view.Button(b,4,1,null,null,b),"3":new showcase.page.theme.calc.view.Button(c,4,2,null,null,c),"=":new showcase.page.theme.calc.view.Button(G,4,3,2,null,x),"0":new showcase.page.theme.calc.view.Button(k,5,0,null,2,k),".":new showcase.page.theme.calc.view.Button(L,5,2,null,null,L)};

if(this._isModern){for(var bb in this._buttons){this._buttons[bb].setAppearance(s);
}}},_initKeyIdentifier:function(){this._keyIdentifier=[];

for(var name in this._buttons){var S=this._buttons[name];
var T=S.getKeyIdentifier();
S.addListener(p,this._onButtonExecute,this);

if(T){this._keyIdentifier[T]=S;
}}},_createChildControlImpl:function(bc){if(bc===l){var bd=new showcase.page.theme.calc.view.Display();
this.bind(l,bd,l);
this.bind(d,bd,d);
this.bind(i,bd,i);
return bd;
}else{return qx.ui.window.Window.prototype._createChildControlImpl.call(this,bc);
}},_createButtonContainer:function(){var X=new qx.ui.container.Composite();
var W=new qx.ui.layout.Grid(5,5);
X.setLayout(W);
for(var ba=0;ba<6;ba++){W.setRowFlex(ba,1);
}
for(var Y=0;Y<6;Y++){W.setColumnFlex(Y,1);
}for(var name in this._buttons){X.add(this._buttons[name]);
}return X;
},_onButtonExecute:function(e){var name=qx.lang.Object.getKeyFromValue(this._buttons,e.getTarget());
this.fireDataEvent(B,name);
},_onKeyDown:function(e){var R=this._keyIdentifier[e.getKeyIdentifier()];

if(!R){return;
}R.press();

if(this._pressedButton&&this._pressedButton!==R){this._pressedButton.release();
}this._pressedButton=R;
e.stop();
},_onKeyUp:function(e){var a=this._keyIdentifier[e.getKeyIdentifier()];

if(!a){return;
}a.release();
e.stop();
},_onKeyPress:function(e){var U=this._keyIdentifier[e.getKeyIdentifier()];

if(!U){return;
}U.execute();
e.stop();
}},destruct:function(){this._disposeMap(I);
this._disposeArray(E);
}});
})();
(function(){var r="",q="_applyViewModel",p="memory",o="operation",n="changeErrorMessage",m="waitForNumber",l="number",k="showcase.page.theme.calc.view.ICalculator",j="changeValue",i="showcase.page.theme.calc.Presenter",f="changeState",h="changeInput",g="buttonPress",d="operator",c="error";
qx.Class.define(i,{extend:qx.core.Object,construct:function(s,t){qx.core.Object.call(this);
this.setView(s);
this.setModel(t);
},properties:{view:{check:k,apply:q},model:{apply:q,init:null}},members:{MAX_DISPLAY_SIZE:16,_applyViewModel:function(x,y){if(y){throw new Error("The view and model cannot be changed!");
}var z=this.getModel();
var A=this.getView();

if(!z||!A){return;
}this.__wa();
this.__wb();
},__wa:function(){this.getView().addListener(g,this._onButtonPress,this);
},_onButtonPress:function(e){this.getModel().readToken(e.getData());
},__wb:function(){var a=this.getModel();
a.setMaxInputLength(this.MAX_DISPLAY_SIZE);
var b=this.getView();
a.bind(d,b,o);
a.bind(p,b,p,{converter:function(w){return w===null?false:true;
}});
a.addListener(f,this._updateDisplay,this);
a.addListener(h,this._updateDisplay,this);
a.addListener(j,this._updateDisplay,this);
a.addListener(n,this._updateDisplay,this);
},_updateDisplay:function(e){var u;
var v=this.getModel();

switch(this.getModel().getState()){case l:u=v.getInput();
break;
case m:u=v.getValue()+r;

if(u.length>this.MAX_DISPLAY_SIZE){u=v.getValue().toExponential(this.MAX_DISPLAY_SIZE-7);
}break;
case c:u=v.getErrorMessage();
break;
}this.getView().setDisplay(u||r);
}}});
})();
(function(){var n="number",m="0",l="waitForNumber",k="error",j="-",i="Number",h=".",g="M+",f="+",e="/",H="String",G="*",F="C",E="showcase.page.theme.calc.Model",D="changeValue",C="changeInput",B="Integer",A="MC",z="sign",y="Division by zero!",u="_applyState",v="changeState",s="",t="MR",q="changeOperator",r="M-",o="changeErrorMessage",p="=",w="changeMemory",x="changeOperant";
qx.Class.define(E,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.initState();
},properties:{state:{check:[n,l,k],event:v,init:n,apply:u},errorMessage:{check:H,init:s,event:o},input:{check:H,nullable:true,event:C},maxInputLength:{check:B,init:20},operator:{check:[f,j,G,e],nullable:true,event:q},operant:{check:i,nullable:true,event:x},value:{check:i,nullable:true,event:D},memory:{check:i,nullable:true,event:w}},members:{readToken:function(bc){if(bc.match(/^[0123456789]$/)){this.__we(bc);
}else if(bc.match(/^[\+\-\*\/]$/)){this.__wh(bc);
}else if(bc==z){this.__wf();
}else if(bc==h){this.__wg();
}else if(bc==p){this.__wi();
}else if(bc==F){this.__wj();
}else if(bc==g){this.__wk(bc);
}else if(bc==r){this.__wk(bc);
}else if(bc==A){this.__wm();
}else if(bc==t){this.__wl();
}},__wc:function(){return parseFloat(this.getInput());
},__wd:function(W,X,Y){switch(Y){case f:return W+X;
case j:return W-X;
case G:return W*X;
case e:if(X==0){this.setErrorMessage(y);
this.setState(k);
return null;
}else{return W/X;
}}},_applyState:function(I,J){if(I==n){this.setInput(m);
}else if(I==k){this.setOperator(null);
}},__we:function(K){this.setState(n);
var L=this.getInput();

if(L.length>=this.getMaxInputLength()-1){return;
}
if(K==m){if(L!==m){L+=m;
}}else{if(L==m){L=K;
}else{L+=K;
}}this.setInput(L);
},__wf:function(){this.setState(n);
var ba=this.getInput();

if(ba==m){return;
}var bb=ba.charAt(0)==j;

if(bb){ba=ba.substr(1);
}else{ba=j+ba;
}this.setInput(ba);
},__wg:function(){this.setState(n);
var M=this.getInput();

if(M.length>=this.getMaxInputLength()-1){return;
}var N=M.indexOf(h)!==-1;

if(!N){M+=h;
}this.setInput(M);
},__wh:function(S){var U=this.getState();

if(U==k){return;
}else if(U==l){this.setOperator(S);
return;
}this.setState(l);
var T=this.__wc();
var V=this.getValue();

if(V!==null){this.setValue(this.__wd(V,T,this.getOperator()));
}else{this.setValue(T);
}this.setOperant(T);
this.setOperator(S);
},__wi:function(){var O=this.getOperator();

if(!O){return;
}var Q=this.getValue();

if(this.getState()==l){this.setValue(this.__wd(Q,this.getOperant(),O));
return;
}this.setState(l);
var P=this.__wc();
this.setOperant(P);
this.setValue(this.__wd(Q,P,O));
},__wj:function(){this.setState(n);
this.setOperator(null);
this.setValue(null);
this.setInput(m);
},__wk:function(a){var b=this.getState();
var c;

if(b==k){return;
}else if(b==l){c=this.getValue();
}else{c=this.__wc();
}var d=this.getMemory()||0;

if(a==g){this.setMemory(d+c);
}else{this.setMemory(d-c);
}},__wl:function(){var R=this.getMemory();

if(R==null){return;
}this.setState(n);
this.setInput(R.toString());
},__wm:function(){this.setMemory(null);
}}});
})();

});