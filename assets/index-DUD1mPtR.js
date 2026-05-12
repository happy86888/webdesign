(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tl={exports:{}},Zi={},Pl={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),Gu=Symbol.for("react.portal"),Ju=Symbol.for("react.fragment"),Yu=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),qu=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.memo"),rd=Symbol.for("react.lazy"),Fa=Symbol.iterator;function id(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var Ol={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dl=Object.assign,Il={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=Il,this.updater=n||Ol}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $l(){}$l.prototype=Jn.prototype;function zs(e,t,n){this.props=e,this.context=t,this.refs=Il,this.updater=n||Ol}var js=zs.prototype=new $l;js.constructor=zs;Dl(js,Jn.prototype);js.isPureReactComponent=!0;var Sa=Array.isArray,Rl=Object.prototype.hasOwnProperty,As={current:null},Ll={key:!0,ref:!0,__self:!0,__source:!0};function Ml(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Rl.call(t,r)&&!Ll.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),g=0;g<a;g++)l[g]=arguments[g+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Lr,type:e,key:o,ref:s,props:i,_owner:As.current}}function od(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function sd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ca=/\/+/g;function co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sd(""+e.key):t.toString(36)}function di(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Lr:case Gu:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+co(s,0):r,Sa(i)?(n="",e!=null&&(n=e.replace(Ca,"$&/")+"/"),di(i,t,n,"",function(g){return g})):i!=null&&(Bs(i)&&(i=od(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ca,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Sa(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+co(o,a);s+=di(o,t,n,l,i)}else if(l=id(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+co(o,a++),s+=di(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Zr(e,t,n){if(e==null)return e;var r=[],i=0;return di(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},pi={transition:null},ld={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:pi,ReactCurrentOwner:As};function Ul(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!Bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=Jn;pe.Fragment=Ju;pe.Profiler=Ku;pe.PureComponent=zs;pe.StrictMode=Yu;pe.Suspense=td;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ld;pe.act=Ul;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dl({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=As.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Rl.call(t,l)&&!Ll.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var g=0;g<l;g++)a[g]=arguments[g+2];r.children=a}return{$$typeof:Lr,type:e.type,key:i,ref:o,props:r,_owner:s}};pe.createContext=function(e){return e={$$typeof:qu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xu,_context:e},e.Consumer=e};pe.createElement=Ml;pe.createFactory=function(e){var t=Ml.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:ed,render:e}};pe.isValidElement=Bs;pe.lazy=function(e){return{$$typeof:rd,_payload:{_status:-1,_result:e},_init:ad}};pe.memo=function(e,t){return{$$typeof:nd,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=pi.transition;pi.transition={};try{e()}finally{pi.transition=t}};pe.unstable_act=Ul;pe.useCallback=function(e,t){return Ze.current.useCallback(e,t)};pe.useContext=function(e){return Ze.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};pe.useEffect=function(e,t){return Ze.current.useEffect(e,t)};pe.useId=function(){return Ze.current.useId()};pe.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Ze.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};pe.useRef=function(e){return Ze.current.useRef(e)};pe.useState=function(e){return Ze.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return Ze.current.useTransition()};pe.version="18.3.1";Pl.exports=pe;var Te=Pl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=Te,ud=Symbol.for("react.element"),dd=Symbol.for("react.fragment"),pd=Object.prototype.hasOwnProperty,fd=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hd={key:!0,ref:!0,__self:!0,__source:!0};function Wl(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)pd.call(t,r)&&!hd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ud,type:e,key:o,ref:s,props:i,_owner:fd.current}}Zi.Fragment=dd;Zi.jsx=Wl;Zi.jsxs=Wl;Tl.exports=Zi;var x=Tl.exports,Do={},Hl={exports:{}},st={},Vl={exports:{}},Zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(G,$){var q=G.length;G.push($);e:for(;0<q;){var P=q-1>>>1,T=G[P];if(0<i(T,$))G[P]=$,G[q]=T,q=P;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var $=G[0],q=G.pop();if(q!==$){G[0]=q;e:for(var P=0,T=G.length,le=T>>>1;P<le;){var ne=2*(P+1)-1,ee=G[ne],ye=ne+1,be=G[ye];if(0>i(ee,q))ye<T&&0>i(be,ee)?(G[P]=be,G[ye]=q,P=ye):(G[P]=ee,G[ne]=q,P=ne);else if(ye<T&&0>i(be,q))G[P]=be,G[ye]=q,P=ye;else break e}}return $}function i(G,$){var q=G.sortIndex-$.sortIndex;return q!==0?q:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],g=[],p=1,v=null,f=3,h=!1,k=!1,m=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(G){for(var $=n(g);$!==null;){if($.callback===null)r(g);else if($.startTime<=G)r(g),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(g)}}function S(G){if(m=!1,_(G),!k)if(n(l)!==null)k=!0,ce(C);else{var $=n(g);$!==null&&Y(S,$.startTime-G)}}function C(G,$){k=!1,m&&(m=!1,d(I),I=-1),h=!0;var q=f;try{for(_($),v=n(l);v!==null&&(!(v.expirationTime>$)||G&&!ae());){var P=v.callback;if(typeof P=="function"){v.callback=null,f=v.priorityLevel;var T=P(v.expirationTime<=$);$=e.unstable_now(),typeof T=="function"?v.callback=T:v===n(l)&&r(l),_($)}else r(l);v=n(l)}if(v!==null)var le=!0;else{var ne=n(g);ne!==null&&Y(S,ne.startTime-$),le=!1}return le}finally{v=null,f=q,h=!1}}var j=!1,z=null,I=-1,D=5,U=-1;function ae(){return!(e.unstable_now()-U<D)}function Q(){if(z!==null){var G=e.unstable_now();U=G;var $=!0;try{$=z(!0,G)}finally{$?L():(j=!1,z=null)}}else j=!1}var L;if(typeof u=="function")L=function(){u(Q)};else if(typeof MessageChannel<"u"){var y=new MessageChannel,Z=y.port2;y.port1.onmessage=Q,L=function(){Z.postMessage(null)}}else L=function(){b(Q,0)};function ce(G){z=G,j||(j=!0,L())}function Y(G,$){I=b(function(){G(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){k||h||(k=!0,ce(C))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(G){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var q=f;f=$;try{return G()}finally{f=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var q=f;f=G;try{return $()}finally{f=q}},e.unstable_scheduleCallback=function(G,$,q){var P=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?P+q:P):q=P,G){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=q+T,G={id:p++,callback:$,priorityLevel:G,startTime:q,expirationTime:T,sortIndex:-1},q>P?(G.sortIndex=q,t(g,G),n(l)===null&&G===n(g)&&(m?(d(I),I=-1):m=!0,Y(S,q-P))):(G.sortIndex=T,t(l,G),k||h||(k=!0,ce(C))),G},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(G){var $=f;return function(){var q=f;f=$;try{return G.apply(this,arguments)}finally{f=q}}}})(Zl);Vl.exports=Zl;var md=Vl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=Te,ot=md;function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gl=new Set,Fr={};function vn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(Fr[e]=t,e=0;e<t.length;e++)Gl.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=Object.prototype.hasOwnProperty,yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qa={},Ea={};function vd(e){return Io.call(Ea,e)?!0:Io.call(Qa,e)?!1:yd.test(e)?Ea[e]=!0:(Qa[e]=!0,!1)}function xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _d(e,t,n,r){if(t===null||typeof t>"u"||xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ts=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ts,Ps);$e[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ts,Ps);$e[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ts,Ps);$e[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Os(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_d(t,n,i,r)&&(n=null),r||i===null?vd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),bn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Ds=Symbol.for("react.strict_mode"),$o=Symbol.for("react.profiler"),Jl=Symbol.for("react.provider"),Yl=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),Ro=Symbol.for("react.suspense"),Lo=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Kl=Symbol.for("react.offscreen"),Na=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,uo;function dr(e){if(uo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uo=t&&t[1]||""}return`
`+uo+e}var po=!1;function fo(e,t){if(!e||po)return"";po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{po=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function kd(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=fo(e.type,!1),e;case 11:return e=fo(e.type.render,!1),e;case 1:return e=fo(e.type,!0),e;default:return""}}function Mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case bn:return"Portal";case $o:return"Profiler";case Ds:return"StrictMode";case Ro:return"Suspense";case Lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yl:return(e.displayName||"Context")+".Consumer";case Jl:return(e._context.displayName||"Context")+".Provider";case Is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:Mo(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Mo(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mo(t);case 8:return t===Ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bd(e){var t=Xl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=bd(e))}function ql(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uo(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function za(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ec(e,t){t=t.checked,t!=null&&Os(e,"checked",t,!1)}function Wo(e,t){ec(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ho(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ho(e,t,n){(t!=="number"||bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(K(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Aa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(K(92));if(pr(n)){if(1<n.length)throw Error(K(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function tc(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fd=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){Fd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function ic(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ic(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sd=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Go(e,t){if(t){if(Sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(K(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(K(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(t.style!=null&&typeof t.style!="object")throw Error(K(62))}}function Jo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yo=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ko=null,On=null,Dn=null;function Ta(e){if(e=Wr(e)){if(typeof Ko!="function")throw Error(K(280));var t=e.stateNode;t&&(t=Xi(t),Ko(e.stateNode,e.type,t))}}function sc(e){On?Dn?Dn.push(e):Dn=[e]:On=e}function ac(){if(On){var e=On,t=Dn;if(Dn=On=null,Ta(e),t)for(e=0;e<t.length;e++)Ta(t[e])}}function lc(e,t){return e(t)}function cc(){}var ho=!1;function uc(e,t,n){if(ho)return e(t,n);ho=!0;try{return lc(e,t,n)}finally{ho=!1,(On!==null||Dn!==null)&&(cc(),ac())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Xo=!1;if(Tt)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{Xo=!1}function Cd(e,t,n,r,i,o,s,a,l){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(p){this.onError(p)}}var gr=!1,Fi=null,Si=!1,qo=null,Qd={onError:function(e){gr=!0,Fi=e}};function Ed(e,t,n,r,i,o,s,a,l){gr=!1,Fi=null,Cd.apply(Qd,arguments)}function Nd(e,t,n,r,i,o,s,a,l){if(Ed.apply(this,arguments),gr){if(gr){var g=Fi;gr=!1,Fi=null}else throw Error(K(198));Si||(Si=!0,qo=g)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pa(e){if(xn(e)!==e)throw Error(K(188))}function zd(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pa(i),e;if(o===r)return Pa(i),t;o=o.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function pc(e){return e=zd(e),e!==null?fc(e):null}function fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fc(e);if(t!==null)return t;e=e.sibling}return null}var hc=ot.unstable_scheduleCallback,Oa=ot.unstable_cancelCallback,jd=ot.unstable_shouldYield,Ad=ot.unstable_requestPaint,Ee=ot.unstable_now,Bd=ot.unstable_getCurrentPriorityLevel,Ls=ot.unstable_ImmediatePriority,mc=ot.unstable_UserBlockingPriority,Ci=ot.unstable_NormalPriority,Td=ot.unstable_LowPriority,gc=ot.unstable_IdlePriority,Gi=null,Ct=null;function Pd(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Id,Od=Math.log,Dd=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Od(e)/Dd|0)|0}var Kr=64,Xr=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=fr(a):(o&=s,o!==0&&(r=fr(o)))}else s=n&~i,s!==0?r=fr(s):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function $d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-xt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=$d(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function es(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=Kr;return Kr<<=1,!(Kr&4194240)&&(Kr=64),e}function mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ms(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ve=0;function vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xc,Us,_c,kc,wc,ts=!1,qr=[],Vt=null,Zt=null,Gt=null,Qr=new Map,Er=new Map,Mt=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wr(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ud(e,t,n,r,i){switch(t){case"focusin":return Vt=or(Vt,e,t,n,r,i),!0;case"dragenter":return Zt=or(Zt,e,t,n,r,i),!0;case"mouseover":return Gt=or(Gt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qr.set(o,or(Qr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Er.set(o,or(Er.get(o)||null,e,t,n,r,i)),!0}return!1}function bc(e){var t=ln(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=dc(n),t!==null){e.blockedOn=t,wc(e.priority,function(){_c(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ns(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yo=r,n.target.dispatchEvent(r),Yo=null}else return t=Wr(n),t!==null&&Us(t),e.blockedOn=n,!1;t.shift()}return!0}function Ia(e,t,n){fi(e)&&n.delete(t)}function Wd(){ts=!1,Vt!==null&&fi(Vt)&&(Vt=null),Zt!==null&&fi(Zt)&&(Zt=null),Gt!==null&&fi(Gt)&&(Gt=null),Qr.forEach(Ia),Er.forEach(Ia)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,Wd)))}function Nr(e){function t(i){return sr(i,e)}if(0<qr.length){sr(qr[0],e);for(var n=1;n<qr.length;n++){var r=qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&sr(Vt,e),Zt!==null&&sr(Zt,e),Gt!==null&&sr(Gt,e),Qr.forEach(t),Er.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)bc(n),n.blockedOn===null&&Mt.shift()}var In=It.ReactCurrentBatchConfig,Ei=!0;function Hd(e,t,n,r){var i=ve,o=In.transition;In.transition=null;try{ve=1,Ws(e,t,n,r)}finally{ve=i,In.transition=o}}function Vd(e,t,n,r){var i=ve,o=In.transition;In.transition=null;try{ve=4,Ws(e,t,n,r)}finally{ve=i,In.transition=o}}function Ws(e,t,n,r){if(Ei){var i=ns(e,t,n,r);if(i===null)So(e,t,r,Ni,n),Da(e,r);else if(Ud(i,e,t,n,r))r.stopPropagation();else if(Da(e,r),t&4&&-1<Md.indexOf(e)){for(;i!==null;){var o=Wr(i);if(o!==null&&xc(o),o=ns(e,t,n,r),o===null&&So(e,t,r,Ni,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else So(e,t,r,null,n)}}var Ni=null;function ns(e,t,n,r){if(Ni=null,e=Rs(r),e=ln(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function Fc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bd()){case Ls:return 1;case mc:return 4;case Ci:case Td:return 16;case gc:return 536870912;default:return 16}default:return 16}}var Wt=null,Hs=null,hi=null;function Sc(){if(hi)return hi;var e,t=Hs,n=t.length,r,i="value"in Wt?Wt.value:Wt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return hi=i.slice(e,1<r?1-r:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function $a(){return!1}function at(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ei:$a,this.isPropagationStopped=$a,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=at(Yn),Ur=Ce({},Yn,{view:0,detail:0}),Zd=at(Ur),go,yo,ar,Ji=Ce({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(go=e.screenX-ar.screenX,yo=e.screenY-ar.screenY):yo=go=0,ar=e),go)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),Ra=at(Ji),Gd=Ce({},Ji,{dataTransfer:0}),Jd=at(Gd),Yd=Ce({},Ur,{relatedTarget:0}),vo=at(Yd),Kd=Ce({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=at(Kd),qd=Ce({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ep=at(qd),tp=Ce({},Yn,{data:0}),La=at(tp),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function Zs(){return op}var sp=Ce({},Ur,{key:function(e){if(e.key){var t=np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ap=at(sp),lp=Ce({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=at(lp),cp=Ce({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),up=at(cp),dp=Ce({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pp=at(dp),fp=Ce({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hp=at(fp),mp=[9,13,27,32],Gs=Tt&&"CompositionEvent"in window,yr=null;Tt&&"documentMode"in document&&(yr=document.documentMode);var gp=Tt&&"TextEvent"in window&&!yr,Cc=Tt&&(!Gs||yr&&8<yr&&11>=yr),Ua=" ",Wa=!1;function Qc(e,t){switch(e){case"keyup":return mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function yp(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Wa=!0,Ua);case"textInput":return e=t.data,e===Ua&&Wa?null:e;default:return null}}function vp(e,t){if(Sn)return e==="compositionend"||!Gs&&Qc(e,t)?(e=Sc(),hi=Hs=Wt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xp[e.type]:t==="textarea"}function Nc(e,t,n,r){sc(r),t=zi(t,"onChange"),0<t.length&&(n=new Vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,zr=null;function _p(e){Rc(e,0)}function Yi(e){var t=En(e);if(ql(t))return e}function kp(e,t){if(e==="change")return t}var zc=!1;if(Tt){var xo;if(Tt){var _o="oninput"in document;if(!_o){var Va=document.createElement("div");Va.setAttribute("oninput","return;"),_o=typeof Va.oninput=="function"}xo=_o}else xo=!1;zc=xo&&(!document.documentMode||9<document.documentMode)}function Za(){vr&&(vr.detachEvent("onpropertychange",jc),zr=vr=null)}function jc(e){if(e.propertyName==="value"&&Yi(zr)){var t=[];Nc(t,zr,e,Rs(e)),uc(_p,t)}}function wp(e,t,n){e==="focusin"?(Za(),vr=t,zr=n,vr.attachEvent("onpropertychange",jc)):e==="focusout"&&Za()}function bp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(zr)}function Fp(e,t){if(e==="click")return Yi(t)}function Sp(e,t){if(e==="input"||e==="change")return Yi(t)}function Cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Cp;function jr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Io.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function Ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Ga(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ga(n)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bc(){for(var e=window,t=bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bi(e.document)}return t}function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qp(e){var t=Bc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ac(n.ownerDocument.documentElement,n)){if(r!==null&&Js(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ja(n,o);var s=Ja(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ep=Tt&&"documentMode"in document&&11>=document.documentMode,Cn=null,rs=null,xr=null,is=!1;function Ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;is||Cn==null||Cn!==bi(r)||(r=Cn,"selectionStart"in r&&Js(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&jr(xr,r)||(xr=r,r=zi(rs,"onSelect"),0<r.length&&(t=new Vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},ko={},Tc={};Tt&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Ki(e){if(ko[e])return ko[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tc)return ko[e]=t[n];return e}var Pc=Ki("animationend"),Oc=Ki("animationiteration"),Dc=Ki("animationstart"),Ic=Ki("transitionend"),$c=new Map,Ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){$c.set(e,t),vn(t,[e])}for(var wo=0;wo<Ka.length;wo++){var bo=Ka[wo],Np=bo.toLowerCase(),zp=bo[0].toUpperCase()+bo.slice(1);nn(Np,"on"+zp)}nn(Pc,"onAnimationEnd");nn(Oc,"onAnimationIteration");nn(Dc,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Ic,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jp=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Xa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nd(r,t,void 0,e),e.currentTarget=null}function Rc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,g=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Xa(i,a,g),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,g=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Xa(i,a,g),o=l}}}if(Si)throw e=qo,Si=!1,qo=null,e}function _e(e,t){var n=t[cs];n===void 0&&(n=t[cs]=new Set);var r=e+"__bubble";n.has(r)||(Lc(t,e,2,!1),n.add(r))}function Fo(e,t,n){var r=0;t&&(r|=4),Lc(n,e,r,t)}var ni="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[ni]){e[ni]=!0,Gl.forEach(function(n){n!=="selectionchange"&&(jp.has(n)||Fo(n,!1,e),Fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ni]||(t[ni]=!0,Fo("selectionchange",!1,t))}}function Lc(e,t,n,r){switch(Fc(t)){case 1:var i=Hd;break;case 4:i=Vd;break;default:i=Ws}n=i.bind(null,t,n,e),i=void 0,!Xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function So(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ln(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}uc(function(){var g=o,p=Rs(n),v=[];e:{var f=$c.get(e);if(f!==void 0){var h=Vs,k=e;switch(e){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":h=ap;break;case"focusin":k="focus",h=vo;break;case"focusout":k="blur",h=vo;break;case"beforeblur":case"afterblur":h=vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=up;break;case Pc:case Oc:case Dc:h=Xd;break;case Ic:h=pp;break;case"scroll":h=Zd;break;case"wheel":h=hp;break;case"copy":case"cut":case"paste":h=ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ma}var m=(t&4)!==0,b=!m&&e==="scroll",d=m?f!==null?f+"Capture":null:f;m=[];for(var u=g,_;u!==null;){_=u;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=Cr(u,d),S!=null&&m.push(Br(u,S,_)))),b)break;u=u.return}0<m.length&&(f=new h(f,k,null,n,p),v.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Yo&&(k=n.relatedTarget||n.fromElement)&&(ln(k)||k[Pt]))break e;if((h||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,h?(k=n.relatedTarget||n.toElement,h=g,k=k?ln(k):null,k!==null&&(b=xn(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(h=null,k=g),h!==k)){if(m=Ra,S="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(m=Ma,S="onPointerLeave",d="onPointerEnter",u="pointer"),b=h==null?f:En(h),_=k==null?f:En(k),f=new m(S,u+"leave",h,n,p),f.target=b,f.relatedTarget=_,S=null,ln(p)===g&&(m=new m(d,u+"enter",k,n,p),m.target=_,m.relatedTarget=b,S=m),b=S,h&&k)t:{for(m=h,d=k,u=0,_=m;_;_=kn(_))u++;for(_=0,S=d;S;S=kn(S))_++;for(;0<u-_;)m=kn(m),u--;for(;0<_-u;)d=kn(d),_--;for(;u--;){if(m===d||d!==null&&m===d.alternate)break t;m=kn(m),d=kn(d)}m=null}else m=null;h!==null&&qa(v,f,h,m,!1),k!==null&&b!==null&&qa(v,b,k,m,!0)}}e:{if(f=g?En(g):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=kp;else if(Ha(f))if(zc)C=Sp;else{C=bp;var j=wp}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Fp);if(C&&(C=C(e,g))){Nc(v,C,n,p);break e}j&&j(e,f,g),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&Ho(f,"number",f.value)}switch(j=g?En(g):window,e){case"focusin":(Ha(j)||j.contentEditable==="true")&&(Cn=j,rs=g,xr=null);break;case"focusout":xr=rs=Cn=null;break;case"mousedown":is=!0;break;case"contextmenu":case"mouseup":case"dragend":is=!1,Ya(v,n,p);break;case"selectionchange":if(Ep)break;case"keydown":case"keyup":Ya(v,n,p)}var z;if(Gs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Sn?Qc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Cc&&n.locale!=="ko"&&(Sn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Sn&&(z=Sc()):(Wt=p,Hs="value"in Wt?Wt.value:Wt.textContent,Sn=!0)),j=zi(g,I),0<j.length&&(I=new La(I,e,null,n,p),v.push({event:I,listeners:j}),z?I.data=z:(z=Ec(n),z!==null&&(I.data=z)))),(z=gp?yp(e,n):vp(e,n))&&(g=zi(g,"onBeforeInput"),0<g.length&&(p=new La("onBeforeInput","beforeinput",null,n,p),v.push({event:p,listeners:g}),p.data=z))}Rc(v,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Cr(e,n),o!=null&&r.unshift(Br(e,o,i)),o=Cr(e,t),o!=null&&r.push(Br(e,o,i))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qa(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,g=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&g!==null&&(a=g,i?(l=Cr(n,o),l!=null&&s.unshift(Br(n,l,a))):i||(l=Cr(n,o),l!=null&&s.push(Br(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ap=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function el(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Bp,"")}function ri(e,t,n){if(t=el(t),el(e)!==t&&n)throw Error(K(425))}function ji(){}var os=null,ss=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,tl=typeof Promise=="function"?Promise:void 0,Pp=typeof queueMicrotask=="function"?queueMicrotask:typeof tl<"u"?function(e){return tl.resolve(null).then(e).catch(Op)}:ls;function Op(e){setTimeout(function(){throw e})}function Co(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nr(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),St="__reactFiber$"+Kn,Tr="__reactProps$"+Kn,Pt="__reactContainer$"+Kn,cs="__reactEvents$"+Kn,Dp="__reactListeners$"+Kn,Ip="__reactHandles$"+Kn;function ln(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nl(e);e!==null;){if(n=e[St])return n;e=nl(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[St]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(K(33))}function Xi(e){return e[Tr]||null}var us=[],Nn=-1;function rn(e){return{current:e}}function ke(e){0>Nn||(e.current=us[Nn],us[Nn]=null,Nn--)}function xe(e,t){Nn++,us[Nn]=e.current,e.current=t}var tn={},Ue=rn(tn),Ke=rn(!1),fn=tn;function Un(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Ai(){ke(Ke),ke(Ue)}function rl(e,t,n){if(Ue.current!==tn)throw Error(K(168));xe(Ue,t),xe(Ke,n)}function Mc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(K(108,wd(e)||"Unknown",i));return Ce({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,fn=Ue.current,xe(Ue,e),xe(Ke,Ke.current),!0}function il(e,t,n){var r=e.stateNode;if(!r)throw Error(K(169));n?(e=Mc(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,ke(Ke),ke(Ue),xe(Ue,e)):ke(Ke),xe(Ke,n)}var zt=null,qi=!1,Qo=!1;function Uc(e){zt===null?zt=[e]:zt.push(e)}function $p(e){qi=!0,Uc(e)}function on(){if(!Qo&&zt!==null){Qo=!0;var e=0,t=ve;try{var n=zt;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,qi=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),hc(Ls,on),i}finally{ve=t,Qo=!1}}return null}var zn=[],jn=0,Ti=null,Pi=0,lt=[],ct=0,hn=null,jt=1,At="";function sn(e,t){zn[jn++]=Pi,zn[jn++]=Ti,Ti=e,Pi=t}function Wc(e,t,n){lt[ct++]=jt,lt[ct++]=At,lt[ct++]=hn,hn=e;var r=jt;e=At;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,jt=1<<32-xt(t)+i|n<<i|r,At=o+e}else jt=1<<o|n<<i|r,At=e}function Ys(e){e.return!==null&&(sn(e,1),Wc(e,1,0))}function Ks(e){for(;e===Ti;)Ti=zn[--jn],zn[jn]=null,Pi=zn[--jn],zn[jn]=null;for(;e===hn;)hn=lt[--ct],lt[ct]=null,At=lt[--ct],lt[ct]=null,jt=lt[--ct],lt[ct]=null}var it=null,rt=null,we=!1,vt=null;function Hc(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ol(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,rt=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:jt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,rt=null,!0):!1;default:return!1}}function ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if(we){var t=rt;if(t){var n=t;if(!ol(e,t)){if(ds(e))throw Error(K(418));t=Jt(n.nextSibling);var r=it;t&&ol(e,t)?Hc(r,n):(e.flags=e.flags&-4097|2,we=!1,it=e)}}else{if(ds(e))throw Error(K(418));e.flags=e.flags&-4097|2,we=!1,it=e}}}function sl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function ii(e){if(e!==it)return!1;if(!we)return sl(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=rt)){if(ds(e))throw Vc(),Error(K(418));for(;t;)Hc(e,t),t=Jt(t.nextSibling)}if(sl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=it?Jt(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=rt;e;)e=Jt(e.nextSibling)}function Wn(){rt=it=null,we=!1}function Xs(e){vt===null?vt=[e]:vt.push(e)}var Rp=It.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,e))}return e}function oi(e,t){throw e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function al(e){var t=e._init;return t(e._payload)}function Zc(e){function t(d,u){if(e){var _=d.deletions;_===null?(d.deletions=[u],d.flags|=16):_.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=qt(d,u),d.index=0,d.sibling=null,d}function o(d,u,_){return d.index=_,e?(_=d.alternate,_!==null?(_=_.index,_<u?(d.flags|=2,u):_):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,_,S){return u===null||u.tag!==6?(u=To(_,d.mode,S),u.return=d,u):(u=i(u,_),u.return=d,u)}function l(d,u,_,S){var C=_.type;return C===Fn?p(d,u,_.props.children,S,_.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rt&&al(C)===u.type)?(S=i(u,_.props),S.ref=lr(d,u,_),S.return=d,S):(S=wi(_.type,_.key,_.props,null,d.mode,S),S.ref=lr(d,u,_),S.return=d,S)}function g(d,u,_,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==_.containerInfo||u.stateNode.implementation!==_.implementation?(u=Po(_,d.mode,S),u.return=d,u):(u=i(u,_.children||[]),u.return=d,u)}function p(d,u,_,S,C){return u===null||u.tag!==7?(u=pn(_,d.mode,S,C),u.return=d,u):(u=i(u,_),u.return=d,u)}function v(d,u,_){if(typeof u=="string"&&u!==""||typeof u=="number")return u=To(""+u,d.mode,_),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Gr:return _=wi(u.type,u.key,u.props,null,d.mode,_),_.ref=lr(d,null,u),_.return=d,_;case bn:return u=Po(u,d.mode,_),u.return=d,u;case Rt:var S=u._init;return v(d,S(u._payload),_)}if(pr(u)||rr(u))return u=pn(u,d.mode,_,null),u.return=d,u;oi(d,u)}return null}function f(d,u,_,S){var C=u!==null?u.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(d,u,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Gr:return _.key===C?l(d,u,_,S):null;case bn:return _.key===C?g(d,u,_,S):null;case Rt:return C=_._init,f(d,u,C(_._payload),S)}if(pr(_)||rr(_))return C!==null?null:p(d,u,_,S,null);oi(d,_)}return null}function h(d,u,_,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,a(u,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gr:return d=d.get(S.key===null?_:S.key)||null,l(u,d,S,C);case bn:return d=d.get(S.key===null?_:S.key)||null,g(u,d,S,C);case Rt:var j=S._init;return h(d,u,_,j(S._payload),C)}if(pr(S)||rr(S))return d=d.get(_)||null,p(u,d,S,C,null);oi(u,S)}return null}function k(d,u,_,S){for(var C=null,j=null,z=u,I=u=0,D=null;z!==null&&I<_.length;I++){z.index>I?(D=z,z=null):D=z.sibling;var U=f(d,z,_[I],S);if(U===null){z===null&&(z=D);break}e&&z&&U.alternate===null&&t(d,z),u=o(U,u,I),j===null?C=U:j.sibling=U,j=U,z=D}if(I===_.length)return n(d,z),we&&sn(d,I),C;if(z===null){for(;I<_.length;I++)z=v(d,_[I],S),z!==null&&(u=o(z,u,I),j===null?C=z:j.sibling=z,j=z);return we&&sn(d,I),C}for(z=r(d,z);I<_.length;I++)D=h(z,d,I,_[I],S),D!==null&&(e&&D.alternate!==null&&z.delete(D.key===null?I:D.key),u=o(D,u,I),j===null?C=D:j.sibling=D,j=D);return e&&z.forEach(function(ae){return t(d,ae)}),we&&sn(d,I),C}function m(d,u,_,S){var C=rr(_);if(typeof C!="function")throw Error(K(150));if(_=C.call(_),_==null)throw Error(K(151));for(var j=C=null,z=u,I=u=0,D=null,U=_.next();z!==null&&!U.done;I++,U=_.next()){z.index>I?(D=z,z=null):D=z.sibling;var ae=f(d,z,U.value,S);if(ae===null){z===null&&(z=D);break}e&&z&&ae.alternate===null&&t(d,z),u=o(ae,u,I),j===null?C=ae:j.sibling=ae,j=ae,z=D}if(U.done)return n(d,z),we&&sn(d,I),C;if(z===null){for(;!U.done;I++,U=_.next())U=v(d,U.value,S),U!==null&&(u=o(U,u,I),j===null?C=U:j.sibling=U,j=U);return we&&sn(d,I),C}for(z=r(d,z);!U.done;I++,U=_.next())U=h(z,d,I,U.value,S),U!==null&&(e&&U.alternate!==null&&z.delete(U.key===null?I:U.key),u=o(U,u,I),j===null?C=U:j.sibling=U,j=U);return e&&z.forEach(function(Q){return t(d,Q)}),we&&sn(d,I),C}function b(d,u,_,S){if(typeof _=="object"&&_!==null&&_.type===Fn&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Gr:e:{for(var C=_.key,j=u;j!==null;){if(j.key===C){if(C=_.type,C===Fn){if(j.tag===7){n(d,j.sibling),u=i(j,_.props.children),u.return=d,d=u;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rt&&al(C)===j.type){n(d,j.sibling),u=i(j,_.props),u.ref=lr(d,j,_),u.return=d,d=u;break e}n(d,j);break}else t(d,j);j=j.sibling}_.type===Fn?(u=pn(_.props.children,d.mode,S,_.key),u.return=d,d=u):(S=wi(_.type,_.key,_.props,null,d.mode,S),S.ref=lr(d,u,_),S.return=d,d=S)}return s(d);case bn:e:{for(j=_.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===_.containerInfo&&u.stateNode.implementation===_.implementation){n(d,u.sibling),u=i(u,_.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Po(_,d.mode,S),u.return=d,d=u}return s(d);case Rt:return j=_._init,b(d,u,j(_._payload),S)}if(pr(_))return k(d,u,_,S);if(rr(_))return m(d,u,_,S);oi(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,_),u.return=d,d=u):(n(d,u),u=To(_,d.mode,S),u.return=d,d=u),s(d)):n(d,u)}return b}var Hn=Zc(!0),Gc=Zc(!1),Oi=rn(null),Di=null,An=null,qs=null;function ea(){qs=An=Di=null}function ta(e){var t=Oi.current;ke(Oi),e._currentValue=t}function fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){Di=e,qs=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(qs!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Di===null)throw Error(K(308));An=e,Di.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var cn=null;function na(e){cn===null?cn=[e]:cn.push(e)}function Jc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,na(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,na(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ms(e,n)}}function ll(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ii(e,t,n,r){var i=e.updateQueue;Lt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,g=l.next;l.next=null,s===null?o=g:s.next=g,s=l;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=g:a.next=g,p.lastBaseUpdate=l))}if(o!==null){var v=i.baseState;s=0,p=g=l=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,m=a;switch(f=t,h=n,m.tag){case 1:if(k=m.payload,typeof k=="function"){v=k.call(h,v,f);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=m.payload,f=typeof k=="function"?k.call(h,v,f):k,f==null)break e;v=Ce({},v,f);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(g=p=h,l=v):p=p.next=h,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(p===null&&(l=v),i.baseState=l,i.firstBaseUpdate=g,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);gn|=s,e.lanes=s,e.memoizedState=v}}function cl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var Hr={},Qt=rn(Hr),Pr=rn(Hr),Or=rn(Hr);function un(e){if(e===Hr)throw Error(K(174));return e}function ia(e,t){switch(xe(Or,t),xe(Pr,e),xe(Qt,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zo(t,e)}ke(Qt),xe(Qt,t)}function Vn(){ke(Qt),ke(Pr),ke(Or)}function Kc(e){un(Or.current);var t=un(Qt.current),n=Zo(t,e.type);t!==n&&(xe(Pr,e),xe(Qt,n))}function oa(e){Pr.current===e&&(ke(Qt),ke(Pr))}var Fe=rn(0);function $i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=[];function sa(){for(var e=0;e<Eo.length;e++)Eo[e]._workInProgressVersionPrimary=null;Eo.length=0}var yi=It.ReactCurrentDispatcher,No=It.ReactCurrentBatchConfig,mn=0,Se=null,Ae=null,Pe=null,Ri=!1,_r=!1,Dr=0,Lp=0;function Re(){throw Error(K(321))}function aa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function la(e,t,n,r,i,o){if(mn=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?Hp:Vp,e=n(r,i),_r){o=0;do{if(_r=!1,Dr=0,25<=o)throw Error(K(301));o+=1,Pe=Ae=null,t.updateQueue=null,yi.current=Zp,e=n(r,i)}while(_r)}if(yi.current=Li,t=Ae!==null&&Ae.next!==null,mn=0,Pe=Ae=Se=null,Ri=!1,t)throw Error(K(300));return e}function ca(){var e=Dr!==0;return Dr=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?Se.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function ft(){if(Ae===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Pe===null?Se.memoizedState:Pe.next;if(t!==null)Pe=t,Ae=e;else{if(e===null)throw Error(K(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Pe===null?Se.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Ir(e,t){return typeof t=="function"?t(e):t}function zo(e){var t=ft(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,g=o;do{var p=g.lane;if((mn&p)===p)l!==null&&(l=l.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var v={lane:p,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};l===null?(a=l=v,s=r):l=l.next=v,Se.lanes|=p,gn|=p}g=g.next}while(g!==null&&g!==o);l===null?s=r:l.next=a,kt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jo(e){var t=ft(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);kt(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xc(){}function qc(e,t){var n=Se,r=ft(),i=t(),o=!kt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ye=!0),r=r.queue,ua(nu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,$r(9,tu.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(K(349));mn&30||eu(n,t,i)}return i}function eu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tu(e,t,n,r){t.value=n,t.getSnapshot=r,ru(t)&&iu(e)}function nu(e,t,n){return n(function(){ru(t)&&iu(e)})}function ru(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function iu(e){var t=Ot(e,1);t!==null&&_t(t,e,1,-1)}function ul(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Wp.bind(null,Se,e),[t.memoizedState,e]}function $r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ou(){return ft().memoizedState}function vi(e,t,n,r){var i=bt();Se.flags|=e,i.memoizedState=$r(1|t,n,void 0,r===void 0?null:r)}function eo(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var s=Ae.memoizedState;if(o=s.destroy,r!==null&&aa(r,s.deps)){i.memoizedState=$r(t,n,o,r);return}}Se.flags|=e,i.memoizedState=$r(1|t,n,o,r)}function dl(e,t){return vi(8390656,8,e,t)}function ua(e,t){return eo(2048,8,e,t)}function su(e,t){return eo(4,2,e,t)}function au(e,t){return eo(4,4,e,t)}function lu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cu(e,t,n){return n=n!=null?n.concat([e]):null,eo(4,4,lu.bind(null,t,e),n)}function da(){}function uu(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function du(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pu(e,t,n){return mn&21?(kt(n,t)||(n=yc(),Se.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function Mp(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=No.transition;No.transition={};try{e(!1),t()}finally{ve=n,No.transition=r}}function fu(){return ft().memoizedState}function Up(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hu(e))mu(t,n);else if(n=Jc(e,t,n,r),n!==null){var i=Ve();_t(n,e,r,i),gu(n,t,r)}}function Wp(e,t,n){var r=Xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hu(e))mu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,s)){var l=t.interleaved;l===null?(i.next=i,na(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Jc(e,t,i,r),n!==null&&(i=Ve(),_t(n,e,r,i),gu(n,t,r))}}function hu(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function mu(e,t){_r=Ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ms(e,n)}}var Li={readContext:pt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Hp={readContext:pt,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:dl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vi(4194308,4,lu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return vi(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Up.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:ul,useDebugValue:da,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=ul(!1),t=e[0];return e=Mp.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=bt();if(we){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),Oe===null)throw Error(K(349));mn&30||eu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,dl(nu.bind(null,r,o,e),[e]),r.flags|=2048,$r(9,tu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bt(),t=Oe.identifierPrefix;if(we){var n=At,r=jt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vp={readContext:pt,useCallback:uu,useContext:pt,useEffect:ua,useImperativeHandle:cu,useInsertionEffect:su,useLayoutEffect:au,useMemo:du,useReducer:zo,useRef:ou,useState:function(){return zo(Ir)},useDebugValue:da,useDeferredValue:function(e){var t=ft();return pu(t,Ae.memoizedState,e)},useTransition:function(){var e=zo(Ir)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:qc,useId:fu,unstable_isNewReconciler:!1},Zp={readContext:pt,useCallback:uu,useContext:pt,useEffect:ua,useImperativeHandle:cu,useInsertionEffect:su,useLayoutEffect:au,useMemo:du,useReducer:jo,useRef:ou,useState:function(){return jo(Ir)},useDebugValue:da,useDeferredValue:function(e){var t=ft();return Ae===null?t.memoizedState=e:pu(t,Ae.memoizedState,e)},useTransition:function(){var e=jo(Ir)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:qc,useId:fu,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var to={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Xt(e),o=Bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(_t(t,e,i,r),gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Xt(e),o=Bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(_t(t,e,i,r),gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Xt(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(_t(t,e,r,n),gi(t,e,r))}};function pl(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,o):!0}function yu(e,t,n){var r=!1,i=tn,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=Xe(t)?fn:Ue.current,r=t.contextTypes,o=(r=r!=null)?Un(e,i):tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=to,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function fl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&to.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ra(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=Xe(t)?fn:Ue.current,i.context=Un(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(hs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&to.enqueueReplaceState(i,i.state,null),Ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=kd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ao(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gp=typeof WeakMap=="function"?WeakMap:Map;function vu(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ui||(Ui=!0,Cs=r),gs(e,t)},n}function xu(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gs(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function hl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cf.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var Jp=It.ReactCurrentOwner,Ye=!1;function He(e,t,n,r){t.child=e===null?Gc(t,null,n,r):Hn(t,e.child,n,r)}function yl(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=la(e,t,n,r,o,i),n=ca(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(we&&n&&Ys(t),t.flags|=1,He(e,t,r,i),t.child)}function vl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_u(e,t,o,r,i)):(e=wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function _u(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return ys(e,t,n,r,i)}function ku(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Tn,nt),nt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(Tn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(Tn,nt),nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(Tn,nt),nt|=r;return He(e,t,i,n),t.child}function wu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,r,i){var o=Xe(n)?fn:Ue.current;return o=Un(t,o),$n(t,i),n=la(e,t,n,r,o,i),r=ca(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(we&&r&&Ys(t),t.flags|=1,He(e,t,n,i),t.child)}function xl(e,t,n,r,i){if(Xe(n)){var o=!0;Bi(t)}else o=!1;if($n(t,i),t.stateNode===null)xi(e,t),yu(t,n,r),ms(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,g=n.contextType;typeof g=="object"&&g!==null?g=pt(g):(g=Xe(n)?fn:Ue.current,g=Un(t,g));var p=n.getDerivedStateFromProps,v=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==g)&&fl(t,s,r,g),Lt=!1;var f=t.memoizedState;s.state=f,Ii(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ke.current||Lt?(typeof p=="function"&&(hs(t,n,p,r),l=t.memoizedState),(a=Lt||pl(t,n,a,r,f,l,g))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=g,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Yc(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:gt(t.type,a),s.props=g,v=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Xe(n)?fn:Ue.current,l=Un(t,l));var h=n.getDerivedStateFromProps;(p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==v||f!==l)&&fl(t,s,r,l),Lt=!1,f=t.memoizedState,s.state=f,Ii(t,r,s,i);var k=t.memoizedState;a!==v||f!==k||Ke.current||Lt?(typeof h=="function"&&(hs(t,n,h,r),k=t.memoizedState),(g=Lt||pl(t,n,g,r,f,k,l)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=l,r=g):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return vs(e,t,n,r,o,i)}function vs(e,t,n,r,i,o){wu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&il(t,n,!1),Dt(e,t,o);r=t.stateNode,Jp.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hn(t,e.child,null,o),t.child=Hn(t,null,a,o)):He(e,t,a,o),t.memoizedState=r.state,i&&il(t,n,!0),t.child}function bu(e){var t=e.stateNode;t.pendingContext?rl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rl(e,t.context,!1),ia(e,t.containerInfo)}function _l(e,t,n,r,i){return Wn(),Xs(i),t.flags|=256,He(e,t,n,r),t.child}var xs={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fu(e,t,n){var r=t.pendingProps,i=Fe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(Fe,i&1),e===null)return ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=io(s,r,0,null),e=pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_s(n),t.memoizedState=xs,e):pa(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Yp(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=qt(a,o):(o=pn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?_s(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=xs,r}return o=e.child,e=o.sibling,r=qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pa(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&Xs(r),Hn(t,e.child,null,n),e=pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yp(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ao(Error(K(422))),si(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=io({mode:"visible",children:r.children},i,0,null),o=pn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hn(t,e.child,null,s),t.child.memoizedState=_s(s),t.memoizedState=xs,o);if(!(t.mode&1))return si(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(K(419)),r=Ao(o,r,void 0),si(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ye||a){if(r=Oe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),_t(r,e,i,-1))}return va(),r=Ao(Error(K(421))),si(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=uf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=Jt(i.nextSibling),it=t,we=!0,vt=null,e!==null&&(lt[ct++]=jt,lt[ct++]=At,lt[ct++]=hn,jt=e.id,At=e.overflow,hn=t),t=pa(t,r.children),t.flags|=4096,t)}function kl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fs(e.return,t,n)}function Bo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Su(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kl(e,n,t);else if(e.tag===19)kl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$i(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$i(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bo(t,!0,n,null,o);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kp(e,t,n){switch(t.tag){case 3:bu(t),Wn();break;case 5:Kc(t);break;case 1:Xe(t.type)&&Bi(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(Oi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?Fu(e,t,n):(xe(Fe,Fe.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);xe(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Su(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,ku(e,t,n)}return Dt(e,t,n)}var Cu,ks,Qu,Eu;Cu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ks=function(){};Qu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(Qt.current);var o=null;switch(n){case"input":i=Uo(e,i),r=Uo(e,r),o=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),o=[];break;case"textarea":i=Vo(e,i),r=Vo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}Go(n,r);var s;n=null;for(g in i)if(!r.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var a=i[g];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Fr.hasOwnProperty(g)?o||(o=[]):(o=o||[]).push(g,null));for(g in r){var l=r[g];if(a=i!=null?i[g]:void 0,r.hasOwnProperty(g)&&l!==a&&(l!=null||a!=null))if(g==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(g,n)),n=l;else g==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(g,l)):g==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(g,""+l):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(g)?(l!=null&&g==="onScroll"&&_e("scroll",e),o||a===l||(o=[])):(o=o||[]).push(g,l))}n&&(o=o||[]).push("style",n);var g=o;(t.updateQueue=g)&&(t.flags|=4)}};Eu=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xp(e,t,n){var r=t.pendingProps;switch(Ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Xe(t.type)&&Ai(),Le(t),null;case 3:return r=t.stateNode,Vn(),ke(Ke),ke(Ue),sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Ns(vt),vt=null))),ks(e,t),Le(t),null;case 5:oa(t);var i=un(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(K(166));return Le(t),null}if(e=un(Qt.current),ii(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[Tr]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)_e(hr[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":za(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":Aa(r,o),_e("invalid",r)}Go(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ri(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ri(r.textContent,a,e),i=["children",""+a]):Fr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&_e("scroll",r)}switch(n){case"input":Jr(r),ja(r,o,!0);break;case"textarea":Jr(r),Ba(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ji)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[Tr]=r,Cu(e,t,!1,!1),t.stateNode=e;e:{switch(s=Jo(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)_e(hr[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":za(e,r),i=Uo(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),_e("invalid",e);break;case"textarea":Aa(e,r),i=Vo(e,r),_e("invalid",e);break;default:i=r}Go(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?oc(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rc(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sr(e,l):typeof l=="number"&&Sr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&_e("scroll",e):l!=null&&Os(e,o,l,s))}switch(n){case"input":Jr(e),ja(e,r,!1);break;case"textarea":Jr(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Eu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(K(166));if(n=un(Or.current),un(Qt.current),ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:ri(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ri(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Le(t),null;case 13:if(ke(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&rt!==null&&t.mode&1&&!(t.flags&128))Vc(),Wn(),t.flags|=98560,o=!1;else if(o=ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(K(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(K(317));o[St]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else vt!==null&&(Ns(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?Be===0&&(Be=3):va())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Vn(),ks(e,t),e===null&&Ar(t.stateNode.containerInfo),Le(t),null;case 10:return ta(t.type._context),Le(t),null;case 17:return Xe(t.type)&&Ai(),Le(t),null;case 19:if(ke(Fe),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)cr(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=$i(e),s!==null){for(t.flags|=128,cr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Fe,Fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Gn&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304)}else{if(!r)if(e=$i(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!we)return Le(t),null}else 2*Ee()-o.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=Fe.current,xe(Fe,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(K(156,t.tag))}function qp(e,t){switch(Ks(t),t.tag){case 1:return Xe(t.type)&&Ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),ke(Ke),ke(Ue),sa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oa(t),null;case 13:if(ke(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Fe),null;case 4:return Vn(),null;case 10:return ta(t.type._context),null;case 22:case 23:return ya(),null;case 24:return null;default:return null}}var ai=!1,Me=!1,ef=typeof WeakSet=="function"?WeakSet:Set,se=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function ws(e,t,n){try{n()}catch(r){Qe(e,t,r)}}var wl=!1;function tf(e,t){if(os=Ei,e=Bc(),Js(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,g=0,p=0,v=e,f=null;t:for(;;){for(var h;v!==n||i!==0&&v.nodeType!==3||(a=s+i),v!==o||r!==0&&v.nodeType!==3||(l=s+r),v.nodeType===3&&(s+=v.nodeValue.length),(h=v.firstChild)!==null;)f=v,v=h;for(;;){if(v===e)break t;if(f===n&&++g===i&&(a=s),f===o&&++p===r&&(l=s),(h=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ss={focusedElem:e,selectionRange:n},Ei=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var m=k.memoizedProps,b=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?m:gt(t.type,m),b);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(S){Qe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return k=wl,wl=!1,k}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ws(t,n,o)}i=i.next}while(i!==r)}}function no(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nu(e){var t=e.alternate;t!==null&&(e.alternate=null,Nu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Tr],delete t[cs],delete t[Dp],delete t[Ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zu(e){return e.tag===5||e.tag===3||e.tag===4}function bl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}var De=null,yt=!1;function $t(e,t,n){for(n=n.child;n!==null;)ju(e,t,n),n=n.sibling}function ju(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 5:Me||Bn(n,t);case 6:var r=De,i=yt;De=null,$t(e,t,n),De=r,yt=i,De!==null&&(yt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(yt?(e=De,n=n.stateNode,e.nodeType===8?Co(e.parentNode,n):e.nodeType===1&&Co(e,n),Nr(e)):Co(De,n.stateNode));break;case 4:r=De,i=yt,De=n.stateNode.containerInfo,yt=!0,$t(e,t,n),De=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ws(n,t,s),i=i.next}while(i!==r)}$t(e,t,n);break;case 1:if(!Me&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Qe(n,t,a)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,$t(e,t,n),Me=r):$t(e,t,n);break;default:$t(e,t,n)}}function Fl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ef),t.forEach(function(r){var i=df.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,yt=!1;break e;case 3:De=a.stateNode.containerInfo,yt=!0;break e;case 4:De=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(De===null)throw Error(K(160));ju(o,s,i),De=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(g){Qe(i,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Au(t,e),t=t.sibling}function Au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),wt(e),r&4){try{kr(3,e,e.return),no(3,e)}catch(m){Qe(e,e.return,m)}try{kr(5,e,e.return)}catch(m){Qe(e,e.return,m)}}break;case 1:mt(t,e),wt(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(mt(t,e),wt(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var i=e.stateNode;try{Sr(i,"")}catch(m){Qe(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ec(i,o),Jo(a,s);var g=Jo(a,o);for(s=0;s<l.length;s+=2){var p=l[s],v=l[s+1];p==="style"?oc(i,v):p==="dangerouslySetInnerHTML"?rc(i,v):p==="children"?Sr(i,v):Os(i,p,v,g)}switch(a){case"input":Wo(i,o);break;case"textarea":tc(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Pn(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?Pn(i,!!o.multiple,o.defaultValue,!0):Pn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Tr]=o}catch(m){Qe(e,e.return,m)}}break;case 6:if(mt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(K(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Qe(e,e.return,m)}}break;case 3:if(mt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(m){Qe(e,e.return,m)}break;case 4:mt(t,e),wt(e);break;case 13:mt(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ma=Ee())),r&4&&Fl(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(g=Me)||p,mt(t,e),Me=g):mt(t,e),wt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!p&&e.mode&1)for(se=e,p=e.child;p!==null;){for(v=se=p;se!==null;){switch(f=se,h=f.child,f.tag){case 0:case 11:case 14:case 15:kr(4,f,f.return);break;case 1:Bn(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(m){Qe(r,n,m)}}break;case 5:Bn(f,f.return);break;case 22:if(f.memoizedState!==null){Cl(v);continue}}h!==null?(h.return=f,se=h):Cl(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{i=v.stateNode,g?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,l=v.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ic("display",s))}catch(m){Qe(e,e.return,m)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=g?"":v.memoizedProps}catch(m){Qe(e,e.return,m)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:mt(t,e),wt(e),r&4&&Fl(e);break;case 21:break;default:mt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zu(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sr(i,""),r.flags&=-33);var o=bl(e);Ss(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=bl(e);Fs(e,a,s);break;default:throw Error(K(161))}}catch(l){Qe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nf(e,t,n){se=e,Bu(e)}function Bu(e,t,n){for(var r=(e.mode&1)!==0;se!==null;){var i=se,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ai;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Me;a=ai;var g=Me;if(ai=s,(Me=l)&&!g)for(se=i;se!==null;)s=se,l=s.child,s.tag===22&&s.memoizedState!==null?Ql(i):l!==null?(l.return=s,se=l):Ql(i);for(;o!==null;)se=o,Bu(o),o=o.sibling;se=i,ai=a,Me=g}Sl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,se=o):Sl(e)}}function Sl(e){for(;se!==null;){var t=se;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||no(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cl(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cl(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var p=g.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Nr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Me||t.flags&512&&bs(t)}catch(f){Qe(t,t.return,f)}}if(t===e){se=null;break}if(n=t.sibling,n!==null){n.return=t.return,se=n;break}se=t.return}}function Cl(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var n=t.sibling;if(n!==null){n.return=t.return,se=n;break}se=t.return}}function Ql(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{no(4,t)}catch(l){Qe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Qe(t,i,l)}}var o=t.return;try{bs(t)}catch(l){Qe(t,o,l)}break;case 5:var s=t.return;try{bs(t)}catch(l){Qe(t,s,l)}}}catch(l){Qe(t,t.return,l)}if(t===e){se=null;break}var a=t.sibling;if(a!==null){a.return=t.return,se=a;break}se=t.return}}var rf=Math.ceil,Mi=It.ReactCurrentDispatcher,fa=It.ReactCurrentOwner,dt=It.ReactCurrentBatchConfig,me=0,Oe=null,ze=null,Ie=0,nt=0,Tn=rn(0),Be=0,Rr=null,gn=0,ro=0,ha=0,wr=null,Je=null,ma=0,Gn=1/0,Nt=null,Ui=!1,Cs=null,Kt=null,li=!1,Ht=null,Wi=0,br=0,Qs=null,_i=-1,ki=0;function Ve(){return me&6?Ee():_i!==-1?_i:_i=Ee()}function Xt(e){return e.mode&1?me&2&&Ie!==0?Ie&-Ie:Rp.transition!==null?(ki===0&&(ki=yc()),ki):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Fc(e.type)),e):1}function _t(e,t,n,r){if(50<br)throw br=0,Qs=null,Error(K(185));Mr(e,n,r),(!(me&2)||e!==Oe)&&(e===Oe&&(!(me&2)&&(ro|=n),Be===4&&Ut(e,Ie)),qe(e,r),n===1&&me===0&&!(t.mode&1)&&(Gn=Ee()+500,qi&&on()))}function qe(e,t){var n=e.callbackNode;Rd(e,t);var r=Qi(e,e===Oe?Ie:0);if(r===0)n!==null&&Oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oa(n),t===1)e.tag===0?$p(El.bind(null,e)):Uc(El.bind(null,e)),Pp(function(){!(me&6)&&on()}),n=null;else{switch(vc(r)){case 1:n=Ls;break;case 4:n=mc;break;case 16:n=Ci;break;case 536870912:n=gc;break;default:n=Ci}n=Lu(n,Tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tu(e,t){if(_i=-1,ki=0,me&6)throw Error(K(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Qi(e,e===Oe?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hi(e,r);else{t=r;var i=me;me|=2;var o=Ou();(Oe!==e||Ie!==t)&&(Nt=null,Gn=Ee()+500,dn(e,t));do try{af();break}catch(a){Pu(e,a)}while(!0);ea(),Mi.current=o,me=i,ze!==null?t=0:(Oe=null,Ie=0,t=Be)}if(t!==0){if(t===2&&(i=es(e),i!==0&&(r=i,t=Es(e,i))),t===1)throw n=Rr,dn(e,0),Ut(e,r),qe(e,Ee()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!of(i)&&(t=Hi(e,r),t===2&&(o=es(e),o!==0&&(r=o,t=Es(e,o))),t===1))throw n=Rr,dn(e,0),Ut(e,r),qe(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(K(345));case 2:an(e,Je,Nt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=ma+500-Ee(),10<t)){if(Qi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ls(an.bind(null,e,Je,Nt),t);break}an(e,Je,Nt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-xt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rf(r/1960))-r,10<r){e.timeoutHandle=ls(an.bind(null,e,Je,Nt),r);break}an(e,Je,Nt);break;case 5:an(e,Je,Nt);break;default:throw Error(K(329))}}}return qe(e,Ee()),e.callbackNode===n?Tu.bind(null,e):null}function Es(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Hi(e,t),e!==2&&(t=Je,Je=n,t!==null&&Ns(t)),e}function Ns(e){Je===null?Je=e:Je.push.apply(Je,e)}function of(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~ha,t&=~ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function El(e){if(me&6)throw Error(K(327));Rn();var t=Qi(e,0);if(!(t&1))return qe(e,Ee()),null;var n=Hi(e,t);if(e.tag!==0&&n===2){var r=es(e);r!==0&&(t=r,n=Es(e,r))}if(n===1)throw n=Rr,dn(e,0),Ut(e,t),qe(e,Ee()),n;if(n===6)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Je,Nt),qe(e,Ee()),null}function ga(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Gn=Ee()+500,qi&&on())}}function yn(e){Ht!==null&&Ht.tag===0&&!(me&6)&&Rn();var t=me;me|=1;var n=dt.transition,r=ve;try{if(dt.transition=null,ve=1,e)return e()}finally{ve=r,dt.transition=n,me=t,!(me&6)&&on()}}function ya(){nt=Tn.current,ke(Tn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tp(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ai();break;case 3:Vn(),ke(Ke),ke(Ue),sa();break;case 5:oa(r);break;case 4:Vn();break;case 13:ke(Fe);break;case 19:ke(Fe);break;case 10:ta(r.type._context);break;case 22:case 23:ya()}n=n.return}if(Oe=e,ze=e=qt(e.current,null),Ie=nt=t,Be=0,Rr=null,ha=ro=gn=0,Je=wr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}cn=null}return e}function Pu(e,t){do{var n=ze;try{if(ea(),yi.current=Li,Ri){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ri=!1}if(mn=0,Pe=Ae=Se=null,_r=!1,Dr=0,fa.current=null,n===null||n.return===null){Be=1,Rr=t,ze=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var g=l,p=a,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=ml(s);if(h!==null){h.flags&=-257,gl(h,s,a,o,t),h.mode&1&&hl(o,g,t),t=h,l=g;var k=t.updateQueue;if(k===null){var m=new Set;m.add(l),t.updateQueue=m}else k.add(l);break e}else{if(!(t&1)){hl(o,g,t),va();break e}l=Error(K(426))}}else if(we&&a.mode&1){var b=ml(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),gl(b,s,a,o,t),Xs(Zn(l,a));break e}}o=l=Zn(l,a),Be!==4&&(Be=2),wr===null?wr=[o]:wr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=vu(o,l,t);ll(o,d);break e;case 1:a=l;var u=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Kt===null||!Kt.has(_)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=xu(o,a,t);ll(o,S);break e}}o=o.return}while(o!==null)}Iu(n)}catch(C){t=C,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Ou(){var e=Mi.current;return Mi.current=Li,e===null?Li:e}function va(){(Be===0||Be===3||Be===2)&&(Be=4),Oe===null||!(gn&268435455)&&!(ro&268435455)||Ut(Oe,Ie)}function Hi(e,t){var n=me;me|=2;var r=Ou();(Oe!==e||Ie!==t)&&(Nt=null,dn(e,t));do try{sf();break}catch(i){Pu(e,i)}while(!0);if(ea(),me=n,Mi.current=r,ze!==null)throw Error(K(261));return Oe=null,Ie=0,Be}function sf(){for(;ze!==null;)Du(ze)}function af(){for(;ze!==null&&!jd();)Du(ze)}function Du(e){var t=Ru(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Iu(e):ze=t,fa.current=null}function Iu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qp(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,ze=null;return}}else if(n=Xp(n,t,nt),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Be===0&&(Be=5)}function an(e,t,n){var r=ve,i=dt.transition;try{dt.transition=null,ve=1,lf(e,t,n,r)}finally{dt.transition=i,ve=r}return null}function lf(e,t,n,r){do Rn();while(Ht!==null);if(me&6)throw Error(K(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ld(e,o),e===Oe&&(ze=Oe=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,Lu(Ci,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var s=ve;ve=1;var a=me;me|=4,fa.current=null,tf(e,n),Au(n,e),Qp(ss),Ei=!!os,ss=os=null,e.current=n,nf(n),Ad(),me=a,ve=s,dt.transition=o}else e.current=n;if(li&&(li=!1,Ht=e,Wi=i),o=e.pendingLanes,o===0&&(Kt=null),Pd(n.stateNode),qe(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ui)throw Ui=!1,e=Cs,Cs=null,e;return Wi&1&&e.tag!==0&&Rn(),o=e.pendingLanes,o&1?e===Qs?br++:(br=0,Qs=e):br=0,on(),null}function Rn(){if(Ht!==null){var e=vc(Wi),t=dt.transition,n=ve;try{if(dt.transition=null,ve=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,Wi=0,me&6)throw Error(K(331));var i=me;for(me|=4,se=e.current;se!==null;){var o=se,s=o.child;if(se.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var g=a[l];for(se=g;se!==null;){var p=se;switch(p.tag){case 0:case 11:case 15:kr(8,p,o)}var v=p.child;if(v!==null)v.return=p,se=v;else for(;se!==null;){p=se;var f=p.sibling,h=p.return;if(Nu(p),p===g){se=null;break}if(f!==null){f.return=h,se=f;break}se=h}}}var k=o.alternate;if(k!==null){var m=k.child;if(m!==null){k.child=null;do{var b=m.sibling;m.sibling=null,m=b}while(m!==null)}}se=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,se=s;else e:for(;se!==null;){if(o=se,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,se=d;break e}se=o.return}}var u=e.current;for(se=u;se!==null;){s=se;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,se=_;else e:for(s=u;se!==null;){if(a=se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:no(9,a)}}catch(C){Qe(a,a.return,C)}if(a===s){se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,se=S;break e}se=a.return}}if(me=i,on(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Gi,e)}catch{}r=!0}return r}finally{ve=n,dt.transition=t}}return!1}function Nl(e,t,n){t=Zn(n,t),t=vu(e,t,1),e=Yt(e,t,1),t=Ve(),e!==null&&(Mr(e,1,t),qe(e,t))}function Qe(e,t,n){if(e.tag===3)Nl(e,e,n);else for(;t!==null;){if(t.tag===3){Nl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=Zn(n,e),e=xu(t,e,1),t=Yt(t,e,1),e=Ve(),t!==null&&(Mr(t,1,e),qe(t,e));break}}t=t.return}}function cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ie&n)===n&&(Be===4||Be===3&&(Ie&130023424)===Ie&&500>Ee()-ma?dn(e,0):ha|=n),qe(e,t)}function $u(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=Ve();e=Ot(e,t),e!==null&&(Mr(e,t,n),qe(e,n))}function uf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$u(e,n)}function df(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(t),$u(e,n)}var Ru;Ru=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,Kp(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,we&&t.flags&1048576&&Wc(t,Pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var i=Un(t,Ue.current);$n(t,n),i=la(null,t,r,e,i,n);var o=ca();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Bi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ra(t),i.updater=to,t.stateNode=i,i._reactInternals=t,ms(t,r,e,n),t=vs(null,t,r,!0,o,n)):(t.tag=0,we&&o&&Ys(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ff(r),e=gt(r,e),i){case 0:t=ys(null,t,r,e,n);break e;case 1:t=xl(null,t,r,e,n);break e;case 11:t=yl(null,t,r,e,n);break e;case 14:t=vl(null,t,r,gt(r.type,e),n);break e}throw Error(K(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),ys(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),xl(e,t,r,i,n);case 3:e:{if(bu(t),e===null)throw Error(K(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yc(e,t),Ii(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(K(423)),t),t=_l(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(K(424)),t),t=_l(e,t,r,n,i);break e}else for(rt=Jt(t.stateNode.containerInfo.firstChild),it=t,we=!0,vt=null,n=Gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=Dt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Kc(t),e===null&&ps(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,as(r,i)?s=null:o!==null&&as(r,o)&&(t.flags|=32),wu(e,t),He(e,t,s,n),t.child;case 6:return e===null&&ps(t),null;case 13:return Fu(e,t,n);case 4:return ia(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),yl(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,xe(Oi,r._currentValue),r._currentValue=s,o!==null)if(kt(o.value,s)){if(o.children===i.children&&!Ke.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Bt(-1,n&-n),l.tag=2;var g=o.updateQueue;if(g!==null){g=g.shared;var p=g.pending;p===null?l.next=l:(l.next=p.next,p.next=l),g.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fs(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(K(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fs(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=pt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=gt(r,t.pendingProps),i=gt(r.type,i),vl(e,t,r,i,n);case 15:return _u(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),xi(e,t),t.tag=1,Xe(r)?(e=!0,Bi(t)):e=!1,$n(t,n),yu(t,r,i),ms(t,r,i,n),vs(null,t,r,!0,e,n);case 19:return Su(e,t,n);case 22:return ku(e,t,n)}throw Error(K(156,t.tag))};function Lu(e,t){return hc(e,t)}function pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new pf(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ff(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Is)return 11;if(e===$s)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")xa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Fn:return pn(n.children,i,o,t);case Ds:s=8,i|=8;break;case $o:return e=ut(12,n,t,i|2),e.elementType=$o,e.lanes=o,e;case Ro:return e=ut(13,n,t,i),e.elementType=Ro,e.lanes=o,e;case Lo:return e=ut(19,n,t,i),e.elementType=Lo,e.lanes=o,e;case Kl:return io(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jl:s=10;break e;case Yl:s=9;break e;case Is:s=11;break e;case $s:s=14;break e;case Rt:s=16,r=null;break e}throw Error(K(130,e==null?e:typeof e,""))}return t=ut(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Kl,e.lanes=n,e.stateNode={isHidden:!1},e}function To(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Po(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mo(0),this.expirationTimes=mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _a(e,t,n,r,i,o,s,a,l){return e=new hf(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ra(o),e}function mf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mu(e){if(!e)return tn;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(K(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(K(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Mc(e,n,t)}return t}function Uu(e,t,n,r,i,o,s,a,l){return e=_a(n,r,!0,e,i,o,s,a,l),e.context=Mu(null),n=e.current,r=Ve(),i=Xt(n),o=Bt(r,i),o.callback=t??null,Yt(n,o,i),e.current.lanes=i,Mr(e,i,r),qe(e,r),e}function oo(e,t,n,r){var i=t.current,o=Ve(),s=Xt(i);return n=Mu(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,s),e!==null&&(_t(e,i,s,o),gi(e,i,s)),s}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ka(e,t){zl(e,t),(e=e.alternate)&&zl(e,t)}function gf(){return null}var Wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}so.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));oo(e,t,null,null)};so.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){oo(null,e,null,null)}),t[Pt]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&bc(e)}};function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jl(){}function yf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var g=Vi(s);o.call(g)}}var s=Uu(t,r,e,0,null,!1,!1,"",jl);return e._reactRootContainer=s,e[Pt]=s.current,Ar(e.nodeType===8?e.parentNode:e),yn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var g=Vi(l);a.call(g)}}var l=_a(e,0,!1,null,null,!1,!1,"",jl);return e._reactRootContainer=l,e[Pt]=l.current,Ar(e.nodeType===8?e.parentNode:e),yn(function(){oo(t,l,n,r)}),l}function lo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Vi(s);a.call(l)}}oo(t,s,e,i)}else s=yf(n,t,e,i,r);return Vi(s)}xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Ms(t,n|1),qe(t,Ee()),!(me&6)&&(Gn=Ee()+500,on()))}break;case 13:yn(function(){var r=Ot(e,1);if(r!==null){var i=Ve();_t(r,e,1,i)}}),ka(e,1)}};Us=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ve();_t(t,e,134217728,n)}ka(e,134217728)}};_c=function(e){if(e.tag===13){var t=Xt(e),n=Ot(e,t);if(n!==null){var r=Ve();_t(n,e,t,r)}ka(e,t)}};kc=function(){return ve};wc=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};Ko=function(e,t,n){switch(t){case"input":if(Wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xi(r);if(!i)throw Error(K(90));ql(r),Wo(r,i)}}}break;case"textarea":tc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};lc=ga;cc=yn;var vf={usingClientEntryPoint:!1,Events:[Wr,En,Xi,sc,ac,ga]},ur={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xf={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||gf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{Gi=ci.inject(xf),Ct=ci}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ba(t))throw Error(K(200));return mf(e,t,null,n)};st.createRoot=function(e,t){if(!ba(e))throw Error(K(299));var n=!1,r="",i=Wu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_a(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,Ar(e.nodeType===8?e.parentNode:e),new wa(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=pc(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return yn(e)};st.hydrate=function(e,t,n){if(!ao(t))throw Error(K(200));return lo(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!ba(e))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Wu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Uu(t,null,e,1,n??null,i,!1,o,s),e[Pt]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new so(t)};st.render=function(e,t,n){if(!ao(t))throw Error(K(200));return lo(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!ao(e))throw Error(K(40));return e._reactRootContainer?(yn(function(){lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};st.unstable_batchedUpdates=ga;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ao(n))throw Error(K(200));if(e==null||e._reactInternals===void 0)throw Error(K(38));return lo(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function Hu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hu)}catch(e){console.error(e)}}Hu(),Hl.exports=st;var _f=Hl.exports,Al=_f;Do.createRoot=Al.createRoot,Do.hydrateRoot=Al.hydrateRoot;function ui(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Vu={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(e,t){(function(n){e.exports=n()})(function(){return function n(r,i,o){function s(g,p){if(!i[g]){if(!r[g]){var v=typeof ui=="function"&&ui;if(!p&&v)return v(g,!0);if(a)return a(g,!0);var f=new Error("Cannot find module '"+g+"'");throw f.code="MODULE_NOT_FOUND",f}var h=i[g]={exports:{}};r[g][0].call(h.exports,function(k){var m=r[g][1][k];return s(m||k)},h,h.exports,n,r,i,o)}return i[g].exports}for(var a=typeof ui=="function"&&ui,l=0;l<o.length;l++)s(o[l]);return s}({1:[function(n,r,i){var o=n("./utils"),s=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var g,p,v,f,h,k,m,b=[],d=0,u=l.length,_=u,S=o.getTypeOf(l)!=="string";d<l.length;)_=u-d,v=S?(g=l[d++],p=d<u?l[d++]:0,d<u?l[d++]:0):(g=l.charCodeAt(d++),p=d<u?l.charCodeAt(d++):0,d<u?l.charCodeAt(d++):0),f=g>>2,h=(3&g)<<4|p>>4,k=1<_?(15&p)<<2|v>>6:64,m=2<_?63&v:64,b.push(a.charAt(f)+a.charAt(h)+a.charAt(k)+a.charAt(m));return b.join("")},i.decode=function(l){var g,p,v,f,h,k,m=0,b=0,d="data:";if(l.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var u,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&_--,l.charAt(l.length-2)===a.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(u=s.uint8array?new Uint8Array(0|_):new Array(0|_);m<l.length;)g=a.indexOf(l.charAt(m++))<<2|(f=a.indexOf(l.charAt(m++)))>>4,p=(15&f)<<4|(h=a.indexOf(l.charAt(m++)))>>2,v=(3&h)<<6|(k=a.indexOf(l.charAt(m++))),u[b++]=g,h!==64&&(u[b++]=p),k!==64&&(u[b++]=v);return u}},{"./support":30,"./utils":32}],2:[function(n,r,i){var o=n("./external"),s=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function g(p,v,f,h,k){this.compressedSize=p,this.uncompressedSize=v,this.crc32=f,this.compression=h,this.compressedContent=k}g.prototype={getContentWorker:function(){var p=new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),v=this;return p.on("end",function(){if(this.streamInfo.data_length!==v.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(p,v,f){return p.pipe(new a).pipe(new l("uncompressedSize")).pipe(v.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",v)},r.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var o=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var o=n("./utils"),s=function(){for(var a,l=[],g=0;g<256;g++){a=g;for(var p=0;p<8;p++)a=1&a?3988292384^a>>>1:a>>>1;l[g]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?o.getTypeOf(a)!=="string"?function(g,p,v,f){var h=s,k=f+v;g^=-1;for(var m=f;m<k;m++)g=g>>>8^h[255&(g^p[m])];return-1^g}(0|l,a,a.length,0):function(g,p,v,f){var h=s,k=f+v;g^=-1;for(var m=f;m<k;m++)g=g>>>8^h[255&(g^p.charCodeAt(m))];return-1^g}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var o=null;o=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:o}},{lie:37}],7:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),g=o?"uint8array":"array";function p(v,f){l.call(this,"FlateWorker/"+v),this._pako=null,this._pakoAction=v,this._pakoOptions=f,this.meta={}}i.magic="\b\0",a.inherits(p,l),p.prototype.processChunk=function(v){this.meta=v.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(g,v.data),!1)},p.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var v=this;this._pako.onData=function(f){v.push({data:f,meta:v.meta})}},i.compressWorker=function(v){return new p("Deflate",v)},i.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function o(h,k){var m,b="";for(m=0;m<k;m++)b+=String.fromCharCode(255&h),h>>>=8;return b}function s(h,k,m,b,d,u){var _,S,C=h.file,j=h.compression,z=u!==g.utf8encode,I=a.transformTo("string",u(C.name)),D=a.transformTo("string",g.utf8encode(C.name)),U=C.comment,ae=a.transformTo("string",u(U)),Q=a.transformTo("string",g.utf8encode(U)),L=D.length!==C.name.length,y=Q.length!==U.length,Z="",ce="",Y="",G=C.dir,$=C.date,q={crc32:0,compressedSize:0,uncompressedSize:0};k&&!m||(q.crc32=h.crc32,q.compressedSize=h.compressedSize,q.uncompressedSize=h.uncompressedSize);var P=0;k&&(P|=8),z||!L&&!y||(P|=2048);var T=0,le=0;G&&(T|=16),d==="UNIX"?(le=798,T|=function(ee,ye){var be=ee;return ee||(be=ye?16893:33204),(65535&be)<<16}(C.unixPermissions,G)):(le=20,T|=function(ee){return 63&(ee||0)}(C.dosPermissions)),_=$.getUTCHours(),_<<=6,_|=$.getUTCMinutes(),_<<=5,_|=$.getUTCSeconds()/2,S=$.getUTCFullYear()-1980,S<<=4,S|=$.getUTCMonth()+1,S<<=5,S|=$.getUTCDate(),L&&(ce=o(1,1)+o(p(I),4)+D,Z+="up"+o(ce.length,2)+ce),y&&(Y=o(1,1)+o(p(ae),4)+Q,Z+="uc"+o(Y.length,2)+Y);var ne="";return ne+=`
\0`,ne+=o(P,2),ne+=j.magic,ne+=o(_,2),ne+=o(S,2),ne+=o(q.crc32,4),ne+=o(q.compressedSize,4),ne+=o(q.uncompressedSize,4),ne+=o(I.length,2),ne+=o(Z.length,2),{fileRecord:v.LOCAL_FILE_HEADER+ne+I+Z,dirRecord:v.CENTRAL_FILE_HEADER+o(le,2)+ne+o(ae.length,2)+"\0\0\0\0"+o(T,4)+o(b,4)+I+Z+ae}}var a=n("../utils"),l=n("../stream/GenericWorker"),g=n("../utf8"),p=n("../crc32"),v=n("../signature");function f(h,k,m,b){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=m,this.encodeFileName=b,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(f,l),f.prototype.push=function(h){var k=h.meta.percent||0,m=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:m?(k+100*(m-b-1))/m:100}}))},f.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var k=this.streamFiles&&!h.file.dir;if(k){var m=s(h,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(h){this.accumulate=!1;var k=this.streamFiles&&!h.file.dir,m=s(h,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),k)this.push({data:function(b){return v.DATA_DESCRIPTOR+o(b.crc32,4)+o(b.compressedSize,4)+o(b.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var h=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var m=this.bytesWritten-h,b=function(d,u,_,S,C){var j=a.transformTo("string",C(S));return v.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(d,2)+o(d,2)+o(u,4)+o(_,4)+o(j.length,2)+j}(this.dirRecords.length,m,h,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(h){this._sources.push(h);var k=this;return h.on("data",function(m){k.processChunk(m)}),h.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),h.on("error",function(m){k.error(m)}),this},f.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(h){var k=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var m=0;m<k.length;m++)try{k[m].error(h)}catch{}return!0},f.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,k=0;k<h.length;k++)h[k].lock()},r.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var o=n("../compressions"),s=n("./ZipFileWorker");i.generateWorker=function(a,l,g){var p=new s(l.streamFiles,g,l.platform,l.encodeFileName),v=0;try{a.forEach(function(f,h){v++;var k=function(u,_){var S=u||_,C=o[S];if(!C)throw new Error(S+" is not a valid compression method !");return C}(h.options.compression,l.compression),m=h.options.compressionOptions||l.compressionOptions||{},b=h.dir,d=h.date;h._compressWorker(k,m).withStreamInfo("file",{name:f,dir:b,date:d,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(p)}),p.entriesCount=v}catch(f){p.error(f)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new o;for(var a in this)typeof this[a]!="function"&&(s[a]=this[a]);return s}}(o.prototype=n("./object")).loadAsync=n("./load"),o.support=n("./support"),o.defaults=n("./defaults"),o.version="3.10.1",o.loadAsync=function(s,a){return new o().loadAsync(s,a)},o.external=n("./external"),r.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var o=n("./utils"),s=n("./external"),a=n("./utf8"),l=n("./zipEntries"),g=n("./stream/Crc32Probe"),p=n("./nodejsUtils");function v(f){return new s.Promise(function(h,k){var m=f.decompressed.getContentWorker().pipe(new g);m.on("error",function(b){k(b)}).on("end",function(){m.streamInfo.crc32!==f.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}r.exports=function(f,h){var k=this;return h=o.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),p.isNode&&p.isStream(f)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",f,!0,h.optimizedBinaryString,h.base64).then(function(m){var b=new l(h);return b.load(m),b}).then(function(m){var b=[s.Promise.resolve(m)],d=m.files;if(h.checkCRC32)for(var u=0;u<d.length;u++)b.push(v(d[u]));return s.Promise.all(b)}).then(function(m){for(var b=m.shift(),d=b.files,u=0;u<d.length;u++){var _=d[u],S=_.fileNameStr,C=o.resolve(_.fileNameStr);k.file(C,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:h.createFolders}),_.dir||(k.file(C).unsafeOriginalName=S)}return b.zipComment.length&&(k.comment=b.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var o=n("../utils"),s=n("../stream/GenericWorker");function a(l,g){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(g)}o.inherits(a,s),a.prototype._bindStream=function(l){var g=this;(this._stream=l).pause(),l.on("data",function(p){g.push({data:p,meta:{percent:0}})}).on("error",function(p){g.isPaused?this.generatedError=p:g.error(p)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},a.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var o=n("readable-stream").Readable;function s(a,l,g){o.call(this,l),this._helper=a;var p=this;a.on("data",function(v,f){p.push(v)||p._helper.pause(),g&&g(f)}).on("error",function(v){p.emit("error",v)}).on("end",function(){p.push(null)})}n("../utils").inherits(s,o),s.prototype._read=function(){this._helper.resume()},r.exports=s},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,s);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,s)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var s=new Buffer(o);return s.fill(0),s},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(n,r,i){function o(C,j,z){var I,D=a.getTypeOf(j),U=a.extend(z||{},p);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(C=d(C)),U.createFolders&&(I=b(C))&&u.call(this,I,!0);var ae=D==="string"&&U.binary===!1&&U.base64===!1;z&&z.binary!==void 0||(U.binary=!ae),(j instanceof v&&j.uncompressedSize===0||U.dir||!j||j.length===0)&&(U.base64=!1,U.binary=!0,j="",U.compression="STORE",D="string");var Q=null;Q=j instanceof v||j instanceof l?j:k.isNode&&k.isStream(j)?new m(C,j):a.prepareContent(C,j,U.binary,U.optimizedBinaryString,U.base64);var L=new f(C,Q,U);this.files[C]=L}var s=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),g=n("./stream/StreamHelper"),p=n("./defaults"),v=n("./compressedObject"),f=n("./zipObject"),h=n("./generate"),k=n("./nodejsUtils"),m=n("./nodejs/NodejsStreamInputAdapter"),b=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var j=C.lastIndexOf("/");return 0<j?C.substring(0,j):""},d=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},u=function(C,j){return j=j!==void 0?j:p.createFolders,C=d(C),this.files[C]||o.call(this,C,null,{dir:!0,createFolders:j}),this.files[C]};function _(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var j,z,I;for(j in this.files)I=this.files[j],(z=j.slice(this.root.length,j.length))&&j.slice(0,this.root.length)===this.root&&C(z,I)},filter:function(C){var j=[];return this.forEach(function(z,I){C(z,I)&&j.push(I)}),j},file:function(C,j,z){if(arguments.length!==1)return C=this.root+C,o.call(this,C,j,z),this;if(_(C)){var I=C;return this.filter(function(U,ae){return!ae.dir&&I.test(U)})}var D=this.files[this.root+C];return D&&!D.dir?D:null},folder:function(C){if(!C)return this;if(_(C))return this.filter(function(D,U){return U.dir&&C.test(D)});var j=this.root+C,z=u.call(this,j),I=this.clone();return I.root=z.name,I},remove:function(C){C=this.root+C;var j=this.files[C];if(j||(C.slice(-1)!=="/"&&(C+="/"),j=this.files[C]),j&&!j.dir)delete this.files[C];else for(var z=this.filter(function(D,U){return U.name.slice(0,C.length)===C}),I=0;I<z.length;I++)delete this.files[z[I].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var j,z={};try{if((z=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=z.type.toLowerCase(),z.compression=z.compression.toUpperCase(),z.type==="binarystring"&&(z.type="string"),!z.type)throw new Error("No output type specified.");a.checkSupport(z.type),z.platform!=="darwin"&&z.platform!=="freebsd"&&z.platform!=="linux"&&z.platform!=="sunos"||(z.platform="UNIX"),z.platform==="win32"&&(z.platform="DOS");var I=z.comment||this.comment||"";j=h.generateWorker(this,z,I)}catch(D){(j=new l("error")).error(D)}return new g(j,z.type||"string",z.mimeType)},generateAsync:function(C,j){return this.generateInternalStream(C).accumulate(j)},generateNodeStream:function(C,j){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(j)}};r.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var o=n("./DataReader");function s(a){o.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(s,o),s.prototype.byteAt=function(a){return this.data[this.zero+a]},s.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),g=a.charCodeAt(1),p=a.charCodeAt(2),v=a.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===l&&this.data[f+1]===g&&this.data[f+2]===p&&this.data[f+3]===v)return f-this.zero;return-1},s.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),g=a.charCodeAt(1),p=a.charCodeAt(2),v=a.charCodeAt(3),f=this.readData(4);return l===f[0]&&g===f[1]&&p===f[2]&&v===f[3]},s.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var o=n("../utils");function s(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,g=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)g=(g<<8)+this.byteAt(l);return this.index+=a,g},readString:function(a){return o.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=s},{"../utils":32}],19:[function(n,r,i){var o=n("./Uint8ArrayReader");function s(a){o.call(this,a)}n("../utils").inherits(s,o),s.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var o=n("./DataReader");function s(a){o.call(this,a)}n("../utils").inherits(s,o),s.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},s.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},s.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},s.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var o=n("./ArrayReader");function s(a){o.call(this,a)}n("../utils").inherits(s,o),s.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var o=n("../utils"),s=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),g=n("./NodeBufferReader"),p=n("./Uint8ArrayReader");r.exports=function(v){var f=o.getTypeOf(v);return o.checkSupport(f),f!=="string"||s.uint8array?f==="nodebuffer"?new g(v):s.uint8array?new p(o.transformTo("uint8array",v)):new a(o.transformTo("array",v)):new l(v)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var o=n("./GenericWorker"),s=n("../utils");function a(l){o.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(a,o),a.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var o=n("./GenericWorker"),s=n("../crc32");function a(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,o),a.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var o=n("../utils"),s=n("./GenericWorker");function a(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}o.inherits(a,s),a.prototype.processChunk=function(l){if(l){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+l.data.length}s.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var o=n("../utils"),s=n("./GenericWorker");function a(l){s.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){g.dataIsReady=!0,g.data=p,g.max=p&&p.length||0,g.type=o.getTypeOf(p),g.isPaused||g._tickAndRepeat()},function(p){g.error(p)})}o.inherits(a,s),a.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,g);break;case"uint8array":l=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":l=this.data.slice(this.index,g)}return this.index=g,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function o(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,a){return this._listeners[s].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,a){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,a)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var a=this;return s.on("data",function(l){a.processChunk(l)}),s.on("end",function(){a.end()}),s.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,a){return this.extraStreamInfo[s]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=o},{}],29:[function(n,r,i){var o=n("../utils"),s=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),g=n("../support"),p=n("../external"),v=null;if(g.nodestream)try{v=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(k,m){return new p.Promise(function(b,d){var u=[],_=k._internalType,S=k._outputType,C=k._mimeType;k.on("data",function(j,z){u.push(j),m&&m(z)}).on("error",function(j){u=[],d(j)}).on("end",function(){try{var j=function(z,I,D){switch(z){case"blob":return o.newBlob(o.transformTo("arraybuffer",I),D);case"base64":return l.encode(I);default:return o.transformTo(z,I)}}(S,function(z,I){var D,U=0,ae=null,Q=0;for(D=0;D<I.length;D++)Q+=I[D].length;switch(z){case"string":return I.join("");case"array":return Array.prototype.concat.apply([],I);case"uint8array":for(ae=new Uint8Array(Q),D=0;D<I.length;D++)ae.set(I[D],U),U+=I[D].length;return ae;case"nodebuffer":return Buffer.concat(I);default:throw new Error("concat : unsupported type '"+z+"'")}}(_,u),C);b(j)}catch(z){d(z)}u=[]}).resume()})}function h(k,m,b){var d=m;switch(m){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=m,this._mimeType=b,o.checkSupport(d),this._worker=k.pipe(new s(d)),k.lock()}catch(u){this._worker=new a("error"),this._worker.error(u)}}h.prototype={accumulate:function(k){return f(this,k)},on:function(k,m){var b=this;return k==="data"?this._worker.on(k,function(d){m.call(b,d.data,d.meta)}):this._worker.on(k,function(){o.delay(m,arguments,b)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new v(this,{objectMode:this._outputType!=="nodebuffer"},k)}},r.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var o=new ArrayBuffer(0);try{i.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(o),i.blob=s.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var o=n("./utils"),s=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),g=new Array(256),p=0;p<256;p++)g[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;g[254]=g[254]=1;function v(){l.call(this,"utf-8 decode"),this.leftOver=null}function f(){l.call(this,"utf-8 encode")}i.utf8encode=function(h){return s.nodebuffer?a.newBufferFrom(h,"utf-8"):function(k){var m,b,d,u,_,S=k.length,C=0;for(u=0;u<S;u++)(64512&(b=k.charCodeAt(u)))==55296&&u+1<S&&(64512&(d=k.charCodeAt(u+1)))==56320&&(b=65536+(b-55296<<10)+(d-56320),u++),C+=b<128?1:b<2048?2:b<65536?3:4;for(m=s.uint8array?new Uint8Array(C):new Array(C),u=_=0;_<C;u++)(64512&(b=k.charCodeAt(u)))==55296&&u+1<S&&(64512&(d=k.charCodeAt(u+1)))==56320&&(b=65536+(b-55296<<10)+(d-56320),u++),b<128?m[_++]=b:(b<2048?m[_++]=192|b>>>6:(b<65536?m[_++]=224|b>>>12:(m[_++]=240|b>>>18,m[_++]=128|b>>>12&63),m[_++]=128|b>>>6&63),m[_++]=128|63&b);return m}(h)},i.utf8decode=function(h){return s.nodebuffer?o.transformTo("nodebuffer",h).toString("utf-8"):function(k){var m,b,d,u,_=k.length,S=new Array(2*_);for(m=b=0;m<_;)if((d=k[m++])<128)S[b++]=d;else if(4<(u=g[d]))S[b++]=65533,m+=u-1;else{for(d&=u===2?31:u===3?15:7;1<u&&m<_;)d=d<<6|63&k[m++],u--;1<u?S[b++]=65533:d<65536?S[b++]=d:(d-=65536,S[b++]=55296|d>>10&1023,S[b++]=56320|1023&d)}return S.length!==b&&(S.subarray?S=S.subarray(0,b):S.length=b),o.applyFromCharCode(S)}(h=o.transformTo(s.uint8array?"uint8array":"array",h))},o.inherits(v,l),v.prototype.processChunk=function(h){var k=o.transformTo(s.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var m=k;(k=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),k.set(m,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var b=function(u,_){var S;for((_=_||u.length)>u.length&&(_=u.length),S=_-1;0<=S&&(192&u[S])==128;)S--;return S<0||S===0?_:S+g[u[S]]>_?S:_}(k),d=k;b!==k.length&&(s.uint8array?(d=k.subarray(0,b),this.leftOver=k.subarray(b,k.length)):(d=k.slice(0,b),this.leftOver=k.slice(b,k.length))),this.push({data:i.utf8decode(d),meta:h.meta})},v.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=v,o.inherits(f,l),f.prototype.processChunk=function(h){this.push({data:i.utf8encode(h.data),meta:h.meta})},i.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var o=n("./support"),s=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function g(m){return m}function p(m,b){for(var d=0;d<m.length;++d)b[d]=255&m.charCodeAt(d);return b}n("setimmediate"),i.newBlob=function(m,b){i.checkSupport("blob");try{return new Blob([m],{type:b})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(m),d.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(m,b,d){var u=[],_=0,S=m.length;if(S<=d)return String.fromCharCode.apply(null,m);for(;_<S;)b==="array"||b==="nodebuffer"?u.push(String.fromCharCode.apply(null,m.slice(_,Math.min(_+d,S)))):u.push(String.fromCharCode.apply(null,m.subarray(_,Math.min(_+d,S)))),_+=d;return u.join("")},stringifyByChar:function(m){for(var b="",d=0;d<m.length;d++)b+=String.fromCharCode(m[d]);return b},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function f(m){var b=65536,d=i.getTypeOf(m),u=!0;if(d==="uint8array"?u=v.applyCanBeUsed.uint8array:d==="nodebuffer"&&(u=v.applyCanBeUsed.nodebuffer),u)for(;1<b;)try{return v.stringifyByChunk(m,d,b)}catch{b=Math.floor(b/2)}return v.stringifyByChar(m)}function h(m,b){for(var d=0;d<m.length;d++)b[d]=m[d];return b}i.applyFromCharCode=f;var k={};k.string={string:g,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return k.string.uint8array(m).buffer},uint8array:function(m){return p(m,new Uint8Array(m.length))},nodebuffer:function(m){return p(m,a.allocBuffer(m.length))}},k.array={string:f,array:g,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return a.newBufferFrom(m)}},k.arraybuffer={string:function(m){return f(new Uint8Array(m))},array:function(m){return h(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:g,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return a.newBufferFrom(new Uint8Array(m))}},k.uint8array={string:f,array:function(m){return h(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:g,nodebuffer:function(m){return a.newBufferFrom(m)}},k.nodebuffer={string:f,array:function(m){return h(m,new Array(m.length))},arraybuffer:function(m){return k.nodebuffer.uint8array(m).buffer},uint8array:function(m){return h(m,new Uint8Array(m.length))},nodebuffer:g},i.transformTo=function(m,b){if(b=b||"",!m)return b;i.checkSupport(m);var d=i.getTypeOf(b);return k[d][m](b)},i.resolve=function(m){for(var b=m.split("/"),d=[],u=0;u<b.length;u++){var _=b[u];_==="."||_===""&&u!==0&&u!==b.length-1||(_===".."?d.pop():d.push(_))}return d.join("/")},i.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":o.nodebuffer&&a.isBuffer(m)?"nodebuffer":o.uint8array&&m instanceof Uint8Array?"uint8array":o.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(m){if(!o[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(m){var b,d,u="";for(d=0;d<(m||"").length;d++)u+="\\x"+((b=m.charCodeAt(d))<16?"0":"")+b.toString(16).toUpperCase();return u},i.delay=function(m,b,d){setImmediate(function(){m.apply(d||null,b||[])})},i.inherits=function(m,b){function d(){}d.prototype=b.prototype,m.prototype=new d},i.extend=function(){var m,b,d={};for(m=0;m<arguments.length;m++)for(b in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],b)&&d[b]===void 0&&(d[b]=arguments[m][b]);return d},i.prepareContent=function(m,b,d,u,_){return l.Promise.resolve(b).then(function(S){return o.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,j){var z=new FileReader;z.onload=function(I){C(I.target.result)},z.onerror=function(I){j(I.target.error)},z.readAsArrayBuffer(S)}):S}).then(function(S){var C=i.getTypeOf(S);return C?(C==="arraybuffer"?S=i.transformTo("uint8array",S):C==="string"&&(_?S=s.decode(S):d&&u!==!0&&(S=function(j){return p(j,o.uint8array?new Uint8Array(j.length):new Array(j.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var o=n("./reader/readerFor"),s=n("./utils"),a=n("./signature"),l=n("./zipEntry"),g=n("./support");function p(v){this.files=[],this.loadOptions=v}p.prototype={checkSignature:function(v){if(!this.reader.readAndCheckSignature(v)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(f)+", expected "+s.pretty(v)+")")}},isSignature:function(v,f){var h=this.reader.index;this.reader.setIndex(v);var k=this.reader.readString(4)===f;return this.reader.setIndex(h),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var v=this.reader.readData(this.zipCommentLength),f=g.uint8array?"uint8array":"array",h=s.transformTo(f,v);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var v,f,h,k=this.zip64EndOfCentralSize-44;0<k;)v=this.reader.readInt(2),f=this.reader.readInt(4),h=this.reader.readData(f),this.zip64ExtensibleData[v]={id:v,length:f,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var v,f;for(v=0;v<this.files.length;v++)f=this.files[v],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var v;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(v=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(v);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var v=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(v<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(v);var f=v;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(v=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(v),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var k=f-h;if(0<k)this.isSignature(f,a.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(v){this.reader=o(v)},load:function(v){this.prepareReader(v),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var o=n("./reader/readerFor"),s=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),g=n("./utf8"),p=n("./compressions"),v=n("./support");function f(h,k){this.options=h,this.loadOptions=k}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var k,m;if(h.skip(22),this.fileNameLength=h.readInt(2),m=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(b){for(var d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&p[d].magic===b)return p[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,k,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var k=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(k),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=o(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var k,m,b,d=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<d;)k=h.readInt(2),m=h.readInt(2),b=h.readData(m),this.extraFields[k]={id:k,length:m,value:b};h.setIndex(d)},handleUTF8:function(){var h=v.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var m=s.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var d=s.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var k=o(h.value);return k.readInt(1)!==1||l(this.fileName)!==k.readInt(4)?null:g.utf8decode(k.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var k=o(h.value);return k.readInt(1)!==1||l(this.fileComment)!==k.readInt(4)?null:g.utf8decode(k.readData(h.length-5))}return null}},r.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function o(k,m,b){this.name=k,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=m,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var s=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),g=n("./compressedObject"),p=n("./stream/GenericWorker");o.prototype={internalStream:function(k){var m=null,b="string";try{if(!k)throw new Error("No output type specified.");var d=(b=k.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),m=this._decompressWorker();var u=!this._dataBinary;u&&!d&&(m=m.pipe(new l.Utf8EncodeWorker)),!u&&d&&(m=m.pipe(new l.Utf8DecodeWorker))}catch(_){(m=new p("error")).error(_)}return new s(m,b,"")},async:function(k,m){return this.internalStream(k).accumulate(m)},nodeStream:function(k,m){return this.internalStream(k||"nodebuffer").toNodejsStream(m)},_compressWorker:function(k,m){if(this._data instanceof g&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new l.Utf8EncodeWorker)),g.createWorkerFrom(b,k,m)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof p?this._data:new a(this._data)}};for(var v=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<v.length;h++)o.prototype[v[h]]=f;r.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(o){var s,a,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var g=0,p=new l(k),v=o.document.createTextNode("");p.observe(v,{characterData:!0}),s=function(){v.data=g=++g%2}}else if(o.setImmediate||o.MessageChannel===void 0)s="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var m=o.document.createElement("script");m.onreadystatechange=function(){k(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},o.document.documentElement.appendChild(m)}:function(){setTimeout(k,0)};else{var f=new o.MessageChannel;f.port1.onmessage=k,s=function(){f.port2.postMessage(0)}}var h=[];function k(){var m,b;a=!0;for(var d=h.length;d;){for(b=h,h=[],m=-1;++m<d;)b[m]();d=h.length}a=!1}r.exports=function(m){h.push(m)!==1||a||s()}}).call(this,typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var o=n("immediate");function s(){}var a={},l=["REJECTED"],g=["FULFILLED"],p=["PENDING"];function v(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,d!==s&&m(this,d)}function f(d,u,_){this.promise=d,typeof u=="function"&&(this.onFulfilled=u,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function h(d,u,_){o(function(){var S;try{S=u(_)}catch(C){return a.reject(d,C)}S===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,S)})}function k(d){var u=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof u=="function")return function(){u.apply(d,arguments)}}function m(d,u){var _=!1;function S(z){_||(_=!0,a.reject(d,z))}function C(z){_||(_=!0,a.resolve(d,z))}var j=b(function(){u(C,S)});j.status==="error"&&S(j.value)}function b(d,u){var _={};try{_.value=d(u),_.status="success"}catch(S){_.status="error",_.value=S}return _}(r.exports=v).prototype.finally=function(d){if(typeof d!="function")return this;var u=this.constructor;return this.then(function(_){return u.resolve(d()).then(function(){return _})},function(_){return u.resolve(d()).then(function(){throw _})})},v.prototype.catch=function(d){return this.then(null,d)},v.prototype.then=function(d,u){if(typeof d!="function"&&this.state===g||typeof u!="function"&&this.state===l)return this;var _=new this.constructor(s);return this.state!==p?h(_,this.state===g?d:u,this.outcome):this.queue.push(new f(_,d,u)),_},f.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},f.prototype.otherCallFulfilled=function(d){h(this.promise,this.onFulfilled,d)},f.prototype.callRejected=function(d){a.reject(this.promise,d)},f.prototype.otherCallRejected=function(d){h(this.promise,this.onRejected,d)},a.resolve=function(d,u){var _=b(k,u);if(_.status==="error")return a.reject(d,_.value);var S=_.value;if(S)m(d,S);else{d.state=g,d.outcome=u;for(var C=-1,j=d.queue.length;++C<j;)d.queue[C].callFulfilled(u)}return d},a.reject=function(d,u){d.state=l,d.outcome=u;for(var _=-1,S=d.queue.length;++_<S;)d.queue[_].callRejected(u);return d},v.resolve=function(d){return d instanceof this?d:a.resolve(new this(s),d)},v.reject=function(d){var u=new this(s);return a.reject(u,d)},v.all=function(d){var u=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=d.length,S=!1;if(!_)return this.resolve([]);for(var C=new Array(_),j=0,z=-1,I=new this(s);++z<_;)D(d[z],z);return I;function D(U,ae){u.resolve(U).then(function(Q){C[ae]=Q,++j!==_||S||(S=!0,a.resolve(I,C))},function(Q){S||(S=!0,a.reject(I,Q))})}},v.race=function(d){var u=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=d.length,S=!1;if(!_)return this.resolve([]);for(var C=-1,j=new this(s);++C<_;)z=d[C],u.resolve(z).then(function(I){S||(S=!0,a.resolve(j,I))},function(I){S||(S=!0,a.reject(j,I))});var z;return j}},{immediate:36}],38:[function(n,r,i){var o={};(0,n("./lib/utils/common").assign)(o,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var o=n("./zlib/deflate"),s=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),g=n("./zlib/zstream"),p=Object.prototype.toString,v=0,f=-1,h=0,k=8;function m(d){if(!(this instanceof m))return new m(d);this.options=s.assign({level:f,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},d||{});var u=this.options;u.raw&&0<u.windowBits?u.windowBits=-u.windowBits:u.gzip&&0<u.windowBits&&u.windowBits<16&&(u.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var _=o.deflateInit2(this.strm,u.level,u.method,u.windowBits,u.memLevel,u.strategy);if(_!==v)throw new Error(l[_]);if(u.header&&o.deflateSetHeader(this.strm,u.header),u.dictionary){var S;if(S=typeof u.dictionary=="string"?a.string2buf(u.dictionary):p.call(u.dictionary)==="[object ArrayBuffer]"?new Uint8Array(u.dictionary):u.dictionary,(_=o.deflateSetDictionary(this.strm,S))!==v)throw new Error(l[_]);this._dict_set=!0}}function b(d,u){var _=new m(u);if(_.push(d,!0),_.err)throw _.msg||l[_.err];return _.result}m.prototype.push=function(d,u){var _,S,C=this.strm,j=this.options.chunkSize;if(this.ended)return!1;S=u===~~u?u:u===!0?4:0,typeof d=="string"?C.input=a.string2buf(d):p.call(d)==="[object ArrayBuffer]"?C.input=new Uint8Array(d):C.input=d,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new s.Buf8(j),C.next_out=0,C.avail_out=j),(_=o.deflate(C,S))!==1&&_!==v)return this.onEnd(_),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(s.shrinkBuf(C.output,C.next_out))):this.onData(s.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&_!==1);return S===4?(_=o.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===v):S!==2||(this.onEnd(v),!(C.avail_out=0))},m.prototype.onData=function(d){this.chunks.push(d)},m.prototype.onEnd=function(d){d===v&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},i.Deflate=m,i.deflate=b,i.deflateRaw=function(d,u){return(u=u||{}).raw=!0,b(d,u)},i.gzip=function(d,u){return(u=u||{}).gzip=!0,b(d,u)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var o=n("./zlib/inflate"),s=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),g=n("./zlib/messages"),p=n("./zlib/zstream"),v=n("./zlib/gzheader"),f=Object.prototype.toString;function h(m){if(!(this instanceof h))return new h(m);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},m||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||m&&m.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&!(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var d=o.inflateInit2(this.strm,b.windowBits);if(d!==l.Z_OK)throw new Error(g[d]);this.header=new v,o.inflateGetHeader(this.strm,this.header)}function k(m,b){var d=new h(b);if(d.push(m,!0),d.err)throw d.msg||g[d.err];return d.result}h.prototype.push=function(m,b){var d,u,_,S,C,j,z=this.strm,I=this.options.chunkSize,D=this.options.dictionary,U=!1;if(this.ended)return!1;u=b===~~b?b:b===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof m=="string"?z.input=a.binstring2buf(m):f.call(m)==="[object ArrayBuffer]"?z.input=new Uint8Array(m):z.input=m,z.next_in=0,z.avail_in=z.input.length;do{if(z.avail_out===0&&(z.output=new s.Buf8(I),z.next_out=0,z.avail_out=I),(d=o.inflate(z,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&D&&(j=typeof D=="string"?a.string2buf(D):f.call(D)==="[object ArrayBuffer]"?new Uint8Array(D):D,d=o.inflateSetDictionary(this.strm,j)),d===l.Z_BUF_ERROR&&U===!0&&(d=l.Z_OK,U=!1),d!==l.Z_STREAM_END&&d!==l.Z_OK)return this.onEnd(d),!(this.ended=!0);z.next_out&&(z.avail_out!==0&&d!==l.Z_STREAM_END&&(z.avail_in!==0||u!==l.Z_FINISH&&u!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=a.utf8border(z.output,z.next_out),S=z.next_out-_,C=a.buf2string(z.output,_),z.next_out=S,z.avail_out=I-S,S&&s.arraySet(z.output,z.output,_,S,0),this.onData(C)):this.onData(s.shrinkBuf(z.output,z.next_out)))),z.avail_in===0&&z.avail_out===0&&(U=!0)}while((0<z.avail_in||z.avail_out===0)&&d!==l.Z_STREAM_END);return d===l.Z_STREAM_END&&(u=l.Z_FINISH),u===l.Z_FINISH?(d=o.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===l.Z_OK):u!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(z.avail_out=0))},h.prototype.onData=function(m){this.chunks.push(m)},h.prototype.onEnd=function(m){m===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},i.Inflate=h,i.inflate=k,i.inflateRaw=function(m,b){return(b=b||{}).raw=!0,k(m,b)},i.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var p=g.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var v in p)p.hasOwnProperty(v)&&(l[v]=p[v])}}return l},i.shrinkBuf=function(l,g){return l.length===g?l:l.subarray?l.subarray(0,g):(l.length=g,l)};var s={arraySet:function(l,g,p,v,f){if(g.subarray&&l.subarray)l.set(g.subarray(p,p+v),f);else for(var h=0;h<v;h++)l[f+h]=g[p+h]},flattenChunks:function(l){var g,p,v,f,h,k;for(g=v=0,p=l.length;g<p;g++)v+=l[g].length;for(k=new Uint8Array(v),g=f=0,p=l.length;g<p;g++)h=l[g],k.set(h,f),f+=h.length;return k}},a={arraySet:function(l,g,p,v,f){for(var h=0;h<v;h++)l[f+h]=g[p+h]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,s)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(o)},{}],42:[function(n,r,i){var o=n("./common"),s=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new o.Buf8(256),g=0;g<256;g++)l[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function p(v,f){if(f<65537&&(v.subarray&&a||!v.subarray&&s))return String.fromCharCode.apply(null,o.shrinkBuf(v,f));for(var h="",k=0;k<f;k++)h+=String.fromCharCode(v[k]);return h}l[254]=l[254]=1,i.string2buf=function(v){var f,h,k,m,b,d=v.length,u=0;for(m=0;m<d;m++)(64512&(h=v.charCodeAt(m)))==55296&&m+1<d&&(64512&(k=v.charCodeAt(m+1)))==56320&&(h=65536+(h-55296<<10)+(k-56320),m++),u+=h<128?1:h<2048?2:h<65536?3:4;for(f=new o.Buf8(u),m=b=0;b<u;m++)(64512&(h=v.charCodeAt(m)))==55296&&m+1<d&&(64512&(k=v.charCodeAt(m+1)))==56320&&(h=65536+(h-55296<<10)+(k-56320),m++),h<128?f[b++]=h:(h<2048?f[b++]=192|h>>>6:(h<65536?f[b++]=224|h>>>12:(f[b++]=240|h>>>18,f[b++]=128|h>>>12&63),f[b++]=128|h>>>6&63),f[b++]=128|63&h);return f},i.buf2binstring=function(v){return p(v,v.length)},i.binstring2buf=function(v){for(var f=new o.Buf8(v.length),h=0,k=f.length;h<k;h++)f[h]=v.charCodeAt(h);return f},i.buf2string=function(v,f){var h,k,m,b,d=f||v.length,u=new Array(2*d);for(h=k=0;h<d;)if((m=v[h++])<128)u[k++]=m;else if(4<(b=l[m]))u[k++]=65533,h+=b-1;else{for(m&=b===2?31:b===3?15:7;1<b&&h<d;)m=m<<6|63&v[h++],b--;1<b?u[k++]=65533:m<65536?u[k++]=m:(m-=65536,u[k++]=55296|m>>10&1023,u[k++]=56320|1023&m)}return p(u,k)},i.utf8border=function(v,f){var h;for((f=f||v.length)>v.length&&(f=v.length),h=f-1;0<=h&&(192&v[h])==128;)h--;return h<0||h===0?f:h+l[v[h]]>f?h:f}},{"./common":41}],43:[function(n,r,i){r.exports=function(o,s,a,l){for(var g=65535&o|0,p=o>>>16&65535|0,v=0;a!==0;){for(a-=v=2e3<a?2e3:a;p=p+(g=g+s[l++]|0)|0,--v;);g%=65521,p%=65521}return g|p<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var o=function(){for(var s,a=[],l=0;l<256;l++){s=l;for(var g=0;g<8;g++)s=1&s?3988292384^s>>>1:s>>>1;a[l]=s}return a}();r.exports=function(s,a,l,g){var p=o,v=g+l;s^=-1;for(var f=g;f<v;f++)s=s>>>8^p[255&(s^a[f])];return-1^s}},{}],46:[function(n,r,i){var o,s=n("../utils/common"),a=n("./trees"),l=n("./adler32"),g=n("./crc32"),p=n("./messages"),v=0,f=4,h=0,k=-2,m=-1,b=4,d=2,u=8,_=9,S=286,C=30,j=19,z=2*S+1,I=15,D=3,U=258,ae=U+D+1,Q=42,L=113,y=1,Z=2,ce=3,Y=4;function G(c,A){return c.msg=p[A],A}function $(c){return(c<<1)-(4<c?9:0)}function q(c){for(var A=c.length;0<=--A;)c[A]=0}function P(c){var A=c.state,N=A.pending;N>c.avail_out&&(N=c.avail_out),N!==0&&(s.arraySet(c.output,A.pending_buf,A.pending_out,N,c.next_out),c.next_out+=N,A.pending_out+=N,c.total_out+=N,c.avail_out-=N,A.pending-=N,A.pending===0&&(A.pending_out=0))}function T(c,A){a._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,A),c.block_start=c.strstart,P(c.strm)}function le(c,A){c.pending_buf[c.pending++]=A}function ne(c,A){c.pending_buf[c.pending++]=A>>>8&255,c.pending_buf[c.pending++]=255&A}function ee(c,A){var N,F,w=c.max_chain_length,E=c.strstart,M=c.prev_length,W=c.nice_match,B=c.strstart>c.w_size-ae?c.strstart-(c.w_size-ae):0,R=c.window,X=c.w_mask,H=c.prev,re=c.strstart+U,ie=R[E+M-1],oe=R[E+M];c.prev_length>=c.good_match&&(w>>=2),W>c.lookahead&&(W=c.lookahead);do if(R[(N=A)+M]===oe&&R[N+M-1]===ie&&R[N]===R[E]&&R[++N]===R[E+1]){E+=2,N++;do;while(R[++E]===R[++N]&&R[++E]===R[++N]&&R[++E]===R[++N]&&R[++E]===R[++N]&&R[++E]===R[++N]&&R[++E]===R[++N]&&R[++E]===R[++N]&&R[++E]===R[++N]&&E<re);if(F=U-(re-E),E=re-U,M<F){if(c.match_start=A,W<=(M=F))break;ie=R[E+M-1],oe=R[E+M]}}while((A=H[A&X])>B&&--w!=0);return M<=c.lookahead?M:c.lookahead}function ye(c){var A,N,F,w,E,M,W,B,R,X,H=c.w_size;do{if(w=c.window_size-c.lookahead-c.strstart,c.strstart>=H+(H-ae)){for(s.arraySet(c.window,c.window,H,H,0),c.match_start-=H,c.strstart-=H,c.block_start-=H,A=N=c.hash_size;F=c.head[--A],c.head[A]=H<=F?F-H:0,--N;);for(A=N=H;F=c.prev[--A],c.prev[A]=H<=F?F-H:0,--N;);w+=H}if(c.strm.avail_in===0)break;if(M=c.strm,W=c.window,B=c.strstart+c.lookahead,R=w,X=void 0,X=M.avail_in,R<X&&(X=R),N=X===0?0:(M.avail_in-=X,s.arraySet(W,M.input,M.next_in,X,B),M.state.wrap===1?M.adler=l(M.adler,W,X,B):M.state.wrap===2&&(M.adler=g(M.adler,W,X,B)),M.next_in+=X,M.total_in+=X,X),c.lookahead+=N,c.lookahead+c.insert>=D)for(E=c.strstart-c.insert,c.ins_h=c.window[E],c.ins_h=(c.ins_h<<c.hash_shift^c.window[E+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[E+D-1])&c.hash_mask,c.prev[E&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=E,E++,c.insert--,!(c.lookahead+c.insert<D)););}while(c.lookahead<ae&&c.strm.avail_in!==0)}function be(c,A){for(var N,F;;){if(c.lookahead<ae){if(ye(c),c.lookahead<ae&&A===v)return y;if(c.lookahead===0)break}if(N=0,c.lookahead>=D&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+D-1])&c.hash_mask,N=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),N!==0&&c.strstart-N<=c.w_size-ae&&(c.match_length=ee(c,N)),c.match_length>=D)if(F=a._tr_tally(c,c.strstart-c.match_start,c.match_length-D),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=D){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+D-1])&c.hash_mask,N=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else F=a._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(F&&(T(c,!1),c.strm.avail_out===0))return y}return c.insert=c.strstart<D-1?c.strstart:D-1,A===f?(T(c,!0),c.strm.avail_out===0?ce:Y):c.last_lit&&(T(c,!1),c.strm.avail_out===0)?y:Z}function fe(c,A){for(var N,F,w;;){if(c.lookahead<ae){if(ye(c),c.lookahead<ae&&A===v)return y;if(c.lookahead===0)break}if(N=0,c.lookahead>=D&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+D-1])&c.hash_mask,N=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=D-1,N!==0&&c.prev_length<c.max_lazy_match&&c.strstart-N<=c.w_size-ae&&(c.match_length=ee(c,N),c.match_length<=5&&(c.strategy===1||c.match_length===D&&4096<c.strstart-c.match_start)&&(c.match_length=D-1)),c.prev_length>=D&&c.match_length<=c.prev_length){for(w=c.strstart+c.lookahead-D,F=a._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-D),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=w&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+D-1])&c.hash_mask,N=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=D-1,c.strstart++,F&&(T(c,!1),c.strm.avail_out===0))return y}else if(c.match_available){if((F=a._tr_tally(c,0,c.window[c.strstart-1]))&&T(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return y}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(F=a._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<D-1?c.strstart:D-1,A===f?(T(c,!0),c.strm.avail_out===0?ce:Y):c.last_lit&&(T(c,!1),c.strm.avail_out===0)?y:Z}function ge(c,A,N,F,w){this.good_length=c,this.max_lazy=A,this.nice_length=N,this.max_chain=F,this.func=w}function Ne(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=u,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*z),this.dyn_dtree=new s.Buf16(2*(2*C+1)),this.bl_tree=new s.Buf16(2*(2*j+1)),q(this.dyn_ltree),q(this.dyn_dtree),q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(I+1),this.heap=new s.Buf16(2*S+1),q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*S+1),q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function O(c){var A;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=d,(A=c.state).pending=0,A.pending_out=0,A.wrap<0&&(A.wrap=-A.wrap),A.status=A.wrap?Q:L,c.adler=A.wrap===2?0:1,A.last_flush=v,a._tr_init(A),h):G(c,k)}function V(c){var A=O(c);return A===h&&function(N){N.window_size=2*N.w_size,q(N.head),N.max_lazy_match=o[N.level].max_lazy,N.good_match=o[N.level].good_length,N.nice_match=o[N.level].nice_length,N.max_chain_length=o[N.level].max_chain,N.strstart=0,N.block_start=0,N.lookahead=0,N.insert=0,N.match_length=N.prev_length=D-1,N.match_available=0,N.ins_h=0}(c.state),A}function J(c,A,N,F,w,E){if(!c)return k;var M=1;if(A===m&&(A=6),F<0?(M=0,F=-F):15<F&&(M=2,F-=16),w<1||_<w||N!==u||F<8||15<F||A<0||9<A||E<0||b<E)return G(c,k);F===8&&(F=9);var W=new Ne;return(c.state=W).strm=c,W.wrap=M,W.gzhead=null,W.w_bits=F,W.w_size=1<<W.w_bits,W.w_mask=W.w_size-1,W.hash_bits=w+7,W.hash_size=1<<W.hash_bits,W.hash_mask=W.hash_size-1,W.hash_shift=~~((W.hash_bits+D-1)/D),W.window=new s.Buf8(2*W.w_size),W.head=new s.Buf16(W.hash_size),W.prev=new s.Buf16(W.w_size),W.lit_bufsize=1<<w+6,W.pending_buf_size=4*W.lit_bufsize,W.pending_buf=new s.Buf8(W.pending_buf_size),W.d_buf=1*W.lit_bufsize,W.l_buf=3*W.lit_bufsize,W.level=A,W.strategy=E,W.method=N,V(c)}o=[new ge(0,0,0,0,function(c,A){var N=65535;for(N>c.pending_buf_size-5&&(N=c.pending_buf_size-5);;){if(c.lookahead<=1){if(ye(c),c.lookahead===0&&A===v)return y;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var F=c.block_start+N;if((c.strstart===0||c.strstart>=F)&&(c.lookahead=c.strstart-F,c.strstart=F,T(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-ae&&(T(c,!1),c.strm.avail_out===0))return y}return c.insert=0,A===f?(T(c,!0),c.strm.avail_out===0?ce:Y):(c.strstart>c.block_start&&(T(c,!1),c.strm.avail_out),y)}),new ge(4,4,8,4,be),new ge(4,5,16,8,be),new ge(4,6,32,32,be),new ge(4,4,16,16,fe),new ge(8,16,32,32,fe),new ge(8,16,128,128,fe),new ge(8,32,128,256,fe),new ge(32,128,258,1024,fe),new ge(32,258,258,4096,fe)],i.deflateInit=function(c,A){return J(c,A,u,15,8,0)},i.deflateInit2=J,i.deflateReset=V,i.deflateResetKeep=O,i.deflateSetHeader=function(c,A){return c&&c.state?c.state.wrap!==2?k:(c.state.gzhead=A,h):k},i.deflate=function(c,A){var N,F,w,E;if(!c||!c.state||5<A||A<0)return c?G(c,k):k;if(F=c.state,!c.output||!c.input&&c.avail_in!==0||F.status===666&&A!==f)return G(c,c.avail_out===0?-5:k);if(F.strm=c,N=F.last_flush,F.last_flush=A,F.status===Q)if(F.wrap===2)c.adler=0,le(F,31),le(F,139),le(F,8),F.gzhead?(le(F,(F.gzhead.text?1:0)+(F.gzhead.hcrc?2:0)+(F.gzhead.extra?4:0)+(F.gzhead.name?8:0)+(F.gzhead.comment?16:0)),le(F,255&F.gzhead.time),le(F,F.gzhead.time>>8&255),le(F,F.gzhead.time>>16&255),le(F,F.gzhead.time>>24&255),le(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),le(F,255&F.gzhead.os),F.gzhead.extra&&F.gzhead.extra.length&&(le(F,255&F.gzhead.extra.length),le(F,F.gzhead.extra.length>>8&255)),F.gzhead.hcrc&&(c.adler=g(c.adler,F.pending_buf,F.pending,0)),F.gzindex=0,F.status=69):(le(F,0),le(F,0),le(F,0),le(F,0),le(F,0),le(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),le(F,3),F.status=L);else{var M=u+(F.w_bits-8<<4)<<8;M|=(2<=F.strategy||F.level<2?0:F.level<6?1:F.level===6?2:3)<<6,F.strstart!==0&&(M|=32),M+=31-M%31,F.status=L,ne(F,M),F.strstart!==0&&(ne(F,c.adler>>>16),ne(F,65535&c.adler)),c.adler=1}if(F.status===69)if(F.gzhead.extra){for(w=F.pending;F.gzindex<(65535&F.gzhead.extra.length)&&(F.pending!==F.pending_buf_size||(F.gzhead.hcrc&&F.pending>w&&(c.adler=g(c.adler,F.pending_buf,F.pending-w,w)),P(c),w=F.pending,F.pending!==F.pending_buf_size));)le(F,255&F.gzhead.extra[F.gzindex]),F.gzindex++;F.gzhead.hcrc&&F.pending>w&&(c.adler=g(c.adler,F.pending_buf,F.pending-w,w)),F.gzindex===F.gzhead.extra.length&&(F.gzindex=0,F.status=73)}else F.status=73;if(F.status===73)if(F.gzhead.name){w=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>w&&(c.adler=g(c.adler,F.pending_buf,F.pending-w,w)),P(c),w=F.pending,F.pending===F.pending_buf_size)){E=1;break}E=F.gzindex<F.gzhead.name.length?255&F.gzhead.name.charCodeAt(F.gzindex++):0,le(F,E)}while(E!==0);F.gzhead.hcrc&&F.pending>w&&(c.adler=g(c.adler,F.pending_buf,F.pending-w,w)),E===0&&(F.gzindex=0,F.status=91)}else F.status=91;if(F.status===91)if(F.gzhead.comment){w=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>w&&(c.adler=g(c.adler,F.pending_buf,F.pending-w,w)),P(c),w=F.pending,F.pending===F.pending_buf_size)){E=1;break}E=F.gzindex<F.gzhead.comment.length?255&F.gzhead.comment.charCodeAt(F.gzindex++):0,le(F,E)}while(E!==0);F.gzhead.hcrc&&F.pending>w&&(c.adler=g(c.adler,F.pending_buf,F.pending-w,w)),E===0&&(F.status=103)}else F.status=103;if(F.status===103&&(F.gzhead.hcrc?(F.pending+2>F.pending_buf_size&&P(c),F.pending+2<=F.pending_buf_size&&(le(F,255&c.adler),le(F,c.adler>>8&255),c.adler=0,F.status=L)):F.status=L),F.pending!==0){if(P(c),c.avail_out===0)return F.last_flush=-1,h}else if(c.avail_in===0&&$(A)<=$(N)&&A!==f)return G(c,-5);if(F.status===666&&c.avail_in!==0)return G(c,-5);if(c.avail_in!==0||F.lookahead!==0||A!==v&&F.status!==666){var W=F.strategy===2?function(B,R){for(var X;;){if(B.lookahead===0&&(ye(B),B.lookahead===0)){if(R===v)return y;break}if(B.match_length=0,X=a._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++,X&&(T(B,!1),B.strm.avail_out===0))return y}return B.insert=0,R===f?(T(B,!0),B.strm.avail_out===0?ce:Y):B.last_lit&&(T(B,!1),B.strm.avail_out===0)?y:Z}(F,A):F.strategy===3?function(B,R){for(var X,H,re,ie,oe=B.window;;){if(B.lookahead<=U){if(ye(B),B.lookahead<=U&&R===v)return y;if(B.lookahead===0)break}if(B.match_length=0,B.lookahead>=D&&0<B.strstart&&(H=oe[re=B.strstart-1])===oe[++re]&&H===oe[++re]&&H===oe[++re]){ie=B.strstart+U;do;while(H===oe[++re]&&H===oe[++re]&&H===oe[++re]&&H===oe[++re]&&H===oe[++re]&&H===oe[++re]&&H===oe[++re]&&H===oe[++re]&&re<ie);B.match_length=U-(ie-re),B.match_length>B.lookahead&&(B.match_length=B.lookahead)}if(B.match_length>=D?(X=a._tr_tally(B,1,B.match_length-D),B.lookahead-=B.match_length,B.strstart+=B.match_length,B.match_length=0):(X=a._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++),X&&(T(B,!1),B.strm.avail_out===0))return y}return B.insert=0,R===f?(T(B,!0),B.strm.avail_out===0?ce:Y):B.last_lit&&(T(B,!1),B.strm.avail_out===0)?y:Z}(F,A):o[F.level].func(F,A);if(W!==ce&&W!==Y||(F.status=666),W===y||W===ce)return c.avail_out===0&&(F.last_flush=-1),h;if(W===Z&&(A===1?a._tr_align(F):A!==5&&(a._tr_stored_block(F,0,0,!1),A===3&&(q(F.head),F.lookahead===0&&(F.strstart=0,F.block_start=0,F.insert=0))),P(c),c.avail_out===0))return F.last_flush=-1,h}return A!==f?h:F.wrap<=0?1:(F.wrap===2?(le(F,255&c.adler),le(F,c.adler>>8&255),le(F,c.adler>>16&255),le(F,c.adler>>24&255),le(F,255&c.total_in),le(F,c.total_in>>8&255),le(F,c.total_in>>16&255),le(F,c.total_in>>24&255)):(ne(F,c.adler>>>16),ne(F,65535&c.adler)),P(c),0<F.wrap&&(F.wrap=-F.wrap),F.pending!==0?h:1)},i.deflateEnd=function(c){var A;return c&&c.state?(A=c.state.status)!==Q&&A!==69&&A!==73&&A!==91&&A!==103&&A!==L&&A!==666?G(c,k):(c.state=null,A===L?G(c,-3):h):k},i.deflateSetDictionary=function(c,A){var N,F,w,E,M,W,B,R,X=A.length;if(!c||!c.state||(E=(N=c.state).wrap)===2||E===1&&N.status!==Q||N.lookahead)return k;for(E===1&&(c.adler=l(c.adler,A,X,0)),N.wrap=0,X>=N.w_size&&(E===0&&(q(N.head),N.strstart=0,N.block_start=0,N.insert=0),R=new s.Buf8(N.w_size),s.arraySet(R,A,X-N.w_size,N.w_size,0),A=R,X=N.w_size),M=c.avail_in,W=c.next_in,B=c.input,c.avail_in=X,c.next_in=0,c.input=A,ye(N);N.lookahead>=D;){for(F=N.strstart,w=N.lookahead-(D-1);N.ins_h=(N.ins_h<<N.hash_shift^N.window[F+D-1])&N.hash_mask,N.prev[F&N.w_mask]=N.head[N.ins_h],N.head[N.ins_h]=F,F++,--w;);N.strstart=F,N.lookahead=D-1,ye(N)}return N.strstart+=N.lookahead,N.block_start=N.strstart,N.insert=N.lookahead,N.lookahead=0,N.match_length=N.prev_length=D-1,N.match_available=0,c.next_in=W,c.input=B,c.avail_in=M,N.wrap=E,h},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(o,s){var a,l,g,p,v,f,h,k,m,b,d,u,_,S,C,j,z,I,D,U,ae,Q,L,y,Z;a=o.state,l=o.next_in,y=o.input,g=l+(o.avail_in-5),p=o.next_out,Z=o.output,v=p-(s-o.avail_out),f=p+(o.avail_out-257),h=a.dmax,k=a.wsize,m=a.whave,b=a.wnext,d=a.window,u=a.hold,_=a.bits,S=a.lencode,C=a.distcode,j=(1<<a.lenbits)-1,z=(1<<a.distbits)-1;e:do{_<15&&(u+=y[l++]<<_,_+=8,u+=y[l++]<<_,_+=8),I=S[u&j];t:for(;;){if(u>>>=D=I>>>24,_-=D,(D=I>>>16&255)===0)Z[p++]=65535&I;else{if(!(16&D)){if(!(64&D)){I=S[(65535&I)+(u&(1<<D)-1)];continue t}if(32&D){a.mode=12;break e}o.msg="invalid literal/length code",a.mode=30;break e}U=65535&I,(D&=15)&&(_<D&&(u+=y[l++]<<_,_+=8),U+=u&(1<<D)-1,u>>>=D,_-=D),_<15&&(u+=y[l++]<<_,_+=8,u+=y[l++]<<_,_+=8),I=C[u&z];n:for(;;){if(u>>>=D=I>>>24,_-=D,!(16&(D=I>>>16&255))){if(!(64&D)){I=C[(65535&I)+(u&(1<<D)-1)];continue n}o.msg="invalid distance code",a.mode=30;break e}if(ae=65535&I,_<(D&=15)&&(u+=y[l++]<<_,(_+=8)<D&&(u+=y[l++]<<_,_+=8)),h<(ae+=u&(1<<D)-1)){o.msg="invalid distance too far back",a.mode=30;break e}if(u>>>=D,_-=D,(D=p-v)<ae){if(m<(D=ae-D)&&a.sane){o.msg="invalid distance too far back",a.mode=30;break e}if(L=d,(Q=0)===b){if(Q+=k-D,D<U){for(U-=D;Z[p++]=d[Q++],--D;);Q=p-ae,L=Z}}else if(b<D){if(Q+=k+b-D,(D-=b)<U){for(U-=D;Z[p++]=d[Q++],--D;);if(Q=0,b<U){for(U-=D=b;Z[p++]=d[Q++],--D;);Q=p-ae,L=Z}}}else if(Q+=b-D,D<U){for(U-=D;Z[p++]=d[Q++],--D;);Q=p-ae,L=Z}for(;2<U;)Z[p++]=L[Q++],Z[p++]=L[Q++],Z[p++]=L[Q++],U-=3;U&&(Z[p++]=L[Q++],1<U&&(Z[p++]=L[Q++]))}else{for(Q=p-ae;Z[p++]=Z[Q++],Z[p++]=Z[Q++],Z[p++]=Z[Q++],2<(U-=3););U&&(Z[p++]=Z[Q++],1<U&&(Z[p++]=Z[Q++]))}break}}break}}while(l<g&&p<f);l-=U=_>>3,u&=(1<<(_-=U<<3))-1,o.next_in=l,o.next_out=p,o.avail_in=l<g?g-l+5:5-(l-g),o.avail_out=p<f?f-p+257:257-(p-f),a.hold=u,a.bits=_}},{}],49:[function(n,r,i){var o=n("../utils/common"),s=n("./adler32"),a=n("./crc32"),l=n("./inffast"),g=n("./inftrees"),p=1,v=2,f=0,h=-2,k=1,m=852,b=592;function d(Q){return(Q>>>24&255)+(Q>>>8&65280)+((65280&Q)<<8)+((255&Q)<<24)}function u(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(Q){var L;return Q&&Q.state?(L=Q.state,Q.total_in=Q.total_out=L.total=0,Q.msg="",L.wrap&&(Q.adler=1&L.wrap),L.mode=k,L.last=0,L.havedict=0,L.dmax=32768,L.head=null,L.hold=0,L.bits=0,L.lencode=L.lendyn=new o.Buf32(m),L.distcode=L.distdyn=new o.Buf32(b),L.sane=1,L.back=-1,f):h}function S(Q){var L;return Q&&Q.state?((L=Q.state).wsize=0,L.whave=0,L.wnext=0,_(Q)):h}function C(Q,L){var y,Z;return Q&&Q.state?(Z=Q.state,L<0?(y=0,L=-L):(y=1+(L>>4),L<48&&(L&=15)),L&&(L<8||15<L)?h:(Z.window!==null&&Z.wbits!==L&&(Z.window=null),Z.wrap=y,Z.wbits=L,S(Q))):h}function j(Q,L){var y,Z;return Q?(Z=new u,(Q.state=Z).window=null,(y=C(Q,L))!==f&&(Q.state=null),y):h}var z,I,D=!0;function U(Q){if(D){var L;for(z=new o.Buf32(512),I=new o.Buf32(32),L=0;L<144;)Q.lens[L++]=8;for(;L<256;)Q.lens[L++]=9;for(;L<280;)Q.lens[L++]=7;for(;L<288;)Q.lens[L++]=8;for(g(p,Q.lens,0,288,z,0,Q.work,{bits:9}),L=0;L<32;)Q.lens[L++]=5;g(v,Q.lens,0,32,I,0,Q.work,{bits:5}),D=!1}Q.lencode=z,Q.lenbits=9,Q.distcode=I,Q.distbits=5}function ae(Q,L,y,Z){var ce,Y=Q.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new o.Buf8(Y.wsize)),Z>=Y.wsize?(o.arraySet(Y.window,L,y-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(Z<(ce=Y.wsize-Y.wnext)&&(ce=Z),o.arraySet(Y.window,L,y-Z,ce,Y.wnext),(Z-=ce)?(o.arraySet(Y.window,L,y-Z,Z,0),Y.wnext=Z,Y.whave=Y.wsize):(Y.wnext+=ce,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=ce))),0}i.inflateReset=S,i.inflateReset2=C,i.inflateResetKeep=_,i.inflateInit=function(Q){return j(Q,15)},i.inflateInit2=j,i.inflate=function(Q,L){var y,Z,ce,Y,G,$,q,P,T,le,ne,ee,ye,be,fe,ge,Ne,O,V,J,c,A,N,F,w=0,E=new o.Buf8(4),M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!Q||!Q.state||!Q.output||!Q.input&&Q.avail_in!==0)return h;(y=Q.state).mode===12&&(y.mode=13),G=Q.next_out,ce=Q.output,q=Q.avail_out,Y=Q.next_in,Z=Q.input,$=Q.avail_in,P=y.hold,T=y.bits,le=$,ne=q,A=f;e:for(;;)switch(y.mode){case k:if(y.wrap===0){y.mode=13;break}for(;T<16;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(2&y.wrap&&P===35615){E[y.check=0]=255&P,E[1]=P>>>8&255,y.check=a(y.check,E,2,0),T=P=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&P)<<8)+(P>>8))%31){Q.msg="incorrect header check",y.mode=30;break}if((15&P)!=8){Q.msg="unknown compression method",y.mode=30;break}if(T-=4,c=8+(15&(P>>>=4)),y.wbits===0)y.wbits=c;else if(c>y.wbits){Q.msg="invalid window size",y.mode=30;break}y.dmax=1<<c,Q.adler=y.check=1,y.mode=512&P?10:12,T=P=0;break;case 2:for(;T<16;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(y.flags=P,(255&y.flags)!=8){Q.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){Q.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=P>>8&1),512&y.flags&&(E[0]=255&P,E[1]=P>>>8&255,y.check=a(y.check,E,2,0)),T=P=0,y.mode=3;case 3:for(;T<32;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}y.head&&(y.head.time=P),512&y.flags&&(E[0]=255&P,E[1]=P>>>8&255,E[2]=P>>>16&255,E[3]=P>>>24&255,y.check=a(y.check,E,4,0)),T=P=0,y.mode=4;case 4:for(;T<16;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}y.head&&(y.head.xflags=255&P,y.head.os=P>>8),512&y.flags&&(E[0]=255&P,E[1]=P>>>8&255,y.check=a(y.check,E,2,0)),T=P=0,y.mode=5;case 5:if(1024&y.flags){for(;T<16;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}y.length=P,y.head&&(y.head.extra_len=P),512&y.flags&&(E[0]=255&P,E[1]=P>>>8&255,y.check=a(y.check,E,2,0)),T=P=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&($<(ee=y.length)&&(ee=$),ee&&(y.head&&(c=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),o.arraySet(y.head.extra,Z,Y,ee,c)),512&y.flags&&(y.check=a(y.check,Z,ee,Y)),$-=ee,Y+=ee,y.length-=ee),y.length))break e;y.length=0,y.mode=7;case 7:if(2048&y.flags){if($===0)break e;for(ee=0;c=Z[Y+ee++],y.head&&c&&y.length<65536&&(y.head.name+=String.fromCharCode(c)),c&&ee<$;);if(512&y.flags&&(y.check=a(y.check,Z,ee,Y)),$-=ee,Y+=ee,c)break e}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if($===0)break e;for(ee=0;c=Z[Y+ee++],y.head&&c&&y.length<65536&&(y.head.comment+=String.fromCharCode(c)),c&&ee<$;);if(512&y.flags&&(y.check=a(y.check,Z,ee,Y)),$-=ee,Y+=ee,c)break e}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;T<16;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(P!==(65535&y.check)){Q.msg="header crc mismatch",y.mode=30;break}T=P=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),Q.adler=y.check=0,y.mode=12;break;case 10:for(;T<32;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}Q.adler=y.check=d(P),T=P=0,y.mode=11;case 11:if(y.havedict===0)return Q.next_out=G,Q.avail_out=q,Q.next_in=Y,Q.avail_in=$,y.hold=P,y.bits=T,2;Q.adler=y.check=1,y.mode=12;case 12:if(L===5||L===6)break e;case 13:if(y.last){P>>>=7&T,T-=7&T,y.mode=27;break}for(;T<3;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}switch(y.last=1&P,T-=1,3&(P>>>=1)){case 0:y.mode=14;break;case 1:if(U(y),y.mode=20,L!==6)break;P>>>=2,T-=2;break e;case 2:y.mode=17;break;case 3:Q.msg="invalid block type",y.mode=30}P>>>=2,T-=2;break;case 14:for(P>>>=7&T,T-=7&T;T<32;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if((65535&P)!=(P>>>16^65535)){Q.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&P,T=P=0,y.mode=15,L===6)break e;case 15:y.mode=16;case 16:if(ee=y.length){if($<ee&&(ee=$),q<ee&&(ee=q),ee===0)break e;o.arraySet(ce,Z,Y,ee,G),$-=ee,Y+=ee,q-=ee,G+=ee,y.length-=ee;break}y.mode=12;break;case 17:for(;T<14;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(y.nlen=257+(31&P),P>>>=5,T-=5,y.ndist=1+(31&P),P>>>=5,T-=5,y.ncode=4+(15&P),P>>>=4,T-=4,286<y.nlen||30<y.ndist){Q.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;T<3;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}y.lens[M[y.have++]]=7&P,P>>>=3,T-=3}for(;y.have<19;)y.lens[M[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,N={bits:y.lenbits},A=g(0,y.lens,0,19,y.lencode,0,y.work,N),y.lenbits=N.bits,A){Q.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;ge=(w=y.lencode[P&(1<<y.lenbits)-1])>>>16&255,Ne=65535&w,!((fe=w>>>24)<=T);){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(Ne<16)P>>>=fe,T-=fe,y.lens[y.have++]=Ne;else{if(Ne===16){for(F=fe+2;T<F;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(P>>>=fe,T-=fe,y.have===0){Q.msg="invalid bit length repeat",y.mode=30;break}c=y.lens[y.have-1],ee=3+(3&P),P>>>=2,T-=2}else if(Ne===17){for(F=fe+3;T<F;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}T-=fe,c=0,ee=3+(7&(P>>>=fe)),P>>>=3,T-=3}else{for(F=fe+7;T<F;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}T-=fe,c=0,ee=11+(127&(P>>>=fe)),P>>>=7,T-=7}if(y.have+ee>y.nlen+y.ndist){Q.msg="invalid bit length repeat",y.mode=30;break}for(;ee--;)y.lens[y.have++]=c}}if(y.mode===30)break;if(y.lens[256]===0){Q.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,N={bits:y.lenbits},A=g(p,y.lens,0,y.nlen,y.lencode,0,y.work,N),y.lenbits=N.bits,A){Q.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,N={bits:y.distbits},A=g(v,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,N),y.distbits=N.bits,A){Q.msg="invalid distances set",y.mode=30;break}if(y.mode=20,L===6)break e;case 20:y.mode=21;case 21:if(6<=$&&258<=q){Q.next_out=G,Q.avail_out=q,Q.next_in=Y,Q.avail_in=$,y.hold=P,y.bits=T,l(Q,ne),G=Q.next_out,ce=Q.output,q=Q.avail_out,Y=Q.next_in,Z=Q.input,$=Q.avail_in,P=y.hold,T=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;ge=(w=y.lencode[P&(1<<y.lenbits)-1])>>>16&255,Ne=65535&w,!((fe=w>>>24)<=T);){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(ge&&!(240&ge)){for(O=fe,V=ge,J=Ne;ge=(w=y.lencode[J+((P&(1<<O+V)-1)>>O)])>>>16&255,Ne=65535&w,!(O+(fe=w>>>24)<=T);){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}P>>>=O,T-=O,y.back+=O}if(P>>>=fe,T-=fe,y.back+=fe,y.length=Ne,ge===0){y.mode=26;break}if(32&ge){y.back=-1,y.mode=12;break}if(64&ge){Q.msg="invalid literal/length code",y.mode=30;break}y.extra=15&ge,y.mode=22;case 22:if(y.extra){for(F=y.extra;T<F;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}y.length+=P&(1<<y.extra)-1,P>>>=y.extra,T-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;ge=(w=y.distcode[P&(1<<y.distbits)-1])>>>16&255,Ne=65535&w,!((fe=w>>>24)<=T);){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(!(240&ge)){for(O=fe,V=ge,J=Ne;ge=(w=y.distcode[J+((P&(1<<O+V)-1)>>O)])>>>16&255,Ne=65535&w,!(O+(fe=w>>>24)<=T);){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}P>>>=O,T-=O,y.back+=O}if(P>>>=fe,T-=fe,y.back+=fe,64&ge){Q.msg="invalid distance code",y.mode=30;break}y.offset=Ne,y.extra=15&ge,y.mode=24;case 24:if(y.extra){for(F=y.extra;T<F;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}y.offset+=P&(1<<y.extra)-1,P>>>=y.extra,T-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){Q.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(q===0)break e;if(ee=ne-q,y.offset>ee){if((ee=y.offset-ee)>y.whave&&y.sane){Q.msg="invalid distance too far back",y.mode=30;break}ye=ee>y.wnext?(ee-=y.wnext,y.wsize-ee):y.wnext-ee,ee>y.length&&(ee=y.length),be=y.window}else be=ce,ye=G-y.offset,ee=y.length;for(q<ee&&(ee=q),q-=ee,y.length-=ee;ce[G++]=be[ye++],--ee;);y.length===0&&(y.mode=21);break;case 26:if(q===0)break e;ce[G++]=y.length,q--,y.mode=21;break;case 27:if(y.wrap){for(;T<32;){if($===0)break e;$--,P|=Z[Y++]<<T,T+=8}if(ne-=q,Q.total_out+=ne,y.total+=ne,ne&&(Q.adler=y.check=y.flags?a(y.check,ce,ne,G-ne):s(y.check,ce,ne,G-ne)),ne=q,(y.flags?P:d(P))!==y.check){Q.msg="incorrect data check",y.mode=30;break}T=P=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;T<32;){if($===0)break e;$--,P+=Z[Y++]<<T,T+=8}if(P!==(4294967295&y.total)){Q.msg="incorrect length check",y.mode=30;break}T=P=0}y.mode=29;case 29:A=1;break e;case 30:A=-3;break e;case 31:return-4;case 32:default:return h}return Q.next_out=G,Q.avail_out=q,Q.next_in=Y,Q.avail_in=$,y.hold=P,y.bits=T,(y.wsize||ne!==Q.avail_out&&y.mode<30&&(y.mode<27||L!==4))&&ae(Q,Q.output,Q.next_out,ne-Q.avail_out)?(y.mode=31,-4):(le-=Q.avail_in,ne-=Q.avail_out,Q.total_in+=le,Q.total_out+=ne,y.total+=ne,y.wrap&&ne&&(Q.adler=y.check=y.flags?a(y.check,ce,ne,Q.next_out-ne):s(y.check,ce,ne,Q.next_out-ne)),Q.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(le==0&&ne===0||L===4)&&A===f&&(A=-5),A)},i.inflateEnd=function(Q){if(!Q||!Q.state)return h;var L=Q.state;return L.window&&(L.window=null),Q.state=null,f},i.inflateGetHeader=function(Q,L){var y;return Q&&Q.state&&2&(y=Q.state).wrap?((y.head=L).done=!1,f):h},i.inflateSetDictionary=function(Q,L){var y,Z=L.length;return Q&&Q.state?(y=Q.state).wrap!==0&&y.mode!==11?h:y.mode===11&&s(1,L,Z,0)!==y.check?-3:ae(Q,L,Z,Z)?(y.mode=31,-4):(y.havedict=1,f):h},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var o=n("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(p,v,f,h,k,m,b,d){var u,_,S,C,j,z,I,D,U,ae=d.bits,Q=0,L=0,y=0,Z=0,ce=0,Y=0,G=0,$=0,q=0,P=0,T=null,le=0,ne=new o.Buf16(16),ee=new o.Buf16(16),ye=null,be=0;for(Q=0;Q<=15;Q++)ne[Q]=0;for(L=0;L<h;L++)ne[v[f+L]]++;for(ce=ae,Z=15;1<=Z&&ne[Z]===0;Z--);if(Z<ce&&(ce=Z),Z===0)return k[m++]=20971520,k[m++]=20971520,d.bits=1,0;for(y=1;y<Z&&ne[y]===0;y++);for(ce<y&&(ce=y),Q=$=1;Q<=15;Q++)if($<<=1,($-=ne[Q])<0)return-1;if(0<$&&(p===0||Z!==1))return-1;for(ee[1]=0,Q=1;Q<15;Q++)ee[Q+1]=ee[Q]+ne[Q];for(L=0;L<h;L++)v[f+L]!==0&&(b[ee[v[f+L]]++]=L);if(z=p===0?(T=ye=b,19):p===1?(T=s,le-=257,ye=a,be-=257,256):(T=l,ye=g,-1),Q=y,j=m,G=L=P=0,S=-1,C=(q=1<<(Y=ce))-1,p===1&&852<q||p===2&&592<q)return 1;for(;;){for(I=Q-G,U=b[L]<z?(D=0,b[L]):b[L]>z?(D=ye[be+b[L]],T[le+b[L]]):(D=96,0),u=1<<Q-G,y=_=1<<Y;k[j+(P>>G)+(_-=u)]=I<<24|D<<16|U|0,_!==0;);for(u=1<<Q-1;P&u;)u>>=1;if(u!==0?(P&=u-1,P+=u):P=0,L++,--ne[Q]==0){if(Q===Z)break;Q=v[f+b[L]]}if(ce<Q&&(P&C)!==S){for(G===0&&(G=ce),j+=y,$=1<<(Y=Q-G);Y+G<Z&&!(($-=ne[Y+G])<=0);)Y++,$<<=1;if(q+=1<<Y,p===1&&852<q||p===2&&592<q)return 1;k[S=P&C]=ce<<24|Y<<16|j-m|0}}return P!==0&&(k[j+P]=Q-G<<24|64<<16|0),d.bits=ce,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var o=n("../utils/common"),s=0,a=1;function l(w){for(var E=w.length;0<=--E;)w[E]=0}var g=0,p=29,v=256,f=v+1+p,h=30,k=19,m=2*f+1,b=15,d=16,u=7,_=256,S=16,C=17,j=18,z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],I=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ae=new Array(2*(f+2));l(ae);var Q=new Array(2*h);l(Q);var L=new Array(512);l(L);var y=new Array(256);l(y);var Z=new Array(p);l(Z);var ce,Y,G,$=new Array(h);function q(w,E,M,W,B){this.static_tree=w,this.extra_bits=E,this.extra_base=M,this.elems=W,this.max_length=B,this.has_stree=w&&w.length}function P(w,E){this.dyn_tree=w,this.max_code=0,this.stat_desc=E}function T(w){return w<256?L[w]:L[256+(w>>>7)]}function le(w,E){w.pending_buf[w.pending++]=255&E,w.pending_buf[w.pending++]=E>>>8&255}function ne(w,E,M){w.bi_valid>d-M?(w.bi_buf|=E<<w.bi_valid&65535,le(w,w.bi_buf),w.bi_buf=E>>d-w.bi_valid,w.bi_valid+=M-d):(w.bi_buf|=E<<w.bi_valid&65535,w.bi_valid+=M)}function ee(w,E,M){ne(w,M[2*E],M[2*E+1])}function ye(w,E){for(var M=0;M|=1&w,w>>>=1,M<<=1,0<--E;);return M>>>1}function be(w,E,M){var W,B,R=new Array(b+1),X=0;for(W=1;W<=b;W++)R[W]=X=X+M[W-1]<<1;for(B=0;B<=E;B++){var H=w[2*B+1];H!==0&&(w[2*B]=ye(R[H]++,H))}}function fe(w){var E;for(E=0;E<f;E++)w.dyn_ltree[2*E]=0;for(E=0;E<h;E++)w.dyn_dtree[2*E]=0;for(E=0;E<k;E++)w.bl_tree[2*E]=0;w.dyn_ltree[2*_]=1,w.opt_len=w.static_len=0,w.last_lit=w.matches=0}function ge(w){8<w.bi_valid?le(w,w.bi_buf):0<w.bi_valid&&(w.pending_buf[w.pending++]=w.bi_buf),w.bi_buf=0,w.bi_valid=0}function Ne(w,E,M,W){var B=2*E,R=2*M;return w[B]<w[R]||w[B]===w[R]&&W[E]<=W[M]}function O(w,E,M){for(var W=w.heap[M],B=M<<1;B<=w.heap_len&&(B<w.heap_len&&Ne(E,w.heap[B+1],w.heap[B],w.depth)&&B++,!Ne(E,W,w.heap[B],w.depth));)w.heap[M]=w.heap[B],M=B,B<<=1;w.heap[M]=W}function V(w,E,M){var W,B,R,X,H=0;if(w.last_lit!==0)for(;W=w.pending_buf[w.d_buf+2*H]<<8|w.pending_buf[w.d_buf+2*H+1],B=w.pending_buf[w.l_buf+H],H++,W===0?ee(w,B,E):(ee(w,(R=y[B])+v+1,E),(X=z[R])!==0&&ne(w,B-=Z[R],X),ee(w,R=T(--W),M),(X=I[R])!==0&&ne(w,W-=$[R],X)),H<w.last_lit;);ee(w,_,E)}function J(w,E){var M,W,B,R=E.dyn_tree,X=E.stat_desc.static_tree,H=E.stat_desc.has_stree,re=E.stat_desc.elems,ie=-1;for(w.heap_len=0,w.heap_max=m,M=0;M<re;M++)R[2*M]!==0?(w.heap[++w.heap_len]=ie=M,w.depth[M]=0):R[2*M+1]=0;for(;w.heap_len<2;)R[2*(B=w.heap[++w.heap_len]=ie<2?++ie:0)]=1,w.depth[B]=0,w.opt_len--,H&&(w.static_len-=X[2*B+1]);for(E.max_code=ie,M=w.heap_len>>1;1<=M;M--)O(w,R,M);for(B=re;M=w.heap[1],w.heap[1]=w.heap[w.heap_len--],O(w,R,1),W=w.heap[1],w.heap[--w.heap_max]=M,w.heap[--w.heap_max]=W,R[2*B]=R[2*M]+R[2*W],w.depth[B]=(w.depth[M]>=w.depth[W]?w.depth[M]:w.depth[W])+1,R[2*M+1]=R[2*W+1]=B,w.heap[1]=B++,O(w,R,1),2<=w.heap_len;);w.heap[--w.heap_max]=w.heap[1],function(oe,te){var de,ue,je,he,et,ht,We=te.dyn_tree,_n=te.max_code,Xn=te.stat_desc.static_tree,qn=te.stat_desc.has_stree,er=te.stat_desc.extra_bits,tr=te.stat_desc.extra_base,Et=te.stat_desc.max_length,tt=0;for(he=0;he<=b;he++)oe.bl_count[he]=0;for(We[2*oe.heap[oe.heap_max]+1]=0,de=oe.heap_max+1;de<m;de++)Et<(he=We[2*We[2*(ue=oe.heap[de])+1]+1]+1)&&(he=Et,tt++),We[2*ue+1]=he,_n<ue||(oe.bl_count[he]++,et=0,tr<=ue&&(et=er[ue-tr]),ht=We[2*ue],oe.opt_len+=ht*(he+et),qn&&(oe.static_len+=ht*(Xn[2*ue+1]+et)));if(tt!==0){do{for(he=Et-1;oe.bl_count[he]===0;)he--;oe.bl_count[he]--,oe.bl_count[he+1]+=2,oe.bl_count[Et]--,tt-=2}while(0<tt);for(he=Et;he!==0;he--)for(ue=oe.bl_count[he];ue!==0;)_n<(je=oe.heap[--de])||(We[2*je+1]!==he&&(oe.opt_len+=(he-We[2*je+1])*We[2*je],We[2*je+1]=he),ue--)}}(w,E),be(R,ie,w.bl_count)}function c(w,E,M){var W,B,R=-1,X=E[1],H=0,re=7,ie=4;for(X===0&&(re=138,ie=3),E[2*(M+1)+1]=65535,W=0;W<=M;W++)B=X,X=E[2*(W+1)+1],++H<re&&B===X||(H<ie?w.bl_tree[2*B]+=H:B!==0?(B!==R&&w.bl_tree[2*B]++,w.bl_tree[2*S]++):H<=10?w.bl_tree[2*C]++:w.bl_tree[2*j]++,R=B,ie=(H=0)===X?(re=138,3):B===X?(re=6,3):(re=7,4))}function A(w,E,M){var W,B,R=-1,X=E[1],H=0,re=7,ie=4;for(X===0&&(re=138,ie=3),W=0;W<=M;W++)if(B=X,X=E[2*(W+1)+1],!(++H<re&&B===X)){if(H<ie)for(;ee(w,B,w.bl_tree),--H!=0;);else B!==0?(B!==R&&(ee(w,B,w.bl_tree),H--),ee(w,S,w.bl_tree),ne(w,H-3,2)):H<=10?(ee(w,C,w.bl_tree),ne(w,H-3,3)):(ee(w,j,w.bl_tree),ne(w,H-11,7));R=B,ie=(H=0)===X?(re=138,3):B===X?(re=6,3):(re=7,4)}}l($);var N=!1;function F(w,E,M,W){ne(w,(g<<1)+(W?1:0),3),function(B,R,X,H){ge(B),le(B,X),le(B,~X),o.arraySet(B.pending_buf,B.window,R,X,B.pending),B.pending+=X}(w,E,M)}i._tr_init=function(w){N||(function(){var E,M,W,B,R,X=new Array(b+1);for(B=W=0;B<p-1;B++)for(Z[B]=W,E=0;E<1<<z[B];E++)y[W++]=B;for(y[W-1]=B,B=R=0;B<16;B++)for($[B]=R,E=0;E<1<<I[B];E++)L[R++]=B;for(R>>=7;B<h;B++)for($[B]=R<<7,E=0;E<1<<I[B]-7;E++)L[256+R++]=B;for(M=0;M<=b;M++)X[M]=0;for(E=0;E<=143;)ae[2*E+1]=8,E++,X[8]++;for(;E<=255;)ae[2*E+1]=9,E++,X[9]++;for(;E<=279;)ae[2*E+1]=7,E++,X[7]++;for(;E<=287;)ae[2*E+1]=8,E++,X[8]++;for(be(ae,f+1,X),E=0;E<h;E++)Q[2*E+1]=5,Q[2*E]=ye(E,5);ce=new q(ae,z,v+1,f,b),Y=new q(Q,I,0,h,b),G=new q(new Array(0),D,0,k,u)}(),N=!0),w.l_desc=new P(w.dyn_ltree,ce),w.d_desc=new P(w.dyn_dtree,Y),w.bl_desc=new P(w.bl_tree,G),w.bi_buf=0,w.bi_valid=0,fe(w)},i._tr_stored_block=F,i._tr_flush_block=function(w,E,M,W){var B,R,X=0;0<w.level?(w.strm.data_type===2&&(w.strm.data_type=function(H){var re,ie=4093624447;for(re=0;re<=31;re++,ie>>>=1)if(1&ie&&H.dyn_ltree[2*re]!==0)return s;if(H.dyn_ltree[18]!==0||H.dyn_ltree[20]!==0||H.dyn_ltree[26]!==0)return a;for(re=32;re<v;re++)if(H.dyn_ltree[2*re]!==0)return a;return s}(w)),J(w,w.l_desc),J(w,w.d_desc),X=function(H){var re;for(c(H,H.dyn_ltree,H.l_desc.max_code),c(H,H.dyn_dtree,H.d_desc.max_code),J(H,H.bl_desc),re=k-1;3<=re&&H.bl_tree[2*U[re]+1]===0;re--);return H.opt_len+=3*(re+1)+5+5+4,re}(w),B=w.opt_len+3+7>>>3,(R=w.static_len+3+7>>>3)<=B&&(B=R)):B=R=M+5,M+4<=B&&E!==-1?F(w,E,M,W):w.strategy===4||R===B?(ne(w,2+(W?1:0),3),V(w,ae,Q)):(ne(w,4+(W?1:0),3),function(H,re,ie,oe){var te;for(ne(H,re-257,5),ne(H,ie-1,5),ne(H,oe-4,4),te=0;te<oe;te++)ne(H,H.bl_tree[2*U[te]+1],3);A(H,H.dyn_ltree,re-1),A(H,H.dyn_dtree,ie-1)}(w,w.l_desc.max_code+1,w.d_desc.max_code+1,X+1),V(w,w.dyn_ltree,w.dyn_dtree)),fe(w),W&&ge(w)},i._tr_tally=function(w,E,M){return w.pending_buf[w.d_buf+2*w.last_lit]=E>>>8&255,w.pending_buf[w.d_buf+2*w.last_lit+1]=255&E,w.pending_buf[w.l_buf+w.last_lit]=255&M,w.last_lit++,E===0?w.dyn_ltree[2*M]++:(w.matches++,E--,w.dyn_ltree[2*(y[M]+v+1)]++,w.dyn_dtree[2*T(E)]++),w.last_lit===w.lit_bufsize-1},i._tr_align=function(w){ne(w,2,3),ee(w,_,ae),function(E){E.bi_valid===16?(le(E,E.bi_buf),E.bi_buf=0,E.bi_valid=0):8<=E.bi_valid&&(E.pending_buf[E.pending++]=255&E.bi_buf,E.bi_buf>>=8,E.bi_valid-=8)}(w)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(o){(function(s,a){if(!s.setImmediate){var l,g,p,v,f=1,h={},k=!1,m=s.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(s);b=b&&b.setTimeout?b:s,l={}.toString.call(s.process)==="[object process]"?function(S){process.nextTick(function(){u(S)})}:function(){if(s.postMessage&&!s.importScripts){var S=!0,C=s.onmessage;return s.onmessage=function(){S=!1},s.postMessage("","*"),s.onmessage=C,S}}()?(v="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",_,!1):s.attachEvent("onmessage",_),function(S){s.postMessage(v+S,"*")}):s.MessageChannel?((p=new MessageChannel).port1.onmessage=function(S){u(S.data)},function(S){p.port2.postMessage(S)}):m&&"onreadystatechange"in m.createElement("script")?(g=m.documentElement,function(S){var C=m.createElement("script");C.onreadystatechange=function(){u(S),C.onreadystatechange=null,g.removeChild(C),C=null},g.appendChild(C)}):function(S){setTimeout(u,0,S)},b.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var C=new Array(arguments.length-1),j=0;j<C.length;j++)C[j]=arguments[j+1];var z={callback:S,args:C};return h[f]=z,l(f),f++},b.clearImmediate=d}function d(S){delete h[S]}function u(S){if(k)setTimeout(u,0,S);else{var C=h[S];if(C){k=!0;try{(function(j){var z=j.callback,I=j.args;switch(I.length){case 0:z();break;case 1:z(I[0]);break;case 2:z(I[0],I[1]);break;case 3:z(I[0],I[1],I[2]);break;default:z.apply(a,I)}})(C)}finally{d(S),k=!1}}}}function _(S){S.source===s&&typeof S.data=="string"&&S.data.indexOf(v)===0&&u(+S.data.slice(v.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Vu);var kf=Vu.exports;const wf=Zu(kf),Ft={branding:{label:"平面 / 品牌設計",icon:"◐",color:"#2C4A3E"},digital_ui:{label:"數位 / UI 設計",icon:"◧",color:"#1F3A5F"},photo_video:{label:"攝影 / 影像",icon:"◉",color:"#3D2C4A"},content:{label:"文案 / 內容",icon:"◔",color:"#5C3D1F"},marketing:{label:"行銷 / 廣告",icon:"◭",color:"#7A2E1F"},consulting:{label:"顧問 / 策略",icon:"◈",color:"#2A3D2F"},training:{label:"教學 / 培訓",icon:"◇",color:"#4A2C3D"},service:{label:"服務業 / 實體",icon:"◎",color:"#3D4A2C"},technical:{label:"製作 / 技術",icon:"◫",color:"#1F3A4A"},professional:{label:"知識 / 專業",icon:"◰",color:"#2C2C4A"},spiritual:{label:"身心靈 / 療癒",icon:"✦",color:"#4A2C5C"},experience:{label:"體驗 / 活動 / 戶外",icon:"◬",color:"#2C5C3E"},food:{label:"食品 / 飲品 / 烘焙",icon:"◊",color:"#7A4A1F"},retail:{label:"零售 / 實體商品",icon:"◩",color:"#5C2C3D"},manufacturing:{label:"工廠 / 製造 / B2B",icon:"⚙",color:"#1F1F2C"},home_service:{label:"居家 / 環境服務",icon:"◧",color:"#3D5C2C"},education:{label:"教育 / 才藝 / 補習",icon:"◐",color:"#5C4A1F"},travel:{label:"旅遊 / 民宿 / 住宿",icon:"◯",color:"#2C4A5C"}},Bl={Q4:"急迫度（多急著要解決）",Q5:"事業規模（年營收/員工數）",Q6:"決策角色（你是不是最終決策者）",Q7:"過去外包經驗",Q8:"不希望被怎樣對待",Q9:"一句話講你的事業",Q10:"直接需求（你最想要的是？）",Q11:"不做的後果（不解決會怎樣）",Q12:"成功後的具體變化",Q13:"這問題拖了多久",Q14:"客戶輪廓（你的目標客戶）",Q15:"競品分析",Q16:"內部團隊（誰會接手執行）",Q17:"過去試過什麼方案",Q18:"3 個願望（如果許願能解決什麼）",Q19:"3 個月後的理想場景",Q21:"驗收標準（怎樣算成功）",Q22:"最不在意的（可以讓步的）",Q23:"持續發揮作用（一次性 vs 長期）",Q24:"隱藏決策者（背後還有誰要點頭）",Q26:"更大目標關聯（事業整體版圖）",Q27:"預算範圍",Q28:"決策路徑",Q30:"A vs B 方案比較",Q31:"付款時點",Q32:"最值得外包的事",Q33:"多付一點願意換什麼",Q35:"結束後的關係",Q36:"理想長期角色",Q37:"推薦（會不會推薦給朋友）",Q38:"同步節奏（多久回報一次）",Q39:"半年一年後的理想"},Oo=[{id:"logo_design",cat:"branding",name:"LOGO 設計",keyQ:["Q4","Q11","Q12","Q23","Q30","Q35","Q36"],strategy:"LOGO 是「一次性報價最常見」。網站要破除「LOGO = 8,000 元」的價格框，引導客戶看見「品牌啟動方案值 5 倍價」。文案重點：急迫感、不做後果、成功具體變化、A/B 方案對比、長期關係。",sections:["hero","work_portfolio","pricing_tiers","process","about","testimonials","faq","contact"],trustPoints:["作品集 50+ 件","品牌啟動方案","完整 VI 延伸","商標註冊協助","免費品牌諮詢"]},{id:"packaging",cat:"branding",name:"包裝設計",keyQ:["Q12","Q14","Q15","Q19","Q23","Q26"],strategy:"包裝設計的關鍵不是「視覺漂亮」、是「上架後賣得動」。網站文案要逼客戶面對「我要打誰、競品長怎樣、3 個月後通路反應」。導向全系列產品線合作。",sections:["hero","work_portfolio","case_studies","process","about","testimonials","contact"],trustPoints:["通路上架經驗","電商視覺","結構打樣","KV 主視覺","系列延伸"]},{id:"vi_design",cat:"branding",name:"VI 視覺識別",keyQ:["Q5","Q6","Q16","Q23","Q26","Q35","Q36"],strategy:"VI 是組織級決策。網站要說服老闆「規模大、需要 VI 系統」。突顯內部團隊接手難度、年度顧問必要性。",sections:["hero","work_portfolio","methodology","team","process","testimonials","contact"],trustPoints:["VI 手冊完整","年度視覺顧問","品牌規範書","上市櫃客戶","國際獎項"]},{id:"business_card",cat:"branding",name:"名片設計",keyQ:["Q9","Q10","Q14","Q18","Q26","Q35"],strategy:"名片本身單價低、要「快速跳脫單品報價」。網站要讓人看到「名片是個人品牌的一塊磚」，引導到個人品牌啟動包。",sections:["hero","work_portfolio","personal_brand_pkg","pricing_tiers","about","contact"],trustPoints:["個人品牌啟動包","燙金壓凸工藝","精緻紙材","快速交件","小量印製"]},{id:"print_dm",cat:"branding",name:"印刷物 / DM 設計",keyQ:["Q4","Q12","Q21","Q23","Q30"],strategy:"印刷案子節奏快、急迫度和驗收標準是核心。網站要把單次活動延伸成「年度活動視覺顧問」。",sections:["hero","work_portfolio","turnaround_time","pricing_tiers","process","contact"],trustPoints:["24 小時急件","印刷監製","年度活動視覺","大圖輸出","展場主視覺"]},{id:"presentation",cat:"branding",name:"提案簡報設計",keyQ:["Q10","Q11","Q12","Q19","Q24","Q26"],strategy:"簡報真正的觀眾是「老闆/投資人」。網站要強調「簡報是成交工具不是美化」。Q24 隱藏決策者是關鍵 — 給誰看會改變設計方向。",sections:["hero","work_portfolio","case_studies","process","pricing_tiers","testimonials","contact"],trustPoints:["募資簡報經驗","提案成功案例","資訊圖表","24 小時急件","英文簡報"]},{id:"web_design",cat:"digital_ui",name:"網頁設計",keyQ:["Q4","Q11","Q12","Q14","Q16","Q19","Q23","Q35"],strategy:"網頁設計很多人卡在「客戶要看別家、我先報價」。網站要逼對方說明「網站的目的」。把月費維運合約埋進去。",sections:["hero","work_portfolio","service_packages","process","maintenance","testimonials","faq","contact"],trustPoints:["作品集 30+ 件","WordPress 專家","SEO 友善","響應式設計","月費維運"]},{id:"app_ui",cat:"digital_ui",name:"App UI 設計",keyQ:["Q5","Q6","Q14","Q16","Q23","Q26","Q36"],strategy:"App 是長期戰、不是一次案。網站要鋪好 Design System 維護的路。",sections:["hero","work_portfolio","design_system","process","team","testimonials","contact"],trustPoints:["Design System","使用者測試","Figma 交付","工程師對接","長期合作"]},{id:"ui_ux_consulting",cat:"digital_ui",name:"UI / UX 諮詢",keyQ:["Q11","Q12","Q13","Q17","Q21","Q32"],strategy:"UX 諮詢容易被當「改幾個按鈕」。網站要定位成「持續優化夥伴」，強調數據驅動。",sections:["hero","case_studies","methodology","process","team","insights","contact"],trustPoints:["UX 研究","A/B 測試","熱點分析","使用者訪談","轉換率優化"]},{id:"ecommerce_frontend",cat:"digital_ui",name:"電商前台設計",keyQ:["Q12","Q14","Q19","Q21","Q23","Q26"],strategy:"電商前台的成功 = GMV。網站要把「視覺討論」轉成「轉換率討論」。",sections:["hero","work_portfolio","platforms","case_studies","process","maintenance","contact"],trustPoints:["Shopify 專家","CVR 提升案例","購物車優化","行動版優先","金流串接"]},{id:"product_photo",cat:"photo_video",name:"商品攝影",keyQ:["Q10","Q12","Q14","Q19","Q21","Q23","Q35"],strategy:"商品攝影最常被當「一張多少錢」。網站要從「拍幾張」轉成「賣多少」。導向季度合約。",sections:["hero","work_portfolio","service_packages","studio","process","testimonials","contact"],trustPoints:["情境攝影棚","電商主圖","季度合約","快速交件","修圖到位"]},{id:"portrait_photo",cat:"photo_video",name:"人像攝影",keyQ:["Q9","Q10","Q14","Q18","Q23","Q35","Q36"],strategy:"個人品牌人像最關鍵是「客戶的 next step」。網站要鋪「素材庫年度合約」入口。",sections:["hero","work_portfolio","personal_brand_pkg","process","about","testimonials","contact"],trustPoints:["個人品牌定位","素材庫年約","形象顧問","妝髮造型","多場景"]},{id:"wedding_photo",cat:"photo_video",name:"婚禮攝影",keyQ:["Q11","Q12","Q19","Q21","Q22","Q30","Q32"],strategy:"婚攝是高情感案件、不能只談技術。網站要講「30 年後翻相簿的場景」。提「結婚故事整體紀錄方案」。",sections:["hero","work_portfolio","service_packages","story_pkg","about","testimonials","faq","contact"],trustPoints:["婚禮紀錄 100+ 場","海外婚禮","相本設計","雙攝影師","當日精選"]},{id:"corporate_photo",cat:"photo_video",name:"商業形象攝影",keyQ:["Q5","Q6","Q23","Q24","Q26","Q35","Q36"],strategy:"商業形象是組織級採購。網站要鋪「年度視覺資產建置」，突顯多人決策應對。",sections:["hero","work_portfolio","enterprise_pkg","process","team","testimonials","contact"],trustPoints:["企業形象案","年度視覺資產","高階主管肖像","空間攝影","上市櫃經驗"]},{id:"short_video",cat:"photo_video",name:"短影音 / Reels 製作",keyQ:["Q12","Q13","Q14","Q17","Q19","Q21","Q38"],strategy:"短影音不是「拍一支」、是「月度節奏」。網站要強調月度節奏與觀眾觸及。",sections:["hero","work_portfolio","monthly_packages","case_studies","process","testimonials","contact"],trustPoints:["月度節奏","百萬觸及案例","Reels/Shorts/TikTok","腳本企劃","剪輯包"]},{id:"ad_copy",cat:"content",name:"廣告文案",keyQ:["Q4","Q12","Q14","Q19","Q21","Q32"],strategy:"廣告文案很多人比 ChatGPT 價格。網站要從「字數」轉成「ROAS」。",sections:["hero","case_studies","service_packages","process","about","testimonials","contact"],trustPoints:["ROAS 提升案例","A/B 測試文案","高轉換 hook","產業實績","24 小時急件"]},{id:"brand_story",cat:"content",name:"品牌故事撰寫",keyQ:["Q9","Q10","Q11","Q18","Q23","Q26"],strategy:"品牌故事不能只寫「故事」、要連結事業。網站要切入年度敘事顧問。",sections:["hero","work_portfolio","methodology","about","testimonials","contact"],trustPoints:["深度訪談","品牌敘事","創辦人故事","年度敘事顧問","出版經驗"]},{id:"seo_writing",cat:"content",name:"SEO 文章",keyQ:["Q11","Q12","Q13","Q14","Q17","Q21","Q38"],strategy:"SEO 是長期戰。網站要鎖排名 KPI、月度節奏。",sections:["hero","case_studies","monthly_packages","process","methodology","testimonials","contact"],trustPoints:["關鍵字研究","排名實績","月度產出","GSC 數據","產業專欄"]},{id:"social_post",cat:"content",name:"社群貼文",keyQ:["Q12","Q14","Q19","Q21","Q38","Q39"],strategy:"社群最容易被當「廉價勞工」。網站要把貼文寫變成月度經營合約。",sections:["hero","work_portfolio","monthly_packages","platforms","case_studies","testimonials","contact"],trustPoints:["月度經營","互動成長案例","FB/IG/Threads","社群企劃","輿情監測"]},{id:"newsletter",cat:"content",name:"電子報",keyQ:["Q12","Q14","Q19","Q21","Q23","Q38"],strategy:"電子報的價值 = 帶來訂單。網站要鎖開信率/點擊率/轉換，切入月費漏斗。",sections:["hero","case_studies","monthly_packages","process","about","testimonials","contact"],trustPoints:["開信率 40%+","自動化流程","CRM 整合","電子報設計","訂閱漏斗"]},{id:"speech_script",cat:"content",name:"直播 / 演講稿",keyQ:["Q4","Q9","Q11","Q12","Q19","Q24","Q36"],strategy:"演講稿要跟「演講者本人」綁定。網站要埋好個人品牌路徑。",sections:["hero","work_portfolio","service_packages","about","testimonials","contact"],trustPoints:["TEDx 經驗","上市公司 KOL","直播腳本","一對一陪跑","臨場輔導"]},{id:"fb_ig_ads",cat:"marketing",name:"FB / IG 廣告投放",keyQ:["Q12","Q14","Q17","Q21","Q32","Q38"],strategy:"投放最容易陷入「比廣告操作費 %」。網站要把對話拉到「夥伴」層級。",sections:["hero","case_studies","monthly_packages","methodology","process","testimonials","contact"],trustPoints:["Meta 認證","ROAS 案例","月度報表","受眾分析","創意素材"]},{id:"google_ads",cat:"marketing",name:"Google Ads",keyQ:["Q11","Q12","Q14","Q17","Q21","Q32","Q36"],strategy:"Google Ads 客戶常想「便宜操作費」。網站要切入年度顧問，強調 B2B 受眾複雜度。",sections:["hero","case_studies","service_packages","methodology","process","testimonials","contact"],trustPoints:["Google Partner","搜尋廣告","GA4 整合","B2B 經驗","年度顧問"]},{id:"seo_service",cat:"marketing",name:"SEO 服務",keyQ:["Q4","Q11","Q12","Q13","Q21","Q23","Q26"],strategy:"SEO 是時間戰。網站要強調 6 個月起跳，導向年度自然流量增長方案。",sections:["hero","case_studies","methodology","monthly_packages","process","insights","contact"],trustPoints:["排名實績","技術 SEO","內容 SEO","本地 SEO","年度合約"]},{id:"kol_marketing",cat:"marketing",name:"KOL / KOC 行銷",keyQ:["Q12","Q14","Q17","Q21","Q32","Q35"],strategy:"KOL 案最容易被當「配對費」。網站要拉到月度配對方案。",sections:["hero","kol_network","case_studies","monthly_packages","process","testimonials","contact"],trustPoints:["KOL 資料庫 500+","微網紅","成效保證","報表透明","產業匹配"]},{id:"content_marketing",cat:"marketing",name:"內容行銷策略",keyQ:["Q9","Q10","Q11","Q16","Q23","Q26","Q36"],strategy:"內容行銷需要「客戶內部執行得起來」。網站要把策略升級成代營運。",sections:["hero","case_studies","methodology","service_packages","team","insights","contact"],trustPoints:["內容策略","代營運方案","多平台整合","KPI 設定","內訓賦能"]},{id:"brand_strategy",cat:"consulting",name:"品牌策略顧問",keyQ:["Q5","Q6","Q9","Q11","Q18","Q26","Q36"],strategy:"品牌顧問是高客單。網站要確認對方是 final decision maker，把「諮詢一場」拉成「年度陪跑」。",sections:["hero","methodology","case_studies","about","insights","engagement_models","contact"],trustPoints:["上市櫃案例","創辦人陪跑","品牌定位","年度顧問","出版著作"]},{id:"digital_transformation",cat:"consulting",name:"數位轉型顧問",keyQ:["Q5","Q6","Q13","Q16","Q17","Q26","Q36"],strategy:"數位轉型最容易失敗在「內部不接」。網站要鎖定「12 個月陪跑」，強調過去失敗案例的處理。",sections:["hero","methodology","case_studies","team","engagement_models","insights","contact"],trustPoints:["製造業轉型","12 個月陪跑","內訓賦能","ERP 導入","上市櫃實績"]},{id:"business_model",cat:"consulting",name:"商業模式顧問",keyQ:["Q9","Q11","Q12","Q18","Q26","Q30","Q36"],strategy:"商業模式顧問要逼客戶「面對假設」。網站切入 6 個月驗證 + 年度成長顧問。",sections:["hero","methodology","case_studies","about","insights","engagement_models","contact"],trustPoints:["MVP 驗證","商業畫布","財務模型","新事業孵化","創辦人教練"]},{id:"ipo_fundraising",cat:"consulting",name:"IPO / 募資顧問",keyQ:["Q4","Q5","Q6","Q24","Q27","Q28","Q31"],strategy:"募資是時間 + 金額 + 決策權的綜合題。網站要透明預算結構、付款時點。",sections:["hero","track_record","methodology","team","engagement_models","process","contact"],trustPoints:["IPO 輔導實績","A/B/C 輪募資","財務 DD","法律對接","投資人網絡"]},{id:"cross_border",cat:"consulting",name:"跨境 / 出海顧問",keyQ:["Q4","Q5","Q14","Q17","Q23","Q26","Q36"],strategy:"跨境是長期戰。網站鋪 12 個月 + 年度顧問，強調過去市場試過的反思。",sections:["hero","markets","case_studies","methodology","team","engagement_models","contact"],trustPoints:["日本市場","東南亞落地","在地團隊","法規對接","海外通路"]},{id:"one_on_one_coach",cat:"training",name:"1 對 1 教練",keyQ:["Q9","Q11","Q12","Q18","Q19","Q36","Q39"],strategy:"教練是長期關係。網站要圍繞「學員的成長場景」，切入半年/年度陪跑。",sections:["hero","coaching_packages","methodology","about","testimonials","process","contact"],trustPoints:["學員實績","半年陪跑","ICF 認證","客製化計畫","每週一對一"]},{id:"corporate_training",cat:"training",name:"企業內訓",keyQ:["Q5","Q6","Q11","Q12","Q16","Q21","Q23","Q36"],strategy:"內訓是 B2B 高客單。網站要鎖 ROI、強調課後落實是核心。",sections:["hero","course_catalog","case_studies","methodology","team","engagement_models","contact"],trustPoints:["上市櫃內訓","客製課程","課後輔導","評量機制","年度合作"]},{id:"online_course",cat:"training",name:"線上課程製作",keyQ:["Q9","Q10","Q14","Q19","Q21","Q23","Q26"],strategy:"線上課客戶常想「拍剪上架就好」。網站要從「拍攝」轉到「銷售」，切入年度品牌經營。",sections:["hero","service_packages","case_studies","platforms","process","testimonials","contact"],trustPoints:["課程銷售案例","一站式製作","行銷漏斗","平台上架","長期經營"]},{id:"workshop",cat:"training",name:"工作坊",keyQ:["Q4","Q9","Q12","Q14","Q19","Q21","Q23"],strategy:"工作坊是入口、不是終點。網站要切入年度系列工作坊。",sections:["hero","workshop_calendar","past_events","about","testimonials","corporate_pkg","contact"],trustPoints:["系列工作坊","企業包班","小班制","實作為主","社群延伸"]},{id:"beauty",cat:"service",name:"美業（美甲 / 美睫 / 美容）",keyQ:["Q10","Q12","Q14","Q19","Q23","Q33","Q35"],strategy:"美業客戶比「單次多少」。網站要從「一次服務」轉到「3 個月後客單變化」，切入包套/會員制。",sections:["hero","service_menu","membership","work_portfolio","booking","about","testimonials","contact"],trustPoints:["會員制","包套方案","到府服務","證照齊全","材料用料"]},{id:"independent_restaurant",cat:"service",name:"餐飲（獨立餐廳 / 外燴）",keyQ:["Q9","Q10","Q12","Q14","Q19","Q23","Q26"],strategy:"餐飲一次性消費比多。網站要找到「真正在賣什麼」，切入會員制/年度合作。",sections:["hero","menu","story","reservation","private_event","press","location","contact"],trustPoints:["主廚資歷","在地食材","包場服務","外燴經驗","預訂制"]},{id:"fitness_coach",cat:"service",name:"健身教練",keyQ:["Q11","Q12","Q18","Q19","Q21","Q23","Q36","Q39"],strategy:"教練生意核心 = 學員留存。網站要放在「6 個月體態目標」，切入年度陪跑。",sections:["hero","coaching_packages","transformation","methodology","about","booking","testimonials","contact"],trustPoints:["學員轉變","六個月計畫","NSCA 認證","飲食指導","線上追蹤"]},{id:"pet_grooming",cat:"service",name:"寵物美容 / 訓練",keyQ:["Q10","Q12","Q14","Q19","Q23","Q33","Q35"],strategy:"寵物服務同質化高。網站要把單次服務升級成全方位照護，切入年度會員。",sections:["hero","service_menu","membership","gallery","booking","about","testimonials","contact"],trustPoints:["B 級美容師證","到府服務","會員制","健康記錄","單犬一池"]},{id:"childcare",cat:"service",name:"寄養 / 托嬰 / 托幼",keyQ:["Q9","Q11","Q14","Q16","Q23","Q35","Q38"],strategy:"托育是高度信任業。網站要回應家長真正的擔心，同步節奏 = 信任核心。",sections:["hero","philosophy","daily_routine","safety","team","parent_communication","tour_booking","contact"],trustPoints:["立案合格","每日影像回報","師生比 1:4","專業教保員","監視器透明"]},{id:"video_editing",cat:"technical",name:"影片剪輯",keyQ:["Q4","Q9","Q12","Q14","Q19","Q21","Q38"],strategy:"剪輯最容易被當「一支多少」。網站要鎖觀眾增長，切入月度內容方案。",sections:["hero","work_portfolio","monthly_packages","process","about","testimonials","contact"],trustPoints:["百萬觀看作品","24 小時急件","月度節奏","YouTube/Reels","腳本陪伴"]},{id:"three_d",cat:"technical",name:"3D 建模 / 動畫",keyQ:["Q10","Q11","Q17","Q21","Q22","Q23","Q26"],strategy:"3D 容易陷入「無限改稿」。網站要設好驗收，切入年度資產建置。",sections:["hero","work_portfolio","service_packages","process","pricing_tiers","testimonials","contact"],trustPoints:["產品 3D 渲染","建築可視化","改稿次數明確","檔案規格","版權清楚"]},{id:"animation",cat:"technical",name:"動畫製作",keyQ:["Q9","Q10","Q12","Q14","Q19","Q21","Q23"],strategy:"動畫客戶常不知道目的。網站要鎖觀眾與成果，切入年度合作。",sections:["hero","work_portfolio","service_packages","process","team","testimonials","contact"],trustPoints:["2D 動畫","MG 動畫","腳本企劃","配音整合","年度系列"]},{id:"programming",cat:"technical",name:"程式開發",keyQ:["Q5","Q6","Q11","Q12","Q16","Q21","Q36"],strategy:"程式開發案最容易死在「需求不清」。網站要釐清決策、鎖業務目標、切入年度技術夥伴。",sections:["hero","case_studies","tech_stack","process","team","engagement_models","contact"],trustPoints:["SaaS 開發","技術棧透明","原始碼交付","CTO 諮詢","長期維運"]},{id:"data_bi",cat:"technical",name:"資料 / BI 分析",keyQ:["Q9","Q11","Q12","Q16","Q21","Q23","Q26","Q36"],strategy:"資料分析最容易被當「一次性建表」。網站要鎖業務指標，切入年度數據顧問。",sections:["hero","case_studies","methodology","tech_stack","team","engagement_models","contact"],trustPoints:["Looker/Tableau","資料倉儲","分析師駐點","報表自動化","預測模型"]},{id:"lawyer_sme",cat:"professional",name:"律師（中小企業法務）",keyQ:["Q5","Q6","Q11","Q13","Q23","Q26","Q36"],strategy:"律師最常被當「鐘點費」。網站要釐清決策、挖出潛在風險，切入月度法務顧問。",sections:["hero","practice_areas","team_credentials","case_studies","monthly_advisor","insights","contact"],trustPoints:["公司法專精","合約審閱","智財權","勞資爭議","月度顧問"]},{id:"accountant",cat:"professional",name:"會計師 / 記帳士",keyQ:["Q5","Q6","Q11","Q12","Q23","Q26","Q36"],strategy:"會計師客戶常只買「記帳月費」。網站要拉到「商業策略」，切入財務長外包。",sections:["hero","services","team_credentials","industries","engagement_models","insights","contact"],trustPoints:["財報簽證","稅務規劃","財務長外包","跨境稅務","上市櫃"]},{id:"counseling",cat:"professional",name:"心理諮商",keyQ:["Q11","Q12","Q13","Q18","Q19","Q23","Q36","Q39"],strategy:"諮商客戶常買單次、不買長期。網站要放在「6 個月後生活變化」，切入年度心理夥伴。",sections:["hero","approach","team_credentials","session_packages","about","faq","booking","contact"],trustPoints:["諮商心理師證","完全保密","六次起步","線上諮商","伴侶諮商"]},{id:"health_management",cat:"professional",name:"醫療衛教 / 健康管理",keyQ:["Q11","Q12","Q13","Q18","Q19","Q23","Q36","Q39"],strategy:"健康管理需要持續才有效。網站要鎖 3 個月後體檢數字，切入年度健康管家。",sections:["hero","programs","team_credentials","case_studies","membership","booking","insights","contact"],trustPoints:["營養師駐點","體檢數據追蹤","年度管家","客製計畫","醫療轉介"]},{id:"insurance",cat:"professional",name:"保險 / 財富規劃",keyQ:["Q5","Q6","Q9","Q11","Q24","Q26","Q36"],strategy:"保險最容易被當「賣保單」。網站要釐清家庭結構，切入家族財富規劃 10 年。",sections:["hero","philosophy","planning_process","team_credentials","case_studies","engagement_models","contact"],trustPoints:["CFP 認證","家族傳承","稅務整合","不綁特定產品","十年陪跑"]},{id:"tarot",cat:"spiritual",name:"塔羅 / 占卜",keyQ:["Q4","Q7","Q8","Q11","Q18","Q23","Q36"],strategy:"塔羅客戶常買單次、且容易帶恐懼進來。網站要處理「過去算命被坑」的擔心，切入年度命盤陪跑。",sections:["hero","approach","session_types","about","testimonials","faq","booking","contact"],trustPoints:["不報明牌","完全保密","系統流派","事後文字紀錄","年度陪跑"]},{id:"astrology",cat:"spiritual",name:"占星 / 命理",keyQ:["Q4","Q7","Q8","Q11","Q18","Q23","Q26","Q36"],strategy:"命理客戶最在意「準度 + 隱私」。網站要處理戒心，切入人生階段陪跑。",sections:["hero","approach","session_types","about","testimonials","faq","booking","contact"],trustPoints:["古典占星","完全保密","不勸購護身符","深度命盤","人生階段陪跑"]},{id:"feng_shui",cat:"spiritual",name:"風水 / 居家環境",keyQ:["Q5","Q6","Q11","Q12","Q23","Q26","Q36"],strategy:"風水決策權常在「家中長輩」。網站要釐清誰決定，切入年度開運顧問。",sections:["hero","approach","service_packages","case_studies","about","faq","contact"],trustPoints:["玄空陽宅","到府勘察","不販售開運品","年度回訪","商辦風水"]},{id:"energy_healing",cat:"spiritual",name:"能量療癒 / 靈氣",keyQ:["Q7","Q8","Q11","Q12","Q18","Q23","Q36"],strategy:"能量療癒客戶常被「靈性課程」割過。網站要建立信任，切入月度能量管理。",sections:["hero","modalities","session_packages","about","testimonials","faq","booking","contact"],trustPoints:["完全保密","不推銷課程","單次體驗","線上遠距","師承來源透明"]},{id:"aromatherapy",cat:"spiritual",name:"芳療 / 精油諮詢",keyQ:["Q9","Q14","Q18","Q23","Q26","Q36","Q39"],strategy:"芳療需要「教育客戶日常使用」。網站切入家庭芳療顧問。",sections:["hero","consultation","product_line","workshops","about","membership","contact"],trustPoints:["IFPA 認證","客製複方","家庭芳療","工作坊","臨床芳療"]},{id:"outdoor_guide",cat:"experience",name:"戶外活動帶隊 / 嚮導",keyQ:["Q4","Q9","Q12","Q18","Q19","Q23","Q36"],strategy:"戶外帶隊最常被比「一次多少」。網站要從「一次」拉到「能力陪跑」，切入年度探索方案。",sections:["hero","expeditions","skill_levels","safety","about","testimonials","booking","contact"],trustPoints:["領隊證","緊急救護","小團制","裝備清單","保險完整"]},{id:"camping",cat:"experience",name:"露營營區 / 露營體驗",keyQ:["Q12","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"露營區會員制是核心。網站要鎖回流目標，切入會員 + 推薦網絡。",sections:["hero","sites","experiences","membership","gallery","reservation","location","contact"],trustPoints:["會員制","營位專屬","主題活動","免裝備","寵物友善"]},{id:"parent_child",cat:"experience",name:"親子體驗 / 共學",keyQ:["Q11","Q12","Q14","Q19","Q23","Q26","Q36","Q37"],strategy:"家長最在意「對小孩有沒有幫助」。網站要鎖成長場景，切入年度親子社群。",sections:["hero","programs","curriculum","safety","community","parent_feedback","enrollment","contact"],trustPoints:["師資資歷","小班制","年度社群","家長參與","戶外比例"]},{id:"event_planning",cat:"experience",name:"主題派對 / 婚禮活動企劃",keyQ:["Q4","Q11","Q12","Q19","Q21","Q24","Q26","Q36"],strategy:"主題派對情感濃。網站要講「結束後留下什麼」，處理夫妻雙方決策，切入家族紀念顧問。",sections:["hero","event_types","past_events","process","team","testimonials","enquiry","contact"],trustPoints:["活動 200+ 場","一站式統包","主題客製","海外婚禮","紀錄保存"]},{id:"outdoor_sports",cat:"experience",name:"戶外運動課程",keyQ:["Q9","Q12","Q18","Q19","Q21","Q23","Q36"],strategy:"運動課程最容易卡在「體驗者」。網站要鎖能力進階，切入年度教練陪跑。",sections:["hero","courses","skill_progression","about","gear_list","testimonials","booking","contact"],trustPoints:["教練證照","能力進階制","裝備提供","保險完整","年度會員"]},{id:"private_kitchen",cat:"food",name:"私廚 / 私房菜",keyQ:["Q9","Q14","Q19","Q23","Q26","Q36","Q37"],strategy:"私廚靠口碑與情感。網站鎖客群，切入家庭餐廚陪跑 + 推薦。",sections:["hero","menu_seasonal","story","reservation","private_event","gallery","press","contact"],trustPoints:["主廚故事","當季食材","完全預約制","客製菜單","在地小農"]},{id:"bakery_brand",cat:"food",name:"烘焙 / 甜點品牌",keyQ:["Q12","Q14","Q19","Q23","Q26","Q33","Q35"],strategy:"烘焙容易陷入「訂製單一次」。網站要鎖客群，切入訂閱方案。",sections:["hero","product_line","subscription","story","shop_info","corporate_gift","testimonials","contact"],trustPoints:["訂閱制","當日現做","客製蛋糕","企業送禮","宅配全台"]},{id:"handmade_food",cat:"food",name:"手工食品 / 醬料 / 加工品",keyQ:["Q9","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"手工食品需要「日常餐桌融入」。網站鎖家庭情境，切入訂閱 + 推薦網絡。",sections:["hero","product_line","story","recipe_pairing","subscription","press","shop","contact"],trustPoints:["SGS 檢驗","無添加","在地小農","訂閱配送","主廚推薦"]},{id:"cafe_brand",cat:"food",name:"咖啡店 / 獨立咖啡品牌",keyQ:["Q12","Q13","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"咖啡店熟客流失最致命。網站要鎖回流問題，切入會員 + 訂閱 + 推薦。",sections:["hero","menu","story","bean_origin","subscription","membership","location","contact"],trustPoints:["SCA 認證","單品莊園","訂閱配送","熟客制","空間預約"]},{id:"beverage_brand",cat:"food",name:"飲品品牌（手搖 / 瓶裝）",keyQ:["Q12","Q14","Q19","Q23","Q26","Q33","Q36"],strategy:"飲品品牌靠忠誠度。網站鎖品牌記憶，切入會員 + 企業團購。",sections:["hero","menu","story","membership","corporate","locations","press","contact"],trustPoints:["原料溯源","會員制","企業團購","聯名合作","門市分布"]},{id:"fashion",cat:"retail",name:"服飾 / 流行精品",keyQ:["Q9","Q14","Q18","Q19","Q23","Q26","Q33","Q36"],strategy:"服飾單品買賣難維繫。網站鎖個人風格，切入年度造型陪跑。",sections:["hero","collections","styling_service","lookbook","about","membership","shop","contact"],trustPoints:["造型師服務","VIP 會員","客製尺寸","小批生產","永續材質"]},{id:"electronics",cat:"retail",name:"家電 / 3C 商品銷售",keyQ:["Q11","Q12","Q16","Q23","Q26","Q32","Q36"],strategy:"家電一次買賣後容易斷。網站挖延伸需求，切入年度家電顧問。",sections:["hero","product_categories","consultation","installation","warranty","service","reviews","contact"],trustPoints:["到府安裝","舊機回收","延長保固","免費諮詢","原廠授權"]},{id:"furniture",cat:"retail",name:"家具 / 家飾 / 設計商品",keyQ:["Q9","Q14","Q18","Q19","Q23","Q26","Q33","Q36"],strategy:"家具買賣容易單次性。網站鎖居家風格，切入全屋風格陪跑。",sections:["hero","collections","design_service","showroom","about","membership","gallery","contact"],trustPoints:["全屋規劃","客製訂做","設計師諮詢","原廠進口","到府丈量"]},{id:"stationery",cat:"retail",name:"文具 / 雜貨 / 生活用品",keyQ:["Q12","Q14","Q18","Q19","Q23","Q33","Q35","Q37"],strategy:"雜貨單品低、要靠訂閱。網站鎖生活風格，切入盲盒 + 企業送禮。",sections:["hero","collections","subscription_box","corporate_gift","story","shop","community","contact"],trustPoints:["每月驚喜盒","企業送禮","客製刻字","小批設計","在地設計"]},{id:"antique",cat:"retail",name:"二手 / 古董 / 精品買賣",keyQ:["Q7","Q8","Q11","Q23","Q26","Q32","Q36","Q37"],strategy:"二手最在意「信任 + 鑑定」。網站要處理被坑經驗，切入藏家陪跑。",sections:["hero","collection","authentication","consignment","about","collector_club","press","contact"],trustPoints:["第三方鑑定","保固承諾","寄賣服務","藏家社群","保險評估"]},{id:"oem_manufacturing",cat:"manufacturing",name:"代工製造 / OEM",keyQ:["Q5","Q6","Q11","Q12","Q16","Q23","Q26","Q36"],strategy:"代工最常被砍單價。網站要釐清規模/層級，挖出真痛點，切入年度產能合作。",sections:["hero","capability","products","certifications","factory_tour","oem_process","clients","contact"],trustPoints:["ISO 9001","OEM/ODM","年產能","一條龍","出口外銷"]},{id:"cnc_machining",cat:"manufacturing",name:"機械加工 / CNC / 模具",keyQ:["Q5","Q6","Q11","Q16","Q21","Q23","Q26","Q36"],strategy:"CNC 同質化嚴重。網站要鎖業務目標，切入年度供應夥伴/製程顧問。",sections:["hero","capability","equipment","tolerances","industries_served","process","clients","contact"],trustPoints:["五軸 CNC","公差 ±0.01mm","IATF 16949","少量試作","逆向工程"]},{id:"packaging_printing",cat:"manufacturing",name:"包材 / 印刷 / 紙器",keyQ:["Q5","Q6","Q12","Q14","Q21","Q23","Q26","Q36"],strategy:"包材容易陷入單張比價。網站要從「印幾張」拉到「品牌包材策略」，切入年度合作。",sections:["hero","capability","product_lines","sustainability","process","case_studies","clients","contact"],trustPoints:["FSC 認證","結構設計","少量起訂","一條龍","環保材質"]},{id:"hardware_parts",cat:"manufacturing",name:"五金 / 工具 / 零件",keyQ:["Q5","Q6","Q11","Q16","Q23","Q26","Q36"],strategy:"五金需要長期供應夥伴。網站要釐清採購結構，切入企業 B2B 採購方案。",sections:["hero","product_catalog","b2b_procurement","inventory","distribution","clients","contact"],trustPoints:["庫存即時","B2B 報價","少量混批","進口代理","送貨到廠"]},{id:"food_oem",cat:"manufacturing",name:"食品代工 / OEM",keyQ:["Q5","Q6","Q11","Q14","Q21","Q23","Q26","Q36"],strategy:"食品代工最容易被搶單。網站要釐清品牌策略，切入年度共創方案。",sections:["hero","capability","certifications","rnd_lab","process","compliance","clients","contact"],trustPoints:["HACCP","ISO 22000","R&D 配方","少量試產","通路上架輔導"]},{id:"pest_control",cat:"home_service",name:"除蟲 / 病媒防治",keyQ:["Q4","Q11","Q12","Q13","Q23","Q26","Q36"],strategy:"除蟲常在「出事才找」。網站處理急迫，切入年度防治。",sections:["hero","services","emergency","methodology","certifications","annual_plan","testimonials","contact"],trustPoints:["環保藥劑","寵物友善","保固承諾","24 小時急件","商辦合約"]},{id:"home_cleaning",cat:"home_service",name:"居家清潔 / 大掃除",keyQ:["Q12","Q14","Q19","Q23","Q26","Q33","Q38"],strategy:"居家清潔同質化高。網站鎖家庭情境，切入月度合約。",sections:["hero","services","pricing","monthly_subscription","before_after","team","booking","contact"],trustPoints:["月度合約","固定人員","保險完整","透明計價","回購率 80%"]},{id:"moving_logistics",cat:"home_service",name:"搬家 / 物流",keyQ:["Q4","Q5","Q11","Q21","Q23","Q26","Q32"],strategy:"搬家是時間敏感。網站確保品質透明，切入企業遷移顧問。",sections:["hero","services","enterprise_relocation","quote_calculator","process","testimonials","booking","contact"],trustPoints:["上市櫃合約","保險投保","線上估價","專業包裝","當日完成"]},{id:"home_repair",cat:"home_service",name:"居家維修 / 水電",keyQ:["Q4","Q11","Q12","Q13","Q23","Q26","Q36"],strategy:"水電常在「壞掉才找」。網站處理急迫，切入年度健診/全屋管家。",sections:["hero","services","emergency","annual_plan","team","pricing","booking","contact"],trustPoints:["丙級水電證","24 小時急件","年度健診","保固一年","透明計價"]},{id:"waterproofing",cat:"home_service",name:"防水 / 抓漏 / 結構",keyQ:["Q5","Q6","Q11","Q12","Q13","Q23","Q26","Q36"],strategy:"防水抓漏屬高決策層級。網站要釐清決策，切入社區/大樓年度顧問。",sections:["hero","services","case_studies","community_contract","process","warranty","team","contact"],trustPoints:["抓漏精準","10 年保固","社區合約","專業儀器","結構技師"]},{id:"art_craft",cat:"education",name:"才藝教學（美術 / 手作）",keyQ:["Q11","Q12","Q14","Q19","Q23","Q26","Q36","Q39"],strategy:"才藝教學最在意「家長放心 + 小孩成長」。網站鎖成長，切入年度才藝陪跑。",sections:["hero","courses","student_works","teacher","enrollment","parent_feedback","showcase","contact"],trustPoints:["作品展","小班制","師資專業","年度成長","家長參與"]},{id:"cram_school",cat:"education",name:"補習班 / 課輔",keyQ:["Q5","Q11","Q12","Q16","Q19","Q21","Q23","Q36"],strategy:"補習最在意升學。網站鎖學習目標，切入學年陪跑/家庭教育顧問。",sections:["hero","programs","results","teachers","methodology","parent_communication","enrollment","contact"],trustPoints:["升學榜單","小班分級","一對一輔導","進度追蹤","家長月報"]},{id:"language_tutor",cat:"education",name:"語言家教 / 線上語言",keyQ:["Q9","Q11","Q12","Q18","Q19","Q21","Q23","Q36"],strategy:"語言學習易半途而廢。網站鎖能力目標，切入年度語言陪跑。",sections:["hero","levels","methodology","teacher","student_results","trial_class","pricing","contact"],trustPoints:["母語老師","檢定通過率","一對一","進度追蹤","彈性時間"]},{id:"music_teacher",cat:"education",name:"樂器老師（鋼琴 / 吉他）",keyQ:["Q11","Q12","Q14","Q18","Q19","Q23","Q26","Q36"],strategy:"樂器學習最容易半途而廢。網站鎖家庭支持，切入音樂家庭顧問。",sections:["hero","levels","student_performances","teacher","methodology","enrollment","recitals","contact"],trustPoints:["檢定通過率","發表會","到府教學","學齡分級","家長旁聽"]},{id:"kids_sports",cat:"education",name:"兒童才藝（運動 / 舞蹈）",keyQ:["Q11","Q12","Q14","Q18","Q19","Q23","Q36","Q39"],strategy:"兒童才藝家長很挑。網站鎖成長，切入年度家庭運動顧問。",sections:["hero","programs","showcase","teachers","safety","parent_feedback","enrollment","contact"],trustPoints:["師資證照","小班制","保險完整","成果發表","家長社群"]},{id:"guesthouse",cat:"travel",name:"民宿 / 旅店",keyQ:["Q12","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"民宿最容易單次性。網站鎖深度體驗，切入會員 + 推薦。",sections:["hero","rooms","experiences","local_guide","gallery","membership","reservation","contact"],trustPoints:["合法民宿","在地體驗","會員回流","主人陪伴","私房景點"]},{id:"custom_travel",cat:"travel",name:"旅遊規劃師 / 客製旅遊",keyQ:["Q9","Q11","Q14","Q18","Q19","Q23","Q26","Q36"],strategy:"客製旅遊最在意「客戶覺得自己會找」。網站鎖家族需求，切入年度旅遊顧問。",sections:["hero","destinations","planning_service","past_trips","about","engagement_models","enquiry","contact"],trustPoints:["深度行程","在地對接","年度旅遊顧問","家族客製","緊急支援"]},{id:"private_tour",cat:"travel",name:"包車 / 司導 / 在地導遊",keyQ:["Q4","Q11","Q14","Q19","Q21","Q23","Q35"],strategy:"包車最容易比「一日多少」。網站鎖旅遊體驗，切入年度旅遊管家。",sections:["hero","routes","vehicles","guide_intro","pricing","testimonials","booking","contact"],trustPoints:["英日語導遊","車輛新穎","保險完整","私房路線","彈性行程"]},{id:"design_hotel",cat:"travel",name:"主題旅店 / 設計旅店",keyQ:["Q12","Q14","Q19","Q23","Q26","Q35","Q37"],strategy:"主題旅店靠社群。網站鎖品牌記憶，切入會員 + 推薦。",sections:["hero","rooms","design_story","experiences","gallery","membership","reservation","contact"],trustPoints:["設計師作品","主題房型","會員制","攝影師駐店","社群活動"]},{id:"mobile_lodging",cat:"travel",name:"露營車 / 移動旅宿",keyQ:["Q4","Q12","Q14","Q19","Q23","Q26","Q35"],strategy:"露營車淡旺季落差大。網站鎖使用情境，切入會員 + 企業合作。",sections:["hero","vehicles","destinations","experiences","corporate","membership","reservation","contact"],trustPoints:["全新車隊","免駕照","路線推薦","企業活動","會員制"]}],wn={hero:{name:"首屏 Hero",desc:"品牌標語 + 主視覺 + CTA",required:!0},about:{name:"關於我們",desc:"創辦故事、理念、團隊照"},contact:{name:"聯絡資訊",desc:"電話、Email、表單",required:!0},work_portfolio:{name:"作品集",desc:"案件分類展示"},case_studies:{name:"案例研究",desc:"客戶成果 + 數據"},testimonials:{name:"客戶見證",desc:"評價 + 照片"},process:{name:"服務流程",desc:"從諮詢到交付"},pricing_tiers:{name:"方案/價格",desc:"套餐分層、A/B 方案"},service_packages:{name:"服務項目",desc:"核心服務拆解"},faq:{name:"常見問題",desc:"客戶最常問的 5-10 題"},team:{name:"專業團隊",desc:"成員資歷與專長"},methodology:{name:"方法論",desc:"獨家做事方法"},insights:{name:"產業洞察",desc:"部落格/白皮書"},booking:{name:"線上預約",desc:"時段選擇 + 表單"},membership:{name:"會員制",desc:"會員權益、訂閱方案"},press:{name:"媒體報導",desc:"雜誌、新聞、KOL"},capability:{name:"產能規格",desc:"年產量、設備、廠房"},products:{name:"產品線",desc:"主要產品分類"},certifications:{name:"認證資質",desc:"ISO / MIT"},factory_tour:{name:"廠房導覽",desc:"產線照片、品管"},oem_process:{name:"OEM 流程",desc:"打樣到量產"},clients:{name:"合作客戶",desc:"Logo 牆"},equipment:{name:"設備清單",desc:"機台、規格"},tolerances:{name:"加工精度",desc:"公差、材質"},industries_served:{name:"服務產業",desc:"車用、3C、醫療..."},rnd_lab:{name:"R&D 中心",desc:"研發實驗室、配方"},sustainability:{name:"永續承諾",desc:"ESG、環保認證"},compliance:{name:"法規符合",desc:"HACCP、FDA..."},menu:{name:"菜單",desc:"招牌菜 + 價格"},menu_seasonal:{name:"當季菜單",desc:"季節限定菜色"},story:{name:"品牌故事",desc:"創立理念"},reservation:{name:"訂位",desc:"線上訂位"},private_event:{name:"包場服務",desc:"宴會、聚餐"},location:{name:"位置/分店",desc:"地圖、營業時間"},bean_origin:{name:"咖啡產地",desc:"莊園來源、處理法"},subscription:{name:"訂閱方案",desc:"每月配送"},product_line:{name:"商品系列",desc:"產品展示"},recipe_pairing:{name:"搭配料理",desc:"食譜建議"},shop:{name:"線上商店",desc:"購買連結"},shop_info:{name:"門市資訊",desc:"地址、時間"},corporate_gift:{name:"企業送禮",desc:"客製禮盒"},corporate:{name:"企業合作",desc:"B2B 方案"},portfolio_grid:{name:"作品集",desc:"案件分類"},before_after:{name:"Before / After",desc:"前後對比"},licenses:{name:"營造執照",desc:"甲乙丙級"},warranty:{name:"保固承諾",desc:"保固範圍、年限"},practice_areas:{name:"執業範圍",desc:"法律專業領域"},team_credentials:{name:"團隊資歷",desc:"證照、學歷"},monthly_advisor:{name:"月度顧問",desc:"訂閱式顧問"},services:{name:"服務項目",desc:"服務清單"},industries:{name:"服務產業",desc:"專業領域"},engagement_models:{name:"合作模式",desc:"專案/年約/陪跑"},approach:{name:"諮詢取向",desc:"專業流派"},session_types:{name:"諮詢類型",desc:"一對一、團體"},session_packages:{name:"療程方案",desc:"次卡、套裝"},modalities:{name:"療癒方式",desc:"靈氣、能量"},philosophy:{name:"理念",desc:"專業哲學"},track_record:{name:"輔導實績",desc:"IPO 案例"},markets:{name:"專注市場",desc:"日本、東南亞"},coaching_packages:{name:"陪跑方案",desc:"半年、年度"},transformation:{name:"學員轉變",desc:"Before/After"},courses:{name:"課程列表",desc:"課程介紹"},programs:{name:"課程體系",desc:"完整學習路徑"},levels:{name:"分級分階",desc:"初中高階"},curriculum:{name:"課綱",desc:"詳細課程內容"},course_catalog:{name:"課程目錄",desc:"所有課程"},student_works:{name:"學員作品",desc:"成果展示"},student_performances:{name:"學員演出",desc:"發表會"},student_results:{name:"學員成果",desc:"檢定通過"},results:{name:"升學榜單",desc:"錄取學校"},teachers:{name:"師資介紹",desc:"老師簡介"},teacher:{name:"老師介紹",desc:"個人經歷"},enrollment:{name:"報名資訊",desc:"報名流程"},parent_feedback:{name:"家長回饋",desc:"見證評價"},parent_communication:{name:"家長聯絡",desc:"溝通管道"},showcase:{name:"成果發表",desc:"年度展演"},recitals:{name:"音樂會",desc:"發表會記錄"},trial_class:{name:"免費體驗",desc:"試聽預約"},workshops:{name:"工作坊",desc:"主題課程"},workshop_calendar:{name:"工作坊行事曆",desc:"近期場次"},past_events:{name:"過往活動",desc:"紀錄"},corporate_pkg:{name:"企業包班",desc:"B2B 方案"},pricing:{name:"收費標準",desc:"透明計價"},rooms:{name:"房型介紹",desc:"空間照片"},experiences:{name:"體驗活動",desc:"特色活動"},destinations:{name:"推薦地點",desc:"行程選擇"},expeditions:{name:"探險路線",desc:"路線難度"},skill_levels:{name:"能力分級",desc:"適合程度"},skill_progression:{name:"能力進階",desc:"學習路徑"},safety:{name:"安全保障",desc:"措施、保險"},local_guide:{name:"在地導覽",desc:"私房景點"},guide_intro:{name:"導遊介紹",desc:"經歷、語言"},routes:{name:"路線推薦",desc:"行程安排"},vehicles:{name:"車輛介紹",desc:"車型、配備"},planning_service:{name:"規劃服務",desc:"客製流程"},past_trips:{name:"過往行程",desc:"案例分享"},enquiry:{name:"需求諮詢",desc:"詢問表單"},design_story:{name:"設計故事",desc:"空間理念"},quote_calculator:{name:"線上估價",desc:"報價計算"},service_menu:{name:"服務項目",desc:"價目表"},community:{name:"社群",desc:"家長社群"},daily_routine:{name:"一日作息",desc:"時間表"},sites:{name:"營位介紹",desc:"營位資訊"},gallery:{name:"影像紀錄",desc:"照片集"},event_types:{name:"活動類型",desc:"婚禮、派對"},studio:{name:"攝影棚",desc:"空間介紹"},monthly_packages:{name:"月度方案",desc:"訂閱配送"},story_pkg:{name:"故事紀錄方案",desc:"完整紀錄"},enterprise_pkg:{name:"企業方案",desc:"B2B 客製"},platforms:{name:"操作平台",desc:"FB/IG/TikTok"},kol_network:{name:"KOL 網絡",desc:"配對資料庫"},tech_stack:{name:"技術棧",desc:"使用技術"},design_system:{name:"Design System",desc:"設計系統"},maintenance:{name:"維運方案",desc:"月費合約"},subscription_box:{name:"訂閱盒",desc:"每月驚喜"},authentication:{name:"鑑定服務",desc:"真偽驗證"},consignment:{name:"寄賣服務",desc:"代售流程"},collector_club:{name:"藏家俱樂部",desc:"會員社群"},collection:{name:"館藏",desc:"商品展示"},collections:{name:"系列",desc:"產品分類"},styling_service:{name:"造型服務",desc:"個人造型"},lookbook:{name:"Lookbook",desc:"搭配靈感"},product_categories:{name:"商品分類",desc:"產品線"},consultation:{name:"免費諮詢",desc:"選購建議"},installation:{name:"安裝服務",desc:"到府安裝"},service:{name:"售後服務",desc:"維修保固"},reviews:{name:"商品評價",desc:"客戶回饋"},design_service:{name:"設計服務",desc:"空間規劃"},showroom:{name:"門市展示",desc:"實體空間"},b2b_procurement:{name:"B2B 採購",desc:"企業專案"},inventory:{name:"即時庫存",desc:"存貨查詢"},distribution:{name:"通路據點",desc:"經銷網絡"},product_catalog:{name:"產品型錄",desc:"完整商品"},emergency:{name:"緊急服務",desc:"24 小時"},annual_plan:{name:"年度方案",desc:"訂閱合約"},monthly_subscription:{name:"月度合約",desc:"訂閱清潔"},enterprise_relocation:{name:"企業遷移",desc:"B2B 搬遷"},community_contract:{name:"社區合約",desc:"大樓服務"},gear_list:{name:"裝備清單",desc:"建議攜帶"},tour_booking:{name:"參觀預約",desc:"參訪報名"}},Ln=[{id:"haiku",label:"Haiku 4.5",sub:"草稿 / 探索方向",price:"~$0.12/頁",time:"~12 秒",quality:78,note:"比稿用、多方案 A/B",model:"claude-haiku-4-5-20251001"},{id:"sonnet",label:"Sonnet 4.6",sub:"標準 / 客戶交付",price:"~$0.30/頁",time:"~28 秒",quality:90,note:"B 端主力推薦",recommended:!0,model:"claude-sonnet-4-6"},{id:"opus",label:"Opus 4.7",sub:"精緻 / 高端品牌",price:"~$1.50/頁",time:"~55 秒",quality:96,note:"上市公司、高端品牌",model:"claude-opus-4-7"}];function bf(){const[e,t]=Te.useState("industry_picker"),[n,r]=Te.useState(()=>{try{return localStorage.getItem("claude_api_key")||""}catch{return""}}),[i,o]=Te.useState(null),[s,a]=Te.useState(""),[l,g]=Te.useState("all"),[p,v]=Te.useState({companyName:"",yearsInBusiness:"",productOrService:"",targetCustomer:"",trustPoints:[],selectedSections:[],tier:"sonnet",pages:"single",language:"zh-TW",referenceUrl:"",customNotes:"",colorMode:"auto",presetTheme:"midnight",customPrimary:"#1F2937",customAccent:"#C9442F",heroStyle:"gradient",styleMode:"auto",styleId:"editorial"}),[f,h]=Te.useState(null),[k,m]=Te.useState([]),[b,d]=Te.useState("");Te.useEffect(()=>{i&&v(O=>({...O,selectedSections:[...i.sections]}))},[i]);const u=O=>{r(O);try{localStorage.setItem("claude_api_key",O)}catch{}},_=Te.useMemo(()=>{let O=Oo;if(l!=="all"&&(O=O.filter(V=>V.cat===l)),s.trim()){const V=s.toLowerCase();O=O.filter(J=>J.name.toLowerCase().includes(V)||J.id.toLowerCase().includes(V)||J.trustPoints.some(c=>c.toLowerCase().includes(V))||Ft[J.cat].label.toLowerCase().includes(V))}return O},[s,l]),S=O=>{var V;(V=wn[O])!=null&&V.required||v(J=>({...J,selectedSections:J.selectedSections.includes(O)?J.selectedSections.filter(c=>c!==O):[...J.selectedSections,O]}))},C=O=>{v(V=>({...V,trustPoints:V.trustPoints.includes(O)?V.trustPoints.filter(J=>J!==O):[...V.trustPoints,O]}))},j=i&&p.companyName.trim()&&p.productOrService.trim()&&n.trim(),z={midnight:{label:"深夜藍",tone:"沉穩",primary:"#1F2937",accent:"#F59E0B",heroBg:"linear-gradient(135deg, #0F172A 0%, #1F2937 100%)"},forest:{label:"森林綠",tone:"沉穩",primary:"#1F3A2E",accent:"#D97706",heroBg:"linear-gradient(135deg, #0F2419 0%, #2C4A3E 100%)"},wine:{label:"酒紅黑",tone:"沉穩",primary:"#3D1F1F",accent:"#D4AF37",heroBg:"linear-gradient(135deg, #1F0A0A 0%, #5C2A2A 100%)"},mono:{label:"極簡黑",tone:"沉穩",primary:"#111111",accent:"#FF4500",heroBg:"linear-gradient(135deg, #000000 0%, #1A1A1A 100%)"},warmth:{label:"溫暖磚",tone:"溫暖",primary:"#7A3E1F",accent:"#F5C518",heroBg:"linear-gradient(135deg, #4A1F0A 0%, #7A3E1F 100%)"},sunset:{label:"夕陽橙",tone:"溫暖",primary:"#B8541C",accent:"#FFE4B8",heroBg:"linear-gradient(135deg, #8B3A0E 0%, #C9582A 100%)"},terracotta:{label:"陶土紅",tone:"溫暖",primary:"#A03E2A",accent:"#F4A261",heroBg:"linear-gradient(135deg, #6B2818 0%, #A03E2A 100%)"},ocean:{label:"深海藍",tone:"清新",primary:"#0C4A6E",accent:"#22D3EE",heroBg:"linear-gradient(135deg, #082F49 0%, #0C4A6E 100%)"},sage:{label:"鼠尾草",tone:"清新",primary:"#3F5A4F",accent:"#E0B97A",heroBg:"linear-gradient(135deg, #2A3E36 0%, #4F6B5F 100%)"},aubergine:{label:"紫紅夜",tone:"典雅",primary:"#3D2C4A",accent:"#E0B0FF",heroBg:"linear-gradient(135deg, #1F1330 0%, #3D2C4A 100%)"},royal:{label:"皇家紫",tone:"典雅",primary:"#2E1A47",accent:"#FFD700",heroBg:"linear-gradient(135deg, #1A0F2E 0%, #4A2E6B 100%)"},earth:{label:"大地棕",tone:"自然",primary:"#5C3D1F",accent:"#A8C66C",heroBg:"linear-gradient(135deg, #3D2814 0%, #5C3D1F 100%)"}},I={minimalist:{label:"極簡瑞士",desc:"大量留白、無襯線字、細線分隔",emoji:"◯",font:'"Inter", "Noto Sans TC", sans-serif',serifFont:'"Inter", sans-serif',density:"loose",radius:"0",tagBorder:"1px",sectionPad:"120px 48px",preview:{heroBg:"#FFFFFF",heroText:"#0A0A0A",accent:"#000000",cardBg:"#FAFAFA",textColor:"#0A0A0A",mutedColor:"#737373",headingFont:"Inter, sans-serif",isLight:!0}},editorial:{label:"編輯學術",desc:"明體標題、雜誌排版、長文流動",emoji:"📰",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", "Source Han Serif", serif',density:"normal",radius:"0",tagBorder:"1px",sectionPad:"88px 48px",preview:{heroBg:"#F5F0E6",heroText:"#1F1B16",accent:"#C9442F",cardBg:"#FFFFFF",textColor:"#1F1B16",mutedColor:"#6B5F49",headingFont:"Noto Serif TC, serif",isLight:!0}},tech:{label:"科技未來",desc:"單線條、單一空間、極銳利",emoji:"◤",font:'"JetBrains Mono", "Noto Sans TC", monospace',serifFont:'"JetBrains Mono", monospace',density:"tight",radius:"0",tagBorder:"1px solid",sectionPad:"80px 48px",preview:{heroBg:"#0A0E1A",heroText:"#00FFB0",accent:"#00FFB0",cardBg:"#111827",textColor:"#E5E7EB",mutedColor:"#9CA3AF",headingFont:"JetBrains Mono, monospace",isLight:!1}},industrial:{label:"工業冷峻",desc:"混凝土感、鐵件元素、工程字體",emoji:"⚙",font:'"Noto Sans TC", "Helvetica Neue", sans-serif',serifFont:'"Oswald", "Noto Sans TC", sans-serif',density:"tight",radius:"0",tagBorder:"2px",sectionPad:"80px 48px",preview:{heroBg:"#2C2C2C",heroText:"#F5A623",accent:"#F5A623",cardBg:"#3A3A3A",textColor:"#FFFFFF",mutedColor:"#A8A8A8",headingFont:"Oswald, sans-serif",isLight:!1}},warm_craft:{label:"溫暖手作",desc:"圓角、手寫感、暖色調為主",emoji:"🎨",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", serif',density:"normal",radius:"12px",tagBorder:"1px",sectionPad:"88px 48px",preview:{heroBg:"#FDF6E3",heroText:"#7A3E1F",accent:"#F5C518",cardBg:"#FFF8E7",textColor:"#5C3D1F",mutedColor:"#A87D5C",headingFont:"Noto Serif TC, serif",isLight:!0}},luxe:{label:"奢華精品",desc:"金色點綴、襯線標題、大字距",emoji:"◆",font:'"Cormorant Garamond", "Noto Serif TC", serif',serifFont:'"Cormorant Garamond", "Noto Serif TC", serif',density:"loose",radius:"0",tagBorder:"0.5px",sectionPad:"120px 60px",preview:{heroBg:"#1A1A1A",heroText:"#D4AF37",accent:"#D4AF37",cardBg:"#262626",textColor:"#F5F0E6",mutedColor:"#A8A39A",headingFont:"Cormorant Garamond, serif",isLight:!1}},bold_avant:{label:"大膽前衛",desc:"超大字、撞色、不對稱",emoji:"🔥",font:'"Noto Sans TC", sans-serif',serifFont:'"Archivo Black", "Noto Sans TC", sans-serif',density:"normal",radius:"0",tagBorder:"3px",sectionPad:"100px 48px",preview:{heroBg:"#FF3B00",heroText:"#FFFFFF",accent:"#000000",cardBg:"#FFFFFF",textColor:"#000000",mutedColor:"#666666",headingFont:"Archivo Black, sans-serif",isLight:!1}},medical_clean:{label:"醫療潔淨",desc:"純白、藍綠強調、極乾淨",emoji:"✚",font:'"Noto Sans TC", "Inter", sans-serif',serifFont:'"Noto Sans TC", sans-serif',density:"normal",radius:"4px",tagBorder:"1px",sectionPad:"88px 48px",preview:{heroBg:"#F0F7FA",heroText:"#0C4A6E",accent:"#0EA5E9",cardBg:"#FFFFFF",textColor:"#1F2937",mutedColor:"#6B7280",headingFont:"Inter, sans-serif",isLight:!0}},food_inviting:{label:"餐飲誘人",desc:"溫暖色、圖文並重、邀請感",emoji:"🍽",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", serif',density:"normal",radius:"8px",tagBorder:"1px",sectionPad:"88px 48px",preview:{heroBg:"#4A1F0A",heroText:"#FFE4B8",accent:"#F5A623",cardBg:"#FFF8EC",textColor:"#3D1F0A",mutedColor:"#8B6F4A",headingFont:"Noto Serif TC, serif",isLight:!1}},creator:{label:"創作者作品集",desc:"黑底白字、作品為王、聚光燈感",emoji:"◧",font:'"Noto Sans TC", sans-serif',serifFont:'"Noto Serif TC", serif',density:"tight",radius:"0",tagBorder:"1px",sectionPad:"88px 56px",preview:{heroBg:"#0A0A0A",heroText:"#FFFFFF",accent:"#FF00AA",cardBg:"#1A1A1A",textColor:"#FFFFFF",mutedColor:"#888888",headingFont:"Noto Serif TC, serif",isLight:!1}}},D=()=>{var J,c,A;if(!f)return{primary:"#1F1B16",accent:"#C9442F",heroBg:null};if(p.colorMode==="preset"){const N=z[p.presetTheme]||z.midnight;return{primary:N.primary,accent:N.accent,heroBg:N.heroBg}}if(p.colorMode==="custom")return{primary:p.customPrimary,accent:p.customAccent,heroBg:`linear-gradient(135deg, ${p.customPrimary} 0%, ${ae(p.customPrimary,-20)} 100%)`};const O=((J=f.brand)==null?void 0:J.primaryColor)||"#1F1B16",V=((c=f.brand)==null?void 0:c.accentColor)||"#C9442F";return{primary:O,accent:V,heroBg:`linear-gradient(135deg, ${O} 0%, ${((A=Ft[i==null?void 0:i.cat])==null?void 0:A.color)||"#2C4A3E"} 100%)`}},U=()=>{var V;const O=p.styleMode==="auto"?((V=f==null?void 0:f.brand)==null?void 0:V.styleRecommendation)||"editorial":p.styleId;return I[O]||I.editorial};function ae(O,V){const J=parseInt(O.slice(1),16),c=0,A=Math.abs(V)/100,N=J>>16,F=J>>8&255,w=J&255;return"#"+(16777216+(Math.round((c-N)*A)+N)*65536+(Math.round((c-F)*A)+F)*256+(Math.round((c-w)*A)+w)).toString(16).slice(1)}const Q=async()=>{var c,A,N,F,w;t("generating"),d(""),m([]);const O=Ln.find(E=>E.id===p.tier),V=p.selectedSections,J=E=>m(M=>[...M,{time:new Date().toLocaleTimeString(),msg:E}]);J(`啟動 ${O.label}`),J(`產業：${i.name}（${Ft[i.cat].label}）`),J(`問診重點題：${i.keyQ.join("、")}`),J(`生成 ${V.length} 個 sections`);try{const E=V.map(te=>{var de,ue;return`${te}: ${((de=wn[te])==null?void 0:de.name)||te} — ${((ue=wn[te])==null?void 0:ue.desc)||""}`}).join(`
`),M=i.keyQ.map(te=>`${te}: ${Bl[te]||te}`).join(`
`),W=`你是專精台灣 B 端產業的網站文案策略師，熟悉「老闆的接案學院」問診話術劇本。
你不只寫漂亮的字，你寫的每一段文案都對應一個明確的「客戶心理動線」。

