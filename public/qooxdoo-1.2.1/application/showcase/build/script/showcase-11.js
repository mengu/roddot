qx.$$packageData['bc2035dab84e']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};

qx.Part.$$notifyLoad("bc2035dab84e", function() {
(function(){var T="failed",S="sending",R="completed",Q="receiving",P="aborted",O="timeout",N="qx.event.type.Event",M="Connection dropped",L="qx.io.remote.Response",K="configured",bU="Unknown status code. ",bT="=",bS="qx.io.remote.transport.XmlHttp",bR="qx.io.remote.transport.Abstract",bQ="Request-URL too large",bP="MSHTML-specific HTTP status code",bO="Not available",bN="Precondition failed",bM="Server error",bL="Moved temporarily",bb="&",bc="qx.io.remote.Exchange",Y="Possibly due to a cross-domain request?",ba="Bad gateway",W="Gone",X="See other",U="Partial content",V="Server timeout",bh="qx.io.remote.transport.Script",bi="HTTP version not supported",br="Unauthorized",bo="Possibly due to application URL using 'file:' protocol?",bz="Multiple choices",bu="Payment required",bH="Not implemented",bE="Proxy authentication required",bk="Length required",bK="_applyState",bJ="changeState",bI="Not modified",bj="qx.io.remote.Request",bm="Connection closed by server",bn="Moved permanently",bq="_applyImplementation",bs="Method not allowed",bv="Forbidden",bB="Use proxy",bG="Ok",bd="Conflict",be="Not found",bl="Not acceptable",by="Request time-out",bx="Bad request",bw="No content",bD="file:",bC="qx.io.remote.transport.Iframe",bt="Request entity too large",bA="Unknown status code",J="Unsupported media type",bF="Gateway time-out",bf="created",bg="Out of resources",bp="undefined";
qx.Class.define(bc,{extend:qx.core.Object,construct:function(z){qx.core.Object.call(this);
this.setRequest(z);
z.setTransport(this);
},events:{"sending":N,"receiving":N,"completed":L,"aborted":N,"failed":L,"timeout":L},statics:{typesOrder:[bS,bC,bh],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(A,B){qx.io.remote.Exchange.typesAvailable[B]=A;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var q in qx.io.remote.Exchange.typesAvailable){var p=qx.io.remote.Exchange.typesAvailable[q];

if(p.isSupported()){qx.io.remote.Exchange.typesSupported[q]=p;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(k,m,n){if(!qx.lang.Array.contains(k.handles.responseTypes,n)){return false;
}
for(var o in m){if(!k.handles[o]){return false;
}}return true;
},_nativeMap:{0:bf,1:K,2:S,3:Q,4:R},wasSuccessful:function(cb,cc,cd){if(cd){switch(cb){case null:case 0:return true;
case -1:return cc<4;
default:return typeof cb===bp;
}}else{switch(cb){case -1:{};
return cc<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return cc!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(cb>206&&cb<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+cb+" ("+cc+")");
return false;
}}},statusCodeToString:function(bW){switch(bW){case -1:return bO;
case 0:var bX=window.location.href;
if(qx.lang.String.startsWith(bX.toLowerCase(),bD)){return (bU+bo);
}else{return (bU+Y);
}break;
case 200:return bG;
case 304:return bI;
case 206:return U;
case 204:return bw;
case 300:return bz;
case 301:return bn;
case 302:return bL;
case 303:return X;
case 305:return bB;
case 400:return bx;
case 401:return br;
case 402:return bu;
case 403:return bv;
case 404:return be;
case 405:return bs;
case 406:return bl;
case 407:return bE;
case 408:return by;
case 409:return bd;
case 410:return W;
case 411:return bk;
case 412:return bN;
case 413:return bt;
case 414:return bQ;
case 415:return J;
case 500:return bM;
case 501:return bH;
case 502:return ba;
case 503:return bg;
case 504:return bF;
case 505:return bi;
case 12002:return V;
case 12029:return M;
case 12030:return M;
case 12031:return M;
case 12152:return bm;
case 13030:return bP;
default:return bA;
}}},properties:{request:{check:bj,nullable:true},implementation:{check:bR,nullable:true,apply:bq},state:{check:[K,S,Q,R,P,O,T],init:K,event:bJ,apply:bK}},members:{send:function(){var u=this.getRequest();

if(!u){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var s=qx.io.remote.Exchange.typesOrder;
var r=qx.io.remote.Exchange.typesSupported;
var w=u.getResponseType();
var x={};

if(u.getAsynchronous()){x.asynchronous=true;
}else{x.synchronous=true;
}
if(u.getCrossDomain()){x.crossDomain=true;
}
if(u.getFileUpload()){x.fileUpload=true;
}for(var v in u.getFormFields()){x.programaticFormFields=true;
break;
}var y,t;

for(var i=0,l=s.length;i<l;i++){y=r[s[i]];

if(y){if(!qx.io.remote.Exchange.canHandle(y,x,w)){continue;
}
try{{};
t=new y;
this.setImplementation(t);
t.setUseBasicHttpAuth(u.getUseBasicHttpAuth());
t.send();
return true;
}catch(ca){this.error("Request handler throws error");
this.error(ca);
return;
}}}this.error("There is no transport implementation available to handle this request: "+u);
},abort:function(){var bY=this.getImplementation();

if(bY){{};
bY.abort();
}else{{};
this.setState(P);
}},timeout:function(){var C=this.getImplementation();

if(C){this.warn("Timeout: implementation "+C.toHashCode());
C.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(O);
}this.__qR();
},__qR:function(){var D=this.getRequest();

if(D){D.setTimeout(0);
}},_onsending:function(e){this.setState(S);
},_onreceiving:function(e){this.setState(Q);
},_oncompleted:function(e){this.setState(R);
},_onabort:function(e){this.setState(P);
},_onfailed:function(e){this.setState(T);
},_ontimeout:function(e){this.setState(O);
},_applyImplementation:function(a,b){if(b){b.removeListener(S,this._onsending,this);
b.removeListener(Q,this._onreceiving,this);
b.removeListener(R,this._oncompleted,this);
b.removeListener(P,this._onabort,this);
b.removeListener(O,this._ontimeout,this);
b.removeListener(T,this._onfailed,this);
}
if(a){var d=this.getRequest();
a.setUrl(d.getUrl());
a.setMethod(d.getMethod());
a.setAsynchronous(d.getAsynchronous());
a.setUsername(d.getUsername());
a.setPassword(d.getPassword());
a.setParameters(d.getParameters(false));
a.setFormFields(d.getFormFields());
a.setRequestHeaders(d.getRequestHeaders());
if(a instanceof qx.io.remote.transport.XmlHttp){a.setParseJson(d.getParseJson());
}var h=d.getData();

if(h===null){var j=d.getParameters(true);
var g=[];

for(var c in j){var f=j[c];

if(f instanceof Array){for(var i=0;i<f.length;i++){g.push(encodeURIComponent(c)+bT+encodeURIComponent(f[i]));
}}else{g.push(encodeURIComponent(c)+bT+encodeURIComponent(f));
}}
if(g.length>0){a.setData(g.join(bb));
}}else{a.setData(h);
}a.setResponseType(d.getResponseType());
a.addListener(S,this._onsending,this);
a.addListener(Q,this._onreceiving,this);
a.addListener(R,this._oncompleted,this);
a.addListener(P,this._onabort,this);
a.addListener(O,this._ontimeout,this);
a.addListener(T,this._onfailed,this);
}},_applyState:function(E,F){{};

switch(E){case S:this.fireEvent(S);
break;
case Q:this.fireEvent(Q);
break;
case R:case P:case O:case T:var H=this.getImplementation();

if(!H){break;
}this.__qR();

if(this.hasListener(E)){var I=qx.event.Registration.createEvent(E,qx.io.remote.Response);

if(E==R){var G=H.getResponseContent();
I.setContent(G);
if(G===null){{};
E=T;
}}else if(E==T){I.setContent(H.getResponseContent());
}I.setStatusCode(H.getStatusCode());
I.setResponseHeaders(H.getResponseHeaders());
this.dispatchEvent(I);
}this.setImplementation(null);
H.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bV=this.getImplementation();

if(bV){this.setImplementation(null);
bV.dispose();
}this.setRequest(null);
}});
})();
(function(){var s="qx.event.type.Event",r="String",q="failed",p="timeout",o="created",n="aborted",m="sending",l="configured",k="receiving",j="completed",e="Object",i="Boolean",h="abstract",d="_applyState",c="GET",g="changeState",f="qx.io.remote.transport.Abstract";
qx.Class.define(f,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":s,"configured":s,"sending":s,"receiving":s,"completed":s,"aborted":s,"failed":s,"timeout":s},properties:{url:{check:r,nullable:true},method:{check:r,nullable:true,init:c},asynchronous:{check:i,nullable:true,init:true},data:{check:r,nullable:true},username:{check:r,nullable:true},password:{check:r,nullable:true},state:{check:[o,l,m,k,j,n,p,q],init:o,event:g,apply:d},requestHeaders:{check:e,nullable:true},parameters:{check:e,nullable:true},formFields:{check:e,nullable:true},responseType:{check:r,nullable:true},useBasicHttpAuth:{check:i,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(n);
},timeout:function(){{};
this.setState(p);
},failed:function(){{};
this.setState(q);
},setRequestHeader:function(a,b){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(v){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(t,u){{};

switch(t){case o:this.fireEvent(o);
break;
case l:this.fireEvent(l);
break;
case m:this.fireEvent(m);
break;
case k:this.fireEvent(k);
break;
case j:this.fireEvent(j);
break;
case n:this.fireEvent(n);
break;
case q:this.fireEvent(q);
break;
case p:this.fireEvent(p);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var b=".",a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var h;
var c=qx.bom.client.Engine;
var g=c.FULLVERSION.split(b);
var e=0;
var d=0;
var f=0;
if(g[0]){e=g[0];
}if(g[1]){d=g[1];
}if(g[2]){f=g[2];
}if(window.maxConnectionsPerServer){h=window.maxConnectionsPerServer;
}else if(c.OPERA){h=8;
}else if(c.WEBKIT){h=4;
}else if(c.GECKO&&((e>1)||((e==1)&&(d>9))||((e==1)&&(d==9)&&(f>=1)))){h=6;
}else{h=2;
}return h;
}}});
})();
(function(){var t="configured",s="completed",r="changeState",q="changeModel",p="qx.data.store.Json",o="__vS",n="GET",m="_marshaler",l="sending",k="application/json",d="changeUrl",j="failed",g="loaded",c="timeout",b="queued",f="String",e="aborted",h="_applyUrl",a="receiving",i="qx.event.type.Data";
qx.Class.define(p,{extend:qx.core.Object,construct:function(C,D){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(D);
this._delegate=D;

if(C!=null){this.setUrl(C);
}},events:{"loaded":i},properties:{model:{nullable:true,event:q},state:{check:[t,b,l,a,s,e,c,j],init:t,event:r},url:{check:f,apply:h,event:d}},members:{__vS:null,_delegate:null,_applyUrl:function(A,B){if(A!=null){this._createRequest(A);
}},_createRequest:function(y){this.__vS=new qx.io.remote.Request(y,n,k);
var z=this._delegate;

if(z&&qx.lang.Type.isFunction(z.configureRequest)){this._delegate.configureRequest(this.__vS);
}this.__vS.addListener(s,this.__vT,this);
this.__vS.addListener(r,function(u){this.setState(u.getData());
},this);
this.__vS.send();
},__vT:function(v){var x=v.getContent();
var w=this._delegate;

if(w&&qx.lang.Type.isFunction(w.manipulateData)){x=this._delegate.manipulateData(x);
}this._marshaler.toClass(x,true);
this.setModel(this._marshaler.toModel(x));
this.fireDataEvent(g,this.getModel());
},reload:function(){var E=this.getUrl();

if(E!=null){this._createRequest(E);
}}},destruct:function(){this._disposeObjects(m,o);
this._delegate=null;
}});
})();
(function(){var i="?",h="&",g="loaded",f='qx.data.store.Jsonp[',e='].callback',d="failed",c="=",b="qx.data.store.Jsonp",a="String";
qx.Class.define(b,{extend:qx.data.store.Json,construct:function(n,o,p){if(p!=undefined){this.setCallbackParam(p);
}qx.data.store.Json.call(this,n,o);
},properties:{callbackParam:{check:a,nullable:false}},members:{__vQ:null,_createRequest:function(q){if(this.__vQ){this.__vQ.dispose();
}this.__vQ=new qx.io.ScriptLoader();
var s=this._delegate;

if(s&&qx.lang.Type.isFunction(s.configureRequest)){this._delegate.configureRequest(this.__vQ);
}var r=q.indexOf(i)==-1?i:h;
q+=r+this.getCallbackParam()+c;
var t=parseInt(this.toHashCode());
qx.data.store.Jsonp[t]=this;
q+=f+t+e;
this.__vQ.load(q,function(j){delete this[t];
},this);
},callback:function(m){if(this.isDisposed()){return;
}this.__vR(m);
},__vR:function(k){if(k==undefined){this.setState(d);
return;
}var l=this._delegate;

if(l&&qx.lang.Type.isFunction(l.manipulateData)){k=this._delegate.manipulateData(k);
}this._marshaler.toClass(k);
this.setModel(this._marshaler.toModel(k));
this.fireDataEvent(g,this.getModel());
}},destruct:function(){if(this.__vQ){this.__vQ.dispose();
}this.__vQ=null;
}});
})();
(function(){var D="=",C="&",B="application/xml",A="application/json",z="text/html",y="qx.client",x="textarea",w="none",v="text/plain",u="text/javascript",X="",W="completed",V="?",U="qx.io.remote.transport.Iframe",T="gecko",S="frame_",R="aborted",Q="_data_",P="pre",O="javascript:void(0)",K="sending",L="form",I="failed",J='<iframe name="',G="mshtml",H="form_",E='"></iframe>',F="iframe",M="timeout",N="qx/static/blank.gif";
qx.Class.define(U,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var r=(new Date).valueOf();
var s=S+r;
var t=H+r;
if(qx.core.Variant.isSet(y,G)){this.__qS=document.createElement(J+s+E);
}else{this.__qS=document.createElement(F);
}this.__qS.src=O;
this.__qS.id=this.__qS.name=s;
this.__qS.onload=qx.lang.Function.bind(this._onload,this);
this.__qS.style.display=w;
document.body.appendChild(this.__qS);
this.__qT=document.createElement(L);
this.__qT.target=s;
this.__qT.id=this.__qT.name=t;
this.__qT.style.display=w;
document.body.appendChild(this.__qT);
this.__qU=document.createElement(x);
this.__qU.id=this.__qU.name=Q;
this.__qT.appendChild(this.__qU);
this.__qS.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[v,u,A,B,z]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__qU:null,__qV:0,__qT:null,__qS:null,send:function(){var c=this.getMethod();
var f=this.getUrl();
var k=this.getParameters(false);
var j=[];

for(var d in k){var g=k[d];

if(g instanceof Array){for(var i=0;i<g.length;i++){j.push(encodeURIComponent(d)+D+encodeURIComponent(g[i]));
}}else{j.push(encodeURIComponent(d)+D+encodeURIComponent(g));
}}
if(j.length>0){f+=(f.indexOf(V)>=0?C:V)+j.join(C);
}if(this.getData()===null){var k=this.getParameters(true);
var j=[];

for(var d in k){var g=k[d];

if(g instanceof Array){for(var i=0;i<g.length;i++){j.push(encodeURIComponent(d)+D+encodeURIComponent(g[i]));
}}else{j.push(encodeURIComponent(d)+D+encodeURIComponent(g));
}}
if(j.length>0){this.setData(j.join(C));
}}var b=this.getFormFields();

for(var d in b){var h=document.createElement(x);
h.name=d;
h.appendChild(document.createTextNode(b[d]));
this.__qT.appendChild(h);
}this.__qT.action=f;
this.__qT.method=c;
this.__qU.appendChild(document.createTextNode(this.getData()));
this.__qT.submit();
this.setState(K);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__qT.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__qS.readyState]);
}),_switchReadyState:function(l){switch(this.getState()){case W:case R:case I:case M:this.warn("Ignore Ready State Change");
return;
}while(this.__qV<l){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qV]);
}},setRequestHeader:function(n,o){},getResponseHeader:function(q){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return X;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__qS);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__qS);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__qS);
},getIframeTextContent:function(){var a=this.getIframeBody();

if(!a){return null;
}
if(!a.firstChild){return X;
}if(a.firstChild.tagName&&a.firstChild.tagName.toLowerCase()==P){return a.firstChild.innerHTML;
}else{return a.innerHTML;
}},getIframeHtmlContent:function(){var ba=this.getIframeBody();
return ba?ba.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==W){{};
return null;
}{};
var p=this.getIframeTextContent();

switch(this.getResponseType()){case v:{};
return p;
break;
case z:p=this.getIframeHtmlContent();
{};
return p;
break;
case A:p=this.getIframeHtmlContent();
{};

try{return p&&p.length>0?qx.util.Json.parse(p,false):null;
}catch(Y){return this.error("Could not execute json: ("+p+")",Y);
}case u:p=this.getIframeHtmlContent();
{};

try{return p&&p.length>0?window.eval(p):null;
}catch(m){return this.error("Could not execute javascript: ("+p+")",m);
}case B:p=this.getIframeDocument();
{};
return p;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,U);
},destruct:function(){if(this.__qS){this.__qS.onload=null;
this.__qS.onreadystatechange=null;
if(qx.core.Variant.isSet(y,T)){this.__qS.src=qx.util.ResourceManager.getInstance().toUri(N);
}document.body.removeChild(this.__qS);
}
if(this.__qT){document.body.removeChild(this.__qT);
}this.__qS=this.__qT=this.__qU=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k="new Date(Date.UTC(",j='"',h="))",g=':',f="qx.jsonDebugging",e='-',Q='\\u00',P="__jX",O='\\\\',N='\\f',M="__jN",L='\\"',K='Z',J='T',I="}",H="__jP",w='(',x='.',u="{",v='\\r',s=":",t='\\t',q="The default returned parsed date format will change. Use the CONVERT_DATES flag to change the behavior.",r="]",y="qx.jsonEncodeUndefined",z="__jY",C="[",B="__jO",E='\\b',D="qx.util.Json",G=')',F='\\n',A="__jQ";
qx.Class.define(D,{statics:{__jL:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__jM:{"function":M,"boolean":B,"number":H,"string":A,"object":P,"undefined":z},__jN:function(bq,br){return String(bq);
},__jO:function(c,d){return String(c);
},__jP:function(bg,bh){return isFinite(bg)?String(bg):m;
},__jQ:function(bj,bk){var bl;

if(/["\\\x00-\x1f]/.test(bj)){bl=bj.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__jS);
}else{bl=bj;
}return j+bl+j;
},__jR:{'\b':E,'\t':t,'\n':F,'\f':N,'\r':v,'"':L,'\\':O},__jS:function(a,b){var bf=qx.util.Json.__jR[b];

if(bf){return bf;
}bf=b.charCodeAt();
return Q+Math.floor(bf/16).toString(16)+(bf%16).toString(16);
},__jT:function(U,V){var X=[],bb=true,ba,W;
var Y=qx.util.Json.__kb;
X.push(C);

if(Y){qx.util.Json.__jU+=qx.util.Json.BEAUTIFYING_INDENT;
X.push(qx.util.Json.__jU);
}
for(var i=0,l=U.length;i<l;i++){W=U[i];
ba=this.__jM[typeof W];

if(ba){W=this[ba](W,i+o);

if(typeof W==n){if(!bb){X.push(p);

if(Y){X.push(qx.util.Json.__jU);
}}X.push(W);
bb=false;
}}}
if(Y){qx.util.Json.__jU=qx.util.Json.__jU.substring(0,qx.util.Json.__jU.length-qx.util.Json.BEAUTIFYING_INDENT.length);
X.push(qx.util.Json.__jU);
}X.push(r);
return X.join(o);
},__jV:function(bs,bt){if(qx.util.Json.CONVERT_DATES===null){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
var bv=bs.getUTCFullYear()+p+bs.getUTCMonth()+p+bs.getUTCDate()+p+bs.getUTCHours()+p+bs.getUTCMinutes()+p+bs.getUTCSeconds()+p+bs.getUTCMilliseconds();
return k+bv+h;
}else if(!qx.util.Json.CONVERT_DATES){if(bs.toJSON){return bs.toJSON();
}var bu=qx.util.format.NumberFormat.getInstance();
bu.setMinimumIntegerDigits(2);
var bw=bs.getUTCFullYear()+e+bu.format(bs.getUTCMonth()+1)+e+bu.format(bs.getUTCDate())+J+bu.format(bs.getUTCHours())+g+bu.format(bs.getUTCMinutes())+g+bu.format(bs.getUTCSeconds())+x;
bu.setMinimumIntegerDigits(3);
return bw+bu.format(bs.getUTCMilliseconds())+K;
}else{var bv=bs.getUTCFullYear()+p+bs.getUTCMonth()+p+bs.getUTCDate()+p+bs.getUTCHours()+p+bs.getUTCMinutes()+p+bs.getUTCSeconds()+p+bs.getUTCMilliseconds();
return k+bv+h;
}},__jW:function(bA,bB){var bE=[],bG=true,bD,bC;
var bF=qx.util.Json.__kb;
bE.push(u);

if(bF){qx.util.Json.__jU+=qx.util.Json.BEAUTIFYING_INDENT;
bE.push(qx.util.Json.__jU);
}
for(var bB in bA){bC=bA[bB];
bD=this.__jM[typeof bC];

if(bD){bC=this[bD](bC,bB);

if(typeof bC==n){if(!bG){bE.push(p);

if(bF){bE.push(qx.util.Json.__jU);
}}bE.push(this.__jQ(bB),s,bC);
bG=false;
}}}
if(bF){qx.util.Json.__jU=qx.util.Json.__jU.substring(0,qx.util.Json.__jU.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bE.push(qx.util.Json.__jU);
}bE.push(I);
return bE.join(o);
},__jX:function(bo,bp){if(bo){if(qx.lang.Type.isFunction(bo.toJSON)&&bo.toJSON!==this.__jL){return this.__ka(bo.toJSON(bp),bp);
}else if(qx.lang.Type.isDate(bo)){return this.__jV(bo,bp);
}else if(qx.lang.Type.isArray(bo)){return this.__jT(bo,bp);
}else if(qx.lang.Type.isObject(bo)){return this.__jW(bo,bp);
}return o;
}return m;
},__jY:function(bm,bn){if(qx.core.Setting.get(y)){return m;
}},__ka:function(S,T){return this[this.__jM[typeof S]](S,T);
},stringify:function(bx,by){this.__kb=by;
this.__jU=this.BEAUTIFYING_LINE_END;
var bz=this.__ka(bx,o);

if(typeof bz!=n){bz=null;
}if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON request: "+bz);
}return bz;
},parse:function(bc,bd){if(bd===undefined){bd=true;
}
if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON response: "+bc);
}
if(bd){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bc.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var be=(bc&&bc.length>0)?eval(w+bc+G):null;
return be;
}catch(R){throw new Error("Could not evaluate JSON string: "+R.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bi){bi.__jL=Date.prototype.toJSON;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.setType(this.getType());
g.setState(this.getState());
g.setStatusCode(this.getStatusCode());
g.setContent(this.getContent());
g.setResponseHeaders(this.getResponseHeaders());
return g;
},getResponseHeader:function(d){var e=this.getResponseHeaders();

if(e){return e[d]||null;
}return null;
}}});
})();
(function(){var s="Integer",r="aborted",q="_onaborted",p="_on",o="_applyEnabled",n="Boolean",m="sending",l="interval",k="failed",j="qx.io.remote.RequestQueue",c="timeout",h="completed",g="queued",b="__qN",a="__qP",f="receiving",d="singleton";
qx.Class.define(j,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qM=[];
this.__qN=[];
this.__qO=0;
this.__qP=new qx.event.Timer(500);
this.__qP.addListener(l,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:o},maxTotalRequests:{check:s,nullable:true},maxConcurrentRequests:{check:s,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:s,init:5000}},members:{__qM:null,__qN:null,__qO:null,__qP:null,getRequestQueue:function(){return this.__qM;
},getActiveQueue:function(){return this.__qN;
},_debug:function(){var H;
{};
},_check:function(){this._debug();
if(this.__qN.length==0&&this.__qM.length==0){this.__qP.stop();
}if(!this.getEnabled()){return;
}if(this.__qM.length==0||(this.__qM[0].isAsynchronous()&&this.__qN.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__qO>=this.getMaxTotalRequests()){return;
}var E=this.__qM.shift();
var F=new qx.io.remote.Exchange(E);
this.__qO++;
this.__qN.push(F);
this._debug();
F.addListener(m,this._onsending,this);
F.addListener(f,this._onreceiving,this);
F.addListener(h,this._oncompleted,this);
F.addListener(r,this._oncompleted,this);
F.addListener(c,this._oncompleted,this);
F.addListener(k,this._oncompleted,this);
F._start=(new Date).valueOf();
F.send();
if(this.__qM.length>0){this._check();
}},_remove:function(t){qx.lang.Array.remove(this.__qN,t);
t.dispose();
this._check();
},__qQ:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var w=e.getTarget().getRequest();
var v=p+e.getType();
try{if(w[v]){w[v](e);
}}catch(I){var u=qx.dev.StackTrace.getStackTraceFromError(I);
this.error("Request "+w+" handler "+v+" threw an error: "+I+"\nStack Trace:\n"+u);
try{if(w[q]){var event=qx.event.Registration.createEvent(r,qx.event.type.Event);
w[q](event);
}}catch(G){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var D=this.__qN;

if(D.length==0){this.__qP.stop();
return;
}var y=(new Date).valueOf();
var B;
var z;
var C=this.getDefaultTimeout();
var A;
var x;

for(var i=D.length-1;i>=0;i--){B=D[i];
z=B.getRequest();

if(z.isAsynchronous()){A=z.getTimeout();
if(A==0){continue;
}
if(A==null){A=C;
}x=y-B._start;

if(x>A){this.warn("Timeout: transport "+B.toHashCode());
this.warn(x+"ms > "+A+"ms");
B.timeout();
}}}},_applyEnabled:function(M,N){if(M){this._check();
}this.__qP.setEnabled(M);
},add:function(L){L.setState(g);

if(L.isAsynchronous()){this.__qM.push(L);
}else{this.__qM.unshift(L);
}this._check();

if(this.getEnabled()){this.__qP.start();
}},abort:function(J){var K=J.getTransport();

if(K){K.abort();
}else if(qx.lang.Array.contains(this.__qM,J)){qx.lang.Array.remove(this.__qM,J);
}}},destruct:function(){this._disposeArray(b);
this._disposeObjects(a);
this.__qM=null;
}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var F=++qx.io.remote.transport.Script.__qW;

if(F>=2000000000){qx.io.remote.transport.Script.__qW=F=1;
}this.__qX=null;
this.__qW=F;
},statics:{__qW:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(D,content){var E=qx.io.remote.transport.Script._instanceRegistry[D];

if(E==null){{};
}else{E._responseContent=content;
E._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__qY:0,__qX:null,__qW:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__qW;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__qW]=this;
this.__qX=document.createElement(c);
this.__qX.charset=e;
this.__qX.src=x;
{};
document.body.appendChild(this.__qX);
},_switchReadyState:function(u){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__qY<u){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qY]);
}},setRequestHeader:function(B,C){},getResponseHeader:function(t){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};

switch(this.getResponseType()){case m:case o:case l:{};
var s=this._responseContent;
return (s===0?0:(s||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__qX){delete qx.io.remote.transport.Script._instanceRegistry[this.__qW];
document.body.removeChild(this.__qX);
}this.__qX=this._responseContent=null;
}});
})();
(function(){var m="value",l=" ",k="icon",j="model",h="text",g="qx.client",f="execute",e="source",d="mshtml",c="user.profile_image_url",O="showcase/databinding/twitter_logo_outline.png",N="Enter",M="one",L="http",K="keydown",J="http://twitter.com/statuses/user_timeline/1and1.json",I="Friends",H="<a href='",G="1and1",F="callback",t="selection[0]",u="username",r="showcase.page.databinding.Content",s="Location: ",p="Details",q="user.name",n="Name: ",o="target='_blank'",v="</a>",w="Posted with: ",z="' target='_blank'>",y="http://twitter.com/statuses/friends_timeline.json",B="Show",A="user.location",D=".json",C="http://twitter.com/statuses/user_timeline/",x="Avatar: ",E="Message: ";
qx.Class.define(r,{extend:showcase.AbstractContent,construct:function(S){showcase.AbstractContent.call(this,S);
this.setView(this._createView());
},members:{_createView:function(){var bi=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var be=new qx.ui.basic.Image(O);
bi.add(be,{left:10,top:15});
var Y=new qx.ui.form.List();
bi.add(Y,{left:10,top:135,bottom:5});
Y.set({selectionMode:M,width:300,maxHeight:400});
var bc=new qx.data.controller.List(null,Y);
bc.setDelegate(this);
bc.setLabelPath(h);
if(!qx.core.Variant.isSet(g,d)){bc.setIconPath(c);
}var V=J;
var bh=new qx.data.store.Jsonp(V,null,F);
bh.bind(j,bc,j);
var ba=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
ba.set({width:300});
var W=new qx.ui.form.Button(I);
ba.add(W);
W.addListener(f,function(){bh.setUrl(y);
},this);
ba.add(new qx.ui.core.Spacer(),{flex:1});
var T=new qx.ui.form.TextField(G);
T.setPlaceholder(u);
ba.add(T);
var bd=new qx.ui.form.Button(B);
ba.add(bd);
bd.addListener(f,function(){var P=C+T.getValue()+D;

if(bh.getUrl()==P){bh.reload();
}else{bh.setUrl(P);
}},this);
T.addListener(K,function(Q){if(Q.getKeyIdentifier()==N){bd.execute();
}},this);
bi.add(ba,{left:10,top:105});
var X=new qx.ui.groupbox.GroupBox(p);
bi.add(X,{left:320,top:116,bottom:5});
X.setWidth(270);
X.setHeight(220);
X.setAllowGrowY(false);
X.setLayout(new qx.ui.layout.Grid(5,5));
X.add(new qx.ui.basic.Label(n),{row:0,column:0});
X.add(new qx.ui.basic.Label(s),{row:1,column:0});
X.add(new qx.ui.basic.Label(E),{row:2,column:0});
X.add(new qx.ui.basic.Label(w),{row:3,column:0});
var name=new qx.ui.basic.Label();
X.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
X.add(location,{row:1,column:1});
var bf=new qx.ui.basic.Label();
bf.setRich(true);
bf.setWidth(150);
bf.setSelectable(true);
X.add(bf,{row:2,column:1});
var bg=new qx.ui.basic.Label();
bg.setRich(true);
X.add(bg,{row:3,column:1});
var U=new qx.data.controller.Object();
U.addTarget(name,m,q);
U.addTarget(location,m,A);
U.addTarget(bf,m,h,false,{converter:function(a){var b=a.split(l);

for(var i=b.length-1;i>=0;i--){if(b[i].indexOf(L)==0){b[i]=H+b[i]+z+b[i]+v;
}}return b.join(l);
}});
U.addTarget(bg,m,e,false,{converter:function(bj){bj=bj.split(l);
bj.splice(1,0,o);
return bj.join(l);
}});

if(!qx.core.Variant.isSet(g,d)){X.add(new qx.ui.basic.Label(x),{row:4,column:0});
var bb=new qx.ui.basic.Image();
X.add(bb,{row:4,column:1});
U.addTarget(bb,e,c);
}bc.bind(t,U,j);
return bi;
},configureItem:function(R){R.setRich(true);
R.getChildControl(k).setWidth(48);
R.getChildControl(k).setHeight(48);
R.getChildControl(k).setScale(true);
}}});
})();
(function(){var bk="failed",bj="completed",bi="=",bh="aborted",bg="",bf="sending",be="&",bd="configured",bc="timeout",bb="application/xml",bG="qx.io.remote.transport.XmlHttp",bF="application/json",bE="text/html",bD="qx.client",bC="receiving",bB="text/plain",bA="text/javascript",bz="?",by="created",bx="Boolean",br='Referer',bs='Basic ',bp="\n</pre>",bq="string",bn='Authorization',bo="<pre>Could not execute json: \n",bl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bm=':',bt="parseerror",bu="file:",bw="webkit",bv="object";
qx.Class.define(bG,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bB,bA,bF,bb,bE]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bD,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:bx,init:true}},members:{__ra:false,__rb:0,__rc:null,getRequest:function(){if(this.__rc===null){this.__rc=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__rc.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__rc;
},send:function(){this.__rb=0;
var g=this.getRequest();
var b=this.getMethod();
var k=this.getAsynchronous();
var j=this.getUrl();
var d=(window.location.protocol===bu&&!(/^http(s){0,1}\:/.test(j)));
this.__ra=d;
var o=this.getParameters(false);
var m=[];

for(var c in o){var h=o[c];

if(h instanceof Array){for(var i=0;i<h.length;i++){m.push(encodeURIComponent(c)+bi+encodeURIComponent(h[i]));
}}else{m.push(encodeURIComponent(c)+bi+encodeURIComponent(h));
}}
if(m.length>0){j+=(j.indexOf(bz)>=0?be:bz)+m.join(be);
}if(this.getData()===null){var o=this.getParameters(true);
var m=[];

for(var c in o){var h=o[c];

if(h instanceof Array){for(var i=0;i<h.length;i++){m.push(encodeURIComponent(c)+bi+encodeURIComponent(h[i]));
}}else{m.push(encodeURIComponent(c)+bi+encodeURIComponent(h));
}}
if(m.length>0){this.setData(m.join(be));
}}var n=function(J){var O=bl;
var S=bg;
var M,L,K;
var P,Q,R,N;
var i=0;

do{M=J.charCodeAt(i++);
L=J.charCodeAt(i++);
K=J.charCodeAt(i++);
P=M>>2;
Q=((M&3)<<4)|(L>>4);
R=((L&15)<<2)|(K>>6);
N=K&63;

if(isNaN(L)){R=N=64;
}else if(isNaN(K)){N=64;
}S+=O.charAt(P)+O.charAt(Q)+O.charAt(R)+O.charAt(N);
}while(i<J.length);
return S;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){g.open(b,j,k);
g.setRequestHeader(bn,bs+n(this.getUsername()+bm+this.getPassword()));
}else{g.open(b,j,k,this.getUsername(),this.getPassword());
}}else{g.open(b,j,k);
}}catch(V){this.error("Failed with exception: "+V);
this.failed();
return;
}if(!qx.core.Variant.isSet(bD,bw)){g.setRequestHeader(br,window.location.href);
}var f=this.getRequestHeaders();

for(var c in f){g.setRequestHeader(c,f[c]);
}try{{};
g.send(this.getData());
}catch(u){if(d){this.failedLocally();
}else{this.error("Failed to send data: "+u,"send");
this.failed();
}return;
}if(!k){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===bk){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case bj:case bh:case bk:case bc:{};
return;
}var W=this.getReadyState();

if(W==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),W,this.__ra)){if(this.getState()===bd){this.setState(bf);
}this.failed();
return;
}}while(this.__rb<W){this.setState(qx.io.remote.Exchange._nativeMap[++this.__rb]);
}}),getReadyState:function(){var E=null;

try{E=this.getRequest().readyState;
}catch(p){}return E;
},setRequestHeader:function(bO,bP){this.getRequestHeaders()[bO]=bP;
},getResponseHeader:function(v){var w=null;

try{w=this.getRequest().getResponseHeader(v)||null;
}catch(B){}return w;
},getStringResponseHeaders:function(){var y=null;

try{var x=this.getRequest().getAllResponseHeaders();

if(x){y=x;
}}catch(F){}return y;
},getResponseHeaders:function(){var bM=this.getStringResponseHeaders();
var bN={};

if(bM){var bK=bM.split(/[\r\n]+/g);

for(var i=0,l=bK.length;i<l;i++){var bL=bK[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bL){bN[bL[1]]=bL[2];
}}}return bN;
},getStatusCode:function(){var A=-1;

try{A=this.getRequest().status;
}catch(X){}return A;
},getStatusText:function(){var bH=bg;

try{bH=this.getRequest().statusText;
}catch(Y){}return bH;
},getResponseText:function(){var a=null;

try{a=this.getRequest().responseText;
}catch(ba){a=null;
}return a;
},getResponseXml:function(){var I=null;
var G=this.getStatusCode();
var H=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(G,H,this.__ra)){try{I=this.getRequest().responseXML;
}catch(U){}}if(typeof I==bv&&I!=null){if(!I.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,bg);
I.loadXML(s);
}if(!I.documentElement){throw new Error("Missing Document Element!");
}
if(I.documentElement.tagName==bt){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return I;
},getFetchedLength:function(){var bI=this.getResponseText();
return typeof bI==bq?bI.length:0;
},getResponseContent:function(){var q=this.getState();

if(q!==bj&&q!=bk){{};
return null;
}{};
var t=this.getResponseText();

if(q==bk){{};
return t;
}
switch(this.getResponseType()){case bB:case bE:{};
return t;
case bF:{};

try{if(t&&t.length>0){var r;

if(this.getParseJson()){r=qx.util.Json.parse(t,false);
r=(r===0?0:(r||null));
}else{r=t;
}return r;
}else{return null;
}}catch(z){this.error("Could not execute json: ["+t+"]",z);
return bo+t+bp;
}case bA:{};

try{if(t&&t.length>0){var r=window.eval(t);
return (r===0?0:(r||null));
}else{return null;
}}catch(bJ){this.error("Could not execute javascript: ["+t+"]",bJ);
return null;
}case bb:t=this.getResponseXml();
{};
return (t===0?0:(t||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(C,D){{};

switch(C){case by:this.fireEvent(by);
break;
case bd:this.fireEvent(bd);
break;
case bf:this.fireEvent(bf);
break;
case bC:this.fireEvent(bC);
break;
case bj:this.fireEvent(bj);
break;
case bk:this.fireEvent(bk);
break;
case bh:this.getRequest().abort();
this.fireEvent(bh);
break;
case bc:this.getRequest().abort();
this.fireEvent(bc);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bG);
},destruct:function(){var T=this.getRequest();

if(T){T.onreadystatechange=qx.lang.Function.empty;
switch(T.readyState){case 1:case 2:case 3:T.abort();
}}this.__rc=null;
}});
})();
(function(){var K="Boolean",J="qx.event.type.Event",I="queued",H="String",G="sending",F="receiving",E="aborted",D="failed",C="nocache",B="completed",bp="qx.io.remote.Response",bo="POST",bn="configured",bm="timeout",bl="GET",bk="Pragma",bj="no-url-params-on-post",bi="PUT",bh="no-cache",bg="Cache-Control",R="Content-Type",S="text/plain",P="application/xml",Q="application/json",N="text/html",O="application/x-www-form-urlencoded",L="qx.io.remote.Exchange",M="Integer",T="X-Qooxdoo-Response-Type",U="HEAD",X="qx.io.remote.Request",W="_applyResponseType",ba="_applyState",Y="text/javascript",bc="changeState",bb="_applyProhibitCaching",V="",bf="_applyMethod",be="DELETE",bd="boolean";
qx.Class.define(X,{extend:qx.core.Object,construct:function(y,z,A){qx.core.Object.call(this);
this.__qG={};
this.__qH={};
this.__qI={};
this.__qJ={};

if(y!==undefined){this.setUrl(y);
}
if(z!==undefined){this.setMethod(z);
}
if(A!==undefined){this.setResponseType(A);
}this.setProhibitCaching(true);
this.__qK=++qx.io.remote.Request.__qK;
},events:{"created":J,"configured":J,"sending":J,"receiving":J,"completed":bp,"aborted":J,"failed":bp,"timeout":bp},statics:{__qK:0,methodAllowsRequestBody:function(f){return (f==bo)||(f==bi);
}},properties:{url:{check:H,init:V},method:{check:[bl,bo,bi,U,be],apply:bf,init:bl},asynchronous:{check:K,init:true},data:{check:H,nullable:true},username:{check:H,nullable:true},password:{check:H,nullable:true},state:{check:[bn,I,G,F,B,E,bm,D],init:bn,apply:ba,event:bc},responseType:{check:[S,Y,Q,P,N],init:S,apply:W},timeout:{check:M,nullable:true},prohibitCaching:{check:function(v){return typeof v==bd||v===bj;
},init:true,apply:bb},crossDomain:{check:K,init:false},fileUpload:{check:K,init:false},transport:{check:L,nullable:true},useBasicHttpAuth:{check:K,init:false},parseJson:{check:K,init:true}},members:{__qG:null,__qH:null,__qI:null,__qJ:null,__qK:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case G:case F:this.error("Aborting already sent request!");
case I:this.abort();
break;
}},isConfigured:function(){return this.getState()===bn;
},isQueued:function(){return this.getState()===I;
},isSending:function(){return this.getState()===G;
},isReceiving:function(){return this.getState()===F;
},isCompleted:function(){return this.getState()===B;
},isAborted:function(){return this.getState()===E;
},isTimeout:function(){return this.getState()===bm;
},isFailed:function(){return this.getState()===D;
},__qL:function(e){var h=e.clone();
h.setTarget(this);
this.dispatchEvent(h);
},_onqueued:function(e){this.setState(I);
this.__qL(e);
},_onsending:function(e){this.setState(G);
this.__qL(e);
},_onreceiving:function(e){this.setState(F);
this.__qL(e);
},_oncompleted:function(e){this.setState(B);
this.__qL(e);
this.dispose();
},_onaborted:function(e){this.setState(E);
this.__qL(e);
this.dispose();
},_ontimeout:function(e){this.setState(bm);
this.__qL(e);
this.dispose();
},_onfailed:function(e){this.setState(D);
this.__qL(e);
this.dispose();
},_applyState:function(c,d){{};
},_applyProhibitCaching:function(r,s){if(!r){this.removeParameter(C);
this.removeRequestHeader(bk);
this.removeRequestHeader(bg);
return;
}if(r!==bj||this.getMethod()!=bo){this.setParameter(C,new Date().valueOf());
}else{this.removeParameter(C);
}this.setRequestHeader(bk,bh);
this.setRequestHeader(bg,bh);
},_applyMethod:function(o,p){if(qx.io.remote.Request.methodAllowsRequestBody(o)){this.setRequestHeader(R,O);
}else{this.removeRequestHeader(R);
}var q=this.getProhibitCaching();
this._applyProhibitCaching(q,q);
},_applyResponseType:function(w,x){this.setRequestHeader(T,w);
},setRequestHeader:function(t,u){this.__qG[t]=u;
},removeRequestHeader:function(bq){delete this.__qG[bq];
},getRequestHeader:function(i){return this.__qG[i]||null;
},getRequestHeaders:function(){return this.__qG;
},setParameter:function(br,bs,bt){if(bt){this.__qI[br]=bs;
}else{this.__qH[br]=bs;
}},removeParameter:function(m,n){if(n){delete this.__qI[m];
}else{delete this.__qH[m];
}},getParameter:function(a,b){if(b){return this.__qI[a]||null;
}else{return this.__qH[a]||null;
}},getParameters:function(j){return (j?this.__qI:this.__qH);
},setFormField:function(k,l){this.__qJ[k]=l;
},removeFormField:function(bu){delete this.__qJ[bu];
},getFormField:function(g){return this.__qJ[g]||null;
},getFormFields:function(){return this.__qJ;
},getSequenceNumber:function(){return this.__qK;
}},destruct:function(){this.setTransport(null);
this.__qG=this.__qH=this.__qI=this.__qJ=null;
}});
})();
(function(){var l="[",k="changeModel",j="qx.core.Object",h="qx.data.controller.Object",g="get",f="reset",e="_applyModel",d="last";
qx.Class.define(h,{extend:qx.core.Object,construct:function(w){qx.core.Object.call(this);
this.__vU={};
this.__vV=[];

if(w!=null){this.setModel(w);
}},properties:{model:{check:j,event:k,apply:e,nullable:true}},members:{__vV:null,__vU:null,_applyModel:function(m,n){for(var i=0;i<this.__vV.length;i++){var v=this.__vV[i][0];
var s=this.__vV[i][1];
var q=this.__vV[i][2];
var t=this.__vV[i][3];
var u=this.__vV[i][4];
var p=this.__vV[i][5];
if(n!=undefined){this.__vX(v,s,q,n);
}if(m!=undefined){this.__vW(v,s,q,t,u,p);
}else{if(s.indexOf(l)==-1){v[f+qx.lang.String.firstUp(s)]();
}else{var open=s.indexOf(l);
var o=parseInt(s.substring(open+1,s.length-1));
s=s.substring(0,open);
var r=v[g+qx.lang.String.firstUp(s)]();

if(o==d){o=r.length;
}
if(r){r.setItem(o,null);
}}}}},addTarget:function(G,H,I,J,K,L){this.__vV.push([G,H,I,J,K,L]);
this.__vW(G,H,I,J,K,L);
},__vW:function(x,y,z,A,B,C){if(this.getModel()==null){return;
}var D=this.getModel().bind(z,x,y,B);
var E=null;

if(A){E=x.bind(y,this.getModel(),z,C);
}var F=x.toHashCode();

if(this.__vU[F]==undefined){this.__vU[F]=[];
}this.__vU[F].push([D,E,y,z,B,C]);
},removeTarget:function(a,b,c){this.__vX(a,b,c,this.getModel());
for(var i=0;i<this.__vV.length;i++){if(this.__vV[i][0]==a&&this.__vV[i][1]==b&&this.__vV[i][2]==c){this.__vV.splice(i,1);
}}},__vX:function(M,N,O,P){if(!(M instanceof qx.core.Object)){return ;
}var Q=this.__vU[M.toHashCode()];
if(Q==undefined||Q.length==0){return;
}for(var i=0;i<Q.length;i++){if(Q[i][2]==N&&Q[i][3]==O){var R=Q[i][0];
P.removeBinding(R);
if(Q[i][1]!=null){M.removeBinding(Q[i][1]);
}Q.splice(i,1);
return;
}}}},destruct:function(){if(this.getModel()!=null&&!this.getModel().isDisposed()){this.setModel(null);
}}});
})();

});