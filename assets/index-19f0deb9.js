var i1=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var xj=i1((ct,dt)=>{function s1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Kl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c_={exports:{}},ql={},d_={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),o1=Symbol.for("react.portal"),a1=Symbol.for("react.fragment"),l1=Symbol.for("react.strict_mode"),u1=Symbol.for("react.profiler"),c1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),p1=Symbol.for("react.memo"),m1=Symbol.for("react.lazy"),Wp=Symbol.iterator;function g1(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var f_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,p_={};function ts(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||f_}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m_(){}m_.prototype=ts.prototype;function kf(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||f_}var xf=kf.prototype=new m_;xf.constructor=kf;h_(xf,ts.prototype);xf.isPureReactComponent=!0;var Hp=Array.isArray,g_=Object.prototype.hasOwnProperty,bf={current:null},v_={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g_.call(e,r)&&!v_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Do,type:t,key:s,ref:o,props:i,_owner:bf.current}}function v1(t,e){return{$$typeof:Do,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function _1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gp=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_1(""+t.key):e.toString(36)}function Ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Do:case o1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ku(o,0):r,Hp(i)?(n="",t!=null&&(n=t.replace(Gp,"$&/")+"/"),Ia(i,e,n,"",function(u){return u})):i!=null&&(Rf(i)&&(i=v1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ku(s,a);o+=Ia(s,e,n,l,i)}else if(l=g1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ku(s,a++),o+=Ia(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var r=[],i=0;return Ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function y1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},ka={transition:null},w1={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:ka,ReactCurrentOwner:bf};G.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=ts;G.Fragment=a1;G.Profiler=u1;G.PureComponent=kf;G.StrictMode=l1;G.Suspense=h1;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g_.call(e,l)&&!v_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Do,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:d1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:c1,_context:t},t.Consumer=t};G.createElement=__;G.createFactory=function(t){var e=__.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:f1,render:t}};G.isValidElement=Rf;G.lazy=function(t){return{$$typeof:m1,_payload:{_status:-1,_result:t},_init:y1}};G.memo=function(t,e){return{$$typeof:p1,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return Qe.current.useCallback(t,e)};G.useContext=function(t){return Qe.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};G.useEffect=function(t,e){return Qe.current.useEffect(t,e)};G.useId=function(){return Qe.current.useId()};G.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return Qe.current.useMemo(t,e)};G.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};G.useRef=function(t){return Qe.current.useRef(t)};G.useState=function(t){return Qe.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return Qe.current.useTransition()};G.version="18.2.0";d_.exports=G;var y=d_.exports;const y_=Kl(y),Kc=s1({__proto__:null,default:y_},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1=y,S1=Symbol.for("react.element"),C1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,I1=E1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k1={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)T1.call(e,r)&&!k1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:S1,type:t,key:s,ref:o,props:i,_owner:I1.current}}ql.Fragment=C1;ql.jsx=w_;ql.jsxs=w_;c_.exports=ql;var I=c_.exports,qc={},E_={exports:{}},gt={},S_={exports:{}},C_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,j){var U=R.length;R.push(j);e:for(;0<U;){var ie=U-1>>>1,le=R[ie];if(0<i(le,j))R[ie]=j,R[U]=le,U=ie;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var j=R[0],U=R.pop();if(U!==j){R[0]=U;e:for(var ie=0,le=R.length,mr=le>>>1;ie<mr;){var bt=2*(ie+1)-1,Bt=R[bt],Wt=bt+1,xn=R[Wt];if(0>i(Bt,U))Wt<le&&0>i(xn,Bt)?(R[ie]=xn,R[Wt]=U,ie=Wt):(R[ie]=Bt,R[bt]=U,ie=bt);else if(Wt<le&&0>i(xn,U))R[ie]=xn,R[Wt]=U,ie=Wt;else break e}}return j}function i(R,j){var U=R.sortIndex-j.sortIndex;return U!==0?U:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,m=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=R)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function S(R){if(_=!1,g(R),!v)if(n(l)!==null)v=!0,ps(k);else{var j=n(u);j!==null&&ms(S,j.startTime-R)}}function k(R,j){v=!1,_&&(_=!1,p(O),O=-1),m=!0;var U=f;try{for(g(j),c=n(l);c!==null&&(!(c.expirationTime>j)||R&&!K());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,f=c.priorityLevel;var le=ie(c.expirationTime<=j);j=t.unstable_now(),typeof le=="function"?c.callback=le:c===n(l)&&r(l),g(j)}else r(l);c=n(l)}if(c!==null)var mr=!0;else{var bt=n(u);bt!==null&&ms(S,bt.startTime-j),mr=!1}return mr}finally{c=null,f=U,m=!1}}var T=!1,C=null,O=-1,z=5,L=-1;function K(){return!(t.unstable_now()-L<z)}function Vt(){if(C!==null){var R=t.unstable_now();L=R;var j=!0;try{j=C(!0,R)}finally{j?he():(T=!1,C=null)}}else T=!1}var he;if(typeof h=="function")he=function(){h(Vt)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,pr=xt.port2;xt.port1.onmessage=Vt,he=function(){pr.postMessage(null)}}else he=function(){E(Vt,0)};function ps(R){C=R,T||(T=!0,he())}function ms(R,j){O=E(function(){R(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,ps(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var U=f;f=j;try{return R()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var U=f;f=R;try{return j()}finally{f=U}},t.unstable_scheduleCallback=function(R,j,U){var ie=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ie+U:ie):U=ie,R){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=U+le,R={id:d++,callback:j,priorityLevel:R,startTime:U,expirationTime:le,sortIndex:-1},U>ie?(R.sortIndex=U,e(u,R),n(l)===null&&R===n(u)&&(_?(p(O),O=-1):_=!0,ms(S,U-ie))):(R.sortIndex=le,e(l,R),v||m||(v=!0,ps(k))),R},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(R){var j=f;return function(){var U=f;f=j;try{return R.apply(this,arguments)}finally{f=U}}}})(C_);S_.exports=C_;var x1=S_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_=y,mt=x1;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I_=new Set,Js={};function Kr(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(Js[t]=e,t=0;t<e.length;t++)I_.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=Object.prototype.hasOwnProperty,b1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kp={},qp={};function R1(t){return Yc.call(qp,t)?!0:Yc.call(Kp,t)?!1:b1.test(t)?qp[t]=!0:(Kp[t]=!0,!1)}function P1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function N1(t,e,n,r){if(e===null||typeof e>"u"||P1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pf=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);je[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);je[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pf,Nf);je[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Of(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(N1(e,n,i,r)&&(n=null),r||i===null?R1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cn=T_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),ci=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),x_=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),b_=Symbol.for("react.offscreen"),Yp=Symbol.iterator;function gs(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,qu;function Ps(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Yu=!1;function Qu(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function O1(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case ci:return"Portal";case Qc:return"Profiler";case Af:return"StrictMode";case Xc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x_:return(t.displayName||"Context")+".Consumer";case k_:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Zc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Zc(t(e))}catch{}}return null}function A1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D1(t){var e=R_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=D1(t))}function P_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=R_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N_(t,e){e=e.checked,e!=null&&Of(t,"checked",e,!1)}function td(t,e){N_(t,e);var n=rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ns(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function O_(t,e){var n=rr(e.value),r=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,D_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L1=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){L1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function L_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function M_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=L_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var M1=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sd(t,e){if(e){if(M1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=null;function Mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,bi=null,Ri=null;function em(t){if(t=Fo(t)){if(typeof ld!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Zl(e),ld(t.stateNode,t.type,e))}}function F_(t){bi?Ri?Ri.push(t):Ri=[t]:bi=t}function $_(){if(bi){var t=bi,e=Ri;if(Ri=bi=null,em(t),e)for(t=0;t<e.length;t++)em(e[t])}}function j_(t,e){return t(e)}function U_(){}var Xu=!1;function z_(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return j_(t,e,n)}finally{Xu=!1,(bi!==null||Ri!==null)&&(U_(),$_())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var ud=!1;if(vn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){ud=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{ud=!1}function F1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Fs=!1,Ka=null,qa=!1,cd=null,$1={onError:function(t){Fs=!0,Ka=t}};function j1(t,e,n,r,i,s,o,a,l){Fs=!1,Ka=null,F1.apply($1,arguments)}function U1(t,e,n,r,i,s,o,a,l){if(j1.apply(this,arguments),Fs){if(Fs){var u=Ka;Fs=!1,Ka=null}else throw Error(x(198));qa||(qa=!0,cd=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tm(t){if(qr(t)!==t)throw Error(x(188))}function z1(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tm(i),t;if(s===r)return tm(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function B_(t){return t=z1(t),t!==null?W_(t):null}function W_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W_(t);if(e!==null)return e;t=t.sibling}return null}var H_=mt.unstable_scheduleCallback,nm=mt.unstable_cancelCallback,V1=mt.unstable_shouldYield,B1=mt.unstable_requestPaint,Ee=mt.unstable_now,W1=mt.unstable_getCurrentPriorityLevel,Ff=mt.unstable_ImmediatePriority,G_=mt.unstable_UserBlockingPriority,Ya=mt.unstable_NormalPriority,H1=mt.unstable_LowPriority,K_=mt.unstable_IdlePriority,Yl=null,Xt=null;function G1(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Y1,K1=Math.log,q1=Math.LN2;function Y1(t){return t>>>=0,t===0?32:31-(K1(t)/q1|0)|0}var sa=64,oa=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Os(a):(s&=o,s!==0&&(r=Os(s)))}else o=n&~i,o!==0?r=Os(o):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function Q1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Q1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q_(){var t=sa;return sa<<=1,!(sa&4194240)&&(sa=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function J1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function Y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q_,jf,X_,J_,Z_,fd=!1,aa=[],Bn=null,Wn=null,Hn=null,to=new Map,no=new Map,An=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rm(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function _s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fo(e),e!==null&&jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eC(t,e,n,r,i){switch(e){case"focusin":return Bn=_s(Bn,t,e,n,r,i),!0;case"dragenter":return Wn=_s(Wn,t,e,n,r,i),!0;case"mouseover":return Hn=_s(Hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,_s(to.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,_s(no.get(s)||null,t,e,n,r,i)),!0}return!1}function ey(t){var e=Sr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=V_(n),e!==null){t.blockedOn=e,Z_(t.priority,function(){X_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ad=r,n.target.dispatchEvent(r),ad=null}else return e=Fo(n),e!==null&&jf(e),t.blockedOn=n,!1;e.shift()}return!0}function im(t,e,n){xa(t)&&n.delete(e)}function tC(){fd=!1,Bn!==null&&xa(Bn)&&(Bn=null),Wn!==null&&xa(Wn)&&(Wn=null),Hn!==null&&xa(Hn)&&(Hn=null),to.forEach(im),no.forEach(im)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,fd||(fd=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,tC)))}function ro(t){function e(i){return ys(i,t)}if(0<aa.length){ys(aa[0],t);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bn!==null&&ys(Bn,t),Wn!==null&&ys(Wn,t),Hn!==null&&ys(Hn,t),to.forEach(e),no.forEach(e),n=0;n<An.length;n++)r=An[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)ey(n),n.blockedOn===null&&An.shift()}var Pi=Cn.ReactCurrentBatchConfig,Xa=!0;function nC(t,e,n,r){var i=ee,s=Pi.transition;Pi.transition=null;try{ee=1,Uf(t,e,n,r)}finally{ee=i,Pi.transition=s}}function rC(t,e,n,r){var i=ee,s=Pi.transition;Pi.transition=null;try{ee=4,Uf(t,e,n,r)}finally{ee=i,Pi.transition=s}}function Uf(t,e,n,r){if(Xa){var i=hd(t,e,n,r);if(i===null)lc(t,e,r,Ja,n),rm(t,r);else if(eC(i,t,e,n,r))r.stopPropagation();else if(rm(t,r),e&4&&-1<Z1.indexOf(t)){for(;i!==null;){var s=Fo(i);if(s!==null&&Q_(s),s=hd(t,e,n,r),s===null&&lc(t,e,r,Ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lc(t,e,r,null,n)}}var Ja=null;function hd(t,e,n,r){if(Ja=null,t=Mf(r),t=Sr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ja=t,null}function ty(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W1()){case Ff:return 1;case G_:return 4;case Ya:case H1:return 16;case K_:return 536870912;default:return 16}default:return 16}}var jn=null,zf=null,ba=null;function ny(){if(ba)return ba;var t,e=zf,n=e.length,r,i="value"in jn?jn.value:jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ba=i.slice(t,1<r?1-r:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function sm(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?la:sm,this.isPropagationStopped=sm,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=vt(ns),Mo=_e({},ns,{view:0,detail:0}),iC=vt(Mo),Zu,ec,ws,Ql=_e({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(Zu=t.screenX-ws.screenX,ec=t.screenY-ws.screenY):ec=Zu=0,ws=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),om=vt(Ql),sC=_e({},Ql,{dataTransfer:0}),oC=vt(sC),aC=_e({},Mo,{relatedTarget:0}),tc=vt(aC),lC=_e({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),uC=vt(lC),cC=_e({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dC=vt(cC),fC=_e({},ns,{data:0}),am=vt(fC),hC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mC[t])?!!e[t]:!1}function Bf(){return gC}var vC=_e({},Mo,{key:function(t){if(t.key){var e=hC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_C=vt(vC),yC=_e({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=vt(yC),wC=_e({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),EC=vt(wC),SC=_e({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),CC=vt(SC),TC=_e({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IC=vt(TC),kC=[9,13,27,32],Wf=vn&&"CompositionEvent"in window,$s=null;vn&&"documentMode"in document&&($s=document.documentMode);var xC=vn&&"TextEvent"in window&&!$s,ry=vn&&(!Wf||$s&&8<$s&&11>=$s),um=String.fromCharCode(32),cm=!1;function iy(t,e){switch(t){case"keyup":return kC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function bC(t,e){switch(t){case"compositionend":return sy(e);case"keypress":return e.which!==32?null:(cm=!0,um);case"textInput":return t=e.data,t===um&&cm?null:t;default:return null}}function RC(t,e){if(fi)return t==="compositionend"||!Wf&&iy(t,e)?(t=ny(),ba=zf=jn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ry&&e.locale!=="ko"?null:e.data;default:return null}}var PC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PC[t.type]:e==="textarea"}function oy(t,e,n,r){F_(r),e=Za(e,"onChange"),0<e.length&&(n=new Vf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var js=null,io=null;function NC(t){vy(t,0)}function Xl(t){var e=mi(t);if(P_(e))return t}function OC(t,e){if(t==="change")return e}var ay=!1;if(vn){var nc;if(vn){var rc="oninput"in document;if(!rc){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),rc=typeof fm.oninput=="function"}nc=rc}else nc=!1;ay=nc&&(!document.documentMode||9<document.documentMode)}function hm(){js&&(js.detachEvent("onpropertychange",ly),io=js=null)}function ly(t){if(t.propertyName==="value"&&Xl(io)){var e=[];oy(e,io,t,Mf(t)),z_(NC,e)}}function AC(t,e,n){t==="focusin"?(hm(),js=e,io=n,js.attachEvent("onpropertychange",ly)):t==="focusout"&&hm()}function DC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(io)}function LC(t,e){if(t==="click")return Xl(e)}function MC(t,e){if(t==="input"||t==="change")return Xl(e)}function FC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:FC;function so(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yc.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mm(t,e){var n=pm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pm(n)}}function uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cy(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $C(t){var e=cy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uy(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mm(n,s);var o=mm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jC=vn&&"documentMode"in document&&11>=document.documentMode,hi=null,pd=null,Us=null,md=!1;function gm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||hi==null||hi!==Ga(r)||(r=hi,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&so(Us,r)||(Us=r,r=Za(pd,"onSelect"),0<r.length&&(e=new Vf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hi)))}function ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pi={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},ic={},dy={};vn&&(dy=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Jl(t){if(ic[t])return ic[t];if(!pi[t])return t;var e=pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dy)return ic[t]=e[n];return t}var fy=Jl("animationend"),hy=Jl("animationiteration"),py=Jl("animationstart"),my=Jl("transitionend"),gy=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){gy.set(t,e),Kr(e,[t])}for(var sc=0;sc<vm.length;sc++){var oc=vm[sc],UC=oc.toLowerCase(),zC=oc[0].toUpperCase()+oc.slice(1);lr(UC,"on"+zC)}lr(fy,"onAnimationEnd");lr(hy,"onAnimationIteration");lr(py,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(my,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VC=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function _m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,U1(r,e,void 0,t),t.currentTarget=null}function vy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_m(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_m(i,a,u),s=l}}}if(qa)throw t=cd,qa=!1,cd=null,t}function ue(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var r=t+"__bubble";n.has(r)||(_y(e,t,2,!1),n.add(r))}function ac(t,e,n){var r=0;e&&(r|=4),_y(n,t,r,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ca]){t[ca]=!0,I_.forEach(function(n){n!=="selectionchange"&&(VC.has(n)||ac(n,!1,t),ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,ac("selectionchange",!1,e))}}function _y(t,e,n,r){switch(ty(e)){case 1:var i=nC;break;case 4:i=rC;break;default:i=Uf}n=i.bind(null,e,n,t),i=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}z_(function(){var u=s,d=Mf(n),c=[];e:{var f=gy.get(t);if(f!==void 0){var m=Vf,v=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":m=_C;break;case"focusin":v="focus",m=tc;break;case"focusout":v="blur",m=tc;break;case"beforeblur":case"afterblur":m=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=oC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=EC;break;case fy:case hy:case py:m=uC;break;case my:m=CC;break;case"scroll":m=iC;break;case"wheel":m=IC;break;case"copy":case"cut":case"paste":m=dC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=lm}var _=(e&4)!==0,E=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,p!==null&&(S=eo(h,p),S!=null&&_.push(ao(h,S,g)))),E)break;h=h.return}0<_.length&&(f=new m(f,v,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==ad&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[_n]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Sr(v):null,v!==null&&(E=qr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=om,S="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=lm,S="onPointerLeave",p="onPointerEnter",h="pointer"),E=m==null?f:mi(m),g=v==null?f:mi(v),f=new _(S,h+"leave",m,n,d),f.target=E,f.relatedTarget=g,S=null,Sr(d)===u&&(_=new _(p,h+"enter",v,n,d),_.target=g,_.relatedTarget=E,S=_),E=S,m&&v)t:{for(_=m,p=v,h=0,g=_;g;g=oi(g))h++;for(g=0,S=p;S;S=oi(S))g++;for(;0<h-g;)_=oi(_),h--;for(;0<g-h;)p=oi(p),g--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=oi(_),p=oi(p)}_=null}else _=null;m!==null&&ym(c,f,m,_,!1),v!==null&&E!==null&&ym(c,E,v,_,!0)}}e:{if(f=u?mi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=OC;else if(dm(f))if(ay)k=MC;else{k=DC;var T=AC}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=LC);if(k&&(k=k(t,u))){oy(c,k,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&nd(f,"number",f.value)}switch(T=u?mi(u):window,t){case"focusin":(dm(T)||T.contentEditable==="true")&&(hi=T,pd=u,Us=null);break;case"focusout":Us=pd=hi=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,gm(c,n,d);break;case"selectionchange":if(jC)break;case"keydown":case"keyup":gm(c,n,d)}var C;if(Wf)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fi?iy(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ry&&n.locale!=="ko"&&(fi||O!=="onCompositionStart"?O==="onCompositionEnd"&&fi&&(C=ny()):(jn=d,zf="value"in jn?jn.value:jn.textContent,fi=!0)),T=Za(u,O),0<T.length&&(O=new am(O,t,null,n,d),c.push({event:O,listeners:T}),C?O.data=C:(C=sy(n),C!==null&&(O.data=C)))),(C=xC?bC(t,n):RC(t,n))&&(u=Za(u,"onBeforeInput"),0<u.length&&(d=new am("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}vy(c,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Za(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eo(t,n),s!=null&&r.unshift(ao(t,s,i)),s=eo(t,e),s!=null&&r.push(ao(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ym(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=eo(n,s),l!=null&&o.unshift(ao(n,l,a))):i||(l=eo(n,s),l!=null&&o.push(ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BC=/\r\n?/g,WC=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(BC,`
`).replace(WC,"")}function da(t,e,n){if(e=wm(e),wm(t)!==e&&n)throw Error(x(425))}function el(){}var gd=null,vd=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,HC=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,GC=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(t){return Em.resolve(null).then(t).catch(KC)}:yd;function KC(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ro(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),Qt="__reactFiber$"+rs,lo="__reactProps$"+rs,_n="__reactContainer$"+rs,wd="__reactEvents$"+rs,qC="__reactListeners$"+rs,YC="__reactHandles$"+rs;function Sr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sm(t);t!==null;){if(n=t[Qt])return n;t=Sm(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[Qt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Zl(t){return t[lo]||null}var Ed=[],gi=-1;function ur(t){return{current:t}}function fe(t){0>gi||(t.current=Ed[gi],Ed[gi]=null,gi--)}function ae(t,e){gi++,Ed[gi]=t.current,t.current=e}var ir={},Ge=ur(ir),rt=ur(!1),Or=ir;function zi(t,e){var n=t.type.contextTypes;if(!n)return ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function it(t){return t=t.childContextTypes,t!=null}function tl(){fe(rt),fe(Ge)}function Cm(t,e,n){if(Ge.current!==ir)throw Error(x(168));ae(Ge,e),ae(rt,n)}function yy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,A1(t)||"Unknown",i));return _e({},n,r)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Or=Ge.current,ae(Ge,t),ae(rt,rt.current),!0}function Tm(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=yy(t,e,Or),r.__reactInternalMemoizedMergedChildContext=t,fe(rt),fe(Ge),ae(Ge,t)):fe(rt),ae(rt,n)}var un=null,eu=!1,cc=!1;function wy(t){un===null?un=[t]:un.push(t)}function QC(t){eu=!0,wy(t)}function cr(){if(!cc&&un!==null){cc=!0;var t=0,e=ee;try{var n=un;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,eu=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),H_(Ff,cr),i}finally{ee=e,cc=!1}}return null}var vi=[],_i=0,rl=null,il=0,Et=[],St=0,Ar=null,cn=1,dn="";function vr(t,e){vi[_i++]=il,vi[_i++]=rl,rl=t,il=e}function Ey(t,e,n){Et[St++]=cn,Et[St++]=dn,Et[St++]=Ar,Ar=t;var r=cn;t=dn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Ft(e)+i|n<<i|r,dn=s+t}else cn=1<<s|n<<i|r,dn=t}function Gf(t){t.return!==null&&(vr(t,1),Ey(t,1,0))}function Kf(t){for(;t===rl;)rl=vi[--_i],vi[_i]=null,il=vi[--_i],vi[_i]=null;for(;t===Ar;)Ar=Et[--St],Et[St]=null,dn=Et[--St],Et[St]=null,cn=Et[--St],Et[St]=null}var ft=null,ut=null,me=!1,At=null;function Sy(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ft=t,ut=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ft=t,ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:cn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ft=t,ut=null,!0):!1;default:return!1}}function Sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cd(t){if(me){var e=ut;if(e){var n=e;if(!Im(t,e)){if(Sd(t))throw Error(x(418));e=Gn(n.nextSibling);var r=ft;e&&Im(t,e)?Sy(r,n):(t.flags=t.flags&-4097|2,me=!1,ft=t)}}else{if(Sd(t))throw Error(x(418));t.flags=t.flags&-4097|2,me=!1,ft=t}}}function km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ft=t}function fa(t){if(t!==ft)return!1;if(!me)return km(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=ut)){if(Sd(t))throw Cy(),Error(x(418));for(;e;)Sy(t,e),e=Gn(e.nextSibling)}if(km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ut=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ut=null}}else ut=ft?Gn(t.stateNode.nextSibling):null;return!0}function Cy(){for(var t=ut;t;)t=Gn(t.nextSibling)}function Vi(){ut=ft=null,me=!1}function qf(t){At===null?At=[t]:At.push(t)}var XC=Cn.ReactCurrentBatchConfig;function Nt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var sl=ur(null),ol=null,yi=null,Yf=null;function Qf(){Yf=yi=ol=null}function Xf(t){var e=sl.current;fe(sl),t._currentValue=e}function Td(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ni(t,e){ol=t,Yf=yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if(Yf!==t)if(t={context:t,memoizedValue:e,next:null},yi===null){if(ol===null)throw Error(x(308));yi=t,ol.dependencies={lanes:0,firstContext:t}}else yi=yi.next=t;return e}var Cr=null;function Jf(t){Cr===null?Cr=[t]:Cr.push(t)}function Ty(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jf(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,Jf(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}function xm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function al(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(m,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,c,f):v,f==null)break e;c=_e({},c,f);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,l=c):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=c}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var ky=new T_.Component().refs;function Id(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Yn(t),s=mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&($t(e,t,i,r),Pa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Yn(t),s=mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&($t(e,t,i,r),Pa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=Yn(t),i=mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kn(t,i,r),e!==null&&($t(e,t,r,n),Pa(e,t,r))}};function Rm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,r)||!so(i,s):!0}function xy(t,e,n){var r=!1,i=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=it(e)?Or:Ge.current,r=e.contextTypes,s=(r=r!=null)?zi(t,i):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ky,Zf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=it(e)?Or:Ge.current,i.context=zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Id(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ky&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function by(t){function e(p,h){if(t){var g=p.deletions;g===null?(p.deletions=[h],p.flags|=16):g.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Qn(p,h),p.index=0,p.sibling=null,p}function s(p,h,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<h?(p.flags|=2,h):g):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,g,S){return h===null||h.tag!==6?(h=vc(g,p.mode,S),h.return=p,h):(h=i(h,g),h.return=p,h)}function l(p,h,g,S){var k=g.type;return k===di?d(p,h,g.props.children,S,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&Nm(k)===h.type)?(S=i(h,g.props),S.ref=Es(p,h,g),S.return=p,S):(S=Ma(g.type,g.key,g.props,null,p.mode,S),S.ref=Es(p,h,g),S.return=p,S)}function u(p,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=_c(g,p.mode,S),h.return=p,h):(h=i(h,g.children||[]),h.return=p,h)}function d(p,h,g,S,k){return h===null||h.tag!==7?(h=br(g,p.mode,S,k),h.return=p,h):(h=i(h,g),h.return=p,h)}function c(p,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=vc(""+h,p.mode,g),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case na:return g=Ma(h.type,h.key,h.props,null,p.mode,g),g.ref=Es(p,null,h),g.return=p,g;case ci:return h=_c(h,p.mode,g),h.return=p,h;case Pn:var S=h._init;return c(p,S(h._payload),g)}if(Ns(h)||gs(h))return h=br(h,p.mode,g,null),h.return=p,h;ha(p,h)}return null}function f(p,h,g,S){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(p,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case na:return g.key===k?l(p,h,g,S):null;case ci:return g.key===k?u(p,h,g,S):null;case Pn:return k=g._init,f(p,h,k(g._payload),S)}if(Ns(g)||gs(g))return k!==null?null:d(p,h,g,S,null);ha(p,g)}return null}function m(p,h,g,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(g)||null,a(h,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case na:return p=p.get(S.key===null?g:S.key)||null,l(h,p,S,k);case ci:return p=p.get(S.key===null?g:S.key)||null,u(h,p,S,k);case Pn:var T=S._init;return m(p,h,g,T(S._payload),k)}if(Ns(S)||gs(S))return p=p.get(g)||null,d(h,p,S,k,null);ha(h,S)}return null}function v(p,h,g,S){for(var k=null,T=null,C=h,O=h=0,z=null;C!==null&&O<g.length;O++){C.index>O?(z=C,C=null):z=C.sibling;var L=f(p,C,g[O],S);if(L===null){C===null&&(C=z);break}t&&C&&L.alternate===null&&e(p,C),h=s(L,h,O),T===null?k=L:T.sibling=L,T=L,C=z}if(O===g.length)return n(p,C),me&&vr(p,O),k;if(C===null){for(;O<g.length;O++)C=c(p,g[O],S),C!==null&&(h=s(C,h,O),T===null?k=C:T.sibling=C,T=C);return me&&vr(p,O),k}for(C=r(p,C);O<g.length;O++)z=m(C,p,O,g[O],S),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?O:z.key),h=s(z,h,O),T===null?k=z:T.sibling=z,T=z);return t&&C.forEach(function(K){return e(p,K)}),me&&vr(p,O),k}function _(p,h,g,S){var k=gs(g);if(typeof k!="function")throw Error(x(150));if(g=k.call(g),g==null)throw Error(x(151));for(var T=k=null,C=h,O=h=0,z=null,L=g.next();C!==null&&!L.done;O++,L=g.next()){C.index>O?(z=C,C=null):z=C.sibling;var K=f(p,C,L.value,S);if(K===null){C===null&&(C=z);break}t&&C&&K.alternate===null&&e(p,C),h=s(K,h,O),T===null?k=K:T.sibling=K,T=K,C=z}if(L.done)return n(p,C),me&&vr(p,O),k;if(C===null){for(;!L.done;O++,L=g.next())L=c(p,L.value,S),L!==null&&(h=s(L,h,O),T===null?k=L:T.sibling=L,T=L);return me&&vr(p,O),k}for(C=r(p,C);!L.done;O++,L=g.next())L=m(C,p,O,L.value,S),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?O:L.key),h=s(L,h,O),T===null?k=L:T.sibling=L,T=L);return t&&C.forEach(function(Vt){return e(p,Vt)}),me&&vr(p,O),k}function E(p,h,g,S){if(typeof g=="object"&&g!==null&&g.type===di&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case na:e:{for(var k=g.key,T=h;T!==null;){if(T.key===k){if(k=g.type,k===di){if(T.tag===7){n(p,T.sibling),h=i(T,g.props.children),h.return=p,p=h;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&Nm(k)===T.type){n(p,T.sibling),h=i(T,g.props),h.ref=Es(p,T,g),h.return=p,p=h;break e}n(p,T);break}else e(p,T);T=T.sibling}g.type===di?(h=br(g.props.children,p.mode,S,g.key),h.return=p,p=h):(S=Ma(g.type,g.key,g.props,null,p.mode,S),S.ref=Es(p,h,g),S.return=p,p=S)}return o(p);case ci:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(p,h.sibling),h=i(h,g.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=_c(g,p.mode,S),h.return=p,p=h}return o(p);case Pn:return T=g._init,E(p,h,T(g._payload),S)}if(Ns(g))return v(p,h,g,S);if(gs(g))return _(p,h,g,S);ha(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,g),h.return=p,p=h):(n(p,h),h=vc(g,p.mode,S),h.return=p,p=h),o(p)):n(p,h)}return E}var Bi=by(!0),Ry=by(!1),$o={},Jt=ur($o),uo=ur($o),co=ur($o);function Tr(t){if(t===$o)throw Error(x(174));return t}function eh(t,e){switch(ae(co,e),ae(uo,t),ae(Jt,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=id(e,t)}fe(Jt),ae(Jt,e)}function Wi(){fe(Jt),fe(uo),fe(co)}function Py(t){Tr(co.current);var e=Tr(Jt.current),n=id(e,t.type);e!==n&&(ae(uo,t),ae(Jt,n))}function th(t){uo.current===t&&(fe(Jt),fe(uo))}var ge=ur(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function nh(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Na=Cn.ReactCurrentDispatcher,fc=Cn.ReactCurrentBatchConfig,Dr=0,ve=null,Ie=null,Pe=null,ul=!1,zs=!1,fo=0,JC=0;function Ue(){throw Error(x(321))}function rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function ih(t,e,n,r,i,s){if(Dr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?nT:rT,t=n(r,i),zs){s=0;do{if(zs=!1,fo=0,25<=s)throw Error(x(301));s+=1,Pe=Ie=null,e.updateQueue=null,Na.current=iT,t=n(r,i)}while(zs)}if(Na.current=cl,e=Ie!==null&&Ie.next!==null,Dr=0,Pe=Ie=ve=null,ul=!1,e)throw Error(x(300));return t}function sh(){var t=fo!==0;return fo=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ve.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function kt(){if(Ie===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Pe===null?ve.memoizedState:Pe.next;if(e!==null)Pe=e,Ie=t;else{if(t===null)throw Error(x(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Pe===null?ve.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function ho(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=kt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Dr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ve.lanes|=d,Lr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ut(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=kt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ut(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ny(){}function Oy(t,e){var n=ve,r=kt(),i=e(),s=!Ut(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,oh(Ly.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,po(9,Dy.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(x(349));Dr&30||Ay(n,e,i)}return i}function Ay(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dy(t,e,n,r){e.value=n,e.getSnapshot=r,My(e)&&Fy(t)}function Ly(t,e,n){return n(function(){My(e)&&Fy(t)})}function My(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function Fy(t){var e=yn(t,1);e!==null&&$t(e,t,1,-1)}function Om(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=tT.bind(null,ve,t),[e.memoizedState,t]}function po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $y(){return kt().memoizedState}function Oa(t,e,n,r){var i=Gt();ve.flags|=t,i.memoizedState=po(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var i=kt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&rh(r,o.deps)){i.memoizedState=po(e,n,s,r);return}}ve.flags|=t,i.memoizedState=po(1|e,n,s,r)}function Am(t,e){return Oa(8390656,8,t,e)}function oh(t,e){return nu(2048,8,t,e)}function jy(t,e){return nu(4,2,t,e)}function Uy(t,e){return nu(4,4,t,e)}function zy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vy(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,zy.bind(null,e,t),n)}function ah(){}function By(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wy(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hy(t,e,n){return Dr&21?(Ut(n,e)||(n=q_(),ve.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function ZC(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=fc.transition;fc.transition={};try{t(!1),e()}finally{ee=n,fc.transition=r}}function Gy(){return kt().memoizedState}function eT(t,e,n){var r=Yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ky(t))qy(e,n);else if(n=Ty(t,e,n,r),n!==null){var i=Ye();$t(n,t,r,i),Yy(n,e,r)}}function tT(t,e,n){var r=Yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ky(t))qy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ut(a,o)){var l=e.interleaved;l===null?(i.next=i,Jf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ty(t,e,i,r),n!==null&&(i=Ye(),$t(n,t,r,i),Yy(n,e,r))}}function Ky(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function qy(t,e){zs=ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}var cl={readContext:It,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},nT={readContext:It,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,zy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eT.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:Om,useDebugValue:ah,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=Om(!1),e=t[0];return t=ZC.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Gt();if(me){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ae===null)throw Error(x(349));Dr&30||Ay(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Am(Ly.bind(null,r,s,t),[t]),r.flags|=2048,po(9,Dy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=Ae.identifierPrefix;if(me){var n=dn,r=cn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rT={readContext:It,useCallback:By,useContext:It,useEffect:oh,useImperativeHandle:Vy,useInsertionEffect:jy,useLayoutEffect:Uy,useMemo:Wy,useReducer:hc,useRef:$y,useState:function(){return hc(ho)},useDebugValue:ah,useDeferredValue:function(t){var e=kt();return Hy(e,Ie.memoizedState,t)},useTransition:function(){var t=hc(ho)[0],e=kt().memoizedState;return[t,e]},useMutableSource:Ny,useSyncExternalStore:Oy,useId:Gy,unstable_isNewReconciler:!1},iT={readContext:It,useCallback:By,useContext:It,useEffect:oh,useImperativeHandle:Vy,useInsertionEffect:jy,useLayoutEffect:Uy,useMemo:Wy,useReducer:pc,useRef:$y,useState:function(){return pc(ho)},useDebugValue:ah,useDeferredValue:function(t){var e=kt();return Ie===null?e.memoizedState=t:Hy(e,Ie.memoizedState,t)},useTransition:function(){var t=pc(ho)[0],e=kt().memoizedState;return[t,e]},useMutableSource:Ny,useSyncExternalStore:Oy,useId:Gy,unstable_isNewReconciler:!1};function Hi(t,e){try{var n="",r=e;do n+=O1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sT=typeof WeakMap=="function"?WeakMap:Map;function Qy(t,e,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fl||(fl=!0,Fd=r),xd(t,e)},n}function Xy(t,e,n){n=mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yT.bind(null,t,e,n),e.then(t,t))}function Lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mn(-1,1),e.tag=2,Kn(n,e,1))),n.lanes|=1),t)}var oT=Cn.ReactCurrentOwner,et=!1;function qe(t,e,n,r){e.child=t===null?Ry(e,null,n,r):Bi(e,t.child,n,r)}function Fm(t,e,n,r,i){n=n.render;var s=e.ref;return Ni(e,i),r=ih(t,e,n,r,s,i),n=sh(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(me&&n&&Gf(e),e.flags|=1,qe(t,e,r,i),e.child)}function $m(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jy(t,e,s,r,i)):(t=Ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=Qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(so(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,wn(t,e,i)}return bd(t,e,n,r,i)}function Zy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Ei,lt),lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Ei,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Ei,lt),lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Ei,lt),lt|=r;return qe(t,e,i,n),e.child}function e0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bd(t,e,n,r,i){var s=it(n)?Or:Ge.current;return s=zi(e,s),Ni(e,i),n=ih(t,e,n,r,s,i),r=sh(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(me&&r&&Gf(e),e.flags|=1,qe(t,e,n,i),e.child)}function jm(t,e,n,r,i){if(it(n)){var s=!0;nl(e)}else s=!1;if(Ni(e,i),e.stateNode===null)Aa(t,e),xy(e,n,r),kd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=it(n)?Or:Ge.current,u=zi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pm(e,o,r,u),Nn=!1;var f=e.memoizedState;o.state=f,al(e,r,o,i),l=e.memoizedState,a!==r||f!==l||rt.current||Nn?(typeof d=="function"&&(Id(e,n,d,r),l=e.memoizedState),(a=Nn||Rm(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=It(l):(l=it(n)?Or:Ge.current,l=zi(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&Pm(e,o,r,l),Nn=!1,f=e.memoizedState,o.state=f,al(e,r,o,i);var v=e.memoizedState;a!==c||f!==v||rt.current||Nn?(typeof m=="function"&&(Id(e,n,m,r),v=e.memoizedState),(u=Nn||Rm(e,n,u,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Rd(t,e,n,r,s,i)}function Rd(t,e,n,r,i,s){e0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tm(e,n,!1),wn(t,e,s);r=e.stateNode,oT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,a,s)):qe(t,e,a,s),e.memoizedState=r.state,i&&Tm(e,n,!0),e.child}function t0(t){var e=t.stateNode;e.pendingContext?Cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cm(t,e.context,!1),eh(t,e.containerInfo)}function Um(t,e,n,r,i){return Vi(),qf(i),e.flags|=256,qe(t,e,n,r),e.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function n0(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ge,i&1),t===null)return Cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=Pd,t):lh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qn(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pd,r}return s=t.child,t=s.sibling,r=Qn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lh(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,r){return r!==null&&qf(r),Bi(e,t.child,null,n),t=lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mc(Error(x(422))),pa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=Pd,s);if(!(e.mode&1))return pa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=mc(s,r,void 0),pa(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),$t(r,t,i,-1))}return ph(),r=mc(Error(x(421))),pa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ut=Gn(i.nextSibling),ft=e,me=!0,At=null,t!==null&&(Et[St++]=cn,Et[St++]=dn,Et[St++]=Ar,cn=t.id,dn=t.overflow,Ar=e),e=lh(e,r.children),e.flags|=4096,e)}function zm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Td(t.return,e,n)}function gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function r0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zm(t,n,e);else if(t.tag===19)zm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lT(t,e,n){switch(e.tag){case 3:t0(e),Vi();break;case 5:Py(e);break;case 1:it(e.type)&&nl(e);break;case 4:eh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(sl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?n0(t,e,n):(ae(ge,ge.current&1),t=wn(t,e,n),t!==null?t.sibling:null);ae(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return r0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,Zy(t,e,n)}return wn(t,e,n)}var i0,Od,s0,o0;i0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};s0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(Jt.current);var s=null;switch(n){case"input":i=ed(t,i),r=ed(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=rd(t,i),r=rd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=el)}sd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Js.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Js.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};o0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ss(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uT(t,e,n){var r=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(e),null;case 1:return it(e.type)&&tl(),ze(e),null;case 3:return r=e.stateNode,Wi(),fe(rt),fe(Ge),nh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,At!==null&&(Ud(At),At=null))),Od(t,e),ze(e),null;case 5:th(e);var i=Tr(co.current);if(n=e.type,t!==null&&e.stateNode!=null)s0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ze(e),null}if(t=Tr(Jt.current),fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)ue(As[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Qp(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Jp(r,s),ue("invalid",r)}sd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(r.textContent,a,t),i=["children",""+a]):Js.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":ra(r),Xp(r,s,!0);break;case"textarea":ra(r),Zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=el)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[lo]=r,i0(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)ue(As[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Qp(t,r),i=ed(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Jp(t,r),i=rd(t,r),ue("invalid",t);break;default:i=r}sd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?M_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zs(t,l):typeof l=="number"&&Zs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Js.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&Of(t,s,l,o))}switch(n){case"input":ra(t),Xp(t,r,!1);break;case"textarea":ra(t),Zp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ze(e),null;case 6:if(t&&e.stateNode!=null)o0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Tr(co.current),Tr(Jt.current),fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=ft,t!==null))switch(t.tag){case 3:da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return ze(e),null;case 13:if(fe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&ut!==null&&e.mode&1&&!(e.flags&128))Cy(),Vi(),e.flags|=98560,s=!1;else if(s=fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Qt]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ze(e),s=!1}else At!==null&&(Ud(At),At=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?xe===0&&(xe=3):ph())),e.updateQueue!==null&&(e.flags|=4),ze(e),null);case 4:return Wi(),Od(t,e),t===null&&oo(e.stateNode.containerInfo),ze(e),null;case 10:return Xf(e.type._context),ze(e),null;case 17:return it(e.type)&&tl(),ze(e),null;case 19:if(fe(ge),s=e.memoizedState,s===null)return ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ss(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,Ss(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>Gi&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304)}else{if(!r)if(t=ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return ze(e),null}else 2*Ee()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=ge.current,ae(ge,r?n&1|2:n&1),e):(ze(e),null);case 22:case 23:return hh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&(ze(e),e.subtreeFlags&6&&(e.flags|=8192)):ze(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function cT(t,e){switch(Kf(e),e.tag){case 1:return it(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wi(),fe(rt),fe(Ge),nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return th(e),null;case 13:if(fe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ge),null;case 4:return Wi(),null;case 10:return Xf(e.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var ma=!1,Be=!1,dT=typeof WeakSet=="function"?WeakSet:Set,N=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function Ad(t,e,n){try{n()}catch(r){ye(t,e,r)}}var Vm=!1;function fT(t,e){if(gd=Xa,t=cy(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)f=c,c=m;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(m=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:t,selectionRange:n},Xa=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Nt(e.type,_),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(S){ye(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=Vm,Vm=!1,v}function Vs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ad(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a0(t){var e=t.alternate;e!==null&&(t.alternate=null,a0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[lo],delete e[wd],delete e[qC],delete e[YC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l0(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}function Md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var Le=null,Ot=!1;function bn(t,e,n){for(n=n.child;n!==null;)u0(t,e,n),n=n.sibling}function u0(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:Be||wi(n,e);case 6:var r=Le,i=Ot;Le=null,bn(t,e,n),Le=r,Ot=i,Le!==null&&(Ot?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ot?(t=Le,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),ro(t)):uc(Le,n.stateNode));break;case 4:r=Le,i=Ot,Le=n.stateNode.containerInfo,Ot=!0,bn(t,e,n),Le=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ad(n,e,o),i=i.next}while(i!==r)}bn(t,e,n);break;case 1:if(!Be&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ye(n,e,a)}bn(t,e,n);break;case 21:bn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,bn(t,e,n),Be=r):bn(t,e,n);break;default:bn(t,e,n)}}function Wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dT),e.forEach(function(r){var i=ET.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Ot=!1;break e;case 3:Le=a.stateNode.containerInfo,Ot=!0;break e;case 4:Le=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(Le===null)throw Error(x(160));u0(s,o,i),Le=null,Ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ye(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c0(e,t),e=e.sibling}function c0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),Ht(t),r&4){try{Vs(3,t,t.return),ru(3,t)}catch(_){ye(t,t.return,_)}try{Vs(5,t,t.return)}catch(_){ye(t,t.return,_)}}break;case 1:Rt(e,t),Ht(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Rt(e,t),Ht(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(_){ye(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N_(i,s),od(a,o);var u=od(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?M_(i,c):d==="dangerouslySetInnerHTML"?D_(i,c):d==="children"?Zs(i,c):Of(i,d,c,u)}switch(a){case"input":td(i,s);break;case"textarea":O_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?xi(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(_){ye(t,t.return,_)}}break;case 6:if(Rt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ye(t,t.return,_)}}break;case 3:if(Rt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(_){ye(t,t.return,_)}break;case 4:Rt(e,t),Ht(t);break;case 13:Rt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dh=Ee())),r&4&&Wm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(u=Be)||d,Rt(e,t),Be=u):Rt(e,t),Ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(c=N=d;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:Vs(4,f,f.return);break;case 1:wi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ye(r,n,_)}}break;case 5:wi(f,f.return);break;case 22:if(f.memoizedState!==null){Gm(c);continue}}m!==null?(m.return=f,N=m):Gm(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=L_("display",o))}catch(_){ye(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){ye(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Rt(e,t),Ht(t),r&4&&Wm(t);break;case 21:break;default:Rt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l0(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zs(i,""),r.flags&=-33);var s=Bm(t);Md(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bm(t);Ld(t,a,o);break;default:throw Error(x(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hT(t,e,n){N=t,d0(t)}function d0(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ma;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=ma;var u=Be;if(ma=o,(Be=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Km(i):l!==null?(l.return=o,N=l):Km(i);for(;s!==null;)N=s,d0(s),s=s.sibling;N=i,ma=a,Be=u}Hm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Hm(t)}}function Hm(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ro(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Be||e.flags&512&&Dd(e)}catch(f){ye(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Gm(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Km(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ye(e,i,l)}}var s=e.return;try{Dd(e)}catch(l){ye(e,s,l)}break;case 5:var o=e.return;try{Dd(e)}catch(l){ye(e,o,l)}}}catch(l){ye(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var pT=Math.ceil,dl=Cn.ReactCurrentDispatcher,uh=Cn.ReactCurrentOwner,Tt=Cn.ReactCurrentBatchConfig,q=0,Ae=null,Ce=null,$e=0,lt=0,Ei=ur(0),xe=0,mo=null,Lr=0,iu=0,ch=0,Bs=null,Je=null,dh=0,Gi=1/0,ln=null,fl=!1,Fd=null,qn=null,ga=!1,Un=null,hl=0,Ws=0,$d=null,Da=-1,La=0;function Ye(){return q&6?Ee():Da!==-1?Da:Da=Ee()}function Yn(t){return t.mode&1?q&2&&$e!==0?$e&-$e:XC.transition!==null?(La===0&&(La=q_()),La):(t=ee,t!==0||(t=window.event,t=t===void 0?16:ty(t.type)),t):1}function $t(t,e,n,r){if(50<Ws)throw Ws=0,$d=null,Error(x(185));Lo(t,n,r),(!(q&2)||t!==Ae)&&(t===Ae&&(!(q&2)&&(iu|=n),xe===4&&Dn(t,$e)),st(t,r),n===1&&q===0&&!(e.mode&1)&&(Gi=Ee()+500,eu&&cr()))}function st(t,e){var n=t.callbackNode;X1(t,e);var r=Qa(t,t===Ae?$e:0);if(r===0)n!==null&&nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nm(n),e===1)t.tag===0?QC(qm.bind(null,t)):wy(qm.bind(null,t)),GC(function(){!(q&6)&&cr()}),n=null;else{switch(Y_(r)){case 1:n=Ff;break;case 4:n=G_;break;case 16:n=Ya;break;case 536870912:n=K_;break;default:n=Ya}n=y0(n,f0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f0(t,e){if(Da=-1,La=0,q&6)throw Error(x(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=Qa(t,t===Ae?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pl(t,r);else{e=r;var i=q;q|=2;var s=p0();(Ae!==t||$e!==e)&&(ln=null,Gi=Ee()+500,xr(t,e));do try{vT();break}catch(a){h0(t,a)}while(1);Qf(),dl.current=s,q=i,Ce!==null?e=0:(Ae=null,$e=0,e=xe)}if(e!==0){if(e===2&&(i=dd(t),i!==0&&(r=i,e=jd(t,i))),e===1)throw n=mo,xr(t,0),Dn(t,r),st(t,Ee()),n;if(e===6)Dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!mT(i)&&(e=pl(t,r),e===2&&(s=dd(t),s!==0&&(r=s,e=jd(t,s))),e===1))throw n=mo,xr(t,0),Dn(t,r),st(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:_r(t,Je,ln);break;case 3:if(Dn(t,r),(r&130023424)===r&&(e=dh+500-Ee(),10<e)){if(Qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yd(_r.bind(null,t,Je,ln),e);break}_r(t,Je,ln);break;case 4:if(Dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pT(r/1960))-r,10<r){t.timeoutHandle=yd(_r.bind(null,t,Je,ln),r);break}_r(t,Je,ln);break;case 5:_r(t,Je,ln);break;default:throw Error(x(329))}}}return st(t,Ee()),t.callbackNode===n?f0.bind(null,t):null}function jd(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=pl(t,e),t!==2&&(e=Je,Je=n,e!==null&&Ud(e)),t}function Ud(t){Je===null?Je=t:Je.push.apply(Je,t)}function mT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e){for(e&=~ch,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function qm(t){if(q&6)throw Error(x(327));Oi();var e=Qa(t,0);if(!(e&1))return st(t,Ee()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var r=dd(t);r!==0&&(e=r,n=jd(t,r))}if(n===1)throw n=mo,xr(t,0),Dn(t,e),st(t,Ee()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,Je,ln),st(t,Ee()),null}function fh(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Gi=Ee()+500,eu&&cr())}}function Mr(t){Un!==null&&Un.tag===0&&!(q&6)&&Oi();var e=q;q|=1;var n=Tt.transition,r=ee;try{if(Tt.transition=null,ee=1,t)return t()}finally{ee=r,Tt.transition=n,q=e,!(q&6)&&cr()}}function hh(){lt=Ei.current,fe(Ei)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HC(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:Wi(),fe(rt),fe(Ge),nh();break;case 5:th(r);break;case 4:Wi();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Xf(r.type._context);break;case 22:case 23:hh()}n=n.return}if(Ae=t,Ce=t=Qn(t.current,null),$e=lt=e,xe=0,mo=null,ch=iu=Lr=0,Je=Bs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cr=null}return t}function h0(t,e){do{var n=Ce;try{if(Qf(),Na.current=cl,ul){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ul=!1}if(Dr=0,Pe=Ie=ve=null,zs=!1,fo=0,uh.current=null,n===null||n.return===null){xe=1,mo=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Lm(o);if(m!==null){m.flags&=-257,Mm(m,o,a,s,e),m.mode&1&&Dm(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Dm(s,u,e),ph();break e}l=Error(x(426))}}else if(me&&a.mode&1){var E=Lm(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Mm(E,o,a,s,e),qf(Hi(l,a));break e}}s=l=Hi(l,a),xe!==4&&(xe=2),Bs===null?Bs=[s]:Bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Qy(s,l,e);xm(s,p);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qn===null||!qn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Xy(s,a,e);xm(s,S);break e}}s=s.return}while(s!==null)}g0(n)}catch(k){e=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function p0(){var t=dl.current;return dl.current=cl,t===null?cl:t}function ph(){(xe===0||xe===3||xe===2)&&(xe=4),Ae===null||!(Lr&268435455)&&!(iu&268435455)||Dn(Ae,$e)}function pl(t,e){var n=q;q|=2;var r=p0();(Ae!==t||$e!==e)&&(ln=null,xr(t,e));do try{gT();break}catch(i){h0(t,i)}while(1);if(Qf(),q=n,dl.current=r,Ce!==null)throw Error(x(261));return Ae=null,$e=0,xe}function gT(){for(;Ce!==null;)m0(Ce)}function vT(){for(;Ce!==null&&!V1();)m0(Ce)}function m0(t){var e=_0(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?g0(t):Ce=e,uh.current=null}function g0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cT(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=uT(n,e,lt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function _r(t,e,n){var r=ee,i=Tt.transition;try{Tt.transition=null,ee=1,_T(t,e,n,r)}finally{Tt.transition=i,ee=r}return null}function _T(t,e,n,r){do Oi();while(Un!==null);if(q&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(J1(t,s),t===Ae&&(Ce=Ae=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,y0(Ya,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tt.transition,Tt.transition=null;var o=ee;ee=1;var a=q;q|=4,uh.current=null,fT(t,n),c0(n,t),$C(vd),Xa=!!gd,vd=gd=null,t.current=n,hT(n),B1(),q=a,ee=o,Tt.transition=s}else t.current=n;if(ga&&(ga=!1,Un=t,hl=i),s=t.pendingLanes,s===0&&(qn=null),G1(n.stateNode),st(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,t=Fd,Fd=null,t;return hl&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===$d?Ws++:(Ws=0,$d=t):Ws=0,cr(),null}function Oi(){if(Un!==null){var t=Y_(hl),e=Tt.transition,n=ee;try{if(Tt.transition=null,ee=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,hl=0,q&6)throw Error(x(331));var i=q;for(q|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Vs(8,d,s)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var f=d.sibling,m=d.return;if(a0(d),d===u){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var h=t.current;for(N=h;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(k){ye(a,a.return,k)}if(a===o){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(q=i,cr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Yl,t)}catch{}r=!0}return r}finally{ee=n,Tt.transition=e}}return!1}function Ym(t,e,n){e=Hi(n,e),e=Qy(t,e,1),t=Kn(t,e,1),e=Ye(),t!==null&&(Lo(t,1,e),st(t,e))}function ye(t,e,n){if(t.tag===3)Ym(t,t,n);else for(;e!==null;){if(e.tag===3){Ym(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){t=Hi(n,t),t=Xy(e,t,1),e=Kn(e,t,1),t=Ye(),e!==null&&(Lo(e,1,t),st(e,t));break}}e=e.return}}function yT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&($e&n)===n&&(xe===4||xe===3&&($e&130023424)===$e&&500>Ee()-dh?xr(t,0):ch|=n),st(t,e)}function v0(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=Ye();t=yn(t,e),t!==null&&(Lo(t,e,n),st(t,n))}function wT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v0(t,n)}function ET(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),v0(t,n)}var _0;_0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,lT(t,e,n);et=!!(t.flags&131072)}else et=!1,me&&e.flags&1048576&&Ey(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Aa(t,e),t=e.pendingProps;var i=zi(e,Ge.current);Ni(e,n),i=ih(null,e,r,t,i,n);var s=sh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,it(r)?(s=!0,nl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zf(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,kd(e,r,t,n),e=Rd(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Gf(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Aa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CT(r),t=Nt(r,t),i){case 0:e=bd(null,e,r,t,n);break e;case 1:e=jm(null,e,r,t,n);break e;case 11:e=Fm(null,e,r,t,n);break e;case 14:e=$m(null,e,r,Nt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),bd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),jm(t,e,r,i,n);case 3:e:{if(t0(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iy(t,e),al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(x(423)),e),e=Um(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(x(424)),e),e=Um(t,e,r,n,i);break e}else for(ut=Gn(e.stateNode.containerInfo.firstChild),ft=e,me=!0,At=null,n=Ry(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){e=wn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Py(e),t===null&&Cd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_d(r,i)?o=null:s!==null&&_d(r,s)&&(e.flags|=32),e0(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&Cd(e),null;case 13:return n0(t,e,n);case 4:return eh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Fm(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(sl,r._currentValue),r._currentValue=o,s!==null)if(Ut(s.value,o)){if(s.children===i.children&&!rt.current){e=wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Td(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Td(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ni(e,n),i=It(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=Nt(r,e.pendingProps),i=Nt(r.type,i),$m(t,e,r,i,n);case 15:return Jy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Aa(t,e),e.tag=1,it(r)?(t=!0,nl(e)):t=!1,Ni(e,n),xy(e,r,i),kd(e,r,i,n),Rd(null,e,r,!0,t,n);case 19:return r0(t,e,n);case 22:return Zy(t,e,n)}throw Error(x(156,e.tag))};function y0(t,e){return H_(t,e)}function ST(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new ST(t,e,n,r)}function mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CT(t){if(typeof t=="function")return mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===Lf)return 14}return 2}function Qn(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return br(n.children,i,s,e);case Af:o=8,i|=8;break;case Qc:return t=Ct(12,n,e,i|2),t.elementType=Qc,t.lanes=s,t;case Xc:return t=Ct(13,n,e,i),t.elementType=Xc,t.lanes=s,t;case Jc:return t=Ct(19,n,e,i),t.elementType=Jc,t.lanes=s,t;case b_:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k_:o=10;break e;case x_:o=9;break e;case Df:o=11;break e;case Lf:o=14;break e;case Pn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function br(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=b_,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function _c(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gh(t,e,n,r,i,s,o,a,l){return t=new TT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(s),t}function IT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function w0(t){if(!t)return ir;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(it(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(it(n))return yy(t,n,e)}return e}function E0(t,e,n,r,i,s,o,a,l){return t=gh(n,r,!0,t,i,s,o,a,l),t.context=w0(null),n=t.current,r=Ye(),i=Yn(n),s=mn(r,i),s.callback=e??null,Kn(n,s,i),t.current.lanes=i,Lo(t,i,r),st(t,r),t}function ou(t,e,n,r){var i=e.current,s=Ye(),o=Yn(i);return n=w0(n),e.context===null?e.context=n:e.pendingContext=n,e=mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kn(i,e,o),t!==null&&($t(t,i,o,s),Pa(t,i,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vh(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function kT(){return null}var S0=typeof reportError=="function"?reportError:function(t){console.error(t)};function _h(t){this._internalRoot=t}au.prototype.render=_h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));ou(t,e,null,null)};au.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){ou(null,t,null,null)}),e[_n]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=J_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<An.length&&e!==0&&e<An[n].priority;n++);An.splice(n,0,t),n===0&&ey(t)}};function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function xT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ml(o);s.call(u)}}var o=E0(e,r,t,0,null,!1,!1,"",Xm);return t._reactRootContainer=o,t[_n]=o.current,oo(t.nodeType===8?t.parentNode:t),Mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ml(l);a.call(u)}}var l=gh(t,0,!1,null,null,!1,!1,"",Xm);return t._reactRootContainer=l,t[_n]=l.current,oo(t.nodeType===8?t.parentNode:t),Mr(function(){ou(e,l,n,r)}),l}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ml(o);a.call(l)}}ou(e,o,t,i)}else o=xT(n,e,t,i,r);return ml(o)}Q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&($f(e,n|1),st(e,Ee()),!(q&6)&&(Gi=Ee()+500,cr()))}break;case 13:Mr(function(){var r=yn(t,1);if(r!==null){var i=Ye();$t(r,t,1,i)}}),vh(t,1)}};jf=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=Ye();$t(e,t,134217728,n)}vh(t,134217728)}};X_=function(t){if(t.tag===13){var e=Yn(t),n=yn(t,e);if(n!==null){var r=Ye();$t(n,t,e,r)}vh(t,e)}};J_=function(){return ee};Z_=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};ld=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(x(90));P_(r),td(r,i)}}}break;case"textarea":O_(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};j_=fh;U_=Mr;var bT={usingClientEntryPoint:!1,Events:[Fo,mi,Zl,F_,$_,fh]},Cs={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},RT={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B_(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||kT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{Yl=va.inject(RT),Xt=va}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bT;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(e))throw Error(x(200));return IT(t,e,null,n)};gt.createRoot=function(t,e){if(!yh(t))throw Error(x(299));var n=!1,r="",i=S0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gh(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,oo(t.nodeType===8?t.parentNode:t),new _h(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=B_(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return Mr(t)};gt.hydrate=function(t,e,n){if(!lu(e))throw Error(x(200));return uu(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!yh(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=S0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E0(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};gt.render=function(t,e,n){if(!lu(e))throw Error(x(200));return uu(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!lu(t))throw Error(x(40));return t._reactRootContainer?(Mr(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};gt.unstable_batchedUpdates=fh;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return uu(t,e,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(t){console.error(t)}}C0(),E_.exports=gt;var PT=E_.exports,Jm=PT;qc.createRoot=Jm.createRoot,qc.hydrateRoot=Jm.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},go.apply(this,arguments)}var zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zn||(zn={}));const Zm="popstate";function NT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return zd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gl(i)}return AT(e,n,null,t)}function Te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OT(){return Math.random().toString(36).substr(2,8)}function eg(t,e){return{usr:t.state,key:t.key,idx:e}}function zd(t,e,n,r){return n===void 0&&(n=null),go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?is(e):e,{state:n,key:e&&e.key||r||OT()})}function gl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(go({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=zn.Pop;let E=d(),p=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:p})}function f(E,p){a=zn.Push;let h=zd(_.location,E,p);n&&n(h,E),u=d()+1;let g=eg(h,u),S=_.createHref(h);try{o.pushState(g,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}s&&l&&l({action:a,location:_.location,delta:1})}function m(E,p){a=zn.Replace;let h=zd(_.location,E,p);n&&n(h,E),u=d();let g=eg(h,u),S=_.createHref(h);o.replaceState(g,"",S),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:gl(E);return Te(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Zm,c),l=E,()=>{i.removeEventListener(Zm,c),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(E){return o.go(E)}};return _}var tg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tg||(tg={}));function DT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?is(e):e,i=Eh(r.pathname||"/",n);if(i==null)return null;let s=T0(t);LT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=WT(s[a],KT(i));return o}function T0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),T0(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:VT(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of I0(s.path))i(s,o,l)}),e}function I0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=I0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function LT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MT=/^:\w+$/,FT=3,$T=2,jT=1,UT=10,zT=-2,ng=t=>t==="*";function VT(t,e){let n=t.split("/"),r=n.length;return n.some(ng)&&(r+=zT),e&&(r+=$T),n.filter(i=>!ng(i)).reduce((i,s)=>i+(MT.test(s)?FT:s===""?jT:UT),r)}function BT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=HT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Xn([i,d.pathname]),pathnameBase:XT(Xn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Xn([i,d.pathnameBase]))}return s}function HT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=qT(a[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function GT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function KT(t){try{return decodeURI(t)}catch(e){return wh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qT(t,e){try{return decodeURIComponent(t)}catch(n){return wh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Eh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function YT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?is(t):t;return{pathname:n?n.startsWith("/")?n:QT(n,e):e,search:JT(r),hash:ZT(i)}}function QT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function x0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=is(t):(i=go({},t),Te(!i.pathname||!i.pathname.includes("?"),yc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),yc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),yc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let c=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=YT(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),XT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const b0=["post","put","patch","delete"];new Set(b0);const tI=["get",...b0];new Set(tI);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vl.apply(this,arguments)}const Sh=y.createContext(null),nI=y.createContext(null),ss=y.createContext(null),cu=y.createContext(null),Yr=y.createContext({outlet:null,matches:[],isDataRoute:!1}),R0=y.createContext(null);function rI(t,e){let{relative:n}=e===void 0?{}:e;jo()||Te(!1);let{basename:r,navigator:i}=y.useContext(ss),{hash:s,pathname:o,search:a}=N0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function jo(){return y.useContext(cu)!=null}function du(){return jo()||Te(!1),y.useContext(cu).location}function P0(t){y.useContext(ss).static||y.useLayoutEffect(t)}function iI(){let{isDataRoute:t}=y.useContext(Yr);return t?vI():sI()}function sI(){jo()||Te(!1);let t=y.useContext(Sh),{basename:e,navigator:n}=y.useContext(ss),{matches:r}=y.useContext(Yr),{pathname:i}=du(),s=JSON.stringify(k0(r).map(l=>l.pathnameBase)),o=y.useRef(!1);return P0(()=>{o.current=!0}),y.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=x0(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Xn([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,i,t])}function N0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=y.useContext(Yr),{pathname:i}=du(),s=JSON.stringify(k0(r).map(o=>o.pathnameBase));return y.useMemo(()=>x0(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function oI(t,e){return aI(t,e)}function aI(t,e,n){jo()||Te(!1);let{navigator:r}=y.useContext(ss),{matches:i}=y.useContext(Yr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=du(),u;if(e){var d;let _=typeof e=="string"?is(e):e;a==="/"||(d=_.pathname)!=null&&d.startsWith(a)||Te(!1),u=_}else u=l;let c=u.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",m=DT(t,{pathname:f}),v=fI(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Xn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Xn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?y.createElement(cu.Provider,{value:{location:vl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:zn.Pop}},v):v}function lI(){let t=gI(),e=eI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:i},n):null,s)}const uI=y.createElement(lI,null);class cI extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?y.createElement(Yr.Provider,{value:this.props.routeContext},y.createElement(R0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dI(t){let{routeContext:e,match:n,children:r}=t,i=y.useContext(Sh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Yr.Provider,{value:e},r)}function fI(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,c=null;n&&(c=l.route.errorElement||uI);let f=e.concat(s.slice(0,u+1)),m=()=>{let v;return d?v=c:l.route.Component?v=y.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,y.createElement(dI,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?y.createElement(cI,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var O0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(O0||{}),_l=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(_l||{});function hI(t){let e=y.useContext(Sh);return e||Te(!1),e}function pI(t){let e=y.useContext(nI);return e||Te(!1),e}function mI(t){let e=y.useContext(Yr);return e||Te(!1),e}function A0(t){let e=mI(),n=e.matches[e.matches.length-1];return n.route.id||Te(!1),n.route.id}function gI(){var t;let e=y.useContext(R0),n=pI(_l.UseRouteError),r=A0(_l.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function vI(){let{router:t}=hI(O0.UseNavigateStable),e=A0(_l.UseNavigateStable),n=y.useRef(!1);return P0(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,vl({fromRouteId:e},s)))},[t,e])}function Fa(t){Te(!1)}function _I(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zn.Pop,navigator:s,static:o=!1}=t;jo()&&Te(!1);let a=e.replace(/^\/*/,"/"),l=y.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=is(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:m="default"}=r,v=y.useMemo(()=>{let _=Eh(u,a);return _==null?null:{location:{pathname:_,search:d,hash:c,state:f,key:m},navigationType:i}},[a,u,d,c,f,m,i]);return v==null?null:y.createElement(ss.Provider,{value:l},y.createElement(cu.Provider,{children:n,value:v}))}function yI(t){let{children:e,location:n}=t;return oI(Vd(e),n)}new Promise(()=>{});function Vd(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(r,i)=>{if(!y.isValidElement(r))return;let s=[...e,i];if(r.type===y.Fragment){n.push.apply(n,Vd(r.props.children,s));return}r.type!==Fa&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Vd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bd(){return Bd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bd.apply(this,arguments)}function wI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function EI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function SI(t,e){return t.button===0&&(!e||e==="_self")&&!EI(t)}const CI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],TI="startTransition",rg=Kc[TI];function II(t){let{basename:e,children:n,future:r,window:i}=t,s=y.useRef();s.current==null&&(s.current=NT({window:i,v5Compat:!0}));let o=s.current,[a,l]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=y.useCallback(c=>{u&&rg?rg(()=>l(c)):l(c)},[l,u]);return y.useLayoutEffect(()=>o.listen(d),[o,d]),y.createElement(_I,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const kI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bI=y.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d}=e,c=wI(e,CI),{basename:f}=y.useContext(ss),m,v=!1;if(typeof u=="string"&&xI.test(u)&&(m=u,kI))try{let h=new URL(window.location.href),g=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Eh(g.pathname,f);g.origin===h.origin&&S!=null?u=S+g.search+g.hash:v=!0}catch{}let _=rI(u,{relative:i}),E=RI(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});function p(h){r&&r(h),h.defaultPrevented||E(h)}return y.createElement("a",Bd({},c,{href:m||_,onClick:v||s?r:p,ref:n,target:l}))});var ig;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ig||(ig={}));var sg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sg||(sg={}));function RI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=iI(),l=du(),u=N0(t,{relative:o});return y.useCallback(d=>{if(SI(d,n)){d.preventDefault();let c=r!==void 0?r:gl(l)===gl(u);a(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function Wd(){return Wd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wd.apply(this,arguments)}function D0(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var PI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,NI=D0(function(t){return PI.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function OI(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function AI(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var DI=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(AI(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=OI(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Ve="-ms-",yl="-moz-",Y="-webkit-",L0="comm",Ch="rule",Th="decl",LI="@import",M0="@keyframes",MI="@layer",FI=Math.abs,fu=String.fromCharCode,$I=Object.assign;function jI(t,e){return Fe(t,0)^45?(((e<<2^Fe(t,0))<<2^Fe(t,1))<<2^Fe(t,2))<<2^Fe(t,3):0}function F0(t){return t.trim()}function UI(t,e){return(t=e.exec(t))?t[0]:t}function Q(t,e,n){return t.replace(e,n)}function Hd(t,e){return t.indexOf(e)}function Fe(t,e){return t.charCodeAt(e)|0}function vo(t,e,n){return t.slice(e,n)}function qt(t){return t.length}function Ih(t){return t.length}function _a(t,e){return e.push(t),t}function zI(t,e){return t.map(e).join("")}var hu=1,Ki=1,$0=0,ot=0,Se=0,os="";function pu(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:hu,column:Ki,length:o,return:""}}function Ts(t,e){return $I(pu("",null,null,"",null,null,0),t,{length:-t.length},e)}function VI(){return Se}function BI(){return Se=ot>0?Fe(os,--ot):0,Ki--,Se===10&&(Ki=1,hu--),Se}function ht(){return Se=ot<$0?Fe(os,ot++):0,Ki++,Se===10&&(Ki=1,hu++),Se}function Zt(){return Fe(os,ot)}function $a(){return ot}function Uo(t,e){return vo(os,t,e)}function _o(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j0(t){return hu=Ki=1,$0=qt(os=t),ot=0,[]}function U0(t){return os="",t}function ja(t){return F0(Uo(ot-1,Gd(t===91?t+2:t===40?t+1:t)))}function WI(t){for(;(Se=Zt())&&Se<33;)ht();return _o(t)>2||_o(Se)>3?"":" "}function HI(t,e){for(;--e&&ht()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Uo(t,$a()+(e<6&&Zt()==32&&ht()==32))}function Gd(t){for(;ht();)switch(Se){case t:return ot;case 34:case 39:t!==34&&t!==39&&Gd(Se);break;case 40:t===41&&Gd(t);break;case 92:ht();break}return ot}function GI(t,e){for(;ht()&&t+Se!==47+10;)if(t+Se===42+42&&Zt()===47)break;return"/*"+Uo(e,ot-1)+"*"+fu(t===47?t:ht())}function KI(t){for(;!_o(Zt());)ht();return Uo(t,ot)}function qI(t){return U0(Ua("",null,null,null,[""],t=j0(t),0,[0],t))}function Ua(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,m=0,v=0,_=1,E=1,p=1,h=0,g="",S=i,k=s,T=r,C=g;E;)switch(v=h,h=ht()){case 40:if(v!=108&&Fe(C,c-1)==58){Hd(C+=Q(ja(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=ja(h);break;case 9:case 10:case 13:case 32:C+=WI(v);break;case 92:C+=HI($a()-1,7);continue;case 47:switch(Zt()){case 42:case 47:_a(YI(GI(ht(),$a()),e,n),l);break;default:C+="/"}break;case 123*_:a[u++]=qt(C)*p;case 125*_:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+d:p==-1&&(C=Q(C,/\f/g,"")),m>0&&qt(C)-c&&_a(m>32?ag(C+";",r,n,c-1):ag(Q(C," ","")+";",r,n,c-2),l);break;case 59:C+=";";default:if(_a(T=og(C,e,n,u,d,i,a,g,S=[],k=[],c),s),h===123)if(d===0)Ua(C,e,T,T,S,s,c,a,k);else switch(f===99&&Fe(C,3)===110?100:f){case 100:case 108:case 109:case 115:Ua(t,T,T,r&&_a(og(t,T,T,0,0,i,a,g,i,S=[],c),k),i,k,c,a,r?S:k);break;default:Ua(C,T,T,T,[""],k,0,a,k)}}u=d=m=0,_=p=1,g=C="",c=o;break;case 58:c=1+qt(C),m=v;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&BI()==125)continue}switch(C+=fu(h),h*_){case 38:p=d>0?1:(C+="\f",-1);break;case 44:a[u++]=(qt(C)-1)*p,p=1;break;case 64:Zt()===45&&(C+=ja(ht())),f=Zt(),d=c=qt(g=C+=KI($a())),h++;break;case 45:v===45&&qt(C)==2&&(_=0)}}return s}function og(t,e,n,r,i,s,o,a,l,u,d){for(var c=i-1,f=i===0?s:[""],m=Ih(f),v=0,_=0,E=0;v<r;++v)for(var p=0,h=vo(t,c+1,c=FI(_=o[v])),g=t;p<m;++p)(g=F0(_>0?f[p]+" "+h:Q(h,/&\f/g,f[p])))&&(l[E++]=g);return pu(t,e,n,i===0?Ch:a,l,u,d)}function YI(t,e,n){return pu(t,e,n,L0,fu(VI()),vo(t,2,-2),0)}function ag(t,e,n,r){return pu(t,e,n,Th,vo(t,0,r),vo(t,r+1,-1),r)}function Ai(t,e){for(var n="",r=Ih(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function QI(t,e,n,r){switch(t.type){case MI:if(t.children.length)break;case LI:case Th:return t.return=t.return||t.value;case L0:return"";case M0:return t.return=t.value+"{"+Ai(t.children,r)+"}";case Ch:t.value=t.props.join(",")}return qt(n=Ai(t.children,r))?t.return=t.value+"{"+n+"}":""}function XI(t){var e=Ih(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function JI(t){return function(e){e.root||(e=e.return)&&t(e)}}var ZI=function(e,n,r){for(var i=0,s=0;i=s,s=Zt(),i===38&&s===12&&(n[r]=1),!_o(s);)ht();return Uo(e,ot)},ek=function(e,n){var r=-1,i=44;do switch(_o(i)){case 0:i===38&&Zt()===12&&(n[r]=1),e[r]+=ZI(ot-1,n,r);break;case 2:e[r]+=ja(i);break;case 4:if(i===44){e[++r]=Zt()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=fu(i)}while(i=ht());return e},tk=function(e,n){return U0(ek(j0(e),n))},lg=new WeakMap,nk=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!lg.get(r))&&!i){lg.set(e,!0);for(var s=[],o=tk(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var d=0;d<a.length;d++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[d]):a[d]+" "+o[l]}}},rk=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function z0(t,e){switch(jI(t,e)){case 5103:return Y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+t+yl+t+Ve+t+t;case 6828:case 4268:return Y+t+Ve+t+t;case 6165:return Y+t+Ve+"flex-"+t+t;case 5187:return Y+t+Q(t,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Ve+"flex-$1$2")+t;case 5443:return Y+t+Ve+"flex-item-"+Q(t,/flex-|-self/,"")+t;case 4675:return Y+t+Ve+"flex-line-pack"+Q(t,/align-content|flex-|-self/,"")+t;case 5548:return Y+t+Ve+Q(t,"shrink","negative")+t;case 5292:return Y+t+Ve+Q(t,"basis","preferred-size")+t;case 6060:return Y+"box-"+Q(t,"-grow","")+Y+t+Ve+Q(t,"grow","positive")+t;case 4554:return Y+Q(t,/([^-])(transform)/g,"$1"+Y+"$2")+t;case 6187:return Q(Q(Q(t,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),t,"")+t;case 5495:case 3959:return Q(t,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return Q(Q(t,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+t+t;case 4095:case 3583:case 4068:case 2532:return Q(t,/(.+)-inline(.+)/,Y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qt(t)-1-e>6)switch(Fe(t,e+1)){case 109:if(Fe(t,e+4)!==45)break;case 102:return Q(t,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+yl+(Fe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Hd(t,"stretch")?z0(Q(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Fe(t,e+1)!==115)break;case 6444:switch(Fe(t,qt(t)-3-(~Hd(t,"!important")&&10))){case 107:return Q(t,":",":"+Y)+t;case 101:return Q(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(Fe(t,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Ve+"$2box$3")+t}break;case 5936:switch(Fe(t,e+11)){case 114:return Y+t+Ve+Q(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Y+t+Ve+Q(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Y+t+Ve+Q(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Y+t+Ve+t+t}return t}var ik=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Th:e.return=z0(e.value,e.length);break;case M0:return Ai([Ts(e,{value:Q(e.value,"@","@"+Y)})],i);case Ch:if(e.length)return zI(e.props,function(s){switch(UI(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ai([Ts(e,{props:[Q(s,/:(read-\w+)/,":"+yl+"$1")]})],i);case"::placeholder":return Ai([Ts(e,{props:[Q(s,/:(plac\w+)/,":"+Y+"input-$1")]}),Ts(e,{props:[Q(s,/:(plac\w+)/,":"+yl+"$1")]}),Ts(e,{props:[Q(s,/:(plac\w+)/,Ve+"input-$1")]})],i)}return""})}},sk=[ik],ok=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var E=_.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=e.stylisPlugins||sk,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var E=_.getAttribute("data-emotion").split(" "),p=1;p<E.length;p++)s[E[p]]=!0;a.push(_)});var l,u=[nk,rk];{var d,c=[QI,JI(function(_){d.insert(_)})],f=XI(u.concat(i,c)),m=function(E){return Ai(qI(E),f)};l=function(E,p,h,g){d=h,m(E?E+"{"+p.styles+"}":p.styles),g&&(v.inserted[p.name]=!0)}}var v={key:n,sheet:new DI({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},V0={exports:{}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,kh=De?Symbol.for("react.element"):60103,xh=De?Symbol.for("react.portal"):60106,mu=De?Symbol.for("react.fragment"):60107,gu=De?Symbol.for("react.strict_mode"):60108,vu=De?Symbol.for("react.profiler"):60114,_u=De?Symbol.for("react.provider"):60109,yu=De?Symbol.for("react.context"):60110,bh=De?Symbol.for("react.async_mode"):60111,wu=De?Symbol.for("react.concurrent_mode"):60111,Eu=De?Symbol.for("react.forward_ref"):60112,Su=De?Symbol.for("react.suspense"):60113,ak=De?Symbol.for("react.suspense_list"):60120,Cu=De?Symbol.for("react.memo"):60115,Tu=De?Symbol.for("react.lazy"):60116,lk=De?Symbol.for("react.block"):60121,uk=De?Symbol.for("react.fundamental"):60117,ck=De?Symbol.for("react.responder"):60118,dk=De?Symbol.for("react.scope"):60119;function _t(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case kh:switch(t=t.type,t){case bh:case wu:case mu:case vu:case gu:case Su:return t;default:switch(t=t&&t.$$typeof,t){case yu:case Eu:case Tu:case Cu:case _u:return t;default:return e}}case xh:return e}}}function B0(t){return _t(t)===wu}te.AsyncMode=bh;te.ConcurrentMode=wu;te.ContextConsumer=yu;te.ContextProvider=_u;te.Element=kh;te.ForwardRef=Eu;te.Fragment=mu;te.Lazy=Tu;te.Memo=Cu;te.Portal=xh;te.Profiler=vu;te.StrictMode=gu;te.Suspense=Su;te.isAsyncMode=function(t){return B0(t)||_t(t)===bh};te.isConcurrentMode=B0;te.isContextConsumer=function(t){return _t(t)===yu};te.isContextProvider=function(t){return _t(t)===_u};te.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===kh};te.isForwardRef=function(t){return _t(t)===Eu};te.isFragment=function(t){return _t(t)===mu};te.isLazy=function(t){return _t(t)===Tu};te.isMemo=function(t){return _t(t)===Cu};te.isPortal=function(t){return _t(t)===xh};te.isProfiler=function(t){return _t(t)===vu};te.isStrictMode=function(t){return _t(t)===gu};te.isSuspense=function(t){return _t(t)===Su};te.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===mu||t===wu||t===vu||t===gu||t===Su||t===ak||typeof t=="object"&&t!==null&&(t.$$typeof===Tu||t.$$typeof===Cu||t.$$typeof===_u||t.$$typeof===yu||t.$$typeof===Eu||t.$$typeof===uk||t.$$typeof===ck||t.$$typeof===dk||t.$$typeof===lk)};te.typeOf=_t;V0.exports=te;var fk=V0.exports,Rh=fk,hk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mk={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ph={};Ph[Rh.ForwardRef]=mk;Ph[Rh.Memo]=W0;function ug(t){return Rh.isMemo(t)?W0:Ph[t.$$typeof]||hk}var gk=Object.defineProperty,vk=Object.getOwnPropertyNames,cg=Object.getOwnPropertySymbols,_k=Object.getOwnPropertyDescriptor,yk=Object.getPrototypeOf,dg=Object.prototype;function H0(t,e,n){if(typeof e!="string"){if(dg){var r=yk(e);r&&r!==dg&&H0(t,r,n)}var i=vk(e);cg&&(i=i.concat(cg(e)));for(var s=ug(t),o=ug(e),a=0;a<i.length;++a){var l=i[a];if(!pk[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=_k(e,l);try{gk(t,l,u)}catch{}}}}return t}var wk=H0;const Ek=Kl(wk);var Sk=!0;function Ck(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var G0=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Sk===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Tk=function(e,n,r){G0(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Ik(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var kk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xk=/[A-Z]|^ms/g,bk=/_EMO_([^_]+?)_([^]*?)_EMO_/g,K0=function(e){return e.charCodeAt(1)===45},fg=function(e){return e!=null&&typeof e!="boolean"},wc=D0(function(t){return K0(t)?t:t.replace(xk,"-$&").toLowerCase()}),hg=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(bk,function(r,i,s){return Yt={name:i,styles:s,next:Yt},i})}return kk[e]!==1&&!K0(e)&&typeof n=="number"&&n!==0?n+"px":n};function yo(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Yt={name:n.name,styles:n.styles,next:Yt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Yt={name:r.name,styles:r.styles,next:Yt},r=r.next;var i=n.styles+";";return i}return Rk(t,e,n)}case"function":{if(t!==void 0){var s=Yt,o=n(t);return Yt=s,yo(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function Rk(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=yo(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":fg(o)&&(r+=wc(s)+":"+hg(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)fg(o[a])&&(r+=wc(s)+":"+hg(s,o[a])+";");else{var l=yo(t,e,o);switch(s){case"animation":case"animationName":{r+=wc(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var pg=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Yt,Pk=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";Yt=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=yo(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=yo(r,n,e[a]),i&&(s+=o[a]);pg.lastIndex=0;for(var l="",u;(u=pg.exec(s))!==null;)l+="-"+u[1];var d=Ik(s)+l;return{name:d,styles:s,next:Yt}},Nk=function(e){return e()},Ok=Kc["useInsertionEffect"]?Kc["useInsertionEffect"]:!1,Ak=Ok||Nk,q0=y.createContext(typeof HTMLElement<"u"?ok({key:"css"}):null);q0.Provider;var Dk=function(e){return y.forwardRef(function(n,r){var i=y.useContext(q0);return e(n,i,r)})},Lk=y.createContext({}),Mk=NI,Fk=function(e){return e!=="theme"},mg=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Mk:Fk},gg=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},$k=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return G0(n,r,i),Ak(function(){return Tk(n,r,i)}),null},jk=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=gg(e,n,r),l=a||mg(i),u=!l("as");return function(){var d=arguments,c=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&c.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var f=d.length,m=1;m<f;m++)c.push(d[m],d[0][m])}var v=Dk(function(_,E,p){var h=u&&_.as||i,g="",S=[],k=_;if(_.theme==null){k={};for(var T in _)k[T]=_[T];k.theme=y.useContext(Lk)}typeof _.className=="string"?g=Ck(E.registered,S,_.className):_.className!=null&&(g=_.className+" ");var C=Pk(c.concat(S),E.registered,k);g+=E.key+"-"+C.name,o!==void 0&&(g+=" "+o);var O=u&&a===void 0?mg(h):l,z={};for(var L in _)u&&L==="as"||O(L)&&(z[L]=_[L]);return z.className=g,z.ref=p,y.createElement(y.Fragment,null,y.createElement($k,{cache:E,serialized:C,isStringTag:typeof h=="string"}),y.createElement(h,z))});return v.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=c,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return"."+o}}),v.withComponent=function(_,E){return t(_,Wd({},n,E,{shouldForwardProp:gg(v,E,!0)})).apply(void 0,c)},v}},Uk=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],F=jk.bind();Uk.forEach(function(t){F[t]=F(t)});const Y0="/learnlingvo/assets/boy-691b2b7a.png",zk=F.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 99vh;
  min-width: 290px;
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  padding-top: 1.25rem;
  padding-bottom: 1.56rem;
`,Vk=F.main`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  gap: 1.7%;
`,Bk=F.section`
  width: 54.9%;
  flex-basis: 720px;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 6.125rem 4rem;
`,Wk=F.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
  & em {
    background-color: #fbe9ba;
  }
`,Hk=F.a`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.56;
  padding: 1rem 5.5rem;
  border-radius: 12px;
  background-color: #f4c550;
`,Gk=F.p`
  width: 29.4rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  line-height: 1.375;
  letter-spacing: -0.32px;
`,Kk=F.section`
  position: relative;
  width: 43.4%;
  flex-basis: 568px;
  aspect-ratio: calc(570 / 500);
  /* height: 100%; */
  border-radius: 30px;
  background: url(${Y0}),
    linear-gradient(
      to right,
      rgba(251, 233, 186, 1),
      rgba(251, 233, 186, 1)
    );
  background-position: 50% 50%, center;
  background-repeat: no-repeat;
  background-size: min(50%, 285px) auto, 100% auto;
  /* object-fit: cover; */
  overflow: hidden;
`,qk=F.svg`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 46px;
  height: 56px;
  /* background-image: url("#icon-apple"); */
  /* mask-image: url(src/assets/img/sprite.svg#icon-apple);
  mask-position: 0 0;
  mask-repeat: no-repeat;
  mask-size: contain; */
  fill: #fbe9ba;
  /* linear-gradient(180deg, #fbe9ba 0%, #e7c885 100%); */
`,Yk=F.div`
  position: absolute;
  width: 360px;
  aspect-ratio: 1;
  background-color: #f4c550;
  border-radius: 3%;
  top: 71%;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
`,Nh="/learnlingvo/assets/sprite-6040c1bf.svg",Qk=[{overview:"Experienced tutors",quantity:32e3},{overview:"5-star tutor reviews",quantity:3e5},{overview:"Subjects taught",quantity:120},{overview:"Tutor nationalities",quantity:200}],Xk=F.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: space-between;
  width: 100%;
  padding: 40px 122px;
  border-radius: 30px;
  border: 1.5px dashed #f4c550;
`,Jk=F.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 16px;
`,Zk=F.h2`
  font-size: calc(28rem / 16);
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;
`,ex=F.p`
  max-width: 74px;
  color: rgba(18, 20, 23, 0.7);
  font-size: calc(14rem / 16);
  line-height: 1.29;
  letter-spacing: -0.28px;
`,tx=()=>I.jsx(Xk,{children:Qk.map(t=>I.jsxs(Jk,{children:[I.jsxs(Zk,{children:[t.quantity>=1e3?t.quantity.toLocaleString("en-GB"):t.quantity," +"]}),I.jsx(ex,{children:t.overview})]},t.overview))}),nx=F.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,rx=F.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,ix=F.div`
  width: calc(28rem / 16);
  height: calc(28rem / 16);
  border-radius: 50%;
  background: linear-gradient(to top, #ffda44 50%, #338af3 50%);
`,sx=F.div`
  font-size: calc(20rem / 16);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`,ox=F.nav`
  display: flex;
  gap: calc(28rem / 16);
`,vg=F(bI)`
  font-size: 1rem;
  line-height: 1.25;
`,ax=F.div`
  display: flex;
  gap: 1rem;
`,lx=F.button`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  background: transparent;
  border: none;
  &::before {
    position: relative;
    width: 80%;
    /* height: 80px; */
    content: " ";
    /* top: 20px; */
    /* left: 20px; */
    /* fill: red; */
    background-image: url(${Y0});
    background-position: 0 0;
  }
`,_g=F.button`
  padding: 0.875rem 2.44rem;
  border-radius: 12px;
  background: #121417;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
`;var ux=function(e){return cx(e)&&!dx(e)};function cx(t){return!!t&&typeof t=="object"}function dx(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||px(t)}var fx=typeof Symbol=="function"&&Symbol.for,hx=fx?Symbol.for("react.element"):60103;function px(t){return t.$$typeof===hx}function mx(t){return Array.isArray(t)?[]:{}}function wl(t,e){return e.clone!==!1&&e.isMergeableObject(t)?wo(mx(t),t,e):t}function gx(t,e,n){return t.concat(e).map(function(r){return wl(r,n)})}function vx(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=wl(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=wl(e[i],n):r[i]=wo(t[i],e[i],n)}),r}function wo(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||gx,n.isMergeableObject=n.isMergeableObject||ux;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):vx(t,e,n):wl(e,n)}wo.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return wo(r,i,n)},{})};var Kd=wo,_x=typeof global=="object"&&global&&global.Object===Object&&global;const Q0=_x;var yx=typeof self=="object"&&self&&self.Object===Object&&self,wx=Q0||yx||Function("return this")();const sn=wx;var Ex=sn.Symbol;const sr=Ex;var X0=Object.prototype,Sx=X0.hasOwnProperty,Cx=X0.toString,Is=sr?sr.toStringTag:void 0;function Tx(t){var e=Sx.call(t,Is),n=t[Is];try{t[Is]=void 0;var r=!0}catch{}var i=Cx.call(t);return r&&(e?t[Is]=n:delete t[Is]),i}var Ix=Object.prototype,kx=Ix.toString;function xx(t){return kx.call(t)}var bx="[object Null]",Rx="[object Undefined]",yg=sr?sr.toStringTag:void 0;function Qr(t){return t==null?t===void 0?Rx:bx:yg&&yg in Object(t)?Tx(t):xx(t)}function J0(t,e){return function(n){return t(e(n))}}var Px=J0(Object.getPrototypeOf,Object);const Oh=Px;function Xr(t){return t!=null&&typeof t=="object"}var Nx="[object Object]",Ox=Function.prototype,Ax=Object.prototype,Z0=Ox.toString,Dx=Ax.hasOwnProperty,Lx=Z0.call(Object);function wg(t){if(!Xr(t)||Qr(t)!=Nx)return!1;var e=Oh(t);if(e===null)return!0;var n=Dx.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Z0.call(n)==Lx}var Eg=Array.isArray,Sg=Object.keys,Mx=Object.prototype.hasOwnProperty,Fx=typeof Element<"u";function qd(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Eg(t),r=Eg(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!qd(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=Sg(t);if(s=c.length,s!==Sg(e).length)return!1;for(i=s;i--!==0;)if(!Mx.call(e,c[i]))return!1;if(Fx&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!qd(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var $x=function(e,n){try{return qd(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const On=Kl($x);var jx=!0;function ew(t,e){if(!jx){if(t)return;var n="Warning: "+e;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function Ux(){this.__data__=[],this.size=0}function tw(t,e){return t===e||t!==t&&e!==e}function Iu(t,e){for(var n=t.length;n--;)if(tw(t[n][0],e))return n;return-1}var zx=Array.prototype,Vx=zx.splice;function Bx(t){var e=this.__data__,n=Iu(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Vx.call(e,n,1),--this.size,!0}function Wx(t){var e=this.__data__,n=Iu(e,t);return n<0?void 0:e[n][1]}function Hx(t){return Iu(this.__data__,t)>-1}function Gx(t,e){var n=this.__data__,r=Iu(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Tn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Tn.prototype.clear=Ux;Tn.prototype.delete=Bx;Tn.prototype.get=Wx;Tn.prototype.has=Hx;Tn.prototype.set=Gx;function Kx(){this.__data__=new Tn,this.size=0}function qx(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Yx(t){return this.__data__.get(t)}function Qx(t){return this.__data__.has(t)}function zo(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Xx="[object AsyncFunction]",Jx="[object Function]",Zx="[object GeneratorFunction]",eb="[object Proxy]";function nw(t){if(!zo(t))return!1;var e=Qr(t);return e==Jx||e==Zx||e==Xx||e==eb}var tb=sn["__core-js_shared__"];const Ec=tb;var Cg=function(){var t=/[^.]+$/.exec(Ec&&Ec.keys&&Ec.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function nb(t){return!!Cg&&Cg in t}var rb=Function.prototype,ib=rb.toString;function Jr(t){if(t!=null){try{return ib.call(t)}catch{}try{return t+""}catch{}}return""}var sb=/[\\^$.*+?()[\]{}|]/g,ob=/^\[object .+?Constructor\]$/,ab=Function.prototype,lb=Object.prototype,ub=ab.toString,cb=lb.hasOwnProperty,db=RegExp("^"+ub.call(cb).replace(sb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function fb(t){if(!zo(t)||nb(t))return!1;var e=nw(t)?db:ob;return e.test(Jr(t))}function hb(t,e){return t==null?void 0:t[e]}function Zr(t,e){var n=hb(t,e);return fb(n)?n:void 0}var pb=Zr(sn,"Map");const Eo=pb;var mb=Zr(Object,"create");const So=mb;function gb(){this.__data__=So?So(null):{},this.size=0}function vb(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var _b="__lodash_hash_undefined__",yb=Object.prototype,wb=yb.hasOwnProperty;function Eb(t){var e=this.__data__;if(So){var n=e[t];return n===_b?void 0:n}return wb.call(e,t)?e[t]:void 0}var Sb=Object.prototype,Cb=Sb.hasOwnProperty;function Tb(t){var e=this.__data__;return So?e[t]!==void 0:Cb.call(e,t)}var Ib="__lodash_hash_undefined__";function kb(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=So&&e===void 0?Ib:e,this}function Fr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Fr.prototype.clear=gb;Fr.prototype.delete=vb;Fr.prototype.get=Eb;Fr.prototype.has=Tb;Fr.prototype.set=kb;function xb(){this.size=0,this.__data__={hash:new Fr,map:new(Eo||Tn),string:new Fr}}function bb(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ku(t,e){var n=t.__data__;return bb(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Rb(t){var e=ku(this,t).delete(t);return this.size-=e?1:0,e}function Pb(t){return ku(this,t).get(t)}function Nb(t){return ku(this,t).has(t)}function Ob(t,e){var n=ku(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function dr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dr.prototype.clear=xb;dr.prototype.delete=Rb;dr.prototype.get=Pb;dr.prototype.has=Nb;dr.prototype.set=Ob;var Ab=200;function Db(t,e){var n=this.__data__;if(n instanceof Tn){var r=n.__data__;if(!Eo||r.length<Ab-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new dr(r)}return n.set(t,e),this.size=n.size,this}function as(t){var e=this.__data__=new Tn(t);this.size=e.size}as.prototype.clear=Kx;as.prototype.delete=qx;as.prototype.get=Yx;as.prototype.has=Qx;as.prototype.set=Db;function Lb(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var Mb=function(){try{var t=Zr(Object,"defineProperty");return t({},"",{}),t}catch{}}();const Tg=Mb;function rw(t,e,n){e=="__proto__"&&Tg?Tg(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Fb=Object.prototype,$b=Fb.hasOwnProperty;function iw(t,e,n){var r=t[e];(!($b.call(t,e)&&tw(r,n))||n===void 0&&!(e in t))&&rw(t,e,n)}function xu(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?rw(n,a,l):iw(n,a,l)}return n}function jb(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Ub="[object Arguments]";function Ig(t){return Xr(t)&&Qr(t)==Ub}var sw=Object.prototype,zb=sw.hasOwnProperty,Vb=sw.propertyIsEnumerable,Bb=Ig(function(){return arguments}())?Ig:function(t){return Xr(t)&&zb.call(t,"callee")&&!Vb.call(t,"callee")};const Wb=Bb;var Hb=Array.isArray;const Vo=Hb;function Gb(){return!1}var ow=typeof ct=="object"&&ct&&!ct.nodeType&&ct,kg=ow&&typeof dt=="object"&&dt&&!dt.nodeType&&dt,Kb=kg&&kg.exports===ow,xg=Kb?sn.Buffer:void 0,qb=xg?xg.isBuffer:void 0,Yb=qb||Gb;const aw=Yb;var Qb=9007199254740991,Xb=/^(?:0|[1-9]\d*)$/;function Jb(t,e){var n=typeof t;return e=e??Qb,!!e&&(n=="number"||n!="symbol"&&Xb.test(t))&&t>-1&&t%1==0&&t<e}var Zb=9007199254740991;function lw(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Zb}var eR="[object Arguments]",tR="[object Array]",nR="[object Boolean]",rR="[object Date]",iR="[object Error]",sR="[object Function]",oR="[object Map]",aR="[object Number]",lR="[object Object]",uR="[object RegExp]",cR="[object Set]",dR="[object String]",fR="[object WeakMap]",hR="[object ArrayBuffer]",pR="[object DataView]",mR="[object Float32Array]",gR="[object Float64Array]",vR="[object Int8Array]",_R="[object Int16Array]",yR="[object Int32Array]",wR="[object Uint8Array]",ER="[object Uint8ClampedArray]",SR="[object Uint16Array]",CR="[object Uint32Array]",ce={};ce[mR]=ce[gR]=ce[vR]=ce[_R]=ce[yR]=ce[wR]=ce[ER]=ce[SR]=ce[CR]=!0;ce[eR]=ce[tR]=ce[hR]=ce[nR]=ce[pR]=ce[rR]=ce[iR]=ce[sR]=ce[oR]=ce[aR]=ce[lR]=ce[uR]=ce[cR]=ce[dR]=ce[fR]=!1;function TR(t){return Xr(t)&&lw(t.length)&&!!ce[Qr(t)]}function Ah(t){return function(e){return t(e)}}var uw=typeof ct=="object"&&ct&&!ct.nodeType&&ct,Hs=uw&&typeof dt=="object"&&dt&&!dt.nodeType&&dt,IR=Hs&&Hs.exports===uw,Sc=IR&&Q0.process,kR=function(){try{var t=Hs&&Hs.require&&Hs.require("util").types;return t||Sc&&Sc.binding&&Sc.binding("util")}catch{}}();const qi=kR;var bg=qi&&qi.isTypedArray,xR=bg?Ah(bg):TR;const bR=xR;var RR=Object.prototype,PR=RR.hasOwnProperty;function cw(t,e){var n=Vo(t),r=!n&&Wb(t),i=!n&&!r&&aw(t),s=!n&&!r&&!i&&bR(t),o=n||r||i||s,a=o?jb(t.length,String):[],l=a.length;for(var u in t)(e||PR.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Jb(u,l)))&&a.push(u);return a}var NR=Object.prototype;function Dh(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||NR;return t===n}var OR=J0(Object.keys,Object);const AR=OR;var DR=Object.prototype,LR=DR.hasOwnProperty;function MR(t){if(!Dh(t))return AR(t);var e=[];for(var n in Object(t))LR.call(t,n)&&n!="constructor"&&e.push(n);return e}function dw(t){return t!=null&&lw(t.length)&&!nw(t)}function Lh(t){return dw(t)?cw(t):MR(t)}function FR(t,e){return t&&xu(e,Lh(e),t)}function $R(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var jR=Object.prototype,UR=jR.hasOwnProperty;function zR(t){if(!zo(t))return $R(t);var e=Dh(t),n=[];for(var r in t)r=="constructor"&&(e||!UR.call(t,r))||n.push(r);return n}function Mh(t){return dw(t)?cw(t,!0):zR(t)}function VR(t,e){return t&&xu(e,Mh(e),t)}var fw=typeof ct=="object"&&ct&&!ct.nodeType&&ct,Rg=fw&&typeof dt=="object"&&dt&&!dt.nodeType&&dt,BR=Rg&&Rg.exports===fw,Pg=BR?sn.Buffer:void 0,Ng=Pg?Pg.allocUnsafe:void 0;function WR(t,e){if(e)return t.slice();var n=t.length,r=Ng?Ng(n):new t.constructor(n);return t.copy(r),r}function hw(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function HR(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function pw(){return[]}var GR=Object.prototype,KR=GR.propertyIsEnumerable,Og=Object.getOwnPropertySymbols,qR=Og?function(t){return t==null?[]:(t=Object(t),HR(Og(t),function(e){return KR.call(t,e)}))}:pw;const Fh=qR;function YR(t,e){return xu(t,Fh(t),e)}function mw(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var QR=Object.getOwnPropertySymbols,XR=QR?function(t){for(var e=[];t;)mw(e,Fh(t)),t=Oh(t);return e}:pw;const gw=XR;function JR(t,e){return xu(t,gw(t),e)}function vw(t,e,n){var r=e(t);return Vo(t)?r:mw(r,n(t))}function ZR(t){return vw(t,Lh,Fh)}function eP(t){return vw(t,Mh,gw)}var tP=Zr(sn,"DataView");const Yd=tP;var nP=Zr(sn,"Promise");const Qd=nP;var rP=Zr(sn,"Set");const Xd=rP;var iP=Zr(sn,"WeakMap");const Jd=iP;var Ag="[object Map]",sP="[object Object]",Dg="[object Promise]",Lg="[object Set]",Mg="[object WeakMap]",Fg="[object DataView]",oP=Jr(Yd),aP=Jr(Eo),lP=Jr(Qd),uP=Jr(Xd),cP=Jr(Jd),yr=Qr;(Yd&&yr(new Yd(new ArrayBuffer(1)))!=Fg||Eo&&yr(new Eo)!=Ag||Qd&&yr(Qd.resolve())!=Dg||Xd&&yr(new Xd)!=Lg||Jd&&yr(new Jd)!=Mg)&&(yr=function(t){var e=Qr(t),n=e==sP?t.constructor:void 0,r=n?Jr(n):"";if(r)switch(r){case oP:return Fg;case aP:return Ag;case lP:return Dg;case uP:return Lg;case cP:return Mg}return e});const $h=yr;var dP=Object.prototype,fP=dP.hasOwnProperty;function hP(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&fP.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var pP=sn.Uint8Array;const $g=pP;function jh(t){var e=new t.constructor(t.byteLength);return new $g(e).set(new $g(t)),e}function mP(t,e){var n=e?jh(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var gP=/\w*$/;function vP(t){var e=new t.constructor(t.source,gP.exec(t));return e.lastIndex=t.lastIndex,e}var jg=sr?sr.prototype:void 0,Ug=jg?jg.valueOf:void 0;function _P(t){return Ug?Object(Ug.call(t)):{}}function yP(t,e){var n=e?jh(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var wP="[object Boolean]",EP="[object Date]",SP="[object Map]",CP="[object Number]",TP="[object RegExp]",IP="[object Set]",kP="[object String]",xP="[object Symbol]",bP="[object ArrayBuffer]",RP="[object DataView]",PP="[object Float32Array]",NP="[object Float64Array]",OP="[object Int8Array]",AP="[object Int16Array]",DP="[object Int32Array]",LP="[object Uint8Array]",MP="[object Uint8ClampedArray]",FP="[object Uint16Array]",$P="[object Uint32Array]";function jP(t,e,n){var r=t.constructor;switch(e){case bP:return jh(t);case wP:case EP:return new r(+t);case RP:return mP(t,n);case PP:case NP:case OP:case AP:case DP:case LP:case MP:case FP:case $P:return yP(t,n);case SP:return new r;case CP:case kP:return new r(t);case TP:return vP(t);case IP:return new r;case xP:return _P(t)}}var zg=Object.create,UP=function(){function t(){}return function(e){if(!zo(e))return{};if(zg)return zg(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const zP=UP;function VP(t){return typeof t.constructor=="function"&&!Dh(t)?zP(Oh(t)):{}}var BP="[object Map]";function WP(t){return Xr(t)&&$h(t)==BP}var Vg=qi&&qi.isMap,HP=Vg?Ah(Vg):WP;const GP=HP;var KP="[object Set]";function qP(t){return Xr(t)&&$h(t)==KP}var Bg=qi&&qi.isSet,YP=Bg?Ah(Bg):qP;const QP=YP;var XP=1,JP=2,ZP=4,_w="[object Arguments]",eN="[object Array]",tN="[object Boolean]",nN="[object Date]",rN="[object Error]",yw="[object Function]",iN="[object GeneratorFunction]",sN="[object Map]",oN="[object Number]",ww="[object Object]",aN="[object RegExp]",lN="[object Set]",uN="[object String]",cN="[object Symbol]",dN="[object WeakMap]",fN="[object ArrayBuffer]",hN="[object DataView]",pN="[object Float32Array]",mN="[object Float64Array]",gN="[object Int8Array]",vN="[object Int16Array]",_N="[object Int32Array]",yN="[object Uint8Array]",wN="[object Uint8ClampedArray]",EN="[object Uint16Array]",SN="[object Uint32Array]",se={};se[_w]=se[eN]=se[fN]=se[hN]=se[tN]=se[nN]=se[pN]=se[mN]=se[gN]=se[vN]=se[_N]=se[sN]=se[oN]=se[ww]=se[aN]=se[lN]=se[uN]=se[cN]=se[yN]=se[wN]=se[EN]=se[SN]=!0;se[rN]=se[yw]=se[dN]=!1;function Gs(t,e,n,r,i,s){var o,a=e&XP,l=e&JP,u=e&ZP;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!zo(t))return t;var d=Vo(t);if(d){if(o=hP(t),!a)return hw(t,o)}else{var c=$h(t),f=c==yw||c==iN;if(aw(t))return WR(t,a);if(c==ww||c==_w||f&&!i){if(o=l||f?{}:VP(t),!a)return l?JR(t,VR(o,t)):YR(t,FR(o,t))}else{if(!se[c])return i?t:{};o=jP(t,c,a)}}s||(s=new as);var m=s.get(t);if(m)return m;s.set(t,o),QP(t)?t.forEach(function(E){o.add(Gs(E,e,n,E,t,s))}):GP(t)&&t.forEach(function(E,p){o.set(p,Gs(E,e,n,p,t,s))});var v=u?l?eP:ZR:l?Mh:Lh,_=d?void 0:v(t);return Lb(_||t,function(E,p){_&&(p=E,E=t[p]),iw(o,p,Gs(E,e,n,p,t,s))}),o}var CN=4;function Wg(t){return Gs(t,CN)}function Ew(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var TN="[object Symbol]";function Uh(t){return typeof t=="symbol"||Xr(t)&&Qr(t)==TN}var IN="Expected a function";function zh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(IN);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(zh.Cache||dr),n}zh.Cache=dr;var kN=500;function xN(t){var e=zh(t,function(r){return n.size===kN&&n.clear(),r}),n=e.cache;return e}var bN=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,RN=/\\(\\)?/g,PN=xN(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(bN,function(n,r,i,s){e.push(i?s.replace(RN,"$1"):r||n)}),e});const NN=PN;var ON=1/0;function AN(t){if(typeof t=="string"||Uh(t))return t;var e=t+"";return e=="0"&&1/t==-ON?"-0":e}var DN=1/0,Hg=sr?sr.prototype:void 0,Gg=Hg?Hg.toString:void 0;function Sw(t){if(typeof t=="string")return t;if(Vo(t))return Ew(t,Sw)+"";if(Uh(t))return Gg?Gg.call(t):"";var e=t+"";return e=="0"&&1/t==-DN?"-0":e}function LN(t){return t==null?"":Sw(t)}function Cw(t){return Vo(t)?Ew(t,AN):Uh(t)?[t]:hw(NN(LN(t)))}var MN=1,FN=4;function $N(t){return Gs(t,MN|FN)}function Z(){return Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Z.apply(this,arguments)}function Tw(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Vn(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Kg(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var bu=y.createContext(void 0);bu.displayName="FormikContext";var jN=bu.Provider,UN=bu.Consumer;function Iw(){var t=y.useContext(bu);return t||ew(!1),t}var qg=function(e){return Array.isArray(e)&&e.length===0},Me=function(e){return typeof e=="function"},Bo=function(e){return e!==null&&typeof e=="object"},zN=function(e){return String(Math.floor(Number(e)))===e},Cc=function(e){return Object.prototype.toString.call(e)==="[object String]"},kw=function(e){return y.Children.count(e)===0},Tc=function(e){return Bo(e)&&Me(e.then)};function pe(t,e,n,r){r===void 0&&(r=0);for(var i=Cw(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function en(t,e,n){for(var r=Wg(t),i=r,s=0,o=Cw(e);s<o.length-1;s++){var a=o[s],l=pe(t,o.slice(0,s+1));if(l&&(Bo(l)||Array.isArray(l)))i=i[a]=Wg(l);else{var u=o[s+1];i=i[a]=zN(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function xw(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];Bo(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},xw(a,e,n,r[o])):r[o]=e}return r}function VN(t,e){switch(e.type){case"SET_VALUES":return Z({},t,{values:e.payload});case"SET_TOUCHED":return Z({},t,{touched:e.payload});case"SET_ERRORS":return On(t.errors,e.payload)?t:Z({},t,{errors:e.payload});case"SET_STATUS":return Z({},t,{status:e.payload});case"SET_ISSUBMITTING":return Z({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return Z({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return Z({},t,{values:en(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return Z({},t,{touched:en(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return Z({},t,{errors:en(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return Z({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return Z({},t,{touched:xw(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return Z({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Z({},t,{isSubmitting:!1});default:return t}}var gr={},ya={};function BN(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=Vn(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=Z({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),m=y.useRef(f.initialValues),v=y.useRef(f.initialErrors||gr),_=y.useRef(f.initialTouched||ya),E=y.useRef(f.initialStatus),p=y.useRef(!1),h=y.useRef({});y.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var g=y.useState(0),S=g[1],k=y.useRef({values:f.initialValues,errors:f.initialErrors||gr,touched:f.initialTouched||ya,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=k.current,C=y.useCallback(function(w){var P=k.current;k.current=VN(P,w),P!==k.current&&S(function(A){return A+1})},[]),O=y.useCallback(function(w,P){return new Promise(function(A,D){var V=f.validate(w,P);V==null?A(gr):Tc(V)?V.then(function(J){A(J||gr)},function(J){D(J)}):A(V)})},[f.validate]),z=y.useCallback(function(w,P){var A=f.validationSchema,D=Me(A)?A(P):A,V=P&&D.validateAt?D.validateAt(P,w):GN(w,D);return new Promise(function(J,be){V.then(function(){J(gr)},function(on){on.name==="ValidationError"?J(HN(on)):be(on)})})},[f.validationSchema]),L=y.useCallback(function(w,P){return new Promise(function(A){return A(h.current[w].validate(P))})},[]),K=y.useCallback(function(w){var P=Object.keys(h.current).filter(function(D){return Me(h.current[D].validate)}),A=P.length>0?P.map(function(D){return L(D,pe(w,D))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(A).then(function(D){return D.reduce(function(V,J,be){return J==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||J&&(V=en(V,P[be],J)),V},{})})},[L]),Vt=y.useCallback(function(w){return Promise.all([K(w),f.validationSchema?z(w):{},f.validate?O(w):{}]).then(function(P){var A=P[0],D=P[1],V=P[2],J=Kd.all([A,D,V],{arrayMerge:KN});return J})},[f.validate,f.validationSchema,K,O,z]),he=wt(function(w){return w===void 0&&(w=T.values),C({type:"SET_ISVALIDATING",payload:!0}),Vt(w).then(function(P){return p.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:P})),P})});y.useEffect(function(){o&&p.current===!0&&On(m.current,f.initialValues)&&he(m.current)},[o,he]);var xt=y.useCallback(function(w){var P=w&&w.values?w.values:m.current,A=w&&w.errors?w.errors:v.current?v.current:f.initialErrors||{},D=w&&w.touched?w.touched:_.current?_.current:f.initialTouched||{},V=w&&w.status?w.status:E.current?E.current:f.initialStatus;m.current=P,v.current=A,_.current=D,E.current=V;var J=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!w&&!!w.isSubmitting,errors:A,touched:D,status:V,values:P,isValidating:!!w&&!!w.isValidating,submitCount:w&&w.submitCount&&typeof w.submitCount=="number"?w.submitCount:0}})};if(f.onReset){var be=f.onReset(T.values,Vp);Tc(be)?be.then(J):J()}else J()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);y.useEffect(function(){p.current===!0&&!On(m.current,f.initialValues)&&u&&(m.current=f.initialValues,xt(),o&&he(m.current))},[u,f.initialValues,xt,o,he]),y.useEffect(function(){u&&p.current===!0&&!On(v.current,f.initialErrors)&&(v.current=f.initialErrors||gr,C({type:"SET_ERRORS",payload:f.initialErrors||gr}))},[u,f.initialErrors]),y.useEffect(function(){u&&p.current===!0&&!On(_.current,f.initialTouched)&&(_.current=f.initialTouched||ya,C({type:"SET_TOUCHED",payload:f.initialTouched||ya}))},[u,f.initialTouched]),y.useEffect(function(){u&&p.current===!0&&!On(E.current,f.initialStatus)&&(E.current=f.initialStatus,C({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var pr=wt(function(w){if(h.current[w]&&Me(h.current[w].validate)){var P=pe(T.values,w),A=h.current[w].validate(P);return Tc(A)?(C({type:"SET_ISVALIDATING",payload:!0}),A.then(function(D){return D}).then(function(D){C({type:"SET_FIELD_ERROR",payload:{field:w,value:D}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:w,value:A}}),Promise.resolve(A))}else if(f.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),z(T.values,w).then(function(D){return D}).then(function(D){C({type:"SET_FIELD_ERROR",payload:{field:w,value:pe(D,w)}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),ps=y.useCallback(function(w,P){var A=P.validate;h.current[w]={validate:A}},[]),ms=y.useCallback(function(w){delete h.current[w]},[]),R=wt(function(w,P){C({type:"SET_TOUCHED",payload:w});var A=P===void 0?i:P;return A?he(T.values):Promise.resolve()}),j=y.useCallback(function(w){C({type:"SET_ERRORS",payload:w})},[]),U=wt(function(w,P){var A=Me(w)?w(T.values):w;C({type:"SET_VALUES",payload:A});var D=P===void 0?n:P;return D?he(A):Promise.resolve()}),ie=y.useCallback(function(w,P){C({type:"SET_FIELD_ERROR",payload:{field:w,value:P}})},[]),le=wt(function(w,P,A){C({type:"SET_FIELD_VALUE",payload:{field:w,value:P}});var D=A===void 0?n:A;return D?he(en(T.values,w,P)):Promise.resolve()}),mr=y.useCallback(function(w,P){var A=P,D=w,V;if(!Cc(w)){w.persist&&w.persist();var J=w.target?w.target:w.currentTarget,be=J.type,on=J.name,Hu=J.id,Gu=J.value,n1=J.checked,bj=J.outerHTML,Bp=J.options,r1=J.multiple;A=P||on||Hu,D=/number|range/.test(be)?(V=parseFloat(Gu),isNaN(V)?"":V):/checkbox/.test(be)?YN(pe(T.values,A),n1,Gu):Bp&&r1?qN(Bp):Gu}A&&le(A,D)},[le,T.values]),bt=wt(function(w){if(Cc(w))return function(P){return mr(P,w)};mr(w)}),Bt=wt(function(w,P,A){P===void 0&&(P=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:w,value:P}});var D=A===void 0?i:A;return D?he(T.values):Promise.resolve()}),Wt=y.useCallback(function(w,P){w.persist&&w.persist();var A=w.target,D=A.name,V=A.id,J=A.outerHTML,be=P||D||V;Bt(be,!0)},[Bt]),xn=wt(function(w){if(Cc(w))return function(P){return Wt(P,w)};Wt(w)}),jp=y.useCallback(function(w){Me(w)?C({type:"SET_FORMIK_STATE",payload:w}):C({type:"SET_FORMIK_STATE",payload:function(){return w}})},[]),Up=y.useCallback(function(w){C({type:"SET_STATUS",payload:w})},[]),zp=y.useCallback(function(w){C({type:"SET_ISSUBMITTING",payload:w})},[]),Bu=wt(function(){return C({type:"SUBMIT_ATTEMPT"}),he().then(function(w){var P=w instanceof Error,A=!P&&Object.keys(w).length===0;if(A){var D;try{if(D=YS(),D===void 0)return}catch(V){throw V}return Promise.resolve(D).then(function(V){return p.current&&C({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(p.current)throw C({type:"SUBMIT_FAILURE"}),V})}else if(p.current&&(C({type:"SUBMIT_FAILURE"}),P))throw w})}),qS=wt(function(w){w&&w.preventDefault&&Me(w.preventDefault)&&w.preventDefault(),w&&w.stopPropagation&&Me(w.stopPropagation)&&w.stopPropagation(),Bu().catch(function(P){console.warn("Warning: An unhandled error was caught from submitForm()",P)})}),Vp={resetForm:xt,validateForm:he,validateField:pr,setErrors:j,setFieldError:ie,setFieldTouched:Bt,setFieldValue:le,setStatus:Up,setSubmitting:zp,setTouched:R,setValues:U,setFormikState:jp,submitForm:Bu},YS=wt(function(){return d(T.values,Vp)}),QS=wt(function(w){w&&w.preventDefault&&Me(w.preventDefault)&&w.preventDefault(),w&&w.stopPropagation&&Me(w.stopPropagation)&&w.stopPropagation(),xt()}),XS=y.useCallback(function(w){return{value:pe(T.values,w),error:pe(T.errors,w),touched:!!pe(T.touched,w),initialValue:pe(m.current,w),initialTouched:!!pe(_.current,w),initialError:pe(v.current,w)}},[T.errors,T.touched,T.values]),JS=y.useCallback(function(w){return{setValue:function(A,D){return le(w,A,D)},setTouched:function(A,D){return Bt(w,A,D)},setError:function(A){return ie(w,A)}}},[le,Bt,ie]),ZS=y.useCallback(function(w){var P=Bo(w),A=P?w.name:w,D=pe(T.values,A),V={name:A,value:D,onChange:bt,onBlur:xn};if(P){var J=w.type,be=w.value,on=w.as,Hu=w.multiple;J==="checkbox"?be===void 0?V.checked=!!D:(V.checked=!!(Array.isArray(D)&&~D.indexOf(be)),V.value=be):J==="radio"?(V.checked=D===be,V.value=be):on==="select"&&Hu&&(V.value=V.value||[],V.multiple=!0)}return V},[xn,bt,T.values]),Wu=y.useMemo(function(){return!On(m.current,T.values)},[m.current,T.values]),e1=y.useMemo(function(){return typeof a<"u"?Wu?T.errors&&Object.keys(T.errors).length===0:a!==!1&&Me(a)?a(f):a:T.errors&&Object.keys(T.errors).length===0},[a,Wu,T.errors,f]),t1=Z({},T,{initialValues:m.current,initialErrors:v.current,initialTouched:_.current,initialStatus:E.current,handleBlur:xn,handleChange:bt,handleReset:QS,handleSubmit:qS,resetForm:xt,setErrors:j,setFormikState:jp,setFieldTouched:Bt,setFieldValue:le,setFieldError:ie,setStatus:Up,setSubmitting:zp,setTouched:R,setValues:U,submitForm:Bu,validateForm:he,validateField:pr,isValid:e1,dirty:Wu,unregisterField:ms,registerField:ps,getFieldProps:ZS,getFieldMeta:XS,getFieldHelpers:JS,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return t1}function WN(t){var e=BN(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return y.useImperativeHandle(s,function(){return e}),y.createElement(jN,{value:e},n?y.createElement(n,e):i?i(e):r?Me(r)?r(e):kw(r)?null:y.Children.only(r):null)}function HN(t){var e={};if(t.inner){if(t.inner.length===0)return en(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;pe(e,o.path)||(e=en(e,o.path,o.message))}}return e}function GN(t,e,n,r){n===void 0&&(n=!1);var i=Zd(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Zd(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||wg(i)?Zd(i):i!==""?i:void 0}):wg(t[r])?e[r]=Zd(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function KN(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Kd(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Kd(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function qN(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function YN(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var QN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?y.useLayoutEffect:y.useEffect;function wt(t){var e=y.useRef(t);return QN(function(){e.current=t}),y.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function XN(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=Vn(t,["validate","name","render","children","as","component","className"]),u=Iw(),d=Vn(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;y.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var m=d.getFieldProps(Z({name:n},l)),v=d.getFieldMeta(n),_={field:m,form:d};if(r)return r(Z({},_,{meta:v}));if(Me(i))return i(Z({},_,{meta:v}));if(o){if(typeof o=="string"){var E=l.innerRef,p=Vn(l,["innerRef"]);return y.createElement(o,Z({ref:E},m,p,{className:a}),i)}return y.createElement(o,Z({field:m,form:d},l,{className:a}),i)}var h=s||"input";if(typeof h=="string"){var g=l.innerRef,S=Vn(l,["innerRef"]);return y.createElement(h,Z({ref:g},m,S,{className:a}),i)}return y.createElement(h,Z({},m,l,{className:a}),i)}var bw=y.forwardRef(function(t,e){var n=t.action,r=Vn(t,["action"]),i=n??"#",s=Iw(),o=s.handleReset,a=s.handleSubmit;return y.createElement("form",Z({onSubmit:a,ref:e,onReset:o,action:i},r))});bw.displayName="Form";function JN(t){var e=function(i){return y.createElement(UN,null,function(s){return s||ew(!1),y.createElement(t,Z({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",Ek(e,t)}var ZN=function(e,n,r){var i=$r(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},eO=function(e,n,r){var i=$r(e),s=i[n];return i[n]=i[r],i[r]=s,i},Ic=function(e,n,r){var i=$r(e);return i.splice(n,0,r),i},tO=function(e,n,r){var i=$r(e);return i[n]=r,i},$r=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(Z({},e,{length:n+1}))}else return[]},Yg=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||Bo(i)){var s=$r(i);return r(s)}return i}},nO=function(t){Tw(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(c){var f=Yg(a,s),m=Yg(o,s),v=en(c.values,u,s(pe(c.values,u))),_=a?f(pe(c.errors,u)):void 0,E=o?m(pe(c.touched,u)):void 0;return qg(_)&&(_=void 0),qg(E)&&(E=void 0),Z({},c,{values:v,errors:a?en(c.errors,u,_):c.errors,touched:o?en(c.touched,u,E):c.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat($r(o),[$N(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return eO(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return ZN(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return Ic(a,s,o)},function(a){return Ic(a,s,null)},function(a){return Ic(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return tO(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Kg(i)),i.pop=i.pop.bind(Kg(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!On(pe(i.formik.values,i.name),pe(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?$r(o):[];return s||(s=a[i]),Me(a.splice)&&a.splice(i,1),Me(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,d=s.formik,c=Vn(d,["validate","validationSchema"]),f=Z({},i,{form:c,name:u});return o?y.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):kw(l)?null:y.Children.only(l):null},e}(y.Component);nO.defaultProps={validateOnChange:!0};var rO=function(t){Tw(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return pe(this.props.formik.errors,this.props.name)!==pe(i.formik.errors,this.props.name)||pe(this.props.formik.touched,this.props.name)!==pe(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,d=Vn(i,["component","formik","render","children","name"]),c=pe(o.touched,u),f=pe(o.errors,u);return c&&f?a?Me(a)?a(f):null:l?Me(l)?l(f):null:s?y.createElement(s,d,f):f:null},e}(y.Component),kc=JN(rO);/**
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
 */const Rw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw ls(e)},ls=function(t){return new Error("Firebase Database ("+Rw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[d],n[c],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new sO;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nw=function(t){const e=Pw(t);return Vh.encodeByteArray(e,!0)},El=function(t){return Nw(t).replace(/\./g,"")},Sl=function(t){try{return Vh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oO(t){return Ow(void 0,t)}function Ow(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aO(n)||(t[n]=Ow(t[n],e[n]));return t}function aO(t){return t!=="__proto__"}/**
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
 */function lO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uO=()=>lO().__FIREBASE_DEFAULTS__,cO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sl(t[1]);return e&&JSON.parse(e)},Bh=()=>{try{return uO()||cO()||dO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Aw=t=>{var e,n;return(n=(e=Bh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fO=t=>{const e=Aw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dw=()=>{var t;return(t=Bh())===null||t===void 0?void 0:t.config},Lw=t=>{var e;return(e=Bh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[El(JSON.stringify(n)),El(JSON.stringify(o)),a].join(".")}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function pO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mO(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fw(){return Rw.NODE_ADMIN===!0}function gO(){try{return typeof indexedDB=="object"}catch{return!1}}function vO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const _O="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_O,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fr(i,a,r)}}function yO(t,e){return t.replace(wO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wO=/\{\$([^}]+)}/g;/**
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
 */function Co(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
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
 */const $w=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Co(Sl(s[0])||""),n=Co(Sl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},EO=function(t){const e=$w(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SO=function(t){const e=$w(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function In(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ef(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Tl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qg(s)&&Qg(o)){if(!Tl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qg(t){return t!==null&&typeof t=="object"}/**
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
 */function us(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class CO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function TO(t,e){const n=new IO(t,e);return n.subscribe.bind(n)}class IO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xc),i.error===void 0&&(i.error=xc),i.complete===void 0&&(i.complete=xc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}function jw(t,e){return`${t} failed: ${e} argument `}/**
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
 */const xO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ru=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class bO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PO(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RO(t){return t===wr?void 0:t}function PO(t){return t.instantiationMode==="EAGER"}/**
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
 */class NO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const OO={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},AO=ne.INFO,DO={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},LO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gh{constructor(e){this.name=e,this._logLevel=AO,this._logHandler=LO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const MO=(t,e)=>e.some(n=>t instanceof n);let Xg,Jg;function FO(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $O(){return Jg||(Jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uw=new WeakMap,tf=new WeakMap,zw=new WeakMap,bc=new WeakMap,Kh=new WeakMap;function jO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uw.set(n,t)}).catch(()=>{}),Kh.set(e,t),e}function UO(t){if(tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tf.set(t,e)}let nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zO(t){nf=t(nf)}function VO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return zw.set(r,e.sort?e.sort():[e]),Jn(r)}:$O().includes(t)?function(...e){return t.apply(Rc(this),e),Jn(Uw.get(this))}:function(...e){return Jn(t.apply(Rc(this),e))}}function BO(t){return typeof t=="function"?VO(t):(t instanceof IDBTransaction&&UO(t),MO(t,FO())?new Proxy(t,nf):t)}function Jn(t){if(t instanceof IDBRequest)return jO(t);if(bc.has(t))return bc.get(t);const e=BO(t);return e!==t&&(bc.set(t,e),Kh.set(e,t)),e}const Rc=t=>Kh.get(t);function WO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jn(o.result),l.oldVersion,l.newVersion,Jn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const HO=["get","getKey","getAll","getAllKeys","count"],GO=["put","add","delete","clear"],Pc=new Map;function Zg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pc.set(e,s),s}zO(t=>({...t,get:(e,n,r)=>Zg(e,n)||t.get(e,n,r),has:(e,n)=>!!Zg(e,n)||t.has(e,n)}));/**
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
 */class KO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rf="@firebase/app",ev="0.9.20";/**
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
 */const Ur=new Gh("@firebase/app"),YO="@firebase/app-compat",QO="@firebase/analytics-compat",XO="@firebase/analytics",JO="@firebase/app-check-compat",ZO="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",rA="@firebase/database-compat",iA="@firebase/functions",sA="@firebase/functions-compat",oA="@firebase/installations",aA="@firebase/installations-compat",lA="@firebase/messaging",uA="@firebase/messaging-compat",cA="@firebase/performance",dA="@firebase/performance-compat",fA="@firebase/remote-config",hA="@firebase/remote-config-compat",pA="@firebase/storage",mA="@firebase/storage-compat",gA="@firebase/firestore",vA="@firebase/firestore-compat",_A="firebase",yA="10.5.0";/**
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
 */const sf="[DEFAULT]",wA={[rf]:"fire-core",[YO]:"fire-core-compat",[XO]:"fire-analytics",[QO]:"fire-analytics-compat",[ZO]:"fire-app-check",[JO]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[rA]:"fire-rtdb-compat",[iA]:"fire-fn",[sA]:"fire-fn-compat",[oA]:"fire-iid",[aA]:"fire-iid-compat",[lA]:"fire-fcm",[uA]:"fire-fcm-compat",[cA]:"fire-perf",[dA]:"fire-perf-compat",[fA]:"fire-rc",[hA]:"fire-rc-compat",[pA]:"fire-gcs",[mA]:"fire-gcs-compat",[gA]:"fire-fst",[vA]:"fire-fst-compat","fire-js":"fire-js",[_A]:"fire-js-all"};/**
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
 */const Il=new Map,of=new Map;function EA(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qi(t){const e=t.name;if(of.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;of.set(e,t);for(const n of Il.values())EA(n,t);return!0}function qh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const SA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new Wo("app","Firebase",SA);/**
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
 */class CA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=yA;function Vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=Dw()),!n)throw Zn.create("no-options");const s=Il.get(i);if(s){if(Tl(n,s.options)&&Tl(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new NO(i);for(const l of of.values())o.addComponent(l);const a=new CA(n,r,o);return Il.set(i,a),a}function Bw(t=sf){const e=Il.get(t);if(!e&&t===sf&&Dw())return Vw();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){var r;let i=(r=wA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(a.join(" "));return}Qi(new jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const TA="firebase-heartbeat-database",IA=1,To="firebase-heartbeat-store";let Nc=null;function Ww(){return Nc||(Nc=WO(TA,IA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(To)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function kA(t){try{return await(await Ww()).transaction(To).objectStore(To).get(Hw(t))}catch(e){if(e instanceof fr)Ur.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function tv(t,e){try{const r=(await Ww()).transaction(To,"readwrite");await r.objectStore(To).put(e,Hw(t)),await r.done}catch(n){if(n instanceof fr)Ur.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function Hw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xA=1024,bA=30*24*60*60*1e3;class RA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nv(),{heartbeatsToSend:n,unsentEntries:r}=PA(this._heartbeatsCache.heartbeats),i=El(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nv(){return new Date().toISOString().substring(0,10)}function PA(t,e=xA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gO()?vO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rv(t){return El(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OA(t){Qi(new jr("platform-logger",e=>new KO(e),"PRIVATE")),Qi(new jr("heartbeat",e=>new RA(e),"PRIVATE")),er(rf,ev,t),er(rf,ev,"esm2017"),er("fire-js","")}OA("");function Yh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iv(t){return t!==void 0&&t.enterprise!==void 0}class AA{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Gw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DA=Gw,Kw=new Wo("auth","Firebase",Gw());/**
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
 */const kl=new Gh("@firebase/auth");function LA(t,...e){kl.logLevel<=ne.WARN&&kl.warn(`Auth (${cs}): ${t}`,...e)}function za(t,...e){kl.logLevel<=ne.ERROR&&kl.error(`Auth (${cs}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Qh(t,...e)}function tn(t,...e){return Qh(t,...e)}function MA(t,e,n){const r=Object.assign(Object.assign({},DA()),{[e]:n});return new Wo("auth","Firebase",r).create(e,{appName:t.name})}function Qh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kw.create(t,...e)}function $(t,e,...n){if(!t)throw Qh(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw za(e),new Error(e)}function En(t,e){t||fn(e)}/**
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
 */function af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FA(){return sv()==="http:"||sv()==="https:"}function sv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FA()||pO()||"connection"in navigator)?navigator.onLine:!0}function jA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=Hh()||Mw()}get(){return $A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xh(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const UA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zA=new Ho(3e4,6e4);function ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hr(t,e,n,r,i={}){return Yw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=us(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),qw.fetch()(Qw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Yw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UA),e);try{const i=new VA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wa(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw MA(t,d,u);zt(t,d)}}catch(i){if(i instanceof fr)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function Go(t,e,n,r,i={}){const s=await hr(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xh(t.config,i):`${t.config.apiScheme}://${i}`}class VA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),zA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}async function BA(t,e){return hr(t,"GET","/v2/recaptchaConfig",ei(t,e))}/**
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
 */async function WA(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function HA(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GA(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=Jh(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ks(Oc(i.auth_time)),issuedAtTime:Ks(Oc(i.iat)),expirationTime:Ks(Oc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oc(t){return Number(t)*1e3}function Jh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sl(n);return i?JSON.parse(i):(za("Failed to decode base64 JWT payload"),null)}catch(i){return za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function KA(t){const e=Jh(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&qA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class YA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xi(t,HA(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?JA(s.providerUserInfo):[],a=XA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xw(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function QA(t){const e=yt(t);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function JA(t){return t.map(e=>{var{providerId:n}=e,r=Yh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ZA(t,e){const n=await Yw(t,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Rn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GA(this,e)}reload(){return QA(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xi(this,WA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:S,isAnonymous:k,providerData:T,stsTokenManager:C}=n;$(g&&C,e,"internal-error");const O=Io.fromJSON(this.name,C);$(typeof g=="string",e,"internal-error"),Rn(c,e.name),Rn(f,e.name),$(typeof S=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),Rn(m,e.name),Rn(v,e.name),Rn(_,e.name),Rn(E,e.name),Rn(p,e.name),Rn(h,e.name);const z=new Rr({uid:g,auth:e,email:f,emailVerified:S,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:h});return T&&Array.isArray(T)&&(z.providerData=T.map(L=>Object.assign({},L))),E&&(z._redirectEventId=E),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xl(s),s}}/**
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
 */const ov=new Map;function hn(t){En(t instanceof Function,"Expected a class definition");let e=ov.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ov.set(t,e),e)}/**
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
 */class Jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jw.type="NONE";const av=Jw;/**
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
 */function Va(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Va(this.userKey,i.apiKey,s),this.fullPersistenceKey=Va("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(hn(av),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||hn(av);const o=Va(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Rr._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Di(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Di(s,e,r))}}/**
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
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rE(e))return"Blackberry";if(iE(e))return"Webos";if(Zh(e))return"Safari";if((e.includes("chrome/")||eE(e))&&!e.includes("edge/"))return"Chrome";if(nE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zw(t=Ke()){return/firefox\//i.test(t)}function Zh(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eE(t=Ke()){return/crios\//i.test(t)}function tE(t=Ke()){return/iemobile/i.test(t)}function nE(t=Ke()){return/android/i.test(t)}function rE(t=Ke()){return/blackberry/i.test(t)}function iE(t=Ke()){return/webos/i.test(t)}function Pu(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eD(t=Ke()){var e;return Pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tD(){return mO()&&document.documentMode===10}function sE(t=Ke()){return Pu(t)||nE(t)||iE(t)||rE(t)||/windows phone/i.test(t)||tE(t)}function nD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function oE(t,e=[]){let n;switch(t){case"Browser":n=lv(Ke());break;case"Worker":n=`${lv(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
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
 */class rD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iD(t,e={}){return hr(t,"GET","/v2/passwordPolicy",ei(t,e))}/**
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
 */const sD=6;class oD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class aD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new rD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iD(this),n=new oD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ti(t){return yt(t)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=TO(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function lD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function aE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lD().appendChild(r)})}function uD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cD="https://www.google.com/recaptcha/enterprise.js?render=",dD="recaptcha-enterprise",fD="NO_RECAPTCHA";class hD{constructor(e){this.type=dD,this.auth=ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{BA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new AA(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;iv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(fD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&iv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}aE(cD+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function bl(t,e,n,r=!1){const i=new hD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function pD(t,e){const n=qh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tl(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function mD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gD(t,e,n){const r=ti(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=lE(e),{host:o,port:a}=vD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_D()}function lE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vD(t){const e=lE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cv(o)}}}function cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _D(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ep{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function yD(t,e){return hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ac(t,e){return Go(t,"POST","/v1/accounts:signInWithPassword",ei(t,e))}/**
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
 */async function wD(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}async function ED(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",ei(t,e))}/**
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
 */class ko extends ep{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await bl(e,r,"signInWithPassword");return Ac(e,i)}else return Ac(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await bl(e,r,"signInWithPassword");return Ac(e,s)}else return Promise.reject(i)});case"emailLink":return wD(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ED(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Li(t,e){return Go(t,"POST","/v1/accounts:signInWithIdp",ei(t,e))}/**
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
 */const SD="http://localhost";class zr extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:SD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=us(n)}return e}}/**
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
 */function CD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TD(t){const e=Ds(Ls(t)).link,n=e?Ds(Ls(e)).deep_link_id:null,r=Ds(Ls(t)).deep_link_id;return(r?Ds(Ls(r)).link:null)||r||n||e||t}class tp{constructor(e){var n,r,i,s,o,a;const l=Ds(Ls(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=CD((i=l.mode)!==null&&i!==void 0?i:null);$(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TD(e);try{return new tp(n)}catch{return null}}}/**
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
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tp.parseLink(n);return $(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ko extends uE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends Ko{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class Fn extends Ko{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class $n extends Ko{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
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
 */async function Dc(t,e){return Go(t,"POST","/v1/accounts:signUp",ei(t,e))}/**
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
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rr._fromIdTokenResponse(e,r,i),o=dv(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dv(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rl extends fr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rl(e,n,r,i)}}function cE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,s,e,r):s})}async function ID(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
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
 */async function kD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xi(t,cE(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Jh(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
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
 */async function dE(t,e,n=!1){const r="signIn",i=await cE(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xD(t,e){return dE(ti(t),e)}/**
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
 */async function fE(t){const e=ti(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bD(t,e,n){var r;const i=ti(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await bl(i,s,"signUpPassword");o=Dc(i,u)}else o=Dc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await bl(i,s,"signUpPassword");return Dc(i,d)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&fE(t),u}),l=await Vr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function RD(t,e,n){return xD(yt(t),ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fE(t),r})}/**
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
 */async function PD(t,e){return hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ND(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=yt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xi(r,PD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function OD(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function AD(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function DD(t){return yt(t).signOut()}const Pl="__sak";/**
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
 */class hE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function LD(){const t=Ke();return Zh(t)||Pu(t)}const MD=1e3,FD=10;class pE extends hE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LD()&&nD(),this.fallbackToPolling=sE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pE.type="LOCAL";const $D=pE;/**
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
 */class mE extends hE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mE.type="SESSION";const gE=mE;/**
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
 */function jD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await jD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nu.receivers=[];/**
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
 */function np(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=np("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function zD(t){nn().location.href=t}/**
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
 */function vE(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function VD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WD(){return vE()?self:null}/**
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
 */const _E="firebaseLocalStorageDb",HD=1,Nl="firebaseLocalStorage",yE="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ou(t,e){return t.transaction([Nl],e?"readwrite":"readonly").objectStore(Nl)}function GD(){const t=indexedDB.deleteDatabase(_E);return new qo(t).toPromise()}function lf(){const t=indexedDB.open(_E,HD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nl,{keyPath:yE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nl)?e(r):(r.close(),await GD(),e(await lf()))})})}async function fv(t,e,n){const r=Ou(t,!0).put({[yE]:e,value:n});return new qo(r).toPromise()}async function KD(t,e){const n=Ou(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function hv(t,e){const n=Ou(t,!0).delete(e);return new qo(n).toPromise()}const qD=800,YD=3;class wE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nu._getInstance(WD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VD(),!this.activeServiceWorker)return;this.sender=new UD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lf();return await fv(e,Pl,"1"),await hv(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ou(i,!1).getAll();return new qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wE.type="LOCAL";const QD=wE;new Ho(3e4,6e4);/**
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
 */function XD(t,e){return e?hn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rp extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JD(t){return dE(t.auth,new rp(t),t.bypassAuthState)}function ZD(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),kD(n,new rp(t),t.bypassAuthState)}async function eL(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),ID(n,new rp(t),t.bypassAuthState)}/**
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
 */class EE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JD;case"linkViaPopup":case"linkViaRedirect":return eL;case"reauthViaPopup":case"reauthViaRedirect":return ZD;default:zt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tL=new Ho(2e3,1e4);class Si extends EE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tL.get())};e()}}Si.currentPopupAction=null;/**
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
 */const nL="pendingRedirect",Ba=new Map;class rL extends EE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await iL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iL(t,e){const n=aL(e),r=oL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sL(t,e){Ba.set(t._key(),e)}function oL(t){return hn(t._redirectPersistence)}function aL(t){return Va(nL,t.config.apiKey,t.name)}async function lL(t,e,n=!1){const r=ti(t),i=XD(r,e),o=await new rL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const uL=10*60*1e3;class cL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!SE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uL&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function SE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SE(t);default:return!1}}/**
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
 */async function fL(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
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
 */const hL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pL=/^https?/;async function mL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fL(t);for(const n of e)try{if(gL(n))return}catch{}zt(t,"unauthorized-domain")}function gL(t){const e=af(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pL.test(n))return!1;if(hL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const vL=new Ho(3e4,6e4);function mv(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _L(t){return new Promise((e,n)=>{var r,i,s;function o(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(tn(t,"network-request-failed"))},timeout:vL.get()})}if(!((i=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nn().gapi)===null||s===void 0)&&s.load)o();else{const a=uD("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},aE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wa=null,e})}let Wa=null;function yL(t){return Wa=Wa||_L(t),Wa}/**
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
 */const wL=new Ho(5e3,15e3),EL="__/auth/iframe",SL="emulator/auth/iframe",CL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IL(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xh(e,SL):`https://${t.config.authDomain}/${EL}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=TL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${us(r).slice(1)}`}async function kL(t){const e=await yL(t),n=nn().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:IL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{s(o)},wL.get());function l(){nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const xL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bL=500,RL=600,PL="_blank",NL="http://localhost";class gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OL(t,e,n,r=bL,i=RL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ke().toLowerCase();n&&(a=eE(u)?PL:n),Zw(u)&&(e=e||NL,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(eD(u)&&a!=="_self")return AL(e||"",a),new gv(null);const c=window.open(e||"",a,d);$(c,t,"popup-blocked");try{c.focus()}catch{}return new gv(c)}function AL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DL="__/auth/handler",LL="emulator/auth/handler",ML=encodeURIComponent("fac");async function vv(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof uE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ef(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Ko){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${ML}=${encodeURIComponent(l)}`:"";return`${FL(t)}?${us(a).slice(1)}${u}`}function FL({config:t}){return t.emulator?Xh(t,LL):`https://${t.authDomain}/${DL}`}/**
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
 */const Lc="webStorageSupport";class $L{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gE,this._completeRedirectFn=lL,this._overrideRedirectResult=sL}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vv(e,n,r,af(),i);return OL(e,o,np())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vv(e,n,r,af(),i);return zD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kL(e),r=new cL(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lc];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sE()||Zh()||Pu()}}const jL=$L;var _v="@firebase/auth",yv="1.3.0";/**
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
 */class UL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VL(t){Qi(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oE(t)},u=new aD(r,i,s,l);return mD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qi(new jr("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(r=>new UL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(_v,yv,zL(t)),er(_v,yv,"esm2017")}/**
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
 */const BL=5*60,WL=Lw("authIdTokenMaxAge")||BL;let wv=null;const HL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WL)return;const i=n==null?void 0:n.token;wv!==i&&(wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GL(t=Bw()){const e=qh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pD(t,{popupRedirectResolver:jL,persistence:[QD,$D,gE]}),r=Lw("authTokenSyncURL");if(r){const s=HL(r);AD(n,s,()=>s(n.currentUser)),OD(n,o=>s(o))}const i=Aw("auth");return i&&gD(n,`http://${i}`),n}VL("Browser");const KL=F.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(150, 150, 150, 0.5);
  /* var(--modal-backdrop-background-color); */
  z-index: 100;
`,qL=F.div`
  position: absolute;
  top: 50%;
  left: 50%;
  /* width: 100%; */
  max-width: 566px;
  padding: 64px;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  box-shadow: 0px 4px 16px 0px var(--modal-window-shadow);

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: ${t=>t.custom?"400px":"350px"};
  }

  @media screen and (max-height: 500px) and (orientation: landscape) {
    position: sticky;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`,YL=F.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: background-color 250ms ease-in;
  border-radius: 50%;
  background-color: transparent;

  &:hover,
  :focus {
    background-color: var(--secondary-button-color);
  }
`,QL=F.svg`
  stroke: var(--modal-close-icon-color);
`,XL=({children:t,onClose:e,custom:n,nameForm:r})=>{const i=a=>{a.stopPropagation(),e()},s=a=>{a.target===a.currentTarget&&(a.stopPropagation(),e())};function o(a){a.key==="Escape"&&(a.stopPropagation(),e())}return y.useEffect(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)})),I.jsx(KL,{onClick:s,children:I.jsxs(qL,{custom:!!n,children:[I.jsx(YL,{onClick:i,children:I.jsx(QL,{width:18,height:18,children:I.jsx("use",{href:`${Nh}#icon-apple`})})}),t]})})},JL=F.h1`
  margin-bottom: calc(20rem / 16);
  font-size: calc(40rem / 16);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`,ZL=F.h2`
  margin-bottom: calc(40rem / 16);
  color: rgba(18, 20, 23, 0.8);
  font-size: 1rem;
  line-height: 1.38;
`,Mc=F(XN)`
  padding: 1rem;
  margin-bottom: calc(18rem / 16);
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  &:last-of-type {
    margin-bottom: calc(40rem / 16);
  }
  &::placeholder {
    color: #121417;
    font-size: 1rem;
    line-height: 1.38;
  }
`,eM=F.button`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  background: #f4c550;
  border-color: transparent;
`;function ni(t){this._maxSize=t,this.clear()}ni.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ni.prototype.get=function(t){return this._values[t]};ni.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var tM=/[^.^\]^[]+|(?=\[\]|\.\.)/g,CE=/^\d+$/,nM=/^\d/,rM=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,iM=/^\s*(['"]?)(.*?)(\1)\s*$/,ip=512,Ev=new ni(ip),Sv=new ni(ip),Cv=new ni(ip),Pr={Cache:ni,split:uf,normalizePath:Fc,setter:function(t){var e=Fc(t);return Sv.get(t)||Sv.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Fc(t);return Cv.get(t)||Cv.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(sp(n)||CE.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){sM(Array.isArray(t)?t:uf(t),e,n)}};function Fc(t){return Ev.get(t)||Ev.set(t,uf(t).map(function(e){return e.replace(iM,"$2")}))}function uf(t){return t.match(tM)||[""]}function sM(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(lM(i)&&(i='"'+i+'"'),a=sp(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function sp(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function oM(t){return t.match(nM)&&!t.match(CE)}function aM(t){return rM.test(t)}function lM(t){return!sp(t)&&(oM(t)||aM(t))}const uM=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Au=t=>t.match(uM)||[],Du=t=>t[0].toUpperCase()+t.slice(1),op=(t,e)=>Au(t).join(e).toLowerCase(),TE=t=>Au(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),cM=t=>Du(TE(t)),dM=t=>op(t,"_"),fM=t=>op(t,"-"),hM=t=>Du(op(t," ")),pM=t=>Au(t).map(Du).join(" ");var $c={words:Au,upperFirst:Du,camelCase:TE,pascalCase:cM,snakeCase:dM,kebabCase:fM,sentenceCase:hM,titleCase:pM},ap={exports:{}};ap.exports=function(t){return IE(mM(t),t)};ap.exports.array=IE;function IE(t,e){var n=t.length,r=new Array(n),i={},s=n,o=gM(e),a=vM(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var m=o.get(u)||new Set;if(m=Array.from(m),d=m.length){c.add(u);do{var v=m[--d];l(v,a.get(v),c)}while(d);c.delete(u)}r[--n]=u}}}function mM(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function gM(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function vM(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var _M=ap.exports;const yM=Kl(_M),wM=Object.prototype.toString,EM=Error.prototype.toString,SM=RegExp.prototype.toString,CM=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",TM=/^Symbol\((.*)\)(.*)$/;function IM(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Tv(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return IM(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return CM.call(t).replace(TM,"Symbol($1)");const r=wM.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+EM.call(t)+"]":r==="RegExp"?SM.call(t):null}function tr(t,e){let n=Tv(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=Tv(this[r],e);return s!==null?s:i},2)}function kE(t){return t==null?[]:[].concat(t)}let xE,kM=/\$\{\s*(\w+)\s*\}/g;xE=Symbol.toStringTag;class Ze extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(kM,(i,s)=>tr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[xE]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],kE(e).forEach(o=>{if(Ze.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,Ze)}}let Kt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${tr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${tr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${tr(n,!0)}\``+i}},Pt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},xM={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},cf={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},bM={isValue:"${path} field must be ${value}"},df={noUnknown:"${path} field has unspecified keys: ${unknown}"},RM={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},PM={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${tr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${tr(n,!0)}\``}return Ze.formatError(Kt.notType,t)}};Object.assign(Object.create(null),{mixed:Kt,string:Pt,number:xM,date:cf,object:df,array:RM,boolean:bM,tuple:PM});const lp=t=>t&&t.__isYupSchema__;class Ol{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Ol(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!lp(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Ea={context:"$",value:"."};class ri{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ea.context,this.isValue=this.key[0]===Ea.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Ea.context:this.isValue?Ea.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Pr.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}ri.prototype.__isYupRef=!0;const Ir=t=>t==null;function ai(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:m}=t;let{parent:v,context:_,abortEarly:E=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(K){return ri.isRef(K)?K.getValue(n,v,_):K}function g(K={}){var Vt;const he=Object.assign({value:n,originalValue:s,label:o.spec.label,path:K.path||r,spec:o.spec},c,K.params);for(const pr of Object.keys(he))he[pr]=h(he[pr]);const xt=new Ze(Ze.formatError(K.message||f,he),n,he.path,K.type||u,(Vt=K.disableStackTrace)!=null?Vt:p);return xt.params=he,xt}const S=E?a:l;let k={path:r,parent:v,type:u,from:i.from,createError:g,resolve:h,options:i,originalValue:s,schema:o};const T=K=>{Ze.isError(K)?S(K):K?l(null):S(g())},C=K=>{Ze.isError(K)?S(K):a(K)};if(m&&Ir(n))return T(!0);let z;try{var L;if(z=d.call(k,n,k),typeof((L=z)==null?void 0:L.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(z).then(T,C)}}catch(K){C(K);return}T(z)}return e.OPTIONS=t,e}function NM(t,e,n,r=n){let i,s,o;return e?(Pr.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class Al extends Set{describe(){const e=[];for(const n of this.values())e.push(ri.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new Al(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Ci(t,e=new Map){if(lp(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=Ci(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,Ci(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(Ci(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=Ci(i,e)}else throw Error(`Unable to clone ${t}`);return n}class rn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Al,this._blacklist=new Al,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Kt.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Ci(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&Ir(s))return s;let o=tr(e),a=tr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=_=>{i||(i=!0,n(_,o))},c=_=>{i||(i=!0,r(_,o))},f=s.length,m=[];if(!f)return c([]);let v={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const E=s[_];E(v,d,function(h){h&&(Array.isArray(h)?m.push(...h):m.push(h)),--f<=0&&c(m)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,m)=>this.resolve(d)._validate(u,d,f,m)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{Ze.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new Ze(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw Ze.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Ze(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(Ze.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(Ze.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):Ci(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=ai({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=ai({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=Kt.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=Kt.notNull){return this.nullability(!1,e)}required(e=Kt.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=Kt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=ai(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=kE(e).map(s=>new ri(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Ol(i,n):Ol.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=ai({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=Kt.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=ai({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=Kt.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=ai({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}rn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])rn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=NM(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])rn.prototype[t]=rn.prototype.oneOf;for(const t of["not","nope"])rn.prototype[t]=rn.prototype.notOneOf;let OM=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,AM=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,DM=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,LM=t=>Ir(t)||t===t.trim(),MM={}.toString();function ui(){return new bE}class bE extends rn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===MM?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||Kt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Pt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Pt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Pt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Pt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Pt.email){return this.matches(OM,{name:"email",message:e,excludeEmptyString:!0})}url(e=Pt.url){return this.matches(AM,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Pt.uuid){return this.matches(DM,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Pt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:LM})}lowercase(e=Pt.lowercase){return this.transform(n=>Ir(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Ir(n)||n===n.toLowerCase()})}uppercase(e=Pt.uppercase){return this.transform(n=>Ir(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Ir(n)||n===n.toUpperCase()})}}ui.prototype=bE.prototype;const FM=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function an(t,e=0){return Number(t)||e}function $M(t){const e=FM.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:an(e[1]),month:an(e[2],1)-1,day:an(e[3],1),hour:an(e[4]),minute:an(e[5]),second:an(e[6]),millisecond:e[7]?an(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:an(e[10]),minuteOffset:an(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let jM=new Date(""),UM=t=>Object.prototype.toString.call(t)==="[object Date]";class Lu extends rn{constructor(){super({type:"date",check(e){return UM(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=$M(e),isNaN(e)?Lu.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(ri.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=cf.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=cf.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Lu.INVALID_DATE=jM;Lu.prototype;function zM(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Pr.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),ri.isRef(a)&&a.isSibling?s(a.path,o):lp(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return yM.array(Array.from(r),n).reverse()}function Iv(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function RE(t){return(e,n)=>Iv(t,e)-Iv(t,n)}const VM=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Ha(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Ha(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Ha(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Ha)}):"optional"in t?t.optional():t}const BM=(t,e)=>{const n=[...Pr.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=Pr.getter(Pr.join(n),!0)(t);return!!(i&&r in i)};let kv=t=>Object.prototype.toString.call(t)==="[object Object]";function WM(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const HM=RE([]);function ff(t){return new PE(t)}class PE extends rn{constructor(e){super({type:"object",check(n){return kv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=HM,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],m=c in i;if(f){let v,_=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:_,context:n.context,parent:l});let E=f instanceof rn?f.spec:void 0,p=E==null?void 0:E.strict;if(E!=null&&E.strip){d=d||c in i;continue}v=!n.__validating||!p?f.cast(i[c],u):i[c],v!==void 0&&(l[c]=v)}else m&&!o&&(l[c]=i[c]);(m!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!kv(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||ri.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=zM(e,n),r._sortErrors=RE(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Ha(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=Pr.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return BM(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(VM)}noUnknown(e=!0,n=df.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=WM(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=df.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys($c.camelCase)}snakeCase(){return this.transformKeys($c.snakeCase)}constantCase(){return this.transformKeys(e=>$c.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}ff.prototype=PE.prototype;const GM=t=>({TitleSchema:t?ff().shape({displayName:ui().min(2,"Too Short!").max(50,"Too Long!").matches(/^[a-zA-Z0-9_\-/.]+$/,"Forbidden symbols").required("Required"),email:ui().email("Invalid email").required("Required"),password:ui().min(6,"Too Short!").required("Required")}):ff().shape({email:ui().email("Invalid email").required("Required"),password:ui().min(6,"Too Short!").required("Required")}),subTitle:t?"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information":"Welcome back! Please enter your credentials to access your account and continue your search for an teacher.",initial:t?{displayName:"",email:"",password:""}:{email:"",password:""}});var KM="firebase",qM="10.5.0";/**
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
 */er(KM,qM,"app");const xv="@firebase/database",bv="1.0.1";/**
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
 */let NE="";function YM(t){NE=t}/**
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
 */class QM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Co(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class XM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return In(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const OE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QM(e)}}catch{}return new XM},kr=OE("localStorage"),hf=OE("sessionStorage");/**
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
 */const Mi=new Gh("@firebase/database"),JM=function(){let t=1;return function(){return t++}}(),AE=function(t){const e=xO(t),n=new CO;n.update(e);const r=n.digest();return Vh.encodeByteArray(r)},Yo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Yo.apply(null,r):typeof r=="object"?e+=Oe(r):e+=r,e+=" "}return e};let Nr=null,Rv=!0;const ZM=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Mi.logLevel=ne.VERBOSE,Nr=Mi.log.bind(Mi),e&&hf.set("logging_enabled",!0)):typeof t=="function"?Nr=t:(Nr=null,hf.remove("logging_enabled"))},We=function(...t){if(Rv===!0&&(Rv=!1,Nr===null&&hf.get("logging_enabled")===!0&&ZM(!0)),Nr){const e=Yo.apply(null,t);Nr(e)}},Qo=function(t){return function(...e){We(t,...e)}},pf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Yo(...t);Mi.error(e)},Sn=function(...t){const e=`FIREBASE FATAL ERROR: ${Yo(...t)}`;throw Mi.error(e),new Error(e)},pt=function(...t){const e="FIREBASE WARNING: "+Yo(...t);Mi.warn(e)},e2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},DE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},t2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ji="[MIN_NAME]",Br="[MAX_NAME]",fs=function(t,e){if(t===e)return 0;if(t===Ji||e===Br)return-1;if(e===Ji||t===Br)return 1;{const n=Pv(t),r=Pv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},n2=function(t,e){return t===e?0:t<e?-1:1},ks=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},up=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Oe(e[r]),n+=":",n+=up(t[e[r]]);return n+="}",n},LE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function at(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ME=function(t){b(!DE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},r2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},i2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function s2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const o2=new RegExp("^-?(0*)\\d{1,10}$"),a2=-2147483648,l2=2147483647,Pv=function(t){if(o2.test(t)){const e=Number(t);if(e>=a2&&e<=l2)return e}return null},Xo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},u2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class c2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class d2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class Fi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fi.OWNER="owner";/**
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
 */const cp="5",FE="v",$E="s",jE="r",UE="f",zE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,VE="ls",BE="p",mf="ac",WE="websocket",HE="long_polling";/**
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
 */class GE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function f2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function KE(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===WE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===HE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);f2(t)&&(n.ns=t.namespace);const i=[];return at(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class h2{constructor(){this.counters_={}}incrementCounter(e,n=1){In(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oO(this.counters_)}}/**
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
 */const jc={},Uc={};function dp(t){const e=t.toString();return jc[e]||(jc[e]=new h2),jc[e]}function p2(t,e){const n=t.toString();return Uc[n]||(Uc[n]=e()),Uc[n]}/**
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
 */class m2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Xo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Nv="start",g2="close",v2="pLPCommand",_2="pRTLPCB",qE="id",YE="pw",QE="ser",y2="cb",w2="seg",E2="ts",S2="d",C2="dframe",XE=1870,JE=30,T2=XE-JE,I2=25e3,k2=3e4;class Ti{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qo(e),this.stats_=dp(n),this.urlFn=l=>(this.appCheckToken&&(l[mf]=this.appCheckToken),KE(n,HE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new m2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(k2)),t2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fp((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nv)this.id=a,this.password=l;else if(o===g2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Nv]="t",r[QE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[y2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[FE]=cp,this.transportSessionId&&(r[$E]=this.transportSessionId),this.lastSessionId&&(r[VE]=this.lastSessionId),this.applicationId&&(r[BE]=this.applicationId),this.appCheckToken&&(r[mf]=this.appCheckToken),typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(r[jE]=UE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ti.forceAllow_=!0}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){return Ti.forceAllow_?!0:!Ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!r2()&&!i2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Nw(n),i=LE(r,T2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[C2]="t",r[qE]=e,r[YE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JM(),window[v2+this.uniqueCallbackIdentifier]=e,window[_2+this.uniqueCallbackIdentifier]=n,this.myIFrame=fp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qE]=this.myID,e[YE]=this.myPW,e[QE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+JE+r.length<=XE;){const o=this.pendingSegs.shift();r=r+"&"+w2+i+"="+o.seg+"&"+E2+i+"="+o.ts+"&"+S2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(I2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const x2=16384,b2=45e3;let Dl=null;typeof MozWebSocket<"u"?Dl=MozWebSocket:typeof WebSocket<"u"&&(Dl=WebSocket);class Dt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qo(this.connId),this.stats_=dp(n),this.connURL=Dt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[FE]=cp,typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(o[jE]=UE),n&&(o[$E]=n),r&&(o[VE]=r),i&&(o[mf]=i),s&&(o[BE]=s),KE(e,WE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kr.set("previous_websocket_failure",!0);try{let r;Fw(),this.mySock=new Dl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Dl!==null&&!Dt.forceDisallow_}static previouslyFailed(){return kr.isInMemoryStorage||kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Co(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=LE(n,x2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(b2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
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
 */class xo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ti,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Dt&&Dt.isAvailable();let r=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Dt];else{const i=this.transports_=[];for(const s of xo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xo.globalTransportInitialized_=!1;/**
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
 */const R2=6e4,P2=5e3,N2=10*1024,O2=100*1024,zc="t",Ov="d",A2="s",Av="r",D2="e",Dv="o",Lv="a",Mv="n",Fv="p",L2="h";class M2{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qo("c:"+this.id+":"),this.transportManager_=new xo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>O2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>N2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zc in e){const n=e[zc];n===Lv?this.upgradeIfSecondaryHealthy_():n===Av?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ks("t",e),r=ks("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ks("t",e),r=ks("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ks(zc,e);if(Ov in e){const r=e[Ov];if(n===L2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Mv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===A2?this.onConnectionShutdown_(r):n===Av?this.onReset_(r):n===D2?pf("Server Error: "+r):n===Dv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cp!==r&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(P2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ZE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class eS{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ll extends eS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ll}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $v=32,jv=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function or(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function tS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function F2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return tt(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hp(t,e){if(or(t)!==or(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(or(t)>or(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class $2{constructor(e,n){this.errorPrefix_=n,this.parts_=nS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ru(this.parts_[r]);iS(this)}}function j2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ru(e),iS(t)}function U2(t){const e=t.parts_.pop();t.byteLength_-=Ru(e),t.parts_.length>0&&(t.byteLength_-=1)}function iS(t){if(t.byteLength_>jv)throw new Error(t.errorPrefix_+"has a key path longer than "+jv+" bytes ("+t.byteLength_+").");if(t.parts_.length>$v)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$v+") or object contains a cycle "+Er(t))}function Er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class pp extends eS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new pp}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const xs=1e3,z2=60*5*1e3,Uv=30*1e3,V2=1.3,B2=3e4,W2="server_kill",zv=3;class gn extends ZE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gn.nextPersistentConnectionId_++,this.log_=Qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xs,this.maxReconnectDelay_=z2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Oe(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Wh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;gn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&In(e,"w")){const r=Yi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=EO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pf("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>B2&&(this.reconnectDelay_=xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*V2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new M2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{pt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(W2)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&pt(c),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ef(this.interruptReasons_)&&(this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>up(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zv&&(this.reconnectDelay_=Uv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NE.replace(/\./g,"-")]=1,Hh()?e["framework.cordova"]=1:Mw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ll.getInstance().currentlyOnline();return ef(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
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
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
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
 */class Mu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(Ji,e),i=new B(Ji,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
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
 */let Sa;class sS extends Mu{static get __EMPTY_NODE(){return Sa}static set __EMPTY_NODE(e){Sa=e}compare(e,n){return fs(e.name,n.name)}isDefinedOn(e){throw ls("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(Br,Sa)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,Sa)}toString(){return".key"}}const $i=new sS;/**
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
 */class Ca{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??nt.EMPTY_NODE,this.right=s??nt.EMPTY_NODE}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class H2{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ca(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ca(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ca(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ca(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new H2;/**
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
 */function G2(t,e){return fs(t.name,e.name)}function mp(t,e){return fs(t,e)}/**
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
 */let gf;function K2(t){gf=t}const oS=function(t){return typeof t=="number"?"number:"+ME(t):"string:"+t},aS=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&In(e,".sv"),"Priority must be a string or number.")}else b(t===gf||t.isEmpty(),"priority of unexpected type.");b(t===gf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vv;class Re{constructor(e,n=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),aS(this.priorityNode_)}static set __childrenNodeConstructor(e){Vv=e}static get __childrenNodeConstructor(){return Vv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:W(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ME(this.value_):e+=this.value_,this.lazyHash_=AE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Re.VALUE_TYPE_ORDER.indexOf(n),s=Re.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let lS,uS;function q2(t){lS=t}function Y2(t){uS=t}class Q2 extends Mu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?fs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(Br,new Re("[PRIORITY-POST]",uS))}makePost(e,n){const r=lS(e);return new B(n,new Re("[PRIORITY-POST]",r))}toString(){return".priority"}}const we=new Q2;/**
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
 */const X2=Math.log(2);class J2{constructor(e){const n=s=>parseInt(Math.log(s)/X2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ml=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Ne(f,c.node,Ne.BLACK,null,null);{const m=parseInt(d/2,10)+l,v=i(l,m),_=i(m+1,u);return c=t[m],f=n?n(c):c,new Ne(f,c.node,Ne.BLACK,v,_)}},s=function(l){let u=null,d=null,c=t.length;const f=function(v,_){const E=c-v,p=c;c-=v;const h=i(E+1,p),g=t[E],S=n?n(g):g;m(new Ne(S,g.node,_,null,h))},m=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));_?f(E,Ne.BLACK):(f(E,Ne.BLACK),f(E,Ne.RED))}return d},o=new J2(t.length),a=s(o);return new nt(r||e,a)};/**
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
 */let Vc;const li={};class pn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(li&&we,"ChildrenNode.ts has not been loaded"),Vc=Vc||new pn({".priority":li},{".priority":we}),Vc}get(e){const n=Yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return In(this.indexSet_,e.toString())}addIndex(e,n){b(e!==$i,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ml(r,e.getCompare()):a=li;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new pn(d,u)}addToIndexes(e,n){const r=Cl(this.indexes_,(i,s)=>{const o=Yi(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(B.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ml(a,o.getCompare())}else return li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new pn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Cl(this.indexes_,i=>{if(i===li)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new pn(r,this.indexSet_)}}/**
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
 */let bs;class M{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&aS(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bs||(bs=new M(new nt(mp),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bs}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bs:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?bs:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{b(W(e)!==".priority"||or(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(we,(o,a)=>{n[o]=a.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oS(this.getPriority().val())+":"),this.forEachChild(we,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":AE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jo?-1:0}withIndex(e){if(e===$i||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$i||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(we),i=n.getIterator(we);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$i?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Z2 extends M{constructor(){super(new nt(mp),M.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Jo=new Z2;Object.defineProperties(B,{MIN:{value:new B(Ji,M.EMPTY_NODE)},MAX:{value:new B(Br,Jo)}});sS.__EMPTY_NODE=M.EMPTY_NODE;Re.__childrenNodeConstructor=M;K2(Jo);Y2(Jo);/**
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
 */const eF=!0;function He(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Re(n,He(e))}if(!(t instanceof Array)&&eF){const n=[];let r=!1;if(at(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new B(o,l)))}}),n.length===0)return M.EMPTY_NODE;const s=Ml(n,G2,o=>o.name,mp);if(r){const o=Ml(n,we.getCompare());return new M(s,He(e),new pn({".priority":o},{".priority":we}))}else return new M(s,He(e),pn.Default)}else{let n=M.EMPTY_NODE;return at(t,(r,i)=>{if(In(t,r)&&r.substring(0,1)!=="."){const s=He(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(He(e))}}q2(He);/**
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
 */class tF extends Mu{constructor(e){super(),this.indexPath_=e,b(!H(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?fs(e.name,n.name):s}makePost(e,n){const r=He(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Jo);return new B(Br,e)}toString(){return nS(this.indexPath_,0).join("/")}}/**
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
 */class nF extends Mu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?fs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=He(e);return new B(n,r)}toString(){return".value"}}const rF=new nF;/**
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
 */function cS(t){return{type:"value",snapshotNode:t}}function Zi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(bo(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zi(n,r)):o.trackChildChange(Ro(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(we,(i,s)=>{n.hasChild(i)||r.trackChildChange(bo(i,s))}),n.isLeafNode()||n.forEachChild(we,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ro(i,s,o))}else r.trackChildChange(Zi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Po{constructor(e){this.indexedFilter_=new gp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Po.getStartPost_(e),this.endPost_=Po.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(we,(o,a)=>{s.matches(new B(o,a))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class sF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Po(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,m)=>c(m,f)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new B(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Ro(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(bo(n,c));const _=a.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Zi(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(bo(u.name,u.node)),s.trackChildChange(Zi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
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
 */class vp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ji}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new vp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oF(t){return t.loadsAllData()?new gp(t.getIndex()):t.hasLimit()?new sF(t):new Po(t)}function Bv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===we?n="$priority":t.index_===rF?n="$value":t.index_===$i?n="$key":(b(t.index_ instanceof tF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
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
 */class Fl extends ZE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Bv(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Yi(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Fl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Bv(e._queryParams),r=e._path.toString(),i=new Wh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+us(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Co(a.responseText)}catch{pt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&pt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class aF{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function $l(){return{value:null,children:new Map}}function dS(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,$l());const i=t.children.get(r);e=oe(e),dS(i,e,n)}}function vf(t,e,n){t.value!==null?n(e,t.value):lF(t,(r,i)=>{const s=new re(e.toString()+"/"+r);vf(i,s,n)})}function lF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class uF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&at(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Hv=10*1e3,cF=30*1e3,dF=5*60*1e3;class fF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uF(e);const r=Hv+(cF-Hv)*Math.random();qs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;at(e,(i,s)=>{s>0&&In(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qs(this.reportStats_.bind(this),Math.floor(Math.random()*2*dF))}}/**
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
 */var Mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mt||(Mt={}));function fS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _p(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class jl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Mt.ACK_USER_WRITE,this.source=fS()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new jl(X(),n,this.revert)}}else return b(W(this.path)===e,"operationForChild called for unrelated child."),new jl(oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class No{constructor(e,n){this.source=e,this.path=n,this.type=Mt.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new No(this.source,X()):new No(this.source,oe(this.path))}}/**
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
 */class Wr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Mt.OVERWRITE}operationForChild(e){return H(this.path)?new Wr(this.source,X(),this.snap.getImmediateChild(e)):new Wr(this.source,oe(this.path),this.snap)}}/**
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
 */class Oo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Mt.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new Wr(this.source,X(),n.value):new Oo(this.source,X(),n)}else return b(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oo(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class hF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iF(o.childName,o.snapshotNode))}),Rs(t,i,"child_removed",e,r,n),Rs(t,i,"child_added",e,r,n),Rs(t,i,"child_moved",s,r,n),Rs(t,i,"child_changed",e,r,n),Rs(t,i,"value",e,r,n),i}function Rs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gF(t,a,l)),o.forEach(a=>{const l=mF(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function mF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gF(t,e,n){if(e.childName==null||n.childName==null)throw ls("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Fu(t,e){return{eventCache:t,serverCache:e}}function Ys(t,e,n,r){return Fu(new Hr(e,n,r),t.serverCache)}function hS(t,e,n,r){return Fu(t.eventCache,new Hr(e,n,r))}function _f(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Bc;const vF=()=>(Bc||(Bc=new nt(n2)),Bc);class de{constructor(e,n=vF()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return at(e,(r,i)=>{n=n.set(new re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(H(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(oe(e),n);return s!=null?{path:ke(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(oe(e)):new de(null)}}set(e,n){if(H(e))return new de(n,this.children);{const r=W(e),s=(this.children.get(r)||new de(null)).set(oe(e),n),o=this.children.insert(r,s);return new de(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new de(null):new de(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(oe(e)):null}}setTree(e,n){if(H(e))return n;{const r=W(e),s=(this.children.get(r)||new de(null)).setTree(oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new de(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(H(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(H(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(oe(e),ke(n,i),r):new de(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class jt{constructor(e){this.writeTree_=e}static empty(){return new jt(new de(null))}}function Qs(t,e,n){if(H(e))return new jt(new de(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tt(i,e);return s=s.updateChild(o,n),new jt(t.writeTree_.set(i,s))}else{const i=new de(n),s=t.writeTree_.setTree(e,i);return new jt(s)}}}function Gv(t,e,n){let r=t;return at(n,(i,s)=>{r=Qs(r,ke(e,i),s)}),r}function Kv(t,e){if(H(e))return jt.empty();{const n=t.writeTree_.setTree(e,new de(null));return new jt(n)}}function yf(t,e){return ii(t,e)!=null}function ii(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function qv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function nr(t,e){if(H(e))return t;{const n=ii(t,e);return n!=null?new jt(new de(n)):new jt(t.writeTree_.subtree(e))}}function wf(t){return t.writeTree_.isEmpty()}function es(t,e){return pS(X(),t.writeTree_,e)}function pS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=pS(ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ke(t,".priority"),r)),n}}/**
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
 */function wp(t,e){return _S(e,t)}function _F(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Qs(t.visibleWrites,e,n)),t.lastWriteId=r}function yF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function wF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&EF(a,r.path)?i=!1:Lt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return SF(t),!0;if(r.snap)t.visibleWrites=Kv(t.visibleWrites,r.path);else{const a=r.children;at(a,l=>{t.visibleWrites=Kv(t.visibleWrites,ke(r.path,l))})}return!0}else return!1}function EF(t,e){if(t.snap)return Lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Lt(ke(t.path,n),e))return!0;return!1}function SF(t){t.visibleWrites=mS(t.allWrites,CF,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function CF(t){return t.visible}function mS(t,e,n){let r=jt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Lt(n,o)?(a=tt(n,o),r=Qs(r,a,s.snap)):Lt(o,n)&&(a=tt(o,n),r=Qs(r,X(),s.snap.getChild(a)));else if(s.children){if(Lt(n,o))a=tt(n,o),r=Gv(r,a,s.children);else if(Lt(o,n))if(a=tt(o,n),H(a))r=Gv(r,X(),s.children);else{const l=Yi(s.children,W(a));if(l){const u=l.getChild(oe(a));r=Qs(r,X(),u)}}}else throw ls("WriteRecord should have .snap or .children")}}return r}function gS(t,e,n,r,i){if(!r&&!i){const s=ii(t.visibleWrites,e);if(s!=null)return s;{const o=nr(t.visibleWrites,e);if(wf(o))return n;if(n==null&&!yf(o,X()))return null;{const a=n||M.EMPTY_NODE;return es(o,a)}}}else{const s=nr(t.visibleWrites,e);if(!i&&wf(s))return n;if(!i&&n==null&&!yf(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Lt(u.path,e)||Lt(e,u.path))},a=mS(t.allWrites,o,e),l=n||M.EMPTY_NODE;return es(a,l)}}}function TF(t,e,n){let r=M.EMPTY_NODE;const i=ii(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(we,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=nr(t.visibleWrites,e);return n.forEachChild(we,(o,a)=>{const l=es(nr(s,new re(o)),a);r=r.updateImmediateChild(o,l)}),qv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=nr(t.visibleWrites,e);return qv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function IF(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ke(e,n);if(yf(t.visibleWrites,s))return null;{const o=nr(t.visibleWrites,s);return wf(o)?i.getChild(n):es(o,i.getChild(n))}}function kF(t,e,n,r){const i=ke(e,n),s=ii(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=nr(t.visibleWrites,i);return es(o,r.getNode().getImmediateChild(n))}else return null}function xF(t,e){return ii(t.visibleWrites,e)}function bF(t,e,n,r,i,s,o){let a;const l=nr(t.visibleWrites,e),u=ii(l,X());if(u!=null)a=u;else if(n!=null)a=es(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&d.length<i;)c(m,r)!==0&&d.push(m),m=f.getNext();return d}else return[]}function RF(){return{visibleWrites:jt.empty(),allWrites:[],lastWriteId:-1}}function Ul(t,e,n,r){return gS(t.writeTree,t.treePath,e,n,r)}function Ep(t,e){return TF(t.writeTree,t.treePath,e)}function Yv(t,e,n,r){return IF(t.writeTree,t.treePath,e,n,r)}function zl(t,e){return xF(t.writeTree,ke(t.treePath,e))}function PF(t,e,n,r,i,s){return bF(t.writeTree,t.treePath,e,n,r,i,s)}function Sp(t,e,n){return kF(t.writeTree,t.treePath,e,n)}function vS(t,e){return _S(ke(t.treePath,e),t.writeTree)}function _S(t,e){return{treePath:t,writeTree:e}}/**
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
 */class NF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ro(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,bo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Zi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ro(r,e.snapshotNode,i.oldSnap));else throw ls("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class OF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const yS=new OF;class Cp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Hr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gr(this.viewCache_),s=PF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function AF(t){return{filter:t}}function DF(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function LF(t,e,n,r,i){const s=new NF;let o,a;if(n.type===Mt.OVERWRITE){const u=n;u.source.fromUser?o=Ef(t,e,u.path,u.snap,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!H(u.path),o=Vl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Mt.MERGE){const u=n;u.source.fromUser?o=FF(t,e,u.path,u.children,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Sf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Mt.ACK_USER_WRITE){const u=n;u.revert?o=UF(t,e,u.path,r,i,s):o=$F(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Mt.LISTEN_COMPLETE)o=jF(t,e,n.path,r,s);else throw ls("Unknown operation type: "+n.type);const l=s.getChanges();return MF(e,o,l),{viewCache:o,changes:l}}function MF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=_f(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cS(_f(e)))}}function wS(t,e,n,r,i,s){const o=e.eventCache;if(zl(r,n)!=null)return e;{let a,l;if(H(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gr(e),d=u instanceof M?u:M.EMPTY_NODE,c=Ep(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Ul(r,Gr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){b(or(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Yv(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=oe(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Yv(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Sp(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Ys(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Vl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(H(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),m,null)}else{const m=W(n);if(!l.isCompleteForPath(n)&&or(n)>1)return e;const v=oe(n),E=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),m,E,v,yS,null)}const c=hS(e,u,l.isFullyInitialized()||H(n),d.filtersNodes()),f=new Cp(i,c,s);return wS(t,c,n,i,f,a)}function Ef(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Cp(i,e,s);if(H(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ys(e,u,!0,t.filter.filtersNodes());else{const c=W(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ys(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=oe(n),m=a.getNode().getImmediateChild(c);let v;if(H(f))v=r;else{const _=d.getCompleteChild(c);_!=null?tS(f)===".priority"&&_.getChild(rS(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=M.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),c,v,f,d,o);l=Ys(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Qv(t,e){return t.eventCache.isCompleteForChild(e)}function FF(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=ke(n,l);Qv(e,W(d))&&(a=Ef(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=ke(n,l);Qv(e,W(d))||(a=Ef(t,a,d,u,i,s,o))}),a}function Xv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Sf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;H(n)?u=r:u=new de(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const m=e.serverCache.getNode().getImmediateChild(c),v=Xv(t,m,f);l=Vl(t,l,new re(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const m=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!m){const v=e.serverCache.getNode().getImmediateChild(c),_=Xv(t,v,f);l=Vl(t,l,new re(c),_,i,s,o,a)}}),l}function $F(t,e,n,r,i,s,o){if(zl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Vl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(H(n)){let u=new de(null);return l.getNode().forEachChild($i,(d,c)=>{u=u.set(new re(d),c)}),Sf(t,e,n,u,i,s,a,o)}else return e}else{let u=new de(null);return r.foreach((d,c)=>{const f=ke(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),Sf(t,e,n,u,i,s,a,o)}}function jF(t,e,n,r,i){const s=e.serverCache,o=hS(e,s.getNode(),s.isFullyInitialized()||H(n),s.isFiltered());return wS(t,o,n,r,yS,i)}function UF(t,e,n,r,i,s){let o;if(zl(r,n)!=null)return e;{const a=new Cp(r,e,i),l=e.eventCache.getNode();let u;if(H(n)||W(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ul(r,Gr(e));else{const c=e.serverCache.getNode();b(c instanceof M,"serverChildren would be complete if leaf node"),d=Ep(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=W(n);let c=Sp(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,oe(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,M.EMPTY_NODE,oe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ul(r,Gr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||zl(r,X())!=null,Ys(e,u,o,t.filter.filtersNodes())}}/**
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
 */class zF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gp(r.getIndex()),s=oF(r);this.processor_=AF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(M.EMPTY_NODE,a.getNode(),null),d=new Hr(l,o.isFullyInitialized(),i.filtersNodes()),c=new Hr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Fu(c,d),this.eventGenerator_=new hF(this.query_)}get query(){return this.query_}}function VF(t){return t.viewCache_.serverCache.getNode()}function BF(t,e){const n=Gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Jv(t){return t.eventRegistrations_.length===0}function WF(t,e){t.eventRegistrations_.push(e)}function Zv(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function e_(t,e,n,r){e.type===Mt.MERGE&&e.source.queryId!==null&&(b(Gr(t.viewCache_),"We should always have a full cache before handling merges"),b(_f(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=LF(t.processor_,i,e,n,r);return DF(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ES(t,s.changes,s.viewCache.eventCache.getNode(),null)}function HF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(s,o)=>{r.push(Zi(s,o))}),n.isFullyInitialized()&&r.push(cS(n.getNode())),ES(t,r,n.getNode(),e)}function ES(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return pF(t.eventGenerator_,e,n,i)}/**
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
 */let Bl;class GF{constructor(){this.views=new Map}}function KF(t){b(!Bl,"__referenceConstructor has already been defined"),Bl=t}function qF(){return b(Bl,"Reference.ts has not been loaded"),Bl}function YF(t){return t.views.size===0}function Tp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),e_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(e_(o,e,n,r));return s}}function QF(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ul(n,i?r:null),l=!1;a?l=!0:r instanceof M?(a=Ep(n,r),l=!1):(a=M.EMPTY_NODE,l=!1);const u=Fu(new Hr(a,l,!1),new Hr(r,i,!1));return new zF(e,u)}return o}function XF(t,e,n,r,i,s){const o=QF(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WF(o,n),HF(o,n)}function JF(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ar(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Zv(u,n,r)),Jv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Zv(l,n,r)),Jv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ar(t)&&s.push(new(qF())(e._repo,e._path)),{removed:s,events:o}}function SS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ji(t,e){let n=null;for(const r of t.views.values())n=n||BF(r,e);return n}function CS(t,e){if(e._queryParams.loadsAllData())return $u(t);{const r=e._queryIdentifier;return t.views.get(r)}}function TS(t,e){return CS(t,e)!=null}function ar(t){return $u(t)!=null}function $u(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wl;function ZF(t){b(!Wl,"__referenceConstructor has already been defined"),Wl=t}function e$(){return b(Wl,"Reference.ts has not been loaded"),Wl}let t$=1;class t_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=RF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function n$(t,e,n,r,i){return _F(t.pendingWriteTree_,e,n,r,i),i?Zo(t,new Wr(fS(),e,n)):[]}function Ii(t,e,n=!1){const r=yF(t.pendingWriteTree_,e);if(wF(t.pendingWriteTree_,e)){let s=new de(null);return r.snap!=null?s=s.set(X(),!0):at(r.children,o=>{s=s.set(new re(o),!0)}),Zo(t,new jl(r.path,s,n))}else return[]}function ju(t,e,n){return Zo(t,new Wr(_p(),e,n))}function r$(t,e,n){const r=de.fromObject(n);return Zo(t,new Oo(_p(),e,r))}function i$(t,e){return Zo(t,new No(_p(),e))}function s$(t,e,n){const r=Ip(t,n);if(r){const i=kp(r),s=i.path,o=i.queryId,a=tt(s,e),l=new No(yp(o),a);return xp(t,s,l)}else return[]}function Cf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||TS(o,e))){const l=JF(o,e,n,r);YF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,m)=>ar(m));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=l$(f);for(let v=0;v<m.length;++v){const _=m[v],E=_.query,p=bS(t,_);t.listenProvider_.startListening(Xs(E),Hl(t,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Xs(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Uu(f));t.listenProvider_.stopListening(Xs(f),m)}))}u$(t,u)}return a}function o$(t,e,n,r){const i=Ip(t,r);if(i!=null){const s=kp(i),o=s.path,a=s.queryId,l=tt(o,e),u=new Wr(yp(a),l,n);return xp(t,o,u)}else return[]}function a$(t,e,n,r){const i=Ip(t,r);if(i){const s=kp(i),o=s.path,a=s.queryId,l=tt(o,e),u=de.fromObject(n),d=new Oo(yp(a),l,u);return xp(t,o,d)}else return[]}function n_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=tt(f,i);s=s||ji(m,v),o=o||ar(m)});let a=t.syncPointTree_.get(i);a?(o=o||ar(a),s=s||ji(a,X())):(a=new GF,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=ji(v,X());_&&(s=s.updateImmediateChild(m,_))}));const u=TS(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Uu(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=c$();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const d=wp(t.pendingWriteTree_,i);let c=XF(a,e,n,d,s,l);if(!u&&!o&&!r){const f=CS(a,e);c=c.concat(d$(t,e,f))}return c}function IS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),u=ji(a,l);if(u)return u});return gS(i,e,s,n,!0)}function Zo(t,e){return kS(e,t.syncPointTree_,null,wp(t.pendingWriteTree_,X()))}function kS(t,e,n,r){if(H(t.path))return xS(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=ji(i,X()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=vS(r,o);s=s.concat(kS(a,l,u,d))}return i&&(s=s.concat(Tp(i,t,r,n))),s}}function xS(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=ji(i,X()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=vS(r,o),d=t.operationForChild(o);d&&(s=s.concat(xS(d,a,l,u)))}),i&&(s=s.concat(Tp(i,t,r,n))),s}function bS(t,e){const n=e.query,r=Hl(t,n);return{hashFn:()=>(VF(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?s$(t,n._path,r):i$(t,n._path);{const s=s2(i,n);return Cf(t,n,null,s)}}}}function Hl(t,e){const n=Uu(e);return t.queryToTagMap.get(n)}function Uu(t){return t._path.toString()+"$"+t._queryIdentifier}function Ip(t,e){return t.tagToQueryMap.get(e)}function kp(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function xp(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=wp(t.pendingWriteTree_,e);return Tp(r,n,i,null)}function l$(t){return t.fold((e,n,r)=>{if(n&&ar(n))return[$u(n)];{let i=[];return n&&(i=SS(n)),at(r,(s,o)=>{i=i.concat(o)}),i}})}function Xs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(e$())(t._repo,t._path):t}function u$(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Uu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function c$(){return t$++}function d$(t,e,n){const r=e._path,i=Hl(t,e),s=bS(t,n),o=t.listenProvider_.startListening(Xs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!ar(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!H(u)&&d&&ar(d))return[$u(d).query];{let f=[];return d&&(f=f.concat(SS(d).map(m=>m.query))),at(c,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Xs(d),Hl(t,d))}}return o}/**
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
 */class bp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bp(n)}node(){return this.node_}}class Rp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new Rp(this.syncTree_,n)}node(){return IS(this.syncTree_,this.path_)}}const f$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},r_=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return h$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return p$(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},h$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},p$=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},m$=function(t,e,n,r){return Pp(e,new Rp(n,t),r)},g$=function(t,e,n){return Pp(t,new bp(e),n)};function Pp(t,e,n){const r=t.getPriority().val(),i=r_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=r_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Re(a,He(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Re(i))),o.forEachChild(we,(a,l)=>{const u=Pp(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Np{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Op(t,e){let n=e instanceof re?e:new re(e),r=t,i=W(n);for(;i!==null;){const s=Yi(r.node.children,i)||{children:{},childCount:0};r=new Np(i,r,s),n=oe(n),i=W(n)}return r}function hs(t){return t.node.value}function RS(t,e){t.node.value=e,Tf(t)}function PS(t){return t.node.childCount>0}function v$(t){return hs(t)===void 0&&!PS(t)}function zu(t,e){at(t.node.children,(n,r)=>{e(new Np(n,t,r))})}function NS(t,e,n,r){n&&!r&&e(t),zu(t,i=>{NS(i,e,!0,r)}),n&&r&&e(t)}function _$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ea(t){return new re(t.parent===null?t.name:ea(t.parent)+"/"+t.name)}function Tf(t){t.parent!==null&&y$(t.parent,t.name,t)}function y$(t,e,n){const r=v$(n),i=In(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Tf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Tf(t))}/**
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
 */const w$=/[\[\].#$\/\u0000-\u001F\u007F]/,E$=/[\[\].#$\u0000-\u001F\u007F]/,Wc=10*1024*1024,OS=function(t){return typeof t=="string"&&t.length!==0&&!w$.test(t)},AS=function(t){return typeof t=="string"&&t.length!==0&&!E$.test(t)},S$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AS(t)},DS=function(t,e,n){const r=n instanceof re?new $2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Er(r));if(typeof e=="function")throw new Error(t+"contains a function "+Er(r)+" with contents = "+e.toString());if(DE(e))throw new Error(t+"contains "+e.toString()+" "+Er(r));if(typeof e=="string"&&e.length>Wc/3&&Ru(e)>Wc)throw new Error(t+"contains a string greater than "+Wc+" utf8 bytes "+Er(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(at(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!OS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Er(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);j2(r,o),DS(t,a,r),U2(r)}),i&&s)throw new Error(t+' contains ".value" child '+Er(r)+" in addition to actual children.")}},LS=function(t,e,n,r){if(!(r&&n===void 0)&&!AS(n))throw new Error(jw(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},C$=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),LS(t,e,n,r)},T$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!OS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!S$(n))throw new Error(jw(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class I${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function MS(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function FS(t,e,n){MS(t,n),$S(t,r=>hp(r,e))}function si(t,e,n){MS(t,n),$S(t,r=>Lt(r,e)||Lt(e,r))}function $S(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(k$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function k$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Nr&&We("event: "+n.toString()),Xo(r)}}}/**
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
 */const x$="repo_interrupt",b$=25;class R${constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new I$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$l(),this.transactionQueueTree_=new Np,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function P$(t,e,n){if(t.stats_=dp(t.repoInfo_),t.forceRestClient_||u2())t.server_=new Fl(t.repoInfo_,(r,i,s,o)=>{i_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>s_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new gn(t.repoInfo_,e,(r,i,s,o)=>{i_(t,r,i,s,o)},r=>{s_(t,r)},r=>{O$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=p2(t.repoInfo_,()=>new fF(t.stats_,t.server_)),t.infoData_=new aF,t.infoSyncTree_=new t_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ju(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ap(t,"connected",!1),t.serverSyncTree_=new t_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);si(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function N$(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jS(t){return f$({timestamp:N$(t)})}function i_(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Cl(n,u=>He(u));o=a$(t.serverSyncTree_,s,l,i)}else{const l=He(n);o=o$(t.serverSyncTree_,s,l,i)}else if(r){const l=Cl(n,u=>He(u));o=r$(t.serverSyncTree_,s,l)}else{const l=He(n);o=ju(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Lp(t,s)),si(t.eventQueue_,a,o)}function s_(t,e){Ap(t,"connected",e),e===!1&&D$(t)}function O$(t,e){at(e,(n,r)=>{Ap(t,n,r)})}function Ap(t,e,n){const r=new re("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(r,i);const s=ju(t.infoSyncTree_,r,i);si(t.eventQueue_,r,s)}function A$(t){return t.nextWriteId_++}function D$(t){US(t,"onDisconnectEvents");const e=jS(t),n=$l();vf(t.onDisconnect_,X(),(i,s)=>{const o=m$(i,s,t.serverSyncTree_,e);dS(n,i,o)});let r=[];vf(n,X(),(i,s)=>{r=r.concat(ju(t.serverSyncTree_,i,s));const o=j$(t,i);Lp(t,o)}),t.onDisconnect_=$l(),si(t.eventQueue_,X(),r)}function L$(t,e,n){let r;W(e._path)===".info"?r=n_(t.infoSyncTree_,e,n):r=n_(t.serverSyncTree_,e,n),FS(t.eventQueue_,e._path,r)}function o_(t,e,n){let r;W(e._path)===".info"?r=Cf(t.infoSyncTree_,e,n):r=Cf(t.serverSyncTree_,e,n),FS(t.eventQueue_,e._path,r)}function M$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(x$)}function US(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function zS(t,e,n){return IS(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Dp(t,e=t.transactionQueueTree_){if(e||Vu(t,e),hs(e)){const n=BS(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&F$(t,ea(e),n)}else PS(e)&&zu(e,n=>{Dp(t,n)})}function F$(t,e,n){const r=n.map(u=>u.currentWriteId),i=zS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];b(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=tt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{US(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Ii(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Vu(t,Op(t.transactionQueueTree_,e)),Dp(t,t.transactionQueueTree_),si(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Xo(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{pt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Lp(t,e)}},o)}function Lp(t,e){const n=VS(t,e),r=ea(n),i=BS(t,n);return $$(t,i,r),r}function $$(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=tt(n,l.path);let d=!1,c;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Ii(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=b$)d=!0,c="maxretry",i=i.concat(Ii(t.serverSyncTree_,l.currentWriteId,!0));else{const f=zS(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){DS("transaction failed: Data returned ",m,l.path);let v=He(m);typeof m=="object"&&m!=null&&In(m,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,p=jS(t),h=g$(v,f,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=A$(t),o.splice(o.indexOf(E),1),i=i.concat(n$(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Ii(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(Ii(t.serverSyncTree_,l.currentWriteId,!0))}si(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Vu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Xo(r[a]);Dp(t,t.transactionQueueTree_)}function VS(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&hs(r)===void 0;)r=Op(r,n),e=oe(e),n=W(e);return r}function BS(t,e){const n=[];return WS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function WS(t,e,n){const r=hs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);zu(e,i=>{WS(t,i,n)})}function Vu(t,e){const n=hs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,RS(e,n.length>0?n:void 0)}zu(e,r=>{Vu(t,r)})}function j$(t,e){const n=ea(VS(t,e)),r=Op(t.transactionQueueTree_,e);return _$(r,i=>{Hc(t,i)}),Hc(t,r),NS(r,i=>{Hc(t,i)}),n}function Hc(t,e){const n=hs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ii(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?RS(e,void 0):n.length=s+1,si(t.eventQueue_,ea(e),i);for(let o=0;o<r.length;o++)Xo(r[o])}}/**
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
 */function U$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function z$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const a_=function(t,e){const n=V$(t),r=n.namespace;n.domain==="firebase.com"&&Sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||e2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new GE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},V$=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=U$(t.substring(d,c)));const f=z$(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class HS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class GS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class B${constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Mp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return H(this._path)?null:tS(this._path)}get ref(){return new kn(this._repo,this._path)}get _queryIdentifier(){const e=Wv(this._queryParams),n=up(e);return n==="{}"?"default":n}get _queryObject(){return Wv(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Mp))return!1;const n=this._repo===e._repo,r=hp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+F2(this._path)}}class kn extends Mp{constructor(e,n){super(e,n,new vp,!1)}get parent(){const e=rS(this._path);return e===null?null:new kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ao{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),r=Gl(this.ref,e);return new Ao(this._node.getChild(n),r,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ao(i,Gl(this.ref,r),we)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function W$(t,e){return t=yt(t),t._checkNotDeleted("ref"),e!==void 0?Gl(t._root,e):t._root}function Gl(t,e){return t=yt(t),W(t._path)===null?C$("child","path",e,!1):LS("child","path",e,!1),new kn(t._repo,ke(t._path,e))}class Fp{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new HS("value",this,new Ao(e.snapshotNode,new kn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new GS(this,e,n):null}matches(e){return e instanceof Fp?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class $p{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new GS(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const r=Gl(new kn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new HS(e.type,this,new Ao(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof $p?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function H$(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{o_(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new B$(n,s||void 0),a=e==="value"?new Fp(o):new $p(e,o);return L$(t._repo,t,a),()=>o_(t._repo,t,a)}function G$(t,e,n,r){return H$(t,"value",e,n,r)}KF(kn);ZF(kn);/**
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
 */const K$="FIREBASE_DATABASE_EMULATOR_HOST",If={};let q$=!1;function Y$(t,e,n,r){t.repoInfo_=new GE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Q$(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=a_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[K$]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=a_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Fi(Fi.OWNER):new d2(t.name,t.options,e);T$("Invalid Firebase Database URL",o),H(o.path)||Sn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=J$(a,t,d,new c2(t.name,n));return new Z$(c,t)}function X$(t,e){const n=If[e];(!n||n[t.key]!==t)&&Sn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),M$(t),delete n[t.key]}function J$(t,e,n,r){let i=If[e.name];i||(i={},If[e.name]=i);let s=i[t.toURLString()];return s&&Sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new R$(t,q$,n,r),i[t.toURLString()]=s,s}class Z${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(P$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(X$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sn("Cannot call "+e+" on a deleted database.")}}function ej(t=Bw(),e){const n=qh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=fO("database");r&&tj(n,...r)}return n}function tj(t,e,n,r={}){t=yt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Sn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Fi(Fi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hO(r.mockUserToken,t.app.options.projectId);s=new Fi(o)}Y$(i,e,n,s)}/**
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
 */function nj(t){YM(cs),Qi(new jr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Q$(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),er(xv,bv,t),er(xv,bv,"esm2017")}gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nj();const rj="AIzaSyAoqGqWMUvKLto4YsepslEaEzXOdQzPdvs",ij={apiKey:rj,authDomain:"learnlangnguage.firebaseapp.com",projectId:"learnlangnguage",storageBucket:"learnlangnguage.appspot.com",messagingSenderId:"699143296274",appId:"1:699143296274:web:a8c67d2ac79c3853ec4fcb",databaseURL:"https://learnlangnguage-default-rtdb.europe-west1.firebasedatabase.app/"},sj=Vw(ij),ki=GL(sj),oj=ej(),l_=W$(oj,"/"),aj=({onClose:t,nameForm:e})=>{const n=e==="Registration",r=GM(n);return console.log("auth",ki.currentUser),I.jsxs(XL,{onClose:t,children:[I.jsx(JL,{children:e}),I.jsx(ZL,{children:r.subTitle}),I.jsx(WN,{initialValues:r.initial,validationSchema:r.TitleSchema,onSubmit:(i,{resetForm:s})=>{n?bD(ki,i.email,i.password).then(()=>ND(ki.currentUser,{displayName:i.displayName})).catch(o=>console.error(o)):RD(ki,i.email,i.password).catch(o=>{o.code,o.message}),s(),t()},children:({handleChange:i,values:s})=>I.jsxs(bw,{children:[n&&I.jsxs(I.Fragment,{children:[I.jsx(Mc,{placeholder:"Name",id:"displayName",name:"displayName",type:"text",onChange:i,value:s.displayName}),I.jsx(kc,{name:"displayName",component:"p"})]}),I.jsx("label",{htmlFor:"email"}),I.jsx(Mc,{placeholder:"Email",id:"email",name:"email",type:"email",onChange:i,value:s.email}),I.jsx(kc,{name:"email",component:"p"}),I.jsx("label",{htmlFor:"password"}),I.jsx(Mc,{placeholder:"Password",id:"password",name:"password",type:"password",onChange:i,value:s.password}),I.jsx(kc,{name:"password",component:"p"}),I.jsx(eM,{type:"submit",children:e})]})})]})},lj=()=>{const{auth:t}=y.useContext(KS),[e,n]=y.useState(!1),[r,i]=y.useState(""),[s,o]=y.useState("Registration");console.log("auth",t.currentUser),y.useEffect(()=>{t.currentUser?o("Log out"):o("Registration")},[t.currentUser]);const a=d=>{n(!0),i(d.target.innerText)},l=d=>{DD(t).then(()=>{console.log(),o("Registration")}).catch(c=>{console.error(c)})},u=()=>{n(!1)};return I.jsxs(I.Fragment,{children:[I.jsxs(nx,{children:[I.jsxs(rx,{children:[I.jsx(ix,{}),I.jsx(sx,{children:"LearnLingo"})]}),I.jsxs(ox,{children:[I.jsx(vg,{to:"/",children:"Home"}),I.jsx(vg,{to:"/teachers",children:"Teachers"})]}),I.jsx(ax,{children:t.currentUser?I.jsx(_g,{onClick:l,children:s}):I.jsxs(I.Fragment,{children:[I.jsx(lx,{onClick:a,children:"Log in"}),I.jsx(_g,{onClick:a,children:s})]})})]}),e&&I.jsx(aj,{onClose:u,nameForm:r})]})},u_=()=>(console.log("app",ki),I.jsxs(zk,{children:[I.jsx(lj,{}),I.jsxs(Vk,{children:[I.jsxs(Bk,{children:[I.jsxs(Wk,{children:["Unlock your potential with the best ",I.jsx("em",{children:"language"})," ","tutors"]}),I.jsx(Gk,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),I.jsx(Hk,{href:"#",children:"Get started"})]}),I.jsxs(Kk,{children:[I.jsx(Yk,{}),I.jsx(qk,{children:I.jsx("use",{href:`${Nh}#icon-apple`})})]})]}),I.jsx(tx,{})]})),uj=F.article`
  display: flex;
  gap: min(48px, calc(48 / 1440 * 100vw));
  width: 100%;
  margin: 0 auto 32px;
  padding: min(24px, calc(24 / 1440 * 100vw));
  border-radius: 24px;
  background: #fff;
  &:last-of-type {
    margin-bottom: 0;
  }
`,cj=F.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fbe9ba;
  background: #fff;
  object-fit: cover;
`,dj=F.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,fj=F.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`,hj=F.div`
  display: flex;
  align-items: flex-start;
`,pj=F.p`
  padding-bottom: 8px;
  color: #8a8a89;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
`,mj=F.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,gj=F.ul`
  display: flex;
  gap: 32px;
  margin-left: 149px;
`,Ta=F.li`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  span {
    color: #38cd3e;
  }
`,Gc=F.li`
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #8a8a89;
  span {
    color: initial;
  }
  &:first-of-type span {
    text-decoration-line: underline;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`,vj=F.div`
  display: flex;
  gap: 12px;
`,_j=F.p`
  color: #8a8a89;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
`,yj=F.p`
  display: inline-block;
  margin-left: 8px;
  font-size: calc(14rem / 16);
  font-weight: 500;
  line-height: 1.286;
`,wj=F.p`
  margin-top: 16px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
`,Ej=({item:t,image:e})=>I.jsxs("div",{children:[I.jsxs(vj,{children:[I.jsx("img",{src:e,alt:t.reviewer_name,width:"44"}),I.jsxs("div",{children:[I.jsx(_j,{children:t.reviewer_name}),I.jsx("svg",{width:16,height:16,children:I.jsx("use",{href:`${Nh}#icon-star`})}),I.jsx(yj,{children:t.reviewer_rating.toFixed(1)})]})]}),I.jsx(wj,{children:t.comment})]}),Sj="/learnlingvo/assets/noavatar-53a7dcec.svg",Cj=({el:t})=>I.jsxs(uj,{children:[I.jsx(cj,{children:I.jsx(fj,{src:t.avatar_url,alt:`${t.name} ${t.surname}`})}),I.jsxs(dj,{children:[I.jsxs(hj,{children:[I.jsxs("div",{children:[I.jsx(pj,{children:"Languages"}),I.jsx(mj,{children:`${t.name} ${t.surname}`})]}),I.jsxs(gj,{children:[I.jsx(Ta,{children:"Lessons online"}),I.jsxs(Ta,{children:["Lessons done: ",t.lessons_done]}),I.jsxs(Ta,{children:["Rating: ",t.rating]}),I.jsxs(Ta,{children:["Price / 1 hour:",I.jsxs("span",{children:[" ",t.price_per_hour,"$"]})]})]})]}),I.jsxs("ul",{children:[I.jsxs(Gc,{children:["Speaks: ",I.jsx("span",{children:t.languages.join(", ")})]}),I.jsxs(Gc,{children:["Lesson Info: ",I.jsx("span",{children:t.lesson_info})]}),I.jsxs(Gc,{children:["Conditions: ",I.jsx("span",{children:t.conditions.join(" ")})]})]}),I.jsx("button",{children:"Read more"}),I.jsx("p",{children:t.experience}),t.reviews.map(e=>I.jsx(Ej,{item:e,image:Sj},e.comment))]})]}),Tj=F.div`
  padding: 96px 128px;
  background: #f8f8f8;
`,Ij=()=>{const[t,e]=y.useState(null);return y.useEffect(()=>{G$(l_,n=>{const r=n.val();e(r)})},[l_]),I.jsx(Tj,{children:t&&t.map(n=>I.jsx(Cj,{el:n},`${n.name} ${n.surname}`))})};function kj(){return I.jsxs(yI,{children:[I.jsx(Fa,{exact:!0,path:"/",element:I.jsx(u_,{})}),";",I.jsx(Fa,{exact:!0,path:"/teachers",element:I.jsx(Ij,{})}),";",I.jsx(Fa,{exact:!0,path:"*",element:I.jsx(u_,{})})]})}const KS=y.createContext(null);qc.createRoot(document.getElementById("root")).render(I.jsx(y_.StrictMode,{children:I.jsx(KS.Provider,{value:{auth:ki},children:I.jsx(II,{basename:"/learnlingvo",children:I.jsx(kj,{})})})}))});export default xj();
