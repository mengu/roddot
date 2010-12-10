qx.$$packageData['52aeafc0c3d1']={"locales":{},"resources":{"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/media-audio.png":[16,16,"png","qx"],"qx/icon/Tango/16/status/dialog-warning.png":[16,16,"png","qx"]},"translations":{"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","Reset column widths":"Spaltenbreite zurücksetzen","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","Reset column widths":"Reestablecer anchos de columnas","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{}}};

qx.Part.$$notifyLoad("52aeafc0c3d1", function() {
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var m="",l="px;",k=".qooxdoo-table-cell {",j="qooxdoo-table-cell",i='" ',h="nowrap",g="default",f="qx.client",e="}",d="width:",K=".qooxdoo-table-cell-right { text-align:right } ",J="0px 6px",I='<div class="',H="0px",G="height:",F="1px solid ",E=".qooxdoo-table-cell-bold { font-weight:bold } ",D="table-row-line",C="String",B='>',t="mshtml",u='</div>',r="ellipsis",s="content-box",p='left:',q="qx.ui.table.cellrenderer.Abstract",n='" style="',o="abstract",v="none",w="hidden",y="} ",x='px;',A=".qooxdoo-table-cell-italic { font-style:italic} ",z="absolute";
qx.Class.define(q,{type:o,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var a=qx.ui.table.cellrenderer.Abstract;

if(!a.__mv){var c=qx.theme.manager.Color.getInstance();
a.__mv=this.self(arguments);
var b=k+
qx.bom.element.Style.compile({position:z,top:H,overflow:w,whiteSpace:h,borderRight:F+c.resolve(D),padding:J,cursor:g,textOverflow:r,userSelect:v})+y+K+A+E;

if(!qx.core.Variant.isSet(f,t)){b+=k+qx.bom.element.BoxSizing.compile(s)+e;
}a.__mv.stylesheet=qx.bom.Stylesheet.createElement(b);
}},properties:{defaultCellStyle:{init:null,check:C,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(Q){return j;
},_getCellStyle:function(V){return V.style||m;
},_getCellAttributes:function(R){return m;
},_getContentHtml:function(U){return U.value||m;
},_getCellSizeStyle:function(L,M,N,O){var P=m;

if(qx.bom.client.Feature.CONTENT_BOX){L-=N;
M-=O;
}P+=d+Math.max(L,0)+l;
P+=G+Math.max(M,0)+l;
return P;
},createDataCellHtml:function(S,T){T.push(I,this._getCellClass(S),n,p,S.styleLeft,x,this._getCellSizeStyle(S.styleWidth,S.styleHeight,this._insetX,this._insetY),this._getCellStyle(S),i,this._getCellAttributes(S),B+this._getContentHtml(S),u);
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var k="icon",j="label",i="String",h="sort-icon",g="_applySortIcon",f="_applyIcon",e="table-header-cell",d="qx.ui.table.headerrenderer.HeaderCell",c="_applyLabel";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var l=new qx.ui.layout.Grid();
l.setRowFlex(0,1);
l.setColumnFlex(1,1);
l.setColumnFlex(2,1);
this.setLayout(l);
},properties:{appearance:{refine:true,init:e},label:{check:i,init:null,nullable:true,apply:c},sortIcon:{check:i,init:null,nullable:true,apply:g,themeable:true},icon:{check:i,init:null,nullable:true,apply:f}},members:{_applyLabel:function(m,n){if(m){this._showChildControl(j).setValue(m);
}else{this._excludeChildControl(j);
}},_applySortIcon:function(o,p){if(o){this._showChildControl(h).setSource(o);
}else{this._excludeChildControl(h);
}},_applyIcon:function(q,r){if(q){this._showChildControl(k).setSource(q);
}else{this._excludeChildControl(k);
}},_createChildControlImpl:function(a){var b;

switch(a){case j:b=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(b,{row:0,column:1});
break;
case h:b=new qx.ui.basic.Image(this.getSortIcon());
b.setAnonymous(true);
this._add(b,{row:0,column:2});
break;
case k:b=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(b,{row:0,column:0});
break;
}return b||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,a);
}}});
})();
(function(){var e="qx.event.type.Data",d="qx.event.type.Event",c="qx.ui.table.ITableModel";
qx.Interface.define(c,{events:{"dataChanged":e,"metaDataChanged":d,"sorted":e},members:{getRowCount:function(){},getRowData:function(l){},getColumnCount:function(){},getColumnId:function(p){},getColumnIndexById:function(s){},getColumnName:function(o){},isColumnEditable:function(w){},isColumnSortable:function(h){},sortByColumn:function(f,g){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(a,b){},getValue:function(m,n){},getValueById:function(q,r){},setValue:function(t,u,v){},setValueById:function(i,j,k){}}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(n){var p=n.value;
var o;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(C,D,E,F){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__wv=C||s;
this.__ww=D||s;
this.__wx=E||s;
this.__wy=F||s;
},members:{__wv:null,__ww:null,__wx:null,__wy:null,__wz:function(be,bf){if(be[1]!=null){bf[f]=be[1];
}
if(be[2]!=null){bf[d]=be[2];
}
if(be[3]!=null){bf[g]=be[3];
}
if(be[4]!=null){bf[c]=be[4];
}},addNumericCondition:function(V,W,X,Y,ba,bb,bc){var bd=null;

if(qx.lang.Array.contains(this.numericAllowed,V)){if(W!=null){bd=[V,X,Y,ba,bb,W,bc];
}}
if(bd!=null){this.conditions.push(bd);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(t,u,v,w,x,y,z,A){if(qx.lang.Array.contains(this.betweenAllowed,t)){if(u!=null&&v!=null){var B=[t,w,x,y,z,u,v,A];
}}
if(B!=null){this.conditions.push(B);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(O,P,Q,R,S,T){if(O!=null){var U=[n,P,Q,R,S,O,T];
}
if(U!=null){this.conditions.push(U);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(G){if(!this.conditions.length){return G.style||s;
}var L=G.table.getTableModel();
var i;
var N;
var H;
var J={"text-align":this.__wv,"color":this.__ww,"font-style":this.__wx,"font-weight":this.__wy};

for(i in this.conditions){N=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){H=G.value;
}else{H=L.getValueById(this.conditions[i][6],G.row);
}
switch(this.conditions[i][0]){case r:if(H==this.conditions[i][5]){N=true;
}break;
case k:if(H!=this.conditions[i][5]){N=true;
}break;
case q:if(H>this.conditions[i][5]){N=true;
}break;
case o:if(H<this.conditions[i][5]){N=true;
}break;
case l:if(H>=this.conditions[i][5]){N=true;
}break;
case j:if(H<=this.conditions[i][5]){N=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){H=G.value;
}else{H=L.getValueById(this.conditions[i][7],G.row);
}
switch(this.conditions[i][0]){case p:if(H>=this.conditions[i][5]&&H<=this.conditions[i][6]){N=true;
}break;
case m:if(H<this.conditions[i][5]&&H>this.conditions[i][6]){N=true;
}break;
}}else if(this.conditions[i][0]==n){if(this.conditions[i][6]==null){H=G.value;
}else{H=L.getValueById(this.conditions[i][6],G.row);
}var I=new RegExp(this.conditions[i][5],b);
N=I.test(H);
}if(N==true){this.__wz(this.conditions[i],J);
}}var M=[];

for(var K in J){if(J[K]){M.push(K,a,J[K],h);
}}return M.join(s);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(c){return true;
},getCellEditorValue:function(b){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var c="",b="qx.ui.table.headerrenderer.Icon",a="String";
qx.Class.define(b,{extend:qx.ui.table.headerrenderer.Default,construct:function(d,e){qx.ui.table.headerrenderer.Default.call(this);

if(d==null){d=c;
}this.setIconUrl(d);

if(e){this.setToolTip(e);
}},properties:{iconUrl:{check:a,init:c}},members:{updateHeaderCell:function(f,g){qx.ui.table.headerrenderer.Default.prototype.updateHeaderCell.call(this,f,g);
g.setIcon(this.getIconUrl());
}}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var l="",k="Year",h="loading ...",g="Title",f="Explicit",e="icon/16/mimetypes/media-audio.png",d="showcase.page.table.Content.saveResult",c="Chart Pos.",b="this",a="0",x="2*",w="1*",v="icon/16/apps/office-calendar.png",u="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",t="Artist",s="select * from music.track.popular",r="Popular Music Tracks",q=", ",p="http://query.yahooapis.com/v1/public/yql?q=",o="icon/16/status/dialog-warning.png",m="showcase.page.table.Content",n="&format=json&diagnostics=false&";
qx.Class.define(m,{extend:showcase.page.AbstractDesktopContent,construct:function(D){showcase.page.AbstractDesktopContent.call(this,D);
},statics:{saveResult:function(Q){this._result=Q;
}},members:{_addWindowContent:function(I){var N=[[0,h,h,0,false]];
var L=this._tableModel=new qx.ui.table.model.Simple();
L.setColumns([c,g,t,k,f]);
L.setData(N);
L.setColumnEditable(1,true);
L.setColumnEditable(2,true);
L.setColumnSortable(3,true);
var K={tableColumnModel:function(P){return new qx.ui.table.columnmodel.Resize(P);
}};
var O=new qx.ui.table.Table(L,K);
O.set({width:540,height:400,decorator:null,headerCellHeight:null});
O.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
var M=O.getTableColumnModel();
M.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Number());
M.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Number());
M.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Boolean());
M.setHeaderCellRenderer(1,new qx.ui.table.headerrenderer.Icon(e,g));
M.setHeaderCellRenderer(3,new qx.ui.table.headerrenderer.Icon(v,k));
M.setHeaderCellRenderer(4,new qx.ui.table.headerrenderer.Icon(o,f));
var J=M.getBehavior();
J.set(1,{width:x,minWidth:60});
J.set(2,{width:w,minWidth:60});
J.setWidth(0,80);
J.setWidth(3,70);
J.setWidth(4,85);
I.setCaption(r);
I.setLayout(new qx.ui.layout.Grow());
I.add(O);
this._loadData(L);
},_loadData:function(E){var G=s;
var F=p+encodeURIComponent(G)+n+u+d;
var H=new qx.io.ScriptLoader();
H.load(F,function(){var A=showcase.page.table.Content._result;
var z=[];
var y=A.query.results.Track;

for(var i=0;i<y.length;i++){var C=[];
C.push(parseInt(y[i].ItemInfo.ChartPosition[b]));
C.push(y[i].title||l);

if(y[i].Artist instanceof Array){var B=l;

for(var j=0;j<y[i].Artist.length;j++){if(j!=0){B+=q;
}B+=y[i].Artist[j].name;
}C.push(B);
}else{C.push(y[i].Artist.name||l);
}C.push(parseInt(y[i].releaseYear));
C.push(y[i].explicit!==a);
z.push(C);
}E.setData(z);
});
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(q){qx.ui.container.Composite.call(this);
this.__pC=q;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__pC:null,_onKeyPress:function(e){var h=e.getKeyIdentifier();

if(h!==f&&h!==c){e.stopPropagation();
}},moveToCell:function(i,j){if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__pC.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__pC.getTable();
var n=p.getTableColumnModel();
var o=this.__pC.getTablePaneModel();
var m=this.__pC.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__pC=null;
}});
})();
(function(){var cj="",ci="!",ch="'!",cg="'",cf="Expected '",ce="' (rgb(",cd=",",cc=")), but found value '",cb="Event (",ca="Expected value to be the CSS color '",dr="' but found ",dq="The value '",dp=" != ",dn="qx.core.Object",dm="Expected value to be an array but found ",dl=") was fired.",dk="Expected value to be an integer >= 0 but found ",dj="' to be not equal with '",di="' to '",dh="qx.ui.core.Widget",cq="Called assertTrue with '",cr="Expected value to be a map but found ",co="The function did not raise an exception!",cp="Expected value to be undefined but found ",cm="Expected value to be a DOM element but found  '",cn="Expected value to be a regular expression but found ",ck="' to implement the interface '",cl="Expected value to be null but found ",cy="Invalid argument 'type'",cz="Called assert with 'false'",cL="Assertion error! ",cH="Expected value to be a string but found ",cT="null",cO="' but found '",dd="' must must be a key of the map '",cY="The String '",cD="Expected value not to be undefined but found ",dg="qx.util.ColorUtil",df=": ",de="The raised exception does not have the expected type! ",cC=") not fired.",cF="qx.core.Assert",cG="Expected value to be typeof object but found ",cJ="' (identical) but found '",cM="' must have any of the values defined in the array '",cP="Expected value to be a number but found ",cV="Called assertFalse with '",db="]",cs="Expected value to be a qooxdoo object but found ",ct="' arguments.",cE="Expected value not to be null but found ",cS="Array[",cR="' does not match the regular expression '",cQ="' to be not identical with '",cX="' arguments but found '",cW="', which cannot be converted to a CSS color!",cN="Expected object '",cU="qx.core.AssertionError",bW="Expected value to be a boolean but found ",da="))!",cu="Expected value to be a qooxdoo widget but found ",cv="Expected value '%1' to be in the range '%2'..'%3'!",cI="Expected value to be typeof '",bX="Expected value to be typeof function but found ",bY="Expected value to be an integer but found ",cB="Called fail().",cw="The parameter 're' must be a string or a regular expression.",cx="Expected value to be a number >= 0 but found ",cA="Expected value to be instanceof '",cK="Wrong number of arguments given. Expected '",dc="object";
qx.Class.define(cF,{statics:{__qo:true,__qp:function(K,L){var M=cj;

for(var i=1,l=arguments.length;i<l;i++){M=M+this.__qq(arguments[i]);
}var O=cL+K+df+M;

if(this.__qo){qx.Bootstrap.error(O);
}
if(qx.Class.isDefined(cU)){var N=new qx.core.AssertionError(K,M);

if(this.__qo){qx.Bootstrap.error("Stack trace: \n"+N.getStackTrace());
}throw N;
}else{throw new Error(O);
}},__qq:function(bt){var bu;

if(bt===null){bu=cT;
}else if(qx.lang.Type.isArray(bt)&&bt.length>10){bu=cS+bt.length+db;
}else if((bt instanceof Object)&&(bt.toString==null)){bu=qx.lang.Json.stringify(bt,null,2);
}else{try{bu=bt.toString();
}catch(e){bu=cj;
}}return bu;
},assert:function(c,d){c==true||this.__qp(d||cj,cz);
},fail:function(bV){this.__qp(bV||cj,cB);
},assertTrue:function(dR,dS){(dR===true)||this.__qp(dS||cj,cq,dR,cg);
},assertFalse:function(bK,bL){(bK===false)||this.__qp(bL||cj,cV,bK,cg);
},assertEquals:function(U,V,W){U==V||this.__qp(W||cj,cf,U,cO,V,ch);
},assertNotEquals:function(bM,bN,bO){bM!=bN||this.__qp(bO||cj,cf,bM,dj,bN,ch);
},assertIdentical:function(h,j,k){h===j||this.__qp(k||cj,cf,h,cJ,j,ch);
},assertNotIdentical:function(dC,dD,dE){dC!==dD||this.__qp(dE||cj,cf,dC,cQ,dD,ch);
},assertNotUndefined:function(f,g){f!==undefined||this.__qp(g||cj,cD,f,ci);
},assertUndefined:function(n,o){n===undefined||this.__qp(o||cj,cp,n,ci);
},assertNotNull:function(bf,bg){bf!==null||this.__qp(bg||cj,cE,bf,ci);
},assertNull:function(a,b){a===null||this.__qp(b||cj,cl,a,ci);
},assertJsonEquals:function(bE,bF,bG){this.assertEquals(qx.lang.Json.stringify(bE),qx.lang.Json.stringify(bF),bG);
},assertMatch:function(ba,bb,bc){this.assertString(ba);
this.assert(qx.lang.Type.isRegExp(bb)||qx.lang.Type.isString(bb),cw);
ba.search(bb)>=0||this.__qp(bc||cj,cY,ba,cR,bb.toString(),ch);
},assertArgumentsCount:function(B,C,D,E){var F=B.length;
(F>=C&&F<=D)||this.__qp(E||cj,cK,C,di,D,cX,arguments.length,ct);
},assertEventFired:function(bh,event,bi,bj,bk){var bm=false;
var bl=function(e){if(bj){bj.call(bh,e);
}bm=true;
};
var bn=bh.addListener(event,bl,bh);
bi.call();
bm===true||this.__qp(bk||cj,cb,event,cC);
bh.removeListenerById(bn);
},assertEventNotFired:function(dI,event,dJ,dK){var dM=false;
var dL=function(e){dM=true;
};
var dN=dI.addListener(event,dL,dI);
dJ.call();
dM===false||this.__qp(dK||cj,cb,event,dl);
dI.removeListenerById(dN);
},assertException:function(P,Q,R,S){var Q=Q||Error;
var T;

try{this.__qo=false;
P();
}catch(m){T=m;
}finally{this.__qo=true;
}
if(T==null){this.__qp(S||cj,co);
}T instanceof Q||this.__qp(S||cj,de,Q,dp,T);

if(R){this.assertMatch(T.toString(),R,S);
}},assertInArray:function(bz,bA,bB){bA.indexOf(bz)!==-1||this.__qp(bB||cj,dq,bz,cM,bA,cg);
},assertArrayEquals:function(bP,bQ,bR){this.assertArray(bP,bR);
this.assertArray(bQ,bR);
this.assertEquals(bP.length,bQ.length,bR);

for(var i=0;i<bP.length;i++){this.assertIdentical(bP[i],bQ[i],bR);
}},assertKeyInMap:function(bS,bT,bU){bT[bS]!==undefined||this.__qp(bU||cj,dq,bS,dd,bT,cg);
},assertFunction:function(dG,dH){qx.lang.Type.isFunction(dG)||this.__qp(dH||cj,bX,dG,ci);
},assertString:function(bd,be){qx.lang.Type.isString(bd)||this.__qp(be||cj,cH,bd,ci);
},assertBoolean:function(bv,bw){qx.lang.Type.isBoolean(bv)||this.__qp(bw||cj,bW,bv,ci);
},assertNumber:function(r,s){(qx.lang.Type.isNumber(r)&&isFinite(r))||this.__qp(s||cj,cP,r,ci);
},assertPositiveNumber:function(I,J){(qx.lang.Type.isNumber(I)&&isFinite(I)&&I>=0)||this.__qp(J||cj,cx,I,ci);
},assertInteger:function(bx,by){(qx.lang.Type.isNumber(bx)&&isFinite(bx)&&bx%1===0)||this.__qp(by||cj,bY,bx,ci);
},assertPositiveInteger:function(dV,dW){var dX=(qx.lang.Type.isNumber(dV)&&isFinite(dV)&&dV%1===0&&dV>=0);
dX||this.__qp(dW||cj,dk,dV,ci);
},assertInRange:function(x,y,z,A){(x>=y&&x<=z)||this.__qp(A||cj,qx.lang.String.format(cv,[x,y,z]));
},assertObject:function(bo,bp){var bq=bo!==null&&(qx.lang.Type.isObject(bo)||typeof bo===dc);
bq||this.__qp(bp||cj,cG,(bo),ci);
},assertArray:function(p,q){qx.lang.Type.isArray(p)||this.__qp(q||cj,dm,p,ci);
},assertMap:function(X,Y){qx.lang.Type.isObject(X)||this.__qp(Y||cj,cr,X,ci);
},assertRegExp:function(br,bs){qx.lang.Type.isRegExp(br)||this.__qp(bs||cj,cn,br,ci);
},assertType:function(dO,dP,dQ){this.assertString(dP,cy);
typeof (dO)===dP||this.__qp(dQ||cj,cI,dP,dr,dO,ci);
},assertInstance:function(t,u,v){var w=u.classname||u+cj;
t instanceof u||this.__qp(v||cj,cA,w,dr,t,ci);
},assertInterface:function(bH,bI,bJ){qx.Class.implementsInterface(bH,bI)||this.__qp(bJ||cj,cN,bH,ck,bI,ch);
},assertCssColor:function(dv,dw,dx){var dy=qx.Class.getByName(dg);

if(!dy){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dA=dy.stringToRgb(dv);

try{var dz=dy.stringToRgb(dw);
}catch(dF){this.__qp(dx||cj,ca,dv,ce,dA.join(cd),cc,dw,cW);
}var dB=dA[0]==dz[0]&&dA[1]==dz[1]&&dA[2]==dz[2];
dB||this.__qp(dx||cj,ca,dA,ce,dA.join(cd),cc,dw,ce,dz.join(cd),da);
},assertElement:function(dT,dU){!!(dT&&dT.nodeType===1)||this.__qp(dU||cj,cm,dT,ch);
},assertQxObject:function(bC,bD){this.__qr(bC,dn)||this.__qp(bD||cj,cs,bC,ci);
},assertQxWidget:function(G,H){this.__qr(G,dh)||this.__qp(H||cj,cu,G,ci);
},__qr:function(ds,dt){if(!ds){return false;
}var du=ds.constructor;

while(du){if(du.classname===dt){return true;
}du=du.superclass;
}return false;
}}});
})();
(function(){var z="",w="Number",v='</div>',u='" ',t="paneUpdated",s='<div>',r="</div>",q="overflow: hidden;",p="qx.event.type.Data",o="paneReloadsData",R="div",Q='style="',P="_applyMaxCacheLines",O="qx.ui.table.pane.Pane",N="width: 100%;",M="qx.event.type.Event",L="_applyVisibleRowCount",K='>',J="line-height: ",I="appear",G='class="',H="width:100%;",E="px;",F='<div ',C="'>",D="_applyFirstVisibleRow",A="<div style='",B=";position:relative;";
qx.Class.define(O,{extend:qx.ui.core.Widget,construct:function(by){qx.ui.core.Widget.call(this);
this.__oE=by;
this.__oF=0;
this.__oG=0;
this.__oH=[];
},events:{"paneReloadsData":p,"paneUpdated":M},properties:{firstVisibleRow:{check:w,init:0,apply:D},visibleRowCount:{check:w,init:0,apply:L},maxCacheLines:{check:w,init:1000,apply:P},allowShrinkX:{refine:true,init:false}},members:{__oG:null,__oF:null,__oE:null,__oI:null,__oJ:null,__oK:null,__oH:null,__oL:0,_applyFirstVisibleRow:function(br,bs){this.updateContent(false,br-bs);
},_applyVisibleRowCount:function(W,X){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__oE;
},getTable:function(){return this.__oE.getTable();
},setFocusedCell:function(bl,bm,bn){if(bl!=this.__oK||bm!=this.__oJ){var bo=this.__oJ;
this.__oK=bl;
this.__oJ=bm;
if(bm!=bo&&!bn){if(bo!==null){this.updateContent(false,null,bo,true);
}
if(bm!==null){this.updateContent(false,null,bm,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(bz,bA){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(cr,cs,ct,cu){this.__oM();
var cw=this.getFirstVisibleRow();
var cv=this.getVisibleRowCount();

if(cs==-1||cs>=cw&&cr<cw+cv){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(bp,bq){if(this.__oL>=bp&&bp!==-1){this.__oM();
}},__oM:function(){this.__oH=[];
this.__oL=0;
},__oN:function(T,U,V){if(!U&&!V&&this.__oH[T]){return this.__oH[T];
}else{return null;
}},__oO:function(bt,bu,bv,bw){var bx=this.getMaxCacheLines();

if(!bv&&!bw&&!this.__oH[bt]&&bx>0){this._applyMaxCacheLines(bx);
this.__oH[bt]=bu;
this.__oL+=1;
}},updateContent:function(cx,cy,cz,cA){if(cx){this.__oM();
}if(cy&&Math.abs(cy)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(cy);
}else if(cA&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(cz);
}else{this._updateAllRows();
}},_updateRowStyles:function(cg){var ck=this.getContentElement().getDomElement();

if(!ck||!ck.firstChild){this._updateAllRows();
return;
}var co=this.getTable();
var ci=co.getSelectionModel();
var cl=co.getTableModel();
var cp=co.getDataRowRenderer();
var cj=ck.firstChild.childNodes;
var cn={table:co};
var cq=this.getFirstVisibleRow();
var y=0;
var ch=cj.length;

if(cg!=null){var cm=cg-cq;

if(cm>=0&&cm<ch){cq=cg;
y=cm;
ch=cm+1;
}else{return;
}}
for(;y<ch;y++,cq++){cn.row=cq;
cn.selected=ci.isSelectedIndex(cq);
cn.focusedRow=(this.__oJ==cq);
cn.rowData=cl.getRowData(cq);
cp.updateDataRowElement(cn,cj[y]);
}},_getRowsHtml:function(bB,bC){var bI=this.getTable();
var bL=bI.getSelectionModel();
var bF=bI.getTableModel();
var bG=bI.getTableColumnModel();
var cb=this.getPaneScroller().getTablePaneModel();
var bQ=bI.getDataRowRenderer();
bF.prefetchRows(bB,bB+bC-1);
var bX=bI.getRowHeight();
var ca=cb.getColumnCount();
var bH=0;
var bE=[];
for(var x=0;x<ca;x++){var ce=cb.getColumnAtX(x);
var bK=bG.getColumnWidth(ce);
bE.push({col:ce,xPos:x,editable:bF.isColumnEditable(ce),focusedCol:this.__oK==ce,styleLeft:bH,styleWidth:bK});
bH+=bK;
}var cd=[];
var cf=false;

for(var bJ=bB;bJ<bB+bC;bJ++){var bM=bL.isSelectedIndex(bJ);
var bP=(this.__oJ==bJ);
var bU=this.__oN(bJ,bM,bP);

if(bU){cd.push(bU);
continue;
}var bD=[];
var bW={table:bI};
bW.styleHeight=bX;
bW.row=bJ;
bW.selected=bM;
bW.focusedRow=bP;
bW.rowData=bF.getRowData(bJ);

if(!bW.rowData){cf=true;
}bD.push(F);
var bT=bQ.getRowAttributes(bW);

if(bT){bD.push(bT);
}var bS=bQ.getRowClass(bW);

if(bS){bD.push(G,bS,u);
}var bR=bQ.createRowStyle(bW);
bR+=B+bQ.getRowHeightStyle(bX)+H;

if(bR){bD.push(Q,bR,u);
}bD.push(K);
var cc=false;

for(x=0;x<ca&&!cc;x++){var bN=bE[x];

for(var bY in bN){bW[bY]=bN[bY];
}var ce=bW.col;
bW.value=bF.getValue(ce,bJ);
var bO=bG.getDataCellRenderer(ce);
bW.style=bO.getDefaultCellStyle();
cc=bO.createDataCellHtml(bW,bD)||false;
}bD.push(v);
var bV=bD.join(z);
this.__oO(bJ,bV,bM,bP);
cd.push(bV);
}this.fireDataEvent(o,cf);
return cd.join(z);
},_scrollContent:function(a){var b=this.getContentElement().getDomElement();

if(!(b&&b.firstChild)){this._updateAllRows();
return;
}var l=b.firstChild;
var c=l.childNodes;
var j=this.getVisibleRowCount();
var h=this.getFirstVisibleRow();
var f=this.getTable().getTableModel();
var m=0;
m=f.getRowCount();
if(h+j>m){this._updateAllRows();
return;
}var n=a<0?j+a:0;
var d=a<0?0:j-a;

for(i=Math.abs(a)-1;i>=0;i--){var g=c[n];

try{l.removeChild(g);
}catch(S){break;
}}if(!this.__oI){this.__oI=document.createElement(R);
}var k=s;
k+=this._getRowsHtml(h+d,Math.abs(a));
k+=v;
this.__oI.innerHTML=k;
var e=this.__oI.firstChild.childNodes;
if(a>0){for(var i=e.length-1;i>=0;i--){var g=e[0];
l.appendChild(g);
}}else{for(var i=e.length-1;i>=0;i--){var g=e[e.length-1];
l.insertBefore(g,l.firstChild);
}}if(this.__oJ!==null){this._updateRowStyles(this.__oJ-a);
this._updateRowStyles(this.__oJ);
}this.fireEvent(t);
},_updateAllRows:function(){var bc=this.getContentElement().getDomElement();

if(!bc){this.addListenerOnce(I,arguments.callee,this);
return;
}var bi=this.getTable();
var bf=bi.getTableModel();
var bh=this.getPaneScroller().getTablePaneModel();
var bg=bh.getColumnCount();
var Y=bi.getRowHeight();
var bd=this.getFirstVisibleRow();
var ba=this.getVisibleRowCount();
var bj=bf.getRowCount();

if(bd+ba>bj){ba=Math.max(0,bj-bd);
}var bb=bh.getTotalWidth();
var be;
if(ba>0){be=[A,N,(bi.getForceLineHeight()?J+Y+E:z),q,C,this._getRowsHtml(bd,ba),r];
}else{be=[];
}var bk=be.join(z);
bc.innerHTML=bk;
this.setWidth(bb);
this.__oF=bg;
this.__oG=ba;
this.fireEvent(t);
}},destruct:function(){this.__oI=this.__oE=this.__oH=null;
}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__mX:null,renderLayout:function(j,top,k,l){this.__mX=k;
},getComputedWidth:function(){return this.__mX;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(f,g){var g=g||0;
var h=null;

if(typeof f==c){this.setWidth(f);
}else if(typeof f==d){if(f==e){g=1;
}else{var i=f.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(i){if(i[1]==b){g=parseFloat(f);
}else{h=f;
}}}}this.setLayoutProperties({flex:g,width:h});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.table.columnmodel.resizebehavior.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(c){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,d){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var f=this.getTableColumnModel();
var i=f.getTable();
var e=i._getPaneScrollerArr();

if(!e[0]||!e[0].getLayoutParent().getBounds()){return null;
}var h=e[0].getLayoutParent().getBounds().width;
var g=e[e.length-1];
h-=g.getPaneInsetRight();
return h;
}}});
})();
(function(){var j="__na",h="Function",g="Boolean",f="minWidth",e="width",d="qx.ui.table.columnmodel.Resize",c="qx.ui.table.columnmodel.resizebehavior.Default",b="__nb",a="maxWidth";
qx.Class.define(c,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__mY=[];
this.__na=new qx.ui.layout.HBox();
this.__na.connectToWidget(this);
this.__nb=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:h,init:function(J){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:g,init:false},tableColumnModel:{check:d}},members:{__na:null,__nc:null,__mY:null,__nb:null,__nd:false,setWidth:function(K,L,M){if(K>=this.__mY.length){throw new Error("Column number out of range");
}this.__mY[K].setColumnWidth(L,M);
this.__nb.schedule();
},setMinWidth:function(z,A){if(z>=this.__mY.length){throw new Error("Column number out of range");
}this.__mY[z].setMinWidth(A);
this.__nb.schedule();
},setMaxWidth:function(N,O){if(N>=this.__mY.length){throw new Error("Column number out of range");
}this.__mY[N].setMaxWidth(O);
this.__nb.schedule();
},set:function(u,v){for(var w in v){switch(w){case e:this.setWidth(u,v[w]);
break;
case f:this.setMinWidth(u,v[w]);
break;
case a:this.setMaxWidth(u,v[w]);
break;
default:throw new Error("Unknown property: "+w);
}}},onAppear:function(event,P){if(P===true||!this.__nd||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__nd=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var k=event.getData();
if(k.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(x){var y=this.__mY;
if(x<=y.length){y.splice(x,y.length);
return;
}for(var i=y.length;i<x;i++){y[i]=this.getNewResizeBehaviorColumnData()();
y[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__nc;
},_computeColumnsFlexWidth:function(){this.__nb.cancel();
var r=this._getAvailableWidth();

if(r===null){return;
}var n=this.getTableColumnModel();
var p=n.getVisibleColumns();
var q=p.length;
var o=this.__mY;
var i,l;

if(q===0){return;
}var t=[];

for(i=0;i<q;i++){t.push(o[p[i]]);
}this.__nc=t;
this.__ne();
this.__na.renderLayout(r,100);
for(i=0,l=t.length;i<l;i++){var s=t[i].getComputedWidth();
n.setColumnWidth(p[i],s);
}},__ne:function(){this.__na.invalidateChildrenCache();
var m=this.__nc;

for(var i=0,l=m.length;i<l;i++){m[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var F=this.getTableColumnModel();
var I=event.getData();
var D=F.getVisibleColumns();
var C=this._getAvailableWidth();
var B=D.length;
if(I.newWidth>I.oldWidth){return ;
}var i;
var E;
var H=0;

for(i=0;i<B;i++){H+=F.getColumnWidth(D[i]);
}if(H<C){for(i=0;i<D.length;i++){if(D[i]==I.col){E=D[i+1];
break;
}}
if(E){var G=(C-(H-F.getColumnWidth(E)));
F.setColumnWidth(E,G);
}}},_extendLastColumn:function(event){var T=this.getTableColumnModel();
var X=event.getData();
if(X.visible){return;
}var S=T.getVisibleColumns();
if(S.length==0){return;
}var R=this._getAvailableWidth(T);
var Q=S.length;
var i;
var V;
var W=0;

for(i=0;i<Q;i++){W+=T.getColumnWidth(S[i]);
}if(W<R){V=S[S.length-1];
var U=(R-(W-T.getColumnWidth(V)));
T.setColumnWidth(V,U);
}},_getResizeColumnData:function(){return this.__mY;
}},destruct:function(){this.__mY=this.__nc=null;
this._disposeObjects(j,b);
}});
})();
(function(){var s="qx.event.type.Data",r="visibilityChanged",q="orderChanged",p="visibilityChangedPre",o="__mD",n="widthChanged",m="qx.ui.table.columnmodel.Basic",l="__mC",k="__mB";
qx.Class.define(m,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mw=[];
this.__mx=[];
},events:{"widthChanged":s,"visibilityChangedPre":s,"visibilityChanged":s,"orderChanged":s},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__my:null,__mz:null,__mx:null,__mw:null,__mA:null,__mB:null,__mC:null,__mD:null,init:function(Y){{};
this.__mA=[];
var bc=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var bd=this.__mB||(this.__mB=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var bb=this.__mC||(this.__mC=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var ba=this.__mD||(this.__mD=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__mw=[];
this.__mx=[];

for(var bf=0;bf<Y;bf++){this.__mA[bf]={width:bc,headerRenderer:bd,dataRenderer:bb,editorFactory:ba};
this.__mw[bf]=bf;
this.__mx[bf]=bf;
}this.__mz=null;

for(var bf=0;bf<Y;bf++){var be={col:bf,visible:true};
this.fireDataEvent(p,be);
this.fireDataEvent(r,be);
}},getVisibleColumns:function(){return this.__mx!=null?this.__mx:[];
},setColumnWidth:function(P,Q){{};
var S=this.__mA[P].width;

if(S!=Q){this.__mA[P].width=Q;
var R={col:P,newWidth:Q,oldWidth:S};
this.fireDataEvent(n,R);
}},getColumnWidth:function(D){{};
return this.__mA[D].width;
},setHeaderCellRenderer:function(d,e){{};
var f=this.__mA[d].headerRenderer;

if(f!==this.__mB){f.dispose();
}this.__mA[d].headerRenderer=e;
},getHeaderCellRenderer:function(K){{};
return this.__mA[K].headerRenderer;
},setDataCellRenderer:function(g,h){{};
var j=this.__mA[g].dataRenderer;

if(j!==this.__mC){j.dispose();
}this.__mA[g].dataRenderer=h;
},getDataCellRenderer:function(X){{};
return this.__mA[X].dataRenderer;
},setCellEditorFactory:function(L,M){{};
var N=this.__mA[L].headerRenderer;

if(N!==this.__mD){N.dispose();
}this.__mA[L].editorFactory=M;
},getCellEditorFactory:function(b){{};
return this.__mA[b].editorFactory;
},_getColToXPosMap:function(){if(this.__mz==null){this.__mz={};

for(var bj=0;bj<this.__mw.length;bj++){var bi=this.__mw[bj];
this.__mz[bi]={overX:bj};
}
for(var bh=0;bh<this.__mx.length;bh++){var bi=this.__mx[bh];
this.__mz[bi].visX=bh;
}}return this.__mz;
},getVisibleColumnCount:function(){return this.__mx!=null?this.__mx.length:0;
},getVisibleColumnAtX:function(bg){{};
return this.__mx[bg];
},getVisibleX:function(c){{};
return this._getColToXPosMap()[c].visX;
},getOverallColumnCount:function(){return this.__mw.length;
},getOverallColumnAtX:function(O){{};
return this.__mw[O];
},getOverallX:function(a){{};
return this._getColToXPosMap()[a].overX;
},isColumnVisible:function(J){{};
return (this._getColToXPosMap()[J].visX!=null);
},setColumnVisible:function(t,u){{};

if(u!=this.isColumnVisible(t)){if(u){var B=this._getColToXPosMap();
var y=B[t].overX;

if(y==null){throw new Error("Showing column failed: "+t+". The column is not added to this TablePaneModel.");
}var z;

for(var x=y+1;x<this.__mw.length;x++){var A=this.__mw[x];
var v=B[A].visX;

if(v!=null){z=v;
break;
}}if(z==null){z=this.__mx.length;
}this.__mx.splice(z,0,t);
}else{var w=this.getVisibleX(t);
this.__mx.splice(w,1);
}this.__mz=null;
if(!this.__my){var C={col:t,visible:u};
this.fireDataEvent(p,C);
this.fireDataEvent(r,C);
}}},moveColumn:function(E,F){{};
this.__my=true;
var I=this.__mw[E];
var G=this.isColumnVisible(I);

if(G){this.setColumnVisible(I,false);
}this.__mw.splice(E,1);
this.__mw.splice(F,0,I);
this.__mz=null;

if(G){this.setColumnVisible(I,true);
}this.__my=false;
var H={col:I,fromOverXPos:E,toOverXPos:F};
this.fireDataEvent(q,H);
},setColumnsOrder:function(T){{};

if(T.length==this.__mw.length){this.__my=true;
var W=new Array(T.length);

for(var U=0;U<this.__mw.length;U++){var V=this.isColumnVisible(U);
W[U]=V;

if(V){this.setColumnVisible(U,false);
}}this.__mw=qx.lang.Array.clone(T);
this.__mz=null;
for(var U=0;U<this.__mw.length;U++){if(W[U]){this.setColumnVisible(U,true);
}}this.__my=false;
this.fireDataEvent(q);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__mw.length+", got "+T.length);
}}},destruct:function(){for(var i=0;i<this.__mA.length;i++){this.__mA[i].headerRenderer.dispose();
this.__mA[i].dataRenderer.dispose();
this.__mA[i].editorFactory.dispose();
}this.__mw=this.__mx=this.__mA=this.__mz=null;
this._disposeObjects(k,l,o);
}});
})();
(function(){var f="qx.ui.table.selection.Model",e="qx.ui.table.selection.Manager";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:f}},members:{__oz:null,handleMouseDown:function(r,s){if(s.isLeftPressed()){var t=this.getSelectionModel();

if(!t.isSelectedIndex(r)){this._handleSelectEvent(r,s);
this.__oz=true;
}else{this.__oz=false;
}}else if(s.isRightPressed()&&s.getModifiers()==0){var t=this.getSelectionModel();

if(!t.isSelectedIndex(r)){t.setSelectionInterval(r,r);
}}},handleMouseUp:function(n,o){if(o.isLeftPressed()&&!this.__oz){this._handleSelectEvent(n,o);
}},handleClick:function(l,m){},handleSelectKeyDown:function(p,q){this._handleSelectEvent(p,q);
},handleMoveKeyDown:function(a,b){var d=this.getSelectionModel();

switch(b.getModifiers()){case 0:d.setSelectionInterval(a,a);
break;
case qx.event.type.Dom.SHIFT_MASK:var c=d.getAnchorSelectionIndex();

if(c==-1){d.setSelectionInterval(a,a);
}else{d.setSelectionInterval(c,a);
}break;
}},_handleSelectEvent:function(g,h){var k=this.getSelectionModel();
var i=k.getLeadSelectionIndex();
var j=k.getAnchorSelectionIndex();

if(h.isShiftPressed()){if(g!=i||k.isSelectionEmpty()){if(j==-1){j=g;
}
if(h.isCtrlOrCommandPressed()){k.addSelectionInterval(j,g);
}else{k.setSelectionInterval(j,g);
}}}else if(h.isCtrlOrCommandPressed()){if(k.isSelectedIndex(g)){k.removeSelectionInterval(g,g);
}else{k.addSelectionInterval(g,g);
}}else{k.setSelectionInterval(g,g);
}}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__qs:null,__qt:null,__qu:null,__qv:null,stringify:function(bf,bg,bh){this.__qs=p;
this.__qt=p;
this.__qv=[];

if(qx.lang.Type.isNumber(bh)){var bh=Math.min(10,Math.floor(bh));

for(var i=0;i<bh;i+=1){this.__qt+=O;
}}else if(qx.lang.Type.isString(bh)){if(bh.length>10){bh=bh.slice(0,10);
}this.__qt=bh;
}if(bg&&(qx.lang.Type.isFunction(bg)||qx.lang.Type.isArray(bg))){this.__qu=bg;
}else{this.__qu=null;
}return this.__qw(p,{'':bf});
},__qw:function(bs,bt){var bw=this.__qs,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__qu===e){bx=this.__qu.call(bt,bs,bx);
}
if(bx===null){return h;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case R:return this.__qx(bx);
case B:return isFinite(bx)?String(bx):h;
case Q:return String(bx);
case J:this.__qs+=this.__qt;
bu=[];

if(this.__qv.indexOf(bx)!==-1){throw new TypeError(V);
}this.__qv.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__qw(i,bx)||h;
}this.__qv.pop();
if(bu.length===0){var bv=s;
}else if(this.__qs){bv=E+this.__qs+bu.join(Y+this.__qs)+b+bw+l;
}else{bv=N+bu.join(d)+l;
}this.__qs=bw;
return bv;
case z:this.__qs+=this.__qt;
bu=[];

if(this.__qv.indexOf(bx)!==-1){throw new TypeError(V);
}this.__qv.push(bx);
if(this.__qu&&typeof this.__qu===f){var length=this.__qu.length;

for(var i=0;i<length;i+=1){var k=this.__qu[i];

if(typeof k===W){var v=this.__qw(k,bx);

if(v){bu.push(this.__qx(k)+(this.__qs?g:m)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__qw(k,bx);

if(v){bu.push(this.__qx(k)+(this.__qs?g:m)+v);
}}}}this.__qv.pop();
if(bu.length===0){var bv=A;
}else if(this.__qs){bv=w+this.__qs+bu.join(Y+this.__qs)+b+bw+S;
}else{bv=C+bu.join(d)+S;
}this.__qs=bw;
return bv;
}},dateToJSON:function(bp){var bq=function(n){return n<10?U+n:n;
};
var br=function(n){var bi=bq(n);
return n<100?U+bi:bi;
};
return isFinite(bp.valueOf())?bp.getUTCFullYear()+T+bq(bp.getUTCMonth()+1)+T+bq(bp.getUTCDate())+M+bq(bp.getUTCHours())+m+bq(bp.getUTCMinutes())+m+bq(bp.getUTCSeconds())+F+br(bp.getUTCMilliseconds())+q:null;
},__qx:function(bm){var bn={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bo=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bo.lastIndex=0;

if(bo.test(bm)){return o+
bm.replace(bo,function(a){var c=bn[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bm+o;
}},parse:function(bj,bk){var bl=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bl.lastIndex=0;
if(bl.test(bj)){bj=bj.replace(bl,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bj.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bj+D);
return typeof bk===e?this.__qy({'':j},p,bk):j;
}throw new SyntaxError(P);
},__qy:function(bb,bc,bd){var be=bb[bc];

if(be&&typeof be===f){for(var k in be){if(Object.hasOwnProperty.call(be,k)){var v=this.__qy(be,k,bd);

if(v!==undefined){be[k]=v;
}else{delete be[k];
}}}}return bd.call(bb,bc,be);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var z="..",y="changeSelection",x="_applySelectionMode",w="]",v="qx.event.type.Event",u="Ranges:",t="qx.ui.table.selection.Model",s=" [";
qx.Class.define(t,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oA=[];
this.__oB=-1;
this.__oC=-1;
this.hasBatchModeRefCount=0;
this.__oD=false;
},events:{"changeSelection":v},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:x}},members:{__oD:null,__oB:null,__oC:null,__oA:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(r){if(r){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__oD){this.__oD=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__oB;
},_setAnchorSelectionIndex:function(N){this.__oB=N;
},getLeadSelectionIndex:function(){return this.__oC;
},_setLeadSelectionIndex:function(n){this.__oC=n;
},_getSelectedRangeArr:function(){return this.__oA;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__oA.length==0;
},getSelectedCount:function(){var q=0;

for(var i=0;i<this.__oA.length;i++){var p=this.__oA[i];
q+=p.maxIndex-p.minIndex+1;
}return q;
},isSelectedIndex:function(O){for(var i=0;i<this.__oA.length;i++){var P=this.__oA[i];

if(O>=P.minIndex&&O<=P.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var a=[];

for(var i=0;i<this.__oA.length;i++){a.push({minIndex:this.__oA[i].minIndex,maxIndex:this.__oA[i].maxIndex});
}return a;
},iterateSelection:function(l,m){for(var i=0;i<this.__oA.length;i++){for(var j=this.__oA[i].minIndex;j<=this.__oA[i].maxIndex;j++){l.call(m,j);
}}},setSelectionInterval:function(Q,R){var S=this.self(arguments);

switch(this.getSelectionMode()){case S.NO_SELECTION:return;
case S.SINGLE_SELECTION:if(this.isSelectedIndex(R)){return;
}Q=R;
break;
case S.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=Q;i<=R;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(Q,R);
this._fireChangeSelection();
},addSelectionInterval:function(A,B){var C=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case C.NO_SELECTION:return;
case C.MULTIPLE_INTERVAL_SELECTION:case C.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(A,B);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(A,B);
break;
}},removeSelectionInterval:function(D,E){this.__oB=D;
this.__oC=E;
var F=Math.min(D,E);
var H=Math.max(D,E);
for(var i=0;i<this.__oA.length;i++){var J=this.__oA[i];

if(J.minIndex>H){break;
}else if(J.maxIndex>=F){var K=(J.minIndex>=F)&&(J.minIndex<=H);
var I=(J.maxIndex>=F)&&(J.maxIndex<=H);

if(K&&I){this.__oA.splice(i,1);
i--;
}else if(K){J.minIndex=H+1;
}else if(I){J.maxIndex=F-1;
}else{var G={minIndex:H+1,maxIndex:J.maxIndex};
this.__oA.splice(i+1,0,G);
J.maxIndex=F-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__oA=[];
this.__oB=-1;
this.__oC=-1;
},_addSelectionInterval:function(b,c){this.__oB=b;
this.__oC=c;
var d=Math.min(b,c);
var g=Math.max(b,c);
var f=0;

for(;f<this.__oA.length;f++){var h=this.__oA[f];

if(h.minIndex>d){break;
}}this.__oA.splice(f,0,{minIndex:d,maxIndex:g});
var k=this.__oA[0];

for(var i=1;i<this.__oA.length;i++){var h=this.__oA[i];

if(k.maxIndex+1>=h.minIndex){k.maxIndex=Math.max(k.maxIndex,h.maxIndex);
this.__oA.splice(i,1);
i--;
}else{k=h;
}}},_dumpRanges:function(){var L=u;

for(var i=0;i<this.__oA.length;i++){var M=this.__oA[i];
L+=s+M.minIndex+z+M.maxIndex+w;
}this.debug(L);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__oD=true;
}else{this.fireEvent(y);
}}},destruct:function(){this.__oA=null;
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__mE=false;
this.__mF=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__mF:null,__mE:null,__mG:null,_applyBehavior:function(r,s){if(s!=null){s.dispose();
s=null;
}r._setNumColumns(this.getOverallColumnCount());
r.setTableColumnModel(this);
},init:function(p,q){qx.ui.table.columnmodel.Basic.prototype.init.call(this,p);

if(this.__mG==null){this.__mG=q;
q.addListener(n,this._onappear,this);
q.addListener(l,this._onTableWidthChanged,this);
q.addListener(k,this._onverticalscrollbarchanged,this);
q.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(p);
},getTable:function(){return this.__mG;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__mE){return ;
}this.__mE=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__mG._updateScrollerWidths();
this.__mG._updateScrollBarVisibility();
this.__mE=false;
this.__mF=true;
},_onTableWidthChanged:function(event){if(this.__mE||!this.__mF){return ;
}this.__mE=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__mE=false;
},_onverticalscrollbarchanged:function(event){if(this.__mE||!this.__mF){return ;
}this.__mE=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__mG&&!this.__mG.isDisposed()){this.__mG._updateScrollerWidths();
this.__mG._updateScrollBarVisibility();
}},this,0);
this.__mE=false;
},_oncolumnwidthchanged:function(event){if(this.__mE||!this.__mF){return ;
}this.__mE=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__mE=false;
},_onvisibilitychanged:function(event){if(this.__mE||!this.__mF){return ;
}this.__mE=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__mE=false;
}},destruct:function(){this.__mG=null;
}});
})();
(function(){var z="metaDataChanged",y="qx.event.type.Data",x="qx.event.type.Event",w="abstract",v="qx.ui.table.model.Abstract";
qx.Class.define(v,{type:w,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":y,"metaDataChanged":x,"sorted":y},construct:function(){qx.core.Object.call(this);
this.__ml=[];
this.__mm=[];
this.__mn={};
},members:{__ml:null,__mm:null,__mn:null,__mo:null,init:function(q){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(B){return null;
},isColumnEditable:function(G){return false;
},isColumnSortable:function(b){return false;
},sortByColumn:function(E,F){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(C,D){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(h,j){return this.getValue(this.getColumnIndexById(h),j);
},setValue:function(e,f,g){throw new Error("setValue is abstract");
},setValueById:function(r,s,t){this.setValue(this.getColumnIndexById(r),s,t);
},getColumnCount:function(){return this.__ml.length;
},getColumnIndexById:function(n){return this.__mn[n];
},getColumnId:function(c){return this.__ml[c];
},getColumnName:function(u){return this.__mm[u];
},setColumnIds:function(A){this.__ml=A;
this.__mn={};

for(var i=0;i<A.length;i++){this.__mn[A[i]]=i;
}this.__mm=new Array(A.length);
if(!this.__mo){this.fireEvent(z);
}},setColumnNamesByIndex:function(d){if(this.__ml.length!=d.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__ml.length+" != "+d.length);
}this.__mm=d;
this.fireEvent(z);
},setColumnNamesById:function(a){this.__mm=new Array(this.__ml.length);

for(var i=0;i<this.__ml.length;++i){this.__mm[i]=a[this.__ml[i]];
}},setColumns:function(k,l){var m=this.__ml.length==0||l;

if(l==null){if(this.__ml.length==0){l=k;
}else{l=this.__ml;
}}
if(l.length!=k.length){throw new Error("columnIdArr and columnNameArr have different length: "+l.length+" != "+k.length);
}
if(m){this.__mo=true;
this.setColumnIds(l);
this.__mo=false;
}this.setColumnNamesByIndex(k);
}},destruct:function(){this.__ml=this.__mm=this.__mn=null;
}});
})();
(function(){var q="dataChanged",p="metaDataChanged",o="qx.ui.table.model.Simple",n="Boolean",m="sorted";
qx.Class.define(o,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__mp=[];
this.__mq=-1;
this.__mr=[];
this.__ms=null;
},properties:{caseSensitiveSorting:{check:n,init:true}},statics:{_defaultSortComparatorAscending:function(bn,bo){var bp=bn[arguments.callee.columnIndex];
var bq=bo[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(bp)&&qx.lang.Type.isNumber(bq)){var br=isNaN(bp)?isNaN(bq)?0:1:isNaN(bq)?-1:null;

if(br!=null){return br;
}}return (bp>bq)?1:((bp==bq)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bd,be){var bf=(bd[arguments.callee.columnIndex].toLowerCase?bd[arguments.callee.columnIndex].toLowerCase():bd[arguments.callee.columnIndex]);
var bg=(be[arguments.callee.columnIndex].toLowerCase?be[arguments.callee.columnIndex].toLowerCase():be[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bf)&&qx.lang.Type.isNumber(bg)){var bh=isNaN(bf)?isNaN(bg)?0:1:isNaN(bg)?-1:null;

if(bh!=null){return bh;
}}return (bf>bg)?1:((bf==bg)?0:-1);
},_defaultSortComparatorDescending:function(X,Y){var ba=X[arguments.callee.columnIndex];
var bb=Y[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(ba)&&qx.lang.Type.isNumber(bb)){var bc=isNaN(ba)?isNaN(bb)?0:1:isNaN(bb)?-1:null;

if(bc!=null){return bc;
}}return (ba<bb)?1:((ba==bb)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bi,bj){var bk=(bi[arguments.callee.columnIndex].toLowerCase?bi[arguments.callee.columnIndex].toLowerCase():bi[arguments.callee.columnIndex]);
var bl=(bj[arguments.callee.columnIndex].toLowerCase?bj[arguments.callee.columnIndex].toLowerCase():bj[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bk)&&qx.lang.Type.isNumber(bl)){var bm=isNaN(bk)?isNaN(bl)?0:1:isNaN(bl)?-1:null;

if(bm!=null){return bm;
}}return (bk<bl)?1:((bk==bl)?0:-1);
}},members:{__mp:null,__ms:null,__mt:null,__mr:null,__mq:null,__mu:null,getRowData:function(k){var l=this.__mp[k];

if(l==null||l.originalData==null){return l;
}else{return l.originalData;
}},getRowDataAsMap:function(bG){var bI=this.__mp[bG];
var bH={};

for(var bJ=0;bJ<this.getColumnCount();bJ++){bH[this.getColumnId(bJ)]=bI[bJ];
}return bH;
},getDataAsMapArray:function(){var I=this.getRowCount();
var H=[];

for(var i=0;i<I;i++){H.push(this.getRowDataAsMap(i));
}return H;
},setEditable:function(g){this.__ms=[];

for(var h=0;h<this.getColumnCount();h++){this.__ms[h]=g;
}this.fireEvent(p);
},setColumnEditable:function(S,T){if(T!=this.isColumnEditable(S)){if(this.__ms==null){this.__ms=[];
}this.__ms[S]=T;
this.fireEvent(p);
}},isColumnEditable:function(bs){return this.__ms?(this.__ms[bs]==true):false;
},setColumnSortable:function(bt,bu){if(bu!=this.isColumnSortable(bt)){if(this.__mt==null){this.__mt=[];
}this.__mt[bt]=bu;
this.fireEvent(p);
}},isColumnSortable:function(bv){return (this.__mt?(this.__mt[bv]!==false):true);
},sortByColumn:function(bK,bL){var bO;
var bN=this.__mr[bK];

if(bN){bO=(bL?bN.ascending:bN.descending);
}else{if(this.getCaseSensitiveSorting()){bO=(bL?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bO=(bL?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bO.columnIndex=bK;
this.__mp.sort(bO);
this.__mq=bK;
this.__mu=bL;
var bM={columnIndex:bK,ascending:bL};
this.fireDataEvent(m,bM);
this.fireEvent(p);
},setSortMethods:function(P,Q){var R;

if(qx.lang.Type.isFunction(Q)){R={ascending:Q,descending:function(bw,bx){return Q(bx,bw);
}};
}else{R=Q;
}this.__mr[P]=R;
},getSortMethods:function(W){return this.__mr[W];
},clearSorting:function(){if(this.__mq!=-1){this.__mq=-1;
this.__mu=true;
this.fireEvent(p);
}},getSortColumnIndex:function(){return this.__mq;
},isSortAscending:function(){return this.__mu;
},getRowCount:function(){return this.__mp.length;
},getValue:function(U,V){if(V<0||V>=this.__mp.length){throw new Error("this.__rowArr out of bounds: "+V+" (0.."+this.__mp.length+")");
}return this.__mp[V][U];
},setValue:function(bC,bD,bE){if(this.__mp[bD][bC]!=bE){this.__mp[bD][bC]=bE;
if(this.hasListener(q)){var bF={firstRow:bD,lastRow:bD,firstColumn:bC,lastColumn:bC};
this.fireDataEvent(q,bF);
}
if(bC==this.__mq){this.clearSorting();
}}},setData:function(a,b){this.__mp=a;
if(this.hasListener(q)){var c={firstRow:0,lastRow:a.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(q,c);
}
if(b!==false){this.clearSorting();
}},getData:function(){return this.__mp;
},setDataAsMapArray:function(d,e,f){this.setData(this._mapArray2RowArr(d,e),f);
},addRows:function(by,bz,bA){if(bz==null){bz=this.__mp.length;
}by.splice(0,0,bz,0);
Array.prototype.splice.apply(this.__mp,by);
var bB={firstRow:bz,lastRow:this.__mp.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(q,bB);

if(bA!==false){this.clearSorting();
}},addRowsAsMapArray:function(v,w,x,y){this.addRows(this._mapArray2RowArr(v,x),w,y);
},setRows:function(z,A,B){if(A==null){A=0;
}z.splice(0,0,A,z.length);
Array.prototype.splice.apply(this.__mp,z);
var C={firstRow:A,lastRow:this.__mp.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(q,C);

if(B!==false){this.clearSorting();
}},setRowsAsMapArray:function(r,s,t,u){this.setRows(this._mapArray2RowArr(r,t),s,u);
},removeRows:function(D,E,F){this.__mp.splice(D,E);
var G={firstRow:D,lastRow:this.__mp.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:D,removeCount:E};
this.fireDataEvent(q,G);

if(F!==false){this.clearSorting();
}},_mapArray2RowArr:function(J,K){var O=J.length;
var L=this.getColumnCount();
var N=new Array(O);
var M;

for(var i=0;i<O;++i){M=[];

if(K){M.originalData=J[i];
}
for(var j=0;j<L;++j){M[j]=J[i][this.getColumnId(j)];
}N[i]=M;
}return N;
}},destruct:function(){this.__mp=this.__ms=this.__mr=this.__mt=null;
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(c){},createRowStyle:function(b){},getRowClass:function(f){}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__nt=new qx.ui.core.Blocker(this);
},members:{__nu:null,__nt:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},getBlocker:function(){return this.__nt;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__nt.dispose();
}});
})();
(function(){var e="",d="qooxdoo-table-cell qooxdoo-table-cell-right",c="0",b="qx.util.format.NumberFormat",a="qx.ui.table.cellrenderer.Number";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:b,init:null,nullable:true}},members:{_getContentHtml:function(g){var h=this.getNumberFormat();

if(h){if(g.value||g.value==0){return h.format(g.value);
}else{return e;
}}else{return g.value==0?c:(g.value||e);
}},_getCellClass:function(f){return d;
}}});
})();
(function(){var ce="Boolean",cd="resize-line",cc="mousedown",cb="qx.event.type.Data",ca="mouseup",bY="qx.ui.table.pane.CellEvent",bX="scroll",bW="focus-indicator",bV="excluded",bU="scrollbar-y",dd="table-scroller-focus-indicator",dc="visible",db="mousemove",da="header",cY="editing",cX="click",cW="modelChanged",cV="scrollbar-x",cU="cellClick",cT="pane",cl="__oU",cm="__oV",cj="mouseout",ck="__pc",ch="changeHorizontalScrollBarVisible",ci="bottom",cf="_applyScrollTimeout",cg="changeScrollX",cq="_applyTablePaneModel",cr="Integer",cz="dblclick",cx="__pd",cH="dataEdited",cC="__oX",cP="mousewheel",cM="interval",ct="qx.ui.table.pane.Scroller",cS="_applyShowCellFocusIndicator",cR="resize",cQ="__pa",cs="vertical",cv="changeScrollY",cw="__oW",cy="appear",cA="__pb",cD="table-scroller",cJ="beforeSort",cO="__oY",cn="cellDblclick",co="horizontal",cu="losecapture",cG="contextmenu",cF="col-resize",cE="disappear",cL="_applyVerticalScrollBarVisible",cK="_applyHorizontalScrollBarVisible",cB="cellContextmenu",cI="close",bT="changeTablePaneModel",cN="qx.ui.table.pane.Model",cp="changeVerticalScrollBarVisible";
qx.Class.define(ct,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(eh){qx.ui.core.Widget.call(this);
this.__oT=eh;
var ei=new qx.ui.layout.Grid();
ei.setColumnFlex(0,1);
ei.setRowFlex(1,1);
this._setLayout(ei);
this.__oU=this._showChildControl(cV);
this.__oV=this._showChildControl(bU);
this.__oW=this._showChildControl(da);
this.__oX=this._showChildControl(cT);
this.__oY=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__oY,{row:0,column:0,colSpan:2});
this.__pa=new qx.ui.table.pane.Clipper();
this.__pa.add(this.__oW);
this.__pa.addListener(cu,this._onChangeCaptureHeader,this);
this.__pa.addListener(db,this._onMousemoveHeader,this);
this.__pa.addListener(cc,this._onMousedownHeader,this);
this.__pa.addListener(ca,this._onMouseupHeader,this);
this.__pa.addListener(cX,this._onClickHeader,this);
this.__oY.add(this.__pa,{flex:1});
this.__pb=new qx.ui.table.pane.Clipper();
this.__pb.add(this.__oX);
this.__pb.addListener(cP,this._onMousewheel,this);
this.__pb.addListener(db,this._onMousemovePane,this);
this.__pb.addListener(cc,this._onMousedownPane,this);
this.__pb.addListener(ca,this._onMouseupPane,this);
this.__pb.addListener(cX,this._onClickPane,this);
this.__pb.addListener(cG,this._onContextMenu,this);
this.__pb.addListener(cz,this._onDblclickPane,this);
this.__pb.addListener(cR,this._onResizePane,this);
this._add(this.__pb,{row:1,column:0});
this.__pc=this.getChildControl(bW);
this.getChildControl(cd).hide();
this.addListener(cj,this._onMouseout,this);
this.addListener(cy,this._onAppear,this);
this.addListener(cE,this._onDisappear,this);
this.__pd=new qx.event.Timer();
this.__pd.addListener(cM,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":cb,"changeScrollX":cb,"cellClick":bY,"cellDblclick":bY,"cellContextmenu":bY,"beforeSort":cb},properties:{horizontalScrollBarVisible:{check:ce,init:true,apply:cK,event:ch},verticalScrollBarVisible:{check:ce,init:true,apply:cL,event:cp},tablePaneModel:{check:cN,apply:cq,event:bT},liveResize:{check:ce,init:false},focusCellOnMouseMove:{check:ce,init:false},selectBeforeFocus:{check:ce,init:false},showCellFocusIndicator:{check:ce,init:true,apply:cS},resetSelectionOnHeaderClick:{check:ce,init:true},scrollTimeout:{check:cr,init:100,apply:cf},appearance:{refine:true,init:cD}},members:{__pe:null,__oT:null,__pf:null,__pg:null,__ph:null,__pi:null,__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,__po:null,__pp:null,__pq:null,__pr:false,__ps:null,__pt:null,__pu:null,__pv:null,__pw:null,__px:null,__py:null,__pz:null,__oU:null,__oV:null,__oW:null,__pa:null,__oX:null,__pb:null,__pc:null,__oY:null,__pd:null,getPaneInsetRight:function(){var eQ=this.getTopRightWidget();
var eR=eQ&&eQ.isVisible()&&eQ.getBounds()?eQ.getBounds().width:0;
var eP=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(eR,eP);
},setPaneWidth:function(dO){if(this.isVerticalScrollBarVisible()){dO+=this.getPaneInsetRight();
}this.setWidth(dO);
},_createChildControlImpl:function(bC){var bD;

switch(bC){case da:bD=(this.getTable().getNewTablePaneHeader())(this);
break;
case cT:bD=(this.getTable().getNewTablePane())(this);
break;
case bW:bD=new qx.ui.table.pane.FocusIndicator(this);
bD.setUserBounds(0,0,0,0);
bD.setZIndex(1000);
bD.addListener(ca,this._onMouseupFocusIndicator,this);
this.__pb.add(bD);
bD.show();
bD.setDecorator(null);
break;
case cd:bD=new qx.ui.core.Widget();
bD.setUserBounds(0,0,0,0);
bD.setZIndex(1000);
this.__pb.add(bD);
break;
case cV:bD=this._createScrollBar(co).set({minWidth:0,alignY:ci});
bD.addListener(bX,this._onScrollX,this);
this._add(bD,{row:2,column:0});
break;
case bU:bD=this._createScrollBar(cs);
bD.addListener(bX,this._onScrollY,this);
this._add(bD,{row:1,column:1});
break;
}return bD||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bC);
},_applyHorizontalScrollBarVisible:function(dn,dp){this.__oU.setVisibility(dn?dc:bV);
},_applyVerticalScrollBarVisible:function(ej,ek){this.__oV.setVisibility(ej?dc:bV);
},_applyTablePaneModel:function(de,df){if(df!=null){df.removeListener(cW,this._onPaneModelChanged,this);
}de.addListener(cW,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(G,H){if(G){this.__pc.setDecorator(dd);
this._updateFocusIndicator();
}else{if(this.__pc){this.__pc.setDecorator(null);
}}},getScrollY:function(){return this.__oV.getPosition();
},setScrollY:function(scrollY,h){this.__oV.scrollTo(scrollY);

if(h){this._updateContent();
}},getScrollX:function(){return this.__oU.getPosition();
},setScrollX:function(scrollX){this.__oU.scrollTo(scrollX);
},getTable:function(){return this.__oT;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bd,be){this.__oW.setColumnWidth(bd,be);
this.__oX.setColumnWidth(bd,be);
var bf=this.getTablePaneModel();
var x=bf.getX(bd);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__oW.onColOrderChanged();
this.__oX.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(di,dj,dk,dl){this.__oX.onTableModelDataChanged(di,dj,dk,dl);
var dm=this.getTable().getTableModel().getRowCount();

if(dm!=this.__pe){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=dm){if(dm==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),dm-1);
}}this.__pe=dm;
}},onSelectionChanged:function(){this.__oX.onSelectionChanged();
},onFocusChanged:function(){this.__oX.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__oW.onTableModelMetaDataChanged();
this.__oX.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__oW.onPaneModelChanged();
this.__oX.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__oW._updateContent();
this.__oT._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var eA=this.__pb.getInnerSize();

if(!eA){return ;
}var ey=this.getTablePaneModel().getTotalWidth();
var ez=this.__oU;

if(eA.width<ey){var ex=Math.max(0,ey-eA.width);
ez.setMaximum(ex);
ez.setKnobFactor(eA.width/ey);
var eB=ez.getPosition();
ez.setPosition(Math.min(eB,ex));
}else{ez.setMaximum(0);
ez.setKnobFactor(1);
ez.setPosition(0);
}},updateVerScrollBarMaximum:function(){var ew=this.__pb.getInnerSize();

if(!ew){return ;
}var eu=this.getTable().getTableModel();
var eq=eu.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){eq+=1;
}var ep=this.getTable().getRowHeight();
var es=eq*ep;
var ev=this.__oV;

if(ew.height<es){var er=Math.max(0,es-ew.height);
ev.setMaximum(er);
ev.setKnobFactor(ew.height/es);
var et=ev.getPosition();
ev.setPosition(Math.min(et,er));
}else{ev.setMaximum(0);
ev.setKnobFactor(1);
ev.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var eg=e.getData();
this.fireDataEvent(cg,eg,e.getOldData());
this.__pa.scrollToX(eg);
this.__pb.scrollToX(eg);
},_onScrollY:function(e){this.fireDataEvent(cv,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var bI=this.getTable();

if(!bI.getEnabled()){return;
}var bK=qx.bom.client.Engine.GECKO?1:3;
var bJ=this.__oV.getPosition()+((e.getWheelDelta()*bK)*bI.getRowHeight());
this.__oV.scrollTo(bJ);
if(this.__pt&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__pt,this.__pu);
}e.stop();
},__pA:function(fb){var fg=this.getTable();
var fh=this.__oW.getHeaderWidgetAtColumn(this.__pn);
var fc=fh.getSizeHint().minWidth;
var fe=Math.max(fc,this.__pp+fb-this.__po);

if(this.getLiveResize()){var fd=fg.getTableColumnModel();
fd.setColumnWidth(this.__pn,fe);
}else{this.__oW.setColumnWidth(this.__pn,fe);
var ff=this.getTablePaneModel();
this._showResizeLine(ff.getColumnLeft(this.__pn)+fe);
}this.__po+=fe-this.__pp;
this.__pp=fe;
},__pB:function(dE){var dF=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__oW.isShowingColumnMoveFeedback()||dE>this.__pm+dF||dE<this.__pm-dF){this.__pj+=dE-this.__pm;
this.__oW.showColumnMoveFeedback(this.__pi,this.__pj);
var dG=this.__oT.getTablePaneScrollerAtPageX(dE);

if(this.__pl&&this.__pl!=dG){this.__pl.hideColumnMoveFeedback();
}
if(dG!=null){this.__pk=dG.showColumnMoveFeedback(dE);
}else{this.__pk=null;
}this.__pl=dG;
this.__pm=dE;
}},_onMousemoveHeader:function(e){var bm=this.getTable();

if(!bm.getEnabled()){return;
}var bn=false;
var bg=null;
var bk=e.getDocumentLeft();
var bl=e.getDocumentTop();
this.__pt=bk;
this.__pu=bl;

if(this.__pn!=null){this.__pA(bk);
bn=true;
e.stopPropagation();
}else if(this.__pi!=null){this.__pB(bk);
e.stopPropagation();
}else{var bh=this._getResizeColumnForPageX(bk);

if(bh!=-1){bn=true;
}else{var bj=bm.getTableModel();
var bo=this._getColumnForPageX(bk);

if(bo!=null&&bj.isColumnSortable(bo)){bg=bo;
}}}var bi=bn?cF:null;
this.getApplicationRoot().setGlobalCursor(bi);
this.setCursor(bi);
this.__oW.setMouseOverColumn(bg);
},_onMousemovePane:function(e){var eJ=this.getTable();

if(!eJ.getEnabled()){return;
}var eL=e.getDocumentLeft();
var eM=e.getDocumentTop();
this.__pt=eL;
this.__pu=eM;
var eK=this._getRowForPagePos(eL,eM);

if(eK!=null&&this._getColumnForPageX(eL)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eL,eM);
}}this.__oW.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var bb=e.getDocumentLeft();
var bc=this._getResizeColumnForPageX(bb);

if(bc!=-1){this._startResizeHeader(bc,bb);
e.stop();
}else{var ba=this._getColumnForPageX(bb);

if(ba!=null){this._startMoveHeader(ba,bb);
e.stop();
}}},_startResizeHeader:function(a,b){var c=this.getTable().getTableColumnModel();
this.__pn=a;
this.__po=b;
this.__pp=c.getColumnWidth(this.__pn);
this.__pa.capture();
},_startMoveHeader:function(dM,dN){this.__pi=dM;
this.__pm=dN;
this.__pj=this.getTablePaneModel().getColumnLeft(dM);
this.__pa.capture();
},_onMousedownPane:function(e){var ft=this.getTable();

if(!ft.getEnabled()){return;
}
if(ft.isEditing()){ft.stopEditing();
}var fq=e.getDocumentLeft();
var fs=e.getDocumentTop();
var fv=this._getRowForPagePos(fq,fs);
var fu=this._getColumnForPageX(fq);

if(fv!==null){this.__pq={row:fv,col:fu};
this.__pr=false;
var fr=this.getSelectBeforeFocus();

if(fr){ft.getSelectionManager().handleMouseDown(fv,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(fq,fs);
}
if(!fr){ft.getSelectionManager().handleMouseDown(fv,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__pq&&!this.__pr&&!this.isEditing()&&this.__pc.getRow()==this.__pq.row&&this.__pc.getColumn()==this.__pq.col){this.fireEvent(cU,qx.ui.table.pane.CellEvent,[this,e,this.__pq.row,this.__pq.col],true);
this.__pr=true;
}},_onChangeCaptureHeader:function(e){if(this.__pn!=null){this._stopResizeHeader();
}
if(this.__pi!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var dg=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
dg.setColumnWidth(this.__pn,this.__pp);
}this.__pn=null;
this.__pa.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var dh=this.__px.getBounds().height;
this.__px.setUserBounds(0,0,this.__pp,dh);
}},_stopMoveHeader:function(){var bP=this.getTable().getTableColumnModel();
var bQ=this.getTablePaneModel();
this.__oW.hideColumnMoveFeedback();

if(this.__pl){this.__pl.hideColumnMoveFeedback();
}
if(this.__pk!=null){var bS=bQ.getFirstColumnX()+bQ.getX(this.__pi);
var bO=this.__pk;

if(bO!=bS&&bO!=bS+1){var bR=bP.getVisibleColumnAtX(bS);
var bN=bP.getVisibleColumnAtX(bO);
var bM=bP.getOverallX(bR);
var bL=(bN!=null)?bP.getOverallX(bN):bP.getOverallColumnCount();

if(bL>bM){bL--;
}bP.moveColumn(bM,bL);
this._updateFocusIndicator();
}}this.__pi=null;
this.__pk=null;
this.__pa.releaseCapture();
},_onMouseupPane:function(e){var eN=this.getTable();

if(!eN.getEnabled()){return;
}var eO=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(eO!=-1&&eO!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){eN.getSelectionManager().handleMouseUp(eO,e);
}},_onMouseupHeader:function(e){var em=this.getTable();

if(!em.getEnabled()){return;
}
if(this.__pn!=null){this._stopResizeHeader();
this.__ps=true;
e.stop();
}else if(this.__pi!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__ps){this.__ps=false;
return;
}var eW=this.getTable();

if(!eW.getEnabled()){return;
}var eU=eW.getTableModel();
var eV=e.getDocumentLeft();
var eT=this._getResizeColumnForPageX(eV);

if(eT==-1){var fa=this._getColumnForPageX(eV);

if(fa!=null&&eU.isColumnSortable(fa)){var eS=eU.getSortColumnIndex();
var eX=(fa!=eS)?true:!eU.isSortAscending();
var eY={column:fa,ascending:eX,clickEvent:e};

if(this.fireDataEvent(cJ,eY,null,true)){eU.sortByColumn(fa,eX);

if(this.getResetSelectionOnHeaderClick()){eW.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dX=this.getTable();

if(!dX.getEnabled()){return;
}var eb=e.getDocumentLeft();
var ec=e.getDocumentTop();
var dY=this._getRowForPagePos(eb,ec);
var ea=this._getColumnForPageX(eb);

if(dY!=null&&ea!=null){dX.getSelectionManager().handleClick(dY,e);

if(this.__pc.isHidden()||(this.__pq&&!this.__pr&&!this.isEditing()&&dY==this.__pq.row&&ea==this.__pq.col)){this.fireEvent(cU,qx.ui.table.pane.CellEvent,[this,e,dY,ea],true);
this.__pr=true;
}}},_onContextMenu:function(e){var dK=e.getDocumentLeft();
var dL=e.getDocumentTop();
var dI=this._getRowForPagePos(dK,dL);
var dJ=this._getColumnForPageX(dK);

if(this.__pc.isHidden()||(this.__pq&&dI==this.__pq.row&&dJ==this.__pq.col)){this.fireEvent(cB,qx.ui.table.pane.CellEvent,[this,e,dI,dJ],true);
var dH=this.getTable().getContextMenu();

if(dH){if(dH.getChildren().length>0){dH.openAtMouse(e);
}else{dH.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var bF=e.getDocumentLeft();
var bG=e.getDocumentTop();
this._focusCellAtPagePos(bF,bG);
this.startEditing();
var bE=this._getRowForPagePos(bF,bG);

if(bE!=-1&&bE!=null){this.fireEvent(cn,qx.ui.table.pane.CellEvent,[this,e,bE],true);
}},_onMouseout:function(e){var d=this.getTable();

if(!d.getEnabled()){return;
}if(this.__pn==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__oW.setMouseOverColumn(null);
},_showResizeLine:function(x){var eD=this._showChildControl(cd);
var eC=eD.getWidth();
var eE=this.__pb.getBounds();
eD.setUserBounds(x-Math.round(eC/2),0,eC,eE.height);
},_hideResizeLine:function(){this._excludeChildControl(cd);
},showColumnMoveFeedback:function(bp){var by=this.getTablePaneModel();
var bx=this.getTable().getTableColumnModel();
var bs=this.__oX.getContainerLocation().left;
var bw=by.getColumnCount();
var bt=0;
var br=0;
var bB=bs;

for(var bq=0;bq<bw;bq++){var bu=by.getColumnAtX(bq);
var bz=bx.getColumnWidth(bu);

if(bp<bB+bz/2){break;
}bB+=bz;
bt=bq+1;
br=bB-bs;
}var bv=this.__pb.getContainerLocation().left;
var bA=this.__pb.getBounds().width;
var scrollX=bv-bs;
br=qx.lang.Number.limit(br,scrollX+2,scrollX+bA-1);
this._showResizeLine(br);
return by.getFirstColumnX()+bt;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(eF,eG){var eI=this._getRowForPagePos(eF,eG);

if(eI!=-1&&eI!=null){var eH=this._getColumnForPageX(eF);
this.__oT.setFocusedCell(eH,eI);
}},setFocusedCell:function(fw,fx){if(!this.isEditing()){this.__oX.setFocusedCell(fw,fx,this.__pg);
this.__pv=fw;
this.__pw=fx;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__pv;
},getFocusedRow:function(){return this.__pw;
},scrollCellVisible:function(r,s){var D=this.getTablePaneModel();
var t=D.getX(r);

if(t!=-1){var A=this.__pb.getInnerSize();

if(!A){return;
}var B=this.getTable().getTableColumnModel();
var w=D.getColumnLeft(r);
var E=B.getColumnWidth(r);
var u=this.getTable().getRowHeight();
var F=s*u;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var C=Math.min(w,w+E-A.width);
var z=w;
this.setScrollX(Math.max(C,Math.min(z,scrollX)));
var v=F+u-A.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){v+=u;
}var y=F;
this.setScrollY(Math.max(v,Math.min(y,scrollY)),true);
}},isEditing:function(){return this.__px!=null;
},startEditing:function(){var V=this.getTable();
var T=V.getTableModel();
var X=this.__pv;

if(!this.isEditing()&&(X!=null)&&T.isColumnEditable(X)){var Y=this.__pw;
var R=this.getTablePaneModel().getX(X);
var S=T.getValue(X,Y);
this.__py=V.getTableColumnModel().getCellEditorFactory(X);
var U={col:X,row:Y,xPos:R,value:S,table:V};
this.__px=this.__py.createCellEditor(U);
if(this.__px===null){return false;
}else if(this.__px instanceof qx.ui.window.Window){this.__px.setModal(true);
this.__px.setShowClose(false);
this.__px.addListener(cI,this._onCellEditorModalWindowClose,this);
var f=V.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__px,U);
}this.__px.open();
}else{var W=this.__pc.getInnerSize();
this.__px.setUserBounds(0,0,W.width,W.height);
this.__pc.addListener(cc,function(e){this.__pq={row:this.__pw,col:this.__pv};
e.stopPropagation();
},this);
this.__pc.add(this.__px);
this.__pc.addState(cY);
this.__pc.setKeepActive(false);
this.__pc.setDecorator(dd);
this.__px.focus();
this.__px.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__pc.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eo=this.__py.getCellEditorValue(this.__px);
var en=this.getTable().getTableModel().getValue(this.__pv,this.__pw);
this.getTable().getTableModel().setValue(this.__pv,this.__pw,eo);
this.__oT.focus();
this.__oT.fireDataEvent(cH,{row:this.__pw,col:this.__pv,oldValue:en,value:eo});
}},cancelEditing:function(){if(this.isEditing()&&!this.__px.pendingDispose){if(this._cellEditorIsModalWindow){this.__px.destroy();
this.__px=null;
this.__py=null;
this.__px.pendingDispose=true;
}else{this.__pc.removeState(cY);
this.__pc.setKeepActive(true);
this.__px.destroy();
this.__px=null;
this.__py=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(i){var l=this.getTable().getTableColumnModel();
var m=this.getTablePaneModel();
var k=m.getColumnCount();
var o=this.__oW.getContainerLocation().left;

for(var x=0;x<k;x++){var j=m.getColumnAtX(x);
var n=l.getColumnWidth(j);
o+=n;

if(i<o){return j;
}}return null;
},_getResizeColumnForPageX:function(fi){var fm=this.getTable().getTableColumnModel();
var fn=this.getTablePaneModel();
var fl=fn.getColumnCount();
var fp=this.__oW.getContainerLocation().left;
var fj=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<fl;x++){var fk=fn.getColumnAtX(x);
var fo=fm.getColumnWidth(fk);
fp+=fo;

if(fi>=(fp-fj)&&fi<=(fp+fj)){return fk;
}}return -1;
},_getRowForPagePos:function(I,J){var K=this.__oX.getContentLocation();

if(I<K.left||I>K.right){return null;
}
if(J>=K.top&&J<=K.bottom){var L=this.getTable().getRowHeight();
var scrollY=this.__oV.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/L)*L;
}var O=scrollY+J-K.top;
var Q=Math.floor(O/L);
var P=this.getTable().getTableModel();
var M=P.getRowCount();
return (Q<M)?Q:null;
}var N=this.__oW.getContainerLocation();

if(J>=N.top&&J<=N.bottom&&I<=N.right){return -1;
}return null;
},setTopRightWidget:function(ee){var ef=this.__pz;

if(ef!=null){this.__oY.remove(ef);
}
if(ee!=null){this.__oY.add(ee);
}this.__pz=ee;
},getTopRightWidget:function(){return this.__pz;
},getHeader:function(){return this.__oW;
},getTablePane:function(){return this.__oX;
},getVerticalScrollBarWidth:function(){var el=this.__oV;
return el.isVisible()?(el.getSizeHint().width||0):0;
},getNeededScrollBars:function(dq,dr){var dx=this.__oV.getSizeHint().width;
var dy=this.__pb.getInnerSize();
var ds=dy?dy.width:0;

if(this.getVerticalScrollBarVisible()){ds+=dx;
}var dB=dy?dy.height:0;

if(this.getHorizontalScrollBarVisible()){dB+=dx;
}var dv=this.getTable().getTableModel();
var dz=dv.getRowCount();
var dC=this.getTablePaneModel().getTotalWidth();
var dA=this.getTable().getRowHeight()*dz;
var du=false;
var dD=false;

if(dC>ds){du=true;

if(dA>dB-dx){dD=true;
}}else if(dA>dB){dD=true;

if(!dr&&(dC>ds-dx)){du=true;
}}var dw=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dt=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((dq||du)?dw:0)|((dr||!dD)?0:dt);
},getPaneClipper:function(){return this.__pb;
},_applyScrollTimeout:function(p,q){this._startInterval(p);
},_startInterval:function(g){this.__pd.setInterval(g);
this.__pd.start();
},_stopInterval:function(){this.__pd.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__pg&&!this.__oX._layoutPending){this.__pg=false;
this._updateContent();
}}),_updateContent:function(){var dT=this.__pb.getInnerSize();

if(!dT){return;
}var dW=dT.height;
var scrollX=this.__oU.getPosition();
var scrollY=this.__oV.getPosition();
var dQ=this.getTable().getRowHeight();
var dR=Math.floor(scrollY/dQ);
var dV=this.__oX.getFirstVisibleRow();
this.__oX.setFirstVisibleRow(dR);
var dS=Math.ceil(dW/dQ);
var dP=0;
var dU=this.getTable().getKeepFirstVisibleRowComplete();

if(!dU){dS++;
dP=scrollY%dQ;
}this.__oX.setVisibleRowCount(dS);

if(dR!=dV){this._updateFocusIndicator();
}this.__pb.scrollToX(scrollX);
if(!dU){this.__pb.scrollToY(dP);
}},_updateFocusIndicator:function(){var bH=this.getTable();

if(!bH.getEnabled()){return;
}this.__pc.moveToCell(this.__pv,this.__pw);
}},destruct:function(){this._stopInterval();
var ed=this.getTablePaneModel();

if(ed){ed.dispose();
}this.__pq=this.__pz=this.__oT=null;
this._disposeObjects(cl,cm,cQ,cA,ck,cw,cC,cO,cx);
}});
})();
(function(){var s="px",r=".qooxdoo-table-cell-icon {",q="abstract",p="",o="qx.ui.table.cellrenderer.AbstractImage",n=" qooxdoo-table-cell-icon",m="<div></div>",l="'",k="no-repeat",j="}",d="  text-align:center;",i="inline-block",g="static",c="top",b="  padding-top:1px;",f="title='",e="string",h="-moz-inline-box";
qx.Class.define(o,{extend:qx.ui.table.cellrenderer.Abstract,type:q,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var H=this.self(arguments);

if(!H.stylesheet){H.stylesheet=qx.bom.Stylesheet.createElement(r+d+b+j);
}},members:{__qz:16,__qA:16,_insetY:2,__qB:null,_identifyImage:function(D){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(E){var F=this._identifyImage(E);
if(F==null||typeof E==e){F={url:F,tooltip:null};
}
if(E.width&&E.height){var G={width:E.imageWidth,height:E.imageHeight};
}else{G=this.__qC(F.url);
}F.width=G.width;
F.height=G.height;
return F;
},__qC:function(t){var w=qx.util.ResourceManager.getInstance();
var v=qx.io.ImageLoader;
var u,x;
if(w.has(t)){u=w.getImageWidth(t);
x=w.getImageHeight(t);
}else if(v.isLoaded(t)){u=v.getWidth(t);
x=v.getHeight(t);
}else{u=this.__qz;
x=this.__qA;
}return {width:u,height:x};
},createDataCellHtml:function(y,z){this.__qB=this._getImageInfos(y);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,y,z);
},_getCellClass:function(a){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+n;
},_getContentHtml:function(C){var content=m;
if(this.__qB.url){var content=qx.bom.element.Decoration.create(this.__qB.url,k,{width:this.__qB.width+s,height:this.__qB.height+s,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?h:i,verticalAlign:c,position:g});
}return content;
},_getCellAttributes:function(A){var B=this.__qB.tooltip;

if(B){return f+B+l;
}else{return p;
}}},destruct:function(){this.__qB=null;
}});
})();
(function(){var g="Number",f="qx.event.type.Event",e="_applyFirstColumnX",d="Integer",c="qx.ui.table.pane.Model",b="_applyMaxColumnCount",a="visibilityChangedPre";
qx.Class.define(c,{extend:qx.core.Object,construct:function(A){qx.core.Object.call(this);
A.addListener(a,this._onColVisibilityChanged,this);
this.__qm=A;
},events:{"modelChanged":f},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:d,init:0,apply:e},maxColumnCount:{check:g,init:-1,apply:b}},members:{__qn:null,__qm:null,_applyFirstColumnX:function(k,l){this.__qn=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(C,D){this.__qn=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(B){this.__qm=B;
this.__qn=null;
},_onColVisibilityChanged:function(p){this.__qn=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__qn==null){var m=this.getFirstColumnX();
var o=this.getMaxColumnCount();
var n=this.__qm.getVisibleColumnCount();

if(o==-1||(m+o)>n){this.__qn=n-m;
}else{this.__qn=o;
}}return this.__qn;
},getColumnAtX:function(u){var v=this.getFirstColumnX();
return this.__qm.getVisibleColumnAtX(v+u);
},getX:function(h){var i=this.getFirstColumnX();
var j=this.getMaxColumnCount();
var x=this.__qm.getVisibleX(h)-i;

if(x>=0&&(j==-1||x<j)){return x;
}else{return -1;
}},getColumnLeft:function(q){var t=0;
var s=this.getColumnCount();

for(var x=0;x<s;x++){var r=this.getColumnAtX(x);

if(r==q){return t;
}t+=this.__qm.getColumnWidth(r);
}return -1;
},getTotalWidth:function(){var w=0;
var y=this.getColumnCount();

for(var x=0;x<y;x++){var z=this.getColumnAtX(x);
w+=this.__qm.getColumnWidth(z);
}return w;
}},destruct:function(){this.__qm=null;
}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__oy:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(e,f,g){if(g!=null&&e>g){return g;
}else if(f!=null&&e<f){return f;
}else{return e;
}}}});
})();
(function(){var c="hovered",b="__oQ",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(i){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__oP=new qx.ui.core.Blocker(this);
this.__oQ=i;
},members:{__oQ:null,__oR:null,__oS:null,__oP:null,getPaneScroller:function(){return this.__oQ;
},getTable:function(){return this.__oQ.getTable();
},getBlocker:function(){return this.__oP;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(d,e){var f=this.getHeaderWidgetAtColumn(d);

if(f!=null){f.setWidth(e);
}},setMouseOverColumn:function(z){if(z!=this.__oS){if(this.__oS!=null){var A=this.getHeaderWidgetAtColumn(this.__oS);

if(A!=null){A.removeState(c);
}}
if(z!=null){this.getHeaderWidgetAtColumn(z).addState(c);
}this.__oS=z;
}},getHeaderWidgetAtColumn:function(w){var y=this.getPaneScroller().getTablePaneModel().getX(w);
return this._getChildren()[y];
},showColumnMoveFeedback:function(B,x){var F=this.getContainerLocation();

if(this.__oR==null){var K=this.getTable();
var C=this.getPaneScroller().getTablePaneModel().getX(B);
var E=this._getChildren()[C];
var G=K.getTableModel();
var I=K.getTableColumnModel();
var J={xPos:C,col:B,name:G.getColumnName(B),table:K};
var H=I.getHeaderCellRenderer(B);
var D=H.createHeaderCell(J);
var L=E.getBounds();
D.setWidth(L.width);
D.setHeight(L.height);
D.setZIndex(1000000);
D.setOpacity(0.8);
D.setLayoutProperties({top:F.top});
this.getApplicationRoot().add(D);
this.__oR=D;
}this.__oR.setLayoutProperties({left:F.left+x});
this.__oR.show();
},hideColumnMoveFeedback:function(){if(this.__oR!=null){this.__oR.destroy();
this.__oR=null;
}},isShowingColumnMoveFeedback:function(){return this.__oR!=null;
},_updateContent:function(j){var t=this.getTable();
var n=t.getTableModel();
var q=t.getTableColumnModel();
var s=this.getPaneScroller().getTablePaneModel();
var v=this._getChildren();
var o=s.getColumnCount();
var r=n.getSortColumnIndex();
if(j){this._cleanUpCells();
}var k={};
k.sortedAscending=n.isSortAscending();

for(var x=0;x<o;x++){var m=s.getColumnAtX(x);

if(m===undefined){continue;
}var u=q.getColumnWidth(m);
var p=q.getHeaderCellRenderer(m);
k.xPos=x;
k.col=m;
k.name=n.getColumnName(m);
k.editable=n.isColumnEditable(m);
k.sorted=(m==r);
k.table=t;
var l=v[x];
if(l==null){l=p.createHeaderCell(k);
l.set({width:u});
this._add(l);
}else{p.updateHeaderCell(k,l);
}}},_cleanUpCells:function(){var h=this._getChildren();

for(var x=h.length-1;x>=0;x--){var g=h[x];
g.destroy();
}}},destruct:function(){this.__oP.dispose();
this._disposeObjects(b);
}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__nq=t;
this.__nq={};
this.__nr={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var v=qx.theme.manager.Color.getInstance();
this.__nr.bgcolFocusedSelected=v.resolve(j);
this.__nr.bgcolFocused=v.resolve(o);
this.__nr.bgcolSelected=v.resolve(r);
this.__nr.bgcolEven=v.resolve(s);
this.__nr.bgcolOdd=v.resolve(k);
this.__nr.colSelected=v.resolve(l);
this.__nr.colNormal=v.resolve(q);
this.__nr.horLine=v.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__nr:null,__ns:null,__nq:null,_insetY:1,_renderFont:function(y){if(y){this.__ns=y.getStyles();
this.__nq=qx.bom.element.Style.compile(this.__ns);
this.__nq=this.__nq.replace(/"/g,b);
}else{this.__nq=t;
this.__ns=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(z,A){var C=this.__ns;
var B=A.style;
qx.bom.element.Style.setStyles(A,C);

if(z.focusedRow&&this.getHighlightFocusRow()){B.backgroundColor=z.selected?this.__nr.bgcolFocusedSelected:this.__nr.bgcolFocused;
}else{if(z.selected){B.backgroundColor=this.__nr.bgcolSelected;
}else{B.backgroundColor=(z.row%2==0)?this.__nr.bgcolEven:this.__nr.bgcolOdd;
}}B.color=z.selected?this.__nr.colSelected:this.__nr.colNormal;
B.borderBottom=a+this.__nr.horLine;
},getRowHeightStyle:function(D){if(qx.bom.client.Feature.CONTENT_BOX){D-=this._insetY;
}return f+D+h;
},createRowStyle:function(w){var x=[];
x.push(e);
x.push(this.__nq);
x.push(p);

if(w.focusedRow&&this.getHighlightFocusRow()){x.push(w.selected?this.__nr.bgcolFocusedSelected:this.__nr.bgcolFocused);
}else{if(w.selected){x.push(this.__nr.bgcolSelected);
}else{x.push((w.row%2==0)?this.__nr.bgcolEven:this.__nr.bgcolOdd);
}}x.push(m);
x.push(w.selected?this.__nr.colSelected:this.__nr.colNormal);
x.push(n,this.__nr.horLine);
return x.join(t);
},getRowClass:function(u){return t;
},getRowAttributes:function(E){return t;
}},destruct:function(){this.__nr=this.__ns=this.__nq=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__wA=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__wB:null,__wC:false,__wA:null,_applyIconTrue:function(h){this.__wB=this.__wA.resolve(h);
},_applyIconFalse:function(k){this.__wC=this.__wA.resolve(k);
},_insetY:5,_getCellStyle:function(l){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,l)+c;
},_identifyImage:function(i){var j={imageWidth:11,imageHeight:11};

switch(i.value){case true:j.url=this.__wB;
break;
case false:j.url=this.__wC;
break;
default:j.url=null;
break;
}return j;
}},destruct:function(){this.__wA=null;
}});
})();
(function(){var B="Boolean",A="column-button",z="Function",y="qx.event.type.Data",w="statusbar",v="qx.ui.table.pane.CellEvent",u="function",t="__np",s="PageUp",r="dataChanged",bQ='"',bP="changeLocale",bO="changeSelection",bN="qx.dynlocale",bM="Enter",bL="metaDataChanged",bK="on",bJ="_applyStatusBarVisible",bI="columnVisibilityMenuCreateStart",bH="blur",I="qx.ui.table.Table",J="columnVisibilityMenuCreateEnd",G="changeVisible",H="_applyResetSelectionOnHeaderClick",E="_applyMetaColumnCounts",F="focus",C="changeDataRowRenderer",D="changeHeaderCellHeight",Q="Escape",R="A",bj="changeSelectionModel",bf="Left",br="__nf",bm="Down",bD="Integer",bx="_applyHeaderCellHeight",Y="visibilityChanged",bG="qx.ui.table.ITableModel",bF="orderChanged",bE="_applySelectionModel",W="menu-button",bb="menu",bd="_applyAdditionalStatusBarText",bh="_applyFocusCellOnMouseMove",bk="table",bn="_applyColumnVisibilityButtonVisible",bt="changeTableModel",bz="qx.event.type.Event",K="tableWidthChanged",L="_applyHeaderCellsVisible",ba="Object",bq="_applyShowCellFocusIndicator",bp="resize",bo="verticalScrollBarChanged",bv="changeScrollY",bu="_applyTableModel",bl="End",bs="__nn",n="_applyKeepFirstVisibleRowComplete",by="widthChanged",M="one of one row",N="Home",bg="_applyRowHeight",o="F2",q="appear",V="Up",O="%1 rows",P="qx.ui.table.selection.Model",T="one row",bi="__no",bB="PageDown",bA="%1 of %2 rows",bc="keypress",bC="changeRowHeight",X="Number",bw="header",S="__ng",U="qx.ui.table.IRowRenderer",p="Right",be="Space";
qx.Class.define(I,{extend:qx.ui.core.Widget,construct:function(eq,er){qx.ui.core.Widget.call(this);
if(!er){er={};
}
if(er.selectionManager){this.setNewSelectionManager(er.selectionManager);
}
if(er.selectionModel){this.setNewSelectionModel(er.selectionModel);
}
if(er.tableColumnModel){this.setNewTableColumnModel(er.tableColumnModel);
}
if(er.tablePane){this.setNewTablePane(er.tablePane);
}
if(er.tablePaneHeader){this.setNewTablePaneHeader(er.tablePaneHeader);
}
if(er.tablePaneScroller){this.setNewTablePaneScroller(er.tablePaneScroller);
}
if(er.tablePaneModel){this.setNewTablePaneModel(er.tablePaneModel);
}
if(er.columnMenu){this.setNewColumnMenu(er.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__nf=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__nf,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__ng=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(eq||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(bc,this._onKeyPress);
this.addListener(F,this._onFocusChanged);
this.addListener(bH,this._onFocusChanged);
var es=new qx.ui.core.Widget().set({height:0});
this._add(es);
es.addListener(bp,this._onResize,this);
this.__nh=null;
this.__ni=null;
if(qx.core.Variant.isSet(bN,bK)){qx.locale.Manager.getInstance().addListener(bP,this._onChangeLocale,this);
}this.initStatusBarVisible();
eq=this.getTableModel();

if(eq.init&&typeof (eq.init)==u){eq.init(this);
}},events:{"columnVisibilityMenuCreateStart":y,"columnVisibilityMenuCreateEnd":y,"tableWidthChanged":bz,"verticalScrollBarChanged":y,"cellClick":v,"cellDblclick":v,"cellContextmenu":v,"dataEdited":y},statics:{__nj:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bk},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:P,apply:bE,event:bj},tableModel:{check:bG,apply:bu,event:bt},rowHeight:{check:X,init:20,apply:bg,event:bC},forceLineHeight:{check:B,init:true},headerCellsVisible:{check:B,init:true,apply:L},headerCellHeight:{check:bD,init:16,apply:bx,event:D,nullable:true},statusBarVisible:{check:B,init:true,apply:bJ},additionalStatusBarText:{nullable:true,init:null,apply:bd},columnVisibilityButtonVisible:{check:B,init:true,apply:bn},metaColumnCounts:{check:ba,apply:E},focusCellOnMouseMove:{check:B,init:false,apply:bh},rowFocusChangeModifiesSelection:{check:B,init:true},showCellFocusIndicator:{check:B,init:true,apply:bq},keepFirstVisibleRowComplete:{check:B,init:true,apply:n},alwaysUpdateCells:{check:B,init:false},resetSelectionOnHeaderClick:{check:B,init:true,apply:H},dataRowRenderer:{check:U,init:null,nullable:true,event:C},modalCellEditorPreOpenFunction:{check:z,init:null,nullable:true},newColumnMenu:{check:z,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:z,init:function(eK){return new qx.ui.table.selection.Manager(eK);
}},newSelectionModel:{check:z,init:function(ee){return new qx.ui.table.selection.Model(ee);
}},newTableColumnModel:{check:z,init:function(da){return new qx.ui.table.columnmodel.Basic(da);
}},newTablePane:{check:z,init:function(ef){return new qx.ui.table.pane.Pane(ef);
}},newTablePaneHeader:{check:z,init:function(cT){return new qx.ui.table.pane.Header(cT);
}},newTablePaneScroller:{check:z,init:function(bS){return new qx.ui.table.pane.Scroller(bS);
}},newTablePaneModel:{check:z,init:function(k){return new qx.ui.table.pane.Model(k);
}}},members:{__nh:null,__ni:null,__nf:null,__ng:null,__nk:null,__nl:null,__nm:null,__nn:null,__no:null,__np:null,_createChildControlImpl:function(eb){var ec;

switch(eb){case w:ec=new qx.ui.basic.Label();
ec.set({allowGrowX:true});
this._add(ec);
break;
case A:ec=this.getNewColumnMenu()();
ec.set({focusable:false});
var ed=ec.factory(bb,{table:this});
ed.addListener(q,this._initColumnMenu,this);
break;
}return ec||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,eb);
},_applySelectionModel:function(dO,dP){this.__ng.setSelectionModel(dO);

if(dP!=null){dP.removeListener(bO,this._onSelectionChanged,this);
}dO.addListener(bO,this._onSelectionChanged,this);
},_applyRowHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(bX,bY){var ca=this._getPaneScrollerArr();

for(var i=0;i<ca.length;i++){ca[i]._excludeChildControl(bw);
}},_applyHeaderCellHeight:function(eg,eh){var ei=this._getPaneScrollerArr();

for(var i=0;i<ei.length;i++){ei[i].getHeader().setHeight(eg);
}},getEmptyTableModel:function(){if(!this.__np){this.__np=new qx.ui.table.model.Simple();
this.__np.setColumns([]);
this.__np.setData([]);
}return this.__np;
},_applyTableModel:function(dI,dJ){this.getTableColumnModel().init(dI.getColumnCount(),this);

if(dJ!=null){dJ.removeListener(bL,this._onTableModelMetaDataChanged,this);
dJ.removeListener(r,this._onTableModelDataChanged,this);
}dI.addListener(bL,this._onTableModelMetaDataChanged,this);
dI.addListener(r,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,dI.getRowCount(),0,dI.getColumnCount());
this._onTableModelMetaDataChanged();
if(dJ&&dI.init&&typeof (dI.init)==u){dI.init(this);
}},getTableColumnModel:function(){if(!this.__no){var du=this.__no=this.getNewTableColumnModel()(this);
du.addListener(Y,this._onColVisibilityChanged,this);
du.addListener(by,this._onColWidthChanged,this);
du.addListener(bF,this._onColOrderChanged,this);
var dt=this.getTableModel();
du.init(dt.getColumnCount(),this);
var ds=this._getPaneScrollerArr();

for(var i=0;i<ds.length;i++){var dv=ds[i];
var dw=dv.getTablePaneModel();
dw.setTableColumnModel(du);
}}return this.__no;
},_applyStatusBarVisible:function(h,j){if(h){this._showChildControl(w);
}else{this._excludeChildControl(w);
}
if(h){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(df,dg){this.__nk=df;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(eS,eT){if(eS){this._showChildControl(A);
}else{this._excludeChildControl(A);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__nj){cB[cG]={};
cB[cG].capture=cF.getListeners(cx[0],cG,true);
cB[cG].bubble=cF.getListeners(cx[0],cG,false);
}}this._cleanUpMetaColumns(cD.length);
var cC=0;

for(var i=0;i<cx.length;i++){var cH=cx[i];
var cE=cH.getTablePaneModel();
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
}if(cD.length>cx.length){var cA=this.getTableColumnModel();

for(var i=cx.length;i<cD.length;i++){var cE=this.getNewTablePaneModel()(cA);
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
var cH=this.getNewTablePaneScroller()(this);
cH.setTablePaneModel(cE);
cH.addListener(bv,this._onScrollY,this);
for(cG in qx.ui.table.Table.__nj){if(!cB[cG]){break;
}
if(cB[cG].capture&&cB[cG].capture.length>0){var cy=cB[cG].capture;

for(var i=0;i<cy.length;i++){var cz=cy[i].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cy[i].handler,cz,true);
}}
if(cB[cG].bubble&&cB[cG].bubble.length>0){var cJ=cB[cG].bubble;

for(var i=0;i<cJ.length;i++){var cz=cJ[i].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cJ[i].handler,cz,false);
}}}var cI=(i==cD.length-1)?1:0;
this.__nf.add(cH,{flex:cI});
cx=this._getPaneScrollerArr();
}}for(var i=0;i<cx.length;i++){var cH=cx[i];
var cK=(i==(cx.length-1));
cH.getHeader().setHeight(this.getHeaderCellHeight());
cH.setTopRightWidget(cK?this.getChildControl(A):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(A);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(en,eo){var ep=this._getPaneScrollerArr();

for(var i=0;i<ep.length;i++){ep[i].setFocusCellOnMouseMove(en);
}},_applyShowCellFocusIndicator:function(eP,eQ){var eR=this._getPaneScrollerArr();

for(var i=0;i<eR.length;i++){eR[i].setShowCellFocusIndicator(eP);
}},_applyKeepFirstVisibleRowComplete:function(a,b){var c=this._getPaneScrollerArr();

for(var i=0;i<c.length;i++){c[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cW,cX){var cY=this._getPaneScrollerArr();

for(var i=0;i<cY.length;i++){cY[i].setResetSelectionOnHeaderClick(cW);
}},getSelectionManager:function(){return this.__ng;
},_getPaneScrollerArr:function(){return this.__nf.getChildren();
},getPaneScroller:function(eW){return this._getPaneScrollerArr()[eW];
},_cleanUpMetaColumns:function(eU){var eV=this._getPaneScrollerArr();

if(eV!=null){for(var i=eV.length-1;i>=eU;i--){eV[i].destroy();
}}},_onChangeLocale:function(fm){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(fk){var fl=this._getPaneScrollerArr();

for(var i=0;i<fl.length;i++){fl[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(cb){var cc=this._getPaneScrollerArr();

for(var i=0;i<cc.length;i++){cc[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(eL){var eM=eL.getData();
this._updateTableData(eM.firstRow,eM.lastRow,eM.firstColumn,eM.lastColumn,eM.removeStart,eM.removeCount);
},_updateTableData:function(eC,eD,eE,eF,eG,eH){var eI=this._getPaneScrollerArr();
if(eH){this.getSelectionModel().removeSelectionInterval(eG,eG+eH);
}
for(var i=0;i<eI.length;i++){eI[i].onTableModelDataChanged(eC,eD,eE,eF);
}var eJ=this.getTableModel().getRowCount();

if(eJ!=this.__nl){this.__nl=eJ;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(cd){if(!this.__nm){this.__nm=true;
var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i].setScrollY(cd.getData());
}this.__nm=false;
}},_onKeyPress:function(ci){if(!this.getEnabled()){return;
}var cp=this.__ni;
var cm=true;
var cq=ci.getKeyIdentifier();

if(this.isEditing()){if(ci.getModifiers()==0){switch(cq){case bM:this.stopEditing();
var cp=this.__ni;
this.moveFocusedCell(0,1);

if(this.__ni!=cp){cm=this.startEditing();
}break;
case Q:this.cancelEditing();
this.focus();
break;
default:cm=false;
break;
}}}else{if(ci.isCtrlPressed()){cm=true;

switch(cq){case R:var cn=this.getTableModel().getRowCount();

if(cn>0){this.getSelectionModel().setSelectionInterval(0,cn-1);
}break;
default:cm=false;
break;
}}else{switch(cq){case be:this.__ng.handleSelectKeyDown(this.__ni,ci);
break;
case o:case bM:this.startEditing();
cm=true;
break;
case N:this.setFocusedCell(this.__nh,0,true);
break;
case bl:var cn=this.getTableModel().getRowCount();
this.setFocusedCell(this.__nh,cn-1,true);
break;
case bf:this.moveFocusedCell(-1,0);
break;
case p:this.moveFocusedCell(1,0);
break;
case V:this.moveFocusedCell(0,-1);
break;
case bm:this.moveFocusedCell(0,1);
break;
case s:case bB:var cl=this.getPaneScroller(0);
var co=cl.getTablePane();
var ck=this.getRowHeight();
var cj=(cq==s)?-1:1;
cn=co.getVisibleRowCount()-1;
cl.setScrollY(cl.getScrollY()+cj*cn*ck);
this.moveFocusedCell(0,cj*cn);
break;
default:cm=false;
}}}
if(cp!=this.__ni&&this.getRowFocusChangeModifiesSelection()){this.__ng.handleMoveKeyDown(this.__ni,ci);
}
if(cm){ci.preventDefault();
ci.stopPropagation();
}},_onFocusChanged:function(ct){var cu=this._getPaneScrollerArr();

for(var i=0;i<cu.length;i++){cu[i].onFocusChanged();
}},_onColVisibilityChanged:function(dx){var dy=this._getPaneScrollerArr();

for(var i=0;i<dy.length;i++){dy[i].onColVisibilityChanged();
}var dz=dx.getData();

if(this.__nn!=null&&dz.col!=null&&dz.visible!=null){this.__nn[dz.col].setVisible(dz.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dL){var dM=this._getPaneScrollerArr();

for(var i=0;i<dM.length;i++){var dN=dL.getData();
dM[i].setColumnWidth(dN.col,dN.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dG){var dH=this._getPaneScrollerArr();

for(var i=0;i<dH.length;i++){dH[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(cr){var cs=this._getMetaColumnAtPageX(cr);
return (cs!=-1)?this.getPaneScroller(cs):null;
},setFocusedCell:function(db,dc,dd){if(!this.isEditing()&&(db!=this.__nh||dc!=this.__ni)){if(db===null){db=0;
}this.__nh=db;
this.__ni=dc;
var de=this._getPaneScrollerArr();

for(var i=0;i<de.length;i++){de[i].setFocusedCell(db,dc);
}
if(db!==null&&dd){this.scrollCellVisible(db,dc);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__nh;
},getFocusedRow:function(){return this.__ni;
},highlightFocusedRow:function(cU){this.getDataRowRenderer().setHighlightFocusRow(cU);
},clearFocusedRowHighlight:function(dp){if(dp){var dr=dp.getRelatedTarget();

if(dr instanceof qx.ui.table.pane.Pane||dr instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dq=this._getPaneScrollerArr();

for(var i=0;i<dq.length;i++){dq[i].onFocusChanged();
}},moveFocusedCell:function(fd,fe){var fi=this.__nh;
var fj=this.__ni;

if(fi===null||fj===null){return;
}
if(fd!=0){var fh=this.getTableColumnModel();
var x=fh.getVisibleX(fi);
var fg=fh.getVisibleColumnCount();
x=qx.lang.Number.limit(x+fd,0,fg-1);
fi=fh.getVisibleColumnAtX(x);
}
if(fe!=0){var ff=this.getTableModel();
fj=qx.lang.Number.limit(fj+fe,0,ff.getRowCount()-1);
}this.setFocusedCell(fi,fj,true);
},scrollCellVisible:function(ej,ek){var el=this.getTableColumnModel();
var x=el.getVisibleX(ej);
var em=this._getMetaColumnAtColumnX(x);

if(em!=-1){this.getPaneScroller(em).scrollCellVisible(ej,ek);
}},isEditing:function(){if(this.__nh!=null){var x=this.getTableColumnModel().getVisibleX(this.__nh);
var dh=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(dh).isEditing();
}return false;
},startEditing:function(){if(this.__nh!=null){var x=this.getTableColumnModel().getVisibleX(this.__nh);
var eB=this._getMetaColumnAtColumnX(x);
var eA=this.getPaneScroller(eB).startEditing();
return eA;
}return false;
},stopEditing:function(){if(this.__nh!=null){var x=this.getTableColumnModel().getVisibleX(this.__nh);
var bR=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(bR).stopEditing();
}},cancelEditing:function(){if(this.__nh!=null){var x=this.getTableColumnModel().getVisibleX(this.__nh);
var cV=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(cV).cancelEditing();
}},updateContent:function(){var eN=this._getPaneScrollerArr();

for(var i=0;i<eN.length;i++){eN[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var dK=this._getPaneScrollerArr();

for(var i=0;i<dK.length;i++){dK[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(A).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var eO=this._getPaneScrollerArr();

for(var i=0;i<eO.length;i++){eO[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(A).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(dX){var dY=this._getPaneScrollerArr();

for(var i=0;i<dY.length;i++){var ea=dY[i].getContainerLocation();

if(dX>=ea.left&&dX<=ea.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(d){var f=this.getMetaColumnCounts();
var g=0;

for(var i=0;i<f.length;i++){var e=f[i];
g+=e;

if(e==-1||d<g){return i;
}}return -1;
},_updateStatusBar:function(){var dk=this.getTableModel();

if(this.getStatusBarVisible()){var dl=this.getSelectionModel().getSelectedCount();
var dn=dk.getRowCount();
var dm;

if(dn>=0){if(dl==0){dm=this.trn(T,O,dn,dn);
}else{dm=this.trn(M,bA,dn,dl,dn);
}}
if(this.__nk){if(dm){dm+=this.__nk;
}else{dm=this.__nk;
}}
if(dm){this.getChildControl(w).setValue(dm);
}}},_updateScrollerWidths:function(){var dC=this._getPaneScrollerArr();

for(var i=0;i<dC.length;i++){var dE=(i==(dC.length-1));
var dF=dC[i].getTablePaneModel().getTotalWidth();
dC[i].setPaneWidth(dF);
var dD=dE?1:0;
dC[i].setLayoutProperties({flex:dD});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var cO=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cR=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var cL=this._getPaneScrollerArr();
var cN=false;
var cQ=false;

for(var i=0;i<cL.length;i++){var cS=(i==(cL.length-1));
var cM=cL[i].getNeededScrollBars(cN,!cS);

if(cM&cO){cN=true;
}
if(cS&&(cM&cR)){cQ=true;
}}for(var i=0;i<cL.length;i++){var cS=(i==(cL.length-1));
var cP;
cL[i].setHorizontalScrollBarVisible(cN);
if(cS){cP=cL[i].getVerticalScrollBarVisible();
}cL[i].setVerticalScrollBarVisible(cS&&cQ);
if(cS&&cQ!=cP){this.fireDataEvent(bo,cQ);
}}},_initColumnMenu:function(){var ev=this.getTableModel();
var ew=this.getTableColumnModel();
var ex=this.getChildControl(A);
ex.empty();
var eu=ex.getMenu();
var ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(bI,ey);
this.__nn={};

for(var ez=0,l=ev.getColumnCount();ez<l;ez++){var et=ex.factory(W,{text:ev.getColumnName(ez),column:ez,bVisible:ew.isColumnVisible(ez)});
qx.core.Assert.assertInterface(et,qx.ui.table.IColumnMenuItem);
et.addListener(G,this._createColumnVisibilityCheckBoxHandler(ez),this);
this.__nn[ez]=et;
}var ey={table:this,menu:eu,columnButton:ex};
this.fireDataEvent(J,ey);
},_createColumnVisibilityCheckBoxHandler:function(m){return function(di){var dj=this.getTableColumnModel();
dj.setColumnVisible(m,di.getData());
};
},setColumnWidth:function(dV,dW){this.getTableColumnModel().setColumnWidth(dV,dW);
},_onResize:function(){this.fireEvent(K);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(eX,eY,self,fa){if(this.self(arguments).__nj[eX]){var fc=[eX];

for(var i=0,fb=this._getPaneScrollerArr();i<fb.length;i++){fc.push(fb[i].addListener.apply(fb[i],arguments));
}return fc.join(bQ);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,eX,eY,self,fa);
}},removeListener:function(bT,bU,self,bV){if(this.self(arguments).__nj[bT]){for(var i=0,bW=this._getPaneScrollerArr();i<bW.length;i++){bW[i].removeListener.apply(bW[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,bT,bU,self,bV);
}},removeListenerById:function(dQ){var dU=dQ.split(bQ);
var dT=dU.shift();

if(this.self(arguments).__nj[dT]){var dS=true;

for(var i=0,dR=this._getPaneScrollerArr();i<dR.length;i++){dS=dR[i].removeListenerById.call(dR[i],dU[i])&&dS;
}return dS;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,dQ);
}},destroy:function(){this.getChildControl(A).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bN,bK)){qx.locale.Manager.getInstance().removeListener(bP,this._onChangeLocale,this);
}var dB=this.getSelectionModel();

if(dB){dB.dispose();
}var dA=this.getDataRowRenderer();

if(dA){dA.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(S,br,t,t,bi);
this._disposeMap(bs);
}});
})();

});