你的文案特色：
- 信任感優先，避免浮誇形容詞（「業界第一」「最專業」這類詞嚴禁使用）
- 突顯具體數字（年資、產能、案例數、認證編號）
- 使用該產業的專業術語但不過度堆砌
- 繁體中文，台灣用語（不用「視頻」「軟件」這類詞）
- 短句、有節奏感，每段不超過 3 句
- 在 Hero 與關鍵 sections 直接呼應該產業的「問診重點題」隱含的客戶痛點

你會回傳純 JSON，遵守以下規則：
1. 絕對不要加 markdown 程式碼標記（\`\`\`json）
2. 絕對不要加任何說明文字、前言、後記
3. 字串內如果有引號，必須用反斜線轉義（例如 "他說\\"你好\\""）
4. 中文引號「」『』禁止用於 JSON 結構，只能用英文 ""
5. 物件最後一個欄位後面不可以有逗號
6. 確保所有 { [ 都有對應的 } ]
7. 第一個字元必須是 {，最後一個字元必須是 }，中間不能有任何其他內容`,B=p.styleMode==="preset"?`
## 使用者指定風格：${(c=I[p.styleId])==null?void 0:c.label}（${(A=I[p.styleId])==null?void 0:A.desc}）。文案語氣、CTA 用詞要呼應此風格。`:`
## 風格：請你依產業特性，推薦最合適的 styleRecommendation（從以下選一：${Object.keys(I).join("、")}）。`,R=p.pages==="multi"?`
## 頁面結構：多頁式（首頁 + 4 內頁）
請把 sections 分配到 5 個頁面：
- home: hero + 精選 3-4 個 sections 的精簡版（不放完整內容、放預覽 + 引導去內頁）
- about: 關於、團隊、品牌故事相關 sections
- services: 服務、產品、方案、案例相關 sections
- portfolio: 作品集、案例研究、客戶見證相關 sections（若無相關 section 此頁可省略）
- contact: 聯絡、預約、FAQ、地圖相關 sections
每個頁面要有自己的 hero 標題（不一定要叫 hero、可以是頁面主標）。`:`
## 頁面結構：單頁式（all-in-one + 錨點導覽）
所有 sections 串成一個 landing page。每個 section 都要有 anchor id（用 sec.key 即可），首屏要有導覽列指向各 section。`,X=`為以下企業生成網站內容（${p.language==="en"?"英文":"繁體中文"}）：

## 企業資訊
- 公司：${p.companyName}
- 產業：${i.name}（${Ft[i.cat].label}）
${p.yearsInBusiness?`- 經營年資：${p.yearsInBusiness} 年`:""}
- 主要產品/服務：${p.productOrService}
${p.targetCustomer?`- 目標客戶：${p.targetCustomer}`:""}
${p.trustPoints.length?`- 信任亮點：${p.trustPoints.join("、")}`:""}
${p.referenceUrl?`- 參考網站：${p.referenceUrl}`:""}
${p.customNotes?`- 特別需求：${p.customNotes}`:""}

## 產業策略（重要 — 文案必須呼應這個方向）
${i.strategy}

## 該產業客戶最在意的問診重點題（文案要回應這些隱含痛點）
${M}
${B}
${R}

## 需要生成的 sections（依序）
${E}

## 回傳 JSON 格式
{
  "brand": {
    "tagline": "20 字內主標語（直接打中該產業客戶最深的痛點）",
    "subtitle": "40 字內副標（補強信任感）",
    "primaryColor": "Hero 背景主色 hex。必須是深色（亮度 < 35%）以便白字可讀。B 端避免螢光色、粉嫩色。範例：#1F2937、#2C4A3E、#3D1F1F",
    "accentColor": "點綴色 hex（CTA、邊框用）。可選飽和度高的暖色",
    "styleRecommendation": "${p.styleMode==="preset"?p.styleId:"從可用風格中挑一個最適合此產業的 key"}",
    "navMenu": [{"label": "導覽項目名稱", "anchor": "section_key 或 page_id"}]
  },
  "sections": [
    {
      "key": "section_key（嚴格使用上面 sections 列出的 key）",
      "page": "${p.pages==="multi"?"home | about | services | portfolio | contact（指定此 section 放在哪個頁面）":"home（單頁式時固定填 home）"}",
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
6. 多頁式時，每個頁面至少要有 2 個 sections（hero 加 1-2 個內容）`;J("傳送請求至 Anthropic API...");const H=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":n,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:O.model,max_tokens:8192,system:W,messages:[{role:"user",content:X}]})});if(!H.ok){const te=await H.json().catch(()=>({}));throw new Error(((N=te.error)==null?void 0:N.message)||`API ${H.status}`)}const re=await H.json();if(J(`收到回應，tokens: ${((F=re.usage)==null?void 0:F.input_tokens)||"?"} in / ${((w=re.usage)==null?void 0:w.output_tokens)||"?"} out`),re.stop_reason==="max_tokens")throw J("⚠ 回應被截斷（max_tokens），自動重試一次..."),new Error("RETRY_MAX_TOKENS");let ie=re.content.filter(te=>te.type==="text").map(te=>te.text).join(`
`).trim();ie=ie.replace(/^```json\s*/i,"").replace(/```\s*$/,"").trim();let oe;try{oe=JSON.parse(ie)}catch(te){J(`首次解析失敗（${te.message}），啟動容錯修復...`);let de=ie.replace(/,(\s*[}\]])/g,"$1");const ue=de.indexOf("{"),je=de.lastIndexOf("}");ue>=0&&je>ue&&(de=de.slice(ue,je+1)),de=de.replace(/[「『]/g,'"').replace(/[」』]/g,'"');try{oe=JSON.parse(de),J("✓ 容錯修復成功")}catch(he){const et=he.message.match(/position (\d+)/),ht=et?parseInt(et[1]):0,We=de.slice(Math.max(0,ht-80),Math.min(de.length,ht+80));throw J(`✗ 容錯失敗。錯誤位置附近文字：...${We}...`),new Error(`AI 回傳的 JSON 格式有問題（${he.message}）。建議按「重新生成」再試一次，或減少 sections 數量。`)}}J("內容解析成功，渲染預覽中..."),h(oe),G(oe),t("preview")}catch(E){if(E.message==="RETRY_MAX_TOKENS"&&!window._noyaRetried)return window._noyaRetried=!0,setTimeout(()=>{window._noyaRetried=!1},3e4),Q();J(`錯誤：${E.message}`),d(E.message),t("questionnaire")}},[L,y]=Te.useState(null),Z=async(O,V="")=>{var A;if(!f||!i)return;const J=f.sections.find(N=>N.key===O);if(!J)return;y(O);const c=Ln.find(N=>N.id===p.tier);try{const N=wn[O],F=i.keyQ.map(H=>`${H}: ${Bl[H]||H}`).join(`
`),w=`你是專精台灣 B 端產業的網站文案策略師，熟悉「老闆的接案學院」問診話術劇本。
你只要重寫一個 section 的內容（其他 sections 已固定不動）。
回傳純 JSON，不加 markdown 標記，第一個字元必須是 {，最後一個字元必須是 }。`,E=`重寫以下 section 的內容（保持風格與其他 sections 一致）：

## 企業資訊
- 公司：${p.companyName}
- 產業：${i.name}
${p.yearsInBusiness?`- 經營年資：${p.yearsInBusiness} 年`:""}
- 主要產品/服務：${p.productOrService}
${p.targetCustomer?`- 目標客戶：${p.targetCustomer}`:""}
${p.trustPoints.length?`- 信任亮點：${p.trustPoints.join("、")}`:""}

## 產業策略
${i.strategy}

## 該產業客戶最在意的問診重點題
${F}

## 要重寫的 section
- 類型：${O} — ${(N==null?void 0:N.name)||""}（${(N==null?void 0:N.desc)||""}）
- 目前內容（不滿意，請重寫）：
  - 標題：${J.heading||""}
  - 副標：${J.subheading||""}
  - 內文：${J.content||""}

${V?`## 設計師的特別要求
${V}

換一個方向、不同的切入角度，但仍要呼應產業策略。`:"## 請給一個完全不同方向的版本（不同主標、不同角度切入）"}

## 回傳格式（純 JSON）
{
  "key": "${O}",
  "heading": "新標題（不超過 16 字）",
  "subheading": "新副標（不超過 30 字，可省略）",
  "content": "新內文（2-4 句段落，呼應問診重點題）",
  "items": [{"title":"...", "desc":"...", "value":"..."}],
  "cta": "按鈕文案（若適用）"
}`,M=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":n,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:c.model,max_tokens:2048,system:w,messages:[{role:"user",content:E}]})});if(!M.ok){const H=await M.json().catch(()=>({}));throw new Error(((A=H.error)==null?void 0:A.message)||`API ${M.status}`)}let B=(await M.json()).content.filter(H=>H.type==="text").map(H=>H.text).join(`
`).trim();B=B.replace(/^```json\s*/i,"").replace(/```\s*$/,"").trim();let R;try{R=JSON.parse(B)}catch{let H=B.replace(/,(\s*[}\]])/g,"$1").replace(/[「『]/g,'"').replace(/[」』]/g,'"');const re=H.indexOf("{"),ie=H.lastIndexOf("}");re>=0&&ie>re&&(H=H.slice(re,ie+1)),R=JSON.parse(H)}const X={...J,...R,key:O};h(H=>({...H,sections:H.sections.map(re=>re.key===O?X:re)}))}catch(N){alert(`重生失敗：${N.message}`)}finally{y(null)}},ce="noya_history_v1",Y=10,G=O=>{try{const V={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),savedAt:new Date().toISOString(),industry:{id:i.id,name:i.name,cat:i.cat},answers:{...p},content:O},J=$();J.unshift(V);const c=J.slice(0,Y);localStorage.setItem(ce,JSON.stringify(c))}catch(V){console.error("Failed to save history:",V)}},$=()=>{try{const O=localStorage.getItem(ce);return O?JSON.parse(O):[]}catch{return[]}},q=O=>{try{const V=$().filter(J=>J.id!==O);localStorage.setItem(ce,JSON.stringify(V))}catch{}},P=O=>{const V=Oo.find(J=>J.id===O.industry.id);if(!V){alert("找不到對應的產業（資料可能已更新），無法載入。");return}o(V),v(O.answers),h(O.content),t("preview")},T=()=>{if(!f)return"";const O=D(),V=O.primary,J=O.accent,c=f.sections.map((A,N)=>{var F;return{id:`sec_${N}_${Math.random().toString(36).slice(2,8)}`,elType:"section",settings:{structure:"10",padding:{unit:"px",top:"80",bottom:"80",left:"20",right:"20"},background_background:"classic",background_color:N%2===0?"#FBF8F1":"#FFFFFF"},elements:[{id:`col_${N}_${Math.random().toString(36).slice(2,8)}`,elType:"column",settings:{_column_size:100},elements:[{id:`head_${N}`,elType:"widget",widgetType:"heading",settings:{title:A.heading||((F=wn[A.key])==null?void 0:F.name)||"",header_size:"h2",align:"center",title_color:V,typography_typography:"custom",typography_font_size:{unit:"px",size:36},typography_font_weight:"500"}},A.subheading&&{id:`sub_${N}`,elType:"widget",widgetType:"heading",settings:{title:A.subheading,header_size:"h4",align:"center"}},A.content&&{id:`text_${N}`,elType:"widget",widgetType:"text-editor",settings:{editor:`<p style="text-align:center;max-width:720px;margin:24px auto;">${A.content}</p>`}},A.items&&A.items.length>0&&{id:`items_${N}`,elType:"widget",widgetType:"icon-list",settings:{icon_list:A.items.slice(0,8).map((w,E)=>({_id:`it${E}`,text:`<strong>${w.title||""}</strong>${w.desc?" — "+w.desc:""}${w.value?" ("+w.value+")":""}`,selected_icon:{value:"fas fa-check",library:"fa-solid"}}))}},A.cta&&{id:`cta_${N}`,elType:"widget",widgetType:"button",settings:{text:A.cta,align:"center",background_color:J,button_text_color:"#FFFFFF"}}].filter(Boolean)}]}});return JSON.stringify({version:"0.4",title:`${p.companyName} — 首頁`,type:"page",content:c,page_settings:[]},null,2)},le=()=>{var c,A;if(!f)return"";const O=D(),V=new Date().toISOString(),J=f.sections.map(N=>ee(N,O)).join(`

`);return`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wp="http://wordpress.org/export/1.2/">
<channel>
<title>${p.companyName}</title>
<wp:wxr_version>1.2</wp:wxr_version>
<item>
<title>${p.companyName} — 首頁</title>
<pubDate>${V}</pubDate>
<wp:post_type><![CDATA[page]]></wp:post_type>
<wp:status><![CDATA[publish]]></wp:status>
<content:encoded><![CDATA[${J}]]></content:encoded>
<wp:postmeta>
<wp:meta_key>_wp_page_template</wp:meta_key>
<wp:meta_value><![CDATA[elementor_header_footer]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>site-post-title</wp:meta_key>
<wp:meta_value><![CDATA[disabled]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>ast-title-bar-display</wp:meta_key>
<wp:meta_value><![CDATA[disabled]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>ast-featured-img</wp:meta_key>
<wp:meta_value><![CDATA[disabled]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>site-sidebar-layout</wp:meta_key>
<wp:meta_value><![CDATA[no-sidebar]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>site-content-layout</wp:meta_key>
<wp:meta_value><![CDATA[page-builder]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>_yoast_wpseo_title</wp:meta_key>
<wp:meta_value><![CDATA[${((c=f.meta)==null?void 0:c.seoTitle)||""}]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>_yoast_wpseo_metadesc</wp:meta_key>
<wp:meta_value><![CDATA[${((A=f.meta)==null?void 0:A.seoDescription)||""}]]></wp:meta_value>
</wp:postmeta>
</item>
</channel>
</rss>`},ne=()=>{if(!f)return"";const O=D();return f.sections.map(V=>ee(V,O)).join(`

`)},ee=(O,V)=>{var M;const J=O.key==="hero",c=(O.heading||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),A=(O.subheading||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),N=(O.content||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),F=(O.cta||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(J){let W=`<!-- wp:cover {"dimRatio":0,"customGradient":"linear-gradient(135deg,${V.primary} 0%,${V.primary}DD 100%)","minHeight":480,"minHeightUnit":"px","contentPosition":"center center","isDark":true,"align":"full","style":{"spacing":{"padding":{"top":"100px","bottom":"100px","left":"24px","right":"24px"}}}} -->
<div class="wp-block-cover alignfull is-light" style="padding-top:100px;padding-right:24px;padding-bottom:100px;padding-left:24px;min-height:480px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim wp-block-cover__gradient-background has-background-gradient" style="background:linear-gradient(135deg,${V.primary} 0%,${V.primary}DD 100%)"></span><div class="wp-block-cover__inner-container">

<!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"clamp(32px, 5vw, 56px)","fontWeight":"700","lineHeight":"1.3"},"color":{"text":"#FFFFFF"}}} -->
<h1 class="wp-block-heading has-text-align-center has-text-color" style="color:#FFFFFF;font-size:clamp(32px, 5vw, 56px);font-weight:700;line-height:1.3">${c}</h1>
<!-- /wp:heading -->
`;return A&&(W+=`
<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","lineHeight":"1.6"},"color":{"text":"#E8DCC0"},"spacing":{"margin":{"top":"16px","bottom":"0"}}}} -->
<p class="has-text-align-center has-text-color" style="color:#E8DCC0;margin-top:16px;margin-bottom:0;font-size:20px;line-height:1.6">${A}</p>
<!-- /wp:paragraph -->
`),N&&(W+=`
<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","lineHeight":"1.8"},"color":{"text":"#E8DCC0"},"spacing":{"margin":{"top":"16px","bottom":"0"}}}} -->
<p class="has-text-align-center has-text-color" style="color:#E8DCC0;margin-top:16px;margin-bottom:0;font-size:16px;line-height:1.8">${N}</p>
<!-- /wp:paragraph -->
`),F&&(W+=`
<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"32px"}}}} -->
<div class="wp-block-buttons" style="margin-top:32px">
<!-- wp:button {"style":{"color":{"background":"${V.accent}","text":"#FFFFFF"},"spacing":{"padding":{"top":"16px","bottom":"16px","left":"36px","right":"36px"}},"border":{"radius":"0px"}},"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-text-color has-background wp-element-button" style="border-radius:0px;color:#FFFFFF;background-color:${V.accent};padding-top:16px;padding-right:36px;padding-bottom:16px;padding-left:36px">${F}</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
`),W+=`</div></div>
<!-- /wp:cover -->`,W}const w=O.key.length%2===0?"#FFFFFF":"#FBF8F1";let E=`<!-- wp:group {"align":"full","style":{"color":{"background":"${w}"},"spacing":{"padding":{"top":"80px","bottom":"80px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1100px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:${w};padding-top:80px;padding-right:24px;padding-bottom:80px;padding-left:24px">

`;if(E+=`<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px","letterSpacing":"2px","fontFamily":"monospace","textTransform":"uppercase"},"color":{"text":"${V.accent}"},"spacing":{"margin":{"top":"0","bottom":"16px"}}}} -->
<p class="has-text-align-center has-text-color" style="color:${V.accent};margin-top:0;margin-bottom:16px;font-family:monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase">${O.key}</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"clamp(24px, 3.5vw, 36px)","fontWeight":"500","lineHeight":"1.3"},"color":{"text":"${V.primary}"},"spacing":{"margin":{"top":"0","bottom":"12px"}}}} -->
<h2 class="wp-block-heading has-text-align-center has-text-color" style="color:${V.primary};margin-top:0;margin-bottom:12px;font-size:clamp(24px, 3.5vw, 36px);font-weight:500;line-height:1.3">${c}</h2>
<!-- /wp:heading -->
`,A&&(E+=`
<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"17px","fontStyle":"italic"},"color":{"text":"#6B5F49"},"spacing":{"margin":{"top":"0","bottom":"16px"}}}} -->
<p class="has-text-align-center has-text-color" style="color:#6B5F49;margin-top:0;margin-bottom:16px;font-size:17px;font-style:italic">${A}</p>
<!-- /wp:paragraph -->
`),N&&(E+=`
<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","lineHeight":"1.8"},"spacing":{"margin":{"top":"0","bottom":"24px"}}}} -->
<p class="has-text-align-center" style="margin-top:0;margin-bottom:24px;font-size:16px;line-height:1.8">${N}</p>
<!-- /wp:paragraph -->
`),(M=O.items)!=null&&M.length){const W=O.items.slice(0,6),B=W.length<=2?W.length:3,R=[];for(let X=0;X<W.length;X+=B)R.push(W.slice(X,X+B));R.forEach(X=>{E+=`
<!-- wp:columns {"align":"wide","style":{"spacing":{"margin":{"top":"32px","bottom":"0"},"blockGap":{"left":"20px"}}}} -->
<div class="wp-block-columns alignwide" style="margin-top:32px;margin-bottom:0">
`,X.forEach(H=>{const re=(H.title||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),ie=(H.desc||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"),oe=(H.value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;");E+=`<!-- wp:column -->
<div class="wp-block-column">
<!-- wp:group {"style":{"border":{"left":{"color":"${V.accent}","width":"3px"}},"color":{"background":"#FFFFFF"},"spacing":{"padding":{"top":"20px","bottom":"20px","left":"24px","right":"24px"},"blockGap":"8px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background" style="border-left-color:${V.accent};border-left-width:3px;background-color:#FFFFFF;padding-top:20px;padding-right:24px;padding-bottom:20px;padding-left:24px">

<!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"16px","fontWeight":"500"},"spacing":{"margin":{"top":"0","bottom":"6px"}}}} -->
<h4 class="wp-block-heading" style="margin-top:0;margin-bottom:6px;font-size:16px;font-weight:500">${re}</h4>
<!-- /wp:heading -->
`,ie&&(E+=`<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6"},"color":{"text":"#6B5F49"},"spacing":{"margin":{"top":"0","bottom":"0"}}}} -->
<p class="has-text-color" style="color:#6B5F49;margin-top:0;margin-bottom:0;font-size:14px;line-height:1.6">${ie}</p>
<!-- /wp:paragraph -->
`),oe&&(E+=`<!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontFamily":"monospace"},"color":{"text":"${V.primary}"},"spacing":{"margin":{"top":"6px","bottom":"0"}}}} -->
<p class="has-text-color" style="color:${V.primary};margin-top:6px;margin-bottom:0;font-family:monospace;font-size:13px">${oe}</p>
<!-- /wp:paragraph -->
`),E+=`</div>
<!-- /wp:group -->
</div>
<!-- /wp:column -->
`}),E+=`</div>
<!-- /wp:columns -->
`})}return F&&(E+=`
<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"32px","bottom":"0"}}}} -->
<div class="wp-block-buttons" style="margin-top:32px;margin-bottom:0">
<!-- wp:button {"style":{"color":{"background":"${V.primary}","text":"#FFFFFF"},"spacing":{"padding":{"top":"14px","bottom":"14px","left":"32px","right":"32px"}},"border":{"radius":"0px"}},"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-text-color has-background wp-element-button" style="border-radius:0px;color:#FFFFFF;background-color:${V.primary};padding-top:14px;padding-right:32px;padding-bottom:14px;padding-left:32px">${F}</a></div>
<!-- /wp:button -->
</div>
<!-- /wp:buttons -->
`),E+=`</div>
<!-- /wp:group -->`,E},ye=()=>{var B,R,X,H,re;if(!f)return"";const O=D(),V=U(),J=ie=>String(ie||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),c=p.pages==="multi",A=J(p.companyName),N=(ie,oe,te)=>{var Et;const de=ie.key==="hero",ue=oe%2===0?"#FFFFFF":"#FBF8F1",je=de?O.heroBg:ue,he=de?"h1":"h2",ht=`<${he} class="${de?"hero-h1":"sec-h2"}">${J(ie.heading)}</${he}>`,We=ie.subheading?`<p class="sec-sub">${J(ie.subheading)}</p>`:"",_n=ie.content?`<p class="sec-content">${J(ie.content)}</p>`:"",Xn=(Et=ie.items)!=null&&Et.length?`<div class="sec-items">${ie.items.map(tt=>`<div class="sec-item"><h4>${J(tt.title)}</h4>${tt.desc?`<p>${J(tt.desc)}</p>`:""}${tt.value?`<div class="sec-item-value">${J(tt.value)}</div>`:""}</div>`).join("")}</div>`:"",qn=ie.cta?`<a class="sec-cta" href="#contact">${J(ie.cta)}</a>`:"",er=de?"":`<span class="sec-tag">${J(ie.key.toUpperCase())}</span>`;return`<section ${de?"":`id="${J(ie.key)}"`} class="sec ${de?"hero":""}" style="background:${je};">
  <div class="sec-inner">
    ${er}
    ${ht}
    ${We}
    ${_n}
    ${Xn}
    ${qn}
  </div>
</section>`};let F=(B=f.brand)==null?void 0:B.navMenu;(!F||F.length===0)&&(c?F=[{label:"首頁",anchor:"home"},{label:"關於",anchor:"about"},{label:"服務",anchor:"services"},{label:"作品",anchor:"portfolio"},{label:"聯絡",anchor:"contact"}]:F=f.sections.filter(ie=>ie.key!=="hero").slice(0,6).map(ie=>{var oe;return{label:((oe=ie.heading)==null?void 0:oe.slice(0,4))||ie.key,anchor:ie.key}}));const w=`<nav class="topnav">
  <div class="topnav-inner">
    <div class="brand">${A}</div>
    <ul class="nav-links">
      ${F.map(ie=>c?`<li><a href="#" data-page="${J(ie.anchor)}" class="nav-link">${J(ie.label)}</a></li>`:`<li><a href="#${J(ie.anchor)}">${J(ie.label)}</a></li>`).join("")}
    </ul>
    <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
  </div>
</nav>`;let E="";if(c){const ie=["home","about","services","portfolio","contact"],oe={};ie.forEach(te=>oe[te]=[]),f.sections.forEach(te=>{const de=te.page||"home";oe[de]||(oe[de]=[]),oe[de].push(te)}),(oe.home.length===0||oe.home[0].key!=="hero")&&oe.home.unshift({key:"hero",heading:((R=f.brand)==null?void 0:R.tagline)||A,subheading:((X=f.brand)==null?void 0:X.subtitle)||"",content:"",cta:"了解服務"}),E=ie.filter(te=>oe[te].length>0).map((te,de)=>{const ue=oe[te].map((je,he)=>N(je,he,oe[te].length)).join(`
`);return`<div class="page" data-page="${te}" ${de===0?"":'style="display:none;"'}>
${ue}
</div>`}).join(`
`)}else E=`<div class="page" data-page="home">
${f.sections.map((oe,te)=>N(oe,te,f.sections.length)).join(`
`)}
</div>`;const M=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Noto+Sans+TC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&family=Cormorant+Garamond:wght@400;500;700&family=Archivo+Black&family=Oswald:wght@400;500;700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">`,W=c?`
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
<title>${A} — ${J(((H=f.brand)==null?void 0:H.tagline)||"")}</title>
<meta name="description" content="${J(((re=f.meta)==null?void 0:re.seoDescription)||"")}">
${M}
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: ${V.font}; color: #1F1B16; line-height: 1.7; padding-top: 64px; }

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
    font-family: ${V.serifFont};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${O.primary};
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
    border-radius: ${V.radius};
  }
  .nav-links a:hover { color: ${O.accent}; }
  .nav-links a.active {
    background: ${O.primary};
    color: #FFFFFF;
  }
  .nav-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: ${O.primary};
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
  .sec { padding: ${V.sectionPad}; }
  .sec-inner { max-width: 1100px; margin: 0 auto; }
  .sec.hero {
    padding: ${V.density==="loose"?"160px":"120px"} 24px;
    color: #F5F0E6;
    text-align: center;
  }
  .sec.hero .hero-h1 {
    font-family: ${V.serifFont};
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 16px;
    line-height: 1.3;
    letter-spacing: ${V.density==="tight"?"-0.02em":"0"};
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
    background: ${O.accent};
    color: #FFF;
    padding: 16px 36px;
    border-radius: ${V.radius};
  }
  .sec-tag {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 2px;
    color: ${O.accent};
    border: ${V.tagBorder} solid ${O.accent};
    padding: 4px 10px;
    margin-bottom: 20px;
  }
  .sec-h2 {
    font-family: ${V.serifFont};
    font-size: clamp(24px, 3.5vw, 36px);
    font-weight: 500;
    margin-bottom: 12px;
    color: ${O.primary};
    letter-spacing: ${V.density==="tight"?"-0.01em":"0"};
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
    border-left: 3px solid ${O.accent};
    border-radius: ${V.radius};
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .sec.hero .sec-item {
    background: rgba(255,255,255,0.08);
    border-left-color: ${O.accent};
    color: #F5F0E6;
  }
  .sec-item h4 { font-size: 16px; font-weight: 500; margin-bottom: 6px; }
  .sec.hero .sec-item h4 { color: #FFFFFF; }
  .sec-item p { font-size: 14px; color: #6B5F49; }
  .sec.hero .sec-item p { color: #E8DCC0; }
  .sec-item-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: ${O.primary};
    margin-top: 6px;
  }
  .sec.hero .sec-item-value { color: ${O.accent}; }
  .sec-cta {
    display: inline-block;
    margin-top: 24px;
    padding: 14px 32px;
    background: ${O.primary};
    color: #FFFFFF;
    text-decoration: none;
    font-size: 15px;
    letter-spacing: 1px;
    border-radius: ${V.radius};
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
  footer a { color: ${O.accent}; text-decoration: none; }
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
</style>
</head>
<body>
${w}
${E}
<footer>
  &copy; ${new Date().getFullYear()} ${A} · Designed by <a href="#">NOYA WEB DESIGN</a> · Style: ${V.label}
</footer>
${W}
</body>
</html>`},be=()=>{var re,ie,oe;if(!f)return{};const O=D(),V=U(),J=te=>String(te||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),c=J(p.companyName),A=p.pages==="multi",N=(te,de)=>{var tt;const ue=te.key==="hero"||de===0,je=de%2===0?"#FFFFFF":"#FBF8F1",he=ue?O.heroBg:je,et=ue?"h1":"h2",We=`<${et} class="${ue?"hero-h1":"sec-h2"}">${J(te.heading)}</${et}>`,_n=te.subheading?`<p class="sec-sub">${J(te.subheading)}</p>`:"",Xn=te.content?`<p class="sec-content">${J(te.content)}</p>`:"",qn=(tt=te.items)!=null&&tt.length?`<div class="sec-items">${te.items.map(nr=>`<div class="sec-item"><h4>${J(nr.title)}</h4>${nr.desc?`<p>${J(nr.desc)}</p>`:""}${nr.value?`<div class="sec-item-value">${J(nr.value)}</div>`:""}</div>`).join("")}</div>`:"",er=te.cta?`<a class="sec-cta" href="contact.html">${J(te.cta)}</a>`:"",tr=ue?"":`<span class="sec-tag">${J(te.key.toUpperCase())}</span>`;return`<section ${ue?"":`id="${J(te.key)}"`} class="sec ${ue?"hero":""}" style="background:${he};">
  <div class="sec-inner">
    ${tr}
    ${We}
    ${_n}
    ${Xn}
    ${qn}
    ${er}
  </div>
</section>`},F=`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: ${V.font}; color: #1F1B16; line-height: 1.7; padding-top: 64px; }
  .topnav {
    position: fixed; top: 0; left: 0; right: 0;
    background: rgba(255,255,255,0.96); backdrop-filter: blur(10px);
    border-bottom: 1px solid #E5DDC8; z-index: 1000; height: 64px;
  }
  .topnav-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 100%; display: flex; align-items: center; justify-content: space-between; }
  .topnav .brand { font-family: ${V.serifFont}; font-size: 18px; font-weight: 700; letter-spacing: 1px; color: ${O.primary}; text-decoration: none; }
  .nav-links { list-style: none; display: flex; gap: 8px; }
  .nav-links a { display: inline-block; padding: 8px 14px; color: #1F1B16; text-decoration: none; font-size: 14px; border-radius: ${V.radius}; transition: all .15s; }
  .nav-links a:hover { color: ${O.accent}; }
  .nav-links a.active { background: ${O.primary}; color: #FFFFFF; }
  .nav-toggle { display: none; background: none; border: none; font-size: 24px; cursor: pointer; color: ${O.primary}; }
  @media (max-width: 720px) {
    .nav-toggle { display: block; }
    .nav-links { display: none; position: absolute; top: 64px; left: 0; right: 0; background: #FFFFFF; flex-direction: column; padding: 16px; border-bottom: 1px solid #E5DDC8; }
    .nav-links.open { display: flex; }
    .nav-links a { display: block; }
  }
  .sec { padding: ${V.sectionPad}; }
  .sec-inner { max-width: 1100px; margin: 0 auto; }
  .sec.hero { padding: ${V.density==="loose"?"160px":"120px"} 24px; color: #F5F0E6; text-align: center; }
  .sec.hero .hero-h1 { font-family: ${V.serifFont}; font-size: clamp(32px, 5vw, 56px); font-weight: 700; color: #FFFFFF; margin-bottom: 16px; line-height: 1.3; letter-spacing: ${V.density==="tight"?"-0.02em":"0"}; }
  .sec.hero .sec-sub { color: #E8DCC0; font-size: clamp(16px, 2vw, 20px); margin-bottom: 16px; max-width: 760px; margin: 0 auto 16px; }
  .sec.hero .sec-content { color: #E8DCC0; font-size: 16px; max-width: 720px; margin: 16px auto 24px; }
  .sec.hero .sec-cta { background: ${O.accent}; color: #FFF; padding: 16px 36px; border-radius: ${V.radius}; }
  .sec-tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 2px; color: ${O.accent}; border: ${V.tagBorder} solid ${O.accent}; padding: 4px 10px; margin-bottom: 20px; }
  .sec-h2 { font-family: ${V.serifFont}; font-size: clamp(24px, 3.5vw, 36px); font-weight: 500; margin-bottom: 12px; color: ${O.primary}; }
  .sec-sub { color: #6B5F49; font-size: 17px; margin-bottom: 20px; }
  .sec-content { font-size: 16px; color: #2A241B; max-width: 760px; margin-bottom: 24px; }
  .sec-items { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 24px; }
  .sec-item { background: #FFFFFF; padding: 20px 22px; border-left: 3px solid ${O.accent}; border-radius: ${V.radius}; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
  .sec.hero .sec-item { background: rgba(255,255,255,0.08); color: #F5F0E6; }
  .sec-item h4 { font-size: 16px; font-weight: 500; margin-bottom: 6px; }
  .sec.hero .sec-item h4 { color: #FFFFFF; }
  .sec-item p { font-size: 14px; color: #6B5F49; }
  .sec.hero .sec-item p { color: #E8DCC0; }
  .sec-item-value { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: ${O.primary}; margin-top: 6px; }
  .sec.hero .sec-item-value { color: ${O.accent}; }
  .sec-cta { display: inline-block; margin-top: 24px; padding: 14px 32px; background: ${O.primary}; color: #FFFFFF; text-decoration: none; font-size: 15px; letter-spacing: 1px; border-radius: ${V.radius}; }
  .sec-cta:hover { opacity: 0.85; }
  footer { padding: 40px 24px; background: #1F1B16; color: #A39A86; text-align: center; font-size: 12px; }
  footer a { color: ${O.accent}; text-decoration: none; }
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
`,w=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Noto+Sans+TC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&family=Cormorant+Garamond:wght@400;500;700&family=Archivo+Black&family=Oswald:wght@400;500;700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">`,E=A?["home","about","services","portfolio","contact"]:["home"],M=((re=f.brand)==null?void 0:re.navMenu)||[],W=te=>{const de=A?[{label:"首頁",file:"index.html",page:"home"},{label:"關於",file:"about.html",page:"about"},{label:"服務",file:"services.html",page:"services"},{label:"作品",file:"portfolio.html",page:"portfolio"},{label:"聯絡",file:"contact.html",page:"contact"}]:M.length?M.map(ue=>({label:ue.label,file:`#${ue.anchor}`,page:ue.anchor})):f.sections.filter(ue=>ue.key!=="hero").slice(0,6).map(ue=>{var je;return{label:((je=ue.heading)==null?void 0:je.slice(0,4))||ue.key,file:`#${ue.key}`,page:ue.key}});return`<nav class="topnav">
  <div class="topnav-inner">
    <a href="${A?"index.html":"#"}" class="brand">${c}</a>
    <ul class="nav-links">
      ${de.map(ue=>`<li><a href="${J(ue.file)}" class="${ue.page===te?"active":""}">${J(ue.label)}</a></li>`).join("")}
    </ul>
    <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
  </div>
</nav>`},B=`<script>
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
<\/script>`,R={};E.forEach(te=>R[te]=[]),f.sections.forEach(te=>{if(A){const de=te.page||"home";R[de]||(R[de]=[]),R[de].push(te)}else R.home.push(te)}),A&&(R.home.length===0||R.home[0].key!=="hero")&&R.home.unshift({key:"hero",heading:((ie=f.brand)==null?void 0:ie.tagline)||c,subheading:((oe=f.brand)==null?void 0:oe.subtitle)||"",content:"",cta:"了解服務"}),A&&["about","services","portfolio","contact"].forEach(te=>{if(R[te].length>0&&R[te][0].key!=="hero"){const de=R[te][0];R[te].unshift({key:"hero",heading:de.heading||{about:"關於我們",services:"服務項目",portfolio:"作品集",contact:"聯絡我們"}[te],subheading:"",content:""})}});const X={},H={home:"首頁",about:"關於我們",services:"服務項目",portfolio:"作品集",contact:"聯絡我們"};return E.forEach(te=>{var he;if(R[te].length===0)return;const de=te==="home"?"index.html":`${te}.html`,ue=H[te],je=R[te].map((et,ht)=>N(et,ht)).join(`
`);X[de]=`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ue} — ${c}</title>
<meta name="description" content="${J(((he=f.meta)==null?void 0:he.seoDescription)||"")}">
${w}
<style>${F}</style>
</head>
<body>
${W(te)}
${je}
<footer>
  &copy; ${new Date().getFullYear()} ${c} · Designed by <a href="#">NOYA WEB DESIGN</a> · Style: ${V.label}
