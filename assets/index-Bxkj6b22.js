var y0=Object.defineProperty;var _0=(t,e,n)=>e in t?y0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var re=(t,e,n)=>_0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function v0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oy={exports:{}},$l={},My={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),w0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),T0=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),k0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),R0=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),$p=Symbol.iterator;function N0(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var by={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ly=Object.assign,Fy={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||by}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jy(){}jy.prototype=Zs.prototype;function ed(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||by}var td=ed.prototype=new jy;td.constructor=ed;Ly(td,Zs.prototype);td.isPureReactComponent=!0;var Hp=Array.isArray,Uy=Object.prototype.hasOwnProperty,nd={current:null},zy={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Uy.call(e,r)&&!zy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Oo,type:t,key:i,ref:o,props:s,_owner:nd.current}}function x0(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function D0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wp=/\/+/g;function Qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D0(""+t.key):e.toString(36)}function Pa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case w0:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Qu(o,0):r,Hp(s)?(n="",t!=null&&(n=t.replace(Wp,"$&/")+"/"),Pa(s,e,n,"",function(c){return c})):s!=null&&(rd(s)&&(s=x0(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Wp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Hp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Qu(i,l);o+=Pa(i,e,n,u,s)}else if(u=N0(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Qu(i,l++),o+=Pa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oa(t,e,n){if(t==null)return t;var r=[],s=0;return Pa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function V0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Na={transition:null},O0={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Na,ReactCurrentOwner:nd};function $y(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:oa,forEach:function(t,e,n){oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oa(t,function(){e++}),e},toArray:function(t){return oa(t,function(e){return e})||[]},only:function(t){if(!rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Zs;Z.Fragment=E0;Z.Profiler=I0;Z.PureComponent=ed;Z.StrictMode=T0;Z.Suspense=C0;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;Z.act=$y;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ly({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=nd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Uy.call(e,u)&&!zy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Oo,type:t.type,key:s,ref:i,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:A0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S0,_context:t},t.Consumer=t};Z.createElement=By;Z.createFactory=function(t){var e=By.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:k0,render:t}};Z.isValidElement=rd;Z.lazy=function(t){return{$$typeof:P0,_payload:{_status:-1,_result:t},_init:V0}};Z.memo=function(t,e){return{$$typeof:R0,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Na.transition;Na.transition={};try{t()}finally{Na.transition=e}};Z.unstable_act=$y;Z.useCallback=function(t,e){return ut.current.useCallback(t,e)};Z.useContext=function(t){return ut.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ut.current.useEffect(t,e)};Z.useId=function(){return ut.current.useId()};Z.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ut.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};Z.useRef=function(t){return ut.current.useRef(t)};Z.useState=function(t){return ut.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ut.current.useTransition()};Z.version="18.3.1";My.exports=Z;var ue=My.exports;const M0=v0(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=ue,L0=Symbol.for("react.element"),F0=Symbol.for("react.fragment"),j0=Object.prototype.hasOwnProperty,U0=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z0={key:!0,ref:!0,__self:!0,__source:!0};function Hy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)j0.call(e,r)&&!z0.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:L0,type:t,key:i,ref:o,props:s,_owner:U0.current}}$l.Fragment=F0;$l.jsx=Hy;$l.jsxs=Hy;Oy.exports=$l;var y=Oy.exports,bc={},Wy={exports:{}},It={},qy={exports:{}},Ky={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var ge=X-1>>>1,Se=z[ge];if(0<s(Se,G))z[ge]=G,z[X]=Se,X=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var ge=0,Se=z.length,Ir=Se>>>1;ge<Ir;){var At=2*(ge+1)-1,Sr=z[At],Mt=At+1,Vn=z[Mt];if(0>s(Sr,X))Mt<Se&&0>s(Vn,Sr)?(z[ge]=Vn,z[Mt]=X,ge=Mt):(z[ge]=Sr,z[At]=X,ge=At);else if(Mt<Se&&0>s(Vn,X))z[ge]=Vn,z[Mt]=X,ge=Mt;else break e}}return G}function s(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,k=!1,x=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function V(z){if(D=!1,A(z),!x)if(n(u)!==null)x=!0,ci(F);else{var G=n(c);G!==null&&hi(V,G.startTime-z)}}function F(z,G){x=!1,D&&(D=!1,w(v),v=-1),k=!0;var X=g;try{for(A(G),p=n(u);p!==null&&(!(p.expirationTime>G)||z&&!C());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,g=p.priorityLevel;var Se=ge(p.expirationTime<=G);G=t.unstable_now(),typeof Se=="function"?p.callback=Se:p===n(u)&&r(u),A(G)}else r(u);p=n(u)}if(p!==null)var Ir=!0;else{var At=n(c);At!==null&&hi(V,At.startTime-G),Ir=!1}return Ir}finally{p=null,g=X,k=!1}}var U=!1,E=null,v=-1,T=5,S=-1;function C(){return!(t.unstable_now()-S<T)}function R(){if(E!==null){var z=t.unstable_now();S=z;var G=!0;try{G=E(!0,z)}finally{G?I():(U=!1,E=null)}}else U=!1}var I;if(typeof _=="function")I=function(){_(R)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,fn=Ue.port2;Ue.port1.onmessage=R,I=function(){fn.postMessage(null)}}else I=function(){b(R,0)};function ci(z){E=z,U||(U=!0,I())}function hi(z,G){v=b(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||k||(x=!0,ci(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var X=g;g=G;try{return z()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=g;g=z;try{return G()}finally{g=X}},t.unstable_scheduleCallback=function(z,G,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=X+Se,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:Se,sortIndex:-1},X>ge?(z.sortIndex=X,e(c,z),n(u)===null&&z===n(c)&&(D?(w(v),v=-1):D=!0,hi(V,X-ge))):(z.sortIndex=Se,e(u,z),x||k||(x=!0,ci(F))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var G=g;return function(){var X=g;g=G;try{return z.apply(this,arguments)}finally{g=X}}}})(Ky);qy.exports=Ky;var B0=qy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=ue,Tt=B0;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gy=new Set,oo={};function Zr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(oo[t]=e,t=0;t<e.length;t++)Gy.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=Object.prototype.hasOwnProperty,H0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qp={},Kp={};function W0(t){return Lc.call(Kp,t)?!0:Lc.call(qp,t)?!1:H0.test(t)?Kp[t]=!0:(qp[t]=!0,!1)}function q0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K0(t,e,n,r){if(e===null||typeof e>"u"||q0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sd,id);We[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sd,id);We[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sd,id);We[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function od(t,e,n,r){var s=We.hasOwnProperty(e)?We[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K0(e,n,s,r)&&(n=null),r||s===null?W0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Qy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Uc=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),Xy=Symbol.for("react.offscreen"),Gp=Symbol.iterator;function Ri(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Yu;function bi(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var Xu=!1;function Ju(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bi(t):""}function G0(t){switch(t.tag){case 5:return bi(t.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Fc:return"Profiler";case ad:return"StrictMode";case jc:return"Suspense";case Uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yy:return(t.displayName||"Context")+".Consumer";case Qy:return(t._context.displayName||"Context")+".Provider";case ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ud:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function Q0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y0(t){var e=Jy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=Y0(t))}function Zy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e_(t,e){e=e.checked,e!=null&&od(t,"checked",e,!1)}function $c(t,e){e_(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hc(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hc(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function Cs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Li(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function t_(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,r_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(t){X0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hi[e]=Hi[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hi.hasOwnProperty(t)&&Hi[t]?(""+e).trim():e+"px"}function i_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=s_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var J0=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(J0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yc=null,Rs=null,Ps=null;function Zp(t){if(t=Lo(t)){if(typeof Yc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Gl(e),Yc(t.stateNode,t.type,e))}}function o_(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function a_(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function l_(t,e){return t(e)}function u_(){}var Zu=!1;function c_(t,e,n){if(Zu)return t(e,n);Zu=!0;try{return l_(t,e,n)}finally{Zu=!1,(Rs!==null||Ps!==null)&&(u_(),a_())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Xc=!1;if(In)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Xc=!1}function Z0(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Wi=!1,Ja=null,Za=!1,Jc=null,eI={onError:function(t){Wi=!0,Ja=t}};function tI(t,e,n,r,s,i,o,l,u){Wi=!1,Ja=null,Z0.apply(eI,arguments)}function nI(t,e,n,r,s,i,o,l,u){if(tI.apply(this,arguments),Wi){if(Wi){var c=Ja;Wi=!1,Ja=null}else throw Error(L(198));Za||(Za=!0,Jc=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function em(t){if(es(t)!==t)throw Error(L(188))}function rI(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return em(s),t;if(i===r)return em(s),e;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function d_(t){return t=rI(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var p_=Tt.unstable_scheduleCallback,tm=Tt.unstable_cancelCallback,sI=Tt.unstable_shouldYield,iI=Tt.unstable_requestPaint,ke=Tt.unstable_now,oI=Tt.unstable_getCurrentPriorityLevel,hd=Tt.unstable_ImmediatePriority,m_=Tt.unstable_UserBlockingPriority,el=Tt.unstable_NormalPriority,aI=Tt.unstable_LowPriority,g_=Tt.unstable_IdlePriority,Hl=null,tn=null;function lI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:hI,uI=Math.log,cI=Math.LN2;function hI(t){return t>>>=0,t===0?32:31-(uI(t)/cI|0)|0}var ca=64,ha=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Fi(l):(i&=o,i!==0&&(r=Fi(i)))}else o=n&~s,o!==0?r=Fi(o):i!==0&&(r=Fi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),s=1<<n,r|=t[n],e&=~s;return r}function dI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-$t(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=dI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y_(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function pI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-$t(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function __(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v_,fd,w_,E_,T_,eh=!1,da=[],Zn=null,er=null,tr=null,uo=new Map,co=new Map,Hn=[],mI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nm(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Ni(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Lo(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function gI(t,e,n,r,s){switch(e){case"focusin":return Zn=Ni(Zn,t,e,n,r,s),!0;case"dragenter":return er=Ni(er,t,e,n,r,s),!0;case"mouseover":return tr=Ni(tr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return uo.set(i,Ni(uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,co.set(i,Ni(co.get(i)||null,t,e,n,r,s)),!0}return!1}function I_(t){var e=Vr(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=h_(n),e!==null){t.blockedOn=e,T_(t.priority,function(){w_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qc=r,n.target.dispatchEvent(r),Qc=null}else return e=Lo(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function rm(t,e,n){xa(t)&&n.delete(e)}function yI(){eh=!1,Zn!==null&&xa(Zn)&&(Zn=null),er!==null&&xa(er)&&(er=null),tr!==null&&xa(tr)&&(tr=null),uo.forEach(rm),co.forEach(rm)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,yI)))}function ho(t){function e(s){return xi(s,t)}if(0<da.length){xi(da[0],t);for(var n=1;n<da.length;n++){var r=da[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&xi(Zn,t),er!==null&&xi(er,t),tr!==null&&xi(tr,t),uo.forEach(e),co.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)I_(n),n.blockedOn===null&&Hn.shift()}var Ns=Dn.ReactCurrentBatchConfig,nl=!0;function _I(t,e,n,r){var s=ae,i=Ns.transition;Ns.transition=null;try{ae=1,pd(t,e,n,r)}finally{ae=s,Ns.transition=i}}function vI(t,e,n,r){var s=ae,i=Ns.transition;Ns.transition=null;try{ae=4,pd(t,e,n,r)}finally{ae=s,Ns.transition=i}}function pd(t,e,n,r){if(nl){var s=th(t,e,n,r);if(s===null)cc(t,e,r,rl,n),nm(t,r);else if(gI(s,t,e,n,r))r.stopPropagation();else if(nm(t,r),e&4&&-1<mI.indexOf(t)){for(;s!==null;){var i=Lo(s);if(i!==null&&v_(i),i=th(t,e,n,r),i===null&&cc(t,e,r,rl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else cc(t,e,r,null,n)}}var rl=null;function th(t,e,n,r){if(rl=null,t=cd(r),t=Vr(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=h_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function S_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oI()){case hd:return 1;case m_:return 4;case el:case aI:return 16;case g_:return 536870912;default:return 16}default:return 16}}var Yn=null,md=null,Da=null;function A_(){if(Da)return Da;var t,e=md,n=e.length,r,s="value"in Yn?Yn.value:Yn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Da=s.slice(t,1<r?1-r:void 0)}function Va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function sm(){return!1}function St(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fa:sm,this.isPropagationStopped=sm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),e}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gd=St(ei),bo=we({},ei,{view:0,detail:0}),wI=St(bo),tc,nc,Di,Wl=we({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(tc=t.screenX-Di.screenX,nc=t.screenY-Di.screenY):nc=tc=0,Di=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),im=St(Wl),EI=we({},Wl,{dataTransfer:0}),TI=St(EI),II=we({},bo,{relatedTarget:0}),rc=St(II),SI=we({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),AI=St(SI),kI=we({},ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CI=St(kI),RI=we({},ei,{data:0}),om=St(RI),PI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xI[t])?!!e[t]:!1}function yd(){return DI}var VI=we({},bo,{key:function(t){if(t.key){var e=PI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OI=St(VI),MI=we({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=St(MI),bI=we({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),LI=St(bI),FI=we({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),jI=St(FI),UI=we({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zI=St(UI),BI=[9,13,27,32],_d=In&&"CompositionEvent"in window,qi=null;In&&"documentMode"in document&&(qi=document.documentMode);var $I=In&&"TextEvent"in window&&!qi,k_=In&&(!_d||qi&&8<qi&&11>=qi),lm=" ",um=!1;function C_(t,e){switch(t){case"keyup":return BI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function HI(t,e){switch(t){case"compositionend":return R_(e);case"keypress":return e.which!==32?null:(um=!0,lm);case"textInput":return t=e.data,t===lm&&um?null:t;default:return null}}function WI(t,e){if(ys)return t==="compositionend"||!_d&&C_(t,e)?(t=A_(),Da=md=Yn=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k_&&e.locale!=="ko"?null:e.data;default:return null}}var qI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qI[t.type]:e==="textarea"}function P_(t,e,n,r){o_(r),e=sl(e,"onChange"),0<e.length&&(n=new gd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ki=null,fo=null;function KI(t){U_(t,0)}function ql(t){var e=ws(t);if(Zy(e))return t}function GI(t,e){if(t==="change")return e}var N_=!1;if(In){var sc;if(In){var ic="oninput"in document;if(!ic){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),ic=typeof hm.oninput=="function"}sc=ic}else sc=!1;N_=sc&&(!document.documentMode||9<document.documentMode)}function dm(){Ki&&(Ki.detachEvent("onpropertychange",x_),fo=Ki=null)}function x_(t){if(t.propertyName==="value"&&ql(fo)){var e=[];P_(e,fo,t,cd(t)),c_(KI,e)}}function QI(t,e,n){t==="focusin"?(dm(),Ki=e,fo=n,Ki.attachEvent("onpropertychange",x_)):t==="focusout"&&dm()}function YI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(fo)}function XI(t,e){if(t==="click")return ql(e)}function JI(t,e){if(t==="input"||t==="change")return ql(e)}function ZI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:ZI;function po(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Lc.call(e,s)||!qt(t[s],e[s]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pm(t,e){var n=fm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fm(n)}}function D_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eS(t){var e=V_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D_(n.ownerDocument.documentElement,n)){if(r!==null&&vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=pm(n,i);var o=pm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tS=In&&"documentMode"in document&&11>=document.documentMode,_s=null,nh=null,Gi=null,rh=!1;function mm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||_s==null||_s!==Xa(r)||(r=_s,"selectionStart"in r&&vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&po(Gi,r)||(Gi=r,r=sl(nh,"onSelect"),0<r.length&&(e=new gd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},oc={},O_={};In&&(O_=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Kl(t){if(oc[t])return oc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O_)return oc[t]=e[n];return t}var M_=Kl("animationend"),b_=Kl("animationiteration"),L_=Kl("animationstart"),F_=Kl("transitionend"),j_=new Map,gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){j_.set(t,e),Zr(e,[t])}for(var ac=0;ac<gm.length;ac++){var lc=gm[ac],nS=lc.toLowerCase(),rS=lc[0].toUpperCase()+lc.slice(1);wr(nS,"on"+rS)}wr(M_,"onAnimationEnd");wr(b_,"onAnimationIteration");wr(L_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(F_,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function ym(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nI(r,e,void 0,t),t.currentTarget=null}function U_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;ym(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;ym(s,l,c),i=u}}}if(Za)throw t=Jc,Za=!1,Jc=null,t}function fe(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var r=t+"__bubble";n.has(r)||(z_(e,t,2,!1),n.add(r))}function uc(t,e,n){var r=0;e&&(r|=4),z_(n,t,r,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[ma]){t[ma]=!0,Gy.forEach(function(n){n!=="selectionchange"&&(sS.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ma]||(e[ma]=!0,uc("selectionchange",!1,e))}}function z_(t,e,n,r){switch(S_(e)){case 1:var s=_I;break;case 4:s=vI;break;default:s=pd}n=s.bind(null,e,n,t),s=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function cc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}c_(function(){var c=i,f=cd(n),p=[];e:{var g=j_.get(t);if(g!==void 0){var k=gd,x=t;switch(t){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":k=OI;break;case"focusin":x="focus",k=rc;break;case"focusout":x="blur",k=rc;break;case"beforeblur":case"afterblur":k=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=TI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=LI;break;case M_:case b_:case L_:k=AI;break;case F_:k=jI;break;case"scroll":k=wI;break;case"wheel":k=zI;break;case"copy":case"cut":case"paste":k=CI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=am}var D=(e&4)!==0,b=!D&&t==="scroll",w=D?g!==null?g+"Capture":null:g;D=[];for(var _=c,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,w!==null&&(V=lo(_,w),V!=null&&D.push(go(_,V,A)))),b)break;_=_.return}0<D.length&&(g=new k(g,x,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",g&&n!==Qc&&(x=n.relatedTarget||n.fromElement)&&(Vr(x)||x[Sn]))break e;if((k||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=c,x=x?Vr(x):null,x!==null&&(b=es(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=c),k!==x)){if(D=im,V="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=am,V="onPointerLeave",w="onPointerEnter",_="pointer"),b=k==null?g:ws(k),A=x==null?g:ws(x),g=new D(V,_+"leave",k,n,f),g.target=b,g.relatedTarget=A,V=null,Vr(f)===c&&(D=new D(w,_+"enter",x,n,f),D.target=A,D.relatedTarget=b,V=D),b=V,k&&x)t:{for(D=k,w=x,_=0,A=D;A;A=cs(A))_++;for(A=0,V=w;V;V=cs(V))A++;for(;0<_-A;)D=cs(D),_--;for(;0<A-_;)w=cs(w),A--;for(;_--;){if(D===w||w!==null&&D===w.alternate)break t;D=cs(D),w=cs(w)}D=null}else D=null;k!==null&&_m(p,g,k,D,!1),x!==null&&b!==null&&_m(p,b,x,D,!0)}}e:{if(g=c?ws(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var F=GI;else if(cm(g))if(N_)F=JI;else{F=YI;var U=QI}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=XI);if(F&&(F=F(t,c))){P_(p,F,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Hc(g,"number",g.value)}switch(U=c?ws(c):window,t){case"focusin":(cm(U)||U.contentEditable==="true")&&(_s=U,nh=c,Gi=null);break;case"focusout":Gi=nh=_s=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,mm(p,n,f);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":mm(p,n,f)}var E;if(_d)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ys?C_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(k_&&n.locale!=="ko"&&(ys||v!=="onCompositionStart"?v==="onCompositionEnd"&&ys&&(E=A_()):(Yn=f,md="value"in Yn?Yn.value:Yn.textContent,ys=!0)),U=sl(c,v),0<U.length&&(v=new om(v,t,null,n,f),p.push({event:v,listeners:U}),E?v.data=E:(E=R_(n),E!==null&&(v.data=E)))),(E=$I?HI(t,n):WI(t,n))&&(c=sl(c,"onBeforeInput"),0<c.length&&(f=new om("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}U_(p,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=lo(t,n),i!=null&&r.unshift(go(t,i,s)),i=lo(t,e),i!=null&&r.push(go(t,i,s))),t=t.return}return r}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _m(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=lo(n,i),u!=null&&o.unshift(go(n,u,l))):s||(u=lo(n,i),u!=null&&o.push(go(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function vm(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(oS,"")}function ga(t,e,n){if(e=vm(e),vm(t)!==e&&n)throw Error(L(425))}function il(){}var sh=null,ih=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,aS=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(t){return wm.resolve(null).then(t).catch(uS)}:ah;function uS(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ho(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ti=Math.random().toString(36).slice(2),en="__reactFiber$"+ti,yo="__reactProps$"+ti,Sn="__reactContainer$"+ti,lh="__reactEvents$"+ti,cS="__reactListeners$"+ti,hS="__reactHandles$"+ti;function Vr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Em(t);t!==null;){if(n=t[en])return n;t=Em(t)}return e}t=n,n=t.parentNode}return null}function Lo(t){return t=t[en]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Gl(t){return t[yo]||null}var uh=[],Es=-1;function Er(t){return{current:t}}function me(t){0>Es||(t.current=uh[Es],uh[Es]=null,Es--)}function he(t,e){Es++,uh[Es]=t.current,t.current=e}var dr={},et=Er(dr),pt=Er(!1),$r=dr;function Us(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function mt(t){return t=t.childContextTypes,t!=null}function ol(){me(pt),me(et)}function Tm(t,e,n){if(et.current!==dr)throw Error(L(168));he(et,e),he(pt,n)}function B_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(L(108,Q0(t)||"Unknown",s));return we({},n,r)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,$r=et.current,he(et,t),he(pt,pt.current),!0}function Im(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=B_(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,me(pt),me(et),he(et,t)):me(pt),he(pt,n)}var mn=null,Ql=!1,dc=!1;function $_(t){mn===null?mn=[t]:mn.push(t)}function dS(t){Ql=!0,$_(t)}function Tr(){if(!dc&&mn!==null){dc=!0;var t=0,e=ae;try{var n=mn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,Ql=!1}catch(s){throw mn!==null&&(mn=mn.slice(t+1)),p_(hd,Tr),s}finally{ae=e,dc=!1}}return null}var Ts=[],Is=0,ll=null,ul=0,kt=[],Ct=0,Hr=null,gn=1,yn="";function Nr(t,e){Ts[Is++]=ul,Ts[Is++]=ll,ll=t,ul=e}function H_(t,e,n){kt[Ct++]=gn,kt[Ct++]=yn,kt[Ct++]=Hr,Hr=t;var r=gn;t=yn;var s=32-$t(r)-1;r&=~(1<<s),n+=1;var i=32-$t(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,gn=1<<32-$t(e)+s|n<<s|r,yn=i+t}else gn=1<<i|n<<s|r,yn=t}function wd(t){t.return!==null&&(Nr(t,1),H_(t,1,0))}function Ed(t){for(;t===ll;)ll=Ts[--Is],Ts[Is]=null,ul=Ts[--Is],Ts[Is]=null;for(;t===Hr;)Hr=kt[--Ct],kt[Ct]=null,yn=kt[--Ct],kt[Ct]=null,gn=kt[--Ct],kt[Ct]=null}var wt=null,vt=null,ye=!1,jt=null;function W_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(ye){var e=vt;if(e){var n=e;if(!Sm(t,e)){if(ch(t))throw Error(L(418));e=nr(n.nextSibling);var r=wt;e&&Sm(t,e)?W_(r,n):(t.flags=t.flags&-4097|2,ye=!1,wt=t)}}else{if(ch(t))throw Error(L(418));t.flags=t.flags&-4097|2,ye=!1,wt=t}}}function Am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function ya(t){if(t!==wt)return!1;if(!ye)return Am(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=vt)){if(ch(t))throw q_(),Error(L(418));for(;e;)W_(t,e),e=nr(e.nextSibling)}if(Am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?nr(t.stateNode.nextSibling):null;return!0}function q_(){for(var t=vt;t;)t=nr(t.nextSibling)}function zs(){vt=wt=null,ye=!1}function Td(t){jt===null?jt=[t]:jt.push(t)}var fS=Dn.ReactCurrentBatchConfig;function Vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function _a(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function km(t){var e=t._init;return e(t._payload)}function K_(t){function e(w,_){if(t){var A=w.deletions;A===null?(w.deletions=[_],w.flags|=16):A.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=or(w,_),w.index=0,w.sibling=null,w}function i(w,_,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<_?(w.flags|=2,_):A):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,A,V){return _===null||_.tag!==6?(_=vc(A,w.mode,V),_.return=w,_):(_=s(_,A),_.return=w,_)}function u(w,_,A,V){var F=A.type;return F===gs?f(w,_,A.props.children,V,A.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&km(F)===_.type)?(V=s(_,A.props),V.ref=Vi(w,_,A),V.return=w,V):(V=Ua(A.type,A.key,A.props,null,w.mode,V),V.ref=Vi(w,_,A),V.return=w,V)}function c(w,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=wc(A,w.mode,V),_.return=w,_):(_=s(_,A.children||[]),_.return=w,_)}function f(w,_,A,V,F){return _===null||_.tag!==7?(_=Ur(A,w.mode,V,F),_.return=w,_):(_=s(_,A),_.return=w,_)}function p(w,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=vc(""+_,w.mode,A),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case aa:return A=Ua(_.type,_.key,_.props,null,w.mode,A),A.ref=Vi(w,null,_),A.return=w,A;case ms:return _=wc(_,w.mode,A),_.return=w,_;case Bn:var V=_._init;return p(w,V(_._payload),A)}if(Li(_)||Ri(_))return _=Ur(_,w.mode,A,null),_.return=w,_;_a(w,_)}return null}function g(w,_,A,V){var F=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(w,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case aa:return A.key===F?u(w,_,A,V):null;case ms:return A.key===F?c(w,_,A,V):null;case Bn:return F=A._init,g(w,_,F(A._payload),V)}if(Li(A)||Ri(A))return F!==null?null:f(w,_,A,V,null);_a(w,A)}return null}function k(w,_,A,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return w=w.get(A)||null,l(_,w,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case aa:return w=w.get(V.key===null?A:V.key)||null,u(_,w,V,F);case ms:return w=w.get(V.key===null?A:V.key)||null,c(_,w,V,F);case Bn:var U=V._init;return k(w,_,A,U(V._payload),F)}if(Li(V)||Ri(V))return w=w.get(A)||null,f(_,w,V,F,null);_a(_,V)}return null}function x(w,_,A,V){for(var F=null,U=null,E=_,v=_=0,T=null;E!==null&&v<A.length;v++){E.index>v?(T=E,E=null):T=E.sibling;var S=g(w,E,A[v],V);if(S===null){E===null&&(E=T);break}t&&E&&S.alternate===null&&e(w,E),_=i(S,_,v),U===null?F=S:U.sibling=S,U=S,E=T}if(v===A.length)return n(w,E),ye&&Nr(w,v),F;if(E===null){for(;v<A.length;v++)E=p(w,A[v],V),E!==null&&(_=i(E,_,v),U===null?F=E:U.sibling=E,U=E);return ye&&Nr(w,v),F}for(E=r(w,E);v<A.length;v++)T=k(E,w,v,A[v],V),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?v:T.key),_=i(T,_,v),U===null?F=T:U.sibling=T,U=T);return t&&E.forEach(function(C){return e(w,C)}),ye&&Nr(w,v),F}function D(w,_,A,V){var F=Ri(A);if(typeof F!="function")throw Error(L(150));if(A=F.call(A),A==null)throw Error(L(151));for(var U=F=null,E=_,v=_=0,T=null,S=A.next();E!==null&&!S.done;v++,S=A.next()){E.index>v?(T=E,E=null):T=E.sibling;var C=g(w,E,S.value,V);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(w,E),_=i(C,_,v),U===null?F=C:U.sibling=C,U=C,E=T}if(S.done)return n(w,E),ye&&Nr(w,v),F;if(E===null){for(;!S.done;v++,S=A.next())S=p(w,S.value,V),S!==null&&(_=i(S,_,v),U===null?F=S:U.sibling=S,U=S);return ye&&Nr(w,v),F}for(E=r(w,E);!S.done;v++,S=A.next())S=k(E,w,v,S.value,V),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),_=i(S,_,v),U===null?F=S:U.sibling=S,U=S);return t&&E.forEach(function(R){return e(w,R)}),ye&&Nr(w,v),F}function b(w,_,A,V){if(typeof A=="object"&&A!==null&&A.type===gs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case aa:e:{for(var F=A.key,U=_;U!==null;){if(U.key===F){if(F=A.type,F===gs){if(U.tag===7){n(w,U.sibling),_=s(U,A.props.children),_.return=w,w=_;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&km(F)===U.type){n(w,U.sibling),_=s(U,A.props),_.ref=Vi(w,U,A),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}A.type===gs?(_=Ur(A.props.children,w.mode,V,A.key),_.return=w,w=_):(V=Ua(A.type,A.key,A.props,null,w.mode,V),V.ref=Vi(w,_,A),V.return=w,w=V)}return o(w);case ms:e:{for(U=A.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(w,_.sibling),_=s(_,A.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=wc(A,w.mode,V),_.return=w,w=_}return o(w);case Bn:return U=A._init,b(w,_,U(A._payload),V)}if(Li(A))return x(w,_,A,V);if(Ri(A))return D(w,_,A,V);_a(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,A),_.return=w,w=_):(n(w,_),_=vc(A,w.mode,V),_.return=w,w=_),o(w)):n(w,_)}return b}var Bs=K_(!0),G_=K_(!1),cl=Er(null),hl=null,Ss=null,Id=null;function Sd(){Id=Ss=hl=null}function Ad(t){var e=cl.current;me(cl),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){hl=t,Id=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(hl===null)throw Error(L(308));Ss=t,hl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Or=null;function kd(t){Or===null?Or=[t]:Or.push(t)}function Q_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,kd(e)):(n.next=s.next,s.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function Cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,An(t,n)}return s=r.interleaved,s===null?(e.next=e,kd(r)):(e.next=s.next,s.next=e),r.interleaved=e,An(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}function Cm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,r){var s=t.updateQueue;$n=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,k=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(g=e,k=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){p=x.call(k,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,g=typeof x=="function"?x.call(k,p,g):x,g==null)break e;p=we({},p,g);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else k={eventTime:k,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,u=p):f=f.next=k,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=p}}function Rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(L(191,s));s.call(r)}}}var Fo={},nn=Er(Fo),_o=Er(Fo),vo=Er(Fo);function Mr(t){if(t===Fo)throw Error(L(174));return t}function Rd(t,e){switch(he(vo,e),he(_o,t),he(nn,Fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}me(nn),he(nn,e)}function $s(){me(nn),me(_o),me(vo)}function X_(t){Mr(vo.current);var e=Mr(nn.current),n=qc(e,t.type);e!==n&&(he(_o,t),he(nn,n))}function Pd(t){_o.current===t&&(me(nn),me(_o))}var _e=Er(0);function fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Nd(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Ma=Dn.ReactCurrentDispatcher,pc=Dn.ReactCurrentBatchConfig,Wr=0,ve=null,xe=null,Fe=null,pl=!1,Qi=!1,wo=0,pS=0;function Ge(){throw Error(L(321))}function xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function Dd(t,e,n,r,s,i){if(Wr=i,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ma.current=t===null||t.memoizedState===null?_S:vS,t=n(r,s),Qi){i=0;do{if(Qi=!1,wo=0,25<=i)throw Error(L(301));i+=1,Fe=xe=null,e.updateQueue=null,Ma.current=wS,t=n(r,s)}while(Qi)}if(Ma.current=ml,e=xe!==null&&xe.next!==null,Wr=0,Fe=xe=ve=null,pl=!1,e)throw Error(L(300));return t}function Vd(){var t=wo!==0;return wo=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Ot(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Fe===null?ve.memoizedState:Fe.next;if(e!==null)Fe=e,xe=t;else{if(t===null)throw Error(L(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Eo(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=xe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Wr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,qr|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ve.lanes|=i,qr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);qt(i,e.memoizedState)||(ft=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function J_(){}function Z_(t,e){var n=ve,r=Ot(),s=e(),i=!qt(r.memoizedState,s);if(i&&(r.memoizedState=s,ft=!0),r=r.queue,Od(nv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,To(9,tv.bind(null,n,r,s,e),void 0,null),je===null)throw Error(L(349));Wr&30||ev(n,e,s)}return s}function ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tv(t,e,n,r){e.value=n,e.getSnapshot=r,rv(e)&&sv(t)}function nv(t,e,n){return n(function(){rv(e)&&sv(t)})}function rv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function sv(t){var e=An(t,1);e!==null&&Ht(e,t,1,-1)}function Pm(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=yS.bind(null,ve,t),[e.memoizedState,t]}function To(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iv(){return Ot().memoizedState}function ba(t,e,n,r){var s=Jt();ve.flags|=t,s.memoizedState=To(1|e,n,void 0,r===void 0?null:r)}function Yl(t,e,n,r){var s=Ot();r=r===void 0?null:r;var i=void 0;if(xe!==null){var o=xe.memoizedState;if(i=o.destroy,r!==null&&xd(r,o.deps)){s.memoizedState=To(e,n,i,r);return}}ve.flags|=t,s.memoizedState=To(1|e,n,i,r)}function Nm(t,e){return ba(8390656,8,t,e)}function Od(t,e){return Yl(2048,8,t,e)}function ov(t,e){return Yl(4,2,t,e)}function av(t,e){return Yl(4,4,t,e)}function lv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uv(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,lv.bind(null,e,t),n)}function Md(){}function cv(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hv(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dv(t,e,n){return Wr&21?(qt(n,e)||(n=y_(),ve.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function mS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=pc.transition;pc.transition={};try{t(!1),e()}finally{ae=n,pc.transition=r}}function fv(){return Ot().memoizedState}function gS(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pv(t))mv(e,n);else if(n=Q_(t,e,n,r),n!==null){var s=at();Ht(n,t,r,s),gv(n,e,r)}}function yS(t,e,n){var r=ir(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pv(t))mv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(s.next=s,kd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Q_(t,e,s,r),n!==null&&(s=at(),Ht(n,t,r,s),gv(n,e,r))}}function pv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function mv(t,e){Qi=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}var ml={readContext:Vt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},_S={readContext:Vt,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:Nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ba(4194308,4,lv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return ba(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:Pm,useDebugValue:Md,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Pm(!1),e=t[0];return t=mS.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,s=Jt();if(ye){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),je===null)throw Error(L(349));Wr&30||ev(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Nm(nv.bind(null,r,i,t),[t]),r.flags|=2048,To(9,tv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Jt(),e=je.identifierPrefix;if(ye){var n=yn,r=gn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vS={readContext:Vt,useCallback:cv,useContext:Vt,useEffect:Od,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:hv,useReducer:mc,useRef:iv,useState:function(){return mc(Eo)},useDebugValue:Md,useDeferredValue:function(t){var e=Ot();return dv(e,xe.memoizedState,t)},useTransition:function(){var t=mc(Eo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:Z_,useId:fv,unstable_isNewReconciler:!1},wS={readContext:Vt,useCallback:cv,useContext:Vt,useEffect:Od,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:hv,useReducer:gc,useRef:iv,useState:function(){return gc(Eo)},useDebugValue:Md,useDeferredValue:function(t){var e=Ot();return xe===null?e.memoizedState=t:dv(e,xe.memoizedState,t)},useTransition:function(){var t=gc(Eo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:Z_,useId:fv,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),s=ir(t),i=wn(r,s);i.payload=e,n!=null&&(i.callback=n),e=rr(t,i,s),e!==null&&(Ht(e,t,s,r),Oa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),s=ir(t),i=wn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=rr(t,i,s),e!==null&&(Ht(e,t,s,r),Oa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=ir(t),s=wn(n,r);s.tag=2,e!=null&&(s.callback=e),e=rr(t,s,r),e!==null&&(Ht(e,t,r,n),Oa(e,t,r))}};function xm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(s,i):!0}function yv(t,e,n){var r=!1,s=dr,i=e.contextType;return typeof i=="object"&&i!==null?i=Vt(i):(s=mt(e)?$r:et.current,r=e.contextTypes,i=(r=r!=null)?Us(t,s):dr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Dm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Cd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Vt(i):(i=mt(e)?$r:et.current,s.context=Us(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Xl.enqueueReplaceState(s,s.state,null),dl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",r=e;do n+=G0(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function _v(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yl||(yl=!0,Ah=r),mh(t,e)},n}function vv(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){mh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ES;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function Om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var TS=Dn.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?G_(e,null,n,r):Bs(e,t.child,n,r)}function bm(t,e,n,r,s){n=n.render;var i=e.ref;return xs(e,s),r=Dd(t,e,n,r,i,s),n=Vd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,kn(t,e,s)):(ye&&n&&wd(e),e.flags|=1,ot(t,e,r,s),e.child)}function Lm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!$d(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,wv(t,e,i,r,s)):(t=Ua(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return kn(t,e,s)}return e.flags|=1,t=or(i,r),t.ref=e.ref,t.return=e,e.child=t}function wv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(po(i,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,kn(t,e,s)}return gh(t,e,n,r,s)}function Ev(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ks,_t),_t|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(ks,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(ks,_t),_t|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,he(ks,_t),_t|=r;return ot(t,e,s,n),e.child}function Tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,r,s){var i=mt(n)?$r:et.current;return i=Us(e,i),xs(e,s),n=Dd(t,e,n,r,i,s),r=Vd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,kn(t,e,s)):(ye&&r&&wd(e),e.flags|=1,ot(t,e,n,s),e.child)}function Fm(t,e,n,r,s){if(mt(n)){var i=!0;al(e)}else i=!1;if(xs(e,s),e.stateNode===null)La(t,e),yv(e,n,r),ph(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=mt(n)?$r:et.current,c=Us(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Dm(e,o,r,c),$n=!1;var g=e.memoizedState;o.state=g,dl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||pt.current||$n?(typeof f=="function"&&(fh(e,n,f,r),u=e.memoizedState),(l=$n||xm(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Y_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Lt(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=mt(n)?$r:et.current,u=Us(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Dm(e,o,r,u),$n=!1,g=e.memoizedState,o.state=g,dl(e,r,o,s);var x=e.memoizedState;l!==p||g!==x||pt.current||$n?(typeof k=="function"&&(fh(e,n,k,r),x=e.memoizedState),(c=$n||xm(e,n,c,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return yh(t,e,n,r,i,s)}function yh(t,e,n,r,s,i){Tv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Im(e,n,!1),kn(t,e,i);r=e.stateNode,TS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,i),e.child=Bs(e,null,l,i)):ot(t,e,l,i),e.memoizedState=r.state,s&&Im(e,n,!0),e.child}function Iv(t){var e=t.stateNode;e.pendingContext?Tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tm(t,e.context,!1),Rd(t,e.containerInfo)}function jm(t,e,n,r,s){return zs(),Td(s),e.flags|=256,ot(t,e,n,r),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sv(t,e,n){var r=e.pendingProps,s=_e.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),he(_e,s&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=eu(o,r,0,null),t=Ur(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=vh(n),e.memoizedState=_h,t):bd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return IS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=or(l,i):(i=Ur(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=_h,r}return i=t.child,t=i.sibling,r=or(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bd(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function va(t,e,n,r){return r!==null&&Td(r),Bs(e,t.child,null,n),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=yc(Error(L(422))),va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=eu({mode:"visible",children:r.children},s,0,null),i=Ur(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=vh(o),e.memoizedState=_h,i);if(!(e.mode&1))return va(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=yc(i,r,void 0),va(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,An(t,s),Ht(r,t,s,-1))}return Bd(),r=yc(Error(L(421))),va(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=bS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,vt=nr(s.nextSibling),wt=e,ye=!0,jt=null,t!==null&&(kt[Ct++]=gn,kt[Ct++]=yn,kt[Ct++]=Hr,gn=t.id,yn=t.overflow,Hr=e),e=bd(e,r.children),e.flags|=4096,e)}function Um(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dh(t.return,e,n)}function _c(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Av(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ot(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,n,e);else if(t.tag===19)Um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&fl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),_c(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&fl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}_c(e,!0,n,null,i);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SS(t,e,n){switch(e.tag){case 3:Iv(e),zs();break;case 5:X_(e);break;case 1:mt(e.type)&&al(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;he(cl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Sv(t,e,n):(he(_e,_e.current&1),t=kn(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Av(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Ev(t,e,n)}return kn(t,e,n)}var kv,wh,Cv,Rv;kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};Cv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Mr(nn.current);var i=null;switch(n){case"input":s=Bc(t,s),r=Bc(t,r),i=[];break;case"select":s=we({},s,{value:void 0}),r=we({},r,{value:void 0}),i=[];break;case"textarea":s=Wc(t,s),r=Wc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}Kc(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Rv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Oi(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AS(t,e,n){var r=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return mt(e.type)&&ol(),Qe(e),null;case 3:return r=e.stateNode,$s(),me(pt),me(et),Nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Rh(jt),jt=null))),wh(t,e),Qe(e),null;case 5:Pd(e);var s=Mr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Qe(e),null}if(t=Mr(nn.current),ya(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[en]=e,r[yo]=i,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(s=0;s<ji.length;s++)fe(ji[s],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Qp(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":Xp(r,i),fe("invalid",r)}Kc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ga(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ga(r.textContent,l,t),s=["children",""+l]):oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":la(r),Yp(r,i,!0);break;case"textarea":la(r),Jp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=il)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[yo]=r,kv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),s=r;break;case"iframe":case"object":case"embed":fe("load",t),s=r;break;case"video":case"audio":for(s=0;s<ji.length;s++)fe(ji[s],t);s=r;break;case"source":fe("error",t),s=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),s=r;break;case"details":fe("toggle",t),s=r;break;case"input":Qp(t,r),s=Bc(t,r),fe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=we({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Xp(t,r),s=Wc(t,r),fe("invalid",t);break;default:s=r}Kc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?i_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&r_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ao(t,u):typeof u=="number"&&ao(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&fe("scroll",t):u!=null&&od(t,i,u,o))}switch(n){case"input":la(t),Yp(t,r,!1);break;case"textarea":la(t),Jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Cs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Cs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Mr(vo.current),Mr(nn.current),ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(i=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Qe(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&vt!==null&&e.mode&1&&!(e.flags&128))q_(),zs(),e.flags|=98560,i=!1;else if(i=ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[en]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),i=!1}else jt!==null&&(Rh(jt),jt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ve===0&&(Ve=3):Bd())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return $s(),wh(t,e),t===null&&mo(e.stateNode.containerInfo),Qe(e),null;case 10:return Ad(e.type._context),Qe(e),null;case 17:return mt(e.type)&&ol(),Qe(e),null;case 19:if(me(_e),i=e.memoizedState,i===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Oi(i,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fl(t),o!==null){for(e.flags|=128,Oi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}i.tail!==null&&ke()>Ws&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304)}else{if(!r)if(t=fl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ye)return Qe(e),null}else 2*ke()-i.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ke(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return zd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function kS(t,e){switch(Ed(e),e.tag){case 1:return mt(e.type)&&ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),me(pt),me(et),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pd(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return $s(),null;case 10:return Ad(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var wa=!1,Je=!1,CS=typeof WeakSet=="function"?WeakSet:Set,$=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Eh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var zm=!1;function RS(t,e){if(sh=nl,t=V_(),vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)g=p,p=k;for(;;){if(p===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},nl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,b=x.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?D:Lt(e.type,D),b);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(V){Ie(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=zm,zm=!1,x}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Eh(e,n,i)}s=s.next}while(s!==r)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[yo],delete e[lh],delete e[cS],delete e[hS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}var ze=null,Ft=!1;function Un(t,e,n){for(n=n.child;n!==null;)xv(t,e,n),n=n.sibling}function xv(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Je||As(n,e);case 6:var r=ze,s=Ft;ze=null,Un(t,e,n),ze=r,Ft=s,ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),ho(t)):hc(ze,n.stateNode));break;case 4:r=ze,s=Ft,ze=n.stateNode.containerInfo,Ft=!0,Un(t,e,n),ze=r,Ft=s;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Eh(n,e,o),s=s.next}while(s!==r)}Un(t,e,n);break;case 1:if(!Je&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Un(t,e,n),Je=r):Un(t,e,n);break;default:Un(t,e,n)}}function $m(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CS),e.forEach(function(r){var s=LS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ft=!1;break e;case 3:ze=l.stateNode.containerInfo,Ft=!0;break e;case 4:ze=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(ze===null)throw Error(L(160));xv(i,o,s),ze=null,Ft=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ie(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,t),e=e.sibling}function Dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Xt(t),r&4){try{Yi(3,t,t.return),Jl(3,t)}catch(D){Ie(t,t.return,D)}try{Yi(5,t,t.return)}catch(D){Ie(t,t.return,D)}}break;case 1:bt(e,t),Xt(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(bt(e,t),Xt(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var s=t.stateNode;try{ao(s,"")}catch(D){Ie(t,t.return,D)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&e_(s,i),Gc(l,o);var c=Gc(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?i_(s,p):f==="dangerouslySetInnerHTML"?r_(s,p):f==="children"?ao(s,p):od(s,f,p,c)}switch(l){case"input":$c(s,i);break;case"textarea":t_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Cs(s,!!i.multiple,k,!1):g!==!!i.multiple&&(i.defaultValue!=null?Cs(s,!!i.multiple,i.defaultValue,!0):Cs(s,!!i.multiple,i.multiple?[]:"",!1))}s[yo]=i}catch(D){Ie(t,t.return,D)}}break;case 6:if(bt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(L(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(D){Ie(t,t.return,D)}}break;case 3:if(bt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(D){Ie(t,t.return,D)}break;case 4:bt(e,t),Xt(t);break;case 13:bt(e,t),Xt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(jd=ke())),r&4&&$m(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(c=Je)||f,bt(e,t),Je=c):bt(e,t),Xt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,k=g.child,g.tag){case 0:case 11:case 14:case 15:Yi(4,g,g.return);break;case 1:As(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){Ie(r,n,D)}}break;case 5:As(g,g.return);break;case 22:if(g.memoizedState!==null){Wm(p);continue}}k!==null?(k.return=g,$=k):Wm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=s_("display",o))}catch(D){Ie(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(D){Ie(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),Xt(t),r&4&&$m(t);break;case 21:break;default:bt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ao(s,""),r.flags&=-33);var i=Bm(t);Sh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Bm(t);Ih(t,l,o);break;default:throw Error(L(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PS(t,e,n){$=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||wa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Je;l=wa;var c=Je;if(wa=o,(Je=u)&&!c)for($=s;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?qm(s):u!==null?(u.return=o,$=u):qm(s);for(;i!==null;)$=i,Vv(i),i=i.sibling;$=s,wa=l,Je=c}Hm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):Hm(t)}}function Hm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Jl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Rm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ho(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Je||e.flags&512&&Th(e)}catch(g){Ie(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Wm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function qm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ie(e,s,u)}}var i=e.return;try{Th(e)}catch(u){Ie(e,i,u)}break;case 5:var o=e.return;try{Th(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var NS=Math.ceil,gl=Dn.ReactCurrentDispatcher,Ld=Dn.ReactCurrentOwner,xt=Dn.ReactCurrentBatchConfig,ie=0,je=null,Re=null,He=0,_t=0,ks=Er(0),Ve=0,Io=null,qr=0,Zl=0,Fd=0,Xi=null,dt=null,jd=0,Ws=1/0,pn=null,yl=!1,Ah=null,sr=null,Ea=!1,Xn=null,_l=0,Ji=0,kh=null,Fa=-1,ja=0;function at(){return ie&6?ke():Fa!==-1?Fa:Fa=ke()}function ir(t){return t.mode&1?ie&2&&He!==0?He&-He:fS.transition!==null?(ja===0&&(ja=y_()),ja):(t=ae,t!==0||(t=window.event,t=t===void 0?16:S_(t.type)),t):1}function Ht(t,e,n,r){if(50<Ji)throw Ji=0,kh=null,Error(L(185));Mo(t,n,r),(!(ie&2)||t!==je)&&(t===je&&(!(ie&2)&&(Zl|=n),Ve===4&&Wn(t,He)),gt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Ws=ke()+500,Ql&&Tr()))}function gt(t,e){var n=t.callbackNode;fI(t,e);var r=tl(t,t===je?He:0);if(r===0)n!==null&&tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tm(n),e===1)t.tag===0?dS(Km.bind(null,t)):$_(Km.bind(null,t)),lS(function(){!(ie&6)&&Tr()}),n=null;else{switch(__(r)){case 1:n=hd;break;case 4:n=m_;break;case 16:n=el;break;case 536870912:n=g_;break;default:n=el}n=zv(n,Ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ov(t,e){if(Fa=-1,ja=0,ie&6)throw Error(L(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var r=tl(t,t===je?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vl(t,r);else{e=r;var s=ie;ie|=2;var i=bv();(je!==t||He!==e)&&(pn=null,Ws=ke()+500,jr(t,e));do try{VS();break}catch(l){Mv(t,l)}while(!0);Sd(),gl.current=i,ie=s,Re!==null?e=0:(je=null,He=0,e=Ve)}if(e!==0){if(e===2&&(s=Zc(t),s!==0&&(r=s,e=Ch(t,s))),e===1)throw n=Io,jr(t,0),Wn(t,r),gt(t,ke()),n;if(e===6)Wn(t,r);else{if(s=t.current.alternate,!(r&30)&&!xS(s)&&(e=vl(t,r),e===2&&(i=Zc(t),i!==0&&(r=i,e=Ch(t,i))),e===1))throw n=Io,jr(t,0),Wn(t,r),gt(t,ke()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:xr(t,dt,pn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=jd+500-ke(),10<e)){if(tl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ah(xr.bind(null,t,dt,pn),e);break}xr(t,dt,pn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-$t(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NS(r/1960))-r,10<r){t.timeoutHandle=ah(xr.bind(null,t,dt,pn),r);break}xr(t,dt,pn);break;case 5:xr(t,dt,pn);break;default:throw Error(L(329))}}}return gt(t,ke()),t.callbackNode===n?Ov.bind(null,t):null}function Ch(t,e){var n=Xi;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=vl(t,e),t!==2&&(e=dt,dt=n,e!==null&&Rh(e)),t}function Rh(t){dt===null?dt=t:dt.push.apply(dt,t)}function xS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!qt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~Fd,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Km(t){if(ie&6)throw Error(L(327));Ds();var e=tl(t,0);if(!(e&1))return gt(t,ke()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var r=Zc(t);r!==0&&(e=r,n=Ch(t,r))}if(n===1)throw n=Io,jr(t,0),Wn(t,e),gt(t,ke()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,dt,pn),gt(t,ke()),null}function Ud(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Ws=ke()+500,Ql&&Tr())}}function Kr(t){Xn!==null&&Xn.tag===0&&!(ie&6)&&Ds();var e=ie;ie|=1;var n=xt.transition,r=ae;try{if(xt.transition=null,ae=1,t)return t()}finally{ae=r,xt.transition=n,ie=e,!(ie&6)&&Tr()}}function zd(){_t=ks.current,me(ks)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aS(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ol();break;case 3:$s(),me(pt),me(et),Nd();break;case 5:Pd(r);break;case 4:$s();break;case 13:me(_e);break;case 19:me(_e);break;case 10:Ad(r.type._context);break;case 22:case 23:zd()}n=n.return}if(je=t,Re=t=or(t.current,null),He=_t=e,Ve=0,Io=null,Fd=Zl=qr=0,dt=Xi=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Or=null}return t}function Mv(t,e){do{var n=Re;try{if(Sd(),Ma.current=ml,pl){for(var r=ve.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}pl=!1}if(Wr=0,Fe=xe=ve=null,Qi=!1,wo=0,Ld.current=null,n===null||n.return===null){Ve=1,Io=e,Re=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Om(o);if(k!==null){k.flags&=-257,Mm(k,o,l,i,e),k.mode&1&&Vm(i,c,e),e=k,u=c;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){Vm(i,c,e),Bd();break e}u=Error(L(426))}}else if(ye&&l.mode&1){var b=Om(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Mm(b,o,l,i,e),Td(Hs(u,l));break e}}i=u=Hs(u,l),Ve!==4&&(Ve=2),Xi===null?Xi=[i]:Xi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=_v(i,u,e);Cm(i,w);break e;case 1:l=u;var _=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(sr===null||!sr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=vv(i,l,e);Cm(i,V);break e}}i=i.return}while(i!==null)}Fv(n)}catch(F){e=F,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function bv(){var t=gl.current;return gl.current=ml,t===null?ml:t}function Bd(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),je===null||!(qr&268435455)&&!(Zl&268435455)||Wn(je,He)}function vl(t,e){var n=ie;ie|=2;var r=bv();(je!==t||He!==e)&&(pn=null,jr(t,e));do try{DS();break}catch(s){Mv(t,s)}while(!0);if(Sd(),ie=n,gl.current=r,Re!==null)throw Error(L(261));return je=null,He=0,Ve}function DS(){for(;Re!==null;)Lv(Re)}function VS(){for(;Re!==null&&!sI();)Lv(Re)}function Lv(t){var e=Uv(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?Fv(t):Re=e,Ld.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Re=null;return}}else if(n=AS(n,e,_t),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Ve===0&&(Ve=5)}function xr(t,e,n){var r=ae,s=xt.transition;try{xt.transition=null,ae=1,OS(t,e,n,r)}finally{xt.transition=s,ae=r}return null}function OS(t,e,n,r){do Ds();while(Xn!==null);if(ie&6)throw Error(L(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(pI(t,i),t===je&&(Re=je=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,zv(el,function(){return Ds(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=xt.transition,xt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,Ld.current=null,RS(t,n),Dv(n,t),eS(ih),nl=!!sh,ih=sh=null,t.current=n,PS(n),iI(),ie=l,ae=o,xt.transition=i}else t.current=n;if(Ea&&(Ea=!1,Xn=t,_l=s),i=t.pendingLanes,i===0&&(sr=null),lI(n.stateNode),gt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(yl)throw yl=!1,t=Ah,Ah=null,t;return _l&1&&t.tag!==0&&Ds(),i=t.pendingLanes,i&1?t===kh?Ji++:(Ji=0,kh=t):Ji=0,Tr(),null}function Ds(){if(Xn!==null){var t=__(_l),e=xt.transition,n=ae;try{if(xt.transition=null,ae=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,_l=0,ie&6)throw Error(L(331));var s=ie;for(ie|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Yi(8,f,i)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,k=f.return;if(Pv(f),f===c){$=null;break}if(g!==null){g.return=k,$=g;break}$=k}}}var x=i.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yi(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,$=w;break e}$=i.return}}var _=t.current;for($=_;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jl(9,l)}}catch(F){Ie(l,l.return,F)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(ie=s,Tr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Hl,t)}catch{}r=!0}return r}finally{ae=n,xt.transition=e}}return!1}function Gm(t,e,n){e=Hs(n,e),e=_v(t,e,1),t=rr(t,e,1),e=at(),t!==null&&(Mo(t,1,e),gt(t,e))}function Ie(t,e,n){if(t.tag===3)Gm(t,t,n);else for(;e!==null;){if(e.tag===3){Gm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Hs(n,t),t=vv(e,t,1),e=rr(e,t,1),t=at(),e!==null&&(Mo(e,1,t),gt(e,t));break}}e=e.return}}function MS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(He&n)===n&&(Ve===4||Ve===3&&(He&130023424)===He&&500>ke()-jd?jr(t,0):Fd|=n),gt(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):e=1);var n=at();t=An(t,e),t!==null&&(Mo(t,e,n),gt(t,n))}function bS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function LS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),jv(t,n)}var Uv;Uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,SS(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ye&&e.flags&1048576&&H_(e,ul,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;La(t,e),t=e.pendingProps;var s=Us(e,et.current);xs(e,n),s=Dd(null,e,r,t,s,n);var i=Vd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(i=!0,al(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Cd(e),s.updater=Xl,e.stateNode=s,s._reactInternals=e,ph(e,r,t,n),e=yh(null,e,r,!0,i,n)):(e.tag=0,ye&&i&&wd(e),ot(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(La(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=jS(r),t=Lt(r,t),s){case 0:e=gh(null,e,r,t,n);break e;case 1:e=Fm(null,e,r,t,n);break e;case 11:e=bm(null,e,r,t,n);break e;case 14:e=Lm(null,e,r,Lt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),gh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),Fm(t,e,r,s,n);case 3:e:{if(Iv(e),t===null)throw Error(L(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Y_(t,e),dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Hs(Error(L(423)),e),e=jm(t,e,r,n,s);break e}else if(r!==s){s=Hs(Error(L(424)),e),e=jm(t,e,r,n,s);break e}else for(vt=nr(e.stateNode.containerInfo.firstChild),wt=e,ye=!0,jt=null,n=G_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),r===s){e=kn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return X_(e),t===null&&hh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,oh(r,s)?o=null:i!==null&&oh(r,i)&&(e.flags|=32),Tv(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&hh(e),null;case 13:return Sv(t,e,n);case 4:return Rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),bm(t,e,r,s,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,he(cl,r._currentValue),r._currentValue=o,i!==null)if(qt(i.value,o)){if(i.children===s.children&&!pt.current){e=kn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=wn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),dh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ot(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,xs(e,n),s=Vt(s),r=r(s),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,s=Lt(r,e.pendingProps),s=Lt(r.type,s),Lm(t,e,r,s,n);case 15:return wv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Lt(r,s),La(t,e),e.tag=1,mt(r)?(t=!0,al(e)):t=!1,xs(e,n),yv(e,r,s),ph(e,r,s,n),yh(null,e,r,!0,t,n);case 19:return Av(t,e,n);case 22:return Ev(t,e,n)}throw Error(L(156,e.tag))};function zv(t,e){return p_(t,e)}function FS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new FS(t,e,n,r)}function $d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return $d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ld)return 11;if(t===ud)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ua(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")$d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Ur(n.children,s,i,e);case ad:o=8,s|=8;break;case Fc:return t=Nt(12,n,e,s|2),t.elementType=Fc,t.lanes=i,t;case jc:return t=Nt(13,n,e,s),t.elementType=jc,t.lanes=i,t;case Uc:return t=Nt(19,n,e,s),t.elementType=Uc,t.lanes=i,t;case Xy:return eu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qy:o=10;break e;case Yy:o=9;break e;case ld:o=11;break e;case ud:o=14;break e;case Bn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ur(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function eu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Xy,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function wc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function US(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,r,s,i,o,l,u){return t=new US(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Nt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(i),t}function zS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bv(t){if(!t)return dr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(mt(n))return B_(t,n,e)}return e}function $v(t,e,n,r,s,i,o,l,u){return t=Hd(n,r,!0,t,s,i,o,l,u),t.context=Bv(null),n=t.current,r=at(),s=ir(n),i=wn(r,s),i.callback=e??null,rr(n,i,s),t.current.lanes=s,Mo(t,s,r),gt(t,r),t}function tu(t,e,n,r){var s=e.current,i=at(),o=ir(s);return n=Bv(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(s,e,o),t!==null&&(Ht(t,s,o,i),Oa(t,s,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wd(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function BS(){return null}var Hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function qd(t){this._internalRoot=t}nu.prototype.render=qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));tu(t,e,null,null)};nu.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){tu(null,t,null,null)}),e[Sn]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=E_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&I_(t)}};function Kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function $S(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=wl(o);i.call(c)}}var o=$v(e,r,t,0,null,!1,!1,"",Ym);return t._reactRootContainer=o,t[Sn]=o.current,mo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=wl(u);l.call(c)}}var u=Hd(t,0,!1,null,null,!1,!1,"",Ym);return t._reactRootContainer=u,t[Sn]=u.current,mo(t.nodeType===8?t.parentNode:t),Kr(function(){tu(e,u,n,r)}),u}function su(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=wl(o);l.call(u)}}tu(e,o,t,s)}else o=$S(n,e,t,s,r);return wl(o)}v_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(dd(e,n|1),gt(e,ke()),!(ie&6)&&(Ws=ke()+500,Tr()))}break;case 13:Kr(function(){var r=An(t,1);if(r!==null){var s=at();Ht(r,t,1,s)}}),Wd(t,1)}};fd=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=at();Ht(e,t,134217728,n)}Wd(t,134217728)}};w_=function(t){if(t.tag===13){var e=ir(t),n=An(t,e);if(n!==null){var r=at();Ht(n,t,e,r)}Wd(t,e)}};E_=function(){return ae};T_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Yc=function(t,e,n){switch(e){case"input":if($c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Gl(r);if(!s)throw Error(L(90));Zy(r),$c(r,s)}}}break;case"textarea":t_(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};l_=Ud;u_=Kr;var HS={usingClientEntryPoint:!1,Events:[Lo,ws,Gl,o_,a_,Ud]},Mi={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d_(t),t===null?null:t.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||BS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{Hl=Ta.inject(WS),tn=Ta}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(e))throw Error(L(200));return zS(t,e,null,n)};It.createRoot=function(t,e){if(!Kd(t))throw Error(L(299));var n=!1,r="",s=Hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,r,s),t[Sn]=e.current,mo(t.nodeType===8?t.parentNode:t),new qd(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=d_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Kr(t)};It.hydrate=function(t,e,n){if(!ru(e))throw Error(L(200));return su(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Kd(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$v(e,null,t,1,n??null,s,!1,i,o),t[Sn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nu(e)};It.render=function(t,e,n){if(!ru(e))throw Error(L(200));return su(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!ru(t))throw Error(L(40));return t._reactRootContainer?(Kr(function(){su(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};It.unstable_batchedUpdates=Ud;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ru(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return su(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(t){console.error(t)}}Wv(),Wy.exports=It;var qS=Wy.exports,Xm=qS;bc.createRoot=Xm.createRoot,bc.hydrateRoot=Xm.hydrateRoot;function KS({authLoading:t,onSignIn:e}){return y.jsx("div",{className:"login-container",children:y.jsxs("div",{className:"login-card",children:[y.jsxs("div",{className:"login-header",children:[y.jsx("h1",{children:"Daily Site Log"}),y.jsx("p",{children:"Sign in with your Microsoft account to continue"})]}),y.jsx("button",{className:"login-button",onClick:e,disabled:t,children:t?"Signing in...":"Sign in"})]})})}var it=(t=>(t.NEW="new",t.EDITED="edited",t.SAVED="saved",t))(it||{});class So{constructor(e,n={}){re(this,"date");re(this,"name");re(this,"site");re(this,"weather");re(this,"startTime");re(this,"endTime");re(this,"breakLength");re(this,"tasksCompleted");re(this,"employees");re(this,"subcontractors");re(this,"plant");re(this,"status");this.date=e,this.name=n.name||"",this.site=n.site||"",this.weather=n.weather||"",this.startTime=n.startTime||"",this.endTime=n.endTime||"",this.breakLength=n.breakLength||"",this.tasksCompleted=n.tasksCompleted||"",this.employees=n.employees||[],this.subcontractors=n.subcontractors||[],this.plant=n.plant||[];let r=n.status||it.NEW;String(r)==="submitted"&&(r=it.SAVED),this.status=r}static createDefault(e){return new So(e,{name:"",site:"",weather:"",startTime:"",endTime:"",breakLength:"",tasksCompleted:"",employees:[],subcontractors:[],plant:[],status:it.NEW})}toJSON(){return{name:this.name,site:this.site,weather:this.weather,startTime:this.startTime,endTime:this.endTime,breakLength:this.breakLength,tasksCompleted:this.tasksCompleted,employees:this.employees,subcontractors:this.subcontractors,plant:this.plant,status:this.status}}toJSONWithSave(){return{name:this.name,site:this.site,weather:this.weather,startTime:this.startTime,endTime:this.endTime,breakLength:this.breakLength,tasksCompleted:this.tasksCompleted,employees:this.employees,subcontractors:this.subcontractors,plant:this.plant,status:it.SAVED}}static fromJSON(e,n){return new So(e,n)}update(e){return Object.assign(this,e),e.status===void 0&&(this.status=it.EDITED),this}addEmployee(e){return this.employees=[...this.employees,e],this.status=it.EDITED,this}updateEmployee(e,n){return this.employees[e]={...this.employees[e],...n},this.status=it.EDITED,this}removeEmployee(e){return this.employees=this.employees.filter((n,r)=>r!==e),this.status=it.EDITED,this}addSubcontractor(e){return this.subcontractors=[...this.subcontractors,e],this.status=it.EDITED,this}updateSubcontractor(e,n){return this.subcontractors[e]={...this.subcontractors[e],...n},this.status=it.EDITED,this}removeSubcontractor(e){return this.subcontractors=this.subcontractors.filter((n,r)=>r!==e),this.status=it.EDITED,this}addPlant(e){return this.plant=[...this.plant,e],this.status=it.EDITED,this}updatePlant(e,n){return this.plant[e]={...this.plant[e],...n},this.status=it.EDITED,this}removePlant(e){return this.plant=this.plant.filter((n,r)=>r!==e),this.status=it.EDITED,this}removeEmptyRows(){return this.employees&&(this.employees=this.employees.filter(e=>e.name&&e.name.trim()!=="")),this.subcontractors&&(this.subcontractors=this.subcontractors.filter(e=>e.name&&e.name.trim()!=="")),this.plant&&(this.plant=this.plant.filter(e=>e.name&&e.name.trim()!=="")),this}}const GS=()=>{};var Jm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,k=c&63;u||(k=64,o||(g=64)),r.push(n[f],n[p],n[g],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new YS;const g=i<<2|l>>4;if(r.push(g),c!==64){const k=l<<4&240|c>>2;if(r.push(k),p!==64){const x=c<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XS=function(t){const e=qv(t);return Kv.encodeByteArray(e,!0)},El=function(t){return XS(t).replace(/\./g,"")},Gv=function(t){try{return Kv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=()=>JS().__FIREBASE_DEFAULTS__,e1=()=>{if(typeof process>"u"||typeof Jm>"u")return;const t=Jm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},t1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gv(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return GS()||ZS()||e1()||t1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qv=t=>{var e,n;return(n=(e=iu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},n1=t=>{const e=Qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yv=()=>{var t;return(t=iu())==null?void 0:t.config},Xv=t=>{var e;return(e=iu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[El(JSON.stringify(n)),El(JSON.stringify(o)),""].join(".")}const Zi={};function i1(){const t={prod:[],emulator:[]};for(const e of Object.keys(Zi))Zi[e]?t.emulator.push(e):t.prod.push(e);return t}function o1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zm=!1;function Zv(t,e){if(typeof window>"u"||typeof document>"u"||!ni(window.location.host)||Zi[t]===e||Zi[t]||Zm)return;Zi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=i1().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,k){g.setAttribute("width","24"),g.setAttribute("id",k),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Zm=!0,o()},g}function f(g,k){g.setAttribute("id",k),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=o1(r),k=n("text"),x=document.getElementById(k)||document.createElement("span"),D=n("learnmore"),b=document.getElementById(D)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(b,D);const V=c();u(_,w),A.append(_,x,b,V),document.body.appendChild(A)}i?(x.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function l1(){var e;const t=(e=iu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function u1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function c1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h1(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function d1(){return!l1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tw(){try{return typeof indexedDB=="object"}catch{return!1}}function nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function f1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=p1,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ts.prototype.create)}}class ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?m1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,l,r)}}function m1(t,e){return t.replace(g1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const g1=/\{\$([^}]+)}/g;function y1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(eg(i)&&eg(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function eg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _1(t,e){const n=new v1(t,e);return n.subscribe.bind(n)}class v1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");w1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ec),s.error===void 0&&(s.error=Ec),s.complete===void 0&&(s.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=1e3,T1=2,I1=4*60*60*1e3,S1=.5;function tg(t,e=E1,n=T1){const r=e*Math.pow(n,t),s=Math.round(S1*r*(Math.random()-.5)*2);return Math.min(I1,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new r1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C1(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k1(t){return t===Dr?void 0:t}function C1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const P1={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},N1=ee.INFO,x1={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},D1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=x1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ou{constructor(e){this.name=e,this._logLevel=N1,this._logHandler=D1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const V1=(t,e)=>e.some(n=>t instanceof n);let ng,rg;function O1(){return ng||(ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M1(){return rg||(rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rw=new WeakMap,Ph=new WeakMap,sw=new WeakMap,Tc=new WeakMap,Gd=new WeakMap;function b1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rw.set(n,t)}).catch(()=>{}),Gd.set(e,t),e}function L1(t){if(Ph.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ph.set(t,e)}let Nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function F1(t){Nh=t(Nh)}function j1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return sw.set(r,e.sort?e.sort():[e]),ar(r)}:M1().includes(t)?function(...e){return t.apply(Ic(this),e),ar(rw.get(this))}:function(...e){return ar(t.apply(Ic(this),e))}}function U1(t){return typeof t=="function"?j1(t):(t instanceof IDBTransaction&&L1(t),V1(t,O1())?new Proxy(t,Nh):t)}function ar(t){if(t instanceof IDBRequest)return b1(t);if(Tc.has(t))return Tc.get(t);const e=U1(t);return e!==t&&(Tc.set(t,e),Gd.set(e,t)),e}const Ic=t=>Gd.get(t);function iw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ar(o.result),u.oldVersion,u.newVersion,ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const z1=["get","getKey","getAll","getAllKeys","count"],B1=["put","add","delete","clear"],Sc=new Map;function sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=B1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||z1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Sc.set(e,i),i}F1(t=>({...t,get:(e,n,r)=>sg(e,n)||t.get(e,n,r),has:(e,n)=>!!sg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",ig="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new ou("@firebase/app"),W1="@firebase/app-compat",q1="@firebase/analytics-compat",K1="@firebase/analytics",G1="@firebase/app-check-compat",Q1="@firebase/app-check",Y1="@firebase/auth",X1="@firebase/auth-compat",J1="@firebase/database",Z1="@firebase/data-connect",eA="@firebase/database-compat",tA="@firebase/functions",nA="@firebase/functions-compat",rA="@firebase/installations",sA="@firebase/installations-compat",iA="@firebase/messaging",oA="@firebase/messaging-compat",aA="@firebase/performance",lA="@firebase/performance-compat",uA="@firebase/remote-config",cA="@firebase/remote-config-compat",hA="@firebase/storage",dA="@firebase/storage-compat",fA="@firebase/firestore",pA="@firebase/ai",mA="@firebase/firestore-compat",gA="firebase",yA="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="[DEFAULT]",_A={[xh]:"fire-core",[W1]:"fire-core-compat",[K1]:"fire-analytics",[q1]:"fire-analytics-compat",[Q1]:"fire-app-check",[G1]:"fire-app-check-compat",[Y1]:"fire-auth",[X1]:"fire-auth-compat",[J1]:"fire-rtdb",[Z1]:"fire-data-connect",[eA]:"fire-rtdb-compat",[tA]:"fire-fn",[nA]:"fire-fn-compat",[rA]:"fire-iid",[sA]:"fire-iid-compat",[iA]:"fire-fcm",[oA]:"fire-fcm-compat",[aA]:"fire-perf",[lA]:"fire-perf-compat",[uA]:"fire-rc",[cA]:"fire-rc-compat",[hA]:"fire-gcs",[dA]:"fire-gcs-compat",[fA]:"fire-fst",[mA]:"fire-fst-compat",[pA]:"fire-vertex","fire-js":"fire-js",[gA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map,vA=new Map,Vh=new Map;function og(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(Vh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of Tl.values())og(n,t);for(const n of vA.values())og(n,t);return!0}function ns(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new ts("app","Firebase",wA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=yA;function ow(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Dh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw lr.create("bad-app-name",{appName:String(s)});if(n||(n=Yv()),!n)throw lr.create("no-options");const i=Tl.get(s);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw lr.create("duplicate-app",{appName:s})}const o=new R1(s);for(const u of Vh.values())o.addComponent(u);const l=new EA(n,r,o);return Tl.set(s,l),l}function Qd(t=Dh){const e=Tl.get(t);if(!e&&t===Dh&&Yv())return ow();if(!e)throw lr.create("no-app",{appName:t});return e}function Dt(t,e,n){let r=_A[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(o.join(" "));return}un(new Kt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="firebase-heartbeat-database",IA=1,Ao="firebase-heartbeat-store";let Ac=null;function aw(){return Ac||(Ac=iw(TA,IA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function SA(t){try{const n=(await aw()).transaction(Ao),r=await n.objectStore(Ao).get(lw(t));return await n.done,r}catch(e){if(e instanceof Gt)Cn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function ag(t,e){try{const r=(await aw()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,lw(t)),await r.done}catch(n){if(n instanceof Gt)Cn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function lw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=1024,kA=30;class CA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>kA){const o=NA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lg(),{heartbeatsToSend:r,unsentEntries:s}=RA(this._heartbeatsCache.heartbeats),i=El(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function lg(){return new Date().toISOString().substring(0,10)}function RA(t,e=AA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ug(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tw()?nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ag(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ag(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ug(t){return El(JSON.stringify({version:2,heartbeats:t})).length}function NA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){un(new Kt("platform-logger",e=>new $1(e),"PRIVATE")),un(new Kt("heartbeat",e=>new CA(e),"PRIVATE")),Dt(xh,ig,t),Dt(xh,ig,"esm2020"),Dt("fire-js","")}xA("");var cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ur,uw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function T(){}T.prototype=v.prototype,E.F=v.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(S,C,R){for(var I=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)I[Ue-2]=arguments[Ue];return v.prototype[C].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,T){T||(T=0);const S=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)S[C]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(C=0;C<16;++C)S[C]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=E.g[0],T=E.g[1],C=E.g[2];let R=E.g[3],I;I=v+(R^T&(C^R))+S[0]+3614090360&4294967295,v=T+(I<<7&4294967295|I>>>25),I=R+(C^v&(T^C))+S[1]+3905402710&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(T^R&(v^T))+S[2]+606105819&4294967295,C=R+(I<<17&4294967295|I>>>15),I=T+(v^C&(R^v))+S[3]+3250441966&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(R^T&(C^R))+S[4]+4118548399&4294967295,v=T+(I<<7&4294967295|I>>>25),I=R+(C^v&(T^C))+S[5]+1200080426&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(T^R&(v^T))+S[6]+2821735955&4294967295,C=R+(I<<17&4294967295|I>>>15),I=T+(v^C&(R^v))+S[7]+4249261313&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(R^T&(C^R))+S[8]+1770035416&4294967295,v=T+(I<<7&4294967295|I>>>25),I=R+(C^v&(T^C))+S[9]+2336552879&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(T^R&(v^T))+S[10]+4294925233&4294967295,C=R+(I<<17&4294967295|I>>>15),I=T+(v^C&(R^v))+S[11]+2304563134&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(R^T&(C^R))+S[12]+1804603682&4294967295,v=T+(I<<7&4294967295|I>>>25),I=R+(C^v&(T^C))+S[13]+4254626195&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(T^R&(v^T))+S[14]+2792965006&4294967295,C=R+(I<<17&4294967295|I>>>15),I=T+(v^C&(R^v))+S[15]+1236535329&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(C^R&(T^C))+S[1]+4129170786&4294967295,v=T+(I<<5&4294967295|I>>>27),I=R+(T^C&(v^T))+S[6]+3225465664&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(R^v))+S[11]+643717713&4294967295,C=R+(I<<14&4294967295|I>>>18),I=T+(R^v&(C^R))+S[0]+3921069994&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(C^R&(T^C))+S[5]+3593408605&4294967295,v=T+(I<<5&4294967295|I>>>27),I=R+(T^C&(v^T))+S[10]+38016083&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(R^v))+S[15]+3634488961&4294967295,C=R+(I<<14&4294967295|I>>>18),I=T+(R^v&(C^R))+S[4]+3889429448&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(C^R&(T^C))+S[9]+568446438&4294967295,v=T+(I<<5&4294967295|I>>>27),I=R+(T^C&(v^T))+S[14]+3275163606&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(R^v))+S[3]+4107603335&4294967295,C=R+(I<<14&4294967295|I>>>18),I=T+(R^v&(C^R))+S[8]+1163531501&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(C^R&(T^C))+S[13]+2850285829&4294967295,v=T+(I<<5&4294967295|I>>>27),I=R+(T^C&(v^T))+S[2]+4243563512&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(R^v))+S[7]+1735328473&4294967295,C=R+(I<<14&4294967295|I>>>18),I=T+(R^v&(C^R))+S[12]+2368359562&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(T^C^R)+S[5]+4294588738&4294967295,v=T+(I<<4&4294967295|I>>>28),I=R+(v^T^C)+S[8]+2272392833&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^T)+S[11]+1839030562&4294967295,C=R+(I<<16&4294967295|I>>>16),I=T+(C^R^v)+S[14]+4259657740&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(T^C^R)+S[1]+2763975236&4294967295,v=T+(I<<4&4294967295|I>>>28),I=R+(v^T^C)+S[4]+1272893353&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^T)+S[7]+4139469664&4294967295,C=R+(I<<16&4294967295|I>>>16),I=T+(C^R^v)+S[10]+3200236656&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(T^C^R)+S[13]+681279174&4294967295,v=T+(I<<4&4294967295|I>>>28),I=R+(v^T^C)+S[0]+3936430074&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^T)+S[3]+3572445317&4294967295,C=R+(I<<16&4294967295|I>>>16),I=T+(C^R^v)+S[6]+76029189&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(T^C^R)+S[9]+3654602809&4294967295,v=T+(I<<4&4294967295|I>>>28),I=R+(v^T^C)+S[12]+3873151461&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^T)+S[15]+530742520&4294967295,C=R+(I<<16&4294967295|I>>>16),I=T+(C^R^v)+S[2]+3299628645&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(C^(T|~R))+S[0]+4096336452&4294967295,v=T+(I<<6&4294967295|I>>>26),I=R+(T^(v|~C))+S[7]+1126891415&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~T))+S[14]+2878612391&4294967295,C=R+(I<<15&4294967295|I>>>17),I=T+(R^(C|~v))+S[5]+4237533241&4294967295,T=C+(I<<21&4294967295|I>>>11),I=v+(C^(T|~R))+S[12]+1700485571&4294967295,v=T+(I<<6&4294967295|I>>>26),I=R+(T^(v|~C))+S[3]+2399980690&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~T))+S[10]+4293915773&4294967295,C=R+(I<<15&4294967295|I>>>17),I=T+(R^(C|~v))+S[1]+2240044497&4294967295,T=C+(I<<21&4294967295|I>>>11),I=v+(C^(T|~R))+S[8]+1873313359&4294967295,v=T+(I<<6&4294967295|I>>>26),I=R+(T^(v|~C))+S[15]+4264355552&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~T))+S[6]+2734768916&4294967295,C=R+(I<<15&4294967295|I>>>17),I=T+(R^(C|~v))+S[13]+1309151649&4294967295,T=C+(I<<21&4294967295|I>>>11),I=v+(C^(T|~R))+S[4]+4149444226&4294967295,v=T+(I<<6&4294967295|I>>>26),I=R+(T^(v|~C))+S[11]+3174756917&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~T))+S[2]+718787259&4294967295,C=R+(I<<15&4294967295|I>>>17),I=T+(R^(C|~v))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const T=v-this.blockSize,S=this.C;let C=this.h,R=0;for(;R<v;){if(C==0)for(;R<=T;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<v;)if(S[C++]=E.charCodeAt(R++),C==this.blockSize){s(this,S),C=0;break}}else for(;R<v;)if(S[C++]=E[R++],C==this.blockSize){s(this,S),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,T=0;T<4;++T)for(let S=0;S<32;S+=8)E[v++]=this.g[T]>>>S&255;return E};function i(E,v){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=v(E)}function o(E,v){this.h=v;const T=[];let S=!0;for(let C=E.length-1;C>=0;C--){const R=E[C]|0;S&&R==v||(T[C]=R,S=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?i(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return b(c(-E));const v=[];let T=1;for(let S=0;E>=T;S++)v[S]=E/T|0,T*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return b(f(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(v,8));let S=p;for(let R=0;R<E.length;R+=8){var C=Math.min(8,E.length-R);const I=parseInt(E.substring(R,R+C),v);C<8?(C=c(Math.pow(v,C)),S=S.j(C).add(c(I))):(S=S.j(T),S=S.add(c(I)))}return S}var p=u(0),g=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-b(this).m();let E=0,v=1;for(let T=0;T<this.g.length;T++){const S=this.i(T);E+=(S>=0?S:4294967296+S)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(D(this))return"-"+b(this).toString(E);const v=c(Math.pow(E,6));var T=this;let S="";for(;;){const C=V(T,v).g;T=w(T,C.j(v));let R=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=C,x(T))return R+S;for(;R.length<6;)R="0"+R;S=R+S}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=w(this,E),D(E)?-1:x(E)?0:1};function b(E){const v=E.g.length,T=[];for(let S=0;S<v;S++)T[S]=~E.g[S];return new o(T,~E.h).add(g)}t.abs=function(){return D(this)?b(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),T=[];let S=0;for(let C=0;C<=v;C++){let R=S+(this.i(C)&65535)+(E.i(C)&65535),I=(R>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);S=I>>>16,R&=65535,I&=65535,T[C]=I<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,v){return E.add(b(v))}t.j=function(E){if(x(this)||x(E))return p;if(D(this))return D(E)?b(this).j(b(E)):b(b(this).j(E));if(D(E))return b(this.j(b(E)));if(this.l(k)<0&&E.l(k)<0)return c(this.m()*E.m());const v=this.g.length+E.g.length,T=[];for(var S=0;S<2*v;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(let C=0;C<E.g.length;C++){const R=this.i(S)>>>16,I=this.i(S)&65535,Ue=E.i(C)>>>16,fn=E.i(C)&65535;T[2*S+2*C]+=I*fn,_(T,2*S+2*C),T[2*S+2*C+1]+=R*fn,_(T,2*S+2*C+1),T[2*S+2*C+1]+=I*Ue,_(T,2*S+2*C+1),T[2*S+2*C+2]+=R*Ue,_(T,2*S+2*C+2)}for(E=0;E<v;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=v;E<2*v;E++)T[E]=0;return new o(T,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function A(E,v){this.g=E,this.h=v}function V(E,v){if(x(v))throw Error("division by zero");if(x(E))return new A(p,p);if(D(E))return v=V(b(E),v),new A(b(v.g),b(v.h));if(D(v))return v=V(E,b(v)),new A(b(v.g),v.h);if(E.g.length>30){if(D(E)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,S=v;S.l(E)<=0;)T=F(T),S=F(S);var C=U(T,1),R=U(S,1);for(S=U(S,2),T=U(T,2);!x(S);){var I=R.add(S);I.l(E)<=0&&(C=C.add(T),R=I),S=U(S,1),T=U(T,1)}return v=w(E,C.j(v)),new A(C,v)}for(C=p;E.l(v)>=0;){for(T=Math.max(1,Math.floor(E.m()/v.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),R=c(T),I=R.j(v);D(I)||I.l(E)>0;)T-=S,R=c(T),I=R.j(v);x(R)&&(R=g),C=C.add(R),E=w(E,I)}return new A(C,E)}t.B=function(E){return V(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let S=0;S<v;S++)T[S]=this.i(S)&E.i(S);return new o(T,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let S=0;S<v;S++)T[S]=this.i(S)|E.i(S);return new o(T,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let S=0;S<v;S++)T[S]=this.i(S)^E.i(S);return new o(T,this.h^E.h)};function F(E){const v=E.g.length+1,T=[];for(let S=0;S<v;S++)T[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(T,E.h)}function U(E,v){const T=v>>5;v%=32;const S=E.g.length-T,C=[];for(let R=0;R<S;R++)C[R]=v>0?E.i(R+T)>>>v|E.i(R+T+1)<<32-v:E.i(R+T);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,uw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,ur=o}).apply(typeof cg<"u"?cg:typeof self<"u"?self:typeof window<"u"?window:{});var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cw,Ui,hw,za,Oh,dw,fw,pw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ia=="object"&&Ia];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var j=Array(arguments.length-2),J=2;J<arguments.length;J++)j[J-2]=arguments[J];return h.prototype[P].apply(m,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function x(a,h){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let j=0;j<N;j++)a[d+j]=P[j]}else a.push(P)}}class D{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const m=A.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var A=new D(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,U=!1,E=new _,v=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(T)}};function T(){for(var a;a=w();){try{a.h.call(a.g)}catch(d){b(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Ue(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ue,C),Ue.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fn="closure_listenable_"+(Math.random()*1e6|0),ci=0;function hi(a,h,d,m,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=P,this.key=++ci,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ge(a){const h={};for(const d in a)h[d]=a[d];return h}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ir(a,h){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<Se.length;N++)d=Se[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const j=Mt(a,h,m,P);return j>-1?(h=a[j],d||(h.fa=!1)):(h=new hi(h,this.src,N,!!m,P),h.fa=d,a.push(h)),h};function Sr(a,h){const d=h.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,h,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Mt(a,h,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==m)return P}return-1}var Vn="closure_lm_"+(Math.random()*1e6|0),Ru={};function Wf(a,h,d,m,P){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Wf(a,h[N],d,m,P);return null}return d=Gf(d),a&&a[fn]?a.J(h,d,l(m)?!!m.capture:!1,P):BT(a,h,d,!1,m,P)}function BT(a,h,d,m,P,N){if(!h)throw Error("Invalid event type");const j=l(P)?!!P.capture:!!P;let J=Nu(a);if(J||(a[Vn]=J=new At(a)),d=J.add(h,d,m,j,N),d.proxy)return d;if(m=$T(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)R||(P=j),P===void 0&&(P=!1),a.addEventListener(h.toString(),m,P);else if(a.attachEvent)a.attachEvent(Kf(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $T(){function a(d){return h.call(a.src,a.listener,d)}const h=HT;return a}function qf(a,h,d,m,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)qf(a,h[N],d,m,P);else m=l(m)?!!m.capture:!!m,d=Gf(d),a&&a[fn]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],d=Mt(h,d,m,P),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=Nu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Mt(h,d,m,P)),(d=a>-1?h[a]:null)&&Pu(d))}function Pu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[fn])Sr(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(Kf(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Nu(h))?(Sr(d,a),d.h==0&&(d.src=null,h[Vn]=null)):z(a)}}}function Kf(a){return a in Ru?Ru[a]:Ru[a]="on"+a}function HT(a,h){if(a.da)a=!0;else{h=new Ue(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&Pu(a),a=d.call(m,h)}return a}function Nu(a){return a=a[Vn],a instanceof At?a:null}var xu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Gf(a){return typeof a=="function"?a:(a[xu]||(a[xu]=function(h){return a.handleEvent(h)}),a[xu])}function Ke(){S.call(this),this.i=new At(this),this.M=this,this.G=null}p(Ke,S),Ke.prototype[fn]=!0,Ke.prototype.removeEventListener=function(a,h,d,m){qf(this,a,h,d,m)};function rt(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var P=h;h=new C(m,a),Ir(h,P)}P=!0;let N,j;if(d)for(j=d.length-1;j>=0;j--)N=h.g=d[j],P=Go(N,m,!0,h)&&P;if(N=h.g=a,P=Go(N,m,!0,h)&&P,P=Go(N,m,!1,h)&&P,d)for(j=0;j<d.length;j++)N=h.g=d[j],P=Go(N,m,!1,h)&&P}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)z(d[m]);delete a.g[h],a.h--}}this.G=null},Ke.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},Ke.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Go(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let N=0;N<h.length;++N){const j=h[N];if(j&&!j.da&&j.capture==d){const J=j.listener,Ne=j.ha||j.src;j.fa&&Sr(a.i,j),P=J.call(Ne,m)!==!1&&P}}return P&&!m.defaultPrevented}function WT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Qf(a){a.g=WT(()=>{a.g=null,a.i&&(a.i=!1,Qf(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qT extends S{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Qf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(a){S.call(this),this.h=a,this.g={}}p(di,S);var Yf=[];function Xf(a){G(a.g,function(h,d){this.g.hasOwnProperty(d)&&Pu(h)},a),a.g={}}di.prototype.N=function(){di.Z.N.call(this),Xf(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Du=o.JSON.stringify,KT=o.JSON.parse,GT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jf(){}function Zf(){}var fi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vu(){C.call(this,"d")}p(Vu,C);function Ou(){C.call(this,"c")}p(Ou,C);var Ar={},ep=null;function Qo(){return ep=ep||new Ke}Ar.Ia="serverreachability";function tp(a){C.call(this,Ar.Ia,a)}p(tp,C);function pi(a){const h=Qo();rt(h,new tp(h))}Ar.STAT_EVENT="statevent";function np(a,h){C.call(this,Ar.STAT_EVENT,a),this.stat=h}p(np,C);function st(a){const h=Qo();rt(h,new np(h,a))}Ar.Ja="timingevent";function rp(a,h){C.call(this,Ar.Ja,a),this.size=h}p(rp,C);function mi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function gi(){this.g=!0}gi.prototype.ua=function(){this.g=!1};function QT(a,h,d,m,P,N){a.info(function(){if(a.g)if(N){var j="",J=N.split("&");for(let le=0;le<J.length;le++){var Ne=J[le].split("=");if(Ne.length>1){const be=Ne[0];Ne=Ne[1];const Yt=be.split("_");j=Yt.length>=2&&Yt[1]=="type"?j+(be+"="+Ne+"&"):j+(be+"=redacted&")}}}else j=null;else j=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+h+`
`+d+`
`+j})}function YT(a,h,d,m,P,N,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+h+`
`+d+`
`+N+" "+j})}function as(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+JT(a,d)+(m?" "+m:"")})}function XT(a,h){a.info(function(){return"TIMEOUT: "+h})}gi.prototype.info=function(){};function JT(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return Du(N)}catch{return h}}var Yo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ip;function Mu(){}p(Mu,Jf),Mu.prototype.g=function(){return new XMLHttpRequest},ip=new Mu;function yi(a){return encodeURIComponent(String(a))}function ZT(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function On(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new di(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new op}function op(){this.i=null,this.g="",this.h=!1}var ap={},bu={};function Lu(a,h,d){a.M=1,a.A=Jo(Qt(h)),a.u=d,a.R=!0,lp(a,null)}function lp(a,h){a.F=Date.now(),Xo(a),a.B=Qt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Ep(d.i,"t",m),a.C=0,d=a.j.L,a.h=new op,a.g=jp(a.j,d?h:null,!a.u),a.P>0&&(a.O=new qT(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Yf[0]=P.toString()),P=Yf);for(let N=0;N<P.length;N++){const j=Wf(d,P[N],m||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.J?ge(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),pi(),QT(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const h=this.O;h&&Ln(a)==3?h.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const J=Ln(this.g),Ne=this.g.ya(),le=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Rp(this.g)))){this.K||J!=4||Ne==7||(Ne==8||le<=0?pi(3):pi(2)),Fu(this);var h=this.g.ca();this.X=h;var d=e0(this);if(this.o=h==200,YT(this.i,this.v,this.B,this.l,this.S,J,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(m)){var N=m;break t}}N=null}if(a=N)as(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ju(this,a);else{this.o=!1,this.m=3,st(12),kr(this),_i(this);break e}}if(this.R){a=!0;let be;for(;!this.K&&this.C<d.length;)if(be=t0(this,d),be==bu){J==4&&(this.m=4,st(14),a=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(be==ap){this.m=4,st(15),as(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else as(this.i,this.l,be,null),ju(this,be);if(up(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)as(this.i,this.l,d,"[Invalid Chunked Response]"),kr(this),_i(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ku(j),j.P=!0,st(11))}}else as(this.i,this.l,d,null),ju(this,d);J==4&&kr(this),this.o&&!this.K&&(J==4?Mp(this.j,this):(this.o=!1,Xo(this)))}else m0(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),kr(this),_i(this)}}}catch{}finally{}};function e0(a){if(!up(a))return a.g.la();const h=Rp(a.g);if(h==="")return"";let d="";const m=h.length,P=Ln(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return kr(a),_i(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(h[N],{stream:!(P&&N==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function up(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function t0(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?bu:(d=Number(h.substring(d,m)),isNaN(d)?ap:(m+=1,m+d>h.length?bu:(h=h.slice(m,m+d),a.C=m+d,h)))}On.prototype.cancel=function(){this.K=!0,kr(this)};function Xo(a){a.T=Date.now()+a.H,cp(a,a.H)}function cp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=mi(c(a.aa,a),h)}function Fu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(XT(this.i,this.B),this.M!=2&&(pi(),st(17)),kr(this),this.m=2,_i(this)):cp(this,this.T-a)};function _i(a){a.j.I==0||a.K||Mp(a.j,a)}function kr(a){Fu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Xf(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ju(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Uu(d.h,a))){if(!a.L&&Uu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ra(d),ta(d);else break e;qu(d),st(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=mi(c(d.Va,d),6e3));fp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Rr(d,11)}else if((a.L||d.g==a)&&ra(d),!I(h))for(P=d.Ba.g.parse(h),h=0;h<P.length;h++){let le=P[h];const be=le[0];if(!(be<=d.K))if(d.K=be,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const Yt=le[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Pr=le[4];Pr!=null&&(d.za=Pr,d.j.info("SVER="+d.za));const Fn=le[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(m=1.5*Fn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const jn=a.g;if(jn){const ia=jn.g?jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var N=m.h;N.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(zu(N,N.h),N.h=null))}if(m.G){const Gu=jn.g?jn.g.getResponseHeader("X-HTTP-Session-Id"):null;Gu&&(m.wa=Gu,de(m.J,m.G,Gu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var j=a;if(m.na=Fp(m,m.L?m.ba:null,m.W),j.L){pp(m.h,j);var J=j,Ne=m.O;Ne&&(J.H=Ne),J.D&&(Fu(J),Xo(J)),m.g=j}else Vp(m);d.i.length>0&&na(d)}else le[0]!="stop"&&le[0]!="close"||Rr(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Rr(d,7):Wu(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}pi(4)}catch{}}var n0=class{constructor(a,h){this.g=a,this.map=h}};function hp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function dp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fp(a){return a.h?1:a.g?a.g.size:0}function Uu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function zu(a,h){a.g?a.g.add(h):a.h=h}function pp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hp.prototype.cancel=function(){if(this.i=mp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return k(a.i)}var gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r0(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],h(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Mn?(this.l=a.l,vi(this,a.j),this.o=a.o,this.g=a.g,wi(this,a.u),this.h=a.h,Bu(this,Tp(a.i)),this.m=a.m):a&&(h=String(a).match(gp))?(this.l=!1,vi(this,h[1]||"",!0),this.o=Ei(h[2]||""),this.g=Ei(h[3]||"",!0),wi(this,h[4]),this.h=Ei(h[5]||"",!0),Bu(this,h[6]||"",!0),this.m=Ei(h[7]||"")):(this.l=!1,this.i=new Ii(null,this.l))}Mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ti(h,yp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ti(h,yp,!0),"@"),a.push(yi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ti(d,d.charAt(0)=="/"?o0:i0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ti(d,l0)),a.join("")},Mn.prototype.resolve=function(a){const h=Qt(this);let d=!!a.j;d?vi(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)wi(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=h.h.lastIndexOf("/");P!=-1&&(m=h.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let j=0;j<P.length;){const J=P[j++];J=="."?m&&j==P.length&&N.push(""):J==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&j==P.length&&N.push("")):(N.push(J),m=!0)}m=N.join("/")}else m=P}return d?h.h=m:d=a.i.toString()!=="",d?Bu(h,Tp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Qt(a){return new Mn(a)}function vi(a,h,d){a.j=d?Ei(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function wi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Bu(a,h,d){h instanceof Ii?(a.i=h,u0(a.i,a.l)):(d||(h=Ti(h,a0)),a.i=new Ii(h,a.l))}function de(a,h,d){a.i.set(h,d)}function Jo(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ei(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,s0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function s0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yp=/[#\/\?@]/g,i0=/[#\?:]/g,o0=/[#\?]/g,a0=/[#\?@]/g,l0=/#/g;function Ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Cr(a){a.g||(a.g=new Map,a.h=0,a.i&&r0(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ii.prototype,t.add=function(a,h){Cr(this),this.i=null,a=ls(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function _p(a,h){Cr(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function vp(a,h){return Cr(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){Cr(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(h,P,m,this)},this)},this)};function wp(a,h){Cr(a);let d=[];if(typeof h=="string")vp(a,h)&&(d=d.concat(a.g.get(ls(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Cr(this),this.i=null,a=ls(this,a),vp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=wp(this,a),a.length>0?String(a[0]):h):h};function Ep(a,h,d){_p(a,h),d.length>0&&(a.i=null,a.g.set(ls(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const P=yi(d);d=wp(this,d);for(let N=0;N<d.length;N++){let j=P;d[N]!==""&&(j+="="+yi(d[N])),a.push(j)}}return this.i=a.join("&")};function Tp(a){const h=new Ii;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function u0(a,h){h&&!a.j&&(Cr(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(_p(this,m),Ep(this,P,d))},a)),a.j=h}function c0(a,h){const d=new gi;if(o.Image){const m=new Image;m.onload=f(bn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(bn,d,"TestLoadImage: error",!1,h,m),m.onabort=f(bn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(bn,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function h0(a,h){const d=new gi,m=new AbortController,P=setTimeout(()=>{m.abort(),bn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?bn(d,"TestPingServer: ok",!0,h):bn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),bn(d,"TestPingServer: error",!1,h)})}function bn(a,h,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function d0(){this.g=new GT}function $u(a){this.i=a.Sb||null,this.h=a.ab||!1}p($u,Jf),$u.prototype.g=function(){return new Zo(this.i,this.h)};function Zo(a,h){Ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Zo,Ke),t=Zo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ip(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ip(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Si(this):Ai(this),this.readyState==3&&Ip(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Si(this))},t.Na=function(a){this.g&&(this.response=a,Si(this))},t.ga=function(){this.g&&Si(this)};function Si(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ai(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sp(a){let h="";return G(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Hu(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Sp(d),typeof a=="string"?d!=null&&yi(d):de(a,h,d))}function Te(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Te,Ke);var f0=/^https?$/i,p0=["POST","PUT"];t=Te.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ip.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Ap(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(p0,h,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Ap(this,N)}};function Ap(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,kp(a),ea(a)}function kp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ea(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cp(this):this.Xa())},t.Xa=function(){Cp(this)};function Cp(a){if(a.h&&typeof i<"u"){if(a.v&&Ln(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=N===0){let j=String(a.D).match(gp)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!f0.test(j?j.toLowerCase():"")}d=m}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var P=Ln(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",kp(a)}}finally{ea(a)}}}}function ea(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ln(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),KT(h)}};function Rp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function m0(a){const h={};a=(a.g&&Ln(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(I(a[m]))continue;var d=ZT(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[P]||[];h[P]=N,N.push(d)}X(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Pp(a){this.za=0,this.i=[],this.j=new gi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ki("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ki("baseRetryDelayMs",5e3,a),this.Za=ki("retryDelaySeedMs",1e4,a),this.Ta=ki("forwardChannelMaxRetries",2,a),this.va=ki("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new hp(a&&a.concurrentRequestLimit),this.Ba=new d0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Pp.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,m){st(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Fp(this,null,this.W),na(this)};function Wu(a){if(Np(a),a.I==3){var h=a.V++,d=Qt(a.J);if(de(d,"SID",a.M),de(d,"RID",h),de(d,"TYPE","terminate"),Ci(a,d),h=new On(a,a.j,h),h.M=2,h.A=Jo(Qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=jp(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Xo(h)}Lp(a)}function ta(a){a.g&&(Ku(a),a.g.cancel(),a.g=null)}function Np(a){ta(a),a.v&&(o.clearTimeout(a.v),a.v=null),ra(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function na(a){if(!dp(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||v(),U||(F(),U=!0),E.add(h,a),a.D=0}}function g0(a,h){return fp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=mi(c(a.Ea,a,h),bp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new On(this,this.j,a);let N=this.o;if(this.U&&(N?(N=ge(N),Ir(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Dp(this,P,h),d=Qt(this.J),de(d,"RID",a),de(d,"CVER",22),this.G&&de(d,"X-HTTP-Session-Id",this.G),Ci(this,d),N&&(this.R?h="headers="+yi(Sp(N))+"&"+h:this.u&&Hu(d,this.u,N)),zu(this.h,P),this.Ra&&de(d,"TYPE","init"),this.S?(de(d,"$req",h),de(d,"SID","null"),P.U=!0,Lu(P,d,null)):Lu(P,d,h),this.I=2}}else this.I==3&&(a?xp(this,a):this.i.length==0||dp(this.h)||xp(this))};function xp(a,h){var d;h?d=h.l:d=a.V++;const m=Qt(a.J);de(m,"SID",a.M),de(m,"RID",d),de(m,"AID",a.K),Ci(a,m),a.u&&a.o&&Hu(m,a.u,a.o),d=new On(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Dp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),zu(a.h,d),Lu(d,m,h)}function Ci(a,h){a.H&&G(a.H,function(d,m){de(h,m,d)}),a.l&&G({},function(d,m){de(h,m,d)})}function Dp(a,h,d){d=Math.min(a.i.length,d);const m=a.l?c(a.l.Ka,a.l,a):null;e:{var P=a.i;let J=-1;for(;;){const Ne=["count="+d];J==-1?d>0?(J=P[0].g,Ne.push("ofs="+J)):J=0:Ne.push("ofs="+J);let le=!0;for(let be=0;be<d;be++){var N=P[be].g;const Yt=P[be].map;if(N-=J,N<0)J=Math.max(0,P[be].g-100),le=!1;else try{N="req"+N+"_"||"";try{var j=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Pr,Fn]of j){let jn=Fn;l(Fn)&&(jn=Du(Fn)),Ne.push(N+Pr+"="+encodeURIComponent(jn))}}catch(Pr){throw Ne.push(N+"type="+encodeURIComponent("_badmap")),Pr}}catch{m&&m(Yt)}}if(le){j=Ne.join("&");break e}}j=void 0}return a=a.i.splice(0,d),h.G=a,j}function Vp(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||v(),U||(F(),U=!0),E.add(h,a),a.A=0}}function qu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=mi(c(a.Da,a),bp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Op(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=mi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),ta(this),Op(this))};function Ku(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Op(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qt(a.na);de(h,"RID","rpc"),de(h,"SID",a.M),de(h,"AID",a.K),de(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(h,"TO",a.ia),de(h,"TYPE","xmlhttp"),Ci(a,h),a.u&&a.o&&Hu(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Jo(Qt(h)),d.u=null,d.R=!0,lp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ta(this),qu(this),st(19))};function ra(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Mp(a,h){var d=null;if(a.g==h){ra(a),Ku(a),a.g=null;var m=2}else if(Uu(a.h,h))d=h.G,pp(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;m=Qo(),rt(m,new rp(m,d)),na(a)}else Vp(a);else if(P=h.m,P==3||P==0&&h.X>0||!(m==1&&g0(a,h)||m==2&&qu(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function bp(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),m=a.Ua;const P=!m;m=new Mn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||vi(m,"https"),Jo(m),P?c0(m.toString(),d):h0(m.toString(),d)}else st(2);a.I=0,a.l&&a.l.pa(h),Lp(a),Np(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Lp(a){if(a.I=0,a.ja=[],a.l){const h=mp(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ja,h),x(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Fp(a,h,d){var m=d instanceof Mn?Qt(d):new Mn(d);if(m.g!="")h&&(m.g=h+"."+m.g),wi(m,m.u);else{var P=o.location;m=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const N=new Mn(null);m&&vi(N,m),h&&(N.g=h),P&&wi(N,P),d&&(N.h=d),m=N}return d=a.G,h=a.wa,d&&h&&de(m,d,h),de(m,"VER",a.ka),Ci(a,m),m}function jp(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Te(new $u({ab:d})):new Te(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Up(){}t=Up.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function sa(){}sa.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ke.call(this),this.g=new Pp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new us(this)}p(yt,Ke),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Wu(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Du(a),a=d);h.i.push(new n0(h.Ya++,a)),h.I==3&&na(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,yt.Z.N.call(this)};function zp(a){Vu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(zp,Vu);function Bp(){Ou.call(this),this.status=1}p(Bp,Ou);function us(a){this.g=a}p(us,Up),us.prototype.ra=function(){rt(this.g,"a")},us.prototype.qa=function(a){rt(this.g,new zp(a))},us.prototype.pa=function(a){rt(this.g,new Bp)},us.prototype.oa=function(){rt(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,pw=function(){return new sa},fw=function(){return Qo()},dw=Ar,Oh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,za=Yo,sp.COMPLETE="complete",hw=sp,Zf.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,Ui=Zf,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,cw=Te}).apply(typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{});const hg="@firebase/firestore",dg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new ou("@firebase/firestore");function hs(){return Gr.logLevel}function B(t,...e){if(Gr.logLevel<=ee.DEBUG){const n=e.map(Yd);Gr.debug(`Firestore (${si}): ${t}`,...n)}}function Rn(t,...e){if(Gr.logLevel<=ee.ERROR){const n=e.map(Yd);Gr.error(`Firestore (${si}): ${t}`,...n)}}function qs(t,...e){if(Gr.logLevel<=ee.WARN){const n=e.map(Yd);Gr.warn(`Firestore (${si}): ${t}`,...n)}}function Yd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,mw(t,r,n)}function mw(t,e,n){let r=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||mw(e,s,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class VA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OA{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new gw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class MA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new MA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=FA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Mh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return kc(s)===kc(i)?te(s,i):kc(s)?1:-1}return te(t.length,e.length)}const jA=55296,UA=57343;function kc(t){const e=t.charCodeAt(0);return e>=jA&&e<=UA}function Ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return te(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):Mh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ur.fromString(e.substring(4,e.length-2))}}class pe extends Zt{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const zA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Zt{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return zA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pg}static keyField(){return new $e([pg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(pe.fromString(e))}static fromName(e){return new W(pe.fromString(e).popFirst(5))}static empty(){return new W(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BA(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mg(t){if(!W.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gg(t){if(W.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _w(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Jd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function Qr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jd(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Uo(t,e){if(!_w(t))throw new H(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=-62135596800,_g=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*_g);return new ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yg)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_g}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Uo(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:Pe("string",ce._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ce(0,0))}static max(){return new Q(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=-1;function $A(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new ce(n+1,0):new ce(n,r));return new pr(s,W.empty(),e)}function HA(t){return new pr(t.readTime,t.key,ko)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(Q.min(),W.empty(),ko)}static max(){return new pr(Q.max(),W.empty(),ko)}}function WA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==qA)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function GA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}au.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=-1;function lu(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function QA(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="";function YA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vg(e)),e=XA(t.get(n),e);return vg(e)}function XA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case vw:n+="";break;default:n+=i}}return n}function vg(t){return t+vw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Eg(this.data.getIterator())}getIteratorFrom(e){return new Eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Me($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ew("Invalid base64 string: "+i):i}}(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const JA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=JA.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="server_timestamp",Iw="__type__",Sw="__previous_value__",Aw="__local_write_time__";function ef(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Iw])==null?void 0:r.stringValue)===Tw}function uu(t){const e=t.mapValue.fields[Sw];return ef(e)?uu(e):e}function Co(t){const e=mr(t.mapValue.fields[Aw].timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,s,i,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Sl="(default)";class Ro{constructor(e,n){this.projectId=e,this.database=n||Sl}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database===Sl}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="__type__",ek="__max__",Aa={mapValue:{}},Cw="__vector__",Al="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ef(t)?4:nk(t)?9007199254740991:tk(t)?10:11:K(28295,{value:t})}function cn(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mr(s.timestampValue),l=mr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gr(s.bytesValue).isEqual(gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ae(s.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ae(s.integerValue)===Ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ae(s.doubleValue),l=Ae(i.doubleValue);return o===l?Il(o)===Il(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(wg(o)!==wg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Po(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ae(i.integerValue||i.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Tg(t.timestampValue,e.timestampValue);case 4:return Tg(Co(t),Co(e));case 5:return Mh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=gr(i),u=gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=te(l[c],u[c]);if(f!==0)return f}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=te(Ae(i.latitude),Ae(o.latitude));return l!==0?l:te(Ae(i.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ig(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,k,x,D;const l=i.fields||{},u=o.fields||{},c=(g=l[Al])==null?void 0:g.arrayValue,f=(k=u[Al])==null?void 0:k.arrayValue,p=te(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:Ig(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Aa.mapValue&&o===Aa.mapValue)return 0;if(i===Aa.mapValue)return 1;if(o===Aa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Mh(u[p],f[p]);if(g!==0)return g;const k=Gs(l[u[p]],c[f[p]]);if(k!==0)return k}return te(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=mr(t),r=mr(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function Ig(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gs(n[s],r[s]);if(i)return i}return te(n.length,r.length)}function Qs(t){return bh(t)}function bh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bh(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function Ba(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uu(t);return e?16+Ba(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ba(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(i,o)=>{s+=i.length+Ba(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function Lh(t){return!!t&&"integerValue"in t}function tf(t){return!!t&&"arrayValue"in t}function Sg(t){return!!t&&"nullValue"in t}function Ag(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $a(t){return!!t&&"mapValue"in t}function tk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[kw])==null?void 0:r.stringValue)===Cw}function eo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return{...t}}function nk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ek}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=eo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(eo(this.value))}}function Rw(t){const e=[];return rs(t.fields,(n,r)=>{const s=new $e([n]);if($a(r)){const i=Rw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Q.min(),Q.min(),Q.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ze(e,1,n,Q.min(),r,s,0)}static newNoDocument(e,n){return new Ze(e,2,n,Q.min(),Q.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Q.min(),Q.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.position=e,this.inclusive=n}}function kg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n="asc"){this.field=e,this.dir=n}}function rk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{}class De extends Pw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ik(e,n,r):n==="array-contains"?new lk(e,r):n==="in"?new uk(e,r):n==="not-in"?new ck(e,r):n==="array-contains-any"?new hk(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ok(e,r):new ak(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gs(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Pw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new hn(e,n)}matches(e){return Nw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Nw(t){return t.op==="and"}function xw(t){return sk(t)&&Nw(t)}function sk(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Fh(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(xw(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function Dw(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Dw(o,s.filters[l]),!0):!1}(t,e):void K(19439)}function Vw(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Vw).join(" ,")+"}"}(t):"Filter"}class ik extends De{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class ok extends De{constructor(e,n){super(e,"in",n),this.keys=Ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ak extends De{constructor(e,n){super(e,"not-in",n),this.keys=Ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ow(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class lk extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tf(n)&&Po(n.arrayValue,this.value)}}class uk extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class ck extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Po(this.value.arrayValue,n)}}class hk extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Rg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dk(t,e,n,r,s,i,o)}function nf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.Te=n}return e.Te}function rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cg(t.startAt,e.startAt)&&Cg(t.endAt,e.endAt)}function jh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function fk(t,e,n,r,s,i,o,l){return new cu(t,e,n,r,s,i,o,l)}function sf(t){return new cu(t)}function Pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pk(t){return t.collectionGroup!==null}function to(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Cl(i,r))}),n.has($e.keyField().canonicalString())||e.Ie.push(new Cl($e.keyField(),r))}return e.Ie}function rn(t){const e=Y(t);return e.Ee||(e.Ee=mk(e,to(t))),e.Ee}function mk(t,e){if(t.limitType==="F")return Rg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Cl(s.field,i)});const n=t.endAt?new kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kl(t.startAt.position,t.startAt.inclusive):null;return Rg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Uh(t,e,n){return new cu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hu(t,e){return rf(rn(t),rn(e))&&t.limitType===e.limitType}function Mw(t){return`${nf(rn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vw(s)).join(", ")}]`),lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function du(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of to(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=kg(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,to(r),s)||r.endAt&&!function(o,l,u){const c=kg(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,to(r),s))}(t,e)}function gk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bw(t){return(e,n)=>{let r=!1;for(const s of to(t)){const i=yk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yk(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Gs(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new Ee(W.comparator);function Pn(){return _k}const Lw=new Ee(W.comparator);function zi(...t){let e=Lw;for(const n of t)e=e.insert(n.key,n);return e}function Fw(t){let e=Lw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return no()}function jw(){return no()}function no(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const vk=new Ee(W.comparator),wk=new Me(W.comparator);function ne(...t){let e=wk;for(const n of t)e=e.add(n);return e}const Ek=new Me(te);function Tk(){return Ek}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function Uw(t){return{integerValue:""+t}}function Ik(t,e){return QA(e)?Uw(e):of(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this._=void 0}}function Sk(t,e,n){return t instanceof Rl?function(s,i){const o={fields:{[Iw]:{stringValue:Tw},[Aw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ef(i)&&(i=uu(i)),i&&(o.fields[Sw]=i),{mapValue:o}}(n,e):t instanceof No?Bw(t,e):t instanceof xo?$w(t,e):function(s,i){const o=zw(s,i),l=Ng(o)+Ng(s.Ae);return Lh(o)&&Lh(s.Ae)?Uw(l):of(s.serializer,l)}(t,e)}function Ak(t,e,n){return t instanceof No?Bw(t,e):t instanceof xo?$w(t,e):n}function zw(t,e){return t instanceof Pl?function(r){return Lh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Rl extends fu{}class No extends fu{constructor(e){super(),this.elements=e}}function Bw(t,e){const n=Hw(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class xo extends fu{constructor(e){super(),this.elements=e}}function $w(t,e){let n=Hw(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class Pl extends fu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ng(t){return Ae(t.integerValue||t.doubleValue)}function Hw(t){return tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof No&&s instanceof No||r instanceof xo&&s instanceof xo?Ks(r.elements,s.elements,cn):r instanceof Pl&&s instanceof Pl?cn(r.Ae,s.Ae):r instanceof Rl&&s instanceof Rl}(t.transform,e.transform)}class Ck{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pu{}function Ww(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kw(t.key,Tn.none()):new zo(t.key,t.data,Tn.none());{const n=t.data,r=Rt.empty();let s=new Me($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new is(t.key,r,new zt(s.toArray()),Tn.none())}}function Rk(t,e,n){t instanceof zo?function(s,i,o){const l=s.value.clone(),u=Dg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,i,o){if(!Ha(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Dg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(qw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof zo?function(i,o,l,u){if(!Ha(i.precondition,o))return l;const c=i.value.clone(),f=Vg(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof is?function(i,o,l,u){if(!Ha(i.precondition,o))return l;const c=Vg(i.fieldTransforms,u,o),f=o.data;return f.setAll(qw(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Pk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=zw(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ks(r,s,(i,o)=>kk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends pu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class is extends pu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dg(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Ak(o,l,n[s]))}return r}function Vg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Sk(i,o,e))}return r}class Kw extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nk extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Rk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Ww(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>xg(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>xg(n,r))}}class af{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return vk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new af(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,se;function Ok(t){switch(t){case M.OK:return K(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function Gw(t){if(t===void 0)return Rn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ce.OK:return M.OK;case Ce.CANCELLED:return M.CANCELLED;case Ce.UNKNOWN:return M.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return M.INTERNAL;case Ce.UNAVAILABLE:return M.UNAVAILABLE;case Ce.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ce.NOT_FOUND:return M.NOT_FOUND;case Ce.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ce.ABORTED:return M.ABORTED;case Ce.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ce.DATA_LOSS:return M.DATA_LOSS;default:return K(39323,{code:t})}}(se=Ce||(Ce={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new ur([4294967295,4294967295],0);function Og(t){const e=Mk().encode(t),n=new uw;return n.update(e),new Uint8Array(n.digest())}function Mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ur([n,r],0),new ur([s,i],0)]}class lf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bi(`Invalid padding: ${n}`);if(r<0)throw new Bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ur.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ur.fromNumber(r)));return s.compare(bk)===1&&(s=new ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Og(e),[r,s]=Mg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Og(e),[r,s]=Mg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mu(Q.min(),s,new Ee(te),Pn(),ne())}}class Bo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Qw{constructor(e,n){this.targetId=e,this.Ce=n}}class Yw{constructor(e,n,r=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class bg{constructor(){this.ve=0,this.Fe=Lg(),this.Me=qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new Bo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Lg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Lk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pn(),this.Je=ka(),this.He=ka(),this.Ye=new Ee(te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(jh(i))if(r===0){const o=new W(i.path);this.et(n,o,Ze.newNoDocument(o,Q.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=gr(r).toUint8Array()}catch(u){if(u instanceof Ew)return qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new lf(o,s,i)}catch(u){return qs(u instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&jh(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ze.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ne();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new mu(e,n,this.Ye,this.je,r);return this.je=Pn(),this.Je=ka(),this.He=ka(),this.Ye=new Ee(te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new bg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Me(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Me(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new bg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ka(){return new Ee(W.comparator)}function Lg(){return new Ee(W.comparator)}const Fk={asc:"ASCENDING",desc:"DESCENDING"},jk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Uk={and:"AND",or:"OR"};class zk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zh(t,e){return t.useProto3Json||lu(e)?e:{value:e}}function Nl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Bk(t,e){return Nl(t,e.toTimestamp())}function sn(t){return oe(!!t,49232),Q.fromTimestamp(function(n){const r=mr(n);return new ce(r.seconds,r.nanos)}(t))}function uf(t,e){return Bh(t,e).canonicalString()}function Bh(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Jw(t){const e=pe.fromString(t);return oe(rE(e),10190,{key:e.toString()}),e}function $h(t,e){return uf(t.databaseId,e.path)}function Cc(t,e){const n=Jw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(eE(n))}function Zw(t,e){return uf(t.databaseId,e)}function $k(t){const e=Jw(t);return e.length===4?pe.emptyPath():eE(e)}function Hh(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eE(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Fg(t,e,n){return{name:$h(t,e),fields:n.value.mapValue.fields}}function Hk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),qe.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:Gw(c.code);return new H(f,c.message||"")}(o);n=new Yw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cc(t,r.document.name),i=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):Q.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Wa(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cc(t,r.document),i=r.readTime?sn(r.readTime):Q.min(),o=Ze.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Wa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cc(t,r.document),i=r.removedTargetIds||[];n=new Wa([],i,s,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Vk(s,i),l=r.targetId;n=new Qw(l,o)}}return n}function Wk(t,e){let n;if(e instanceof zo)n={update:Fg(t,e.key,e.value)};else if(e instanceof Kw)n={delete:$h(t,e.key)};else if(e instanceof is)n={update:Fg(t,e.key,e.data),updateMask:eC(e.fieldMask)};else{if(!(e instanceof Nk))return K(16599,{Vt:e.type});n={verify:$h(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Bk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function qk(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?sn(s.updateTime):sn(i);return o.isEqual(Q.min())&&(o=sn(i)),new Ck(o,s.transformResults||[])}(n,e))):[]}function Kk(t,e){return{documents:[Zw(t,e.path)]}}function Gk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Zw(t,s);const i=function(c){if(c.length!==0)return nE(hn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:fs(g.field),direction:Xk(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=zh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function Qk(t){let e=$k(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=tE(p);return g instanceof hn&&xw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new Cl(ps(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,lu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,k=p.values||[];return new kl(k,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,k=p.values||[];return new kl(k,g)}(n.endAt)),fk(e,s,o,i,l,"F",u,c)}function Yk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>tE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function Xk(t){return Fk[t]}function Jk(t){return jk[t]}function Zk(t){return Uk[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return $e.fromServerFormat(t.fieldPath)}function nE(t){return t instanceof De?function(n){if(n.op==="=="){if(Ag(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(Sg(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ag(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(Sg(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:Jk(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>nE(s));return r.length===1?r[0]:{compositeFilter:{op:Zk(n.op),filters:r}}}(t):K(54877,{filter:t})}function eC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,s,i=Q.min(),o=Q.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.yt=e}}function nC(t){const e=Qk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.Cn=new sC}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(pr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class sC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Me(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sE=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(sE,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ys(0)}static cr(){return new Ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="LruGarbageCollector",iC=1048576;function zg([t,e],[n,r]){const s=te(t,n);return s===0?te(e,r):s}class oC{constructor(e){this.Ir=e,this.buffer=new Me(zg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(Ug,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){oi(n)?B(Ug,"Ignoring IndexedDB error during garbage collection: ",n):await ii(n)}await this.Vr(3e5)})}}class lC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(au.ce);const r=new oC(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(jg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),hs()<=ee.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function uC(t,e){return new lC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ro(r.mutation,s,zt.empty(),ce.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Pn();const o=no(),l=function(){return no()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof is)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ro(f.mutation,c,f.mutation.getFieldMask(),ce.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new hC(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=no();let s=new Ee((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||zt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=jw();f.forEach(g=>{if(!i.has(g)){const k=Ww(n.get(g),r.get(g));k!==null&&p.set(g,k),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(br());let l=ko,u=i;return o.next(c=>O.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ne())).next(f=>({batchId:l,changes:Fw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const c=function(p,g){return new cu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=zi();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&ro(f.mutation,c,zt.empty(),ce.now()),du(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:nC(s.bundledQuery),readTime:sn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.overlays=new Ee(W.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=br(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=br(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dk(n,r));let i=this.qr.get(n);i===void 0&&(i=ne(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Qr=new Me(Le.$r),this.Ur=new Me(Le.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Le(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new pe([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new pe([])),r=new Le(n,e),s=new Le(n,e+1);let i=ne();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||te(e.Yr,n.Yr)}static Kr(e,n){return te(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Me(Le.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Le(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Zd:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(te);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Le(new W(i),0);let l=new Me(te);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Le(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.ri=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||WA(HA(f),r)<=0||(s.has(f.key)||du(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _C(this)}getSize(e){return O.resolve(this.size)}}class _C extends cC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.persistence=e,this.si=new ss(n=>nf(n),rf),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new cf,this.targetCount=0,this.ai=Ys.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.ui={},this.overlays={},this.ci=new au(0),this.li=!1,this.li=!0,this.hi=new mC,this.referenceDelegate=e(this),this.Pi=new vC(this),this.indexManager=new rC,this.remoteDocumentCache=function(s){return new yC(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new tC(n),this.Ii=new fC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new gC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new wC(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class wC extends KA{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new cf,this.Vi=null}static mi(e){return new hf(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=W.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,Q.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xl{constructor(e,n){this.persistence=e,this.pi=new ss(r=>YA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uC(this,n)}static mi(e,n){return new xl(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ba(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new df(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return d1()?8:GA(tt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new EC;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(hs()<=ee.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(hs()<=ee.DEBUG&&B("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(hs()<=ee.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):O.resolve())}ys(e,n){if(Pg(n))return O.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Uh(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Uh(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return Pg(n)||s.isEqual(Q.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?O.resolve(null):(hs()<=ee.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.vs(e,o,n,$A(s,ko)).next(l=>l))})}Ds(e,n){let r=new Me(bw(e));return n.forEach((s,i)=>{du(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return hs()<=ee.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ps.getDocumentsMatchingQuery(e,n,pr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="LocalStore",IC=3e8;class SC{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ee(te),this.xs=new ss(i=>nf(i),rf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function AC(t,e,n,r){return new SC(t,e,n,r)}async function oE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function kC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let k=O.resolve();return g.forEach(x=>{k=k.next(()=>f.getEntry(u,x)).next(D=>{const b=c.docVersions.get(x);oe(b!==null,48541),D.version.compareTo(b)<0&&(p.applyToRemoteDocument(D,c),D.isValidDocument()&&(D.setReadTime(c.commitVersion),f.addEntry(D)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function aE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function CC(t,e){const n=Y(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let k=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(qe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(D,b,w){return D.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=IC?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,k,f)&&l.push(n.Pi.updateTargetData(i,k))});let u=Pn(),c=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(RC(i,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(Q.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function RC(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(ff,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function PC(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Wh(t,e,n){const r=Y(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!oi(o))throw o;B(ff,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Bg(t,e,n){const r=Y(t);let s=Q.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Y(u),g=p.xs.get(f);return g!==void 0?O.resolve(p.Ms.get(g)):p.Pi.getTargetData(c,f)}(r,o,rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:Q.min(),n?i:ne())).next(l=>(xC(r,gk(e),l),{documents:l,Qs:i})))}function xC(t,e,n){let r=t.Os.get(e)||Q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class $g{constructor(){this.activeTargetIds=Tk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DC{constructor(){this.Mo=new $g,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="ConnectivityMonitor";class Wg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(Hg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(Hg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=null;function qh(){return Ca===null?Ca=function(){return 268435456+Math.round(2147483648*Math.random())}():Ca++,"0x"+Ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="RestConnection",OC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Sl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=qh(),l=this.zo(e,n.toUriEncodedString());B(Rc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(l),f=ni(c);return this.Jo(e,l,u,r,f).then(p=>(B(Rc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw qs(Rc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=OC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class LC extends MC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=qh();return new Promise((l,u)=>{const c=new cw;c.setWithCredentials(!0),c.listenOnce(hw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case za.NO_ERROR:const p=c.getResponseJson();B(Ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case za.TIMEOUT:B(Ye,`RPC '${e}' ${o} timed out`),u(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const g=c.getStatus();if(B(Ye,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let k=c.getResponseJson();Array.isArray(k)&&(k=k[0]);const x=k==null?void 0:k.error;if(x&&x.status&&x.message){const D=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(_)>=0?_:M.UNKNOWN}(x.status);u(new H(D,x.message))}else u(new H(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(M.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(Ye,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);B(Ye,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=qh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pw(),l=fw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");B(Ye,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let g=!1,k=!1;const x=new bC({Yo:b=>{k?B(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(g||(B(Ye,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),B(Ye,`RPC '${e}' stream ${s} sending:`,b),p.send(b))},Zo:()=>p.close()}),D=(b,w,_)=>{b.listen(w,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return D(p,Ui.EventType.OPEN,()=>{k||(B(Ye,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),D(p,Ui.EventType.CLOSE,()=>{k||(k=!0,B(Ye,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(p))}),D(p,Ui.EventType.ERROR,b=>{k||(k=!0,qs(Ye,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),x.a_(new H(M.UNAVAILABLE,"The operation could not be completed")))}),D(p,Ui.EventType.MESSAGE,b=>{var w;if(!k){const _=b.data[0];oe(!!_,16349);const A=_,V=(A==null?void 0:A.error)||((w=A[0])==null?void 0:w.error);if(V){B(Ye,`RPC '${e}' stream ${s} received error:`,V);const F=V.status;let U=function(T){const S=Ce[T];if(S!==void 0)return Gw(S)}(F),E=V.message;U===void 0&&(U=M.INTERNAL,E="Unknown error status: "+F+" with message "+V.message),k=!0,x.a_(new H(U,E)),p.close()}else B(Ye,`RPC '${e}' stream ${s} received:`,_),x.u_(_)}}),D(l,dw.STAT_EVENT,b=>{b.stat===Oh.PROXY?B(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Oh.NOPROXY&&B(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){return new zk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="PersistentStream";class uE{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(qg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(B(qg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FC extends uE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Hk(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?sn(o.readTime):Q.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=jh(u)?{documents:Kk(i,u)}:{query:Gk(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Xw(i,o.resumeToken);const c=zh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Nl(i,o.snapshotVersion.toTimestamp());const c=zh(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Yk(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.q_(n)}}class jC extends uE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=qk(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Hh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Wk(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{}class zC extends UC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Bh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(M.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Bh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class BC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="RemoteStore";class $C{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{os(this)&&(B(Yr,"Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.Ea.add(4),await $o(c),c.Ra.set("Unknown"),c.Ea.delete(4),await yu(c)}(this))})}),this.Ra=new BC(r,s)}}async function yu(t){if(os(t))for(const e of t.da)await e(!0)}async function $o(t){for(const e of t.da)await e(!1)}function cE(t,e){const n=Y(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),yf(n)?gf(n):ai(n).O_()&&mf(n,e))}function pf(t,e){const n=Y(t),r=ai(n);n.Ia.delete(e),r.O_()&&hE(n,e),n.Ia.size===0&&(r.O_()?r.L_():os(n)&&n.Ra.set("Unknown"))}function mf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ai(t).Y_(e)}function hE(t,e){t.Va.Ue(e),ai(t).Z_(e)}function gf(t){t.Va=new Lk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ai(t).start(),t.Ra.ua()}function yf(t){return os(t)&&!ai(t).x_()&&t.Ia.size>0}function os(t){return Y(t).Ea.size===0}function dE(t){t.Va=void 0}async function HC(t){t.Ra.set("Online")}async function WC(t){t.Ia.forEach((e,n)=>{mf(t,e)})}async function qC(t,e){dE(t),yf(t)?(t.Ra.ha(e),gf(t)):t.Ra.set("Unknown")}async function KC(t,e,n){if(t.Ra.set("Online"),e instanceof Yw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){B(Yr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof Wa?t.Va.Ze(e):e instanceof Qw?t.Va.st(e):t.Va.tt(e),!n.isEqual(Q.min()))try{const r=await aE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),hE(i,u);const p=new Jn(f.target,u,c,f.sequenceNumber);mf(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(Yr,"Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!oi(e))throw e;t.Ea.add(1),await $o(t),t.Ra.set("Offline"),n||(n=()=>aE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(Yr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await yu(t)})}function fE(t,e){return e().catch(n=>Dl(t,n,e))}async function _u(t){const e=Y(t),n=_r(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zd;for(;GC(e);)try{const s=await PC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,QC(e,s)}catch(s){await Dl(e,s)}pE(e)&&mE(e)}function GC(t){return os(t)&&t.Ta.length<10}function QC(t,e){t.Ta.push(e);const n=_r(t);n.O_()&&n.X_&&n.ea(e.mutations)}function pE(t){return os(t)&&!_r(t).x_()&&t.Ta.length>0}function mE(t){_r(t).start()}async function YC(t){_r(t).ra()}async function XC(t){const e=_r(t);for(const n of t.Ta)e.ea(n.mutations)}async function JC(t,e,n){const r=t.Ta.shift(),s=af.from(r,e,n);await fE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _u(t)}async function ZC(t,e){e&&_r(t).X_&&await async function(r,s){if(function(o){return Ok(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();_r(r).B_(),await fE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _u(r)}}(t,e),pE(t)&&mE(t)}async function Kg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B(Yr,"RemoteStore received new credentials");const r=os(n);n.Ea.add(3),await $o(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await yu(n)}async function eR(t,e){const n=Y(t);e?(n.Ea.delete(2),await yu(n)):e||(n.Ea.add(2),await $o(n),n.Ra.set("Unknown"))}function ai(t){return t.ma||(t.ma=function(n,r,s){const i=Y(n);return i.sa(),new FC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:HC.bind(null,t),t_:WC.bind(null,t),r_:qC.bind(null,t),H_:KC.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),yf(t)?gf(t):t.Ra.set("Unknown")):(await t.ma.stop(),dE(t))})),t.ma}function _r(t){return t.fa||(t.fa=function(n,r,s){const i=Y(n);return i.sa(),new jC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:YC.bind(null,t),r_:ZC.bind(null,t),ta:XC.bind(null,t),na:JC.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await _u(t)):(await t.fa.stop(),t.Ta.length>0&&(B(Yr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new _f(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),oi(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=zi(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.ga=new Ee(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Xs(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class nR{constructor(){this.queries=Qg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Y(n),i=s.queries;s.queries=Qg(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function Qg(){return new ss(t=>Mw(t),hu)}async function gE(t,e){const n=Y(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new tR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vf(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&wf(n)}async function yE(t,e){const n=Y(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rR(t,e){const n=Y(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&wf(n)}function sR(t,e,n){const r=Y(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function wf(t){t.Ca.forEach(e=>{e.next()})}var Kh,Yg;(Yg=Kh||(Kh={})).Ma="default",Yg.Cache="cache";class _E{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Kh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.key=e}}class wE{constructor(e){this.key=e}}class iR{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ne(),this.mutatedKeys=ne(),this.eu=bw(e),this.tu=new Vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Gg,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),k=du(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let b=!1;g&&k?g.data.isEqual(k.data)?x!==D&&(r.track({type:3,doc:k}),b=!0):this.su(g,k)||(r.track({type:2,doc:k}),b=!0,(u&&this.eu(k,u)>0||c&&this.eu(k,c)<0)&&(l=!0)):!g&&k?(r.track({type:0,doc:k}),b=!0):g&&!k&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(k?(o=o.add(k),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(k,x){const D=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:b})}};return D(k)-D(x)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Xs(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ne(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new wE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new vE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ne();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ef="SyncEngine";class oR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aR{constructor(e){this.key=e,this.hu=!1}}class lR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ss(l=>Mw(l),hu),this.Iu=new Map,this.Eu=new Set,this.du=new Ee(W.comparator),this.Au=new Map,this.Ru=new cf,this.Vu={},this.mu=new Map,this.fu=Ys.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uR(t,e,n=!0){const r=kE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await EE(r,e,n,!0),s}async function cR(t,e){const n=kE(t);await EE(n,e,!0,!1)}async function EE(t,e,n,r){const s=await NC(t.localStore,rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await hR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&cE(t.remoteStore,s),l}async function hR(t,e,n,r,s){t.pu=(p,g,k)=>async function(D,b,w,_){let A=b.view.ru(w);A.Cs&&(A=await Bg(D.localStore,b.query,!1).then(({documents:E})=>b.view.ru(E,A)));const V=_&&_.targetChanges.get(b.targetId),F=_&&_.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(A,D.isPrimaryClient,V,F);return Jg(D,b.targetId,U.au),U.snapshot}(t,p,g,k);const i=await Bg(t.localStore,e,!0),o=new iR(e,i.Qs),l=o.ru(i.documents),u=Bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Jg(t,n,c.au);const f=new oR(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function dR(t,e,n){const r=Y(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!hu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pf(r.remoteStore,s.targetId),Gh(r,s.targetId)}).catch(ii)):(Gh(r,s.targetId),await Wh(r.localStore,s.targetId,!0))}async function fR(t,e){const n=Y(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pf(n.remoteStore,r.targetId))}async function pR(t,e,n){const r=ER(t);try{const s=await function(o,l){const u=Y(o),c=ce.now(),f=l.reduce((k,x)=>k.add(x.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=Pn(),D=ne();return u.Ns.getEntries(k,f).next(b=>{x=b,x.forEach((w,_)=>{_.isValidDocument()||(D=D.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,x)).next(b=>{p=b;const w=[];for(const _ of l){const A=Pk(_,p.get(_.key).overlayedDocument);A!=null&&w.push(new is(_.key,A,Rw(A.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,c,w,l)}).next(b=>{g=b;const w=b.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(k,b.batchId,w)})}).then(()=>({batchId:g.batchId,changes:Fw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ee(te)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ho(r,s.changes),await _u(r.remoteStore)}catch(s){const i=vf(s,"Failed to persist write");n.reject(i)}}async function TE(t,e){const n=Y(t);try{const r=await CC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?oe(o.hu,14607):s.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await Ho(n,r,e)}catch(r){await ii(r)}}function Xg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(l)&&(c=!0)}),c&&wf(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mR(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ee(W.comparator);o=o.insert(i,Ze.newNoDocument(i,Q.min()));const l=ne().add(i),u=new mu(Q.min(),new Map,new Ee(te),o,l);await TE(r,u),r.du=r.du.remove(i),r.Au.delete(e),Tf(r)}else await Wh(r.localStore,e,!1).then(()=>Gh(r,e,n)).catch(ii)}async function gR(t,e){const n=Y(t),r=e.batch.batchId;try{const s=await kC(n.localStore,e);SE(n,r,null),IE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ho(n,s)}catch(s){await ii(s)}}async function yR(t,e,n){const r=Y(t);try{const s=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);SE(r,e,n),IE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ho(r,s)}catch(s){await ii(s)}}function IE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function SE(t,e,n){const r=Y(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||AE(t,r)})}function AE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(pf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Tf(t))}function Jg(t,e,n){for(const r of n)r instanceof vE?(t.Ru.addReference(r.key,e),_R(t,r)):r instanceof wE?(B(Ef,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||AE(t,r.key)):K(19791,{wu:r})}function _R(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(B(Ef,"New document in limbo: "+n),t.Eu.add(r),Tf(t))}function Tf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(pe.fromString(e)),r=t.fu.next();t.Au.set(r,new aR(n)),t.du=t.du.insert(n,r),cE(t.remoteStore,new Jn(rn(sf(n.path)),r,"TargetPurposeLimboResolution",au.ce))}}async function Ho(t,e,n){const r=Y(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=df.As(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(c,g=>O.forEach(g.Es,k=>f.persistence.referenceDelegate.addReference(p,g.targetId,k)).next(()=>O.forEach(g.ds,k=>f.persistence.referenceDelegate.removeReference(p,g.targetId,k)))))}catch(p){if(!oi(p))throw p;B(ff,"Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const k=f.Ms.get(g),x=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(x);f.Ms=f.Ms.insert(g,D)}}}(r.localStore,i))}async function vR(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B(Ef,"User change. New user:",e.toKey());const r=await oE(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ho(n,r.Ls)}}function wR(t,e){const n=Y(t),r=n.Au.get(e);if(r&&r.hu)return ne().add(r.key);{let s=ne();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function kE(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mR.bind(null,e),e.Pu.H_=rR.bind(null,e.eventManager),e.Pu.yu=sR.bind(null,e.eventManager),e}function ER(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yR.bind(null,e),e}class Vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return AC(this.persistence,new TC,e.initialUser,this.serializer)}Cu(e){return new iE(hf.mi,this.serializer)}Du(e){return new DC}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vl.provider={build:()=>new Vl};class TR extends Vl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof xl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new aC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new iE(r=>xl.mi(r,n),this.serializer)}}class Qh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vR.bind(null,this.syncEngine),await eR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nR}()}createDatastore(e){const n=gu(e.databaseInfo.databaseId),r=function(i){return new LC(i)}(e.databaseInfo);return function(i,o,l,u){return new zC(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new $C(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xg(this.syncEngine,n,0),function(){return Wg.v()?new Wg:new VC}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const p=new lR(s,i,o,l,u,c);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Y(s);B(Yr,"RemoteStore shutting down."),i.Ea.add(5),await $o(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Qh.provider={build:()=>new Qh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="FirestoreClient";class IR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=Xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{B(vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress(),B(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await oE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SR(t);B(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Kg(e.remoteStore,s)),t._onlineComponents=e}async function SR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(vr,"Using user provided OfflineComponentProvider");try{await Nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;qs("Error using user provided cache. Falling back to memory cache: "+n),await Nc(t,new Vl)}}else B(vr,"Using default OfflineComponentProvider"),await Nc(t,new TR(void 0));return t._offlineComponents}async function RE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(vr,"Using user provided OnlineComponentProvider"),await Zg(t,t._uninitializedComponentsProvider._online)):(B(vr,"Using default OnlineComponentProvider"),await Zg(t,new Qh))),t._onlineComponents}function AR(t){return RE(t).then(e=>e.syncEngine)}async function PE(t){const e=await RE(t),n=e.eventManager;return n.onListen=uR.bind(null,e.syncEngine),n.onUnlisten=dR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fR.bind(null,e.syncEngine),n}function kR(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new CE({next:g=>{f.Nu(),o.enqueueAndForget(()=>yE(i,p));const k=g.docs.has(l);!k&&g.fromCache?c.reject(new H(M.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&g.fromCache&&u&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new _E(sf(l.path),f,{includeMetadataChanges:!0,qa:!0});return gE(i,p)}(await PE(t),t.asyncQueue,e,n,r)),r.promise}function CR(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new CE({next:g=>{f.Nu(),o.enqueueAndForget(()=>yE(i,p)),g.fromCache&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new _E(l,f,{includeMetadataChanges:!0,qa:!0});return gE(i,p)}(await PE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firestore.googleapis.com",ty=!0;class ny{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xE,this.ssl=ty}else this.host=e.host,this.ssl=e.ssl??ty;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iC)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DA;switch(r.type){case"firstParty":return new bA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ey.get(n);r&&(B("ComponentProvider","Removing Datastore"),ey.delete(n),r.terminate())}(this),Promise.resolve()}}function RR(t,e,n,r={}){var c;t=Qr(t,vu);const s=ni(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Jv(`https://${l}`),Zv("Firestore",!0)),i.host!==xE&&i.host!==l&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!fr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Xe.MOCK_USER;else{f=s1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Xe(g)}t._authCredentials=new VA(new gw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wu(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Uo(n,Oe._jsonSchema))return new Oe(e,r||null,new W(pe.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:Pe("string",Oe._jsonSchemaVersion),referencePath:Pe("string")};class cr extends wu{constructor(e,n,r){super(e,n,sf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new W(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function If(t,e,...n){if(t=nt(t),yw("collection","path",e),t instanceof vu){const r=pe.fromString(e,...n);return gg(r),new cr(t,null,r)}{if(!(t instanceof Oe||t instanceof cr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return gg(r),new cr(t.firestore,null,r)}}function DE(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Xd.newId()),yw("doc","path",e),t instanceof vu){const r=pe.fromString(e,...n);return mg(r),new Oe(t,null,new W(r))}{if(!(t instanceof Oe||t instanceof cr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return mg(r),new Oe(t.firestore,t instanceof cr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="AsyncQueue";class sy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lE(this,"async_queue_retry"),this._c=()=>{const r=Pc();r&&B(ry,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new En;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!oi(e))throw e;B(ry,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Rn("INTERNAL UNHANDLED ERROR: ",iy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=_f.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:iy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function iy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Eu extends vu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new sy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sy(e),this._firestoreClient=void 0,await e}}}function PR(t,e){const n=typeof t=="object"?t:Qd(),r=typeof t=="string"?t:Sl,s=ns(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=n1("firestore");i&&RR(s,...i)}return s}function Sf(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NR(t),t._firestoreClient}function NR(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,c,f){return new ZA(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,NE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new IR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(qe.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Uo(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Pe("string",Pt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Uo(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:Pe("string",on._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Uo(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new an(e.vectorValues);throw new H(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:Pe("string",an._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=/^__.*__$/;class DR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}function OE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class kf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new kf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ol(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(OE(this.Ac)&&xR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class VR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gu(e)}Cc(e,n,r,s=!1){return new kf({Ac:e,methodName:n,Dc:r,path:$e.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function OR(t){const e=t._freezeSettings(),n=gu(t._databaseId);return new VR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MR(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);FE("Data must be an object, but it was:",o,r);const l=bE(r,o);let u,c;if(i.merge)u=new zt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=bR(e,p,n);if(!o.contains(g))throw new H(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FR(f,g)||f.push(g)}u=new zt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new DR(new Rt(l),u,c)}function ME(t,e){if(LE(t=nt(t)))return FE("Unsupported field value:",e,t),bE(t,e);if(t instanceof VE)return function(r,s){if(!OE(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=ME(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ik(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ce.fromDate(r);return{timestampValue:Nl(s.serializer,i)}}if(r instanceof ce){const i=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nl(s.serializer,i)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Xw(s.serializer,r._byteString)};if(r instanceof Oe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof an)return function(o,l){return{mapValue:{fields:{[kw]:{stringValue:Cw},[Al]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return of(l.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Jd(r)}`)}(t,e)}function bE(t,e){const n={};return ww(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=ME(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function LE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ce||t instanceof on||t instanceof Pt||t instanceof Oe||t instanceof VE||t instanceof an)}function FE(t,e,n){if(!LE(n)||!_w(n)){const r=Jd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function bR(t,e,n){if((e=nt(e))instanceof Af)return e._internalPath;if(typeof e=="string")return jE(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const LR=new RegExp("[~\\*/\\[\\]]");function jE(t,e,n){if(e.search(LR)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Af(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function FR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jR extends UE{data(){return super.data()}}function zE(t,e){return typeof e=="string"?jE(t,e):e instanceof Af?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zR{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Al].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ae(o.doubleValue));return new an(n)}convertGeoPoint(e){return new on(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=mr(e);return new ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);oe(rE(r),9688,{name:e});const s=new Ro(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zr extends UE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",zr._jsonSchema={type:Pe("string",zr._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class qa extends zr{data(e={}){return super.data(e)}}class Os{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:$R(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $R(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t){t=Qr(t,Oe);const e=Qr(t.firestore,Eu);return kR(Sf(e),t._key).then(n=>KR(e,t,n))}Os._jsonSchemaVersion="firestore/querySnapshot/1.0",Os._jsonSchema={type:Pe("string",Os._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class BE extends zR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function Cf(t){t=Qr(t,wu);const e=Qr(t.firestore,Eu),n=Sf(e),r=new BE(e);return UR(t._query),CR(n,t._query).then(s=>new Os(e,r,t,s))}function WR(t,e,n){t=Qr(t,Oe);const r=Qr(t.firestore,Eu),s=BR(t.converter,e,n);return qR(r,[MR(OR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function qR(t,e){return function(r,s){const i=new En;return r.asyncQueue.enqueueAndForget(async()=>pR(await AR(r),s,i)),i.promise}(Sf(t),e)}function KR(t,e,n){const r=n.docs.get(e._key),s=new BE(t);return new zr(t,s,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){si=s})(ri),un(new Kt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Eu(new OA(r.getProvider("auth-internal")),new LA(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(c.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dt(hg,dg,e),Dt(hg,dg,"esm2020")})();function GR(){const t=new Date("2025-04-12T00:00:00Z"),e=new Date,n=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),0,0,0,0)),s=1e3*60*60*24*7,i=Math.floor((n.getTime()-t.getTime())/s),o=Math.floor(i/2),l=new Date(t.getTime()+o*2*s),u=QR(l),c=new Date(u.getTime()+s);return[Do(u),Do(c)]}function QR(t){const e=new Date(t),n=e.getUTCDay(),r=n===0?6:n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function YR(t){const e=Do(t.week1Timesheets[0].date),n=Do(t.week2Timesheets[0].date);return new Map([[e,oy(e,t.week1Timesheets)],[n,oy(n,t.week2Timesheets)]])}function oy(t,e){return{...Object.fromEntries(e.map(r=>[Do(r.date),r.toJSONWithSave()])),mondayDate:t,updatedAt:ce.now()}}function XR(t){const e=new Map;for(const[n,r]of Object.entries(t))n==="mondayDate"||n==="updatedAt"||n==="adminUnlocked"||e.set(n,So.fromJSON(new Date(n),r));return e}function JR(t){const e=new Date(t);return e.setUTCHours(0,0,0,0),Array.from({length:7},(n,r)=>{const s=new Date(e);return s.setUTCDate(s.getUTCDate()+r),So.createDefault(s)})}function Do(t){return t.toISOString().slice(0,10)}function $E(t){return(typeof t=="string"?new Date(t):t).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}const ZR=(t,e)=>`${t.toLocaleDateString("en-US",{month:"short",day:"numeric"})} - ${e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`;function eP({userName:t,timesheets:e,onSignOut:n,onSubmit:r,onSelectTimesheet:s}){if(!e||!t)return y.jsx("div",{children:"Error"});const i=(o,l,u)=>{const c=o.date;let f="-";if(o.startTime&&o.endTime){const g=o.startTime.split(":").map(Number),k=o.endTime.split(":").map(Number),x=g[0]*60+g[1];let b=k[0]*60+k[1]-x;if(o.breakLength){const w=o.breakLength.split(":").map(Number),_=(w[0]||0)*60+(w[1]||0);b-=_}b>0&&(f=(b/60).toFixed(1))}const p={new:"New",edited:"Edited",saved:"Saved"};return y.jsxs("tr",{onClick:()=>s(u,l),className:`home-table-row home-table-row-${o.status}`,children:[y.jsx("td",{className:"home-table-date",children:$E(c)}),y.jsx("td",{className:"home-table-site",children:(o==null?void 0:o.site)||"-"}),y.jsx("td",{className:"home-table-hours",children:f}),y.jsx("td",{className:"home-table-employees",children:o!=null&&o.employees?(()=>{const g=o.employees.filter(k=>k.name&&k.name.trim()!=="");return g.length>0?g.length:"-"})():"-"}),y.jsx("td",{className:"home-table-subcontractors",children:o!=null&&o.subcontractors?(()=>{const g=o.subcontractors.filter(k=>k.name&&k.name.trim()!=="");return g.length>0?g.length:"-"})():"-"}),y.jsx("td",{className:"home-table-status",children:y.jsx("span",{className:`home-day-status home-day-status-${o.status}`,children:p[o.status]||o.status})})]},c.toISOString().split("T")[0])};return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"section timesheet-week-nav-section",children:y.jsxs("div",{className:"date-navigation",children:[y.jsx("button",{className:"submit-btn timesheet-back-button",onClick:n,children:"Log Out"}),y.jsx("button",{className:"submit-btn timesheet-back-button",onClick:r,children:"Submit"})]})}),y.jsxs("div",{className:"section home-header",children:[y.jsxs("h2",{className:"home-title",children:[t,"'s Timesheets"]}),y.jsx("h3",{className:"home-period",children:ZR(e.week1Timesheets.at(0).date,e.week1Timesheets.at(-1).date)}),y.jsxs("div",{className:"home-week-section",children:[y.jsx("h4",{className:"home-week-title",children:"Week 1"}),y.jsxs("table",{className:"home-timesheets-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Date"}),y.jsx("th",{children:"Site"}),y.jsx("th",{children:"Hours"}),y.jsx("th",{children:"Employees"}),y.jsx("th",{children:"Subcontractors"}),y.jsx("th",{children:"Status"})]})}),y.jsx("tbody",{children:e.week1Timesheets.map((o,l)=>i(o,l,!0))})]})]}),y.jsxs("div",{className:"home-week-section",children:[y.jsx("h4",{className:"home-week-title",children:"Week 2"}),y.jsxs("table",{className:"home-timesheets-table",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Date"}),y.jsx("th",{children:"Site"}),y.jsx("th",{children:"Hours"}),y.jsx("th",{children:"Employees"}),y.jsx("th",{children:"Subcontractors"}),y.jsx("th",{children:"Status"})]})}),y.jsx("tbody",{children:e.week2Timesheets.map((o,l)=>i(o,l,!1))})]})]})]})]})}const tP=({timesheet:t,onUpdate:e,onTimeClick:n,disabled:r=!1,sites:s})=>y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"user-info-row",children:[y.jsxs("div",{className:"input-container",children:[y.jsxs("div",{className:"input-row",children:[y.jsx("label",{children:"Site:"}),y.jsxs("select",{value:t.site||"",onChange:i=>{const o=i.target.value,l={site:o};o&&!t.startTime&&!t.endTime&&(l.startTime="07:00",l.endTime="15:30",l.breakLength="00:30"),e(l)},disabled:r,style:{width:"100%",maxWidth:"250px",padding:"0",marginTop:"0",border:"none",background:"transparent",textAlign:"right",fontSize:"inherit",fontFamily:"inherit",color:t.site?"inherit":"#999",cursor:r?"not-allowed":"pointer"},children:[y.jsx("option",{value:"",children:"Select a site"}),s.map(i=>y.jsx("option",{value:i,children:i},i))]})]}),y.jsxs("div",{className:"input-row",children:[y.jsx("label",{children:"Weather:"}),y.jsx("input",{type:"text",placeholder:"Sunny · 29°C",value:t.weather,onChange:i=>e({weather:i.target.value}),disabled:r})]})]}),y.jsx("div",{className:"user-time-container",children:y.jsxs("div",{className:"user-time-row",children:[y.jsxs("div",{className:"user-time-row-item",children:[y.jsx("label",{children:"Start:"}),y.jsx("div",{className:"time-cell user-time-input",onClick:()=>!r&&n("startTime"),style:{cursor:r?"not-allowed":"pointer",opacity:r?.6:1},children:y.jsx("span",{className:"time-display",children:t.startTime||"--:--"})})]}),y.jsxs("div",{className:"user-time-row-item",children:[y.jsx("label",{children:"End:"}),y.jsx("div",{className:"time-cell user-time-input",onClick:()=>!r&&n("endTime"),style:{cursor:r?"not-allowed":"pointer",opacity:r?.6:1},children:y.jsx("span",{className:"time-display",children:t.endTime||"--:--"})})]}),y.jsxs("div",{className:"user-time-row-item",children:[y.jsx("label",{children:"Break:"}),y.jsx("div",{className:"time-cell user-time-input",onClick:()=>!r&&n("breakLength"),style:{cursor:r?"not-allowed":"pointer",opacity:r?.6:1},children:y.jsx("span",{className:"time-display",children:t.breakLength?(()=>{const i=t.breakLength,[o,l]=i.split(":").map(Number);return`${(o||0)*60+(l||0)} min`})():"-- min"})})]})]})})]}),y.jsx("div",{className:"notes-container",children:y.jsxs("div",{className:"notes-item",children:[y.jsx("label",{htmlFor:"tasksCompletedInput",children:"Tasks Completed"}),y.jsx("textarea",{id:"tasksCompletedInput",rows:5,placeholder:"Describe the tasks completed today...",value:t.tasksCompleted,onChange:i=>e({tasksCompleted:i.target.value}),disabled:r})]})})]}),nP=({employeeRows:t,employees:e,onAdd:n,onEdit:r,onEditName:s,onDelete:i,onTimeClick:o,disabled:l=!1})=>y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"section-header",children:y.jsx("h2",{children:"Employees"})}),y.jsxs("table",{id:"employeeTable",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Name"}),y.jsx("th",{children:"Start"}),y.jsx("th",{children:"End"}),y.jsx("th",{children:"Tasks"}),y.jsx("th",{})]})}),y.jsxs("tbody",{children:[t.map((u,c)=>y.jsxs("tr",{children:[y.jsx("td",{children:y.jsxs("select",{value:u.name||"",onChange:f=>!l&&s(c,f.target.value),disabled:l,style:{width:"100%",padding:"2px 4px",border:"none",background:"transparent",fontSize:"12px",color:u.name?"#333":"#999",cursor:l?"not-allowed":"pointer",textAlign:"left"},children:[y.jsx("option",{value:"",children:"Select"}),e.map(f=>y.jsx("option",{value:f,children:f},f))]})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:l?"not-allowed":"pointer",opacity:l?.6:1},onClick:()=>!l&&o(c,"startTime"),children:y.jsx("span",{className:"time-display",children:u.startTime||"09:00"})})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:l?"not-allowed":"pointer",opacity:l?.6:1},onClick:()=>!l&&o(c,"endTime"),children:y.jsx("span",{className:"time-display",children:u.endTime||"15:30"})})}),y.jsx("td",{children:y.jsx("div",{className:"work-desc-cell",onClick:()=>!l&&r(c),style:{cursor:l?"not-allowed":"pointer",opacity:l?.6:1},children:y.jsx("span",{className:`work-desc-display ${u.tasks?"":"empty"}`,children:u.tasks||"Click to add"})})}),y.jsx("td",{children:y.jsx("button",{className:"delete-btn",onClick:()=>!l&&i(c),disabled:l,title:"Delete",children:"×"})})]},c)),y.jsxs("tr",{children:[y.jsx("td",{children:y.jsxs("select",{value:"",onChange:u=>{u.target.value&&!l&&(n(),s(t.length,u.target.value))},disabled:l,style:{width:"100%",padding:"4px 8px",border:"none",background:"transparent",fontSize:"14px",color:"#999",cursor:l?"not-allowed":"pointer",textAlign:"left"},children:[y.jsx("option",{value:"",children:"Select"}),e.map(u=>y.jsx("option",{value:u,children:u},u))]})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:"not-allowed",opacity:.5},children:y.jsx("span",{className:"time-display",children:"--:--"})})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:"not-allowed",opacity:.5},children:y.jsx("span",{className:"time-display",children:"--:--"})})}),y.jsx("td",{children:y.jsx("div",{className:"work-desc-cell",style:{cursor:"not-allowed",opacity:.5},children:y.jsx("span",{className:"work-desc-display empty",children:"--"})})}),y.jsx("td",{})]})]})]})]}),rP=({subcontractorRows:t,onAdd:e,onEdit:n,onEditName:r,onDelete:s,onTimeClick:i,disabled:o=!1})=>y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"section-header",children:y.jsx("h2",{children:"Subcontractors"})}),y.jsxs("table",{id:"subTable",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Name"}),y.jsx("th",{children:"Start"}),y.jsx("th",{children:"End"}),y.jsx("th",{children:"Tasks"}),y.jsx("th",{})]})}),y.jsxs("tbody",{children:[t.map((l,u)=>y.jsxs("tr",{children:[y.jsx("td",{children:y.jsx("div",{className:"sub-name-cell",onClick:()=>!o&&r&&r(u),style:{cursor:o?"not-allowed":"pointer",opacity:o?.6:1},children:y.jsx("span",{className:`sub-name-display ${l.name?"":"empty"}`,children:l.name||"Click to add"})})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:o?"not-allowed":"pointer",opacity:o?.6:1},onClick:()=>!o&&i(u,"startTime"),children:y.jsx("span",{className:"time-display",children:l.startTime||"09:00"})})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:o?"not-allowed":"pointer",opacity:o?.6:1},onClick:()=>!o&&i(u,"endTime"),children:y.jsx("span",{className:"time-display",children:l.endTime||"15:30"})})}),y.jsx("td",{children:y.jsx("div",{className:"work-desc-cell",onClick:()=>!o&&n(u),style:{cursor:o?"not-allowed":"pointer",opacity:o?.6:1},children:y.jsx("span",{className:`work-desc-display ${l.tasks?"":"empty"}`,children:l.tasks||"Click to add"})})}),y.jsx("td",{children:y.jsx("button",{className:"delete-btn",onClick:()=>!o&&s(u),disabled:o,title:"Delete",children:"×"})})]},u)),y.jsxs("tr",{children:[y.jsx("td",{children:y.jsx("div",{className:"sub-name-cell",onClick:()=>{!o&&r&&(e(),r(t.length))},style:{cursor:o?"not-allowed":"pointer",opacity:o?.6:1},children:y.jsx("span",{className:"sub-name-display empty",children:"Click to add"})})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:"not-allowed",opacity:.5},children:y.jsx("span",{className:"time-display",children:"--:--"})})}),y.jsx("td",{children:y.jsx("div",{className:"time-cell",style:{display:"inline-block",cursor:"not-allowed",opacity:.5},children:y.jsx("span",{className:"time-display",children:"--:--"})})}),y.jsx("td",{children:y.jsx("div",{className:"work-desc-cell",style:{cursor:"not-allowed",opacity:.5},children:y.jsx("span",{className:"work-desc-display empty",children:"--"})})}),y.jsx("td",{})]})]})]})]}),sP=({plantRows:t,plant:e,onAdd:n,onEdit:r,onEditName:s,onDelete:i,disabled:o=!1})=>y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"section-header",children:y.jsx("h2",{children:"Plant/Equipment"})}),y.jsxs("table",{id:"plantTable",children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Name"}),y.jsx("th",{children:"Tasks"}),y.jsx("th",{})]})}),y.jsxs("tbody",{children:[t.map((l,u)=>y.jsxs("tr",{children:[y.jsx("td",{children:y.jsxs("select",{value:l.name||"",onChange:c=>!o&&s(u,c.target.value),disabled:o,style:{width:"100%",padding:"2px 4px",border:"none",background:"transparent",fontSize:"12px",color:l.name?"#333":"#999",cursor:o?"not-allowed":"pointer",textAlign:"left"},children:[y.jsx("option",{value:"",children:"Select"}),e.map(c=>y.jsx("option",{value:c,children:c},c))]})}),y.jsx("td",{children:y.jsx("div",{className:"work-desc-cell",onClick:()=>!o&&r(u),style:{cursor:o?"not-allowed":"pointer",opacity:o?.6:1},children:y.jsx("span",{className:`work-desc-display ${l.tasks?"":"empty"}`,children:l.tasks||"Click to add"})})}),y.jsx("td",{children:y.jsx("button",{className:"delete-btn",onClick:()=>!o&&i(u),disabled:o,title:"Delete",children:"×"})})]},u)),y.jsxs("tr",{children:[y.jsx("td",{children:y.jsxs("select",{value:"",onChange:l=>{l.target.value&&!o&&(n(),s(e.length,l.target.value))},disabled:o,style:{width:"100%",padding:"4px 8px",border:"none",background:"transparent",fontSize:"14px",color:"#999",cursor:o?"not-allowed":"pointer",textAlign:"left"},children:[y.jsx("option",{value:"",children:"Select"}),e.map(l=>y.jsx("option",{value:l,children:l},l))]})}),y.jsx("td",{children:y.jsx("div",{className:"work-desc-cell",style:{cursor:"not-allowed",opacity:.5},children:y.jsx("span",{className:"work-desc-display empty",children:"--"})})}),y.jsx("td",{})]})]})]})]}),iP=({title:t,value:e,onSave:n,onClose:r})=>{const[s,i]=ue.useState(e),o=()=>{n(s)};return y.jsx("div",{className:"modal",onClick:r,children:y.jsxs("div",{className:"modal-content",onClick:l=>l.stopPropagation(),children:[y.jsxs("div",{className:"modal-header",children:[y.jsx("h3",{children:t}),y.jsx("span",{className:"modal-close",onClick:r,children:"×"})]}),y.jsx("div",{className:"modal-body",children:y.jsx("input",{type:"time",value:s,onChange:l=>i(l.target.value),style:{width:"100%",padding:"10px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"Arial, sans-serif"}})}),y.jsxs("div",{className:"modal-footer",children:[y.jsx("button",{className:"modal-btn",onClick:o,children:"Save"}),y.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:r,children:"Cancel"})]})]})})},oP=({title:t,value:e,onSave:n,onClose:r})=>{const s=c=>{if(!c)return 30;const[f,p]=c.split(":").map(Number);return(f||0)*60+(p||0)},i=c=>{const f=Math.floor(c/60),p=c%60;return`${String(f).padStart(2,"0")}:${String(p).padStart(2,"0")}`},[o,l]=ue.useState(s(e));ue.useEffect(()=>{l(s(e))},[e]);const u=()=>{const c=i(o);n(c)};return y.jsx("div",{className:"modal",onClick:r,children:y.jsxs("div",{className:"modal-content",onClick:c=>c.stopPropagation(),children:[y.jsxs("div",{className:"modal-header",children:[y.jsx("h3",{children:t}),y.jsx("span",{className:"modal-close",onClick:r,children:"×"})]}),y.jsx("div",{className:"modal-body",children:y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[y.jsx("input",{type:"number",min:"0",max:"1440",value:o,onChange:c=>{const f=parseInt(c.target.value)||0;l(Math.max(0,Math.min(1440,f)))},style:{width:"100px",padding:"10px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"Arial, sans-serif",textAlign:"center"},autoFocus:!0}),y.jsx("span",{style:{fontSize:"14px",fontWeight:"500"},children:"minutes"})]})}),y.jsxs("div",{className:"modal-footer",children:[y.jsx("button",{className:"modal-btn",onClick:u,children:"Save"}),y.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:r,children:"Cancel"})]})]})})},aP=({value:t,onSave:e,onClose:n})=>{const[r,s]=ue.useState(t);ue.useEffect(()=>{s(t)},[t]);const i=()=>{e(r)};return y.jsx("div",{className:"modal",onClick:n,children:y.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[y.jsxs("div",{className:"modal-header",children:[y.jsx("h3",{children:"Work Description"}),y.jsx("span",{className:"modal-close",onClick:n,children:"×"})]}),y.jsx("div",{className:"modal-body",children:y.jsx("textarea",{rows:6,placeholder:"Enter work description...",value:r,onChange:o=>s(o.target.value)})}),y.jsxs("div",{className:"modal-footer",children:[y.jsx("button",{className:"modal-btn",onClick:i,children:"Save"}),y.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:n,children:"Cancel"})]})]})})},ay=({title:t="Subcontractor Name",placeholder:e="Enter subcontractor name...",initialValue:n="",onSave:r,onClose:s})=>{const[i,o]=ue.useState(n);ue.useEffect(()=>{o(n)},[n]);const l=()=>{i.trim()&&r(i.trim())};return y.jsx("div",{className:"modal",onClick:s,children:y.jsxs("div",{className:"modal-content",onClick:u=>u.stopPropagation(),children:[y.jsxs("div",{className:"modal-header",children:[y.jsx("h3",{children:t}),y.jsx("span",{className:"modal-close",onClick:s,children:"×"})]}),y.jsx("div",{className:"modal-body",children:y.jsx("input",{type:"text",placeholder:e,value:i,onChange:u=>o(u.target.value),onKeyPress:u=>{u.key==="Enter"&&l()},style:{width:"100%",padding:"10px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"Arial, sans-serif"},autoFocus:!0})}),y.jsxs("div",{className:"modal-footer",children:[y.jsx("button",{className:"modal-btn",onClick:l,children:"Save"}),y.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:s,children:"Cancel"})]})]})})},lP=({type:t,initialData:e={},onSave:n,onClose:r})=>{const[s,i]=ue.useState({name:e.name||"",startTime:e.startTime||"09:00",endTime:e.endTime||"17:00",tasks:e.tasks||""}),o=()=>{n(t==="plant"?{name:s.name,tasks:s.tasks}:{name:s.name,startTime:s.startTime,endTime:s.endTime,tasks:s.tasks})},l=t==="employee"?"Add Employee":t==="subcontractor"?"Add Subcontractor":"Add Plant/Equipment";return y.jsx("div",{className:"modal",onClick:r,children:y.jsxs("div",{className:"modal-content",onClick:u=>u.stopPropagation(),style:{maxWidth:"600px"},children:[y.jsxs("div",{className:"modal-header",children:[y.jsx("h3",{children:l}),y.jsx("span",{className:"modal-close",onClick:r,children:"×"})]}),y.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[y.jsxs("div",{children:[y.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Name:"}),y.jsx("input",{type:"text",placeholder:"Enter name...",value:s.name,onChange:u=>i({...s,name:u.target.value}),style:{width:"100%",padding:"10px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"Arial, sans-serif"},autoFocus:!0})]}),t!=="plant"&&y.jsxs("div",{style:{display:"flex",gap:"16px"},children:[y.jsxs("div",{style:{flex:1},children:[y.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Start Time:"}),y.jsx("input",{type:"time",value:s.startTime,onChange:u=>i({...s,startTime:u.target.value}),style:{width:"100%",padding:"10px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"Arial, sans-serif"}})]}),y.jsxs("div",{style:{flex:1},children:[y.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"End Time:"}),y.jsx("input",{type:"time",value:s.endTime,onChange:u=>i({...s,endTime:u.target.value}),style:{width:"100%",padding:"10px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"Arial, sans-serif"}})]})]}),y.jsxs("div",{children:[y.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:"500"},children:"Tasks:"}),y.jsx("textarea",{rows:6,placeholder:"Enter work description/tasks...",value:s.tasks,onChange:u=>i({...s,tasks:u.target.value}),style:{width:"100%",padding:"10px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"Arial, sans-serif",resize:"vertical"}})]})]}),y.jsxs("div",{className:"modal-footer",children:[y.jsx("button",{className:"modal-btn",onClick:o,children:"Save"}),y.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:r,children:"Cancel"})]})]})})};function uP({timesheet:t,companyData:e,onUpdate:n,canNavigatePrev:r,onNavigatePrev:s,canNavigateNext:i,onNavigateNext:o,onBackToHome:l}){var x,D,b;const[u,c]=ue.useState(null),[f,p]=ue.useState({}),g=(w,_={})=>{c(w),p(_)},k=()=>{c(null),p({})};return y.jsxs("div",{className:"timesheet-container",children:[y.jsx("div",{className:"section timesheet-week-nav-section",children:y.jsxs("div",{className:"date-navigation",children:[y.jsx("button",{className:"submit-btn timesheet-back-button",onClick:()=>l(),children:"Back"}),y.jsx("button",{className:`date-nav-btn ${r?"":"disabled"}`,"aria-label":"Previous day",onClick:()=>s(),disabled:!r,style:{width:"36px",height:"36px",padding:"0"},children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),y.jsx("div",{className:"date-display",children:$E(t.date)}),y.jsx("button",{className:`date-nav-btn ${i?"":"disabled"}`,"aria-label":"Next day",onClick:o,disabled:!i,style:{width:"36px",height:"36px",padding:"0"},children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:y.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})}),y.jsx("div",{className:"section timesheet-section",children:y.jsx(tP,{timesheet:t,sites:e.sites,onUpdate:n,onTimeClick:w=>{const _=t[w]||(w==="startTime"?"07:00":w==="endTime"?"15:30":"00:30");g("time",{type:w,value:_})}})}),y.jsx("div",{className:"section timesheet-section",children:y.jsx(nP,{employeeRows:t.employees,employees:e.employees,onAdd:()=>{const w=[...t.employees,{name:"",startTime:"07:00",endTime:"15:30",tasks:""}];n({employees:w})},onEdit:w=>g("workDesc",{type:"employee",index:w}),onEditName:(w,_)=>{const A=[...t.employees];A[w]={...A[w],name:_},n({employees:A})},onDelete:w=>{const _=t.employees.filter((A,V)=>V!==w);n({employees:_})},onTimeClick:(w,_)=>{const A=t.employees[w];g("time",{type:`employee-${w}-${_}`,value:A[_]||(_==="endTime"?"15:30":"07:00")})}})}),y.jsx("div",{className:"section timesheet-section",children:y.jsx(rP,{subcontractorRows:t.subcontractors,onAdd:()=>{const w=[...t.subcontractors,{name:"",startTime:"07:00",endTime:"15:30",tasks:""}];n({subcontractors:w})},onEdit:w=>g("workDesc",{type:"subcontractor",index:w}),onEditName:w=>{var _;return g("subName",{type:"subcontractor",index:w,currentName:((_=t.subcontractors[w])==null?void 0:_.name)||""})},onDelete:w=>{const _=t.subcontractors.filter((A,V)=>V!==w);n({subcontractors:_})},onTimeClick:(w,_)=>{const A=t.subcontractors[w];g("time",{type:`subcontractor-${w}-${_}`,value:A[_]||(_==="endTime"?"15:30":"07:00")})}})}),y.jsx("div",{className:"section timesheet-section",children:y.jsx(sP,{plantRows:t.plant,plant:e.plant,onAdd:()=>{const w=[...t.plant,{name:"",tasks:""}];n({plant:w})},onEdit:w=>g("workDesc",{type:"plant",index:w}),onEditName:(w,_)=>{const A=[...t.plant];A[w]={...A[w],name:_},n({plant:A})},onDelete:w=>{const _=t.plant.filter((A,V)=>V!==w);n({plant:_})}})}),u==="time"&&f.type!=="breakLength"&&y.jsx(iP,{title:f.type==="startTime"?"Start Time":f.type==="endTime"?"End Time":"Time",value:f.value||(f.type==="endTime"?"15:30":"07:00"),onSave:w=>{if(f.type==="startTime"||f.type==="endTime")n({[f.type]:w});else if(typeof f.type=="string"&&f.type.startsWith("employee-")){const[,_,A]=f.type.split("-"),V=parseInt(_),F=[...t.employees];F[V]={...F[V],[A]:w},n({employees:F})}else if(typeof f.type=="string"&&f.type.startsWith("subcontractor-")){const[,_,A]=f.type.split("-"),V=parseInt(_),F=[...t.subcontractors];F[V]={...F[V],[A]:w},n({subcontractors:F})}k()},onClose:k}),u==="time"&&f.type==="breakLength"&&y.jsx(oP,{title:"Break Length",value:f.value||"00:30",onSave:w=>{n({breakLength:w}),k()},onClose:k}),u==="workDesc"&&y.jsx(aP,{value:f.index!==void 0?f.type==="employee"?((x=t.employees[f.index])==null?void 0:x.tasks)||"":f.type==="subcontractor"?((D=t.subcontractors[f.index])==null?void 0:D.tasks)||"":((b=t.plant[f.index])==null?void 0:b.tasks)||"":"",onSave:w=>{if(f.index!==void 0)if(f.type==="employee"){const _=[...t.employees];_[f.index]={..._[f.index],tasks:w},n({employees:_})}else if(f.type==="subcontractor"){const _=[...t.subcontractors];_[f.index]={..._[f.index],tasks:w},n({subcontractors:_})}else{const _=[...t.plant];_[f.index]={..._[f.index],tasks:w},n({plant:_})}else if(f.type==="employee"){const _=[...t.employees,{name:f.name||"",startTime:"07:00",endTime:"15:30",tasks:w}];n({employees:_})}else if(f.type==="subcontractor"){const _=[...t.subcontractors,{name:f.name||"",startTime:"07:00",endTime:"15:30",tasks:w}];n({subcontractors:_})}else{const _=[...t.plant,{name:f.name||"",tasks:w}];n({plant:_})}k()},onClose:k}),u==="subName"&&y.jsx(ay,{title:"Subcontractor Name",placeholder:"Enter subcontractor name...",initialValue:f.currentName||"",onSave:w=>{if(f.index!==void 0){const _=[...t.subcontractors];_[f.index]={..._[f.index],name:w},n({subcontractors:_}),k()}else k(),g("workDesc",{type:"subcontractor",name:w})},onClose:k}),u==="name"&&y.jsx(ay,{title:f.type==="employee"?"Employee Name":"Plant/Equipment Name",placeholder:f.type==="employee"?"Enter employee name...":"Enter plant/equipment name...",initialValue:f.currentName||"",onSave:w=>{if(f.index!==void 0){if(f.type==="employee"){const _=[...t.employees];_[f.index]={..._[f.index],name:w},n({employees:_})}else{const _=[...t.plant];_[f.index]={..._[f.index],name:w},n({plant:_})}k()}else k(),g("workDesc",{type:f.type,name:w})},onClose:k}),u==="addRow"&&y.jsx(lP,{type:f.type,onSave:w=>{if(f.type==="employee"){const _=[...t.employees,w];n({employees:_})}else if(f.type==="subcontractor"){const _=[...t.subcontractors,w];n({subcontractors:_})}else{const _=[...t.plant,w];n({plant:_})}k()},onClose:k})]})}function HE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cP=HE,WE=new ts("auth","Firebase",HE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new ou("@firebase/auth");function hP(t,...e){Ml.logLevel<=ee.WARN&&Ml.warn(`Auth (${ri}): ${t}`,...e)}function Ka(t,...e){Ml.logLevel<=ee.ERROR&&Ml.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw Pf(t,...e)}function Wt(t,...e){return Pf(t,...e)}function Rf(t,e,n){const r={...cP(),[e]:n};return new ts("auth","Firebase",r).create(e,{appName:t.name})}function Br(t){return Rf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&dn(t,"argument-error"),Rf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WE.create(t,...e)}function q(t,e,...n){if(!t)throw Pf(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ka(e),new Error(e)}function Nn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function fP(){return ly()==="http:"||ly()==="https:"}function ly(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fP()||ew()||"connection"in navigator)?navigator.onLine:!0}function mP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=a1()||c1()}get(){return pP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_P=new Wo(3e4,6e4);function xf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function li(t,e,n,r,s={}){return KE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=jo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return u1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ni(t.emulatorConfig.host)&&(c.credentials="include"),qE.fetch()(await GE(t,t.config.apiHost,n,l),c)})}async function KE(t,e,n){t._canInitEmulator=!1;const r={...gP,...e};try{const s=new wP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ra(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rf(t,f,c);dn(t,f)}}catch(s){if(s instanceof Gt)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function vP(t,e,n,r,s={}){const i=await li(t,e,n,r,s);return"mfaPendingCredential"in i&&dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function GE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Nf(t.config,s):`${t.config.apiScheme}://${s}`;return yP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class wP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),_P.get())})}}function Ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Wt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return li(t,"POST","/v1/accounts:delete",e)}async function bl(t,e){return li(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TP(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=Df(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:so(xc(s.auth_time)),issuedAtTime:so(xc(s.iat)),expirationTime:so(xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function Df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ka("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gv(n);return s?JSON.parse(s):(Ka("Failed to decode base64 JWT payload"),null)}catch(s){return Ka("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uy(t){const e=Df(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&IP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Vo(t,bl(e,{idToken:n}));q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?QE(s.providerUserInfo):[],o=kP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function AP(t){const e=nt(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function QE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){const n=await KE(t,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await GE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ni(t.emulatorConfig.host)&&(u.credentials="include"),qE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RP(t,e){return li(t,"POST","/v2/accounts:revokeToken",xf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=uy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new SP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TP(this,e)}reload(){return AP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(Br(this.auth));const e=await this.getIdToken();return await Vo(this,EP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:k,providerData:x,stsTokenManager:D}=n;q(p&&D,e,"internal-error");const b=Ms.fromJSON(this.name,D);q(typeof p=="string",e,"internal-error"),zn(r,e.name),zn(s,e.name),q(typeof g=="boolean",e,"internal-error"),q(typeof k=="boolean",e,"internal-error"),zn(i,e.name),zn(o,e.name),zn(l,e.name),zn(u,e.name),zn(c,e.name),zn(f,e.name);const w=new Bt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:f});return x&&Array.isArray(x)&&(w.providerData=x.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ll(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?QE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ms;l.updateFromIdToken(r);const u=new Bt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Map;function vn(t){Nn(t instanceof Function,"Expected a class definition");let e=cy.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YE.type="NONE";const hy=YE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bl(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(vn(hy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||vn(hy);const o=Ga(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const g=await bl(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Bt._fromGetAccountInfoResponse(e,g,f)}else p=Bt._fromJSON(e,f);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new bs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nT(e))return"Blackberry";if(rT(e))return"Webos";if(JE(e))return"Safari";if((e.includes("chrome/")||ZE(e))&&!e.includes("edge/"))return"Chrome";if(tT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XE(t=tt()){return/firefox\//i.test(t)}function JE(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZE(t=tt()){return/crios\//i.test(t)}function eT(t=tt()){return/iemobile/i.test(t)}function tT(t=tt()){return/android/i.test(t)}function nT(t=tt()){return/blackberry/i.test(t)}function rT(t=tt()){return/webos/i.test(t)}function Vf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PP(t=tt()){var e;return Vf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function NP(){return h1()&&document.documentMode===10}function sT(t=tt()){return Vf(t)||tT(t)||rT(t)||nT(t)||/windows phone/i.test(t)||eT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t,e=[]){let n;switch(t){case"Browser":n=dy(tt());break;case"Worker":n=`${dy(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e={}){return li(t,"GET","/v2/passwordPolicy",xf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=6;class OP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??VP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new xP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bl(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(Br(this));const n=e?nt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(Br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(Br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DP(this),n=new OP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&hP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Tu(t){return nt(t)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=_1(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bP(t){Of=t}function LP(t){return Of.loadJS(t)}function FP(){return Of.gapiScript}function jP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t,e){const n=ns(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function zP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BP(t,e,n){const r=Tu(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=oT(e),{host:o,port:l}=$P(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(fr(c,r.config.emulator)&&fr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ni(o)?(Jv(`${i}//${o}${u}`),Zv("Auth",!0)):HP()}function oT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $P(t){const e=oT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:py(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:py(o)}}}function py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e){return vP(t,"POST","/v1/accounts:signInWithIdp",xf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="http://localhost";class xn extends aT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:WP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class io extends ui{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return q("providerId"in n&&"signInMethod"in n,"argument-error"),xn._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),xn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return io.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return io.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:l}=e;if(!r&&!s&&!n&&!i||!l)return null;try{return new io(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ui{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xn._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ui{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ui{constructor(){super("twitter.com")}static credential(e,n){return xn._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),o=my(r);return new Js({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=my(r);return new Js({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function my(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Gt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fl(e,n,r,s)}}function lT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,i,e,r):i})}async function qP(t,e,n=!1){const r=await Vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Js._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(Br(r));const s="reauthenticate";try{const i=await Vo(t,lT(r,s,e,t),n);q(i.idToken,r,"internal-error");const o=Df(i.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Js._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e,n=!1){if(Ut(t.app))return Promise.reject(Br(t));const r="signIn",s=await lT(t,r,e),i=await Js._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function QP(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function YP(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function XP(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function JP(t){return nt(t).signOut()}const jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jl,"1"),this.storage.removeItem(jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=1e3,eN=10;class cT extends uT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cT.type="LOCAL";const tN=cT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT extends uT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hT.type="SESSION";const dT=hT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await nN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=bf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function sN(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function iN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function aN(){return fT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="firebaseLocalStorageDb",lN=1,Ul="firebaseLocalStorage",mT="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Su(t,e){return t.transaction([Ul],e?"readwrite":"readonly").objectStore(Ul)}function uN(){const t=indexedDB.deleteDatabase(pT);return new qo(t).toPromise()}function Jh(){const t=indexedDB.open(pT,lN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ul,{keyPath:mT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ul)?e(r):(r.close(),await uN(),e(await Jh()))})})}async function gy(t,e,n){const r=Su(t,!0).put({[mT]:e,value:n});return new qo(r).toPromise()}async function cN(t,e){const n=Su(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function yy(t,e){const n=Su(t,!0).delete(e);return new qo(n).toPromise()}const hN=800,dN=3;class gT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(aN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await iN(),!this.activeServiceWorker)return;this.sender=new rN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jh();return await gy(e,jl,"1"),await yy(e,jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Su(s,!1).getAll();return new qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gT.type="LOCAL";const fN=gT;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e){return e?vn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends aT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pN(t){return GP(t.auth,new Lf(t),t.bypassAuthState)}function mN(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),KP(n,new Lf(t),t.bypassAuthState)}async function gN(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),qP(n,new Lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pN;case"linkViaPopup":case"linkViaRedirect":return gN;case"reauthViaPopup":case"reauthViaRedirect":return mN;default:dn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new Wo(2e3,1e4);async function _N(t,e,n){if(Ut(t.app))return Promise.reject(Wt(t,"operation-not-supported-in-this-environment"));const r=Tu(t);dP(t,e,Mf);const s=yT(r,n);return new Lr(r,"signInViaPopup",e,s).executeNotNull()}class Lr extends _T{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yN.get())};e()}}Lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="pendingRedirect",Qa=new Map;class wN extends _T{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qa.get(this.auth._key());if(!e){try{const r=await EN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qa.set(this.auth._key(),e)}return this.bypassAuthState||Qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EN(t,e){const n=SN(e),r=IN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function TN(t,e){Qa.set(t._key(),e)}function IN(t){return vn(t._redirectPersistence)}function SN(t){return Ga(vN,t.config.apiKey,t.name)}async function AN(t,e,n=!1){if(Ut(t.app))return Promise.reject(Br(t));const r=Tu(t),s=yT(r,e),o=await new wN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=10*60*1e3;class CN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kN&&this.cachedEventUids.clear(),this.cachedEventUids.has(_y(e))}saveEventToCache(e){this.cachedEventUids.add(_y(e)),this.lastProcessedEventTime=Date.now()}}function _y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e={}){return li(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xN=/^https?/;async function DN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PN(t);for(const n of e)try{if(VN(n))return}catch{}dn(t,"unauthorized-domain")}function VN(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xN.test(n))return!1;if(NN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new Wo(3e4,6e4);function vy(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MN(t){return new Promise((e,n)=>{var s,i,o;function r(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(Wt(t,"network-request-failed"))},timeout:ON.get()})}if((i=(s=ln().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ln().gapi)!=null&&o.load)r();else{const l=jP("iframefcb");return ln()[l]=()=>{gapi.load?r():n(Wt(t,"network-request-failed"))},LP(`${FP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ya=null,e})}let Ya=null;function bN(t){return Ya=Ya||MN(t),Ya}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new Wo(5e3,15e3),FN="__/auth/iframe",jN="emulator/auth/iframe",UN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BN(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nf(e,jN):`https://${t.config.authDomain}/${FN}`,r={apiKey:e.apiKey,appName:t.name,v:ri},s=zN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${jo(r).slice(1)}`}async function $N(t){const e=await bN(t),n=ln().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:BN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},LN.get());function u(){ln().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WN=500,qN=600,KN="_blank",GN="http://localhost";class wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QN(t,e,n,r=WN,s=qN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...HN,width:r.toString(),height:s.toString(),top:i,left:o},c=tt().toLowerCase();n&&(l=ZE(c)?KN:n),XE(c)&&(e=e||GN,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[k,x])=>`${g}${k}=${x},`,"");if(PP(c)&&l!=="_self")return YN(e||"",l),new wy(null);const p=window.open(e||"",l,f);q(p,t,"popup-blocked");try{p.focus()}catch{}return new wy(p)}function YN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="__/auth/handler",JN="emulator/auth/handler",ZN=encodeURIComponent("fac");async function Ey(t,e,n,r,s,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:s};if(e instanceof Mf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",y1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ui){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${ZN}=${encodeURIComponent(u)}`:"";return`${ex(t)}?${jo(l).slice(1)}${c}`}function ex({config:t}){return t.emulator?Nf(t,JN):`https://${t.authDomain}/${XN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class tx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dT,this._completeRedirectFn=AN,this._overrideRedirectResult=TN}async _openPopup(e,n,r,s){var o;Nn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ey(e,n,r,Yh(),s);return QN(e,i,bf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ey(e,n,r,Yh(),s);return sN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $N(e),r=new CN(e);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Dc];i!==void 0&&n(!!i),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sT()||JE()||Vf()}}const nx=tx;var Ty="@firebase/auth",Iy="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ix(t){un(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iT(t)},c=new MP(r,s,i,u);return zP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),un(new Kt("auth-internal",e=>{const n=Tu(e.getProvider("auth").getImmediate());return(r=>new rx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Ty,Iy,sx(t)),Dt(Ty,Iy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=5*60,ax=Xv("authIdTokenMaxAge")||ox;let Sy=null;const lx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ax)return;const s=n==null?void 0:n.token;Sy!==s&&(Sy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ux(t=Qd()){const e=ns(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UP(t,{popupRedirectResolver:nx,persistence:[fN,tN,dT]}),r=Xv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lx(i.toString());YP(n,o,()=>o(n.currentUser)),QP(n,l=>o(l))}}const s=Qv("auth");return s&&BP(n,`http://${s}`),n}function cx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Wt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ix("Browser");var hx="firebase",dx="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(hx,dx,"app");const wT="@firebase/installations",Ff="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1e4,TT=`w:${Ff}`,IT="FIS_v2",fx="https://firebaseinstallations.googleapis.com/v1",px=60*60*1e3,mx="installations",gx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xr=new ts(mx,gx,yx);function ST(t){return t instanceof Gt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT({projectId:t}){return`${fx}/projects/${t}/installations`}function kT(t){return{token:t.token,requestStatus:2,expiresIn:vx(t.expiresIn),creationTime:Date.now()}}async function CT(t,e){const r=(await e.json()).error;return Xr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _x(t,{refreshToken:e}){const n=RT(t);return n.append("Authorization",wx(e)),n}async function PT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vx(t){return Number(t.replace("s","000"))}function wx(t){return`${IT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=AT(t),s=RT(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:IT,appId:t.appId,sdkVersion:TT},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await PT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:kT(c.authToken)}}else throw await CT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=/^[cdef][\w-]{21}$/,Zh="";function Sx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ax(t);return Ix.test(n)?n:Zh}catch{return Zh}}function Ax(t){return Tx(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new Map;function DT(t,e){const n=Au(t);VT(n,e),kx(n,e)}function VT(t,e){const n=xT.get(t);if(n)for(const r of n)r(e)}function kx(t,e){const n=Cx();n&&n.postMessage({key:t,fid:e}),Rx()}let Fr=null;function Cx(){return!Fr&&"BroadcastChannel"in self&&(Fr=new BroadcastChannel("[Firebase] FID Change"),Fr.onmessage=t=>{VT(t.data.key,t.data.fid)}),Fr}function Rx(){xT.size===0&&Fr&&(Fr.close(),Fr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="firebase-installations-database",Nx=1,Jr="firebase-installations-store";let Vc=null;function jf(){return Vc||(Vc=iw(Px,Nx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}})),Vc}async function zl(t,e){const n=Au(t),s=(await jf()).transaction(Jr,"readwrite"),i=s.objectStore(Jr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&DT(t,e.fid),e}async function OT(t){const e=Au(t),r=(await jf()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function ku(t,e){const n=Au(t),s=(await jf()).transaction(Jr,"readwrite"),i=s.objectStore(Jr),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&DT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uf(t){let e;const n=await ku(t.appConfig,r=>{const s=xx(r),i=Dx(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Zh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xx(t){const e=t||{fid:Sx(),registrationStatus:0};return MT(e)}function Dx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Xr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Vx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ox(t)}:{installationEntry:e}}async function Vx(t,e){try{const n=await Ex(t,e);return zl(t.appConfig,n)}catch(n){throw ST(n)&&n.customData.serverCode===409?await OT(t.appConfig):await zl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ox(t){let e=await Ay(t.appConfig);for(;e.registrationStatus===1;)await NT(100),e=await Ay(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Uf(t);return r||n}return e}function Ay(t){return ku(t,e=>{if(!e)throw Xr.create("installation-not-found");return MT(e)})}function MT(t){return Mx(t)?{fid:t.fid,registrationStatus:0}:t}function Mx(t){return t.registrationStatus===1&&t.registrationTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx({appConfig:t,heartbeatServiceProvider:e},n){const r=Lx(t,n),s=_x(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:TT,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await PT(()=>fetch(r,l));if(u.ok){const c=await u.json();return kT(c)}else throw await CT("Generate Auth Token",u)}function Lx(t,{fid:e}){return`${AT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(t,e=!1){let n;const r=await ku(t.appConfig,i=>{if(!bT(i))throw Xr.create("not-registered");const o=i.authToken;if(!e&&Ux(o))return i;if(o.requestStatus===1)return n=Fx(t,e),i;{if(!navigator.onLine)throw Xr.create("app-offline");const l=Bx(i);return n=jx(t,l),l}});return n?await n:r.authToken}async function Fx(t,e){let n=await ky(t.appConfig);for(;n.authToken.requestStatus===1;)await NT(100),n=await ky(t.appConfig);const r=n.authToken;return r.requestStatus===0?zf(t,e):r}function ky(t){return ku(t,e=>{if(!bT(e))throw Xr.create("not-registered");const n=e.authToken;return $x(n)?{...e,authToken:{requestStatus:0}}:e})}async function jx(t,e){try{const n=await bx(t,e),r={...e,authToken:n};return await zl(t.appConfig,r),n}catch(n){if(ST(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await OT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await zl(t.appConfig,r)}throw n}}function bT(t){return t!==void 0&&t.registrationStatus===2}function Ux(t){return t.requestStatus===2&&!zx(t)}function zx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+px}function Bx(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function $x(t){return t.requestStatus===1&&t.requestTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Uf(e);return r?r.catch(console.error):zf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(t,e=!1){const n=t;return await qx(n),(await zf(n,e)).token}async function qx(t){const{registrationPromise:e}=await Uf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){if(!t||!t.options)throw Oc("App Configuration");if(!t.name)throw Oc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Oc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Oc(t){return Xr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="installations",Gx="installations-internal",Qx=t=>{const e=t.getProvider("app").getImmediate(),n=Kx(e),r=ns(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Yx=t=>{const e=t.getProvider("app").getImmediate(),n=ns(e,LT).getImmediate();return{getId:()=>Hx(n),getToken:s=>Wx(n,s)}};function Xx(){un(new Kt(LT,Qx,"PUBLIC")),un(new Kt(Gx,Yx,"PRIVATE"))}Xx();Dt(wT,Ff);Dt(wT,Ff,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="analytics",Jx="firebase_id",Zx="origin",e2=60*1e3,t2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new ou("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new ts("analytics","Analytics",n2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t){if(!t.startsWith(Bf)){const e=Et.create("invalid-gtag-resource",{gtagURL:t});return lt.warn(e.message),""}return t}function FT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function s2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function i2(t,e){const n=s2("firebase-js-sdk-policy",{createScriptURL:r2}),r=document.createElement("script"),s=`${Bf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function o2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function a2(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await FT(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){lt.error(l)}t("config",s,i)}async function l2(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await FT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){lt.error(i)}}function u2(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await l2(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await a2(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){lt.error(l)}}return s}function c2(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=u2(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function h2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Bf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=30,f2=1e3;class p2{constructor(e={},n=f2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jT=new p2;function m2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function g2(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:m2(n)},s=t2.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function y2(t,e=jT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Et.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Et.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new w2;return setTimeout(async()=>{l.abort()},e2),UT({appId:r,apiKey:s,measurementId:i},o,l,e)}async function UT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=jT){var l;const{appId:i,measurementId:o}=t;try{await _2(r,e)}catch(u){if(o)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await g2(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!v2(c)){if(s.deleteThrottleMetadata(i),o)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?tg(n,s.intervalMillis,d2):tg(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,p),lt.debug(`Calling attemptFetch again in ${f} millis`),UT(t,p,r,s)}}function _2(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function v2(t){if(!(t instanceof Gt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class w2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function E2(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function T2(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(){if(tw())try{await nw()}catch(t){return lt.warn(Et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function S2(t,e,n,r,s,i,o){const l=y2(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>lt.error(g)),e.push(l);const u=I2().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);h2(i)||i2(i,c.measurementId),s("js",new Date);const p=(o==null?void 0:o.config)??{};return p[Zx]="firebase",p.update=!0,f!=null&&(p[Jx]=f),s("config",c.measurementId,p),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.app=e}_delete(){return delete Fs[this.app.options.appId],Promise.resolve()}}let Fs={},Cy=[];const Ry={};let Mc="dataLayer",k2="gtag",Py,$f,Ny=!1;function C2(){const t=[];if(ew()&&t.push("This is a browser extension environment."),f1()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Et.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function R2(t,e,n){C2();const r=t.options.appId;if(!r)throw Et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(Fs[r]!=null)throw Et.create("already-exists",{id:r});if(!Ny){o2(Mc);const{wrappedGtag:i,gtagCore:o}=c2(Fs,Cy,Ry,Mc,k2);$f=i,Py=o,Ny=!0}return Fs[r]=S2(t,Cy,Ry,e,Py,Mc,n),new A2(t)}function P2(t=Qd()){t=nt(t);const e=ns(t,Bl);return e.isInitialized()?e.getImmediate():N2(t)}function N2(t,e={}){const n=ns(t,Bl);if(n.isInitialized()){const s=n.getImmediate();if(fr(e,n.getOptions()))return s;throw Et.create("already-initialized")}return n.initialize({options:e})}function x2(t,e,n){t=nt(t),T2($f,Fs[t.app.options.appId],e,n).catch(r=>lt.error(r))}function D2(t,e,n,r){t=nt(t),E2($f,Fs[t.app.options.appId],e,n,r).catch(s=>lt.error(s))}const xy="@firebase/analytics",Dy="0.10.19";function V2(){un(new Kt(Bl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return R2(r,s,n)},"PUBLIC")),un(new Kt("analytics-internal",t,"PRIVATE")),Dt(xy,Dy),Dt(xy,Dy,"esm2020");function t(e){try{const n=e.getProvider(Bl).getImmediate();return{logEvent:(r,s,i)=>D2(n,r,s,i),setUserProperties:(r,s)=>x2(n,r,s)}}catch(n){throw Et.create("interop-component-reg-failed",{reason:n})}}}V2();const O2={apiKey:"AIzaSyB4_Y_3zsP1wJPDPSrv2qxVAEGZl_YtDyM",authDomain:"jsb-backend.firebaseapp.com",projectId:"jsb-backend",storageBucket:"jsb-backend.firebasestorage.app",messagingSenderId:"522834451424",appId:"1:522834451424:web:1771fd13aad4d99c96e985",measurementId:"G-XNQSZMDCP3"},Hf=ow(O2);P2(Hf);const Ko=PR(Hf),Cu=ux(Hf);async function M2(){try{const t=new io("microsoft.com");return t.addScope("email"),t.addScope("profile"),t.setCustomParameters({tenant:"68237f8a-bf3c-425b-b92b-9518c6d4bf18"}),(await _N(Cu,t)).user}catch(t){throw console.error("Error signing in with Microsoft:",t),t}}async function b2(){try{await JP(Cu)}catch(t){throw console.error("Error signing out:",t),t}}function L2(t){return XP(Cu,t)}function zT(t,e){var r;const n=e||((r=Cu.currentUser)==null?void 0:r.uid);if(!n)throw new Error("User must be authenticated to access timesheets");return console.log(t),`users/${n}/timesheets/${t}`}async function F2(t,e){try{if(!t||!e)throw new Error("Bad State");const n=YR(t);console.log("weeksMap:",n);const r=[];for(const[s,i]of n.entries()){const o=DE(Ko,zT(s,e));r.push(WR(o,i,{merge:!1}))}await Promise.all(r)}catch(n){throw console.error("Error saving timesheet data:",n),n}}async function Vy(t,e){const n=JR(t);try{const r=DE(Ko,zT(t,e)),s=await HR(r);if(s.exists()){const i=s.data(),o=XR(i);for(let l=0;l<n.length;l++){const u=n[l].date.toISOString().slice(0,10),c=o.get(u);c&&(n[l]=c)}}}catch(r){console.error("Error getting week timesheets from Firestore:",r)}return n}async function j2(){try{const t=If(Ko,"sites"),e=await Cf(t),n=[];return e.forEach(r=>{const i=r.data().name||r.id;i&&n.push(i)}),n.sort()}catch(t){throw console.error("Error getting sites:",t),t}}async function U2(){try{const t=If(Ko,"employees"),e=await Cf(t),n=[];return e.forEach(r=>{const i=r.data().name||r.id;i&&n.push(i)}),n.sort()}catch(t){throw console.error("Error getting employee names:",t),t}}async function z2(){try{const t=If(Ko,"plant"),e=await Cf(t),n=[];return e.forEach(r=>{const i=r.data().name||r.id;i&&n.push(i)}),n.sort()}catch(t){throw console.error("Error getting plant names:",t),t}}class B2{constructor(){re(this,"loading",!1);re(this,"fetchingData",!1);re(this,"authLoading",!0);re(this,"error",null);re(this,"toastMessage",null);re(this,"user",null);re(this,"timesheets",null);re(this,"companyData");re(this,"selectedIndex",null);re(this,"selectedTimesheet",null);re(this,"listeners");re(this,"handleNavigateToTimesheet",(e,n)=>{this.selectedIndex=e?n:n+7,this.navigate()});re(this,"handleBackToHome",()=>{this.selectedIndex=null,this.navigate()});re(this,"canNavigatePrev",()=>typeof this.selectedIndex=="number"&&this.timesheets!==void 0&&this.selectedIndex<14);re(this,"canNavigateNext",()=>typeof this.selectedIndex=="number"&&this.timesheets!==void 0&&this.selectedIndex<14);re(this,"navigatePrev",()=>{this.canNavigatePrev()&&(this.selectedIndex-=1,this.navigate())});re(this,"navigateNext",()=>{this.canNavigateNext()&&(this.selectedIndex+=1,this.navigate())});re(this,"updateTimesheet",e=>{const n=this.selectedTimesheet;n&&(n.update(e),this.notify())});re(this,"handleSubmit",async()=>{if(this.user){console.log("Submitting timesheet:",this.timesheets),this.loading=!0,this.notify();try{await F2(this.timesheets,this.user.uid),this.toastMessage={message:"Timesheet saved successfully!",type:"success"},this.notify(),await this.fetchData(this.user)}catch(e){console.error("Error submitting timesheet:",e),this.toastMessage={message:"Error saving timesheet. Please try again.",type:"error"},this.notify()}finally{this.loading=!1,this.notify()}}});re(this,"onSignOut",async()=>{try{await b2(),this.toastMessage={message:"Signed out successfully",type:"success"},this.notify()}catch(e){this.error=e instanceof Error?e.message:"Failed to sign out",this.toastMessage={message:e instanceof Error?e.message:"Failed to sign out",type:"error"},this.notify()}});re(this,"onSignIn",async()=>{this.authLoading=!0,this.notify();try{await M2(),this.toastMessage={message:"Signed in successfully",type:"success"},this.notify()}catch(e){this.error=e instanceof Error?e.message:"Failed to sign in",this.toastMessage={message:e instanceof Error?e.message:"Failed to sign in",type:"error"},this.authLoading=!1,this.notify()}});this.listeners=new Set,this.companyData={sites:[],employees:[],plant:[]}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}clearToast(){this.toastMessage=null,this.notify()}async fetchData(e){try{const[n,r]=GR(),s=await Vy(n,e.uid),i=await Vy(r,e.uid);console.log("Week 1 Timesheets:",s),console.log("Week 2 Timesheets:",i),this.timesheets={week1Timesheets:s,week2Timesheets:i},this.companyData={sites:await j2(),employees:await U2(),plant:await z2()}}catch{this.error="Error Fetching Data, please Try Again.",this.toastMessage={message:"Error fetching data. Please try again.",type:"error"},this.notify()}}async onUserChange(e){e&&await this.fetchData(e),this.user=e,this.authLoading=!1,this.notify()}navigate(){var e,n;this.selectedIndex!==null?this.selectedTimesheet=this.selectedIndex<7?((e=this.timesheets)==null?void 0:e.week1Timesheets.at(this.selectedIndex))??null:((n=this.timesheets)==null?void 0:n.week2Timesheets.at(this.selectedIndex-7))??null:this.selectedTimesheet=null,this.notify()}}function $2(){const[t]=ue.useState(()=>new B2),[,e]=ue.useState(0);return ue.useEffect(()=>L2(r=>{t.onUserChange(r)}),[t]),ue.useEffect(()=>t.subscribe(()=>{e(r=>r+1)}),[t]),t}function H2(){const[t,e]=ue.useState([]),n=ue.useCallback((l,u="info")=>{const f={id:Math.random().toString(36).substring(2,9),message:l,type:u};e(p=>[...p,f])},[]),r=ue.useCallback(l=>{e(u=>u.filter(c=>c.id!==l))},[]),s=ue.useCallback(l=>{n(l,"success")},[n]),i=ue.useCallback(l=>{n(l,"error")},[n]),o=ue.useCallback(l=>{n(l,"info")},[n]);return{toasts:t,showToast:n,showSuccess:s,showError:i,showInfo:o,removeToast:r}}function W2({toast:t,onRemove:e}){return ue.useEffect(()=>{const n=setTimeout(()=>{e(t.id)},5e3);return()=>clearTimeout(n)},[t.id,e]),y.jsx("div",{className:`toast toast-${t.type}`,children:y.jsxs("div",{className:"toast-content",children:[y.jsx("span",{className:"toast-message",children:t.message}),y.jsx("button",{className:"toast-close",onClick:()=>e(t.id),"aria-label":"Close",children:"×"})]})})}function q2({toasts:t,onRemove:e}){return t.length===0?null:y.jsx("div",{className:"toast-container",children:t.map(n=>y.jsx(W2,{toast:n,onRemove:e},n.id))})}function K2(){const t=$2(),{toasts:e,showSuccess:n,showError:r,showInfo:s,removeToast:i}=H2(),o=ue.useRef(null);return ue.useEffect(()=>{const l=t.toastMessage;if(l){const u=`${l.message}-${l.type}`;if(o.current!==u){const{message:c,type:f}=l;f==="success"?n(c):f==="error"?r(c):s(c),o.current=u,t.clearToast()}}},[t.toastMessage,n,r,s,t]),y.jsxs("div",{style:{position:"relative"},children:[y.jsxs("div",{className:"section timesheet-logo-section",children:[y.jsx("img",{src:"/assets/JSBLogo.jpg",alt:"JSB Logo",className:"timesheet-logo",style:{maxHeight:"150px",maxWidth:"100%",aspectRatio:"4",objectFit:"contain"}}),y.jsx("div",{className:"timesheet-logo-spacer"})]}),t.user===null?y.jsx(KS,{authLoading:t.authLoading,onSignIn:t.onSignIn}):t.selectedTimesheet===null?y.jsx(eP,{timesheets:t.timesheets??null,userName:t.user.displayName,onSignOut:t.onSignOut,onSubmit:t.handleSubmit,onSelectTimesheet:t.handleNavigateToTimesheet}):y.jsx(uP,{timesheet:t.selectedTimesheet,companyData:t.companyData,onUpdate:t.updateTimesheet,onNavigatePrev:t.navigatePrev,onNavigateNext:t.navigateNext,onBackToHome:t.handleBackToHome,canNavigatePrev:t.canNavigatePrev,canNavigateNext:t.canNavigateNext}),t.loading&&y.jsx("div",{className:"app-loading-overlay",children:y.jsx("div",{className:"app-loading-text",children:"Loading..."})}),y.jsx(q2,{toasts:e,onRemove:i})]})}bc.createRoot(document.getElementById("root")).render(y.jsx(M0.StrictMode,{children:y.jsx(K2,{})}));
