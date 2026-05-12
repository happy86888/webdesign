(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ua={exports:{}},ko={},ca={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Nc=Symbol.for("react.portal"),Ec=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),zc=Symbol.for("react.context"),Tc=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Lc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),Zl=Symbol.iterator;function Oc(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var da={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pa=Object.assign,fa={};function vn(e,t,n){this.props=e,this.context=t,this.refs=fa,this.updater=n||da}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ma(){}ma.prototype=vn.prototype;function ol(e,t,n){this.props=e,this.context=t,this.refs=fa,this.updater=n||da}var il=ol.prototype=new ma;il.constructor=ol;pa(il,vn.prototype);il.isPureReactComponent=!0;var es=Array.isArray,ha=Object.prototype.hasOwnProperty,ll={current:null},ga={key:!0,ref:!0,__self:!0,__source:!0};function ya(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ha.call(t,r)&&!ga.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:i,ref:l,props:o,_owner:ll.current}}function Mc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sl(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Dc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ts=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dc(""+e.key):t.toString(36)}function Or(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case cr:case Nc:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Do(l,0):r,es(o)?(n="",e!=null&&(n=e.replace(ts,"$&/")+"/"),Or(o,t,n,"",function(f){return f})):o!=null&&(sl(o)&&(o=Mc(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ts,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",es(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Do(i,s);l+=Or(i,t,n,u,o)}else if(u=Oc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Do(i,s++),l+=Or(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function kr(e,t,n){if(e==null)return e;var r=[],o=0;return Or(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ic(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Mr={transition:null},Rc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ll};function va(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!sl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=vn;$.Fragment=Ec;$.Profiler=Pc;$.PureComponent=ol;$.StrictMode=jc;$.Suspense=$c;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rc;$.act=va;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pa({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ll.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ha.call(t,u)&&!ga.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:i,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bc,_context:e},e.Consumer=e};$.createElement=ya;$.createFactory=function(e){var t=ya.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Tc,render:e}};$.isValidElement=sl;$.lazy=function(e){return{$$typeof:Ac,_payload:{_status:-1,_result:e},_init:Ic}};$.memo=function(e,t){return{$$typeof:Lc,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};$.unstable_act=va;$.useCallback=function(e,t){return he.current.useCallback(e,t)};$.useContext=function(e){return he.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return he.current.useDeferredValue(e)};$.useEffect=function(e,t){return he.current.useEffect(e,t)};$.useId=function(){return he.current.useId()};$.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return he.current.useMemo(e,t)};$.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};$.useRef=function(e){return he.current.useRef(e)};$.useState=function(e){return he.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return he.current.useTransition()};$.version="18.3.1";ca.exports=$;var ye=ca.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=ye,Uc=Symbol.for("react.element"),Vc=Symbol.for("react.fragment"),Hc=Object.prototype.hasOwnProperty,Wc=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kc={key:!0,ref:!0,__self:!0,__source:!0};function xa(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Hc.call(t,r)&&!Kc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Uc,type:e,key:i,ref:l,props:o,_owner:Wc.current}}ko.Fragment=Vc;ko.jsx=xa;ko.jsxs=xa;ua.exports=ko;var a=ua.exports,di={},ka={exports:{}},Ee={},Qa={exports:{}},wa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(g,x){var Q=g.length;g.push(x);e:for(;0<Q;){var B=Q-1>>>1,P=g[B];if(0<o(P,x))g[B]=x,g[Q]=P,Q=B;else break e}}function n(g){return g.length===0?null:g[0]}function r(g){if(g.length===0)return null;var x=g[0],Q=g.pop();if(Q!==x){g[0]=Q;e:for(var B=0,P=g.length,z=P>>>1;B<z;){var b=2*(B+1)-1,W=g[b],Y=b+1,Ue=g[Y];if(0>o(W,Q))Y<P&&0>o(Ue,W)?(g[B]=Ue,g[Y]=Q,B=Y):(g[B]=W,g[b]=Q,B=b);else if(Y<P&&0>o(Ue,Q))g[B]=Ue,g[Y]=Q,B=Y;else break e}}return x}function o(g,x){var Q=g.sortIndex-x.sortIndex;return Q!==0?Q:g.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],f=[],d=1,y=null,p=3,v=!1,_=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(g){for(var x=n(f);x!==null;){if(x.callback===null)r(f);else if(x.startTime<=g)r(f),x.sortIndex=x.expirationTime,t(u,x);else break;x=n(f)}}function k(g){if(S=!1,h(g),!_)if(n(u)!==null)_=!0,Qn(F);else{var x=n(f);x!==null&&wn(k,x.startTime-g)}}function F(g,x){_=!1,S&&(S=!1,m(E),E=-1),v=!0;var Q=p;try{for(h(x),y=n(u);y!==null&&(!(y.expirationTime>x)||g&&!_e());){var B=y.callback;if(typeof B=="function"){y.callback=null,p=y.priorityLevel;var P=B(y.expirationTime<=x);x=e.unstable_now(),typeof P=="function"?y.callback=P:y===n(u)&&r(u),h(x)}else r(u);y=n(u)}if(y!==null)var z=!0;else{var b=n(f);b!==null&&wn(k,b.startTime-x),z=!1}return z}finally{y=null,p=Q,v=!1}}var j=!1,N=null,E=-1,I=5,T=-1;function _e(){return!(e.unstable_now()-T<I)}function lt(){if(N!==null){var g=e.unstable_now();T=g;var x=!0;try{x=N(!0,g)}finally{x?Nt():(j=!1,N=null)}}else j=!1}var Nt;if(typeof c=="function")Nt=function(){c(lt)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,Ao=hr.port2;hr.port1.onmessage=lt,Nt=function(){Ao.postMessage(null)}}else Nt=function(){M(lt,0)};function Qn(g){N=g,j||(j=!0,Nt())}function wn(g,x){E=M(function(){g(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(g){g.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,Qn(F))},e.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<g?Math.floor(1e3/g):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(g){switch(p){case 1:case 2:case 3:var x=3;break;default:x=p}var Q=p;p=x;try{return g()}finally{p=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(g,x){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var Q=p;p=g;try{return x()}finally{p=Q}},e.unstable_scheduleCallback=function(g,x,Q){var B=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?B+Q:B):Q=B,g){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Q+P,g={id:d++,callback:x,priorityLevel:g,startTime:Q,expirationTime:P,sortIndex:-1},Q>B?(g.sortIndex=Q,t(f,g),n(u)===null&&g===n(f)&&(S?(m(E),E=-1):S=!0,wn(k,Q-B))):(g.sortIndex=P,t(u,g),_||v||(_=!0,Qn(F))),g},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(g){var x=p;return function(){var Q=p;p=x;try{return g.apply(this,arguments)}finally{p=Q}}}})(wa);Qa.exports=wa;var Gc=Qa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=ye,Ne=Gc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _a=new Set,Wn={};function Rt(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)_a.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pi=Object.prototype.hasOwnProperty,Yc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ns={},rs={};function Xc(e){return pi.call(rs,e)?!0:pi.call(ns,e)?!1:Yc.test(e)?rs[e]=!0:(ns[e]=!0,!1)}function qc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zc(e,t,n,r){if(t===null||typeof t>"u"||qc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var al=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(al,ul);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(al,ul);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(al,ul);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zc(t,n,o,r)&&(n=null),r||o===null?Xc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),Sa=Symbol.for("react.provider"),Fa=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),hi=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Ca=Symbol.for("react.offscreen"),os=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Io;function zn(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Ro=!1;function bo(e,t){if(!e||Ro)return"";Ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Ro=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function ed(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=bo(e.type,!1),e;case 11:return e=bo(e.type.render,!1),e;case 1:return e=bo(e.type,!0),e;default:return""}}function gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Wt:return"Portal";case fi:return"Profiler";case dl:return"StrictMode";case mi:return"Suspense";case hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fa:return(e.displayName||"Context")+".Consumer";case Sa:return(e._context.displayName||"Context")+".Provider";case pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:gi(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return gi(e(t))}catch{}}return null}function td(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gi(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Na(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nd(e){var t=Na(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=nd(e))}function Ea(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Na(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function is(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ja(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function vi(e,t){ja(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xi(e,t.type,n):t.hasOwnProperty("defaultValue")&&xi(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ls(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xi(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ss(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Tn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Pa(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function as(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ba(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ba(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,za=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rd=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Ta(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function $a(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ta(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var od=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wi(e,t){if(t){if(od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function _i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,ln=null,sn=null;function us(e){if(e=fr(e)){if(typeof Fi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Fo(t),Fi(e.stateNode,e.type,t))}}function La(e){ln?sn?sn.push(e):sn=[e]:ln=e}function Aa(){if(ln){var e=ln,t=sn;if(sn=ln=null,us(e),t)for(e=0;e<t.length;e++)us(t[e])}}function Oa(e,t){return e(t)}function Ma(){}var Uo=!1;function Da(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return Oa(e,t,n)}finally{Uo=!1,(ln!==null||sn!==null)&&(Ma(),Aa())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Fo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Ci=!1;if(tt)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Ci=!1}function id(e,t,n,r,o,i,l,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(d){this.onError(d)}}var Mn=!1,Yr=null,Xr=!1,Ni=null,ld={onError:function(e){Mn=!0,Yr=e}};function sd(e,t,n,r,o,i,l,s,u){Mn=!1,Yr=null,id.apply(ld,arguments)}function ad(e,t,n,r,o,i,l,s,u){if(sd.apply(this,arguments),Mn){if(Mn){var f=Yr;Mn=!1,Yr=null}else throw Error(w(198));Xr||(Xr=!0,Ni=f)}}function bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ia(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cs(e){if(bt(e)!==e)throw Error(w(188))}function ud(e){var t=e.alternate;if(!t){if(t=bt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return cs(o),e;if(i===r)return cs(o),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Ra(e){return e=ud(e),e!==null?ba(e):null}function ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ba(e);if(t!==null)return t;e=e.sibling}return null}var Ua=Ne.unstable_scheduleCallback,ds=Ne.unstable_cancelCallback,cd=Ne.unstable_shouldYield,dd=Ne.unstable_requestPaint,q=Ne.unstable_now,pd=Ne.unstable_getCurrentPriorityLevel,hl=Ne.unstable_ImmediatePriority,Va=Ne.unstable_UserBlockingPriority,qr=Ne.unstable_NormalPriority,fd=Ne.unstable_LowPriority,Ha=Ne.unstable_IdlePriority,Qo=null,Ge=null;function md(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:yd,hd=Math.log,gd=Math.LN2;function yd(e){return e>>>=0,e===0?32:31-(hd(e)/gd|0)|0}var Sr=64,Fr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=$n(s):(i&=l,i!==0&&(r=$n(i)))}else l=n&~o,l!==0?r=$n(l):i!==0&&(r=$n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),o=1<<n,r|=e[n],t&=~o;return r}function vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ie(i),s=1<<l,u=o[l];u===-1?(!(s&n)||s&r)&&(o[l]=vd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ei(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wa(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ie(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var O=0;function Ka(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ga,yl,Ja,Ya,Xa,ji=!1,Cr=[],mt=null,ht=null,gt=null,Jn=new Map,Yn=new Map,ct=[],Qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Cn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fr(t),t!==null&&yl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function wd(e,t,n,r,o){switch(t){case"focusin":return mt=Cn(mt,e,t,n,r,o),!0;case"dragenter":return ht=Cn(ht,e,t,n,r,o),!0;case"mouseover":return gt=Cn(gt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Jn.set(i,Cn(Jn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Yn.set(i,Cn(Yn.get(i)||null,e,t,n,r,o)),!0}return!1}function qa(e){var t=Bt(e.target);if(t!==null){var n=bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ia(n),t!==null){e.blockedOn=t,Xa(e.priority,function(){Ja(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Si=r,n.target.dispatchEvent(r),Si=null}else return t=fr(n),t!==null&&yl(t),e.blockedOn=n,!1;t.shift()}return!0}function fs(e,t,n){Dr(e)&&n.delete(t)}function _d(){ji=!1,mt!==null&&Dr(mt)&&(mt=null),ht!==null&&Dr(ht)&&(ht=null),gt!==null&&Dr(gt)&&(gt=null),Jn.forEach(fs),Yn.forEach(fs)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,ji||(ji=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,_d)))}function Xn(e){function t(o){return Nn(o,e)}if(0<Cr.length){Nn(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&Nn(mt,e),ht!==null&&Nn(ht,e),gt!==null&&Nn(gt,e),Jn.forEach(t),Yn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)qa(n),n.blockedOn===null&&ct.shift()}var an=it.ReactCurrentBatchConfig,eo=!0;function Sd(e,t,n,r){var o=O,i=an.transition;an.transition=null;try{O=1,vl(e,t,n,r)}finally{O=o,an.transition=i}}function Fd(e,t,n,r){var o=O,i=an.transition;an.transition=null;try{O=4,vl(e,t,n,r)}finally{O=o,an.transition=i}}function vl(e,t,n,r){if(eo){var o=Pi(e,t,n,r);if(o===null)ei(e,t,r,to,n),ps(e,r);else if(wd(o,e,t,n,r))r.stopPropagation();else if(ps(e,r),t&4&&-1<Qd.indexOf(e)){for(;o!==null;){var i=fr(o);if(i!==null&&Ga(i),i=Pi(e,t,n,r),i===null&&ei(e,t,r,to,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ei(e,t,r,null,n)}}var to=null;function Pi(e,t,n,r){if(to=null,e=ml(r),e=Bt(e),e!==null)if(t=bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ia(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function Za(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pd()){case hl:return 1;case Va:return 4;case qr:case fd:return 16;case Ha:return 536870912;default:return 16}default:return 16}}var pt=null,xl=null,Ir=null;function eu(){if(Ir)return Ir;var e,t=xl,n=t.length,r,o="value"in pt?pt.value:pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ir=o.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function ms(){return!1}function je(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nr:ms,this.isPropagationStopped=ms,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=je(xn),pr=J({},xn,{view:0,detail:0}),Cd=je(pr),Ho,Wo,En,wo=J({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Ho=e.screenX-En.screenX,Wo=e.screenY-En.screenY):Wo=Ho=0,En=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),hs=je(wo),Nd=J({},wo,{dataTransfer:0}),Ed=je(Nd),jd=J({},pr,{relatedTarget:0}),Ko=je(jd),Pd=J({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=je(Pd),zd=J({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Td=je(zd),$d=J({},xn,{data:0}),gs=je($d),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Od[e])?!!t[e]:!1}function Ql(){return Md}var Dd=J({},pr,{key:function(e){if(e.key){var t=Ld[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ad[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=je(Dd),Rd=J({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=je(Rd),bd=J({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Ud=je(bd),Vd=J({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hd=je(Vd),Wd=J({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kd=je(Wd),Gd=[9,13,27,32],wl=tt&&"CompositionEvent"in window,Dn=null;tt&&"documentMode"in document&&(Dn=document.documentMode);var Jd=tt&&"TextEvent"in window&&!Dn,tu=tt&&(!wl||Dn&&8<Dn&&11>=Dn),vs=" ",xs=!1;function nu(e,t){switch(e){case"keyup":return Gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Yd(e,t){switch(e){case"compositionend":return ru(t);case"keypress":return t.which!==32?null:(xs=!0,vs);case"textInput":return e=t.data,e===vs&&xs?null:e;default:return null}}function Xd(e,t){if(Gt)return e==="compositionend"||!wl&&nu(e,t)?(e=eu(),Ir=xl=pt=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tu&&t.locale!=="ko"?null:t.data;default:return null}}var qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qd[e.type]:t==="textarea"}function ou(e,t,n,r){La(r),t=no(t,"onChange"),0<t.length&&(n=new kl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,qn=null;function Zd(e){hu(e,0)}function _o(e){var t=Xt(e);if(Ea(t))return e}function ep(e,t){if(e==="change")return t}var iu=!1;if(tt){var Go;if(tt){var Jo="oninput"in document;if(!Jo){var Qs=document.createElement("div");Qs.setAttribute("oninput","return;"),Jo=typeof Qs.oninput=="function"}Go=Jo}else Go=!1;iu=Go&&(!document.documentMode||9<document.documentMode)}function ws(){In&&(In.detachEvent("onpropertychange",lu),qn=In=null)}function lu(e){if(e.propertyName==="value"&&_o(qn)){var t=[];ou(t,qn,e,ml(e)),Da(Zd,t)}}function tp(e,t,n){e==="focusin"?(ws(),In=t,qn=n,In.attachEvent("onpropertychange",lu)):e==="focusout"&&ws()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _o(qn)}function rp(e,t){if(e==="click")return _o(t)}function op(e,t){if(e==="input"||e==="change")return _o(t)}function ip(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:ip;function Zn(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!pi.call(t,o)||!be(e[o],t[o]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ss(e,t){var n=_s(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_s(n)}}function su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function au(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function _l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lp(e){var t=au(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&su(n.ownerDocument.documentElement,n)){if(r!==null&&_l(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ss(n,i);var l=Ss(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sp=tt&&"documentMode"in document&&11>=document.documentMode,Jt=null,Bi=null,Rn=null,zi=!1;function Fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Jt==null||Jt!==Jr(r)||(r=Jt,"selectionStart"in r&&_l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Zn(Rn,r)||(Rn=r,r=no(Bi,"onSelect"),0<r.length&&(t=new kl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Yo={},uu={};tt&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function So(e){if(Yo[e])return Yo[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uu)return Yo[e]=t[n];return e}var cu=So("animationend"),du=So("animationiteration"),pu=So("animationstart"),fu=So("transitionend"),mu=new Map,Cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){mu.set(e,t),Rt(t,[e])}for(var Xo=0;Xo<Cs.length;Xo++){var qo=Cs[Xo],ap=qo.toLowerCase(),up=qo[0].toUpperCase()+qo.slice(1);St(ap,"on"+up)}St(cu,"onAnimationEnd");St(du,"onAnimationIteration");St(pu,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(fu,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Ns(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ad(r,t,void 0,e),e.currentTarget=null}function hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Ns(o,s,f),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,f=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Ns(o,s,f),i=u}}}if(Xr)throw e=Ni,Xr=!1,Ni=null,e}function U(e,t){var n=t[Oi];n===void 0&&(n=t[Oi]=new Set);var r=e+"__bubble";n.has(r)||(gu(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),gu(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[jr]){e[jr]=!0,_a.forEach(function(n){n!=="selectionchange"&&(cp.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Zo("selectionchange",!1,t))}}function gu(e,t,n,r){switch(Za(t)){case 1:var o=Sd;break;case 4:o=Fd;break;default:o=vl}n=o.bind(null,t,n,e),o=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Bt(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Da(function(){var f=i,d=ml(n),y=[];e:{var p=mu.get(e);if(p!==void 0){var v=kl,_=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":v=Id;break;case"focusin":_="focus",v=Ko;break;case"focusout":_="blur",v=Ko;break;case"beforeblur":case"afterblur":v=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ud;break;case cu:case du:case pu:v=Bd;break;case fu:v=Hd;break;case"scroll":v=Cd;break;case"wheel":v=Kd;break;case"copy":case"cut":case"paste":v=Td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ys}var S=(t&4)!==0,M=!S&&e==="scroll",m=S?p!==null?p+"Capture":null:p;S=[];for(var c=f,h;c!==null;){h=c;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,m!==null&&(k=Gn(c,m),k!=null&&S.push(tr(c,k,h)))),M)break;c=c.return}0<S.length&&(p=new v(p,_,null,n,d),y.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Si&&(_=n.relatedTarget||n.fromElement)&&(Bt(_)||_[nt]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=f,_=_?Bt(_):null,_!==null&&(M=bt(_),_!==M||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=f),v!==_)){if(S=hs,k="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=ys,k="onPointerLeave",m="onPointerEnter",c="pointer"),M=v==null?p:Xt(v),h=_==null?p:Xt(_),p=new S(k,c+"leave",v,n,d),p.target=M,p.relatedTarget=h,k=null,Bt(d)===f&&(S=new S(m,c+"enter",_,n,d),S.target=h,S.relatedTarget=M,k=S),M=k,v&&_)t:{for(S=v,m=_,c=0,h=S;h;h=Ht(h))c++;for(h=0,k=m;k;k=Ht(k))h++;for(;0<c-h;)S=Ht(S),c--;for(;0<h-c;)m=Ht(m),h--;for(;c--;){if(S===m||m!==null&&S===m.alternate)break t;S=Ht(S),m=Ht(m)}S=null}else S=null;v!==null&&Es(y,p,v,S,!1),_!==null&&M!==null&&Es(y,M,_,S,!0)}}e:{if(p=f?Xt(f):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var F=ep;else if(ks(p))if(iu)F=op;else{F=np;var j=tp}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=rp);if(F&&(F=F(e,f))){ou(y,F,n,d);break e}j&&j(e,p,f),e==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&xi(p,"number",p.value)}switch(j=f?Xt(f):window,e){case"focusin":(ks(j)||j.contentEditable==="true")&&(Jt=j,Bi=f,Rn=null);break;case"focusout":Rn=Bi=Jt=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Fs(y,n,d);break;case"selectionchange":if(sp)break;case"keydown":case"keyup":Fs(y,n,d)}var N;if(wl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Gt?nu(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(tu&&n.locale!=="ko"&&(Gt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Gt&&(N=eu()):(pt=d,xl="value"in pt?pt.value:pt.textContent,Gt=!0)),j=no(f,E),0<j.length&&(E=new gs(E,e,null,n,d),y.push({event:E,listeners:j}),N?E.data=N:(N=ru(n),N!==null&&(E.data=N)))),(N=Jd?Yd(e,n):Xd(e,n))&&(f=no(f,"onBeforeInput"),0<f.length&&(d=new gs("onBeforeInput","beforeinput",null,n,d),y.push({event:d,listeners:f}),d.data=N))}hu(y,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Gn(e,n),i!=null&&r.unshift(tr(e,i,o)),i=Gn(e,t),i!=null&&r.push(tr(e,i,o))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Es(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,o?(u=Gn(n,i),u!=null&&l.unshift(tr(n,u,s))):o||(u=Gn(n,i),u!=null&&l.push(tr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var dp=/\r\n?/g,pp=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(pp,"")}function Pr(e,t,n){if(t=js(t),js(e)!==t&&n)throw Error(w(425))}function ro(){}var Ti=null,$i=null;function Li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout=="function"?setTimeout:void 0,fp=typeof clearTimeout=="function"?clearTimeout:void 0,Ps=typeof Promise=="function"?Promise:void 0,mp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ps<"u"?function(e){return Ps.resolve(null).then(e).catch(hp)}:Ai;function hp(e){setTimeout(function(){throw e})}function ti(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+kn,nr="__reactProps$"+kn,nt="__reactContainer$"+kn,Oi="__reactEvents$"+kn,gp="__reactListeners$"+kn,yp="__reactHandles$"+kn;function Bt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bs(e);e!==null;){if(n=e[Ke])return n;e=Bs(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Ke]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Fo(e){return e[nr]||null}var Mi=[],qt=-1;function Ft(e){return{current:e}}function V(e){0>qt||(e.current=Mi[qt],Mi[qt]=null,qt--)}function R(e,t){qt++,Mi[qt]=e.current,e.current=t}var _t={},de=Ft(_t),ke=Ft(!1),At=_t;function pn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function oo(){V(ke),V(de)}function zs(e,t,n){if(de.current!==_t)throw Error(w(168));R(de,t),R(ke,n)}function yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,td(e)||"Unknown",o));return J({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,At=de.current,R(de,e),R(ke,ke.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=yu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,V(ke),V(de),R(de,e)):V(ke),R(ke,n)}var Xe=null,Co=!1,ni=!1;function vu(e){Xe===null?Xe=[e]:Xe.push(e)}function vp(e){Co=!0,vu(e)}function Ct(){if(!ni&&Xe!==null){ni=!0;var e=0,t=O;try{var n=Xe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Co=!1}catch(o){throw Xe!==null&&(Xe=Xe.slice(e+1)),Ua(hl,Ct),o}finally{O=t,ni=!1}}return null}var Zt=[],en=0,lo=null,so=0,Pe=[],Be=0,Ot=null,qe=1,Ze="";function jt(e,t){Zt[en++]=so,Zt[en++]=lo,lo=e,so=t}function xu(e,t,n){Pe[Be++]=qe,Pe[Be++]=Ze,Pe[Be++]=Ot,Ot=e;var r=qe;e=Ze;var o=32-Ie(r)-1;r&=~(1<<o),n+=1;var i=32-Ie(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,qe=1<<32-Ie(t)+o|n<<o|r,Ze=i+e}else qe=1<<i|n<<o|r,Ze=e}function Sl(e){e.return!==null&&(jt(e,1),xu(e,1,0))}function Fl(e){for(;e===lo;)lo=Zt[--en],Zt[en]=null,so=Zt[--en],Zt[en]=null;for(;e===Ot;)Ot=Pe[--Be],Pe[Be]=null,Ze=Pe[--Be],Pe[Be]=null,qe=Pe[--Be],Pe[Be]=null}var Ce=null,Fe=null,H=!1,De=null;function ku(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Fe=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:qe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Fe=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(H){var t=Fe;if(t){var n=t;if(!$s(e,t)){if(Di(e))throw Error(w(418));t=yt(n.nextSibling);var r=Ce;t&&$s(e,t)?ku(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(Di(e))throw Error(w(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function Ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Br(e){if(e!==Ce)return!1;if(!H)return Ls(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Li(e.type,e.memoizedProps)),t&&(t=Fe)){if(Di(e))throw Qu(),Error(w(418));for(;t;)ku(e,t),t=yt(t.nextSibling)}if(Ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ce?yt(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=Fe;e;)e=yt(e.nextSibling)}function fn(){Fe=Ce=null,H=!1}function Cl(e){De===null?De=[e]:De.push(e)}var xp=it.ReactCurrentBatchConfig;function jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function As(e){var t=e._init;return t(e._payload)}function wu(e){function t(m,c){if(e){var h=m.deletions;h===null?(m.deletions=[c],m.flags|=16):h.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function o(m,c){return m=Qt(m,c),m.index=0,m.sibling=null,m}function i(m,c,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<c?(m.flags|=2,c):h):(m.flags|=2,c)):(m.flags|=1048576,c)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,h,k){return c===null||c.tag!==6?(c=ui(h,m.mode,k),c.return=m,c):(c=o(c,h),c.return=m,c)}function u(m,c,h,k){var F=h.type;return F===Kt?d(m,c,h.props.children,k,h.key):c!==null&&(c.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===at&&As(F)===c.type)?(k=o(c,h.props),k.ref=jn(m,c,h),k.return=m,k):(k=Gr(h.type,h.key,h.props,null,m.mode,k),k.ref=jn(m,c,h),k.return=m,k)}function f(m,c,h,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ci(h,m.mode,k),c.return=m,c):(c=o(c,h.children||[]),c.return=m,c)}function d(m,c,h,k,F){return c===null||c.tag!==7?(c=Lt(h,m.mode,k,F),c.return=m,c):(c=o(c,h),c.return=m,c)}function y(m,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ui(""+c,m.mode,h),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return h=Gr(c.type,c.key,c.props,null,m.mode,h),h.ref=jn(m,null,c),h.return=m,h;case Wt:return c=ci(c,m.mode,h),c.return=m,c;case at:var k=c._init;return y(m,k(c._payload),h)}if(Tn(c)||Sn(c))return c=Lt(c,m.mode,h,null),c.return=m,c;zr(m,c)}return null}function p(m,c,h,k){var F=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return F!==null?null:s(m,c,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qr:return h.key===F?u(m,c,h,k):null;case Wt:return h.key===F?f(m,c,h,k):null;case at:return F=h._init,p(m,c,F(h._payload),k)}if(Tn(h)||Sn(h))return F!==null?null:d(m,c,h,k,null);zr(m,h)}return null}function v(m,c,h,k,F){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(h)||null,s(c,m,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Qr:return m=m.get(k.key===null?h:k.key)||null,u(c,m,k,F);case Wt:return m=m.get(k.key===null?h:k.key)||null,f(c,m,k,F);case at:var j=k._init;return v(m,c,h,j(k._payload),F)}if(Tn(k)||Sn(k))return m=m.get(h)||null,d(c,m,k,F,null);zr(c,k)}return null}function _(m,c,h,k){for(var F=null,j=null,N=c,E=c=0,I=null;N!==null&&E<h.length;E++){N.index>E?(I=N,N=null):I=N.sibling;var T=p(m,N,h[E],k);if(T===null){N===null&&(N=I);break}e&&N&&T.alternate===null&&t(m,N),c=i(T,c,E),j===null?F=T:j.sibling=T,j=T,N=I}if(E===h.length)return n(m,N),H&&jt(m,E),F;if(N===null){for(;E<h.length;E++)N=y(m,h[E],k),N!==null&&(c=i(N,c,E),j===null?F=N:j.sibling=N,j=N);return H&&jt(m,E),F}for(N=r(m,N);E<h.length;E++)I=v(N,m,E,h[E],k),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?E:I.key),c=i(I,c,E),j===null?F=I:j.sibling=I,j=I);return e&&N.forEach(function(_e){return t(m,_e)}),H&&jt(m,E),F}function S(m,c,h,k){var F=Sn(h);if(typeof F!="function")throw Error(w(150));if(h=F.call(h),h==null)throw Error(w(151));for(var j=F=null,N=c,E=c=0,I=null,T=h.next();N!==null&&!T.done;E++,T=h.next()){N.index>E?(I=N,N=null):I=N.sibling;var _e=p(m,N,T.value,k);if(_e===null){N===null&&(N=I);break}e&&N&&_e.alternate===null&&t(m,N),c=i(_e,c,E),j===null?F=_e:j.sibling=_e,j=_e,N=I}if(T.done)return n(m,N),H&&jt(m,E),F;if(N===null){for(;!T.done;E++,T=h.next())T=y(m,T.value,k),T!==null&&(c=i(T,c,E),j===null?F=T:j.sibling=T,j=T);return H&&jt(m,E),F}for(N=r(m,N);!T.done;E++,T=h.next())T=v(N,m,E,T.value,k),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?E:T.key),c=i(T,c,E),j===null?F=T:j.sibling=T,j=T);return e&&N.forEach(function(lt){return t(m,lt)}),H&&jt(m,E),F}function M(m,c,h,k){if(typeof h=="object"&&h!==null&&h.type===Kt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qr:e:{for(var F=h.key,j=c;j!==null;){if(j.key===F){if(F=h.type,F===Kt){if(j.tag===7){n(m,j.sibling),c=o(j,h.props.children),c.return=m,m=c;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===at&&As(F)===j.type){n(m,j.sibling),c=o(j,h.props),c.ref=jn(m,j,h),c.return=m,m=c;break e}n(m,j);break}else t(m,j);j=j.sibling}h.type===Kt?(c=Lt(h.props.children,m.mode,k,h.key),c.return=m,m=c):(k=Gr(h.type,h.key,h.props,null,m.mode,k),k.ref=jn(m,c,h),k.return=m,m=k)}return l(m);case Wt:e:{for(j=h.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(m,c.sibling),c=o(c,h.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=ci(h,m.mode,k),c.return=m,m=c}return l(m);case at:return j=h._init,M(m,c,j(h._payload),k)}if(Tn(h))return _(m,c,h,k);if(Sn(h))return S(m,c,h,k);zr(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(m,c.sibling),c=o(c,h),c.return=m,m=c):(n(m,c),c=ui(h,m.mode,k),c.return=m,m=c),l(m)):n(m,c)}return M}var mn=wu(!0),_u=wu(!1),ao=Ft(null),uo=null,tn=null,Nl=null;function El(){Nl=tn=uo=null}function jl(e){var t=ao.current;V(ao),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){uo=e,Nl=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(uo===null)throw Error(w(308));tn=e,uo.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var zt=null;function Pl(e){zt===null?zt=[e]:zt.push(e)}function Su(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pl(t)):(n.next=o.next,o.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,rt(e,n)}return o=r.interleaved,o===null?(t.next=t,Pl(r)):(t.next=o.next,o.next=t),r.interleaved=t,rt(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}function Os(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var o=e.updateQueue;ut=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,f=u.next;u.next=null,l===null?i=f:l.next=f,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=f:s.next=f,d.lastBaseUpdate=u))}if(i!==null){var y=o.baseState;l=0,d=f=u=null,s=i;do{var p=s.lane,v=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,S=s;switch(p=t,v=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){y=_.call(v,y,p);break e}y=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,p=typeof _=="function"?_.call(v,y,p):_,p==null)break e;y=J({},y,p);break e;case 2:ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(f=d=v,u=y):d=d.next=v,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(u=y),o.baseState=u,o.firstBaseUpdate=f,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Dt|=l,e.lanes=l,e.memoizedState=y}}function Ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var mr={},Je=Ft(mr),rr=Ft(mr),or=Ft(mr);function Tt(e){if(e===mr)throw Error(w(174));return e}function zl(e,t){switch(R(or,t),R(rr,e),R(Je,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qi(t,e)}V(Je),R(Je,t)}function hn(){V(Je),V(rr),V(or)}function Cu(e){Tt(or.current);var t=Tt(Je.current),n=Qi(t,e.type);t!==n&&(R(rr,e),R(Je,n))}function Tl(e){rr.current===e&&(V(Je),V(rr))}var K=Ft(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=[];function $l(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}var Ur=it.ReactCurrentDispatcher,oi=it.ReactCurrentBatchConfig,Mt=0,G=null,te=null,re=null,fo=!1,bn=!1,ir=0,kp=0;function ae(){throw Error(w(321))}function Ll(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function Al(e,t,n,r,o,i){if(Mt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?Sp:Fp,e=n(r,o),bn){i=0;do{if(bn=!1,ir=0,25<=i)throw Error(w(301));i+=1,re=te=null,t.updateQueue=null,Ur.current=Cp,e=n(r,o)}while(bn)}if(Ur.current=mo,t=te!==null&&te.next!==null,Mt=0,re=te=G=null,fo=!1,t)throw Error(w(300));return e}function Ol(){var e=ir!==0;return ir=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?G.memoizedState=re=e:re=re.next=e,re}function Le(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?G.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(w(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?G.memoizedState=re=e:re=re.next=e}return re}function lr(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,f=i;do{var d=f.lane;if((Mt&d)===d)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=y,l=r):u=u.next=y,G.lanes|=d,Dt|=d}f=f.next}while(f!==null&&f!==i);u===null?l=r:u.next=s,be(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,Dt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function li(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);be(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Nu(){}function Eu(e,t){var n=G,r=Le(),o=t(),i=!be(r.memoizedState,o);if(i&&(r.memoizedState=o,xe=!0),r=r.queue,Ml(Bu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,sr(9,Pu.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(w(349));Mt&30||ju(n,t,o)}return o}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pu(e,t,n,r){t.value=n,t.getSnapshot=r,zu(t)&&Tu(e)}function Bu(e,t,n){return n(function(){zu(t)&&Tu(e)})}function zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function Tu(e){var t=rt(e,1);t!==null&&Re(t,e,1,-1)}function Ds(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=_p.bind(null,G,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $u(){return Le().memoizedState}function Vr(e,t,n,r){var o=He();G.flags|=e,o.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var o=Le();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&Ll(r,l.deps)){o.memoizedState=sr(t,n,i,r);return}}G.flags|=e,o.memoizedState=sr(1|t,n,i,r)}function Is(e,t){return Vr(8390656,8,e,t)}function Ml(e,t){return No(2048,8,e,t)}function Lu(e,t){return No(4,2,e,t)}function Au(e,t){return No(4,4,e,t)}function Ou(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,Ou.bind(null,t,e),n)}function Dl(){}function Du(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ll(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Iu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ll(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ru(e,t,n){return Mt&21?(be(n,t)||(n=Wa(),G.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Qp(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{O=n,oi.transition=r}}function bu(){return Le().memoizedState}function wp(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(e))Vu(t,n);else if(n=Su(e,t,n,r),n!==null){var o=me();Re(n,e,r,o),Hu(n,t,r)}}function _p(e,t,n){var r=kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Vu(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,be(s,l)){var u=t.interleaved;u===null?(o.next=o,Pl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Su(e,t,o,r),n!==null&&(o=me(),Re(n,e,r,o),Hu(n,t,r))}}function Uu(e){var t=e.alternate;return e===G||t!==null&&t===G}function Vu(e,t){bn=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}var mo={readContext:$e,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Sp={readContext:$e,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Is,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,Ou.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Ds,useDebugValue:Dl,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Ds(!1),t=e[0];return e=Qp.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=He();if(H){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),oe===null)throw Error(w(349));Mt&30||ju(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Is(Bu.bind(null,r,i,e),[e]),r.flags|=2048,sr(9,Pu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=He(),t=oe.identifierPrefix;if(H){var n=Ze,r=qe;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fp={readContext:$e,useCallback:Du,useContext:$e,useEffect:Ml,useImperativeHandle:Mu,useInsertionEffect:Lu,useLayoutEffect:Au,useMemo:Iu,useReducer:ii,useRef:$u,useState:function(){return ii(lr)},useDebugValue:Dl,useDeferredValue:function(e){var t=Le();return Ru(t,te.memoizedState,e)},useTransition:function(){var e=ii(lr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Eu,useId:bu,unstable_isNewReconciler:!1},Cp={readContext:$e,useCallback:Du,useContext:$e,useEffect:Ml,useImperativeHandle:Mu,useInsertionEffect:Lu,useLayoutEffect:Au,useMemo:Iu,useReducer:li,useRef:$u,useState:function(){return li(lr)},useDebugValue:Dl,useDeferredValue:function(e){var t=Le();return te===null?t.memoizedState=e:Ru(t,te.memoizedState,e)},useTransition:function(){var e=li(lr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Eu,useId:bu,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),o=kt(e),i=et(r,o);i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,o),t!==null&&(Re(t,e,o,r),br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),o=kt(e),i=et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,o),t!==null&&(Re(t,e,o,r),br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=kt(e),o=et(n,r);o.tag=2,t!=null&&(o.callback=t),t=vt(e,o,r),t!==null&&(Re(t,e,r,n),br(t,e,r))}};function Rs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(o,i):!0}function Wu(e,t,n){var r=!1,o=_t,i=t.contextType;return typeof i=="object"&&i!==null?i=$e(i):(o=Qe(t)?At:de.current,r=t.contextTypes,i=(r=r!=null)?pn(e,o):_t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Bl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=$e(i):(i=Qe(t)?At:de.current,o.context=pn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),co(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=ed(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function si(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Np=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,el=r),Vi(e,t)},n}function Gu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Vi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vi(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Us(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Np;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function Vs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Ep=it.ReactCurrentOwner,xe=!1;function fe(e,t,n,r){t.child=e===null?_u(t,null,n,r):mn(t,e.child,n,r)}function Ws(e,t,n,r,o){n=n.render;var i=t.ref;return un(t,o),r=Al(e,t,n,r,i,o),n=Ol(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(H&&n&&Sl(t),t.flags|=1,fe(e,t,r,o),t.child)}function Ks(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Kl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ju(e,t,i,r,o)):(e=Gr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(l,r)&&e.ref===t.ref)return ot(e,t,o)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,ot(e,t,o)}return Hi(e,t,n,r,o)}function Yu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(rn,Se),Se|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(rn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,R(rn,Se),Se|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,R(rn,Se),Se|=r;return fe(e,t,o,n),t.child}function Xu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hi(e,t,n,r,o){var i=Qe(n)?At:de.current;return i=pn(t,i),un(t,o),n=Al(e,t,n,r,i,o),r=Ol(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(H&&r&&Sl(t),t.flags|=1,fe(e,t,n,o),t.child)}function Gs(e,t,n,r,o){if(Qe(n)){var i=!0;io(t)}else i=!1;if(un(t,o),t.stateNode===null)Hr(e,t),Wu(t,n,r),Ui(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=$e(f):(f=Qe(n)?At:de.current,f=pn(t,f));var d=n.getDerivedStateFromProps,y=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==f)&&bs(t,l,r,f),ut=!1;var p=t.memoizedState;l.state=p,co(t,r,l,o),u=t.memoizedState,s!==r||p!==u||ke.current||ut?(typeof d=="function"&&(bi(t,n,d,r),u=t.memoizedState),(s=ut||Rs(t,n,s,r,p,u,f))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=f,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Fu(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Oe(t.type,s),l.props=f,y=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=$e(u):(u=Qe(n)?At:de.current,u=pn(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==y||p!==u)&&bs(t,l,r,u),ut=!1,p=t.memoizedState,l.state=p,co(t,r,l,o);var _=t.memoizedState;s!==y||p!==_||ke.current||ut?(typeof v=="function"&&(bi(t,n,v,r),_=t.memoizedState),(f=ut||Rs(t,n,f,r,p,_,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),l.props=r,l.state=_,l.context=u,r=f):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,i,o)}function Wi(e,t,n,r,o,i){Xu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ts(t,n,!1),ot(e,t,i);r=t.stateNode,Ep.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=mn(t,e.child,null,i),t.child=mn(t,null,s,i)):fe(e,t,s,i),t.memoizedState=r.state,o&&Ts(t,n,!0),t.child}function qu(e){var t=e.stateNode;t.pendingContext?zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zs(e,t.context,!1),zl(e,t.containerInfo)}function Js(e,t,n,r,o){return fn(),Cl(o),t.flags|=256,fe(e,t,n,r),t.child}var Ki={dehydrated:null,treeContext:null,retryLane:0};function Gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zu(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),R(K,o&1),e===null)return Ii(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Bo(l,r,0,null),e=Lt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Gi(n),t.memoizedState=Ki,e):Il(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return jp(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Qt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Qt(s,i):(i=Lt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Gi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ki,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Il(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&Cl(r),mn(t,e.child,null,n),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=si(Error(w(422))),Tr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Bo({mode:"visible",children:r.children},o,0,null),i=Lt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&mn(t,e.child,null,l),t.child.memoizedState=Gi(l),t.memoizedState=Ki,i);if(!(t.mode&1))return Tr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(w(419)),r=si(i,r,void 0),Tr(e,t,l,r)}if(s=(l&e.childLanes)!==0,xe||s){if(r=oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,rt(e,o),Re(r,e,o,-1))}return Wl(),r=si(Error(w(421))),Tr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Fe=yt(o.nextSibling),Ce=t,H=!0,De=null,e!==null&&(Pe[Be++]=qe,Pe[Be++]=Ze,Pe[Be++]=Ot,qe=e.id,Ze=e.overflow,Ot=t),t=Il(t,r.children),t.flags|=4096,t)}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function ai(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ec(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ai(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ai(t,!0,n,null,i);break;case"together":ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pp(e,t,n){switch(t.tag){case 3:qu(t),fn();break;case 5:Cu(t);break;case 1:Qe(t.type)&&io(t);break;case 4:zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;R(ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Zu(e,t,n):(R(K,K.current&1),e=ot(e,t,n),e!==null?e.sibling:null);R(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),R(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Yu(e,t,n)}return ot(e,t,n)}var tc,Ji,nc,rc;tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ji=function(){};nc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Tt(Je.current);var i=null;switch(n){case"input":o=yi(e,o),r=yi(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=ki(e,o),r=ki(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}wi(n,r);var l;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var s=o[f];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Wn.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(s=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&U("scroll",e),i||s===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bp(e,t,n){var r=t.pendingProps;switch(Fl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return Qe(t.type)&&oo(),ue(t),null;case 3:return r=t.stateNode,hn(),V(ke),V(de),$l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(rl(De),De=null))),Ji(e,t),ue(t),null;case 5:Tl(t);var o=Tt(or.current);if(n=t.type,e!==null&&t.stateNode!=null)nc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ue(t),null}if(e=Tt(Je.current),Br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ke]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<Ln.length;o++)U(Ln[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":is(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":ss(r,i),U("invalid",r)}wi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,s,e),o=["children",""+s]):Wn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&U("scroll",r)}switch(n){case"input":wr(r),ls(r,i,!0);break;case"textarea":wr(r),as(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ba(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ke]=t,e[nr]=r,tc(e,t,!1,!1),t.stateNode=e;e:{switch(l=_i(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ln.length;o++)U(Ln[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":is(e,r),o=yi(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),U("invalid",e);break;case"textarea":ss(e,r),o=ki(e,r),U("invalid",e);break;default:o=r}wi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?$a(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&za(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&cl(e,i,u,l))}switch(n){case"input":wr(e),ls(e,r,!1);break;case"textarea":wr(e),as(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Tt(or.current),Tt(Je.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return ue(t),null;case 13:if(V(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Fe!==null&&t.mode&1&&!(t.flags&128))Qu(),fn(),t.flags|=98560,i=!1;else if(i=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ke]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else De!==null&&(rl(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Wl())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return hn(),Ji(e,t),e===null&&er(t.stateNode.containerInfo),ue(t),null;case 10:return jl(t.type._context),ue(t),null;case 17:return Qe(t.type)&&oo(),ue(t),null;case 19:if(V(K),i=t.memoizedState,i===null)return ue(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Pn(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=po(e),l!==null){for(t.flags|=128,Pn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>yn&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304)}else{if(!r)if(e=po(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return ue(t),null}else 2*q()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=K.current,R(K,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function zp(e,t){switch(Fl(t),t.tag){case 1:return Qe(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),V(ke),V(de),$l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if(V(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(K),null;case 4:return hn(),null;case 10:return jl(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var $r=!1,ce=!1,Tp=typeof WeakSet=="function"?WeakSet:Set,C=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Yi(e,t,n){try{n()}catch(r){X(e,t,r)}}var Xs=!1;function $p(e,t){if(Ti=eo,e=au(),_l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,f=0,d=0,y=e,p=null;t:for(;;){for(var v;y!==n||o!==0&&y.nodeType!==3||(s=l+o),y!==i||r!==0&&y.nodeType!==3||(u=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(v=y.firstChild)!==null;)p=y,y=v;for(;;){if(y===e)break t;if(p===n&&++f===o&&(s=l),p===i&&++d===r&&(u=l),(v=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($i={focusedElem:e,selectionRange:n},eo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,M=_.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Oe(t.type,S),M);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(k){X(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return _=Xs,Xs=!1,_}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yi(t,n,i)}o=o.next}while(o!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function oc(e){var t=e.alternate;t!==null&&(e.alternate=null,oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[nr],delete t[Oi],delete t[gp],delete t[yp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ic(e){return e.tag===5||e.tag===3||e.tag===4}function qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}var ie=null,Me=!1;function st(e,t,n){for(n=n.child;n!==null;)lc(e,t,n),n=n.sibling}function lc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:ce||nn(n,t);case 6:var r=ie,o=Me;ie=null,st(e,t,n),ie=r,Me=o,ie!==null&&(Me?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Me?(e=ie,n=n.stateNode,e.nodeType===8?ti(e.parentNode,n):e.nodeType===1&&ti(e,n),Xn(e)):ti(ie,n.stateNode));break;case 4:r=ie,o=Me,ie=n.stateNode.containerInfo,Me=!0,st(e,t,n),ie=r,Me=o;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Yi(n,t,l),o=o.next}while(o!==r)}st(e,t,n);break;case 1:if(!ce&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,st(e,t,n),ce=r):st(e,t,n);break;default:st(e,t,n)}}function Zs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tp),t.forEach(function(r){var o=Up.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Me=!1;break e;case 3:ie=s.stateNode.containerInfo,Me=!0;break e;case 4:ie=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(ie===null)throw Error(w(160));lc(i,l,o),ie=null,Me=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(f){X(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sc(t,e),t=t.sibling}function sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ve(e),r&4){try{Un(3,e,e.return),jo(3,e)}catch(S){X(e,e.return,S)}try{Un(5,e,e.return)}catch(S){X(e,e.return,S)}}break;case 1:Ae(t,e),Ve(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Ae(t,e),Ve(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var o=e.stateNode;try{Kn(o,"")}catch(S){X(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ja(o,i),_i(s,l);var f=_i(s,i);for(l=0;l<u.length;l+=2){var d=u[l],y=u[l+1];d==="style"?$a(o,y):d==="dangerouslySetInnerHTML"?za(o,y):d==="children"?Kn(o,y):cl(o,d,y,f)}switch(s){case"input":vi(o,i);break;case"textarea":Pa(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?on(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?on(o,!!i.multiple,i.defaultValue,!0):on(o,!!i.multiple,i.multiple?[]:"",!1))}o[nr]=i}catch(S){X(e,e.return,S)}}break;case 6:if(Ae(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){X(e,e.return,S)}}break;case 3:if(Ae(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(S){X(e,e.return,S)}break;case 4:Ae(t,e),Ve(e);break;case 13:Ae(t,e),Ve(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ul=q())),r&4&&Zs(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(f=ce)||d,Ae(t,e),ce=f):Ae(t,e),Ve(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!d&&e.mode&1)for(C=e,d=e.child;d!==null;){for(y=C=d;C!==null;){switch(p=C,v=p.child,p.tag){case 0:case 11:case 14:case 15:Un(4,p,p.return);break;case 1:nn(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(S){X(r,n,S)}}break;case 5:nn(p,p.return);break;case 22:if(p.memoizedState!==null){ta(y);continue}}v!==null?(v.return=p,C=v):ta(y)}d=d.sibling}e:for(d=null,y=e;;){if(y.tag===5){if(d===null){d=y;try{o=y.stateNode,f?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=y.stateNode,u=y.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ta("display",l))}catch(S){X(e,e.return,S)}}}else if(y.tag===6){if(d===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(S){X(e,e.return,S)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;d===y&&(d=null),y=y.return}d===y&&(d=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ae(t,e),Ve(e),r&4&&Zs(e);break;case 21:break;default:Ae(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ic(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kn(o,""),r.flags&=-33);var i=qs(e);Zi(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=qs(e);qi(e,s,l);break;default:throw Error(w(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e,t,n){C=e,ac(e)}function ac(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||$r;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ce;s=$r;var f=ce;if($r=l,(ce=u)&&!f)for(C=o;C!==null;)l=C,u=l.child,l.tag===22&&l.memoizedState!==null?na(o):u!==null?(u.return=l,C=u):na(o);for(;i!==null;)C=i,ac(i),i=i.sibling;C=o,$r=s,ce=f}ea(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):ea(e)}}function ea(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ms(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ms(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var y=d.dehydrated;y!==null&&Xn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ce||t.flags&512&&Xi(t)}catch(p){X(t,t.return,p)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ta(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function na(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){X(t,o,u)}}var i=t.return;try{Xi(t)}catch(u){X(t,i,u)}break;case 5:var l=t.return;try{Xi(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Ap=Math.ceil,ho=it.ReactCurrentDispatcher,Rl=it.ReactCurrentOwner,Te=it.ReactCurrentBatchConfig,A=0,oe=null,Z=null,le=0,Se=0,rn=Ft(0),ne=0,ar=null,Dt=0,Po=0,bl=0,Vn=null,ve=null,Ul=0,yn=1/0,Ye=null,go=!1,el=null,xt=null,Lr=!1,ft=null,yo=0,Hn=0,tl=null,Wr=-1,Kr=0;function me(){return A&6?q():Wr!==-1?Wr:Wr=q()}function kt(e){return e.mode&1?A&2&&le!==0?le&-le:xp.transition!==null?(Kr===0&&(Kr=Wa()),Kr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Za(e.type)),e):1}function Re(e,t,n,r){if(50<Hn)throw Hn=0,tl=null,Error(w(185));dr(e,n,r),(!(A&2)||e!==oe)&&(e===oe&&(!(A&2)&&(Po|=n),ne===4&&dt(e,le)),we(e,r),n===1&&A===0&&!(t.mode&1)&&(yn=q()+500,Co&&Ct()))}function we(e,t){var n=e.callbackNode;xd(e,t);var r=Zr(e,e===oe?le:0);if(r===0)n!==null&&ds(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ds(n),t===1)e.tag===0?vp(ra.bind(null,e)):vu(ra.bind(null,e)),mp(function(){!(A&6)&&Ct()}),n=null;else{switch(Ka(r)){case 1:n=hl;break;case 4:n=Va;break;case 16:n=qr;break;case 536870912:n=Ha;break;default:n=qr}n=gc(n,uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uc(e,t){if(Wr=-1,Kr=0,A&6)throw Error(w(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Zr(e,e===oe?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var o=A;A|=2;var i=dc();(oe!==e||le!==t)&&(Ye=null,yn=q()+500,$t(e,t));do try{Dp();break}catch(s){cc(e,s)}while(!0);El(),ho.current=i,A=o,Z!==null?t=0:(oe=null,le=0,t=ne)}if(t!==0){if(t===2&&(o=Ei(e),o!==0&&(r=o,t=nl(e,o))),t===1)throw n=ar,$t(e,0),dt(e,r),we(e,q()),n;if(t===6)dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Op(o)&&(t=vo(e,r),t===2&&(i=Ei(e),i!==0&&(r=i,t=nl(e,i))),t===1))throw n=ar,$t(e,0),dt(e,r),we(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Pt(e,ve,Ye);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=Ul+500-q(),10<t)){if(Zr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ai(Pt.bind(null,e,ve,Ye),t);break}Pt(e,ve,Ye);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ie(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ap(r/1960))-r,10<r){e.timeoutHandle=Ai(Pt.bind(null,e,ve,Ye),r);break}Pt(e,ve,Ye);break;case 5:Pt(e,ve,Ye);break;default:throw Error(w(329))}}}return we(e,q()),e.callbackNode===n?uc.bind(null,e):null}function nl(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=vo(e,t),e!==2&&(t=ve,ve=n,t!==null&&rl(t)),e}function rl(e){ve===null?ve=e:ve.push.apply(ve,e)}function Op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!be(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~bl,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function ra(e){if(A&6)throw Error(w(327));cn();var t=Zr(e,0);if(!(t&1))return we(e,q()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=Ei(e);r!==0&&(t=r,n=nl(e,r))}if(n===1)throw n=ar,$t(e,0),dt(e,t),we(e,q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,ve,Ye),we(e,q()),null}function Vl(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(yn=q()+500,Co&&Ct())}}function It(e){ft!==null&&ft.tag===0&&!(A&6)&&cn();var t=A;A|=1;var n=Te.transition,r=O;try{if(Te.transition=null,O=1,e)return e()}finally{O=r,Te.transition=n,A=t,!(A&6)&&Ct()}}function Hl(){Se=rn.current,V(rn)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fp(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Fl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:hn(),V(ke),V(de),$l();break;case 5:Tl(r);break;case 4:hn();break;case 13:V(K);break;case 19:V(K);break;case 10:jl(r.type._context);break;case 22:case 23:Hl()}n=n.return}if(oe=e,Z=e=Qt(e.current,null),le=Se=t,ne=0,ar=null,bl=Po=Dt=0,ve=Vn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}zt=null}return e}function cc(e,t){do{var n=Z;try{if(El(),Ur.current=mo,fo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fo=!1}if(Mt=0,re=te=G=null,bn=!1,ir=0,Rl.current=null,n===null||n.return===null){ne=1,ar=t,Z=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=le,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,d=s,y=d.tag;if(!(d.mode&1)&&(y===0||y===11||y===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Vs(l);if(v!==null){v.flags&=-257,Hs(v,l,s,i,t),v.mode&1&&Us(i,f,t),t=v,u=f;var _=t.updateQueue;if(_===null){var S=new Set;S.add(u),t.updateQueue=S}else _.add(u);break e}else{if(!(t&1)){Us(i,f,t),Wl();break e}u=Error(w(426))}}else if(H&&s.mode&1){var M=Vs(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Hs(M,l,s,i,t),Cl(gn(u,s));break e}}i=u=gn(u,s),ne!==4&&(ne=2),Vn===null?Vn=[i]:Vn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Ku(i,u,t);Os(i,m);break e;case 1:s=u;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xt===null||!xt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Gu(i,s,t);Os(i,k);break e}}i=i.return}while(i!==null)}fc(n)}catch(F){t=F,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function dc(){var e=ho.current;return ho.current=mo,e===null?mo:e}function Wl(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Dt&268435455)&&!(Po&268435455)||dt(oe,le)}function vo(e,t){var n=A;A|=2;var r=dc();(oe!==e||le!==t)&&(Ye=null,$t(e,t));do try{Mp();break}catch(o){cc(e,o)}while(!0);if(El(),A=n,ho.current=r,Z!==null)throw Error(w(261));return oe=null,le=0,ne}function Mp(){for(;Z!==null;)pc(Z)}function Dp(){for(;Z!==null&&!cd();)pc(Z)}function pc(e){var t=hc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?fc(e):Z=t,Rl.current=null}function fc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zp(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(n=Bp(n,t,Se),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function Pt(e,t,n){var r=O,o=Te.transition;try{Te.transition=null,O=1,Ip(e,t,n,r)}finally{Te.transition=o,O=r}return null}function Ip(e,t,n,r){do cn();while(ft!==null);if(A&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kd(e,i),e===oe&&(Z=oe=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,gc(qr,function(){return cn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var l=O;O=1;var s=A;A|=4,Rl.current=null,$p(e,n),sc(n,e),lp($i),eo=!!Ti,$i=Ti=null,e.current=n,Lp(n),dd(),A=s,O=l,Te.transition=i}else e.current=n;if(Lr&&(Lr=!1,ft=e,yo=o),i=e.pendingLanes,i===0&&(xt=null),md(n.stateNode),we(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(go)throw go=!1,e=el,el=null,e;return yo&1&&e.tag!==0&&cn(),i=e.pendingLanes,i&1?e===tl?Hn++:(Hn=0,tl=e):Hn=0,Ct(),null}function cn(){if(ft!==null){var e=Ka(yo),t=Te.transition,n=O;try{if(Te.transition=null,O=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,yo=0,A&6)throw Error(w(331));var o=A;for(A|=4,C=e.current;C!==null;){var i=C,l=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(C=f;C!==null;){var d=C;switch(d.tag){case 0:case 11:case 15:Un(8,d,i)}var y=d.child;if(y!==null)y.return=d,C=y;else for(;C!==null;){d=C;var p=d.sibling,v=d.return;if(oc(d),d===f){C=null;break}if(p!==null){p.return=v,C=p;break}C=v}}}var _=i.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}C=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,C=l;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Un(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,C=m;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){l=C;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,C=h;else e:for(l=c;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:jo(9,s)}}catch(F){X(s,s.return,F)}if(s===l){C=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,C=k;break e}C=s.return}}if(A=o,Ct(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Qo,e)}catch{}r=!0}return r}finally{O=n,Te.transition=t}}return!1}function oa(e,t,n){t=gn(n,t),t=Ku(e,t,1),e=vt(e,t,1),t=me(),e!==null&&(dr(e,1,t),we(e,t))}function X(e,t,n){if(e.tag===3)oa(e,e,n);else for(;t!==null;){if(t.tag===3){oa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=gn(n,e),e=Gu(t,e,1),t=vt(t,e,1),e=me(),t!==null&&(dr(t,1,e),we(t,e));break}}t=t.return}}function Rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(le&n)===n&&(ne===4||ne===3&&(le&130023424)===le&&500>q()-Ul?$t(e,0):bl|=n),we(e,t)}function mc(e,t){t===0&&(e.mode&1?(t=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):t=1);var n=me();e=rt(e,t),e!==null&&(dr(e,t,n),we(e,n))}function bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mc(e,n)}function Up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),mc(e,n)}var hc;hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Pp(e,t,n);xe=!!(e.flags&131072)}else xe=!1,H&&t.flags&1048576&&xu(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var o=pn(t,de.current);un(t,n),o=Al(null,t,r,e,o,n);var i=Ol();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,io(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bl(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Ui(t,r,e,n),t=Wi(null,t,r,!0,i,n)):(t.tag=0,H&&i&&Sl(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hp(r),e=Oe(r,e),o){case 0:t=Hi(null,t,r,e,n);break e;case 1:t=Gs(null,t,r,e,n);break e;case 11:t=Ws(null,t,r,e,n);break e;case 14:t=Ks(null,t,r,Oe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Hi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Gs(e,t,r,o,n);case 3:e:{if(qu(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Fu(e,t),co(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gn(Error(w(423)),t),t=Js(e,t,r,n,o);break e}else if(r!==o){o=gn(Error(w(424)),t),t=Js(e,t,r,n,o);break e}else for(Fe=yt(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,De=null,n=_u(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===o){t=ot(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Cu(t),e===null&&Ii(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Li(r,o)?l=null:i!==null&&Li(r,i)&&(t.flags|=32),Xu(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&Ii(t),null;case 13:return Zu(e,t,n);case 4:return zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Ws(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,R(ao,r._currentValue),r._currentValue=l,i!==null)if(be(i.value,l)){if(i.children===o.children&&!ke.current){t=ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=et(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?u.next=u:(u.next=d.next,d.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ri(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(w(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ri(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,un(t,n),o=$e(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=Oe(r,t.pendingProps),o=Oe(r.type,o),Ks(e,t,r,o,n);case 15:return Ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Hr(e,t),t.tag=1,Qe(r)?(e=!0,io(t)):e=!1,un(t,n),Wu(t,r,o),Ui(t,r,o,n),Wi(null,t,r,!0,e,n);case 19:return ec(e,t,n);case 22:return Yu(e,t,n)}throw Error(w(156,t.tag))};function gc(e,t){return Ua(e,t)}function Vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new Vp(e,t,n,r)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hp(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pl)return 11;if(e===fl)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Kl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kt:return Lt(n.children,o,i,t);case dl:l=8,o|=8;break;case fi:return e=ze(12,n,t,o|2),e.elementType=fi,e.lanes=i,e;case mi:return e=ze(13,n,t,o),e.elementType=mi,e.lanes=i,e;case hi:return e=ze(19,n,t,o),e.elementType=hi,e.lanes=i,e;case Ca:return Bo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sa:l=10;break e;case Fa:l=9;break e;case pl:l=11;break e;case fl:l=14;break e;case at:l=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=ze(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Lt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Ca,e.lanes=n,e.stateNode={isHidden:!1},e}function ui(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function ci(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,o,i,l,s,u){return e=new Wp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bl(i),e}function Kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yc(e){if(!e)return _t;e=e._reactInternals;e:{if(bt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Qe(n))return yu(e,n,t)}return t}function vc(e,t,n,r,o,i,l,s,u){return e=Gl(n,r,!0,e,o,i,l,s,u),e.context=yc(null),n=e.current,r=me(),o=kt(n),i=et(r,o),i.callback=t??null,vt(n,i,o),e.current.lanes=o,dr(e,o,r),we(e,r),e}function zo(e,t,n,r){var o=t.current,i=me(),l=kt(o);return n=yc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(o,t,l),e!==null&&(Re(e,o,l,i),br(e,o,l)),l}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ia(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jl(e,t){ia(e,t),(e=e.alternate)&&ia(e,t)}function Gp(){return null}var xc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yl(e){this._internalRoot=e}To.prototype.render=Yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));zo(e,t,null,null)};To.prototype.unmount=Yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){zo(null,e,null,null)}),t[nt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ya();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&qa(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function la(){}function Jp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var f=xo(l);i.call(f)}}var l=vc(t,r,e,0,null,!1,!1,"",la);return e._reactRootContainer=l,e[nt]=l.current,er(e.nodeType===8?e.parentNode:e),It(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var f=xo(u);s.call(f)}}var u=Gl(e,0,!1,null,null,!1,!1,"",la);return e._reactRootContainer=u,e[nt]=u.current,er(e.nodeType===8?e.parentNode:e),It(function(){zo(t,u,n,r)}),u}function Lo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=xo(l);s.call(u)}}zo(t,l,e,o)}else l=Jp(n,t,e,o,r);return xo(l)}Ga=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(gl(t,n|1),we(t,q()),!(A&6)&&(yn=q()+500,Ct()))}break;case 13:It(function(){var r=rt(e,1);if(r!==null){var o=me();Re(r,e,1,o)}}),Jl(e,1)}};yl=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=me();Re(t,e,134217728,n)}Jl(e,134217728)}};Ja=function(e){if(e.tag===13){var t=kt(e),n=rt(e,t);if(n!==null){var r=me();Re(n,e,t,r)}Jl(e,t)}};Ya=function(){return O};Xa=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Fi=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Fo(r);if(!o)throw Error(w(90));Ea(r),vi(r,o)}}}break;case"textarea":Pa(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Oa=Vl;Ma=It;var Yp={usingClientEntryPoint:!1,Events:[fr,Xt,Fo,La,Aa,Vl]},Bn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xp={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ra(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{Qo=Ar.inject(Xp),Ge=Ar}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(w(200));return Kp(e,t,null,n)};Ee.createRoot=function(e,t){if(!Xl(e))throw Error(w(299));var n=!1,r="",o=xc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,o),e[nt]=t.current,er(e.nodeType===8?e.parentNode:e),new Yl(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ra(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return It(e)};Ee.hydrate=function(e,t,n){if(!$o(t))throw Error(w(200));return Lo(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Xl(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=xc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=vc(t,null,e,1,n??null,o,!1,i,l),e[nt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new To(t)};Ee.render=function(e,t,n){if(!$o(t))throw Error(w(200));return Lo(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!$o(e))throw Error(w(40));return e._reactRootContainer?(It(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ee.unstable_batchedUpdates=Vl;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Lo(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)}catch(e){console.error(e)}}kc(),ka.exports=Ee;var qp=ka.exports,sa=qp;di.createRoot=sa.createRoot,di.hydrateRoot=sa.hydrateRoot;const We={branding:{label:"平面 / 品牌設計",icon:"◐",color:"#2C4A3E"},digital_ui:{label:"數位 / UI 設計",icon:"◧",color:"#1F3A5F"},photo_video:{label:"攝影 / 影像",icon:"◉",color:"#3D2C4A"},content:{label:"文案 / 內容",icon:"◔",color:"#5C3D1F"},marketing:{label:"行銷 / 廣告",icon:"◭",color:"#7A2E1F"},consulting:{label:"顧問 / 策略",icon:"◈",color:"#2A3D2F"},training:{label:"教學 / 培訓",icon:"◇",color:"#4A2C3D"},service:{label:"服務業 / 實體",icon:"◎",color:"#3D4A2C"},technical:{label:"製作 / 技術",icon:"◫",color:"#1F3A4A"},professional:{label:"知識 / 專業",icon:"◰",color:"#2C2C4A"},spiritual:{label:"身心靈 / 療癒",icon:"✦",color:"#4A2C5C"},experience:{label:"體驗 / 活動 / 戶外",icon:"◬",color:"#2C5C3E"},food:{label:"食品 / 飲品 / 烘焙",icon:"◊",color:"#7A4A1F"},retail:{label:"零售 / 實體商品",icon:"◩",color:"#5C2C3D"},manufacturing:{label:"工廠 / 製造 / B2B",icon:"⚙",color:"#1F1F2C"},home_service:{label:"居家 / 環境服務",icon:"◧",color:"#3D5C2C"},education:{label:"教育 / 才藝 / 補習",icon:"◐",color:"#5C4A1F"},travel:{label:"旅遊 / 民宿 / 住宿",icon:"◯",color:"#2C4A5C"}},Zp={Q4:"急迫度（多急著要解決）",Q5:"事業規模（年營收/員工數）",Q6:"決策角色（你是不是最終決策者）",Q7:"過去外包經驗",Q8:"不希望被怎樣對待",Q9:"一句話講你的事業",Q10:"直接需求（你最想要的是？）",Q11:"不做的後果（不解決會怎樣）",Q12:"成功後的具體變化",Q13:"這問題拖了多久",Q14:"客戶輪廓（你的目標客戶）",Q15:"競品分析",Q16:"內部團隊（誰會接手執行）",Q17:"過去試過什麼方案",Q18:"3 個願望（如果許願能解決什麼）",Q19:"3 個月後的理想場景",Q21:"驗收標準（怎樣算成功）",Q22:"最不在意的（可以讓步的）",Q23:"持續發揮作用（一次性 vs 長期）",Q24:"隱藏決策者（背後還有誰要點頭）",Q26:"更大目標關聯（事業整體版圖）",Q27:"預算範圍",Q28:"決策路徑",Q30:"A vs B 方案比較",Q31:"付款時點",Q32:"最值得外包的事",Q33:"多付一點願意換什麼",Q35:"結束後的關係",Q36:"理想長期角色",Q37:"推薦（會不會推薦給朋友）",Q38:"同步節奏（多久回報一次）",Q39:"半年一年後的理想"},aa=[{id:"logo_design",cat:"branding",name:"LOGO 設計",keyQ:["Q4","Q11","Q12","Q23","Q30","Q35","Q36"],strategy:"LOGO 是「一次性報價最常見」。網站要破除「LOGO = 8,000 元」的價格框，引導客戶看見「品牌啟動方案值 5 倍價」。文案重點：急迫感、不做後果、成功具體變化、A/B 方案對比、長期關係。",sections:["hero","work_portfolio","pricing_tiers","process","about","testimonials","faq","contact"],trustPoints:["作品集 50+ 件","品牌啟動方案","完整 VI 延伸","商標註冊協助","免費品牌諮詢"]},{id:"packaging",cat:"branding",name:"包裝設計",keyQ:["Q12","Q14","Q15","Q19","Q23","Q26"],strategy:"包裝設計的關鍵不是「視覺漂亮」、是「上架後賣得動」。網站文案要逼客戶面對「我要打誰、競品長怎樣、3 個月後通路反應」。導向全系列產品線合作。",sections:["hero","work_portfolio","case_studies","process","about","testimonials","contact"],trustPoints:["通路上架經驗","電商視覺","結構打樣","KV 主視覺","系列延伸"]},{id:"vi_design",cat:"branding",name:"VI 視覺識別",keyQ:["Q5","Q6","Q16","Q23","Q26","Q35","Q36"],strategy:"VI 是組織級決策。網站要說服老闆「規模大、需要 VI 系統」。突顯內部團隊接手難度、年度顧問必要性。",sections:["hero","work_portfolio","methodology","team","process","testimonials","contact"],trustPoints:["VI 手冊完整","年度視覺顧問","品牌規範書","上市櫃客戶","國際獎項"]},{id:"business_card",cat:"branding",name:"名片設計",keyQ:["Q9","Q10","Q14","Q18","Q26","Q35"],strategy:"名片本身單價低、要「快速跳脫單品報價」。網站要讓人看到「名片是個人品牌的一塊磚」，引導到個人品牌啟動包。",sections:["hero","work_portfolio","personal_brand_pkg","pricing_tiers","about","contact"],trustPoints:["個人品牌啟動包","燙金壓凸工藝","精緻紙材","快速交件","小量印製"]},{id:"print_dm",cat:"branding",name:"印刷物 / DM 設計",keyQ:["Q4","Q12","Q21","Q23","Q30"],strategy:"印刷案子節奏快、急迫度和驗收標準是核心。網站要把單次活動延伸成「年度活動視覺顧問」。",sections:["hero","work_portfolio","turnaround_time","pricing_tiers","process","contact"],trustPoints:["24 小時急件","印刷監製","年度活動視覺","大圖輸出","展場主視覺"]},{id:"presentation",cat:"branding",name:"提案簡報設計",keyQ:["Q10","Q11","Q12","Q19","Q24","Q26"],strategy:"簡報真正的觀眾是「老闆/投資人」。網站要強調「簡報是成交工具不是美化」。Q24 隱藏決策者是關鍵 — 給誰看會改變設計方向。",sections:["hero","work_portfolio","case_studies","process","pricing_tiers","testimonials","contact"],trustPoints:["募資簡報經驗","提案成功案例","資訊圖表","24 小時急件","英文簡報"]},{id:"web_design",cat:"digital_ui",name:"網頁設計",keyQ:["Q4","Q11","Q12","Q14","Q16","Q19","Q23","Q35"],strategy:"網頁設計很多人卡在「客戶要看別家、我先報價」。網站要逼對方說明「網站的目的」。把月費維運合約埋進去。",sections:["hero","work_portfolio","service_packages","process","maintenance","testimonials","faq","contact"],trustPoints:["作品集 30+ 件","WordPress 專家","SEO 友善","響應式設計","月費維運"]},{id:"app_ui",cat:"digital_ui",name:"App UI 設計",keyQ:["Q5","Q6","Q14","Q16","Q23","Q26","Q36"],strategy:"App 是長期戰、不是一次案。網站要鋪好 Design System 維護的路。",sections:["hero","work_portfolio","design_system","process","team","testimonials","contact"],trustPoints:["Design System","使用者測試","Figma 交付","工程師對接","長期合作"]},{id:"ui_ux_consulting",cat:"digital_ui",name:"UI / UX 諮詢",keyQ:["Q11","Q12","Q13","Q17","Q21","Q32"],strategy:"UX 諮詢容易被當「改幾個按鈕」。網站要定位成「持續優化夥伴」，強調數據驅動。",sections:["hero","case_studies","methodology","process","team","insights","contact"],trustPoints:["UX 研究","A/B 測試","熱點分析","使用者訪談","轉換率優化"]},{id:"ecommerce_frontend",cat:"digital_ui",name:"電商前台設計",keyQ:["Q12","Q14","Q19","Q21","Q23","Q26"],strategy:"電商前台的成功 = GMV。網站要把「視覺討論」轉成「轉換率討論」。",sections:["hero","work_portfolio","platforms","case_studies","process","maintenance","contact"],trustPoints:["Shopify 專家","CVR 提升案例","購物車優化","行動版優先","金流串接"]},{id:"product_photo",cat:"photo_video",name:"商品攝影",keyQ:["Q10","Q12","Q14","Q19","Q21","Q23","Q35"],strategy:"商品攝影最常被當「一張多少錢」。網站要從「拍幾張」轉成「賣多少」。導向季度合約。",sections:["hero","work_portfolio","service_packages","studio","process","testimonials","contact"],trustPoints:["情境攝影棚","電商主圖","季度合約","快速交件","修圖到位"]},{id:"portrait_photo",cat:"photo_video",name:"人像攝影",keyQ:["Q9","Q10","Q14","Q18","Q23","Q35","Q36"],strategy:"個人品牌人像最關鍵是「客戶的 next step」。網站要鋪「素材庫年度合約」入口。",sections:["hero","work_portfolio","personal_brand_pkg","process","about","testimonials","contact"],trustPoints:["個人品牌定位","素材庫年約","形象顧問","妝髮造型","多場景"]},{id:"wedding_photo",cat:"photo_video",name:"婚禮攝影",keyQ:["Q11","Q12","Q19","Q21","Q22","Q30","Q32"],strategy:"婚攝是高情感案件、不能只談技術。網站要講「30 年後翻相簿的場景」。提「結婚故事整體紀錄方案」。",sections:["hero","work_portfolio","service_packages","story_pkg","about","testimonials","faq","contact"],trustPoints:["婚禮紀錄 100+ 場","海外婚禮","相本設計","雙攝影師","當日精選"]},{id:"corporate_photo",cat:"photo_video",name:"商業形象攝影",keyQ:["Q5","Q6","Q23","Q24","Q26","Q35","Q36"],strategy:"商業形象是組織級採購。網站要鋪「年度視覺資產建置」，突顯多人決策應對。",sections:["hero","work_portfolio","enterprise_pkg","process","team","testimonials","contact"],trustPoints:["企業形象案","年度視覺資產","高階主管肖像","空間攝影","上市櫃經驗"]},{id:"short_video",cat:"photo_video",name:"短影音 / Reels 製作",keyQ:["Q12","Q13","Q14","Q17","Q19","Q21","Q38"],strategy:"短影音不是「拍一支」、是「月度節奏」。網站要強調月度節奏與觀眾觸及。",sections:["hero","work_portfolio","monthly_packages","case_studies","process","testimonials","contact"],trustPoints:["月度節奏","百萬觸及案例","Reels/Shorts/TikTok","腳本企劃","剪輯包"]},{id:"ad_copy",cat:"content",name:"廣告文案",keyQ:["Q4","Q12","Q14","Q19","Q21","Q32"],strategy:"廣告文案很多人比 ChatGPT 價格。網站要從「字數」轉成「ROAS」。",sections:["hero","case_studies","service_packages","process","about","testimonials","contact"],trustPoints:["ROAS 提升案例","A/B 測試文案","高轉換 hook","產業實績","24 小時急件"]},{id:"brand_story",cat:"content",name:"品牌故事撰寫",keyQ:["Q9","Q10","Q11","Q18","Q23","Q26"],strategy:"品牌故事不能只寫「故事」、要連結事業。網站要切入年度敘事顧問。",sections:["hero","work_portfolio","methodology","about","testimonials","contact"],trustPoints:["深度訪談","品牌敘事","創辦人故事","年度敘事顧問","出版經驗"]},{id:"seo_writing",cat:"content",name:"SEO 文章",keyQ:["Q11","Q12","Q13","Q14","Q17","Q21","Q38"],strategy:"SEO 是長期戰。網站要鎖排名 KPI、月度節奏。",sections:["hero","case_studies","monthly_packages","process","methodology","testimonials","contact"],trustPoints:["關鍵字研究","排名實績","月度產出","GSC 數據","產業專欄"]},{id:"social_post",cat:"content",name:"社群貼文",keyQ:["Q12","Q14","Q19","Q21","Q38","Q39"],strategy:"社群最容易被當「廉價勞工」。網站要把貼文寫變成月度經營合約。",sections:["hero","work_portfolio","monthly_packages","platforms","case_studies","testimonials","contact"],trustPoints:["月度經營","互動成長案例","FB/IG/Threads","社群企劃","輿情監測"]},{id:"newsletter",cat:"content",name:"電子報",keyQ:["Q12","Q14","Q19","Q21","Q23","Q38"],strategy:"電子報的價值 = 帶來訂單。網站要鎖開信率/點擊率/轉換，切入月費漏斗。",sections:["hero","case_studies","monthly_packages","process","about","testimonials","contact"],trustPoints:["開信率 40%+","自動化流程","CRM 整合","電子報設計","訂閱漏斗"]},{id:"speech_script",cat:"content",name:"直播 / 演講稿",keyQ:["Q4","Q9","Q11","Q12","Q19","Q24","Q36"],strategy:"演講稿要跟「演講者本人」綁定。網站要埋好個人品牌路徑。",sections:["hero","work_portfolio","service_packages","about","testimonials","contact"],trustPoints:["TEDx 經驗","上市公司 KOL","直播腳本","一對一陪跑","臨場輔導"]},{id:"fb_ig_ads",cat:"marketing",name:"FB / IG 廣告投放",keyQ:["Q12","Q14","Q17","Q21","Q32","Q38"],strategy:"投放最容易陷入「比廣告操作費 %」。網站要把對話拉到「夥伴」層級。",sections:["hero","case_studies","monthly_packages","methodology","process","testimonials","contact"],trustPoints:["Meta 認證","ROAS 案例","月度報表","受眾分析","創意素材"]},{id:"google_ads",cat:"marketing",name:"Google Ads",keyQ:["Q11","Q12","Q14","Q17","Q21","Q32","Q36"],strategy:"Google Ads 客戶常想「便宜操作費」。網站要切入年度顧問，強調 B2B 受眾複雜度。",sections:["hero","case_studies","service_packages","methodology","process","testimonials","contact"],trustPoints:["Google Partner","搜尋廣告","GA4 整合","B2B 經驗","年度顧問"]},{id:"seo_service",cat:"marketing",name:"SEO 服務",keyQ:["Q4","Q11","Q12","Q13","Q21","Q23","Q26"],strategy:"SEO 是時間戰。網站要強調 6 個月起跳，導向年度自然流量增長方案。",sections:["hero","case_studies","methodology","monthly_packages","process","insights","contact"],trustPoints:["排名實績","技術 SEO","內容 SEO","本地 SEO","年度合約"]},{id:"kol_marketing",cat:"marketing",name:"KOL / KOC 行銷",keyQ:["Q12","Q14","Q17","Q21","Q32","Q35"],strategy:"KOL 案最容易被當「配對費」。網站要拉到月度配對方案。",sections:["hero","kol_network","case_studies","monthly_packages","process","testimonials","contact"],trustPoints:["KOL 資料庫 500+","微網紅","成效保證","報表透明","產業匹配"]},{id:"content_marketing",cat:"marketing",name:"內容行銷策略",keyQ:["Q9","Q10","Q11","Q16","Q23","Q26","Q36"],strategy:"內容行銷需要「客戶內部執行得起來」。網站要把策略升級成代營運。",sections:["hero","case_studies","methodology","service_packages","team","insights","contact"],trustPoints:["內容策略","代營運方案","多平台整合","KPI 設定","內訓賦能"]},{id:"brand_strategy",cat:"consulting",name:"品牌策略顧問",keyQ:["Q5","Q6","Q9","Q11","Q18","Q26","Q36"],strategy:"品牌顧問是高客單。網站要確認對方是 final decision maker，把「諮詢一場」拉成「年度陪跑」。",sections:["hero","methodology","case_studies","about","insights","engagement_models","contact"],trustPoints:["上市櫃案例","創辦人陪跑","品牌定位","年度顧問","出版著作"]},{id:"digital_transformation",cat:"consulting",name:"數位轉型顧問",keyQ:["Q5","Q6","Q13","Q16","Q17","Q26","Q36"],strategy:"數位轉型最容易失敗在「內部不接」。網站要鎖定「12 個月陪跑」，強調過去失敗案例的處理。",sections:["hero","methodology","case_studies","team","engagement_models","insights","contact"],trustPoints:["製造業轉型","12 個月陪跑","內訓賦能","ERP 導入","上市櫃實績"]},{id:"business_model",cat:"consulting",name:"商業模式顧問",keyQ:["Q9","Q11","Q12","Q18","Q26","Q30","Q36"],strategy:"商業模式顧問要逼客戶「面對假設」。網站切入 6 個月驗證 + 年度成長顧問。",sections:["hero","methodology","case_studies","about","insights","engagement_models","contact"],trustPoints:["MVP 驗證","商業畫布","財務模型","新事業孵化","創辦人教練"]},{id:"ipo_fundraising",cat:"consulting",name:"IPO / 募資顧問",keyQ:["Q4","Q5","Q6","Q24","Q27","Q28","Q31"],strategy:"募資是時間 + 金額 + 決策權的綜合題。網站要透明預算結構、付款時點。",sections:["hero","track_record","methodology","team","engagement_models","process","contact"],trustPoints:["IPO 輔導實績","A/B/C 輪募資","財務 DD","法律對接","投資人網絡"]},{id:"cross_border",cat:"consulting",name:"跨境 / 出海顧問",keyQ:["Q4","Q5","Q14","Q17","Q23","Q26","Q36"],strategy:"跨境是長期戰。網站鋪 12 個月 + 年度顧問，強調過去市場試過的反思。",sections:["hero","markets","case_studies","methodology","team","engagement_models","contact"],trustPoints:["日本市場","東南亞落地","在地團隊","法規對接","海外通路"]},{id:"one_on_one_coach",cat:"training",name:"1 對 1 教練",keyQ:["Q9","Q11","Q12","Q18","Q19","Q36","Q39"],strategy:"教練是長期關係。網站要圍繞「學員的成長場景」，切入半年/年度陪跑。",sections:["hero","coaching_packages","methodology","about","testimonials","process","contact"],trustPoints:["學員實績","半年陪跑","ICF 認證","客製化計畫","每週一對一"]},{id:"corporate_training",cat:"training",name:"企業內訓",keyQ:["Q5","Q6","Q11","Q12","Q16","Q21","Q23","Q36"],strategy:"內訓是 B2B 高客單。網站要鎖 ROI、強調課後落實是核心。",sections:["hero","course_catalog","case_studies","methodology","team","engagement_models","contact"],trustPoints:["上市櫃內訓","客製課程","課後輔導","評量機制","年度合作"]},{id:"online_course",cat:"training",name:"線上課程製作",keyQ:["Q9","Q10","Q14","Q19","Q21","Q23","Q26"],strategy:"線上課客戶常想「拍剪上架就好」。網站要從「拍攝」轉到「銷售」，切入年度品牌經營。",sections:["hero","service_packages","case_studies","platforms","process","testimonials","contact"],trustPoints:["課程銷售案例","一站式製作","行銷漏斗","平台上架","長期經營"]},{id:"workshop",cat:"training",name:"工作坊",keyQ:["Q4","Q9","Q12","Q14","Q19","Q21","Q23"],strategy:"工作坊是入口、不是終點。網站要切入年度系列工作坊。",sections:["hero","workshop_calendar","past_events","about","testimonials","corporate_pkg","contact"],trustPoints:["系列工作坊","企業包班","小班制","實作為主","社群延伸"]},{id:"beauty",cat:"service",name:"美業（美甲 / 美睫 / 美容）",keyQ:["Q10","Q12","Q14","Q19","Q23","Q33","Q35"],strategy:"美業客戶比「單次多少」。網站要從「一次服務」轉到「3 個月後客單變化」，切入包套/會員制。",sections:["hero","service_menu","membership","work_portfolio","booking","about","testimonials","contact"],trustPoints:["會員制","包套方案","到府服務","證照齊全","材料用料"]},{id:"independent_restaurant",cat:"service",name:"餐飲（獨立餐廳 / 外燴）",keyQ:["Q9","Q10","Q12","Q14","Q19","Q23","Q26"],strategy:"餐飲一次性消費比多。網站要找到「真正在賣什麼」，切入會員制/年度合作。",sections:["hero","menu","story","reservation","private_event","press","location","contact"],trustPoints:["主廚資歷","在地食材","包場服務","外燴經驗","預訂制"]},{id:"fitness_coach",cat:"service",name:"健身教練",keyQ:["Q11","Q12","Q18","Q19","Q21","Q23","Q36","Q39"],strategy:"教練生意核心 = 學員留存。網站要放在「6 個月體態目標」，切入年度陪跑。",sections:["hero","coaching_packages","transformation","methodology","about","booking","testimonials","contact"],trustPoints:["學員轉變","六個月計畫","NSCA 認證","飲食指導","線上追蹤"]},{id:"pet_grooming",cat:"service",name:"寵物美容 / 訓練",keyQ:["Q10","Q12","Q14","Q19","Q23","Q33","Q35"],strategy:"寵物服務同質化高。網站要把單次服務升級成全方位照護，切入年度會員。",sections:["hero","service_menu","membership","gallery","booking","about","testimonials","contact"],trustPoints:["B 級美容師證","到府服務","會員制","健康記錄","單犬一池"]},{id:"childcare",cat:"service",name:"寄養 / 托嬰 / 托幼",keyQ:["Q9","Q11","Q14","Q16","Q23","Q35","Q38"],strategy:"托育是高度信任業。網站要回應家長真正的擔心，同步節奏 = 信任核心。",sections:["hero","philosophy","daily_routine","safety","team","parent_communication","tour_booking","contact"],trustPoints:["立案合格","每日影像回報","師生比 1:4","專業教保員","監視器透明"]},{id:"video_editing",cat:"technical",name:"影片剪輯",keyQ:["Q4","Q9","Q12","Q14","Q19","Q21","Q38"],strategy:"剪輯最容易被當「一支多少」。網站要鎖觀眾增長，切入月度內容方案。",sections:["hero","work_portfolio","monthly_packages","process","about","testimonials","contact"],trustPoints:["百萬觀看作品","24 小時急件","月度節奏","YouTube/Reels","腳本陪伴"]},{id:"three_d",cat:"technical",name:"3D 建模 / 動畫",keyQ:["Q10","Q11","Q17","Q21","Q22","Q23","Q26"],strategy:"3D 容易陷入「無限改稿」。網站要設好驗收，切入年度資產建置。",sections:["hero","work_portfolio","service_packages","process","pricing_tiers","testimonials","contact"],trustPoints:["產品 3D 渲染","建築可視化","改稿次數明確","檔案規格","版權清楚"]},{id:"animation",cat:"technical",name:"動畫製作",keyQ:["Q9","Q10","Q12","Q14","Q19","Q21","Q23"],strategy:"動畫客戶常不知道目的。網站要鎖觀眾與成果，切入年度合作。",sections:["hero","work_portfolio","service_packages","process","team","testimonials","contact"],trustPoints:["2D 動畫","MG 動畫","腳本企劃","配音整合","年度系列"]},{id:"programming",cat:"technical",name:"程式開發",keyQ:["Q5","Q6","Q11","Q12","Q16","Q21","Q36"],strategy:"程式開發案最容易死在「需求不清」。網站要釐清決策、鎖業務目標、切入年度技術夥伴。",sections:["hero","case_studies","tech_stack","process","team","engagement_models","contact"],trustPoints:["SaaS 開發","技術棧透明","原始碼交付","CTO 諮詢","長期維運"]},{id:"data_bi",cat:"technical",name:"資料 / BI 分析",keyQ:["Q9","Q11","Q12","Q16","Q21","Q23","Q26","Q36"],strategy:"資料分析最容易被當「一次性建表」。網站要鎖業務指標，切入年度數據顧問。",sections:["hero","case_studies","methodology","tech_stack","team","engagement_models","contact"],trustPoints:["Looker/Tableau","資料倉儲","分析師駐點","報表自動化","預測模型"]},{id:"lawyer_sme",cat:"professional",name:"律師（中小企業法務）",keyQ:["Q5","Q6","Q11","Q13","Q23","Q26","Q36"],strategy:"律師最常被當「鐘點費」。網站要釐清決策、挖出潛在風險，切入月度法務顧問。",sections:["hero","practice_areas","team_credentials","case_studies","monthly_advisor","insights","contact"],trustPoints:["公司法專精","合約審閱","智財權","勞資爭議","月度顧問"]},{id:"accountant",cat:"professional",name:"會計師 / 記帳士",keyQ:["Q5","Q6","Q11","Q12","Q23","Q26","Q36"],strategy:"會計師客戶常只買「記帳月費」。網站要拉到「商業策略」，切入財務長外包。",sections:["hero","services","team_credentials","industries","engagement_models","insights","contact"],trustPoints:["財報簽證","稅務規劃","財務長外包","跨境稅務","上市櫃"]},{id:"counseling",cat:"professional",name:"心理諮商",keyQ:["Q11","Q12","Q13","Q18","Q19","Q23","Q36","Q39"],strategy:"諮商客戶常買單次、不買長期。網站要放在「6 個月後生活變化」，切入年度心理夥伴。",sections:["hero","approach","team_credentials","session_packages","about","faq","booking","contact"],trustPoints:["諮商心理師證","完全保密","六次起步","線上諮商","伴侶諮商"]},{id:"health_management",cat:"professional",name:"醫療衛教 / 健康管理",keyQ:["Q11","Q12","Q13","Q18","Q19","Q23","Q36","Q39"],strategy:"健康管理需要持續才有效。網站要鎖 3 個月後體檢數字，切入年度健康管家。",sections:["hero","programs","team_credentials","case_studies","membership","booking","insights","contact"],trustPoints:["營養師駐點","體檢數據追蹤","年度管家","客製計畫","醫療轉介"]},{id:"insurance",cat:"professional",name:"保險 / 財富規劃",keyQ:["Q5","Q6","Q9","Q11","Q24","Q26","Q36"],strategy:"保險最容易被當「賣保單」。網站要釐清家庭結構，切入家族財富規劃 10 年。",sections:["hero","philosophy","planning_process","team_credentials","case_studies","engagement_models","contact"],trustPoints:["CFP 認證","家族傳承","稅務整合","不綁特定產品","十年陪跑"]},{id:"tarot",cat:"spiritual",name:"塔羅 / 占卜",keyQ:["Q4","Q7","Q8","Q11","Q18","Q23","Q36"],strategy:"塔羅客戶常買單次、且容易帶恐懼進來。網站要處理「過去算命被坑」的擔心，切入年度命盤陪跑。",sections:["hero","approach","session_types","about","testimonials","faq","booking","contact"],trustPoints:["不報明牌","完全保密","系統流派","事後文字紀錄","年度陪跑"]},{id:"astrology",cat:"spiritual",name:"占星 / 命理",keyQ:["Q4","Q7","Q8","Q11","Q18","Q23","Q26","Q36"],strategy:"命理客戶最在意「準度 + 隱私」。網站要處理戒心，切入人生階段陪跑。",sections:["hero","approach","session_types","about","testimonials","faq","booking","contact"],trustPoints:["古典占星","完全保密","不勸購護身符","深度命盤","人生階段陪跑"]},{id:"feng_shui",cat:"spiritual",name:"風水 / 居家環境",keyQ:["Q5","Q6","Q11","Q12","Q23","Q26","Q36"],strategy:"風水決策權常在「家中長輩」。網站要釐清誰決定，切入年度開運顧問。",sections:["hero","approach","service_packages","case_studies","about","faq","contact"],trustPoints:["玄空陽宅","到府勘察","不販售開運品","年度回訪","商辦風水"]},{id:"energy_healing",cat:"spiritual",name:"能量療癒 / 靈氣",keyQ:["Q7","Q8","Q11","Q12","Q18","Q23","Q36"],strategy:"能量療癒客戶常被「靈性課程」割過。網站要建立信任，切入月度能量管理。",sections:["hero","modalities","session_packages","about","testimonials","faq","booking","contact"],trustPoints:["完全保密","不推銷課程","單次體驗","線上遠距","師承來源透明"]},{id:"aromatherapy",cat:"spiritual",name:"芳療 / 精油諮詢",keyQ:["Q9","Q14","Q18","Q23","Q26","Q36","Q39"],strategy:"芳療需要「教育客戶日常使用」。網站切入家庭芳療顧問。",sections:["hero","consultation","product_line","workshops","about","membership","contact"],trustPoints:["IFPA 認證","客製複方","家庭芳療","工作坊","臨床芳療"]},{id:"outdoor_guide",cat:"experience",name:"戶外活動帶隊 / 嚮導",keyQ:["Q4","Q9","Q12","Q18","Q19","Q23","Q36"],strategy:"戶外帶隊最常被比「一次多少」。網站要從「一次」拉到「能力陪跑」，切入年度探索方案。",sections:["hero","expeditions","skill_levels","safety","about","testimonials","booking","contact"],trustPoints:["領隊證","緊急救護","小團制","裝備清單","保險完整"]},{id:"camping",cat:"experience",name:"露營營區 / 露營體驗",keyQ:["Q12","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"露營區會員制是核心。網站要鎖回流目標，切入會員 + 推薦網絡。",sections:["hero","sites","experiences","membership","gallery","reservation","location","contact"],trustPoints:["會員制","營位專屬","主題活動","免裝備","寵物友善"]},{id:"parent_child",cat:"experience",name:"親子體驗 / 共學",keyQ:["Q11","Q12","Q14","Q19","Q23","Q26","Q36","Q37"],strategy:"家長最在意「對小孩有沒有幫助」。網站要鎖成長場景，切入年度親子社群。",sections:["hero","programs","curriculum","safety","community","parent_feedback","enrollment","contact"],trustPoints:["師資資歷","小班制","年度社群","家長參與","戶外比例"]},{id:"event_planning",cat:"experience",name:"主題派對 / 婚禮活動企劃",keyQ:["Q4","Q11","Q12","Q19","Q21","Q24","Q26","Q36"],strategy:"主題派對情感濃。網站要講「結束後留下什麼」，處理夫妻雙方決策，切入家族紀念顧問。",sections:["hero","event_types","past_events","process","team","testimonials","enquiry","contact"],trustPoints:["活動 200+ 場","一站式統包","主題客製","海外婚禮","紀錄保存"]},{id:"outdoor_sports",cat:"experience",name:"戶外運動課程",keyQ:["Q9","Q12","Q18","Q19","Q21","Q23","Q36"],strategy:"運動課程最容易卡在「體驗者」。網站要鎖能力進階，切入年度教練陪跑。",sections:["hero","courses","skill_progression","about","gear_list","testimonials","booking","contact"],trustPoints:["教練證照","能力進階制","裝備提供","保險完整","年度會員"]},{id:"private_kitchen",cat:"food",name:"私廚 / 私房菜",keyQ:["Q9","Q14","Q19","Q23","Q26","Q36","Q37"],strategy:"私廚靠口碑與情感。網站鎖客群，切入家庭餐廚陪跑 + 推薦。",sections:["hero","menu_seasonal","story","reservation","private_event","gallery","press","contact"],trustPoints:["主廚故事","當季食材","完全預約制","客製菜單","在地小農"]},{id:"bakery_brand",cat:"food",name:"烘焙 / 甜點品牌",keyQ:["Q12","Q14","Q19","Q23","Q26","Q33","Q35"],strategy:"烘焙容易陷入「訂製單一次」。網站要鎖客群，切入訂閱方案。",sections:["hero","product_line","subscription","story","shop_info","corporate_gift","testimonials","contact"],trustPoints:["訂閱制","當日現做","客製蛋糕","企業送禮","宅配全台"]},{id:"handmade_food",cat:"food",name:"手工食品 / 醬料 / 加工品",keyQ:["Q9","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"手工食品需要「日常餐桌融入」。網站鎖家庭情境，切入訂閱 + 推薦網絡。",sections:["hero","product_line","story","recipe_pairing","subscription","press","shop","contact"],trustPoints:["SGS 檢驗","無添加","在地小農","訂閱配送","主廚推薦"]},{id:"cafe_brand",cat:"food",name:"咖啡店 / 獨立咖啡品牌",keyQ:["Q12","Q13","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"咖啡店熟客流失最致命。網站要鎖回流問題，切入會員 + 訂閱 + 推薦。",sections:["hero","menu","story","bean_origin","subscription","membership","location","contact"],trustPoints:["SCA 認證","單品莊園","訂閱配送","熟客制","空間預約"]},{id:"beverage_brand",cat:"food",name:"飲品品牌（手搖 / 瓶裝）",keyQ:["Q12","Q14","Q19","Q23","Q26","Q33","Q36"],strategy:"飲品品牌靠忠誠度。網站鎖品牌記憶，切入會員 + 企業團購。",sections:["hero","menu","story","membership","corporate","locations","press","contact"],trustPoints:["原料溯源","會員制","企業團購","聯名合作","門市分布"]},{id:"fashion",cat:"retail",name:"服飾 / 流行精品",keyQ:["Q9","Q14","Q18","Q19","Q23","Q26","Q33","Q36"],strategy:"服飾單品買賣難維繫。網站鎖個人風格，切入年度造型陪跑。",sections:["hero","collections","styling_service","lookbook","about","membership","shop","contact"],trustPoints:["造型師服務","VIP 會員","客製尺寸","小批生產","永續材質"]},{id:"electronics",cat:"retail",name:"家電 / 3C 商品銷售",keyQ:["Q11","Q12","Q16","Q23","Q26","Q32","Q36"],strategy:"家電一次買賣後容易斷。網站挖延伸需求，切入年度家電顧問。",sections:["hero","product_categories","consultation","installation","warranty","service","reviews","contact"],trustPoints:["到府安裝","舊機回收","延長保固","免費諮詢","原廠授權"]},{id:"furniture",cat:"retail",name:"家具 / 家飾 / 設計商品",keyQ:["Q9","Q14","Q18","Q19","Q23","Q26","Q33","Q36"],strategy:"家具買賣容易單次性。網站鎖居家風格，切入全屋風格陪跑。",sections:["hero","collections","design_service","showroom","about","membership","gallery","contact"],trustPoints:["全屋規劃","客製訂做","設計師諮詢","原廠進口","到府丈量"]},{id:"stationery",cat:"retail",name:"文具 / 雜貨 / 生活用品",keyQ:["Q12","Q14","Q18","Q19","Q23","Q33","Q35","Q37"],strategy:"雜貨單品低、要靠訂閱。網站鎖生活風格，切入盲盒 + 企業送禮。",sections:["hero","collections","subscription_box","corporate_gift","story","shop","community","contact"],trustPoints:["每月驚喜盒","企業送禮","客製刻字","小批設計","在地設計"]},{id:"antique",cat:"retail",name:"二手 / 古董 / 精品買賣",keyQ:["Q7","Q8","Q11","Q23","Q26","Q32","Q36","Q37"],strategy:"二手最在意「信任 + 鑑定」。網站要處理被坑經驗，切入藏家陪跑。",sections:["hero","collection","authentication","consignment","about","collector_club","press","contact"],trustPoints:["第三方鑑定","保固承諾","寄賣服務","藏家社群","保險評估"]},{id:"oem_manufacturing",cat:"manufacturing",name:"代工製造 / OEM",keyQ:["Q5","Q6","Q11","Q12","Q16","Q23","Q26","Q36"],strategy:"代工最常被砍單價。網站要釐清規模/層級，挖出真痛點，切入年度產能合作。",sections:["hero","capability","products","certifications","factory_tour","oem_process","clients","contact"],trustPoints:["ISO 9001","OEM/ODM","年產能","一條龍","出口外銷"]},{id:"cnc_machining",cat:"manufacturing",name:"機械加工 / CNC / 模具",keyQ:["Q5","Q6","Q11","Q16","Q21","Q23","Q26","Q36"],strategy:"CNC 同質化嚴重。網站要鎖業務目標，切入年度供應夥伴/製程顧問。",sections:["hero","capability","equipment","tolerances","industries_served","process","clients","contact"],trustPoints:["五軸 CNC","公差 ±0.01mm","IATF 16949","少量試作","逆向工程"]},{id:"packaging_printing",cat:"manufacturing",name:"包材 / 印刷 / 紙器",keyQ:["Q5","Q6","Q12","Q14","Q21","Q23","Q26","Q36"],strategy:"包材容易陷入單張比價。網站要從「印幾張」拉到「品牌包材策略」，切入年度合作。",sections:["hero","capability","product_lines","sustainability","process","case_studies","clients","contact"],trustPoints:["FSC 認證","結構設計","少量起訂","一條龍","環保材質"]},{id:"hardware_parts",cat:"manufacturing",name:"五金 / 工具 / 零件",keyQ:["Q5","Q6","Q11","Q16","Q23","Q26","Q36"],strategy:"五金需要長期供應夥伴。網站要釐清採購結構，切入企業 B2B 採購方案。",sections:["hero","product_catalog","b2b_procurement","inventory","distribution","clients","contact"],trustPoints:["庫存即時","B2B 報價","少量混批","進口代理","送貨到廠"]},{id:"food_oem",cat:"manufacturing",name:"食品代工 / OEM",keyQ:["Q5","Q6","Q11","Q14","Q21","Q23","Q26","Q36"],strategy:"食品代工最容易被搶單。網站要釐清品牌策略，切入年度共創方案。",sections:["hero","capability","certifications","rnd_lab","process","compliance","clients","contact"],trustPoints:["HACCP","ISO 22000","R&D 配方","少量試產","通路上架輔導"]},{id:"pest_control",cat:"home_service",name:"除蟲 / 病媒防治",keyQ:["Q4","Q11","Q12","Q13","Q23","Q26","Q36"],strategy:"除蟲常在「出事才找」。網站處理急迫，切入年度防治。",sections:["hero","services","emergency","methodology","certifications","annual_plan","testimonials","contact"],trustPoints:["環保藥劑","寵物友善","保固承諾","24 小時急件","商辦合約"]},{id:"home_cleaning",cat:"home_service",name:"居家清潔 / 大掃除",keyQ:["Q12","Q14","Q19","Q23","Q26","Q33","Q38"],strategy:"居家清潔同質化高。網站鎖家庭情境，切入月度合約。",sections:["hero","services","pricing","monthly_subscription","before_after","team","booking","contact"],trustPoints:["月度合約","固定人員","保險完整","透明計價","回購率 80%"]},{id:"moving_logistics",cat:"home_service",name:"搬家 / 物流",keyQ:["Q4","Q5","Q11","Q21","Q23","Q26","Q32"],strategy:"搬家是時間敏感。網站確保品質透明，切入企業遷移顧問。",sections:["hero","services","enterprise_relocation","quote_calculator","process","testimonials","booking","contact"],trustPoints:["上市櫃合約","保險投保","線上估價","專業包裝","當日完成"]},{id:"home_repair",cat:"home_service",name:"居家維修 / 水電",keyQ:["Q4","Q11","Q12","Q13","Q23","Q26","Q36"],strategy:"水電常在「壞掉才找」。網站處理急迫，切入年度健診/全屋管家。",sections:["hero","services","emergency","annual_plan","team","pricing","booking","contact"],trustPoints:["丙級水電證","24 小時急件","年度健診","保固一年","透明計價"]},{id:"waterproofing",cat:"home_service",name:"防水 / 抓漏 / 結構",keyQ:["Q5","Q6","Q11","Q12","Q13","Q23","Q26","Q36"],strategy:"防水抓漏屬高決策層級。網站要釐清決策，切入社區/大樓年度顧問。",sections:["hero","services","case_studies","community_contract","process","warranty","team","contact"],trustPoints:["抓漏精準","10 年保固","社區合約","專業儀器","結構技師"]},{id:"art_craft",cat:"education",name:"才藝教學（美術 / 手作）",keyQ:["Q11","Q12","Q14","Q19","Q23","Q26","Q36","Q39"],strategy:"才藝教學最在意「家長放心 + 小孩成長」。網站鎖成長，切入年度才藝陪跑。",sections:["hero","courses","student_works","teacher","enrollment","parent_feedback","showcase","contact"],trustPoints:["作品展","小班制","師資專業","年度成長","家長參與"]},{id:"cram_school",cat:"education",name:"補習班 / 課輔",keyQ:["Q5","Q11","Q12","Q16","Q19","Q21","Q23","Q36"],strategy:"補習最在意升學。網站鎖學習目標，切入學年陪跑/家庭教育顧問。",sections:["hero","programs","results","teachers","methodology","parent_communication","enrollment","contact"],trustPoints:["升學榜單","小班分級","一對一輔導","進度追蹤","家長月報"]},{id:"language_tutor",cat:"education",name:"語言家教 / 線上語言",keyQ:["Q9","Q11","Q12","Q18","Q19","Q21","Q23","Q36"],strategy:"語言學習易半途而廢。網站鎖能力目標，切入年度語言陪跑。",sections:["hero","levels","methodology","teacher","student_results","trial_class","pricing","contact"],trustPoints:["母語老師","檢定通過率","一對一","進度追蹤","彈性時間"]},{id:"music_teacher",cat:"education",name:"樂器老師（鋼琴 / 吉他）",keyQ:["Q11","Q12","Q14","Q18","Q19","Q23","Q26","Q36"],strategy:"樂器學習最容易半途而廢。網站鎖家庭支持，切入音樂家庭顧問。",sections:["hero","levels","student_performances","teacher","methodology","enrollment","recitals","contact"],trustPoints:["檢定通過率","發表會","到府教學","學齡分級","家長旁聽"]},{id:"kids_sports",cat:"education",name:"兒童才藝（運動 / 舞蹈）",keyQ:["Q11","Q12","Q14","Q18","Q19","Q23","Q36","Q39"],strategy:"兒童才藝家長很挑。網站鎖成長，切入年度家庭運動顧問。",sections:["hero","programs","showcase","teachers","safety","parent_feedback","enrollment","contact"],trustPoints:["師資證照","小班制","保險完整","成果發表","家長社群"]},{id:"guesthouse",cat:"travel",name:"民宿 / 旅店",keyQ:["Q12","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"民宿最容易單次性。網站鎖深度體驗，切入會員 + 推薦。",sections:["hero","rooms","experiences","local_guide","gallery","membership","reservation","contact"],trustPoints:["合法民宿","在地體驗","會員回流","主人陪伴","私房景點"]},{id:"custom_travel",cat:"travel",name:"旅遊規劃師 / 客製旅遊",keyQ:["Q9","Q11","Q14","Q18","Q19","Q23","Q26","Q36"],strategy:"客製旅遊最在意「客戶覺得自己會找」。網站鎖家族需求，切入年度旅遊顧問。",sections:["hero","destinations","planning_service","past_trips","about","engagement_models","enquiry","contact"],trustPoints:["深度行程","在地對接","年度旅遊顧問","家族客製","緊急支援"]},{id:"private_tour",cat:"travel",name:"包車 / 司導 / 在地導遊",keyQ:["Q4","Q11","Q14","Q19","Q21","Q23","Q35"],strategy:"包車最容易比「一日多少」。網站鎖旅遊體驗，切入年度旅遊管家。",sections:["hero","routes","vehicles","guide_intro","pricing","testimonials","booking","contact"],trustPoints:["英日語導遊","車輛新穎","保險完整","私房路線","彈性行程"]},{id:"design_hotel",cat:"travel",name:"主題旅店 / 設計旅店",keyQ:["Q12","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"主題旅店靠社群。網站鎖品牌記憶，切入會員 + 推薦。",sections:["hero","rooms","design_story","experiences","gallery","membership","reservation","contact"],trustPoints:["設計師作品","主題房型","會員制","攝影師駐店","社群活動"]},{id:"mobile_lodging",cat:"travel",name:"露營車 / 移動旅宿",keyQ:["Q4","Q12","Q14","Q19","Q23","Q26","Q35"],strategy:"露營車淡旺季落差大。網站鎖使用情境，切入會員 + 企業合作。",sections:["hero","vehicles","destinations","experiences","corporate","membership","reservation","contact"],trustPoints:["全新車隊","免駕照","路線推薦","企業活動","會員制"]}],An={hero:{name:"首屏 Hero",desc:"品牌標語 + 主視覺 + CTA",required:!0},about:{name:"關於我們",desc:"創辦故事、理念、團隊照"},contact:{name:"聯絡資訊",desc:"電話、Email、表單",required:!0},work_portfolio:{name:"作品集",desc:"案件分類展示"},case_studies:{name:"案例研究",desc:"客戶成果 + 數據"},testimonials:{name:"客戶見證",desc:"評價 + 照片"},process:{name:"服務流程",desc:"從諮詢到交付"},pricing_tiers:{name:"方案/價格",desc:"套餐分層、A/B 方案"},service_packages:{name:"服務項目",desc:"核心服務拆解"},faq:{name:"常見問題",desc:"客戶最常問的 5-10 題"},team:{name:"專業團隊",desc:"成員資歷與專長"},methodology:{name:"方法論",desc:"獨家做事方法"},insights:{name:"產業洞察",desc:"部落格/白皮書"},booking:{name:"線上預約",desc:"時段選擇 + 表單"},membership:{name:"會員制",desc:"會員權益、訂閱方案"},press:{name:"媒體報導",desc:"雜誌、新聞、KOL"},capability:{name:"產能規格",desc:"年產量、設備、廠房"},products:{name:"產品線",desc:"主要產品分類"},certifications:{name:"認證資質",desc:"ISO / MIT"},factory_tour:{name:"廠房導覽",desc:"產線照片、品管"},oem_process:{name:"OEM 流程",desc:"打樣到量產"},clients:{name:"合作客戶",desc:"Logo 牆"},equipment:{name:"設備清單",desc:"機台、規格"},tolerances:{name:"加工精度",desc:"公差、材質"},industries_served:{name:"服務產業",desc:"車用、3C、醫療..."},rnd_lab:{name:"R&D 中心",desc:"研發實驗室、配方"},sustainability:{name:"永續承諾",desc:"ESG、環保認證"},compliance:{name:"法規符合",desc:"HACCP、FDA..."},menu:{name:"菜單",desc:"招牌菜 + 價格"},menu_seasonal:{name:"當季菜單",desc:"季節限定菜色"},story:{name:"品牌故事",desc:"創立理念"},reservation:{name:"訂位",desc:"線上訂位"},private_event:{name:"包場服務",desc:"宴會、聚餐"},location:{name:"位置/分店",desc:"地圖、營業時間"},bean_origin:{name:"咖啡產地",desc:"莊園來源、處理法"},subscription:{name:"訂閱方案",desc:"每月配送"},product_line:{name:"商品系列",desc:"產品展示"},recipe_pairing:{name:"搭配料理",desc:"食譜建議"},shop:{name:"線上商店",desc:"購買連結"},shop_info:{name:"門市資訊",desc:"地址、時間"},corporate_gift:{name:"企業送禮",desc:"客製禮盒"},corporate:{name:"企業合作",desc:"B2B 方案"},portfolio_grid:{name:"作品集",desc:"案件分類"},before_after:{name:"Before / After",desc:"前後對比"},licenses:{name:"營造執照",desc:"甲乙丙級"},warranty:{name:"保固承諾",desc:"保固範圍、年限"},practice_areas:{name:"執業範圍",desc:"法律專業領域"},team_credentials:{name:"團隊資歷",desc:"證照、學歷"},monthly_advisor:{name:"月度顧問",desc:"訂閱式顧問"},services:{name:"服務項目",desc:"服務清單"},industries:{name:"服務產業",desc:"專業領域"},engagement_models:{name:"合作模式",desc:"專案/年約/陪跑"},approach:{name:"諮詢取向",desc:"專業流派"},session_types:{name:"諮詢類型",desc:"一對一、團體"},session_packages:{name:"療程方案",desc:"次卡、套裝"},modalities:{name:"療癒方式",desc:"靈氣、能量"},philosophy:{name:"理念",desc:"專業哲學"},track_record:{name:"輔導實績",desc:"IPO 案例"},markets:{name:"專注市場",desc:"日本、東南亞"},coaching_packages:{name:"陪跑方案",desc:"半年、年度"},transformation:{name:"學員轉變",desc:"Before/After"},courses:{name:"課程列表",desc:"課程介紹"},programs:{name:"課程體系",desc:"完整學習路徑"},levels:{name:"分級分階",desc:"初中高階"},curriculum:{name:"課綱",desc:"詳細課程內容"},course_catalog:{name:"課程目錄",desc:"所有課程"},student_works:{name:"學員作品",desc:"成果展示"},student_performances:{name:"學員演出",desc:"發表會"},student_results:{name:"學員成果",desc:"檢定通過"},results:{name:"升學榜單",desc:"錄取學校"},teachers:{name:"師資介紹",desc:"老師簡介"},teacher:{name:"老師介紹",desc:"個人經歷"},enrollment:{name:"報名資訊",desc:"報名流程"},parent_feedback:{name:"家長回饋",desc:"見證評價"},parent_communication:{name:"家長聯絡",desc:"溝通管道"},showcase:{name:"成果發表",desc:"年度展演"},recitals:{name:"音樂會",desc:"發表會記錄"},trial_class:{name:"免費體驗",desc:"試聽預約"},workshops:{name:"工作坊",desc:"主題課程"},workshop_calendar:{name:"工作坊行事曆",desc:"近期場次"},past_events:{name:"過往活動",desc:"紀錄"},corporate_pkg:{name:"企業包班",desc:"B2B 方案"},pricing:{name:"收費標準",desc:"透明計價"},rooms:{name:"房型介紹",desc:"空間照片"},experiences:{name:"體驗活動",desc:"特色活動"},destinations:{name:"推薦地點",desc:"行程選擇"},expeditions:{name:"探險路線",desc:"路線難度"},skill_levels:{name:"能力分級",desc:"適合程度"},skill_progression:{name:"能力進階",desc:"學習路徑"},safety:{name:"安全保障",desc:"措施、保險"},local_guide:{name:"在地導覽",desc:"私房景點"},guide_intro:{name:"導遊介紹",desc:"經歷、語言"},routes:{name:"路線推薦",desc:"行程安排"},vehicles:{name:"車輛介紹",desc:"車型、配備"},planning_service:{name:"規劃服務",desc:"客製流程"},past_trips:{name:"過往行程",desc:"案例分享"},enquiry:{name:"需求諮詢",desc:"詢問表單"},design_story:{name:"設計故事",desc:"空間理念"},quote_calculator:{name:"線上估價",desc:"報價計算"},service_menu:{name:"服務項目",desc:"價目表"},community:{name:"社群",desc:"家長社群"},daily_routine:{name:"一日作息",desc:"時間表"},sites:{name:"營位介紹",desc:"營位資訊"},gallery:{name:"影像紀錄",desc:"照片集"},event_types:{name:"活動類型",desc:"婚禮、派對"},studio:{name:"攝影棚",desc:"空間介紹"},monthly_packages:{name:"月度方案",desc:"訂閱配送"},story_pkg:{name:"故事紀錄方案",desc:"完整紀錄"},enterprise_pkg:{name:"企業方案",desc:"B2B 客製"},platforms:{name:"操作平台",desc:"FB/IG/TikTok"},kol_network:{name:"KOL 網絡",desc:"配對資料庫"},tech_stack:{name:"技術棧",desc:"使用技術"},design_system:{name:"Design System",desc:"設計系統"},maintenance:{name:"維運方案",desc:"月費合約"},subscription_box:{name:"訂閱盒",desc:"每月驚喜"},authentication:{name:"鑑定服務",desc:"真偽驗證"},consignment:{name:"寄賣服務",desc:"代售流程"},collector_club:{name:"藏家俱樂部",desc:"會員社群"},collection:{name:"館藏",desc:"商品展示"},collections:{name:"系列",desc:"產品分類"},styling_service:{name:"造型服務",desc:"個人造型"},lookbook:{name:"Lookbook",desc:"搭配靈感"},product_categories:{name:"商品分類",desc:"產品線"},consultation:{name:"免費諮詢",desc:"選購建議"},installation:{name:"安裝服務",desc:"到府安裝"},service:{name:"售後服務",desc:"維修保固"},reviews:{name:"商品評價",desc:"客戶回饋"},design_service:{name:"設計服務",desc:"空間規劃"},showroom:{name:"門市展示",desc:"實體空間"},b2b_procurement:{name:"B2B 採購",desc:"企業專案"},inventory:{name:"即時庫存",desc:"存貨查詢"},distribution:{name:"通路據點",desc:"經銷網絡"},product_catalog:{name:"產品型錄",desc:"完整商品"},emergency:{name:"緊急服務",desc:"24 小時"},annual_plan:{name:"年度方案",desc:"訂閱合約"},monthly_subscription:{name:"月度合約",desc:"訂閱清潔"},enterprise_relocation:{name:"企業遷移",desc:"B2B 搬遷"},community_contract:{name:"社區合約",desc:"大樓服務"},gear_list:{name:"裝備清單",desc:"建議攜帶"},tour_booking:{name:"參觀預約",desc:"參訪報名"}},ur=[{id:"haiku",label:"Haiku 4.5",sub:"草稿 / 探索方向",price:"~$0.12/頁",time:"~12 秒",quality:78,note:"比稿用、多方案 A/B",model:"claude-haiku-4-5-20251001"},{id:"sonnet",label:"Sonnet 4.6",sub:"標準 / 客戶交付",price:"~$0.30/頁",time:"~28 秒",quality:90,note:"B 端主力推薦",recommended:!0,model:"claude-sonnet-4-6"},{id:"opus",label:"Opus 4.7",sub:"精緻 / 高端品牌",price:"~$1.50/頁",time:"~55 秒",quality:96,note:"上市公司、高端品牌",model:"claude-opus-4-7"}];function ef(){const[e,t]=ye.useState("industry_picker"),[n,r]=ye.useState(()=>{try{return localStorage.getItem("claude_api_key")||""}catch{return""}}),[o,i]=ye.useState(null),[l,s]=ye.useState(""),[u,f]=ye.useState("all"),[d,y]=ye.useState({companyName:"",yearsInBusiness:"",productOrService:"",targetCustomer:"",trustPoints:[],selectedSections:[],tier:"sonnet",pages:"single",language:"zh-TW",referenceUrl:"",customNotes:"",colorMode:"auto",presetTheme:"midnight",customPrimary:"#1F2937",customAccent:"#C9442F",heroStyle:"gradient",styleMode:"auto",styleId:"editorial"}),[p,v]=ye.useState(null),[_,S]=ye.useState([]),[M,m]=ye.useState("");ye.useEffect(()=>{o&&y(g=>({...g,selectedSections:[...o.sections]}))},[o]);const c=g=>{r(g);try{localStorage.setItem("claude_api_key",g)}catch{}},h=ye.useMemo(()=>{let g=aa;if(u!=="all"&&(g=g.filter(x=>x.cat===u)),l.trim()){const x=l.toLowerCase();g=g.filter(Q=>Q.name.toLowerCase().includes(x)||Q.id.toLowerCase().includes(x)||Q.trustPoints.some(B=>B.toLowerCase().includes(x))||We[Q.cat].label.toLowerCase().includes(x))}return g},[l,u]),k=g=>{var x;(x=An[g])!=null&&x.required||y(Q=>({...Q,selectedSections:Q.selectedSections.includes(g)?Q.selectedSections.filter(B=>B!==g):[...Q.selectedSections,g]}))},F=g=>{y(x=>({...x,trustPoints:x.trustPoints.includes(g)?x.trustPoints.filter(Q=>Q!==g):[...x.trustPoints,g]}))},j=o&&d.companyName.trim()&&d.productOrService.trim()&&n.trim(),N={midnight:{label:"深夜藍",tone:"沉穩",primary:"#1F2937",accent:"#F59E0B",heroBg:"linear-gradient(135deg, #0F172A 0%, #1F2937 100%)"},forest:{label:"森林綠",tone:"沉穩",primary:"#1F3A2E",accent:"#D97706",heroBg:"linear-gradient(135deg, #0F2419 0%, #2C4A3E 100%)"},wine:{label:"酒紅黑",tone:"沉穩",primary:"#3D1F1F",accent:"#D4AF37",heroBg:"linear-gradient(135deg, #1F0A0A 0%, #5C2A2A 100%)"},mono:{label:"極簡黑",tone:"沉穩",primary:"#111111",accent:"#FF4500",heroBg:"linear-gradient(135deg, #000000 0%, #1A1A1A 100%)"},warmth:{label:"溫暖磚",tone:"溫暖",primary:"#7A3E1F",accent:"#F5C518",heroBg:"linear-gradient(135deg, #4A1F0A 0%, #7A3E1F 100%)"},sunset:{label:"夕陽橙",tone:"溫暖",primary:"#B8541C",accent:"#FFE4B8",heroBg:"linear-gradient(135deg, #8B3A0E 0%, #C9582A 100%)"},terracotta:{label:"陶土紅",tone:"溫暖",primary:"#A03E2A",accent:"#F4A261",heroBg:"linear-gradient(135deg, #6B2818 0%, #A03E2A 100%)"},ocean:{label:"深海藍",tone:"清新",primary:"#0C4A6E",accent:"#22D3EE",heroBg:"linear-gradient(135deg, #082F49 0%, #0C4A6E 100%)"},sage:{label:"鼠尾草",tone:"清新",primary:"#3F5A4F",accent:"#E0B97A",heroBg:"linear-gradient(135deg, #2A3E36 0%, #4F6B5F 100%)"},aubergine:{label:"紫紅夜",tone:"典雅",primary:"#3D2C4A",accent:"#E0B0FF",heroBg:"linear-gradient(135deg, #1F1330 0%, #3D2C4A 100%)"},royal:{label:"皇家紫",tone:"典雅",primary:"#2E1A47",accent:"#FFD700",heroBg:"linear-gradient(135deg, #1A0F2E 0%, #4A2E6B 100%)"},earth:{label:"大地棕",tone:"自然",primary:"#5C3D1F",accent:"#A8C66C",heroBg:"linear-gradient(135deg, #3D2814 0%, #5C3D1F 100%)"}},E={minimalist:{label:"極簡瑞士",desc:"大量留白、無襯線字、細線分隔",emoji:"◯",font:'"Inter", "Noto Sans TC", sans-serif',serifFont:'"Inter", sans-serif',density:"loose",radius:"0",tagBorder:"1px",sectionPad:"120px 48px"},editorial:{label:"編輯學術",desc:"明體標題、雜誌排版、長文流動",emoji:"📰",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", "Source Han Serif", serif',density:"normal",radius:"0",tagBorder:"1px",sectionPad:"88px 48px"},tech:{label:"科技未來",desc:"單線條、單一空間、極銳利",emoji:"◤",font:'"JetBrains Mono", "Noto Sans TC", monospace',serifFont:'"JetBrains Mono", monospace',density:"tight",radius:"0",tagBorder:"1px solid",sectionPad:"80px 48px"},industrial:{label:"工業冷峻",desc:"混凝土感、鐵件元素、工程字體",emoji:"⚙",font:'"Noto Sans TC", "Helvetica Neue", sans-serif',serifFont:'"Oswald", "Noto Sans TC", sans-serif',density:"tight",radius:"0",tagBorder:"2px",sectionPad:"80px 48px"},warm_craft:{label:"溫暖手作",desc:"圓角、手寫感、暖色調為主",emoji:"🎨",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", serif',density:"normal",radius:"12px",tagBorder:"1px",sectionPad:"88px 48px"},luxe:{label:"奢華精品",desc:"金色點綴、襯線標題、大字距",emoji:"◆",font:'"Cormorant Garamond", "Noto Serif TC", serif',serifFont:'"Cormorant Garamond", "Noto Serif TC", serif',density:"loose",radius:"0",tagBorder:"0.5px",sectionPad:"120px 60px"},bold_avant:{label:"大膽前衛",desc:"超大字、撞色、不對稱",emoji:"🔥",font:'"Noto Sans TC", sans-serif',serifFont:'"Archivo Black", "Noto Sans TC", sans-serif',density:"normal",radius:"0",tagBorder:"3px",sectionPad:"100px 48px"},medical_clean:{label:"醫療潔淨",desc:"純白、藍綠強調、極乾淨",emoji:"✚",font:'"Noto Sans TC", "Inter", sans-serif',serifFont:'"Noto Sans TC", sans-serif',density:"normal",radius:"4px",tagBorder:"1px",sectionPad:"88px 48px"},food_inviting:{label:"餐飲誘人",desc:"溫暖色、圖文並重、邀請感",emoji:"🍽",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", serif',density:"normal",radius:"8px",tagBorder:"1px",sectionPad:"88px 48px"},creator:{label:"創作者作品集",desc:"黑底白字、作品為王、聚光燈感",emoji:"◧",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", serif',density:"tight",radius:"0",tagBorder:"1px",sectionPad:"88px 56px"}},I=()=>{var Q,B,P;if(!p)return{primary:"#1F1B16",accent:"#C9442F",heroBg:null};if(d.colorMode==="preset"){const z=N[d.presetTheme]||N.midnight;return{primary:z.primary,accent:z.accent,heroBg:z.heroBg}}if(d.colorMode==="custom")return{primary:d.customPrimary,accent:d.customAccent,heroBg:`linear-gradient(135deg, ${d.customPrimary} 0%, ${_e(d.customPrimary,-20)} 100%)`};const g=((Q=p.brand)==null?void 0:Q.primaryColor)||"#1F1B16",x=((B=p.brand)==null?void 0:B.accentColor)||"#C9442F";return{primary:g,accent:x,heroBg:`linear-gradient(135deg, ${g} 0%, ${((P=We[o==null?void 0:o.cat])==null?void 0:P.color)||"#2C4A3E"} 100%)`}},T=()=>{var x;const g=d.styleMode==="auto"?((x=p==null?void 0:p.brand)==null?void 0:x.styleRecommendation)||"editorial":d.styleId;return E[g]||E.editorial};function _e(g,x){const Q=parseInt(g.slice(1),16),B=0,P=Math.abs(x)/100,z=Q>>16,b=Q>>8&255,W=Q&255;return"#"+(16777216+(Math.round((B-z)*P)+z)*65536+(Math.round((B-b)*P)+b)*256+(Math.round((B-W)*P)+W)).toString(16).slice(1)}const lt=async()=>{var B,P,z,b,W;t("generating"),m(""),S([]);const g=ur.find(Y=>Y.id===d.tier),x=d.selectedSections,Q=Y=>S(Ue=>[...Ue,{time:new Date().toLocaleTimeString(),msg:Y}]);Q(`啟動 ${g.label}`),Q(`產業：${o.name}（${We[o.cat].label}）`),Q(`問診重點題：${o.keyQ.join("、")}`),Q(`生成 ${x.length} 個 sections`);try{const Y=x.map(D=>{var pe,Vt;return`${D}: ${((pe=An[D])==null?void 0:pe.name)||D} — ${((Vt=An[D])==null?void 0:Vt.desc)||""}`}).join(`
`),Ue=o.keyQ.map(D=>`${D}: ${Zp[D]||D}`).join(`
`),Oo=`你是專精台灣 B 端產業的網站文案策略師，熟悉「老闆的接案學院」問診話術劇本。
你不只寫漂亮的字，你寫的每一段文案都對應一個明確的「客戶心理動線」。

你的文案特色：
- 信任感優先，避免浮誇形容詞（「業界第一」「最專業」這類詞嚴禁使用）
- 突顯具體數字（年資、產能、案例數、認證編號）
- 使用該產業的專業術語但不過度堆砌
- 繁體中文，台灣用語（不用「視頻」「軟件」這類詞）
- 短句、有節奏感，每段不超過 3 句
- 在 Hero 與關鍵 sections 直接呼應該產業的「問診重點題」隱含的客戶痛點

你會回傳純 JSON，不加 markdown 標記、不加說明文字。`,gr=d.styleMode==="preset"?`
## 使用者指定風格：${(B=E[d.styleId])==null?void 0:B.label}（${(P=E[d.styleId])==null?void 0:P.desc}）。文案語氣、CTA 用詞要呼應此風格。`:`
## 風格：請你依產業特性，推薦最合適的 styleRecommendation（從以下選一：${Object.keys(E).join("、")}）。`,yr=d.pages==="multi"?`
## 頁面結構：多頁式（首頁 + 4 內頁）
請把 sections 分配到 5 個頁面：
- home: hero + 精選 3-4 個 sections 的精簡版（不放完整內容、放預覽 + 引導去內頁）
- about: 關於、團隊、品牌故事相關 sections
- services: 服務、產品、方案、案例相關 sections
- portfolio: 作品集、案例研究、客戶見證相關 sections（若無相關 section 此頁可省略）
- contact: 聯絡、預約、FAQ、地圖相關 sections
每個頁面要有自己的 hero 標題（不一定要叫 hero、可以是頁面主標）。`:`
## 頁面結構：單頁式（all-in-one + 錨點導覽）
所有 sections 串成一個 landing page。每個 section 都要有 anchor id（用 sec.key 即可），首屏要有導覽列指向各 section。`,vr=`為以下企業生成網站內容（${d.language==="en"?"英文":"繁體中文"}）：

## 企業資訊
- 公司：${d.companyName}
- 產業：${o.name}（${We[o.cat].label}）
${d.yearsInBusiness?`- 經營年資：${d.yearsInBusiness} 年`:""}
- 主要產品/服務：${d.productOrService}
${d.targetCustomer?`- 目標客戶：${d.targetCustomer}`:""}
${d.trustPoints.length?`- 信任亮點：${d.trustPoints.join("、")}`:""}
${d.referenceUrl?`- 參考網站：${d.referenceUrl}`:""}
${d.customNotes?`- 特別需求：${d.customNotes}`:""}

## 產業策略（重要 — 文案必須呼應這個方向）
${o.strategy}

## 該產業客戶最在意的問診重點題（文案要回應這些隱含痛點）
${Ue}
${gr}
${yr}

## 需要生成的 sections（依序）
${Y}

## 回傳 JSON 格式
{
  "brand": {
    "tagline": "20 字內主標語（直接打中該產業客戶最深的痛點）",
    "subtitle": "40 字內副標（補強信任感）",
    "primaryColor": "Hero 背景主色 hex。必須是深色（亮度 < 35%）以便白字可讀。B 端避免螢光色、粉嫩色。範例：#1F2937、#2C4A3E、#3D1F1F",
    "accentColor": "點綴色 hex（CTA、邊框用）。可選飽和度高的暖色",
    "styleRecommendation": "${d.styleMode==="preset"?d.styleId:"從可用風格中挑一個最適合此產業的 key"}",
    "navMenu": [{"label": "導覽項目名稱", "anchor": "section_key 或 page_id"}]
  },
  "sections": [
    {
      "key": "section_key（嚴格使用上面 sections 列出的 key）",
      "page": "${d.pages==="multi"?"home | about | services | portfolio | contact（指定此 section 放在哪個頁面）":"home（單頁式時固定填 home）"}",
      "heading": "區塊主標（不超過 16 字）",
      "subheading": "區塊副標（不超過 30 字，可省略）",
      "content": "區塊主要內容（2-4 句段落，呼應問診重點題）",
      "items": [{"title":"...", "desc":"...", "value":"..."}],
      "cta": "按鈕文案（簡短行動指令，可省略）"
    }
  ],
  "meta": {
    "seoTitle": "60 字內 SEO 標題",
    "seoDescription": "160 字內 meta description"
  }
}

關鍵原則：
1. items 在「產品/服務/案例/規格」類 sections 提供 3-6 項，每項 title 簡短、desc 一句話
2. CTA 只在 hero、pricing、booking、contact 這類行動導向 sections 才放
3. 顏色選擇要符合產業：製造業偏深沉穩重、餐飲偏溫暖、療癒偏柔和、專業服務偏冷靜
4. 每個 section 的 heading 都要呼應該產業的問診重點題裡的「客戶心理動線」
5. navMenu 必須包含 5-7 個項目，多頁式時對應 page 名（home/about/services/portfolio/contact），單頁式時對應 section_key
6. 多頁式時，每個頁面至少要有 2 個 sections（hero 加 1-2 個內容）`;Q("傳送請求至 Anthropic API...");const Et=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":n,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:g.model,max_tokens:4096,system:Oo,messages:[{role:"user",content:vr}]})});if(!Et.ok){const D=await Et.json().catch(()=>({}));throw new Error(((z=D.error)==null?void 0:z.message)||`API ${Et.status}`)}const Ut=await Et.json();Q(`收到回應，tokens: ${((b=Ut.usage)==null?void 0:b.input_tokens)||"?"} in / ${((W=Ut.usage)==null?void 0:W.output_tokens)||"?"} out`);let L=Ut.content.filter(D=>D.type==="text").map(D=>D.text).join(`
`).trim();L=L.replace(/^```json\s*/i,"").replace(/```\s*$/,"").trim();const ee=JSON.parse(L);Q("內容解析成功，渲染預覽中..."),v(ee),t("preview")}catch(Y){Q(`錯誤：${Y.message}`),m(Y.message),t("questionnaire")}},Nt=()=>{if(!p)return"";const g=I(),x=g.primary,Q=g.accent,B=p.sections.map((P,z)=>{var b;return{id:`sec_${z}_${Math.random().toString(36).slice(2,8)}`,elType:"section",settings:{structure:"10",padding:{unit:"px",top:"80",bottom:"80",left:"20",right:"20"},background_background:"classic",background_color:z%2===0?"#FBF8F1":"#FFFFFF"},elements:[{id:`col_${z}_${Math.random().toString(36).slice(2,8)}`,elType:"column",settings:{_column_size:100},elements:[{id:`head_${z}`,elType:"widget",widgetType:"heading",settings:{title:P.heading||((b=An[P.key])==null?void 0:b.name)||"",header_size:"h2",align:"center",title_color:x,typography_typography:"custom",typography_font_size:{unit:"px",size:36},typography_font_weight:"500"}},P.subheading&&{id:`sub_${z}`,elType:"widget",widgetType:"heading",settings:{title:P.subheading,header_size:"h4",align:"center"}},P.content&&{id:`text_${z}`,elType:"widget",widgetType:"text-editor",settings:{editor:`<p style="text-align:center;max-width:720px;margin:24px auto;">${P.content}</p>`}},P.items&&P.items.length>0&&{id:`items_${z}`,elType:"widget",widgetType:"icon-list",settings:{icon_list:P.items.slice(0,8).map((W,Y)=>({_id:`it${Y}`,text:`<strong>${W.title||""}</strong>${W.desc?" — "+W.desc:""}${W.value?" ("+W.value+")":""}`,selected_icon:{value:"fas fa-check",library:"fa-solid"}}))}},P.cta&&{id:`cta_${z}`,elType:"widget",widgetType:"button",settings:{text:P.cta,align:"center",background_color:Q,button_text_color:"#FFFFFF"}}].filter(Boolean)}]}});return JSON.stringify({version:"0.4",title:`${d.companyName} — 首頁`,type:"page",content:B,page_settings:[]},null,2)},hr=()=>{var Q,B;if(!p)return"";const g=new Date().toISOString(),x=p.sections.map(P=>{var b;let z=`<!-- wp:heading {"level":2} --><h2>${P.heading||""}</h2><!-- /wp:heading -->`;return P.subheading&&(z+=`<!-- wp:heading {"level":3} --><h3>${P.subheading}</h3><!-- /wp:heading -->`),P.content&&(z+=`<!-- wp:paragraph --><p>${P.content}</p><!-- /wp:paragraph -->`),(b=P.items)!=null&&b.length&&(z+="<!-- wp:list --><ul>",P.items.forEach(W=>{z+=`<li><strong>${W.title||""}</strong>${W.desc?" — "+W.desc:""}${W.value?" ("+W.value+")":""}</li>`}),z+="</ul><!-- /wp:list -->"),P.cta&&(z+=`<!-- wp:button --><div class="wp-block-button"><a class="wp-block-button__link">${P.cta}</a></div><!-- /wp:button -->`),z}).join(`

`);return`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wp="http://wordpress.org/export/1.2/">
<channel>
<title>${d.companyName}</title>
<wp:wxr_version>1.2</wp:wxr_version>
<item>
<title>${d.companyName} — 首頁</title>
<pubDate>${g}</pubDate>
<wp:post_type><![CDATA[page]]></wp:post_type>
<wp:status><![CDATA[publish]]></wp:status>
<content:encoded><![CDATA[${x}]]></content:encoded>
<wp:postmeta>
<wp:meta_key>_yoast_wpseo_title</wp:meta_key>
<wp:meta_value><![CDATA[${((Q=p.meta)==null?void 0:Q.seoTitle)||""}]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>_yoast_wpseo_metadesc</wp:meta_key>
<wp:meta_value><![CDATA[${((B=p.meta)==null?void 0:B.seoDescription)||""}]]></wp:meta_value>
</wp:postmeta>
</item>
</channel>
</rss>`},Ao=()=>p?p.sections.map(g=>{var Q;let x=`<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
`;return x+=`<!-- wp:heading {"level":2,"textAlign":"center"} --><h2 class="has-text-align-center">${g.heading||""}</h2><!-- /wp:heading -->
`,g.subheading&&(x+=`<!-- wp:paragraph {"align":"center"} --><p class="has-text-align-center"><em>${g.subheading}</em></p><!-- /wp:paragraph -->
`),g.content&&(x+=`<!-- wp:paragraph --><p>${g.content}</p><!-- /wp:paragraph -->
`),(Q=g.items)!=null&&Q.length&&(x+="<!-- wp:list --><ul>",g.items.forEach(B=>{x+=`<li><strong>${B.title||""}</strong>${B.desc?" — "+B.desc:""}</li>`}),x+=`</ul><!-- /wp:list -->
`),g.cta&&(x+=`<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button --><div class="wp-block-button"><a class="wp-block-button__link wp-element-button">${g.cta}</a></div><!-- /wp:button --></div>
<!-- /wp:buttons -->
`),x+=`</div>
<!-- /wp:group -->
`,x}).join(`
`):"",Qn=()=>{var gr,yr,vr,Et,Ut;if(!p)return"";const g=I(),x=T(),Q=L=>String(L||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),B=d.pages==="multi",P=Q(d.companyName),z=(L,ee,D)=>{var ql;const pe=L.key==="hero",Vt=ee%2===0?"#FFFFFF":"#FBF8F1",Mo=pe?g.heroBg:Vt,xr=pe?"h1":"h2",Qc=`<${xr} class="${pe?"hero-h1":"sec-h2"}">${Q(L.heading)}</${xr}>`,wc=L.subheading?`<p class="sec-sub">${Q(L.subheading)}</p>`:"",_c=L.content?`<p class="sec-content">${Q(L.content)}</p>`:"",Sc=(ql=L.items)!=null&&ql.length?`<div class="sec-items">${L.items.map(_n=>`<div class="sec-item"><h4>${Q(_n.title)}</h4>${_n.desc?`<p>${Q(_n.desc)}</p>`:""}${_n.value?`<div class="sec-item-value">${Q(_n.value)}</div>`:""}</div>`).join("")}</div>`:"",Fc=L.cta?`<a class="sec-cta" href="#contact">${Q(L.cta)}</a>`:"",Cc=pe?"":`<span class="sec-tag">${Q(L.key.toUpperCase())}</span>`;return`<section ${pe?"":`id="${Q(L.key)}"`} class="sec ${pe?"hero":""}" style="background:${Mo};">
  <div class="sec-inner">
    ${Cc}
    ${Qc}
    ${wc}
    ${_c}
    ${Sc}
    ${Fc}
  </div>
</section>`};let b=(gr=p.brand)==null?void 0:gr.navMenu;(!b||b.length===0)&&(B?b=[{label:"首頁",anchor:"home"},{label:"關於",anchor:"about"},{label:"服務",anchor:"services"},{label:"作品",anchor:"portfolio"},{label:"聯絡",anchor:"contact"}]:b=p.sections.filter(L=>L.key!=="hero").slice(0,6).map(L=>{var ee;return{label:((ee=L.heading)==null?void 0:ee.slice(0,4))||L.key,anchor:L.key}}));const W=`<nav class="topnav">
  <div class="topnav-inner">
    <div class="brand">${P}</div>
    <ul class="nav-links">
      ${b.map(L=>B?`<li><a href="#" data-page="${Q(L.anchor)}" class="nav-link">${Q(L.label)}</a></li>`:`<li><a href="#${Q(L.anchor)}">${Q(L.label)}</a></li>`).join("")}
    </ul>
    <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
  </div>
</nav>`;let Y="";if(B){const L=["home","about","services","portfolio","contact"],ee={};L.forEach(D=>ee[D]=[]),p.sections.forEach(D=>{const pe=D.page||"home";ee[pe]||(ee[pe]=[]),ee[pe].push(D)}),(ee.home.length===0||ee.home[0].key!=="hero")&&ee.home.unshift({key:"hero",heading:((yr=p.brand)==null?void 0:yr.tagline)||P,subheading:((vr=p.brand)==null?void 0:vr.subtitle)||"",content:"",cta:"了解服務"}),Y=L.filter(D=>ee[D].length>0).map((D,pe)=>{const Vt=ee[D].map((Mo,xr)=>z(Mo,xr,ee[D].length)).join(`
`);return`<div class="page" data-page="${D}" ${pe===0?"":'style="display:none;"'}>
${Vt}
</div>`}).join(`
`)}else Y=`<div class="page" data-page="home">
${p.sections.map((ee,D)=>z(ee,D,p.sections.length)).join(`
`)}
</div>`;const Ue=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Noto+Sans+TC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&family=Cormorant+Garamond:wght@400;500;700&family=Archivo+Black&family=Oswald:wght@400;500;700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">`,Oo=B?`
<script>
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('data-page');
      document.querySelectorAll('.page').forEach(p => {
        p.style.display = p.getAttribute('data-page') === target ? 'block' : 'none';
      });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
  document.querySelector('.nav-link[data-page="home"]')?.classList.add('active');
<\/script>`:`
<script>
  document.querySelectorAll('.topnav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('.nav-links').classList.remove('open');
      }
    });
  });
<\/script>`;return`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${P} — ${Q(((Et=p.brand)==null?void 0:Et.tagline)||"")}</title>
<meta name="description" content="${Q(((Ut=p.meta)==null?void 0:Ut.seoDescription)||"")}">
${Ue}
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: ${x.font}; color: #1F1B16; line-height: 1.7; padding-top: 64px; }

  /* 導覽列 */
  .topnav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #E5DDC8;
    z-index: 1000;
    height: 64px;
  }
  .topnav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topnav .brand {
    font-family: ${x.serifFont};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${g.primary};
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 8px;
    margin: 0;
  }
  .nav-links a {
    display: inline-block;
    padding: 8px 14px;
    color: #1F1B16;
    text-decoration: none;
    font-size: 14px;
    transition: all .15s;
    border-radius: ${x.radius};
  }
  .nav-links a:hover { color: ${g.accent}; }
  .nav-links a.active {
    background: ${g.primary};
    color: #FFFFFF;
  }
  .nav-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: ${g.primary};
  }
  @media (max-width: 720px) {
    .nav-toggle { display: block; }
    .nav-links {
      display: none;
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: #FFFFFF;
      flex-direction: column;
      padding: 16px;
      border-bottom: 1px solid #E5DDC8;
    }
    .nav-links.open { display: flex; }
    .nav-links a { display: block; }
  }

  /* Sections */
  .sec { padding: ${x.sectionPad}; }
  .sec-inner { max-width: 1100px; margin: 0 auto; }
  .sec.hero {
    padding: ${x.density==="loose"?"160px":"120px"} 24px;
    color: #F5F0E6;
    text-align: center;
  }
  .sec.hero .hero-h1 {
    font-family: ${x.serifFont};
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 16px;
    line-height: 1.3;
    letter-spacing: ${x.density==="tight"?"-0.02em":"0"};
  }
  .sec.hero .sec-sub {
    color: #E8DCC0;
    font-size: clamp(16px, 2vw, 20px);
    margin-bottom: 16px;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
  .sec.hero .sec-content {
    color: #E8DCC0;
    font-size: 16px;
    max-width: 720px;
    margin: 16px auto 24px;
  }
  .sec.hero .sec-cta {
    background: ${g.accent};
    color: #FFF;
    padding: 16px 36px;
    border-radius: ${x.radius};
  }
  .sec-tag {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 2px;
    color: ${g.accent};
    border: ${x.tagBorder} solid ${g.accent};
    padding: 4px 10px;
    margin-bottom: 20px;
  }
  .sec-h2 {
    font-family: ${x.serifFont};
    font-size: clamp(24px, 3.5vw, 36px);
    font-weight: 500;
    margin-bottom: 12px;
    color: ${g.primary};
    letter-spacing: ${x.density==="tight"?"-0.01em":"0"};
  }
  .sec-sub { color: #6B5F49; font-size: 17px; margin-bottom: 20px; }
  .sec-content {
    font-size: 16px;
    color: #2A241B;
    max-width: 760px;
    margin-bottom: 24px;
  }
  .sec-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 24px;
  }
  .sec-item {
    background: #FFFFFF;
    padding: 20px 22px;
    border-left: 3px solid ${g.accent};
    border-radius: ${x.radius};
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .sec.hero .sec-item {
    background: rgba(255,255,255,0.08);
    border-left-color: ${g.accent};
    color: #F5F0E6;
  }
  .sec-item h4 { font-size: 16px; font-weight: 500; margin-bottom: 6px; }
  .sec.hero .sec-item h4 { color: #FFFFFF; }
  .sec-item p { font-size: 14px; color: #6B5F49; }
  .sec.hero .sec-item p { color: #E8DCC0; }
  .sec-item-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: ${g.primary};
    margin-top: 6px;
  }
  .sec.hero .sec-item-value { color: ${g.accent}; }
  .sec-cta {
    display: inline-block;
    margin-top: 24px;
    padding: 14px 32px;
    background: ${g.primary};
    color: #FFFFFF;
    text-decoration: none;
    font-size: 15px;
    letter-spacing: 1px;
    border-radius: ${x.radius};
    transition: opacity .2s;
  }
  .sec-cta:hover { opacity: 0.85; }
  footer {
    padding: 40px 24px;
    background: #1F1B16;
    color: #A39A86;
    text-align: center;
    font-size: 12px;
  }
  footer a { color: ${g.accent}; text-decoration: none; }
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
</style>
</head>
<body>
${W}
${Y}
<footer>
  &copy; ${new Date().getFullYear()} ${P} · Designed by <a href="#">NOYA WEB DESIGN</a> · Style: ${x.label}
</footer>
${Oo}
</body>
</html>`},wn=(g,x,Q="text/plain")=>{const B=new Blob([g],{type:Q}),P=URL.createObjectURL(B),z=document.createElement("a");z.href=P,z.download=x,z.click(),URL.revokeObjectURL(P)};return a.jsxs("div",{className:"app",children:[a.jsx("style",{children:sf}),a.jsxs("div",{className:"topbar",children:[a.jsxs("div",{className:"logo logo-clickable",onClick:()=>{e==="industry_picker"||!window.confirm("回到產業選擇頁？目前的問卷與生成內容會被清掉。")||(i(null),v(null),S([]),m(""),t("industry_picker"))},title:"點選回到產業選擇頁",children:[a.jsx("span",{className:"logo-mark",children:"▮"})," NOYA WEB DESIGN",a.jsx("span",{className:"logo-tag",children:"B2B SITE GENERATOR · 90 INDUSTRIES"})]}),a.jsx("div",{className:"topbar-meta",children:"v2.2 · 風格 × 色系庫"})]}),a.jsxs("div",{className:"layout",children:[a.jsxs("aside",{className:"sidebar",children:[a.jsxs("div",{className:"sidebar-section",children:[a.jsx("div",{className:"sidebar-label",children:"◆ CLAUDE API KEY"}),a.jsx("input",{type:"password",className:"api-input",placeholder:"sk-ant-...",value:n,onChange:g=>c(g.target.value)}),a.jsxs("div",{className:"api-hint",children:["存本機 · 不送雲端",a.jsx("br",{}),"首次：到"," ",a.jsx("a",{href:"https://console.anthropic.com",target:"_blank",rel:"noreferrer",children:"console.anthropic.com"})," ","申請 + Billing 儲值 $5 USD 起。"]})]}),a.jsxs("div",{className:"sidebar-section",children:[a.jsx("div",{className:"sidebar-label",children:"◆ 品質層級"}),ur.map(g=>a.jsxs("div",{className:`tier-card ${d.tier===g.id?"active":""} ${g.recommended?"recommended":""}`,onClick:()=>y(x=>({...x,tier:g.id})),children:[a.jsxs("div",{className:"tier-label",children:[g.label,g.recommended&&a.jsx("span",{className:"rec-star",children:" ★"})]}),a.jsx("div",{className:"tier-sub",children:g.sub}),a.jsxs("div",{className:"tier-meta",children:[g.price," · ",g.time," · 品質 ",g.quality]}),a.jsx("div",{className:"tier-meta tier-note",children:g.note})]},g.id))]}),a.jsxs("div",{className:"sidebar-section",children:[a.jsx("div",{className:"sidebar-label",children:"◆ 網站語言"}),a.jsx("div",{className:"seg",children:[{v:"zh-TW",l:"繁體中文"},{v:"en",l:"English"}].map(g=>a.jsx("button",{className:`seg-btn ${d.language===g.v?"active":""}`,onClick:()=>y(x=>({...x,language:g.v})),children:g.l},g.v))})]}),a.jsxs("div",{className:"sidebar-section",children:[a.jsx("div",{className:"sidebar-label",children:"◆ 頁面結構"}),a.jsx("div",{className:"seg",children:[{v:"single",l:"單頁式"},{v:"multi",l:"多頁式"}].map(g=>a.jsx("button",{className:`seg-btn ${d.pages===g.v?"active":""}`,onClick:()=>y(x=>({...x,pages:g.v})),children:g.l},g.v))}),a.jsx("div",{className:"api-hint",style:{marginTop:10},children:"單頁＝所有 sections 串成 landing；多頁＝首頁 + 4 內頁。"})]}),o&&a.jsxs("div",{className:"sidebar-section",children:[a.jsx("div",{className:"sidebar-label",children:"◆ 當前產業"}),a.jsxs("div",{className:"current-industry",children:[a.jsx("div",{className:"ci-icon",style:{background:We[o.cat].color},children:We[o.cat].icon}),a.jsxs("div",{children:[a.jsx("div",{className:"ci-name",children:o.name}),a.jsx("div",{className:"ci-cat",children:We[o.cat].label})]})]}),a.jsxs("div",{className:"ci-keyq",children:[a.jsx("div",{className:"ci-keyq-label",children:"問診重點題"}),a.jsx("div",{className:"ci-keyq-list",children:o.keyQ.join(" · ")})]}),a.jsx("button",{className:"ci-change",onClick:()=>{i(null),t("industry_picker")},children:"← 換產業"})]})]}),a.jsxs("main",{className:"main",children:[e==="industry_picker"&&a.jsx(tf,{industries:h,totalCount:aa.length,searchQuery:l,setSearchQuery:s,activeCategory:u,setActiveCategory:f,onSelect:g=>{i(g),t("questionnaire")}}),e==="questionnaire"&&o&&a.jsx(nf,{industry:o,answers:d,setAnswers:y,toggleSection:k,toggleTrustPoint:F,canProceed:j,onGenerate:lt,error:M,stylePresets:E,colorPalettes:N}),e==="generating"&&a.jsx(rf,{log:_,answers:d,industry:o}),e==="preview"&&p&&a.jsx(of,{content:p,answers:d,setAnswers:y,industry:o,colors:I(),presetThemes:N,onBack:()=>t("questionnaire"),onExport:()=>t("export"),onRegenerate:lt}),e==="export"&&p&&a.jsx(lf,{answers:d,industry:o,colors:I(),elementor:Nt(),wxr:hr(),gutenberg:Ao(),standaloneHTML:Qn(),onBack:()=>t("preview"),onDownload:wn})]})]})]})}function tf({industries:e,totalCount:t,searchQuery:n,setSearchQuery:r,activeCategory:o,setActiveCategory:i,onSelect:l}){return a.jsxs(a.Fragment,{children:[a.jsxs("h1",{className:"page-title",children:["你的客戶是哪一",a.jsx("span",{className:"accent",children:"行"}),"？"]}),a.jsx("div",{className:"page-sub",children:"90 INDUSTRIES · 18 CATEGORIES · 內建問診策略"}),a.jsxs("div",{className:"picker-toolbar",children:[a.jsx("input",{type:"text",className:"picker-search",placeholder:"🔍 搜尋產業：LOGO、CNC、咖啡、律師...",value:n,onChange:s=>r(s.target.value)}),a.jsxs("div",{className:"picker-count",children:[e.length," / ",t," 個產業"]})]}),a.jsxs("div",{className:"category-bar",children:[a.jsx("button",{className:`cat-btn ${o==="all"?"active":""}`,onClick:()=>i("all"),children:"全部"}),Object.entries(We).map(([s,u])=>a.jsxs("button",{className:`cat-btn ${o===s?"active":""}`,onClick:()=>i(s),style:o===s?{background:u.color,color:"#F5F0E6",borderColor:u.color}:{},children:[a.jsx("span",{className:"cat-icon",children:u.icon})," ",u.label]},s))]}),a.jsxs("div",{className:"industry-grid",children:[e.map(s=>{const u=We[s.cat];return a.jsxs("div",{className:"industry-tile",onClick:()=>l(s),children:[a.jsxs("div",{className:"tile-head",children:[a.jsx("div",{className:"tile-icon",style:{background:u.color},children:u.icon}),a.jsx("div",{className:"tile-cat",children:u.label})]}),a.jsx("div",{className:"tile-name",children:s.name}),a.jsxs("div",{className:"tile-keyq",children:["問診 · ",s.keyQ.slice(0,4).join(" / "),s.keyQ.length>4?"...":""]}),a.jsx("div",{className:"tile-trust",children:s.trustPoints.slice(0,3).map(f=>a.jsx("span",{className:"tile-trust-chip",children:f},f))})]},s.id)}),e.length===0&&a.jsx("div",{className:"empty-state",children:"沒有符合的產業。試試其他關鍵字，或回到「全部」。"})]})]})}function nf({industry:e,answers:t,setAnswers:n,toggleSection:r,toggleTrustPoint:o,canProceed:i,onGenerate:l,error:s,stylePresets:u,colorPalettes:f}){return a.jsxs(a.Fragment,{children:[a.jsxs("h1",{className:"page-title",children:["為「",a.jsx("span",{className:"accent",children:e.name}),"」量身打造"]}),a.jsxs("div",{className:"page-sub",children:[We[e.cat].label," · 內建 ",e.keyQ.length," 道問診重點題"]}),s&&a.jsxs("div",{className:"error-banner",children:[a.jsx("strong",{children:"生成失敗："})," ",s]}),a.jsxs("div",{className:"strategy-box",children:[a.jsx("div",{className:"strategy-label",children:"◆ 此產業的網站策略"}),a.jsx("div",{className:"strategy-text",children:e.strategy})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-section-head",children:[a.jsx("span",{className:"form-section-num",children:"01"}),a.jsx("h2",{className:"form-section-title",children:"公司基本資料"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{className:"field-label",children:["公司／品牌名稱",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("input",{type:"text",placeholder:"例：永盛精密機械股份有限公司",value:t.companyName,onChange:d=>n(y=>({...y,companyName:d.target.value}))})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{className:"field-label",children:"經營年資"}),a.jsx("input",{type:"text",placeholder:"例：32",value:t.yearsInBusiness,onChange:d=>n(y=>({...y,yearsInBusiness:d.target.value}))})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{className:"field-label",children:["主要產品 / 服務",a.jsx("span",{className:"req",children:"*"})]}),a.jsx("textarea",{placeholder:"一句話講清楚你賣什麼。",value:t.productOrService,onChange:d=>n(y=>({...y,productOrService:d.target.value}))})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{className:"field-label",children:"目標客戶"}),a.jsx("input",{type:"text",placeholder:"你的理想客戶長什麼樣子？",value:t.targetCustomer,onChange:d=>n(y=>({...y,targetCustomer:d.target.value}))})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-section-head",children:[a.jsx("span",{className:"form-section-num",children:"02"}),a.jsx("h2",{className:"form-section-title",children:"你的信任亮點是？"})]}),a.jsxs("p",{className:"form-section-hint",children:["已預載「",e.name,"」常見亮點。勾你「真的有」的就好，不要為了好看亂勾。"]}),a.jsx("div",{className:"chip-group",children:e.trustPoints.map(d=>a.jsx("div",{className:`chip ${t.trustPoints.includes(d)?"active":""}`,onClick:()=>o(d),children:d},d))})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-section-head",children:[a.jsx("span",{className:"form-section-num",children:"03"}),a.jsx("h2",{className:"form-section-title",children:"需要哪些頁面區塊？"})]}),a.jsxs("p",{className:"form-section-hint",children:["已按產業預設 ",e.sections.length," 個 sections。Hero 和聯絡必選，其餘可調。當前 ",t.selectedSections.length," 個。"]}),a.jsx("div",{className:"section-grid",children:e.sections.map(d=>{const y=An[d];if(!y)return null;const p=t.selectedSections.includes(d),v=y.required;return a.jsxs("div",{className:`section-card ${v?"required":p?"active":""}`,onClick:()=>r(d),children:[a.jsxs("div",{className:"section-name",children:[a.jsx("span",{className:"check",children:p||v?"■":"□"}),y.name]}),a.jsx("div",{className:"section-desc",children:y.desc})]},d)})})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-section-head",children:[a.jsx("span",{className:"form-section-num",children:"04"}),a.jsx("h2",{className:"form-section-title",children:"視覺風格"})]}),a.jsx("p",{className:"form-section-hint",children:"影響字型、留白、邊框、整體調性。「AI 推薦」會依產業自動選最合適的。"}),a.jsxs("div",{className:"picker-mode",children:[a.jsx("button",{className:`pm-btn ${t.styleMode==="auto"?"active":""}`,onClick:()=>n(d=>({...d,styleMode:"auto"})),children:"✨ AI 依產業推薦"}),a.jsx("button",{className:`pm-btn ${t.styleMode==="preset"?"active":""}`,onClick:()=>n(d=>({...d,styleMode:"preset"})),children:"🎨 我自己挑"})]}),t.styleMode==="preset"&&a.jsx("div",{className:"style-grid",children:Object.entries(u).map(([d,y])=>a.jsxs("button",{className:`style-card ${t.styleId===d?"active":""}`,onClick:()=>n(p=>({...p,styleId:d})),children:[a.jsx("div",{className:"style-emoji",children:y.emoji}),a.jsx("div",{className:"style-name",children:y.label}),a.jsx("div",{className:"style-desc",children:y.desc})]},d))})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-section-head",children:[a.jsx("span",{className:"form-section-num",children:"05"}),a.jsx("h2",{className:"form-section-title",children:"色系"})]}),a.jsx("p",{className:"form-section-hint",children:"12 組商務配色按調性分類。「AI 自動」會依產業挑深色背景 + 點綴色（之後在預覽頁仍可手動覆寫）。"}),a.jsxs("div",{className:"picker-mode",children:[a.jsx("button",{className:`pm-btn ${t.colorMode==="auto"?"active":""}`,onClick:()=>n(d=>({...d,colorMode:"auto"})),children:"✨ AI 依產業推薦"}),a.jsx("button",{className:`pm-btn ${t.colorMode==="preset"?"active":""}`,onClick:()=>n(d=>({...d,colorMode:"preset"})),children:"🎨 我自己挑"})]}),t.colorMode==="preset"&&a.jsx(a.Fragment,{children:["沉穩","溫暖","清新","典雅","自然"].map(d=>{const y=Object.entries(f).filter(([p,v])=>v.tone===d);return y.length===0?null:a.jsxs("div",{className:"palette-group",children:[a.jsx("div",{className:"palette-group-label",children:d}),a.jsx("div",{className:"palette-grid",children:y.map(([p,v])=>a.jsxs("button",{className:`palette-card ${t.presetTheme===p?"active":""}`,onClick:()=>n(_=>({..._,presetTheme:p})),children:[a.jsx("div",{className:"palette-preview",style:{background:v.heroBg},children:a.jsx("div",{className:"palette-accent",style:{background:v.accent}})}),a.jsx("div",{className:"palette-name",children:v.label})]},p))})]},d)})})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-section-head",children:[a.jsx("span",{className:"form-section-num",children:"06"}),a.jsxs("h2",{className:"form-section-title",children:["參考網站 / 特別需求 ",a.jsx("span",{style:{fontSize:12,color:"#6B5F49"},children:"(選填)"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{className:"field-label",children:"想參考某個網站"}),a.jsx("input",{type:"url",placeholder:"https://...",value:t.referenceUrl,onChange:d=>n(y=>({...y,referenceUrl:d.target.value}))})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{className:"field-label",children:"其他特別需求"}),a.jsx("textarea",{placeholder:"例：客戶都是日本人，語氣要更謹慎。",value:t.customNotes,onChange:d=>n(y=>({...y,customNotes:d.target.value}))})]})]}),a.jsxs("div",{className:"footer-actions",children:[a.jsxs("div",{className:"summary",children:["產業 ",a.jsx("strong",{children:e.name})," · ",t.selectedSections.length," sections · ",a.jsx("strong",{children:ur.find(d=>d.id===t.tier).label})," · 預估 ",a.jsx("strong",{children:ur.find(d=>d.id===t.tier).price})]}),a.jsx("button",{className:"btn-primary",disabled:!i,onClick:l,children:"生成網站"})]})]})}function rf({log:e,answers:t,industry:n}){return a.jsxs("div",{className:"generating",children:[a.jsx("div",{className:"gen-spinner"}),a.jsxs("h2",{className:"gen-title",children:["正在為 ",t.companyName," 打造網站"]}),a.jsxs("div",{className:"gen-sub",children:[ur.find(r=>r.id===t.tier).label," · ",n==null?void 0:n.name," · ",t.selectedSections.length," sections"]}),a.jsx("div",{className:"gen-log",children:e.map((r,o)=>a.jsxs("div",{className:"gen-log-line",children:[a.jsx("span",{className:"gen-log-time",children:r.time}),a.jsxs("span",{children:["▸ ",r.msg]})]},o))})]})}function of({content:e,answers:t,setAnswers:n,industry:r,colors:o,presetThemes:i,onBack:l,onExport:s,onRegenerate:u}){var y;const[f,d]=ye.useState("rendered");return a.jsxs(a.Fragment,{children:[a.jsxs("h1",{className:"page-title",children:["預覽 ",a.jsxs("span",{style:{color:"#6B5F49",fontSize:24},children:["· ",t.companyName]})]}),a.jsxs("div",{className:"page-sub",children:[e.sections.length," SECTIONS · ",(y=e.brand)==null?void 0:y.tagline]}),a.jsxs("div",{className:"color-panel",children:[a.jsxs("div",{className:"color-panel-head",children:[a.jsx("span",{className:"color-panel-label",children:"◆ 配色控制"}),a.jsx("span",{className:"color-panel-hint",children:"如果 AI 生成的顏色不滿意，可在此覆寫"})]}),a.jsxs("div",{className:"color-modes",children:[a.jsxs("button",{className:`color-mode ${t.colorMode==="auto"?"active":""}`,onClick:()=>n(p=>({...p,colorMode:"auto"})),children:[a.jsx("div",{className:"cm-title",children:"AI 自動"}),a.jsx("div",{className:"cm-sub",children:"用 AI 挑的色"})]}),a.jsxs("button",{className:`color-mode ${t.colorMode==="preset"?"active":""}`,onClick:()=>n(p=>({...p,colorMode:"preset"})),children:[a.jsx("div",{className:"cm-title",children:"主題預設"}),a.jsx("div",{className:"cm-sub",children:"5 種商務主題"})]}),a.jsxs("button",{className:`color-mode ${t.colorMode==="custom"?"active":""}`,onClick:()=>n(p=>({...p,colorMode:"custom"})),children:[a.jsx("div",{className:"cm-title",children:"完全手動"}),a.jsx("div",{className:"cm-sub",children:"自己選 hex"})]})]}),t.colorMode==="preset"&&a.jsx("div",{className:"theme-grid",children:Object.entries(i).map(([p,v])=>a.jsxs("button",{className:`theme-card ${t.presetTheme===p?"active":""}`,onClick:()=>n(_=>({..._,presetTheme:p})),children:[a.jsx("div",{className:"theme-preview",style:{background:v.heroBg},children:a.jsx("div",{className:"theme-accent",style:{background:v.accent}})}),a.jsx("div",{className:"theme-name",children:v.label}),a.jsxs("div",{className:"theme-hex",children:[v.primary," · ",v.accent]})]},p))}),t.colorMode==="custom"&&a.jsxs("div",{className:"custom-color-row",children:[a.jsxs("div",{className:"ccr-field",children:[a.jsx("label",{children:"主色（Hero 背景）"}),a.jsxs("div",{className:"ccr-input",children:[a.jsx("input",{type:"color",value:t.customPrimary,onChange:p=>n(v=>({...v,customPrimary:p.target.value}))}),a.jsx("input",{type:"text",value:t.customPrimary,onChange:p=>n(v=>({...v,customPrimary:p.target.value}))})]})]}),a.jsxs("div",{className:"ccr-field",children:[a.jsx("label",{children:"點綴色（CTA、邊框）"}),a.jsxs("div",{className:"ccr-input",children:[a.jsx("input",{type:"color",value:t.customAccent,onChange:p=>n(v=>({...v,customAccent:p.target.value}))}),a.jsx("input",{type:"text",value:t.customAccent,onChange:p=>n(v=>({...v,customAccent:p.target.value}))})]})]})]}),a.jsxs("div",{className:"color-preview-row",children:[a.jsx("span",{className:"cpr-label",children:"目前配色"}),a.jsx("span",{className:"cpr-swatch",style:{background:o.primary},title:o.primary}),a.jsx("span",{className:"cpr-hex",children:o.primary}),a.jsx("span",{className:"cpr-swatch",style:{background:o.accent},title:o.accent}),a.jsx("span",{className:"cpr-hex",children:o.accent})]})]}),a.jsxs("div",{className:"preview-tabs",children:[a.jsx("button",{className:`preview-tab ${f==="rendered"?"active":""}`,onClick:()=>d("rendered"),children:"視覺預覽"}),a.jsx("button",{className:`preview-tab ${f==="structure"?"active":""}`,onClick:()=>d("structure"),children:"結構與文案"})]}),f==="rendered"&&a.jsx("div",{className:"site-preview",children:e.sections.map((p,v)=>{var _;return a.jsxs("div",{className:p.key==="hero"?"site-hero":"site-section",style:p.key==="hero"?{background:o.heroBg}:{},children:[a.jsx("span",{className:"site-section-tag",style:p.key!=="hero"?{color:o.accent,borderColor:o.accent}:{},children:p.key.toUpperCase()}),a.jsx("h2",{className:"site-heading",children:p.heading}),p.subheading&&a.jsx("div",{className:"site-subheading",children:p.subheading}),p.content&&a.jsx("div",{className:"site-content",children:p.content}),((_=p.items)==null?void 0:_.length)>0&&a.jsx("div",{className:"site-items",children:p.items.map((S,M)=>a.jsxs("div",{className:"site-item",style:{borderLeftColor:o.accent},children:[a.jsx("div",{className:"site-item-title",children:S.title}),S.desc&&a.jsx("div",{className:"site-item-desc",children:S.desc}),S.value&&a.jsx("div",{className:"site-item-value",children:S.value})]},M))}),p.cta&&a.jsx("a",{className:"site-cta",style:{background:o.accent},children:p.cta})]},v)})}),f==="structure"&&a.jsx("div",{className:"code-preview",children:JSON.stringify(e,null,2)}),a.jsxs("div",{className:"footer-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:l,children:"← 修改問卷"}),a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("button",{className:"btn-secondary",onClick:u,children:"↻ 重新生成"}),a.jsx("button",{className:"btn-primary",onClick:s,children:"匯出到 WordPress"})]})]})]})}function lf({answers:e,industry:t,colors:n,elementor:r,wxr:o,gutenberg:i,standaloneHTML:l,onBack:s,onDownload:u}){const f=e.companyName.replace(/[^\w\u4e00-\u9fa5]/g,"_").slice(0,30),d=()=>{const y=new Blob([l],{type:"text/html"}),p=URL.createObjectURL(y);window.open(p,"_blank"),setTimeout(()=>URL.revokeObjectURL(p),6e4)};return a.jsxs(a.Fragment,{children:[a.jsxs("h1",{className:"page-title",children:["匯出 ",a.jsx("span",{className:"accent",children:"·"})," 四種格式"]}),a.jsx("div",{className:"page-sub",children:"給客戶看初稿用 HTML、上 WordPress 用三種匯入格式"}),a.jsxs("div",{className:"export-grid four",children:[a.jsxs("div",{className:"export-card featured",children:[a.jsx("div",{className:"export-badge",children:"★ 新增 · 推薦先用這個"}),a.jsx("h3",{className:"export-card-title",children:"獨立 HTML 預覽"}),a.jsx("p",{className:"export-card-desc",children:"完整單檔網頁，雙擊就能開、可直接給客戶看初稿、也能 FTP 上傳當預覽站。"}),a.jsx("button",{className:"btn-preview",onClick:d,children:"👁 新分頁預覽"}),a.jsx("button",{onClick:()=>u(l,`${f}_preview.html`,"text/html"),children:"↓ 下載 .html"})]}),a.jsxs("div",{className:"export-card",children:[a.jsx("h3",{className:"export-card-title",children:"Elementor JSON"}),a.jsx("p",{className:"export-card-desc",children:"匯入到 Elementor → 範本 → 已儲存範本 → 匯入。可逐區塊微調。"}),a.jsx("button",{onClick:()=>u(r,`${f}_elementor.json`,"application/json"),children:"↓ 下載 .json"})]}),a.jsxs("div",{className:"export-card",children:[a.jsx("h3",{className:"export-card-title",children:"WordPress WXR"}),a.jsx("p",{className:"export-card-desc",children:"WP 後台 → 工具 → 匯入 → WordPress → 上傳此檔。完整含 SEO meta。"}),a.jsx("button",{onClick:()=>u(o,`${f}_wxr.xml`,"application/xml"),children:"↓ 下載 .xml"})]}),a.jsxs("div",{className:"export-card",children:[a.jsx("h3",{className:"export-card-title",children:"Gutenberg 區塊"}),a.jsx("p",{className:"export-card-desc",children:"開新頁面 → 切到「代碼編輯器」→ 整段貼上。WP 原生區塊，不需外掛。"}),a.jsx("button",{onClick:()=>u(i,`${f}_gutenberg.html`,"text/html"),children:"↓ 下載 .html"})]})]}),a.jsxs("div",{className:"export-tip",children:[a.jsx("strong",{children:"建議流程："}),"先下載「獨立 HTML 預覽」傳給客戶確認方向（可改的話用配色控制面板微調），確認後再下載對應的 WordPress 格式正式建站。"]}),a.jsxs("div",{style:{marginTop:32},children:[a.jsx("h3",{style:{fontFamily:"Noto Serif TC, serif",fontSize:18,marginBottom:12},children:"Elementor JSON 預覽（截前 2000 字）"}),a.jsxs("div",{className:"code-preview",children:[r.slice(0,2e3),r.length>2e3?`

... (截斷)`:""]})]}),a.jsxs("div",{className:"footer-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:s,children:"← 回到預覽"}),a.jsx("button",{className:"btn-primary",onClick:()=>window.print(),children:"列印交付清單"})]})]})}const sf=`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Noto+Sans+TC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Noto Sans TC', sans-serif; }

.app {
  min-height: 100vh;
  background: #F5F0E6;
  color: #1F1B16;
  font-family: 'Noto Sans TC', -apple-system, sans-serif;
  line-height: 1.6;
}

.topbar {
  background: #1F1B16;
  color: #F5F0E6;
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2C4A3E;
}
.logo {
  font-family: 'Noto Serif TC', serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
}
.logo-mark { color: #C9442F; margin-right: 6px; }
.logo-tag {
  font-size: 12px;
  margin-left: 14px;
  color: #A39A86;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}
.topbar-meta {
  font-size: 12px;
  color: #A39A86;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}

.layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: calc(100vh - 56px);
}

.sidebar {
  background: #EFE7D6;
  border-right: 1px solid #D4C9B0;
  padding: 28px 24px;
  overflow-y: auto;
  max-height: calc(100vh - 56px);
}
.sidebar-section {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px dashed #C9442F33;
}
.sidebar-section:last-child { border-bottom: none; }
.sidebar-label {
  font-size: 10px;
  letter-spacing: 3px;
  color: #6B5F49;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.api-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #C9BFA8;
  background: #FBF8F1;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #1F1B16;
  outline: none;
}
.api-input:focus { border-color: #2C4A3E; }
.api-hint {
  font-size: 11px;
  color: #6B5F49;
  margin-top: 8px;
  line-height: 1.5;
}
.api-hint a { color: #C9442F; text-decoration: underline; }

.tier-card {
  padding: 12px 14px;
  border: 1px solid #C9BFA8;
  background: #FBF8F1;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all .15s;
  position: relative;
}
.tier-card:hover { border-color: #2C4A3E; }
.tier-card.active {
  background: #1F1B16;
  color: #F5F0E6;
  border-color: #1F1B16;
}
.tier-card.active .tier-sub,
.tier-card.active .tier-meta { color: #C9BFA8; }
.tier-card.recommended::before {
  content: '★ 推薦';
  position: absolute;
  background: #C9442F;
  color: #fff;
  font-size: 10px;
  padding: 2px 8px;
  top: -10px;
  left: 8px;
  letter-spacing: 1px;
}
.tier-label { font-weight: 500; font-size: 13px; margin-bottom: 4px; }
.rec-star { color: #C9442F; }
.tier-card.active .rec-star { color: #C9442F; }
.tier-sub { font-size: 11px; color: #6B5F49; font-family: 'JetBrains Mono', monospace; }
.tier-meta { font-size: 11px; margin-top: 4px; opacity: 0.85; }
.tier-note { color: #2C4A3E; font-style: italic; }
.tier-card.active .tier-note { color: #C9BFA8; }

.seg { display: flex; gap: 4px; }
.seg-btn {
  flex: 1;
  padding: 8px;
  border: 1px solid #C9BFA8;
  background: #FBF8F1;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  color: #1F1B16;
}
.seg-btn:hover { border-color: #2C4A3E; }
.seg-btn.active {
  background: #2C4A3E;
  color: #F5F0E6;
  border-color: #2C4A3E;
}

.current-industry {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #1F1B16;
  color: #F5F0E6;
  margin-bottom: 10px;
}
.ci-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5F0E6;
  font-size: 18px;
  font-family: 'Noto Serif TC', serif;
}
.ci-name { font-weight: 500; font-size: 14px; }
.ci-cat { font-size: 11px; color: #A39A86; font-family: 'JetBrains Mono', monospace; }
.ci-keyq { padding: 10px 12px; background: #FBF8F1; border: 1px solid #C9BFA8; margin-bottom: 10px; }
.ci-keyq-label { font-size: 10px; letter-spacing: 2px; color: #6B5F49; margin-bottom: 4px; }
.ci-keyq-list { font-size: 12px; font-family: 'JetBrains Mono', monospace; color: #C9442F; }
.ci-change {
  width: 100%;
  padding: 8px;
  background: transparent;
  border: 1px dashed #6B5F49;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  color: #6B5F49;
}
.ci-change:hover { color: #1F1B16; border-color: #1F1B16; }

.main {
  padding: 48px 56px 80px;
  overflow-y: auto;
  background: #F5F0E6;
  max-height: calc(100vh - 56px);
}
.page-title {
  font-family: 'Noto Serif TC', serif;
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}
.page-title .accent { color: #C9442F; }
.page-sub {
  color: #6B5F49;
  font-size: 14px;
  margin-bottom: 36px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}

/* 產業選擇器 */
.picker-toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  align-items: center;
}
.picker-search {
  flex: 1;
  padding: 14px 18px;
  border: 1px solid #C9BFA8;
  background: #FBF8F1;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 15px;
  outline: none;
  color: #1F1B16;
}
.picker-search:focus { border-color: #2C4A3E; }
.picker-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #6B5F49;
  padding: 0 8px;
}

.category-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #D4C9B0;
}
.cat-btn {
  padding: 8px 14px;
  border: 1px solid #C9BFA8;
  background: #FBF8F1;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 12px;
  cursor: pointer;
  color: #1F1B16;
  transition: all .15s;
}
.cat-btn:hover { border-color: #2C4A3E; }
.cat-btn.active {
  background: #1F1B16;
  color: #F5F0E6;
  border-color: #1F1B16;
}
.cat-icon { font-family: 'Noto Serif TC', serif; margin-right: 4px; }

.industry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}
.industry-tile {
  background: #FBF8F1;
  border: 1px solid #D4C9B0;
  padding: 18px;
  cursor: pointer;
  transition: all .15s;
}
.industry-tile:hover {
  background: #FFFFFF;
  border-color: #1F1B16;
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 #1F1B16;
}
.tile-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #D4C9B0;
}
.tile-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5F0E6;
  font-size: 16px;
  font-family: 'Noto Serif TC', serif;
}
.tile-cat {
  font-size: 11px;
  color: #6B5F49;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}
.tile-name {
  font-family: 'Noto Serif TC', serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #1F1B16;
}
.tile-keyq {
  font-size: 11px;
  color: #2C4A3E;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 10px;
}
.tile-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.tile-trust-chip {
  font-size: 10px;
  padding: 3px 8px;
  background: #EFE7D6;
  color: #6B5F49;
  font-family: inherit;
}

.empty-state {
  grid-column: 1 / -1;
  padding: 60px 20px;
  text-align: center;
  color: #6B5F49;
  background: #FBF8F1;
  border: 1px dashed #C9BFA8;
}

/* 策略提示框 */
.strategy-box {
  background: #1F1B16;
  color: #F5F0E6;
  padding: 20px 24px;
  margin-bottom: 28px;
  border-left: 4px solid #C9442F;
}
.strategy-label {
  font-size: 11px;
  letter-spacing: 2px;
  color: #C9442F;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 8px;
}
.strategy-text {
  font-size: 14px;
  line-height: 1.7;
  color: #C9BFA8;
}

/* 問卷 */
.form-section {
  background: #FBF8F1;
  border: 1px solid #D4C9B0;
  padding: 28px 32px;
  margin-bottom: 20px;
}
.form-section-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid #D4C9B0;
}
.form-section-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #C9442F;
  letter-spacing: 2px;
}
.form-section-title {
  font-family: 'Noto Serif TC', serif;
  font-size: 20px;
  font-weight: 500;
}
.form-section-hint {
  font-size: 13px;
  color: #6B5F49;
  margin-bottom: 16px;
  line-height: 1.6;
}
.field { margin-bottom: 16px; }
.field-label { font-size: 13px; font-weight: 500; margin-bottom: 6px; display: block; }
.field-label .req { color: #C9442F; margin-left: 4px; }
.field input, .field textarea, .field select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 14px;
  color: #1F1B16;
  outline: none;
  transition: border-color .15s;
}
.field input:focus, .field textarea:focus { border-color: #2C4A3E; }
.field textarea { resize: vertical; min-height: 80px; }

.chip-group { display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  padding: 8px 14px;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  font-size: 13px;
  cursor: pointer;
  transition: all .15s;
  user-select: none;
}
.chip:hover { border-color: #2C4A3E; }
.chip.active {
  background: #2C4A3E;
  color: #F5F0E6;
  border-color: #2C4A3E;
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 10px;
}
.section-card {
  padding: 12px 14px;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  cursor: pointer;
  transition: all .15s;
}
.section-card:hover { border-color: #2C4A3E; }
.section-card.active { border-color: #2C4A3E; background: #EFE7D6; }
.section-card.required {
  background: #1F1B16;
  color: #F5F0E6;
  border-color: #1F1B16;
  cursor: default;
}
.section-name {
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.section-name .check { color: #C9442F; font-family: 'JetBrains Mono', monospace; }
.section-desc { font-size: 11px; color: #6B5F49; }
.section-card.required .section-desc { color: #C9BFA8; }

.footer-actions {
  margin-top: 32px;
  padding: 24px 0 0;
  border-top: 2px solid #1F1B16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.summary { font-size: 13px; color: #6B5F49; font-family: 'JetBrains Mono', monospace; }
.summary strong { color: #1F1B16; font-weight: 500; }
.btn-primary {
  background: #1F1B16;
  color: #F5F0E6;
  border: none;
  padding: 14px 32px;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all .15s;
}
.btn-primary::after { content: ' →'; margin-left: 6px; }
.btn-primary:hover:not(:disabled) { background: #C9442F; }
.btn-primary:disabled {
  background: #C9BFA8;
  color: #6B5F49;
  cursor: not-allowed;
}
.btn-secondary {
  background: transparent;
  color: #1F1B16;
  border: 1px solid #1F1B16;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
}
.btn-secondary:hover { background: #1F1B16; color: #F5F0E6; }

.generating { padding: 80px 56px; text-align: center; }
.gen-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid #D4C9B0;
  border-top-color: #C9442F;
  border-radius: 50%;
  margin: 0 auto 30px;
  animation: spin 0.9s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.gen-title { font-family: 'Noto Serif TC', serif; font-size: 28px; margin-bottom: 8px; }
.gen-sub { color: #6B5F49; margin-bottom: 32px; }
.gen-log {
  max-width: 600px;
  margin: 0 auto;
  background: #1F1B16;
  color: #C9BFA8;
  padding: 20px 24px;
  text-align: left;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  line-height: 1.8;
  min-height: 200px;
}
.gen-log-time { color: #6B5F49; margin-right: 10px; }
.gen-log-line { display: flex; gap: 8px; }

.preview-tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid #D4C9B0;
  margin-bottom: 28px;
}
.preview-tab {
  padding: 14px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  color: #6B5F49;
}
.preview-tab.active {
  color: #1F1B16;
  font-weight: 500;
  border-bottom-color: #C9442F;
}

.site-preview {
  background: #FFFFFF;
  border: 1px solid #D4C9B0;
  overflow: hidden;
}
.site-section {
  padding: 64px 48px;
  border-bottom: 1px solid #EFE7D6;
}
.site-section:nth-child(even) { background: #FBF8F1; }
.site-section-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  color: #C9442F;
  padding: 4px 10px;
  border: 1px solid #C9442F;
  margin-bottom: 16px;
}
.site-heading {
  font-family: 'Noto Serif TC', serif;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}
.site-subheading { color: #6B5F49; font-size: 16px; margin-bottom: 20px; }
.site-content {
  font-size: 15px;
  line-height: 1.8;
  color: #2A241B;
  max-width: 720px;
}
.site-items {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}
.site-item {
  padding: 16px 18px;
  background: #FFFFFF;
  border-left: 3px solid #C9442F;
}
.site-item-title { font-weight: 500; margin-bottom: 4px; font-size: 14px; }
.site-item-desc { font-size: 13px; color: #6B5F49; }
.site-item-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #2C4A3E;
  margin-top: 4px;
}
.site-cta {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 28px;
  background: #1F1B16;
  color: #F5F0E6;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1px;
}
.site-hero {
  padding: 100px 48px;
  text-align: center;
  color: #F5F0E6;
}
.site-hero .site-heading { color: #F5F0E6 !important; font-size: 44px; }
.site-hero .site-subheading { color: #E8DCC0 !important; font-size: 18px; }
.site-hero .site-content { color: #E8DCC0 !important; max-width: 720px; margin: 0 auto; }
.site-hero .site-section-tag { color: #FFD8A8 !important; border-color: #FFD8A8 !important; }
.site-hero .site-cta { background: #C9442F !important; color: #FFFFFF !important; }
.site-hero .site-items .site-item {
  background: rgba(255,255,255,0.08) !important;
  color: #F5F0E6 !important;
}
.site-hero .site-items .site-item-title { color: #FFFFFF !important; }
.site-hero .site-items .site-item-desc { color: #E8DCC0 !important; }

.export-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.export-card {
  background: #FBF8F1;
  border: 1px solid #D4C9B0;
  padding: 24px;
}
.export-card-title { font-family: 'Noto Serif TC', serif; font-size: 18px; margin-bottom: 6px; }
.export-card-desc {
  font-size: 12px;
  color: #6B5F49;
  margin-bottom: 16px;
  line-height: 1.6;
  min-height: 36px;
}
.export-card button {
  width: 100%;
  padding: 10px;
  background: #1F1B16;
  color: #F5F0E6;
  border: none;
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
  letter-spacing: 1px;
}
.export-card button:hover { background: #C9442F; }

.error-banner {
  background: #FBEAE5;
  border-left: 4px solid #C9442F;
  padding: 14px 20px;
  margin-bottom: 20px;
  font-size: 13px;
  color: #7A2E1F;
}

.code-preview {
  background: #1F1B16;
  color: #C9BFA8;
  padding: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  max-height: 400px;
  overflow: auto;
  white-space: pre;
  line-height: 1.7;
}

/* 配色控制面板 */
.color-panel {
  background: #FBF8F1;
  border: 1px solid #D4C9B0;
  border-left: 4px solid #C9442F;
  padding: 20px 24px;
  margin-bottom: 28px;
}
.color-panel-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 14px;
}
.color-panel-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  color: #C9442F;
}
.color-panel-hint {
  font-size: 12px;
  color: #6B5F49;
}
.color-modes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}
.color-mode {
  padding: 12px 14px;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: all .15s;
}
.color-mode:hover { border-color: #2C4A3E; }
.color-mode.active {
  background: #1F1B16;
  color: #F5F0E6;
  border-color: #1F1B16;
}
.cm-title { font-weight: 500; font-size: 13px; margin-bottom: 2px; }
.cm-sub { font-size: 11px; color: #6B5F49; }
.color-mode.active .cm-sub { color: #C9BFA8; }

.theme-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 14px;
}
.theme-card {
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  transition: all .15s;
  text-align: left;
  overflow: hidden;
}
.theme-card:hover { border-color: #2C4A3E; transform: translateY(-2px); }
.theme-card.active {
  border: 2px solid #C9442F;
}
.theme-preview {
  height: 60px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 8px;
}
.theme-accent {
  width: 18px;
  height: 18px;
  border-radius: 2px;
}
.theme-name {
  font-size: 13px;
  font-weight: 500;
  padding: 8px 10px 4px;
}
.theme-hex {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #6B5F49;
  padding: 0 10px 8px;
}

.custom-color-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 14px;
}
.ccr-field label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #6B5F49;
}
.ccr-input {
  display: flex;
  gap: 6px;
  align-items: center;
}
.ccr-input input[type=color] {
  width: 40px;
  height: 36px;
  border: 1px solid #C9BFA8;
  cursor: pointer;
  padding: 2px;
  background: #FFFFFF;
}
.ccr-input input[type=text] {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #C9BFA8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  background: #FFFFFF;
  outline: none;
}
.ccr-input input[type=text]:focus { border-color: #2C4A3E; }

.color-preview-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px dashed #D4C9B0;
}
.cpr-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #6B5F49;
  letter-spacing: 1px;
  margin-right: 8px;
}
.cpr-swatch {
  width: 24px;
  height: 24px;
  border: 1px solid #D4C9B0;
  display: inline-block;
}
.cpr-hex {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #1F1B16;
  margin-right: 12px;
}

/* 匯出區四欄 */
.export-grid.four {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.export-card.featured {
  border: 2px solid #C9442F;
  background: #FFFFFF;
  position: relative;
}
.export-badge {
  position: absolute;
  top: -10px;
  left: 12px;
  background: #C9442F;
  color: #FFFFFF;
  font-size: 10px;
  letter-spacing: 1px;
  padding: 3px 10px;
  font-family: 'JetBrains Mono', monospace;
}
.export-card .btn-preview {
  width: 100%;
  padding: 10px;
  background: #FFFFFF;
  color: #C9442F;
  border: 1px solid #C9442F;
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
  letter-spacing: 1px;
  margin-bottom: 6px;
}
.export-card .btn-preview:hover { background: #C9442F; color: #FFFFFF; }
.export-tip {
  margin-top: 20px;
  padding: 14px 20px;
  background: #FEF6E4;
  border-left: 3px solid #D97706;
  font-size: 13px;
  color: #5C3D1F;
  line-height: 1.7;
}
.export-tip strong { color: #1F1B16; }

/* logo 可點擊 */
.logo-clickable {
  cursor: pointer;
  user-select: none;
  transition: opacity .15s;
}
.logo-clickable:hover { opacity: 0.85; }
.logo-clickable:hover .logo-mark { color: #FFD8A8; }

/* 風格 / 色系 mode 切換 */
.picker-mode {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.pm-btn {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: all .15s;
  color: #1F1B16;
}
.pm-btn:hover { border-color: #2C4A3E; }
.pm-btn.active {
  background: #1F1B16;
  color: #F5F0E6;
  border-color: #1F1B16;
}

/* 風格 grid */
.style-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
}
.style-card {
  padding: 16px 14px;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all .15s;
}
.style-card:hover {
  border-color: #2C4A3E;
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 #2C4A3E22;
}
.style-card.active {
  border: 2px solid #C9442F;
  background: #FBF8F1;
  padding: 15px 13px;
}
.style-emoji {
  font-size: 28px;
  margin-bottom: 8px;
}
.style-name {
  font-family: 'Noto Serif TC', serif;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #1F1B16;
}
.style-desc {
  font-size: 11px;
  color: #6B5F49;
  line-height: 1.4;
}

/* 色系 grid */
.palette-group {
  margin-bottom: 16px;
}
.palette-group-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  color: #6B5F49;
  margin-bottom: 8px;
}
.palette-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}
.palette-card {
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  overflow: hidden;
  transition: all .15s;
}
.palette-card:hover {
  border-color: #2C4A3E;
  transform: translateY(-2px);
}
.palette-card.active {
  border: 2px solid #C9442F;
}
.palette-preview {
  height: 50px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 6px;
}
.palette-accent {
  width: 16px;
  height: 16px;
  border-radius: 2px;
}
.palette-name {
  font-size: 12px;
  font-weight: 500;
  padding: 6px 8px;
  text-align: center;
}
`;di.createRoot(document.getElementById("root")).render(a.jsx(ef,{}));