</footer>
${B}
</body>
</html>`}),X},fe=async()=>{const O=be();if(Object.keys(O).length===0)return;const V=new wf;Object.entries(O).forEach(([F,w])=>{V.file(F,w)});const J=p.companyName.replace(/[^\w\u4e00-\u9fa5]/g,"_").slice(0,30);V.file("README.txt",`${p.companyName} 網站檔案
============================
產業：${i.name}
頁面：${Object.keys(O).join("、")}
產生時間：${new Date().toLocaleString("zh-TW")}

部署方式：
1. 解壓縮全部檔案到同一資料夾
2. 上傳所有 HTML 檔到主機（FTP / cPanel / Netlify Drop）
3. index.html 會作為首頁
4. 五個頁面互相連結，無須伺服器即可運作

NOYA WEB DESIGN`);const c=await V.generateAsync({type:"blob"}),A=URL.createObjectURL(c),N=document.createElement("a");N.href=A,N.download=`${J}_multipage.zip`,N.click(),URL.revokeObjectURL(A)},ge=()=>{if(!f)return"";const O=new Date().toISOString(),V=R=>String(R||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),J=R=>`<![CDATA[${String(R||"").replace(/]]>/g,"]]]]><![CDATA[>")}]]>`,c=p.pages==="multi",A=c?["home","about","services","portfolio","contact"]:["home"],N={home:p.companyName+" — 首頁",about:"關於我們",services:"服務項目",portfolio:"作品集",contact:"聯絡我們"},F={home:"home",about:"about",services:"services",portfolio:"portfolio",contact:"contact"},w={};A.forEach(R=>w[R]=[]),f.sections.forEach(R=>{const X=c&&R.page||"home";w[X]||(w[X]=[]),w[X].push(R)});const E=D(),M=R=>R.map(X=>ee(X,E)).join(`

