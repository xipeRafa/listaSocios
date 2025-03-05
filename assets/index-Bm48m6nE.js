(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function wk(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var uE={exports:{}},Sh={},cE={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=Symbol.for("react.element"),Ik=Symbol.for("react.portal"),Ek=Symbol.for("react.fragment"),Tk=Symbol.for("react.strict_mode"),Sk=Symbol.for("react.profiler"),Ak=Symbol.for("react.provider"),Rk=Symbol.for("react.context"),Pk=Symbol.for("react.forward_ref"),kk=Symbol.for("react.suspense"),Ck=Symbol.for("react.memo"),bk=Symbol.for("react.lazy"),Qy=Symbol.iterator;function Nk(n){return n===null||typeof n!="object"?null:(n=Qy&&n[Qy]||n["@@iterator"],typeof n=="function"?n:null)}var hE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dE=Object.assign,fE={};function Uo(n,e,t){this.props=n,this.context=e,this.refs=fE,this.updater=t||hE}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Uo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function pE(){}pE.prototype=Uo.prototype;function ym(n,e,t){this.props=n,this.context=e,this.refs=fE,this.updater=t||hE}var vm=ym.prototype=new pE;vm.constructor=ym;dE(vm,Uo.prototype);vm.isPureReactComponent=!0;var Yy=Array.isArray,mE=Object.prototype.hasOwnProperty,wm={current:null},gE={key:!0,ref:!0,__self:!0,__source:!0};function _E(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)mE.call(e,r)&&!gE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Kl,type:n,key:s,ref:o,props:i,_owner:wm.current}}function Dk(n,e){return{$$typeof:Kl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Im(n){return typeof n=="object"&&n!==null&&n.$$typeof===Kl}function xk(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Jy=/\/+/g;function Yd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?xk(""+n.key):e.toString(36)}function uc(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Kl:case Ik:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+Yd(o,0):r,Yy(i)?(t="",n!=null&&(t=n.replace(Jy,"$&/")+"/"),uc(i,e,t,"",function(c){return c})):i!=null&&(Im(i)&&(i=Dk(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jy,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yy(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+Yd(s,a);o+=uc(s,e,t,u,i)}else if(u=Nk(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+Yd(s,a++),o+=uc(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lu(n,e,t){if(n==null)return n;var r=[],i=0;return uc(n,r,"","",function(s){return e.call(t,s,i++)}),r}function Vk(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Vt={current:null},cc={transition:null},Ok={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:cc,ReactCurrentOwner:wm};function yE(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Lu,forEach:function(n,e,t){Lu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Lu(n,function(){e++}),e},toArray:function(n){return Lu(n,function(e){return e})||[]},only:function(n){if(!Im(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ne.Component=Uo;ne.Fragment=Ek;ne.Profiler=Sk;ne.PureComponent=ym;ne.StrictMode=Tk;ne.Suspense=kk;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ok;ne.act=yE;ne.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=dE({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wm.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)mE.call(e,u)&&!gE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Kl,type:n.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(n){return n={$$typeof:Rk,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Ak,_context:n},n.Consumer=n};ne.createElement=_E;ne.createFactory=function(n){var e=_E.bind(null,n);return e.type=n,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(n){return{$$typeof:Pk,render:n}};ne.isValidElement=Im;ne.lazy=function(n){return{$$typeof:bk,_payload:{_status:-1,_result:n},_init:Vk}};ne.memo=function(n,e){return{$$typeof:Ck,type:n,compare:e===void 0?null:e}};ne.startTransition=function(n){var e=cc.transition;cc.transition={};try{n()}finally{cc.transition=e}};ne.unstable_act=yE;ne.useCallback=function(n,e){return Vt.current.useCallback(n,e)};ne.useContext=function(n){return Vt.current.useContext(n)};ne.useDebugValue=function(){};ne.useDeferredValue=function(n){return Vt.current.useDeferredValue(n)};ne.useEffect=function(n,e){return Vt.current.useEffect(n,e)};ne.useId=function(){return Vt.current.useId()};ne.useImperativeHandle=function(n,e,t){return Vt.current.useImperativeHandle(n,e,t)};ne.useInsertionEffect=function(n,e){return Vt.current.useInsertionEffect(n,e)};ne.useLayoutEffect=function(n,e){return Vt.current.useLayoutEffect(n,e)};ne.useMemo=function(n,e){return Vt.current.useMemo(n,e)};ne.useReducer=function(n,e,t){return Vt.current.useReducer(n,e,t)};ne.useRef=function(n){return Vt.current.useRef(n)};ne.useState=function(n){return Vt.current.useState(n)};ne.useSyncExternalStore=function(n,e,t){return Vt.current.useSyncExternalStore(n,e,t)};ne.useTransition=function(){return Vt.current.useTransition()};ne.version="18.3.1";cE.exports=ne;var an=cE.exports;const Lk=wk(an);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mk=an,Fk=Symbol.for("react.element"),Uk=Symbol.for("react.fragment"),Bk=Object.prototype.hasOwnProperty,zk=Mk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jk={key:!0,ref:!0,__self:!0,__source:!0};function vE(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Bk.call(e,r)&&!jk.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Fk,type:n,key:s,ref:o,props:i,_owner:zk.current}}Sh.Fragment=Uk;Sh.jsx=vE;Sh.jsxs=vE;uE.exports=Sh;var ue=uE.exports,jf={},wE={exports:{}},tn={},IE={exports:{}},EE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(W,J){var ee=W.length;W.push(J);e:for(;0<ee;){var Pe=ee-1>>>1,fe=W[Pe];if(0<i(fe,J))W[Pe]=J,W[ee]=fe,ee=Pe;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var J=W[0],ee=W.pop();if(ee!==J){W[0]=ee;e:for(var Pe=0,fe=W.length,ze=fe>>>1;Pe<ze;){var Kn=2*(Pe+1)-1,Hn=W[Kn],Qn=Kn+1,Yn=W[Qn];if(0>i(Hn,ee))Qn<fe&&0>i(Yn,Hn)?(W[Pe]=Yn,W[Qn]=ee,Pe=Qn):(W[Pe]=Hn,W[Kn]=ee,Pe=Kn);else if(Qn<fe&&0>i(Yn,ee))W[Pe]=Yn,W[Qn]=ee,Pe=Qn;else break e}}return J}function i(W,J){var ee=W.sortIndex-J.sortIndex;return ee!==0?ee:W.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,y=!1,R=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(W){for(var J=t(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=W)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=t(c)}}function D(W){if(k=!1,E(W),!R)if(t(u)!==null)R=!0,na(U);else{var J=t(c);J!==null&&Gn(D,J.startTime-W)}}function U(W,J){R=!1,k&&(k=!1,T(_),_=-1),y=!0;var ee=m;try{for(E(J),f=t(u);f!==null&&(!(f.expirationTime>J)||W&&!P());){var Pe=f.callback;if(typeof Pe=="function"){f.callback=null,m=f.priorityLevel;var fe=Pe(f.expirationTime<=J);J=n.unstable_now(),typeof fe=="function"?f.callback=fe:f===t(u)&&r(u),E(J)}else r(u);f=t(u)}if(f!==null)var ze=!0;else{var Kn=t(c);Kn!==null&&Gn(D,Kn.startTime-J),ze=!1}return ze}finally{f=null,m=ee,y=!1}}var F=!1,w=null,_=-1,I=5,S=-1;function P(){return!(n.unstable_now()-S<I)}function b(){if(w!==null){var W=n.unstable_now();S=W;var J=!0;try{J=w(!0,W)}finally{J?A():(F=!1,w=null)}}else F=!1}var A;if(typeof v=="function")A=function(){v(b)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,Si=rn.port2;rn.port1.onmessage=b,A=function(){Si.postMessage(null)}}else A=function(){x(b,0)};function na(W){w=W,F||(F=!0,A())}function Gn(W,J){_=x(function(){W(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){R||y||(R=!0,na(U))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(W){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ee=m;m=J;try{return W()}finally{m=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,J){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ee=m;m=W;try{return J()}finally{m=ee}},n.unstable_scheduleCallback=function(W,J,ee){var Pe=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Pe+ee:Pe):ee=Pe,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ee+fe,W={id:d++,callback:J,priorityLevel:W,startTime:ee,expirationTime:fe,sortIndex:-1},ee>Pe?(W.sortIndex=ee,e(c,W),t(u)===null&&W===t(c)&&(k?(T(_),_=-1):k=!0,Gn(D,ee-Pe))):(W.sortIndex=fe,e(u,W),R||y||(R=!0,na(U))),W},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(W){var J=m;return function(){var ee=m;m=J;try{return W.apply(this,arguments)}finally{m=ee}}}})(EE);IE.exports=EE;var $k=IE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qk=an,Zt=$k;function B(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var TE=new Set,ll={};function ps(n,e){fo(n,e),fo(n+"Capture",e)}function fo(n,e){for(ll[n]=e,n=0;n<e.length;n++)TE.add(e[n])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,Wk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xy={},Zy={};function Gk(n){return $f.call(Zy,n)?!0:$f.call(Xy,n)?!1:Wk.test(n)?Zy[n]=!0:(Xy[n]=!0,!1)}function Kk(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Hk(n,e,t,r){if(e===null||typeof e>"u"||Kk(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ht[n]=new Ot(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ht[e]=new Ot(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ht[n]=new Ot(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ht[n]=new Ot(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ht[n]=new Ot(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ht[n]=new Ot(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ht[n]=new Ot(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ht[n]=new Ot(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ht[n]=new Ot(n,5,!1,n.toLowerCase(),null,!1,!1)});var Em=/[\-:]([a-z])/g;function Tm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Em,Tm);ht[e]=new Ot(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Em,Tm);ht[e]=new Ot(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Em,Tm);ht[e]=new Ot(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ht[n]=new Ot(n,1,!1,n.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ht[n]=new Ot(n,1,!1,n.toLowerCase(),null,!0,!0)});function Sm(n,e,t,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hk(e,t,i,r)&&(t=null),r||i===null?Gk(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var wr=qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mu=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),SE=Symbol.for("react.provider"),AE=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Gf=Symbol.for("react.suspense_list"),Pm=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),RE=Symbol.for("react.offscreen"),ev=Symbol.iterator;function ga(n){return n===null||typeof n!="object"?null:(n=ev&&n[ev]||n["@@iterator"],typeof n=="function"?n:null)}var Ne=Object.assign,Jd;function xa(n){if(Jd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Jd=e&&e[1]||""}return`
`+Jd+n}var Xd=!1;function Zd(n,e){if(!n||Xd)return"";Xd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{Xd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?xa(n):""}function Qk(n){switch(n.tag){case 5:return xa(n.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return n=Zd(n.type,!1),n;case 11:return n=Zd(n.type.render,!1),n;case 1:return n=Zd(n.type,!0),n;default:return""}}function Kf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case zs:return"Fragment";case Bs:return"Portal";case qf:return"Profiler";case Am:return"StrictMode";case Wf:return"Suspense";case Gf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case AE:return(n.displayName||"Context")+".Consumer";case SE:return(n._context.displayName||"Context")+".Provider";case Rm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pm:return e=n.displayName||null,e!==null?e:Kf(n.type)||"Memo";case Lr:e=n._payload,n=n._init;try{return Kf(n(e))}catch{}}return null}function Yk(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kf(e);case 8:return e===Am?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function PE(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jk(n){var e=PE(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Fu(n){n._valueTracker||(n._valueTracker=Jk(n))}function kE(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=PE(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function xc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Hf(n,e){var t=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function tv(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ni(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function CE(n,e){e=e.checked,e!=null&&Sm(n,"checked",e,!1)}function Qf(n,e){CE(n,e);var t=ni(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Yf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Yf(n,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function nv(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Yf(n,e,t){(e!=="number"||xc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Va=Array.isArray;function Zs(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+ni(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function Jf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rv(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(B(92));if(Va(t)){if(1<t.length)throw Error(B(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ni(t)}}function bE(n,e){var t=ni(e.value),r=ni(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function iv(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function NE(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?NE(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Uu,DE=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Uu=Uu||document.createElement("div"),Uu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ul(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xk=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(n){Xk.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),$a[e]=$a[n]})});function xE(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||$a.hasOwnProperty(n)&&$a[n]?(""+e).trim():e+"px"}function VE(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=xE(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var Zk=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(n,e){if(e){if(Zk[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function ep(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=null;function km(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var np=null,eo=null,to=null;function sv(n){if(n=Yl(n)){if(typeof np!="function")throw Error(B(280));var e=n.stateNode;e&&(e=Ch(e),np(n.stateNode,n.type,e))}}function OE(n){eo?to?to.push(n):to=[n]:eo=n}function LE(){if(eo){var n=eo,e=to;if(to=eo=null,sv(n),e)for(n=0;n<e.length;n++)sv(e[n])}}function ME(n,e){return n(e)}function FE(){}var ef=!1;function UE(n,e,t){if(ef)return n(e,t);ef=!0;try{return ME(n,e,t)}finally{ef=!1,(eo!==null||to!==null)&&(FE(),LE())}}function cl(n,e){var t=n.stateNode;if(t===null)return null;var r=Ch(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(B(231,e,typeof t));return t}var rp=!1;if(hr)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){rp=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{rp=!1}function eC(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var qa=!1,Vc=null,Oc=!1,ip=null,tC={onError:function(n){qa=!0,Vc=n}};function nC(n,e,t,r,i,s,o,a,u){qa=!1,Vc=null,eC.apply(tC,arguments)}function rC(n,e,t,r,i,s,o,a,u){if(nC.apply(this,arguments),qa){if(qa){var c=Vc;qa=!1,Vc=null}else throw Error(B(198));Oc||(Oc=!0,ip=c)}}function ms(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function BE(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ov(n){if(ms(n)!==n)throw Error(B(188))}function iC(n){var e=n.alternate;if(!e){if(e=ms(n),e===null)throw Error(B(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return ov(i),n;if(s===r)return ov(i),e;s=s.sibling}throw Error(B(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?n:e}function zE(n){return n=iC(n),n!==null?jE(n):null}function jE(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=jE(n);if(e!==null)return e;n=n.sibling}return null}var $E=Zt.unstable_scheduleCallback,av=Zt.unstable_cancelCallback,sC=Zt.unstable_shouldYield,oC=Zt.unstable_requestPaint,je=Zt.unstable_now,aC=Zt.unstable_getCurrentPriorityLevel,Cm=Zt.unstable_ImmediatePriority,qE=Zt.unstable_UserBlockingPriority,Lc=Zt.unstable_NormalPriority,lC=Zt.unstable_LowPriority,WE=Zt.unstable_IdlePriority,Ah=null,Mn=null;function uC(n){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(Ah,n,void 0,(n.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:dC,cC=Math.log,hC=Math.LN2;function dC(n){return n>>>=0,n===0?32:31-(cC(n)/hC|0)|0}var Bu=64,zu=4194304;function Oa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mc(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=Oa(a):(s&=o,s!==0&&(r=Oa(s)))}else o=t&~i,o!==0?r=Oa(o):s!==0&&(r=Oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-En(e),i=1<<t,r|=n[t],e&=~i;return r}function fC(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pC(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-En(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=fC(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function sp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function GE(){var n=Bu;return Bu<<=1,!(Bu&4194240)&&(Bu=64),n}function tf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Hl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-En(e),n[e]=t}function mC(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-En(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function bm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-En(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var he=0;function KE(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var HE,Nm,QE,YE,JE,op=!1,ju=[],Gr=null,Kr=null,Hr=null,hl=new Map,dl=new Map,Fr=[],gC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lv(n,e){switch(n){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(e.pointerId)}}function ya(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yl(e),e!==null&&Nm(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function _C(n,e,t,r,i){switch(e){case"focusin":return Gr=ya(Gr,n,e,t,r,i),!0;case"dragenter":return Kr=ya(Kr,n,e,t,r,i),!0;case"mouseover":return Hr=ya(Hr,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return hl.set(s,ya(hl.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,dl.set(s,ya(dl.get(s)||null,n,e,t,r,i)),!0}return!1}function XE(n){var e=Ui(n.target);if(e!==null){var t=ms(e);if(t!==null){if(e=t.tag,e===13){if(e=BE(t),e!==null){n.blockedOn=e,JE(n.priority,function(){QE(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ap(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);tp=r,t.target.dispatchEvent(r),tp=null}else return e=Yl(t),e!==null&&Nm(e),n.blockedOn=t,!1;e.shift()}return!0}function uv(n,e,t){hc(n)&&t.delete(e)}function yC(){op=!1,Gr!==null&&hc(Gr)&&(Gr=null),Kr!==null&&hc(Kr)&&(Kr=null),Hr!==null&&hc(Hr)&&(Hr=null),hl.forEach(uv),dl.forEach(uv)}function va(n,e){n.blockedOn===e&&(n.blockedOn=null,op||(op=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,yC)))}function fl(n){function e(i){return va(i,n)}if(0<ju.length){va(ju[0],n);for(var t=1;t<ju.length;t++){var r=ju[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Gr!==null&&va(Gr,n),Kr!==null&&va(Kr,n),Hr!==null&&va(Hr,n),hl.forEach(e),dl.forEach(e),t=0;t<Fr.length;t++)r=Fr[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Fr.length&&(t=Fr[0],t.blockedOn===null);)XE(t),t.blockedOn===null&&Fr.shift()}var no=wr.ReactCurrentBatchConfig,Fc=!0;function vC(n,e,t,r){var i=he,s=no.transition;no.transition=null;try{he=1,Dm(n,e,t,r)}finally{he=i,no.transition=s}}function wC(n,e,t,r){var i=he,s=no.transition;no.transition=null;try{he=4,Dm(n,e,t,r)}finally{he=i,no.transition=s}}function Dm(n,e,t,r){if(Fc){var i=ap(n,e,t,r);if(i===null)df(n,e,r,Uc,t),lv(n,r);else if(_C(i,n,e,t,r))r.stopPropagation();else if(lv(n,r),e&4&&-1<gC.indexOf(n)){for(;i!==null;){var s=Yl(i);if(s!==null&&HE(s),s=ap(n,e,t,r),s===null&&df(n,e,r,Uc,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else df(n,e,r,null,t)}}var Uc=null;function ap(n,e,t,r){if(Uc=null,n=km(r),n=Ui(n),n!==null)if(e=ms(n),e===null)n=null;else if(t=e.tag,t===13){if(n=BE(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Uc=n,null}function ZE(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aC()){case Cm:return 1;case qE:return 4;case Lc:case lC:return 16;case WE:return 536870912;default:return 16}default:return 16}}var jr=null,xm=null,dc=null;function eT(){if(dc)return dc;var n,e=xm,t=e.length,r,i="value"in jr?jr.value:jr.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return dc=i.slice(n,1<r?1-r:void 0)}function fc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $u(){return!0}function cv(){return!1}function nn(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$u:cv,this.isPropagationStopped=cv,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vm=nn(Bo),Ql=Ne({},Bo,{view:0,detail:0}),IC=nn(Ql),nf,rf,wa,Rh=Ne({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Om,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(nf=n.screenX-wa.screenX,rf=n.screenY-wa.screenY):rf=nf=0,wa=n),nf)},movementY:function(n){return"movementY"in n?n.movementY:rf}}),hv=nn(Rh),EC=Ne({},Rh,{dataTransfer:0}),TC=nn(EC),SC=Ne({},Ql,{relatedTarget:0}),sf=nn(SC),AC=Ne({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),RC=nn(AC),PC=Ne({},Bo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kC=nn(PC),CC=Ne({},Bo,{data:0}),dv=nn(CC),bC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xC(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=DC[n])?!!e[n]:!1}function Om(){return xC}var VC=Ne({},Ql,{key:function(n){if(n.key){var e=bC[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=fc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?NC[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Om,charCode:function(n){return n.type==="keypress"?fc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),OC=nn(VC),LC=Ne({},Rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fv=nn(LC),MC=Ne({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Om}),FC=nn(MC),UC=Ne({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),BC=nn(UC),zC=Ne({},Rh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),jC=nn(zC),$C=[9,13,27,32],Lm=hr&&"CompositionEvent"in window,Wa=null;hr&&"documentMode"in document&&(Wa=document.documentMode);var qC=hr&&"TextEvent"in window&&!Wa,tT=hr&&(!Lm||Wa&&8<Wa&&11>=Wa),pv=" ",mv=!1;function nT(n,e){switch(n){case"keyup":return $C.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rT(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var js=!1;function WC(n,e){switch(n){case"compositionend":return rT(e);case"keypress":return e.which!==32?null:(mv=!0,pv);case"textInput":return n=e.data,n===pv&&mv?null:n;default:return null}}function GC(n,e){if(js)return n==="compositionend"||!Lm&&nT(n,e)?(n=eT(),dc=xm=jr=null,js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tT&&e.locale!=="ko"?null:e.data;default:return null}}var KC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!KC[n.type]:e==="textarea"}function iT(n,e,t,r){OE(r),e=Bc(e,"onChange"),0<e.length&&(t=new Vm("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Ga=null,pl=null;function HC(n){mT(n,0)}function Ph(n){var e=Ws(n);if(kE(e))return n}function QC(n,e){if(n==="change")return e}var sT=!1;if(hr){var of;if(hr){var af="oninput"in document;if(!af){var _v=document.createElement("div");_v.setAttribute("oninput","return;"),af=typeof _v.oninput=="function"}of=af}else of=!1;sT=of&&(!document.documentMode||9<document.documentMode)}function yv(){Ga&&(Ga.detachEvent("onpropertychange",oT),pl=Ga=null)}function oT(n){if(n.propertyName==="value"&&Ph(pl)){var e=[];iT(e,pl,n,km(n)),UE(HC,e)}}function YC(n,e,t){n==="focusin"?(yv(),Ga=e,pl=t,Ga.attachEvent("onpropertychange",oT)):n==="focusout"&&yv()}function JC(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ph(pl)}function XC(n,e){if(n==="click")return Ph(e)}function ZC(n,e){if(n==="input"||n==="change")return Ph(e)}function eb(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Sn=typeof Object.is=="function"?Object.is:eb;function ml(n,e){if(Sn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!$f.call(e,i)||!Sn(n[i],e[i]))return!1}return!0}function vv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wv(n,e){var t=vv(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=vv(t)}}function aT(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?aT(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function lT(){for(var n=window,e=xc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=xc(n.document)}return e}function Mm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function tb(n){var e=lT(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&aT(t.ownerDocument.documentElement,t)){if(r!==null&&Mm(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=wv(t,s);var o=wv(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nb=hr&&"documentMode"in document&&11>=document.documentMode,$s=null,lp=null,Ka=null,up=!1;function Iv(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;up||$s==null||$s!==xc(r)||(r=$s,"selectionStart"in r&&Mm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ka&&ml(Ka,r)||(Ka=r,r=Bc(lp,"onSelect"),0<r.length&&(e=new Vm("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=$s)))}function qu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var qs={animationend:qu("Animation","AnimationEnd"),animationiteration:qu("Animation","AnimationIteration"),animationstart:qu("Animation","AnimationStart"),transitionend:qu("Transition","TransitionEnd")},lf={},uT={};hr&&(uT=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function kh(n){if(lf[n])return lf[n];if(!qs[n])return n;var e=qs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in uT)return lf[n]=e[t];return n}var cT=kh("animationend"),hT=kh("animationiteration"),dT=kh("animationstart"),fT=kh("transitionend"),pT=new Map,Ev="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(n,e){pT.set(n,e),ps(e,[n])}for(var uf=0;uf<Ev.length;uf++){var cf=Ev[uf],rb=cf.toLowerCase(),ib=cf[0].toUpperCase()+cf.slice(1);mi(rb,"on"+ib)}mi(cT,"onAnimationEnd");mi(hT,"onAnimationIteration");mi(dT,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(fT,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sb=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Tv(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,rC(r,e,void 0,n),n.currentTarget=null}function mT(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Tv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Tv(i,a,c),s=u}}}if(Oc)throw n=ip,Oc=!1,ip=null,n}function ye(n,e){var t=e[pp];t===void 0&&(t=e[pp]=new Set);var r=n+"__bubble";t.has(r)||(gT(e,n,2,!1),t.add(r))}function hf(n,e,t){var r=0;e&&(r|=4),gT(t,n,r,e)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function gl(n){if(!n[Wu]){n[Wu]=!0,TE.forEach(function(t){t!=="selectionchange"&&(sb.has(t)||hf(t,!1,n),hf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Wu]||(e[Wu]=!0,hf("selectionchange",!1,e))}}function gT(n,e,t,r){switch(ZE(e)){case 1:var i=vC;break;case 4:i=wC;break;default:i=Dm}t=i.bind(null,e,t,n),i=void 0,!rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function df(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ui(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}UE(function(){var c=s,d=km(t),f=[];e:{var m=pT.get(n);if(m!==void 0){var y=Vm,R=n;switch(n){case"keypress":if(fc(t)===0)break e;case"keydown":case"keyup":y=OC;break;case"focusin":R="focus",y=sf;break;case"focusout":R="blur",y=sf;break;case"beforeblur":case"afterblur":y=sf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=hv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=TC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=FC;break;case cT:case hT:case dT:y=RC;break;case fT:y=BC;break;case"scroll":y=IC;break;case"wheel":y=jC;break;case"copy":case"cut":case"paste":y=kC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=fv}var k=(e&4)!==0,x=!k&&n==="scroll",T=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,E;v!==null;){E=v;var D=E.stateNode;if(E.tag===5&&D!==null&&(E=D,T!==null&&(D=cl(v,T),D!=null&&k.push(_l(v,D,E)))),x)break;v=v.return}0<k.length&&(m=new y(m,R,null,t,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",m&&t!==tp&&(R=t.relatedTarget||t.fromElement)&&(Ui(R)||R[dr]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(R=t.relatedTarget||t.toElement,y=c,R=R?Ui(R):null,R!==null&&(x=ms(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(y=null,R=c),y!==R)){if(k=hv,D="onMouseLeave",T="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(k=fv,D="onPointerLeave",T="onPointerEnter",v="pointer"),x=y==null?m:Ws(y),E=R==null?m:Ws(R),m=new k(D,v+"leave",y,t,d),m.target=x,m.relatedTarget=E,D=null,Ui(d)===c&&(k=new k(T,v+"enter",R,t,d),k.target=E,k.relatedTarget=x,D=k),x=D,y&&R)t:{for(k=y,T=R,v=0,E=k;E;E=ks(E))v++;for(E=0,D=T;D;D=ks(D))E++;for(;0<v-E;)k=ks(k),v--;for(;0<E-v;)T=ks(T),E--;for(;v--;){if(k===T||T!==null&&k===T.alternate)break t;k=ks(k),T=ks(T)}k=null}else k=null;y!==null&&Sv(f,m,y,k,!1),R!==null&&x!==null&&Sv(f,x,R,k,!0)}}e:{if(m=c?Ws(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var U=QC;else if(gv(m))if(sT)U=ZC;else{U=JC;var F=YC}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=XC);if(U&&(U=U(n,c))){iT(f,U,t,d);break e}F&&F(n,m,c),n==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Yf(m,"number",m.value)}switch(F=c?Ws(c):window,n){case"focusin":(gv(F)||F.contentEditable==="true")&&($s=F,lp=c,Ka=null);break;case"focusout":Ka=lp=$s=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,Iv(f,t,d);break;case"selectionchange":if(nb)break;case"keydown":case"keyup":Iv(f,t,d)}var w;if(Lm)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else js?nT(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(tT&&t.locale!=="ko"&&(js||_!=="onCompositionStart"?_==="onCompositionEnd"&&js&&(w=eT()):(jr=d,xm="value"in jr?jr.value:jr.textContent,js=!0)),F=Bc(c,_),0<F.length&&(_=new dv(_,n,null,t,d),f.push({event:_,listeners:F}),w?_.data=w:(w=rT(t),w!==null&&(_.data=w)))),(w=qC?WC(n,t):GC(n,t))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(d=new dv("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=w))}mT(f,e)})}function _l(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Bc(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=cl(n,t),s!=null&&r.unshift(_l(n,s,i)),s=cl(n,e),s!=null&&r.push(_l(n,s,i))),n=n.return}return r}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sv(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=cl(t,s),u!=null&&o.unshift(_l(t,u,a))):i||(u=cl(t,s),u!=null&&o.push(_l(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var ob=/\r\n?/g,ab=/\u0000|\uFFFD/g;function Av(n){return(typeof n=="string"?n:""+n).replace(ob,`
`).replace(ab,"")}function Gu(n,e,t){if(e=Av(e),Av(n)!==e&&t)throw Error(B(425))}function zc(){}var cp=null,hp=null;function dp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fp=typeof setTimeout=="function"?setTimeout:void 0,lb=typeof clearTimeout=="function"?clearTimeout:void 0,Rv=typeof Promise=="function"?Promise:void 0,ub=typeof queueMicrotask=="function"?queueMicrotask:typeof Rv<"u"?function(n){return Rv.resolve(null).then(n).catch(cb)}:fp;function cb(n){setTimeout(function(){throw n})}function ff(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),fl(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);fl(e)}function Qr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Pv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var zo=Math.random().toString(36).slice(2),kn="__reactFiber$"+zo,yl="__reactProps$"+zo,dr="__reactContainer$"+zo,pp="__reactEvents$"+zo,hb="__reactListeners$"+zo,db="__reactHandles$"+zo;function Ui(n){var e=n[kn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[dr]||t[kn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Pv(n);n!==null;){if(t=n[kn])return t;n=Pv(n)}return e}n=t,t=n.parentNode}return null}function Yl(n){return n=n[kn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(B(33))}function Ch(n){return n[yl]||null}var mp=[],Gs=-1;function gi(n){return{current:n}}function we(n){0>Gs||(n.current=mp[Gs],mp[Gs]=null,Gs--)}function me(n,e){Gs++,mp[Gs]=n.current,n.current=e}var ri={},It=gi(ri),$t=gi(!1),Ji=ri;function po(n,e){var t=n.type.contextTypes;if(!t)return ri;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function qt(n){return n=n.childContextTypes,n!=null}function jc(){we($t),we(It)}function kv(n,e,t){if(It.current!==ri)throw Error(B(168));me(It,e),me($t,t)}function _T(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,Yk(n)||"Unknown",i));return Ne({},t,r)}function $c(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ri,Ji=It.current,me(It,n),me($t,$t.current),!0}function Cv(n,e,t){var r=n.stateNode;if(!r)throw Error(B(169));t?(n=_T(n,e,Ji),r.__reactInternalMemoizedMergedChildContext=n,we($t),we(It),me(It,n)):we($t),me($t,t)}var er=null,bh=!1,pf=!1;function yT(n){er===null?er=[n]:er.push(n)}function fb(n){bh=!0,yT(n)}function _i(){if(!pf&&er!==null){pf=!0;var n=0,e=he;try{var t=er;for(he=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}er=null,bh=!1}catch(i){throw er!==null&&(er=er.slice(n+1)),$E(Cm,_i),i}finally{he=e,pf=!1}}return null}var Ks=[],Hs=0,qc=null,Wc=0,sn=[],on=0,Xi=null,nr=1,rr="";function bi(n,e){Ks[Hs++]=Wc,Ks[Hs++]=qc,qc=n,Wc=e}function vT(n,e,t){sn[on++]=nr,sn[on++]=rr,sn[on++]=Xi,Xi=n;var r=nr;n=rr;var i=32-En(r)-1;r&=~(1<<i),t+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nr=1<<32-En(e)+i|t<<i|r,rr=s+n}else nr=1<<s|t<<i|r,rr=n}function Fm(n){n.return!==null&&(bi(n,1),vT(n,1,0))}function Um(n){for(;n===qc;)qc=Ks[--Hs],Ks[Hs]=null,Wc=Ks[--Hs],Ks[Hs]=null;for(;n===Xi;)Xi=sn[--on],sn[on]=null,rr=sn[--on],sn[on]=null,nr=sn[--on],sn[on]=null}var Jt=null,Qt=null,Te=!1,In=null;function wT(n,e){var t=ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function bv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Jt=n,Qt=Qr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Jt=n,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Xi!==null?{id:nr,overflow:rr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Jt=n,Qt=null,!0):!1;default:return!1}}function gp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _p(n){if(Te){var e=Qt;if(e){var t=e;if(!bv(n,e)){if(gp(n))throw Error(B(418));e=Qr(t.nextSibling);var r=Jt;e&&bv(n,e)?wT(r,t):(n.flags=n.flags&-4097|2,Te=!1,Jt=n)}}else{if(gp(n))throw Error(B(418));n.flags=n.flags&-4097|2,Te=!1,Jt=n}}}function Nv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jt=n}function Ku(n){if(n!==Jt)return!1;if(!Te)return Nv(n),Te=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!dp(n.type,n.memoizedProps)),e&&(e=Qt)){if(gp(n))throw IT(),Error(B(418));for(;e;)wT(n,e),e=Qr(e.nextSibling)}if(Nv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(B(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Qt=Qr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Qt=null}}else Qt=Jt?Qr(n.stateNode.nextSibling):null;return!0}function IT(){for(var n=Qt;n;)n=Qr(n.nextSibling)}function mo(){Qt=Jt=null,Te=!1}function Bm(n){In===null?In=[n]:In.push(n)}var pb=wr.ReactCurrentBatchConfig;function Ia(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,n))}return n}function Hu(n,e){throw n=Object.prototype.toString.call(e),Error(B(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Dv(n){var e=n._init;return e(n._payload)}function ET(n){function e(T,v){if(n){var E=T.deletions;E===null?(T.deletions=[v],T.flags|=16):E.push(v)}}function t(T,v){if(!n)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=Zr(T,v),T.index=0,T.sibling=null,T}function s(T,v,E){return T.index=E,n?(E=T.alternate,E!==null?(E=E.index,E<v?(T.flags|=2,v):E):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return n&&T.alternate===null&&(T.flags|=2),T}function a(T,v,E,D){return v===null||v.tag!==6?(v=If(E,T.mode,D),v.return=T,v):(v=i(v,E),v.return=T,v)}function u(T,v,E,D){var U=E.type;return U===zs?d(T,v,E.props.children,D,E.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Lr&&Dv(U)===v.type)?(D=i(v,E.props),D.ref=Ia(T,v,E),D.return=T,D):(D=wc(E.type,E.key,E.props,null,T.mode,D),D.ref=Ia(T,v,E),D.return=T,D)}function c(T,v,E,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Ef(E,T.mode,D),v.return=T,v):(v=i(v,E.children||[]),v.return=T,v)}function d(T,v,E,D,U){return v===null||v.tag!==7?(v=Gi(E,T.mode,D,U),v.return=T,v):(v=i(v,E),v.return=T,v)}function f(T,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=If(""+v,T.mode,E),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mu:return E=wc(v.type,v.key,v.props,null,T.mode,E),E.ref=Ia(T,null,v),E.return=T,E;case Bs:return v=Ef(v,T.mode,E),v.return=T,v;case Lr:var D=v._init;return f(T,D(v._payload),E)}if(Va(v)||ga(v))return v=Gi(v,T.mode,E,null),v.return=T,v;Hu(T,v)}return null}function m(T,v,E,D){var U=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return U!==null?null:a(T,v,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Mu:return E.key===U?u(T,v,E,D):null;case Bs:return E.key===U?c(T,v,E,D):null;case Lr:return U=E._init,m(T,v,U(E._payload),D)}if(Va(E)||ga(E))return U!==null?null:d(T,v,E,D,null);Hu(T,E)}return null}function y(T,v,E,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(E)||null,a(v,T,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Mu:return T=T.get(D.key===null?E:D.key)||null,u(v,T,D,U);case Bs:return T=T.get(D.key===null?E:D.key)||null,c(v,T,D,U);case Lr:var F=D._init;return y(T,v,E,F(D._payload),U)}if(Va(D)||ga(D))return T=T.get(E)||null,d(v,T,D,U,null);Hu(v,D)}return null}function R(T,v,E,D){for(var U=null,F=null,w=v,_=v=0,I=null;w!==null&&_<E.length;_++){w.index>_?(I=w,w=null):I=w.sibling;var S=m(T,w,E[_],D);if(S===null){w===null&&(w=I);break}n&&w&&S.alternate===null&&e(T,w),v=s(S,v,_),F===null?U=S:F.sibling=S,F=S,w=I}if(_===E.length)return t(T,w),Te&&bi(T,_),U;if(w===null){for(;_<E.length;_++)w=f(T,E[_],D),w!==null&&(v=s(w,v,_),F===null?U=w:F.sibling=w,F=w);return Te&&bi(T,_),U}for(w=r(T,w);_<E.length;_++)I=y(w,T,_,E[_],D),I!==null&&(n&&I.alternate!==null&&w.delete(I.key===null?_:I.key),v=s(I,v,_),F===null?U=I:F.sibling=I,F=I);return n&&w.forEach(function(P){return e(T,P)}),Te&&bi(T,_),U}function k(T,v,E,D){var U=ga(E);if(typeof U!="function")throw Error(B(150));if(E=U.call(E),E==null)throw Error(B(151));for(var F=U=null,w=v,_=v=0,I=null,S=E.next();w!==null&&!S.done;_++,S=E.next()){w.index>_?(I=w,w=null):I=w.sibling;var P=m(T,w,S.value,D);if(P===null){w===null&&(w=I);break}n&&w&&P.alternate===null&&e(T,w),v=s(P,v,_),F===null?U=P:F.sibling=P,F=P,w=I}if(S.done)return t(T,w),Te&&bi(T,_),U;if(w===null){for(;!S.done;_++,S=E.next())S=f(T,S.value,D),S!==null&&(v=s(S,v,_),F===null?U=S:F.sibling=S,F=S);return Te&&bi(T,_),U}for(w=r(T,w);!S.done;_++,S=E.next())S=y(w,T,_,S.value,D),S!==null&&(n&&S.alternate!==null&&w.delete(S.key===null?_:S.key),v=s(S,v,_),F===null?U=S:F.sibling=S,F=S);return n&&w.forEach(function(b){return e(T,b)}),Te&&bi(T,_),U}function x(T,v,E,D){if(typeof E=="object"&&E!==null&&E.type===zs&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Mu:e:{for(var U=E.key,F=v;F!==null;){if(F.key===U){if(U=E.type,U===zs){if(F.tag===7){t(T,F.sibling),v=i(F,E.props.children),v.return=T,T=v;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Lr&&Dv(U)===F.type){t(T,F.sibling),v=i(F,E.props),v.ref=Ia(T,F,E),v.return=T,T=v;break e}t(T,F);break}else e(T,F);F=F.sibling}E.type===zs?(v=Gi(E.props.children,T.mode,D,E.key),v.return=T,T=v):(D=wc(E.type,E.key,E.props,null,T.mode,D),D.ref=Ia(T,v,E),D.return=T,T=D)}return o(T);case Bs:e:{for(F=E.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){t(T,v.sibling),v=i(v,E.children||[]),v.return=T,T=v;break e}else{t(T,v);break}else e(T,v);v=v.sibling}v=Ef(E,T.mode,D),v.return=T,T=v}return o(T);case Lr:return F=E._init,x(T,v,F(E._payload),D)}if(Va(E))return R(T,v,E,D);if(ga(E))return k(T,v,E,D);Hu(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(t(T,v.sibling),v=i(v,E),v.return=T,T=v):(t(T,v),v=If(E,T.mode,D),v.return=T,T=v),o(T)):t(T,v)}return x}var go=ET(!0),TT=ET(!1),Gc=gi(null),Kc=null,Qs=null,zm=null;function jm(){zm=Qs=Kc=null}function $m(n){var e=Gc.current;we(Gc),n._currentValue=e}function yp(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function ro(n,e){Kc=n,zm=Qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Ut=!0),n.firstContext=null)}function fn(n){var e=n._currentValue;if(zm!==n)if(n={context:n,memoizedValue:e,next:null},Qs===null){if(Kc===null)throw Error(B(308));Qs=n,Kc.dependencies={lanes:0,firstContext:n}}else Qs=Qs.next=n;return e}var Bi=null;function qm(n){Bi===null?Bi=[n]:Bi.push(n)}function ST(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,qm(e)):(t.next=i.next,i.next=t),e.interleaved=t,fr(n,r)}function fr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Mr=!1;function Wm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function AT(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function lr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Yr(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fr(n,t)}return i=r.interleaved,i===null?(e.next=e,qm(r)):(e.next=i.next,i.next=e),r.interleaved=e,fr(n,t)}function pc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,bm(n,t)}}function xv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Hc(n,e,t,r){var i=n.updateQueue;Mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=n,k=a;switch(m=e,y=t,k.tag){case 1:if(R=k.payload,typeof R=="function"){f=R.call(y,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,m=typeof R=="function"?R.call(y,f,m):R,m==null)break e;f=Ne({},f,m);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,n.lanes=o,n.memoizedState=f}}function Vv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Jl={},Fn=gi(Jl),vl=gi(Jl),wl=gi(Jl);function zi(n){if(n===Jl)throw Error(B(174));return n}function Gm(n,e){switch(me(wl,e),me(vl,n),me(Fn,Jl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Xf(e,n)}we(Fn),me(Fn,e)}function _o(){we(Fn),we(vl),we(wl)}function RT(n){zi(wl.current);var e=zi(Fn.current),t=Xf(e,n.type);e!==t&&(me(vl,n),me(Fn,t))}function Km(n){vl.current===n&&(we(Fn),we(vl))}var ke=gi(0);function Qc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mf=[];function Hm(){for(var n=0;n<mf.length;n++)mf[n]._workInProgressVersionPrimary=null;mf.length=0}var mc=wr.ReactCurrentDispatcher,gf=wr.ReactCurrentBatchConfig,Zi=0,Ce=null,Qe=null,et=null,Yc=!1,Ha=!1,Il=0,mb=0;function mt(){throw Error(B(321))}function Qm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Sn(n[t],e[t]))return!1;return!0}function Ym(n,e,t,r,i,s){if(Zi=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mc.current=n===null||n.memoizedState===null?vb:wb,n=t(r,i),Ha){s=0;do{if(Ha=!1,Il=0,25<=s)throw Error(B(301));s+=1,et=Qe=null,e.updateQueue=null,mc.current=Ib,n=t(r,i)}while(Ha)}if(mc.current=Jc,e=Qe!==null&&Qe.next!==null,Zi=0,et=Qe=Ce=null,Yc=!1,e)throw Error(B(300));return n}function Jm(){var n=Il!==0;return Il=0,n}function Pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ce.memoizedState=et=n:et=et.next=n,et}function pn(){if(Qe===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=Qe.next;var e=et===null?Ce.memoizedState:et.next;if(e!==null)et=e,Qe=n;else{if(n===null)throw Error(B(310));Qe=n,n={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Ce.memoizedState=et=n:et=et.next=n}return et}function El(n,e){return typeof e=="function"?e(n):e}function _f(n){var e=pn(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=Qe,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Zi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ce.lanes|=d,es|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Sn(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,Ce.lanes|=s,es|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function yf(n){var e=pn(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);Sn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function PT(){}function kT(n,e){var t=Ce,r=pn(),i=e(),s=!Sn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,Xm(NT.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(t.flags|=2048,Tl(9,bT.bind(null,t,r,i,e),void 0,null),nt===null)throw Error(B(349));Zi&30||CT(t,e,i)}return i}function CT(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function bT(n,e,t,r){e.value=t,e.getSnapshot=r,DT(e)&&xT(n)}function NT(n,e,t){return t(function(){DT(e)&&xT(n)})}function DT(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Sn(n,t)}catch{return!0}}function xT(n){var e=fr(n,1);e!==null&&Tn(e,n,1,-1)}function Ov(n){var e=Pn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:El,lastRenderedState:n},e.queue=n,n=n.dispatch=yb.bind(null,Ce,n),[e.memoizedState,n]}function Tl(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function VT(){return pn().memoizedState}function gc(n,e,t,r){var i=Pn();Ce.flags|=n,i.memoizedState=Tl(1|e,t,void 0,r===void 0?null:r)}function Nh(n,e,t,r){var i=pn();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&Qm(r,o.deps)){i.memoizedState=Tl(e,t,s,r);return}}Ce.flags|=n,i.memoizedState=Tl(1|e,t,s,r)}function Lv(n,e){return gc(8390656,8,n,e)}function Xm(n,e){return Nh(2048,8,n,e)}function OT(n,e){return Nh(4,2,n,e)}function LT(n,e){return Nh(4,4,n,e)}function MT(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function FT(n,e,t){return t=t!=null?t.concat([n]):null,Nh(4,4,MT.bind(null,e,n),t)}function Zm(){}function UT(n,e){var t=pn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Qm(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function BT(n,e){var t=pn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Qm(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function zT(n,e,t){return Zi&21?(Sn(t,e)||(t=GE(),Ce.lanes|=t,es|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Ut=!0),n.memoizedState=t)}function gb(n,e){var t=he;he=t!==0&&4>t?t:4,n(!0);var r=gf.transition;gf.transition={};try{n(!1),e()}finally{he=t,gf.transition=r}}function jT(){return pn().memoizedState}function _b(n,e,t){var r=Xr(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},$T(n))qT(e,t);else if(t=ST(n,e,t,r),t!==null){var i=bt();Tn(t,n,r,i),WT(t,e,r)}}function yb(n,e,t){var r=Xr(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if($T(n))qT(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,o)){var u=e.interleaved;u===null?(i.next=i,qm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=ST(n,e,i,r),t!==null&&(i=bt(),Tn(t,n,r,i),WT(t,e,r))}}function $T(n){var e=n.alternate;return n===Ce||e!==null&&e===Ce}function qT(n,e){Ha=Yc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function WT(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,bm(n,t)}}var Jc={readContext:fn,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},vb={readContext:fn,useCallback:function(n,e){return Pn().memoizedState=[n,e===void 0?null:e],n},useContext:fn,useEffect:Lv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,gc(4194308,4,MT.bind(null,e,n),t)},useLayoutEffect:function(n,e){return gc(4194308,4,n,e)},useInsertionEffect:function(n,e){return gc(4,2,n,e)},useMemo:function(n,e){var t=Pn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Pn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=_b.bind(null,Ce,n),[r.memoizedState,n]},useRef:function(n){var e=Pn();return n={current:n},e.memoizedState=n},useState:Ov,useDebugValue:Zm,useDeferredValue:function(n){return Pn().memoizedState=n},useTransition:function(){var n=Ov(!1),e=n[0];return n=gb.bind(null,n[1]),Pn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Ce,i=Pn();if(Te){if(t===void 0)throw Error(B(407));t=t()}else{if(t=e(),nt===null)throw Error(B(349));Zi&30||CT(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,Lv(NT.bind(null,r,s,n),[n]),r.flags|=2048,Tl(9,bT.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=Pn(),e=nt.identifierPrefix;if(Te){var t=rr,r=nr;t=(r&~(1<<32-En(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Il++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=mb++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},wb={readContext:fn,useCallback:UT,useContext:fn,useEffect:Xm,useImperativeHandle:FT,useInsertionEffect:OT,useLayoutEffect:LT,useMemo:BT,useReducer:_f,useRef:VT,useState:function(){return _f(El)},useDebugValue:Zm,useDeferredValue:function(n){var e=pn();return zT(e,Qe.memoizedState,n)},useTransition:function(){var n=_f(El)[0],e=pn().memoizedState;return[n,e]},useMutableSource:PT,useSyncExternalStore:kT,useId:jT,unstable_isNewReconciler:!1},Ib={readContext:fn,useCallback:UT,useContext:fn,useEffect:Xm,useImperativeHandle:FT,useInsertionEffect:OT,useLayoutEffect:LT,useMemo:BT,useReducer:yf,useRef:VT,useState:function(){return yf(El)},useDebugValue:Zm,useDeferredValue:function(n){var e=pn();return Qe===null?e.memoizedState=n:zT(e,Qe.memoizedState,n)},useTransition:function(){var n=yf(El)[0],e=pn().memoizedState;return[n,e]},useMutableSource:PT,useSyncExternalStore:kT,useId:jT,unstable_isNewReconciler:!1};function vn(n,e){if(n&&n.defaultProps){e=Ne({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function vp(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:Ne({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Dh={isMounted:function(n){return(n=n._reactInternals)?ms(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=bt(),i=Xr(n),s=lr(r,i);s.payload=e,t!=null&&(s.callback=t),e=Yr(n,s,i),e!==null&&(Tn(e,n,i,r),pc(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=bt(),i=Xr(n),s=lr(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Yr(n,s,i),e!==null&&(Tn(e,n,i,r),pc(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=bt(),r=Xr(n),i=lr(t,r);i.tag=2,e!=null&&(i.callback=e),e=Yr(n,i,r),e!==null&&(Tn(e,n,r,t),pc(e,n,r))}};function Mv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ml(t,r)||!ml(i,s):!0}function GT(n,e,t){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(i=qt(e)?Ji:It.current,r=e.contextTypes,s=(r=r!=null)?po(n,i):ri),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dh,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function Fv(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Dh.enqueueReplaceState(e,e.state,null)}function wp(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},Wm(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=fn(s):(s=qt(e)?Ji:It.current,i.context=po(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vp(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dh.enqueueReplaceState(i,i.state,null),Hc(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function yo(n,e){try{var t="",r=e;do t+=Qk(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function vf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ip(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Eb=typeof WeakMap=="function"?WeakMap:Map;function KT(n,e,t){t=lr(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Zc||(Zc=!0,Np=r),Ip(n,e)},t}function HT(n,e,t){t=lr(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){Ip(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ip(n,e),typeof r!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Uv(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Eb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=Lb.bind(null,n,e,t),e.then(n,n))}function Bv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function zv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=lr(-1,1),e.tag=2,Yr(t,e,1))),t.lanes|=1),n)}var Tb=wr.ReactCurrentOwner,Ut=!1;function Rt(n,e,t,r){e.child=n===null?TT(e,null,t,r):go(e,n.child,t,r)}function jv(n,e,t,r,i){t=t.render;var s=e.ref;return ro(e,i),r=Ym(n,e,t,r,s,i),t=Jm(),n!==null&&!Ut?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,pr(n,e,i)):(Te&&t&&Fm(e),e.flags|=1,Rt(n,e,r,i),e.child)}function $v(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!ag(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,QT(n,e,s,r,i)):(n=wc(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ml,t(o,r)&&n.ref===e.ref)return pr(n,e,i)}return e.flags|=1,n=Zr(s,r),n.ref=e.ref,n.return=e,e.child=n}function QT(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(ml(s,r)&&n.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(Ut=!0);else return e.lanes=n.lanes,pr(n,e,i)}return Ep(n,e,t,r,i)}function YT(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Js,Kt),Kt|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,me(Js,Kt),Kt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,me(Js,Kt),Kt|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,me(Js,Kt),Kt|=r;return Rt(n,e,i,t),e.child}function JT(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ep(n,e,t,r,i){var s=qt(t)?Ji:It.current;return s=po(e,s),ro(e,i),t=Ym(n,e,t,r,s,i),r=Jm(),n!==null&&!Ut?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,pr(n,e,i)):(Te&&r&&Fm(e),e.flags|=1,Rt(n,e,t,i),e.child)}function qv(n,e,t,r,i){if(qt(t)){var s=!0;$c(e)}else s=!1;if(ro(e,i),e.stateNode===null)_c(n,e),GT(e,t,r),wp(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=fn(c):(c=qt(t)?Ji:It.current,c=po(e,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Fv(e,o,r,c),Mr=!1;var m=e.memoizedState;o.state=m,Hc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||$t.current||Mr?(typeof d=="function"&&(vp(e,t,d,r),u=e.memoizedState),(a=Mr||Mv(e,t,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,AT(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:vn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=qt(t)?Ji:It.current,u=po(e,u));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Fv(e,o,r,u),Mr=!1,m=e.memoizedState,o.state=m,Hc(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||$t.current||Mr?(typeof y=="function"&&(vp(e,t,y,r),R=e.memoizedState),(c=Mr||Mv(e,t,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return Tp(n,e,t,r,s,i)}function Tp(n,e,t,r,i,s){JT(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Cv(e,t,!1),pr(n,e,s);r=e.stateNode,Tb.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=go(e,n.child,null,s),e.child=go(e,null,a,s)):Rt(n,e,a,s),e.memoizedState=r.state,i&&Cv(e,t,!0),e.child}function XT(n){var e=n.stateNode;e.pendingContext?kv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&kv(n,e.context,!1),Gm(n,e.containerInfo)}function Wv(n,e,t,r,i){return mo(),Bm(i),e.flags|=256,Rt(n,e,t,r),e.child}var Sp={dehydrated:null,treeContext:null,retryLane:0};function Ap(n){return{baseLanes:n,cachePool:null,transitions:null}}function ZT(n,e,t){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),me(ke,i&1),n===null)return _p(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oh(o,r,0,null),n=Gi(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ap(t),e.memoizedState=Sp,n):eg(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Sb(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Zr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=Gi(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?Ap(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Sp,r}return s=n.child,n=s.sibling,r=Zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function eg(n,e){return e=Oh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Qu(n,e,t,r){return r!==null&&Bm(r),go(e,n.child,null,t),n=eg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Sb(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=vf(Error(B(422))),Qu(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oh({mode:"visible",children:r.children},i,0,null),s=Gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&go(e,n.child,null,o),e.child.memoizedState=Ap(o),e.memoizedState=Sp,s);if(!(e.mode&1))return Qu(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=vf(s,r,void 0),Qu(n,e,o,r)}if(a=(o&n.childLanes)!==0,Ut||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fr(n,i),Tn(r,n,i,-1))}return og(),r=vf(Error(B(421))),Qu(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=Mb.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,Qt=Qr(i.nextSibling),Jt=e,Te=!0,In=null,n!==null&&(sn[on++]=nr,sn[on++]=rr,sn[on++]=Xi,nr=n.id,rr=n.overflow,Xi=e),e=eg(e,r.children),e.flags|=4096,e)}function Gv(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),yp(n.return,e,t)}function wf(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function e0(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(n,e,r.children,t),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gv(n,t,e);else if(n.tag===19)Gv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(me(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Qc(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),wf(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Qc(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}wf(e,!0,t,null,s);break;case"together":wf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _c(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function pr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),es|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(B(153));if(e.child!==null){for(n=e.child,t=Zr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ab(n,e,t){switch(e.tag){case 3:XT(e),mo();break;case 5:RT(e);break;case 1:qt(e.type)&&$c(e);break;case 4:Gm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Gc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),e.flags|=128,null):t&e.child.childLanes?ZT(n,e,t):(me(ke,ke.current&1),n=pr(n,e,t),n!==null?n.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return e0(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,YT(n,e,t)}return pr(n,e,t)}var t0,Rp,n0,r0;t0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rp=function(){};n0=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,zi(Fn.current);var s=null;switch(t){case"input":i=Hf(n,i),r=Hf(n,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Jf(n,i),r=Jf(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=zc)}Zf(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ll.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ll.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};r0=function(n,e,t,r){t!==r&&(e.flags|=4)};function Ea(n,e){if(!Te)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function gt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function Rb(n,e,t){var r=e.pendingProps;switch(Um(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return qt(e.type)&&jc(),gt(e),null;case 3:return r=e.stateNode,_o(),we($t),we(It),Hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Ku(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Vp(In),In=null))),Rp(n,e),gt(e),null;case 5:Km(e);var i=zi(wl.current);if(t=e.type,n!==null&&e.stateNode!=null)n0(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return gt(e),null}if(n=zi(Fn.current),Ku(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[yl]=s,n=(e.mode&1)!==0,t){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<La.length;i++)ye(La[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":tv(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":rv(r,s),ye("invalid",r)}Zf(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gu(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gu(r.textContent,a,n),i=["children",""+a]):ll.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(t){case"input":Fu(r),nv(r,s,!0);break;case"textarea":Fu(r),iv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=NE(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[kn]=e,n[yl]=r,t0(n,e,!1,!1),e.stateNode=n;e:{switch(o=ep(t,r),t){case"dialog":ye("cancel",n),ye("close",n),i=r;break;case"iframe":case"object":case"embed":ye("load",n),i=r;break;case"video":case"audio":for(i=0;i<La.length;i++)ye(La[i],n);i=r;break;case"source":ye("error",n),i=r;break;case"img":case"image":case"link":ye("error",n),ye("load",n),i=r;break;case"details":ye("toggle",n),i=r;break;case"input":tv(n,r),i=Hf(n,r),ye("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ye("invalid",n);break;case"textarea":rv(n,r),i=Jf(n,r),ye("invalid",n);break;default:i=r}Zf(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?VE(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&DE(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ul(n,u):typeof u=="number"&&ul(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ll.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",n):u!=null&&Sm(n,s,u,o))}switch(t){case"input":Fu(n),nv(n,r,!1);break;case"textarea":Fu(n),iv(n);break;case"option":r.value!=null&&n.setAttribute("value",""+ni(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?Zs(n,!!r.multiple,s,!1):r.defaultValue!=null&&Zs(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=zc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(n&&e.stateNode!=null)r0(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(t=zi(wl.current),zi(Fn.current),Ku(e)){if(r=e.stateNode,t=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==t)&&(n=Jt,n!==null))switch(n.tag){case 3:Gu(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gu(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return gt(e),null;case 13:if(we(ke),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Te&&Qt!==null&&e.mode&1&&!(e.flags&128))IT(),mo(),e.flags|=98560,s=!1;else if(s=Ku(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[kn]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),s=!1}else In!==null&&(Vp(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||ke.current&1?Ye===0&&(Ye=3):og())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return _o(),Rp(n,e),n===null&&gl(e.stateNode.containerInfo),gt(e),null;case 10:return $m(e.type._context),gt(e),null;case 17:return qt(e.type)&&jc(),gt(e),null;case 19:if(we(ke),s=e.memoizedState,s===null)return gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ea(s,!1);else{if(Ye!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Qc(n),o!==null){for(e.flags|=128,Ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return me(ke,ke.current&1|2),e.child}n=n.sibling}s.tail!==null&&je()>vo&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304)}else{if(!r)if(n=Qc(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return gt(e),null}else 2*je()-s.renderingStartTime>vo&&t!==1073741824&&(e.flags|=128,r=!0,Ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,t=ke.current,me(ke,r?t&1|2:t&1),e):(gt(e),null);case 22:case 23:return sg(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Pb(n,e){switch(Um(e),e.tag){case 1:return qt(e.type)&&jc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return _o(),we($t),we(It),Hm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Km(e),null;case 13:if(we(ke),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(B(340));mo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return we(ke),null;case 4:return _o(),null;case 10:return $m(e.type._context),null;case 22:case 23:return sg(),null;case 24:return null;default:return null}}var Yu=!1,yt=!1,kb=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ys(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Oe(n,e,r)}else t.current=null}function Pp(n,e,t){try{t()}catch(r){Oe(n,e,r)}}var Kv=!1;function Cb(n,e){if(cp=Fc,n=lT(),Mm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=n,m=null;t:for(;;){for(var y;f!==t||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===n)break t;if(m===t&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(hp={focusedElem:n,selectionRange:t},Fc=!1,K=e;K!==null;)if(e=K,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,K=n;else for(;K!==null;){e=K;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,x=R.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?k:vn(e.type,k),x);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){Oe(e,e.return,D)}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}return R=Kv,Kv=!1,R}function Qa(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pp(e,t,s)}i=i.next}while(i!==r)}}function xh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function kp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function i0(n){var e=n.alternate;e!==null&&(n.alternate=null,i0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[kn],delete e[yl],delete e[pp],delete e[hb],delete e[db])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function s0(n){return n.tag===5||n.tag===3||n.tag===4}function Hv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||s0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=zc));else if(r!==4&&(n=n.child,n!==null))for(Cp(n,e,t),n=n.sibling;n!==null;)Cp(n,e,t),n=n.sibling}function bp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(bp(n,e,t),n=n.sibling;n!==null;)bp(n,e,t),n=n.sibling}var ot=null,wn=!1;function Nr(n,e,t){for(t=t.child;t!==null;)o0(n,e,t),t=t.sibling}function o0(n,e,t){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(Ah,t)}catch{}switch(t.tag){case 5:yt||Ys(t,e);case 6:var r=ot,i=wn;ot=null,Nr(n,e,t),ot=r,wn=i,ot!==null&&(wn?(n=ot,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):ot.removeChild(t.stateNode));break;case 18:ot!==null&&(wn?(n=ot,t=t.stateNode,n.nodeType===8?ff(n.parentNode,t):n.nodeType===1&&ff(n,t),fl(n)):ff(ot,t.stateNode));break;case 4:r=ot,i=wn,ot=t.stateNode.containerInfo,wn=!0,Nr(n,e,t),ot=r,wn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pp(t,e,o),i=i.next}while(i!==r)}Nr(n,e,t);break;case 1:if(!yt&&(Ys(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Oe(t,e,a)}Nr(n,e,t);break;case 21:Nr(n,e,t);break;case 22:t.mode&1?(yt=(r=yt)||t.memoizedState!==null,Nr(n,e,t),yt=r):Nr(n,e,t);break;default:Nr(n,e,t)}}function Qv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new kb),e.forEach(function(r){var i=Fb.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function yn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,wn=!1;break e;case 3:ot=a.stateNode.containerInfo,wn=!0;break e;case 4:ot=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(ot===null)throw Error(B(160));o0(s,o,i),ot=null,wn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a0(e,n),e=e.sibling}function a0(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yn(e,n),Rn(n),r&4){try{Qa(3,n,n.return),xh(3,n)}catch(k){Oe(n,n.return,k)}try{Qa(5,n,n.return)}catch(k){Oe(n,n.return,k)}}break;case 1:yn(e,n),Rn(n),r&512&&t!==null&&Ys(t,t.return);break;case 5:if(yn(e,n),Rn(n),r&512&&t!==null&&Ys(t,t.return),n.flags&32){var i=n.stateNode;try{ul(i,"")}catch(k){Oe(n,n.return,k)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&CE(i,s),ep(a,o);var c=ep(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?VE(i,f):d==="dangerouslySetInnerHTML"?DE(i,f):d==="children"?ul(i,f):Sm(i,d,f,c)}switch(a){case"input":Qf(i,s);break;case"textarea":bE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Zs(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Zs(i,!!s.multiple,s.defaultValue,!0):Zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[yl]=s}catch(k){Oe(n,n.return,k)}}break;case 6:if(yn(e,n),Rn(n),r&4){if(n.stateNode===null)throw Error(B(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(k){Oe(n,n.return,k)}}break;case 3:if(yn(e,n),Rn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(k){Oe(n,n.return,k)}break;case 4:yn(e,n),Rn(n);break;case 13:yn(e,n),Rn(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rg=je())),r&4&&Qv(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(yt=(c=yt)||d,yn(e,n),yt=c):yn(e,n),Rn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(K=n,d=n.child;d!==null;){for(f=K=d;K!==null;){switch(m=K,y=m.child,m.tag){case 0:case 11:case 14:case 15:Qa(4,m,m.return);break;case 1:Ys(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Oe(r,t,k)}}break;case 5:Ys(m,m.return);break;case 22:if(m.memoizedState!==null){Jv(f);continue}}y!==null?(y.return=m,K=y):Jv(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xE("display",o))}catch(k){Oe(n,n.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Oe(n,n.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yn(e,n),Rn(n),r&4&&Qv(n);break;case 21:break;default:yn(e,n),Rn(n)}}function Rn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(s0(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ul(i,""),r.flags&=-33);var s=Hv(n);bp(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hv(n);Cp(n,a,o);break;default:throw Error(B(161))}}catch(u){Oe(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function bb(n,e,t){K=n,l0(n)}function l0(n,e,t){for(var r=(n.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||yt;a=Yu;var c=yt;if(Yu=o,(yt=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Xv(i):u!==null?(u.return=o,K=u):Xv(i);for(;s!==null;)K=s,l0(s),s=s.sibling;K=i,Yu=a,yt=c}Yv(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Yv(n)}}function Yv(n){for(;K!==null;){var e=K;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:vn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Vv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}yt||e.flags&512&&kp(e)}catch(m){Oe(e,e.return,m)}}if(e===n){K=null;break}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}}function Jv(n){for(;K!==null;){var e=K;if(e===n){K=null;break}var t=e.sibling;if(t!==null){t.return=e.return,K=t;break}K=e.return}}function Xv(n){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xh(4,e)}catch(u){Oe(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{kp(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{kp(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===n){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var Nb=Math.ceil,Xc=wr.ReactCurrentDispatcher,tg=wr.ReactCurrentOwner,hn=wr.ReactCurrentBatchConfig,oe=0,nt=null,He=null,ut=0,Kt=0,Js=gi(0),Ye=0,Sl=null,es=0,Vh=0,ng=0,Ya=null,Ft=null,rg=0,vo=1/0,Zn=null,Zc=!1,Np=null,Jr=null,Ju=!1,$r=null,eh=0,Ja=0,Dp=null,yc=-1,vc=0;function bt(){return oe&6?je():yc!==-1?yc:yc=je()}function Xr(n){return n.mode&1?oe&2&&ut!==0?ut&-ut:pb.transition!==null?(vc===0&&(vc=GE()),vc):(n=he,n!==0||(n=window.event,n=n===void 0?16:ZE(n.type)),n):1}function Tn(n,e,t,r){if(50<Ja)throw Ja=0,Dp=null,Error(B(185));Hl(n,t,r),(!(oe&2)||n!==nt)&&(n===nt&&(!(oe&2)&&(Vh|=t),Ye===4&&Ur(n,ut)),Wt(n,r),t===1&&oe===0&&!(e.mode&1)&&(vo=je()+500,bh&&_i()))}function Wt(n,e){var t=n.callbackNode;pC(n,e);var r=Mc(n,n===nt?ut:0);if(r===0)t!==null&&av(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&av(t),e===1)n.tag===0?fb(Zv.bind(null,n)):yT(Zv.bind(null,n)),ub(function(){!(oe&6)&&_i()}),t=null;else{switch(KE(r)){case 1:t=Cm;break;case 4:t=qE;break;case 16:t=Lc;break;case 536870912:t=WE;break;default:t=Lc}t=g0(t,u0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function u0(n,e){if(yc=-1,vc=0,oe&6)throw Error(B(327));var t=n.callbackNode;if(io()&&n.callbackNode!==t)return null;var r=Mc(n,n===nt?ut:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=th(n,r);else{e=r;var i=oe;oe|=2;var s=h0();(nt!==n||ut!==e)&&(Zn=null,vo=je()+500,Wi(n,e));do try{Vb();break}catch(a){c0(n,a)}while(!0);jm(),Xc.current=s,oe=i,He!==null?e=0:(nt=null,ut=0,e=Ye)}if(e!==0){if(e===2&&(i=sp(n),i!==0&&(r=i,e=xp(n,i))),e===1)throw t=Sl,Wi(n,0),Ur(n,r),Wt(n,je()),t;if(e===6)Ur(n,r);else{if(i=n.current.alternate,!(r&30)&&!Db(i)&&(e=th(n,r),e===2&&(s=sp(n),s!==0&&(r=s,e=xp(n,s))),e===1))throw t=Sl,Wi(n,0),Ur(n,r),Wt(n,je()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ni(n,Ft,Zn);break;case 3:if(Ur(n,r),(r&130023424)===r&&(e=rg+500-je(),10<e)){if(Mc(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){bt(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=fp(Ni.bind(null,n,Ft,Zn),e);break}Ni(n,Ft,Zn);break;case 4:if(Ur(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nb(r/1960))-r,10<r){n.timeoutHandle=fp(Ni.bind(null,n,Ft,Zn),r);break}Ni(n,Ft,Zn);break;case 5:Ni(n,Ft,Zn);break;default:throw Error(B(329))}}}return Wt(n,je()),n.callbackNode===t?u0.bind(null,n):null}function xp(n,e){var t=Ya;return n.current.memoizedState.isDehydrated&&(Wi(n,e).flags|=256),n=th(n,e),n!==2&&(e=Ft,Ft=t,e!==null&&Vp(e)),n}function Vp(n){Ft===null?Ft=n:Ft.push.apply(Ft,n)}function Db(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!Sn(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(n,e){for(e&=~ng,e&=~Vh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-En(e),r=1<<t;n[t]=-1,e&=~r}}function Zv(n){if(oe&6)throw Error(B(327));io();var e=Mc(n,0);if(!(e&1))return Wt(n,je()),null;var t=th(n,e);if(n.tag!==0&&t===2){var r=sp(n);r!==0&&(e=r,t=xp(n,r))}if(t===1)throw t=Sl,Wi(n,0),Ur(n,e),Wt(n,je()),t;if(t===6)throw Error(B(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ni(n,Ft,Zn),Wt(n,je()),null}function ig(n,e){var t=oe;oe|=1;try{return n(e)}finally{oe=t,oe===0&&(vo=je()+500,bh&&_i())}}function ts(n){$r!==null&&$r.tag===0&&!(oe&6)&&io();var e=oe;oe|=1;var t=hn.transition,r=he;try{if(hn.transition=null,he=1,n)return n()}finally{he=r,hn.transition=t,oe=e,!(oe&6)&&_i()}}function sg(){Kt=Js.current,we(Js)}function Wi(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,lb(t)),He!==null)for(t=He.return;t!==null;){var r=t;switch(Um(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jc();break;case 3:_o(),we($t),we(It),Hm();break;case 5:Km(r);break;case 4:_o();break;case 13:we(ke);break;case 19:we(ke);break;case 10:$m(r.type._context);break;case 22:case 23:sg()}t=t.return}if(nt=n,He=n=Zr(n.current,null),ut=Kt=e,Ye=0,Sl=null,ng=Vh=es=0,Ft=Ya=null,Bi!==null){for(e=0;e<Bi.length;e++)if(t=Bi[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}Bi=null}return n}function c0(n,e){do{var t=He;try{if(jm(),mc.current=Jc,Yc){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yc=!1}if(Zi=0,et=Qe=Ce=null,Ha=!1,Il=0,tg.current=null,t===null||t.return===null){Ye=1,Sl=e,He=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=ut,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Bv(o);if(y!==null){y.flags&=-257,zv(y,o,a,s,e),y.mode&1&&Uv(s,c,e),e=y,u=c;var R=e.updateQueue;if(R===null){var k=new Set;k.add(u),e.updateQueue=k}else R.add(u);break e}else{if(!(e&1)){Uv(s,c,e),og();break e}u=Error(B(426))}}else if(Te&&a.mode&1){var x=Bv(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),zv(x,o,a,s,e),Bm(yo(u,a));break e}}s=u=yo(u,a),Ye!==4&&(Ye=2),Ya===null?Ya=[s]:Ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=KT(s,u,e);xv(s,T);break e;case 1:a=u;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Jr===null||!Jr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=HT(s,a,e);xv(s,D);break e}}s=s.return}while(s!==null)}f0(t)}catch(U){e=U,He===t&&t!==null&&(He=t=t.return);continue}break}while(!0)}function h0(){var n=Xc.current;return Xc.current=Jc,n===null?Jc:n}function og(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(es&268435455)&&!(Vh&268435455)||Ur(nt,ut)}function th(n,e){var t=oe;oe|=2;var r=h0();(nt!==n||ut!==e)&&(Zn=null,Wi(n,e));do try{xb();break}catch(i){c0(n,i)}while(!0);if(jm(),oe=t,Xc.current=r,He!==null)throw Error(B(261));return nt=null,ut=0,Ye}function xb(){for(;He!==null;)d0(He)}function Vb(){for(;He!==null&&!sC();)d0(He)}function d0(n){var e=m0(n.alternate,n,Kt);n.memoizedProps=n.pendingProps,e===null?f0(n):He=e,tg.current=null}function f0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Pb(t,e),t!==null){t.flags&=32767,He=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ye=6,He=null;return}}else if(t=Rb(t,e,Kt),t!==null){He=t;return}if(e=e.sibling,e!==null){He=e;return}He=e=n}while(e!==null);Ye===0&&(Ye=5)}function Ni(n,e,t){var r=he,i=hn.transition;try{hn.transition=null,he=1,Ob(n,e,t,r)}finally{hn.transition=i,he=r}return null}function Ob(n,e,t,r){do io();while($r!==null);if(oe&6)throw Error(B(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(B(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(mC(n,s),n===nt&&(He=nt=null,ut=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ju||(Ju=!0,g0(Lc,function(){return io(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=hn.transition,hn.transition=null;var o=he;he=1;var a=oe;oe|=4,tg.current=null,Cb(n,t),a0(t,n),tb(hp),Fc=!!cp,hp=cp=null,n.current=t,bb(t),oC(),oe=a,he=o,hn.transition=s}else n.current=t;if(Ju&&(Ju=!1,$r=n,eh=i),s=n.pendingLanes,s===0&&(Jr=null),uC(t.stateNode),Wt(n,je()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zc)throw Zc=!1,n=Np,Np=null,n;return eh&1&&n.tag!==0&&io(),s=n.pendingLanes,s&1?n===Dp?Ja++:(Ja=0,Dp=n):Ja=0,_i(),null}function io(){if($r!==null){var n=KE(eh),e=hn.transition,t=he;try{if(hn.transition=null,he=16>n?16:n,$r===null)var r=!1;else{if(n=$r,$r=null,eh=0,oe&6)throw Error(B(331));var i=oe;for(oe|=4,K=n.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Qa(8,d,s)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var m=d.sibling,y=d.return;if(i0(d),d===c){K=null;break}if(m!==null){m.return=y,K=m;break}K=y}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,K=T;break e}K=s.return}}var v=n.current;for(K=v;K!==null;){o=K;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,K=E;else e:for(o=v;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xh(9,a)}}catch(U){Oe(a,a.return,U)}if(a===o){K=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,K=D;break e}K=a.return}}if(oe=i,_i(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(Ah,n)}catch{}r=!0}return r}finally{he=t,hn.transition=e}}return!1}function ew(n,e,t){e=yo(t,e),e=KT(n,e,1),n=Yr(n,e,1),e=bt(),n!==null&&(Hl(n,1,e),Wt(n,e))}function Oe(n,e,t){if(n.tag===3)ew(n,n,t);else for(;e!==null;){if(e.tag===3){ew(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){n=yo(t,n),n=HT(e,n,1),e=Yr(e,n,1),n=bt(),e!==null&&(Hl(e,1,n),Wt(e,n));break}}e=e.return}}function Lb(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=bt(),n.pingedLanes|=n.suspendedLanes&t,nt===n&&(ut&t)===t&&(Ye===4||Ye===3&&(ut&130023424)===ut&&500>je()-rg?Wi(n,0):ng|=t),Wt(n,e)}function p0(n,e){e===0&&(n.mode&1?(e=zu,zu<<=1,!(zu&130023424)&&(zu=4194304)):e=1);var t=bt();n=fr(n,e),n!==null&&(Hl(n,e,t),Wt(n,t))}function Mb(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),p0(n,t)}function Fb(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),p0(n,t)}var m0;m0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||$t.current)Ut=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Ut=!1,Ab(n,e,t);Ut=!!(n.flags&131072)}else Ut=!1,Te&&e.flags&1048576&&vT(e,Wc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_c(n,e),n=e.pendingProps;var i=po(e,It.current);ro(e,t),i=Ym(null,e,r,n,i,t);var s=Jm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,$c(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wm(e),i.updater=Dh,e.stateNode=i,i._reactInternals=e,wp(e,r,n,t),e=Tp(null,e,r,!0,s,t)):(e.tag=0,Te&&s&&Fm(e),Rt(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(_c(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Bb(r),n=vn(r,n),i){case 0:e=Ep(null,e,r,n,t);break e;case 1:e=qv(null,e,r,n,t);break e;case 11:e=jv(null,e,r,n,t);break e;case 14:e=$v(null,e,r,vn(r.type,n),t);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Ep(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),qv(n,e,r,i,t);case 3:e:{if(XT(e),n===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,AT(n,e),Hc(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yo(Error(B(423)),e),e=Wv(n,e,r,t,i);break e}else if(r!==i){i=yo(Error(B(424)),e),e=Wv(n,e,r,t,i);break e}else for(Qt=Qr(e.stateNode.containerInfo.firstChild),Jt=e,Te=!0,In=null,t=TT(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(mo(),r===i){e=pr(n,e,t);break e}Rt(n,e,r,t)}e=e.child}return e;case 5:return RT(e),n===null&&_p(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,dp(r,i)?o=null:s!==null&&dp(r,s)&&(e.flags|=32),JT(n,e),Rt(n,e,o,t),e.child;case 6:return n===null&&_p(e),null;case 13:return ZT(n,e,t);case 4:return Gm(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=go(e,null,r,t):Rt(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),jv(n,e,r,i,t);case 7:return Rt(n,e,e.pendingProps,t),e.child;case 8:return Rt(n,e,e.pendingProps.children,t),e.child;case 12:return Rt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Gc,r._currentValue),r._currentValue=o,s!==null)if(Sn(s.value,o)){if(s.children===i.children&&!$t.current){e=pr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=lr(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),yp(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),yp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ro(e,t),i=fn(i),r=r(i),e.flags|=1,Rt(n,e,r,t),e.child;case 14:return r=e.type,i=vn(r,e.pendingProps),i=vn(r.type,i),$v(n,e,r,i,t);case 15:return QT(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),_c(n,e),e.tag=1,qt(r)?(n=!0,$c(e)):n=!1,ro(e,t),GT(e,r,i),wp(e,r,i,t),Tp(null,e,r,!0,n,t);case 19:return e0(n,e,t);case 22:return YT(n,e,t)}throw Error(B(156,e.tag))};function g0(n,e){return $E(n,e)}function Ub(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(n,e,t,r){return new Ub(n,e,t,r)}function ag(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Bb(n){if(typeof n=="function")return ag(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Rm)return 11;if(n===Pm)return 14}return 2}function Zr(n,e){var t=n.alternate;return t===null?(t=ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wc(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")ag(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case zs:return Gi(t.children,i,s,e);case Am:o=8,i|=8;break;case qf:return n=ln(12,t,e,i|2),n.elementType=qf,n.lanes=s,n;case Wf:return n=ln(13,t,e,i),n.elementType=Wf,n.lanes=s,n;case Gf:return n=ln(19,t,e,i),n.elementType=Gf,n.lanes=s,n;case RE:return Oh(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case SE:o=10;break e;case AE:o=9;break e;case Rm:o=11;break e;case Pm:o=14;break e;case Lr:o=16,r=null;break e}throw Error(B(130,n==null?n:typeof n,""))}return e=ln(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function Gi(n,e,t,r){return n=ln(7,n,r,e),n.lanes=t,n}function Oh(n,e,t,r){return n=ln(22,n,r,e),n.elementType=RE,n.lanes=t,n.stateNode={isHidden:!1},n}function If(n,e,t){return n=ln(6,n,null,e),n.lanes=t,n}function Ef(n,e,t){return e=ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function zb(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tf(0),this.expirationTimes=tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lg(n,e,t,r,i,s,o,a,u){return n=new zb(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wm(s),n}function jb(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function _0(n){if(!n)return ri;n=n._reactInternals;e:{if(ms(n)!==n||n.tag!==1)throw Error(B(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(n.tag===1){var t=n.type;if(qt(t))return _T(n,t,e)}return e}function y0(n,e,t,r,i,s,o,a,u){return n=lg(t,r,!0,n,i,s,o,a,u),n.context=_0(null),t=n.current,r=bt(),i=Xr(t),s=lr(r,i),s.callback=e??null,Yr(t,s,i),n.current.lanes=i,Hl(n,i,r),Wt(n,r),n}function Lh(n,e,t,r){var i=e.current,s=bt(),o=Xr(i);return t=_0(t),e.context===null?e.context=t:e.pendingContext=t,e=lr(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=Yr(i,e,o),n!==null&&(Tn(n,i,o,s),pc(n,i,o)),o}function nh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function tw(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ug(n,e){tw(n,e),(n=n.alternate)&&tw(n,e)}function $b(){return null}var v0=typeof reportError=="function"?reportError:function(n){console.error(n)};function cg(n){this._internalRoot=n}Mh.prototype.render=cg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(B(409));Lh(n,e,null,null)};Mh.prototype.unmount=cg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ts(function(){Lh(null,n,null,null)}),e[dr]=null}};function Mh(n){this._internalRoot=n}Mh.prototype.unstable_scheduleHydration=function(n){if(n){var e=YE();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Fr.length&&e!==0&&e<Fr[t].priority;t++);Fr.splice(t,0,n),t===0&&XE(n)}};function hg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function nw(){}function qb(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=nh(o);s.call(c)}}var o=y0(e,r,n,0,null,!1,!1,"",nw);return n._reactRootContainer=o,n[dr]=o.current,gl(n.nodeType===8?n.parentNode:n),ts(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=nh(u);a.call(c)}}var u=lg(n,0,!1,null,null,!1,!1,"",nw);return n._reactRootContainer=u,n[dr]=u.current,gl(n.nodeType===8?n.parentNode:n),ts(function(){Lh(e,u,t,r)}),u}function Uh(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=nh(o);a.call(u)}}Lh(e,o,n,i)}else o=qb(t,e,n,i,r);return nh(o)}HE=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Oa(e.pendingLanes);t!==0&&(bm(e,t|1),Wt(e,je()),!(oe&6)&&(vo=je()+500,_i()))}break;case 13:ts(function(){var r=fr(n,1);if(r!==null){var i=bt();Tn(r,n,1,i)}}),ug(n,1)}};Nm=function(n){if(n.tag===13){var e=fr(n,134217728);if(e!==null){var t=bt();Tn(e,n,134217728,t)}ug(n,134217728)}};QE=function(n){if(n.tag===13){var e=Xr(n),t=fr(n,e);if(t!==null){var r=bt();Tn(t,n,e,r)}ug(n,e)}};YE=function(){return he};JE=function(n,e){var t=he;try{return he=n,e()}finally{he=t}};np=function(n,e,t){switch(e){case"input":if(Qf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=Ch(r);if(!i)throw Error(B(90));kE(r),Qf(r,i)}}}break;case"textarea":bE(n,t);break;case"select":e=t.value,e!=null&&Zs(n,!!t.multiple,e,!1)}};ME=ig;FE=ts;var Wb={usingClientEntryPoint:!1,Events:[Yl,Ws,Ch,OE,LE,ig]},Ta={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gb={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zE(n),n===null?null:n.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||$b,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Ah=Xu.inject(Gb),Mn=Xu}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wb;tn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hg(e))throw Error(B(200));return jb(n,e,null,t)};tn.createRoot=function(n,e){if(!hg(n))throw Error(B(299));var t=!1,r="",i=v0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lg(n,1,!1,null,null,t,!1,r,i),n[dr]=e.current,gl(n.nodeType===8?n.parentNode:n),new cg(e)};tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(B(188)):(n=Object.keys(n).join(","),Error(B(268,n)));return n=zE(e),n=n===null?null:n.stateNode,n};tn.flushSync=function(n){return ts(n)};tn.hydrate=function(n,e,t){if(!Fh(e))throw Error(B(200));return Uh(null,n,e,!0,t)};tn.hydrateRoot=function(n,e,t){if(!hg(n))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=v0;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=y0(e,null,n,1,t??null,i,!1,s,o),n[dr]=e.current,gl(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new Mh(e)};tn.render=function(n,e,t){if(!Fh(e))throw Error(B(200));return Uh(null,n,e,!1,t)};tn.unmountComponentAtNode=function(n){if(!Fh(n))throw Error(B(40));return n._reactRootContainer?(ts(function(){Uh(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1};tn.unstable_batchedUpdates=ig;tn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!Fh(t))throw Error(B(200));if(n==null||n._reactInternals===void 0)throw Error(B(38));return Uh(n,e,t,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function w0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0)}catch(n){console.error(n)}}w0(),wE.exports=tn;var Kb=wE.exports,rw=Kb;jf.createRoot=rw.createRoot,jf.hydrateRoot=rw.hydrateRoot;var iw={};/**
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
 */const I0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hb=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},E0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(t[d],t[f],t[m],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(I0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Hb(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Qb;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yb=function(n){const e=I0(n);return E0.encodeByteArray(e,!0)},rh=function(n){return Yb(n).replace(/\./g,"")},T0=function(n){try{return E0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ih(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Jb(t)||(n[t]=ih(n[t],e[t]));return n}function Jb(n){return n!=="__proto__"}/**
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
 */function S0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xb=()=>S0().__FIREBASE_DEFAULTS__,Zb=()=>{if(typeof process>"u"||typeof iw>"u")return;const n=iw.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&T0(n[1]);return e&&JSON.parse(e)},Bh=()=>{try{return Xb()||Zb()||eN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},A0=n=>{var e,t;return(t=(e=Bh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},R0=n=>{const e=A0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},P0=()=>{var n;return(n=Bh())===null||n===void 0?void 0:n.config},k0=n=>{var e;return(e=Bh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class tN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function C0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[rh(JSON.stringify(t)),rh(JSON.stringify(o)),""].join(".")}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function dg(){var n;const e=(n=Bh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rN(){return typeof window<"u"||b0()}function b0(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function iN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function N0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D0(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function x0(){return!dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Al(){try{return typeof indexedDB=="object"}catch{return!1}}function sN(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const oN="FirebaseError";class wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=oN,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wt(i,a,r)}}function aN(n,e){return n.replace(lN,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lN=/\{\$([^}]+)}/g;/**
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
 */function sw(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function uN(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ow(s)&&ow(o)){if(!wo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ow(n){return n!==null&&typeof n=="object"}/**
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
 */function jo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ma(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function V0(n,e){const t=new cN(n,e);return t.subscribe.bind(t)}class cN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");hN(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Tf),i.error===void 0&&(i.error=Tf),i.complete===void 0&&(i.complete=Tf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Tf(){}/**
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
 */function H(n){return n&&n._delegate?n._delegate:n}class mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class dN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new tN;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pN(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fN(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fN(n){return n===Di?void 0:n}function pN(n){return n.instantiationMode==="EAGER"}/**
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
 */class O0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const pg=[];var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const L0={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},mN=te.INFO,gN={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},_N=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=gN[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=mN,this._logHandler=_N,this._userLogHandler=null,pg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function yN(n){pg.forEach(e=>{e.setLogLevel(n)})}function vN(n,e){for(const t of pg){let r=null;e&&e.level&&(r=L0[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}const wN=(n,e)=>e.some(t=>n instanceof t);let aw,lw;function IN(){return aw||(aw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EN(){return lw||(lw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M0=new WeakMap,Op=new WeakMap,F0=new WeakMap,Sf=new WeakMap,mg=new WeakMap;function TN(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ei(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&M0.set(t,n)}).catch(()=>{}),mg.set(e,n),e}function SN(n){if(Op.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Op.set(n,e)}let Lp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Op.get(n);if(e==="objectStoreNames")return n.objectStoreNames||F0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ei(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function AN(n){Lp=n(Lp)}function RN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Af(this),e,...t);return F0.set(r,e.sort?e.sort():[e]),ei(r)}:EN().includes(n)?function(...e){return n.apply(Af(this),e),ei(M0.get(this))}:function(...e){return ei(n.apply(Af(this),e))}}function PN(n){return typeof n=="function"?RN(n):(n instanceof IDBTransaction&&SN(n),wN(n,IN())?new Proxy(n,Lp):n)}function ei(n){if(n instanceof IDBRequest)return TN(n);if(Sf.has(n))return Sf.get(n);const e=PN(n);return e!==n&&(Sf.set(n,e),mg.set(e,n)),e}const Af=n=>mg.get(n);function kN(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=ei(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ei(o.result),u.oldVersion,u.newVersion,ei(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const CN=["get","getKey","getAll","getAllKeys","count"],bN=["put","add","delete","clear"],Rf=new Map;function uw(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=bN.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||CN.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return Rf.set(e,s),s}AN(n=>({...n,get:(e,t,r)=>uw(e,t)||n.get(e,t,r),has:(e,t)=>!!uw(e,t)||n.has(e,t)}));/**
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
 */class NN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DN(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function DN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sh="@firebase/app",Mp="0.10.13";/**
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
 */const mr=new zh("@firebase/app"),xN="@firebase/app-compat",VN="@firebase/analytics-compat",ON="@firebase/analytics",LN="@firebase/app-check-compat",MN="@firebase/app-check",FN="@firebase/auth",UN="@firebase/auth-compat",BN="@firebase/database",zN="@firebase/data-connect",jN="@firebase/database-compat",$N="@firebase/functions",qN="@firebase/functions-compat",WN="@firebase/installations",GN="@firebase/installations-compat",KN="@firebase/messaging",HN="@firebase/messaging-compat",QN="@firebase/performance",YN="@firebase/performance-compat",JN="@firebase/remote-config",XN="@firebase/remote-config-compat",ZN="@firebase/storage",e1="@firebase/storage-compat",t1="@firebase/firestore",n1="@firebase/vertexai-preview",r1="@firebase/firestore-compat",i1="firebase",s1="10.14.1";/**
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
 */const ii="[DEFAULT]",o1={[sh]:"fire-core",[xN]:"fire-core-compat",[ON]:"fire-analytics",[VN]:"fire-analytics-compat",[MN]:"fire-app-check",[LN]:"fire-app-check-compat",[FN]:"fire-auth",[UN]:"fire-auth-compat",[BN]:"fire-rtdb",[zN]:"fire-data-connect",[jN]:"fire-rtdb-compat",[$N]:"fire-fn",[qN]:"fire-fn-compat",[WN]:"fire-iid",[GN]:"fire-iid-compat",[KN]:"fire-fcm",[HN]:"fire-fcm-compat",[QN]:"fire-perf",[YN]:"fire-perf-compat",[JN]:"fire-rc",[XN]:"fire-rc-compat",[ZN]:"fire-gcs",[e1]:"fire-gcs-compat",[t1]:"fire-fst",[r1]:"fire-fst-compat",[n1]:"fire-vertex","fire-js":"fire-js",[i1]:"fire-js-all"};/**
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
 */const si=new Map,Io=new Map,Eo=new Map;function Rl(n,e){try{n.container.addComponent(e)}catch(t){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function U0(n,e){n.container.addOrOverwriteComponent(e)}function gr(n){const e=n.name;if(Eo.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of si.values())Rl(t,n);for(const t of Io.values())Rl(t,n);return!0}function $o(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function a1(n,e,t=ii){$o(n,e).clearInstance(t)}function B0(n){return n.options!==void 0}function Le(n){return n.settings!==void 0}function l1(){Eo.clear()}/**
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
 */const u1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new gs("app","Firebase",u1);/**
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
 */let z0=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}};/**
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
 */class c1 extends z0{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Xt(sh,Mp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){_g(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw dn.create("server-app-deleted")}}/**
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
 */const Ir=s1;function gg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ii,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(t||(t=P0()),!t)throw dn.create("no-options");const s=si.get(i);if(s){if(wo(t,s.options)&&wo(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new O0(i);for(const u of Eo.values())o.addComponent(u);const a=new z0(t,r,o);return si.set(i,a),a}function h1(n,e){if(rN()&&!b0())throw dn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;B0(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw dn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Io.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new O0(s);for(const c of Eo.values())a.addComponent(c);const u=new c1(t,e,s,a);return Io.set(s,u),u}function jh(n=ii){const e=si.get(n);if(!e&&n===ii&&P0())return gg();if(!e)throw dn.create("no-app",{appName:n});return e}function d1(){return Array.from(si.values())}async function _g(n){let e=!1;const t=n.name;si.has(t)?(e=!0,si.delete(t)):Io.has(t)&&n.decRefCount()<=0&&(Io.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Xt(n,e,t){var r;let i=(r=o1[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(a.join(" "));return}gr(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function j0(n,e){if(n!==null&&typeof n!="function")throw dn.create("invalid-log-argument");vN(n,e)}function $0(n){yN(n)}/**
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
 */const f1="firebase-heartbeat-database",p1=1,Pl="firebase-heartbeat-store";let Pf=null;function q0(){return Pf||(Pf=kN(f1,p1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pl)}catch(t){console.warn(t)}}}}).catch(n=>{throw dn.create("idb-open",{originalErrorMessage:n.message})})),Pf}async function m1(n){try{const t=(await q0()).transaction(Pl),r=await t.objectStore(Pl).get(W0(n));return await t.done,r}catch(e){if(e instanceof wt)mr.warn(e.message);else{const t=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(t.message)}}}async function cw(n,e){try{const r=(await q0()).transaction(Pl,"readwrite");await r.objectStore(Pl).put(e,W0(n)),await r.done}catch(t){if(t instanceof wt)mr.warn(t.message);else{const r=dn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mr.warn(r.message)}}}function W0(n){return`${n.name}!${n.options.appId}`}/**
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
 */const g1=1024,_1=30*24*60*60*1e3;class y1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new w1(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hw(),{heartbeatsToSend:r,unsentEntries:i}=v1(this._heartbeatsCache.heartbeats),s=rh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return mr.warn(t),""}}}function hw(){return new Date().toISOString().substring(0,10)}function v1(n,e=g1){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dw(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dw(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class w1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Al()?sN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await m1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return cw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return cw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dw(n){return rh(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function I1(n){gr(new mn("platform-logger",e=>new NN(e),"PRIVATE")),gr(new mn("heartbeat",e=>new y1(e),"PRIVATE")),Xt(sh,Mp,n),Xt(sh,Mp,"esm2017"),Xt("fire-js","")}I1("");const E1=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:wt,SDK_VERSION:Ir,_DEFAULT_ENTRY_NAME:ii,_addComponent:Rl,_addOrOverwriteComponent:U0,_apps:si,_clearComponents:l1,_components:Eo,_getProvider:$o,_isFirebaseApp:B0,_isFirebaseServerApp:Le,_registerComponent:gr,_removeServiceInstance:a1,_serverApps:Io,deleteApp:_g,getApp:jh,getApps:d1,initializeApp:gg,initializeServerApp:h1,onLog:j0,registerVersion:Xt,setLogLevel:$0},Symbol.toStringTag,{value:"Module"}));var fw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ki,G0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function I(){}I.prototype=_.prototype,w.D=_.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(S,P,b){for(var A=Array(arguments.length-2),rn=2;rn<arguments.length;rn++)A[rn-2]=arguments[rn];return _.prototype[P].apply(S,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,I){I||(I=0);var S=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)S[P]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(P=0;16>P;++P)S[P]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=w.g[0],I=w.g[1],P=w.g[2];var b=w.g[3],A=_+(b^I&(P^b))+S[0]+3614090360&4294967295;_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+S[1]+3905402710&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+S[2]+606105819&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+S[3]+3250441966&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(b^I&(P^b))+S[4]+4118548399&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+S[5]+1200080426&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+S[6]+2821735955&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+S[7]+4249261313&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(b^I&(P^b))+S[8]+1770035416&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+S[9]+2336552879&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+S[10]+4294925233&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+S[11]+2304563134&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(b^I&(P^b))+S[12]+1804603682&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+S[13]+4254626195&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+S[14]+2792965006&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+S[15]+1236535329&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(P^b&(I^P))+S[1]+4129170786&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+S[6]+3225465664&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+S[11]+643717713&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+S[0]+3921069994&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(P^b&(I^P))+S[5]+3593408605&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+S[10]+38016083&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+S[15]+3634488961&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+S[4]+3889429448&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(P^b&(I^P))+S[9]+568446438&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+S[14]+3275163606&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+S[3]+4107603335&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+S[8]+1163531501&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(P^b&(I^P))+S[13]+2850285829&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+S[2]+4243563512&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+S[7]+1735328473&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+S[12]+2368359562&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(I^P^b)+S[5]+4294588738&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+S[8]+2272392833&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+S[11]+1839030562&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+S[14]+4259657740&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(I^P^b)+S[1]+2763975236&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+S[4]+1272893353&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+S[7]+4139469664&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+S[10]+3200236656&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(I^P^b)+S[13]+681279174&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+S[0]+3936430074&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+S[3]+3572445317&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+S[6]+76029189&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(I^P^b)+S[9]+3654602809&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+S[12]+3873151461&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+S[15]+530742520&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+S[2]+3299628645&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(P^(I|~b))+S[0]+4096336452&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+S[7]+1126891415&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+S[14]+2878612391&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+S[5]+4237533241&4294967295,I=P+(A<<21&4294967295|A>>>11),A=_+(P^(I|~b))+S[12]+1700485571&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+S[3]+2399980690&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+S[10]+4293915773&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+S[1]+2240044497&4294967295,I=P+(A<<21&4294967295|A>>>11),A=_+(P^(I|~b))+S[8]+1873313359&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+S[15]+4264355552&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+S[6]+2734768916&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+S[13]+1309151649&4294967295,I=P+(A<<21&4294967295|A>>>11),A=_+(P^(I|~b))+S[4]+4149444226&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+S[11]+3174756917&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+S[2]+718787259&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+P&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var I=_-this.blockSize,S=this.B,P=this.h,b=0;b<_;){if(P==0)for(;b<=I;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(S[P++]=w.charCodeAt(b++),P==this.blockSize){i(this,S),P=0;break}}else for(;b<_;)if(S[P++]=w[b++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var I=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=I&255,I/=256;for(this.u(w),w=Array(16),_=I=0;4>_;++_)for(var S=0;32>S;S+=8)w[I++]=this.g[_]>>>S&255;return w};function s(w,_){var I=a;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=_(w)}function o(w,_){this.h=_;for(var I=[],S=!0,P=w.length-1;0<=P;P--){var b=w[P]|0;S&&b==_||(I[P]=b,S=!1)}this.g=I}var a={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return x(c(-w));for(var _=[],I=1,S=0;w>=I;S++)_[S]=w/I|0,I*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return x(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),S=f,P=0;P<w.length;P+=8){var b=Math.min(8,w.length-P),A=parseInt(w.substring(P,P+b),_);8>b?(b=c(Math.pow(_,b)),S=S.j(b).add(c(A))):(S=S.j(I),S=S.add(c(A)))}return S}var f=u(0),m=u(1),y=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-x(this).m();for(var w=0,_=1,I=0;I<this.g.length;I++){var S=this.i(I);w+=(0<=S?S:4294967296+S)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(k(this))return"-"+x(this).toString(w);for(var _=c(Math.pow(w,6)),I=this,S="";;){var P=D(I,_).g;I=T(I,P.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=P,R(I))return b+S;for(;6>b.length;)b="0"+b;S=b+S}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=T(this,w),k(w)?-1:R(w)?0:1};function x(w){for(var _=w.g.length,I=[],S=0;S<_;S++)I[S]=~w.g[S];return new o(I,~w.h).add(m)}n.abs=function(){return k(this)?x(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],S=0,P=0;P<=_;P++){var b=S+(this.i(P)&65535)+(w.i(P)&65535),A=(b>>>16)+(this.i(P)>>>16)+(w.i(P)>>>16);S=A>>>16,b&=65535,A&=65535,I[P]=A<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(w,_){return w.add(x(_))}n.j=function(w){if(R(this)||R(w))return f;if(k(this))return k(w)?x(this).j(x(w)):x(x(this).j(w));if(k(w))return x(this.j(x(w)));if(0>this.l(y)&&0>w.l(y))return c(this.m()*w.m());for(var _=this.g.length+w.g.length,I=[],S=0;S<2*_;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<w.g.length;P++){var b=this.i(S)>>>16,A=this.i(S)&65535,rn=w.i(P)>>>16,Si=w.i(P)&65535;I[2*S+2*P]+=A*Si,v(I,2*S+2*P),I[2*S+2*P+1]+=b*Si,v(I,2*S+2*P+1),I[2*S+2*P+1]+=A*rn,v(I,2*S+2*P+1),I[2*S+2*P+2]+=b*rn,v(I,2*S+2*P+2)}for(S=0;S<_;S++)I[S]=I[2*S+1]<<16|I[2*S];for(S=_;S<2*_;S++)I[S]=0;return new o(I,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function E(w,_){this.g=w,this.h=_}function D(w,_){if(R(_))throw Error("division by zero");if(R(w))return new E(f,f);if(k(w))return _=D(x(w),_),new E(x(_.g),x(_.h));if(k(_))return _=D(w,x(_)),new E(x(_.g),_.h);if(30<w.g.length){if(k(w)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,S=_;0>=S.l(w);)I=U(I),S=U(S);var P=F(I,1),b=F(S,1);for(S=F(S,2),I=F(I,2);!R(S);){var A=b.add(S);0>=A.l(w)&&(P=P.add(I),b=A),S=F(S,1),I=F(I,1)}return _=T(w,P.j(_)),new E(P,_)}for(P=f;0<=w.l(_);){for(I=Math.max(1,Math.floor(w.m()/_.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),b=c(I),A=b.j(_);k(A)||0<A.l(w);)I-=S,b=c(I),A=b.j(_);R(b)&&(b=m),P=P.add(b),w=T(w,A)}return new E(P,w)}n.A=function(w){return D(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],S=0;S<_;S++)I[S]=this.i(S)&w.i(S);return new o(I,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],S=0;S<_;S++)I[S]=this.i(S)|w.i(S);return new o(I,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),I=[],S=0;S<_;S++)I[S]=this.i(S)^w.i(S);return new o(I,this.h^w.h)};function U(w){for(var _=w.g.length+1,I=[],S=0;S<_;S++)I[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(I,w.h)}function F(w,_){var I=_>>5;_%=32;for(var S=w.g.length-I,P=[],b=0;b<S;b++)P[b]=0<_?w.i(b+I)>>>_|w.i(b+I+1)<<32-_:w.i(b+I);return new o(P,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,G0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ki=o}).apply(typeof fw<"u"?fw:typeof self<"u"?self:typeof window<"u"?window:{});var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K0,Fa,H0,Ic,Fp,Q0,Y0,J0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zu=="object"&&Zu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var C=l[g];if(!(C in p))break e;p=p[C]}l=l[l.length-1],g=p[l],h=h(g),h!=g&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,g=!1,C={next:function(){if(!g&&p<l.length){var O=p++;return{value:h(O,l[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),l.apply(h,C)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function y(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function R(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,C,O){for(var j=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)j[pe-2]=arguments[pe];return h.prototype[C].apply(g,j)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=l[g];return p}return[]}function x(l,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const C=l.length||0,O=g.length||0;l.length=C+O;for(let j=0;j<O;j++)l[C+j]=g[j]}else l.push(g)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(l){return/^[\s\xa0]*$/.test(l)}function E(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var U=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function F(l,h,p){for(const g in l)h.call(p,l[g],g,l)}function w(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function _(l){const h={};for(const p in l)h[p]=l[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,h){let p,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(p in g)l[p]=g[p];for(let O=0;O<I.length;O++)p=I[O],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function P(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function A(){var l=J;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class rn{constructor(){this.h=this.g=null}add(h,p){const g=Si.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Si=new T(()=>new na,l=>l.reset());class na{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,W=!1,J=new rn,ee=()=>{const l=a.Promise.resolve(void 0);Gn=()=>{l.then(Pe)}};var Pe=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(p){b(p)}var h=Si;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Hn(l,h){if(ze.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(U){e:{try{D(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Qn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Hn.aa.h.call(this)}}R(Hn,ze);var Qn={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Yn="closure_listenable_"+(1e6*Math.random()|0),$P=0;function qP(l,h,p,g,C){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=C,this.key=++$P,this.da=this.fa=!1}function yu(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function vu(l){this.src=l,this.g={},this.h=0}vu.prototype.add=function(l,h,p,g,C){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var j=kd(l,h,g,C);return-1<j?(h=l[j],p||(h.fa=!1)):(h=new qP(h,this.src,O,!!g,C),h.fa=p,l.push(h)),h};function Pd(l,h){var p=h.type;if(p in l.g){var g=l.g[p],C=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=C)&&Array.prototype.splice.call(g,C,1),O&&(yu(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function kd(l,h,p,g){for(var C=0;C<l.length;++C){var O=l[C];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==g)return C}return-1}var Cd="closure_lm_"+(1e6*Math.random()|0),bd={};function Y_(l,h,p,g,C){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Y_(l,h[O],p,g,C);return null}return p=Z_(p),l&&l[Yn]?l.K(h,p,c(g)?!!g.capture:!1,C):WP(l,h,p,!1,g,C)}function WP(l,h,p,g,C,O){if(!h)throw Error("Invalid event type");var j=c(C)?!!C.capture:!!C,pe=Dd(l);if(pe||(l[Cd]=pe=new vu(l)),p=pe.add(h,p,g,j,O),p.proxy)return p;if(g=GP(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)Kn||(C=j),C===void 0&&(C=!1),l.addEventListener(h.toString(),g,C);else if(l.attachEvent)l.attachEvent(X_(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function GP(){function l(p){return h.call(l.src,l.listener,p)}const h=KP;return l}function J_(l,h,p,g,C){if(Array.isArray(h))for(var O=0;O<h.length;O++)J_(l,h[O],p,g,C);else g=c(g)?!!g.capture:!!g,p=Z_(p),l&&l[Yn]?(l=l.i,h=String(h).toString(),h in l.g&&(O=l.g[h],p=kd(O,p,g,C),-1<p&&(yu(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[h],l.h--)))):l&&(l=Dd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=kd(h,p,g,C)),(p=-1<l?h[l]:null)&&Nd(p))}function Nd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Yn])Pd(h.i,l);else{var p=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(p,g,l.capture):h.detachEvent?h.detachEvent(X_(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Dd(h))?(Pd(p,l),p.h==0&&(p.src=null,h[Cd]=null)):yu(l)}}}function X_(l){return l in bd?bd[l]:bd[l]="on"+l}function KP(l,h){if(l.da)l=!0;else{h=new Hn(h,this);var p=l.listener,g=l.ha||l.src;l.fa&&Nd(l),l=p.call(g,h)}return l}function Dd(l){return l=l[Cd],l instanceof vu?l:null}var xd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z_(l){return typeof l=="function"?l:(l[xd]||(l[xd]=function(h){return l.handleEvent(h)}),l[xd])}function dt(){fe.call(this),this.i=new vu(this),this.M=this,this.F=null}R(dt,fe),dt.prototype[Yn]=!0,dt.prototype.removeEventListener=function(l,h,p,g){J_(this,l,h,p,g)};function Tt(l,h){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new ze(h,l);else if(h instanceof ze)h.target=h.target||l;else{var C=h;h=new ze(g,l),S(h,C)}if(C=!0,p)for(var O=p.length-1;0<=O;O--){var j=h.g=p[O];C=wu(j,g,!0,h)&&C}if(j=h.g=l,C=wu(j,g,!0,h)&&C,C=wu(j,g,!1,h)&&C,p)for(O=0;O<p.length;O++)j=h.g=p[O],C=wu(j,g,!1,h)&&C}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],g=0;g<p.length;g++)yu(p[g]);delete l.g[h],l.h--}}this.F=null},dt.prototype.K=function(l,h,p,g){return this.i.add(String(l),h,!1,p,g)},dt.prototype.L=function(l,h,p,g){return this.i.add(String(l),h,!0,p,g)};function wu(l,h,p,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,O=0;O<h.length;++O){var j=h[O];if(j&&!j.da&&j.capture==p){var pe=j.listener,st=j.ha||j.src;j.fa&&Pd(l.i,j),C=pe.call(st,g)!==!1&&C}}return C&&!g.defaultPrevented}function ey(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function ty(l){l.g=ey(()=>{l.g=null,l.i&&(l.i=!1,ty(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class HP extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ty(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ra(l){fe.call(this),this.h=l,this.g={}}R(ra,fe);var ny=[];function ry(l){F(l.g,function(h,p){this.g.hasOwnProperty(p)&&Nd(h)},l),l.g={}}ra.prototype.N=function(){ra.aa.N.call(this),ry(this)},ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vd=a.JSON.stringify,QP=a.JSON.parse,YP=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Od(){}Od.prototype.h=null;function iy(l){return l.h||(l.h=l.i())}function sy(){}var ia={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ld(){ze.call(this,"d")}R(Ld,ze);function Md(){ze.call(this,"c")}R(Md,ze);var Ai={},oy=null;function Iu(){return oy=oy||new dt}Ai.La="serverreachability";function ay(l){ze.call(this,Ai.La,l)}R(ay,ze);function sa(l){const h=Iu();Tt(h,new ay(h))}Ai.STAT_EVENT="statevent";function ly(l,h){ze.call(this,Ai.STAT_EVENT,l),this.stat=h}R(ly,ze);function St(l){const h=Iu();Tt(h,new ly(h,l))}Ai.Ma="timingevent";function uy(l,h){ze.call(this,Ai.Ma,l),this.size=h}R(uy,ze);function oa(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function aa(){this.g=!0}aa.prototype.xa=function(){this.g=!1};function JP(l,h,p,g,C,O){l.info(function(){if(l.g)if(O)for(var j="",pe=O.split("&"),st=0;st<pe.length;st++){var ae=pe[st].split("=");if(1<ae.length){var ft=ae[0];ae=ae[1];var pt=ft.split("_");j=2<=pt.length&&pt[1]=="type"?j+(ft+"="+ae+"&"):j+(ft+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+p+`
`+j})}function XP(l,h,p,g,C,O,j){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+p+`
`+O+" "+j})}function Ss(l,h,p,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+ek(l,p)+(g?" "+g:"")})}function ZP(l,h){l.info(function(){return"TIMEOUT: "+h})}aa.prototype.info=function(){};function ek(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<C.length;j++)C[j]=""}}}}return Vd(p)}catch{return h}}var Eu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fd;function Tu(){}R(Tu,Od),Tu.prototype.g=function(){return new XMLHttpRequest},Tu.prototype.i=function(){return{}},Fd=new Tu;function kr(l,h,p,g){this.j=l,this.i=h,this.l=p,this.R=g||1,this.U=new ra(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hy}function hy(){this.i=null,this.g="",this.h=!1}var dy={},Ud={};function Bd(l,h,p){l.L=1,l.v=Pu(Jn(h)),l.m=p,l.P=!0,fy(l,null)}function fy(l,h){l.F=Date.now(),Su(l),l.A=Jn(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),Py(p.i,"t",g),l.C=0,p=l.j.J,l.h=new hy,l.g=Wy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new HP(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,g=l.ca;var C="readystatechange";Array.isArray(C)||(C&&(ny[0]=C.toString()),C=ny);for(var O=0;O<C.length;O++){var j=Y_(p,C[O],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),sa(),JP(l.i,l.u,l.A,l.l,l.R,l.m)}kr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Xn(l)==3?h.j():this.Y(l)},kr.prototype.Y=function(l){try{if(l==this.g)e:{const pt=Xn(this.g);var h=this.g.Ba();const Ps=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Vy(this.g)))){this.J||pt!=4||h==7||(h==8||0>=Ps?sa(3):sa(2)),zd(this);var p=this.g.Z();this.X=p;t:if(py(this)){var g=Vy(this.g);l="";var C=g.length,O=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ri(this),la(this);var j="";break t}this.h.i=new a.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(O&&h==C-1)});g.length=0,this.h.g+=l,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=p==200,XP(this.i,this.u,this.A,this.l,this.R,pt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,st=this.g;if((pe=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var ae=pe;break t}}ae=null}if(p=ae)Ss(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jd(this,p);else{this.o=!1,this.s=3,St(12),Ri(this),la(this);break e}}if(this.P){p=!0;let _n;for(;!this.J&&this.C<j.length;)if(_n=tk(this,j),_n==Ud){pt==4&&(this.s=4,St(14),p=!1),Ss(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==dy){this.s=4,St(15),Ss(this.i,this.l,j,"[Invalid Chunk]"),p=!1;break}else Ss(this.i,this.l,_n,null),jd(this,_n);if(py(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||j.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)Ss(this.i,this.l,j,"[Invalid Chunked Response]"),Ri(this),la(this);else if(0<j.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Hd(ft),ft.M=!0,St(11))}}else Ss(this.i,this.l,j,null),jd(this,j);pt==4&&Ri(this),this.o&&!this.J&&(pt==4?zy(this.j,this):(this.o=!1,Su(this)))}else yk(this.g),p==400&&0<j.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ri(this),la(this)}}}catch{}finally{}};function py(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function tk(l,h){var p=l.C,g=h.indexOf(`
`,p);return g==-1?Ud:(p=Number(h.substring(p,g)),isNaN(p)?dy:(g+=1,g+p>h.length?Ud:(h=h.slice(g,g+p),l.C=g+p,h)))}kr.prototype.cancel=function(){this.J=!0,Ri(this)};function Su(l){l.S=Date.now()+l.I,my(l,l.I)}function my(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=oa(m(l.ba,l),h)}function zd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}kr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ZP(this.i,this.A),this.L!=2&&(sa(),St(17)),Ri(this),this.s=2,la(this)):my(this,this.S-l)};function la(l){l.j.G==0||l.J||zy(l.j,l)}function Ri(l){zd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,ry(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function jd(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||$d(p.h,l))){if(!l.K&&$d(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)xu(p),Nu(p);else break e;Kd(p),St(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=oa(m(p.Za,p),6e3));if(1>=yy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ki(p,11)}else if((l.K||p.g==l)&&xu(p),!v(h))for(C=p.Da.g.parse(h),h=0;h<C.length;h++){let ae=C[h];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const ft=ae[3];ft!=null&&(p.la=ft,p.j.info("VER="+p.la));const pt=ae[4];pt!=null&&(p.Aa=pt,p.j.info("SVER="+p.Aa));const Ps=ae[5];Ps!=null&&typeof Ps=="number"&&0<Ps&&(g=1.5*Ps,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const _n=l.g;if(_n){const Ou=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ou){var O=g.h;O.g||Ou.indexOf("spdy")==-1&&Ou.indexOf("quic")==-1&&Ou.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(qd(O,O.h),O.h=null))}if(g.D){const Qd=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Qd&&(g.ya=Qd,_e(g.I,g.D,Qd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var j=l;if(g.qa=qy(g,g.J?g.ia:null,g.W),j.K){vy(g.h,j);var pe=j,st=g.L;st&&(pe.I=st),pe.B&&(zd(pe),Su(pe)),g.g=j}else Uy(g);0<p.i.length&&Du(p)}else ae[0]!="stop"&&ae[0]!="close"||ki(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?ki(p,7):Gd(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}sa(4)}catch{}}var nk=class{constructor(l,h){this.g=l,this.map=h}};function gy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _y(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function yy(l){return l.h?1:l.g?l.g.size:0}function $d(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function qd(l,h){l.g?l.g.add(h):l.h=h}function vy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}gy.prototype.cancel=function(){if(this.i=wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function wy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function rk(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,g=0;g<p;g++)h.push(l[g]);return h}h=[],p=0;for(g in l)h[p++]=l[g];return h}function ik(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const g in l)h[p++]=g;return h}}}function Iy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=ik(l),g=rk(l),C=g.length,O=0;O<C;O++)h.call(void 0,g[O],p&&p[O],l)}var Ey=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sk(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),C=null;if(0<=g){var O=l[p].substring(0,g);C=l[p].substring(g+1)}else O=l[p];h(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Pi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Pi){this.h=l.h,Au(this,l.j),this.o=l.o,this.g=l.g,Ru(this,l.s),this.l=l.l;var h=l.i,p=new ha;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Ty(this,p),this.m=l.m}else l&&(h=String(l).match(Ey))?(this.h=!1,Au(this,h[1]||"",!0),this.o=ua(h[2]||""),this.g=ua(h[3]||"",!0),Ru(this,h[4]),this.l=ua(h[5]||"",!0),Ty(this,h[6]||"",!0),this.m=ua(h[7]||"")):(this.h=!1,this.i=new ha(null,this.h))}Pi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ca(h,Sy,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ca(h,Sy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ca(p,p.charAt(0)=="/"?lk:ak,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ca(p,ck)),l.join("")};function Jn(l){return new Pi(l)}function Au(l,h,p){l.j=p?ua(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ru(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Ty(l,h,p){h instanceof ha?(l.i=h,hk(l.i,l.h)):(p||(h=ca(h,uk)),l.i=new ha(h,l.h))}function _e(l,h,p){l.i.set(h,p)}function Pu(l){return _e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ua(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ca(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,ok),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ok(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Sy=/[#\/\?@]/g,ak=/[#\?:]/g,lk=/[#\?]/g,uk=/[#\?@]/g,ck=/#/g;function ha(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Cr(l){l.g||(l.g=new Map,l.h=0,l.i&&sk(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=ha.prototype,n.add=function(l,h){Cr(this),this.i=null,l=As(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Ay(l,h){Cr(l),h=As(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Ry(l,h){return Cr(l),h=As(l,h),l.g.has(h)}n.forEach=function(l,h){Cr(this),this.g.forEach(function(p,g){p.forEach(function(C){l.call(h,C,g,this)},this)},this)},n.na=function(){Cr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const C=l[g];for(let O=0;O<C.length;O++)p.push(h[g])}return p},n.V=function(l){Cr(this);let h=[];if(typeof l=="string")Ry(this,l)&&(h=h.concat(this.g.get(As(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},n.set=function(l,h){return Cr(this),this.i=null,l=As(this,l),Ry(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},n.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Py(l,h,p){Ay(l,h),0<p.length&&(l.i=null,l.g.set(As(l,h),k(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const O=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var C=O;j[g]!==""&&(C+="="+encodeURIComponent(String(j[g]))),l.push(C)}}return this.i=l.join("&")};function As(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function hk(l,h){h&&!l.j&&(Cr(l),l.i=null,l.g.forEach(function(p,g){var C=g.toLowerCase();g!=C&&(Ay(this,g),Py(this,C,p))},l)),l.j=h}function dk(l,h){const p=new aa;if(a.Image){const g=new Image;g.onload=y(br,p,"TestLoadImage: loaded",!0,h,g),g.onerror=y(br,p,"TestLoadImage: error",!1,h,g),g.onabort=y(br,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(br,p,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function fk(l,h){const p=new aa,g=new AbortController,C=setTimeout(()=>{g.abort(),br(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(O=>{clearTimeout(C),O.ok?br(p,"TestPingServer: ok",!0,h):br(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),br(p,"TestPingServer: error",!1,h)})}function br(l,h,p,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(p)}catch{}}function pk(){this.g=new YP}function mk(l,h,p){const g=p||"";try{Iy(l,function(C,O){let j=C;c(C)&&(j=Vd(C)),h.push(g+O+"="+encodeURIComponent(j))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function ku(l){this.l=l.Ub||null,this.j=l.eb||!1}R(ku,Od),ku.prototype.g=function(){return new Cu(this.l,this.j)},ku.prototype.i=function(l){return function(){return l}}({});function Cu(l,h){dt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Cu,dt),n=Cu.prototype,n.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,fa(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,da(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,fa(this)),this.g&&(this.readyState=3,fa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ky(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ky(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?da(this):fa(this),this.readyState==3&&ky(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,da(this))},n.Qa=function(l){this.g&&(this.response=l,da(this))},n.ga=function(){this.g&&da(this)};function da(l){l.readyState=4,l.l=null,l.j=null,l.v=null,fa(l)}n.setRequestHeader=function(l,h){this.u.append(l,h)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function fa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Cy(l){let h="";return F(l,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Wd(l,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Cy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):_e(l,h,p))}function Ve(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ve,dt);var gk=/^https?$/i,_k=["POST","PUT"];n=Ve.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fd.g(),this.v=this.o?iy(this.o):iy(Fd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){by(this,O);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)p.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())p.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),C=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(_k,h,void 0))||g||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of p)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xy(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){by(this,O)}};function by(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Ny(l),bu(l)}function Ny(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),bu(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bu(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Dy(this):this.bb())},n.bb=function(){Dy(this)};function Dy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Xn(l)!=4||l.Z()!=2)){if(l.u&&Xn(l)==4)ey(l.Ea,0,l);else if(Tt(l,"readystatechange"),Xn(l)==4){l.h=!1;try{const j=l.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=j===0){var C=String(l.D).match(Ey)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),g=!gk.test(C?C.toLowerCase():"")}p=g}if(p)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var O=2<Xn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",Ny(l)}}finally{bu(l)}}}}function bu(l,h){if(l.g){xy(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Tt(l,"ready");try{p.onreadystatechange=g}catch{}}}function xy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Xn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),QP(h)}};function Vy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function yk(l){const h={};l=(l.g&&2<=Xn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(v(l[g]))continue;var p=P(l[g]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[C]||[];h[C]=O,O.push(p)}w(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pa(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Oy(l){this.Aa=0,this.i=[],this.j=new aa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pa("baseRetryDelayMs",5e3,l),this.cb=pa("retryDelaySeedMs",1e4,l),this.Wa=pa("forwardChannelMaxRetries",2,l),this.wa=pa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new gy(l&&l.concurrentRequestLimit),this.Da=new pk,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oy.prototype,n.la=8,n.G=1,n.connect=function(l,h,p,g){St(0),this.W=l,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=qy(this,null,this.W),Du(this)};function Gd(l){if(Ly(l),l.G==3){var h=l.U++,p=Jn(l.I);if(_e(p,"SID",l.K),_e(p,"RID",h),_e(p,"TYPE","terminate"),ma(l,p),h=new kr(l,l.j,h),h.L=2,h.v=Pu(Jn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Wy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Su(h)}$y(l)}function Nu(l){l.g&&(Hd(l),l.g.cancel(),l.g=null)}function Ly(l){Nu(l),l.u&&(a.clearTimeout(l.u),l.u=null),xu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Du(l){if(!_y(l.h)&&!l.s){l.s=!0;var h=l.Ga;Gn||ee(),W||(Gn(),W=!0),J.add(h,l),l.B=0}}function vk(l,h){return yy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=oa(m(l.Ga,l,h),jy(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const C=new kr(this,this.j,l);let O=this.o;if(this.S&&(O?(O=_(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Fy(this,C,h),p=Jn(this.I),_e(p,"RID",l),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),ma(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(Cy(O)))+"&"+h:this.m&&Wd(p,this.m,O)),qd(this.h,C),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",h),_e(p,"SID","null"),C.T=!0,Bd(C,p,null)):Bd(C,p,h),this.G=2}}else this.G==3&&(l?My(this,l):this.i.length==0||_y(this.h)||My(this))};function My(l,h){var p;h?p=h.l:p=l.U++;const g=Jn(l.I);_e(g,"SID",l.K),_e(g,"RID",p),_e(g,"AID",l.T),ma(l,g),l.m&&l.o&&Wd(g,l.m,l.o),p=new kr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Fy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),qd(l.h,p),Bd(p,g,h)}function ma(l,h){l.H&&F(l.H,function(p,g){_e(h,g,p)}),l.l&&Iy({},function(p,g){_e(h,g,p)})}function Fy(l,h,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var C=l.i;let O=-1;for(;;){const j=["count="+p];O==-1?0<p?(O=C[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let pe=!0;for(let st=0;st<p;st++){let ae=C[st].g;const ft=C[st].map;if(ae-=O,0>ae)O=Math.max(0,C[st].g-100),pe=!1;else try{mk(ft,j,"req"+ae+"_")}catch{g&&g(ft)}}if(pe){g=j.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,g}function Uy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Gn||ee(),W||(Gn(),W=!0),J.add(h,l),l.v=0}}function Kd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=oa(m(l.Fa,l),jy(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,By(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=oa(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Nu(this),By(this))};function Hd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function By(l){l.g=new kr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Jn(l.qa);_e(h,"RID","rpc"),_e(h,"SID",l.K),_e(h,"AID",l.T),_e(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&_e(h,"TO",l.ja),_e(h,"TYPE","xmlhttp"),ma(l,h),l.m&&l.o&&Wd(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Pu(Jn(h)),p.m=null,p.P=!0,fy(p,l)}n.Za=function(){this.C!=null&&(this.C=null,Nu(this),Kd(this),St(19))};function xu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function zy(l,h){var p=null;if(l.g==h){xu(l),Hd(l),l.g=null;var g=2}else if($d(l.h,h))p=h.D,vy(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var C=l.B;g=Iu(),Tt(g,new uy(g,p)),Du(l)}else Uy(l);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&vk(l,h)||g==2&&Kd(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),C){case 1:ki(l,5);break;case 4:ki(l,10);break;case 3:ki(l,6);break;default:ki(l,2)}}}function jy(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function ki(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),g=l.Xa;const C=!g;g=new Pi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Au(g,"https"),Pu(g),C?dk(g.toString(),p):fk(g.toString(),p)}else St(2);l.G=0,l.l&&l.l.sa(h),$y(l),Ly(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function $y(l){if(l.G=0,l.ka=[],l.l){const h=wy(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ka,h),x(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function qy(l,h,p){var g=p instanceof Pi?Jn(p):new Pi(p);if(g.g!="")h&&(g.g=h+"."+g.g),Ru(g,g.s);else{var C=a.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var O=new Pi(null);g&&Au(O,g),h&&(O.g=h),C&&Ru(O,C),p&&(O.l=p),g=O}return p=l.D,h=l.ya,p&&h&&_e(g,p,h),_e(g,"VER",l.la),ma(l,g),g}function Wy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ve(new ku({eb:p})):new Ve(l.pa),h.Ha(l.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gy(){}n=Gy.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vu(){}Vu.prototype.g=function(l,h){return new Gt(l,h)};function Gt(l,h){dt.call(this),this.g=new Oy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!v(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Rs(this)}R(Gt,dt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Gd(this.g)},Gt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Vd(l),l=p);h.i.push(new nk(h.Ya++,l)),h.G==3&&Du(h)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Gd(this.g),delete this.g,Gt.aa.N.call(this)};function Ky(l){Ld.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(Ky,Ld);function Hy(){Md.call(this),this.status=1}R(Hy,Md);function Rs(l){this.g=l}R(Rs,Gy),Rs.prototype.ua=function(){Tt(this.g,"a")},Rs.prototype.ta=function(l){Tt(this.g,new Ky(l))},Rs.prototype.sa=function(l){Tt(this.g,new Hy)},Rs.prototype.ra=function(){Tt(this.g,"b")},Vu.prototype.createWebChannel=Vu.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,J0=function(){return new Vu},Y0=function(){return Iu()},Q0=Ai,Fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Eu.NO_ERROR=0,Eu.TIMEOUT=8,Eu.HTTP_ERROR=6,Ic=Eu,cy.COMPLETE="complete",H0=cy,sy.EventType=ia,ia.OPEN="a",ia.CLOSE="b",ia.ERROR="c",ia.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Fa=sy,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,K0=Ve}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});const pw="@firebase/firestore";/**
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
 */let tt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let qo="10.14.0";/**
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
 */const oi=new zh("@firebase/firestore");function Os(){return oi.logLevel}function T1(n){oi.setLogLevel(n)}function M(n,...e){if(oi.logLevel<=te.DEBUG){const t=e.map(yg);oi.debug(`Firestore (${qo}): ${n}`,...t)}}function $e(n,...e){if(oi.logLevel<=te.ERROR){const t=e.map(yg);oi.error(`Firestore (${qo}): ${n}`,...t)}}function jn(n,...e){if(oi.logLevel<=te.WARN){const t=e.map(yg);oi.warn(`Firestore (${qo}): ${n}`,...t)}}function yg(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function G(n="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+n;throw $e(e),new Error(e)}function Q(n,e){n||G()}function S1(n,e){n||G()}function q(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class X0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class R1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class P1{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new X0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new tt(e)}}class k1{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class C1{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new k1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new b1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function D1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Z0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=D1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function To(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function eS(n){return n+"\0"}/**
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
 */class Re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Re(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Re(0,0))}static max(){return new Y(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kl{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kl?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends kl{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new re(t)}static emptyPath(){return new re([])}}const x1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends kl{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return x1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(re.fromString(e))}static fromName(e){return new $(re.fromString(e).popFirst(5))}static empty(){return new $(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new re(e.slice()))}}/**
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
 */class oh{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Up(n){return n.fields.find(e=>e.kind===2)}function xi(n){return n.fields.filter(e=>e.kind!==2)}oh.UNKNOWN_ID=-1;class Ec{constructor(e,t){this.fieldPath=e,this.kind=t}}class Cl{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Cl(0,en.min())}}function tS(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new en(i,$.empty(),e)}function nS(n){return new en(n.readTime,n.key,-1)}class en{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new en(Y.min(),$.empty(),-1)}static max(){return new en(Y.max(),$.empty(),-1)}}function vg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const rS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yi(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==rS)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class $h{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ct,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Xa(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=wg(r.target.error);this.V.reject(new Xa(e,i))}}static open(e,t,r,i){try{return new $h(t,e.transaction(i,r))}catch(s){throw new Xa(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new O1(t)}}class Un{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Un.S(De())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),Vi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Al())return!1;if(Un.v())return!0;const e=De(),t=Un.S(e),r=0<t&&t<10,i=sS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Xa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new L(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Xa(e,o))},i.onupgradeneeded=s=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=$h.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),N.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function sS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class V1{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Vi(this.B.delete())}}class Xa extends L{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vi(n){return n.name==="IndexedDbTransactionError"}class O1{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(M("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Vi(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),Vi(this.store.add(e))}get(e){return Vi(this.store.get(e)).next(t=>(t===void 0&&(t=null),M("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),Vi(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),Vi(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new N((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new N((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new N((r,i)=>{t.onerror=s=>{const o=wg(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new N((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new V1(a),c=t(a.primaryKey,a.value,u);if(c instanceof N){const d=c.catch(f=>(u.done(),N.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>N.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Vi(n){return new N((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=wg(r.target.error);t(i)}})}let mw=!1;function wg(n){const e=Un.S(De());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mw||(mw=!0,setTimeout(()=>{throw r},0)),r}}return n}class L1{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){M("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{M("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){vi(t)?M("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await yi(t)}await this.X(6e4)})}}class M1{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return N.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return M("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(M("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=nS(s);vg(o,r)>0&&(r=o)}),new en(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Bt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bt.oe=-1;function Xl(n){return n==null}function bl(n){return n===0&&1/n==-1/0}function oS(n){return typeof n=="number"&&Number.isInteger(n)&&!bl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Nt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gw(e)),e=F1(n.get(t),e);return gw(e)}function F1(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function gw(n){return n+""}function Vn(n){const e=n.length;if(Q(e>=2),e===2)return Q(n.charAt(0)===""&&n.charAt(1)===""),re.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&G(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:G()}s=o+2}return new re(r)}/**
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
 */const _w=["userId","batchId"];/**
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
 */function Tc(n,e){return[n,Nt(e)]}function aS(n,e,t){return[n,Nt(e),t]}const U1={},B1=["prefixPath","collectionGroup","readTime","documentId"],z1=["prefixPath","collectionGroup","documentId"],j1=["collectionGroup","readTime","prefixPath","documentId"],$1=["canonicalId","targetId"],q1=["targetId","path"],W1=["path","targetId"],G1=["collectionId","parent"],K1=["indexId","uid"],H1=["uid","sequenceNumber"],Q1=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Y1=["indexId","uid","orderedDocumentKey"],J1=["userId","collectionPath","documentId"],X1=["userId","collectionPath","largestBatchId"],Z1=["userId","collectionGroup","largestBatchId"],lS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eD=[...lS,"documentOverlays"],uS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],cS=uS,Ig=[...cS,"indexConfiguration","indexState","indexEntries"],tD=Ig,nD=[...Ig,"globals"];/**
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
 */class Bp extends iS{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Xe(n,e){const t=q(n);return Un.F(t._e,e)}/**
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
 */function yw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _s(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ge{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ec(this.root,e,this.comparator,!0)}}class ec{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new at(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,i,s){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vw(this.data.getIterator())}getIteratorFrom(e){return new vw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class vw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Cs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new zt([])}unionWith(e){let t=new de(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new zt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class dS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function rD(){return typeof atob<"u"}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dS("Invalid base64 string: "+s):s}}(e);return new Me(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const iD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(n){if(Q(!!n),typeof n=="string"){let e=0;const t=iD.exec(n);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ai(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
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
 */function qh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Eg(n){const e=n.mapValue.fields.__previous_value__;return qh(e)?Eg(e):e}function Nl(n){const e=_r(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class sD{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class li{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Sc={nullValue:"NULL_VALUE"};function ns(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qh(n)?4:fS(n)?9007199254740991:Wh(n)?10:11:G()}function $n(n,e){if(n===e)return!0;const t=ns(n);if(t!==ns(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nl(n).isEqual(Nl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),a=_r(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ai(i.bytesValue).isEqual(ai(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ee(i.geoPointValue.latitude)===Ee(s.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ee(i.integerValue)===Ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ee(i.doubleValue),a=Ee(s.doubleValue);return o===a?bl(o)===bl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return To(n.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(yw(o)!==yw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!$n(o[u],a[u])))return!1;return!0}(n,e);default:return G()}}function Dl(n,e){return(n.values||[]).find(t=>$n(t,e))!==void 0}function ui(n,e){if(n===e)return 0;const t=ns(n),r=ns(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ee(s.integerValue||s.doubleValue),u=Ee(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return ww(n.timestampValue,e.timestampValue);case 4:return ww(Nl(n),Nl(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(s,o){const a=ai(s),u=ai(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=X(a[c],u[c]);if(d!==0)return d}return X(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(Ee(s.latitude),Ee(o.latitude));return a!==0?a:X(Ee(s.longitude),Ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Iw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=X(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Iw(y,R)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===qr.mapValue&&o===qr.mapValue)return 0;if(s===qr.mapValue)return 1;if(o===qr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=X(u[f],d[f]);if(m!==0)return m;const y=ui(a[u[f]],c[d[f]]);if(y!==0)return y}return X(u.length,d.length)}(n.mapValue,e.mapValue);default:throw G()}}function ww(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=_r(n),r=_r(e),i=X(t.seconds,r.seconds);return i!==0?i:X(t.nanos,r.nanos)}function Iw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=ui(t[i],r[i]);if(s)return s}return X(t.length,r.length)}function So(n){return zp(n)}function zp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=_r(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ai(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=zp(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zp(t.fields[o])}`;return i+"}"}(n.mapValue):G()}function rs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jp(n){return!!n&&"integerValue"in n}function xl(n){return!!n&&"arrayValue"in n}function Ew(n){return!!n&&"nullValue"in n}function Tw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ac(n){return!!n&&"mapValue"in n}function Wh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Za(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _s(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Za(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Za(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const pS={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function oD(n){return"nullValue"in n?Sc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?rs(li.empty(),$.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Wh(n)?pS:{mapValue:{}}:G()}function aD(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?rs(li.empty(),$.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?pS:"mapValue"in n?Wh(n)?{mapValue:{}}:qr:G()}function Sw(n,e){const t=ui(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Aw(n,e){const t=ui(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ac(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(t)}setAll(e){let t=Se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Za(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ac(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){_s(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt(Za(this.value))}}function mS(n){const e=[];return _s(n.fields,(t,r)=>{const i=new Se([t]);if(Ac(r)){const s=mS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
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
 */class ve{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ve(e,0,Y.min(),Y.min(),Y.min(),lt.empty(),0)}static newFoundDocument(e,t,r,i){return new ve(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new ve(e,2,t,Y.min(),Y.min(),lt.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,Y.min(),Y.min(),lt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ci{constructor(e,t){this.position=e,this.inclusive=t}}function Rw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),t.key):r=ui(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$n(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vl{constructor(e,t="asc"){this.field=e,this.dir=t}}function lD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class gS{}class ie extends gS{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new uD(e,t,r):t==="array-contains"?new dD(e,r):t==="in"?new ES(e,r):t==="not-in"?new fD(e,r):t==="array-contains-any"?new pD(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cD(e,r):new hD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ui(t,this.value)):t!==null&&ns(this.value)===ns(t)&&this.matchesComparison(ui(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ce extends gS{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ce(e,t)}matches(e){return Ao(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ao(n){return n.op==="and"}function $p(n){return n.op==="or"}function Tg(n){return _S(n)&&Ao(n)}function _S(n){for(const e of n.filters)if(e instanceof ce)return!1;return!0}function qp(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+So(n.value);if(Tg(n))return n.filters.map(e=>qp(e)).join(",");{const e=n.filters.map(t=>qp(t)).join(",");return`${n.op}(${e})`}}function yS(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(n,e):n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yS(o,i.filters[a]),!0):!1}(n,e):void G()}function vS(n,e){const t=n.filters.concat(e);return ce.create(t,n.op)}function wS(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(n):n instanceof ce?function(t){return t.op.toString()+" {"+t.getFilters().map(wS).join(" ,")+"}"}(n):"Filter"}class uD extends ie{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class cD extends ie{constructor(e,t){super(e,"in",t),this.keys=IS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class hD extends ie{constructor(e,t){super(e,"not-in",t),this.keys=IS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function IS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class dD extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xl(t)&&Dl(t.arrayValue,this.value)}}class ES extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Dl(this.value.arrayValue,t)}}class fD extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Dl(this.value.arrayValue,t)}}class pD extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Dl(this.value.arrayValue,r))}}/**
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
 */class mD{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Wp(n,e=null,t=[],r=[],i=null,s=null,o=null){return new mD(n,e,t,r,i,s,o)}function is(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>qp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>So(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>So(r)).join(",")),e.ue=t}return e.ue}function Zl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pw(n.startAt,e.startAt)&&Pw(n.endAt,e.endAt)}function ah(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function lh(n,e){return n.filters.filter(t=>t instanceof ie&&t.field.isEqual(e))}function kw(n,e,t){let r=Sc,i=!0;for(const s of lh(n,e)){let o=Sc,a=!0;switch(s.op){case"<":case"<=":o=oD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Sc}Sw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Sw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Cw(n,e,t){let r=qr,i=!0;for(const s of lh(n,e)){let o=qr,a=!0;switch(s.op){case">=":case">":o=aD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=qr}Aw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Aw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Er{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function TS(n,e,t,r,i,s,o,a){return new Er(n,e,t,r,i,s,o,a)}function Wo(n){return new Er(n)}function bw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sg(n){return n.collectionGroup!==null}function so(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new de(Se.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vl(s,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new Vl(Se.keyField(),r))}return e.ce}function Dt(n){const e=q(n);return e.le||(e.le=gD(e,so(n))),e.le}function gD(n,e){if(n.limitType==="F")return Wp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vl(i.field,s)});const t=n.endAt?new ci(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ci(n.startAt.position,n.startAt.inclusive):null;return Wp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Gp(n,e){const t=n.filters.concat([e]);return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function uh(n,e,t){return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function eu(n,e){return Zl(Dt(n),Dt(e))&&n.limitType===e.limitType}function SS(n){return`${is(Dt(n))}|lt:${n.limitType}`}function Ls(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>wS(i)).join(", ")}]`),Xl(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>So(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>So(i)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function tu(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of so(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Rw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,so(r),i)||r.endAt&&!function(o,a,u){const c=Rw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,so(r),i))}(n,e)}function AS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function RS(n){return(e,t)=>{let r=!1;for(const i of so(n)){const s=_D(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _D(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ui(u,c):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class wi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hS(this.inner)}size(){return this.innerSize}}/**
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
 */const yD=new ge($.comparator);function jt(){return yD}const PS=new ge($.comparator);function Ua(...n){let e=PS;for(const t of n)e=e.insert(t.key,t);return e}function kS(n){let e=PS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function On(){return el()}function CS(){return el()}function el(){return new wi(n=>n.toString(),(n,e)=>n.isEqual(e))}const vD=new ge($.comparator),wD=new de($.comparator);function Z(...n){let e=wD;for(const t of n)e=e.add(t);return e}const ID=new de(X);function Ag(){return ID}/**
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
 */function Rg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bl(e)?"-0":e}}function bS(n){return{integerValue:""+n}}function NS(n,e){return oS(e)?bS(e):Rg(n,e)}/**
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
 */class Gh{constructor(){this._=void 0}}function ED(n,e,t){return n instanceof Ro?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qh(s)&&(s=Eg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof ss?xS(n,e):n instanceof os?VS(n,e):function(i,s){const o=DS(i,s),a=Nw(o)+Nw(i.Pe);return jp(o)&&jp(i.Pe)?bS(a):Rg(i.serializer,a)}(n,e)}function TD(n,e,t){return n instanceof ss?xS(n,e):n instanceof os?VS(n,e):t}function DS(n,e){return n instanceof Po?function(r){return jp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ro extends Gh{}class ss extends Gh{constructor(e){super(),this.elements=e}}function xS(n,e){const t=OS(e);for(const r of n.elements)t.some(i=>$n(i,r))||t.push(r);return{arrayValue:{values:t}}}class os extends Gh{constructor(e){super(),this.elements=e}}function VS(n,e){let t=OS(e);for(const r of n.elements)t=t.filter(i=>!$n(i,r));return{arrayValue:{values:t}}}class Po extends Gh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Nw(n){return Ee(n.integerValue||n.doubleValue)}function OS(n){return xl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class nu{constructor(e,t){this.field=e,this.transform=t}}function SD(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ss&&i instanceof ss||r instanceof os&&i instanceof os?To(r.elements,i.elements,$n):r instanceof Po&&i instanceof Po?$n(r.Pe,i.Pe):r instanceof Ro&&i instanceof Ro}(n.transform,e.transform)}class AD{constructor(e,t){this.version=e,this.transformResults=t}}class Ae{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kh{}function LS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ko(n.key,Ae.none()):new Go(n.key,n.data,Ae.none());{const t=n.data,r=lt.empty();let i=new de(Se.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Tr(n.key,r,new zt(i.toArray()),Ae.none())}}function RD(n,e,t){n instanceof Go?function(i,s,o){const a=i.value.clone(),u=xw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Tr?function(i,s,o){if(!Rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=xw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(MS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function tl(n,e,t,r){return n instanceof Go?function(s,o,a,u){if(!Rc(s.precondition,o))return a;const c=s.value.clone(),d=Vw(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Tr?function(s,o,a,u){if(!Rc(s.precondition,o))return a;const c=Vw(s.fieldTransforms,u,o),d=o.data;return d.setAll(MS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return Rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function PD(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=DS(r.transform,i||null);s!=null&&(t===null&&(t=lt.empty()),t.set(r.field,s))}return t||null}function Dw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&To(r,i,(s,o)=>SD(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Go extends Kh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tr extends Kh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function MS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function xw(n,e,t){const r=new Map;Q(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,TD(o,a,t[i]))}return r}function Vw(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,ED(s,o,e))}return r}class Ko extends Kh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pg extends Kh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RD(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=tl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=tl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=CS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=LS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(t,r)=>Dw(t,r))&&To(this.baseMutations,e.baseMutations,(t,r)=>Dw(t,r))}}class Cg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length);let i=function(){return vD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cg(e,t,r,i)}}/**
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
 */class bg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ge,se;function FS(n){switch(n){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function US(n){if(n===void 0)return $e("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ge.OK:return V.OK;case Ge.CANCELLED:return V.CANCELLED;case Ge.UNKNOWN:return V.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return V.INTERNAL;case Ge.UNAVAILABLE:return V.UNAVAILABLE;case Ge.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ge.NOT_FOUND:return V.NOT_FOUND;case Ge.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ge.ABORTED:return V.ABORTED;case Ge.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ge.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(se=Ge||(Ge={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function BS(){return new TextEncoder}/**
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
 */const CD=new Ki([4294967295,4294967295],0);function Ow(n){const e=BS().encode(n),t=new G0;return t.update(e),new Uint8Array(t.digest())}function Lw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ki([t,r],0),new Ki([i,s],0)]}class Ng{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ba(`Invalid padding: ${t}`);if(r<0)throw new Ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ki.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Ki.fromNumber(r)));return i.compare(CD)===1&&(i=new Ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Ow(e),[r,i]=Lw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ng(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Ow(e),[r,i]=Lw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ru{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,iu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ru(Y.min(),i,new ge(X),jt(),Z())}}class iu{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new iu(r,t,Z(),Z(),Z())}}/**
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
 */class Pc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class zS{constructor(e,t){this.targetId=e,this.me=t}}class jS{constructor(e,t,r=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Mw{constructor(){this.fe=0,this.ge=Uw(),this.pe=Me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G()}}),new iu(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Uw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bD{constructor(e){this.Le=e,this.Be=new Map,this.ke=jt(),this.qe=Fw(),this.Qe=new ge(X)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(ah(s))if(r===0){const o=new $(s.path);this.Ue(t,o,ve.newNoDocument(o,Y.min()))}else Q(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=ai(r).toUint8Array()}catch(u){if(u instanceof dS)return jn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ng(o,i,s)}catch(u){return jn(u instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ah(a.target)){const u=new $(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ve.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ru(e,t,this.Qe,this.ke,r);return this.ke=jt(),this.qe=Fw(),this.Qe=new ge(X),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Mw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new de(X),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Mw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Fw(){return new ge($.comparator)}function Uw(){return new ge($.comparator)}const ND={asc:"ASCENDING",desc:"DESCENDING"},DD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xD={and:"AND",or:"OR"};class VD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Kp(n,e){return n.useProto3Json||Xl(e)?e:{value:e}}function ko(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $S(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function OD(n,e){return ko(n,e.toTimestamp())}function qe(n){return Q(!!n),Y.fromTimestamp(function(t){const r=_r(t);return new Re(r.seconds,r.nanos)}(n))}function Dg(n,e){return Hp(n,e).canonicalString()}function Hp(n,e){const t=function(i){return new re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function qS(n){const e=re.fromString(n);return Q(eA(e)),e}function Ol(n,e){return Dg(n.databaseId,e.path)}function Bn(n,e){const t=qS(e);if(t.get(1)!==n.databaseId.projectId)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(KS(t))}function WS(n,e){return Dg(n.databaseId,e)}function GS(n){const e=qS(n);return e.length===4?re.emptyPath():KS(e)}function Qp(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function KS(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Bw(n,e,t){return{name:Ol(n,e),fields:t.value.mapValue.fields}}function HS(n,e,t){const r=Bn(n,e.name),i=qe(e.updateTime),s=e.createTime?qe(e.createTime):Y.min(),o=new lt({mapValue:{fields:e.fields}}),a=ve.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function LD(n,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;const s=Bn(r,i.found.name),o=qe(i.found.updateTime),a=i.found.createTime?qe(i.found.createTime):Y.min(),u=new lt({mapValue:{fields:i.found.fields}});return ve.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);const s=Bn(r,i.missing),o=qe(i.readTime);return ve.newNoDocument(s,o)}(n,e):G()}function MD(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Q(d===void 0||typeof d=="string"),Me.fromBase64String(d||"")):(Q(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Me.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:US(c.code);return new L(d,c.message||"")}(o);t=new jS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bn(n,r.document.name),s=qe(r.document.updateTime),o=r.document.createTime?qe(r.document.createTime):Y.min(),a=new lt({mapValue:{fields:r.document.fields}}),u=ve.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];t=new Pc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bn(n,r.document),s=r.readTime?qe(r.readTime):Y.min(),o=ve.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Pc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bn(n,r.document),s=r.removedTargetIds||[];t=new Pc([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kD(i,s),a=r.targetId;t=new zS(a,o)}}return t}function Ll(n,e){let t;if(e instanceof Go)t={update:Bw(n,e.key,e.value)};else if(e instanceof Ko)t={delete:Ol(n,e.key)};else if(e instanceof Tr)t={update:Bw(n,e.key,e.data),updateMask:$D(e.fieldMask)};else{if(!(e instanceof Pg))return G();t={verify:Ol(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ro)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ss)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof os)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Po)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(n,e.precondition)),t}function Yp(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ae.updateTime(qe(s.updateTime)):s.exists!==void 0?Ae.exists(s.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),u=new Ro;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new ss(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new os(d)}else"increment"in a?u=new Po(o,a.increment):G();const c=Se.fromServerFormat(a.fieldPath);return new nu(c,u)}(n,i)):[];if(e.update){e.update.name;const i=Bn(n,e.update.name),s=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new zt(c.map(d=>Se.fromServerFormat(d)))}(e.updateMask);return new Tr(i,s,o,t,r)}return new Go(i,s,t,r)}if(e.delete){const i=Bn(n,e.delete);return new Ko(i,t)}if(e.verify){const i=Bn(n,e.verify);return new Pg(i,t)}return G()}function FD(n,e){return n&&n.length>0?(Q(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?qe(i.updateTime):qe(s);return o.isEqual(Y.min())&&(o=qe(s)),new AD(o,i.transformResults||[])}(t,e))):[]}function QS(n,e){return{documents:[WS(n,e.path)]}}function YS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=WS(n,i);const s=function(c){if(c.length!==0)return ZS(ce.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ms(m.field),direction:BD(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Kp(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function JS(n){let e=GS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const m=XS(f);return m instanceof ce&&Tg(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(R){return new Vl(Fs(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Xl(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new ci(y,m)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new ci(y,m)}(t.endAt)),TS(e,i,o,s,a,"F",u,c)}function UD(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function XS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Fs(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fs(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fs(t.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fs(t.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return ie.create(Fs(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ce.create(t.compositeFilter.filters.map(r=>XS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function BD(n){return ND[n]}function zD(n){return DD[n]}function jD(n){return xD[n]}function Ms(n){return{fieldPath:n.canonicalString()}}function Fs(n){return Se.fromServerFormat(n.fieldPath)}function ZS(n){return n instanceof ie?function(t){if(t.op==="=="){if(Tw(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NAN"}};if(Ew(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tw(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NOT_NAN"}};if(Ew(t.value))return{unaryFilter:{field:Ms(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(t.field),op:zD(t.op),value:t.value}}}(n):n instanceof ce?function(t){const r=t.getFilters().map(i=>ZS(i));return r.length===1?r[0]:{compositeFilter:{op:jD(t.op),filters:r}}}(n):G()}function $D(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function eA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ir{constructor(e,t,r,i,s=Y.min(),o=Y.min(),a=Me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tA{constructor(e){this.ct=e}}function qD(n,e){let t;if(e.document)t=HS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=ls(e.noDocument.readTime);t=ve.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=$.fromSegments(e.unknownDocument.path),i=ls(e.unknownDocument.version);t=ve.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Re(i[0],i[1]);return Y.fromTimestamp(s)}(e.readTime)),t}function zw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ch(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Ol(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ko(s,o.version.toTimestamp()),createTime:ko(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:as(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:t.path.toArray(),version:as(e.version)}}return r}function ch(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function as(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ls(n){const e=new Re(n.seconds,n.nanoseconds);return Y.fromTimestamp(e)}function Oi(n,e){const t=(e.baseMutations||[]).map(s=>Yp(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Yp(n.ct,s)),i=Re.fromMillis(e.localWriteTimeMs);return new kg(e.batchId,i,t,r)}function za(n){const e=ls(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ls(n.lastLimboFreeSnapshotVersion):Y.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return Q(s.documents.length===1),Dt(Wo(GS(s.documents[0])))}(n.query):function(s){return Dt(JS(s))}(n.query),new ir(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Me.fromBase64String(n.resumeToken))}function nA(n,e){const t=as(e.snapshotVersion),r=as(e.lastLimboFreeSnapshotVersion);let i;i=ah(e.target)?QS(n.ct,e.target):YS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:is(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function xg(n){const e=JS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uh(e,e.limit,"L"):e}function kf(n,e){return new bg(e.largestBatchId,Yp(n.ct,e.overlayMutation))}function jw(n,e){const t=e.path.lastSegment();return[n,Nt(e.path.popLast()),t]}function $w(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:as(r.readTime),documentKey:Nt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class WD{getBundleMetadata(e,t){return qw(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ls(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return qw(e).put(function(i){return{bundleId:i.id,createTime:as(qe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ww(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:xg(s.bundledQuery),readTime:ls(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ww(e).put(function(i){return{name:i.name,readTime:as(qe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function qw(n){return Xe(n,"bundles")}function Ww(n){return Xe(n,"namedQueries")}/**
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
 */class Hh{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Hh(e,r)}getOverlay(e,t){return Sa(e).get(jw(this.userId,t)).next(r=>r?kf(this.serializer,r):null)}getOverlays(e,t){const r=On();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new bg(t,o);i.push(this.ht(e,a))}),N.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Nt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Sa(e).j("collectionPathOverlayIndex",a))}),N.waitFor(s)}getOverlaysForCollection(e,t,r){const i=On(),s=Nt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Sa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=kf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=On();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Sa(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const f=kf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,t){return Sa(e).put(function(i,s,o){const[a,u,c]=jw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ll(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Sa(n){return Xe(n,"documentOverlays")}/**
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
 */class GD{Pt(e){return Xe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Me.fromUint8Array(r):Me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Li{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ee(e.integerValue));else if("doubleValue"in e){const r=Ee(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),bl(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=_r(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(ai(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?fS(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Wh(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):G()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Ee(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),$.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Li.vt=new Li;function KD(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Gw(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=KD(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class HD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Gw(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Gw(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class QD{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class YD{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Aa{constructor(){this.jt=new HD,this.Ht=new QD(this.jt),this.Jt=new YD(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Mi{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Mi(this.indexId,this.documentKey,this.arrayValue,r)}}function Dr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Kw(n.arrayValue,e.arrayValue),t!==0?t:(t=Kw(n.directionalValue,e.directionalValue),t!==0?t:$.comparator(n.documentKey,e.documentKey)))}function Kw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Hw{constructor(e){this.Xt=new de((t,r)=>Se.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Up(e);if(t!==void 0&&!this.sn(t))return!1;const r=xi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new de(Se.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ec(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ec(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ec(r.field,r.dir==="asc"?0:1)));return new oh(oh.UNKNOWN_ID,this.collectionId,t,Cl.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function rA(n){var e,t;if(Q(n instanceof ie||n instanceof ce),n instanceof ie){if(n instanceof ES){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ie.create(n.field,"==",s)))||[];return ce.create(i,"or")}return n}const r=n.filters.map(i=>rA(i));return ce.create(r,n.op)}function JD(n){if(n.getFilters().length===0)return[];const e=Zp(rA(n));return Q(iA(e)),Jp(e)||Xp(e)?[e]:e.getFilters()}function Jp(n){return n instanceof ie}function Xp(n){return n instanceof ce&&Tg(n)}function iA(n){return Jp(n)||Xp(n)||function(t){if(t instanceof ce&&$p(t)){for(const r of t.getFilters())if(!Jp(r)&&!Xp(r))return!1;return!0}return!1}(n)}function Zp(n){if(Q(n instanceof ie||n instanceof ce),n instanceof ie)return n;if(n.filters.length===1)return Zp(n.filters[0]);const e=n.filters.map(r=>Zp(r));let t=ce.create(e,n.op);return t=hh(t),iA(t)?t:(Q(t instanceof ce),Q(Ao(t)),Q(t.filters.length>1),t.filters.reduce((r,i)=>Vg(r,i)))}function Vg(n,e){let t;return Q(n instanceof ie||n instanceof ce),Q(e instanceof ie||e instanceof ce),t=n instanceof ie?e instanceof ie?function(i,s){return ce.create([i,s],"and")}(n,e):Qw(n,e):e instanceof ie?Qw(e,n):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),Ao(i)&&Ao(s))return vS(i,s.getFilters());const o=$p(i)?i:s,a=$p(i)?s:i,u=o.filters.map(c=>Vg(c,a));return ce.create(u,"or")}(n,e),hh(t)}function Qw(n,e){if(Ao(e))return vS(e,n.getFilters());{const t=e.filters.map(r=>Vg(n,r));return ce.create(t,"or")}}function hh(n){if(Q(n instanceof ie||n instanceof ce),n instanceof ie)return n;const e=n.getFilters();if(e.length===1)return hh(e[0]);if(_S(n))return n;const t=e.map(i=>hh(i)),r=[];return t.forEach(i=>{i instanceof ie?r.push(i):i instanceof ce&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ce.create(r,n.op)}/**
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
 */class XD{constructor(){this.un=new Og}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(en.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(en.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Og{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new de(re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(re.comparator)).toArray()}}/**
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
 */const tc=new Uint8Array(0);class ZD{constructor(e,t){this.databaseId=t,this.cn=new Og,this.ln=new wi(r=>is(r),(r,i)=>Zl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:Nt(i)};return Yw(e).put(s)}return N.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[eS(t),""],!1,!0);return Yw(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Vn(o.parent))}return r})}addFieldIndex(e,t){const r=Ra(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Ns(e);return s.next(a=>{o.put($w(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ra(e),i=Ns(e),s=bs(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ra(e),r=bs(e),i=Ns(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return N.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Hw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=bs(e);let i=!0;const s=new Map;return N.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Z();const a=[];return N.forEach(s,(u,c)=>{M("IndexedDbIndexManager",`Using index ${function(E){return`id=${E.indexId}|cg=${E.collectionGroup}|f=${E.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(u)} to execute ${is(t)}`);const d=function(E,D){const U=Up(D);if(U===void 0)return null;for(const F of lh(E,U.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),f=function(E,D){const U=new Map;for(const F of xi(D))for(const w of lh(E,F.fieldPath))switch(w.op){case"==":case"in":U.set(F.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return U.set(F.fieldPath.canonicalString(),w.value),Array.from(U.values())}return null}(c,u),m=function(E,D){const U=[];let F=!0;for(const w of xi(D)){const _=w.kind===0?kw(E,w.fieldPath,E.startAt):Cw(E,w.fieldPath,E.startAt);U.push(_.value),F&&(F=_.inclusive)}return new ci(U,F)}(c,u),y=function(E,D){const U=[];let F=!0;for(const w of xi(D)){const _=w.kind===0?Cw(E,w.fieldPath,E.endAt):kw(E,w.fieldPath,E.endAt);U.push(_.value),F&&(F=_.inclusive)}return new ci(U,F)}(c,u),R=this.In(u,c,m),k=this.In(u,c,y),x=this.Tn(u,c,f),T=this.En(u.indexId,d,R,m.inclusive,k,y.inclusive,x);return N.forEach(T,v=>r.G(v,t.limit).next(E=>{E.forEach(D=>{const U=$.fromSegments(D.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return N.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=JD(ce.create(e.filters,"and")).map(r=>Wp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),d=[];for(let f=0;f<u;++f){const m=t?this.dn(t[f/c]):tc,y=this.An(e,m,r[f%c],i),R=this.Rn(e,m,s[f%c],o),k=a.map(x=>this.An(e,m,x,!0));d.push(...this.createRange(y,R,k))}return d}An(e,t,r,i){const s=new Mi(e,$.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new Mi(e,$.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Hw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return N.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new de(Se.comparator),d=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new Aa;for(const i of xi(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Li.vt.It(s,o)}return r.zt()}dn(e){const t=new Aa;return Li.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Aa;return Li.vt.It(rs(this.databaseId,t),r.Yt(function(s){const o=xi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new Aa);let s=0;for(const o of xi(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&xl(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);Li.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Aa;u.seed(a.zt()),Li.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ra(e),i=Ns(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return N.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const m=f?new Cl(f.sequenceNumber,new en(ls(f.readTime),new $(Vn(f.documentKey)),f.largestBatchId)):Cl.empty(),y=d.fields.map(([R,k])=>new Ec(Se.fromServerFormat(R),k));return new oh(d.indexId,d.collectionGroup,y,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:X(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ra(e),s=Ns(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>N.forEach(a,u=>s.put($w(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return N.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),N.forEach(a,u=>this.wn(e,i,u).next(c=>{const d=this.Sn(s,u);return c.isEqual(d)?N.resolve():this.bn(e,s,u,c,d)}))))})}Dn(e,t,r,i){return bs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return bs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=bs(e);let s=new de(Dr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new Mi(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new de(Dr);const i=this.Vn(t,e);if(i==null)return r;const s=Up(t);if(s!=null){const o=e.data.field(s.fieldPath);if(xl(o))for(const a of o.arrayValue.values||[])r=r.add(new Mi(t.indexId,e.key,this.dn(a),i))}else r=r.add(new Mi(t.indexId,e.key,tc,i));return r}bn(e,t,r,i,s){M("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,d,f,m){const y=u.getIterator(),R=c.getIterator();let k=Cs(y),x=Cs(R);for(;k||x;){let T=!1,v=!1;if(k&&x){const E=d(k,x);E<0?v=!0:E>0&&(T=!0)}else k!=null?v=!0:T=!0;T?(f(x),x=Cs(R)):v?(m(k),k=Cs(y)):(k=Cs(y),x=Cs(R))}}(i,s,Dr,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),N.waitFor(o)}yn(e){let t=1;return Ns(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Dr(o,a)).filter((o,a,u)=>!a||Dr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Dr(o,e),u=Dr(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,tc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,tc,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return Dr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Jw)}getMinOffset(e,t){return N.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||G())).next(Jw)}}function Yw(n){return Xe(n,"collectionParents")}function bs(n){return Xe(n,"indexEntries")}function Ra(n){return Xe(n,"indexConfiguration")}function Ns(n){return Xe(n,"indexState")}function Jw(n){Q(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;vg(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new en(e.readTime,e.documentKey,t)}/**
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
 */const Xw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function sA(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(u.next(()=>{Q(a===1)}));const c=[];for(const d of t.mutations){const f=aS(e,d.key.path,t.batchId);s.push(i.delete(f)),c.push(d.key)}return N.waitFor(s).next(()=>c)}function dh(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw G();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);class Qh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Qh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Us(e),o=xr(e);return o.add({}).next(a=>{Q(typeof a=="number");const u=new kg(a,t,r,i),c=function(y,R,k){const x=k.baseMutations.map(v=>Ll(y.ct,v)),T=k.mutations.map(v=>Ll(y.ct,v));return{userId:R,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:x,mutations:T}}(this.serializer,this.userId,u),d=[];let f=new de((m,y)=>X(m.canonicalString(),y.canonicalString()));for(const m of i){const y=aS(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(y,U1))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),N.waitFor(d).next(()=>u)})}lookupMutationBatch(e,t){return xr(e).get(t).next(r=>r?(Q(r.userId===this.userId),Oi(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?N.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return xr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=Oi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return xr(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).U("userMutationsIndex",t).next(r=>r.map(i=>Oi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Tc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Us(e).J({range:i},(o,a,u)=>{const[c,d,f]=o,m=Vn(d);if(c===this.userId&&t.path.isEqual(m))return xr(e).get(f).next(y=>{if(!y)throw G();Q(y.userId===this.userId),s.push(Oi(this.serializer,y))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(X);const i=[];return t.forEach(s=>{const o=Tc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Us(e).J({range:a},(c,d,f)=>{const[m,y,R]=c,k=Vn(y);m===this.userId&&s.path.isEqual(k)?r=r.add(R):f.done()});i.push(u)}),N.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Tc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new de(X);return Us(e).J({range:o},(u,c,d)=>{const[f,m,y]=u,R=Vn(m);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(y)):d.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(xr(e).get(s).next(o=>{if(o===null)throw G();Q(o.userId===this.userId),r.push(Oi(this.serializer,o))}))}),N.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return sA(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),N.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return N.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Us(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Vn(s[1]);i.push(u)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,t){return oA(e,this.userId,t)}Nn(e){return aA(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function oA(n,e,t){const r=Tc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Us(n).J({range:s,H:!0},(a,u,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function xr(n){return Xe(n,"mutations")}function Us(n){return Xe(n,"documentMutations")}function aA(n){return Xe(n,"mutationQueues")}/**
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
 */class us{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new us(0)}static kn(){return new us(-1)}}/**
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
 */class ex{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new us(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Y.fromTimestamp(new Re(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ds(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Ds(e).J((o,a)=>{const u=za(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>N.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Ds(e).J((r,i)=>{const s=za(i);t(s)})}qn(e){return Zw(e).get("targetGlobalKey").next(t=>(Q(t!==null),t))}Qn(e,t){return Zw(e).put("targetGlobalKey",t)}Kn(e,t){return Ds(e).put(nA(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=is(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ds(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=za(a);Zl(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Br(e);return t.forEach(o=>{const a=Nt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),N.waitFor(i)}removeMatchingKeys(e,t,r){const i=Br(e);return N.forEach(t,s=>{const o=Nt(s.path);return N.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Br(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Br(e);let s=Z();return i.J({range:r,H:!0},(o,a,u)=>{const c=Vn(o[1]),d=new $(c);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=Nt(t.path),i=IDBKeyRange.bound([r],[eS(r)],!1,!0);let s=0;return Br(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return Ds(e).get(t).next(r=>r?za(r):null)}}function Ds(n){return Xe(n,"targets")}function Zw(n){return Xe(n,"targetGlobal")}function Br(n){return Xe(n,"targetDocuments")}/**
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
 */function eI([n,e],[t,r]){const i=X(n,t);return i===0?X(e,r):i}class tx{constructor(e){this.Un=e,this.buffer=new de(eI),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();eI(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){M("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vi(t)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await yi(t)}await this.Hn(3e5)})}}class rx{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Bt.oe);const r=new tx(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Xw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xw):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Os()<=te.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function ix(n,e){return new rx(n,e)}/**
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
 */class sx{constructor(e,t){this.db=e,this.garbageCollector=ix(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return nc(e,r)}removeReference(e,t,r){return nc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return nc(e,t)}nr(e,t){return function(i,s){let o=!1;return aA(i).Y(a=>oA(i,a,s).next(u=>(u&&(o=!0),N.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Y.min()),Br(e).delete(function(f){return[0,Nt(f.path)]}(o))))});i.push(u)}}).next(()=>N.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return nc(e,t)}tr(e,t){const r=Br(e);let i,s=Bt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Bt.oe&&t(new $(Vn(i)),s),s=c,i=u):s=Bt.oe}).next(()=>{s!==Bt.oe&&t(new $(Vn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function nc(n,e){return Br(n).put(function(r,i){return{targetId:0,path:Nt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class lA{constructor(){this.changes=new wi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ox{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Ci(e).put(r)}removeEntry(e,t,r){return Ci(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],ch(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=ve.newInvalidDocument(t);return Ci(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Pa(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:ve.newInvalidDocument(t)};return Ci(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Pa(t))},(i,s)=>{r={document:this.ir(t,s),size:dh(s)}}).next(()=>r)}getEntries(e,t){let r=jt();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=jt(),i=new ge($.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,dh(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return N.resolve();let i=new de(rI);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Pa(i.first()),Pa(i.last())),o=i.getIterator();let a=o.getNext();return Ci(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=$.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&rI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(Pa(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),ch(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ci(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=jt();for(const f of c){const m=this.ir($.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(tu(t,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=jt();const o=nI(t,r),a=nI(t,en.max());return Ci(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const f=this.ir($.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new ax(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return tI(e).get("remoteDocumentGlobalKey").next(t=>(Q(!!t),t))}rr(e,t){return tI(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=qD(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Y.min())))return r}return ve.newInvalidDocument(e)}}function uA(n){return new ox(n)}class ax extends lA{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new wi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new de((s,o)=>X(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=zw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=dh(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=zw(this.cr.serializer,o.convertToNoDocument(Y.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),N.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function tI(n){return Xe(n,"remoteDocumentGlobal")}function Ci(n){return Xe(n,"remoteDocumentsV14")}function Pa(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function nI(n,e){const t=e.documentKey.path.toArray();return[n,ch(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function rI(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=X(t[s],r[s]),i)return i;return i=X(t.length,r.length),i||(i=X(t[t.length-2],r[r.length-2]),i||X(t[t.length-1],r[r.length-1]))}/**
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
 */class lx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cA{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&tl(r.mutation,i,zt.empty(),Re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=On();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ua();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=On();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=jt();const o=el(),a=function(){return el()}();return t.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Tr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),tl(d.mutation,c,d.mutation.getFieldMask(),Re.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>{var f;return a.set(c,new lx(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=el();let i=new ge((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let d=r.get(u)||zt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=CS();d.forEach(m=>{if(!s.has(m)){const y=LS(t.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(On());let a=-1,u=s;return o.next(c=>N.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Z())).next(d=>({batchId:a,changes:kS(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=Ua();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ua();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,u=>{const c=function(f,m){return new Er(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ve.newInvalidDocument(d)))});let a=Ua();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&tl(d.mutation,c,zt.empty(),Re.now()),tu(t,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class ux{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:qe(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:xg(i.bundledQuery),readTime:qe(i.readTime)}}(t)),N.resolve()}}/**
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
 */class cx{constructor(){this.overlays=new ge($.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=On();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=On(),s=t.length+1,o=new $(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ge((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=On(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=On(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return N.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bg(t,r));let s=this.Ir.get(t);s===void 0&&(s=Z(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class hx{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Lg{constructor(){this.Tr=new de(Ze.Er),this.dr=new de(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ze(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ze(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new re([])),r=new Ze(t,e),i=new Ze(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new re([])),r=new Ze(t,e),i=new Ze(t,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ze(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||X(e.wr,t.wr)}static Ar(e,t){return X(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class dx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new de(Ze.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kg(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ze(t,0),i=new Ze(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(X);return t.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new $(s),0);let a=new de(X);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,i=>{const s=new Ze(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ze(t,0),i=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fx{constructor(e){this.Mr=e,this.docs=function(){return new ge($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let r=jt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ve.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=jt();const o=t.path,a=new $(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vg(nS(d),r)<=0||(i.has(d.key)||tu(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){G()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new px(this)}getSize(e){return N.resolve(this.size)}}class px extends lA{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class mx{constructor(e){this.persistence=e,this.Nr=new wi(t=>is(t),Zl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lg,this.targetCount=0,this.kr=us.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new us(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class hA{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Bt(0),this.Kr=!1,this.Kr=!0,this.$r=new hx,this.referenceDelegate=e(this),this.Ur=new mx(this),this.indexManager=new XD,this.remoteDocumentCache=function(i){return new fx(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new tA(t),this.Gr=new ux(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new dx(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new gx(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class gx extends iS{constructor(e){super(),this.currentSequenceNumber=e}}class Yh{constructor(e){this.persistence=e,this.Jr=new Lg,this.Yr=null}static Zr(e){return new Yh(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=$.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class _x{constructor(e){this.serializer=e}O(e,t,r,i){const s=new $h("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_w,{unique:!0}),u.createObjectStore("documentMutations")}(e),iI(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),iI(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_w,{unique:!0});const f=c.store("mutations"),m=d.map(y=>f.put(y));return N.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:J1});c.createIndex("collectionPathOverlayIndex",X1,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Z1,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:B1});c.createIndex("documentKeyIndex",z1),c.createIndex("collectionGroupIndex",j1)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:K1}).createIndex("sequenceNumberIndex",H1,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:Q1}).createIndex("documentKeyIndex",Y1,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=dh(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>N.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>N.forEach(a,u=>{Q(u.userId===s.userId);const c=Oi(this.serializer,u);return sA(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new re(o),c=function(f){return[0,Nt(f)]}(u);s.push(t.get(c).next(d=>d?N.resolve():(f=>t.put({targetId:0,path:Nt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>N.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:G1});const r=t.store("collectionParents"),i=new Og,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Nt(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new re(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=Vn(a);return s(d.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=za(i),o=nA(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(f){return f.document?new $(re.fromString(f.document.name).popFirst(5)):f.noDocument?$.fromSegments(f.noDocument.path):f.unknownDocument?$.fromSegments(f.unknownDocument.path):G()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>N.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=uA(this.serializer),s=new hA(Yh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:Z();Oi(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),N.forEach(a,(u,c)=>{const d=new tt(c),f=Hh.lt(this.serializer,d),m=s.getIndexManager(d),y=Qh.lt(d,this.serializer,m,s.referenceDelegate);return new cA(i,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Bp(t,Bt.oe),u).next()})})}}function iI(n){n.createObjectStore("targetDocuments",{keyPath:q1}).createIndex("documentTargetsIndex",W1,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",$1,{unique:!0}),n.createObjectStore("targetGlobal")}const Cf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mg{constructor(e,t,r,i,s,o,a,u,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Mg.D())throw new L(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sx(this,i),this.Ai=t+"main",this.serializer=new tA(u),this.Ri=new Un(this.Ai,this.hi,new _x(this.serializer)),this.$r=new GD,this.Ur=new ex(this.referenceDelegate,this.serializer),this.remoteDocumentCache=uA(this.serializer),this.Gr=new WD,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(V.FAILED_PRECONDITION,Cf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Bt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>rc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(vi(e))return M("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ka(e).get("owner").next(t=>N.resolve(this.vi(t)))}Ci(e){return rc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Xe(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return N.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):ka(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(V.FAILED_PRECONDITION,Cf);return!1}}return!(!this.networkEnabled||!this.inForeground)||rc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&M("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Bp(e,Bt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>rc(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Qh.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ZD(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Hh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?nD:u===16?tD:u===15?Ig:u===14?cS:u===13?uS:u===12?eD:u===11?lS:void G()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Bp(a,this.Qr?this.Qr.next():Bt.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(V.FAILED_PRECONDITION,rS);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return ka(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(V.FAILED_PRECONDITION,Cf)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ka(e).put("owner",t)}static D(){return Un.D()}bi(e){const t=ka(e);return t.get("owner").next(r=>this.vi(r)?(M("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):N.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;x0()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return M("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ka(n){return Xe(n,"owner")}function rc(n){return Xe(n,"clientMetadata")}function Fg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Ug{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=Z(),i=Z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ug(e,t.fromCache,r,i)}}/**
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
 */class yx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return x0()?8:sS(De())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yx;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Os()<=te.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ls(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(Os()<=te.DEBUG&&M("QueryEngine","Query:",Ls(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Os()<=te.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ls(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):N.resolve())}Yi(e,t){if(bw(t))return N.resolve(null);let r=Dt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=uh(t,null,"F"),r=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,uh(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return bw(t)||i.isEqual(Y.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?N.resolve(null):(Os()<=te.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ls(t)),this.rs(e,o,t,tS(i,-1)).next(a=>a))})}ts(e,t){let r=new de(RS(e));return t.forEach((i,s)=>{tu(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Os()<=te.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ls(t)),this.Ji.getDocumentsMatchingQuery(e,t,en.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class vx{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ge(X),this._s=new wi(s=>is(s),Zl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function fA(n,e,t,r){return new vx(n,e,t,r)}async function pA(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function wx(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let y=N.resolve();return m.forEach(R=>{y=y.next(()=>d.getEntry(u,R)).next(k=>{const x=c.docVersions.get(R);Q(x!==null),k.version.compareTo(x)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Z();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function mA(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Ix(n,e){const t=q(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(t.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(s,d.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Me.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(k,x,T){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,y,d)&&a.push(t.Ur.updateTargetData(s,y))});let u=jt(),c=Z();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(gA(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=t.Ur.getLastRemoteSnapshotVersion(s).next(f=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function gA(n,e,t){let r=Z(),i=Z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=jt();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Ex(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Co(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function bo(n,e,t){const r=q(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vi(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function fh(n,e,t){const r=q(n);let i=Y.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=q(u),m=f._s.get(d);return m!==void 0?N.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,Dt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:Y.min(),t?s:Z())).next(a=>(vA(r,AS(e),a),{documents:a,Ts:s})))}function _A(n,e){const t=q(n),r=q(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function yA(n,e){const t=q(n),r=t.us.get(e)||Y.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,tS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(vA(t,e,i),i))}function vA(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function Tx(n,e,t,r){const i=q(n);let s=Z(),o=jt();for(const c of t){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await Co(i,function(d){return Dt(Wo(re.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>gA(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function Sx(n,e,t=Z()){const r=await Co(n,Dt(xg(e.bundledQuery))),i=q(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Me.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function sI(n,e){return`firestore_clients_${n}_${e}`}function oI(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function bf(n,e){return`firestore_targets_${n}_${e}`}class ph{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new L(i.error.code,i.error.message))),o?new ph(e,t,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nl{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new L(r.error.code,r.error.message))),s?new nl(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class mh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ag();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=oS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new mh(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Bg{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Bg(t.clientId,t.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class em{constructor(){this.activeTargetIds=Ag()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nf{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ge(X),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=sI(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new em),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(sI(this.persistenceKey,r));if(i){const s=mh.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(bf(this.persistenceKey,e));if(i){const s=nl.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(bf(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return M("SharedClientState","READ",e,t),t}setItem(e,t){M("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){M("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(M("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=Bt.oe;if(s!=null)try{const a=JSON.parse(s);Q(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Bt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new ph(this.currentUser,e,t,r),s=oI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=oI(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=bf(this.persistenceKey,e),s=new nl(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return mh.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return ph.Rs(new tt(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return nl.Rs(i,t)}Ls(e){return Bg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);M("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Ag();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class wA{constructor(){this.so=new em,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new em,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ax{_o(e){}shutdown(){}}/**
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
 */class aI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ic=null;function Df(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
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
 */const Rx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Px{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const _t="WebChannelConnection";class kx extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=Df(),u=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(d=>(M("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw jn("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=Rx[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Df();return new Promise((o,a)=>{const u=new K0;u.setWithCredentials(!0),u.listenOnce(H0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ic.NO_ERROR:const d=u.getResponseJson();M(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ic.TIMEOUT:M(_t,`RPC '${e}' ${s} timed out`),a(new L(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const f=u.getStatus();if(M(_t,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const R=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(y.status);a(new L(R,y.message))}else a(new L(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new L(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{M(_t,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);M(_t,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=Df(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=J0(),a=Y0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");M(_t,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,y=!1;const R=new Px({Io:x=>{y?M(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(M(_t,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),M(_t,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},To:()=>f.close()}),k=(x,T,v)=>{x.listen(T,E=>{try{v(E)}catch(D){setTimeout(()=>{throw D},0)}})};return k(f,Fa.EventType.OPEN,()=>{y||(M(_t,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(f,Fa.EventType.CLOSE,()=>{y||(y=!0,M(_t,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(f,Fa.EventType.ERROR,x=>{y||(y=!0,jn(_t,`RPC '${e}' stream ${i} transport errored:`,x),R.So(new L(V.UNAVAILABLE,"The operation could not be completed")))}),k(f,Fa.EventType.MESSAGE,x=>{var T;if(!y){const v=x.data[0];Q(!!v);const E=v,D=E.error||((T=E[0])===null||T===void 0?void 0:T.error);if(D){M(_t,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let F=function(I){const S=Ge[I];if(S!==void 0)return US(S)}(U),w=D.message;F===void 0&&(F=V.INTERNAL,w="Unknown error status: "+U+" with message "+D.message),y=!0,R.So(new L(F,w)),f.close()}else M(_t,`RPC '${e}' stream ${i} received:`,v),R.bo(v)}}),k(a,Q0.STAT_EVENT,x=>{x.stat===Fp.PROXY?M(_t,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Fp.NOPROXY&&M(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}/**
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
 */function IA(){return typeof window<"u"?window:null}function kc(){return typeof document<"u"?document:null}/**
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
 */function su(n){return new VD(n,!0)}/**
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
 */class zg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class EA{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?($e(t.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new L(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cx extends EA{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=MD(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?qe(o.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Qp(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=ah(u)?{documents:QS(s,u)}:{query:YS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$S(s,o.resumeToken);const c=Kp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=ko(s,o.snapshotVersion.toTimestamp());const c=Kp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=UD(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Qp(this.serializer),t.removeTarget=e,this.a_(t)}}class bx extends EA{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=FD(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Qp(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ll(this.serializer,r))};this.a_(t)}}/**
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
 */class Nx extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Hp(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(V.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Hp(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Dx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($e(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xx{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=q(u);c.L_.add(4),await Ho(c),c.q_.set("Unknown"),c.L_.delete(4),await ou(c)}(this))})}),this.q_=new Dx(r,i)}}async function ou(n){if(Ii(n))for(const e of n.B_)await e(!0)}async function Ho(n){for(const e of n.B_)await e(!1)}function Jh(n,e){const t=q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),qg(t)?$g(t):Yo(t).r_()&&jg(t,e))}function No(n,e){const t=q(n),r=Yo(t);t.N_.delete(e),r.r_()&&TA(t,e),t.N_.size===0&&(r.r_()?r.o_():Ii(t)&&t.q_.set("Unknown"))}function jg(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yo(n).A_(e)}function TA(n,e){n.Q_.xe(e),Yo(n).R_(e)}function $g(n){n.Q_=new bD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Yo(n).start(),n.q_.v_()}function qg(n){return Ii(n)&&!Yo(n).n_()&&n.N_.size>0}function Ii(n){return q(n).L_.size===0}function SA(n){n.Q_=void 0}async function Vx(n){n.q_.set("Online")}async function Ox(n){n.N_.forEach((e,t)=>{jg(n,e)})}async function Lx(n,e){SA(n),qg(n)?(n.q_.M_(e),$g(n)):n.q_.set("Unknown")}async function Mx(n,e,t){if(n.q_.set("Online"),e instanceof jS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gh(n,r)}else if(e instanceof Pc?n.Q_.Ke(e):e instanceof zS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await mA(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Me.EMPTY_BYTE_STRING,d.snapshotVersion)),TA(s,u);const f=new ir(d.target,u,c,d.sequenceNumber);jg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await gh(n,r)}}async function gh(n,e,t){if(!vi(e))throw e;n.L_.add(1),await Ho(n),n.q_.set("Offline"),t||(t=()=>mA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ou(n)})}function AA(n,e){return e().catch(t=>gh(n,t,e))}async function Qo(n){const e=q(n),t=hi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Fx(e);)try{const i=await Ex(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,Ux(e,i)}catch(i){await gh(e,i)}RA(e)&&PA(e)}function Fx(n){return Ii(n)&&n.O_.length<10}function Ux(n,e){n.O_.push(e);const t=hi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function RA(n){return Ii(n)&&!hi(n).n_()&&n.O_.length>0}function PA(n){hi(n).start()}async function Bx(n){hi(n).p_()}async function zx(n){const e=hi(n);for(const t of n.O_)e.m_(t.mutations)}async function jx(n,e,t){const r=n.O_.shift(),i=Cg.from(r,e,t);await AA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Qo(n)}async function $x(n,e){e&&hi(n).V_&&await async function(r,i){if(function(o){return FS(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();hi(r).s_(),await AA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qo(r)}}(n,e),RA(n)&&PA(n)}async function lI(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Ii(t);t.L_.add(3),await Ho(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ou(t)}async function tm(n,e){const t=q(n);e?(t.L_.delete(2),await ou(t)):e||(t.L_.add(2),await Ho(t),t.q_.set("Unknown"))}function Yo(n){return n.K_||(n.K_=function(t,r,i){const s=q(t);return s.w_(),new Cx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Vx.bind(null,n),Ro:Ox.bind(null,n),mo:Lx.bind(null,n),d_:Mx.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),qg(n)?$g(n):n.q_.set("Unknown")):(await n.K_.stop(),SA(n))})),n.K_}function hi(n){return n.U_||(n.U_=function(t,r,i){const s=q(t);return s.w_(),new bx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Bx.bind(null,n),mo:$x.bind(null,n),f_:zx.bind(null,n),g_:jx.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Qo(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Wg{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Wg(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(n,e){if($e("AsyncQueue",`${e}: ${n}`),vi(n))return new L(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class oo{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Ua(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class uI{constructor(){this.W_=new ge($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Do{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Do(e,t,oo.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class qx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Wx{constructor(){this.queries=cI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=q(t),s=i.queries;i.queries=cI(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new L(V.ABORTED,"Firestore shutting down"))}}function cI(){return new wi(n=>SS(n),eu)}async function Gg(n,e){const t=q(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new qx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Jo(o,`Initialization of query '${Ls(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Hg(t)}async function Kg(n,e){const t=q(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Gx(n,e){const t=q(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Hg(t)}function Kx(n,e,t){const r=q(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Hg(n){n.Y_.forEach(e=>{e.next()})}var nm,hI;(hI=nm||(nm={})).ea="default",hI.Cache="cache";class Qg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Do(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nm.Cache}}/**
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
 */class Hx{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class dI{constructor(e){this.serializer=e}Es(e){return Bn(this.serializer,e)}ds(e){return e.metadata.exists?HS(this.serializer,e.document,!1):ve.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return qe(e)}}class Qx{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=kA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=re.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new dI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||Z()).add(s);t.set(o,a)}}return t}async complete(){const e=await Tx(this.localStore,new dI(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await Sx(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function kA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class CA{constructor(e){this.key=e}}class bA{constructor(e){this.key=e}}class NA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=RS(e),this.Ra=new oo(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new uI,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),y=tu(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let x=!1;m&&y?m.data.isEqual(y.data)?R!==k&&(r.track({type:3,doc:y}),x=!0):this.ga(m,y)||(r.track({type:2,doc:y}),x=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),x=!0):m&&!y&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(a=!0)),x&&(y?(o=o.add(y),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(y,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return k(y)-k(R)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Do(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new bA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new CA(r))}),t}ba(e){this.Ta=e.Ts,this.da=Z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Do.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Yx{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Jx{constructor(e){this.key=e,this.va=!1}}class Xx{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new wi(a=>SS(a),eu),this.Ma=new Map,this.xa=new Set,this.Oa=new ge($.comparator),this.Na=new Map,this.La=new Lg,this.Ba={},this.ka=new Map,this.qa=us.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Zx(n,e,t=!0){const r=Xh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await DA(r,e,t,!0),i}async function eV(n,e){const t=Xh(n);await DA(t,e,!0,!1)}async function DA(n,e,t,r){const i=await Co(n.localStore,Dt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Yg(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Jh(n.remoteStore,i),a}async function Yg(n,e,t,r,i){n.Ka=(f,m,y)=>async function(k,x,T,v){let E=x.view.ma(T);E.ns&&(E=await fh(k.localStore,x.query,!1).then(({documents:w})=>x.view.ma(w,E)));const D=v&&v.targetChanges.get(x.targetId),U=v&&v.targetMismatches.get(x.targetId)!=null,F=x.view.applyChanges(E,k.isPrimaryClient,D,U);return rm(k,x.targetId,F.wa),F.snapshot}(n,f,m,y);const s=await fh(n.localStore,e,!0),o=new NA(e,s.Ts),a=o.ma(s.documents),u=iu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);rm(n,t,c.wa);const d=new Yx(e,t,o);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function tV(n,e,t){const r=q(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!eu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&No(r.remoteStore,i.targetId),xo(r,i.targetId)}).catch(yi)):(xo(r,i.targetId),await bo(r.localStore,i.targetId,!0))}async function nV(n,e){const t=q(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),No(t.remoteStore,r.targetId))}async function rV(n,e,t){const r=e_(n);try{const i=await function(o,a){const u=q(o),c=Re.now(),d=a.reduce((y,R)=>y.add(R.key),Z());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=jt(),k=Z();return u.cs.getEntries(y,d).next(x=>{R=x,R.forEach((T,v)=>{v.isValidDocument()||(k=k.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,R)).next(x=>{f=x;const T=[];for(const v of a){const E=PD(v,f.get(v.key).overlayedDocument);E!=null&&T.push(new Tr(v.key,E,mS(E.value.mapValue),Ae.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,T,a)}).next(x=>{m=x;const T=x.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(y,x.batchId,T)})}).then(()=>({batchId:m.batchId,changes:kS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new ge(X)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Sr(r,i.changes),await Qo(r.remoteStore)}catch(i){const s=Jo(i,"Failed to persist write");t.reject(s)}}async function xA(n,e){const t=q(n);try{const r=await Ix(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Q(o.va):i.removedDocuments.size>0&&(Q(o.va),o.va=!1))}),await Sr(t,r,e)}catch(r){await yi(r)}}function fI(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=q(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Hg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iV(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ge($.comparator);o=o.insert(s,ve.newNoDocument(s,Y.min()));const a=Z().add(s),u=new ru(Y.min(),new Map,new ge(X),o,a);await xA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Zg(r)}else await bo(r.localStore,e,!1).then(()=>xo(r,e,t)).catch(yi)}async function sV(n,e){const t=q(n),r=e.batch.batchId;try{const i=await wx(t.localStore,e);Xg(t,r,null),Jg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Sr(t,i)}catch(i){await yi(i)}}async function oV(n,e,t){const r=q(n);try{const i=await function(o,a){const u=q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Q(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Xg(r,e,t),Jg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Sr(r,i)}catch(i){await yi(i)}}async function aV(n,e){const t=q(n);Ii(t.remoteStore)||M("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=q(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=Jo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Jg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Xg(n,e,t){const r=q(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function xo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||VA(n,r)})}function VA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(No(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Zg(n))}function rm(n,e,t){for(const r of t)r instanceof CA?(n.La.addReference(r.key,e),lV(n,r)):r instanceof bA?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||VA(n,r.key)):G()}function lV(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),Zg(n))}function Zg(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(re.fromString(e)),r=n.qa.next();n.Na.set(r,new Jx(t)),n.Oa=n.Oa.insert(t,r),Jh(n.remoteStore,new ir(Dt(Wo(t.path)),r,"TargetPurposeLimboResolution",Bt.oe))}}async function Sr(n,e,t){const r=q(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var d;if((c||t)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Ug.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=q(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>N.forEach(c,m=>N.forEach(m.$i,y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>N.forEach(m.Ui,y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!vi(f))throw f;M("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=d.os.get(m),R=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function uV(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await pA(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new L(V.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sr(t,r.hs)}}function cV(n,e){const t=q(n),r=t.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function hV(n,e){const t=q(n),r=await fh(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&rm(t,e.targetId,i.wa),i}async function dV(n,e){const t=q(n);return yA(t.localStore,e).then(r=>Sr(t,r))}async function fV(n,e,t,r){const i=q(n),s=await function(a,u){const c=q(a),d=q(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,u).next(m=>m?c.localDocuments.getDocuments(f,m):N.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Qo(i.remoteStore):t==="acknowledged"||t==="rejected"?(Xg(i,e,r||null),Jg(i,e),function(a,u){q(q(a).mutationQueue).On(u)}(i.localStore,e)):G(),await Sr(i,s)):M("SyncEngine","Cannot apply mutation batch with id: "+e)}async function pV(n,e){const t=q(n);if(Xh(t),e_(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await pI(t,r.toArray());t.Qa=!0,await tm(t.remoteStore,!0);for(const s of i)Jh(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(xo(t,o),bo(t.localStore,o,!0))),No(t.remoteStore,o)}),await i,await pI(t,r),function(o){const a=q(o);a.Na.forEach((u,c)=>{No(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new ge($.comparator)}(t),t.Qa=!1,await tm(t.remoteStore,!1)}}async function pI(n,e,t){const r=q(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await Co(r.localStore,Dt(u[0]));for(const c of u){const d=r.Fa.get(c),f=await hV(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await _A(r.localStore,o);a=await Co(r.localStore,c),await Yg(r,OA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function OA(n){return TS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function mV(n){return function(t){return q(q(t).persistence).Qi()}(q(n).localStore)}async function gV(n,e,t,r){const i=q(n);if(i.Qa)return void M("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await yA(i.localStore,AS(s[0])),a=ru.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Me.EMPTY_BYTE_STRING);await Sr(i,o,a);break}case"rejected":await bo(i.localStore,e,!0),xo(i,e,r);break;default:G()}}async function _V(n,e,t){const r=Xh(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){M("SyncEngine","Adding an already active target "+i);continue}const s=await _A(r.localStore,i),o=await Co(r.localStore,s);await Yg(r,OA(s),o.targetId,!1,o.resumeToken),Jh(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await bo(r.localStore,i,!1).then(()=>{No(r.remoteStore,i),xo(r,i)}).catch(yi)}}function Xh(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iV.bind(null,e),e.Ca.d_=Gx.bind(null,e.eventManager),e.Ca.$a=Kx.bind(null,e.eventManager),e}function e_(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oV.bind(null,e),e}function yV(n,e,t){const r=q(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(y,R){const k=q(y),x=qe(R.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",T=>k.Gr.getBundleMetadata(T,R.id)).then(T=>!!T&&T.createTime.compareTo(x)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(kA(u));const c=new Qx(u,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const f=await c.complete();return await Sr(s,f.Ia,void 0),await function(y,R){const k=q(y);return k.persistence.runTransaction("Save bundle","readwrite",x=>k.Gr.saveBundleMetadata(x,R))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return jn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return fA(this.persistence,new dA,e.initialUser,this.serializer)}Ga(e){return new hA(Yh.Zr,this.serializer)}Wa(e){return new wA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ml.provider={build:()=>new Ml};class LA extends Ml{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await e_(this.Ja.syncEngine),await Qo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return fA(this.persistence,new dA,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new nx(r,e.asyncQueue,t)}Ha(e,t){const r=new M1(t,this.persistence);return new L1(e.asyncQueue,r)}Ga(e){const t=Fg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new Mg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,IA(),kc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new wA}}class vV extends LA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Nf&&(this.sharedClientState.syncEngine={no:fV.bind(null,t),ro:gV.bind(null,t),io:_V.bind(null,t),Qi:mV.bind(null,t),eo:dV.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await pV(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=IA();if(!Nf.D(t))throw new L(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Fg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Nf(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Fl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uV.bind(null,this.syncEngine),await tm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Wx}()}createDatastore(e){const t=su(e.databaseInfo.databaseId),r=function(s){return new kx(s)}(e.databaseInfo);return function(s,o,a,u){return new Nx(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new xx(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>fI(this.syncEngine,t,0),function(){return aI.D()?new aI:new Ax}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,d){const f=new Xx(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=q(i);M("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ho(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fl.provider={build:()=>new Fl};function mI(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class wV{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new ct,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new Hx(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class IV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new L(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=q(i),a={documents:s.map(f=>Ol(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,re.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=LD(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());Q(!!m),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=$.fromPath(r);this.mutations.push(new Pg(i,this.precondition(i)))}),await async function(r,i){const s=q(r),o={writes:i.map(a=>Ll(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,re.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw G();t=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new L(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Y.min())?Ae.exists(!1):Ae.updateTime(t):Ae.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Y.min()))throw new L(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(t)}return Ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class EV{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new zg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new IV(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Xl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!FS(t)}return!1}}/**
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
 */class TV{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=Z0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{M("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(M("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Jo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xf(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gI(n,e){n.asyncQueue.verifyOperationInProgress();const t=await t_(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>lI(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>lI(e.remoteStore,i)),n._onlineComponents=e}async function t_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await xf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;jn("Error using user provided cache. Falling back to memory cache: "+t),await xf(n,new Ml)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await xf(n,new Ml);return n._offlineComponents}async function ed(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await gI(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await gI(n,new Fl))),n._onlineComponents}function MA(n){return t_(n).then(e=>e.persistence)}function n_(n){return t_(n).then(e=>e.localStore)}function FA(n){return ed(n).then(e=>e.remoteStore)}function r_(n){return ed(n).then(e=>e.syncEngine)}function SV(n){return ed(n).then(e=>e.datastore)}async function Vo(n){const e=await ed(n),t=e.eventManager;return t.onListen=Zx.bind(null,e.syncEngine),t.onUnlisten=tV.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eV.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nV.bind(null,e.syncEngine),t}function AV(n){return n.asyncQueue.enqueue(async()=>{const e=await MA(n),t=await FA(n);return e.setNetworkEnabled(!0),function(i){const s=q(i);return s.L_.delete(0),ou(s)}(t)})}function RV(n){return n.asyncQueue.enqueue(async()=>{const e=await MA(n),t=await FA(n);return e.setNetworkEnabled(!1),async function(i){const s=q(i);s.L_.add(0),await Ho(s),s.q_.set("Offline")}(t)})}function PV(n,e){const t=new ct;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=q(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new L(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Jo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await n_(n),e,t)),t.promise}function UA(n,e,t={}){const r=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Zh({next:m=>{d.Za(),o.enqueueAndForget(()=>Kg(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new L(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new L(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Qg(Wo(a.path),d,{includeMetadataChanges:!0,_a:!0});return Gg(s,f)}(await Vo(n),n.asyncQueue,e,t,r)),r.promise}function kV(n,e){const t=new ct;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await fh(i,s,!0),u=new NA(s,a.Ts),c=u.ma(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=Jo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await n_(n),e,t)),t.promise}function BA(n,e,t={}){const r=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Zh({next:m=>{d.Za(),o.enqueueAndForget(()=>Kg(s,f)),m.fromCache&&u.source==="server"?c.reject(new L(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Qg(a,d,{includeMetadataChanges:!0,_a:!0});return Gg(s,f)}(await Vo(n),n.asyncQueue,e,t,r)),r.promise}function CV(n,e){const t=new Zh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).Y_.add(s),s.next()}(await Vo(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).Y_.delete(s)}(await Vo(n),t))}}function bV(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?BS().encode(o):o,function(d,f){return new wV(d,f)}(function(d,f){if(d instanceof Uint8Array)return mI(d,f);if(d instanceof ArrayBuffer)return mI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,su(e));n.asyncQueue.enqueueAndForget(async()=>{yV(await r_(n),i,r)})}function NV(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=q(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await n_(n),e))}/**
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
 */function zA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const _I=new Map;/**
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
 */function i_(n,e,t){if(!t)throw new L(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jA(n,e,t,r){if(e===!0&&r===!0)throw new L(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yI(n){if(!$.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vI(n){if($.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function td(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=td(n);throw new L(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function $A(n,e){if(e<=0)throw new L(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class wI{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new A1;switch(r.type){case"firstParty":return new C1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_I.get(t);r&&(M("ComponentProvider","Removing Datastore"),_I.delete(t),r.terminate())}(this),Promise.resolve()}}function qA(n,e,t,r={}){var i;const s=(n=le(n,au))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=tt.MOCK_USER;else{a=C0(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new L(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}n._authCredentials=new R1(new X0(a,u))}}/**
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
 */let xt=class WA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new WA(this.firestore,e,this._query)}},be=class GA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new GA(this.firestore,e,this._key)}},ti=class KA extends xt{constructor(e,t,r){super(e,t,Wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new $(e))}withConverter(e){return new KA(this.firestore,e,this._path)}};function s_(n,e,...t){if(n=H(n),i_("collection","path",e),n instanceof au){const r=re.fromString(e,...t);return vI(r),new ti(n,null,r)}{if(!(n instanceof be||n instanceof ti))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return vI(r),new ti(n.firestore,null,r)}}function DV(n,e){if(n=le(n,au),i_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new L(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xt(n,null,function(r){return new Er(re.emptyPath(),r)}(e))}function Ul(n,e,...t){if(n=H(n),arguments.length===1&&(e=Z0.newId()),i_("doc","path",e),n instanceof au){const r=re.fromString(e,...t);return yI(r),new be(n,null,new $(r))}{if(!(n instanceof be||n instanceof ti))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return yI(r),new be(n.firestore,n instanceof ti?n.converter:null,new $(r))}}function HA(n,e){return n=H(n),e=H(e),(n instanceof be||n instanceof ti)&&(e instanceof be||e instanceof ti)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function QA(n,e){return n=H(n),e=H(e),n instanceof xt&&e instanceof xt&&n.firestore===e.firestore&&eu(n._query,e._query)&&n.converter===e.converter}/**
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
 */class II{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zg(this,"async_queue_retry"),this.Vu=()=>{const r=kc();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=kc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=kc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ct;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!vi(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Wg.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function im(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class xV{constructor(){this._progressObserver={},this._taskCompletionResolver=new ct,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const VV=-1;let We=class extends au{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new II,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new II(e),this._firestoreClient=void 0,await e}}};function OV(n,e){const t=typeof n=="object"?n:jh(),r=typeof n=="string"?n:"(default)",i=$o(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=R0("firestore");s&&qA(i,...s)}return i}function Et(n){if(n._terminated)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YA(n),n._firestoreClient}function YA(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,d){return new sD(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,zA(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new TV(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function LV(n,e){jn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return JA(n,Fl.provider,{build:r=>new LA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function MV(n){jn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();JA(n,Fl.provider,{build:t=>new vV(t,e.cacheSizeBytes)})}function JA(n,e,t){if((n=le(n,We))._firestoreClient||n._terminated)throw new L(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new L(V.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},YA(n)}function FV(n){if(n._initialized&&!n._terminated)throw new L(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ct;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Un.D())return Promise.resolve();const i=r+"main";await Un.delete(i)}(Fg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function UV(n){return function(t){const r=new ct;return t.asyncQueue.enqueueAndForget(async()=>aV(await r_(t),r)),r.promise}(Et(n=le(n,We)))}function BV(n){return AV(Et(n=le(n,We)))}function zV(n){return RV(Et(n=le(n,We)))}function jV(n,e){const t=Et(n=le(n,We)),r=new xV;return bV(t,n._databaseId,e,r),r}function $V(n,e){return NV(Et(n=le(n,We)),e).then(t=>t?new xt(n,null,t.query):null)}/**
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
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(Me.fromBase64String(e))}catch(t){throw new L(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qn(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let di=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let ys=class{constructor(e){this._methodName=e}};/**
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
 */class nd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */class o_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const qV=/^__.*__$/;class WV{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Go(e,this.data,t,this.fieldTransforms)}}class XA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Tr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ZA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class rd{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return _h(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ZA(this.Cu)&&qV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class GV{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||su(e)}Qu(e,t,r,i=!1){return new rd({Cu:e,methodName:t,qu:r,path:Se.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vs(n){const e=n._freezeSettings(),t=su(n._databaseId);return new GV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function id(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);f_("Data must be an object, but it was:",o,r);const a=nR(r,o);let u,c;if(s.merge)u=new zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=sm(e,f,t);if(!o.contains(m))throw new L(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iR(d,m)||d.push(m)}u=new zt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new WV(new lt(a),u,c)}class lu extends ys{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lu}}function eR(n,e,t){return new rd({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class a_ extends ys{_toFieldTransform(e){return new nu(e.path,new Ro)}isEqual(e){return e instanceof a_}}class l_ extends ys{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=eR(this,e,!0),r=this.Ku.map(s=>ws(s,t)),i=new ss(r);return new nu(e.path,i)}isEqual(e){return e instanceof l_&&wo(this.Ku,e.Ku)}}class u_ extends ys{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=eR(this,e,!0),r=this.Ku.map(s=>ws(s,t)),i=new os(r);return new nu(e.path,i)}isEqual(e){return e instanceof u_&&wo(this.Ku,e.Ku)}}class c_ extends ys{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Po(e.serializer,NS(e.serializer,this.$u));return new nu(e.path,t)}isEqual(e){return e instanceof c_&&this.$u===e.$u}}function h_(n,e,t,r){const i=n.Qu(1,e,t);f_("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();_s(r,(u,c)=>{const d=p_(e,u,t);c=H(c);const f=i.Nu(d);if(c instanceof lu)s.push(d);else{const m=ws(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new zt(s);return new XA(o,a,i.fieldTransforms)}function d_(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[sm(e,r,t)],u=[i];if(s.length%2!=0)throw new L(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(sm(e,s[m])),u.push(s[m+1]);const c=[],d=lt.empty();for(let m=a.length-1;m>=0;--m)if(!iR(c,a[m])){const y=a[m];let R=u[m];R=H(R);const k=o.Nu(y);if(R instanceof lu)c.push(y);else{const x=ws(R,k);x!=null&&(c.push(y),d.set(y,x))}}const f=new zt(c);return new XA(d,f,o.fieldTransforms)}function tR(n,e,t,r=!1){return ws(t,n.Qu(r?4:3,e))}function ws(n,e){if(rR(n=H(n)))return f_("Unsupported field value:",e,n),nR(n,e);if(n instanceof ys)return function(r,i){if(!ZA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ws(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=H(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:ko(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(i.serializer,s)}}if(r instanceof nd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qn)return{bytesValue:$S(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Dg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof o_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Rg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${td(r)}`)}(n,e)}function nR(n,e){const t={};return hS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(n,(r,i)=>{const s=ws(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function rR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof nd||n instanceof qn||n instanceof be||n instanceof ys||n instanceof o_)}function f_(n,e,t){if(!rR(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=td(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function sm(n,e,t){if((e=H(e))instanceof di)return e._internalPath;if(typeof e=="string")return p_(n,e);throw _h("Field path arguments must be of type string or ",n,!1,void 0,t)}const KV=new RegExp("[~\\*/\\[\\]]");function p_(n,e,t){if(e.search(KV)>=0)throw _h(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new di(...e.split("."))._internalPath}catch{throw _h(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _h(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new L(V.INVALID_ARGUMENT,a+n+u)}function iR(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Bl{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HV extends Bl{data(){return super.data()}}function sd(n,e){return typeof e=="string"?p_(n,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
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
 */function sR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class m_{}class uu extends m_{}function Vr(n,e,...t){let r=[];e instanceof m_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof g_).length,a=s.filter(u=>u instanceof od).length;if(o>1||o>0&&a>0)throw new L(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class od extends uu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new od(e,t,r)}_apply(e){const t=this._parse(e);return aR(e._query,t),new xt(e.firestore,e.converter,Gp(e._query,t))}_parse(e){const t=vs(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){TI(f,d);const y=[];for(const R of f)y.push(EI(u,s,R));m={arrayValue:{values:y}}}else m=EI(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||TI(f,d),m=tR(a,o,f,d==="in"||d==="not-in");return ie.create(c,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function QV(n,e,t){const r=e,i=sd("where",n);return od._create(i,r,t)}class g_ extends m_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new g_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ce.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)aR(o,u),o=Gp(o,u)}(e._query,t),new xt(e.firestore,e.converter,Gp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class __ extends uu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new __(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new L(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vl(s,o)}(e._query,this._field,this._direction);return new xt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Er(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function YV(n,e="asc"){const t=e,r=sd("orderBy",n);return __._create(r,t)}class ad extends uu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ad(e,t,r)}_apply(e){return new xt(e.firestore,e.converter,uh(e._query,this._limit,this._limitType))}}function JV(n){return $A("limit",n),ad._create("limit",n,"F")}function XV(n){return $A("limitToLast",n),ad._create("limitToLast",n,"L")}class ld extends uu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ld(e,t,r)}_apply(e){const t=oR(e,this.type,this._docOrFields,this._inclusive);return new xt(e.firestore,e.converter,function(i,s){return new Er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function ZV(...n){return ld._create("startAt",n,!0)}function eO(...n){return ld._create("startAfter",n,!1)}class ud extends uu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ud(e,t,r)}_apply(e){const t=oR(e,this.type,this._docOrFields,this._inclusive);return new xt(e.firestore,e.converter,function(i,s){return new Er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function tO(...n){return ud._create("endBefore",n,!1)}function nO(...n){return ud._create("endAt",n,!0)}function oR(n,e,t,r){if(t[0]=H(t[0]),t[0]instanceof Bl)return function(s,o,a,u,c){if(!u)throw new L(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of so(s))if(f.field.isKeyField())d.push(rs(o,u.key));else{const m=u.data.field(f.field);if(qh(m))throw new L(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new L(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new ci(d,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=vs(n.firestore);return function(o,a,u,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new L(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let R=0;R<d.length;R++){const k=d[R];if(m[R].field.isKeyField()){if(typeof k!="string")throw new L(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!Sg(o)&&k.indexOf("/")!==-1)throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const x=o.path.child(re.fromString(k));if(!$.isDocumentKey(x))throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const T=new $(x);y.push(rs(a,T))}else{const x=tR(u,c,k);y.push(x)}}return new ci(y,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function EI(n,e,t){if(typeof(t=H(t))=="string"){if(t==="")throw new L(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sg(e)&&t.indexOf("/")!==-1)throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(re.fromString(t));if(!$.isDocumentKey(r))throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rs(n,new $(r))}if(t instanceof be)return rs(n,t._key);throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${td(t)}.`)}function TI(n,e){if(!Array.isArray(n)||n.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aR(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class y_{convertValue(e,t="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _s(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ee(o.doubleValue));return new o_(s)}convertGeoPoint(e){return new nd(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Eg(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Nl(e));default:return null}}convertTimestamp(e){const t=_r(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);Q(eA(r));const i=new li(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(t)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function cd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class rO extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}/**
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
 */class ji{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let yr=class extends Bl{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(sd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},rl=class extends yr{data(e={}){return super.data(e)}},fi=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new rl(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new rl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ji(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new rl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ji(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:iO(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function iO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}function lR(n,e){return n instanceof yr&&e instanceof yr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof fi&&e instanceof fi&&n._firestore===e._firestore&&QA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function sO(n){n=le(n,be);const e=le(n.firestore,We);return UA(Et(e),n._key).then(t=>v_(e,n,t))}class Is extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function oO(n){n=le(n,be);const e=le(n.firestore,We),t=Et(e),r=new Is(e);return PV(t,n._key).then(i=>new yr(e,r,n._key,i,new ji(i!==null&&i.hasLocalMutations,!0),n.converter))}function aO(n){n=le(n,be);const e=le(n.firestore,We);return UA(Et(e),n._key,{source:"server"}).then(t=>v_(e,n,t))}function uR(n){n=le(n,xt);const e=le(n.firestore,We),t=Et(e),r=new Is(e);return sR(n._query),BA(t,n._query).then(i=>new fi(e,r,n,i))}function lO(n){n=le(n,xt);const e=le(n.firestore,We),t=Et(e),r=new Is(e);return kV(t,n._query).then(i=>new fi(e,r,n,i))}function uO(n){n=le(n,xt);const e=le(n.firestore,We),t=Et(e),r=new Is(e);return BA(t,n._query,{source:"server"}).then(i=>new fi(e,r,n,i))}function SI(n,e,t){n=le(n,be);const r=le(n.firestore,We),i=cd(n.converter,e,t);return cu(r,[id(vs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ae.none())])}function AI(n,e,t,...r){n=le(n,be);const i=le(n.firestore,We),s=vs(i);let o;return o=typeof(e=H(e))=="string"||e instanceof di?d_(s,"updateDoc",n._key,e,t,r):h_(s,"updateDoc",n._key,e),cu(i,[o.toMutation(n._key,Ae.exists(!0))])}function cR(n){return cu(le(n.firestore,We),[new Ko(n._key,Ae.none())])}function cO(n,e){const t=le(n.firestore,We),r=Ul(n),i=cd(n.converter,e);return cu(t,[id(vs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function hR(n,...e){var t,r,i;n=H(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||im(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(im(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(n instanceof be)c=le(n.firestore,We),d=Wo(n._key.path),u={next:f=>{e[o]&&e[o](v_(c,n,f))},error:e[o+1],complete:e[o+2]};else{const f=le(n,xt);c=le(f.firestore,We),d=f._query;const m=new Is(c);u={next:y=>{e[o]&&e[o](new fi(c,m,f,y))},error:e[o+1],complete:e[o+2]},sR(n._query)}return function(m,y,R,k){const x=new Zh(k),T=new Qg(y,x,R);return m.asyncQueue.enqueueAndForget(async()=>Gg(await Vo(m),T)),()=>{x.Za(),m.asyncQueue.enqueueAndForget(async()=>Kg(await Vo(m),T))}}(Et(c),d,a,u)}function hO(n,e){return CV(Et(n=le(n,We)),im(e)?e:{next:e})}function cu(n,e){return function(r,i){const s=new ct;return r.asyncQueue.enqueueAndForget(async()=>rV(await r_(r),i,s)),s.promise}(Et(n),e)}function v_(n,e,t){const r=t.docs.get(e._key),i=new Is(n);return new yr(n,i,e._key,r,new ji(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const dO={maxAttempts:5};/**
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
 */let fO=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=vs(e)}set(e,t,r){this._verifyNotCommitted();const i=zr(e,this._firestore),s=cd(i.converter,t,r),o=id(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ae.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=zr(e,this._firestore);let o;return o=typeof(t=H(t))=="string"||t instanceof di?d_(this._dataReader,"WriteBatch.update",s._key,t,r,i):h_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=zr(e,this._firestore);return this._mutations=this._mutations.concat(new Ko(t._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function zr(n,e){if((n=H(n)).firestore!==e)throw new L(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let pO=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=vs(t)}get(t){const r=zr(t,this._firestore),i=new rO(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return G();const o=s[0];if(o.isFoundDocument())return new Bl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Bl(this._firestore,i,r._key,null,r.converter);throw G()})}set(t,r,i){const s=zr(t,this._firestore),o=cd(s.converter,r,i),a=id(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=zr(t,this._firestore);let a;return a=typeof(r=H(r))=="string"||r instanceof di?d_(this._dataReader,"Transaction.update",o._key,r,i,s):h_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=zr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=zr(e,this._firestore),r=new Is(this._firestore);return super.get(e).then(i=>new yr(this._firestore,r,t._key,i._document,new ji(!1,!1),t.converter))}};function mO(n,e,t){n=le(n,We);const r=Object.assign(Object.assign({},dO),t);return function(s){if(s.maxAttempts<1)throw new L(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new ct;return s.asyncQueue.enqueueAndForget(async()=>{const c=await SV(s);new EV(s.asyncQueue,c,a,o,u).au()}),u.promise}(Et(n),i=>e(new pO(n,i)),r)}/**
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
 */function gO(){return new lu("deleteField")}function _O(){return new a_("serverTimestamp")}function yO(...n){return new l_("arrayUnion",n)}function vO(...n){return new u_("arrayRemove",n)}function wO(n){return new c_("increment",n)}(function(e,t=!0){(function(i){qo=i})(Ir),gr(new mn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new We(new P1(r.getProvider("auth-internal")),new N1(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Xt(pw,"4.7.3",e),Xt(pw,"4.7.3","esm2017")})();/**
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
 */class IO{constructor(e,t){this._delegate=e,this.firebase=t,Rl(e,new mn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),_g(this._delegate)))}_getService(e,t=ii){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ii){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Rl(this._delegate,e)}_addOrOverwriteComponent(e){U0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const EO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},RI=new gs("app-compat","Firebase",EO);/**
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
 */function TO(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Xt,setLogLevel:$0,onLog:j0,apps:null,SDK_VERSION:Ir,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:E1}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ii,!sw(e,c))throw RI.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,d={}){const f=gg(c,d);if(sw(e,f.name))return e[f.name];const m=new n(f,t);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(gr(c)&&c.type==="PUBLIC"){const m=(y=i())=>{if(typeof y[f]!="function")throw RI.create("invalid-app-argument",{appName:d});return y[f]()};c.serviceProps!==void 0&&ih(m,c.serviceProps),t[f]=m,n.prototype[f]=function(...y){return this._getService.bind(this,d).apply(this,c.multipleInstances?y:[])}}return c.type==="PUBLIC"?t[f]:null}function u(c,d){return d==="serverAuth"?null:d}return t}/**
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
 */function dR(){const n=TO(IO);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:dR,extendNamespace:e,createSubscribe:V0,ErrorFactory:gs,deepExtend:ih});function e(t){ih(n,t)}return n}const SO=dR();/**
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
 */const PI=new zh("@firebase/app-compat"),AO="@firebase/app-compat",RO="0.2.43";/**
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
 */function PO(n){Xt(AO,RO,n)}/**
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
 */try{const n=S0();if(n.firebase!==void 0){PI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&PI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Es=SO;PO();var kO="firebase",CO="10.14.1";/**
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
 */Es.registerVersion(kO,CO,"app-compat");function w_(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Ca={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},xs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function bO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function fR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NO=bO,DO=fR,pR=new gs("auth","Firebase",fR());/**
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
 */const yh=new zh("@firebase/auth");function xO(n,...e){yh.logLevel<=te.WARN&&yh.warn(`Auth (${Ir}): ${n}`,...e)}function Cc(n,...e){yh.logLevel<=te.ERROR&&yh.error(`Auth (${Ir}): ${n}`,...e)}/**
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
 */function it(n,...e){throw E_(n,...e)}function Je(n,...e){return E_(n,...e)}function I_(n,e,t){const r=Object.assign(Object.assign({},DO()),{[e]:t});return new gs("auth","Firebase",r).create(e,{appName:n.name})}function rt(n){return I_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&it(n,"argument-error"),I_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E_(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return pR.create(n,...e)}function z(n,e,...t){if(!n)throw E_(e,...t)}function Ln(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Cc(e),new Error(e)}function An(n,e){n||Ln(e)}/**
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
 */function zl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function T_(){return kI()==="http:"||kI()==="https:"}function kI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function VO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(T_()||N0()||"connection"in navigator)?navigator.onLine:!0}function OO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class hu{constructor(e,t){this.shortDelay=e,this.longDelay=t,An(t>e,"Short delay should be less than long delay!"),this.isMobile=nN()||fg()}get(){return VO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function S_(n,e){An(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class mR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MO=new hu(3e4,6e4);function Ue(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Be(n,e,t,r,i={}){return gR(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=jo(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return iN()||(c.referrerPolicy="no-referrer"),mR.fetch()(_R(n,n.config.apiHost,t,a),c)})}async function gR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},LO),e);try{const i=new UO(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ja(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ja(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw ja(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw I_(n,d,c);it(n,d)}}catch(i){if(i instanceof wt)throw i;it(n,"network-request-failed",{message:String(i)})}}async function Ar(n,e,t,r,i={}){const s=await Be(n,e,t,r,i);return"mfaPendingCredential"in s&&it(n,"multi-factor-auth-required",{_serverResponse:s}),s}function _R(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?S_(n.config,i):`${n.config.apiScheme}://${i}`}function FO(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),MO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ja(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Je(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function CI(n){return n!==void 0&&n.getResponse!==void 0}function bI(n){return n!==void 0&&n.enterprise!==void 0}class BO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return FO(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function zO(n){return(await Be(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function jO(n,e){return Be(n,"GET","/v2/recaptchaConfig",Ue(n,e))}/**
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
 */async function $O(n,e){return Be(n,"POST","/v1/accounts:delete",e)}async function qO(n,e){return Be(n,"POST","/v1/accounts:update",e)}async function yR(n,e){return Be(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function il(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WO(n,e=!1){const t=H(n),r=await t.getIdToken(e),i=hd(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:il(Vf(i.auth_time)),issuedAtTime:il(Vf(i.iat)),expirationTime:il(Vf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vf(n){return Number(n)*1e3}function hd(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=T0(t);return i?JSON.parse(i):(Cc("Failed to decode base64 JWT payload"),null)}catch(i){return Cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function NI(n){const e=hd(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&GO(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function GO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class KO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class om{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vr(n,yR(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vR(s.providerUserInfo):[],a=QO(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new om(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function HO(n){const e=H(n);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QO(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vR(n){return n.map(e=>{var{providerId:t}=e,r=w_(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YO(n,e){const t=await gR(n,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=_R(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JO(n,e){return Be(n,"POST","/v2/accounts:revokeToken",Ue(n,e))}/**
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
 */class ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=NI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await YO(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ao;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ao,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function Or(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=w_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new om(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WO(this,e)}reload(){return HO(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await vr(this,$O(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,x=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=t.createdAt)!==null&&c!==void 0?c:void 0,v=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:D,isAnonymous:U,providerData:F,stsTokenManager:w}=t;z(E&&w,e,"internal-error");const _=ao.fromJSON(this.name,w);z(typeof E=="string",e,"internal-error"),Or(f,e.name),Or(m,e.name),z(typeof D=="boolean",e,"internal-error"),z(typeof U=="boolean",e,"internal-error"),Or(y,e.name),Or(R,e.name),Or(k,e.name),Or(x,e.name),Or(T,e.name),Or(v,e.name);const I=new sr({uid:E,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:U,photoURL:R,phoneNumber:y,tenantId:k,stsTokenManager:_,createdAt:T,lastLoginAt:v});return F&&Array.isArray(F)&&(I.providerData=F.map(S=>Object.assign({},S))),x&&(I._redirectEventId=x),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new ao;i.updateFromServerResponse(t);const s=new sr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ao;a.updateFromIdToken(r);const u=new sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new om(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const DI=new Map;function Yt(n){An(n instanceof Function,"Expected a class definition");let e=DI.get(n);return e?(An(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,DI.set(n,e),e)}/**
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
 */class wR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wR.type="NONE";const Oo=wR;/**
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
 */function Hi(n,e,t){return`firebase:${n}:${e}:${t}`}class lo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new lo(Yt(Oo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Yt(Oo);const o=Hi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const f=sr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new lo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new lo(s,e,r))}}/**
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
 */function xI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AR(e))return"Blackberry";if(RR(e))return"Webos";if(ER(e))return"Safari";if((e.includes("chrome/")||TR(e))&&!e.includes("edge/"))return"Chrome";if(du(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IR(n=De()){return/firefox\//i.test(n)}function ER(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TR(n=De()){return/crios\//i.test(n)}function SR(n=De()){return/iemobile/i.test(n)}function du(n=De()){return/android/i.test(n)}function AR(n=De()){return/blackberry/i.test(n)}function RR(n=De()){return/webos/i.test(n)}function fu(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function XO(n=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function ZO(n=De()){var e;return fu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eL(){return D0()&&document.documentMode===10}function PR(n=De()){return fu(n)||du(n)||RR(n)||AR(n)||/windows phone/i.test(n)||SR(n)}/**
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
 */function kR(n,e=[]){let t;switch(n){case"Browser":t=xI(De());break;case"Worker":t=`${xI(De())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ir}/${r}`}/**
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
 */class tL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nL(n,e={}){return Be(n,"GET","/v2/passwordPolicy",Ue(n,e))}/**
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
 */const rL=6;class iL{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:rL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sL{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VI(this),this.idTokenSubscription=new VI(this),this.beforeStateQueue=new tL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await lo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yR(this,{idToken:e}),r=await sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(rt(this));const t=e?H(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nL(this),t=new iL(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await JO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[Yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Fe(n){return H(n)}class VI{constructor(e){this.auth=e,this.observer=null,this.addObserver=V0(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oL(n){pu=n}function A_(n){return pu.loadJS(n)}function aL(){return pu.recaptchaV2Script}function lL(){return pu.recaptchaEnterpriseScript}function uL(){return pu.gapiScript}function CR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const cL="recaptcha-enterprise",hL="NO_RECAPTCHA";class dL{constructor(e){this.type=cL,this.auth=Fe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new BO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;bI(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(hL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&bI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lL();u.length!==0&&(u+=a),A_(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function OI(n,e,t,r=!1){const i=new dL(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $l(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await OI(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await OI(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
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
 */function fL(n,e){const t=$o(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(wo(s,e??{}))return i;it(i,"already-initialized")}return t.initialize({options:e})}function pL(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Yt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bR(n,e,t){const r=Fe(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=NR(e),{host:o,port:a}=mL(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gL()}function NR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mL(n){const e=NR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:LI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:LI(o)}}}function LI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gL(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,t){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
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
 */async function DR(n,e){return Be(n,"POST","/v1/accounts:resetPassword",Ue(n,e))}async function _L(n,e){return Be(n,"POST","/v1/accounts:update",e)}async function yL(n,e){return Be(n,"POST","/v1/accounts:signUp",e)}async function vL(n,e){return Be(n,"POST","/v1/accounts:update",Ue(n,e))}/**
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
 */async function wL(n,e){return Ar(n,"POST","/v1/accounts:signInWithPassword",Ue(n,e))}async function dd(n,e){return Be(n,"POST","/v1/accounts:sendOobCode",Ue(n,e))}async function IL(n,e){return dd(n,e)}async function EL(n,e){return dd(n,e)}async function TL(n,e){return dd(n,e)}async function SL(n,e){return dd(n,e)}/**
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
 */async function AL(n,e){return Ar(n,"POST","/v1/accounts:signInWithEmailLink",Ue(n,e))}async function RL(n,e){return Ar(n,"POST","/v1/accounts:signInWithEmailLink",Ue(n,e))}/**
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
 */class ql extends Zo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ql(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ql(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,t,"signInWithPassword",wL);case"emailLink":return AL(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,r,"signUpPassword",yL);case"emailLink":return RL(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ur(n,e){return Ar(n,"POST","/v1/accounts:signInWithIdp",Ue(n,e))}/**
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
 */const PL="http://localhost";class Wn extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=w_(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ur(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ur(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ur(e,t)}buildRequest(){const e={requestUri:PL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jo(t)}return e}}/**
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
 */async function kL(n,e){return Be(n,"POST","/v1/accounts:sendVerificationCode",Ue(n,e))}async function CL(n,e){return Ar(n,"POST","/v1/accounts:signInWithPhoneNumber",Ue(n,e))}async function bL(n,e){const t=await Ar(n,"POST","/v1/accounts:signInWithPhoneNumber",Ue(n,e));if(t.temporaryProof)throw ja(n,"account-exists-with-different-credential",t);return t}const NL={USER_NOT_FOUND:"user-not-found"};async function DL(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ar(n,"POST","/v1/accounts:signInWithPhoneNumber",Ue(n,t),NL)}/**
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
 */class Qi extends Zo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Qi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Qi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return CL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return bL(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return DL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Qi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function xL(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VL(n){const e=Xs(Ma(n)).link,t=e?Xs(Ma(e)).deep_link_id:null,r=Xs(Ma(n)).deep_link_id;return(r?Xs(Ma(r)).link:null)||r||t||e||n}class fd{constructor(e){var t,r,i,s,o,a;const u=Xs(Ma(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=xL((i=u.mode)!==null&&i!==void 0?i:null);z(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=VL(e);try{return new fd(t)}catch{return null}}}/**
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
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,t){return ql._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=fd.parseLink(t);return z(r,"argument-error"),ql._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ea extends Rr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class uo extends ea{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),Wn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Wn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return uo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return uo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new uo(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Cn extends ea{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return bn.credential(t,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Nn extends ea{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */const OL="http://localhost";class Lo extends Zo{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ur(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ur(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ur(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Lo(r,s)}static _create(e,t){return new Lo(e,t)}buildRequest(){return{requestUri:OL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const LL="saml.";class vh extends Rr{constructor(e){z(e.startsWith(LL),"argument-error"),super(e)}static credentialFromResult(e){return vh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return vh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Lo.fromJSON(e);return z(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Lo._create(r,t)}catch{return null}}}/**
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
 */class Dn extends ea{constructor(){super("twitter.com")}static credential(e,t){return Wn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Dn.credential(t,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function xR(n,e){return Ar(n,"POST","/v1/accounts:signUp",Ue(n,e))}/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=MI(r);return new gn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=MI(r);return new gn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function MI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function ML(n){var e;if(Le(n.app))return Promise.reject(rt(n));const t=Fe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new gn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await xR(t,{returnSecureToken:!0}),i=await gn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class wh extends wt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new wh(e,t,r,i)}}function VR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wh._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function OR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function FL(n,e){const t=H(n);await pd(!0,t,e);const{providerUserInfo:r}=await qO(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=OR(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function R_(n,e,t=!1){const r=await vr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gn._forOperation(n,"link",r)}async function pd(n,e,t){await jl(e);const r=OR(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";z(r.has(t)===n,e.auth,i)}/**
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
 */async function LR(n,e,t=!1){const{auth:r}=n;if(Le(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const s=await vr(n,VR(r,i,e,n),t);z(s.idToken,r,"internal-error");const o=hd(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),gn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
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
 */async function MR(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const r="signIn",i=await VR(n,r,e),s=await gn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function md(n,e){return MR(Fe(n),e)}async function FR(n,e){const t=H(n);return await pd(!1,t,e.providerId),R_(t,e)}async function UR(n,e){return LR(H(n),e)}/**
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
 */async function UL(n,e){return Ar(n,"POST","/v1/accounts:signInWithCustomToken",Ue(n,e))}/**
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
 */async function BL(n,e){if(Le(n.app))return Promise.reject(rt(n));const t=Fe(n),r=await UL(t,{token:e,returnSecureToken:!0}),i=await gn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class mu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?P_._fromServerResponse(e,t):"totpInfo"in t?k_._fromServerResponse(e,t):it(e,"internal-error")}}class P_ extends mu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new P_(t)}}class k_ extends mu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new k_(t)}}/**
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
 */function gd(n,e,t){var r;z(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function C_(n){const e=Fe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zL(n,e,t){const r=Fe(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&gd(r,i,t),await $l(r,i,"getOobCode",EL)}async function jL(n,e,t){await DR(H(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&C_(n),r})}async function $L(n,e){await vL(H(n),{oobCode:e})}async function BR(n,e){const t=H(n),r=await DR(t,{oobCode:e}),i=r.requestType;switch(z(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,t,"internal-error");default:z(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=mu._fromServerResponse(Fe(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function qL(n,e){const{data:t}=await BR(H(n),e);return t.email}async function WL(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=Fe(n),o=await $l(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&C_(n),u}),a=await gn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function GL(n,e,t){return Le(n.app)?Promise.reject(rt(n)):md(H(n),Ei.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&C_(n),r})}/**
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
 */async function KL(n,e,t){const r=Fe(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&gd(r,o,a)}s(i,t),await $l(r,i,"getOobCode",TL)}function HL(n,e){const t=fd.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function QL(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=H(n),i=Ei.credentialWithLink(e,t||zl());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),md(r,i)}/**
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
 */async function YL(n,e){return Be(n,"POST","/v1/accounts:createAuthUri",Ue(n,e))}/**
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
 */async function JL(n,e){const t=T_()?zl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await YL(H(n),r);return i||[]}async function XL(n,e){const t=H(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&gd(t.auth,i,e);const{email:s}=await IL(t.auth,i);s!==n.email&&await n.reload()}async function ZL(n,e,t){const r=H(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&gd(r.auth,s,t);const{email:o}=await SL(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function eM(n,e){return Be(n,"POST","/v1/accounts:update",e)}/**
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
 */async function tM(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=H(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await vr(r,eM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function nM(n,e){const t=H(n);return Le(t.auth.app)?Promise.reject(rt(t.auth)):zR(t,e,null)}function rM(n,e){return zR(H(n),null,e)}async function zR(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await vr(n,_L(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function iM(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=hd(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new co(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new sM(s,i);case"github.com":return new oM(s,i);case"google.com":return new aM(s,i);case"twitter.com":return new lM(s,i,n.screenName||null);case"custom":case"anonymous":return new co(s,null);default:return new co(s,r,i)}}class co{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class jR extends co{constructor(e,t,r,i){super(e,t,r),this.username=i}}class sM extends co{constructor(e,t){super(e,"facebook.com",t)}}class oM extends jR{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class aM extends co{constructor(e,t){super(e,"google.com",t)}}class lM extends jR{constructor(e,t,r){super(e,"twitter.com",t,r)}}function uM(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:iM(t)}function cM(n,e,t,r){return H(n).onIdTokenChanged(e,t,r)}function hM(n,e,t){return H(n).beforeAuthStateChanged(e,t)}/**
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
 */class $i{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new $i("enroll",e,t)}static _fromMfaPendingCredential(e){return new $i("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return $i._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return $i._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class b_{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Fe(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>mu._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=$i._fromMfaPendingCredential(i.mfaPendingCredential);return new b_(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const d=await gn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return z(t.user,r,"internal-error"),gn._forOperation(t.user,t.operationType,c);default:it(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function dM(n,e){var t;const r=H(n),i=e;return z(e.customData.operationType,r,"argument-error"),z((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),b_._fromError(r,i)}/**
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
 */function fM(n,e){return Be(n,"POST","/v2/accounts/mfaEnrollment:start",Ue(n,e))}function pM(n,e){return Be(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ue(n,e))}function mM(n,e){return Be(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Ue(n,e))}class N_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>mu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new N_(e)}async getSession(){return $i._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await vr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await vr(this.user,mM(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Of=new WeakMap;function gM(n){const e=H(n);return Of.has(e)||Of.set(e,N_._fromUser(e)),Of.get(e)}const Ih="__sak";/**
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
 */class $R{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ih,"1"),this.storage.removeItem(Ih),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _M=1e3,yM=10;class qR extends $R{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yM):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_M)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qR.type="LOCAL";const _d=qR;/**
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
 */class WR extends $R{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}WR.type="SESSION";const pi=WR;/**
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
 */function vM(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new yd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await vM(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yd.receivers=[];/**
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
 */function gu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class wM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=gu("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ke(){return window}function IM(n){Ke().location.href=n}/**
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
 */function D_(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function EM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TM(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function SM(){return D_()?self:null}/**
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
 */const GR="firebaseLocalStorageDb",AM=1,Eh="firebaseLocalStorage",KR="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vd(n,e){return n.transaction([Eh],e?"readwrite":"readonly").objectStore(Eh)}function RM(){const n=indexedDB.deleteDatabase(GR);return new _u(n).toPromise()}function am(){const n=indexedDB.open(GR,AM);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Eh,{keyPath:KR})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Eh)?e(r):(r.close(),await RM(),e(await am()))})})}async function FI(n,e,t){const r=vd(n,!0).put({[KR]:e,value:t});return new _u(r).toPromise()}async function PM(n,e){const t=vd(n,!1).get(e),r=await new _u(t).toPromise();return r===void 0?null:r.value}function UI(n,e){const t=vd(n,!0).delete(e);return new _u(t).toPromise()}const kM=800,CM=3;class HR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await am(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>CM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yd._getInstance(SM()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await EM(),!this.activeServiceWorker)return;this.sender=new wM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await am();return await FI(e,Ih,"1"),await UI(e,Ih),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>FI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>PM(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>UI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vd(i,!1).getAll();return new _u(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HR.type="LOCAL";const Mo=HR;/**
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
 */function bM(n,e){return Be(n,"POST","/v2/accounts/mfaSignIn:start",Ue(n,e))}function NM(n,e){return Be(n,"POST","/v2/accounts/mfaSignIn:finalize",Ue(n,e))}/**
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
 */const DM=500,xM=6e4,sc=1e12;class VM{constructor(e){this.auth=e,this.counter=sc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new OM(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||sc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||sc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||sc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class OM{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=LM(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},xM)},DM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function LM(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Lf=CR("rcb"),MM=new hu(3e4,6e4);class FM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return z(UM(t),e,"argument-error"),this.shouldResolveImmediately(t)&&CI(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Je(e,"network-request-failed"))},MM.get());Ke()[Lf]=()=>{Ke().clearTimeout(s),delete Ke()[Lf];const a=Ke().grecaptcha;if(!a||!CI(a)){i(Je(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=t,r(a)};const o=`${aL()}?${jo({onload:Lf,render:"explicit",hl:t})}`;A_(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ke().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function UM(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class BM{async load(e){return new VM(e)}clearedOneInstance(){}}/**
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
 */const QR="recaptcha",zM={theme:"light",type:"image"};let jM=class{constructor(e,t,r=Object.assign({},zM)){this.parameters=r,this.type=QR,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new BM:new FM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(T_()&&!D_(),this.auth,"internal-error"),await $M(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await zO(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function $M(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class x_{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Qi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function qM(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=Fe(n),i=await wd(r,e,H(t));return new x_(i,s=>md(r,s))}async function WM(n,e,t){const r=H(n);await pd(!1,r,"phone");const i=await wd(r.auth,e,H(t));return new x_(i,s=>FR(r,s))}async function GM(n,e,t){const r=H(n);if(Le(r.auth.app))return Promise.reject(rt(r.auth));const i=await wd(r.auth,e,H(t));return new x_(i,s=>UR(r,s))}async function wd(n,e,t){var r;const i=await t.verify();try{z(typeof i=="string",n,"argument-error"),z(t.type===QR,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",n,"internal-error"),(await fM(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,n,"missing-multi-factor-info"),(await bM(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await kL(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function KM(n,e){const t=H(n);if(Le(t.auth.app))return Promise.reject(rt(t.auth));await R_(t,e)}/**
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
 */let cs=class bc{constructor(e){this.providerId=bc.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,t){return wd(this.auth,e,H(t))}static credential(e,t){return Qi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bc.credentialFromTaggedObject(t)}static credentialFromError(e){return bc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Qi._fromTokenResponse(t,r):null}};cs.PROVIDER_ID="phone";cs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ts(n,e){return e?Yt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class V_ extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HM(n){return MR(n.auth,new V_(n),n.bypassAuthState)}function QM(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),LR(t,new V_(n),n.bypassAuthState)}async function YM(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),R_(t,new V_(n),n.bypassAuthState)}/**
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
 */class YR{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HM;case"linkViaPopup":case"linkViaRedirect":return YM;case"reauthViaPopup":case"reauthViaRedirect":return QM;default:it(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JM=new hu(2e3,1e4);async function XM(n,e,t){if(Le(n.app))return Promise.reject(Je(n,"operation-not-supported-in-this-environment"));const r=Fe(n);Xo(n,e,Rr);const i=Ts(r,t);return new or(r,"signInViaPopup",e,i).executeNotNull()}async function ZM(n,e,t){const r=H(n);if(Le(r.auth.app))return Promise.reject(Je(r.auth,"operation-not-supported-in-this-environment"));Xo(r.auth,e,Rr);const i=Ts(r.auth,t);return new or(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function e2(n,e,t){const r=H(n);Xo(r.auth,e,Rr);const i=Ts(r.auth,t);return new or(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class or extends YR{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JM.get())};e()}}or.currentPopupAction=null;/**
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
 */const t2="pendingRedirect",sl=new Map;class n2 extends YR{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await r2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r2(n,e){const t=XR(e),r=JR(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function O_(n,e){return JR(n)._set(XR(e),"true")}function i2(){sl.clear()}function L_(n,e){sl.set(n._key(),e)}function JR(n){return Yt(n._redirectPersistence)}function XR(n){return Hi(t2,n.config.apiKey,n.name)}/**
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
 */function s2(n,e,t){return o2(n,e,t)}async function o2(n,e,t){if(Le(n.app))return Promise.reject(rt(n));const r=Fe(n);Xo(n,e,Rr),await r._initializationPromise;const i=Ts(r,t);return await O_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function a2(n,e,t){return l2(n,e,t)}async function l2(n,e,t){const r=H(n);if(Xo(r.auth,e,Rr),Le(r.auth.app))return Promise.reject(rt(r.auth));await r.auth._initializationPromise;const i=Ts(r.auth,t);await O_(i,r.auth);const s=await ZR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function u2(n,e,t){return c2(n,e,t)}async function c2(n,e,t){const r=H(n);Xo(r.auth,e,Rr),await r.auth._initializationPromise;const i=Ts(r.auth,t);await pd(!1,r,e.providerId),await O_(i,r.auth);const s=await ZR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function h2(n,e){return await Fe(n)._initializationPromise,Id(n,e,!1)}async function Id(n,e,t=!1){if(Le(n.app))return Promise.reject(rt(n));const r=Fe(n),i=Ts(r,e),o=await new n2(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function ZR(n){const e=gu(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const d2=10*60*1e3;class eP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tP(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d2&&this.cachedEventUids.clear(),this.cachedEventUids.has(BI(e))}saveEventToCache(e){this.cachedEventUids.add(BI(e)),this.lastProcessedEventTime=Date.now()}}function BI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function tP({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tP(n);default:return!1}}/**
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
 */async function nP(n,e={}){return Be(n,"GET","/v1/projects",e)}/**
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
 */const p2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m2=/^https?/;async function g2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nP(n);for(const t of e)try{if(_2(t))return}catch{}it(n,"unauthorized-domain")}function _2(n){const e=zl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!m2.test(t))return!1;if(p2.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const y2=new hu(3e4,6e4);function zI(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function v2(n){return new Promise((e,t)=>{var r,i,s;function o(){zI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zI(),t(Je(n,"network-request-failed"))},timeout:y2.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=CR("iframefcb");return Ke()[a]=()=>{gapi.load?o():t(Je(n,"network-request-failed"))},A_(`${uL()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Nc=null,e})}let Nc=null;function w2(n){return Nc=Nc||v2(n),Nc}/**
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
 */const I2=new hu(5e3,15e3),E2="__/auth/iframe",T2="emulator/auth/iframe",S2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R2(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?S_(e,T2):`https://${n.config.authDomain}/${E2}`,r={apiKey:e.apiKey,appName:n.name,v:Ir},i=A2.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${jo(r).slice(1)}`}async function P2(n){const e=await w2(n),t=Ke().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:R2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(n,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},I2.get());function u(){Ke().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const k2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C2=500,b2=600,N2="_blank",D2="http://localhost";class jI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x2(n,e,t,r=C2,i=b2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},k2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=De().toLowerCase();t&&(a=TR(c)?N2:t),IR(c)&&(e=e||D2,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[y,R])=>`${m}${y}=${R},`,"");if(ZO(c)&&a!=="_self")return V2(e||"",a),new jI(null);const f=window.open(e||"",a,d);z(f,n,"popup-blocked");try{f.focus()}catch{}return new jI(f)}function V2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const O2="__/auth/handler",L2="emulator/auth/handler",M2=encodeURIComponent("fac");async function lm(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ir,eventId:i};if(e instanceof Rr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",uN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof ea){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await n._getAppCheckToken(),c=u?`#${M2}=${encodeURIComponent(u)}`:"";return`${F2(n)}?${jo(a).slice(1)}${c}`}function F2({config:n}){return n.emulator?S_(n,L2):`https://${n.authDomain}/${O2}`}/**
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
 */const Mf="webStorageSupport";class U2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pi,this._completeRedirectFn=Id,this._overrideRedirectResult=L_}async _openPopup(e,t,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lm(e,t,r,zl(),i);return x2(e,o,gu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await lm(e,t,r,zl(),i);return IM(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await P2(e),r=new eP(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mf,{type:Mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mf];o!==void 0&&t(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=g2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return PR()||ER()||fu()}}const rP=U2;class B2{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ln("unexpected MultiFactorSessionType")}}}class M_ extends B2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new M_(e)}_finalizeEnroll(e,t,r){return pM(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return NM(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class iP{constructor(){}static assertion(e){return M_._fromCredential(e)}}iP.FACTOR_ID="phone";var $I="@firebase/auth",qI="1.7.9";/**
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
 */class z2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function j2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $2(n){gr(new mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kR(n)},c=new sL(r,i,s,u);return pL(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gr(new mn("auth-internal",e=>{const t=Fe(e.getProvider("auth").getImmediate());return(r=>new z2(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt($I,qI,j2(n)),Xt($I,qI,"esm2017")}/**
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
 */const q2=5*60,W2=k0("authIdTokenMaxAge")||q2;let WI=null;const G2=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>W2)return;const i=t==null?void 0:t.token;WI!==i&&(WI=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K2(n=jh()){const e=$o(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fL(n,{popupRedirectResolver:rP,persistence:[Mo,_d,pi]}),r=k0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=G2(s.toString());hM(t,o,()=>o(t.currentUser)),cM(t,a=>o(a))}}const i=A0("auth");return i&&bR(t,`http://${i}`),t}function H2(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oL({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",H2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$2("Browser");/**
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
 */function hs(){return window}/**
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
 */const Q2=2e3;async function Y2(n,e,t){var r;const{BuildInfo:i}=hs();An(e.sessionId,"AuthEvent did not contain a session ID");const s=await tF(e.sessionId),o={};return fu()?o.ibi=i.packageName:du()?o.apn=i.packageName:it(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,lm(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function J2(n){const{BuildInfo:e}=hs(),t={};fu()?t.iosBundleId=e.packageName:du()?t.androidPackageName=e.packageName:it(n,"operation-not-supported-in-this-environment"),await nP(n,t)}function X2(n){const{cordova:e}=hs();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,XO()?"_blank":"_system","location=yes"),t(i)})})}async function Z2(n,e,t){const{cordova:r}=hs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(Je(n,"redirect-cancelled-by-user"))},Q2))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),du()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function eF(n){var e,t,r,i,s,o,a,u,c,d;const f=hs();z(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((t=f==null?void 0:f.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((u=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function tF(n){const e=nF(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function nF(n){if(An(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const rF=20;class iF extends eP{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function sF(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:lF(),postBody:null,tenantId:n.tenantId,error:Je(n,"no-auth-event")}}function oF(n,e){return um()._set(cm(n),e)}async function GI(n){const e=await um()._get(cm(n));return e&&await um()._remove(cm(n)),e}function aF(n,e){var t,r;const i=cF(e);if(i.includes("/__/auth/callback")){const s=Dc(i),o=s.firebaseError?uF(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Je(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function lF(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<rF;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function um(){return Yt(_d)}function cm(n){return Hi("authEvent",n.config.apiKey,n.name)}function uF(n){try{return JSON.parse(n)}catch{return null}}function cF(n){const e=Dc(n),t=e.link?decodeURIComponent(e.link):void 0,r=Dc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Dc(i).link||i||r||t||n}function Dc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Xs(t.join("?"))}/**
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
 */const hF=500;class dF{constructor(){this._redirectPersistence=pi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Id,this._overrideRedirectResult=L_}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new iF(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){it(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){eF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),i2(),await this._originValidation(e);const o=sF(e,r,i);await oF(e,o);const a=await Y2(e,o,t),u=await X2(a);return Z2(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=J2(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=hs(),o=setTimeout(async()=>{await GI(e),t.onEvent(KI())},hF),a=async d=>{clearTimeout(o);const f=await GI(e);let m=null;f&&(d!=null&&d.url)&&(m=aF(f,d.url)),t.onEvent(m||KI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;hs().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof u=="function")try{u(d)}catch(f){console.error(f)}}}}const fF=dF;function KI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
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
 */function pF(n,e){Fe(n)._logFramework(e)}var mF="@firebase/auth-compat",gF="0.5.14";/**
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
 */const _F=1e3;function ol(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function yF(){return ol()==="http:"||ol()==="https:"}function sP(n=De()){return!!((ol()==="file:"||ol()==="ionic:"||ol()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function vF(){return fg()||dg()}function wF(){return D0()&&(document==null?void 0:document.documentMode)===11}function IF(n=De()){return/Edge\/\d+/.test(n)}function EF(n=De()){return wF()||IF(n)}function oP(){try{const n=self.localStorage,e=gu();if(n)return n.setItem(e,"1"),n.removeItem(e),EF()?Al():!0}catch{return F_()&&Al()}return!1}function F_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ff(){return(yF()||N0()||sP())&&!vF()&&oP()&&!F_()}function aP(){return sP()&&typeof document<"u"}async function TF(){return aP()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},_F);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function SF(){return typeof window<"u"?window:null}/**
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
 */const Ht={LOCAL:"local",NONE:"none",SESSION:"session"},ba=z,lP="persistence";function AF(n,e){if(ba(Object.values(Ht).includes(e),n,"invalid-persistence-type"),fg()){ba(e!==Ht.SESSION,n,"unsupported-persistence-type");return}if(dg()){ba(e===Ht.NONE,n,"unsupported-persistence-type");return}if(F_()){ba(e===Ht.NONE||e===Ht.LOCAL&&Al(),n,"unsupported-persistence-type");return}ba(e===Ht.NONE||oP(),n,"unsupported-persistence-type")}async function hm(n){await n._initializationPromise;const e=uP(),t=Hi(lP,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function RF(n,e){const t=uP();if(!t)return[];const r=Hi(lP,n,e);switch(t.getItem(r)){case Ht.NONE:return[Oo];case Ht.LOCAL:return[Mo,pi];case Ht.SESSION:return[pi];default:return[]}}function uP(){var n;try{return((n=SF())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const PF=z;class Wr{constructor(){this.browserResolver=Yt(rP),this.cordovaResolver=Yt(fF),this.underlyingResolver=null,this._redirectPersistence=pi,this._completeRedirectFn=Id,this._overrideRedirectResult=L_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return aP()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return PF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await TF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function cP(n){return n.unwrap()}function kF(n){return n.wrapped()}/**
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
 */function CF(n){return hP(n)}function bF(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new NF(n,dM(n,e))}else if(r){const i=hP(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function hP(n){const{_tokenResponse:e}=n instanceof wt?n.customData:n;if(!e)return null;if(!(n instanceof wt)&&"temporaryProof"in e&&"phoneNumber"in e)return cs.credentialFromResult(n);const t=e.providerId;if(!t||t===Ca.PASSWORD)return null;let r;switch(t){case Ca.GOOGLE:r=bn;break;case Ca.FACEBOOK:r=Cn;break;case Ca.GITHUB:r=Nn;break;case Ca.TWITTER:r=Dn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Lo._create(t,a):Wn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new uo(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof wt?r.credentialFromError(n):r.credentialFromResult(n)}function Mt(n,e){return e.catch(t=>{throw t instanceof wt&&bF(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:CF(t),additionalUserInfo:uM(t),user:ar.getOrCreate(i)}})}async function dm(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Mt(n,t.confirm(r))}}class NF{constructor(e,t){this.resolver=t,this.auth=kF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mt(cP(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class ar{constructor(e){this._delegate=e,this.multiFactor=gM(e)}static getOrCreate(e){return ar.USER_MAP.has(e)||ar.USER_MAP.set(e,new ar(e)),ar.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mt(this.auth,FR(this._delegate,e))}async linkWithPhoneNumber(e,t){return dm(this.auth,WM(this._delegate,e,t))}async linkWithPopup(e){return Mt(this.auth,e2(this._delegate,e,Wr))}async linkWithRedirect(e){return await hm(Fe(this.auth)),u2(this._delegate,e,Wr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mt(this.auth,UR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return dm(this.auth,GM(this._delegate,e,t))}reauthenticateWithPopup(e){return Mt(this.auth,ZM(this._delegate,e,Wr))}async reauthenticateWithRedirect(e){return await hm(Fe(this.auth)),a2(this._delegate,e,Wr)}sendEmailVerification(e){return XL(this._delegate,e)}async unlink(e){return await FL(this._delegate,e),this}updateEmail(e){return nM(this._delegate,e)}updatePassword(e){return rM(this._delegate,e)}updatePhoneNumber(e){return KM(this._delegate,e)}updateProfile(e){return tM(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return ZL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ar.USER_MAP=new WeakMap;/**
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
 */const Na=z;class fm{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Na(r,"invalid-api-key",{appName:e.name}),Na(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Wr:void 0;this._delegate=t.initialize({options:{persistence:DF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(NO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ar.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){bR(this._delegate,e,t)}applyActionCode(e){return $L(this._delegate,e)}checkActionCode(e){return BR(this._delegate,e)}confirmPasswordReset(e,t){return jL(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Mt(this._delegate,WL(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return JL(this._delegate,e)}isSignInWithEmailLink(e){return HL(this._delegate,e)}async getRedirectResult(){Na(Ff(),this._delegate,"operation-not-supported-in-this-environment");const e=await h2(this._delegate,Wr);return e?Mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){pF(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=HI(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=HI(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return KL(this._delegate,e,t)}sendPasswordResetEmail(e,t){return zL(this._delegate,e,t||void 0)}async setPersistence(e){AF(this._delegate,e);let t;switch(e){case Ht.SESSION:t=pi;break;case Ht.LOCAL:t=await Yt(Mo)._isAvailable()?Mo:_d;break;case Ht.NONE:t=Oo;break;default:return it("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mt(this._delegate,ML(this._delegate))}signInWithCredential(e){return Mt(this._delegate,md(this._delegate,e))}signInWithCustomToken(e){return Mt(this._delegate,BL(this._delegate,e))}signInWithEmailAndPassword(e,t){return Mt(this._delegate,GL(this._delegate,e,t))}signInWithEmailLink(e,t){return Mt(this._delegate,QL(this._delegate,e,t))}signInWithPhoneNumber(e,t){return dm(this._delegate,qM(this._delegate,e,t))}async signInWithPopup(e){return Na(Ff(),this._delegate,"operation-not-supported-in-this-environment"),Mt(this._delegate,XM(this._delegate,e,Wr))}async signInWithRedirect(e){return Na(Ff(),this._delegate,"operation-not-supported-in-this-environment"),await hm(this._delegate),s2(this._delegate,e,Wr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return qL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}fm.Persistence=Ht;function HI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&ar.getOrCreate(o)),error:e,complete:t}}function DF(n,e){const t=RF(n,e);if(typeof self<"u"&&!t.includes(Mo)&&t.push(Mo),typeof window<"u")for(const r of[_d,pi])t.includes(r)||t.push(r);return t.includes(Oo)||t.push(Oo),t}/**
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
 */class U_{constructor(){this.providerId="phone",this._delegate=new cs(cP(Es.auth()))}static credential(e,t){return cs.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}U_.PHONE_SIGN_IN_METHOD=cs.PHONE_SIGN_IN_METHOD;U_.PROVIDER_ID=cs.PROVIDER_ID;/**
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
 */const xF=z;class VF{constructor(e,t,r=Es.app()){var i;xF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new jM(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const OF="auth-compat";function LF(n){n.INTERNAL.registerComponent(new mn(OF,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new fm(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:xs.EMAIL_SIGNIN,PASSWORD_RESET:xs.PASSWORD_RESET,RECOVER_EMAIL:xs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:xs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:xs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:xs.VERIFY_EMAIL}},EmailAuthProvider:Ei,FacebookAuthProvider:Cn,GithubAuthProvider:Nn,GoogleAuthProvider:bn,OAuthProvider:uo,SAMLAuthProvider:vh,PhoneAuthProvider:U_,PhoneMultiFactorGenerator:iP,RecaptchaVerifier:VF,TwitterAuthProvider:Dn,Auth:fm,AuthCredential:Zo,Error:wt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(mF,gF)}LF(Es);const MF="@firebase/firestore-compat",FF="0.3.38";/**
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
 */function B_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new L("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function QI(){if(typeof Uint8Array>"u")throw new L("unimplemented","Uint8Arrays are not available in this environment.")}function YI(){if(!rD())throw new L("unimplemented","Blobs are unavailable in Firestore in this environment.")}let dP=class pm{constructor(e){this._delegate=e}static fromBase64String(e){return YI(),new pm(qn.fromBase64String(e))}static fromUint8Array(e){return QI(),new pm(qn.fromUint8Array(e))}toBase64(){return YI(),this._delegate.toBase64()}toUint8Array(){return QI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function mm(n){return UF(n,["next","error","complete"])}function UF(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class BF{enableIndexedDbPersistence(e,t){return LV(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return MV(e._delegate)}clearIndexedDbPersistence(e){return FV(e._delegate)}}class fP{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof li||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&jn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){qA(this._delegate,e,t,r)}enableNetwork(){return BV(this._delegate)}disableNetwork(){return zV(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,jA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return UV(this._delegate)}onSnapshotsInSync(e){return hO(this._delegate,e)}get app(){if(!this._appCompat)throw new L("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Fo(this,s_(this._delegate,e))}catch(t){throw kt(t,"collection()","Firestore.collection()")}}doc(e){try{return new un(this,Ul(this._delegate,e))}catch(t){throw kt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Pt(this,DV(this._delegate,e))}catch(t){throw kt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return mO(this._delegate,t=>e(new pP(this,t)))}batch(){return Et(this._delegate),new mP(new fO(this._delegate,e=>cu(this._delegate,e)))}loadBundle(e){return jV(this._delegate,e)}namedQuery(e){return $V(this._delegate,e).then(t=>t?new Pt(this,t):null)}}class Ed extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new dP(new qn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return un.forKey(t,this.firestore,null)}}function zF(n){T1(n)}class pP{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Ed(e)}get(e){const t=qi(e);return this._delegate.get(t).then(r=>new Wl(this._firestore,new yr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=qi(e);return r?(B_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=qi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=qi(e);return this._delegate.delete(t),this}}class mP{constructor(e){this._delegate=e}set(e,t,r){const i=qi(e);return r?(B_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=qi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=qi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ds{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new rl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Gl(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ds.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new ds(e,new Ed(e),t),i.set(t,s)),s}}ds.INSTANCES=new WeakMap;class un{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ed(e)}static forPath(e,t,r){if(e.length%2!==0)throw new L("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new un(t,new be(t._delegate,r,new $(e)))}static forKey(e,t,r){return new un(t,new be(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Fo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Fo(this.firestore,s_(this._delegate,e))}catch(t){throw kt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof be?HA(this._delegate,e):!1}set(e,t){t=B_("DocumentReference.set",t);try{return t?SI(this._delegate,e,t):SI(this._delegate,e)}catch(r){throw kt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?AI(this._delegate,e):AI(this._delegate,e,t,...r)}catch(i){throw kt(i,"updateDoc()","DocumentReference.update()")}}delete(){return cR(this._delegate)}onSnapshot(...e){const t=gP(e),r=_P(e,i=>new Wl(this.firestore,new yr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return hR(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=oO(this._delegate):(e==null?void 0:e.source)==="server"?t=aO(this._delegate):t=sO(this._delegate),t.then(r=>new Wl(this.firestore,new yr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new un(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function kt(n,e,t){return n.message=n.message.replace(e,t),n}function gP(n){for(const e of n)if(typeof e=="object"&&!mm(e))return e;return{}}function _P(n,e){var t,r;let i;return mm(n[0])?i=n[0]:mm(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Wl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new un(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return lR(this._delegate,e._delegate)}}class Gl extends Wl{data(e){const t=this._delegate.data(e);return this._delegate._converter||S1(t!==void 0),t}}class Pt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ed(e)}where(e,t,r){try{return new Pt(this.firestore,Vr(this._delegate,QV(e,t,r)))}catch(i){throw kt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Pt(this.firestore,Vr(this._delegate,YV(e,t)))}catch(r){throw kt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Pt(this.firestore,Vr(this._delegate,JV(e)))}catch(t){throw kt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Pt(this.firestore,Vr(this._delegate,XV(e)))}catch(t){throw kt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Pt(this.firestore,Vr(this._delegate,ZV(...e)))}catch(t){throw kt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Pt(this.firestore,Vr(this._delegate,eO(...e)))}catch(t){throw kt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Pt(this.firestore,Vr(this._delegate,tO(...e)))}catch(t){throw kt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Pt(this.firestore,Vr(this._delegate,nO(...e)))}catch(t){throw kt(t,"endAt()","Query.endAt()")}}isEqual(e){return QA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=lO(this._delegate):(e==null?void 0:e.source)==="server"?t=uO(this._delegate):t=uR(this._delegate),t.then(r=>new gm(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=gP(e),r=_P(e,i=>new gm(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return hR(this._delegate,t,r)}withConverter(e){return new Pt(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class jF{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Gl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class gm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Pt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Gl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new jF(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Gl(this._firestore,r))})}isEqual(e){return lR(this._delegate,e._delegate)}}class Fo extends Pt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new un(this.firestore,e):null}doc(e){try{return e===void 0?new un(this.firestore,Ul(this._delegate)):new un(this.firestore,Ul(this._delegate,e))}catch(t){throw kt(t,"doc()","CollectionReference.doc()")}}add(e){return cO(this._delegate,e).then(t=>new un(this.firestore,t))}isEqual(e){return HA(this._delegate,e._delegate)}withConverter(e){return new Fo(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function qi(n){return le(n,be)}/**
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
 */class z_{constructor(...e){this._delegate=new di(...e)}static documentId(){return new z_(Se.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Fi{constructor(e){this._delegate=e}static serverTimestamp(){const e=_O();return e._methodName="FieldValue.serverTimestamp",new Fi(e)}static delete(){const e=gO();return e._methodName="FieldValue.delete",new Fi(e)}static arrayUnion(...e){const t=yO(...e);return t._methodName="FieldValue.arrayUnion",new Fi(t)}static arrayRemove(...e){const t=vO(...e);return t._methodName="FieldValue.arrayRemove",new Fi(t)}static increment(e){const t=wO(e);return t._methodName="FieldValue.increment",new Fi(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const $F={Firestore:fP,GeoPoint:nd,Timestamp:Re,Blob:dP,Transaction:pP,WriteBatch:mP,DocumentReference:un,DocumentSnapshot:Wl,Query:Pt,QueryDocumentSnapshot:Gl,QuerySnapshot:gm,CollectionReference:Fo,FieldPath:z_,FieldValue:Fi,setLogLevel:zF,CACHE_SIZE_UNLIMITED:VV};function qF(n,e){n.INTERNAL.registerComponent(new mn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},$F)))}/**
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
 */function WF(n){qF(n,(e,t)=>new fP(e,t,new BF)),n.registerVersion(MF,FF)}WF(Es);/**
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
 */const yP="firebasestorage.googleapis.com",vP="storageBucket",GF=2*60*1e3,KF=10*60*1e3,HF=1e3;/**
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
 */class xe extends wt{constructor(e,t,r=0){super(Uf(e),`Firebase Storage: ${t} (${Uf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Uf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Uf(n){return"storage/"+n}function j_(){const n="An unknown error occurred, please check the error payload for server response.";return new xe(Ie.UNKNOWN,n)}function QF(n){return new xe(Ie.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function YF(n){return new xe(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JF(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Ie.UNAUTHENTICATED,n)}function XF(){return new xe(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ZF(n){return new xe(Ie.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function wP(){return new xe(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IP(){return new xe(Ie.CANCELED,"User canceled the upload/download.")}function eU(n){return new xe(Ie.INVALID_URL,"Invalid URL '"+n+"'.")}function tU(n){return new xe(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function nU(){return new xe(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vP+"' property when initializing the app?")}function EP(){return new xe(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rU(){return new xe(Ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function iU(){return new xe(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sU(n){return new xe(Ie.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ho(n){return new xe(Ie.INVALID_ARGUMENT,n)}function TP(){return new xe(Ie.APP_DELETED,"The Firebase app was deleted.")}function SP(n){return new xe(Ie.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function al(n,e){return new xe(Ie.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Da(n){throw new xe(Ie.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class vt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=vt.makeFromUrl(e,t)}catch{return new vt(e,"")}if(r.path==="")return r;throw tU(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},k=t===yP?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",T=new RegExp(`^https?://${k}/${i}/${x}`,"i"),E=[{regex:a,indices:u,postModify:s},{regex:y,indices:R,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<E.length;D++){const U=E[D],F=U.regex.exec(e);if(F){const w=F[U.indices.bucket];let _=F[U.indices.path];_||(_=""),r=new vt(w,_),U.postModify(r);break}}if(r==null)throw eU(e);return r}}class oU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aU(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...x){c||(c=!0,e.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,n(y,u())},x)}function m(){s&&clearTimeout(s)}function y(x,...T){if(c){m();return}if(x){m(),d.call(null,x,...T);return}if(u()||o){m(),d.call(null,x,...T);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let R=!1;function k(x){R||(R=!0,m(),!c&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},t),k}function lU(n){n(!1)}/**
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
 */function uU(n){return n!==void 0}function cU(n){return typeof n=="function"}function hU(n){return typeof n=="object"&&!Array.isArray(n)}function Td(n){return typeof n=="string"||n instanceof String}function JI(n){return $_()&&n instanceof Blob}function $_(){return typeof Blob<"u"}function _m(n,e,t,r){if(r<e)throw ho(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ho(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Ti(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function AP(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Yi;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Yi||(Yi={}));/**
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
 */function RP(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class dU{constructor(e,t,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,R)=>{this.resolve_=y,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new oc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Yi.NO_ERROR,u=s.getStatus();if(!a||RP(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Yi.ABORT;r(!1,new oc(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new oc(c,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());uU(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=j_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?TP():IP();o(u)}else{const u=wP();o(u)}};this.canceled_?t(!1,new oc(!1,null,!0)):this.backoffId_=aU(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oc{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function fU(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pU(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mU(n,e){e&&(n["X-Firebase-GMPID"]=e)}function gU(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function _U(n,e,t,r,i,s,o=!0){const a=AP(n.urlParams),u=n.url+a,c=Object.assign({},n.headers);return mU(c,e),fU(c,t),pU(c,s),gU(c,r),new dU(u,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function yU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vU(...n){const e=yU();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if($_())return new Blob(n);throw new xe(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wU(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function IU(n){if(typeof atob>"u")throw sU("base-64");return atob(n)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bf{constructor(e,t){this.data=e,this.contentType=t||null}}function PP(n,e){switch(n){case cn.RAW:return new Bf(kP(e));case cn.BASE64:case cn.BASE64URL:return new Bf(CP(n,e));case cn.DATA_URL:return new Bf(TU(e),SU(e))}throw j_()}function kP(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function EU(n){let e;try{e=decodeURIComponent(n)}catch{throw al(cn.DATA_URL,"Malformed data URL.")}return kP(e)}function CP(n,e){switch(n){case cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw al(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw al(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=IU(e)}catch(i){throw i.message.includes("polyfill")?i:al(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class bP{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw al(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=AU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function TU(n){const e=new bP(n);return e.base64?CP(cn.BASE64,e.rest):EU(e.rest)}function SU(n){return new bP(n).contentType}function AU(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class tr{constructor(e,t){let r=0,i="";JI(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(JI(this.data_)){const r=this.data_,i=wU(r,e,t);return i===null?null:new tr(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new tr(r,!0)}}static getBlob(...e){if($_()){const t=e.map(r=>r instanceof tr?r.data_:r);return new tr(vU.apply(null,t))}else{const t=e.map(o=>Td(o)?PP(cn.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new tr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function q_(n){let e;try{e=JSON.parse(n)}catch{return null}return hU(e)?e:null}/**
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
 */function RU(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function PU(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function NP(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function kU(n,e){return e}class At{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||kU}}let ac=null;function CU(n){return!Td(n)||n.length<2?n:NP(n)}function Sd(){if(ac)return ac;const n=[];n.push(new At("bucket")),n.push(new At("generation")),n.push(new At("metageneration")),n.push(new At("name","fullPath",!0));function e(s,o){return CU(o)}const t=new At("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new At("size");return i.xform=r,n.push(i),n.push(new At("timeCreated")),n.push(new At("updated")),n.push(new At("md5Hash",null,!0)),n.push(new At("cacheControl",null,!0)),n.push(new At("contentDisposition",null,!0)),n.push(new At("contentEncoding",null,!0)),n.push(new At("contentLanguage",null,!0)),n.push(new At("contentType",null,!0)),n.push(new At("metadata","customMetadata",!0)),ac=n,ac}function bU(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new vt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function NU(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return bU(r,n),r}function DP(n,e,t){const r=q_(e);return r===null?null:NU(n,r,t)}function DU(n,e,t,r){const i=q_(e);if(i===null||!Td(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=n.bucket,f=n.fullPath,m="/b/"+o(d)+"/o/"+o(f),y=Ti(m,t,r),R=AP({alt:"media",token:c});return y+R})[0]}function W_(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}/**
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
 */const XI="prefixes",ZI="items";function xU(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[XI])for(const i of t[XI]){const s=i.replace(/\/$/,""),o=n._makeStorageReference(new vt(e,s));r.prefixes.push(o)}if(t[ZI])for(const i of t[ZI]){const s=n._makeStorageReference(new vt(e,i.name));r.items.push(s)}return r}function VU(n,e,t){const r=q_(t);return r===null?null:xU(n,e,r)}class Pr{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function zn(n){if(!n)throw j_()}function Ad(n,e){function t(r,i){const s=DP(n,i,e);return zn(s!==null),s}return t}function OU(n,e){function t(r,i){const s=VU(n,e,i);return zn(s!==null),s}return t}function LU(n,e){function t(r,i){const s=DP(n,i,e);return zn(s!==null),DU(s,i,n.host,n._protocol)}return t}function ta(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=XF():i=JF():t.getStatus()===402?i=YF(n.bucket):t.getStatus()===403?i=ZF(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Rd(n){const e=ta(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=QF(n.path)),s.serverResponse=i.serverResponse,s}return t}function xP(n,e,t){const r=e.fullServerUrl(),i=Ti(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Pr(i,s,Ad(n,t),o);return a.errorHandler=Rd(e),a}function MU(n,e,t,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",t.length>0&&(s.delimiter=t),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Ti(o,n.host,n._protocol),u="GET",c=n.maxOperationRetryTime,d=new Pr(a,u,OU(n,e.bucket),c);return d.urlParams=s,d.errorHandler=ta(e),d}function FU(n,e,t){const r=e.fullServerUrl(),i=Ti(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Pr(i,s,LU(n,t),o);return a.errorHandler=Rd(e),a}function UU(n,e,t,r){const i=e.fullServerUrl(),s=Ti(i,n.host,n._protocol),o="PATCH",a=W_(t,r),u={"Content-Type":"application/json; charset=utf-8"},c=n.maxOperationRetryTime,d=new Pr(s,o,Ad(n,r),c);return d.headers=u,d.body=a,d.errorHandler=Rd(e),d}function BU(n,e){const t=e.fullServerUrl(),r=Ti(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(u,c){}const a=new Pr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Rd(e),a}function zU(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function VP(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=zU(null,e)),r}function jU(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let D=0;D<2;D++)E=E+Math.random().toString().slice(2);return E}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=VP(e,r,i),d=W_(c,t),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",y=tr.getBlob(f,r,m);if(y===null)throw EP();const R={name:c.fullPath},k=Ti(s,n.host,n._protocol),x="POST",T=n.maxUploadRetryTime,v=new Pr(k,x,Ad(n,t),T);return v.urlParams=R,v.headers=o,v.body=y.uploadData(),v.errorHandler=ta(e),v}class Th{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function G_(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{zn(!1)}return zn(!!t&&(e||["active"]).indexOf(t)!==-1),t}function $U(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o=VP(e,r,i),a={name:o.fullPath},u=Ti(s,n.host,n._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=W_(o,t),m=n.maxUploadRetryTime;function y(k){G_(k);let x;try{x=k.getResponseHeader("X-Goog-Upload-URL")}catch{zn(!1)}return zn(Td(x)),x}const R=new Pr(u,c,y,m);return R.urlParams=a,R.headers=d,R.body=f,R.errorHandler=ta(e),R}function qU(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=G_(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{zn(!1)}f||zn(!1);const m=Number(f);return zn(!isNaN(m)),new Th(m,r.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,u=new Pr(t,o,s,a);return u.headers=i,u.errorHandler=ta(e),u}const eE=256*1024;function WU(n,e,t,r,i,s,o,a){const u=new Th(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw rU();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const f=u.current,m=f+d;let y="";d===0?y="finalize":c===d?y="upload, finalize":y="upload";const R={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${u.current}`},k=r.slice(f,m);if(k===null)throw EP();function x(D,U){const F=G_(D,["active","final"]),w=u.current+d,_=r.size();let I;return F==="final"?I=Ad(e,s)(D,U):I=null,new Th(w,_,F==="final",I)}const T="POST",v=e.maxUploadRetryTime,E=new Pr(t,T,x,v);return E.headers=R,E.body=k.uploadData(),E.progressCallback=a||null,E.errorHandler=ta(n),E}/**
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
 */const GU={STATE_CHANGED:"state_changed"},Ct={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function zf(n){switch(n){case"running":case"pausing":case"canceling":return Ct.RUNNING;case"paused":return Ct.PAUSED;case"success":return Ct.SUCCESS;case"canceled":return Ct.CANCELED;case"error":return Ct.ERROR;default:return Ct.ERROR}}/**
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
 */class KU{constructor(e,t,r){if(cU(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Vs(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class HU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw Da("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Da("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Da("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Da("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Da("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class QU extends HU{initXhr(){this.xhr_.responseType="text"}}function xn(){return new QU}/**
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
 */class OP{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Sd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(RP(i.status,[]))if(s)i=wP();else{this.sleepTime=Math.max(this.sleepTime*2,HF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ie.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=$U(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,xn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=qU(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,xn,t,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=eE*this._chunkMultiplier,t=new Th(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=WU(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,xn,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){eE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=xP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,xn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=jU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,xn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=IP(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=zf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new KU(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(zf(this._state)){case Ct.SUCCESS:Vs(this._resolve.bind(null,this.snapshot))();break;case Ct.CANCELED:case Ct.ERROR:const t=this._reject;Vs(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(zf(this._state)){case Ct.RUNNING:case Ct.PAUSED:e.next&&Vs(e.next.bind(e,this.snapshot))();break;case Ct.SUCCESS:e.complete&&Vs(e.complete.bind(e))();break;case Ct.CANCELED:case Ct.ERROR:e.error&&Vs(e.error.bind(e,this._error))();break;default:e.error&&Vs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class fs{constructor(e,t){this._service=e,t instanceof vt?this._location=t:this._location=vt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fs(e,t)}get root(){const e=new vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return NP(this._location.path)}get storage(){return this._service}get parent(){const e=RU(this._location.path);if(e===null)return null;const t=new vt(this._location.bucket,e);return new fs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw SP(e)}}function YU(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new OP(n,new tr(e),t)}function JU(n){const e={prefixes:[],items:[]};return LP(n,e).then(()=>e)}async function LP(n,e,t){const i=await MP(n,{pageToken:t});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await LP(n,e,i.nextPageToken)}function MP(n,e){e!=null&&typeof e.maxResults=="number"&&_m("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=MU(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,xn)}function XU(n){n._throwIfRoot("getMetadata");const e=xP(n.storage,n._location,Sd());return n.storage.makeRequestWithTokens(e,xn)}function ZU(n,e){n._throwIfRoot("updateMetadata");const t=UU(n.storage,n._location,e,Sd());return n.storage.makeRequestWithTokens(t,xn)}function e4(n){n._throwIfRoot("getDownloadURL");const e=FU(n.storage,n._location,Sd());return n.storage.makeRequestWithTokens(e,xn).then(t=>{if(t===null)throw iU();return t})}function t4(n){n._throwIfRoot("deleteObject");const e=BU(n.storage,n._location);return n.storage.makeRequestWithTokens(e,xn)}function FP(n,e){const t=PU(n._location.path,e),r=new vt(n._location.bucket,t);return new fs(n.storage,r)}/**
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
 */function n4(n){return/^[A-Za-z]+:\/\//.test(n)}function r4(n,e){return new fs(n,e)}function UP(n,e){if(n instanceof K_){const t=n;if(t._bucket==null)throw nU();const r=new fs(t,t._bucket);return e!=null?UP(r,e):r}else return e!==void 0?FP(n,e):n}function i4(n,e){if(e&&n4(e)){if(n instanceof K_)return r4(n,e);throw ho("To use ref(service, url), the first argument must be a Storage instance.")}else return UP(n,e)}function tE(n,e){const t=e==null?void 0:e[vP];return t==null?null:vt.makeFromBucketSpec(t,n)}function s4(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:C0(i,n.app.options.projectId))}class K_{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GF,this._maxUploadRetryTime=KF,this._requests=new Set,i!=null?this._bucket=vt.makeFromBucketSpec(i,this._host):this._bucket=tE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,e):this._bucket=tE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_m("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_m("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fs(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new oU(TP());{const o=_U(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const nE="@firebase/storage",rE="0.13.2";/**
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
 */const BP="storage";function o4(n,e,t){return n=H(n),YU(n,e,t)}function a4(n){return n=H(n),XU(n)}function l4(n,e){return n=H(n),ZU(n,e)}function u4(n,e){return n=H(n),MP(n,e)}function c4(n){return n=H(n),JU(n)}function h4(n){return n=H(n),e4(n)}function d4(n){return n=H(n),t4(n)}function iE(n,e){return n=H(n),i4(n,e)}function f4(n,e){return FP(n,e)}function p4(n=jh(),e){n=H(n);const r=$o(n,BP).getImmediate({identifier:e}),i=R0("storage");return i&&zP(r,...i),r}function zP(n,e,t,r={}){s4(n,e,t,r)}function m4(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new K_(t,r,i,e,Ir)}function g4(){gr(new mn(BP,m4,"PUBLIC").setMultipleInstances(!0)),Xt(nE,rE,""),Xt(nE,rE,"esm2017")}g4();/**
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
 */class lc{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class sE{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new lc(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(r=>{if(e)return e(new lc(r,this,this._ref))},t)}on(e,t,r,i){let s;return t&&(typeof t=="function"?s=o=>t(new lc(o,this,this._ref)):s={next:t.next?o=>t.next(new lc(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class oE{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new cr(e,this._service))}get items(){return this._delegate.items.map(e=>new cr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=f4(this._delegate,e);return new cr(t,this.storage)}get root(){return new cr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new cr(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new sE(o4(this._delegate,e,t),this)}putString(e,t=cn.RAW,r){this._throwIfRoot("putString");const i=PP(t,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new sE(new OP(this._delegate,new tr(i.data,!0),s),this)}listAll(){return c4(this._delegate).then(e=>new oE(e,this.storage))}list(e){return u4(this._delegate,e||void 0).then(t=>new oE(t,this.storage))}getMetadata(){return a4(this._delegate)}updateMetadata(e){return l4(this._delegate,e)}getDownloadURL(){return h4(this._delegate)}delete(){return this._throwIfRoot("delete"),d4(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw SP(e)}}/**
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
 */class jP{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(aE(e))throw ho("ref() expected a child path but got a URL, use refFromURL instead.");return new cr(iE(this._delegate,e),this)}refFromURL(e){if(!aE(e))throw ho("refFromURL() expected a full URL but got a child path, use ref() instead.");try{vt.makeFromUrl(e,this._delegate.host)}catch{throw ho("refFromUrl() expected a valid full URL but got an invalid one.")}return new cr(iE(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){zP(this._delegate,e,t,r)}}function aE(n){return/^[A-Za-z]+:\/\//.test(n)}const _4="@firebase/storage-compat",y4="0.3.12";/**
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
 */const v4="storage-compat";function w4(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("storage").getImmediate({identifier:e});return new jP(t,r)}function I4(n){const e={TaskState:Ct,TaskEvent:GU,StringFormat:cn,Storage:jP,Reference:cr};n.INTERNAL.registerComponent(new mn(v4,w4,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(_4,y4)}I4(Es);const H_=Es.initializeApp({apiKey:"AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",authDomain:"scopic-73416.firebaseapp.com",projectId:"scopic-73416",storageBucket:"scopic-73416.appspot.com",messagingSenderId:"475263107333",appId:"1:475263107333:web:27180a036864e16618376c"});K2(H_);const lE=OV(H_);p4(H_);const Q_=an.createContext(),E4=n=>{const[e,t]=an.useState([]);console.log(e);const r=s_(lE,"caza"),[i,s]=an.useState(!0);an.useEffect(()=>{uR(r).then(a=>{a.size===0&&console.log("No results!");const u=a.docs.map(c=>({id:c.id,...c.data()}));t(u)}).catch(a=>{console.log("Error searching items",a)})},[i]);const o=async a=>{const u=Ul(lE,"caza",a);try{await cR(u)}catch(c){console.error(c)}};return ue.jsx(Q_.Provider,{value:{items:e,deleteById:o,setToggle:s,toggle:i},children:n.children})},T4=({item:n})=>{const e=new Intl.DateTimeFormat("es-MX",{dateStyle:"long",timeStyle:"short"}),t=(o=0)=>e.format(new Date(o)),{deleteById:r,setToggle:i,toggle:s}=an.useContext(Q_);return ue.jsx("div",{className:"card shadow-sm ",children:ue.jsxs("div",{className:"card-body p-4 ",children:[ue.jsxs("p",{children:[" ",t(n.idDate),"  "]}),ue.jsx("hr",{}),ue.jsxs("p",{children:["Nombre: ",ue.jsx("span",{children:n.nombre})]}),ue.jsxs("p",{children:["Correo: ",ue.jsx("span",{children:n.correo})]}),ue.jsxs("p",{children:["Telefono: ",ue.jsx("span",{children:n.telefono})]}),ue.jsx("hr",{}),ue.jsx("div",{className:"btnBorrarInforme",children:ue.jsx("button",{className:"btn btn-danger mb-2 mt-2",onClick:()=>{window.confirm(`Quiere Borrar este Socio? ${n.nombre}`)&&(r(n.id),i(!s))},children:"Borrar"})})]})})},S4=()=>{const{items:n}=an.useContext(Q_),[e,t]=an.useState(0);let r=8;const[i,s]=an.useState(""),[o,a]=an.useState(!0);return ue.jsxs("div",{className:"",children:[ue.jsx("h2",{className:"listaH2",children:"Lista de Solicitudes de Inscripción"}),ue.jsx("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1",children:n.sort((u,c)=>u.idDate-c.idDate).slice(e,e+r).map((u,c)=>ue.jsx(T4,{item:u},c))}),ue.jsxs("div",{className:"sliceButtons",children:[ue.jsx("button",{className:e===0?"d-none":"button",onClick:()=>{e>0&&(t(e-r),window.scrollTo(0,0))},children:"⇦ Anterior"}),ue.jsx("button",{className:e===r||e===0?"d-none":"button",onClick:()=>{t(0),window.scrollTo(0,0)},children:"０"}),ue.jsx("button",{className:"button",onClick:()=>{n.length>e+r?(t(e+r),window.scrollTo(0,0)):(s(" No Hay Mas Socios"),setTimeout(()=>{s("")},2500))},children:"Siguiente ⇨"}),ue.jsx("span",{className:"sliceAlert",children:i}),ue.jsxs("p",{className:"sliceButtonsP",children:["De: ",e+1," a: ",n.length>e+r?e+r:n.length]}),ue.jsxs("p",{className:"sliceButtonsP",children:["Paginas de ",r," c/u "]})]})]})},A4=()=>ue.jsx(ue.Fragment,{children:ue.jsx(E4,{children:ue.jsx(S4,{})})});jf.createRoot(document.getElementById("root")).render(ue.jsx(Lk.StrictMode,{children:ue.jsx(A4,{})}));
