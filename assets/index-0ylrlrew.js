(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))s(E);new MutationObserver(E=>{for(const D of E)if(D.type==="childList")for(const X of D.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&s(X)}).observe(document,{childList:!0,subtree:!0});function w(E){const D={};return E.integrity&&(D.integrity=E.integrity),E.referrerPolicy&&(D.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?D.credentials="include":E.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function s(E){if(E.ep)return;E.ep=!0;const D=w(E);fetch(E.href,D)}})();var su={exports:{}},Nn={};var yd;function ig(){if(yd)return Nn;yd=1;var b=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function w(s,E,D){var X=null;if(D!==void 0&&(X=""+D),E.key!==void 0&&(X=""+E.key),"key"in E){D={};for(var re in E)re!=="key"&&(D[re]=E[re])}else D=E;return E=D.ref,{$$typeof:b,type:s,key:X,ref:E!==void 0?E:null,props:D}}return Nn.Fragment=A,Nn.jsx=w,Nn.jsxs=w,Nn}var jd;function cg(){return jd||(jd=1,su.exports=ig()),su.exports}var c=cg(),fu={exports:{}},q={};var Sd;function og(){if(Sd)return q;Sd=1;var b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),X=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),se=Symbol.iterator;function ke(d){return d===null||typeof d!="object"?null:(d=se&&d[se]||d["@@iterator"],typeof d=="function"?d:null)}var Re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,xt={};function I(d,z,C){this.props=d,this.context=z,this.refs=xt,this.updater=C||Re}I.prototype.isReactComponent={},I.prototype.setState=function(d,z){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,z,"setState")},I.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function pe(){}pe.prototype=I.prototype;function Se(d,z,C){this.props=d,this.context=z,this.refs=xt,this.updater=C||Re}var Ge=Se.prototype=new pe;Ge.constructor=Se,Me(Ge,I.prototype),Ge.isPureReactComponent=!0;var zt=Array.isArray;function Qe(){}var F={H:null,A:null,T:null,S:null},Xe=Object.prototype.hasOwnProperty;function wt(d,z,C){var _=C.ref;return{$$typeof:b,type:d,key:z,ref:_!==void 0?_:null,props:C}}function Ql(d,z){return wt(d.type,z,d.props)}function At(d){return typeof d=="object"&&d!==null&&d.$$typeof===b}function Ze(d){var z={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(C){return z[C]})}var Sl=/\/+/g;function Dt(d,z){return typeof d=="object"&&d!==null&&d.key!=null?Ze(""+d.key):z.toString(36)}function yt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Qe,Qe):(d.status="pending",d.then(function(z){d.status==="pending"&&(d.status="fulfilled",d.value=z)},function(z){d.status==="pending"&&(d.status="rejected",d.reason=z)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function y(d,z,C,_,Y){var Z=typeof d;(Z==="undefined"||Z==="boolean")&&(d=null);var le=!1;if(d===null)le=!0;else switch(Z){case"bigint":case"string":case"number":le=!0;break;case"object":switch(d.$$typeof){case b:case A:le=!0;break;case Q:return le=d._init,y(le(d._payload),z,C,_,Y)}}if(le)return Y=Y(d),le=_===""?"."+Dt(d,0):_,zt(Y)?(C="",le!=null&&(C=le.replace(Sl,"$&/")+"/"),y(Y,z,C,"",function(Ma){return Ma})):Y!=null&&(At(Y)&&(Y=Ql(Y,C+(Y.key==null||d&&d.key===Y.key?"":(""+Y.key).replace(Sl,"$&/")+"/")+le)),z.push(Y)),1;le=0;var Ye=_===""?".":_+":";if(zt(d))for(var xe=0;xe<d.length;xe++)_=d[xe],Z=Ye+Dt(_,xe),le+=y(_,z,C,Z,Y);else if(xe=ke(d),typeof xe=="function")for(d=xe.call(d),xe=0;!(_=d.next()).done;)_=_.value,Z=Ye+Dt(_,xe++),le+=y(_,z,C,Z,Y);else if(Z==="object"){if(typeof d.then=="function")return y(yt(d),z,C,_,Y);throw z=String(d),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return le}function M(d,z,C){if(d==null)return d;var _=[],Y=0;return y(d,_,"","",function(Z){return z.call(C,Z,Y++)}),_}function R(d){if(d._status===-1){var z=d._result;z=z(),z.then(function(C){(d._status===0||d._status===-1)&&(d._status=1,d._result=C)},function(C){(d._status===0||d._status===-1)&&(d._status=2,d._result=C)}),d._status===-1&&(d._status=0,d._result=z)}if(d._status===1)return d._result.default;throw d._result}var ie=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},fe={map:M,forEach:function(d,z,C){M(d,function(){z.apply(this,arguments)},C)},count:function(d){var z=0;return M(d,function(){z++}),z},toArray:function(d){return M(d,function(z){return z})||[]},only:function(d){if(!At(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return q.Activity=k,q.Children=fe,q.Component=I,q.Fragment=w,q.Profiler=E,q.PureComponent=Se,q.StrictMode=s,q.Suspense=T,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,q.__COMPILER_RUNTIME={__proto__:null,c:function(d){return F.H.useMemoCache(d)}},q.cache=function(d){return function(){return d.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(d,z,C){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var _=Me({},d.props),Y=d.key;if(z!=null)for(Z in z.key!==void 0&&(Y=""+z.key),z)!Xe.call(z,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&z.ref===void 0||(_[Z]=z[Z]);var Z=arguments.length-2;if(Z===1)_.children=C;else if(1<Z){for(var le=Array(Z),Ye=0;Ye<Z;Ye++)le[Ye]=arguments[Ye+2];_.children=le}return wt(d.type,Y,_)},q.createContext=function(d){return d={$$typeof:X,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:D,_context:d},d},q.createElement=function(d,z,C){var _,Y={},Z=null;if(z!=null)for(_ in z.key!==void 0&&(Z=""+z.key),z)Xe.call(z,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(Y[_]=z[_]);var le=arguments.length-2;if(le===1)Y.children=C;else if(1<le){for(var Ye=Array(le),xe=0;xe<le;xe++)Ye[xe]=arguments[xe+2];Y.children=Ye}if(d&&d.defaultProps)for(_ in le=d.defaultProps,le)Y[_]===void 0&&(Y[_]=le[_]);return wt(d,Z,Y)},q.createRef=function(){return{current:null}},q.forwardRef=function(d){return{$$typeof:re,render:d}},q.isValidElement=At,q.lazy=function(d){return{$$typeof:Q,_payload:{_status:-1,_result:d},_init:R}},q.memo=function(d,z){return{$$typeof:N,type:d,compare:z===void 0?null:z}},q.startTransition=function(d){var z=F.T,C={};F.T=C;try{var _=d(),Y=F.S;Y!==null&&Y(C,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(Qe,ie)}catch(Z){ie(Z)}finally{z!==null&&C.types!==null&&(z.types=C.types),F.T=z}},q.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},q.use=function(d){return F.H.use(d)},q.useActionState=function(d,z,C){return F.H.useActionState(d,z,C)},q.useCallback=function(d,z){return F.H.useCallback(d,z)},q.useContext=function(d){return F.H.useContext(d)},q.useDebugValue=function(){},q.useDeferredValue=function(d,z){return F.H.useDeferredValue(d,z)},q.useEffect=function(d,z){return F.H.useEffect(d,z)},q.useEffectEvent=function(d){return F.H.useEffectEvent(d)},q.useId=function(){return F.H.useId()},q.useImperativeHandle=function(d,z,C){return F.H.useImperativeHandle(d,z,C)},q.useInsertionEffect=function(d,z){return F.H.useInsertionEffect(d,z)},q.useLayoutEffect=function(d,z){return F.H.useLayoutEffect(d,z)},q.useMemo=function(d,z){return F.H.useMemo(d,z)},q.useOptimistic=function(d,z){return F.H.useOptimistic(d,z)},q.useReducer=function(d,z,C){return F.H.useReducer(d,z,C)},q.useRef=function(d){return F.H.useRef(d)},q.useState=function(d){return F.H.useState(d)},q.useSyncExternalStore=function(d,z,C){return F.H.useSyncExternalStore(d,z,C)},q.useTransition=function(){return F.H.useTransition()},q.version="19.2.4",q}var Nd;function pu(){return Nd||(Nd=1,fu.exports=og()),fu.exports}var Ee=pu(),du={exports:{}},zn={},mu={exports:{}},hu={};var zd;function ug(){return zd||(zd=1,(function(b){function A(y,M){var R=y.length;y.push(M);e:for(;0<R;){var ie=R-1>>>1,fe=y[ie];if(0<E(fe,M))y[ie]=M,y[R]=fe,R=ie;else break e}}function w(y){return y.length===0?null:y[0]}function s(y){if(y.length===0)return null;var M=y[0],R=y.pop();if(R!==M){y[0]=R;e:for(var ie=0,fe=y.length,d=fe>>>1;ie<d;){var z=2*(ie+1)-1,C=y[z],_=z+1,Y=y[_];if(0>E(C,R))_<fe&&0>E(Y,C)?(y[ie]=Y,y[_]=R,ie=_):(y[ie]=C,y[z]=R,ie=z);else if(_<fe&&0>E(Y,R))y[ie]=Y,y[_]=R,ie=_;else break e}}return M}function E(y,M){var R=y.sortIndex-M.sortIndex;return R!==0?R:y.id-M.id}if(b.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;b.unstable_now=function(){return D.now()}}else{var X=Date,re=X.now();b.unstable_now=function(){return X.now()-re}}var T=[],N=[],Q=1,k=null,se=3,ke=!1,Re=!1,Me=!1,xt=!1,I=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,Se=typeof setImmediate<"u"?setImmediate:null;function Ge(y){for(var M=w(N);M!==null;){if(M.callback===null)s(N);else if(M.startTime<=y)s(N),M.sortIndex=M.expirationTime,A(T,M);else break;M=w(N)}}function zt(y){if(Me=!1,Ge(y),!Re)if(w(T)!==null)Re=!0,Qe||(Qe=!0,Ze());else{var M=w(N);M!==null&&yt(zt,M.startTime-y)}}var Qe=!1,F=-1,Xe=5,wt=-1;function Ql(){return xt?!0:!(b.unstable_now()-wt<Xe)}function At(){if(xt=!1,Qe){var y=b.unstable_now();wt=y;var M=!0;try{e:{Re=!1,Me&&(Me=!1,pe(F),F=-1),ke=!0;var R=se;try{t:{for(Ge(y),k=w(T);k!==null&&!(k.expirationTime>y&&Ql());){var ie=k.callback;if(typeof ie=="function"){k.callback=null,se=k.priorityLevel;var fe=ie(k.expirationTime<=y);if(y=b.unstable_now(),typeof fe=="function"){k.callback=fe,Ge(y),M=!0;break t}k===w(T)&&s(T),Ge(y)}else s(T);k=w(T)}if(k!==null)M=!0;else{var d=w(N);d!==null&&yt(zt,d.startTime-y),M=!1}}break e}finally{k=null,se=R,ke=!1}M=void 0}}finally{M?Ze():Qe=!1}}}var Ze;if(typeof Se=="function")Ze=function(){Se(At)};else if(typeof MessageChannel<"u"){var Sl=new MessageChannel,Dt=Sl.port2;Sl.port1.onmessage=At,Ze=function(){Dt.postMessage(null)}}else Ze=function(){I(At,0)};function yt(y,M){F=I(function(){y(b.unstable_now())},M)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(y){y.callback=null},b.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xe=0<y?Math.floor(1e3/y):5},b.unstable_getCurrentPriorityLevel=function(){return se},b.unstable_next=function(y){switch(se){case 1:case 2:case 3:var M=3;break;default:M=se}var R=se;se=M;try{return y()}finally{se=R}},b.unstable_requestPaint=function(){xt=!0},b.unstable_runWithPriority=function(y,M){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var R=se;se=y;try{return M()}finally{se=R}},b.unstable_scheduleCallback=function(y,M,R){var ie=b.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ie+R:ie):R=ie,y){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=R+fe,y={id:Q++,callback:M,priorityLevel:y,startTime:R,expirationTime:fe,sortIndex:-1},R>ie?(y.sortIndex=R,A(N,y),w(T)===null&&y===w(N)&&(Me?(pe(F),F=-1):Me=!0,yt(zt,R-ie))):(y.sortIndex=fe,A(T,y),Re||ke||(Re=!0,Qe||(Qe=!0,Ze()))),y},b.unstable_shouldYield=Ql,b.unstable_wrapCallback=function(y){var M=se;return function(){var R=se;se=M;try{return y.apply(this,arguments)}finally{se=R}}}})(hu)),hu}var wd;function rg(){return wd||(wd=1,mu.exports=ug()),mu.exports}var gu={exports:{}},qe={};var Ad;function sg(){if(Ad)return qe;Ad=1;var b=pu();function A(T){var N="https://react.dev/errors/"+T;if(1<arguments.length){N+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)N+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+T+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(){}var s={d:{f:w,r:function(){throw Error(A(522))},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},E=Symbol.for("react.portal");function D(T,N,Q){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:k==null?null:""+k,children:T,containerInfo:N,implementation:Q}}var X=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function re(T,N){if(T==="font")return"";if(typeof N=="string")return N==="use-credentials"?N:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qe.createPortal=function(T,N){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!N||N.nodeType!==1&&N.nodeType!==9&&N.nodeType!==11)throw Error(A(299));return D(T,N,null,Q)},qe.flushSync=function(T){var N=X.T,Q=s.p;try{if(X.T=null,s.p=2,T)return T()}finally{X.T=N,s.p=Q,s.d.f()}},qe.preconnect=function(T,N){typeof T=="string"&&(N?(N=N.crossOrigin,N=typeof N=="string"?N==="use-credentials"?N:"":void 0):N=null,s.d.C(T,N))},qe.prefetchDNS=function(T){typeof T=="string"&&s.d.D(T)},qe.preinit=function(T,N){if(typeof T=="string"&&N&&typeof N.as=="string"){var Q=N.as,k=re(Q,N.crossOrigin),se=typeof N.integrity=="string"?N.integrity:void 0,ke=typeof N.fetchPriority=="string"?N.fetchPriority:void 0;Q==="style"?s.d.S(T,typeof N.precedence=="string"?N.precedence:void 0,{crossOrigin:k,integrity:se,fetchPriority:ke}):Q==="script"&&s.d.X(T,{crossOrigin:k,integrity:se,fetchPriority:ke,nonce:typeof N.nonce=="string"?N.nonce:void 0})}},qe.preinitModule=function(T,N){if(typeof T=="string")if(typeof N=="object"&&N!==null){if(N.as==null||N.as==="script"){var Q=re(N.as,N.crossOrigin);s.d.M(T,{crossOrigin:Q,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0})}}else N==null&&s.d.M(T)},qe.preload=function(T,N){if(typeof T=="string"&&typeof N=="object"&&N!==null&&typeof N.as=="string"){var Q=N.as,k=re(Q,N.crossOrigin);s.d.L(T,Q,{crossOrigin:k,integrity:typeof N.integrity=="string"?N.integrity:void 0,nonce:typeof N.nonce=="string"?N.nonce:void 0,type:typeof N.type=="string"?N.type:void 0,fetchPriority:typeof N.fetchPriority=="string"?N.fetchPriority:void 0,referrerPolicy:typeof N.referrerPolicy=="string"?N.referrerPolicy:void 0,imageSrcSet:typeof N.imageSrcSet=="string"?N.imageSrcSet:void 0,imageSizes:typeof N.imageSizes=="string"?N.imageSizes:void 0,media:typeof N.media=="string"?N.media:void 0})}},qe.preloadModule=function(T,N){if(typeof T=="string")if(N){var Q=re(N.as,N.crossOrigin);s.d.m(T,{as:typeof N.as=="string"&&N.as!=="script"?N.as:void 0,crossOrigin:Q,integrity:typeof N.integrity=="string"?N.integrity:void 0})}else s.d.m(T)},qe.requestFormReset=function(T){s.d.r(T)},qe.unstable_batchedUpdates=function(T,N){return T(N)},qe.useFormState=function(T,N,Q){return X.H.useFormState(T,N,Q)},qe.useFormStatus=function(){return X.H.useHostTransitionStatus()},qe.version="19.2.4",qe}var Ed;function fg(){if(Ed)return gu.exports;Ed=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(A){console.error(A)}}return b(),gu.exports=sg(),gu.exports}var Td;function dg(){if(Td)return zn;Td=1;var b=rg(),A=pu(),w=fg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function D(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function X(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function re(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(D(e)!==e)throw Error(s(188))}function N(e){var t=e.alternate;if(!t){if(t=D(e),t===null)throw Error(s(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return T(n),e;if(i===a)return T(n),t;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var o=!1,u=n.child;u;){if(u===l){o=!0,l=n,a=i;break}if(u===a){o=!0,a=n,l=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===l){o=!0,l=i,a=n;break}if(u===a){o=!0,a=i,l=n;break}u=u.sibling}if(!o)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?e:t}function Q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Q(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,se=Symbol.for("react.element"),ke=Symbol.for("react.transitional.element"),Re=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),xt=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),Se=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),zt=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),Ql=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var Sl=Symbol.for("react.client.reference");function Dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case I:return"Profiler";case xt:return"StrictMode";case zt:return"Suspense";case Qe:return"SuspenseList";case wt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Re:return"Portal";case Se:return e.displayName||"Context";case pe:return(e._context.displayName||"Context")+".Consumer";case Ge:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Dt(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var yt=Array.isArray,y=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},ie=[],fe=-1;function d(e){return{current:e}}function z(e){0>fe||(e.current=ie[fe],ie[fe]=null,fe--)}function C(e,t){fe++,ie[fe]=e.current,e.current=t}var _=d(null),Y=d(null),Z=d(null),le=d(null);function Ye(e,t){switch(C(Z,t),C(Y,e),C(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qf(t),e=Xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(_),C(_,e)}function xe(){z(_),z(Y),z(Z)}function Ma(e){e.memoizedState!==null&&C(le,e);var t=_.current,l=Xf(t,e.type);t!==l&&(C(Y,e),C(_,l))}function En(e){Y.current===e&&(z(_),z(Y)),le.current===e&&(z(le),xn._currentValue=R)}var Zi,bu;function Nl(e){if(Zi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||"",bu=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+e+bu}var Vi=!1;function Ki(e,t){if(!e||Vi)return"";Vi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(v){var p=v}Reflect.construct(e,[],S)}else{try{S.call()}catch(v){p=v}e.call(S.prototype)}}else{try{throw Error()}catch(v){p=v}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var r=o.split(`
`),g=u.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===g.length)for(a=r.length-1,n=g.length-1;1<=a&&0<=n&&r[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==g[n]){var x=`
`+r[a].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=a&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Nl(l):""}function Hd(e,t){switch(e.tag){case 26:case 27:case 5:return Nl(e.type);case 16:return Nl("Lazy");case 13:return e.child!==t&&t!==null?Nl("Suspense Fallback"):Nl("Suspense");case 19:return Nl("SuspenseList");case 0:case 15:return Ki(e.type,!1);case 11:return Ki(e.type.render,!1);case 1:return Ki(e.type,!0);case 31:return Nl("Activity");default:return""}}function xu(e){try{var t="",l=null;do t+=Hd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ji=Object.prototype.hasOwnProperty,Wi=b.unstable_scheduleCallback,Fi=b.unstable_cancelCallback,kd=b.unstable_shouldYield,Rd=b.unstable_requestPaint,Pe=b.unstable_now,qd=b.unstable_getCurrentPriorityLevel,yu=b.unstable_ImmediatePriority,ju=b.unstable_UserBlockingPriority,Tn=b.unstable_NormalPriority,Yd=b.unstable_LowPriority,Su=b.unstable_IdlePriority,Ld=b.log,Gd=b.unstable_setDisableYieldValue,Ca=null,et=null;function $t(e){if(typeof Ld=="function"&&Gd(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(Ca,e)}catch{}}var tt=Math.clz32?Math.clz32:Zd,Qd=Math.log,Xd=Math.LN2;function Zd(e){return e>>>=0,e===0?32:31-(Qd(e)/Xd|0)|0}var Mn=256,Cn=262144,On=4194304;function zl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?n=zl(a):(o&=u,o!==0?n=zl(o):l||(l=u&~e,l!==0&&(n=zl(l))))):(u=a&~i,u!==0?n=zl(u):o!==0?n=zl(o):l||(l=a&~e,l!==0&&(n=zl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nu(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function $i(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kd(e,t,l,a,n,i){var o=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var u=e.entanglements,r=e.expirationTimes,g=e.hiddenUpdates;for(l=o&~l;0<l;){var x=31-tt(l),S=1<<x;u[x]=0,r[x]=-1;var p=g[x];if(p!==null)for(g[x]=null,x=0;x<p.length;x++){var v=p[x];v!==null&&(v.lane&=-536870913)}l&=~S}a!==0&&zu(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function zu(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-tt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function wu(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-tt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Au(e,t){var l=t&-t;return l=(l&42)!==0?1:Ii(l),(l&(e.suspendedLanes|t))!==0?0:l}function Ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Eu(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function Tu(e,t){var l=M.p;try{return M.p=e,t()}finally{M.p=l}}var It=Math.random().toString(36).slice(2),De="__reactFiber$"+It,Ve="__reactProps$"+It,Xl="__reactContainer$"+It,ec="__reactEvents$"+It,Jd="__reactListeners$"+It,Wd="__reactHandles$"+It,Mu="__reactResources$"+It,_a="__reactMarker$"+It;function tc(e){delete e[De],delete e[Ve],delete e[ec],delete e[Jd],delete e[Wd]}function Zl(e){var t=e[De];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Xl]||l[De]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=$f(e);e!==null;){if(l=e[De])return l;e=$f(e)}return t}e=l,l=e.parentNode}return null}function Vl(e){if(e=e[De]||e[Xl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ua(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Kl(e){var t=e[Mu];return t||(t=e[Mu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[_a]=!0}var Cu=new Set,Ou={};function wl(e,t){Jl(e,t),Jl(e+"Capture",t)}function Jl(e,t){for(Ou[e]=t,e=0;e<t.length;e++)Cu.add(t[e])}var Fd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},_u={};function $d(e){return Ji.call(_u,e)?!0:Ji.call(Du,e)?!1:Fd.test(e)?_u[e]=!0:(Du[e]=!0,!1)}function _n(e,t,l){if($d(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Un(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function _t(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Id(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lc(e){if(!e._valueTracker){var t=Uu(e)?"checked":"value";e._valueTracker=Id(e,t,""+e[t])}}function Bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Uu(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pd=/[\n"\\]/g;function st(e){return e.replace(Pd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ac(e,t,l,a,n,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rt(t)):e.value!==""+rt(t)&&(e.value=""+rt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?nc(e,o,rt(t)):l!=null?nc(e,o,rt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+rt(u):e.removeAttribute("name")}function Hu(e,t,l,a,n,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){lc(e);return}l=l!=null?""+rt(l):"",t=t!=null?""+rt(t):l,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),lc(e)}function nc(e,t,l){t==="number"&&Bn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Wl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+rt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ku(e,t,l){if(t!=null&&(t=""+rt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+rt(l):""}function Ru(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(s(92));if(yt(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=rt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),lc(e)}function Fl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||em.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Yu(e,t,l){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&qu(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&qu(e,i,t[i])}function ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(e){return lm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ut(){}var cc=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Il=null;function Lu(e){var t=Vl(e);if(t&&(e=t.stateNode)){var l=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(ac(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ve]||null;if(!n)throw Error(s(90));ac(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Bu(a)}break e;case"textarea":ku(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Wl(e,!!l.multiple,t,!1)}}}var uc=!1;function Gu(e,t,l){if(uc)return e(t,l);uc=!0;try{var a=e(t);return a}finally{if(uc=!1,($l!==null||Il!==null)&&(Ni(),$l&&(t=$l,e=Il,Il=$l=null,Lu(t),e)))for(t=0;t<e.length;t++)Lu(e[t])}}function Ba(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ve]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(s(231,t,typeof l));return l}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=!1;if(Bt)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{rc=!1}var Pt=null,sc=null,kn=null;function Qu(){if(kn)return kn;var e,t=sc,l=t.length,a,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var o=l-e;for(a=1;a<=o&&t[l-a]===n[i-a];a++);return kn=n.slice(e,1<a?1-a:void 0)}function Rn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Xu(){return!1}function Ke(e){function t(l,a,n,i,o){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(l=e[u],this[u]=l?l(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qn:Xu,this.isPropagationStopped=Xu,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Ke(Al),ka=k({},Al,{view:0,detail:0}),am=Ke(ka),fc,dc,Ra,Ln=k({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(fc=e.screenX-Ra.screenX,dc=e.screenY-Ra.screenY):dc=fc=0,Ra=e),fc)},movementY:function(e){return"movementY"in e?e.movementY:dc}}),Zu=Ke(Ln),nm=k({},Ln,{dataTransfer:0}),im=Ke(nm),cm=k({},ka,{relatedTarget:0}),mc=Ke(cm),om=k({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),um=Ke(om),rm=k({},Al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ke(rm),fm=k({},Al,{data:0}),Vu=Ke(fm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hm[e])?!!t[e]:!1}function hc(){return gm}var pm=k({},ka,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(e){return e.type==="keypress"?Rn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=Ke(pm),bm=k({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=Ke(bm),xm=k({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),ym=Ke(xm),jm=k({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=Ke(jm),Nm=k({},Ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=Ke(Nm),wm=k({},Al,{newState:0,oldState:0}),Am=Ke(wm),Em=[9,13,27,32],gc=Bt&&"CompositionEvent"in window,qa=null;Bt&&"documentMode"in document&&(qa=document.documentMode);var Tm=Bt&&"TextEvent"in window&&!qa,Ju=Bt&&(!gc||qa&&8<qa&&11>=qa),Wu=" ",Fu=!1;function $u(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function Mm(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Fu=!0,Wu);case"textInput":return e=t.data,e===Wu&&Fu?null:e;default:return null}}function Cm(e,t){if(Pl)return e==="compositionend"||!gc&&$u(e,t)?(e=Qu(),kn=sc=Pt=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Om[e.type]:t==="textarea"}function er(e,t,l,a){$l?Il?Il.push(a):Il=[a]:$l=a,t=Ci(t,"onChange"),0<t.length&&(l=new Yn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ya=null,La=null;function Dm(e){kf(e,0)}function Gn(e){var t=Ua(e);if(Bu(t))return e}function tr(e,t){if(e==="change")return t}var lr=!1;if(Bt){var pc;if(Bt){var vc="oninput"in document;if(!vc){var ar=document.createElement("div");ar.setAttribute("oninput","return;"),vc=typeof ar.oninput=="function"}pc=vc}else pc=!1;lr=pc&&(!document.documentMode||9<document.documentMode)}function nr(){Ya&&(Ya.detachEvent("onpropertychange",ir),La=Ya=null)}function ir(e){if(e.propertyName==="value"&&Gn(La)){var t=[];er(t,La,e,oc(e)),Gu(Dm,t)}}function _m(e,t,l){e==="focusin"?(nr(),Ya=t,La=l,Ya.attachEvent("onpropertychange",ir)):e==="focusout"&&nr()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gn(La)}function Bm(e,t){if(e==="click")return Gn(t)}function Hm(e,t){if(e==="input"||e==="change")return Gn(t)}function km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:km;function Ga(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ji.call(t,n)||!lt(e[n],t[n]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function or(e,t){var l=cr(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=cr(l)}}function ur(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ur(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Bn(e.document)}return t}function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rm=Bt&&"documentMode"in document&&11>=document.documentMode,ea=null,xc=null,Qa=null,yc=!1;function sr(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;yc||ea==null||ea!==Bn(a)||(a=ea,"selectionStart"in a&&bc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&Ga(Qa,a)||(Qa=a,a=Ci(xc,"onSelect"),0<a.length&&(t=new Yn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ea)))}function El(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ta={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionrun:El("Transition","TransitionRun"),transitionstart:El("Transition","TransitionStart"),transitioncancel:El("Transition","TransitionCancel"),transitionend:El("Transition","TransitionEnd")},jc={},fr={};Bt&&(fr=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Tl(e){if(jc[e])return jc[e];if(!ta[e])return e;var t=ta[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in fr)return jc[e]=t[l];return e}var dr=Tl("animationend"),mr=Tl("animationiteration"),hr=Tl("animationstart"),qm=Tl("transitionrun"),Ym=Tl("transitionstart"),Lm=Tl("transitioncancel"),gr=Tl("transitionend"),pr=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function jt(e,t){pr.set(e,t),wl(t,[e])}var Qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],la=0,Nc=0;function Xn(){for(var e=la,t=Nc=la=0;t<e;){var l=ft[t];ft[t++]=null;var a=ft[t];ft[t++]=null;var n=ft[t];ft[t++]=null;var i=ft[t];if(ft[t++]=null,a!==null&&n!==null){var o=a.pending;o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n}i!==0&&vr(l,n,i)}}function Zn(e,t,l,a){ft[la++]=e,ft[la++]=t,ft[la++]=l,ft[la++]=a,Nc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function zc(e,t,l,a){return Zn(e,t,l,a),Vn(e)}function Ml(e,t){return Zn(e,null,null,t),Vn(e)}function vr(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-tt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Vn(e){if(50<dn)throw dn=0,Uo=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Gm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,l,a){return new Gm(e,t,l,a)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var l=e.alternate;return l===null?(l=at(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function br(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kn(e,t,l,a,n,i){var o=0;if(a=e,typeof e=="function")wc(e)&&(o=1);else if(typeof e=="string")o=Kh(e,l,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case wt:return e=at(31,l,t,n),e.elementType=wt,e.lanes=i,e;case Me:return Cl(l.children,n,i,t);case xt:o=8,n|=24;break;case I:return e=at(12,l,t,n|2),e.elementType=I,e.lanes=i,e;case zt:return e=at(13,l,t,n),e.elementType=zt,e.lanes=i,e;case Qe:return e=at(19,l,t,n),e.elementType=Qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:o=10;break e;case pe:o=9;break e;case Ge:o=11;break e;case F:o=14;break e;case Xe:o=16,a=null;break e}o=29,l=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=at(o,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Cl(e,t,l,a){return e=at(7,e,a,t),e.lanes=l,e}function Ac(e,t,l){return e=at(6,e,null,t),e.lanes=l,e}function xr(e){var t=at(18,null,null,0);return t.stateNode=e,t}function Ec(e,t,l){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yr=new WeakMap;function dt(e,t){if(typeof e=="object"&&e!==null){var l=yr.get(e);return l!==void 0?l:(t={value:e,source:t,stack:xu(t)},yr.set(e,t),t)}return{value:e,source:t,stack:xu(t)}}var na=[],ia=0,Jn=null,Xa=0,mt=[],ht=0,el=null,Et=1,Tt="";function kt(e,t){na[ia++]=Xa,na[ia++]=Jn,Jn=e,Xa=t}function jr(e,t,l){mt[ht++]=Et,mt[ht++]=Tt,mt[ht++]=el,el=e;var a=Et;e=Tt;var n=32-tt(a)-1;a&=~(1<<n),l+=1;var i=32-tt(t)+n;if(30<i){var o=n-n%5;i=(a&(1<<o)-1).toString(32),a>>=o,n-=o,Et=1<<32-tt(t)+n|l<<n|a,Tt=i+e}else Et=1<<i|l<<n|a,Tt=e}function Tc(e){e.return!==null&&(kt(e,1),jr(e,1,0))}function Mc(e){for(;e===Jn;)Jn=na[--ia],na[ia]=null,Xa=na[--ia],na[ia]=null;for(;e===el;)el=mt[--ht],mt[ht]=null,Tt=mt[--ht],mt[ht]=null,Et=mt[--ht],mt[ht]=null}function Sr(e,t){mt[ht++]=Et,mt[ht++]=Tt,mt[ht++]=el,Et=t.id,Tt=t.overflow,el=e}var _e=null,me=null,$=!1,tl=null,gt=!1,Cc=Error(s(519));function ll(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(dt(t,e)),Cc}function Nr(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[De]=e,t[Ve]=a,l){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(l=0;l<hn.length;l++)K(hn[l],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),Hu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),Ru(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Lf(t.textContent,l)?(a.popover!=null&&(K("beforetoggle",t),K("toggle",t)),a.onScroll!=null&&K("scroll",t),a.onScrollEnd!=null&&K("scrollend",t),a.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ll(e,!0)}function zr(e){for(_e=e.return;_e;)switch(_e.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:_e=_e.return}}function ca(e){if(e!==_e)return!1;if(!$)return zr(e),$=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Wo(e.type,e.memoizedProps)),l=!l),l&&me&&ll(e),zr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));me=Ff(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));me=Ff(e)}else t===27?(t=me,pl(e.type)?(e=eu,eu=null,me=e):me=t):me=_e?vt(e.stateNode.nextSibling):null;return!0}function Ol(){me=_e=null,$=!1}function Oc(){var e=tl;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),tl=null),e}function Za(e){tl===null?tl=[e]:tl.push(e)}var Dc=d(null),Dl=null,Rt=null;function al(e,t,l){C(Dc,t._currentValue),t._currentValue=l}function qt(e){e._currentValue=Dc.current,z(Dc)}function _c(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Uc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var r=0;r<t.length;r++)if(u.context===t[r]){i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),_c(i.return,l,e),a||(o=null);break e}i=u.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(s(341));o.lanes|=l,i=o.alternate,i!==null&&(i.lanes|=l),_c(o,l,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function oa(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var u=n.type;lt(n.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(n===le.current){if(o=n.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(xn):e=[xn])}n=n.return}e!==null&&Uc(t,e,l,a),t.flags|=262144}function Wn(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _l(e){Dl=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return wr(Dl,e)}function Fn(e,t){return Dl===null&&_l(e),wr(e,t)}function wr(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Rt===null){if(e===null)throw Error(s(308));Rt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rt=Rt.next=t;return l}var Qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Xm=b.unstable_scheduleCallback,Zm=b.unstable_NormalPriority,Ne={$$typeof:Se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new Qm,data:new Map,refCount:0}}function Va(e){e.refCount--,e.refCount===0&&Xm(Zm,function(){e.controller.abort()})}var Ka=null,Hc=0,ua=0,ra=null;function Vm(e,t){if(Ka===null){var l=Ka=[];Hc=0,ua=Yo(),ra={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Hc++,t.then(Ar,Ar),t}function Ar(){if(--Hc===0&&Ka!==null){ra!==null&&(ra.status="fulfilled");var e=Ka;Ka=null,ua=0,ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Km(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Er=y.S;y.S=function(e,t){ff=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vm(e,t),Er!==null&&Er(e,t)};var Ul=d(null);function kc(){var e=Ul.current;return e!==null?e:de.pooledCache}function $n(e,t){t===null?C(Ul,Ul.current):C(Ul,t.pool)}function Tr(){var e=kc();return e===null?null:{parent:Ne._currentValue,pool:e}}var sa=Error(s(460)),Rc=Error(s(474)),In=Error(s(542)),Pn={then:function(){}};function Mr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cr(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ut,Ut),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e}throw Hl=t,sa}}function Bl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Hl=l,sa):l}}var Hl=null;function Or(){if(Hl===null)throw Error(s(459));var e=Hl;return Hl=null,e}function Dr(e){if(e===sa||e===In)throw Error(s(483))}var fa=null,Ja=0;function ei(e){var t=Ja;return Ja+=1,fa===null&&(fa=[]),Cr(fa,e,t)}function Wa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ti(e,t){throw t.$$typeof===se?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _r(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function l(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function a(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function n(m,f){return m=Ht(m,f),m.index=0,m.sibling=null,m}function i(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=67108866,f):h):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function u(m,f,h,j){return f===null||f.tag!==6?(f=Ac(h,m.mode,j),f.return=m,f):(f=n(f,h),f.return=m,f)}function r(m,f,h,j){var B=h.type;return B===Me?x(m,f,h.props.children,j,h.key):f!==null&&(f.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Xe&&Bl(B)===f.type)?(f=n(f,h.props),Wa(f,h),f.return=m,f):(f=Kn(h.type,h.key,h.props,null,m.mode,j),Wa(f,h),f.return=m,f)}function g(m,f,h,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ec(h,m.mode,j),f.return=m,f):(f=n(f,h.children||[]),f.return=m,f)}function x(m,f,h,j,B){return f===null||f.tag!==7?(f=Cl(h,m.mode,j,B),f.return=m,f):(f=n(f,h),f.return=m,f)}function S(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ac(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ke:return h=Kn(f.type,f.key,f.props,null,m.mode,h),Wa(h,f),h.return=m,h;case Re:return f=Ec(f,m.mode,h),f.return=m,f;case Xe:return f=Bl(f),S(m,f,h)}if(yt(f)||Ze(f))return f=Cl(f,m.mode,h,null),f.return=m,f;if(typeof f.then=="function")return S(m,ei(f),h);if(f.$$typeof===Se)return S(m,Fn(m,f),h);ti(m,f)}return null}function p(m,f,h,j){var B=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return B!==null?null:u(m,f,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ke:return h.key===B?r(m,f,h,j):null;case Re:return h.key===B?g(m,f,h,j):null;case Xe:return h=Bl(h),p(m,f,h,j)}if(yt(h)||Ze(h))return B!==null?null:x(m,f,h,j,null);if(typeof h.then=="function")return p(m,f,ei(h),j);if(h.$$typeof===Se)return p(m,f,Fn(m,h),j);ti(m,h)}return null}function v(m,f,h,j,B){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(h)||null,u(f,m,""+j,B);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:return m=m.get(j.key===null?h:j.key)||null,r(f,m,j,B);case Re:return m=m.get(j.key===null?h:j.key)||null,g(f,m,j,B);case Xe:return j=Bl(j),v(m,f,h,j,B)}if(yt(j)||Ze(j))return m=m.get(h)||null,x(f,m,j,B,null);if(typeof j.then=="function")return v(m,f,h,ei(j),B);if(j.$$typeof===Se)return v(m,f,h,Fn(f,j),B);ti(f,j)}return null}function O(m,f,h,j){for(var B=null,P=null,U=f,G=f=0,W=null;U!==null&&G<h.length;G++){U.index>G?(W=U,U=null):W=U.sibling;var ee=p(m,U,h[G],j);if(ee===null){U===null&&(U=W);break}e&&U&&ee.alternate===null&&t(m,U),f=i(ee,f,G),P===null?B=ee:P.sibling=ee,P=ee,U=W}if(G===h.length)return l(m,U),$&&kt(m,G),B;if(U===null){for(;G<h.length;G++)U=S(m,h[G],j),U!==null&&(f=i(U,f,G),P===null?B=U:P.sibling=U,P=U);return $&&kt(m,G),B}for(U=a(U);G<h.length;G++)W=v(U,m,G,h[G],j),W!==null&&(e&&W.alternate!==null&&U.delete(W.key===null?G:W.key),f=i(W,f,G),P===null?B=W:P.sibling=W,P=W);return e&&U.forEach(function(jl){return t(m,jl)}),$&&kt(m,G),B}function H(m,f,h,j){if(h==null)throw Error(s(151));for(var B=null,P=null,U=f,G=f=0,W=null,ee=h.next();U!==null&&!ee.done;G++,ee=h.next()){U.index>G?(W=U,U=null):W=U.sibling;var jl=p(m,U,ee.value,j);if(jl===null){U===null&&(U=W);break}e&&U&&jl.alternate===null&&t(m,U),f=i(jl,f,G),P===null?B=jl:P.sibling=jl,P=jl,U=W}if(ee.done)return l(m,U),$&&kt(m,G),B;if(U===null){for(;!ee.done;G++,ee=h.next())ee=S(m,ee.value,j),ee!==null&&(f=i(ee,f,G),P===null?B=ee:P.sibling=ee,P=ee);return $&&kt(m,G),B}for(U=a(U);!ee.done;G++,ee=h.next())ee=v(U,m,G,ee.value,j),ee!==null&&(e&&ee.alternate!==null&&U.delete(ee.key===null?G:ee.key),f=i(ee,f,G),P===null?B=ee:P.sibling=ee,P=ee);return e&&U.forEach(function(ng){return t(m,ng)}),$&&kt(m,G),B}function ue(m,f,h,j){if(typeof h=="object"&&h!==null&&h.type===Me&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ke:e:{for(var B=h.key;f!==null;){if(f.key===B){if(B=h.type,B===Me){if(f.tag===7){l(m,f.sibling),j=n(f,h.props.children),j.return=m,m=j;break e}}else if(f.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Xe&&Bl(B)===f.type){l(m,f.sibling),j=n(f,h.props),Wa(j,h),j.return=m,m=j;break e}l(m,f);break}else t(m,f);f=f.sibling}h.type===Me?(j=Cl(h.props.children,m.mode,j,h.key),j.return=m,m=j):(j=Kn(h.type,h.key,h.props,null,m.mode,j),Wa(j,h),j.return=m,m=j)}return o(m);case Re:e:{for(B=h.key;f!==null;){if(f.key===B)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){l(m,f.sibling),j=n(f,h.children||[]),j.return=m,m=j;break e}else{l(m,f);break}else t(m,f);f=f.sibling}j=Ec(h,m.mode,j),j.return=m,m=j}return o(m);case Xe:return h=Bl(h),ue(m,f,h,j)}if(yt(h))return O(m,f,h,j);if(Ze(h)){if(B=Ze(h),typeof B!="function")throw Error(s(150));return h=B.call(h),H(m,f,h,j)}if(typeof h.then=="function")return ue(m,f,ei(h),j);if(h.$$typeof===Se)return ue(m,f,Fn(m,h),j);ti(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(l(m,f.sibling),j=n(f,h),j.return=m,m=j):(l(m,f),j=Ac(h,m.mode,j),j.return=m,m=j),o(m)):l(m,f)}return function(m,f,h,j){try{Ja=0;var B=ue(m,f,h,j);return fa=null,B}catch(U){if(U===sa||U===In)throw U;var P=at(29,U,null,m.mode);return P.lanes=j,P.return=m,P}}}var kl=_r(!0),Ur=_r(!1),nl=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function il(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(te&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Vn(e),vr(e,null,l),t}return Zn(e,a,t,l),Vn(e)}function Fa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,wu(e,l)}}function Lc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var o={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Gc=!1;function $a(){if(Gc){var e=ra;if(e!==null)throw e}}function Ia(e,t,l,a){Gc=!1;var n=e.updateQueue;nl=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var r=u,g=r.next;r.next=null,o===null?i=g:o.next=g,o=r;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==o&&(u===null?x.firstBaseUpdate=g:u.next=g,x.lastBaseUpdate=r))}if(i!==null){var S=n.baseState;o=0,x=g=r=null,u=i;do{var p=u.lane&-536870913,v=p!==u.lane;if(v?(J&p)===p:(a&p)===p){p!==0&&p===ua&&(Gc=!0),x!==null&&(x=x.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var O=e,H=u;p=t;var ue=l;switch(H.tag){case 1:if(O=H.payload,typeof O=="function"){S=O.call(ue,S,p);break e}S=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=H.payload,p=typeof O=="function"?O.call(ue,S,p):O,p==null)break e;S=k({},S,p);break e;case 2:nl=!0}}p=u.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[p]:v.push(p))}else v={lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(g=x=v,r=S):x=x.next=v,o|=p;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;v=u,u=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);x===null&&(r=S),n.baseState=r,n.firstBaseUpdate=g,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),fl|=o,e.lanes=o,e.memoizedState=S}}function Br(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Hr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Br(l[e],t)}var da=d(null),li=d(0);function kr(e,t){e=Jt,C(li,e),C(da,t),Jt=e|t.baseLanes}function Qc(){C(li,Jt),C(da,da.current)}function Xc(){Jt=li.current,z(da),z(li)}var nt=d(null),pt=null;function ol(e){var t=e.alternate;C(ye,ye.current&1),C(nt,e),pt===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(pt=e)}function Zc(e){C(ye,ye.current),C(nt,e),pt===null&&(pt=e)}function Rr(e){e.tag===22?(C(ye,ye.current),C(nt,e),pt===null&&(pt=e)):ul()}function ul(){C(ye,ye.current),C(nt,nt.current)}function it(e){z(nt),pt===e&&(pt=null),z(ye)}var ye=d(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Io(l)||Po(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,L=null,ce=null,ze=null,ni=!1,ma=!1,Rl=!1,ii=0,Pa=0,ha=null,Jm=0;function ve(){throw Error(s(321))}function Vc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!lt(e[l],t[l]))return!1;return!0}function Kc(e,t,l,a,n,i){return Yt=i,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?js:uo,Rl=!1,i=l(a,n),Rl=!1,ma&&(i=Yr(t,l,a,n)),qr(e),i}function qr(e){y.H=ln;var t=ce!==null&&ce.next!==null;if(Yt=0,ze=ce=L=null,ni=!1,Pa=0,ha=null,t)throw Error(s(300));e===null||we||(e=e.dependencies,e!==null&&Wn(e)&&(we=!0))}function Yr(e,t,l,a){L=e;var n=0;do{if(ma&&(ha=null),Pa=0,ma=!1,25<=n)throw Error(s(301));if(n+=1,ze=ce=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=Ss,i=t(l,a)}while(ma);return i}function Wm(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?en(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(L.flags|=1024),t}function Jc(){var e=ii!==0;return ii=0,e}function Wc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Fc(e){if(ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ni=!1}Yt=0,ze=ce=L=null,ma=!1,Pa=ii=0,ha=null}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?L.memoizedState=ze=e:ze=ze.next=e,ze}function je(){if(ce===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=ze===null?L.memoizedState:ze.next;if(t!==null)ze=t,ce=e;else{if(e===null)throw L.alternate===null?Error(s(467)):Error(s(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},ze===null?L.memoizedState=ze=e:ze=ze.next=e}return ze}function ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(e){var t=Pa;return Pa+=1,ha===null&&(ha=[]),e=Cr(ha,e,t),t=L,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?js:uo),e}function oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return en(e);if(e.$$typeof===Se)return Ue(e)}throw Error(s(438,String(e)))}function $c(e){var t=null,l=L.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=L.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ci(),L.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ql;return t.index++,l}function Lt(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=je();return Ic(t,ce,e)}function Ic(e,t,l){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=o=null,r=null,g=t,x=!1;do{var S=g.lane&-536870913;if(S!==g.lane?(J&S)===S:(Yt&S)===S){var p=g.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),S===ua&&(x=!0);else if((Yt&p)===p){g=g.next,p===ua&&(x=!0);continue}else S={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(u=r=S,o=i):r=r.next=S,L.lanes|=p,fl|=p;S=g.action,Rl&&l(i,S),i=g.hasEagerState?g.eagerState:l(i,S)}else p={lane:S,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(u=r=p,o=i):r=r.next=p,L.lanes|=S,fl|=S;g=g.next}while(g!==null&&g!==t);if(r===null?o=i:r.next=u,!lt(i,e.memoizedState)&&(we=!0,x&&(l=ra,l!==null)))throw l;e.memoizedState=i,e.baseState=o,e.baseQueue=r,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Pc(e){var t=je(),l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);lt(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Lr(e,t,l){var a=L,n=je(),i=$;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=t();var o=!lt((ce||n).memoizedState,l);if(o&&(n.memoizedState=l,we=!0),n=n.queue,lo(Xr.bind(null,a,n,e),[e]),n.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Qr.bind(null,a,n,l,t),null),de===null)throw Error(s(349));i||(Yt&127)!==0||Gr(a,t,l)}return l}function Gr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=L.updateQueue,t===null?(t=ci(),L.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Qr(e,t,l,a){t.value=l,t.getSnapshot=a,Zr(t)&&Vr(e)}function Xr(e,t,l){return l(function(){Zr(t)&&Vr(e)})}function Zr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!lt(e,l)}catch{return!0}}function Vr(e){var t=Ml(e,2);t!==null&&Ie(t,e,2)}function eo(e){var t=Le();if(typeof e=="function"){var l=e;if(e=l(),Rl){$t(!0);try{l()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Kr(e,t,l,a){return e.baseState=l,Ic(e,ce,typeof a=="function"?a:Lt)}function Fm(e,t,l,a,n){if(fi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};y.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Jr(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Jr(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=y.T,o={};y.T=o;try{var u=l(n,a),r=y.S;r!==null&&r(o,u),Wr(e,t,u)}catch(g){to(e,t,g)}finally{i!==null&&o.types!==null&&(i.types=o.types),y.T=i}}else try{i=l(n,a),Wr(e,t,i)}catch(g){to(e,t,g)}}function Wr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Fr(e,t,a)},function(a){return to(e,t,a)}):Fr(e,t,l)}function Fr(e,t,l){t.status="fulfilled",t.value=l,$r(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Jr(e,l)))}function to(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,$r(t),t=t.next;while(t!==a)}e.action=null}function $r(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ir(e,t){return t}function Pr(e,t){if($){var l=de.formState;if(l!==null){e:{var a=L;if($){if(me){t:{for(var n=me,i=gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=vt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){me=vt(n.nextSibling),a=n.data==="F!";break e}}ll(a)}a=!1}a&&(t=l[0])}}return l=Le(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:t},l.queue=a,l=bs.bind(null,L,a),a.dispatch=l,a=eo(!1),i=oo.bind(null,L,!1,a.queue),a=Le(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Fm.bind(null,L,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function es(e){var t=je();return ts(t,ce,e)}function ts(e,t,l){if(t=Ic(e,t,Ir)[0],e=ui(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=en(t)}catch(o){throw o===sa?In:o}else a=t;t=je();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(L.flags|=2048,ga(9,{destroy:void 0},$m.bind(null,n,l),null)),[a,i,e]}function $m(e,t){e.action=t}function ls(e){var t=je(),l=ce;if(l!==null)return ts(t,l,e);je(),t=t.memoizedState,l=je();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ga(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=L.updateQueue,t===null&&(t=ci(),L.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function as(){return je().memoizedState}function ri(e,t,l,a){var n=Le();L.flags|=e,n.memoizedState=ga(1|t,{destroy:void 0},l,a===void 0?null:a)}function si(e,t,l,a){var n=je();a=a===void 0?null:a;var i=n.memoizedState.inst;ce!==null&&a!==null&&Vc(a,ce.memoizedState.deps)?n.memoizedState=ga(t,i,l,a):(L.flags|=e,n.memoizedState=ga(1|t,i,l,a))}function ns(e,t){ri(8390656,8,e,t)}function lo(e,t){si(2048,8,e,t)}function Im(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=ci(),L.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function is(e){var t=je().memoizedState;return Im({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function cs(e,t){return si(4,2,e,t)}function os(e,t){return si(4,4,e,t)}function us(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rs(e,t,l){l=l!=null?l.concat([e]):null,si(4,4,us.bind(null,t,e),l)}function ao(){}function ss(e,t){var l=je();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Vc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function fs(e,t){var l=je();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Vc(t,a[1]))return a[0];if(a=e(),Rl){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a}function no(e,t,l){return l===void 0||(Yt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=mf(),L.lanes|=e,fl|=e,l)}function ds(e,t,l,a){return lt(l,t)?l:da.current!==null?(e=no(e,l,a),lt(e,t)||(we=!0),e):(Yt&42)===0||(Yt&1073741824)!==0&&(J&261930)===0?(we=!0,e.memoizedState=l):(e=mf(),L.lanes|=e,fl|=e,t)}function ms(e,t,l,a,n){var i=M.p;M.p=i!==0&&8>i?i:8;var o=y.T,u={};y.T=u,oo(e,!1,t,l);try{var r=n(),g=y.S;if(g!==null&&g(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=Km(r,a);tn(e,t,x,ut(e))}else tn(e,t,a,ut(e))}catch(S){tn(e,t,{then:function(){},status:"rejected",reason:S},ut())}finally{M.p=i,o!==null&&u.types!==null&&(o.types=u.types),y.T=o}}function Pm(){}function io(e,t,l,a){if(e.tag!==5)throw Error(s(476));var n=hs(e).queue;ms(e,n,t,R,l===null?Pm:function(){return gs(e),l(a)})}function hs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:R},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gs(e){var t=hs(e);t.next===null&&(t=e.alternate.memoizedState),tn(e,t.next.queue,{},ut())}function co(){return Ue(xn)}function ps(){return je().memoizedState}function vs(){return je().memoizedState}function eh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ut();e=il(l);var a=cl(t,e,l);a!==null&&(Ie(a,t,l),Fa(a,t,l)),t={cache:Bc()},e.payload=t;return}t=t.return}}function th(e,t,l){var a=ut();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(e)?xs(t,l):(l=zc(e,t,l,a),l!==null&&(Ie(l,e,a),ys(l,t,a)))}function bs(e,t,l){var a=ut();tn(e,t,l,a)}function tn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fi(e))xs(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,l);if(n.hasEagerState=!0,n.eagerState=u,lt(u,o))return Zn(e,t,n,0),de===null&&Xn(),!1}catch{}if(l=zc(e,t,n,a),l!==null)return Ie(l,e,a),ys(l,t,a),!0}return!1}function oo(e,t,l,a){if(a={lane:2,revertLane:Yo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(e)){if(t)throw Error(s(479))}else t=zc(e,l,a,2),t!==null&&Ie(t,e,2)}function fi(e){var t=e.alternate;return e===L||t!==null&&t===L}function xs(e,t){ma=ni=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function ys(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,wu(e,l)}}var ln={readContext:Ue,use:oi,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};ln.useEffectEvent=ve;var js={readContext:Ue,use:oi,useCallback:function(e,t){return Le().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:ns,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ri(4194308,4,us.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){ri(4,2,e,t)},useMemo:function(e,t){var l=Le();t=t===void 0?null:t;var a=e();if(Rl){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Le();if(l!==void 0){var n=l(t);if(Rl){$t(!0);try{l(t)}finally{$t(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=th.bind(null,L,e),[a.memoizedState,e]},useRef:function(e){var t=Le();return e={current:e},t.memoizedState=e},useState:function(e){e=eo(e);var t=e.queue,l=bs.bind(null,L,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:ao,useDeferredValue:function(e,t){var l=Le();return no(l,e,t)},useTransition:function(){var e=eo(!1);return e=ms.bind(null,L,e.queue,!0,!1),Le().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=L,n=Le();if($){if(l===void 0)throw Error(s(407));l=l()}else{if(l=t(),de===null)throw Error(s(349));(J&127)!==0||Gr(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,ns(Xr.bind(null,a,i,e),[e]),a.flags|=2048,ga(9,{destroy:void 0},Qr.bind(null,a,i,l,t),null),l},useId:function(){var e=Le(),t=de.identifierPrefix;if($){var l=Tt,a=Et;l=(a&~(1<<32-tt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ii++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Jm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:co,useFormState:Pr,useActionState:Pr,useOptimistic:function(e){var t=Le();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=oo.bind(null,L,!0,l),l.dispatch=t,[e,t]},useMemoCache:$c,useCacheRefresh:function(){return Le().memoizedState=eh.bind(null,L)},useEffectEvent:function(e){var t=Le(),l={impl:e};return t.memoizedState=l,function(){if((te&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}},uo={readContext:Ue,use:oi,useCallback:ss,useContext:Ue,useEffect:lo,useImperativeHandle:rs,useInsertionEffect:cs,useLayoutEffect:os,useMemo:fs,useReducer:ui,useRef:as,useState:function(){return ui(Lt)},useDebugValue:ao,useDeferredValue:function(e,t){var l=je();return ds(l,ce.memoizedState,e,t)},useTransition:function(){var e=ui(Lt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Lr,useId:ps,useHostTransitionStatus:co,useFormState:es,useActionState:es,useOptimistic:function(e,t){var l=je();return Kr(l,ce,e,t)},useMemoCache:$c,useCacheRefresh:vs};uo.useEffectEvent=is;var Ss={readContext:Ue,use:oi,useCallback:ss,useContext:Ue,useEffect:lo,useImperativeHandle:rs,useInsertionEffect:cs,useLayoutEffect:os,useMemo:fs,useReducer:Pc,useRef:as,useState:function(){return Pc(Lt)},useDebugValue:ao,useDeferredValue:function(e,t){var l=je();return ce===null?no(l,e,t):ds(l,ce.memoizedState,e,t)},useTransition:function(){var e=Pc(Lt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Lr,useId:ps,useHostTransitionStatus:co,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var l=je();return ce!==null?Kr(l,ce,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:$c,useCacheRefresh:vs};Ss.useEffectEvent=is;function ro(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:k({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var so={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ut(),n=il(a);n.payload=t,l!=null&&(n.callback=l),t=cl(e,n,a),t!==null&&(Ie(t,e,a),Fa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ut(),n=il(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=cl(e,n,a),t!==null&&(Ie(t,e,a),Fa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ut(),a=il(l);a.tag=2,t!=null&&(a.callback=t),t=cl(e,a,l),t!==null&&(Ie(t,e,l),Fa(t,e,l))}};function Ns(e,t,l,a,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ga(l,a)||!Ga(n,i):!0}function zs(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function ql(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=k({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function ws(e){Qn(e)}function As(e){console.error(e)}function Es(e){Qn(e)}function di(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ts(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fo(e,t,l){return l=il(l),l.tag=3,l.payload={element:null},l.callback=function(){di(e,t)},l}function Ms(e){return e=il(e),e.tag=3,e}function Cs(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Ts(t,l,a)}}var o=l.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ts(t,l,a),typeof n!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function lh(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&oa(t,l,n,!0),l=nt.current,l!==null){switch(l.tag){case 31:case 13:return pt===null?zi():l.alternate===null&&be===0&&(be=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Pn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),ko(e,a,n)),!1;case 22:return l.flags|=65536,a===Pn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),ko(e,a,n)),!1}throw Error(s(435,l.tag))}return ko(e,a,n),zi(),!1}if($)return t=nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Cc&&(e=Error(s(422),{cause:a}),Za(dt(e,l)))):(a!==Cc&&(t=Error(s(423),{cause:a}),Za(dt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=dt(a,l),n=fo(e.stateNode,a,n),Lc(e,n),be!==4&&(be=2)),!1;var i=Error(s(520),{cause:a});if(i=dt(i,l),fn===null?fn=[i]:fn.push(i),be!==4&&(be=2),t===null)return!0;a=dt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=fo(l.stateNode,a,e),Lc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dl===null||!dl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ms(n),Cs(n,e,l,a),Lc(l,n),!1}l=l.return}while(l!==null);return!1}var mo=Error(s(461)),we=!1;function Be(e,t,l,a){t.child=e===null?Ur(t,null,l,a):kl(t,e.child,l,a)}function Os(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return _l(t),a=Kc(e,t,l,o,i,n),u=Jc(),e!==null&&!we?(Wc(e,t,n),Gt(e,t,n)):($&&u&&Tc(t),t.flags|=1,Be(e,t,a,n),t.child)}function Ds(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!wc(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,_s(e,t,i,a,n)):(e=Kn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!jo(e,n)){var o=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(o,a)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=Ht(i,a),e.ref=t.ref,e.return=t,t.child=e}function _s(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ga(i,a)&&e.ref===t.ref)if(we=!1,t.pendingProps=a=i,jo(e,n))(e.flags&131072)!==0&&(we=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return ho(e,t,l,a,n)}function Us(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Bs(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$n(t,i!==null?i.cachePool:null),i!==null?kr(t,i):Qc(),Rr(t);else return a=t.lanes=536870912,Bs(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?($n(t,i.cachePool),kr(t,i),ul(),t.memoizedState=null):(e!==null&&$n(t,null),Qc(),ul());return Be(e,t,n,l),t.child}function an(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bs(e,t,l,a,n){var i=kc();return i=i===null?null:{parent:Ne._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&$n(t,null),Qc(),Rr(t),e!==null&&oa(e,t,a,!0),t.childLanes=n,null}function mi(e,t){return t=gi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hs(e,t,l){return kl(t,e.child,null,l),e=mi(t,t.pendingProps),e.flags|=2,it(t),t.memoizedState=null,e}function ah(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($){if(a.mode==="hidden")return e=mi(t,a),t.lanes=536870912,an(null,e);if(Zc(t),(e=me)?(e=Wf(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:Et,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},l=xr(e),l.return=t,t.child=l,_e=t,me=null)):e=null,e===null)throw ll(t);return t.lanes=536870912,null}return mi(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Zc(t),n)if(t.flags&256)t.flags&=-257,t=Hs(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(we||oa(e,t,l,!1),n=(l&e.childLanes)!==0,we||n){if(a=de,a!==null&&(o=Au(a,l),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ml(e,o),Ie(a,e,o),mo;zi(),t=Hs(e,t,l)}else e=i.treeContext,me=vt(o.nextSibling),_e=t,$=!0,tl=null,gt=!1,e!==null&&Sr(t,e),t=mi(t,a),t.flags|=4096;return t}return e=Ht(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function ho(e,t,l,a,n){return _l(t),l=Kc(e,t,l,a,void 0,n),a=Jc(),e!==null&&!we?(Wc(e,t,n),Gt(e,t,n)):($&&a&&Tc(t),t.flags|=1,Be(e,t,l,n),t.child)}function ks(e,t,l,a,n,i){return _l(t),t.updateQueue=null,l=Yr(t,a,l,n),qr(e),a=Jc(),e!==null&&!we?(Wc(e,t,i),Gt(e,t,i)):($&&a&&Tc(t),t.flags|=1,Be(e,t,l,i),t.child)}function Rs(e,t,l,a,n){if(_l(t),t.stateNode===null){var i=aa,o=l.contextType;typeof o=="object"&&o!==null&&(i=Ue(o)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=so,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},qc(t),o=l.contextType,i.context=typeof o=="object"&&o!==null?Ue(o):aa,i.state=t.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(ro(t,l,o,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&so.enqueueReplaceState(i,i.state,null),Ia(t,a,i,n),$a(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,r=ql(l,u);i.props=r;var g=i.context,x=l.contextType;o=aa,typeof x=="object"&&x!==null&&(o=Ue(x));var S=l.getDerivedStateFromProps;x=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||g!==o)&&zs(t,i,a,o),nl=!1;var p=t.memoizedState;i.state=p,Ia(t,a,i,n),$a(),g=t.memoizedState,u||p!==g||nl?(typeof S=="function"&&(ro(t,l,S,a),g=t.memoizedState),(r=nl||Ns(t,l,r,a,p,g,o))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=o,a=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Yc(e,t),o=t.memoizedProps,x=ql(l,o),i.props=x,S=t.pendingProps,p=i.context,g=l.contextType,r=aa,typeof g=="object"&&g!==null&&(r=Ue(g)),u=l.getDerivedStateFromProps,(g=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==S||p!==r)&&zs(t,i,a,r),nl=!1,p=t.memoizedState,i.state=p,Ia(t,a,i,n),$a();var v=t.memoizedState;o!==S||p!==v||nl||e!==null&&e.dependencies!==null&&Wn(e.dependencies)?(typeof u=="function"&&(ro(t,l,u,a),v=t.memoizedState),(x=nl||Ns(t,l,x,a,p,v,r)||e!==null&&e.dependencies!==null&&Wn(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,v,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,v,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),i.props=a,i.state=v,i.context=r,a=x):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,hi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=kl(t,e.child,null,n),t.child=kl(t,null,l,n)):Be(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Gt(e,t,n),e}function qs(e,t,l,a){return Ol(),t.flags|=256,Be(e,t,l,a),t.child}var go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function po(e){return{baseLanes:e,cachePool:Tr()}}function vo(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ot),e}function Ys(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if($){if(n?ol(t):ul(),(e=me)?(e=Wf(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:Et,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},l=xr(e),l.return=t,t.child=l,_e=t,me=null)):e=null,e===null)throw ll(t);return Po(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,n?(ul(),n=t.mode,u=gi({mode:"hidden",children:u},n),a=Cl(a,n,l,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=po(l),a.childLanes=vo(e,o,l),t.memoizedState=go,an(null,a)):(ol(t),bo(t,u))}var r=e.memoizedState;if(r!==null&&(u=r.dehydrated,u!==null)){if(i)t.flags&256?(ol(t),t.flags&=-257,t=xo(e,t,l)):t.memoizedState!==null?(ul(),t.child=e.child,t.flags|=128,t=null):(ul(),u=a.fallback,n=t.mode,a=gi({mode:"visible",children:a.children},n),u=Cl(u,n,l,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,kl(t,e.child,null,l),a=t.child,a.memoizedState=po(l),a.childLanes=vo(e,o,l),t.memoizedState=go,t=an(null,a));else if(ol(t),Po(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var g=o.dgst;o=g,a=Error(s(419)),a.stack="",a.digest=o,Za({value:a,source:null,stack:null}),t=xo(e,t,l)}else if(we||oa(e,t,l,!1),o=(l&e.childLanes)!==0,we||o){if(o=de,o!==null&&(a=Au(o,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,Ml(e,a),Ie(o,e,a),mo;Io(u)||zi(),t=xo(e,t,l)}else Io(u)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,me=vt(u.nextSibling),_e=t,$=!0,tl=null,gt=!1,e!==null&&Sr(t,e),t=bo(t,a.children),t.flags|=4096);return t}return n?(ul(),u=a.fallback,n=t.mode,r=e.child,g=r.sibling,a=Ht(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,g!==null?u=Ht(g,u):(u=Cl(u,n,l,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,an(null,a),a=t.child,u=e.child.memoizedState,u===null?u=po(l):(n=u.cachePool,n!==null?(r=Ne._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Tr(),u={baseLanes:u.baseLanes|l,cachePool:n}),a.memoizedState=u,a.childLanes=vo(e,o,l),t.memoizedState=go,an(e.child,a)):(ol(t),l=e.child,e=l.sibling,l=Ht(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=l,t.memoizedState=null,l)}function bo(e,t){return t=gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gi(e,t){return e=at(22,e,null,t),e.lanes=0,e}function xo(e,t,l){return kl(t,e.child,null,l),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ls(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),_c(e.return,t,l)}function yo(e,t,l,a,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=l,o.tailMode=n,o.treeForkCount=i)}function Gs(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var o=ye.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,C(ye,o),Be(e,t,a,l),a=$?Xa:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,l,t);else if(e.tag===19)Ls(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&ai(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),yo(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ai(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}yo(t,!0,l,null,i,a);break;case"together":yo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Gt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),fl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(oa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,l=Ht(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ht(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function jo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wn(e)))}function nh(e,t,l){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),al(t,Ne,e.memoizedState.cache),Ol();break;case 27:case 5:Ma(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:al(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Ys(e,t,l):(ol(t),e=Gt(e,t,l),e!==null?e.sibling:null);ol(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(oa(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Gs(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),C(ye,ye.current),a)break;return null;case 22:return t.lanes=0,Us(e,t,l,t.pendingProps);case 24:al(t,Ne,e.memoizedState.cache)}return Gt(e,t,l)}function Qs(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)we=!0;else{if(!jo(e,l)&&(t.flags&128)===0)return we=!1,nh(e,t,l);we=(e.flags&131072)!==0}else we=!1,$&&(t.flags&1048576)!==0&&jr(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Bl(t.elementType),t.type=e,typeof e=="function")wc(e)?(a=ql(e,a),t.tag=1,t=Rs(null,t,e,a,l)):(t.tag=0,t=ho(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Ge){t.tag=11,t=Os(null,t,e,a,l);break e}else if(n===F){t.tag=14,t=Ds(null,t,e,a,l);break e}}throw t=Dt(e)||e,Error(s(306,t,""))}}return t;case 0:return ho(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ql(a,t.pendingProps),Rs(e,t,a,n,l);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Yc(e,t),Ia(t,a,null,l);var o=t.memoizedState;if(a=o.cache,al(t,Ne,a),a!==i.cache&&Uc(t,[Ne],l,!0),$a(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qs(e,t,a,l);break e}else if(a!==n){n=dt(Error(s(424)),t),Za(n),t=qs(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=vt(e.firstChild),_e=t,$=!0,tl=null,gt=!0,l=Ur(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ol(),a===n){t=Gt(e,t,l);break e}Be(e,t,a,l)}t=t.child}return t;case 26:return hi(e,t),e===null?(l=td(t.type,null,t.pendingProps,null))?t.memoizedState=l:$||(l=t.type,e=t.pendingProps,a=Oi(Z.current).createElement(l),a[De]=t,a[Ve]=e,He(a,l,e),Ce(a),t.stateNode=a):t.memoizedState=td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ma(t),e===null&&$&&(a=t.stateNode=If(t.type,t.pendingProps,Z.current),_e=t,gt=!0,n=me,pl(t.type)?(eu=n,me=vt(a.firstChild)):me=n),Be(e,t,t.pendingProps.children,l),hi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$&&((n=a=me)&&(a=Uh(a,t.type,t.pendingProps,gt),a!==null?(t.stateNode=a,_e=t,me=vt(a.firstChild),gt=!1,n=!0):n=!1),n||ll(t)),Ma(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Wo(n,i)?a=null:o!==null&&Wo(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=Kc(e,t,Wm,null,null,l),xn._currentValue=n),hi(e,t),Be(e,t,a,l),t.child;case 6:return e===null&&$&&((e=l=me)&&(l=Bh(l,t.pendingProps,gt),l!==null?(t.stateNode=l,_e=t,me=null,e=!0):e=!1),e||ll(t)),null;case 13:return Ys(e,t,l);case 4:return Ye(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=kl(t,null,a,l):Be(e,t,a,l),t.child;case 11:return Os(e,t,t.type,t.pendingProps,l);case 7:return Be(e,t,t.pendingProps,l),t.child;case 8:return Be(e,t,t.pendingProps.children,l),t.child;case 12:return Be(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,al(t,t.type,a.value),Be(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,_l(t),n=Ue(n),a=a(n),t.flags|=1,Be(e,t,a,l),t.child;case 14:return Ds(e,t,t.type,t.pendingProps,l);case 15:return _s(e,t,t.type,t.pendingProps,l);case 19:return Gs(e,t,l);case 31:return ah(e,t,l);case 22:return Us(e,t,l,t.pendingProps);case 24:return _l(t),a=Ue(Ne),e===null?(n=kc(),n===null&&(n=de,i=Bc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},qc(t),al(t,Ne,n)):((e.lanes&l)!==0&&(Yc(e,t),Ia(t,null,null,l),$a()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),al(t,Ne,a)):(a=i.cache,al(t,Ne,a),a!==n.cache&&Uc(t,[Ne],l,!0))),Be(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Qt(e){e.flags|=4}function So(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(vf())e.flags|=8192;else throw Hl=Pn,Rc}else e.flags&=-16777217}function Xs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cd(t))if(vf())e.flags|=8192;else throw Hl=Pn,Rc}function pi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Nu():536870912,e.lanes|=t,xa|=t)}function nn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function ih(e,t,l){var a=t.pendingProps;switch(Mc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(Ne),xe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ca(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oc())),he(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Qt(t),i!==null?(he(t),Xs(t,i)):(he(t),So(t,n,null,a,l))):i?i!==e.memoizedState?(Qt(t),he(t),Xs(t,i)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Qt(t),he(t),So(t,n,e,a,l)),null;case 27:if(En(t),l=Z.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return he(t),null}e=_.current,ca(t)?Nr(t):(e=If(n,a,l),t.stateNode=e,Qt(t))}return he(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return he(t),null}if(i=_.current,ca(t))Nr(t);else{var o=Oi(Z.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(n,{is:a.is}):o.createElement(n)}}i[De]=t,i[Ve]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(He(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Qt(t)}}return he(t),So(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=Z.current,ca(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=_e,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[De]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Lf(e.nodeValue,l)),e||ll(t,!0)}else e=Oi(e).createTextNode(a),e[De]=t,t.stateNode=e}return he(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ca(t),l!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[De]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else l=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(it(t),t):(it(t),null);if((t.flags&128)!==0)throw Error(s(558))}return he(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ca(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[De]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),n=!1}else n=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(it(t),t):(it(t),null)}return it(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),pi(t,t.updateQueue),he(t),null);case 4:return xe(),e===null&&Xo(t.stateNode.containerInfo),he(t),null;case 10:return qt(t.type),he(t),null;case 19:if(z(ye),a=t.memoizedState,a===null)return he(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)nn(a,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ai(e),i!==null){for(t.flags|=128,nn(a,!1),e=i.updateQueue,t.updateQueue=e,pi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)br(l,e),l=l.sibling;return C(ye,ye.current&1|2),$&&kt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Pe()>ji&&(t.flags|=128,n=!0,nn(a,!1),t.lanes=4194304)}else{if(!n)if(e=ai(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,pi(t,e),nn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!$)return he(t),null}else 2*Pe()-a.renderingStartTime>ji&&l!==536870912&&(t.flags|=128,n=!0,nn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Pe(),e.sibling=null,l=ye.current,C(ye,n?l&1|2:l&1),$&&kt(t,a.treeForkCount),e):(he(t),null);case 22:case 23:return it(t),Xc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),l=t.updateQueue,l!==null&&pi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&z(Ul),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(Ne),he(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function ch(e,t){switch(Mc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Ne),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(it(t),t.alternate===null)throw Error(s(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(it(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(ye),null;case 4:return xe(),null;case 10:return qt(t.type),null;case 22:case 23:return it(t),Xc(),e!==null&&z(Ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Ne),null;case 25:return null;default:return null}}function Zs(e,t){switch(Mc(t),t.tag){case 3:qt(Ne),xe();break;case 26:case 27:case 5:En(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&it(t);break;case 13:it(t);break;case 19:z(ye);break;case 10:qt(t.type);break;case 22:case 23:it(t),Xc(),e!==null&&z(Ul);break;case 24:qt(Ne)}}function cn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,o=l.inst;a=i(),o.destroy=a}l=l.next}while(l!==n)}}catch(u){ne(t,t.return,u)}}function rl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,n=t;var r=l,g=u;try{g()}catch(x){ne(n,r,x)}}}a=a.next}while(a!==i)}}catch(x){ne(t,t.return,x)}}function Vs(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Hr(t,l)}catch(a){ne(e,e.return,a)}}}function Ks(e,t,l){l.props=ql(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ne(e,t,a)}}function on(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){ne(e,t,n)}}function Mt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ne(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ne(e,t,n)}else l.current=null}function Js(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ne(e,e.return,n)}}function No(e,t,l){try{var a=e.stateNode;Th(a,e.type,l,t),a[Ve]=t}catch(n){ne(e,e.return,n)}}function Ws(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pl(e.type)||e.tag===4}function zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ws(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wo(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ut));else if(a!==4&&(a===27&&pl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(wo(e,t,l),e=e.sibling;e!==null;)wo(e,t,l),e=e.sibling}function vi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&pl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(vi(e,t,l),e=e.sibling;e!==null;)vi(e,t,l),e=e.sibling}function Fs(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);He(t,a,l),t[De]=e,t[Ve]=l}catch(i){ne(e,e.return,i)}}var Xt=!1,Ae=!1,Ao=!1,$s=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function oh(e,t){if(e=e.containerInfo,Ko=Ri,e=rr(e),bc(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var o=0,u=-1,r=-1,g=0,x=0,S=e,p=null;t:for(;;){for(var v;S!==l||n!==0&&S.nodeType!==3||(u=o+n),S!==i||a!==0&&S.nodeType!==3||(r=o+a),S.nodeType===3&&(o+=S.nodeValue.length),(v=S.firstChild)!==null;)p=S,S=v;for(;;){if(S===e)break t;if(p===l&&++g===n&&(u=o),p===i&&++x===a&&(r=o),(v=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=v}l=u===-1||r===-1?null:{start:u,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jo={focusedElem:e,selectionRange:l},Ri=!1,Oe=t;Oe!==null;)if(t=Oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Oe=e;else for(;Oe!==null;){switch(t=Oe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var O=ql(l.type,n);e=a.getSnapshotBeforeUpdate(O,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(H){ne(l,l.return,H)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)$o(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$o(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Oe=e;break}Oe=t.return}}function Is(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Vt(e,l),a&4&&cn(5,l);break;case 1:if(Vt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(o){ne(l,l.return,o)}else{var n=ql(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ne(l,l.return,o)}}a&64&&Vs(l),a&512&&on(l,l.return);break;case 3:if(Vt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Hr(e,t)}catch(o){ne(l,l.return,o)}}break;case 27:t===null&&a&4&&Fs(l);case 26:case 5:Vt(e,l),t===null&&a&4&&Js(l),a&512&&on(l,l.return);break;case 12:Vt(e,l);break;case 31:Vt(e,l),a&4&&tf(e,l);break;case 13:Vt(e,l),a&4&&lf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=ph.bind(null,l),Hh(e,l))));break;case 22:if(a=l.memoizedState!==null||Xt,!a){t=t!==null&&t.memoizedState!==null||Ae,n=Xt;var i=Ae;Xt=a,(Ae=t)&&!i?Kt(e,l,(l.subtreeFlags&8772)!==0):Vt(e,l),Xt=n,Ae=i}break;case 30:break;default:Vt(e,l)}}function Ps(e){var t=e.alternate;t!==null&&(e.alternate=null,Ps(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Je=!1;function Zt(e,t,l){for(l=l.child;l!==null;)ef(e,t,l),l=l.sibling}function ef(e,t,l){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Ca,l)}catch{}switch(l.tag){case 26:Ae||Mt(l,t),Zt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ae||Mt(l,t);var a=ge,n=Je;pl(l.type)&&(ge=l.stateNode,Je=!1),Zt(e,t,l),pn(l.stateNode),ge=a,Je=n;break;case 5:Ae||Mt(l,t);case 6:if(a=ge,n=Je,ge=null,Zt(e,t,l),ge=a,Je=n,ge!==null)if(Je)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(l.stateNode)}catch(i){ne(l,t,i)}else try{ge.removeChild(l.stateNode)}catch(i){ne(l,t,i)}break;case 18:ge!==null&&(Je?(e=ge,Kf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ea(e)):Kf(ge,l.stateNode));break;case 4:a=ge,n=Je,ge=l.stateNode.containerInfo,Je=!0,Zt(e,t,l),ge=a,Je=n;break;case 0:case 11:case 14:case 15:rl(2,l,t),Ae||rl(4,l,t),Zt(e,t,l);break;case 1:Ae||(Mt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ks(l,t,a)),Zt(e,t,l);break;case 21:Zt(e,t,l);break;case 22:Ae=(a=Ae)||l.memoizedState!==null,Zt(e,t,l),Ae=a;break;default:Zt(e,t,l)}}function tf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ea(e)}catch(l){ne(t,t.return,l)}}}function lf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ea(e)}catch(l){ne(t,t.return,l)}}function uh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $s),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $s),t;default:throw Error(s(435,e.tag))}}function bi(e,t){var l=uh(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=vh.bind(null,e,a);a.then(n,n)}})}function We(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(pl(u.type)){ge=u.stateNode,Je=!1;break e}break;case 5:ge=u.stateNode,Je=!1;break e;case 3:case 4:ge=u.stateNode.containerInfo,Je=!0;break e}u=u.return}if(ge===null)throw Error(s(160));ef(i,o,n),ge=null,Je=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)af(t,e),t=t.sibling}var St=null;function af(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(t,e),Fe(e),a&4&&(rl(3,e,e.return),cn(3,e),rl(5,e,e.return));break;case 1:We(t,e),Fe(e),a&512&&(Ae||l===null||Mt(l,l.return)),a&64&&Xt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=St;if(We(t,e),Fe(e),a&512&&(Ae||l===null||Mt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_a]||i[De]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),He(i,a,l),i[De]=e,Ce(i),a=i;break e;case"link":var o=nd("link","href",n).get(a+(l.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){o.splice(u,1);break t}}i=n.createElement(a),He(i,a,l),n.head.appendChild(i);break;case"meta":if(o=nd("meta","content",n).get(a+(l.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){o.splice(u,1);break t}}i=n.createElement(a),He(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[De]=e,Ce(i),a=i}e.stateNode=a}else id(n,e.type,e.stateNode);else e.stateNode=ad(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?id(n,e.type,e.stateNode):ad(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&No(e,e.memoizedProps,l.memoizedProps)}break;case 27:We(t,e),Fe(e),a&512&&(Ae||l===null||Mt(l,l.return)),l!==null&&a&4&&No(e,e.memoizedProps,l.memoizedProps);break;case 5:if(We(t,e),Fe(e),a&512&&(Ae||l===null||Mt(l,l.return)),e.flags&32){n=e.stateNode;try{Fl(n,"")}catch(O){ne(e,e.return,O)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,No(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Ao=!0);break;case 6:if(We(t,e),Fe(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(O){ne(e,e.return,O)}}break;case 3:if(Ui=null,n=St,St=Di(t.containerInfo),We(t,e),St=n,Fe(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ea(t.containerInfo)}catch(O){ne(e,e.return,O)}Ao&&(Ao=!1,nf(e));break;case 4:a=St,St=Di(e.stateNode.containerInfo),We(t,e),Fe(e),St=a;break;case 12:We(t,e),Fe(e);break;case 31:We(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bi(e,a)));break;case 13:We(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(yi=Pe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bi(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,g=Xt,x=Ae;if(Xt=g||n,Ae=x||r,We(t,e),Ae=x,Xt=g,Fe(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||Xt||Ae||Yl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(i=r.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=r.stateNode;var S=r.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;u.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(O){ne(r,r.return,O)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(O){ne(r,r.return,O)}}}else if(t.tag===18){if(l===null){r=t;try{var v=r.stateNode;n?Jf(v,!0):Jf(r.stateNode,!1)}catch(O){ne(r,r.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,bi(e,l))));break;case 19:We(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bi(e,a)));break;case 30:break;case 21:break;default:We(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ws(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=zo(e);vi(e,i,n);break;case 5:var o=l.stateNode;l.flags&32&&(Fl(o,""),l.flags&=-33);var u=zo(e);vi(e,u,o);break;case 3:case 4:var r=l.stateNode.containerInfo,g=zo(e);wo(e,g,r);break;default:throw Error(s(161))}}catch(x){ne(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Is(e,t.alternate,t),t=t.sibling}function Yl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rl(4,t,t.return),Yl(t);break;case 1:Mt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Ks(t,t.return,l),Yl(t);break;case 27:pn(t.stateNode);case 26:case 5:Mt(t,t.return),Yl(t);break;case 22:t.memoizedState===null&&Yl(t);break;case 30:Yl(t);break;default:Yl(t)}e=e.sibling}}function Kt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Kt(n,i,l),cn(4,i);break;case 1:if(Kt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ne(a,a.return,g)}if(a=i,n=a.updateQueue,n!==null){var u=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Br(r[n],u)}catch(g){ne(a,a.return,g)}}l&&o&64&&Vs(i),on(i,i.return);break;case 27:Fs(i);case 26:case 5:Kt(n,i,l),l&&a===null&&o&4&&Js(i),on(i,i.return);break;case 12:Kt(n,i,l);break;case 31:Kt(n,i,l),l&&o&4&&tf(n,i);break;case 13:Kt(n,i,l),l&&o&4&&lf(n,i);break;case 22:i.memoizedState===null&&Kt(n,i,l),on(i,i.return);break;case 30:break;default:Kt(n,i,l)}t=t.sibling}}function Eo(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Va(l))}function To(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e))}function Nt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cf(e,t,l,a),t=t.sibling}function cf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(e,t,l,a),n&2048&&cn(9,t);break;case 1:Nt(e,t,l,a);break;case 3:Nt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e)));break;case 12:if(n&2048){Nt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){ne(t,t.return,r)}}else Nt(e,t,l,a);break;case 31:Nt(e,t,l,a);break;case 13:Nt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Nt(e,t,l,a):un(e,t):i._visibility&2?Nt(e,t,l,a):(i._visibility|=2,pa(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Eo(o,t);break;case 24:Nt(e,t,l,a),n&2048&&To(t.alternate,t);break;default:Nt(e,t,l,a)}}function pa(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=l,r=a,g=o.flags;switch(o.tag){case 0:case 11:case 15:pa(i,o,u,r,n),cn(8,o);break;case 23:break;case 22:var x=o.stateNode;o.memoizedState!==null?x._visibility&2?pa(i,o,u,r,n):un(i,o):(x._visibility|=2,pa(i,o,u,r,n)),n&&g&2048&&Eo(o.alternate,o);break;case 24:pa(i,o,u,r,n),n&&g&2048&&To(o.alternate,o);break;default:pa(i,o,u,r,n)}t=t.sibling}}function un(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:un(l,a),n&2048&&Eo(a.alternate,a);break;case 24:un(l,a),n&2048&&To(a.alternate,a);break;default:un(l,a)}t=t.sibling}}var rn=8192;function va(e,t,l){if(e.subtreeFlags&rn)for(e=e.child;e!==null;)of(e,t,l),e=e.sibling}function of(e,t,l){switch(e.tag){case 26:va(e,t,l),e.flags&rn&&e.memoizedState!==null&&Jh(l,St,e.memoizedState,e.memoizedProps);break;case 5:va(e,t,l);break;case 3:case 4:var a=St;St=Di(e.stateNode.containerInfo),va(e,t,l),St=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=rn,rn=16777216,va(e,t,l),rn=a):va(e,t,l));break;default:va(e,t,l)}}function uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Oe=a,sf(a,e)}uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rf(e),e=e.sibling}function rf(e){switch(e.tag){case 0:case 11:case 15:sn(e),e.flags&2048&&rl(9,e,e.return);break;case 3:sn(e);break;case 12:sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xi(e)):sn(e);break;default:sn(e)}}function xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Oe=a,sf(a,e)}uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rl(8,t,t.return),xi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,xi(t));break;default:xi(t)}e=e.sibling}}function sf(e,t){for(;Oe!==null;){var l=Oe;switch(l.tag){case 0:case 11:case 15:rl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Oe=a;else e:for(l=e;Oe!==null;){a=Oe;var n=a.sibling,i=a.return;if(Ps(a),a===l){Oe=null;break e}if(n!==null){n.return=i,Oe=n;break e}Oe=i}}}var rh={getCacheForType:function(e){var t=Ue(Ne),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ue(Ne).controller.signal}},sh=typeof WeakMap=="function"?WeakMap:Map,te=0,de=null,V=null,J=0,ae=0,ct=null,sl=!1,ba=!1,Mo=!1,Jt=0,be=0,fl=0,Ll=0,Co=0,ot=0,xa=0,fn=null,$e=null,Oo=!1,yi=0,ff=0,ji=1/0,Si=null,dl=null,Te=0,ml=null,ya=null,Wt=0,Do=0,_o=null,df=null,dn=0,Uo=null;function ut(){return(te&2)!==0&&J!==0?J&-J:y.T!==null?Yo():Eu()}function mf(){if(ot===0)if((J&536870912)===0||$){var e=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),ot=e}else ot=536870912;return e=nt.current,e!==null&&(e.flags|=32),ot}function Ie(e,t,l){(e===de&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(ja(e,0),hl(e,J,ot,!1)),Da(e,l),((te&2)===0||e!==de)&&(e===de&&((te&2)===0&&(Ll|=l),be===4&&hl(e,J,ot,!1)),Ct(e))}function hf(e,t,l){if((te&6)!==0)throw Error(s(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),n=a?mh(e,t):Ho(e,t,!0),i=a;do{if(n===0){ba&&!a&&hl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!fh(l)){n=Ho(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;n=fn;var r=u.current.memoizedState.isDehydrated;if(r&&(ja(u,o).flags|=256),o=Ho(u,o,!1),o!==2){if(Mo&&!r){u.errorRecoveryDisabledLanes|=i,Ll|=i,n=4;break e}i=$e,$e=n,i!==null&&($e===null?$e=i:$e.push.apply($e,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){ja(e,0),hl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:hl(a,t,ot,!sl);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=yi+300-Pe(),10<n)){if(hl(a,t,ot,!sl),Dn(a,0,!0)!==0)break e;Wt=t,a.timeoutHandle=Zf(gf.bind(null,a,l,$e,Si,Oo,t,ot,Ll,xa,sl,i,"Throttled",-0,0),n);break e}gf(a,l,$e,Si,Oo,t,ot,Ll,xa,sl,i,null,-0,0)}}break}while(!0);Ct(e)}function gf(e,t,l,a,n,i,o,u,r,g,x,S,p,v){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},of(t,i,S);var O=(i&62914560)===i?yi-Pe():(i&4194048)===i?ff-Pe():0;if(O=Wh(S,O),O!==null){Wt=i,e.cancelPendingCommit=O(Nf.bind(null,e,t,i,l,a,n,o,u,r,x,S,null,p,v)),hl(e,i,o,!g);return}}Nf(e,t,i,l,a,n,o,u,r)}function fh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!lt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hl(e,t,l,a){t&=~Co,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-tt(n),o=1<<i;a[i]=-1,n&=~o}l!==0&&zu(e,l,t)}function Ni(){return(te&6)===0?(mn(0),!1):!0}function Bo(){if(V!==null){if(ae===0)var e=V.return;else e=V,Rt=Dl=null,Fc(e),fa=null,Ja=0,e=V;for(;e!==null;)Zs(e.alternate,e),e=e.return;V=null}}function ja(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Oh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Wt=0,Bo(),de=e,V=l=Ht(e.current,null),J=t,ae=0,ct=null,sl=!1,ba=Oa(e,t),Mo=!1,xa=ot=Co=Ll=fl=be=0,$e=fn=null,Oo=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-tt(a),i=1<<n;t|=e[n],a&=~i}return Jt=t,Xn(),l}function pf(e,t){L=null,y.H=ln,t===sa||t===In?(t=Or(),ae=3):t===Rc?(t=Or(),ae=4):ae=t===mo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,V===null&&(be=1,di(e,dt(t,e.current)))}function vf(){var e=nt.current;return e===null?!0:(J&4194048)===J?pt===null:(J&62914560)===J||(J&536870912)!==0?e===pt:!1}function bf(){var e=y.H;return y.H=ln,e===null?ln:e}function xf(){var e=y.A;return y.A=rh,e}function zi(){be=4,sl||(J&4194048)!==J&&nt.current!==null||(ba=!0),(fl&134217727)===0&&(Ll&134217727)===0||de===null||hl(de,J,ot,!1)}function Ho(e,t,l){var a=te;te|=2;var n=bf(),i=xf();(de!==e||J!==t)&&(Si=null,ja(e,t)),t=!1;var o=be;e:do try{if(ae!==0&&V!==null){var u=V,r=ct;switch(ae){case 8:Bo(),o=6;break e;case 3:case 2:case 9:case 6:nt.current===null&&(t=!0);var g=ae;if(ae=0,ct=null,Sa(e,u,r,g),l&&ba){o=0;break e}break;default:g=ae,ae=0,ct=null,Sa(e,u,r,g)}}dh(),o=be;break}catch(x){pf(e,x)}while(!0);return t&&e.shellSuspendCounter++,Rt=Dl=null,te=a,y.H=n,y.A=i,V===null&&(de=null,J=0,Xn()),o}function dh(){for(;V!==null;)yf(V)}function mh(e,t){var l=te;te|=2;var a=bf(),n=xf();de!==e||J!==t?(Si=null,ji=Pe()+500,ja(e,t)):ba=Oa(e,t);e:do try{if(ae!==0&&V!==null){t=V;var i=ct;t:switch(ae){case 1:ae=0,ct=null,Sa(e,t,i,1);break;case 2:case 9:if(Mr(i)){ae=0,ct=null,jf(t);break}t=function(){ae!==2&&ae!==9||de!==e||(ae=7),Ct(e)},i.then(t,t);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Mr(i)?(ae=0,ct=null,jf(t)):(ae=0,ct=null,Sa(e,t,i,7));break;case 5:var o=null;switch(V.tag){case 26:o=V.memoizedState;case 5:case 27:var u=V;if(o?cd(o):u.stateNode.complete){ae=0,ct=null;var r=u.sibling;if(r!==null)V=r;else{var g=u.return;g!==null?(V=g,wi(g)):V=null}break t}}ae=0,ct=null,Sa(e,t,i,5);break;case 6:ae=0,ct=null,Sa(e,t,i,6);break;case 8:Bo(),be=6;break e;default:throw Error(s(462))}}hh();break}catch(x){pf(e,x)}while(!0);return Rt=Dl=null,y.H=a,y.A=n,te=l,V!==null?0:(de=null,J=0,Xn(),be)}function hh(){for(;V!==null&&!kd();)yf(V)}function yf(e){var t=Qs(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?wi(e):V=t}function jf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=ks(l,t,t.pendingProps,t.type,void 0,J);break;case 11:t=ks(l,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Fc(t);default:Zs(l,t),t=V=br(t,Jt),t=Qs(l,t,Jt)}e.memoizedProps=e.pendingProps,t===null?wi(e):V=t}function Sa(e,t,l,a){Rt=Dl=null,Fc(t),fa=null,Ja=0;var n=t.return;try{if(lh(e,n,t,l,J)){be=1,di(e,dt(l,e.current)),V=null;return}}catch(i){if(n!==null)throw V=n,i;be=1,di(e,dt(l,e.current)),V=null;return}t.flags&32768?($||a===1?e=!0:ba||(J&536870912)!==0?e=!1:(sl=e=!0,(a===2||a===9||a===3||a===6)&&(a=nt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sf(t,e)):wi(t)}function wi(e){var t=e;do{if((t.flags&32768)!==0){Sf(t,sl);return}e=t.return;var l=ih(t.alternate,t,Jt);if(l!==null){V=l;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);be===0&&(be=5)}function Sf(e,t){do{var l=ch(e.alternate,e);if(l!==null){l.flags&=32767,V=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=l}while(e!==null);be=6,V=null}function Nf(e,t,l,a,n,i,o,u,r){e.cancelPendingCommit=null;do Ai();while(Te!==0);if((te&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Nc,Kd(e,l,i,o,u,r),e===de&&(V=de=null,J=0),ya=t,ml=e,Wt=l,Do=i,_o=n,df=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bh(Tn,function(){return Tf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,n=M.p,M.p=2,o=te,te|=4;try{oh(e,t,l)}finally{te=o,M.p=n,y.T=a}}Te=1,zf(),wf(),Af()}}function zf(){if(Te===1){Te=0;var e=ml,t=ya,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null;var a=M.p;M.p=2;var n=te;te|=4;try{af(t,e);var i=Jo,o=rr(e.containerInfo),u=i.focusedElem,r=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&ur(u.ownerDocument.documentElement,u)){if(r!==null&&bc(u)){var g=r.start,x=r.end;if(x===void 0&&(x=g),"selectionStart"in u)u.selectionStart=g,u.selectionEnd=Math.min(x,u.value.length);else{var S=u.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var v=p.getSelection(),O=u.textContent.length,H=Math.min(r.start,O),ue=r.end===void 0?H:Math.min(r.end,O);!v.extend&&H>ue&&(o=ue,ue=H,H=o);var m=or(u,H),f=or(u,ue);if(m&&f&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)){var h=S.createRange();h.setStart(m.node,m.offset),v.removeAllRanges(),H>ue?(v.addRange(h),v.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),v.addRange(h))}}}}for(S=[],v=u;v=v.parentNode;)v.nodeType===1&&S.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<S.length;u++){var j=S[u];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Ri=!!Ko,Jo=Ko=null}finally{te=n,M.p=a,y.T=l}}e.current=t,Te=2}}function wf(){if(Te===2){Te=0;var e=ml,t=ya,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=y.T,y.T=null;var a=M.p;M.p=2;var n=te;te|=4;try{Is(e,t.alternate,t)}finally{te=n,M.p=a,y.T=l}}Te=3}}function Af(){if(Te===4||Te===3){Te=0,Rd();var e=ml,t=ya,l=Wt,a=df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,ya=ml=null,Ef(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(dl=null),Pi(l),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=y.T,n=M.p,M.p=2,y.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{y.T=t,M.p=n}}(Wt&3)!==0&&Ai(),Ct(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Uo?dn++:(dn=0,Uo=e):dn=0,mn(0)}}function Ef(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Va(t)))}function Ai(){return zf(),wf(),Af(),Tf()}function Tf(){if(Te!==5)return!1;var e=ml,t=Do;Do=0;var l=Pi(Wt),a=y.T,n=M.p;try{M.p=32>l?32:l,y.T=null,l=_o,_o=null;var i=ml,o=Wt;if(Te=0,ya=ml=null,Wt=0,(te&6)!==0)throw Error(s(331));var u=te;if(te|=4,rf(i.current),cf(i,i.current,o,l),te=u,mn(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Ca,i)}catch{}return!0}finally{M.p=n,y.T=a,Ef(e,t)}}function Mf(e,t,l){t=dt(l,t),t=fo(e.stateNode,t,2),e=cl(e,t,2),e!==null&&(Da(e,2),Ct(e))}function ne(e,t,l){if(e.tag===3)Mf(e,e,l);else for(;t!==null;){if(t.tag===3){Mf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(dl===null||!dl.has(a))){e=dt(l,e),l=Ms(2),a=cl(t,l,2),a!==null&&(Cs(l,a,t,e),Da(a,2),Ct(a));break}}t=t.return}}function ko(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new sh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Mo=!0,n.add(l),e=gh.bind(null,e,t,l),t.then(e,e))}function gh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,de===e&&(J&l)===l&&(be===4||be===3&&(J&62914560)===J&&300>Pe()-yi?(te&2)===0&&ja(e,0):Co|=l,xa===J&&(xa=0)),Ct(e)}function Cf(e,t){t===0&&(t=Nu()),e=Ml(e,t),e!==null&&(Da(e,t),Ct(e))}function ph(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Cf(e,l)}function vh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Cf(e,l)}function bh(e,t){return Wi(e,t)}var Ei=null,Na=null,Ro=!1,Ti=!1,qo=!1,gl=0;function Ct(e){e!==Na&&e.next===null&&(Na===null?Ei=Na=e:Na=Na.next=e),Ti=!0,Ro||(Ro=!0,yh())}function mn(e,t){if(!qo&&Ti){qo=!0;do for(var l=!1,a=Ei;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-tt(42|e)+1)-1,i&=n&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Uf(a,i))}else i=J,i=Dn(a,a===de?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Oa(a,i)||(l=!0,Uf(a,i));a=a.next}while(l);qo=!1}}function xh(){Of()}function Of(){Ti=Ro=!1;var e=0;gl!==0&&Ch()&&(e=gl);for(var t=Pe(),l=null,a=Ei;a!==null;){var n=a.next,i=Df(a,t);i===0?(a.next=null,l===null?Ei=n:l.next=n,n===null&&(Na=l)):(l=a,(e!==0||(i&3)!==0)&&(Ti=!0)),a=n}Te!==0&&Te!==5||mn(e),gl!==0&&(gl=0)}function Df(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-tt(i),u=1<<o,r=n[o];r===-1?((u&l)===0||(u&a)!==0)&&(n[o]=Vd(u,t)):r<=t&&(e.expiredLanes|=u),i&=~u}if(t=de,l=J,l=Dn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Fi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Oa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Fi(a),Pi(l)){case 2:case 8:l=ju;break;case 32:l=Tn;break;case 268435456:l=Su;break;default:l=Tn}return a=_f.bind(null,e),l=Wi(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Fi(a),e.callbackPriority=2,e.callbackNode=null,2}function _f(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ai()&&e.callbackNode!==l)return null;var a=J;return a=Dn(e,e===de?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(hf(e,a,t),Df(e,Pe()),e.callbackNode!=null&&e.callbackNode===l?_f.bind(null,e):null)}function Uf(e,t){if(Ai())return null;hf(e,t,!0)}function yh(){Dh(function(){(te&6)!==0?Wi(yu,xh):Of()})}function Yo(){if(gl===0){var e=ua;e===0&&(e=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),gl=e}return gl}function Bf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hn(""+e)}function Hf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function jh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Bf((n[Ve]||null).action),o=a.submitter;o&&(t=(t=o[Ve]||null)?Bf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new Yn("action","action",null,a,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gl!==0){var r=o?Hf(n,o):new FormData(n);io(l,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(u.preventDefault(),r=o?Hf(n,o):new FormData(n),io(l,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Lo=0;Lo<Sc.length;Lo++){var Go=Sc[Lo],Sh=Go.toLowerCase(),Nh=Go[0].toUpperCase()+Go.slice(1);jt(Sh,"on"+Nh)}jt(dr,"onAnimationEnd"),jt(mr,"onAnimationIteration"),jt(hr,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(qm,"onTransitionRun"),jt(Ym,"onTransitionStart"),jt(Lm,"onTransitionCancel"),jt(gr,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),wl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wl("onBeforeInput",["compositionend","keypress","textInput","paste"]),wl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));function kf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],r=u.instance,g=u.currentTarget;if(u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=g;try{i(n)}catch(x){Qn(x)}n.currentTarget=null,i=r}else for(o=0;o<a.length;o++){if(u=a[o],r=u.instance,g=u.currentTarget,u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=g;try{i(n)}catch(x){Qn(x)}n.currentTarget=null,i=r}}}}function K(e,t){var l=t[ec];l===void 0&&(l=t[ec]=new Set);var a=e+"__bubble";l.has(a)||(Rf(t,e,2,!1),l.add(a))}function Qo(e,t,l){var a=0;t&&(a|=4),Rf(l,e,a,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[Mi]){e[Mi]=!0,Cu.forEach(function(l){l!=="selectionchange"&&(zh.has(l)||Qo(l,!1,e),Qo(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Qo("selectionchange",!1,t))}}function Rf(e,t,l,a){switch(md(t)){case 2:var n=Ih;break;case 8:n=Ph;break;default:n=iu}l=n.bind(null,t,l,e),n=void 0,!rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Zo(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===n)break;if(o===4)for(o=a.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;u!==null;){if(o=Zl(u),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){a=i=o;continue e}u=u.parentNode}}a=a.return}Gu(function(){var g=i,x=oc(l),S=[];e:{var p=pr.get(e);if(p!==void 0){var v=Yn,O=e;switch(e){case"keypress":if(Rn(l)===0)break e;case"keydown":case"keyup":v=vm;break;case"focusin":O="focus",v=mc;break;case"focusout":O="blur",v=mc;break;case"beforeblur":case"afterblur":v=mc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ym;break;case dr:case mr:case hr:v=um;break;case gr:v=Sm;break;case"scroll":case"scrollend":v=am;break;case"wheel":v=zm;break;case"copy":case"cut":case"paste":v=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ku;break;case"toggle":case"beforetoggle":v=Am}var H=(t&4)!==0,ue=!H&&(e==="scroll"||e==="scrollend"),m=H?p!==null?p+"Capture":null:p;H=[];for(var f=g,h;f!==null;){var j=f;if(h=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||h===null||m===null||(j=Ba(f,m),j!=null&&H.push(gn(f,j,h))),ue)break;f=f.return}0<H.length&&(p=new v(p,O,null,l,x),S.push({event:p,listeners:H}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&l!==cc&&(O=l.relatedTarget||l.fromElement)&&(Zl(O)||O[Xl]))break e;if((v||p)&&(p=x.window===x?x:(p=x.ownerDocument)?p.defaultView||p.parentWindow:window,v?(O=l.relatedTarget||l.toElement,v=g,O=O?Zl(O):null,O!==null&&(ue=D(O),H=O.tag,O!==ue||H!==5&&H!==27&&H!==6)&&(O=null)):(v=null,O=g),v!==O)){if(H=Zu,j="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(H=Ku,j="onPointerLeave",m="onPointerEnter",f="pointer"),ue=v==null?p:Ua(v),h=O==null?p:Ua(O),p=new H(j,f+"leave",v,l,x),p.target=ue,p.relatedTarget=h,j=null,Zl(x)===g&&(H=new H(m,f+"enter",O,l,x),H.target=h,H.relatedTarget=ue,j=H),ue=j,v&&O)t:{for(H=wh,m=v,f=O,h=0,j=m;j;j=H(j))h++;j=0;for(var B=f;B;B=H(B))j++;for(;0<h-j;)m=H(m),h--;for(;0<j-h;)f=H(f),j--;for(;h--;){if(m===f||f!==null&&m===f.alternate){H=m;break t}m=H(m),f=H(f)}H=null}else H=null;v!==null&&qf(S,p,v,H,!1),O!==null&&ue!==null&&qf(S,ue,O,H,!0)}}e:{if(p=g?Ua(g):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var P=tr;else if(Pu(p))if(lr)P=Hm;else{P=Um;var U=_m}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&ic(g.elementType)&&(P=tr):P=Bm;if(P&&(P=P(e,g))){er(S,P,l,x);break e}U&&U(e,p,g),e==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&nc(p,"number",p.value)}switch(U=g?Ua(g):window,e){case"focusin":(Pu(U)||U.contentEditable==="true")&&(ea=U,xc=g,Qa=null);break;case"focusout":Qa=xc=ea=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,sr(S,l,x);break;case"selectionchange":if(Rm)break;case"keydown":case"keyup":sr(S,l,x)}var G;if(gc)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Pl?$u(e,l)&&(W="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(W="onCompositionStart");W&&(Ju&&l.locale!=="ko"&&(Pl||W!=="onCompositionStart"?W==="onCompositionEnd"&&Pl&&(G=Qu()):(Pt=x,sc="value"in Pt?Pt.value:Pt.textContent,Pl=!0)),U=Ci(g,W),0<U.length&&(W=new Vu(W,e,null,l,x),S.push({event:W,listeners:U}),G?W.data=G:(G=Iu(l),G!==null&&(W.data=G)))),(G=Tm?Mm(e,l):Cm(e,l))&&(W=Ci(g,"onBeforeInput"),0<W.length&&(U=new Vu("onBeforeInput","beforeinput",null,l,x),S.push({event:U,listeners:W}),U.data=G)),jh(S,e,g,l,x)}kf(S,t)})}function gn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ci(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ba(e,l),n!=null&&a.unshift(gn(e,n,i)),n=Ba(e,t),n!=null&&a.push(gn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function wh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qf(e,t,l,a,n){for(var i=t._reactName,o=[];l!==null&&l!==a;){var u=l,r=u.alternate,g=u.stateNode;if(u=u.tag,r!==null&&r===a)break;u!==5&&u!==26&&u!==27||g===null||(r=g,n?(g=Ba(l,i),g!=null&&o.unshift(gn(l,g,r))):n||(g=Ba(l,i),g!=null&&o.push(gn(l,g,r)))),l=l.return}o.length!==0&&e.push({event:t,listeners:o})}var Ah=/\r\n?/g,Eh=/\u0000|\uFFFD/g;function Yf(e){return(typeof e=="string"?e:""+e).replace(Ah,`
`).replace(Eh,"")}function Lf(e,t){return t=Yf(t),Yf(e)===t}function oe(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fl(e,""+a);break;case"className":Un(e,"class",a);break;case"tabIndex":Un(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Un(e,l,a);break;case"style":Yu(e,a,i);break;case"data":if(t!=="object"){Un(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Hn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&oe(e,t,"name",n.name,n,null),oe(e,t,"formEncType",n.formEncType,n,null),oe(e,t,"formMethod",n.formMethod,n,null),oe(e,t,"formTarget",n.formTarget,n,null)):(oe(e,t,"encType",n.encType,n,null),oe(e,t,"method",n.method,n,null),oe(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Hn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ut);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Hn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":K("beforetoggle",e),K("toggle",e),_n(e,"popover",a);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":_n(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=tm.get(l)||l,_n(e,l,a))}}function Vo(e,t,l,a,n,i){switch(l){case"style":Yu(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&Fl(e,""+a);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ou.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[Ve]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):_n(e,l,a)}}}function He(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:oe(e,t,i,o,l,null)}}n&&oe(e,t,"srcSet",l.srcSet,l,null),a&&oe(e,t,"src",l.src,l,null);return;case"input":K("invalid",e);var u=i=o=n=null,r=null,g=null;for(a in l)if(l.hasOwnProperty(a)){var x=l[a];if(x!=null)switch(a){case"name":n=x;break;case"type":o=x;break;case"checked":r=x;break;case"defaultChecked":g=x;break;case"value":i=x;break;case"defaultValue":u=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(137,t));break;default:oe(e,t,a,x,l,null)}}Hu(e,i,u,r,g,o,n,!1);return;case"select":K("invalid",e),a=o=i=null;for(n in l)if(l.hasOwnProperty(n)&&(u=l[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:oe(e,t,n,u,l,null)}t=i,l=o,e.multiple=!!a,t!=null?Wl(e,!!a,t,!1):l!=null&&Wl(e,!!a,l,!0);return;case"textarea":K("invalid",e),i=n=a=null;for(o in l)if(l.hasOwnProperty(o)&&(u=l[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:oe(e,t,o,u,l,null)}Ru(e,a,n,i);return;case"option":for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null)&&(r==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":oe(e,t,r,a,l,null));return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(a=0;a<hn.length;a++)K(hn[a],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:oe(e,t,g,a,l,null)}return;default:if(ic(t)){for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!==void 0&&Vo(e,t,x,a,l,void 0));return}}for(u in l)l.hasOwnProperty(u)&&(a=l[u],a!=null&&oe(e,t,u,a,l,null))}function Th(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,u=null,r=null,g=null,x=null;for(v in l){var S=l[v];if(l.hasOwnProperty(v)&&S!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=S;default:a.hasOwnProperty(v)||oe(e,t,v,null,a,S)}}for(var p in a){var v=a[p];if(S=l[p],a.hasOwnProperty(p)&&(v!=null||S!=null))switch(p){case"type":i=v;break;case"name":n=v;break;case"checked":g=v;break;case"defaultChecked":x=v;break;case"value":o=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(137,t));break;default:v!==S&&oe(e,t,p,v,a,S)}}ac(e,o,u,r,g,x,i,n);return;case"select":v=o=u=p=null;for(i in l)if(r=l[i],l.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":v=r;default:a.hasOwnProperty(i)||oe(e,t,i,null,a,r)}for(n in a)if(i=a[n],r=l[n],a.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":p=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==r&&oe(e,t,n,i,a,r)}t=u,l=o,a=v,p!=null?Wl(e,!!l,p,!1):!!a!=!!l&&(t!=null?Wl(e,!!l,t,!0):Wl(e,!!l,l?[]:"",!1));return;case"textarea":v=p=null;for(u in l)if(n=l[u],l.hasOwnProperty(u)&&n!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:oe(e,t,u,null,a,n)}for(o in a)if(n=a[o],i=l[o],a.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":p=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&oe(e,t,o,n,a,i)}ku(e,p,v);return;case"option":for(var O in l)p=l[O],l.hasOwnProperty(O)&&p!=null&&!a.hasOwnProperty(O)&&(O==="selected"?e.selected=!1:oe(e,t,O,null,a,p));for(r in a)p=a[r],v=l[r],a.hasOwnProperty(r)&&p!==v&&(p!=null||v!=null)&&(r==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":oe(e,t,r,p,a,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in l)p=l[H],l.hasOwnProperty(H)&&p!=null&&!a.hasOwnProperty(H)&&oe(e,t,H,null,a,p);for(g in a)if(p=a[g],v=l[g],a.hasOwnProperty(g)&&p!==v&&(p!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,t));break;default:oe(e,t,g,p,a,v)}return;default:if(ic(t)){for(var ue in l)p=l[ue],l.hasOwnProperty(ue)&&p!==void 0&&!a.hasOwnProperty(ue)&&Vo(e,t,ue,void 0,a,p);for(x in a)p=a[x],v=l[x],!a.hasOwnProperty(x)||p===v||p===void 0&&v===void 0||Vo(e,t,x,p,a,v);return}}for(var m in l)p=l[m],l.hasOwnProperty(m)&&p!=null&&!a.hasOwnProperty(m)&&oe(e,t,m,null,a,p);for(S in a)p=a[S],v=l[S],!a.hasOwnProperty(S)||p===v||p==null&&v==null||oe(e,t,S,p,a,v)}function Gf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,o=n.initiatorType,u=n.duration;if(i&&u&&Gf(o)){for(o=0,u=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],g=r.startTime;if(g>u)break;var x=r.transferSize,S=r.initiatorType;x&&Gf(S)&&(r=r.responseEnd,o+=x*(r<u?1:(u-g)/(r-g)))}if(--a,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ko=null,Jo=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function Qf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fo=null;function Ch(){var e=window.event;return e&&e.type==="popstate"?e===Fo?!1:(Fo=e,!0):(Fo=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,Oh=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Dh=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(_h)}:Zf;function _h(e){setTimeout(function(){throw e})}function pl(e){return e==="head"}function Kf(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ea(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")pn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,pn(l);for(var i=l.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[_a]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=o}}else l==="body"&&pn(e.ownerDocument.body);l=n}while(l);Ea(t)}function Jf(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function $o(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":$o(l),tc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Uh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Bh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=vt(e.nextSibling),e===null))return null;return e}function Wf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Io(e){return e.data==="$?"||e.data==="$~"}function Po(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var eu=null;function Ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return vt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function If(e,t,l){switch(t=Oi(l),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tc(e)}var bt=new Map,Pf=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=M.d;M.d={f:kh,r:Rh,D:qh,C:Yh,L:Lh,m:Gh,X:Xh,S:Qh,M:Zh};function kh(){var e=Ft.f(),t=Ni();return e||t}function Rh(e){var t=Vl(e);t!==null&&t.tag===5&&t.type==="form"?gs(t):Ft.r(e)}var za=typeof document>"u"?null:document;function ed(e,t,l){var a=za;if(a&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Pf.has(n)||(Pf.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),He(t,"link",e),Ce(t),a.head.appendChild(t)))}}function qh(e){Ft.D(e),ed("dns-prefetch",e,null)}function Yh(e,t){Ft.C(e,t),ed("preconnect",e,t)}function Lh(e,t,l){Ft.L(e,t,l);var a=za;if(a&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+st(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+st(l.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=wa(e);break;case"script":i=Aa(e)}bt.has(i)||(e=k({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),bt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(vn(i))||t==="script"&&a.querySelector(bn(i))||(t=a.createElement("link"),He(t,"link",e),Ce(t),a.head.appendChild(t)))}}function Gh(e,t){Ft.m(e,t);var l=za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(a)+'"][href="'+st(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Aa(e)}if(!bt.has(i)&&(e=k({rel:"modulepreload",href:e},t),bt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(bn(i)))return}a=l.createElement("link"),He(a,"link",e),Ce(a),l.head.appendChild(a)}}}function Qh(e,t,l){Ft.S(e,t,l);var a=za;if(a&&e){var n=Kl(a).hoistableStyles,i=wa(e);t=t||"default";var o=n.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector(vn(i)))u.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},l),(l=bt.get(i))&&tu(e,l);var r=o=a.createElement("link");Ce(r),He(r,"link",e),r._p=new Promise(function(g,x){r.onload=g,r.onerror=x}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,_i(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},n.set(i,o)}}}function Xh(e,t){Ft.X(e,t);var l=za;if(l&&e){var a=Kl(l).hoistableScripts,n=Aa(e),i=a.get(n);i||(i=l.querySelector(bn(n)),i||(e=k({src:e,async:!0},t),(t=bt.get(n))&&lu(e,t),i=l.createElement("script"),Ce(i),He(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Zh(e,t){Ft.M(e,t);var l=za;if(l&&e){var a=Kl(l).hoistableScripts,n=Aa(e),i=a.get(n);i||(i=l.querySelector(bn(n)),i||(e=k({src:e,async:!0,type:"module"},t),(t=bt.get(n))&&lu(e,t),i=l.createElement("script"),Ce(i),He(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function td(e,t,l,a){var n=(n=Z.current)?Di(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=wa(l.href),l=Kl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=wa(l.href);var i=Kl(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(vn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),bt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},bt.set(e,l),i||Vh(n,e,l,o.state))),t&&a===null)throw Error(s(528,""));return o}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Aa(l),l=Kl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function wa(e){return'href="'+st(e)+'"'}function vn(e){return'link[rel="stylesheet"]['+e+"]"}function ld(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Vh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),He(t,"link",l),Ce(t),e.head.appendChild(t))}function Aa(e){return'[src="'+st(e)+'"]'}function bn(e){return"script[async]"+e}function ad(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+st(l.href)+'"]');if(a)return t.instance=a,Ce(a),a;var n=k({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ce(a),He(a,"style",n),_i(a,l.precedence,e),t.instance=a;case"stylesheet":n=wa(l.href);var i=e.querySelector(vn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;a=ld(l),(n=bt.get(n))&&tu(a,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var o=i;return o._p=new Promise(function(u,r){o.onload=u,o.onerror=r}),He(i,"link",a),t.state.loading|=4,_i(i,l.precedence,e),t.instance=i;case"script":return i=Aa(l.src),(n=e.querySelector(bn(i)))?(t.instance=n,Ce(n),n):(a=l,(n=bt.get(i))&&(a=k({},l),lu(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),He(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,_i(a,l.precedence,e));return t.instance}function _i(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function tu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ui=null;function nd(e,t,l){if(Ui===null){var a=new Map,n=Ui=new Map;n.set(l,a)}else n=Ui,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[_a]||i[De]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function id(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Kh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jh(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=wa(a.href),i=t.querySelector(vn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Bi.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ce(i);return}i=t.ownerDocument||t,a=ld(a),(n=bt.get(n))&&tu(a,n),i=i.createElement("link"),Ce(i);var o=i;o._p=new Promise(function(u,r){o.onload=u,o.onerror=r}),He(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Bi.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var au=0;function Wh(e,t){return e.stylesheets&&e.count===0&&ki(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&au===0&&(au=62500*Mh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>au?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Bi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ki(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hi=null;function ki(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hi=new Map,t.forEach(Fh,e),Hi=null,Bi.call(e))}function Fh(e,t){if(!(t.state.loading&4)){var l=Hi.get(e);if(l)var a=l.get(null);else{l=new Map,Hi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(l.set(o.dataset.precedence,o),a=o)}a&&l.set(null,a)}n=t.instance,o=n.getAttribute("data-precedence"),i=l.get(o)||a,i===a&&l.set(null,n),l.set(o,n),this.count++,a=Bi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var xn={$$typeof:Se,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function $h(e,t,l,a,n,i,o,u,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function od(e,t,l,a,n,i,o,u,r,g,x,S){return e=new $h(e,t,l,o,r,g,x,S,u),t=1,i===!0&&(t|=24),i=at(3,null,null,t),e.current=i,i.stateNode=e,t=Bc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},qc(i),e}function ud(e){return e?(e=aa,e):aa}function rd(e,t,l,a,n,i){n=ud(n),a.context===null?a.context=n:a.pendingContext=n,a=il(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=cl(e,a,t),l!==null&&(Ie(l,e,t),Fa(l,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function nu(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function fd(e){if(e.tag===13||e.tag===31){var t=Ml(e,67108864);t!==null&&Ie(t,e,67108864),nu(e,67108864)}}function dd(e){if(e.tag===13||e.tag===31){var t=ut();t=Ii(t);var l=Ml(e,t);l!==null&&Ie(l,e,t),nu(e,t)}}var Ri=!0;function Ih(e,t,l,a){var n=y.T;y.T=null;var i=M.p;try{M.p=2,iu(e,t,l,a)}finally{M.p=i,y.T=n}}function Ph(e,t,l,a){var n=y.T;y.T=null;var i=M.p;try{M.p=8,iu(e,t,l,a)}finally{M.p=i,y.T=n}}function iu(e,t,l,a){if(Ri){var n=cu(a);if(n===null)Zo(e,t,a,qi,l),hd(e,a);else if(tg(n,e,t,l,a))a.stopPropagation();else if(hd(e,a),t&4&&-1<eg.indexOf(e)){for(;n!==null;){var i=Vl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=zl(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var r=1<<31-tt(o);u.entanglements[1]|=r,o&=~r}Ct(i),(te&6)===0&&(ji=Pe()+500,mn(0))}}break;case 31:case 13:u=Ml(i,2),u!==null&&Ie(u,i,2),Ni(),nu(i,2)}if(i=cu(a),i===null&&Zo(e,t,a,qi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Zo(e,t,a,null,l)}}function cu(e){return e=oc(e),ou(e)}var qi=null;function ou(e){if(qi=null,e=Zl(e),e!==null){var t=D(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=X(t),e!==null)return e;e=null}else if(l===31){if(e=re(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qi=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qd()){case yu:return 2;case ju:return 8;case Tn:case Yd:return 32;case Su:return 268435456;default:return 32}default:return 32}}var uu=!1,vl=null,bl=null,xl=null,yn=new Map,jn=new Map,yl=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hd(e,t){switch(e){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":bl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Sn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Vl(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function tg(e,t,l,a,n){switch(t){case"focusin":return vl=Sn(vl,e,t,l,a,n),!0;case"dragenter":return bl=Sn(bl,e,t,l,a,n),!0;case"mouseover":return xl=Sn(xl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return yn.set(i,Sn(yn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,jn.set(i,Sn(jn.get(i)||null,e,t,l,a,n)),!0}return!1}function gd(e){var t=Zl(e.target);if(t!==null){var l=D(t);if(l!==null){if(t=l.tag,t===13){if(t=X(l),t!==null){e.blockedOn=t,Tu(e.priority,function(){dd(l)});return}}else if(t===31){if(t=re(l),t!==null){e.blockedOn=t,Tu(e.priority,function(){dd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=cu(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);cc=a,l.target.dispatchEvent(a),cc=null}else return t=Vl(l),t!==null&&fd(t),e.blockedOn=l,!1;t.shift()}return!0}function pd(e,t,l){Yi(e)&&l.delete(t)}function lg(){uu=!1,vl!==null&&Yi(vl)&&(vl=null),bl!==null&&Yi(bl)&&(bl=null),xl!==null&&Yi(xl)&&(xl=null),yn.forEach(pd),jn.forEach(pd)}function Li(e,t){e.blockedOn===t&&(e.blockedOn=null,uu||(uu=!0,b.unstable_scheduleCallback(b.unstable_NormalPriority,lg)))}var Gi=null;function vd(e){Gi!==e&&(Gi=e,b.unstable_scheduleCallback(b.unstable_NormalPriority,function(){Gi===e&&(Gi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(ou(a||l)===null)continue;break}var i=Vl(l);i!==null&&(e.splice(t,3),t-=3,io(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ea(e){function t(r){return Li(r,e)}vl!==null&&Li(vl,e),bl!==null&&Li(bl,e),xl!==null&&Li(xl,e),yn.forEach(t),jn.forEach(t);for(var l=0;l<yl.length;l++){var a=yl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<yl.length&&(l=yl[0],l.blockedOn===null);)gd(l),l.blockedOn===null&&yl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],o=n[Ve]||null;if(typeof i=="function")o||vd(l);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Ve]||null)u=o.formAction;else if(ou(n)!==null)continue}else u=o.action;typeof u=="function"?l[a+1]=u:(l.splice(a,3),a-=3),vd(l)}}}function bd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ru(e){this._internalRoot=e}Qi.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var l=t.current,a=ut();rd(l,a,e,t,null,null)},Qi.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rd(e.current,2,null,e,null,null),Ni(),t[Xl]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var l=0;l<yl.length&&t!==0&&t<yl[l].priority;l++);yl.splice(l,0,e),l===0&&gd(e)}};var xd=A.version;if(xd!=="19.2.4")throw Error(s(527,xd,"19.2.4"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=N(t),e=e!==null?Q(e):null,e=e===null?null:e.stateNode,e};var ag={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Ca=Xi.inject(ag),et=Xi}catch{}}return zn.createRoot=function(e,t){if(!E(e))throw Error(s(299));var l=!1,a="",n=ws,i=As,o=Es;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=od(e,1,!1,null,null,l,a,null,n,i,o,bd),e[Xl]=t.current,Xo(e),new ru(t)},zn.hydrateRoot=function(e,t,l){if(!E(e))throw Error(s(299));var a=!1,n="",i=ws,o=As,u=Es,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(o=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=od(e,1,!0,t,l??null,a,n,r,i,o,u,bd),t.context=ud(null),l=t.current,a=ut(),a=Ii(a),n=il(a),n.callback=null,cl(l,n,a),l=a,t.current.lanes=l,Da(t,l),Ct(t),e[Xl]=t.current,Xo(e),new Qi(t)},zn.version="19.2.4",zn}var Md;function mg(){if(Md)return du.exports;Md=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(A){console.error(A)}}return b(),du.exports=dg(),du.exports}var hg=mg();const Dd=Ee.createContext(),gg=({children:b})=>{const[A,w]=Ee.useState(window.location.pathname);Ee.useEffect(()=>{const E=()=>{w(window.location.pathname)};return window.addEventListener("popstate",E),()=>window.removeEventListener("popstate",E)},[]);const s=E=>{if(typeof E=="number"){window.history.go(E);return}window.history.pushState({},"",E),w(E),window.scrollTo(0,0)};return c.jsx(Dd.Provider,{value:{currentPath:A,navigate:s},children:b})},Ot=()=>Ee.useContext(Dd),wn=({to:b,children:A,className:w,onClick:s})=>{const{navigate:E}=Ot(),D=X=>{X.preventDefault(),s&&s(X),E(b)};return c.jsx("a",{href:b,className:w,onClick:D,children:A})},An=()=>{const[b,A]=Ee.useState(!1),[w,s]=Ee.useState(!1),{navigate:E}=Ot();Ee.useEffect(()=>{const T=N=>{const Q=document.querySelector(".navbar-wrapper");Q&&!Q.contains(N.target)&&A(!1)};return document.addEventListener("click",T),()=>document.removeEventListener("click",T)},[]);const D=[{title:"Painting",subtitle:"Bring life and elegance",id:"painting"},{title:"Water proofing",subtitle:"Stop leakage permanently",id:"water-proofing"},{title:"Tile grouting",subtitle:"Seamless tile gap filling",id:"tile-grouting"},{title:"Wall modelling",subtitle:"Luxury PVC & Wood paneling",id:"wall-modelling"},{title:"Wall paper",subtitle:"3D & Custom designs",id:"wall-paper"},{title:"Wood polish",subtitle:"PU & Melamyne finishes",id:"wood-polish"},{title:"False ceiling",subtitle:"Modern Gypsum & POP",id:"false-ceiling"}],X=T=>{E(`/service/${T}`),A(!1),s(!1)},re=()=>{s(!w)};return Ee.useEffect(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[w]),c.jsxs("nav",{className:"navbar-wrapper",children:[c.jsxs("div",{className:"navbar-inner container",children:[c.jsx(wn,{to:"/",className:"navbar-logo",children:c.jsx("span",{className:"brand-name",children:"Urban Aura Interiors"})}),c.jsxs("div",{className:"navbar-links desktop-only",children:[c.jsxs("div",{className:"nav-item-dropdown",children:[c.jsx("button",{className:`nav-link dropdown-toggle ${b?"active":""}`,onClick:()=>A(!b),children:"Services"}),b&&c.jsx("div",{className:"services-dropdown",children:c.jsx("ul",{children:D.map((T,N)=>c.jsxs("li",{className:"dropdown-item",onClick:()=>X(T.id),children:[c.jsx("div",{className:"item-title",children:T.title}),c.jsx("div",{className:"item-subtitle",children:T.subtitle})]},N))})})]}),c.jsx(wn,{to:"/",className:"nav-link",children:"Blogs"}),c.jsx(wn,{to:"/",className:"nav-link",children:"App"})]}),c.jsx("div",{className:"navbar-actions desktop-only",children:c.jsxs("button",{className:"btn-primary",onClick:()=>window.open(`https://wa.me/917903045742?text=${encodeURIComponent("Hello Urban Aura Interiors, I want to become a service provider.")}`,"_blank"),children:[c.jsx("span",{className:"icon",children:"Store"}),"Become Service Provider"]})}),c.jsx("button",{className:"mobile-menu-btn",onClick:re,children:w?c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M18 6L6 18",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M6 6L18 18",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}):c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M4 6H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4 12H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4 18H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),w&&c.jsx("div",{className:"mobile-menu-overlay",children:c.jsx("div",{className:"mobile-menu-content",children:c.jsxs("div",{className:"mobile-nav-links",children:[c.jsxs("div",{className:"mobile-nav-item",children:[c.jsx("span",{className:"mobile-nav-header",children:"Services"}),c.jsx("div",{className:"mobile-services-grid",children:D.map((T,N)=>c.jsx("div",{className:"mobile-service-item",onClick:()=>X(T.id),children:T.title},N))})]}),c.jsx(wn,{to:"/",className:"mobile-nav-link",onClick:()=>s(!1),children:"Blogs"}),c.jsx(wn,{to:"/",className:"mobile-nav-link",onClick:()=>s(!1),children:"App"}),c.jsx("div",{className:"mobile-nav-item",children:c.jsx("button",{className:"btn-primary width-full",onClick:()=>{window.open(`https://wa.me/917903045742?text=${encodeURIComponent("Hello Urban Aura Interiors, I want to become a service provider.")}`,"_blank"),s(!1)},children:"Become Service Provider"})})]})})})]}),c.jsx("style",{children:`
        .navbar-wrapper {
          width: 100%;
          background-color: #ffffff;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--spacing-md);
          padding-bottom: var(--spacing-md);
        }

        .navbar-logo .brand-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000;
          letter-spacing: -0.02em;
          text-transform: none;
        }

        .navbar-logo {
          text-decoration: none;
        }

        .navbar-links {
          display: flex;
          gap: var(--spacing-xl);
          font-weight: 500;
          font-size: 1rem;
          color: var(--color-black);
          align-items: center;
        }

        .nav-link {
          color: var(--color-black);
          text-decoration: none;
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          padding: 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-secondary);
        }

        .nav-item-dropdown {
          position: relative;
        }

        .services-dropdown {
          position: absolute;
          top: 150%;
          left: -20px;
          background-color: #ffffff;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          border: 1px solid #f3f4f6;
          width: 300px;
          max-height: 450px;
          overflow-y: auto;
          z-index: 1001;
          padding: 0.75rem 0;
        }

        .services-dropdown::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 40px;
            width: 12px;
            height: 12px;
            background-color: #ffffff;
            transform: rotate(45deg);
            border-left: 1px solid #f3f4f6;
            border-top: 1px solid #f3f4f6;
        }

        .services-dropdown::-webkit-scrollbar {
            width: 6px;
        }
        .services-dropdown::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
        }
        .services-dropdown::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        .services-dropdown::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }

        .services-dropdown ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .dropdown-item {
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            transition: background-color 0.2s;
            border-bottom: 1px solid #f9fafb;
        }

        .dropdown-item:last-child {
            border-bottom: none;
        }

        .dropdown-item:hover {
            background-color: #f8fafc;
        }

        .item-title {
            font-weight: 600;
            color: #1f2937;
            font-size: 0.95rem;
            margin-bottom: 0.2rem;
        }

        .item-subtitle {
            font-size: 0.8rem;
            color: #6b7280;
            line-height: 1.3;
        }

        .btn-primary {
          background-color: var(--color-black);
          color: var(--color-white);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-sm);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.2s;
          justify-content: center;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
        }

        .icon {
           font-size: 1.1em;
        }

        /* Mobile Styles */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          padding: 8px; /* Increased touch target */
          cursor: pointer;
          z-index: 1002;
          border-radius: 8px;
          transition: background-color 0.2s;
        }

        .mobile-menu-btn:hover {
            background-color: #f3f4f6;
        }

        .mobile-menu-overlay {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-only {
            display: none;
          }

          .mobile-menu-btn {
            display: flex; /* Flex to center SVG */
            align-items: center;
            justify-content: center;
          }

          .mobile-menu-overlay {
            display: block;
            position: fixed;
            top: 72px; /* Adjusted to match navbar height roughly */
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ffffff;
            z-index: 999;
            overflow-y: auto;
            padding: 1.5rem; /* More padding */
            border-top: 1px solid #f3f4f6;
            animation: slideDown 0.3s ease-out;
          }
          
          @keyframes slideDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
          }

          .mobile-menu-content {
            display: flex;
            flex-direction: column;
            gap: 2rem; /* Increased gap */
          }

          .mobile-nav-header {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 600;
            color: #9CA3AF;
            margin-bottom: 1rem;
            display: block;
          }

          .mobile-services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* Two columns for services */
            gap: 0.75rem;
          }
          
          .mobile-service-item {
            padding: 0.75rem;
            background-color: #f9fafb;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--color-text-main);
            text-align: center;
            border: 1px solid transparent;
            transition: all 0.2s;
          }
          
          .mobile-service-item:active {
            background-color: #f3f4f6;
            transform: scale(0.98);
          }

          .mobile-nav-link {
            font-size: 1.25rem; /* Larger links */
            font-weight: 600;
            color: var(--color-black);
            padding: 0.5rem 0;
            border-bottom: 1px solid #f3f4f6;
            display: block;
          }
          
          .mobile-nav-link:last-of-type {
             border-bottom: none;
          }

          .mobile-nav-item {
              display: flex;
              flex-direction: column;
          }

          .width-full {
            width: 100%;
            padding: 1rem; /* Choose button padding */
            font-size: 1rem;
            margin-top: 1rem;
          }
        }
      `})]})},Ta=()=>c.jsxs("footer",{children:[c.jsx("div",{className:"seo-links-section",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Categories"}),c.jsx("p",{children:"Professional Painting Near Me | Exterior & Interior Painting Near Me | Textured Wall Painting Near Me | Wallpaper Installation Near Me | Wall Modelling & Paneling Near Me | Wood Polish & Furniture Restoration Near Me | False Ceiling Decor Near Me | Water Proofing Near Me | Tile Grouting Near Me | PVC Wall Paneling Near Me | 3D Wallpaper Near Me | PU Polish Near Me | Gypsum Ceiling Near Me | Home Painting Services Aligarh | Painting Contractors Mathura | Water Proofing Specialists Agra | Wall Modelling Hathras"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Services Near Me"}),c.jsx("p",{children:"Professional Painting Near Me | Textured Painting Near Me | Interior Decor Near Me | Wall Modelling Near Me | Wood Polish Near Me | Wallpaper Installation Near Me | False Ceiling Near Me | Water Proofing Near Me | Tile Grouting Near Me | Home Renovation Aligarh | Interior Design Mathura | Wall Decor Agra | Ceiling Designs Hathras"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Explore Our Premium Wall & Ceiling Services"}),c.jsx("p",{children:"Full Home Painting | Epoxy Tile Grouting | PVC Wall Paneling | 3D Wallpaper Decor | PU Wood Polishing | Water Proofing Solutions | Gypsum False Ceiling | POP Ceiling Designs"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Engage With Our Community in the Forum"}),c.jsx("p",{children:"Home Maintenance Tips | Painting Care & Cleaning Guide | Wall Protection Best Practices | Water Proofing Discussions | Interior Design Solutions | Wall Decor & Care Tips | Customer Experiences & Reviews | Ask an Expert"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Other Services We Provide"}),c.jsx("p",{children:"Women Salon at Home | Men Salon at Home | Beauty & Grooming Services | Real Estate Property Services | Property Buy & Sell Assistance | Home Inspection Services | Expert Consultation Services"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Aligarh"}),c.jsx("p",{children:"Civil Lines | Quarsi | Ramdaspur | Sasni Gate | Centre Point | Dodhpur | Surendra Nagar | Mahavir Ganj | Delhi Gate | AMU Campus Area | Achal Tal | Vishnupuri | Lodha Road | Atrauli Road | Gular Road | Rasalganj | Naurangabad | Jamalpur"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Mathura"}),c.jsx("p",{children:"Vrindavan | Govardhan | Kosi Kalan | Chhata | Radhika Vihar | Masani Road | Janambhoomi Area | Goverdhan Chauraha | Krishna Nagar | Dampier Nagar | Bhuteshwar Road | Holi Gate Area | Aurangabad | Farah | Raya"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Agra"}),c.jsx("p",{children:"Tajganj | Sikandra | Kamla Nagar | Dayal Bagh | Shahganj | Rakabganj | Fatehabad Road | Sadar Bazaar | Bodla | Trans Yamuna Colony | Khandari | Shastripuram | Tedi Baghia | Arjun Nagar | Kalindi Vihar"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Hathras"}),c.jsx("p",{children:"Hathras City | Sadabad | Mursan | Sikandra Rao | Hasayan | Sasni | Purdilnagar | Iglas | Jalesar Road Area | Bagla Area | Nagla Hira Singh | Chandpa | Ladpur | Rati Ka Nagla | Ahamadpur | Rampur | Keshopur"})]})]})}),c.jsx("div",{className:"main-footer",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"footer-grid",children:[c.jsx("div",{className:"footer-col brand-col",children:c.jsxs("h2",{className:"footer-brand",children:["Urban ",c.jsx("span",{className:"brand-highlight",children:"Aura"})," Interiors"]})}),c.jsxs("div",{className:"footer-col links-col",children:[c.jsx("h4",{children:"Links"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"/",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Home"})}),c.jsx("li",{children:c.jsx("a",{href:"/about",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/about"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"About us"})}),c.jsx("li",{children:c.jsx("a",{href:"/contact",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/contact"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Contact Us"})}),c.jsx("li",{children:c.jsx("a",{href:"/terms",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/terms"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Terms and Conditions"})}),c.jsx("li",{children:c.jsx("a",{href:"/privacy",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/privacy"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Privacy Policy"})})]})]}),c.jsxs("div",{className:"footer-col newsletter-col",children:[c.jsx("h4",{children:"Join our mailing list and get industry insights"}),c.jsx("div",{className:"newsletter-form",children:c.jsx("input",{type:"email",placeholder:"your email",id:"footer-email"})}),c.jsx("button",{className:"join-btn",onClick:()=>{const b=document.getElementById("footer-email").value,A=`Hello Urban Aura Interiors, I would like to join your newsletter. ${b?"My email is "+b:""}`;window.open(`https://wa.me/917903045742?text=${encodeURIComponent(A)}`,"_blank")},children:"Join Newsletter"}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"https://wa.me/917903045742",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}),c.jsx("a",{href:"#",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),c.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),c.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),c.jsx("a",{href:"#",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})})]})]})]})})}),c.jsx("style",{children:`
                /* SEO Links Styles */
                .seo-links-section {
                    background-color: #f8f9ff; /* Very light purple/gray per image */
                    padding: 4rem 1rem;
                }

                .seo-group {
                    margin-bottom: 2rem;
                }

                .seo-group h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 0.75rem;
                }

                .seo-group p {
                    font-size: 0.85rem;
                    color: #6b7280;
                    line-height: 1.6;
                    margin: 0;
                }

                /* Main Footer Styles */
                .main-footer {
                    background-color: #000000;
                    color: #ffffff;
                    padding: 4rem 1rem;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1.5fr;
                    gap: 3rem;
                }

                .footer-brand {
                    font-size: 2.5rem;
                    line-height: 1.1;
                    font-weight: 700;
                    margin-bottom: 3rem;
                }

                .brand-highlight {
                    background: linear-gradient(90deg, #9333ea, #db2777); /* Purple to Pink gradient */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .aura-logo {
                    height: 50px;
                    width: auto;
                }

                .links-col h4, .newsletter-col h4 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #f3f4f6;
                }

                .links-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .links-col li {
                    margin-bottom: 1rem;
                }

                .links-col a {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .links-col a:hover {
                    color: #ffffff;
                }

                .newsletter-form input {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: transparent;
                    border: 1px solid #4b5563;
                    border-radius: 4px;
                    color: #ffffff;
                    margin-bottom: 1rem;
                }
                
                .join-btn {
                    padding: 0.75rem 1.5rem;
                    background-color: transparent;
                    border: 1px solid #ffffff;
                    color: #ffffff;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.2s;
                    margin-bottom: 2rem;
                }

                .join-btn:hover {
                    background-color: #ffffff;
                    color: #000000;
                }

                .social-icons {
                    display: flex;
                    gap: 1.5rem;
                }

                .social-icons a {
                    color: #ffffff;
                    transition: opacity 0.2s;
                }

                .social-icons a:hover {
                    opacity: 0.8;
                }

                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
            `})]}),pg=()=>c.jsxs("div",{className:"hero-image-wrapper",children:[c.jsx("div",{className:"image-frame",children:c.jsx("img",{src:"/main image.png",alt:"AC Service Professional",className:"professional-image"})}),c.jsx("div",{className:"floating-badge badge-trust",children:c.jsxs("div",{className:"badge-content",children:[c.jsx("span",{className:"badge-label",children:"Trust Factor"}),c.jsxs("div",{className:"badge-value-row",children:[c.jsx("span",{className:"icon-check-circle",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",fill:"#10B981",stroke:"#10B981",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M7.75 12L10.58 14.83L16.25 9.17004",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),c.jsx("span",{className:"badge-value",children:"100% Verified"})]})]})}),c.jsxs("div",{className:"floating-badge badge-pros",children:[c.jsx("div",{className:"badge-icon-box",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),c.jsxs("div",{className:"badge-content",children:[c.jsx("span",{className:"badge-label-small",children:"Active Pros"}),c.jsx("span",{className:"badge-value-large",children:"200+"})]})]}),c.jsx("style",{children:`
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin-left: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        }

        .image-frame {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          background-color: #333; /* Fallback */
          transform: rotate(-3deg); /* Slight tilt from image */
          border: 4px solid var(--color-white);
          box-shadow: var(--shadow-xl); /* Strong shadow */
          width: 320px;
          height: 400px;
          max-width: 80vw;
          max-height: 100vw;
        }

        .professional-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Float badges */
        .floating-badge {
          position: absolute;
          background: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          z-index: 10;
        }

        .badge-trust {
          top: 10%;
          right: -20px;
          min-width: 140px;
        }

        .badge-pros {
          bottom: 10%;
          left: -20px;
          min-width: 140px;
        }

        .badge-content {
          display: flex;
          flex-direction: column;
        }

        .badge-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .badge-value-row {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .badge-value {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-text-main);
        }

        .badge-icon-box {
           background-color: #eff6ff;
           padding: 0.5rem;
           border-radius: var(--radius-sm);
           color: #3b82f6;
           display: flex;
           align-items: center;
           justify-content: center;
        }

        .badge-label-small {
           font-size: 0.7rem;
           color: var(--color-text-muted);
        }
        
        .badge-value-large {
           font-size: 1.1rem;
           font-weight: 800;
           color: var(--color-text-main);
        }

        @media (max-width: 480px) {
           .hero-image-wrapper {
             max-width: 100%;
             transform: scale(0.9);
           }
           
           .badge-trust {
             right: -10px;
             top: 5%;
           }
           
           .badge-pros {
             left: -10px;
             bottom: 5%;
           }
        }
        
      `})]}),vu={painting:{id:"painting",title:"Painting",description:"Bring life, colour, and elegance to your space.",rating:4.9,reviewsCount:"1500+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"🎨 Painting – Our Professional Process",description:`At **Urban Aura Interiors**, we follow a structured and professional painting process to ensure high-quality results, timely delivery, and complete customer satisfaction.

1️⃣ **Site Inspection & Consultation**
We begin with a detailed site visit to understand your space, surface condition, colour preferences, and design expectations. Our experts guide you in selecting the right paint type, finish, and shades based on lighting and usage.

2️⃣ **Surface Preparation**
A perfect finish starts with proper preparation. We clean the surfaces thoroughly, remove dust, grease, and old paint flakes, and repair cracks or dents using putty and primer to create a smooth, even base.

3️⃣ **Protection & Masking**
Furniture, floors, fittings, and fixtures are carefully covered and masked to prevent paint spills or stains. This ensures a clean and damage-free painting process.

4️⃣ **Primer Application**
High-quality primer is applied to enhance paint adhesion, improve durability, and ensure uniform colour coverage. This step is crucial for a long-lasting and professional finish.

5️⃣ **Precision Painting**
Our skilled painters apply premium paints using advanced tools and techniques. Whether it’s smooth finishes, textures, or designer patterns, we focus on even coats, clean edges, and flawless detailing.

6️⃣ **Quality Inspection & Touch-Ups**
After completion, our team conducts a thorough quality check. Minor touch-ups are done where required to ensure a perfect final look that meets our standards and your expectations.

7️⃣ **Final Cleanup & Handover**
We clean the site completely, remove all coverings, and hand over a fresh, beautifully painted space—ready for you to enjoy.

✨ **Result You Can Expect**
✔ Elegant finish
✔ Long-lasting quality
✔ Zero mess delivery
✔ On-time completion

**Urban Aura Interiors — Creating an Aura That Speaks.**`},subServices:[{title:"Full Home Painting",description:"Complete house makeover with premium finishes.",price:"4999",rating:4.9,image:"/hero service (2).png",isMostBooked:!0},{title:"Textured Wall Painting",description:"Designer wall patterns and effects.",price:"999",rating:4.8,image:"/hero service (2).png",isMostBooked:!0},{title:"Exterior Painting",description:"Weather-resistant solutions for your home's exterior.",price:"5999",rating:4.7,image:"/hero service (2).png"}],reviews:[]},"water-proofing":{id:"water-proofing",title:"Water proofing",description:"Stop leakage and dampness permanently.",rating:4.8,reviewsCount:"1200+",heroImage:"/plumber.jpeg",expertImage:"/plumber.jpeg",about:{title:"Expert Water Proofing Solutions",description:"Our professional water proofing services ensure your home stays dry and protected from seepage, leaks, and dampness. We use advanced materials and techniques for long-lasting results."},subServices:[{title:"Roof Water Proofing",description:"Terrace leakage solution.",price:"1999",rating:4.8,image:"/plumber.jpeg"},{title:"Bathroom Water Proofing",description:"Stop floor seepage.",price:"999",rating:4.7,image:"/plumber.jpeg"}],reviews:[]},"tile-grouting":{id:"tile-grouting",title:"Tile grouting",description:"Epoxy and cement-based tile gap filling.",rating:4.7,reviewsCount:"800+",heroImage:"/plumber.jpeg",expertImage:"/plumber.jpeg",about:{title:"Seamless Tile Grouting",description:"Enhance the look and durability of your tiles with our expert grouting services. We provide both epoxy and cement-based solutions for stain-resistant and waterproof gaps."},subServices:[{title:"Epoxy Grouting",description:"Stain-resistant and highly durable tile gaps.",price:"499",rating:4.8,image:"/plumber.jpeg"},{title:"Tile Repair & Grouting",description:"Fix loose tiles and fill gaps perfectly.",price:"299",rating:4.6,image:"/plumber.jpeg"}],reviews:[]},"wall-modelling":{id:"wall-modelling",title:"Wall modelling",description:"Luxury PVC and wooden wall paneling.",rating:4.9,reviewsCount:"1100+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Premium Wall Paneling & Modelling",description:"Transform your walls with our luxury modelling services. From PVC panels to premium wooden wall modelling, we create sophisticated interiors that stand out."},subServices:[{title:"PVC Wall Paneling",description:"Durable, stylish, and moisture-resistant.",price:"1499",rating:4.8,image:"/home cleaning.jpg"},{title:"Wooden Wall Modelling",description:"Premium wooden finishes for a luxury look.",price:"2999",rating:4.9,image:"/home cleaning.jpg"}],reviews:[]},"wall-paper":{id:"wall-paper",title:"Wall paper",description:"3D and custom fabric wallpaper installation.",rating:4.8,reviewsCount:"950+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Custom & 3D Wallpaper Installation",description:"Express your style with our wide range of wallpaper solutions. We specialize in 3D depth effects and custom fabric wallpapers for every room."},subServices:[{title:"3D Wallpaper",description:"Lifelike depth and stunning visual effects.",price:"699",rating:4.8,image:"/home cleaning.jpg"},{title:"Custom Print Wallpaper",description:"Personalized designs to match your decor.",price:"899",rating:4.7,image:"/home cleaning.jpg"}],reviews:[]},"wood-polish":{id:"wood-polish",title:"Wood polish",description:"PU and Melamyne polish for furniture.",rating:4.7,reviewsCount:"850+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Superior Wood Polishing",description:"Protect and shine your wooden furniture with our premium polishing services. We offer high-gloss PU and classic Melamyne finishes."},subServices:[{title:"PU Polish",description:"High-gloss luxury finish with durability.",price:"1299",rating:4.9,image:"/home cleaning.jpg"},{title:"Furniture Melamyne",description:"Classic protection and sheen for wood.",price:"799",rating:4.6,image:"/home cleaning.jpg"}],reviews:[]},"false-ceiling":{id:"false-ceiling",title:"False ceiling",description:"Modern Gypsum and POP ceiling designs.",rating:4.9,reviewsCount:"1300+",heroImage:"/home cleaning.jpg",expertImage:"/home cleaning.jpg",about:{title:"Innovative False Ceiling Designs",description:"Elevate your space with our modern false ceiling solutions. We specialize in Gypsum and POP designs that combine aesthetics with lighting integration."},subServices:[{title:"Gypsum False Ceiling",description:"Smooth modern look for homes and offices.",price:"1999",rating:4.9,image:"/home cleaning.jpg"},{title:"POP Ceiling Design",description:"Classic and intricate ceiling patterns.",price:"1499",rating:4.7,image:"/home cleaning.jpg"}],reviews:[]}},vg=()=>{const{navigate:b}=Ot(),[A,w]=Ee.useState(""),[s,E]=Ee.useState([]),[D,X]=Ee.useState(!1),[re,T]=Ee.useState([]);Ee.useEffect(()=>{const I=[];Object.values(vu).forEach(pe=>{pe.id!=="default"&&(I.push({name:pe.title.replace("Get Best ","").replace(" in Aligarh",""),type:"Service Category",link:`/service/${pe.id}`}),pe.subServices&&pe.subServices.forEach(Se=>{I.push({name:Se.title,type:"Service",link:`/service/${pe.id}`})}))}),T(I)},[]);const N=I=>{const pe=I.target.value;if(w(pe),pe.length>1){const Se=re.filter(Ge=>Ge.name.toLowerCase().includes(pe.toLowerCase()));E(Se),X(!0)}else E([]),X(!1)},[Q,k]=Ee.useState("Aligarh"),[se,ke]=Ee.useState(!1),Re=["Aligarh","Agra","Mathura","Hathras"],Me=()=>{if(!A&&!Q)return;const I=`Hello Urban Aura Interiors, I am looking for ${A||"services"} in ${Q}.`;window.open(`https://wa.me/917903045742?text=${encodeURIComponent(I)}`,"_blank")},xt=I=>{const pe=`Hello Urban Aura Interiors, I am looking for ${I} in ${Q}.`;window.open(`https://wa.me/917903045742?text=${encodeURIComponent(pe)}`,"_blank"),X(!1)};return c.jsxs("section",{className:"hero-section",children:[c.jsx("div",{className:"bg-blob blob-1"}),c.jsx("div",{className:"bg-blob blob-2"}),c.jsxs("div",{className:"container hero-inner",children:[c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"hero-badge",children:[c.jsx("span",{className:"badge-dot"}),c.jsx("span",{children:"#1 Service Platform by Urban Aura Interiors"})]}),c.jsxs("h1",{className:"hero-title",children:["Expert Services at",c.jsx("br",{}),c.jsx("span",{className:"text-gradient",children:"Your Doorstep"})]}),c.jsxs("p",{className:"hero-description",children:["Experience reliable, professional, and affordable services from Urban Aura Interiors. ",c.jsx("br",{}),c.jsx("strong",{children:"Creating an Aura that speaks."})]}),c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-bar",children:[c.jsxs("div",{className:"location-select",onClick:()=>ke(!se),children:[c.jsx("span",{className:"icon-location",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z",stroke:"#292D32",strokeWidth:"1.5"}),c.jsx("path",{d:"M3.62001 8.49003C5.59001 -0.169969 18.42 -0.159969 20.38 8.50003C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49003Z",stroke:"#292D32",strokeWidth:"1.5"})]})}),c.jsx("span",{className:"location-text",children:Q}),c.jsx("div",{className:"separator"}),se&&c.jsx("div",{className:"location-dropdown",children:Re.map(I=>c.jsx("div",{className:"location-item",onClick:()=>{k(I),ke(!1)},children:I},I))})]}),c.jsx("input",{type:"text",placeholder:"Search for 'AC Service'...",className:"search-input",value:A,onChange:N,onFocus:()=>{A.length>1&&X(!0)},onBlur:()=>setTimeout(()=>X(!1),200),onKeyPress:I=>I.key==="Enter"&&Me()}),c.jsx("div",{className:"search-actions",children:c.jsx("button",{className:"btn-search",onClick:Me,children:c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M22 22L20 20",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),D&&s.length>0&&c.jsx("div",{className:"search-results",children:s.map((I,pe)=>c.jsxs("div",{className:"search-result-item",onClick:()=>xt(I.name),children:[c.jsx("div",{className:"result-icon",children:c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M22 22L20 20",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),c.jsxs("div",{className:"result-info",children:[c.jsx("span",{className:"result-name",children:I.name}),c.jsx("span",{className:"result-type",children:I.type})]})]},pe))})]}),c.jsxs("div",{className:"hero-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"200+"}),c.jsx("span",{className:"stat-label",children:"Professionals"})]}),c.jsx("div",{className:"stat-divider"}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"10k+"}),c.jsx("span",{className:"stat-label",children:"Happy Customers"})]})]})]}),c.jsx("div",{className:"hero-visual",children:c.jsx(pg,{})})]}),c.jsx("style",{children:`
        .hero-section {
          width: 100%;
          background: #F8F7FF; /* Slightly lighter/cleaner */
          position: relative;
          overflow: hidden;
          padding-top: var(--spacing-lg);
        }

        /* Decorative Background Blobs */
        .bg-blob {
          position: absolute;
          filter: blur(80px);
          opacity: 0.6;
          z-index: 0;
        }

        .blob-1 {
            width: 400px;
            height: 400px;
            background: #E0D4FC;
            top: -100px;
            right: -100px;
            border-radius: 50%;
        }

        .blob-2 {
            width: 300px;
            height: 300px;
            background: #EBF1FF;
            bottom: 0;
            left: -50px;
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }

        .hero-inner {
          display: flex; /* Side by side */
          align-items: center;
          justify-content: space-between;
          padding-top: var(--spacing-xl);
          padding-bottom: 4rem;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 650px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            background: rgba(99, 102, 241, 0.1);
            color: var(--color-secondary);
            font-weight: 600;
            font-size: 0.875rem;
            border-radius: 20px;
            margin-bottom: 1.5rem;
        }

        .badge-dot {
            width: 8px;
            height: 8px;
            background: var(--color-secondary);
            border-radius: 50%;
            display: block;
        }

        /* Typography */
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #111827;
          letter-spacing: -0.02em;
        }
        
        .text-gradient {
           background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
        
        .hero-description {
           font-size: 1.25rem;
           color: #555;
           margin-bottom: 2.5rem;
           line-height: 1.6;
           max-width: 90%;
        }

        /* Search Bar */
        .search-container {
            width: 100%;
            max-width: 550px;
            margin-bottom: 2.5rem;
            position: relative;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: var(--color-white);
          padding: 8px;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08); /* Improved shadow */
          width: 100%;
          position: relative;
          z-index: 20;
          border: 1px solid rgba(0,0,0,0.03);
          transition: box-shadow 0.2s;
        }
        
        .search-bar:focus-within {
            box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
            border-color: rgba(99, 102, 241, 0.2);
        }

        .location-select {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0 1.2rem;
          color: var(--color-text-main);
          font-weight: 600;
          cursor: pointer;
          position: relative;
        }

        .location-dropdown {
            position: absolute;
            top: 120%;
            left: 0;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 150px;
            z-index: 100;
            padding: 8px;
            border: 1px solid #f3f4f6;
        }

        .location-item {
            padding: 8px 12px;
            border-radius: 8px;
            transition: background 0.2s;
            font-size: 0.9rem;
        }

        .location-item:hover {
            background-color: #F8F7FF;
            color: var(--color-secondary);
        }

        .separator {
          width: 1px;
          height: 24px;
          background-color: #e5e7eb;
          margin-left: 0.5rem;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0.75rem;
          font-size: 1.05rem;
          color: var(--color-text-main);
          background: transparent;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-actions {
          padding-right: 4px;
        }

        .btn-search {
          background: linear-gradient(135deg, #1f2937 0%, #000 100%);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .btn-search:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* Search Results Dropdown */
        .search-results {
            position: absolute;
            top: calc(100% + 12px);
            left: 0;
            right: 0;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
            max-height: 320px;
            overflow-y: auto;
            z-index: 100;
            padding: 10px;
            border: 1px solid #f3f4f6;
        }

        .search-result-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 12px 16px;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 12px;
        }

        .search-result-item:hover {
            background-color: #F8F7FF;
        }

        .result-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-secondary);
            opacity: 0.7;
            background: #F3F4F6;
            width: 32px;
            height: 32px;
            border-radius: 8px;
        }

        .result-name {
            font-weight: 600;
            color: #1f2937;
            font-size: 1rem;
        }

        .result-type {
            font-size: 0.8rem;
            color: #6B7280;
        }

        .hero-stats {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-top: 1rem;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
        }

        .stat-number {
            font-size: 1.5rem;
            font-weight: 800;
            color: #111;
        }

        .stat-label {
            font-size: 0.9rem;
            color: #666;
            font-weight: 500;
        }

        .stat-divider {
            width: 1px;
            height: 40px;
            background: #E5E7EB;
        }

        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: flex-end; /* Align image to right */
          position: relative;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1024px) {
            .hero-title {
                font-size: 3rem;
            }
        }

        @media (max-width: 900px) {
           .hero-inner {
              flex-direction: column-reverse; /* Stack: Visual on top (visually, but HTML order... wait) 
              Actually usually on mobile we want Image then Text, OR Text then Image.
              Let's keep text top on mobile often for SEO/CTA, but visually users like seeing the "hero" image.
              Let's try standard column for now: Content top, Image bottom. 
              */
              flex-direction: column;
              text-align: center;
              padding-top: 2rem;
              gap: 3rem;
           }

           .hero-content {
              align-items: center;
              max-width: 100%;
           }
           
           .hero-description {
               text-align: center;
               margin-left: auto;
               margin-right: auto;
           }

           .hero-visual {
             width: 100%;
             justify-content: center;
           }
           
           .hero-title {
               font-size: 2.5rem;
           }
           
           .search-container {
               margin-left: auto;
               margin-right: auto;
           }
        }
        
        @media (max-width: 600px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .search-bar {
               flex-direction: column;
               padding: 12px;
               gap: 10px;
               border-radius: 20px;
            }
            
            .location-select {
                width: 100%;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
                justify-content: center;
            }
            
            .separator {
                display: none;
            }
            
            .search-input {
                width: 100%;
                text-align: center;
                padding: 5px;
            }
            
            .search-actions {
                width: 100%;
            }
            
            .btn-search {
                width: 100%;
                border-radius: 12px;
                height: 40px;
            }
            
            .hero-stats {
                gap: 1.5rem;
            }
        }

      `})]})},bg=({image:b,title:A,rating:w,price:s,isMostBooked:E})=>{const{navigate:D}=Ot(),X=()=>{const re=`Hello Urban Aura Interiors, I want to book ${A} service.`,T=encodeURIComponent(re);window.open(`https://wa.me/917903045742?text=${T}`,"_blank")};return c.jsxs("div",{className:"service-card",children:[c.jsxs("div",{className:"card-image-container",children:[c.jsx("img",{src:b,alt:A,className:"card-image"}),E&&c.jsx("div",{className:"badge-most-booked",children:"MOST BOOKED"}),c.jsxs("div",{className:"badge-rating",children:[c.jsx("span",{className:"star",children:"★"})," ",w]})]}),c.jsxs("div",{className:"card-content",children:[c.jsx("h3",{className:"service-title",children:A}),c.jsxs("div",{className:"card-footer",children:[c.jsxs("div",{className:"price-info",children:[c.jsx("span",{className:"price-label",children:"STARTS FROM"}),c.jsxs("span",{className:"price-value",children:["₹",s]})]}),c.jsx("button",{className:"btn-book",onClick:X,children:"Book Now"})]})]}),c.jsx("style",{children:`
        .service-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #f3f4f6;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .card-image-container {
          position: relative;
          height: 200px;
          background-color: #e5e7eb;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .badge-most-booked {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #f3e8ff; /* Light purple */
          color: var(--color-secondary);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .badge-rating {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: var(--color-white);
          color: var(--color-text-main);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: var(--shadow-sm);
        }

        .star {
          color: #fbbf24; /* Amber/Gold */
        }

        .card-content {
          padding: 1.5rem;
        }

        .service-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .price-info {
          display: flex;
          flex-direction: column;
        }

        .price-label {
          font-size: 0.65rem;
          color: var(--color-text-muted);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .price-value {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--color-text-main);
        }

        .btn-book {
          background-color: #e0e7ff; /* Light indigo/purple */
          color: var(--color-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          transition: background-color 0.2s;
        }

        .btn-book:hover {
          background-color: #c7d2fe;
        }
      `})]})},Gl=({categoryId:b})=>{const A=vu[b];if(!A)return null;const w=A.subServices.map((s,E)=>({id:E,...s}));return c.jsxs("section",{className:"home-services-section",id:b,children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-left",children:[c.jsxs("h2",{className:"section-title",children:[A.title.split(" ")[0]," ",c.jsx("span",{className:"text-secondary",children:A.title.split(" ").slice(1).join(" ")})]}),c.jsx("p",{className:"section-subtitle",children:A.description}),c.jsxs("div",{className:"rating-row",children:[c.jsx("div",{className:"stars",children:"★".repeat(5)}),c.jsxs("span",{className:"rating-text",children:[A.rating," • ",A.reviewsCount," reviews"]})]})]}),c.jsx("div",{className:"services-grid",children:w.map(s=>c.jsx(bg,{...s},s.id))})]}),c.jsx("style",{children:`
        .home-services-section {
          padding-top: 1rem;
          padding-bottom: 4rem;
          background-color: #F5F2FC; /* Matching global background */
        }

        .section-header-left {
          text-align: left;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 0.5rem;
        }

        .text-secondary {
          background: linear-gradient(90deg, #a855f7, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .rating-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--color-text-main);
            font-weight: 500;
        }
        
        .stars {
            color: #fbbf24; /* Amber/Gold */
            letter-spacing: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        /* Adjustments for responsiveness if needed */
        @media (max-width: 768px) {
           .section-header-left {
              text-align: center;
           }
           .rating-row {
              justify-content: center;
           }
        }
      `})]})},xg=()=>c.jsxs("section",{className:"cities-expansion-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-left",children:[c.jsxs("h2",{className:"section-title",children:["Cities ",c.jsx("span",{className:"text-secondary",children:"& Expansion"})]}),c.jsx("p",{className:"section-subtitle",children:"Experience premium home services in your neighborhood. We are expanding rapidly."})]}),c.jsxs("div",{className:"cities-container",children:[c.jsxs("div",{className:"city-card large aligarh",children:[c.jsx("img",{src:"/main image.png",alt:"Aligarh",className:"city-bg"}),c.jsx("div",{className:"badge-live",children:"Live Now"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"Aligarh"}),c.jsx("p",{className:"city-desc",children:"Full service suite available. Book top-rated professionals for AC repair, plumbing, and electrical needs instantly."}),c.jsxs("button",{className:"btn-view",children:["View Services",c.jsx("span",{className:"arrow",children:"➜"})]})]}),c.jsx("div",{className:"overlay"})]}),c.jsxs("div",{className:"cities-right-grid",children:[c.jsxs("div",{className:"city-card small agra",children:[c.jsx("img",{src:"/agra.jpeg",alt:"Agra",className:"city-bg"}),c.jsx("div",{className:"badge-live",children:"Live Now"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"Agra"}),c.jsx("p",{className:"city-desc",children:"Bringing expert home services to the city of the Taj. Join the waitlist."})]}),c.jsx("div",{className:"overlay"})]}),c.jsxs("div",{className:"city-card small delhi",children:[c.jsx("img",{src:"/delhi.jpg",alt:"New Delhi",className:"city-bg"}),c.jsx("div",{className:"badge-coming",children:"Coming Soon"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"New Delhi"}),c.jsx("p",{className:"city-desc",children:"Expanding to the capital. Quality technicians arriving soon."})]}),c.jsx("div",{className:"overlay"})]}),c.jsxs("div",{className:"city-card small lucknow",children:[c.jsx("img",{src:"/mathura.jpeg",alt:"Lucknow",className:"city-bg"}),c.jsx("div",{className:"badge-coming",children:"Coming Soon"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"Lucknow"}),c.jsx("p",{className:"city-desc",children:"The City of Nawabs will soon experience premium service."})]}),c.jsx("div",{className:"overlay"})]})]})]})]}),c.jsx("style",{children:`
        .cities-expansion-section {
          padding-top: 2rem;
          padding-bottom: 4rem;
          background-color: #F5F2FC;
        }

        .section-header-left {
          text-align: left;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 0.5rem;
        }
        
        .text-secondary {
            color: #6d7482; /* Using grey for ' & Expansion' based on design */
        }
        
        .section-title span.text-secondary {
            background: none;
            -webkit-text-fill-color: initial;
            color: #64748b;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          max-width: 600px;
        }

        .cities-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            min-height: 500px;
        }

        .cities-right-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1.5rem;
        }

        /* Span Agra across full width of right grid */
        .agra {
            grid-column: 1 / -1;
        }

        .city-card {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            color: white;
        }

        .city-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .city-card:hover .city-bg {
            transform: scale(1.05);
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
            pointer-events: none;
        }

        .badge-live {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #10b981; /* Green */
            color: white;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 2;
        }

        .badge-coming {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #1f2937; /* Dark Grey */
            color: white;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 2;
        }

        .city-content {
            position: absolute;
            bottom: 30px;
            left: 30px;
            right: 30px;
            z-index: 2;
        }

        .city-name {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .city-desc {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            opacity: 0.9;
            line-height: 1.4;
        }

        .btn-view {
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 10px 20px;
            border-radius: 9999px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background 0.2s;
        }

        .btn-view:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }

        /* Specific sizing */
        .large .city-name { font-size: 2.5rem; }
        .small .city-name { font-size: 1.5rem; }
        .small .city-desc { margin-bottom: 0; font-size: 0.8rem; }

        @media (max-width: 900px) {
            .cities-container {
                grid-template-columns: 1fr;
            }
            .large {
                min-height: 400px;
            }
            /* Ensure small cards have height when grid changes */
            .small {
                min-height: 250px;
            }
        }

        @media (max-width: 600px) {
            .cities-container {
                gap: 1rem;
            }
            
            .cities-right-grid {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                gap: 1rem;
            }
            
            .large .city-name { font-size: 1.8rem; }
            .small .city-name { font-size: 1.5rem; }
            .city-desc { font-size: 0.9rem; }
            
            .badge-live, .badge-coming {
                top: 15px;
                left: 15px;
            }
            
            .city-content {
                bottom: 20px;
                left: 20px;
                right: 20px;
            }
        }
      `})]}),yg=()=>{const b=[{id:1,name:"Amit Gupta",category:"Painting",rating:5,review:"Needed a professional painter, and Urban Aura Interiors made it so easy to find the right person. The interface is clean, and the service was prompt. Highly recommend!",initials:"AG",color:"#d97706"},{id:2,name:"Priya Verma",category:"Interior Decor",rating:5,review:"The interior decoration service was quick and reliable. I'll definitely use Urban Aura Interiors again! It's rare to find such consistent quality across different services.",initials:"PV",color:"#db2777"},{id:3,name:"Aditi Sharma",category:"Cleaning",rating:4.5,review:"The deep cleaning service exceeded my expectations. They arrived on time with all the necessary equipment. My apartment looks brand new.",initials:"AS",color:"#2563eb"},{id:4,name:"Rahul Singh",category:"Painting",rating:5,review:"I booked a textured wall painting service through Urban Aura Interiors. The painter was punctual, professional, and left the room spotless—highly recommended!",initials:"RS",color:"#059669"}];return c.jsxs("section",{className:"trusted-reviews-section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"content-wrapper",children:[c.jsxs("div",{className:"left-column",children:[c.jsxs("h2",{className:"section-title",children:["Trusted by ",c.jsx("span",{className:"text-secondary",children:"100k+"}),c.jsx("br",{}),"For Quality Services"]}),c.jsx("p",{className:"section-subtitle",children:"Join a community that values excellence. We connect you with top-tier professionals ensuring every job is done right, the first time."}),c.jsxs("div",{className:"features-list",children:[c.jsxs("div",{className:"feature-item",children:[c.jsx("div",{className:"icon-box blue",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),c.jsx("path",{d:"M9 12l2 2 4-4"})]})}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Verified Professionals"}),c.jsx("p",{children:"Every expert undergoes a rigorous background check and skill assessment."})]})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("div",{className:"icon-box orange",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),c.jsx("path",{d:"M9 12l2 2 4-4"})]})}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Guaranteed Satisfaction"}),c.jsx("p",{children:"We stand by our service quality. Not happy? We'll make it right."})]})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("div",{className:"icon-box purple",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Seamless Experience"}),c.jsx("p",{children:"Book in seconds, track in real-time. Hassle-free from start to finish."})]})]})]}),c.jsxs("button",{className:"btn-explore",children:["Explore Services",c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),c.jsx("div",{className:"right-column",children:c.jsx("div",{className:"reviews-grid",children:b.map(A=>c.jsxs("div",{className:"review-card",children:[c.jsxs("div",{className:"card-top",children:[c.jsxs("div",{className:"stars",children:["★".repeat(Math.floor(A.rating)),A.rating%1!==0&&"½"]}),c.jsx("span",{className:"category-badge",children:A.category})]}),c.jsxs("p",{className:"review-text",children:['"',A.review,'"']}),c.jsxs("div",{className:"user-profile",children:[c.jsx("div",{className:"avatar",style:{backgroundColor:A.color},children:A.initials}),c.jsxs("div",{className:"user-info",children:[c.jsx("h4",{className:"user-name",children:A.name}),c.jsx("span",{className:"verified-badge",children:"Verified Customer"})]})]})]},A.id))})})]})}),c.jsx("style",{children:`
        .trusted-reviews-section {
          padding-top: 4rem;
          padding-bottom: 6rem;
          background-color: var(--color-white);
        }

        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: flex-start;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          display: inline-block;
         
        }

         .section-title span.text-secondary {
            background: linear-gradient(90deg, #a855f7, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .features-list {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .feature-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }

        .icon-box {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .icon-box.blue { background-color: #dbeafe; color: #2563eb; }
        .icon-box.orange { background-color: #ffedd5; color: #ea580c; }
        .icon-box.purple { background-color: #f3e8ff; color: #9333ea; }

        .feature-text h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--color-black);
            margin-bottom: 0.25rem;
        }

        .feature-text p {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .btn-explore {
            background-color: #0f172a;
            color: white;
            padding: 14px 28px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: transform 0.2s;
        }

        .btn-explore:hover {
            transform: translateY(-2px);
        }

        .reviews-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .review-card {
            background-color: #ffffff;
            border: 1px solid #f3f4f6;
            border-radius: 20px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            transition: transform 0.2s;
        }
        
        .review-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .stars {
            color: #fbbf24;
            font-size: 1rem;
            letter-spacing: 2px;
        }

        .category-badge {
            background-color: #f3f4f6;
            color: #4b5563;
            font-size: 0.7rem;
            padding: 4px 8px;
            border-radius: 6px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .review-text {
            color: #4b5563;
            font-style: italic;
            font-size: 0.95rem;
            line-height: 1.5;
            flex-grow: 1;
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-top: auto;
        }

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .user-info {
            display: flex;
            flex-direction: column;
        }

        .user-name {
            font-weight: 700;
            color: var(--color-black);
            font-size: 0.95rem;
        }

        .verified-badge {
            color: #9ca3af;
            font-size: 0.75rem;
        }

        @media (max-width: 900px) {
            .content-wrapper {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            .section-title {
                font-size: 2.5rem;
            }
        }
        
        @media (max-width: 600px) {
             .reviews-grid {
                grid-template-columns: 1fr;
             }
        }
      `})]})},jg=()=>{const[b,A]=Ee.useState(null),w=E=>{A(b===E?null:E)},s=[{title:"Painting",desc:"Professional interior and exterior painting services for a beautiful and vibrant home."},{title:"Water proofing",desc:"Comprehensive solutions to stop terrace, bathroom, and wall leakage permanently."},{title:"Tile grouting",desc:"Expert epoxy and cement-based grouting to protect your tiles and prevent seepage."},{title:"Wall modelling",desc:"Modern PVC and wooden wall modelling to add luxury and style to your interiors."},{title:"Wall paper",desc:"Wide range of 3D, fabric, and custom wallpaper installations for every room."},{title:"Wood polish",desc:"Premium PU and Melamyne polishing to restore the shine of your wooden furniture."},{title:"False ceiling",desc:"Designer Gypsum and POP ceilings with expert lighting and finish."}];return c.jsxs("section",{className:"about-services-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"about-block",children:[c.jsx("div",{className:"heading-wrapper",children:c.jsx("h2",{className:"about-title",children:"About Urban Aura Interiors's Services"})}),c.jsx("p",{className:"about-desc",children:"Urban Aura Interiors is your trusted one-stop platform for premium home, painting, and decor services. We connect you with 100% verified, skilled professionals who deliver reliable, doorstep services across a wide range of needs – making everyday life simpler, safer, and more beautiful."})]}),c.jsxs("div",{className:"services-header-block",children:[c.jsx("span",{className:"services-label",children:"Services"}),c.jsx("h2",{className:"services-main-title",children:"Our Complete Range of Services in Agra"}),c.jsx("p",{className:"services-subtitle",children:"Explore our comprehensive list of professional services tailored for your needs."}),c.jsx("div",{className:"accordion-list",children:s.map((E,D)=>c.jsxs("div",{className:"accordion-item",children:[c.jsxs("div",{className:`accordion-header ${b===D?"active":""}`,onClick:()=>w(D),children:[c.jsx("h3",{children:E.title}),c.jsx("svg",{className:`chevron ${b===D?"rotate":""}`,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c.jsx("div",{className:`accordion-content ${b===D?"show":""}`,children:c.jsx("p",{children:E.desc})})]},D))})]})]}),c.jsx("style",{children:`
        .about-services-section {
            padding-top: 4rem;
            padding-bottom: 6rem;
            background-color: var(--color-white);
        }

        /* Top Block Styling */
        .about-block {
            margin-bottom: 5rem;
            max-width: 900px;
        }

        .heading-wrapper {
            border-left: 5px solid #6366f1; /* Purple/Indigo border */
            padding-left: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .about-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--color-black);
            margin: 0;
            line-height: 1.2;
        }

        .about-desc {
            color: #4b5563; /* Gray-600 */
            font-size: 1.05rem;
            line-height: 1.7;
            padding-left: 1.8rem;
        }

        /* Bottom Block Styling */
        .services-header-block {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }

        .services-label {
            color: #6b7280; /* Gray-500 */
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: block;
            margin-bottom: 0.5rem;
        }

        .services-main-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #111827; /* Gray-900 */
            margin-bottom: 1rem;
        }

        .services-subtitle {
            font-size: 1rem;
            color: #6b7280;
            max-width: 600px;
            margin: 0 auto 3rem auto;
        }

        /* Accordion Styling */
        .accordion-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            text-align: left;
        }

        .accordion-item {
            border-radius: 8px;
            overflow: hidden;
        }

        .accordion-header {
            background-color: #f0f5ff; /* Light blue background */
            padding: 1.25rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.2s;
            border-radius: 6px;
        }

        .accordion-header:hover {
            background-color: #e0eaff;
        }

        .accordion-header h3 {
            font-size: 1.05rem;
            font-weight: 500;
            color: #1f2937; /* Gray-800 */
            margin: 0;
        }

        .chevron {
            color: #1f2937;
            transition: transform 0.3s ease;
        }

        .chevron.rotate {
            transform: rotate(180deg);
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease;
            background-color: #ffffff;
        }

        .accordion-content.show {
            max-height: 150px; /* Approximate max height */
            padding: 1.5rem;
        }

        .accordion-content p {
            color: #6b7280;
            font-size: 1rem;
            line-height: 1.6;
            margin: 0;
        }

        @media (max-width: 768px) {
            .about-title {
                font-size: 1.8rem;
            }
            .services-main-title {
                font-size: 2rem;
            }
        }
      `})]})},_d=()=>{const b=[{title:"Doorstep Convenience",desc:"Book any service from your phone. Our experts come to you at your chosen time – no need to step out or wait endlessly."},{title:"100% Verified Professionals",desc:"Every Urban Aura Interiors technician undergoes rigorous background checks and training to deliver top-quality work every time."},{title:"Affordable & Transparent Pricing",desc:"Quality services at best prices with no hidden charges. Get the best value for your money."},{title:"Guaranteed Satisfaction",desc:"We don't just complete the job – we make sure you're truly satisfied. That's the Urban Aura Interiors difference."},{title:"Fast & Reliable",desc:"Most bookings completed same day or next day. Real-time updates and polite experts."},{title:"One-Stop Platform",desc:"From painting and decor to plumbing and home cleaning – Urban Aura Interiors handles all your home needs."}];return c.jsxs("section",{className:"why-urban-aura-section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"content-box",children:[c.jsx("h2",{className:"section-title",children:"Why Urban Aura Interiors?"}),c.jsx("div",{className:"benefits-grid",children:b.map((A,w)=>c.jsxs("div",{className:"benefit-item",children:[c.jsx("div",{className:"icon-wrapper",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("polyline",{points:"9 11 12 14 22 4"})]})}),c.jsxs("div",{className:"text-content",children:[c.jsx("h3",{children:A.title}),c.jsx("p",{children:A.desc})]})]},w))})]})}),c.jsx("style",{children:`
        .why-urban-aura-section {
            padding-top: 2rem;
            padding-bottom: 6rem;
            background-color: var(--color-white);
        }

        .content-box {
            background-color: #f5f3ff; /* Very light purple */
            border-radius: 24px;
            padding: 4rem;
            text-align: center;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 3rem;
        }

        .benefits-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 4rem;
            row-gap: 3rem;
            text-align: left;
        }

        .benefit-item {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
        }

        .icon-wrapper {
            flex-shrink: 0;
            color: #7c3aed; /* Purple */
            margin-top: 2px;
        }

        .icon-wrapper svg {
            width: 28px;
            height: 28px;
        }

        .text-content h3 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }

        .text-content p {
            color: #6b7280;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0;
        }

        @media (max-width: 900px) {
            .benefits-grid {
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }
            .content-box {
                padding: 2rem;
            }
        }
      `})]})},Ud=()=>{const[b,A]=Ee.useState(0),w=E=>{A(b===E?-1:E)},s=[{question:"How do I choose the right paint for my home?",answer:"Our experts at Urban Aura Interiors provide a free color consultation to help you choose the right finish and shade based on your lighting, wall condition, and personal style."},{question:"Is your water proofing service permanent?",answer:"Yes, we use advanced multi-layer coating techniques and premium chemicals to provide long-lasting protection. We also offer a warranty on our water proofing solutions."},{question:"What is the benefit of epoxy tile grouting?",answer:"Epoxy grouting is highly durable, stain-resistant, and 100% waterproof. It prevents mold growth in tile gaps and is much easier to clean than regular cement grout."},{question:"How long does wall paneling/modelling installation take?",answer:"Most PVC or wooden wall modelling projects can be completed within 1-3 days depending on the wall size and design complexity."},{question:"Can wallpapers be applied on damp walls?",answer:"We recommend treating damp walls with our water proofing service before applying wallpaper to ensure it doesn't peel and lasts for years."},{question:"What is the difference between PU and Melamyne polish?",answer:"PU polish offers a more premium, high-gloss finish with superior durability and scratch resistance compared to the classic and more affordable Melamyne polish."},{question:"Are false ceilings suitable for small rooms?",answer:"Yes, modern Gypsum or POP false ceilings can actually make small rooms feel more spacious and elegant with the right lighting integration and minimal design."}];return c.jsxs("section",{className:"faq-section",children:[c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Most asked FAQ's"}),c.jsx("p",{className:"section-subtitle",children:"We're here to help you and solve doubts. Find answers to the most common questions below."}),c.jsx("div",{className:"faq-grid",children:s.map((E,D)=>c.jsxs("div",{className:"faq-card",children:[c.jsxs("div",{className:`faq-header ${b===D?"active":""}`,onClick:()=>w(D),children:[c.jsx("h3",{children:E.question}),c.jsx("button",{className:"toggle-btn",children:b===D?c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}):c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),c.jsx("div",{className:`faq-answer ${b===D?"show":""}`,children:c.jsx("p",{children:E.answer})})]},D))})]}),c.jsx("style",{children:`
        .faq-section {
            padding-top: 4rem;
            padding-bottom: 6rem;
            background-color: var(--color-white);
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #111827;
            margin-bottom: 0.5rem;
        }

        .section-subtitle {
            color: #6b7280;
            font-size: 1rem;
            margin-bottom: 3rem;
            max-width: 600px;
        }

        .faq-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .faq-card {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
            background-color: #ffffff;
            transition: all 0.3s ease;
        }

        .faq-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 1.25rem;
            cursor: pointer;
            background-color: #fff;
        }

        .faq-header.active {
            background-color: #f8fafc; /* Light gray/blue tint when active */
        }

        .faq-header h3 {
            font-size: 1rem;
            font-weight: 600;
            color: #1f2937;
            margin: 0;
            line-height: 1.5;
            padding-right: 1rem;
        }

        .toggle-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: #6366f1; /* Indigo color for icon */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            flex-shrink: 0;
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
            background-color: #f8fafc;
            padding: 0 1.25rem;
        }

        .faq-answer.show {
            max-height: 500px; /* Arbitrary large height */
            transition: max-height 0.3s ease-in-out;
            padding-bottom: 1.25rem;
        }

        .faq-answer p {
            color: #6b7280;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0;
            padding-top: 0.5rem;
        }

        @media (max-width: 900px) {
            .faq-grid {
                grid-template-columns: 1fr;
            }
        }
      `})]})},Bd=()=>c.jsxs("section",{className:"banner-section",children:[c.jsx("div",{className:"banner-image-container",children:c.jsx("img",{src:"/banner.png",alt:"Urban Aura Interiors Team",className:"banner-image"})}),c.jsx("style",{children:`
        .banner-section {
            padding-top: 4rem;
            text-align: center;
            background: linear-gradient(180deg, #ffffff 0%, #fff1f2 100%);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .banner-title {
            font-size: 3rem;
            font-weight: 800;
            color: #111827;
            margin-bottom: 0.5rem;
            letter-spacing: -0.02em;
        }

        .banner-subtitle {
            font-family: 'cursive', sans-serif;
            font-size: 2.5rem;
            color: #1f2937;
            font-weight: 400;
            font-style: italic;
            position: relative;
            display: inline-block;
            margin-bottom: 2rem;
        }

        .underline-svg {
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 250px;
        }

        .banner-image-container {
            width: 100%;
            margin: 0;
            height:900px;
            position: relative;
            z-index: 1;
            line-height: 0; /* Remove potential bottom gap */
        }

        .banner-image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }

        @media (max-width: 768px) {
            .banner-section {
                padding-top: 2rem;
            }
            .banner-title {
                font-size: 2rem;
            }
            .banner-subtitle {
                font-size: 1.8rem;
            }
            .banner-image-container {
                height: 400px; /* Reduced height for mobile */
            }
        }
      `})]}),Cd=()=>c.jsxs("div",{className:"home-container",children:[c.jsx(vg,{}),c.jsx(Gl,{categoryId:"painting"}),c.jsx(Gl,{categoryId:"water-proofing"}),c.jsx(Gl,{categoryId:"tile-grouting"}),c.jsx(Gl,{categoryId:"wall-modelling"}),c.jsx(Gl,{categoryId:"wall-paper"}),c.jsx(Gl,{categoryId:"wood-polish"}),c.jsx(Gl,{categoryId:"false-ceiling"}),c.jsx(xg,{}),c.jsx(yg,{}),c.jsx(jg,{}),c.jsx(_d,{}),c.jsx(Ud,{}),c.jsx(Bd,{})]}),Sg=({title:b,description:A,rating:w,reviewsCount:s,expertImage:E})=>c.jsxs("div",{className:"service-hero-section",children:[c.jsxs("div",{className:"container service-hero-inner",children:[c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"badge",children:[c.jsx("span",{className:"dot"})," Aligarh"]}),c.jsxs("h1",{children:["Get Best ",c.jsx("br",{}),c.jsx("span",{className:"highlight-text",children:b.replace("Get Best ","").replace(" in Aligarh","")})," ",c.jsx("br",{}),"in Aligarh"]}),c.jsx("svg",{className:"underline-svg",viewBox:"0 0 200 10",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M2,5 Q50,10 100,5 T200,5",fill:"none",stroke:"#FBBF24",strokeWidth:"3"})}),c.jsx("p",{className:"hero-desc",children:A}),c.jsxs("div",{className:"hero-rating",children:[c.jsx("span",{className:"stars",children:"★★★★★"}),c.jsx("span",{className:"rating-val",children:w}),c.jsxs("span",{className:"reviews-count",children:["| ",s," reviews"]})]}),c.jsxs("div",{className:"hero-actions",children:[c.jsx("button",{className:"btn-book",children:"Explore Services →"}),c.jsx("button",{className:"btn-call",children:"📞 Call Expert"})]})]}),c.jsx("div",{className:"hero-image-col",children:c.jsxs("div",{className:"expert-card",children:[c.jsxs("div",{className:"expert-badge",children:[c.jsx("span",{className:"icon",children:"🎧"}),c.jsxs("div",{className:"text",children:[c.jsx("span",{className:"label",children:"TOTAL"}),c.jsx("span",{className:"value",children:"25+ Services"})]})]}),c.jsx("img",{src:E,alt:"Service Expert",className:"expert-img"}),c.jsxs("div",{className:"verified-badge",children:[c.jsx("img",{src:"/logo.png",className:"mini-logo",alt:""})," ",c.jsxs("div",{className:"info",children:[c.jsx("span",{className:"verified-text",children:"Verified Expert"}),c.jsx("span",{className:"expert-name",children:"Ramesh jha"})]})]})]})})]}),c.jsx("style",{children:`
        .service-hero-section {
          background-color: #FFFBF2; /* Light cream background */
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .service-hero-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 50%;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          background: #fff;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .badge .dot {
            height: 8px;
            width: 8px;
            background-color: #22c55e;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.5rem;
        }

        .service-hero-section h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .highlight-text {
          color: #EF4444; /* Red color */
        }
        
        .underline-svg {
            width: 250px;
            height: 20px;
            display: block;
            margin-bottom: 1.5rem;
            margin-top: -10px;
        }

        .hero-desc {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 90%;
        }

        .hero-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .stars { color: #FBBF24; letter-spacing: 2px; }
        .rating-val { color: #111; font-weight: 800; }
        .reviews-count { color: #666; font-weight: 400; }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-book {
          background-color: #111827;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-call {
          background-color: #fff;
          color: #111;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .hero-image-col {
            position: relative;
        }
        
        /* Yellow glow effect behind image */
        .hero-image-col::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(253, 224, 71, 0.6) 0%, rgba(253, 224, 71, 0) 70%);
            z-index: -1;
        }

        .expert-card {
            position: relative;
            background: #2D3748; /* Dark background matching shirt/theme */
            border-radius: 20px;
            padding: 0;
            line-height: 0;
            /* overflow: hidden;  <-- REMOVED to allow badges to float outside */
            border: 4px solid #fff;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px; /* Adjusted to match proportion better */
            margin: 0 auto; /* Center it */
        }

        .expert-img {
            width: 100%;
            height: auto;
            object-fit: cover;
            display: block;
            border-radius: 16px; /* Match card radius minus border roughly */
        }
        
        .expert-badge {
            position: absolute;
            top: -20px; /* Float off the top */
            left: -20px; /* Float off the left */
            background: #fff;
            padding: 0.5rem 1rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            z-index: 10;
            min-width: 140px;
        }
        
        .expert-badge .icon {
            background: #DBEAFE;
            color: #2563EB; /* Blue icon color */
            padding: 8px;
            border-radius: 50%;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .expert-badge .text {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }
        
        .expert-badge .label { font-size: 0.6rem; color: #666; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .expert-badge .value { font-size: 0.85rem; color: #111; font-weight: 800; }

        .verified-badge {
            position: absolute;
            bottom: 20px;
            right: -30px; /* Float off the right */
            background: #fff;
            padding: 0.5rem 1rem 0.5rem 0.5rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            z-index: 10;
        }
        
        .verified-badge .mini-logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: contain;
            background: #fff;
            border: 1px solid #eee;
        }
        
        .verified-badge .info {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
            text-align: left;
        }
        
        .verified-badge .verified-text { font-size: 0.65rem; color: #999; }
        .verified-badge .expert-name { font-size: 0.9rem; color: #111; font-weight: 700; }
        
        @media (max-width: 768px) {
            .service-hero-inner {
                flex-direction: column;
                text-align: center;
            }
            
            .hero-content {
                max-width: 100%;
                margin-bottom: 3rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .service-hero-section h1 {
                font-size: 2.5rem;
            }
            
             .underline-svg {
                margin: 0 auto 1.5rem auto;
            }
            
            .hero-actions {
                justify-content: center;
            }
        }

      `})]}),Od=({title:b,subServices:A})=>{const{navigate:w}=Ot();return c.jsxs("div",{className:"service-types-section container",children:[c.jsx("h2",{className:"section-title",children:b||"Top Services in Aligarh"}),c.jsx("div",{className:"types-grid",children:A.map((s,E)=>c.jsxs("div",{className:"service-type-card",children:[c.jsxs("div",{className:"card-image",children:[c.jsx("img",{src:s.image,alt:s.title}),c.jsxs("div",{className:"card-rating",children:["★ ",s.rating]})]}),c.jsxs("div",{className:"card-content",children:[c.jsx("h3",{children:s.title}),c.jsx("p",{className:"card-desc",children:s.description}),c.jsxs("div",{className:"card-footer",children:[c.jsxs("div",{className:"price-tag",children:[c.jsx("span",{className:"starts-from",children:"STARTS FROM"}),c.jsxs("span",{className:"price",children:["₹",s.price]})]}),c.jsx("button",{className:"btn-book-now",onClick:()=>w(`/book/${encodeURIComponent(s.title)}`),children:"Book Now"})]})]})]},E))}),c.jsx("style",{children:`
        .service-types-section {
          padding: 4rem 1rem;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 3rem;
          color: #111;
        }

        .types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-type-card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s;
          background: #fff;
        }

        .service-type-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .card-image {
          height: 180px;
          background: #f3f4f6;
          position: relative;
        }
        
        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .card-rating {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: #fff;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #111;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #f3f4f6;
          padding-top: 1rem;
        }

        .price-tag {
            display: flex;
            flex-direction: column;
        }

        .starts-from {
            font-size: 0.65rem;
            color: #888;
            font-weight: 600;
            text-transform: uppercase;
        }

        .price {
            font-size: 1.2rem;
            font-weight: 800;
            color: #111;
        }

        .btn-book-now {
            background: #DBEAFE;
            color: #2563EB; /* Blue text */
            border: none;
            padding: 0.5rem 1.2rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .btn-book-now:hover {
            background: #BFDBFE;
        }

      `})]})},Ng=({title:b,description:A})=>c.jsxs("div",{className:"service-about-section",children:[c.jsxs("div",{className:"container",children:[c.jsx("h2",{children:b}),c.jsx("div",{className:"about-text",children:A.split(`

`).map((w,s)=>c.jsx("p",{children:w},s))}),c.jsx("a",{href:"#book",className:"cta-link",children:"Book your service today and experience the Urban Aura Interiors difference!"})]}),c.jsx("style",{children:`
        .service-about-section {
          padding: 4rem 0;
          background-color: #ffffff;
        }

        .service-about-section h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: #111;
        }

        .about-text p {
          font-size: 1.05rem;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 900px;
        }
        
        .cta-link {
            display: inline-block;
            color: #7C3AED; /* Purple-ish color from image */
            font-weight: 600;
            text-decoration: none;
            font-size: 1.1rem;
            margin-top: 1rem;
        }

      `})]}),zg=({title:b,rating:A,reviews:w})=>c.jsxs("div",{className:"service-testimonials-section container",children:[c.jsxs("div",{className:"header",children:[c.jsx("h2",{children:b}),c.jsxs("div",{className:"rating-summary",children:[c.jsx("span",{className:"stars",children:"★★★★★"}),c.jsxs("span",{className:"avg-rating",children:[A," Average Rating"]})]}),c.jsxs("p",{className:"subtitle",children:["The service was exceptional. Urban Aura Interiors technician came within 2 hours, addressed the issue with professional care, ",c.jsx("br",{}),"and ensured everything was perfect. Truly satisfied!"]})]}),c.jsx("div",{className:"reviews-grid",children:w.map((s,E)=>c.jsxs("div",{className:"review-card",children:[c.jsx("div",{className:"card-stars",children:"★".repeat(s.rating)}),c.jsxs("p",{className:"review-text",children:['"',s.text,'"']}),c.jsxs("div",{className:"reviewer-info",children:[c.jsx("div",{className:"avatar-initial",children:s.name.charAt(0)}),c.jsxs("div",{className:"details",children:[c.jsx("span",{className:"name",children:s.name}),c.jsx("span",{className:"location",children:s.location})]})]})]},E))}),c.jsxs("div",{className:"nav-arrows",children:[c.jsx("button",{className:"arrow-btn left",children:"←"}),c.jsx("button",{className:"arrow-btn right",children:"→"})]}),c.jsx("style",{children:`
        .service-testimonials-section {
          padding: 4rem 1rem;
          position: relative;
        }

        .header h2 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: #111;
        }

        .rating-summary {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        .rating-summary .stars { color: #FBBF24; }
        .rating-summary .avg-rating { color: #555; }
        
        .subtitle {
            font-size: 1rem;
            color: #666;
            margin-bottom: 3rem;
            font-style: italic;
        }
        
        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        
        .review-card {
            border: 1px solid #f3f4f6;
            border-radius: 12px;
            padding: 2rem;
            background: #fff;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        
        .card-stars {
            color: #FBBF24;
            margin-bottom: 1rem;
            letter-spacing: 2px;
        }
        
        .review-text {
            font-style: italic;
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            min-height: 80px;
        }
        
        .reviewer-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .avatar-initial {
            width: 40px;
            height: 40px;
            background-color: #DBEAFE;
            color: #1E40AF;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }
        
        .reviewer-info .details {
            display: flex;
            flex-direction: column;
        }
        
        .reviewer-info .name { font-weight: 700; color: #111; }
        .reviewer-info .location { font-size: 0.8rem; color: #888; }
        
        .nav-arrows {
            position: absolute;
            top: 4rem;
            right: 1rem;
            display: flex;
            gap: 0.5rem;
        }
        
        .arrow-btn {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            background: #fff;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }
        
        .arrow-btn:hover {
            background: #f9fafb;
            border-color: #d1d5db;
        }

      `})]}),wg=({serviceIdParam:b})=>{const{navigate:A}=Ot(),w=b||"ac-service",s=vu[w];return Ee.useEffect(()=>{window.scrollTo(0,0)},[w]),s?c.jsxs("div",{className:"service-page",children:[c.jsx(Sg,{title:s.title,description:s.description,rating:s.rating,reviewsCount:s.reviewsCount,expertImage:s.expertImage}),s.categories?s.categories.map(E=>c.jsx(Od,{title:E.title,subServices:E.services},E.id)):c.jsx(Od,{title:`Top ${s.title} Experts`,subServices:s.subServices}),c.jsx(zg,{title:`Customer Reviews – ${s.title}`,rating:s.rating,reviews:s.reviews}),c.jsx(Ng,{title:s.about.title,description:s.about.description}),c.jsx(_d,{}),c.jsx(Ud,{}),c.jsx(Bd,{})]}):(setTimeout(()=>A("/"),0),null)},Ag=()=>{const{navigate:b}=Ot();return c.jsxs("div",{className:"partner-page",children:[c.jsx("div",{className:"container partner-container",children:c.jsxs("div",{className:"partner-content",children:[c.jsxs("button",{onClick:()=>b("/"),className:"back-btn",children:[c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M19 12H5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12 19L5 12L12 5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Back to Home"]}),c.jsxs("div",{className:"partner-info",children:[c.jsxs("h1",{children:["Join the Urban Aura Interiors ",c.jsx("br",{})," Partner Network"]}),c.jsx("p",{className:"subtitle",children:"Are you an expert in your field, ready to showcase your skills and grow your business?"}),c.jsx("p",{className:"description",children:"Join Urban Aura Interiors as a trusted service provider and connect with potential clients who need your expertise!"}),c.jsxs("div",{className:"contact-details",children:[c.jsxs("p",{children:["Call us: ",c.jsx("strong",{children:"+91 79030 45742"})]}),c.jsxs("p",{children:["Email us: ",c.jsx("strong",{children:"business@urbanaura.in"})]})]}),c.jsx("div",{className:"cta-grow",children:c.jsx("p",{children:"Let's grow together and unlock new opportunities!"})}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"#",className:"social-icon",children:"in"}),c.jsx("a",{href:"#",className:"social-icon",children:"Instagram"}),c.jsx("a",{href:"#",className:"social-icon",children:"Facebook"})]})]}),c.jsx("div",{className:"partner-form-col",children:c.jsxs("form",{className:"partner-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Name"}),c.jsx("input",{type:"text",placeholder:"your name"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Phone Number"}),c.jsxs("div",{className:"phone-input-group",children:[c.jsx("span",{className:"flag-icon",children:"🇮🇳"}),c.jsx("span",{className:"country-code",children:"+91"}),c.jsx("input",{type:"tel",placeholder:""})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Service"}),c.jsx("input",{type:"text",placeholder:"service you provide"})]}),c.jsxs("div",{className:"form-group radio-group-container",children:[c.jsx("label",{children:"How did you know about Urban Aura Interiors?"}),c.jsxs("div",{className:"radio-option",children:[c.jsx("input",{type:"radio",name:"source",id:"social"}),c.jsx("label",{htmlFor:"social",children:"Social Media"})]}),c.jsxs("div",{className:"radio-option",children:[c.jsx("input",{type:"radio",name:"source",id:"friend"}),c.jsx("label",{htmlFor:"friend",children:"Recommended By Someone"})]}),c.jsxs("div",{className:"radio-option",children:[c.jsx("input",{type:"radio",name:"source",id:"other"}),c.jsx("label",{htmlFor:"other",children:"Other"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Additional Message"}),c.jsx("textarea",{placeholder:"Type your message here..."})]}),c.jsx("p",{className:"form-note",children:"Any additional details or questions? (Optional)"}),c.jsxs("div",{className:"form-actions",children:[c.jsx("button",{type:"submit",className:"btn-submit",children:"Submit"}),c.jsx("button",{type:"button",className:"btn-whatsapp",children:"Send Whatsapp"})]})]})})]})}),c.jsx(Ta,{}),c.jsx("style",{children:`
                .partner-page {
                    min-height: 100vh;
                    background-color: #F9FAFB;
                    font-family: 'Inter', sans-serif;
                }
                
                .partner-container {
                    padding-top: 4rem;
                    padding-bottom: 4rem;
                }

                .partner-content {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4rem;
                    justify-content: space-between;
                    padding-top: 2rem;
                }

                .back-btn {
                    position: absolute;
                    top: -20px;
                    left: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #111;
                    padding: 0;
                }
                
                .back-btn:hover {
                    text-decoration: underline;
                }

                .partner-info {
                    flex: 1;
                    min-width: 300px;
                    max-width: 500px;
                }

                .partner-info h1 {
                    font-size: 2.5rem;
                    line-height: 1.2;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 1.5rem;
                }

                .partner-info .subtitle {
                    font-size: 1.1rem;
                    color: #333;
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }

                .partner-info .description {
                    font-size: 1rem;
                    color: #555;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }

                .contact-details p {
                    margin-bottom: 0.5rem;
                    color: #333;
                    font-size: 1rem;
                }

                .cta-grow {
                    margin-top: 2rem;
                    font-weight: 600;
                    font-size: 1.1rem;
                    color: #111;
                    margin-bottom: 2rem;
                }

                .social-icons {
                    display: flex;
                    gap: 1rem;
                }

                .social-icon {
                    font-size: 1.2rem;
                    color: #111;
                    text-decoration: none;
                    font-weight: 500;
                }

                .partner-form-col {
                    flex: 1;
                    min-width: 300px;
                    max-width: 500px;
                }

                .partner-form {
                    /* background: #fff; */
                    /* padding: 2rem; */
                    /* border-radius: 12px; */
                    /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
                }

                .form-group {
                    margin-bottom: 1.25rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #374151;
                    margin-bottom: 0.5rem;
                }

                .form-group input[type="text"],
                .form-group input[type="tel"],
                .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #E5E7EB;
                    border-radius: 6px;
                    font-size: 0.95rem;
                    background: #fff;
                    color: #111;
                }
                
                .form-group textarea {
                    min-height: 100px;
                    resize: vertical;
                }

                .phone-input-group {
                    display: flex;
                    align-items: center;
                    border: 1px solid #E5E7EB;
                    border-radius: 6px;
                    background: #fff;
                    overflow: hidden;
                }
                
                .phone-input-group input {
                    border: none !important;
                    outline: none;
                    flex: 1;
                }

                .flag-icon {
                    padding-left: 0.75rem;
                    font-size: 1.2rem;
                }

                .country-code {
                    padding: 0 0.5rem;
                    color: #555;
                    font-weight: 500;
                    border-right: 1px solid #eee;
                    margin-right: 0.5rem;
                    height: 20px;
                    display: flex;
                    align-items: center;
                }

                .radio-group-container {
                    margin-top: 1.5rem;
                }

                .radio-option {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                }

                .radio-option input[type="radio"] {
                    accent-color: #111;
                    width: 16px;
                    height: 16px;
                }

                .radio-option label {
                    margin-bottom: 0;
                    font-weight: 400;
                    color: #4B5563;
                }

                .form-note {
                    font-size: 0.8rem;
                    color: #9CA3AF;
                    margin-bottom: 1.5rem;
                }

                .form-actions {
                    display: flex;
                    gap: 1rem;
                }

                .btn-submit {
                    background-color: #000;
                    color: #fff;
                    padding: 0.75rem 2rem;
                    border-radius: 8px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                
                .btn-submit:hover {
                    opacity: 0.9;
                }

                .btn-whatsapp {
                    background-color: #22c55e;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                
                .btn-whatsapp:hover {
                    opacity: 0.9;
                }

                @media (max-width: 768px) {
                    .partner-container {
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }

                    .partner-content {
                        flex-direction: column;
                        gap: 2.5rem;
                        padding-top: 1.5rem;
                    }
                    
                    .back-btn {
                        top: -10px;
                        font-size: 0.9rem;
                    }
                    
                    .partner-info h1 {
                        font-size: 1.75rem;
                        margin-bottom: 1rem;
                    }
                    
                    .partner-info .subtitle {
                        font-size: 1rem;
                    }
                    
                    .partner-form-col {
                         min-width: 100%;
                    }
                    
                    .form-actions {
                        flex-direction: column;
                    }
                    
                    .btn-submit, .btn-whatsapp {
                        width: 100%;
                    }
                }
            `})]})},Eg=({serviceName:b})=>{const{navigate:A}=Ot(),[w,s]=Ee.useState({name:"",phone:"",date:"",timeslot:"",address:"",paymentMode:"cash"}),E=b?decodeURIComponent(b):"Service",D=re=>{const{name:T,value:N}=re.target;if(T==="phone"){const Q=N.replace(/[^0-9]/g,"");s({...w,[T]:Q})}else s({...w,[T]:N})},X=re=>{re.preventDefault();const T=`Hello Urban Aura Interiors, I want to book ${E}.
Details:
Name: ${w.name}
Phone: ${w.phone}
Date: ${w.date}
Time: ${w.timeslot}
Address: ${w.address}
Payment: ${w.paymentMode.toUpperCase()}`,N=encodeURIComponent(T);window.open(`https://wa.me/917903045742?text=${N}`,"_blank"),A("/")};return c.jsxs("div",{className:"booking-page",children:[c.jsxs("div",{className:"container booking-container",children:[c.jsxs("button",{onClick:()=>A(-1),className:"back-btn",children:[c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M19 12H5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12 19L5 12L12 5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Back to previous page"]}),c.jsxs("div",{className:"booking-wrapper",children:[c.jsxs("div",{className:"booking-header",children:[c.jsxs("h1",{children:["Book ",c.jsx("span",{className:"highlight",children:E})]}),c.jsx("p",{children:"Complete your booking details below. Our professional will arrive at your scheduled time."})]}),c.jsxs("form",{className:"booking-form",onSubmit:X,children:[c.jsxs("div",{className:"form-section",children:[c.jsxs("h3",{children:[c.jsx("span",{className:"step-num",children:"1"})," Personal Details"]}),c.jsxs("div",{className:"form-grid",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Full Name"}),c.jsx("input",{type:"text",name:"name",placeholder:"Enter your name",required:!0,value:w.name,onChange:D})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Phone Number"}),c.jsx("input",{type:"tel",name:"phone",placeholder:"+91 Mobile Number",required:!0,value:w.phone,onChange:D})]})]})]}),c.jsxs("div",{className:"form-section",children:[c.jsxs("h3",{children:[c.jsx("span",{className:"step-num",children:"2"})," Schedule & Address"]}),c.jsxs("div",{className:"form-grid",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Select Date"}),c.jsx("input",{type:"date",name:"date",required:!0,value:w.date,onChange:D})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Select Time Slot"}),c.jsxs("select",{name:"timeslot",required:!0,value:w.timeslot,onChange:D,children:[c.jsx("option",{value:"",children:"Select a time"}),c.jsx("option",{value:"morning",children:"Morning (9 AM - 12 PM)"}),c.jsx("option",{value:"afternoon",children:"Afternoon (12 PM - 4 PM)"}),c.jsx("option",{value:"evening",children:"Evening (4 PM - 8 PM)"})]})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Service Address"}),c.jsx("textarea",{name:"address",placeholder:"Enter complete address, landmark, etc.",rows:"3",required:!0,value:w.address,onChange:D})]})]}),c.jsxs("div",{className:"form-section",children:[c.jsxs("h3",{children:[c.jsx("span",{className:"step-num",children:"3"})," Payment Method"]}),c.jsxs("div",{className:"payment-options",children:[c.jsxs("label",{className:`payment-option ${w.paymentMode==="cash"?"selected":""}`,children:[c.jsx("input",{type:"radio",name:"paymentMode",value:"cash",checked:w.paymentMode==="cash",onChange:D}),c.jsxs("div",{className:"payment-content",children:[c.jsx("span",{className:"payment-title",children:"Cash on Service"}),c.jsx("span",{className:"payment-desc",children:"Pay directly to the professional after service"})]})]}),c.jsxs("label",{className:`payment-option ${w.paymentMode==="upi"?"selected":""}`,children:[c.jsx("input",{type:"radio",name:"paymentMode",value:"upi",checked:w.paymentMode==="upi",onChange:D}),c.jsxs("div",{className:"payment-content",children:[c.jsx("span",{className:"payment-title",children:"UPI / QR Code"}),c.jsx("span",{className:"payment-desc",children:"GooglePay, PhonePe, Paytm (Scan on arrival)"})]})]}),c.jsxs("label",{className:`payment-option ${w.paymentMode==="card"?"selected":""}`,children:[c.jsx("input",{type:"radio",name:"paymentMode",value:"card",checked:w.paymentMode==="card",onChange:D}),c.jsxs("div",{className:"payment-content",children:[c.jsx("span",{className:"payment-title",children:"Debit / Credit Card"}),c.jsx("span",{className:"payment-desc",children:"Pay securely via link sent to your phone"})]})]})]})]}),c.jsxs("button",{type:"submit",className:"btn-confirm-booking",children:["Confirm Booking",c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M5 12H19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12 5L19 12L12 19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})]})]}),c.jsx("style",{children:`
                .booking-page {
                    min-height: 100vh;
                    background-color: #F3F4F6;
                    padding-bottom: 4rem;
                    font-family: 'Inter', sans-serif;
                }

                .booking-container {
                    padding-top: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .back-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: #4B5563;
                    margin-bottom: 2rem;
                    transition: color 0.2s;
                }

                .back-btn:hover {
                    color: #111;
                }

                .booking-wrapper {
                    background: #fff;
                    border-radius: 20px;
                    padding: 3rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }

                .booking-header {
                    margin-bottom: 3rem;
                    text-align: center;
                    border-bottom: 1px solid #F3F4F6;
                    padding-bottom: 2rem;
                }

                .booking-header h1 {
                    font-size: 2.25rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 0.75rem;
                }

                .booking-header .highlight {
                    color: #6366f1;
                }

                .booking-header p {
                    color: #6B7280;
                    font-size: 1.1rem;
                }

                .form-section {
                    margin-bottom: 3rem;
                }

                .form-section h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1F2937;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .step-num {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    background-color: #EEF2FF;
                    color: #4F46E5;
                    border-radius: 50%;
                    font-size: 0.85rem;
                    font-weight: 700;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #374151;
                    margin-bottom: 0.5rem;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 0.85rem;
                    border: 1px solid #D1D5DB;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    background: #fff;
                    color: #111;
                    transition: border-color 0.15s, box-shadow 0.15s;
                }
                
                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #6366f1;
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                }

                .payment-options {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .payment-option {
                    display: flex;
                    align-items: flex-start;
                    padding: 1.25rem;
                    border: 1px solid #E5E7EB;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    position: relative;
                }

                .payment-option:hover {
                    border-color: #cbd5e1;
                    background-color: #F8FAFC;
                }

                .payment-option.selected {
                    border-color: #6366f1;
                    background-color: #EEF2FF;
                    box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.1);
                }

                .payment-option input[type="radio"] {
                    margin-top: 0.25rem;
                    margin-right: 1rem;
                    width: 18px;
                    height: 18px;
                    accent-color: #6366f1;
                }

                .payment-content {
                    display: flex;
                    flex-direction: column;
                }

                .payment-title {
                    font-weight: 600;
                    color: #111;
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                }

                .payment-desc {
                    font-size: 0.85rem;
                    color: #6B7280;
                }

                .btn-confirm-booking {
                    width: 100%;
                    padding: 1.25rem;
                    background-color: #111827;
                    color: #fff;
                    font-weight: 700;
                    font-size: 1.1rem;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: transform 0.1s, opacity 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    margin-top: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .btn-confirm-booking:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }

                .btn-confirm-booking:active {
                    transform: translateY(0);
                }

                @media (max-width: 640px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                    .booking-wrapper {
                        padding: 1.5rem;
                    }
                    .booking-header h1 {
                        font-size: 1.75rem;
                    }
                }
            `})]})},Tg=()=>{const{navigate:b}=Ot();return c.jsxs("div",{className:"contact-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container contact-container",children:[c.jsxs("div",{className:"contact-header",children:[c.jsx("h1",{children:"Get in Touch"}),c.jsx("p",{children:"Have questions about our services or need assistance? We're here to help."})]}),c.jsxs("div",{className:"contact-content",children:[c.jsxs("div",{className:"contact-info-card",children:[c.jsx("h2",{children:"Contact Information"}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"icon",children:"📞"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Phone / WhatsApp"}),c.jsx("p",{children:c.jsx("a",{href:"https://wa.me/917903045742",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:"+91 79030 45742"})})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"icon",children:"✉️"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Email"}),c.jsx("p",{children:"contact@urbanaurainteriors.com"})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"icon",children:"📍"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Office"}),c.jsx("p",{children:"Aligarh, Uttar Pradesh, India"})]})]}),c.jsxs("div",{className:"social-links",children:[c.jsx("h3",{children:"Follow Us"}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"#",className:"social-icon",children:"Instagram"}),c.jsx("a",{href:"#",className:"social-icon",children:"Facebook"}),c.jsx("a",{href:"#",className:"social-icon",children:"LinkedIn"})]})]})]}),c.jsxs("div",{className:"contact-form-card",children:[c.jsx("h2",{children:"Send us a Message"}),c.jsxs("form",{className:"contact-form",onSubmit:A=>{A.preventDefault();const w=new FormData(A.target),s=w.get("name"),E=w.get("email"),D=w.get("phone"),X=w.get("message"),re=`Hello Urban Aura Interiors, I have an inquiry:

Name: ${s}
Email: ${E}
Phone: ${D}
Message: ${X}`;window.open(`https://wa.me/917903045742?text=${encodeURIComponent(re)}`,"_blank")},children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Name"}),c.jsx("input",{type:"text",name:"name",placeholder:"Your Name",required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Email"}),c.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Phone"}),c.jsx("input",{type:"tel",name:"phone",placeholder:"Your Phone Number",onInput:A=>{A.target.value=A.target.value.replace(/[^0-9]/g,"")},required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Message"}),c.jsx("textarea",{name:"message",placeholder:"How can we help you?",required:!0})]}),c.jsx("button",{type:"submit",className:"btn-submit",children:"Send Message"})]})]})]})]}),c.jsx(Ta,{}),c.jsx("style",{children:`
                .contact-page {
                    min-height: 100vh;
                    background-color: #F9FAFB;
                    font-family: 'Inter', sans-serif;
                }

                .contact-container {
                    padding-top: 4rem;
                    padding-bottom: 6rem;
                }

                .contact-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .contact-header h1 {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #111;
                    margin-bottom: 1rem;
                }

                .contact-header p {
                    font-size: 1.1rem;
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .contact-content {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 3rem;
                }

                .contact-info-card, .contact-form-card {
                    background: #fff;
                    padding: 2.5rem;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                }

                .contact-info-card h2, .contact-form-card h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    color: #111;
                }

                .info-item {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .info-item .icon {
                    font-size: 1.5rem;
                    background: #F3F4F6;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                }

                .info-item h3 {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #4B5563;
                    margin-bottom: 0.25rem;
                }

                .info-item p {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #111;
                }

                .social-links h3 {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                .social-icons {
                    display: flex;
                    gap: 1rem;
                }

                .social-icon {
                    color: #111;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    background: #F3F4F6;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    transition: background 0.2s;
                }

                .social-icon:hover {
                    background: #E5E7EB;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                    color: #374151;
                }

                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #E5E7EB;
                    border-radius: 8px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .form-group input:focus, .form-group textarea:focus {
                    border-color: #111;
                }

                .form-group textarea {
                    min-height: 150px;
                    resize: vertical;
                }

                .btn-submit {
                    width: 100%;
                    padding: 1rem;
                    background: #111;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }

                .btn-submit:hover {
                    opacity: 0.9;
                }

                @media (max-width: 900px) {
                    .contact-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .contact-header h1 {
                        font-size: 2rem;
                    }
                    
                    .contact-container {
                        padding-top: 2rem;
                        padding-bottom: 4rem;
                    }
                }

                @media (max-width: 600px) {
                    .contact-info-card, .contact-form-card {
                        padding: 1.5rem;
                    }

                    .contact-header {
                        margin-bottom: 2.5rem;
                    }

                    .contact-header h1 {
                        font-size: 1.75rem;
                    }

                    .info-item {
                        flex-direction: column;
                        gap: 0.5rem;
                        align-items: flex-start;
                    }

                    .info-item .icon {
                        width: 40px;
                        height: 40px;
                        font-size: 1.25rem;
                    }
                    
                    .social-icons {
                        flex-wrap: wrap;
                    }
                    
                    .social-icon {
                        flex: 1;
                        text-align: center;
                    }
                }
            `})]})},Mg=()=>c.jsxs("div",{className:"about-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container policy-container",children:[c.jsx("h1",{children:"About Urban Aura Interiors"}),c.jsx("p",{className:"last-updated",children:"Welcome to Urban Aura Interiors!"}),c.jsxs("section",{children:[c.jsx("h2",{children:"Our Story"}),c.jsx("p",{children:"Urban Aura Interiors was founded with a simple yet powerful vision: to make high-quality home wall and ceiling solutions accessible, reliable, and transparent for everyone. We realized that transforming your space shouldn't be a stressful experience."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"What We Do"}),c.jsx("p",{children:"We are a leading home services platform that connects homeowners with certified, background-verified professionals. From routine maintenance to emergency repairs, we handle it all with precision and care."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Expert Painting & Wall Modelling"}),c.jsx("li",{children:"Water Proofing & Tile Grouting"}),c.jsx("li",{children:"Wall paper & Wood Polish"}),c.jsx("li",{children:"Modern False Ceiling Designs"})]})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"Our Mission"}),c.jsx("p",{children:"To empower local service professionals while providing customers with a seamless, technology-driven booking experience. We believe in fair pricing, exceptional quality, and 100% customer satisfaction."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"Why Choose Us?"}),c.jsx("p",{children:"At Urban Aura Interiors, we don't just fix things; we build trust. Our Commitment to quality and safety is what sets us apart."})]})]}),c.jsx(Ta,{}),c.jsx("style",{children:`
                .about-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-container h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-container p { line-height: 1.6; margin-bottom: 1rem; }
                .policy-container ul { margin-left: 1.5rem; margin-bottom: 1rem; }
                .policy-container li { margin-bottom: 0.5rem; }
            `})]}),Cg=()=>c.jsxs("div",{className:"policy-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container policy-container",children:[c.jsx("h1",{children:"Privacy Policy"}),c.jsx("p",{className:"last-updated",children:"Last updated: January 30, 2026"}),c.jsxs("section",{children:[c.jsx("h2",{children:"1. Information We Collect"}),c.jsx("p",{children:"We collect information you provide directly to us when you book a service, contact us, or sign up for our newsletter. This includes your name, phone number, email address, and service location."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"2. How We Use Your Information"}),c.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our services, including to process your bookings, send you updates, and respond to your inquiries."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"3. Data Sharing"}),c.jsx("p",{children:"We do not sell your personal information. We share your details only with the service professionals assigned to your booking to ensure the service can be completed."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"4. Security"}),c.jsx("p",{children:"We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"5. Contact Us"}),c.jsx("p",{children:"If you have any questions about this Privacy Policy, please contact us via WhatsApp at +91 83540 67979."})]})]}),c.jsx(Ta,{}),c.jsx("style",{children:`
                .policy-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-container h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-container p { line-height: 1.6; margin-bottom: 1rem; }
            `})]}),Og=()=>c.jsxs("div",{className:"policy-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container policy-container",children:[c.jsx("h1",{children:"Terms and Conditions"}),c.jsx("p",{className:"last-updated",children:"Last updated: January 30, 2026"}),c.jsxs("section",{children:[c.jsx("h2",{children:"1. Acceptance of Terms"}),c.jsx("p",{children:"By using the Urban Aura Interiors platform, you agree to comply with and be bound by these Terms and Conditions."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"2. Service Bookings"}),c.jsx("p",{children:"Users can book home services through our platform. All bookings are subject to availability of service professionals in your area."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"3. Cancellation Policy"}),c.jsx("p",{children:"Cancellations should be made at least 2 hours before the scheduled service time. Repeated late cancellations may result in a suspension of account privileges."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"4. Liability"}),c.jsx("p",{children:"Urban Aura Interiors acts as a facilitator between customers and service professionals. While we verify all professionals, we are not liable for direct or indirect damages resulting from the service performed."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"5. Governing Law"}),c.jsx("p",{children:"These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Aligarh."})]})]}),c.jsx(Ta,{}),c.jsx("style",{children:`
                .policy-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-container h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-container p { line-height: 1.6; margin-bottom: 1rem; }
            `})]}),Dg=()=>{const{currentPath:b}=Ot(),A=b.match(/^\/service\/([^/]+)$/);let w;if(b==="/"||b==="")w=c.jsx(Cd,{});else if(A)w=c.jsx(wg,{serviceIdParam:A[1]});else if(b.startsWith("/book/")){const D=b.split("/book/")[1];w=c.jsx(Eg,{serviceName:D})}else b==="/partner"?w=c.jsx(Ag,{}):b==="/contact"?w=c.jsx(Tg,{}):b==="/about"?w=c.jsx(Mg,{}):b==="/privacy"?w=c.jsx(Cg,{}):b==="/terms"?w=c.jsx(Og,{}):w=c.jsx(Cd,{});const E=["/partner","/contact","/about","/privacy","/terms"].includes(b);return c.jsxs("div",{className:"app-container",children:[!E&&c.jsx(An,{}),w,!E&&c.jsx(Ta,{})]})},_g=()=>c.jsx(gg,{children:c.jsx(Dg,{})});function Ug(){return c.jsx(_g,{})}hg.createRoot(document.getElementById("root")).render(c.jsx(Ee.StrictMode,{children:c.jsx(Ug,{})}));