`);let W=100;const B=A.filter(R=>w[R].length>0).map(R=>{var oe,te;W++;const X=R==="home",H=X?p.companyName:N[R],re=F[R],ie=M(w[R]);return`<item>
<title>${V(H)}</title>
<pubDate>${O}</pubDate>
<wp:post_id>${W}</wp:post_id>
<wp:post_date><![CDATA[${O}]]></wp:post_date>
<wp:post_name><![CDATA[${re}]]></wp:post_name>
<wp:post_type><![CDATA[page]]></wp:post_type>
<wp:status><![CDATA[publish]]></wp:status>
<wp:menu_order>${A.indexOf(R)}</wp:menu_order>
<content:encoded>${J(ie)}</content:encoded>
<wp:postmeta>
<wp:meta_key>site-post-title</wp:meta_key>
<wp:meta_value><![CDATA[disabled]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>ast-title-bar-display</wp:meta_key>
<wp:meta_value><![CDATA[disabled]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>ast-featured-img</wp:meta_key>
<wp:meta_value><![CDATA[disabled]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>site-sidebar-layout</wp:meta_key>
<wp:meta_value><![CDATA[no-sidebar]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>site-content-layout</wp:meta_key>
<wp:meta_value><![CDATA[page-builder]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>_yoast_wpseo_title</wp:meta_key>
<wp:meta_value>${J(X?((oe=f.meta)==null?void 0:oe.seoTitle)||H:H+" — "+p.companyName)}</wp:meta_value>
</wp:postmeta>
<wp:postmeta>
<wp:meta_key>_yoast_wpseo_metadesc</wp:meta_key>
<wp:meta_value>${J(((te=f.meta)==null?void 0:te.seoDescription)||"")}</wp:meta_value>
</wp:postmeta>
</item>`}).join(`
`);return`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wp="http://wordpress.org/export/1.2/">
<channel>
<title>${V(p.companyName)}</title>
<wp:wxr_version>1.2</wp:wxr_version>
<wp:base_site_url>https://example.com</wp:base_site_url>
<wp:base_blog_url>https://example.com</wp:base_blog_url>
${B}
</channel>
</rss>`},Ne=(O,V,J="text/plain")=>{const c=new Blob([O],{type:J}),A=URL.createObjectURL(c),N=document.createElement("a");N.href=A,N.download=V,N.click(),URL.revokeObjectURL(A)};return x.jsxs("div",{className:"app",children:[x.jsx("style",{children:zf}),x.jsxs("div",{className:"topbar",children:[x.jsxs("div",{className:"logo logo-clickable",onClick:()=>{e==="industry_picker"||!window.confirm("回到產業選擇頁？目前的問卷與生成內容會被清掉。")||(o(null),h(null),m([]),d(""),t("industry_picker"))},title:"點選回到產業選擇頁",children:[x.jsx("span",{className:"logo-mark",children:"▮"})," NOYA WEB DESIGN",x.jsx("span",{className:"logo-tag",children:"B2B SITE GENERATOR · 90 INDUSTRIES"})]}),x.jsx("div",{className:"topbar-meta",children:"v2.2 · 風格 × 色系庫"})]}),x.jsxs("div",{className:"layout",children:[x.jsxs("aside",{className:"sidebar",children:[x.jsxs("div",{className:"sidebar-section",children:[x.jsx("div",{className:"sidebar-label",children:"◆ CLAUDE API KEY"}),x.jsx("input",{type:"password",className:"api-input",placeholder:"sk-ant-...",value:n,onChange:O=>u(O.target.value)}),x.jsxs("div",{className:"api-hint",children:["存本機 · 不送雲端",x.jsx("br",{}),"首次：到"," ",x.jsx("a",{href:"https://console.anthropic.com",target:"_blank",rel:"noreferrer",children:"console.anthropic.com"})," ","申請 + Billing 儲值 $5 USD 起。"]})]}),x.jsxs("div",{className:"sidebar-section",children:[x.jsx("div",{className:"sidebar-label",children:"◆ 品質層級"}),Ln.map(O=>x.jsxs("div",{className:`tier-card ${p.tier===O.id?"active":""} ${O.recommended?"recommended":""}`,onClick:()=>v(V=>({...V,tier:O.id})),children:[x.jsxs("div",{className:"tier-label",children:[O.label,O.recommended&&x.jsx("span",{className:"rec-star",children:" ★"})]}),x.jsx("div",{className:"tier-sub",children:O.sub}),x.jsxs("div",{className:"tier-meta",children:[O.price," · ",O.time," · 品質 ",O.quality]}),x.jsx("div",{className:"tier-meta tier-note",children:O.note})]},O.id))]}),x.jsxs("div",{className:"sidebar-section",children:[x.jsx("div",{className:"sidebar-label",children:"◆ 網站語言"}),x.jsx("div",{className:"seg",children:[{v:"zh-TW",l:"繁體中文"},{v:"en",l:"English"}].map(O=>x.jsx("button",{className:`seg-btn ${p.language===O.v?"active":""}`,onClick:()=>v(V=>({...V,language:O.v})),children:O.l},O.v))})]}),x.jsxs("div",{className:"sidebar-section",children:[x.jsx("div",{className:"sidebar-label",children:"◆ 頁面結構"}),x.jsx("div",{className:"seg",children:[{v:"single",l:"單頁式"},{v:"multi",l:"多頁式"}].map(O=>x.jsx("button",{className:`seg-btn ${p.pages===O.v?"active":""}`,onClick:()=>v(V=>({...V,pages:O.v})),children:O.l},O.v))}),x.jsx("div",{className:"api-hint",style:{marginTop:10},children:"單頁＝所有 sections 串成 landing；多頁＝首頁 + 4 內頁。"})]}),i&&x.jsxs("div",{className:"sidebar-section",children:[x.jsx("div",{className:"sidebar-label",children:"◆ 當前產業"}),x.jsxs("div",{className:"current-industry",children:[x.jsx("div",{className:"ci-icon",style:{background:Ft[i.cat].color},children:Ft[i.cat].icon}),x.jsxs("div",{children:[x.jsx("div",{className:"ci-name",children:i.name}),x.jsx("div",{className:"ci-cat",children:Ft[i.cat].label})]})]}),x.jsxs("div",{className:"ci-keyq",children:[x.jsx("div",{className:"ci-keyq-label",children:"問診重點題"}),x.jsx("div",{className:"ci-keyq-list",children:i.keyQ.join(" · ")})]}),x.jsx("button",{className:"ci-change",onClick:()=>{o(null),t("industry_picker")},children:"← 換產業"})]})]}),x.jsxs("main",{className:"main",children:[e==="industry_picker"&&x.jsx(Ff,{industries:_,totalCount:Oo.length,searchQuery:s,setSearchQuery:a,activeCategory:l,setActiveCategory:g,onSelect:O=>{o(O),t("questionnaire")},history:$(),onRestore:P,onDeleteHistory:q}),e==="questionnaire"&&i&&x.jsx(Sf,{industry:i,answers:p,setAnswers:v,toggleSection:S,toggleTrustPoint:C,canProceed:j,onGenerate:Q,error:b,stylePresets:I,colorPalettes:z}),e==="generating"&&x.jsx(Cf,{log:k,answers:p,industry:i}),e==="preview"&&f&&x.jsx(Qf,{content:f,answers:p,setAnswers:v,industry:i,colors:D(),presetThemes:z,onBack:()=>t("questionnaire"),onExport:()=>t("export"),onRegenerate:Q,onRegenerateSection:Z,regeneratingSection:L}),e==="export"&&f&&x.jsx(Ef,{answers:p,industry:i,colors:D(),elementor:T(),wxr:le(),wxrMulti:ge(),gutenberg:ne(),standaloneHTML:ye(),onDownloadMultiZip:fe,onBack:()=>t("preview"),onDownload:Ne})]})]})]})}function Ff({industries:e,totalCount:t,searchQuery:n,setSearchQuery:r,activeCategory:i,setActiveCategory:o,onSelect:s,history:a,onRestore:l,onDeleteHistory:g}){const[p,v]=Te.useState(!1);return x.jsxs(x.Fragment,{children:[x.jsxs("h1",{className:"page-title",children:["你的客戶是哪一",x.jsx("span",{className:"accent",children:"行"}),"？"]}),x.jsx("div",{className:"page-sub",children:"90 INDUSTRIES · 18 CATEGORIES · 內建問診策略"}),a&&a.length>0&&x.jsxs("div",{className:"history-strip",children:[x.jsxs("div",{className:"history-strip-head",children:[x.jsx("span",{className:"history-strip-label",children:"◷ 最近接過的案件（最多保留 10 筆）"}),x.jsx("button",{className:"history-toggle",onClick:()=>v(!p),children:p?"收起 ▲":`展開全部 (${a.length}) ▼`})]}),x.jsx("div",{className:"history-list",children:(p?a:a.slice(0,3)).map(f=>{var h;return x.jsxs("div",{className:"history-card",children:[x.jsxs("div",{className:"history-card-body",onClick:()=>l(f),children:[x.jsx("div",{className:"history-time",children:new Date(f.savedAt).toLocaleString("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}),x.jsx("div",{className:"history-company",children:((h=f.answers)==null?void 0:h.companyName)||"(未命名)"}),x.jsx("div",{className:"history-industry",children:f.industry.name}),x.jsx("div",{className:"history-restore",children:"↻ 載入這份"})]}),x.jsx("button",{className:"history-delete",onClick:k=>{var m;k.stopPropagation(),window.confirm(`刪除「${((m=f.answers)==null?void 0:m.companyName)||"(未命名)"}」的歷史紀錄？`)&&(g(f.id),window.location.reload())},title:"刪除",children:"×"})]},f.id)})})]}),x.jsxs("div",{className:"picker-toolbar",children:[x.jsx("input",{type:"text",className:"picker-search",placeholder:"🔍 搜尋產業：LOGO、CNC、咖啡、律師...",value:n,onChange:f=>r(f.target.value)}),x.jsxs("div",{className:"picker-count",children:[e.length," / ",t," 個產業"]})]}),x.jsxs("div",{className:"category-bar",children:[x.jsx("button",{className:`cat-btn ${i==="all"?"active":""}`,onClick:()=>o("all"),children:"全部"}),Object.entries(Ft).map(([f,h])=>x.jsxs("button",{className:`cat-btn ${i===f?"active":""}`,onClick:()=>o(f),style:i===f?{background:h.color,color:"#F5F0E6",borderColor:h.color}:{},children:[x.jsx("span",{className:"cat-icon",children:h.icon})," ",h.label]},f))]}),x.jsxs("div",{className:"industry-grid",children:[e.map(f=>{const h=Ft[f.cat];return x.jsxs("div",{className:"industry-tile",onClick:()=>s(f),children:[x.jsxs("div",{className:"tile-head",children:[x.jsx("div",{className:"tile-icon",style:{background:h.color},children:h.icon}),x.jsx("div",{className:"tile-cat",children:h.label})]}),x.jsx("div",{className:"tile-name",children:f.name}),x.jsxs("div",{className:"tile-keyq",children:["問診 · ",f.keyQ.slice(0,4).join(" / "),f.keyQ.length>4?"...":""]}),x.jsx("div",{className:"tile-trust",children:f.trustPoints.slice(0,3).map(k=>x.jsx("span",{className:"tile-trust-chip",children:k},k))})]},f.id)}),e.length===0&&x.jsx("div",{className:"empty-state",children:"沒有符合的產業。試試其他關鍵字，或回到「全部」。"})]})]})}function Sf({industry:e,answers:t,setAnswers:n,toggleSection:r,toggleTrustPoint:i,canProceed:o,onGenerate:s,error:a,stylePresets:l,colorPalettes:g}){return x.jsxs(x.Fragment,{children:[x.jsxs("h1",{className:"page-title",children:["為「",x.jsx("span",{className:"accent",children:e.name}),"」量身打造"]}),x.jsxs("div",{className:"page-sub",children:[Ft[e.cat].label," · 內建 ",e.keyQ.length," 道問診重點題"]}),a&&x.jsxs("div",{className:"error-banner",children:[x.jsx("strong",{children:"生成失敗："})," ",a]}),x.jsxs("div",{className:"strategy-box",children:[x.jsx("div",{className:"strategy-label",children:"◆ 此產業的網站策略"}),x.jsx("div",{className:"strategy-text",children:e.strategy})]}),x.jsxs("div",{className:"form-section",children:[x.jsxs("div",{className:"form-section-head",children:[x.jsx("span",{className:"form-section-num",children:"01"}),x.jsx("h2",{className:"form-section-title",children:"公司基本資料"})]}),x.jsxs("div",{className:"field",children:[x.jsxs("label",{className:"field-label",children:["公司／品牌名稱",x.jsx("span",{className:"req",children:"*"})]}),x.jsx("input",{type:"text",placeholder:"例：永盛精密機械股份有限公司",value:t.companyName,onChange:p=>n(v=>({...v,companyName:p.target.value}))})]}),x.jsxs("div",{className:"field",children:[x.jsx("label",{className:"field-label",children:"經營年資"}),x.jsx("input",{type:"text",placeholder:"例：32",value:t.yearsInBusiness,onChange:p=>n(v=>({...v,yearsInBusiness:p.target.value}))})]}),x.jsxs("div",{className:"field",children:[x.jsxs("label",{className:"field-label",children:["主要產品 / 服務",x.jsx("span",{className:"req",children:"*"})]}),x.jsx("textarea",{placeholder:"一句話講清楚你賣什麼。",value:t.productOrService,onChange:p=>n(v=>({...v,productOrService:p.target.value}))})]}),x.jsxs("div",{className:"field",children:[x.jsx("label",{className:"field-label",children:"目標客戶"}),x.jsx("input",{type:"text",placeholder:"你的理想客戶長什麼樣子？",value:t.targetCustomer,onChange:p=>n(v=>({...v,targetCustomer:p.target.value}))})]})]}),x.jsxs("div",{className:"form-section",children:[x.jsxs("div",{className:"form-section-head",children:[x.jsx("span",{className:"form-section-num",children:"02"}),x.jsx("h2",{className:"form-section-title",children:"你的信任亮點是？"})]}),x.jsxs("p",{className:"form-section-hint",children:["已預載「",e.name,"」常見亮點。勾你「真的有」的就好，不要為了好看亂勾。"]}),x.jsx("div",{className:"chip-group",children:e.trustPoints.map(p=>x.jsx("div",{className:`chip ${t.trustPoints.includes(p)?"active":""}`,onClick:()=>i(p),children:p},p))})]}),x.jsxs("div",{className:"form-section",children:[x.jsxs("div",{className:"form-section-head",children:[x.jsx("span",{className:"form-section-num",children:"03"}),x.jsx("h2",{className:"form-section-title",children:"需要哪些頁面區塊？"})]}),x.jsxs("p",{className:"form-section-hint",children:["已按產業預設 ",e.sections.length," 個 sections。Hero 和聯絡必選，其餘可調。當前 ",t.selectedSections.length," 個。"]}),x.jsx("div",{className:"section-grid",children:e.sections.map(p=>{const v=wn[p];if(!v)return null;const f=t.selectedSections.includes(p),h=v.required;return x.jsxs("div",{className:`section-card ${h?"required":f?"active":""}`,onClick:()=>r(p),children:[x.jsxs("div",{className:"section-name",children:[x.jsx("span",{className:"check",children:f||h?"■":"□"}),v.name]}),x.jsx("div",{className:"section-desc",children:v.desc})]},p)})})]}),x.jsxs("div",{className:"form-section",children:[x.jsxs("div",{className:"form-section-head",children:[x.jsx("span",{className:"form-section-num",children:"04"}),x.jsx("h2",{className:"form-section-title",children:"視覺風格"})]}),x.jsx("p",{className:"form-section-hint",children:"影響字型、留白、邊框、整體調性。「AI 推薦」會依產業自動選最合適的。"}),x.jsxs("div",{className:"picker-mode",children:[x.jsx("button",{className:`pm-btn ${t.styleMode==="auto"?"active":""}`,onClick:()=>n(p=>({...p,styleMode:"auto"})),children:"✨ AI 依產業推薦"}),x.jsx("button",{className:`pm-btn ${t.styleMode==="preset"?"active":""}`,onClick:()=>n(p=>({...p,styleMode:"preset"})),children:"🎨 我自己挑"})]}),t.styleMode==="preset"&&x.jsx("div",{className:"style-grid",children:Object.entries(l).map(([p,v])=>x.jsxs("button",{className:`style-card ${t.styleId===p?"active":""}`,onClick:()=>n(f=>({...f,styleId:p})),children:[x.jsx(Nf,{style:v}),x.jsxs("div",{className:"style-card-body",children:[x.jsxs("div",{className:"style-name",children:[v.emoji," ",v.label]}),x.jsx("div",{className:"style-desc",children:v.desc})]})]},p))})]}),x.jsxs("div",{className:"form-section",children:[x.jsxs("div",{className:"form-section-head",children:[x.jsx("span",{className:"form-section-num",children:"05"}),x.jsx("h2",{className:"form-section-title",children:"色系"})]}),x.jsx("p",{className:"form-section-hint",children:"12 組商務配色按調性分類，或「自己填」直接輸入色碼。預覽頁仍可隨時微調。"}),x.jsxs("div",{className:"picker-mode",children:[x.jsx("button",{className:`pm-btn ${t.colorMode==="auto"?"active":""}`,onClick:()=>n(p=>({...p,colorMode:"auto"})),children:"✨ AI 依產業推薦"}),x.jsx("button",{className:`pm-btn ${t.colorMode==="preset"?"active":""}`,onClick:()=>n(p=>({...p,colorMode:"preset"})),children:"🎨 從色系庫挑"}),x.jsx("button",{className:`pm-btn ${t.colorMode==="custom"?"active":""}`,onClick:()=>n(p=>({...p,colorMode:"custom"})),children:"🖌 自己填色碼"})]}),t.colorMode==="preset"&&x.jsx(x.Fragment,{children:["沉穩","溫暖","清新","典雅","自然"].map(p=>{const v=Object.entries(g).filter(([f,h])=>h.tone===p);return v.length===0?null:x.jsxs("div",{className:"palette-group",children:[x.jsx("div",{className:"palette-group-label",children:p}),x.jsx("div",{className:"palette-grid",children:v.map(([f,h])=>x.jsxs("button",{className:`palette-card ${t.presetTheme===f?"active":""}`,onClick:()=>n(k=>({...k,presetTheme:f})),children:[x.jsx("div",{className:"palette-preview",style:{background:h.heroBg},children:x.jsx("div",{className:"palette-accent",style:{background:h.accent}})}),x.jsx("div",{className:"palette-name",children:h.label})]},f))})]},p)})}),t.colorMode==="custom"&&x.jsxs("div",{className:"custom-color-row",children:[x.jsxs("div",{className:"ccr-field",children:[x.jsx("label",{children:"主色（Hero 背景 / 標題）"}),x.jsxs("div",{className:"ccr-input",children:[x.jsx("input",{type:"color",value:t.customPrimary,onChange:p=>n(v=>({...v,customPrimary:p.target.value}))}),x.jsx("input",{type:"text",placeholder:"#1F2937",value:t.customPrimary,onChange:p=>n(v=>({...v,customPrimary:p.target.value}))})]}),x.jsx("div",{className:"ccr-hint",children:"建議用深色（# 後面前兩碼不超過 5）。例如品牌主色：客戶 LOGO 的深色那色。"})]}),x.jsxs("div",{className:"ccr-field",children:[x.jsx("label",{children:"點綴色（CTA 按鈕、邊框、強調）"}),x.jsxs("div",{className:"ccr-input",children:[x.jsx("input",{type:"color",value:t.customAccent,onChange:p=>n(v=>({...v,customAccent:p.target.value}))}),x.jsx("input",{type:"text",placeholder:"#C9442F",value:t.customAccent,onChange:p=>n(v=>({...v,customAccent:p.target.value}))})]}),x.jsx("div",{className:"ccr-hint",children:"建議用飽和度高的暖色（橙、紅、金）。客戶 LOGO 的點綴那色。"})]}),x.jsxs("div",{className:"custom-preview",style:{background:`linear-gradient(135deg, ${t.customPrimary} 0%, ${t.customPrimary}DD 100%)`},children:[x.jsx("div",{className:"cp-label",children:"即時預覽"}),x.jsx("div",{className:"cp-cta",style:{background:t.customAccent},children:"立即諮詢"})]})]})]}),x.jsxs("div",{className:"form-section",children:[x.jsxs("div",{className:"form-section-head",children:[x.jsx("span",{className:"form-section-num",children:"06"}),x.jsxs("h2",{className:"form-section-title",children:["參考網站 / 特別需求 ",x.jsx("span",{style:{fontSize:12,color:"#6B5F49"},children:"(選填)"})]})]}),x.jsxs("div",{className:"field",children:[x.jsx("label",{className:"field-label",children:"想參考某個網站"}),x.jsx("input",{type:"url",placeholder:"https://...",value:t.referenceUrl,onChange:p=>n(v=>({...v,referenceUrl:p.target.value}))})]}),x.jsxs("div",{className:"field",children:[x.jsx("label",{className:"field-label",children:"其他特別需求"}),x.jsx("textarea",{placeholder:"例：客戶都是日本人，語氣要更謹慎。",value:t.customNotes,onChange:p=>n(v=>({...v,customNotes:p.target.value}))})]})]}),x.jsxs("div",{className:"footer-actions",children:[x.jsxs("div",{className:"summary",children:["產業 ",x.jsx("strong",{children:e.name})," · ",t.selectedSections.length," sections · ",x.jsx("strong",{children:Ln.find(p=>p.id===t.tier).label})," · 預估 ",x.jsx("strong",{children:Ln.find(p=>p.id===t.tier).price})]}),x.jsx("button",{className:"btn-primary",disabled:!o,onClick:s,children:"生成網站"})]})]})}function Cf({log:e,answers:t,industry:n}){return x.jsxs("div",{className:"generating",children:[x.jsx("div",{className:"gen-spinner"}),x.jsxs("h2",{className:"gen-title",children:["正在為 ",t.companyName," 打造網站"]}),x.jsxs("div",{className:"gen-sub",children:[Ln.find(r=>r.id===t.tier).label," · ",n==null?void 0:n.name," · ",t.selectedSections.length," sections"]}),x.jsx("div",{className:"gen-log",children:e.map((r,i)=>x.jsxs("div",{className:"gen-log-line",children:[x.jsx("span",{className:"gen-log-time",children:r.time}),x.jsxs("span",{children:["▸ ",r.msg]})]},i))})]})}function Qf({content:e,answers:t,setAnswers:n,industry:r,colors:i,presetThemes:o,onBack:s,onExport:a,onRegenerate:l,onRegenerateSection:g,regeneratingSection:p}){var d;const[v,f]=Te.useState("rendered"),[h,k]=Te.useState(null),[m,b]=Te.useState("");return x.jsxs(x.Fragment,{children:[x.jsxs("h1",{className:"page-title",children:["預覽 ",x.jsxs("span",{style:{color:"#6B5F49",fontSize:24},children:["· ",t.companyName]})]}),x.jsxs("div",{className:"page-sub",children:[e.sections.length," SECTIONS · ",(d=e.brand)==null?void 0:d.tagline]}),x.jsxs("div",{className:"color-panel",children:[x.jsxs("div",{className:"color-panel-head",children:[x.jsx("span",{className:"color-panel-label",children:"◆ 配色控制"}),x.jsx("span",{className:"color-panel-hint",children:"如果 AI 生成的顏色不滿意，可在此覆寫"})]}),x.jsxs("div",{className:"color-modes",children:[x.jsxs("button",{className:`color-mode ${t.colorMode==="auto"?"active":""}`,onClick:()=>n(u=>({...u,colorMode:"auto"})),children:[x.jsx("div",{className:"cm-title",children:"AI 自動"}),x.jsx("div",{className:"cm-sub",children:"用 AI 挑的色"})]}),x.jsxs("button",{className:`color-mode ${t.colorMode==="preset"?"active":""}`,onClick:()=>n(u=>({...u,colorMode:"preset"})),children:[x.jsx("div",{className:"cm-title",children:"主題預設"}),x.jsx("div",{className:"cm-sub",children:"5 種商務主題"})]}),x.jsxs("button",{className:`color-mode ${t.colorMode==="custom"?"active":""}`,onClick:()=>n(u=>({...u,colorMode:"custom"})),children:[x.jsx("div",{className:"cm-title",children:"完全手動"}),x.jsx("div",{className:"cm-sub",children:"自己選 hex"})]})]}),t.colorMode==="preset"&&x.jsx("div",{className:"theme-grid",children:Object.entries(o).map(([u,_])=>x.jsxs("button",{className:`theme-card ${t.presetTheme===u?"active":""}`,onClick:()=>n(S=>({...S,presetTheme:u})),children:[x.jsx("div",{className:"theme-preview",style:{background:_.heroBg},children:x.jsx("div",{className:"theme-accent",style:{background:_.accent}})}),x.jsx("div",{className:"theme-name",children:_.label}),x.jsxs("div",{className:"theme-hex",children:[_.primary," · ",_.accent]})]},u))}),t.colorMode==="custom"&&x.jsxs("div",{className:"custom-color-row",children:[x.jsxs("div",{className:"ccr-field",children:[x.jsx("label",{children:"主色（Hero 背景）"}),x.jsxs("div",{className:"ccr-input",children:[x.jsx("input",{type:"color",value:t.customPrimary,onChange:u=>n(_=>({..._,customPrimary:u.target.value}))}),x.jsx("input",{type:"text",value:t.customPrimary,onChange:u=>n(_=>({..._,customPrimary:u.target.value}))})]})]}),x.jsxs("div",{className:"ccr-field",children:[x.jsx("label",{children:"點綴色（CTA、邊框）"}),x.jsxs("div",{className:"ccr-input",children:[x.jsx("input",{type:"color",value:t.customAccent,onChange:u=>n(_=>({..._,customAccent:u.target.value}))}),x.jsx("input",{type:"text",value:t.customAccent,onChange:u=>n(_=>({..._,customAccent:u.target.value}))})]})]})]}),x.jsxs("div",{className:"color-preview-row",children:[x.jsx("span",{className:"cpr-label",children:"目前配色"}),x.jsx("span",{className:"cpr-swatch",style:{background:i.primary},title:i.primary}),x.jsx("span",{className:"cpr-hex",children:i.primary}),x.jsx("span",{className:"cpr-swatch",style:{background:i.accent},title:i.accent}),x.jsx("span",{className:"cpr-hex",children:i.accent})]})]}),x.jsxs("div",{className:"preview-tabs",children:[x.jsx("button",{className:`preview-tab ${v==="rendered"?"active":""}`,onClick:()=>f("rendered"),children:"視覺預覽"}),x.jsx("button",{className:`preview-tab ${v==="structure"?"active":""}`,onClick:()=>f("structure"),children:"結構與文案"})]}),v==="rendered"&&x.jsx("div",{className:"site-preview",children:e.sections.map((u,_)=>{var C;const S=p===u.key;return x.jsxs("div",{className:u.key==="hero"?"site-hero":"site-section",style:u.key==="hero"?{background:i.heroBg}:{},children:[x.jsxs("div",{className:"section-regen-bar",children:[x.jsx("button",{className:"section-regen-btn",disabled:S,onClick:()=>g(u.key),title:"完全重寫此區塊（不影響其他區塊）",children:S?"⌛ 重寫中...":"↻ 重寫這段"}),x.jsx("button",{className:"section-regen-btn-hint",disabled:S,onClick:()=>{k(h===u.key?null:u.key),b("")},title:"給特別方向後重寫",children:"💬 給方向"})]}),h===u.key&&x.jsxs("div",{className:"hint-box",children:[x.jsx("textarea",{placeholder:"給這段一個方向。例：強調我們是少數通過 IATF 16949 認證的台灣供應商；或：語氣要更謹慎，客戶是日本人...",value:m,onChange:j=>b(j.target.value),rows:3}),x.jsxs("div",{className:"hint-box-actions",children:[x.jsx("button",{className:"hint-btn-cancel",onClick:()=>k(null),children:"取消"}),x.jsx("button",{className:"hint-btn-go",disabled:!m.trim()||S,onClick:()=>{g(u.key,m.trim()),k(null)},children:"✓ 用這個方向重寫"})]})]}),x.jsx("span",{className:"site-section-tag",style:u.key!=="hero"?{color:i.accent,borderColor:i.accent}:{},children:u.key.toUpperCase()}),x.jsx("h2",{className:"site-heading",children:u.heading}),u.subheading&&x.jsx("div",{className:"site-subheading",children:u.subheading}),u.content&&x.jsx("div",{className:"site-content",children:u.content}),((C=u.items)==null?void 0:C.length)>0&&x.jsx("div",{className:"site-items",children:u.items.map((j,z)=>x.jsxs("div",{className:"site-item",style:{borderLeftColor:i.accent},children:[x.jsx("div",{className:"site-item-title",children:j.title}),j.desc&&x.jsx("div",{className:"site-item-desc",children:j.desc}),j.value&&x.jsx("div",{className:"site-item-value",children:j.value})]},z))}),u.cta&&x.jsx("a",{className:"site-cta",style:{background:i.accent},children:u.cta})]},`${_}-${u.key}`)})}),v==="structure"&&x.jsx("div",{className:"code-preview",children:JSON.stringify(e,null,2)}),x.jsxs("div",{className:"footer-actions",children:[x.jsx("button",{className:"btn-secondary",onClick:s,children:"← 修改問卷"}),x.jsxs("div",{style:{display:"flex",gap:12},children:[x.jsx("button",{className:"btn-secondary",onClick:l,children:"↻ 重新生成"}),x.jsx("button",{className:"btn-primary",onClick:a,children:"匯出到 WordPress"})]})]})]})}function Ef({answers:e,industry:t,colors:n,elementor:r,wxr:i,wxrMulti:o,gutenberg:s,standaloneHTML:a,onBack:l,onDownload:g,onDownloadMultiZip:p}){const v=e.companyName.replace(/[^\w\u4e00-\u9fa5]/g,"_").slice(0,30),f=e.pages==="multi",h=()=>{const k=new Blob([a],{type:"text/html"}),m=URL.createObjectURL(k);window.open(m,"_blank"),setTimeout(()=>URL.revokeObjectURL(m),6e4)};return x.jsxs(x.Fragment,{children:[x.jsxs("h1",{className:"page-title",children:["匯出 ",x.jsx("span",{className:"accent",children:"·"})," ",f?"多頁":"單頁"," × 多格式"]}),x.jsx("div",{className:"page-sub",children:f?"多頁式：5 個獨立 HTML 含導覽，或 WordPress 一次匯入 5 頁":"單頁式：含錨點導覽的 landing page"}),x.jsxs("div",{className:"export-group",children:[x.jsxs("div",{className:"export-group-head",children:[x.jsx("span",{className:"eg-num",children:"A"}),x.jsx("h3",{className:"eg-title",children:"給客戶看初稿 · HTML"}),x.jsx("span",{className:"eg-hint",children:"不需要主機、雙擊就能開"})]}),x.jsxs("div",{className:"export-grid two",children:[x.jsxs("div",{className:"export-card featured",children:[x.jsx("div",{className:"export-badge",children:"★ 推薦先用這個"}),x.jsx("h3",{className:"export-card-title",children:"單檔 HTML 預覽"}),x.jsx("p",{className:"export-card-desc",children:f?"單檔內含 5 頁，用 JS 切換。傳給客戶 Line、Email 都行。":"所有 sections 串成 landing page，雙擊就能開。"}),x.jsx("button",{className:"btn-preview",onClick:h,children:"👁 新分頁預覽"}),x.jsx("button",{onClick:()=>g(a,`${v}_preview.html`,"text/html"),children:"↓ 下載 .html"})]}),x.jsxs("div",{className:"export-card",children:[x.jsxs("h3",{className:"export-card-title",children:[f?"多檔 HTML 壓縮包":"單檔 HTML 壓縮包",f&&x.jsx("span",{className:"badge-new",children:"5 個檔"})]}),x.jsx("p",{className:"export-card-desc",children:f?"解壓後 5 個獨立 HTML 檔，互相連結。可直接上傳 FTP / Netlify Drop / Cloudflare Pages 變成真實網站。":"單檔 HTML 包成 zip 含 README 說明檔。"}),x.jsx("button",{onClick:p,children:"↓ 下載 .zip"})]})]})]}),x.jsxs("div",{className:"export-group",children:[x.jsxs("div",{className:"export-group-head",children:[x.jsx("span",{className:"eg-num",children:"B"}),x.jsx("h3",{className:"eg-title",children:"正式上 WordPress"}),x.jsx("span",{className:"eg-hint",children:"三種格式選一即可"})]}),x.jsxs("div",{className:"export-grid three",children:[x.jsxs("div",{className:"export-card",children:[x.jsxs("h3",{className:"export-card-title",children:["WordPress WXR",f&&x.jsx("span",{className:"badge-new",children:"含 5 頁"})]}),x.jsx("p",{className:"export-card-desc",children:f?"WP 後台 → 工具 → 匯入 → WordPress → 上傳。一次產生 5 個頁面 + SEO meta + 選單順序。":"WP 後台 → 工具 → 匯入 → WordPress → 上傳此檔。完整含 SEO meta。"}),x.jsx("button",{onClick:()=>g(f?o:i,`${v}_${f?"multipage":"single"}_wxr.xml`,"application/xml"),children:"↓ 下載 .xml"})]}),x.jsxs("div",{className:"export-card",children:[x.jsx("h3",{className:"export-card-title",children:"Elementor JSON"}),x.jsx("p",{className:"export-card-desc",children:f?"Elementor 範本格式（目前僅匯出首頁，其他頁建議用 WXR 一次處理）。":"匯入到 Elementor → 範本 → 已儲存範本 → 匯入。可逐區塊微調。"}),x.jsx("button",{onClick:()=>g(r,`${v}_elementor.json`,"application/json"),children:"↓ 下載 .json"})]}),x.jsxs("div",{className:"export-card",children:[x.jsx("h3",{className:"export-card-title",children:"Gutenberg 區塊"}),x.jsx("p",{className:"export-card-desc",children:f?"WP 原生區塊（目前僅首頁，其他頁建議用 WXR）。":"開新頁面 → 切到「代碼編輯器」→ 整段貼上。WP 原生區塊，不需外掛。"}),x.jsx("button",{onClick:()=>g(s,`${v}_gutenberg.html`,"text/html"),children:"↓ 下載 .html"})]})]})]}),x.jsxs("div",{className:"export-tip",children:[x.jsx("strong",{children:"建議流程："}),"先下載「單檔 HTML 預覽」傳給客戶確認方向 → 客戶滿意後，",f?"下載「WordPress WXR 多頁」一次建好 5 個頁面":"下載「Elementor JSON」或「WXR」上 WordPress","。配色想換在預覽頁的「配色控制面板」直接覆寫，下載的檔案會即時反映。"]}),x.jsxs("div",{className:"astra-tip",children:[x.jsx("div",{className:"astra-tip-head",children:x.jsx("strong",{children:"📘 Astra 主題使用者必看"})}),x.jsxs("div",{className:"astra-tip-body",children:[x.jsx("p",{children:"WXR 已預設套用 Astra 的「無側邊欄 + 全寬模板 + 隱藏頁面標題」設定。匯入後若版型仍有問題，請檢查以下三步："}),x.jsxs("ol",{children:[x.jsxs("li",{children:[x.jsx("strong",{children:"主題客製化器"}),"：",x.jsx("code",{children:"外觀 → 自訂 → 全域 → 容器"}),"，",x.jsx("strong",{children:"頁面版面配置"}),"選「",x.jsx("strong",{children:"全寬 / 內容置中（Full Width / Contained）"}),"」"]}),x.jsxs("li",{children:[x.jsx("strong",{children:"個別頁面檢查"}),"：編輯每個匯入的頁面，右側「Astra 設定」確認「",x.jsx("strong",{children:"標題"}),"」設為「停用」、「",x.jsx("strong",{children:"側邊欄"}),"」設為「無側邊欄」、「",x.jsx("strong",{children:"內容"}),"」設為「網頁建構器」"]}),x.jsxs("li",{children:[x.jsx("strong",{children:"選單"}),"：到 ",x.jsx("code",{children:"外觀 → 選單"})," 新建一個主選單，把 5 個頁面加進去（多頁式時）"]})]}),x.jsx("p",{className:"astra-tip-note",children:"⚠️ Astra 官方不建議在 Gutenberg 用「Full Width / Stretched」版面（那是給 page builder 用的）。我們用的是「Full Width / Contained」配 alignfull 區塊，這個組合在 Astra 下版型最穩定。"})]})]}),x.jsxs("div",{style:{marginTop:32},children:[x.jsxs("h3",{style:{fontFamily:"Noto Serif TC, serif",fontSize:18,marginBottom:12},children:[f?"WordPress 多頁 WXR":"Elementor JSON"," 預覽（截前 2000 字）"]}),x.jsxs("div",{className:"code-preview",children:[(f?o:r).slice(0,2e3),(f?o:r).length>2e3?`

... (截斷)`:""]})]}),x.jsxs("div",{className:"footer-actions",children:[x.jsx("button",{className:"btn-secondary",onClick:l,children:"← 回到預覽"}),x.jsx("button",{className:"btn-primary",onClick:()=>window.print(),children:"列印交付清單"})]})]})}function Nf({style:e}){const t=e.preview;if(!t)return null;const n=t.headingFont||"sans-serif";return x.jsxs("svg",{viewBox:"0 0 200 120",className:"style-thumb",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[x.jsx("rect",{x:"0",y:"0",width:"200",height:"50",fill:t.heroBg}),x.jsx("line",{x1:"0",y1:"10",x2:"200",y2:"10",stroke:t.isLight?"#00000010":"#FFFFFF20",strokeWidth:"0.5"}),x.jsx("rect",{x:"6",y:"4",width:"22",height:"3",fill:t.heroText,opacity:"0.7"}),x.jsx("rect",{x:"160",y:"4",width:"6",height:"3",fill:t.heroText,opacity:"0.4"}),x.jsx("rect",{x:"170",y:"4",width:"6",height:"3",fill:t.heroText,opacity:"0.4"}),x.jsx("rect",{x:"180",y:"4",width:"6",height:"3",fill:t.heroText,opacity:"0.4"}),x.jsx("rect",{x:"190",y:"4",width:"6",height:"3",fill:t.heroText,opacity:"0.4"}),x.jsx("text",{x:"100",y:"28",textAnchor:"middle",fill:t.heroText,fontFamily:n,fontSize:"9",fontWeight:"700",children:"YOUR BRAND"}),x.jsx("rect",{x:"60",y:"32",width:"80",height:"2",fill:t.heroText,opacity:"0.5"}),x.jsx("rect",{x:"70",y:"36",width:"60",height:"2",fill:t.heroText,opacity:"0.4"}),x.jsx("rect",{x:"82",y:"41",width:"36",height:"6",fill:t.accent,rx:e.radius==="0"?0:2}),x.jsx("rect",{x:"0",y:"50",width:"200",height:"70",fill:t.cardBg==="#FFFFFF"?"#FAFAFA":t.isLight?"#FFFFFF":"#0A0A0A"}),x.jsx("text",{x:"10",y:"64",fill:t.textColor,fontFamily:n,fontSize:"6",fontWeight:"600",children:"Section Title"}),x.jsx("rect",{x:"10",y:"67",width:"50",height:"1.5",fill:t.accent}),[0,1,2].map(r=>x.jsxs("g",{transform:`translate(${10+r*62}, 75)`,children:[x.jsx("rect",{width:"58",height:"34",fill:t.cardBg,stroke:t.isLight?"#00000015":"#FFFFFF15",strokeWidth:"0.5",rx:e.radius==="0"?0:parseInt(e.radius)}),e.radius==="0"&&x.jsx("rect",{x:"0",y:"0",width:"2",height:"34",fill:t.accent}),x.jsx("rect",{x:"6",y:"6",width:"30",height:"2.5",fill:t.textColor,opacity:"0.85"}),x.jsx("rect",{x:"6",y:"11",width:"46",height:"1.5",fill:t.mutedColor,opacity:"0.7"}),x.jsx("rect",{x:"6",y:"14",width:"38",height:"1.5",fill:t.mutedColor,opacity:"0.7"}),x.jsx("rect",{x:"6",y:"22",width:"18",height:"2",fill:t.accent})]},r))]})}const zf=`
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
.ccr-hint {
  margin-top: 6px;
  font-size: 11px;
  color: #6B5F49;
  line-height: 1.5;
}
.custom-preview {
  grid-column: 1 / -1;
  margin-top: 8px;
  padding: 28px 24px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 90px;
}
.cp-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  opacity: 0.7;
}
.cp-cta {
  padding: 10px 20px;
  color: #FFFFFF;
  font-size: 14px;
  letter-spacing: 1px;
}

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

/* Astra 提示框 */
.astra-tip {
  margin-top: 16px;
  padding: 18px 24px;
  background: #EFF6FF;
  border-left: 3px solid #2563EB;
  font-size: 13px;
  color: #1E3A8A;
  line-height: 1.7;
}
.astra-tip-head {
  font-size: 14px;
  margin-bottom: 10px;
  color: #1E3A8A;
}
.astra-tip-body p { margin-bottom: 10px; }
.astra-tip-body ol {
  margin-left: 20px;
  margin-bottom: 10px;
}
.astra-tip-body ol li {
  margin-bottom: 6px;
  list-style: decimal;
}
.astra-tip-body code {
  background: #DBEAFE;
  padding: 2px 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #1E40AF;
}
.astra-tip-note {
  margin-top: 10px;
  padding: 8px 12px;
  background: #FEF3C7;
  border-left: 2px solid #D97706;
  color: #78350F;
  font-size: 12px;
}

/* 匯出群組 */
.export-group {
  margin-bottom: 32px;
}
.export-group-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #C9442F44;
}
.eg-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #FFFFFF;
  background: #1F1B16;
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.eg-title {
  font-family: 'Noto Serif TC', serif;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.eg-hint {
  font-size: 12px;
  color: #6B5F49;
  margin-left: auto;
}
.export-grid.two {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
}
.export-grid.three {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}
.badge-new {
  display: inline-block;
  margin-left: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1px;
  background: #2C4A3E;
  color: #FFFFFF;
  padding: 2px 7px;
  vertical-align: 2px;
}

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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}
.style-card {
  padding: 0;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all .15s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.style-card:hover {
  border-color: #2C4A3E;
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 #2C4A3E22;
}
.style-card.active {
  border: 2px solid #C9442F;
}
.style-thumb {
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 1px solid #E5DDC8;
}
.style-card-body {
  padding: 10px 12px 12px;
}
.style-name {
  font-family: 'Noto Serif TC', serif;
  font-size: 14px;
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

/* ============================================================
   歷史紀錄區
   ============================================================ */
.history-strip {
  background: #1F1B16;
  color: #F5F0E6;
  padding: 18px 22px;
  margin-bottom: 28px;
  border-left: 4px solid #C9442F;
}
.history-strip-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.history-strip-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  color: #C9442F;
}
.history-toggle {
  background: transparent;
  color: #C9BFA8;
  border: 1px solid #6B5F49;
  padding: 4px 12px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  letter-spacing: 1px;
}
.history-toggle:hover {
  color: #FFFFFF;
  border-color: #C9442F;
}
.history-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
}
.history-card {
  background: #2A241B;
  border: 1px solid #3D3528;
  padding: 0;
  position: relative;
  transition: all .15s;
}
.history-card:hover {
  border-color: #C9442F;
  transform: translateY(-2px);
}
.history-card-body {
  padding: 12px 14px;
  cursor: pointer;
}
.history-time {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: #6B5F49;
  letter-spacing: 1px;
  margin-bottom: 6px;
}
.history-company {
  font-family: 'Noto Serif TC', serif;
  font-size: 14px;
  color: #F5F0E6;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.history-industry {
  font-size: 11px;
  color: #A39A86;
  margin-bottom: 8px;
}
.history-restore {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #C9442F;
  letter-spacing: 1px;
}
.history-delete {
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  border: none;
  color: #6B5F49;
  font-size: 16px;
  cursor: pointer;
  padding: 2px 6px;
  line-height: 1;
}
.history-delete:hover { color: #C9442F; }

/* ============================================================
   單 section 重生 UI
   ============================================================ */
.section-regen-bar {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 6px;
  opacity: 0;
  transition: opacity .2s;
  z-index: 10;
}
.site-section, .site-hero {
  position: relative;
}
.site-section:hover .section-regen-bar,
.site-hero:hover .section-regen-bar {
  opacity: 1;
}
.section-regen-btn,
.section-regen-btn-hint {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #C9442F;
  color: #C9442F;
  padding: 6px 12px;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: 0.5px;
  backdrop-filter: blur(4px);
  transition: all .15s;
}
.section-regen-btn:hover,
.section-regen-btn-hint:hover {
  background: #C9442F;
  color: #FFFFFF;
}
.section-regen-btn:disabled,
.section-regen-btn-hint:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.96);
  color: #6B5F49;
  border-color: #6B5F49;
}
.hint-box {
  position: relative;
  z-index: 5;
  background: #FFF8E7;
  border: 2px solid #D97706;
  padding: 14px;
  margin-bottom: 16px;
}
.hint-box textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 13px;
  resize: vertical;
  outline: none;
  min-height: 60px;
}
.hint-box textarea:focus { border-color: #D97706; }
.hint-box-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;
}
.hint-btn-cancel,
.hint-btn-go {
  padding: 6px 14px;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #C9BFA8;
  background: #FFFFFF;
  color: #1F1B16;
}
.hint-btn-go {
  background: #D97706;
  color: #FFFFFF;
  border-color: #D97706;
}
.hint-btn-go:hover:not(:disabled) { background: #B8650A; }
.hint-btn-go:disabled { opacity: 0.4; cursor: not-allowed; }
`;Do.createRoot(document.getElementById("root")).render(x.jsx(bf,{}));
